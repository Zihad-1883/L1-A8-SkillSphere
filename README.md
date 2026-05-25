# SkillSphere - Online Learning Platform

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel)

## Purpose
SkillSphere is a modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, Data Science, and more. Built as part of an assignment to demonstrate full-stack Next.js development with authentication and database integration.

## Live URL
🔗 [https://zihad-assignment-8.vercel.app](https://zihad-assignment-8.vercel.app)

## Key Features
- 🏠 **Home Page** — Hero banner, Popular Courses, Learning Tips, Top Instructors, Trending Courses sections
- 📚 **All Courses Page** — Browse all available courses with search functionality
- 🔍 **Course Details Page** — Full course info, curriculum, instructor details (Protected Route)
- 🔐 **Authentication** — Email/password registration & login with Google OAuth support
- 👤 **My Profile Page** — View and update user name and profile image
- 🔒 **Protected Routes** — Course details and profile pages require login
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🔔 **Toast Notifications** — Success and error feedback on all actions
- 🎨 **Animations** — Smooth animations using Animate.css
- ❌ **404 Page** — Custom not-found page

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS + DaisyUI |
| UI Components | HeroUI |
| Authentication | BetterAuth |
| Database | MongoDB Atlas |
| Deployment | Vercel |

## NPM Packages Used
| Package | Purpose |
|---------|---------|
| next | React framework with App Router |
| react | UI library |
| tailwindcss | Utility-first CSS framework |
| daisyui | Tailwind component library |
| @heroui/react | UI component library |
| better-auth | Authentication library |
| mongodb | MongoDB driver for database |
| react-hot-toast | Toast notifications |
| react-icons | Icon library |
| animate.css | CSS animation library |
| @gravity-ui/icons | Icon set |

## How to Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/Zihad-1883/your-skillsphere-repo.git
cd your-skillsphere-repo
```

**2. Install dependencies**
```bash
npm install
```

**3. Create a `.env` file in the root directory**
```env
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**4. Start the development server**
```bash
npm run dev
```

**5. The app will run at**
```
http://localhost:3000
```
