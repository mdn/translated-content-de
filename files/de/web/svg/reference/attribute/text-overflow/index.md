---
title: text-overflow
slug: Web/SVG/Reference/Attribute/text-overflow
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

Das SVG-Attribut **`text-overflow`** gibt an, wie Textinhaltselemente dargestellt werden, wenn Text die Linienboxen überläuft. Dies kann zum Beispiel passieren, wenn das {{SVGAttr("white-space")}}-Attribut oder die CSS-Eigenschaft {{CSSxref("white-space")}} den Wert `nowrap` hat. Die Eigenschaft gilt nicht für vorformatierten Text oder Text, der sich auf einem Pfad befindet.

In SVG hat `text-overflow` eine Wirkung, wenn ein gültiger Umbruchbereich angegeben ist, unabhängig vom berechneten Wert der {{CSSxref("overflow")}}-Eigenschaft im Textinhaltselement. Die Wirkung ist rein visuell: abgeschnittener Text wird nicht aus dem DOM entfernt, und jedes eventuell angezeigte Auslassungszeichen wird nicht selbst Teil des DOM. Für alle DOM-Methoden ist es so, als ob `text-overflow` nicht angewendet wurde und als ob der Umbruchbereich den Text nicht einschränken würde.

> [!NOTE]
> Als Präsentationsattribut hat `text-overflow` auch ein entsprechendes CSS-Attribut: {{cssxref("text-overflow")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Verwendungshinweise

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
  - : Jeglicher Text, der den Umbruchbereich überläuft, wird abgeschnitten. Zeichen können teilweise gerendert werden. Dies ist der Standardwert.
- `ellipsis`
  - : Wenn der zu darstellende Text den Umbruchbereich überläuft, wird der Text abgeschnitten und ein Auslassungszeichen so gerendert, dass es in den gegebenen Bereich passt.

Für weitere Informationen siehe die [CSS `text-overflow`](/de/docs/Web/CSS/text-overflow#values)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("text-overflow")}} Eigenschaft
