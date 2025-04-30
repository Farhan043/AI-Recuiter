# AI Voice Recruiter

An AI-powered interview platform that helps recruiters conduct automated interviews with voice capabilities.

## 🚀 Project Overview

AI Voice Recruiter is a Next.js application designed to streamline the recruiting process by offering AI-driven interview experiences. The platform allows scheduling interviews, conducting voice interviews, and automated feedback generation based on candidate responses.

## 💻 Technology Stack

- **Frontend Framework**: [Next.js 15.3.1](https://nextjs.org/)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) for accessible component primitives
  - Tailwind CSS for styling
- **Database**: [Supabase](https://supabase.com/)
- **AI Integration**: 
  - [OpenAI](https://openai.com/) - For generating interview questions and feedback
  - [VAPI AI](https://vapi.ai/) - For voice interface capabilities
- **Authentication**: Supabase Auth

## 📁 Project Structure

```
ai/
├── .next/                   # Next.js build output
├── app/                     # Application routes and pages
│   ├── (main)/              # Main application routes
│   │   ├── dashboard/       # Dashboard page and components
│   │   ├── all-interview/   # All interviews listing
│   │   └── scheduled-interview/ # Scheduled interviews
│   ├── api/                 # API routes
│   ├── auth/                # Authentication pages
│   ├── interview/           # Interview conducting pages
│   └── globals.css          # Global styles
├── components/              # Reusable UI components
│   └── ui/                  # UI component library
├── context/                 # React context providers
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
└── services/                # External service integrations
    ├── Constants.jsx        # Application constants
    └── supabaseClient.js    # Supabase client configuration
```

## ✨ Features

### 1. Dashboard
- Overview of interview statistics and upcoming interviews
- Quick access to create new interviews

### 2. Interview Management
- Schedule new interviews with customizable job positions and descriptions
- View all interviews (past and upcoming)
- Filter and search through interview history

### 3. AI-Powered Interviews
- Automatic generation of interview questions based on job description
- Different interview types supported:
  - Technical
  - Behavioral
  - Experience
  - Leadership
  - Problem Solving
- Voice-based interview interface
- Real-time conversation with AI interviewer

### 4. Automated Feedback
- Comprehensive feedback after each interview
- Skills assessment with ratings in:
  - Technical Skills
  - Communication
  - Problem Solving
  - Experience
- Summary and hiring recommendations

## 🛠 Setup and Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   OPENAI_API_KEY=your_openai_api_key
   VAPI_API_KEY=your_vapi_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🚧 Development Guidelines

### Code Structure
- Keep components modular and reusable
- Use the context API for state management across components
- Follow the Next.js App Router structure for new pages and routes

### Styling
- Use Tailwind CSS for styling components
- Follow the design system established in the UI components

### API Integration
- Use the services directory for external API integrations
- Handle authentication through the Supabase client

## 📝 Contributing
1. Create a new branch for your feature or bugfix
2. Make your changes and test thoroughly
3. Submit a pull request with a clear description of your changes

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
