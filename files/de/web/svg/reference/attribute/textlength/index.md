---
title: textLength
slug: Web/SVG/Reference/Attribute/textLength
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das **`textLength`** Attribut, verfügbar auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen, ermöglicht es Ihnen, die Breite des Raumes anzugeben, in dem der Text gezeichnet wird. Der {{Glossary("user_agent", "user agent")}} stellt sicher, dass der Text diese Distanz nicht überschreitet, indem die Methode oder Methoden verwendet werden, die durch das {{SVGAttr("lengthAdjust")}} Attribut angegeben sind. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst, aber die Glyhengröße kann auch angepasst werden, wenn Sie `lengthAdjust` ändern.

Durch die Verwendung von `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von Bedingungen wie dem Fehlschlagen des Ladens von Webfonts (oder dem noch nicht geladenen Zustand) in der gleichen Breite angezeigt wird.

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

## Verwendungshinweise

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
      <td>Keiner</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Dieser Wert gibt die Breite des Raumes an, den der Text als absolute Länge oder Prozentsatz einnimmt.
- `<number>`
  - : Ein numerischer Wert definiert eine Länge in Bezug auf die Einheiten des aktuellen Koordinatensystems.

## Interaktives Beispiel

Dieses Beispiel zeigt Text, den Sie mit einem {{HTMLElement("input")}} Element vom Typ [`"range"`](/de/docs/Web/HTML/Reference/Elements/input/range) skalieren können.

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

Beginnen wir mit dem SVG. Es ist recht einfach gehalten mit einem 1000-mal-300 Pixel großen Raum, der in ein 10-Zentimeter-mal-3-Zentimeter Feld abgebildet ist.

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

Zunächst wird ein {{SVGElement("rect")}} Element verwendet, um ein Rechteck zu erstellen und zu umranden, in dem der Text enthalten ist. Dann wird {{SVGElement("text")}} verwendet, um das Textelement selbst zu erstellen, mit einer {{SVGAttr("id")}} von `"hello"`.

### HTML

Das HTML enthält zwei angezeigte Elemente, die in einem gruppierenden {{HTMLElement("div")}} enthalten sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}} Element vom Typ `"range"` wird verwendet, um die Schieberegler-Steuerung zu erstellen, die der Benutzer manipulieren wird, um die Breite des Textes zu ändern. Ein {{HTMLElement("span")}} Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Breitenwert anzuzeigen.

### JavaScript

Schließlich werfen wir einen Blick auf den JavaScript-Code. Er beginnt damit, Referenzen zu den Elementen, auf die zugegriffen werden muss, zu speichern, indem [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet wird:

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

Nach dem Abrufen der Elementreferenzen wird ein [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) eingerichtet, indem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf die Schieberegler-Steuerung aufgerufen wird, um auf alle [`input`](/de/docs/Web/API/Element/input_event) Ereignisse zu reagieren, die auftreten. Diese Ereignisse werden jedes Mal gesendet, wenn sich der Wert des Schiebereglers ändert, auch wenn der Benutzer ihn noch bewegt, sodass wir die Textbreite reaktionsfähig anpassen können.

Wenn ein `"input"` Ereignis auftritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers zu setzen, wobei der `SVG_LENGTHTYPE_PX` Einheitentyp des `SVGLength` Interfaces verwendet wird, um anzuzeigen, dass der Wert Pixel darstellt. Beachten Sie, dass wir in `textLength` eindringen müssen, um seine `baseVal` Eigenschaft zu erhalten; `textLength` wird als ein [`SVGLength`](/de/docs/Web/API/SVGLength) Objekt gespeichert, daher können wir es nicht wie eine einfache Zahl behandeln.

Nach dem Aktualisieren der Textbreite werden die Inhalte des `widthDisplay` Feldes ebenfalls mit dem neuen Wert aktualisiert, und wir sind fertig.

### Ergebnis

So sieht das Beispiel aus. Versuchen Sie, den Schieberegler zu ziehen, um ein Gefühl dafür zu bekommen, was er tut.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG Tutorial: [Texte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Texts)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) und [`SVGLength`](/de/docs/Web/API/SVGLength)
- {{SVGElement("text")}}
