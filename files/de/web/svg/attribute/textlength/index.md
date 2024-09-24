---
title: textLength
slug: Web/SVG/Attribute/textLength
l10n:
  sourceCommit: 827631e22ee2897dda4cde4bd2a18de53a5c4167
---

{{SVGRef}}

Das **`textLength`**-Attribut, verfügbar für SVG-{{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elemente, ermöglicht es Ihnen, die Breite des Bereichs zu spezifizieren, in dem der Text dargestellt werden soll. Der {{glossary("user agent")}} stellt sicher, dass der Text nicht über diese Entfernung hinausreicht, indem die Methode oder Methoden verwendet werden, die durch das {{SVGAttr("lengthAdjust")}}-Attribut angegeben sind. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst, aber auch die Glyphengröße kann angepasst werden, wenn Sie `lengthAdjust` ändern.

Durch die Verwendung von `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von Bedingungen wie dem Fehlschlagen des Ladens von Web-Schriftarten (oder wenn sie noch nicht geladen sind) mit derselben Breite angezeigt wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
      <td>Keiner</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Dieser Wert gibt die Breite des Bereichs an, den der Text als absolute Länge oder Prozentwert einnehmen soll.
- `<number>`
  - : Ein numerischer Wert beschreibt eine Länge, die sich auf die Einheiten des aktuellen Koordinatensystems bezieht.

## Interaktives Beispiel

Lassen Sie uns ein einfaches Beispiel erstellen, das Text präsentiert, den Sie mit einem {{HTMLElement("input")}}-Element des Typs [`"range"`](/de/docs/Web/HTML/Element/input/range) ändern können.

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

Beginnen wir mit dem SVG. Es ist ziemlich einfach, mit einem 1000-mal-300-Pixel-Bereich, der in eine 10 Zentimeter mal 3 Zentimeter Box abgebildet ist.

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

Zuerst wird ein {{SVGElement("rect")}}-Element verwendet, um ein Rechteck zu erstellen und zu zeichnen, das den Text umschließt. Dann wird {{SVGElement("text")}} verwendet, um das Textelement selbst zu erstellen, mit einer {{SVGAttr("id")}} von `"hello"`.

### HTML

Das HTML ist ebenfalls einfach, mit nur zwei angezeigten Elementen, die in einem {{HTMLElement("div")}} gruppiert sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}}-Element vom Typ `"range"` wird verwendet, um die Schieberegler-Steuerung zu erstellen, die der Benutzer manipulieren wird, um die Breite des Textes zu ändern. Ein {{HTMLElement("span")}}-Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Breitenwert anzuzeigen.

### JavaScript

Werfen wir schließlich einen Blick auf den JavaScript-Code. Es beginnt damit, Referenzen auf die Elemente abzulegen, auf die es zugreifen muss, indem {{domxref("Document.getElementById()")}} verwendet wird:

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

Nachdem die Element-Referenzen geholt wurden, wird ein {{domxref("EventTarget.addEventListener", "Ereignis-Listener", "", 1)}} eingerichtet, indem `addEventListener()` am Schieberegler aufgerufen wird, um alle auftretenden {{domxref("Element/input_event", "input")}}-Ereignisse zu empfangen. Diese Ereignisse werden jedes Mal gesendet, wenn sich der Wert des Schiebereglers ändert, selbst wenn der Benutzer ihn nicht aufgehört hat zu bewegen, sodass wir die Textbreite reaktionsschnell anpassen können.

Wenn ein `"input"`-Ereignis auftritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers zu setzen, wobei der `SVGLength`-Schnittstelle der Einheitstyp `SVG_LENGTHTYPE_PX` verwendet wird, um anzuzeigen, dass der Wert Pixel darstellt. Beachten Sie, dass wir in `textLength` gehen müssen, um seine `baseVal`-Eigenschaft zu erhalten; `textLength` wird als ein {{domxref("SVGLength")}}-Objekt gespeichert, daher können wir es nicht wie eine einfache Zahl behandeln.

Nach dem Aktualisieren der Textbreite werden die Inhalte des `widthDisplay`-Kastens ebenfalls mit dem neuen Wert aktualisiert, und wir sind fertig.

### Ergebnis

So sieht das Beispiel aus. Versuchen Sie, den Schieberegler zu verschieben, um ein Gefühl dafür zu bekommen, was er tut.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Tutorial: [Texte](/de/docs/Web/SVG/Tutorial/Texts)
- {{domxref("SVGAnimatedLength")}} und {{domxref("SVGLength")}}
- {{SVGElement("text")}}
