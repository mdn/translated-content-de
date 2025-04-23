---
title: textLength
slug: Web/SVG/Reference/Attribute/textLength
l10n:
  sourceCommit: 364ac5bc62331153a6a7daaba93ee3cd0396d18f
---

Das **`textLength`**-Attribut, verfügbar bei den SVG-Elementen {{SVGElement("text")}} und {{SVGElement("tspan")}}, ermöglicht es Ihnen, die Breite des Bereichs anzugeben, in den der Text gezeichnet wird. Der {{Glossary("user_agent", "User Agent")}} stellt sicher, dass der Text nicht über diese Distanz hinausgeht, wobei die Methode(n) verwendet werden, die durch das {{SVGAttr("lengthAdjust")}}-Attribut angegeben sind. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst, aber die Glyphengröße kann ebenfalls angepasst werden, wenn Sie `lengthAdjust` ändern.

Durch die Verwendung von `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von den Bedingungen in gleicher Breite angezeigt wird, einschließlich wenn Webfonts nicht geladen werden (oder noch nicht geladen wurden).

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <text y="20" textLength="6em">Small text length</text>
  <text y="40" textLength="120%">Big text length</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "100")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Dieser Wert gibt die Breite des Raums an, den der Text als absolute Länge oder Prozentsatz belegen soll.
- `<number>`
  - : Ein numerischer Wert beschreibt eine Länge in Bezug auf die Einheiten des aktuellen Koordinatensystems.

## Interaktives Beispiel

Dieses Beispiel präsentiert Text, den Sie mit einem {{HTMLElement("input")}}-Element des Typs [`"range"`](/de/docs/Web/HTML/Reference/Elements/input/range) in der Größe ändern können.

### CSS

```css
.controls {
  font:
    16px "Open Sans",
    "Arial",
    sans-serif;
}
```

### SVG

Beginnen wir mit dem SVG. Es ist ziemlich einfach, mit einem 1000 x 300 Pixel großen Bereich, der auf eine Box von 10 Zentimeter mal 3 Zentimeter abgebildet ist.

```html
<svg
  width="10cm"
  height="3cm"
  viewBox="0 0 1000 300"
  xmlns="http://www.w3.org/2000/svg">
  <rect
    x="1"
    y="1"
    width="998"
    height="298"
    fill="none"
    stroke="green"
    stroke-width="2" />

  <text
    id="hello"
    x="10"
    y="150"
    font-family="sans-serif"
    font-size="60"
    fill="green">
    Hello world!
  </text>
</svg>
```

Zuerst wird ein {{SVGElement("rect")}}-Element verwendet, um ein Rechteck zu erstellen und zu umrahmen, das den Text enthalten soll. Dann wird {{SVGElement("text")}} verwendet, um das Textelement selbst zu erstellen, mit einer {{SVGAttr("id")}} von `"hello"`.

### HTML

Das HTML umfasst zwei angezeigte Elemente, die in einem gruppierenden {{HTMLElement("div")}} enthalten sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}}-Element vom Typ `"range"` wird verwendet, um das Schieberegler-Kontrollfeld zu erstellen, das der Benutzer manipulieren wird, um die Breite des Textes zu ändern. Ein {{HTMLElement("span")}}-Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Breitenwert anzuzeigen.

### JavaScript

Abschließend werfen wir einen Blick auf den JavaScript-Code. Es beginnt damit, Referenzen auf die Elemente zu speichern, auf die zugegriffen werden muss, unter Verwendung von [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById):

```js
const widthSlider = document.getElementById("widthSlider");
const widthDisplay = document.getElementById("widthDisplay");
const textElement = document.getElementById("hello");
const baseLength = Math.floor(textElement.textLength.baseVal.value);

widthSlider.value = baseLength;

widthSlider.addEventListener(
  "input",
  (event) => {
    textElement.textLength.baseVal.newValueSpecifiedUnits(
      SVGLength.SVG_LENGTHTYPE_PX,
      widthSlider.valueAsNumber,
    );
    widthDisplay.innerText = widthSlider.value;
  },
  false,
);

widthSlider.dispatchEvent(new Event("input"));
```

Nach dem Abrufen der Elementreferenzen wird ein [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) durch Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf das Schieberegler-Kontrollfeld eingerichtet, um alle [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse zu empfangen, die auftreten. Diese Ereignisse werden jedes Mal gesendet, wenn sich der Wert des Schiebereglers ändert, selbst wenn der Benutzer ihn nicht mehr bewegt, sodass wir die Textbreite reaktionsschnell anpassen können.

Wenn ein `"input"`-Ereignis auftritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers festzulegen, wobei der `SVGLength`-Schnittstelle der Typ `SVG_LENGTHTYPE_PX` verwendet wird, um anzugeben, dass der Wert Pixel repräsentiert. Beachten Sie, dass wir in `textLength` eintauchen müssen, um seine `baseVal`-Eigenschaft zu erhalten; `textLength` wird als [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt gespeichert, sodass wir es nicht wie eine einfache Zahl behandeln können.

Nachdem die Textbreite aktualisiert wurde, wird der Inhalt des `widthDisplay`-Felds ebenfalls mit dem neuen Wert aktualisiert, und wir sind fertig.

### Ergebnis

So sieht das Beispiel aus. Versuchen Sie, den Schieberegler zu ziehen, um ein Gefühl dafür zu bekommen, was er bewirkt.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Tutorial: [Texte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Texts)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) und [`SVGLength`](/de/docs/Web/API/SVGLength)
- {{SVGElement("text")}}
