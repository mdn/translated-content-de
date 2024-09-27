---
title: "HTMLSelectElement: showPicker()-Methode"
short-title: showPicker()
slug: Web/API/HTMLSelectElement/showPicker
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.showPicker()`**-Methode zeigt den Browser-Picker für ein `select`-Element an.

Dies ist derselbe Picker, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann jedoch durch Drücken einer Schaltfläche oder andere Benutzerinteraktionen ausgelöst werden.

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
  - : Wird ausgelöst, wenn das Element nicht änderbar ist, was bedeutet, dass der Benutzer es nicht modifizieren kann und/oder es nicht automatisch vorausgefüllt werden kann.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nicht explizit durch eine Benutzeraktion wie eine Touch-Geste oder einen Mausklick ausgelöst (der Picker erfordert [Transiente Aktivierung](/de/docs/Glossary/Transient_activation)).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das mit dem Picker verbundene Element nicht gerendert wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn in einem Cross-Origin-iFrame aufgerufen.

## Sicherheitsüberlegungen

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich.
Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

Die Methode darf nur in same-origin-iFrames aufgerufen werden; eine Ausnahme wird ausgelöst, wenn dies in einem Cross-Origin-iFrame aufgerufen wird.

## Beispiele

### Feature-Erkennung

Der folgende Code zeigt, wie überprüft werden kann, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLSelectElement.prototype) {
  // showPicker() is supported.
}
```

### Starten des Pickers

Dieses Beispiel zeigt, wie man mit einer Schaltfläche den Picker für ein `<select>`-Element mit zwei Optionen startet.

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

Der Code erfasst das `<button>` und fügt einen Listener für dessen `click`-Ereignis hinzu.
Der Ereignishandler erfasst das `<select>`-Element und ruft `showPicker()` auf diesem auf.

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

<!-- Ein Live-Beispiel kann hier nicht gezeigt werden, da sie in einem Cross-Origin-Frame laufen und einen SecurityError verursachen würden -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("select") }}
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
