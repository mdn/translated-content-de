---
title: "HTMLFormElement: `elements`-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Eigenschaft **`elements`** gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Formularelemente auflistet, die in dem {{HTMLElement("form")}}-Element enthalten sind.

Unabhängig davon können Sie die Anzahl der Formularelemente mit der [`length`](/de/docs/Web/API/HTMLFormElement/length)-Eigenschaft ermitteln.

Sie können auf ein bestimmtes Formularelement in der zurückgegebenen Sammlung zugreifen, indem Sie entweder einen Index oder die `name`- oder `id`-Attribute des Elements verwenden.

Vor HTML 5 war das zurückgegebene Objekt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der `HTMLFormControlsCollection` basiert.

> [!NOTE]
> Ebenso können Sie eine Liste aller Formulare in einem bestimmten Dokument mithilfe der [`forms`](/de/docs/Web/API/Document/forms)-Eigenschaft des Dokuments erhalten.

## Wert

Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle nicht-bildlichen Steuerelemente im Formular enthält. Dies ist eine Live-Sammlung; wenn Formularelemente zum Formular hinzugefügt oder daraus entfernt werden, wird diese Sammlung aktualisiert, um die Änderung widerzuspiegeln.

Die Formularelemente in der zurückgegebenen Sammlung befinden sich in der gleichen Reihenfolge, in der sie im Formular erscheinen, gemäß einer Preorder-, Tiefensuche des Baums. Dies wird als **Baumreihenfolge** bezeichnet.

Nur die folgenden Elemente werden zurückgegeben:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"image"` ist, aus historischen Gründen ausgelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [Formular-assoziierte benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Beispiele

### Schnelles Syntaxbeispiel

In diesem Beispiel sehen wir, wie man die Liste der Formularelemente erhält und wie man auf deren Mitglieder Zugriff per Index und Name oder ID hat.

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

### Zugriff auf Formularelemente

Dieses Beispiel ruft die Elementliste des Formulars ab und durchläuft dann die Liste, um {{HTMLElement("input")}}-Elemente des Typs [`"text"`](/de/docs/Web/HTML/Reference/Elements/input/text) zu suchen, sodass eine Art Verarbeitung an ihnen durchgeführt werden kann.

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // Update text input
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### Deaktivieren von Formularelementen

```js
const inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (let i = 0; i < inputs.length; i++) {
  // Disable all form controls
  inputs[i].setAttribute("disabled", "");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
