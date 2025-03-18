---
title: "SVGStyleElement: title-Eigenschaft"
short-title: title
slug: Web/API/SVGStyleElement/title
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.title`**-Eigenschaft ist ein String, der dem [`title`](/de/docs/Web/SVG/Reference/Element/style#title)-Attribut des gegebenen SVG-Style-Elements entspricht. Sie kann verwendet werden, um zwischen [alternativen Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) zu wählen.

## Wert

Ein String mit beliebigem Wert.

Der Wert wird mit dem String initialisiert, der im entsprechenden `title`-Attribut des Style-Elements angegeben ist.

## Beispiele

Dieses Beispiel demonstriert, wie man die `title`-Eigenschaft eines in einer SVG-Definition definierten Style-Elements programmatisch abruft und setzt.

### HTML

Das HTML enthält eine SVG-Definition für ein [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element, das einen `title` hat. Wir definieren auch ein Textfeld, um den aktuellen Titel zu protokollieren.

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

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) über seinen Tag-Namen ab, protokolliert den Titel und ändert diesen dann erneut und protokolliert ihn.

```js
const log = document.getElementById("log");

const svg = document.querySelector("svg");
const style = svg.querySelector("style");
log.value = `Initial title: ${style.title}\n`;
style.title = "Altered Title";
log.value += `New title: ${style.title}`;
```

### Ergebnis

Der Text im Protokoll unten zeigt, dass der Titel anfänglich das übereinstimmende Attribut des `<style>`-Elements widerspiegelt, aber dann auf einen anderen Wert geändert werden kann.

{{EmbedLiveSample("Examples")}}

Beachten Sie, dass alternative Styles nicht standardmäßig angewendet werden; sie müssen vom Benutzer als bevorzugtes Stylesheet ausgewählt werden. Um die alternativen Stylesheets in Firefox anzuwenden:

1. Öffnen Sie die Menüleiste (Drücken Sie `F10` oder tippen Sie die `Alt`-Taste)
2. Öffnen Sie das **Ansicht > Seitenstil**-Untermenü
3. Wählen Sie die Stylesheets basierend auf deren Namen aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
