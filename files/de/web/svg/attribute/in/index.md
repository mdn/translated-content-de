---
title: in
slug: Web/SVG/Attribute/in
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`in`**-Attribut identifiziert den Eingang für das gegebene Filter-Primitive.

Der Wert kann entweder einer der sechs unten definierten Schlüsselwörter sein oder eine Zeichenfolge, die mit einem vorherigen {{SVGAttr("result")}}-Attributwert innerhalb desselben {{SVGElement("filter")}}-Elements übereinstimmt. Wenn kein Wert angegeben ist und dies das erste Filter-Primitive ist, dann verwendet dieses Filter-Primitive `SourceGraphic` als Eingang. Wenn kein Wert angegeben ist und es sich um ein nachfolgendes Filter-Primitive handelt, dann verwendet dieses Filter-Primitive das Ergebnis des vorherigen Filter-Primitives als Eingang.

Erscheint der Wert für {{SVGAttr("result")}} mehrmals innerhalb eines gegebenen {{SVGElement("filter")}}-Elements, dann wird auf das nächstgelegene vorhergehende Filter-Primitive mit dem gegebenen Wert für das Attribut {{SVGAttr("result")}} verwiesen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        <code>SourceGraphic</code> für das erste Filter-Primitive, ansonsten das Ergebnis
        des vorherigen Filter-Primitives
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `SourceGraphic`
  - : Dieses Schlüsselwort steht für die Grafikelemente, die die ursprüngliche Eingabe im {{SVGElement("filter")}}-Element waren.
- `SourceAlpha`
  - : Dieses Schlüsselwort steht für die Grafikelemente, die die ursprüngliche Eingabe im `<filter>`-Element waren. `SourceAlpha` hat alle dieselben Regeln wie `SourceGraphic`, außer dass nur der Alpha-Kanal verwendet wird.
- `BackgroundImage`
  - : Dieses Schlüsselwort steht für eine Bildaufnahme des SVG-Dokuments unterhalb der Filterregion zum Zeitpunkt, als das `<filter>`-Element aufgerufen wurde.
- `BackgroundAlpha`
  - : Dasselbe wie `BackgroundImage`, außer dass nur der Alpha-Kanal verwendet wird.
- `FillPaint`
  - : Dieses Schlüsselwort steht für den Wert der {{SVGAttr("fill")}}-Eigenschaft am Zielobjekt für den Filtereffekt. In vielen Fällen ist das `FillPaint` überall deckend, aber das könnte nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gefüllt ist, das selbst transparente oder halbtransparente Teile enthält.
- `StrokePaint`
  - : Dieses Schlüsselwort steht für den Wert der {{SVGAttr("stroke")}}-Eigenschaft am Zielobjekt für den Filtereffekt. In vielen Fällen ist das `StrokePaint` überall deckend, aber das könnte nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gestrichen ist, das selbst transparente oder halbtransparente Teile enthält.
- `<filter-primitive-reference>`
  - : Dieser Wert ist ein zugewiesener Name für das Filter-Primitive in Form eines {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die sich aus der Verarbeitung dieses Filter-Primitives ergeben, durch ein `in`-Attribut auf einem nachfolgenden Filter-Primitive innerhalb desselben Filter-Elements referenziert werden. Wenn kein Wert angegeben ist, steht die Ausgabe nur für die Wiederverwendung als impliziter Eingang für das nächste Filter-Primitive zur Verfügung, wenn dieses Filter-Primitive keinen Wert für sein `in`-Attribut bereitstellt.

## Workaround für BackgroundImage

`BackgroundImage` wird in modernen Browsern nicht als Filterquelle unterstützt (siehe die [feComposite-Kompatibilitätstabelle](/de/docs/Web/SVG/Element/feComposite#browser_compatibility)). Daher müssen wir eines der Bilder zum Mischen innerhalb des Filters selbst importieren, indem wir ein `<feImage>`-Element verwenden.

> [!NOTE]
> Der Firefox [Bug 455986](https://bugzil.la/455986) bedeutet, dass `feImage` keine Teilbilder laden kann, einschließlich Kreise, Rechtecke, Pfade oder andere im Dokument definierte Fragmente. Damit dieses Beispiel in mehr Browsern funktioniert, wird ein vollständiges externes Bild des Logos geladen.

### HTML

```html
<div style="width: 420px; height: 220px;">
  <svg
    style="width:200px; height:200px; display: inline;"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="backgroundMultiply">
        <!-- This will not work. -->
        <feBlend in="BackgroundImage" in2="SourceGraphic" mode="multiply" />
      </filter>
    </defs>
    <image
      href="mdn_logo_only_color.png"
      x="10%"
      y="10%"
      width="80%"
      height="80%" />
    <circle
      cx="50%"
      cy="40%"
      r="40%"
      fill="#c00"
      style="filter:url(#backgroundMultiply);" />
  </svg>

  <svg
    style="width:200px; height:200px; display: inline;"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="imageMultiply">
        <!-- This is a workaround. -->
        <feImage
          href="mdn_logo_only_color.png"
          x="10%"
          y="10%"
          width="80%"
          height="80%" />
        <feBlend in2="SourceGraphic" mode="multiply" />
      </filter>
    </defs>
    <circle
      cx="50%"
      cy="40%"
      r="40%"
      fill="#c00"
      style="filter:url(#imageMultiply);" />
  </svg>
</div>
```

### Ergebnis

{{EmbedLiveSample("Workaround_for_BackgroundImage")}}

## Spezifikationen

{{Specifications}}
