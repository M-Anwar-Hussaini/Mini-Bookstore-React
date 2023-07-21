export default function Container({ children = '' }) {
  return (
    <div className="box d-flex min-vh-100 flex-column gap-1 py-1">
      {children}
    </div>
  );
}
