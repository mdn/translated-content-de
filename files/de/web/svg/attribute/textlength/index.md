---
title: textLength
slug: Web/SVG/Attribute/textLength
l10n:
  sourceCommit: 01b8471b84e1d157cbddbb3ffaf560a86b082070
---

{{SVGRef}}

Das **`textLength`** Attribut, verfügbar auf SVG-{{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen, ermöglicht Ihnen die Breite des Bereichs anzugeben, in den der Text gezeichnet wird. Der {{Glossary("user_agent", "Benutzeragent")}} stellt sicher, dass der Text diese Entfernung nicht überschreitet, indem er die durch das {{SVGAttr("lengthAdjust")}} Attribut spezifizierte Methode oder Methoden verwendet. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst, aber die Glyphengröße kann ebenfalls angepasst werden, wenn Sie `lengthAdjust` ändern.

Durch die Verwendung von `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von Bedingungen wie dem Nicht-Laden von Web-Schriften (oder dem noch nicht geladenen Zustand) mit derselben Breite angezeigt wird.

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
  - : Dieser Wert gibt die Breite des Bereichs an, in den der Text als absolute Länge oder Prozentsatz angepasst werden soll.
- `<number>`
  - : Ein numerischer Wert beschreibt eine Länge in Bezug auf die Einheiten des aktuellen Koordinatensystems.

## Interaktives Beispiel

Dieses Beispiel zeigt Text, den Sie mit einem {{HTMLElement("input")}} Element vom Typ [`"range"`](/de/docs/Web/HTML/Element/input/range) in der Größe anpassen können.

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

Beginnen wir mit dem SVG. Es ist ziemlich einfach, mit einem 1000-zu-300-Pixel-Bereich, der in eine 10 Zentimeter mal 3 Zentimeter Box abgebildet wird.

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

Zuerst wird ein {{SVGElement("rect")}} Element verwendet, um ein Rechteck zu erstellen und zu umrahmen, das den Text enthält. Dann wird {{SVGElement("text")}} verwendet, um das Textelement selbst zu erstellen, mit einer {{SVGAttr("id")}} von `"hello"`.

### HTML

Das HTML enthält zwei angezeigte Elemente, die in einem Gruppierungs-{{HTMLElement("div")}} enthalten sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}} Element, vom Typ `"range"`, wird verwendet, um das Schieberegler-Steuerelement zu erstellen, das der Benutzer manipulieren wird, um die Breite des Textes zu ändern. Ein {{HTMLElement("span")}} Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Breitenwert anzuzeigen.

### JavaScript

Abschließend werfen wir einen Blick auf den JavaScript-Code. Er beginnt damit, Referenzen zu den Elementen zu speichern, die er benötigt, unter Verwendung von [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById):

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

Nachdem die Elementreferenzen abgerufen wurden, wird ein {{domxref("EventTarget.addEventListener", "Ereignis-Listener", "", 1)}} eingerichtet, indem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem Schieberegler-Steuerelement aufgerufen wird, um alle [`input`](/de/docs/Web/API/Element/input_event) Ereignisse zu empfangen, die auftreten. Diese Ereignisse werden gesendet, jedes Mal wenn sich der Wert des Schiebereglers ändert, selbst wenn der Benutzer ihn noch bewegt, sodass wir die Textbreite reaktionsschnell anpassen können.

Wenn ein `"input"` Ereignis auftritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers zu setzen, wobei die `SVGLength` Schnittstelle's `SVG_LENGTHTYPE_PX` Einheitentyp verwendet wird, um anzuzeigen, dass der Wert Pixel darstellt. Beachten Sie, dass wir in `textLength` hineinsteigen müssen, um seine `baseVal` Eigenschaft zu erhalten; `textLength` wird als ein [`SVGLength`](/de/docs/Web/API/SVGLength) Objekt gespeichert, sodass wir es nicht wie eine einfache Zahl behandeln können.

Nachdem die Textbreite aktualisiert wurde, werden auch die Inhalte des `widthDisplay` Feldes mit dem neuen Wert aktualisiert, und wir sind fertig.

### Ergebnis

So sieht das Beispiel aus. Versuchen Sie, den Schieberegler herumzuziehen, um ein Gefühl dafür zu bekommen, was er bewirkt.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Tutorial: [Texte](/de/docs/Web/SVG/Tutorial/Texts)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) und [`SVGLength`](/de/docs/Web/API/SVGLength)
- {{SVGElement("text")}}
