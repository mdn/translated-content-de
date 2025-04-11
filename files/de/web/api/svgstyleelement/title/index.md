---
title: "SVGStyleElement: title-Eigenschaft"
short-title: title
slug: Web/API/SVGStyleElement/title
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.title`**-Eigenschaft ist ein String, der dem [`title`](/de/docs/Web/SVG/Reference/Element/style#title)-Attribut des gegebenen SVG-Style-Elements entspricht. Sie kann verwendet werden, um zwischen [alternativen Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) zu wählen.

## Wert

Ein String mit beliebigem Wert.

Der Wert wird mit dem String initialisiert, der im entsprechenden [`title`](/de/docs/Web/SVG/Reference/Element/style#title)-Attribut des Styles angegeben ist.

## Beispiele

Dieses Beispiel zeigt, wie man programmgesteuert die `title`-Eigenschaft eines im SVG-Definitionsteil festgelegten Styles abrufen und setzen kann.

### HTML

Der HTML-Inhalt enthält eine SVG-Definition für ein [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element, das ein `title`-Attribut besitzt. Zusätzlich definieren wir ein Textfeld zur Protokollierung des aktuellen Titels.

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

Der untenstehende Code erhält das `style`-Element (ein `SVGStyleElement`) durch seinen Tag-Namen, protokolliert den Titel, ändert dann den Titel und protokolliert ihn erneut.

```js
const log = document.getElementById("log");

const svg = document.querySelector("svg");
const style = svg.querySelector("style");
log.value = `Initial title: ${style.title}\n`;
style.title = "Altered Title";
log.value += `New title: ${style.title}`;
```

### Ergebnis

Der Text im untenstehenden Protokoll zeigt, dass der Titel anfangs das zum `<style>`-Element passende Attribut widerspiegelt, aber anschließend in einen anderen Wert geändert werden kann.

{{EmbedLiveSample("Examples")}}

Beachten Sie, dass alternative Styles standardmäßig nicht angewendet werden; sie müssen vom Benutzer als bevorzugtes Stylesheet ausgewählt werden. Um die alternativen Stylesheets in Firefox anzuwenden:

1. Öffnen Sie die Menüleiste (Drücken Sie `F10` oder tippen Sie die `Alt`-Taste)
2. Öffnen Sie das Untermenü **Ansicht > Seitenstil**
3. Wählen Sie die Stylesheets basierend auf ihren Namen aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
