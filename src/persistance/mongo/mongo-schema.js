export const types = {
  date: (v) => new Date(v),
  boolean: (v) => !!v,
  string: (v) => String(v),
  number: (v) => number(v),
};

export const schema = {
  lists: {
    _id: types.string,
    created_at: types.date,
    name: types.string,
    owner_id: types.string
  },
  todos: {
    _id: types.string,
    completed: types.boolean,
    created_at: types.date,
    created_by: types.string,
    description: types.string,
    list_id: types.string,
    completed_at: types.date,
    completed_by: types.string
  },
  tour: {
    _id: types.string,
    _insertedTS: types.date,
    _modifiedTS: types.date,
    closedAt: types.date,
    closedBy: types.string,
    courier: types.string,
    opUnit: types.string,
    assocOpUnit: types.string,
    partitionKey: types.string,
    tourDate: types.date,
    tourName: types.string,
    tourType: types.string,
    internallyModifiedDateTimestamp: types.date,
    pudo: types.boolean,

  },
  parcel: {
    _id: types.string,
    _insertedTS: types.date,
    _modifiedTS: types.date,
    attemptsCount: types.number,
    courier: types.string,
    edd: types.date,
    eventDateTime: types.date,
    expected: types.boolean,
    heldReason: types.string,
    internallyModifiedDateTimestamp: types.date,
    loadedAt: types.date,
    loadedBy: types.string,
    ndd: types.date,
    opUnit: types.string,
    assocOpUnit: types.string,
    parcelInstanceNumber: types.number,
    parcelUpi: types.string,
    partitionKey: types.string,
    receivedBy: types.string,
    receivedDateTimestamp: types.date,
    removedAt: types.date,
    removedBy: types.string,
    tourDate: types.date,
    tourEventCode: types.string,
    tourName: types.string,
    tourType: types.string,
    tourMissort: types.boolean,
    pudoTour: types.boolean,
    pudoContainer: types.boolean,
    storeId: types.string,
    containerId: types.string,
    containerInstance: types.number,
  }
};

/**
 * A basic function to convert data according to a schema specified above.
 *
 * A production application should probably use a purpose-built library for this,
 * and use MongoDB Schema Validation to enforce the types in the database.
 */
export function applySchema(tableSchema, data) {
  const converted = Object.entries(tableSchema)
    .map(([key, converter]) => {
      const rawValue = data[key];
      if (typeof rawValue == 'undefined') {
        return null;
      } else if (rawValue == null) {
        return [key, null];
      } else {
        return [key, converter(rawValue)];
      }
    })
    .filter((v) => v != null);
  return Object.fromEntries(converted);
}
