---
title: SVGTextPathElement
slug: Web/API/SVGTextPathElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Die **`SVGTextPathElement`** Schnittstelle entspricht dem {{SVGElement("textPath")}} Element.

{{InheritanceDiagram}}

## Konstanten

### Methodentypen

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>TEXTPATH_METHODTYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen,
        einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>TEXTPATH_METHODTYPE_ALIGN</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>align</code>.</td>
    </tr>
    <tr>
      <td><code>TEXTPATH_METHODTYPE_STRETCH</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>stretch</code>.</td>
    </tr>
  </tbody>
</table>

### Abstandsarten

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>TEXTPATH_SPACINGTYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen,
        einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>TEXTPATH_SPACINGTYPE_AUTO</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>auto</code>.</td>
    </tr>
    <tr>
      <td><code>TEXTPATH_SPACINGTYPE_EXACT</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>exact</code>.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)._

- [`SVGTextPathElement.href`](/de/docs/Web/API/SVGTextPathElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des jeweiligen Elements entspricht.
- [`SVGTextPathElement.startOffset`](/de/docs/Web/API/SVGTextPathElement/startOffset) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das der X-Komponente des {{SVGAttr("startOffset")}} Attributs des jeweiligen Elements entspricht.
- [`SVGTextPathElement.method`](/de/docs/Web/API/SVGTextPathElement/method) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("method")}} Attribut des jeweiligen Elements entspricht. Es nimmt einen der `TEXTPATH_METHODTYPE_*` Konstanten an, die auf dieser Schnittstelle definiert sind.
- [`SVGTextPathElement.spacing`](/de/docs/Web/API/SVGTextPathElement/spacing) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("spacing")}} Attribut des jeweiligen Elements entspricht. Es nimmt einen der `TEXTPATH_SPACINGTYPE_*` Konstanten an, die auf dieser Schnittstelle definiert sind.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch diejenigen ihrer Elternschnittstelle, [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("textPath")}}
