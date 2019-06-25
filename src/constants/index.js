import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon
} from '../assets';

export const SITES = {
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  LINKEDIN: 'linkedin',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube'
};

export const CONFIG = {
  [SITES.FACEBOOK]: {
    href: 'http://facebook.com/hobroker',
    color: '#3B5998',
    icon: FacebookIcon
  },
  [SITES.TWITTER]: {
    href: 'http://twitter.com/hobroker',
    color: '#1DA1F2',
    icon: TwitterIcon
  },
  [SITES.LINKEDIN]: {
    href: 'https://linkedin.com/in/hobroker',
    color: '#0077B5',
    icon: LinkedinIcon
  },
  [SITES.INSTAGRAM]: {
    href: 'https://instagram.com/hobroker',
    color: '#405DE6',
    icon: InstagramIcon
  },
  [SITES.YOUTUBE]: {
    href: 'https://youtube.com/channel/UCybxyZcTV3hkJ12o4wNySOQ',
    color: '#ff0000',
    icon: YoutubeIcon
  }
};
