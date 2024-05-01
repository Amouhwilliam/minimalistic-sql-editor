export function getQueryType(query: string) {
    const trimmedQuery: string = query.trim().toLowerCase();
    if (trimmedQuery.startsWith('select')) {
        return 'SELECT';
    }
    if (trimmedQuery.startsWith('insert')) {
        return 'INSERT';
    }
    if (trimmedQuery.startsWith('update')) {
        return 'UPDATE';
    }
    if (trimmedQuery.startsWith('delete')) {
        return 'DELETE';
    }
    if (trimmedQuery.startsWith('create')) {
        return 'CREATE';
    }
    if (trimmedQuery.startsWith('alter')) {
        return 'ALTER';
    }
    if (trimmedQuery.startsWith('drop')) {
        return 'DROP';
    }

    return 'OTHER';
}

// Function to get a message based on the type of SQL query
export function getMessageForQueryType(queryType: string) {
    switch (queryType) {
        case 'SELECT':
            return 'Query executed successfully. Results displayed below.';
        case 'INSERT':
            return 'Record(s) inserted successfully.';
        case 'UPDATE':
            return 'Record(s) updated successfully.';
        case 'DELETE':
            return 'Record(s) deleted successfully.';
        case 'CREATE':
            return 'Table created successfully.';
        case 'ALTER':
            return 'Table altered successfully.';
        case 'DROP':
            return 'Table dropped successfully.';
        default:
            return 'Query executed successfully.';
    }
}