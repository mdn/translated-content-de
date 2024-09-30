---
title: "HTMLFormElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`elements`** des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle in dem {{HTMLElement("form")}}-Element enthaltenen Formularsteuerelemente auflistet.

Unabhängig davon können Sie die Anzahl der Formularsteuerelemente mithilfe der [`length`](/de/docs/Web/API/HTMLFormElement/length)-Eigenschaft ermitteln.

Sie können auf ein bestimmtes Formularsteuerelement in der zurückgegebenen Sammlung zugreifen, indem Sie entweder einen Index oder die `name`- oder `id`-Attribute des Elements verwenden.

Vor HTML5 war das zurückgegebene Objekt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der `HTMLFormControlsCollection` basiert.

> [!NOTE]
> Ebenso können Sie eine Liste aller in einem bestimmten Dokument enthaltenen Formulare über die [`forms`](/de/docs/Web/API/Document/forms)-Eigenschaft des Dokuments erhalten.

## Wert

Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Nicht-Bild-Steuerelemente im Formular enthält. Dies ist eine Live-Sammlung; wenn Formularsteuerelemente zum Formular hinzugefügt oder daraus entfernt werden, wird diese Sammlung aktualisiert, um die Änderung widerzuspiegeln.

Die Formularsteuerelemente in der zurückgegebenen Sammlung sind in derselben Reihenfolge, in der sie im Formular erscheinen, indem eine Preorder-Tiefensuche der Baumstruktur erfolgt. Dies wird als **Baumordnung** bezeichnet.

Nur die folgenden Elemente werden zurückgegeben:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass aus historischen Gründen alle mit [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ausgelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [formularassoziierte benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Beispiele

### Schnelles Syntaxbeispiel

In diesem Beispiel sehen wir, wie man die Liste der Formularsteuerelemente erhält und wie man auf deren Mitglieder über Index und über Namen oder ID zugreift.

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

Dieses Beispiel erhält die Elementliste des Formulars und durchläuft dann die Liste, um {{HTMLElement("input")}}-Elemente vom Typ [`"text"`](/de/docs/Web/HTML/Element/input/text) zu suchen, sodass eine Verarbeitung an ihnen durchgeführt werden kann.

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

### Deaktivieren von Formularsteuerelementen

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
