---
title: "HTMLSelectElement: showPicker()-Methode"
short-title: showPicker()
slug: Web/API/HTMLSelectElement/showPicker
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.showPicker()`**-Methode zeigt den Browserauswahldialog für ein `select`-Element an.

Dies ist der gleiche Auswahldialog, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann jedoch auch durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

## Syntax

```js-nolint
showPicker()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Element nicht veränderbar ist, was bedeutet, dass der Benutzer es nicht modifizieren kann und/oder es nicht automatisch vorausgefüllt werden kann.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es nicht explizit durch eine Benutzeraktion wie eine Berührungsgeste oder einen Mausklick ausgelöst wird (der Auswahldialog erfordert {{Glossary("Transient activation")}}).
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das dem Auswahldialog zugeordnete Element nicht gerendert wird.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn in einem Cross-Origin-iFrame aufgerufen.

## Sicherheitsüberlegungen

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich.
Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktionalität funktioniert.

Die Methode darf nur in gleich-originigen iFrames aufgerufen werden; eine Ausnahme wird ausgelöst, wenn sie in einem Cross-Origin-iFrame aufgerufen wird.

## Beispiele

### Funktionsüberprüfung

Der folgende Code zeigt, wie man überprüft, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLSelectElement.prototype) {
  // showPicker() wird unterstützt.
}
```

### Starten des Auswahldialogs

Dieses Beispiel zeigt, wie man mit einem Button den Auswahldialog für ein `<select>`-Element mit zwei Optionen startet.

#### HTML

```html
<p>
  <select>
    <option value="1">Eins</option>
    <option value="2">Zwei</option>
  </select>
  <button type="button">Auswahldialog anzeigen</button>
</p>
```

#### JavaScript

Der Code holt sich den `<button>` und fügt einen Listener für dessen `click`-Ereignis hinzu.
Der Event-Handler holt sich das `<select>`-Element und ruft `showPicker()` darauf auf.

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

<!-- Ein Live-Beispiel kann hier nicht gezeigt werden, da sie in einem Cross-Origin-Frame laufen und einen SecurityError verursachen würden. -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("select") }}
- {{ domxref("HTMLSelectElement") }}
- {{ domxref("HTMLInputElement.showPicker()") }}
