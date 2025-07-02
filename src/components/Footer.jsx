export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Yash Desai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}