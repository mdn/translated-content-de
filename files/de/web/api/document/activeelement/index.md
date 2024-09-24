---
title: "Dokument: activeElement-Eigenschaft"
short-title: activeElement
slug: Web/API/Document/activeElement
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte Eigenschaft **`activeElement`** der {{domxref("Document")}}-Schnittstelle gibt das {{domxref("Element")}} im DOM zurück, das derzeit den Fokus hat.

Oft wird `activeElement` ein {{domxref("HTMLInputElement")}}- oder {{domxref("HTMLTextAreaElement")}}-Objekt zurückgeben, wenn es zu dieser Zeit die Textauswahl hat. In diesem Fall können Sie mit den Eigenschaften `selectionStart` und `selectionEnd` des Objekts detailliertere Informationen erhalten. Andere Male könnte das fokussierte Element ein {{HTMLElement("select")}}-Element (Menü) oder ein {{HTMLElement("input")}}-Element sein.

Typischerweise kann ein Benutzer die Tabulatortaste verwenden, um den Fokus auf der Seite zwischen fokussierbaren Elementen zu wechseln, und die Leertaste, um eines zu aktivieren (das heißt, eine Schaltfläche zu drücken oder ein Optionsfeld umzuschalten). Welche Elemente fokussierbar sind, variiert je nach Plattform und der aktuellen Konfiguration des Browsers. Zum Beispiel sind auf macOS-Systemen Elemente, die keine Texteingabeelemente sind, standardmäßig nicht fokussierbar.

> [!NOTE]
> Fokus (welches Element Benutzereingabeereignisse empfängt) ist nicht dasselbe wie Auswahl (der aktuell hervor gehobene Teil des Dokuments). Sie können die aktuelle Auswahl mit {{domxref("window.getSelection()")}} abrufen.

## Wert

Das {{domxref('Element')}} welches derzeit den Fokus hat, {{HTMLElement("body")}} oder `null`, wenn es kein fokussiertes Element gibt.

## Beispiele

### HTML

```html
<p>Markieren Sie einen Text aus einem der folgenden Textbereiche:</p>

<form>
  <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">
This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.</textarea
  >
  <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">
This is Text Area Two. Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.</textarea
  >
</form>

<p>Aktives Element-ID: <em id="output-element"></em></p>
<p>Ausgewählter Text: <em id="output-text"></em></p>
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.hasFocus")}}
