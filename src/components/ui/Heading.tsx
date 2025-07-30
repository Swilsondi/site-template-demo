import React from 'react';

type HeadingProps = {
  text: string;
  level?: 1 | 2 | 3;
  center?: boolean;
};

export const Heading: React.FC<HeadingProps> = ({
  text,
  level = 1,
  center = false,
}) => {
  const baseClass = center ? 'text-center' : '';
  const headingStyles = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-semibold',
    3: 'text-2xl font-medium',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${headingStyles[level]} ${baseClass} mb-4`}>{text}</Tag>;
};
