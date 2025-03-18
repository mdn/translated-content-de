---
title: cursor
slug: Web/SVG/Reference/Attribute/cursor
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das `cursor`-Attribut legt den Mauszeiger fest, der angezeigt wird, wenn sich der Mauszeiger über einem Element befindet.

> [!NOTE]
> Als Präsentationsattribut hat `cursor` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("cursor")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Priorität.

Dieses Attribut verhält sich genau wie die CSS {{cssxref("cursor")}}-Eigenschaft, außer dass, wenn der Browser das {{ SVGElement("cursor") }}-Element unterstützt, Sie in der Lage sein sollten, es mit der [\<FuncIRI>](/de/docs/Web/SVG/Guides/Content_type#funciri)-Notation zu verwenden.

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
        [[<a href="/de/docs/Web/SVG/Guides/Content_type#funciri">&#x3C;FuncIRI></a
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

- [Containerelemente](/de/docs/Web/SVG/Reference/Element#container_elements)
- [Grafikelemente](/de/docs/Web/SVG/Reference/Element#graphics_elements)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("cursor")}}-Eigenschaft
