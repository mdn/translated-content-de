---
title: "Document: activeElement-Eigenschaft"
short-title: activeElement
slug: Web/API/Document/activeElement
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Shadow DOM")}}

Die **`activeElement`**-Eigenschaft
der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des DOM zurück, das derzeit den Fokus hat.

Oft gibt `activeElement` ein [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) oder
[`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Objekt zurück, wenn es zurzeit die Textauswahl enthält. In diesem Fall können Sie nähere Informationen durch die Verwendung der `selectionStart`- und `selectionEnd`-Eigenschaften des Objekts erhalten.
Zu anderen Zeiten könnte das fokussierte Element ein {{HTMLElement("select")}}-Element (Menü) oder
ein {{HTMLElement("input")}}-Element sein.

Typischerweise kann ein Benutzer die Tabulatortaste drücken, um den Fokus auf der Seite zwischen
fokussierbaren Elementen zu bewegen und die Leertaste verwenden, um eines zu aktivieren (das heißt, um eine Schaltfläche zu drücken oder einen Radiobutton umzuschalten). Welche Elemente fokussierbar sind, variiert je nach Plattform
und aktueller Konfiguration des Browsers. Zum Beispiel sind auf macOS-Systemen Elemente, die keine Texteingabeelemente sind, standardmäßig oft nicht fokussierbar.

> [!NOTE]
> Fokus (welches Element Benutzereingabeereignisse empfängt) ist nicht
> dasselbe wie Auswahl (der aktuell hervorgehobene Teil des Dokuments). Sie können
> die aktuelle Auswahl mit [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) erhalten.

## Wert

Das [`Element`](/de/docs/Web/API/Element), das derzeit den Fokus hat, {{HTMLElement("body")}} oder
`null`, wenn es kein fokussiertes Element gibt.

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
