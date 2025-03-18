---
title: textLength
slug: Web/SVG/Reference/Attribute/textLength
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`textLength`**-Attribut, verfügbar bei SVG-Elementen {{SVGElement("text")}} und {{SVGElement("tspan")}}, ermöglicht es Ihnen, die Breite des Raums zu spezifizieren, in dem der Text gezeichnet wird. Der {{Glossary("user_agent", "User Agent")}} stellt sicher, dass der Text diese Distanz nicht überschreitet, indem er die Methode oder Methoden anwendet, die durch das {{SVGAttr("lengthAdjust")}}-Attribut spezifiziert werden. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst, aber die Glyphengröße kann ebenfalls angepasst werden, wenn Sie `lengthAdjust` ändern.

Mit `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von Bedingungen, wie dem Fehlschlagen des Ladens von Web-Schriften (oder dem noch nicht geladenen Stand), in der gleichen Breite angezeigt wird.

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
  - : Dieser Wert gibt die Breite des Raums an, den der Text anpassen soll, um ihn als absolute Länge oder Prozentsatz zu erreichen.
- `<number>`
  - : Ein numerischer Wert definiert eine Länge in Bezug auf die Einheiten des aktuellen Koordinatensystems.

## Interaktives Beispiel

Dieses Beispiel zeigt Text, den Sie mithilfe eines {{HTMLElement("input")}}-Elements des Typs [`"range"`](/de/docs/Web/HTML/Element/input/range) in der Größe ändern können.

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

Beginnen wir mit dem SVG. Es ist ziemlich einfach, mit einem Raum von 1000 x 300 Pixeln, der in eine 10 cm x 3 cm Box gemappt wird.

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

Das HTML enthält zwei sichtbare Elemente, die in einer gruppierenden {{HTMLElement("div")}} enthalten sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}}-Element, vom Typ `"range"`, wird verwendet, um das Schieberegler-Steuerelement zu erstellen, das der Benutzer manipulieren wird, um die Breite des Textes zu ändern. Ein {{HTMLElement("span")}}-Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Breitenwert anzuzeigen.

### JavaScript

Schließlich werfen wir einen Blick auf den JavaScript-Code. Er beginnt damit, Referenzen zu den Elementen abzulegen, auf die zugegriffen werden muss, indem [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet wird:

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

Nachdem die Elementreferenzen abgerufen wurden, wird ein [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) eingerichtet, indem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf dem Schieberegler-Steuerelement aufgerufen wird, um auf alle [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse zu reagieren, die auftreten. Diese Ereignisse werden jedes Mal gesendet, wenn sich der Wert des Schiebereglers ändert, auch wenn der Benutzer ihn noch nicht aufgehört hat zu bewegen, sodass wir die Textbreite responsiv anpassen können.

Wenn ein `"input"`-Ereignis auftritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers zu setzen, wobei der `SVGLength`-Interfacetyp `SVG_LENGTHTYPE_PX` verwendet wird, um anzugeben, dass der Wert Pixel darstellt. Beachten Sie, dass wir zu `textLength` gehen müssen, um seine `baseVal`-Eigenschaft zu erhalten; `textLength` wird als ein [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt gespeichert, daher können wir es nicht wie eine einfache Zahl behandeln.

Nachdem die Textbreite aktualisiert wurde, werden die Inhalte des `widthDisplay`-Felds ebenfalls mit dem neuen Wert aktualisiert, und wir sind fertig.

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
