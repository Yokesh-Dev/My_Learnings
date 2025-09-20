import React, { useState, useEffect, useMemo } from 'react';
import { Search, Moon, Sun, User, Menu, X, Calendar, Clock, Tag, MessageCircle, Home, Info, Mail, Plus, Edit, Trash2 } from 'lucide-react';

// Mock data for blog posts
const initialBlogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    content: `React Hooks have revolutionized the way we write React components. In this comprehensive guide, I'll walk you through the most commonly used hooks and how they can improve your development workflow.

## useState Hook

The useState hook is the most fundamental hook for managing state in functional components:

\`\`\`javascript
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
\`\`\`

## useEffect Hook

useEffect allows you to perform side effects in your components:

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

This hook replaces componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods from class components.

## Custom Hooks

One of the most powerful features is creating custom hooks to share logic between components:

\`\`\`javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}
\`\`\`

React Hooks have made functional components much more powerful and have simplified state management significantly.`,
    snippet: "React Hooks have revolutionized the way we write React components. Learn about useState, useEffect, and custom hooks in this comprehensive guide.",
    category: "Programming",
    date: "2024-08-10",
    readTime: "5 min",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    comments: [
      { id: 1, author: "John Doe", content: "Great explanation! This helped me understand hooks better.", date: "2024-08-11" },
      { id: 2, author: "Jane Smith", content: "The custom hooks example is really useful. Thanks!", date: "2024-08-12" }
    ]
  },
  {
    id: 2,
    title: "My Journey into Web Development",
    content: `Starting my journey into web development has been one of the most rewarding experiences of my life. I want to share my story and the lessons I've learned along the way.

## The Beginning

It all started with curiosity. I remember seeing a website and wondering, "How do they make this?" That simple question led me down a rabbit hole of HTML, CSS, and JavaScript tutorials.

## First Steps

My first website was terrible - Comic Sans font, rainbow backgrounds, and blinking text everywhere. But it worked, and that feeling of creating something from nothing was addictive.

### Key Learning Resources

- **FreeCodeCamp**: Excellent structured curriculum
- **MDN Web Docs**: The best reference for web technologies
- **YouTube tutorials**: Visual learning helped a lot
- **Building projects**: Nothing beats hands-on experience

## Challenges I Faced

Learning web development wasn't always smooth sailing:

1. **Imposter Syndrome**: Feeling like I wasn't "good enough"
2. **Information Overload**: So many frameworks and libraries to choose from
3. **Debugging**: Spending hours on simple syntax errors
4. **Staying Current**: The web development landscape changes rapidly

## What I Learned

The most important lesson: **consistency beats perfection**. It's better to code for 30 minutes every day than to binge-code for 8 hours once a week.

### Technical Skills vs Soft Skills

While learning JavaScript and React was important, I also had to develop:
- Problem-solving abilities
- Communication skills
- Time management
- Learning how to learn

## Advice for Beginners

If you're just starting out:

1. **Start with the basics**: HTML, CSS, JavaScript
2. **Build projects**: Theory is important, but practice is essential
3. **Join communities**: Reddit, Discord servers, local meetups
4. **Don't compare yourself to others**: Everyone learns at their own pace
5. **Embrace the struggle**: Debugging and problem-solving are core skills

## Looking Forward

I'm excited about what lies ahead. Web development is constantly evolving, and there's always something new to learn. Whether it's new frameworks, design principles, or development methodologies, the learning never stops.

Remember, every expert was once a beginner. Keep coding, keep learning, and most importantly, enjoy the journey!`,
    snippet: "Starting my journey into web development has been one of the most rewarding experiences. Here's my story and lessons learned along the way.",
    category: "Personal Development",
    date: "2024-08-08",
    readTime: "8 min",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    comments: [
      { id: 1, author: "Alex Chen", content: "Really inspiring! I'm just starting my journey too.", date: "2024-08-09" },
      { id: 2, author: "Sarah Wilson", content: "The advice about consistency is so true. Thanks for sharing!", date: "2024-08-10" }
    ]
  },
  {
    id: 3,
    title: "Design Principles for Better User Experience",
    content: `Good design is invisible. When users interact with a well-designed interface, they focus on their tasks rather than figuring out how to use the interface. Here are key principles that guide effective UX design.

## 1. Clarity is King

Every element on your interface should have a clear purpose. If you can't explain why something exists in one sentence, it probably shouldn't be there.

### Visual Hierarchy
Use typography, color, and spacing to guide users' attention:

- **Primary actions**: Bold, high-contrast buttons
- **Secondary actions**: Subtle, lower contrast
- **Tertiary information**: Smallest text, muted colors

## 2. Consistency Creates Trust

Consistency in design patterns helps users build mental models of how your interface works.

### Types of Consistency:
- **Visual**: Same colors, fonts, spacing throughout
- **Functional**: Similar actions work the same way everywhere
- **External**: Following platform conventions users already know

## 3. Accessibility is Not Optional

Design for everyone, including users with disabilities:

\`\`\`css
/* Example: Proper color contrast */
.button-primary {
  background-color: #0066cc; /* WCAG AA compliant */
  color: #ffffff;
  font-weight: 600; /* Improves readability */
}

/* Focus states for keyboard navigation */
.button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
\`\`\`

## 4. Mobile-First Thinking

Design for mobile first, then enhance for larger screens:

1. **Touch targets**: Minimum 44px for interactive elements
2. **Readable text**: At least 16px font size
3. **Thumb-friendly navigation**: Important actions within easy reach

## 5. Loading and Error States

Don't forget the "empty states" of your interface:

- **Loading states**: Show progress, not just spinners
- **Error messages**: Be helpful, not blame-focused
- **Empty states**: Guide users on what to do next

## 6. The Power of White Space

White space (negative space) is not wasted space:
- Improves readability
- Creates visual grouping
- Reduces cognitive load
- Makes interfaces feel premium

## Testing Your Designs

### Usability Testing Methods:
1. **Moderated testing**: Watch users interact with your design
2. **A/B testing**: Compare different versions
3. **Analytics**: Use data to identify pain points
4. **Accessibility audits**: Test with screen readers and keyboard navigation

## Tools for Better Design

### Design Tools:
- **Figma**: Collaborative design and prototyping
- **Adobe XD**: Comprehensive UX design suite
- **Sketch**: Mac-based design tool (though less popular now)

### Testing Tools:
- **Hotjar**: Heatmaps and user recordings
- **Google Analytics**: Behavior flow analysis
- **axe DevTools**: Accessibility testing

## Conclusion

Great UX design is about solving real problems for real people. It's not about making things look pretty (though that helps) - it's about making complex tasks simple and intuitive.

Remember: **You are not your user.** Test your assumptions, gather feedback, and iterate based on real user behavior, not your own preferences.

The best designs feel effortless to use because someone put tremendous effort into making them that way.`,
    snippet: "Good design is invisible. Learn the key principles that guide effective UX design and create better user experiences.",
    category: "Design",
    date: "2024-08-05",
    readTime: "12 min",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    comments: [
      { id: 1, author: "Mike Johnson", content: "The accessibility section is particularly valuable. Great post!", date: "2024-08-06" },
      { id: 2, author: "Lisa Park", content: "I never thought about white space that way. Thanks for the insight!", date: "2024-08-07" }
    ]
  }
];

const BlogWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.snippet.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogPosts, searchTerm, selectedCategory]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Navigation handler
  const navigate = (page, post = null) => {
    setCurrentPage(page);
    setSelectedPost(post);
    setMobileMenuOpen(false);
  };

  // Add comment handler
  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() && commentAuthor.trim() && selectedPost) {
      const updatedPosts = blogPosts.map(post => {
        if (post.id === selectedPost.id) {
          const newCommentObj = {
            id: Date.now(),
            author: commentAuthor,
            content: newComment,
            date: new Date().toISOString().split('T')[0]
          };
          return {
            ...post,
            comments: [...post.comments, newCommentObj]
          };
        }
        return post;
      });
      setBlogPosts(updatedPosts);
      setSelectedPost({
        ...selectedPost,
        comments: [...selectedPost.comments, {
          id: Date.now(),
          author: commentAuthor,
          content: newComment,
          date: new Date().toISOString().split('T')[0]
        }]
      });
      setNewComment('');
      setCommentAuthor('');
    }
  };

  // Format content with basic markdown-like rendering
  const formatContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">{line.substring(4)}</h3>;
      }
      
      // Code blocks
      if (line.startsWith('```')) {
        const codeMatch = content.match(/```[\s\S]*?```/g);
        if (codeMatch) {
          const codeBlock = codeMatch[0];
          const codeContent = codeBlock.replace(/```\w*\n?/g, '').replace(/```$/, '');
          return (
            <pre key={index} className="bg-gray-800 text-green-400 p-4 rounded-lg my-4 overflow-x-auto">
              <code>{codeContent}</code>
            </pre>
          );
        }
      }
      
      // Inline code
      if (line.includes('`') && !line.startsWith('```')) {
        const parts = line.split('`');
        return (
          <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 1 ? 
                <code key={i} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">{part}</code> : 
                part
            )}
          </p>
        );
      }
      
      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 1 ? 
                <strong key={i} className="font-semibold">{part}</strong> : 
                part
            )}
          </p>
        );
      }
      
      // Lists
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2 text-gray-700 dark:text-gray-300">{line.substring(2)}</li>;
      }
      if (line.match(/^\d+\. /)) {
        return <li key={index} className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">{line.replace(/^\d+\. /, '')}</li>;
      }
      
      // Regular paragraphs
      if (line.trim() && !line.startsWith('#') && !line.startsWith('```')) {
        return <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{line}</p>;
      }
      
      return null;
    }).filter(Boolean);
  };

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white min-h-screen' 
    : 'bg-gray-50 text-gray-900 min-h-screen';

  // Navigation Component
  const Navigation = () => (
    <nav className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 
              className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              onClick={() => navigate('home')}
            >
              MyBlog
            </h1>
            
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => navigate('home')} 
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Home size={16} />
                <span>Home</span>
              </button>
              <button 
                onClick={() => navigate('about')} 
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'about' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Info size={16} />
                <span>About</span>
              </button>
              <button 
                onClick={() => navigate('contact')} 
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'contact' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Mail size={16} />
                <span>Contact</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setShowLoginForm(!showLoginForm)}
              className={`p-2 rounded-md transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <User size={20} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-4`}>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => navigate('home')} 
                className="flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <Home size={16} />
                <span>Home</span>
              </button>
              <button 
                onClick={() => navigate('about')} 
                className="flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <Info size={16} />
                <span>About</span>
              </button>
              <button 
                onClick={() => navigate('contact')} 
                className="flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <Mail size={16} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Search and Filter Component
  const SearchAndFilter = () => (
    <div className="max-w-6xl mx-auto px-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : darkMode
                    ? 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Tag size={14} className="inline mr-1" />
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Homepage Component
  const Homepage = () => (
    <div>
      <SearchAndFilter />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              className={`${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
              onClick={() => navigate('post', post)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h2 className={`text-xl font-bold mb-3 line-clamp-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </h2>
                
                <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {post.snippet}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-1">
                    <MessageCircle size={14} />
                    <span>{post.comments.length}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Search size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              No posts found
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Try adjusting your search terms or selected category
            </p>
          </div>
        )}
      </div>
    </div>
  );

  // Blog Post Component
  const BlogPost = () => (
    <div className="max-w-4xl mx-auto px-4">
      <button
        onClick={() => navigate('home')}
        className={`mb-6 flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
          darkMode 
            ? 'border-gray-600 hover:bg-gray-700 text-gray-300' 
            : 'border-gray-300 hover:bg-gray-50 text-gray-700'
        }`}
      >
        ← Back to Home
      </button>

      <article className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg`}>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
            }`}>
              {selectedPost.category}
            </span>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
          </div>
          
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {selectedPost.title}
          </h1>
          
          <div className="h-64 overflow-hidden rounded-lg mb-8">
            <img 
              src={selectedPost.thumbnail} 
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {formatContent(selectedPost.content)}
        </div>

        {/* Comments Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Comments ({selectedPost.comments.length})
          </h3>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your name"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                required
                className={`px-4 py-3 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <textarea
              placeholder="Write your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border mb-4 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {selectedPost.comments.map(comment => (
              <div key={comment.id} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {comment.author}
                  </h4>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );

  // About Page Component
  const AboutPage = () => (
    <div className="max-w-4xl mx-auto px-4">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg`}>
        <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <User size={80} className="text-white" />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm a Developer & Designer
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Welcome to my personal blog where I share my journey in web development, design insights, 
              and personal growth experiences. I'm passionate about creating meaningful digital experiences 
              and sharing knowledge with the community.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Interests
                </h3>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>• Web Development</li>
                  <li>• UI/UX Design</li>
                  <li>• Open Source</li>
                  <li>• Learning & Teaching</li>
                </ul>
              </div>
              
              <div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Technologies
                </h3>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Node.js</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Story
          </h3>
          <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            My journey into technology began with curiosity and has evolved into a passion for creating 
            solutions that make a difference. Through this blog, I document my learning experiences, 
            share insights I've gained, and connect with like-minded individuals in the tech community.
          </p>
          
          <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            When I'm not coding, you can find me exploring new design trends, contributing to open-source 
            projects, or mentoring aspiring developers. I believe in the power of sharing knowledge and 
            helping others grow in their tech journey.
          </p>

          <h3 className={`text-xl font-semibold mb-4 mt-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's Connect
          </h3>
          <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm always excited to connect with fellow developers, designers, and anyone interested in 
            technology. Feel free to reach out through the contact page or engage with my posts through comments.
          </p>
        </div>
      </div>
    </div>
  );

  // Contact Page Component
  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Simulate form submission
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg`}>
          <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h1>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Message Sent!
              </h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send me a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div>
                <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Other ways to connect
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Email
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        hello@myblog.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="text-blue-600 mt-1" size={20} fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.030-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                    </svg>
                    <div>
                      <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Twitter
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        @myblog
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="text-blue-600 mt-1" size={20} fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.110.221.081.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                    <div>
                      <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        LinkedIn
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        /in/myblog
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h3 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Response Time
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    I typically respond to messages within 24-48 hours. For urgent matters, 
                    please indicate so in your subject line.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Login Modal Component
  const LoginModal = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    
    const handleLogin = (e) => {
      e.preventDefault();
      // Simple mock authentication
      if (loginData.username === 'admin' && loginData.password === 'password') {
        setIsLoggedIn(true);
        setShowLoginForm(false);
        setLoginData({ username: '', password: '' });
      } else {
        alert('Invalid credentials. Use admin/password for demo.');
      }
    };

    if (!showLoginForm) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 w-full max-w-md`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {isLoggedIn ? 'Admin Dashboard' : 'Login'}
            </h2>
            <button
              onClick={() => setShowLoginForm(false)}
              className={`p-2 rounded-md transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <X size={20} />
            </button>
          </div>

          {isLoggedIn ? (
            <div className="space-y-4">
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Welcome, Admin! Here you can manage your blog posts.
              </p>
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={16} className="inline mr-2" />
                  New Post
                </button>
                <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Edit size={16} className="inline mr-2" />
                  Edit Posts
                </button>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Username
                </label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="admin"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
              <p className={`text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Demo credentials: admin / password
              </p>
            </form>
          )}
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div className={themeClasses}>
      <Navigation />
      <LoginModal />
      
      <main className="py-8">
        {currentPage === 'home' && <Homepage />}
        {currentPage === 'post' && selectedPost && <BlogPost />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t mt-16`}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 MyBlog. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogWebsite;