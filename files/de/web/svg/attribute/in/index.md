---
title: in
slug: Web/SVG/Attribute/in
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`in`**-Attribut identifiziert die Eingabe für das angegebene Filter-Primitive.

Der Wert kann entweder einer der sechs unten definierten Schlüsselwörter sein oder eine Zeichenkette, die mit einem vorherigen Wert des {{SVGAttr("result")}}-Attributs innerhalb desselben {{SVGElement("filter")}}-Elements übereinstimmt. Wenn kein Wert angegeben wird und dies das erste Filter-Primitive ist, verwendet dieses Filter-Primitive `SourceGraphic` als Eingabe. Wenn kein Wert angegeben wird und es sich um ein nachfolgendes Filter-Primitive handelt, verwendet dieses Filter-Primitive das Ergebnis des vorherigen Filter-Primitives als Eingabe.

Wenn der Wert für {{SVGAttr("result")}} innerhalb eines gegebenen {{SVGElement("filter")}}-Elements mehrfach auftritt, dann wird eine Referenz auf dieses Ergebnis das nächstgelegene vorherige Filter-Primitive mit dem angegebenen Wert für das Attribut {{SVGAttr("result")}} verwenden.

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

## Verwendungshinweise

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
        <code>SourceGraphic</code> für das erste Filter-Primitive, ansonsten Ergebnis
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
  - : Dieses Schlüsselwort repräsentiert die Grafikelemente, die die ursprüngliche Eingabe in das {{SVGElement("filter")}}-Element waren.
- `SourceAlpha`
  - : Dieses Schlüsselwort repräsentiert die Grafikelemente, die die ursprüngliche Eingabe in das `<filter>`-Element waren. `SourceAlpha` hat alle Regeln wie `SourceGraphic`, verwendet jedoch nur den Alpha-Kanal.
- `BackgroundImage`
  - : Dieses Schlüsselwort repräsentiert einen Abbild-Snapshot des SVG-Dokuments unterhalb des Filterbereichs zum Zeitpunkt der Ausführung des `<filter>`-Elements.
- `BackgroundAlpha`
  - : Entspricht `BackgroundImage`, jedoch wird nur der Alpha-Kanal verwendet.
- `FillPaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("fill")}}-Eigenschaft des Zielelements für den Filtereffekt. In vielen Fällen ist das `FillPaint` überall opak, aber es kann anders sein, wenn eine Form mit einem Verlauf oder Muster bemalt wird, das selbst transparente oder halbtransparente Teile enthält.
- `StrokePaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("stroke")}}-Eigenschaft des Zielelements für den Filtereffekt. In vielen Fällen ist das `StrokePaint` überall opak, aber es kann anders sein, wenn eine Form mit einem Verlauf oder Muster bemalt wird, das selbst transparente oder halbtransparente Teile enthält.
- `<filter-primitive-reference>`
  - : Dieser Wert ist ein zugewiesener Name für das Filter-Primitive in Form eines {{cssxref("custom-ident")}}. Wenn angegeben, können die Grafiken, die aus der Verarbeitung dieses Filter-Primitives resultieren, von einem in-Attribut auf einem nachfolgenden Filter-Primitive innerhalb desselben Filter-Elements referenziert werden. Wenn kein Wert angegeben wird, steht die Ausgabe nur zur Wiederverwendung als implizite Eingabe in das nächste Filter-Primitive zur Verfügung, wenn dieses Filter-Primitive keinen Wert für sein in-Attribut bereitstellt.

## Lösung für BackgroundImage

`BackgroundImage` wird in modernen Browsern nicht als Filterquelle unterstützt (siehe die [feComposite Kompatibilitätstabelle](/de/docs/Web/SVG/Element/feComposite#browser_compatibility)). Daher müssen wir eines der Bilder importieren, um es selbst im Filter zu mischen, indem wir ein `<feImage>`-Element verwenden.

> [!NOTE]
> Der Firefox [Bug 455986](https://bugzil.la/455986) bedeutet, dass `feImage` keine partiellen Bilder laden kann, einschließlich Kreise, Rechtecke, Pfade oder anderer im Dokument definierter Fragmente. Damit dieses Beispiel in mehr Browsern funktioniert, wird ein vollständiges externes Bild des Logos geladen.

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
