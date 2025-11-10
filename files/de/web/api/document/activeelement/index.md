---
title: "Dokument: activeElement-Eigenschaft"
short-title: activeElement
slug: Web/API/Document/activeElement
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

{{APIRef("DOM")}}

Die **`activeElement`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des DOM zurück, das momentan Tastatureingaben wie [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event) empfängt. Dies entspricht normalerweise dem fokussierten Element.

Welche Elemente fokussierbar sind, variiert je nach Plattform und der aktuellen Konfiguration des Browsers. Zum Beispiel sind auf Safari, entsprechend dem Verhalten von macOS, Elemente, die keine Texteingabeelemente sind, standardmäßig nicht fokussierbar, es sei denn, die Einstellung "Volle Tastatursteuerung" ist in den Systemeinstellungen aktiviert.

Typischerweise kann ein Benutzer die <kbd>Tab</kbd>-Taste drücken, um den Fokus zwischen fokussierbaren Elementen auf der Seite zu bewegen, und Tastaturgesten wie <kbd>Leertaste</kbd> oder <kbd>Eingabetaste</kbd> verwenden, um Klicks auf das fokussierte Element zu simulieren.

> [!NOTE]
> Fokus (welches Element Benutzereingaben empfängt) ist nicht dasselbe wie Auswahl (der aktuell markierte Teil des Dokuments). Sie können die aktuelle Auswahl mit [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abrufen.

## Wert

Das tiefste [`Element`](/de/docs/Web/API/Element), das aktuell den Fokus hat.

- Wenn das fokussierte Element innerhalb eines Shadow Trees im aktuellen Dokument ist (zum Beispiel, das fokussierte Element befindet sich innerhalb eines `iframe`, und das aufrufende `document` enthält dieses `iframe`), dann ist dies das Wurzelelement dieses Trees (in diesem Beispiel dieses `iframe`).
- Wenn das fokussierte Element innerhalb eines Dokumentbaums, der nicht vom aktuellen Dokument abstammt, ist (zum Beispiel, das fokussierte Element ist im Hauptdokument, und das aufrufende `document` ist ein eingebettetes `iframe`), dann ist dies `null`.
- Wenn kein Element fokussiert ist, ist dies das [`Document.body`](/de/docs/Web/API/Document/body) oder [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).

## Beispiele

### HTML

```html
<p>Select some text from one of the text areas below:</p>

<form>
  <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">
This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.</textarea
  >
  <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">
This is Text Area Two. Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.</textarea
  >
</form>

<p>Active element ID: <em id="output-element"></em></p>
<p>Selected text: <em id="output-text"></em></p>
```

### JavaScript

```js
function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd,
  );

  const outputElement = document.getElementById("output-element");
  const outputText = document.getElementById("output-text");
  outputElement.textContent = activeTextarea.id;
  outputText.textContent = selection;
}

const textarea1 = document.getElementById("ta-example-one");
const textarea2 = document.getElementById("ta-example-two");
textarea1.addEventListener("mouseup", onMouseUp);
textarea2.addEventListener("mouseup", onMouseUp);
```

### Ergebnis

{{ EmbedLiveSample('Examples', '400', '400') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasFocus`](/de/docs/Web/API/Document/hasFocus)
