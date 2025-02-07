import { ExtractDocumentTypeFromTypedRxJsonSchema, RxCollection, RxJsonSchema, toTypedRxJsonSchema } from "rxdb";

export const noteSchemaLiteral = {
  version: 0,
  primaryKey: 'id',
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLenght: 24
    },
    title: {
      type: "string"
    },
    body: {
      type: "string"
    }
  },
  required: ["id", "title", "body"]
} as const;

const schemaTyped = toTypedRxJsonSchema(noteSchemaLiteral);

export type NoteDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const noteSchema: RxJsonSchema<NoteDocumentType> = noteSchemaLiteral;
export type NoteCollection = RxCollection<NoteDocumentType>