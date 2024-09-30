---
title: "HTMLSelectElement: showPicker() Methode"
short-title: showPicker()
slug: Web/API/HTMLSelectElement/showPicker
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.showPicker()`** Methode zeigt den Browserauswähler für ein `select`-Element an.

Dies ist derselbe Auswähler, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

## Syntax

```js-nolint
showPicker()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht veränderbar ist, was bedeutet, dass der Benutzer es nicht ändern kann und/oder es nicht automatisch vorausgefüllt werden kann.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nicht ausdrücklich durch eine Benutzeraktion wie eine Tippgeste oder einen Mausklick ausgelöst (der Auswähler erfordert [transiente Aktivierung](/de/docs/Glossary/Transient_activation)).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das mit dem Auswähler verknüpfte Element nicht dargestellt wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn in einem Cross-Origin-Iframe aufgerufen.

## Sicherheitsüberlegungen

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

Die Methode darf nur in Same-Origin-Iframes aufgerufen werden; eine Ausnahme wird ausgelöst, wenn sie in einem Cross-Origin-Iframe aufgerufen wird.

## Beispiele

### Funktionserkennung

Der unten stehende Code zeigt, wie geprüft werden kann, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLSelectElement.prototype) {
  // showPicker() is supported.
}
```

### Starten des Auswählers

Dieses Beispiel zeigt, wie Sie mit einer Schaltfläche den Auswähler für ein `<select>`-Element mit zwei Optionen starten.

#### HTML

```html
<p>
  <select>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
  <button type="button">Show Picker</button>
</p>
```

#### JavaScript

Der Code erhält das `<button>`-Element und fügt einen Listener für sein `click`-Ereignis hinzu. Der Ereignishandler ruft das `<select>`-Element ab und ruft `showPicker()` darauf auf.

```js
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  const select = event.srcElement.previousElementSibling;
  try {
    select.showPicker();
  } catch (error) {
    window.alert(error);
  }
});
```

<!-- Ein Live-Beispiel kann hier nicht gezeigt werden, da sie in einem Cross-Origin-Frame ausgeführt werden und einen SecurityError verursachen würden -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("select") }}
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
