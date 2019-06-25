import {
  GithubIcon,
  YoutubeIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon
} from '../assets';

export const SITES = {
  GITHUB: 'github',
  YOUTUBE: 'youtube',
  LINKEDIN: 'linkedin',
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  INSTAGRAM: 'instagram',
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
  },
  [SITES.GITHUB]: {
    href: 'https://github.com/hobroker',
    color: '#181717',
    icon: GithubIcon
  }
};
