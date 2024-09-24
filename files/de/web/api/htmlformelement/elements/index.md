---
title: "HTMLFormElement: elements-Eigenschaft"
short-title: elements
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`elements`** des {{domxref("HTMLFormElement")}} gibt eine {{domxref("HTMLFormControlsCollection")}} zurück, die alle Formularsteuerelemente auflistet, die im {{HTMLElement("form")}}-Element enthalten sind.

Unabhängig davon können Sie die Anzahl der Formularsteuerelemente mit der {{domxref("HTMLFormElement.length", "length")}}-Eigenschaft ermitteln.

Sie können auf ein bestimmtes Formularsteuerelement in der zurückgegebenen Sammlung entweder über einen Index oder die `name`- oder `id`-Attribute des Elements zugreifen.

Vor HTML 5 war das zurückgegebene Objekt eine {{domxref("HTMLCollection")}}, auf der `HTMLFormControlsCollection` basiert.

> [!NOTE]
> Ebenso können Sie eine Liste aller Formulare in einem bestimmten Dokument über die {{domxref("Document.forms", "forms")}}-Eigenschaft des Dokuments erhalten.

## Wert

Eine {{domxref("HTMLFormControlsCollection")}} enthaltend alle Nicht-Bild-Steuerelemente im Formular. Dies ist eine Live-Sammlung; wenn Formularsteuerelemente hinzugefügt oder aus dem Formular entfernt werden, wird diese Sammlung aktualisiert, um die Änderung widerzuspiegeln.

Die Formularsteuerelemente in der zurückgegebenen Sammlung sind in der gleichen Reihenfolge, in der sie im Formular erscheinen, indem eine Vorrang-, Tiefensuche-Traversierung des Baums durchgeführt wird. Dies wird als **Baumordnung** bezeichnet.

Es werden nur die folgenden Elemente zurückgegeben:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle deren [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ist, aus historischen Gründen ausgeschlossen sind)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- [formularassoziierte benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)

## Beispiele

### Schnelles Syntaxbeispiel

In diesem Beispiel sehen wir, wie man die Liste der Formularsteuerelemente erhält und wie man auf deren Mitglieder über Index sowie Name oder ID zugreifen kann.

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

Dieses Beispiel erhält die Elementliste des Formulars und durchläuft dann die Liste, um {{HTMLElement("input")}}-Elemente vom Typ [`"text"`](/de/docs/Web/HTML/Element/input/text) zu finden, damit eine Art Verarbeitung an ihnen vorgenommen werden kann.

```js
const inputs = document.getElementById("my-form").elements;

// Durchlaufen der Formularsteuerelemente
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // Text-Eingabe aktualisieren
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### Deaktivierung von Formularsteuerelementen

```js
const inputs = document.getElementById("my-form").elements;

// Durchlaufen der Formularsteuerelemente
for (let i = 0; i < inputs.length; i++) {
  // Alle Formularsteuerelemente deaktivieren
  inputs[i].setAttribute("disabled", "");
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
