---
title: textLength
slug: Web/SVG/Reference/Attribute/textLength
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Mit dem Attribut **`textLength`**, das für die SVG-Elemente {{SVGElement("text")}} und {{SVGElement("tspan")}} verfügbar ist, können Sie die Breite des Bereichs festlegen, in dem der Text dargestellt wird. Der {{Glossary("user_agent", "User Agent")}} stellt sicher, dass der Text nicht über diese Breite hinausreicht. Dazu verwendet er die Methode oder Methoden, die durch das Attribut {{SVGAttr("lengthAdjust")}} angegeben sind. Standardmäßig wird nur der Abstand zwischen den Zeichen angepasst. Wenn Sie `lengthAdjust` ändern, kann auch die Größe der Glyphen angepasst werden.

Mit `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von den Umständen immer mit derselben Breite angezeigt wird – auch wenn Webfonts nicht geladen werden konnten oder noch nicht geladen wurden.

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
  - : Dieser Wert gibt die Breite des Bereichs, an den der Text angepasst wird, als absolute Länge oder Prozentwert an.
- `<number>`
  - : Ein numerischer Wert gibt eine Länge in den Einheiten des aktuellen Koordinatensystems an.

## Interaktives Beispiel

In diesem Beispiel können Sie die Breite eines Textes mit einem {{HTMLElement("input")}}-Element vom Typ [`"range"`](/de/docs/Web/HTML/Reference/Elements/input/range) ändern.

### SVG

Beginnen wir mit dem SVG. Es ist recht einfach: Ein Bereich von 1000 × 300 Pixeln wird auf einen Rahmen von 10 × 3 Zentimetern abgebildet.

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

Zunächst wird mit einem {{SVGElement("rect")}}-Element ein umrandetes Rechteck erstellt, das den Text aufnimmt. Anschließend wird mit {{SVGElement("text")}} das Textelement selbst erstellt, mit einer {{SVGAttr("id")}} von `"hello"`.

### HTML

Das HTML enthält zwei angezeigte Elemente innerhalb eines umschließenden {{HTMLElement("div")}}-Elements:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Mit dem {{HTMLElement("input")}}-Element vom Typ `"range"` wird der Schieberegler erstellt, mit dem die Breite des Textes geändert werden kann. Ein {{HTMLElement("span")}}-Element mit der ID `"widthDisplay"` zeigt den aktuellen Breitenwert an.

### CSS

```css
.controls {
  font:
    16px "Open Sans",
    "Arial",
    sans-serif;
}
```

### JavaScript

Sehen wir uns zum Schluss den JavaScript-Code an. Zunächst speichert er mithilfe von [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) Verweise auf die Elemente, auf die er zugreifen muss:

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

Nachdem die Elementverweise abgerufen wurden, wird durch Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für den Schieberegler ein [Event Listener](/de/docs/Web/API/EventTarget/addEventListener) eingerichtet, der [`input`](/de/docs/Web/API/Element/input_event)-Events empfängt. Diese Events werden bei jeder Änderung des Schiebereglerwerts ausgelöst, auch wenn die Bewegung noch nicht abgeschlossen ist. So kann die Textbreite unmittelbar angepasst werden.

Wenn ein `"input"`-Event auftritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers zu setzen. Dabei geben wir mit dem Einheitentyp `SVG_LENGTHTYPE_PX` des `SVGLength`-Interfaces an, dass der Wert Pixel darstellt. Beachten Sie, dass wir über `textLength` auf dessen Eigenschaft `baseVal` zugreifen müssen: `textLength` wird als [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt gespeichert und kann daher nicht wie eine einfache Zahl behandelt werden.

Nachdem die Textbreite geändert wurde, wird auch der Inhalt des `widthDisplay`-Elements mit dem neuen Wert aktualisiert. Damit sind wir fertig.

### Ergebnis

So sieht das Beispiel aus. Verschieben Sie den Schieberegler, um zu sehen, wie er sich auf den Text auswirkt.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Tutorial: [Texte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Texts)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) und [`SVGLength`](/de/docs/Web/API/SVGLength)
- {{SVGElement("text")}}
