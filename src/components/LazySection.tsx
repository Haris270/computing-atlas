import { useEffect, useRef, useState } from "react";

type LazySectionProps = {
    children: React.ReactNode;
};

function LazySection({ children }: LazySectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className={isVisible ? "section-visible" : "section-hidden"}
        >
            {children}
        </div>
    );
}

export default LazySection;