---
title: cursor
slug: Web/SVG/Attribute/cursor
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das `cursor`-Attribut gibt den Mauszeiger an, der angezeigt wird, wenn sich der Mauszeiger über einem Element befindet.

> [!NOTE]
> Als Präsentationsattribut hat `cursor` auch ein entsprechendes CSS-Attribut: {{cssxref("cursor")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut verhält sich genau wie die CSS-Eigenschaft {{cssxref("cursor")}}, außer dass, wenn der Browser das {{ SVGElement("cursor") }}-Element unterstützt, Sie dieses mit der Notation [\<FuncIRI>](/de/docs/Web/SVG/Content_type#funciri) verwenden können.

## Anwendungsbereich

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
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Elemente

Die folgenden Elemente können das `cursor`-Attribut verwenden:

- [Container-Elemente](/de/docs/Web/SVG/Element#container_elements)
- [Grafik-Elemente](/de/docs/Web/SVG/Element#graphics_elements)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("cursor")}}-Eigenschaft
