---
title: "SVGStyleElement: title-Eigenschaft"
short-title: title
slug: Web/API/SVGStyleElement/title
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.title`**-Eigenschaft ist ein String, der dem [`title`](/de/docs/Web/SVG/Element/style#title)-Attribut des angegebenen SVG-Style-Elements entspricht.
Sie kann verwendet werden, um zwischen [alternativen Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) zu wählen.

## Wert

Ein String mit beliebigem Wert.

Der Wert wird mit dem String initialisiert, der im entsprechenden Style-Attribut [`title`](/de/docs/Web/SVG/Element/style#title) angegeben ist.

## Beispiele

Dieses Beispiel zeigt, wie man programmgesteuert die `title`-Eigenschaft auf einem Style, der in einer SVG-Definition definiert wurde, abfragt und setzt.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, das ein `title` besitzt.
Wir definieren auch ein Textbereich für die Protokollierung des aktuellen Titels.

```html
<textarea id="log" rows="3" cols="50"></textarea>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <style title="gold fill style">
    circle {
      fill: gold;
    }
  </style>
  <circle cx="50" cy="40" r="25" />
</svg>
```

### JavaScript

Der untenstehende Code holt das `style`-Element (ein `SVGStyleElement`) anhand seines Tag-Namens, protokolliert den Titel, ändert ihn und protokolliert den neuen Titel erneut.

```js
const log = document.getElementById("log");

const svg = document.querySelector("svg");
const style = svg.querySelector("style");
log.value = `Initial title: ${style.title}\n`;
style.title = "Altered Title";
log.value += `New title: ${style.title}`;
```

### Ergebnis

Der Text im unteren Protokoll zeigt, dass der Titel zunächst das übereinstimmende Attribut am `<style>`-Element widerspiegelt, aber dann auf einen anderen Wert geändert werden kann.

{{EmbedLiveSample("Examples")}}

Beachten Sie, dass alternative Styles standardmäßig nicht angewendet werden; sie müssen vom Benutzer als bevorzugtes Stylesheet ausgewählt werden. Um die alternativen Stylesheets in Firefox anzuwenden:

1. Öffnen Sie die Menüleiste (Drücken Sie `F10` oder die `Alt`-Taste)
2. Öffnen Sie das Untermenü **Ansicht > Seitenstil**
3. Wählen Sie die Stylesheets basierend auf ihren Namen aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
