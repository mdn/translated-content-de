---
title: cursor
slug: Web/SVG/Attribute/cursor
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{SVGRef}}

[SVG-Attribut-Referenz Startseite](/de/docs/Web/SVG/Attribute)

Das `cursor`-Attribut legt den Mauszeiger fest, der angezeigt wird, wenn sich der Mauszeiger über einem Element befindet.

Dieses Attribut verhält sich genau wie die CSS-Eigenschaft {{cssxref("cursor")}}, außer dass, wenn der Browser das {{ SVGElement("cursor") }}-Element unterstützt, Sie es mit der [\<FuncIRI>](/de/docs/Web/SVG/Content_type#funciri)-Notation verwenden können sollten.

Als Präsentationsattribut kann es auch direkt innerhalb eines CSS-Stylesheets als Eigenschaft verwendet werden. Siehe CSS {{cssxref("cursor")}} für weitere Informationen.

## Verwendungskontext

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td>Präsentationsattribut</td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>
        [[<a href="/de/docs/Web/SVG/Content_type#funciri">&#x3C;FuncIRI></a
        >,]* [ <strong>auto</strong> | crosshair | default | pointer | move |
        e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize |
        s-resize | w-resize| text | wait | help ]] | inherit
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/interact.html#CursorProperty"
          >SVG 1.1 (2. Ausgabe)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Elemente

Die folgenden Elemente können das `cursor`-Attribut verwenden

- [Container-Elemente](/de/docs/Web/SVG/Element#container_elements)
- [Grafik-Elemente](/de/docs/Web/SVG/Element#graphics_elements)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("cursor")}}
