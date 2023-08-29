export const Table = ({ data }) => {
    return (
        <div className="mt20" data-testid='table-component'>
            {
                Object.values(data).some((item) => item)
                    ? (
                        <table data-testid='table'>
                            <thead>
                                <tr>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.message}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                    : <div>No data to display</div>
            }
        </div>
    )
}