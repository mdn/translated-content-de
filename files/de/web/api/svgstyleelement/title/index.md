---
title: "SVGStyleElement: title-Eigenschaft"
short-title: title
slug: Web/API/SVGStyleElement/title
l10n:
  sourceCommit: 176953b8260e0dd4328a7e788e8179accbafb8e1
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.title`**-Eigenschaft ist ein String, der dem [`title`](/de/docs/Web/SVG/Element/style#title)-Attribut des gegebenen SVG-Style-Elements entspricht. Sie kann verwendet werden, um zwischen [alternativen Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) zu wählen.

## Wert

Ein String mit beliebigem Wert.

Der Wert wird mit dem im entsprechenden Styles gegebene String im [`title`](/de/docs/Web/SVG/Element/style#title)-Attribut initialisiert.

## Beispiele

Dieses Beispiel zeigt, wie man die `title`-Eigenschaft eines in einer SVG-Definition definierten Styles programmatisch abruft und setzt.

### HTML

Das HTML enthält eine SVG-Definition für ein [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, das ein `title` hat. Wir definieren auch ein Textfeld zum Protokollieren des aktuellen Titels.

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

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) über seinen Tag-Namen ab, protokolliert den Titel, ändert ihn dann und protokolliert den Titel erneut.

```js
const log = document.getElementById("log");

const svg = document.querySelector("svg");
const style = svg.querySelector("style");
log.value = `Initial title: ${style.title}\n`;
style.title = "Altered Title";
log.value += `New title: ${style.title}`;
```

### Ergebnis

Der Text im untenstehenden Protokoll zeigt, dass der Titel zunächst das übereinstimmende Attribut am `<style>`-Element widerspiegelt, aber dann in einen anderen Wert geändert werden kann.

{{EmbedLiveSample("Examples")}}

Beachten Sie, dass alternative Styles standardmäßig nicht angewendet werden; sie müssen vom Benutzer als bevorzugtes Stylesheet ausgewählt werden.
Um die alternativen Stylesheets in Firefox anzuwenden:

1. Öffnen Sie die Menüleiste (drücken Sie `F10` oder tippen Sie die `Alt`-Taste)
2. Öffnen Sie das Untermenü **Ansicht > Seitenstil**
3. Wählen Sie die Stylesheets anhand ihrer Namen aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
