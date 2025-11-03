---
title: "HTMLFormElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Die **`elements`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Interface gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle aufgeführten Formularelemente auflistet, die mit dem {{HTMLElement("form")}}-Element assoziiert sind.

Sie können auf ein bestimmtes Formularelement in der zurückgegebenen Sammlung zugreifen, indem Sie entweder einen Index oder die `name`- oder `id`-Attribute des Elements verwenden.

Vor HTML 5 war das zurückgegebene Objekt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der `HTMLFormControlsCollection` basiert.

Unabhängig davon können Sie einfach die Anzahl der zugehörigen Formularelemente mit der [`length`](/de/docs/Web/API/HTMLFormElement/length)-Eigenschaft ermitteln. Eine Liste aller in einem bestimmten Dokument enthaltenen Formulare erhalten Sie über die [`forms`](/de/docs/Web/API/Document/forms)-Eigenschaft des Dokuments.

## Wert

Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Nicht-Bild-Formularelemente enthält, die mit dem Formular verknüpft sind.
Dies ist eine aktuelle Sammlung; wenn Formularelemente mit dem Formular verknüpft oder davon getrennt werden, wird diese Sammlung aktualisiert, um die Änderung widerzuspiegeln.

Die Formularelemente in der zurückgegebenen Sammlung sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen, indem eine prävide, tiefen-first Durchlaufung des Baums gefolgt wird. Dies wird als **Baumordnung** bezeichnet.

Nur die folgenden Formularelemente werden zurückgegeben:

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

In diesem Beispiel sehen wir, wie man die Liste von Formularelementen erhält und wie man auf seine Mitglieder per Index, Name oder ID zugreift.

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

### Assoziierte Formularelemente

Dieses Beispiel zeigt, wie die [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) die mit dem Formular assoziierten Formularelemente enthält, anstatt die physisch im `<form>` verschachtelten Elemente.

Das erste Formular ist voll, mit vier Formularelementen: ein {{htmlelement("fieldset")}} und drei {{htmlelement("input")}}-Elemente. Die {{htmlelement("legend")}}- und {{htmlelement("label")}}-Elemente sind keine aufgeführten Formularelemente. Das zweite Formular ist spärlich, mit nur einem verschachtelten Formularelement: einem einzelnen {{htmlelement("object")}}-Element. Alle Formularelemente im vollen Formular sind über ihr `form`-Attribut mit dem spärlichen Formular assoziiert.

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

Wir verwenden die `elements`-Eigenschaft, um die `HTMLFormControlsCollection` für jedes Formular zu erhalten.

```js
const sparse = document.getElementById("sparseForm").elements;
const full = document.getElementById("fullForm").elements;
```

Die Sammlung umfasst die mit dem Formularelement verbundenen Formularelemente, das heißt alle {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} und formularassoziierten benutzerdefinierten Elemente, die mit dem Formular assoziiert sind, selbst wenn diese Elemente in einem anderen Formular verschachtelt oder in keinem Formular verschachtelt sind.

```js
console.log(`sparse form: ${sparse.length}`); // sparse form: 5
console.log(`full form: ${full.length}`); // full form: 0
```

Die Formularsteuerungen der Sammlung sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.

```js
console.log(`first member: ${sparse[0].tagName}`); // first member: FIELDSET
console.log(`last member: ${sparse[sparse.length - 1].tagName}`); // last member: OBJECT
```

### Zugriff auf Formularelemente

Dieses Beispiel erhält die Elementliste des Formulars und iteriert dann über die Liste, um nach {{HTMLElement("input")}}-Elementen des Typs [`"text"`](/de/docs/Web/HTML/Reference/Elements/input/text) zu suchen, damit einige Arten der Verarbeitung an ihnen durchgeführt werden können.

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

### Deaktivieren von Formularelementen

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
