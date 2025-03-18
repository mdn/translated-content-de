---
title: in
slug: Web/SVG/Reference/Attribute/in
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`in`**-Attribut identifiziert die Eingabe für das gegebene Filter-Primitiv.

Der Wert kann entweder einer der sechs unten definierten Schlüsselwörter sein oder ein String, der einem vorherigen {{SVGAttr("result")}}-Attributwert innerhalb desselben {{SVGElement("filter")}}-Elements entspricht. Wenn kein Wert angegeben wird und dies das erste Filter-Primitiv ist, dann verwendet dieses Filter-Primitiv `SourceGraphic` als Eingabe. Wenn kein Wert angegeben wird und dies ein nachfolgendes Filter-Primitiv ist, dann verwendet dieses Filter-Primitiv das Ergebnis des vorherigen Filter-Primitivs als Eingabe.

Wenn der Wert für {{SVGAttr("result")}} mehrfach innerhalb eines gegebenen {{SVGElement("filter")}}-Elements vorkommt, dann wird auf das nächste vorangehende Filter-Primitiv mit dem gegebenen Wert für das Attribut {{SVGAttr("result")}} verwiesen.

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

## Anwendungshinweise

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
        <code>SourceGraphic</code> für das erste Filter-Primitiv, ansonsten das Ergebnis
        des vorherigen Filter-Primitivs
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `SourceGraphic`
  - : Dieses Schlüsselwort steht für die grafischen Elemente, die die ursprüngliche Eingabe in das {{SVGElement("filter")}}-Element waren.
- `SourceAlpha`
  - : Dieses Schlüsselwort steht für die grafischen Elemente, die die ursprüngliche Eingabe in das `<filter>`-Element waren. `SourceAlpha` hat alle gleichen Regeln wie `SourceGraphic`, außer dass nur der Alphakanal verwendet wird.
- `BackgroundImage`
  - : Dieses Schlüsselwort stellt einen Bild-Snapshot des SVG-Dokuments unterhalb der Filterregion zu dem Zeitpunkt dar, an dem das `<filter>`-Element aufgerufen wurde.
- `BackgroundAlpha`
  - : Dasselbe wie `BackgroundImage`, außer dass nur der Alphakanal verwendet wird.
- `FillPaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("fill")}}-Eigenschaft am Zielelement für den Filtereffekt. In vielen Fällen ist das `FillPaint` überall undurchsichtig, aber das muss nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gemalt wird, das selbst transparente oder halbtransparente Teile enthält.
- `StrokePaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("stroke")}}-Eigenschaft am Zielelement für den Filtereffekt. In vielen Fällen ist das `StrokePaint` überall undurchsichtig, aber das muss nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gemalt wird, das selbst transparente oder halbtransparente Teile enthält.
- `<filter-primitive-reference>`
  - : Dieser Wert ist ein zugewiesener Name für das Filter-Primitiv in Form eines {{cssxref("custom-ident")}}. Wenn angegeben, können die Grafiken, die aus der Verarbeitung dieses Filter-Primitives resultieren, durch ein in-Attribut auf einem nachfolgenden Filter-Primitiv innerhalb desselben Filterelements referenziert werden. Wenn kein Wert angegeben wird, steht die Ausgabe nur zur Wiederverwendung als implizite Eingabe in das nächste Filter-Primitiv zur Verfügung, wenn dieses Filter-Primitiv keinen Wert für sein in-Attribut bereitstellt.

## Workaround für BackgroundImage

`BackgroundImage` wird in modernen Browsern nicht als Filterquelle unterstützt (siehe die [Kompatibilitätstabelle von feComposite](/de/docs/Web/SVG/Reference/Element/feComposite#browser_compatibility)). Daher müssen wir eines der Bilder importieren, um es im Filter selbst zu mischen, indem wir ein `<feImage>`-Element verwenden.

> [!NOTE]
> Firefox [Fehler 455986](https://bugzil.la/455986) bedeutet, dass `feImage` keine Teilbilder laden kann, einschließlich Kreisen, Rechtecken, Pfaden oder anderen im Dokument definierten Fragmenten. Damit dieses Beispiel in mehr Browsern funktioniert, wird ein vollständiges externes Bild des Logos geladen.

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
