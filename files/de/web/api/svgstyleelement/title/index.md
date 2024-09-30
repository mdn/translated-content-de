---
title: "SVGStyleElement: title-Eigenschaft"
short-title: title
slug: Web/API/SVGStyleElement/title
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.title`**-Eigenschaft ist ein String, der dem [`title`](/de/docs/Web/SVG/Element/style#title)-Attribut des gegebenen SVG-Stilelements entspricht. Sie kann verwendet werden, um zwischen [alternativen Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) auszuwählen.

## Wert

Ein String mit beliebigem Wert.

Der Wert wird mit dem String initialisiert, der im entsprechenden `title`-Attribut des Styles angegeben ist.

## Beispiele

Dieses Beispiel zeigt, wie man programmgesteuert die `title`-Eigenschaft eines Styles, der in einer SVG-Definition definiert wurde, auslesen und setzen kann.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, das ein `title` hat. Wir definieren auch ein Textfeld zum Protokollieren des aktuellen Titels.

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

Der untenstehende Code erhält das `style`-Element (ein `SVGStyleElement`) über seinen Tag-Namen, protokolliert den Titel und ändert und protokolliert dann den Titel erneut.

```js
const log = document.getElementById("log");

const svg = document.querySelector("svg");
const style = svg.querySelector("style");
log.value = `Initial title: ${style.title}\n`;
style.title = "Altered Title";
log.value += `New title: ${style.title}`;
```

### Ergebnis

Der Text im Protokoll unten zeigt, dass der Titel zunächst das entsprechende Attribut des `<style>`-Elements widerspiegelt, aber dann auf einen anderen Wert geändert werden kann.

{{EmbedLiveSample("Examples")}}

Beachten Sie, dass alternative Styles nicht standardmäßig angewendet werden; sie müssen vom Benutzer als bevorzugtes Stylesheet ausgewählt werden. Um die alternativen Stylesheets in Firefox anzuwenden:

1. Öffnen Sie die Menüleiste (drücken Sie `F10` oder tippen Sie auf die `Alt`-Taste)
2. Öffnen Sie das **Ansicht > Seitendesign**-Untermenü
3. Wählen Sie die Stylesheets basierend auf ihren Namen aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
