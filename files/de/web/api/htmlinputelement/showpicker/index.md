---
title: "HTMLInputElement: showPicker()-Methode"
short-title: showPicker()
slug: Web/API/HTMLInputElement/showPicker
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.showPicker()`**-Methode zeigt den Browser-Auswahlbereich für ein `input`-Element an.

Dies ist derselbe Auswahlbereich, der normalerweise angezeigt wird, wenn das Element ausgewählt wird, kann jedoch durch einen Tastendruck oder eine andere Benutzerinteraktion ausgelöst werden.

In der Regel implementieren Browser ihn für Eingaben folgenden Typs: `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"` oder `"file"`.
Er kann auch mit Elementen aus einem {{htmlelement("datalist")}}-Element oder dem [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut vorausgefüllt werden.

Allgemeiner gesagt, sollte diese Methode idealerweise den Auswahlbereich für jedes Eingabeelement auf der Plattform anzeigen, das einen Auswahlbereich hat.

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
  - : Wird ausgelöst, wenn das Element nicht veränderbar ist, d. h., der Benutzer es nicht ändern kann und/oder es nicht automatisch vorausgefüllt werden kann.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es nicht ausdrücklich durch eine Benutzeraktion wie eine Berührungsgeste oder Mausklick ausgelöst wird (der Auswahlbereich erfordert {{Glossary("Transient activation")}}).
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es in einem Cross-Origin-iframe aufgerufen wird, außer für Datei- und Farbauswahlen (aus historischen Gründen ausgenommen).

## Sicherheit

[Transient user activation](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Funktionserkennung

Der untenstehende Code zeigt, wie geprüft werden kann, ob `showPicker()` unterstützt wird:

```js
if ("showPicker" in HTMLInputElement.prototype) {
  // showPicker() wird unterstützt.
}
```

### Normale Eingabe-Auswahlbereiche

Dieses Beispiel zeigt, wie diese Funktion für Farb- und Dateiauswahlbereiche verwendet werden kann.

> [!NOTE]
> Auswahlbereiche für `date`, `datetime-local`, `month`, `time`, `week` werden auf die gleiche Weise gestartet.
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

Der Code ruft einfach das vorherige Element des ausgewählten Buttons ab und ruft `showPicker()` darauf auf.

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

Klicken Sie auf den Button neben jedem Eingabetyp, um den entsprechenden Auswahlbereich zu zeigen.

{{EmbedLiveSample("Normal input pickers", "100%", "140px")}}

### showPicker() für eine datalist-Eingabe

`showPicker()` kann den Auswahlbereich für eine Liste von Optionen starten, die in einem [`<datalist>`](/de/docs/Web/HTML/Element/datalist) definiert sind.

Zuerst definieren wir ein `<datalist>` in HTML, das aus einer Reihe von Internet-Browsern besteht, eine Eingabe vom Typ `text`, die es verwendet, und einen Button.

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

Der untenstehende Code fügt einen Event-Listener hinzu, der `showPicker()` aufruft, wenn der Button angeklickt wird.

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // Rückfall auf einen anderen Auswahlmechanismus
  }
});
```

### showPicker() für Autovervollständigen

`showPicker()` kann einen Auswahlbereich für eine [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Eingabe starten.

Hier definieren wir eine Eingabe, die eine Autovervollständigen-Option von "name" verwendet.

```html
<input autocomplete="name" /> <button>Show autocomplete options</button>
```

Der untenstehende Code zeigt den Auswahlbereich für die Eingabe, wenn der Button angeklickt wird.

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // Rückfall auf einen anderen Auswahlmechanismus
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("input") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLSelectElement.showPicker()") }}
- {{htmlelement("datalist")}}
- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
