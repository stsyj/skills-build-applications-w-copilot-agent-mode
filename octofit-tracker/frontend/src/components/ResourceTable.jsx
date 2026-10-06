export default function ResourceTable({ title, url, columns, items, loading, error }) {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h3 mb-0">{title}</h2>
        <small className="text-muted text-truncate ms-3">{url}</small>
      </div>

      {loading && <div className="alert alert-info">Loading {title.toLowerCase()}...</div>}
      {error && <div className="alert alert-danger">Failed to load {title.toLowerCase()}: {error}</div>}
      {!loading && !error && items.length === 0 && (
        <div className="alert alert-secondary">No {title.toLowerCase()} found.</div>
      )}

      {!loading && !error && items.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id ?? item.id ?? index}>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {column.render ? column.render(item) : (item[column.key] ?? '-')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
