---
title: "HTMLInputElement: showPicker()-Methode"
short-title: showPicker()
slug: Web/API/HTMLInputElement/showPicker
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.showPicker()`**-Methode zeigt den Browser-Auswahldialog für ein `input`-Element an.

Dies ist derselbe Auswahldialog, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann jedoch durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

Browser implementieren diese Methode häufig für Eingaben der folgenden Typen: `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"` oder `"file"`.
Es kann auch mit Elementen aus einem {{htmlelement("datalist")}}-Element oder dem [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut vorab ausgefüllt werden.

Allgemeiner gesagt sollte diese Methode idealerweise den Auswahldialog für jedes Eingabefeld auf der Plattform anzeigen, das über einen solchen Dialog verfügt.

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
  - : Ausgelöst, wenn das Element nicht änderbar ist, was bedeutet, dass der Benutzer es nicht modifizieren und/oder es nicht automatisch vorab ausgefüllt werden kann.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn es nicht explizit durch eine Benutzeraktion wie eine Berührungsgeste oder einen Mausklick aktiviert wird (der Auswahldialog erfordert {{Glossary("Transient_activation", "vorübergehende Aktivierung")}}).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn in einem Cross-Origin-Iframe aufgerufen, außer bei Datei- und Farbdialogen (aus historischen Gründen ausgenommen).

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Feature-Erkennung

Der folgende Code zeigt, wie überprüft werden kann, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLInputElement.prototype) {
  // showPicker() is supported.
}
```

### Normale Eingabeauswahldialoge

Dieses Beispiel zeigt, wie diese Funktion für `color`- und `file`-Eingabeauswahldialoge verwendet werden kann.

> [!NOTE]
> Auswahldialoge für `date`, `datetime-local`, `month`, `time`, `week` werden auf die gleiche Weise gestartet.
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

Der Code holt einfach das vorherige Element des ausgewählten Buttons und ruft `showPicker()` darauf auf.

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

Klicken Sie auf die Schaltfläche neben jedem Eingabetyp, um dessen Auswahldialog anzuzeigen.

{{EmbedLiveSample("Normal input pickers", "100%", "140px")}}

### showPicker() für ein datalist-Eingabe

`showPicker()` kann den Auswahldialog für eine Liste von Optionen starten, die in einem [`<datalist>`](/de/docs/Web/HTML/Reference/Elements/datalist) definiert sind.

Zuerst definieren wir ein `<datalist>` in HTML, das aus einer Anzahl von Internetbrowsern besteht, eine Eingabe vom Typ `text`, die es verwendet, und eine Schaltfläche.

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

Der folgende Code fügt einen Ereignislistener hinzu, der `showPicker()` aufruft, wenn die Schaltfläche angeklickt wird.

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

### showPicker() für Autovervollständigung

`showPicker()` kann einen Auswahldialog für ein [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Eingabefeld starten.

Hier definieren wir eine Eingabe, die eine Autovervollständigungsoption von "name" akzeptiert.

```html
<input autocomplete="name" /> <button>Show autocomplete options</button>
```

Der folgende Code zeigt den Auswahldialog für die Eingabe an, wenn die Schaltfläche geklickt wird.

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
