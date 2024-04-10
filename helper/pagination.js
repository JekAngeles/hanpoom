const paginate = (query, { page = 1, pageSize = 10 }) => {
    const offset = --page * pageSize;
    const limit = Number(pageSize);
    delete query.where.page
    delete query.where.pageSize

    return {
        ...query,
        offset,
        limit
    }
}

module.exports = paginate;