export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/5 mt-10">
      <p className="text-sm text-gray-500 font-space">
        Designed & Built by Emmanuel © {new Date().getFullYear()}
      </p>
    </footer>
  );
}