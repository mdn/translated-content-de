---
title: textLength
slug: Web/SVG/Reference/Attribute/textLength
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Das Attribut **`textLength`**, verfügbar auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen, ermöglicht es Ihnen, die Breite des Bereichs anzugeben, in den der Text gezeichnet wird. Der {{Glossary("user_agent", "user agent")}} stellt sicher, dass der Text diesen Abstand nicht überschreitet, indem er die Methode oder Methoden verwendet, die durch das {{SVGAttr("lengthAdjust")}} Attribut angegeben werden. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst, aber die Glyphengröße kann auch angepasst werden, wenn Sie `lengthAdjust` ändern.

Durch die Verwendung von `textLength` können Sie sicherstellen, dass Ihr SVG-Text in der gleichen Breite angezeigt wird, unabhängig von Bedingungen, einschließlich dem Fehlschlagen des Ladens von Web-Schriftarten (oder wenn sie noch nicht geladen sind).

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
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Dieser Wert gibt die Breite des Raums an, der der Text ausfüllen soll, entweder als absolute Länge oder als Prozentsatz.
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

Beginnen wir mit dem SVG. Es ist ziemlich einfach gehalten, mit einem 1000 mal 300 Pixel großen Bereich, der in eine 10 Zentimeter mal 3 Zentimeter große Box abgebildet wird.

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

Zuerst wird ein {{SVGElement("rect")}} Element verwendet, um ein Rechteck zu erstellen und zu umranden, das den Text enthält. Dann wird {{SVGElement("text")}} verwendet, um das Textelement selbst zu erstellen, mit einem {{SVGAttr("id")}} von `"hello"`.

### HTML

Das HTML enthält zwei angezeigte Elemente, die in einer Gruppierung {{HTMLElement("div")}} enthalten sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}} Element vom Typ `"range"` wird verwendet, um das Schieberegler-Steuerelement zu erstellen, das der Benutzer manipuliert, um die Breite des Textes zu ändern. Ein {{HTMLElement("span")}} Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Breitenwert anzuzeigen.

### JavaScript

Schließlich werfen wir einen Blick auf den JavaScript-Code. Es beginnt damit, Referenzen auf die Elemente zu speichern, auf die es zugreifen muss, indem [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet wird:

```js
const widthSlider = document.getElementById("widthSlider");
const widthDisplay = document.getElementById("widthDisplay");
const textElement = document.getElementById("hello");
const baseLength = Math.floor(textElement.textLength.baseVal.value);

widthSlider.value = baseLength;

widthSlider.addEventListener("input", (event) => {
  textElement.textLength.baseVal.newValueSpecifiedUnits(
    SVGLength.SVG_LENGTHTYPE_PX,
    widthSlider.valueAsNumber,
  );
  widthDisplay.innerText = widthSlider.value;
});

widthSlider.dispatchEvent(new Event("input"));
```

Nachdem die Elementreferenzen abgerufen wurden, wird ein [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) durch Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem Schieberegler-Steuerelement eingerichtet, um alle [`input`](/de/docs/Web/API/Element/input_event) Ereignisse zu empfangen, die auftreten. Diese Ereignisse werden jedes Mal gesendet, wenn sich der Wert des Schiebereglers ändert, selbst wenn der Benutzer ihn noch nicht losgelassen hat, sodass wir die Textbreite responsiv anpassen können.

Wenn ein `"input"` Ereignis eintritt, rufen wir `newValueSpecifiedUnits()` auf, um den `textLength` Wert auf den neuen Wert des Schiebereglers festzulegen, unter Verwendung des `SVGLength` Interface's `SVG_LENGTHTYPE_PX` Einheitstyps, um anzugeben, dass der Wert Pixel darstellt. Beachten Sie, dass wir in `textLength` eintauchen müssen, um auf seine `baseVal` Eigenschaft zuzugreifen; `textLength` wird als ein [`SVGLength`](/de/docs/Web/API/SVGLength) Objekt gespeichert, sodass wir es nicht wie eine einfache Zahl behandeln können.

Nach dem Aktualisieren der Textbreite wird der Inhalt des `widthDisplay` Blocks ebenfalls mit dem neuen Wert aktualisiert, und wir sind fertig.

### Ergebnis

So sieht das Beispiel aus. Versuchen Sie, den Schieberegler zu verschieben, um ein Gefühl dafür zu bekommen, was er bewirkt.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG Tutorial: [Texte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Texts)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) und [`SVGLength`](/de/docs/Web/API/SVGLength)
- {{SVGElement("text")}}
