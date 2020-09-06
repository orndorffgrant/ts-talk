// Combining everything to do some form processing

type FieldCommon = {
  label: string;
  description: string;
};

type TextField = FieldCommon & {
  type: "text";
  defaultValue: string;
  multiline: boolean;
};
type NumberField = FieldCommon & {
  type: "number";
  defaultValue: number;
  min: number;
  max: number;
};
type CheckboxField = FieldCommon & {
  type: "checkbox";
  defaultValue: boolean;
};

type Field = TextField | NumberField | CheckboxField;

type Form = {
  title: string;
  fields: Field[];
};
















function renderForm(form: Form): string {
  let html = "";
  html += `<h1>${form.title}</h1>\n\n`;

  for (const field of form.fields) {

    html += "<hr>\n";
    html += `<label>${field.label}</label><br>\n`;

    if (field.type === "checkbox") {
      html += `<input type="checkbox" ${field.defaultValue ? "checked" : ""}/><br>\n`;
    } else if (field.type === "number") {
      html += `<input type="number" min="${field.min}" max="${field.max}" value="${field.defaultValue}"/><br>\n`;
    } else if (field.type === "text") {
      if (field.multiline) {
        html += `<textarea>${field.defaultValue}</textarea><br>\n`;
      } else {
        html += `<input value="${field.defaultValue}" /><br>\n`;
      }
    }

    html += `<span>${field.description}</span><br>\n\n`;
  }

  html += "<hr>";

  return html;
}
















const htmlForm = renderForm({
  title: "Survey: Giraffes, too tall?",
  fields: [
    {
      label: "How many feet tall is the average giraffe?",
      description: "You don't have to be correct, just guess.",
      type: "number",
      defaultValue: 23,
      min: 20,
      max: 50,
    },
    {
      label:
        'Do you agree with the following statement: "Zebras\' greatness are overshadowed by Giraffes."',
      description: "No pun intended.",
      type: "checkbox",
      defaultValue: true,
    },
    {
      label: "Describe your general attitude towards giraffes.",
      description:
        "Just remember that they will always block your view at a concert.",
      type: "text",
      defaultValue: "They're pretty tall.",
      multiline: true,
    },
  ],
});

console.log(htmlForm);
