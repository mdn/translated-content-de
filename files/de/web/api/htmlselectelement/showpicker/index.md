---
title: "HTMLSelectElement: showPicker() Methode"
short-title: showPicker()
slug: Web/API/HTMLSelectElement/showPicker
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.showPicker()`** Methode zeigt den Browser-Picker für ein `select`-Element an.

Dies ist derselbe Picker, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann aber durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

## Syntax

```js-nolint
showPicker()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht veränderbar ist, was bedeutet, dass der Benutzer es nicht ändern kann und/oder es nicht automatisch vorausgefüllt werden kann.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nicht explizit durch eine Benutzeraktion wie eine Berührungsgeste oder Mausklick ausgelöst (der Picker erfordert {{Glossary("Transient_activation", "Transiente Aktivierung")}}).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das mit dem Picker verbundene Element nicht gerendert wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn in einem cross-origin iframe aufgerufen.

## Sicherheitsüberlegungen

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

Die Methode darf nur in same-origin iframes aufgerufen werden; eine Ausnahme wird ausgelöst, wenn diese in einem cross-origin iframe aufgerufen wird.

## Beispiele

### Feature-Erkennung

Der folgende Code zeigt, wie Sie überprüfen können, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLSelectElement.prototype) {
  // showPicker() is supported.
}
```

### Starten des Pickers

Dieses Beispiel zeigt, wie Sie einen Button verwenden, um den Picker für ein `<select>`-Element mit zwei Optionen zu starten.

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

Der Code holt das `<button>`-Element und fügt einen Listener für dessen `click`-Ereignis hinzu.
Der Ereignishandler holt das `<select>`-Element und ruft `showPicker()` darauf auf.

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

<!-- Ein Live-Beispiel kann hier nicht gezeigt werden, da sie in einem cross-origin Frame ausgeführt werden und einen SecurityError verursachen würden -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("select") }}
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
