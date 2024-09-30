---
title: in
slug: Web/SVG/Attribute/in
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`in`** Attribut identifiziert die Eingabe für das gegebene Filter-Primitive.

Der Wert kann entweder einer der sechs unten definierten Schlüsselwörter sein oder ein String, der mit einem vorherigen Wert des {{SVGAttr("result")}} Attributs innerhalb desselben {{SVGElement("filter")}} Elements übereinstimmt. Wenn kein Wert angegeben wird und dies das erste Filter-Primitive ist, wird dieses Filter-Primitive `SourceGraphic` als Eingabe verwenden. Wenn kein Wert angegeben wird und dies ein nachfolgendes Filter-Primitive ist, wird dieses Filter-Primitive das Ergebnis des vorherigen Filter-Primitives als seine Eingabe nutzen.

Wenn der Wert für {{SVGAttr("result")}} mehrfach innerhalb eines gegebenen {{SVGElement("filter")}} Elements erscheint, dann wird eine Referenz zu diesem Ergebnis das nächstliegende vorausgehende Filter-Primitive mit dem gegebenen Wert für das Attribut {{SVGAttr("result")}} nutzen.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Hinweise zur Nutzung

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
        <code>SourceGraphic</code> für das erste Filter-Primitive, andernfalls
        das Ergebnis des vorhergehenden Filter-Primitives
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `SourceGraphic`
  - : Dieses Schlüsselwort repräsentiert die Grafikelemente, die die ursprüngliche Eingabe in das {{SVGElement("filter")}} Element waren.
- `SourceAlpha`
  - : Dieses Schlüsselwort repräsentiert die Grafikelemente, die die ursprüngliche Eingabe in das `<filter>` Element waren. `SourceAlpha` folgt allen Regeln von `SourceGraphic`, außer dass nur der Alphakanal verwendet wird.
- `BackgroundImage`
  - : Dieses Schlüsselwort repräsentiert einen Bild-Snapshot des SVG-Dokuments unterhalb der Filterregion zum Zeitpunkt der Ausführung des `<filter>` Elements.
- `BackgroundAlpha`
  - : Das gleiche wie `BackgroundImage`, außer dass nur der Alphakanal verwendet wird.
- `FillPaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("fill")}} Eigenschaft des Zielelements für den Filtereffekt. In vielen Fällen ist das `FillPaint` überall undurchsichtig, aber das muss nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gemalt ist, das selbst transparente oder halbtransparente Teile enthält.
- `StrokePaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("stroke")}} Eigenschaft des Zielelements für den Filtereffekt. In vielen Fällen ist das `StrokePaint` überall undurchsichtig, aber das muss nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gemalt ist, das selbst transparente oder halbtransparente Teile enthält.
- `<filter-primitive-reference>`
  - : Dieser Wert ist ein zugewiesener Name für das Filter-Primitive in Form eines {{cssxref("custom-ident")}}. Wenn angegeben, können die Grafiken, die aus der Verarbeitung dieses Filter-Primitives resultieren, durch ein in Attribut auf einem nachfolgenden Filter-Primitive innerhalb desselben Filterelements referenziert werden. Wenn kein Wert angegeben ist, wird die Ausgabe nur zur Wiederverwendung als implizite Eingabe in das nächste Filter-Primitive zur Verfügung stehen, falls dieses Filter-Primitive keinen Wert für sein in Attribut angibt.

## Lösung für BackgroundImage

`BackgroundImage` wird in modernen Browsern nicht als Filterquelle unterstützt (siehe die [feComposite-Kompatibilitätstabelle](/de/docs/Web/SVG/Element/feComposite#browser_compatibility)). Wir müssen daher eines der Bilder importieren, die innerhalb des Filters selbst über ein `<feImage>` Element zu mischen sind.

> [!NOTE]
> Firefox [Bug 455986](https://bugzil.la/455986) bedeutet, dass `feImage` keine Teilbilder laden kann, einschließlich Kreisen, Rechtecken, Pfaden oder anderen im Dokument definierten Fragmenten. Damit dieses Beispiel in mehr Browsern funktioniert, wird ein vollständiges externes Bild des Logos geladen.

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
