import { Box } from '@/components/Box/Box';
import { TagLink } from '@/components/TagLink/TagLink';

export const Courses = () => (
    <Box title="Курсы">
        <TagLink 
            title="Инженер по тестированию" 
            href="https://manual.qa.studio/" 
            subtitle="QA Studio" 
        />
        <TagLink 
            title="Playwright E2E Testing with AI for Beginners — Zero to Hero" 
            href="https://www.udemy.com/course/playwright-e2e-testing-for-beginners-js-ts" 
            subtitle="Udemy" 
        />
    </Box>
);