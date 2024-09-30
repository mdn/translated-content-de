---
title: textLength
slug: Web/SVG/Attribute/textLength
l10n:
  sourceCommit: 827631e22ee2897dda4cde4bd2a18de53a5c4167
---

{{SVGRef}}

Das **`textLength`**-Attribut, verfügbar für die SVG-Elemente {{SVGElement("text")}} und {{SVGElement("tspan")}}, erlaubt es Ihnen, die Breite des Bereichs anzugeben, in den der Text gezeichnet wird. Der [User Agent](/de/docs/Glossary/user_agent) stellt sicher, dass der Text diese Entfernung nicht überschreitet, indem er die im {{SVGAttr("lengthAdjust")}}-Attribut festgelegte Methode oder Methoden verwendet. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst, aber die Größe der Glyphen kann ebenfalls angepasst werden, wenn Sie `lengthAdjust` ändern.

Durch die Verwendung von `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von Bedingungen wie dem Fehlschlagen des Ladens von Web-Fonts (oder dem noch nicht geladenen Zustand) immer die gleiche Breite hat.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
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

## Verwendungsnotizen

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
  - : Dieser Wert gibt die Breite des Bereichs an, den der Text bei der Anpassung einnimmt, entweder als absolute Länge oder als Prozentsatz.
- `<number>`
  - : Ein numerischer Wert beschreibt eine Länge, die sich auf die Einheiten des aktuellen Koordinatensystems bezieht.

## Interaktives Beispiel

Lassen Sie uns ein einfaches Beispiel erstellen, das Text präsentiert, den Sie mit einem {{HTMLElement("input")}}-Element vom Typ [`"range"`](/de/docs/Web/HTML/Element/input/range) in der Größe ändern können.

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

Beginnen wir mit dem SVG. Es ist ziemlich einfach, mit einem 1000-mal-300-Pixel-Raum, der in eine 10-Zentimeter-mal-3-Zentimeter-Box gemappt wird.

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

Zuerst wird ein {{SVGElement("rect")}}-Element verwendet, um ein Rechteck zu erstellen und zu umranden, das den Text enthält. Dann wird {{SVGElement("text")}} verwendet, um das Textelement selbst zu erstellen, mit einer {{SVGAttr("id")}} von `"hello"`.

### HTML

Das HTML ist ebenfalls einfach, mit nur zwei angezeigten Elementen, die in einem Gruppierungs-{{HTMLElement("div")}} enthalten sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}}-Element vom Typ `"range"` wird verwendet, um den Schieberegler zu erzeugen, den der Benutzer betätigt, um die Breite des Textes zu ändern. Ein {{HTMLElement("span")}}-Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Breitenwert anzuzeigen.

### JavaScript

Schließlich werfen wir einen Blick auf den JavaScript-Code. Zuerst werden Referenzen auf die Elemente gespeichert, auf die zugegriffen werden muss, wobei [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet wird:

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

Nachdem die Elementreferenzen abgerufen wurden, wird ein {{domxref("EventTarget.addEventListener", "Ereignislistener", "", 1)}} eingerichtet, indem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem Schieberegler aufgerufen wird, um alle [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse, die auftreten, zu empfangen. Diese Ereignisse werden gesendet, sobald sich der Wert des Schiebereglers ändert, auch wenn der Benutzer ihn noch bewegt, so dass wir die Textbreite reaktionsschnell anpassen können.

Wenn ein `"input"`-Ereignis auftritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers einzustellen, wobei der `SVGLength`-Schnittstelle der `SVG_LENGTHTYPE_PX`-Einheitentyp verwendet wird, um anzugeben, dass der Wert Pixel darstellt. Beachten Sie, dass wir in `textLength` auf dessen `baseVal`-Eigenschaft zugreifen müssen; `textLength` wird als [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt gespeichert, daher können wir es nicht wie eine einfache Zahl behandeln.

Nach dem Aktualisieren der Textbreite werden die Inhalte des `widthDisplay`-Felds ebenfalls mit dem neuen Wert aktualisiert, und wir sind fertig.

### Ergebnis

So sieht das Beispiel aus. Versuchen Sie, den Schieberegler zu verschieben, um ein Gefühl für seine Wirkung zu bekommen.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Tutorial: [Texts](/de/docs/Web/SVG/Tutorial/Texts)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) und [`SVGLength`](/de/docs/Web/API/SVGLength)
- {{SVGElement("text")}}
