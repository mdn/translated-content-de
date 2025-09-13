---
title: "HTMLFormElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: 8626f2e444062fbbf08b8729ab4269cceaf7d1bd
---

{{APIRef("HTML DOM")}}

Die **`elements`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle aufgelisteten Formularsteuerelemente enthält, die dem {{HTMLElement("form")}}-Element zugeordnet sind.

Sie können ein bestimmtes Formularsteuerelement in der zurückgegebenen Sammlung entweder über einen Index oder über die `name`- oder `id`-Attribute des Elements abrufen.

Vor HTML 5 war das zurückgegebene Objekt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der `HTMLFormControlsCollection` basiert ist.

Unabhängig davon können Sie die Anzahl der zugeordneten Formularsteuerelemente ausschließlich über die [`length`](/de/docs/Web/API/HTMLFormElement/length)-Eigenschaft ermitteln. Sie können eine Liste aller in einem bestimmten Dokument enthaltenen Formulare über die `forms`-Eigenschaft des Dokuments abrufen.

## Wert

Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle mit dem Formular verbundenen Nicht-Bild-Steuerelemente enthält. Dies ist eine Live-Sammlung; wenn Formularsteuerelemente dem Formular zugeordnet oder aus ihm entfernt werden, wird diese Sammlung aktualisiert, um die Änderung widerzuspiegeln.

Die Formularsteuerelemente in der zurückgegebenen Sammlung erscheinen in der gleichen Reihenfolge, in der sie im Dokument erscheinen, indem sie einem Präorder-, tiefen-erst Traversieren des Baumes folgen. Dies nennt man **Baumordnung**.

Nur die folgenden Formularsteuerelemente werden zurückgegeben:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"image"` ist, aus historischen Gründen weggelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [mit dem Formular verbundene benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Beispiele

### Schnelles Syntaxbeispiel

In diesem Beispiel sehen wir, wie man die Liste der Formularsteuerelemente erhält und wie man auf ihre Mitglieder durch Index und durch Name oder ID zugreift.

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

### Zuordnung der Formularsteuerelemente

Dieses Beispiel zeigt, wie die [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) die mit dem Formular verknüpften Steuerelemente enthält und nicht die Steuerelemente, die physisch im `<form>` eingebettet sind.

Das erste Formular ist vollständig, mit vier Formularsteuerelementen: einem {{htmlelement("fieldset")}} und drei {{htmlelement("input")}}-Elementen. Die {{htmlelement("legend")}}- und {{htmlelement("label")}}-Elemente sind keine aufgelisteten Formularsteuerelemente. Das zweite Formular ist spärlich, mit nur einem eingebetteten Formularsteuerelement: einem einzelnen {{htmlelement("object")}}-Element. Alle Formularsteuerelemente im vollständigen Formular sind über ihr `form`-Attribut mit dem spärlichen Formular verbunden.

```html
<form id="fullForm">
  This form looks full, but it has no associated form controls
  <fieldset form="sparseForm">
    <legend>This is a legend</legend>
    <label>A form control: <input form="sparseForm" /></label>
    <label>Another form control: <input form="sparseForm" /></label>
    <label>Yest anotehr form control: <input form="sparseForm" /></label>
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

Die Sammlung umfasst die mit dem Formular verbundenen Formularsteuerelemente, d.h. alle {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} und formularverknüpfte benutzerdefinierte Elemente, die mit dem Formular verbunden sind, selbst wenn diese Elemente in einem anderen Formular eingebettet sind oder in keinem Formular eingebettet sind.

```js
console.log(`sparse form: ${sparse.length}`); // sparse form: 5
console.log(`full form: ${full.length}`); // full form: 0
```

Die Formularsteuerelemente der Sammlung befinden sich in der gleichen Reihenfolge, in der sie im Dokument erscheinen.

```js
console.log(`first member: ${sparse[0].tagName}`); // first member: FIELDSET
console.log(`last member: ${sparse[sparse.length - 1].tagName}`); // last member: OBJECT
```

### Zugriff auf Formularsteuerelemente

In diesem Beispiel wird die Liste der Formularelemente abgerufen und dann über diese Liste iteriert, wobei {{HTMLElement("input")}}-Elemente des Typs [`"text"`](/de/docs/Web/HTML/Reference/Elements/input/text) gesucht werden, damit eine Form von Verarbeitung an ihnen durchgeführt werden kann.

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
