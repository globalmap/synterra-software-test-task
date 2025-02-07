import { ExtractDocumentTypeFromTypedRxJsonSchema, RxCollection, RxJsonSchema, toTypedRxJsonSchema } from "rxdb";

export interface Note {
  id: string;
  title: string;
  body: string;
}

export const noteSchemaLiteral = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 24,
    },
    title: {
      type: "string",
    },
    body: {
      type: "string",
    },
  },
  required: ["id", "title", "body"],
} as const;

const schemaTyped = toTypedRxJsonSchema(noteSchemaLiteral);

export type NoteDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const noteSchema: RxJsonSchema<NoteDocumentType> = noteSchemaLiteral;
export type NoteCollection = RxCollection<NoteDocumentType>