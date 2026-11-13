---
title: "HTMLFormElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`elements`** der Schnittstelle [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle aufgelisteten Formularsteuerelemente enthält, die dem {{HTMLElement("form")}}-Element zugeordnet sind.

Auf ein bestimmtes Formularsteuerelement in der zurückgegebenen Sammlung können Sie über einen Index oder über dessen `name`- oder `id`-Attribut zugreifen.

Vor HTML 5 war das zurückgegebene Objekt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der `HTMLFormControlsCollection` basiert.

Die Anzahl der zugeordneten Formularsteuerelemente können Sie unabhängig davon über die Eigenschaft [`length`](/de/docs/Web/API/HTMLFormElement/length) abrufen. Eine Liste aller Formulare in einem bestimmten Dokument erhalten Sie über die Eigenschaft [`forms`](/de/docs/Web/API/Document/forms) des Dokuments.

## Wert

Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle dem Formular zugeordneten Steuerelemente enthält, die keine Bilder sind.
Es handelt sich um eine Live-Sammlung: Wenn Formularsteuerelemente dem Formular zugeordnet werden oder ihre Zuordnung aufgehoben wird, aktualisiert sich die Sammlung entsprechend.

Die Formularsteuerelemente in der zurückgegebenen Sammlung stehen in derselben Reihenfolge, in der sie bei einer Tiefensuche mit Preorder-Durchlauf des Baums im Dokument erscheinen.
Diese Reihenfolge wird **Baumreihenfolge** genannt.

Nur die folgenden Formularsteuerelemente werden zurückgegeben:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass Elemente, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"image"` ist, aus historischen Gründen ausgelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [formularassoziierte benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Beispiele

### Kurzes Syntaxbeispiel

Dieses Beispiel zeigt, wie Sie die Liste der Formularsteuerelemente abrufen und über einen Index sowie über einen Namen oder eine ID auf ihre Einträge zugreifen.

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

Dieses Beispiel zeigt, dass die [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) die dem Formular zugeordneten Steuerelemente enthält und nicht nur diejenigen, die innerhalb von `<form>` verschachtelt sind.

Das erste Formular enthält vier Formularsteuerelemente: ein {{htmlelement("fieldset")}}-Element und drei {{htmlelement("input")}}-Elemente. Die {{htmlelement("legend")}}- und {{htmlelement("label")}}-Elemente gehören nicht zu den aufgelisteten Formularsteuerelementen. Das zweite Formular enthält nur ein darin verschachteltes Formularsteuerelement: ein einzelnes {{htmlelement("object")}}-Element. Alle Formularsteuerelemente des ersten Formulars sind über ihr `form`-Attribut dem zweiten Formular zugeordnet.

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
  <object data="lone-form-control.jpg">Lone form control</object>
</form>
```

Mit der Eigenschaft `elements` rufen wir die `HTMLFormControlsCollection` für jedes Formular ab.

```js
const sparse = document.getElementById("sparseForm").elements;
const full = document.getElementById("fullForm").elements;
```

Die Sammlung enthält die dem Formularelement zugeordneten Formularsteuerelemente, also alle {{HTMLElement("button")}}-, {{HTMLElement("fieldset")}}-, {{HTMLElement("input")}}-, {{HTMLElement("object")}}-, {{HTMLElement("output")}}-, {{HTMLElement("select")}}- und {{HTMLElement("textarea")}}-Elemente sowie formularassoziierte benutzerdefinierte Elemente, die dem Formular zugeordnet sind. Das gilt auch dann, wenn diese Elemente in einem anderen Formular oder in keinem Formular verschachtelt sind.

```js
console.log(`sparse form: ${sparse.length}`); // sparse form: 5
console.log(`full form: ${full.length}`); // full form: 0
```

Die Formularsteuerelemente der Sammlung stehen in derselben Reihenfolge, in der sie im Dokument erscheinen.

```js
console.log(`first member: ${sparse[0].tagName}`); // first member: FIELDSET
console.log(`last member: ${sparse[sparse.length - 1].tagName}`); // last member: OBJECT
```

### Auf Formularsteuerelemente zugreifen

Dieses Beispiel ruft die Elementliste des Formulars ab und durchläuft sie auf der Suche nach {{HTMLElement("input")}}-Elementen des Typs [`"text"`](/de/docs/Web/HTML/Reference/Elements/input/text), um diese weiterzuverarbeiten.

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

### Formularsteuerelemente deaktivieren

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
