---
title: text-overflow
slug: Web/SVG/Reference/Attribute/text-overflow
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das SVG-Attribut **`text-overflow`** gibt an, wie Textinhaltsblockelemente gerendert werden, wenn Text die Rahmen von Textzeilen überläuft. Dies kann zum Beispiel passieren, wenn das {{SVGAttr("white-space")}}-Attribut oder die CSS-Eigenschaft {{CSSxref("white-space")}} den Wert `nowrap` hat. Die Eigenschaft gilt nicht für vorformatierten Text oder Text, der auf einem Pfad platziert ist.

In SVG hat `text-overflow` eine Wirkung, wenn ein gültig spezifizierter Umbruchbereich vorhanden ist, unabhängig vom berechneten Wert der {{CSSxref("overflow")}}-Eigenschaft auf dem Textinhaltsblockelement. Die Wirkung ist rein visuell: abgeschnittener Text wird nicht aus dem DOM entfernt, und ein dargestelltes Auslassungszeichen wird selbst nicht Teil des DOM. Für alle DOM-Methoden ist es so, als ob `text-overflow` nicht angewendet worden wäre und als ob der Umbruchbereich den Text nicht eingeschränkt hätte.

> [!NOTE]
> Als Präsentationsattribut hat `text-overflow` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("text-overflow")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>clip</code> | <code>ellipses</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>clip</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `clip`
  - : Jeder Text, der den Umbruchbereich überläuft, wird abgeschnitten. Zeichen können teilweise gerendert werden. Dies ist der Standardwert.
- `ellipsis`
  - : Wenn der zu rendernde Text den Umbruchbereich überläuft, wird der Text abgeschnitten und ein Auslassungszeichen so dargestellt, dass es in den gegebenen Bereich passt.

Für weitere Informationen siehe die CSS-Eigenschaft [CSS `text-overflow`](/de/docs/Web/CSS/Reference/Properties/text-overflow#values).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("text-overflow")}}-Eigenschaft
