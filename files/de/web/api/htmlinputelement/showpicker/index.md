---
title: "HTMLInputElement: Methode showPicker()"
short-title: showPicker()
slug: Web/API/HTMLInputElement/showPicker
l10n:
  sourceCommit: 3d10d0f1bd7f412dbdf759613c79da7711ce8261
---

{{ APIRef("HTML DOM") }}

Die Methode **`HTMLInputElement.showPicker()`** zeigt den Browser-Picker für ein `input`-Element an.

Dies ist derselbe Picker, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann jedoch durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

In der Regel wird es von Browsern für Eingaben dieser Typen implementiert: `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"` oder `"file"`. Es kann auch mit Elementen aus einem {{htmlelement("datalist")}}-Element oder dem [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut vorab gefüllt werden.

Allgemeiner gesagt, sollte diese Methode idealerweise den Picker für jedes Eingabeelement auf der Plattform anzeigen, das einen Picker hat.

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
  - : Wird ausgelöst, wenn das Element nicht veränderbar ist, was bedeutet, dass der Benutzer es nicht ändern und/oder es nicht automatisch vorab gefüllt werden kann.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nicht ausdrücklich durch eine Benutzeraktion wie ein Touch-Geste oder Mausklick ausgelöst (der Picker erfordert {{Glossary("Transient_activation", "flüchtige Aktivierung")}}).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es in einem fremden iframe aufgerufen wird, außer für Datei- und Farb-Picker (aus historischen Gründen ausgenommen).

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Feature-Erkennung

Der folgende Code zeigt, wie überprüft wird, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLInputElement.prototype) {
  // showPicker() is supported.
}
```

### Normale Eingabe-Picker

Dieses Beispiel zeigt, wie diese Funktion für `color` und `file` Eingabe-Picker verwendet werden kann.

> [!NOTE]
> Picker für `date`, `datetime-local`, `month`, `time`, `week` werden auf die gleiche Weise gestartet.
> Sie können hier nicht angezeigt werden, da Live-Beispiele in einem fremden Rahmen ausgeführt werden und einen [`SecurityError`](#securityerror) verursachen würden.

#### HTML

```html
<p>
  <input type="color" />
  <button id="color">Show the color picker</button>
</p>

<p>
  <input type="file" />
  <button id="file">Show the file picker</button>
</p>
```

#### JavaScript

Der Code ruft einfach das vorherige Element des ausgewählten Buttons ab und ruft `showPicker()` darauf auf.

```js
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const input = event.srcElement.previousElementSibling;
    try {
      input.showPicker();
    } catch (error) {
      console.log(error);
    }
  });
});
```

#### Ergebnis

Klicken Sie auf die Schaltfläche neben jedem Eingabetyp, um dessen Picker anzuzeigen.

{{EmbedLiveSample("Normal input pickers", "100%", "140px")}}

### showPicker() für ein datalist input

`showPicker()` kann den Picker für eine Liste von Optionen starten, die in einem [`<datalist>`](/de/docs/Web/HTML/Element/datalist) definiert sind.

Zuerst definieren wir ein `<datalist>` in HTML, das eine Anzahl von Internet-Browsern, eine Eingabe vom Typ `text`, die es verwendet, und eine Schaltfläche enthält.

```html
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>

<input type="text" list="browsers" />
<button>Select browser</button>
```

Der folgende Code fügt einen Ereignis-Listener hinzu, der `showPicker()` aufruft, wenn die Schaltfläche angeklickt wird.

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // Fall back to another picker mechanism
  }
});
```

### showPicker() für autocomplete

`showPicker()` kann einen Picker für eine [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Eingabe starten.

Hier definieren wir eine Eingabe, die eine Autocomplete-Option mit dem Wert "name" annimmt.

```html
<input autocomplete="name" /> <button>Show autocomplete options</button>
```

Der folgende Code zeigt den Picker für die Eingabe an, wenn die Schaltfläche angeklickt wird.

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // Fall back to another picker mechanism
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("input") }}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)
- {{htmlelement("datalist")}}
- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
