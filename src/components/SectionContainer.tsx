import { ReactNode } from 'react';

interface SectionContainerProps {
    children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
    return (
        <div className='mx-auto max-w-[90%] lg:max-w-[84%] my-5'>
            {children}
        </div>
    );
};

export default SectionContainer;
