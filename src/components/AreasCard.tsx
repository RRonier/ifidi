"use client"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { Link as Link } from '@/navigation';
import Link from 'next/link'
// import { AppPathnames } from '@/config';
import { CardContent } from '@mui/joy';
import Image from 'next/image';
// import CustomDialog from './views/dialog/DialogPage';

const ITEM_HEIGHT = 48;

type Props = {
  title?: string;
  description?: string;
  image: string;
  pages?: { route: string, name?: string }[];
  withLink?: boolean;
  withActions?: boolean;
  externalLink?: string;
  downloadText?: string;
  isClickable?: true;
  modalInfo?: {
    title: string;
    images?: string[];
    image?: string;
    body?: string | TrustedHTML;
    lugar?: string;
    contraparte?: string;
    financiacion?: string;
    year?: number | string;
  }
}

export default function AreasCard({
  title,
  image,
  pages,
  externalLink = '',
  withLink,
  withActions,
  downloadText,
  isClickable,
  modalInfo
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const onMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Card sx={{
        width: 320,
        cursor: isClickable ? 'pointer' : 'default',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: isClickable ? 'translateY(-4px)' : 'none',
          boxShadow: isClickable ? '0 16px 24px rgba(0, 0, 0, 0.1)' : 'none'
        },
      }}
        onClick={isClickable && handleModalOpen}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography
            level="title-lg"
            fontSize="medium"
            sx={{
              textAlign: 'justify',
            }}
          >
            {title}
          </Typography>
          {/* <Typography level="body-sm" sx={{ textAlign: 'justify' }}>{description}</Typography> */}
          {withLink && (
            <div>
              <IconButton
                variant="plain"
                color="neutral"
                size="sm"
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={onMenuOpen}
                sx={{
                  marginLeft: '5px'
                }}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={onMenuClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 'fit-content',
                  },
                }}
              >
                {pages && pages.length && pages.map((option, key) => (
                  <MenuItem key={key} onClick={onMenuClose}>
                    <Link href={option.route}>
                      {option.name} 
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <Image
            src={image || ''}
            loading="lazy"
            alt=""
            fill
          />
        </AspectRatio>
        {
          withActions && <CardContent orientation="horizontal">
            <a
              href={externalLink}
              style={{ marginLeft: 'auto', alignSelf: 'center', fontWeight: 600 }}
            >
              {downloadText}
            </a>
          </CardContent>
        }
      </Card>
    </div>
  );
}