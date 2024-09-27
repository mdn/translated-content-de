---
title: "SVGStyleElement: title-Eigenschaft"
short-title: title
slug: Web/API/SVGStyleElement/title
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.title`**-Eigenschaft ist ein String, der dem [`title`](/de/docs/Web/SVG/Element/style#title)-Attribut des angegebenen SVG-Stilelements entspricht. Sie kann verwendet werden, um zwischen [alternativen Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) zu wählen.

## Wert

Ein String mit beliebigem Wert.

Der Wert wird durch den im entsprechenden Stil angegebenen String des [`title`](/de/docs/Web/SVG/Element/style#title)-Attributs initialisiert.

## Beispiele

Dieses Beispiel zeigt, wie die `title`-Eigenschaft eines in einer SVG-Definition definierten Stils programmatisch erhalten und gesetzt werden kann.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, das ein `title` hat. Wir definieren auch ein Textfeld, um den aktuellen Titel zu protokollieren.

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

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) mit seinem Tag-Namen ab, protokolliert den Titel, ändert ihn dann, und protokolliert den Titel erneut.

```js
const log = document.getElementById("log");

const svg = document.querySelector("svg");
const style = svg.querySelector("style");
log.value = `Initial title: ${style.title}\n`;
style.title = "Altered Title";
log.value += `New title: ${style.title}`;
```

### Ergebnis

Der Text im folgenden Protokoll zeigt, dass der Titel ursprünglich das übereinstimmende Attribut auf dem `<style>`-Element widerspiegelt, aber dann in einen anderen Wert geändert werden kann.

{{EmbedLiveSample("Examples")}}

Beachten Sie, dass alternative Stile nicht standardmäßig angewendet werden; sie müssen vom Benutzer als bevorzugtes Stylesheet ausgewählt werden. Um die alternativen Stylesheets in Firefox anzuwenden:

1. Öffnen Sie die Menüleiste (drücken Sie `F10` oder tippen Sie die `Alt`-Taste)
2. Öffnen Sie das **Ansicht > Seitenstil**-Untermenü
3. Wählen Sie die Stylesheets basierend auf ihren Namen aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
