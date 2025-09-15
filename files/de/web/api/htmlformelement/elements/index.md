---
title: "HTMLFormElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

{{APIRef("HTML DOM")}}

Die **`elements`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle aufgeführten Formularsteuerelemente enthält, die mit dem {{HTMLElement("form")}}-Element verknüpft sind.

Sie können auf ein bestimmtes Formularsteuerelement in der zurückgegebenen Sammlung entweder über einen Index oder die `name`- oder `id`-Attribute des Elements zugreifen.

Vor HTML 5 war das zurückgegebene Objekt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der `HTMLFormControlsCollection` basiert.

Unabhängig davon können Sie die Anzahl der verknüpften Formularsteuerelemente mit der [`length`](/de/docs/Web/API/HTMLFormElement/length)-Eigenschaft erhalten. Eine Liste aller Formulare innerhalb eines Dokuments können Sie über die [`forms`](/de/docs/Web/API/Document/forms)-Eigenschaft des Dokuments erhalten.

## Wert

Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Nicht-Bild-Steuerelemente enthält, die mit dem Formular verknüpft sind. Dies ist eine Live-Sammlung; wenn Formularsteuerelemente dem Formular hinzugefügt oder daraus entfernt werden, aktualisiert sich diese Sammlung, um die Änderung widerzuspiegeln.

Die Formularsteuerelemente in der zurückgegebenen Sammlung sind in der Reihenfolge, in der sie im Dokument erscheinen, entsprechend einer Vororder-, Tiefensuche des Baumes. Dies wird als **Baumordnung** bezeichnet.

Nur die folgenden Formularsteuerelemente werden zurückgegeben:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"image"` ist, aus historischen Gründen weggelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [formularassoziierte benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Beispiele

### Schnelles Syntaxbeispiel

In diesem Beispiel sehen wir, wie Sie die Liste der Formularsteuerelemente erhalten sowie auf deren Mitglieder über einen Index oder einen Namen oder eine ID zugreifen können.

```html
<form id="my-form">
  <label>
    Username:
    <input type="text" name="username" />
  </label>
  <label>
    Full name:
    <input type="text" name="full-name" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
</form>
```

```js
const inputs = document.getElementById("my-form").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];
```

### Zugeordnete Formularsteuerelemente

Dieses Beispiel demonstriert, wie die [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) die mit dem Formular verknüpften Formularsteuerelemente enthält, anstatt der physisch im `<form>`-Element verschachtelten Steuerelemente.

Das erste Formular ist vollständig und enthält vier Formularsteuerelemente: ein {{htmlelement("fieldset")}} und drei {{htmlelement("input")}}-Elemente. Die {{htmlelement("legend")}}- und {{htmlelement("label")}}-Elemente sind keine aufgelisteten Formularsteuerelemente. Das zweite Formular ist spärlich und hat nur ein verschachteltes Formularsteuerelement: ein einzelnes {{htmlelement("object")}}-Element. Alle Formularsteuerelemente im vollständigen Formular sind über ihr `form`-Attribut mit dem spärlichen Formular verbunden.

```html
<form id="fullForm">
  This form looks full, but it has no associated form controls
  <fieldset form="sparseForm">
    <legend>This is a legend</legend>
    <label>A form control: <input form="sparseForm" /></label>
    <label>Another form control: <input form="sparseForm" /></label>
    <label>Yet another form control: <input form="sparseForm" /></label>
  </fieldset>
</form>

<form id="sparseForm">
  <object>Lone form control</object>
</form>
```

Wir verwenden die `elements`-Eigenschaft, um die `HTMLFormControlsCollection` für jedes Formular zu erhalten.

```js
const sparse = document.getElementById("sparseForm").elements;
const full = document.getElementById("fullForm").elements;
```

Die Sammlung umfasst die dem Formular zugeordneten Formularsteuerelemente, das heißt alle {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} und formularassoziierte benutzerdefinierte Elemente, die mit dem Formular verknüpft sind, selbst wenn diese Elemente in einem anderen Formular verschachtelt oder in keinem Formular verschachtelt sind.

```js
console.log(`sparse form: ${sparse.length}`); // sparse form: 5
console.log(`full form: ${full.length}`); // full form: 0
```

Die Steuerelemente der Sammlung sind in der Reihenfolge, in der sie im Dokument erscheinen.

```js
console.log(`first member: ${sparse[0].tagName}`); // first member: FIELDSET
console.log(`last member: ${sparse[sparse.length - 1].tagName}`); // last member: OBJECT
```

### Zugriff auf Formularsteuerelemente

Dieses Beispiel ruft die Elementliste des Formulars ab und durchläuft dann die Liste, um nach {{HTMLElement("input")}}-Elementen des Typs [`"text"`](/de/docs/Web/HTML/Reference/Elements/input/text) zu suchen, damit eine Form von Verarbeitung an ihnen durchgeführt werden kann.

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (const input of inputs) {
  if (input.nodeName === "INPUT" && input.type === "text") {
    // Update text input
    input.value = input.value.toLocaleUpperCase();
  }
}
```

### Deaktivieren von Formularsteuerelementen

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (const input of inputs) {
  // Disable all form controls
  input.setAttribute("disabled", "");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
