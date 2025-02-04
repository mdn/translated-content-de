---
title: cursor
slug: Web/SVG/Attribute/cursor
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

[SVG-Attributreferenz Startseite](/de/docs/Web/SVG/Attribute)

Das `cursor`-Attribut legt den Mauszeiger fest, der angezeigt wird, wenn der Mauszeiger über einem Element liegt.

Dieses Attribut verhält sich genau wie die CSS-Eigenschaft {{cssxref("cursor")}}, außer dass, wenn der Browser das {{ SVGElement("cursor") }}-Element unterstützt, Sie in der Lage sein sollten, es mit der [\<FuncIRI>](/de/docs/Web/SVG/Content_type#funciri)-Notation zu verwenden.

Als Präsentationsattribut kann es auch als Eigenschaft direkt in einem CSS-Stylesheet verwendet werden. Weitere Informationen finden Sie unter CSS {{cssxref("cursor")}}.

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
          >SVG 1.1 (2nd Edition)</a
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

- CSS {{cssxref("cursor")}}-Eigenschaft
