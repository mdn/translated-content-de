---
title: "HTMLInputElement: showPicker()-Methode"
short-title: showPicker()
slug: Web/API/HTMLInputElement/showPicker
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.showPicker()`**-Methode zeigt den Browser-Picker für ein `input`-Element an.

Dies ist der gleiche Picker, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann jedoch auch durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

Üblicherweise implementieren Browser dies für Eingaben dieser Typen: `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"` oder `"file"`.
Es kann auch mit Elementen aus einem {{htmlelement("datalist")}}-Element oder dem [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut vorab ausgefüllt werden.

Allgemeiner sollte diese Methode idealerweise den Picker für jedes Eingabeelement auf der Plattform anzeigen, das einen Picker hat.

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
  - : Wird ausgelöst, wenn nicht explizit durch eine Benutzeraktion wie eine Berührungsgeste oder einen Mausklick ausgelöst (der Picker erfordert {{Glossary("Transient_activation", "Transiente Aktivierung")}}).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn in einem Cross-Origin-iframe aufgerufen, außer für Datei- und Farb-Picker (aus historischen Gründen ausgenommen).

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Feature-Erkennung

Der folgende Code zeigt, wie überprüft wird, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLInputElement.prototype) {
  // showPicker() is supported.
}
```

### Normale Eingabe-Picker

Dieses Beispiel zeigt, wie diese Funktion für `color`- und `file`-Eingabe-Picker verwendet werden kann.

> [!NOTE]
> Picker für `date`, `datetime-local`, `month`, `time`, `week` werden auf die gleiche Weise gestartet.
> Sie können hier nicht angezeigt werden, da Live-Beispiele in einem Cross-Origin-Frame ausgeführt werden und einen [`SecurityError`](#securityerror) verursachen würden.

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

Der Code ruft einfach das vorherige Element des ausgewählten Buttons auf und ruft `showPicker()` darauf auf.

```js
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const input = event.srcElement.previousElementSibling;
    try {
      input.showPicker();
    } catch (error) {
      window.alert(error);
    }
  });
});
```

#### Ergebnis

Klicken Sie auf die Schaltfläche neben jedem Eingabetyp, um seinen Picker anzuzeigen.

{{EmbedLiveSample("Normal input pickers", "100%", "140px")}}

### showPicker() für ein Datalist-Eingabefeld

`showPicker()` kann den Picker für eine Liste von Optionen starten, die in einem [`<datalist>`](/de/docs/Web/HTML/Element/datalist) definiert sind.

Zuerst definieren wir ein `<datalist>` in HTML, das aus einer Anzahl von Internetbrowsern besteht, einer Eingabe vom Typ `text`, die es verwendet, und einem Button.

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

Der folgende Code fügt einen Ereignis-Listener hinzu, der `showPicker()` aufruft, wenn der Button geklickt wird.

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

### showPicker() für Autocomplete

`showPicker()` kann einen Picker für eine [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Eingabe starten.

Hier definieren wir eine Eingabe, die eine Autocomplete-Option von "name" annimmt.

```html
<input autocomplete="name" /> <button>Show autocomplete options</button>
```

Der folgende Code zeigt den Picker für die Eingabe, wenn der Button geklickt wird.

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
