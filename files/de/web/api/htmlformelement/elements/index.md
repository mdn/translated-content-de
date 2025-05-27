---
title: "HTMLFormElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML DOM")}}

Die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Eigenschaft **`elements`** gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle in dem {{HTMLElement("form")}}-Element enthaltenen Formularsteuerelemente auflistet.

Unabhängig davon können Sie die Anzahl der Formularsteuerelemente mit der [`length`](/de/docs/Web/API/HTMLFormElement/length)-Eigenschaft erhalten.

Ein bestimmtes Formularsteuerelement in der zurückgegebenen Sammlung kann entweder durch einen Index oder durch die `name`- oder `id`-Attribute des Elements aufgerufen werden.

Vor HTML5 war das zurückgegebene Objekt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der die `HTMLFormControlsCollection` basiert.

> [!NOTE]
> Ähnlich können Sie eine Liste aller im Dokument enthaltenen Formulare über die `forms`-Eigenschaft des Dokuments erhalten.

## Wert

Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Nicht-Bild-Steuerelemente im Formular enthält. Dies ist eine Live-Sammlung; wenn Formularsteuerelemente zum Formular hinzugefügt oder davon entfernt werden, aktualisiert sich diese Sammlung, um die Änderung widerzuspiegeln.

Die Formularsteuerelemente in der zurückgegebenen Sammlung sind in derselben Reihenfolge, in der sie im Formular erscheinen, indem sie einer Vorordnung folgen, einer tiefenbezogenen Traversierung des Baums. Dies wird als **Baumordnung** bezeichnet.

Nur die folgenden Elemente werden zurückgegeben:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"image"` ist, aus historischen Gründen weggelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [form-assoziierte benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Beispiele

### Schnelles Syntaxbeispiel

In diesem Beispiel sehen wir, wie die Liste der Formularsteuerelemente erhalten wird und wie man auf ihre Mitglieder durch Index und durch Name oder ID zugreifen kann.

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

### Zugriff auf Formularsteuerelemente

Dieses Beispiel erhält die Elementliste des Formulars und iteriert dann über die Liste, um {{HTMLElement("input")}}-Elemente des Typs [`"text"`](/de/docs/Web/HTML/Reference/Elements/input/text) zu suchen, damit eine Form der Verarbeitung an ihnen durchgeführt werden kann.

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

### Deaktivierung von Formularsteuerelementen

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
