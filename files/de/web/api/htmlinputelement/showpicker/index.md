---
title: "HTMLInputElement: showPicker()-Methode"
short-title: showPicker()
slug: Web/API/HTMLInputElement/showPicker
l10n:
  sourceCommit: cc66f2b97b465aef7a1781ee479ec8c42ee2fe7c
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.showPicker()`**-Methode zeigt den Browser-Picker für ein `input`-Element an.

Dies ist der gleiche Picker, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann jedoch durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

Normalerweise implementieren Browser sie für Eingaben dieser Typen: `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"` oder `"file"`.
Es kann auch mit Elementen aus einem {{htmlelement("datalist")}}-Element oder dem [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut vorab gefüllt werden.

Im Allgemeinen sollte diese Methode idealerweise den Picker für jedes Eingabeelement auf der Plattform anzeigen, das über einen Picker verfügt.

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
  - : Wird ausgelöst, wenn das Element nicht veränderbar ist, d.h. der Benutzer es nicht ändern und/oder nicht automatisch vorab auffüllen kann.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es nicht explizit durch eine Benutzeraktion wie eine Berührungsgeste oder einen Mausklick ausgelöst wird (der Picker erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn in einem Cross-Origin iframe aufgerufen, außer für Datei- und Farb-Picker (aus historischen Gründen ausgenommen).

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Feature-Erkennung

Der folgende Code zeigt, wie überprüft wird, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLInputElement.prototype) {
  // showPicker() is supported.
}
```

### Normale Eingabe-Picker

Dieses Beispiel zeigt, wie diese Funktion für Farb- und Datei-Eingabe-Picker verwendet werden kann.

> [!NOTE]
> Picker für `date`, `datetime-local`, `month`, `time`, `week` werden auf die gleiche Weise gestartet.
> Sie können hier nicht gezeigt werden, da Live-Beispiele in einem Cross-Origin-Frame ausgeführt werden und einen [`SecurityError`](#securityerror) verursachen würden.

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

Der Code erhält einfach das vorherige Element des ausgewählten Buttons und ruft `showPicker()` darauf auf.

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

### showPicker() für ein datalist-Eingabe

`showPicker()` kann den Picker für eine Liste von Optionen starten, die in einem [`<datalist>`](/de/docs/Web/HTML/Reference/Elements/datalist) definiert sind.

Zuerst definieren wir ein `<datalist>` in HTML, das aus einer Anzahl von Internetbrowsern besteht, ein Eingabefeld vom Typ `text`, das es nutzt, und einer Schaltfläche.

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

Der folgende Code fügt einen Ereignis-Listener hinzu, der `showPicker()` aufruft, wenn die Schaltfläche geklickt wird.

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

Wie bei den anderen Pickern können wir diesen Code nicht als Live-Beispiel ausführen, da er in einem Cross-Origin-Frame läuft und einen [`SecurityError`](#securityerror) verursachen würde.

### showPicker() für Autovervollständigung

`showPicker()` kann einen Picker für ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Eingabefeld starten.

Hier definieren wir eine Eingabe, die eine Autovervollständigungsoption von "name" verwendet.

```html
<input autocomplete="name" /> <button>Show autocomplete options</button>
```

Der folgende Code zeigt den Picker für die Eingabe, wenn die Schaltfläche angeklickt wird.

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
- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
