import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function BioCard({ name, testimonial, image }: { name: string, testimonial: string, image?: string }) {
    return (
        <Card
            sx={{
                width: 320,
                maxWidth: '100%',
                boxShadow: 'lg',
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar src={image || ''} sx={{ '--Avatar-size': '4rem' }} alt='user avatar' />
                <Typography level="title-lg">{name}</Typography>
                <Typography level="body-sm" sx={{ maxWidth: '24ch', textAlign: 'justify' }}>
                    {testimonial}
                </Typography>
                <FormatQuoteIcon fontSize='medium'/>
            </CardContent>
        </Card>
    );
}
