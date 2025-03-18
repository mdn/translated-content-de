---
title: id
slug: Web/SVG/Reference/Attribute/id
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
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

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>&#x3C;id></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- \<id>

  - : Gibt die ID des Elements an. Die ID muss innerhalb des Knotenbaums eindeutig sein, darf nicht leer sein und keine Leerzeichen enthalten.

    > [!NOTE]
    > Sie sollten `id`-Werte vermeiden, die als SVG-Ansichtsspezifikation (z. B. `MyDrawing.svg#svgView(viewBox(0,200,1000,1000))`) oder als grundlegendes Medienfragment interpretiert werden könnten, wenn sie als URL-Ziel-Fragment verwendet werden.

    Sie muss in XML-Dokumenten gültig sein. Ein eigenständiges SVG-Dokument verwendet die XML 1.0-Syntax, die festlegt, dass gültige IDs nur bestimmte Zeichen (Buchstaben, Ziffern und einige Satzzeichen) enthalten und nicht mit einer Ziffer, einem Punkt (.) oder einem Bindestrich (-) beginnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML `id`](/de/docs/Web/HTML/Global_attributes/id)
- {{SVGAttr("class")}}
