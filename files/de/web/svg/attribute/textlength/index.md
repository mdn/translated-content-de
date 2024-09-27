---
title: textLength
slug: Web/SVG/Attribute/textLength
l10n:
  sourceCommit: 827631e22ee2897dda4cde4bd2a18de53a5c4167
---

{{SVGRef}}

Das **`textLength`**-Attribut, verfügbar auf SVG-Elementen wie {{SVGElement("text")}} und {{SVGElement("tspan")}}, ermöglicht es Ihnen, die Breite des Bereichs anzugeben, in dem der Text dargestellt werden soll. Der [User Agent](/de/docs/Glossary/user_agent) stellt sicher, dass der Text diesen Abstand nicht überschreitet, indem er die durch das {{SVGAttr("lengthAdjust")}}-Attribut festgelegten Methoden verwendet. Standardmäßig wird nur der Abstand zwischen Zeichen angepasst, aber die Glyphengröße kann ebenfalls angepasst werden, wenn Sie `lengthAdjust` ändern.

Mit `textLength` können Sie sicherstellen, dass Ihr SVG-Text unabhängig von Bedingungen wie dem Nichtladen von Webfonts (oder noch nicht geladenen) mit derselben Breite angezeigt wird.

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
      <td>Keiner</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Dieser Wert gibt die Breite des Bereichs an, auf den der Text angepasst werden soll, als absolute Länge oder Prozentsatz.
- `<number>`
  - : Ein numerischer Wert beschreibt eine Länge, die sich auf die Einheiten des aktuellen Koordinatensystems bezieht.

## Interaktives Beispiel

Lassen Sie uns ein einfaches Beispiel erstellen, das Text präsentiert, den Sie mithilfe eines {{HTMLElement("input")}}-Elements des Typs [`"range"`](/de/docs/Web/HTML/Element/input/range) in der Größe ändern können.

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

Beginnen wir mit dem SVG. Es ist ziemlich einfach, mit einem 1000-mal-300 Pixel großen Bereich, der in ein 10 Zentimeter mal 3 Zentimeter großes Feld abgebildet wird.

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

Das HTML ist ebenfalls einfach, mit nur zwei angezeigten Elementen, die in einem {{HTMLElement("div")}} enthalten sind:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

Das {{HTMLElement("input")}}-Element vom Typ `"range"` wird verwendet, um das Steuerungselement zu erstellen, das der Benutzer zur Änderung der Textbreite manipuliert. Ein {{HTMLElement("span")}}-Element mit der ID `"widthDisplay"` wird bereitgestellt, um den aktuellen Breitenwert anzuzeigen.

### JavaScript

Schließlich werfen wir einen Blick auf den JavaScript-Code. Er beginnt mit dem Speichern von Referenzen auf die Elemente, die er zugreifen muss, indem [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwendet wird:

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

Nachdem die Elementreferenzen abgerufen wurden, wird ein {{domxref("EventTarget.addEventListener", "Ereignislistener", "", 1)}} durch Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) am Schieberegler-Steuerelement eingerichtet, um alle [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse zu empfangen, die auftreten. Diese Ereignisse werden jedes Mal gesendet, wenn sich der Wert des Schiebereglers ändert, auch wenn der Benutzer ihn noch nicht losgelassen hat, sodass wir die Textbreite reaktiv anpassen können.

Wenn ein `"input"`-Ereignis eintritt, rufen wir `newValueSpecifiedUnits()` auf, um den Wert von `textLength` auf den neuen Wert des Schiebereglers festzulegen, wobei wir den `SVGLength`-Schnittstellenwert `SVG_LENGTHTYPE_PX` verwenden, um anzugeben, dass der Wert Pixel repräsentiert. Beachten Sie, dass wir in `textLength` eintauchen müssen, um die Eigenschaft `baseVal` zu erhalten; `textLength` wird als [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekt gespeichert, sodass wir es nicht wie eine einfache Zahl behandeln können.

Nach der Aktualisierung der Textbreite wird der Inhalt des `widthDisplay`-Felds ebenfalls mit dem neuen Wert aktualisiert und wir sind fertig.

### Ergebnis

So sieht das Beispiel aus. Versuchen Sie, den Schieberegler hin und her zu bewegen, um ein Gefühl dafür zu bekommen, was er macht.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Tutorial: [Texte](/de/docs/Web/SVG/Tutorial/Texts)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) und [`SVGLength`](/de/docs/Web/API/SVGLength)
- {{SVGElement("text")}}
