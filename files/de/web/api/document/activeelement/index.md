---
title: "Dokument: activeElement-Eigenschaft"
short-title: activeElement
slug: Web/API/Document/activeElement
l10n:
  sourceCommit: 6af8f743d5b66c85549d785dcf240d061ac4d92b
---

{{APIRef("DOM")}}

Die **`activeElement`**-Eigenschaft, eine schreibgeschützte Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces, gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des DOM zurück, das Tastaturereignisse wie [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event) empfängt. Dies entspricht normalerweise dem fokussierten Element.

Welche Elemente fokussierbar sind, variiert je nach Plattform und den aktuellen Einstellungen des Browsers. Zum Beispiel sind in Safari, entsprechend der macOS-Standardverhalten, Elemente, die keine Texteingabeelemente sind, standardmäßig nicht fokussierbar. Dies gilt es sei denn, die Einstellung „Voller Tastaturzugriff“ ist in den Systemeinstellungen aktiviert.

In der Regel kann ein Benutzer die <kbd>Tab</kbd>-Taste drücken, um den Fokus auf der Seite zwischen fokussierbaren Elementen zu verschieben, und Tastaturgesten wie <kbd>Leerzeichen</kbd> oder <kbd>Eingabe</kbd> verwenden, um Klicks auf das fokussierte Element zu simulieren.

> [!NOTE]
> Fokus (welches Element Benutzereingabeevents empfängt) ist nicht dasselbe wie Auswahl (der aktuell hervorgehobene Teil des Dokuments). Sie können die aktuelle Auswahl mit [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abrufen.

## Wert

Das tiefste [`Element`](/de/docs/Web/API/Element), das derzeit den Fokus hat.

- Wenn sich das fokussierte Element innerhalb eines Shadow-Trees im aktuellen Dokument befindet (zum Beispiel ist das fokussierte Element in einem `iframe`, und das aufrufende `document` enthält dieses iframe), dann ist dies das Wurzelelement dieses Trees (in diesem Beispiel das `iframe`).
- Wenn sich das fokussierte Element in einem Dokumentbaum befindet, der nicht vom aktuellen Dokument abstammt (zum Beispiel ist das fokussierte Element im Hauptdokument, und das aufrufende `document` ist ein eingebettetes iframe), dann ist dies `null`.
- Wenn kein fokussiertes Element vorhanden ist, ist dies [`Document.body`](/de/docs/Web/API/Document/body) oder [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).

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
textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);
```

### Ergebnis

{{ EmbedLiveSample('Examples', '400', '400') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasFocus`](/de/docs/Web/API/Document/hasFocus)
