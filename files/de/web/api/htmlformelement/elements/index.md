---
title: "HTMLFormElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`elements`** des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Formularsteuerungen auflistet, die im {{HTMLElement("form")}}-Element enthalten sind.

Unabhängig davon können Sie die Anzahl der Formularsteuerungen mit der [`length`](/de/docs/Web/API/HTMLFormElement/length) Eigenschaft ermitteln.

Sie können auf ein bestimmtes Formularsteuerungselement in der zurückgegebenen Sammlung zugreifen, indem Sie entweder einen Index oder die `name` oder `id` Attribute des Elements verwenden.

Vor HTML 5 war das zurückgegebene Objekt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), auf der `HTMLFormControlsCollection` basiert.

> [!NOTE]
> Ebenso können Sie eine Liste aller Formulare in einem bestimmten Dokument mit der [`forms`](/de/docs/Web/API/Document/forms) Eigenschaft des Dokuments erhalten.

## Wert

Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Nicht-Bild-Steuerungen im Formular enthält. Dies ist eine Live-Sammlung; wenn Formularsteuerungen zum Formular hinzugefügt oder daraus entfernt werden, wird diese Sammlung aktualisiert, um die Änderung widerzuspiegeln.

Die Formularsteuerungen in der zurückgegebenen Sammlung befinden sich in derselben Reihenfolge, in der sie im Formular erscheinen, indem sie einer präorderlichen, tiefen-zuerst-Durchlauf des Baums folgen. Dies wird als **Baumreihenfolge** bezeichnet.

Nur die folgenden Elemente werden zurückgegeben:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass solche, deren [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ist, aus historischen Gründen weggelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [form-assoziierte benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Beispiele

### Schnelles Syntaxbeispiel

In diesem Beispiel sehen wir, wie man die Liste der Formularsteuerungen erhält und wie man auf deren Mitglieder über Index und über Name oder ID zugreift.

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

### Zugriff auf Formularsteuerungen

Dieses Beispiel erhält die Elementliste des Formulars und iteriert dann über die Liste, um nach {{HTMLElement("input")}}-Elementen des Typs [`"text"`](/de/docs/Web/HTML/Element/input/text) zu suchen, damit eine Art Verarbeitung auf ihnen durchgeführt werden kann.

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

### Deaktivieren von Formularsteuerungen

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
