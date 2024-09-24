---
title: cursor
slug: Web/SVG/Attribute/cursor
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{SVGRef}}

[SVG-Attributreferenz Startseite](/de/docs/Web/SVG/Attribute)

Das `cursor`-Attribut gibt den Mauszeiger an, der angezeigt wird, wenn der Mauszeiger über ein Element bewegt wird.

Dieses Attribut verhält sich genau wie die CSS-Eigenschaft {{cssxref("cursor")}}, außer dass, wenn der Browser das {{ SVGElement("cursor") }}-Element unterstützt, es möglich sein sollte, es mit der [\<funciri>](/de/docs/Web/SVG/Content_type#funciri)-Notation zu verwenden.

Als Präsentationsattribut kann es auch direkt als Eigenschaft innerhalb eines CSS-Stylesheets verwendet werden. Weitere Informationen finden Sie unter CSS {{cssxref("cursor")}}.

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
        [[<a href="/de/docs/Web/SVG/Content_type#funciri">&#x3C;funciri></a
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

Die folgenden Elemente können das `cursor`-Attribut verwenden:

- [Container-Elemente](/de/docs/Web/SVG/Element#container_elements)
- [Grafikelemente](/de/docs/Web/SVG/Element#graphics_elements)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("cursor")}}
