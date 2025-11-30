---
title: "HTMLInputElement: showPicker() Methode"
short-title: showPicker()
slug: Web/API/HTMLInputElement/showPicker
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.showPicker()`** Methode zeigt den Browser-Auswahldialog für ein `input`-Element an.

Dies ist derselbe Auswahldialog, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, aber er kann durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

In der Regel implementieren Browser dies für Eingaben der Typen: `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"` oder `"file"`. Es kann auch mit Elementen aus einem {{htmlelement("datalist")}}-Element oder dem [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut vorab ausgefüllt werden.

Allgemeiner sollte diese Methode idealerweise den Auswahldialog für jedes Eingabeelement auf der Plattform anzeigen, das einen Auswahldialog hat.

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
  - : Wird ausgelöst, wenn das Element nicht veränderbar ist, was bedeutet, dass der Nutzer es nicht ändern kann und/oder es nicht automatisch vorab ausgefüllt werden kann.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang nicht explizit durch eine Benutzeraktion wie eine Berührungs- oder Mausklickgeste ausgelöst wird (der Auswahldialog erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es in einem Cross-Origin-Iframe aufgerufen wird, ausgenommen Datei- und Farbauswahldialoge (aus historischen Gründen ausgenommen).

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

### Normale Eingabedialoge

Dieses Beispiel zeigt, wie diese Funktion für `color`- und `file`-Eingabedialoge verwendet werden kann.

> [!NOTE]
> Auswahldialoge für `date`, `datetime-local`, `month`, `time`, `week` werden auf die gleiche Weise gestartet. Sie können hier nicht gezeigt werden, da Live-Beispiele in einem Cross-Origin-Frame ausgeführt werden und einen [`SecurityError`](#securityerror) verursachen würden.

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

Klicken Sie auf den Button neben jedem Eingabetyp, um seinen Auswahldialog anzuzeigen.

{{EmbedLiveSample("Normale Eingabedialoge", "100%", "140px")}}

### showPicker() für ein datalist input

`showPicker()` kann den Auswahldialog für eine Liste von Optionen starten, die in einem [`<datalist>`](/de/docs/Web/HTML/Reference/Elements/datalist) definiert sind.

Zuerst definieren wir ein `<datalist>` in HTML, bestehend aus einer Anzahl von Internet-Browsern, einer Eingabe vom Typ `text`, die es verwendet, und einem Button.

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

Der folgende Code fügt einen Ereignislistener hinzu, der `showPicker()` aufruft, wenn der Button geklickt wird.

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

`showPicker()` kann einen Auswahldialog für eine [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Eingabe starten.

Hier definieren wir eine Eingabe, die eine Autovervollständigungsoption "name" annimmt.

```html
<input autocomplete="name" /> <button>Show autocomplete options</button>
```

Der folgende Code zeigt den Auswahldialog für die Eingabe, wenn der Button geklickt wird.

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
