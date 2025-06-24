---
title: id
slug: Web/SVG/Reference/Attribute/id
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`id`**-Attribut weist einem Element einen eindeutigen Namen zu.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiel

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    <![CDATA[
      #smallRect {
        stroke: #000066;
        fill: #00cc00;
      }
    ]]>
  </style>

  <rect id="smallRect" x="10" y="10" width="100" height="100" />
</svg>
```

{{EmbedLiveSample("Example", "120", "120")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>&#x3C;id></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- \<id>

  - : Bestimmt die ID des Elements. Die ID muss eindeutig innerhalb des Knotens sein, darf kein leerer String sein und keine Leerzeichen enthalten.

    > [!NOTE]
    > Sie sollten `id`-Werte vermeiden, die als SVG-Ansichtsspezifikation gelesen werden würden (z. B. `MyDrawing.svg#svgView(viewBox(0,200,1000,1000))`) oder ein grundlegendes Medienfragment darstellen, wenn sie als URL-Ziel verwendet werden.

    Die ID muss in XML-Dokumenten gültig sein. Ein eigenständiges SVG-Dokument verwendet die XML 1.0-Syntax, die angibt, dass gültige IDs nur bestimmte Zeichen (Buchstaben, Ziffern und einige Satzzeichen) enthalten und nicht mit einer Ziffer, einem Punkt (.) oder einem Bindestrich (-) beginnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML `id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
- {{SVGAttr("class")}}
