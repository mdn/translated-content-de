---
title: textLength
slug: Web/SVG/Reference/Attribute/textLength
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`textLength`** Attribut, verfügbar auf den SVG-Elementen {{SVGElement("text")}} und {{SVGElement("tspan")}}, ermöglicht es Ihnen, die Breite des Bereichs festzulegen, in dem der Text gezeichnet wird. Der {{Glossary("user_agent", "Benutzeragent")}} wird sicherstellen, dass der Text nicht weiter als diese Entfernung reicht, indem die Methode oder Methoden verwendet werden, die durch das {{SVGAttr("lengthAdjust")}} Attribut angegeben sind. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst, aber die Glyphengröße kann ebenfalls angepasst werden, wenn Sie `lengthAdjust` ändern.

Durch die Verwendung von `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von Bedingungen wie dem Nichladen von Web-Schriftarten (oder dem noch nicht geladenen Zustand) die gleiche Breite anzeigt.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Nutzungshinweise

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
  - : Dieser Wert gibt die Breite des Bereichs an, den der Text in absoluter Länge oder Prozent einnehmen soll.
- `<number>`
  - : Ein numerischer Wert beschreibt eine Länge in Bezug auf die Einheiten des aktuellen Koordinatensystems.

## Interaktives Beispiel

Dieses Beispiel zeigt Text an, den Sie mit einem {{HTMLElement("input")}} Element vom Typ [`"range"`](/de/docs/Web/HTML/Reference/Elements/input/range) in der Größe verändern können.

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

Fangen wir mit dem SVG an. Es ist ziemlich einfach, mit einem 1000-zu-300 Pixel großen Bereich, der in eine 10 Zentimeter mal 3 Zentimeter große Box gemappt ist.

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

Zuerst wird ein {{SVGElement("rect")}} Element verwendet, um ein Rechteck zur Begrenzung des Texts zu erstellen und zu umrahmen. Dann wird {{SVGElement("text")}} verwendet, um das Textelement selbst zu erstellen, mit einem {{SVGAttr("id")}} von `"hello"`.

### HTML

Das HTML enthält zwei dargestellte Elemente, die in einem {{HTMLElement("div")}} Element gruppiert sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}} Element, vom Typ `"range"`, wird verwendet, um das Steuerungselement zu erstellen, das der Benutzer manipulieren wird, um die Breite des Textes zu ändern. Ein {{HTMLElement("span")}} Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Wert der Breite anzuzeigen.

### JavaScript

Schließlich werfen wir einen Blick auf den JavaScript-Code. Es beginnt damit, Referenzen zu den Elementen zu speichern, auf die zugegriffen werden muss, unter Verwendung von [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById):

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

Nachdem die Elementreferenzen abgerufen wurden, wird ein [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) durch Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem Steuerungselement für den Schieberegler festgelegt, um alle [`input`](/de/docs/Web/API/Element/input_event) Ereignisse zu empfangen, die auftreten. Diese Ereignisse werden jedes Mal gesendet, wenn sich der Wert des Schiebereglers ändert, selbst wenn der Benutzer ihn noch nicht beendet hat zu bewegen, sodass wir die Textbreite reaktionsfähig anpassen können.

Wenn ein `"input"` Ereignis auftritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers zu setzen, unter Verwendung des `SVGLength` Schnittstellen-Typs `SVG_LENGTHTYPE_PX`, um anzuzeigen, dass der Wert Pixel darstellt. Beachten Sie, dass wir in `textLength` eintauchen müssen, um auf seine `baseVal` Eigenschaft zuzugreifen; `textLength` wird als [`SVGLength`](/de/docs/Web/API/SVGLength) Objekt gespeichert, daher können wir es nicht wie eine einfache Zahl behandeln.

Nach dem Aktualisieren der Textbreite werden die Inhalte des `widthDisplay` Felds ebenfalls mit dem neuen Wert aktualisiert, und damit sind wir fertig.

### Ergebnis

So sieht das Beispiel aus. Versuchen Sie, den Schieberegler zu ziehen, um ein Gefühl dafür zu bekommen, was er macht.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Tutorial: [Texte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Texts)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) und [`SVGLength`](/de/docs/Web/API/SVGLength)
- {{SVGElement("text")}}
