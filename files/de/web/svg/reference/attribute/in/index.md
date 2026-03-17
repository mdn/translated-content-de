---
title: in
slug: Web/SVG/Reference/Attribute/in
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Das **`in`**-Attribut identifiziert die Eingabe für die gegebene Filterprimitiv.

Der Wert kann entweder einer der sechs unten definierten Schlüsselwörter sein oder ein String, der einem vorherigen Wert des Attributs {{SVGAttr("result")}} innerhalb desselben {{SVGElement("filter")}}-Elements entspricht. Wenn kein Wert angegeben wird und dies das erste Filterprimitiv ist, dann verwendet dieses Filterprimitiv `SourceGraphic` als seine Eingabe. Wenn kein Wert angegeben wird und dies ein nachfolgendes Filterprimitiv ist, dann verwendet dieses Filterprimitiv das Ergebnis des vorherigen Filterprimitivs als seine Eingabe.

Erscheint der Wert für {{SVGAttr("result")}} mehrmals innerhalb eines gegebenen {{SVGElement("filter")}}-Elements, dann wird sich eine Referenz auf dieses Ergebnis auf das nächstvorhergehende Filterprimitiv mit dem gegebenen Wert für das Attribut {{SVGAttr("result")}} beziehen.

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
        <code>SourceGraphic</code> für das erste Filterprimitiv, ansonsten Ergebnis
        des vorherigen Filterprimitivs
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
  - : Dieses Schlüsselwort repräsentiert die Grafikelemente, die die ursprüngliche Eingabe in das `<filter>`-Element waren. `SourceAlpha` hat alle dieselben Regeln wie `SourceGraphic`, außer dass nur der Alphakanal verwendet wird.
- `BackgroundImage`
  - : Dieses Schlüsselwort repräsentiert ein Bild-Snapshot des SVG-Dokuments unter dem Filterbereich zum Zeitpunkt, als das `<filter>`-Element aufgerufen wurde.
- `BackgroundAlpha`
  - : Gleiche wie `BackgroundImage`, außer dass nur der Alphakanal verwendet wird.
- `FillPaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("fill")}}-Eigenschaft auf dem Zielobjekt für den Filtereffekt. In vielen Fällen ist der `FillPaint` überall opak, aber das könnte nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gemalt ist, das selbst transparente oder halbtransparente Teile enthält.
- `StrokePaint`
  - : Dieses Schlüsselwort repräsentiert den Wert der {{SVGAttr("stroke")}}-Eigenschaft auf dem Zielobjekt für den Filtereffekt. In vielen Fällen ist der `StrokePaint` überall opak, aber das könnte nicht der Fall sein, wenn eine Form mit einem Verlauf oder Muster gemalt ist, das selbst transparente oder halbtransparente Teile enthält.
- `<filter-primitive-reference>`
  - : Dieser Wert ist ein zugewiesener Name für das Filterprimitiv in Form eines {{cssxref("custom-ident")}}. Wenn angegeben, können die Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein `in`-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben Filterelements referenziert werden. Wenn kein Wert angegeben ist, steht die Ausgabe nur zur Wiederverwendung als implizite Eingabe in das nächste Filterprimitiv zur Verfügung, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

## Workaround für BackgroundImage

`BackgroundImage` wird in modernen Browsern nicht als Filterquelle unterstützt (siehe die [feComposite-Kompatibilitätstabelle](/de/docs/Web/SVG/Reference/Element/feComposite#browser_compatibility)). Deshalb müssen wir eines der Bilder im Filter selbst einfügen, indem wir ein `<feImage>`-Element verwenden.

> [!NOTE]
> Ein [Fehler 455986](https://bugzil.la/455986) in Firefox bedeutet, dass `feImage` keine Teilbilder laden kann, einschließlich Kreise, Rechtecke, Pfade oder andere im Dokument definierte Fragmente. Damit dieses Beispiel in mehr Browsern funktioniert, wird ein vollständiges externes Bild des Logos geladen.

### HTML

```html
<svg
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
    fill="#cc0000"
    filter="url(#backgroundMultiply)" />
</svg>

<svg
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
    fill="#cc0000"
    filter="url(#imageMultiply)" />
</svg>
```

```css hidden
svg {
  width: 200px;
  height: 200px;
  display: inline;
}
```

### Ergebnis

{{EmbedLiveSample("Workaround_for_BackgroundImage")}}

## Spezifikationen

{{Specifications}}
