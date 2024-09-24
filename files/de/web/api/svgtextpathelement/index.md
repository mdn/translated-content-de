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

### Methodenarten

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig zu
        versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert auf diesen Typ zu ändern.
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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig zu
        versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert auf diesen Typ zu ändern.
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

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGTextContentElement")}}._

- {{domxref("SVGTextPathElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGTextPathElement.startOffset")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das der X-Komponente des {{SVGAttr("startOffset")}} Attributs des gegebenen Elements entspricht.
- {{domxref("SVGTextPathElement.method")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("method")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `TEXTPATH_METHODTYPE_*` Konstanten an, die in dieser Schnittstelle definiert sind.
- {{domxref("SVGTextPathElement.spacing")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("spacing")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `TEXTPATH_SPACINGTYPE_*` Konstanten an, die in dieser Schnittstelle definiert sind.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihres übergeordneten Elements, {{domxref("SVGTextContentElement")}}._

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("textPath")}}
