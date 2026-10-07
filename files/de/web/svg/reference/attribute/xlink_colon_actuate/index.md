---
title: xlink:actuate
slug: Web/SVG/Reference/Attribute/xlink:actuate
l10n:
  sourceCommit: 8ae90c06d95ae6d0ccae0feb06ccab676fafbd24
---

Das Attribut **`xlink:actuate`** legt fest, wann der Verweis von der Quellressource zur Zielressource verfolgt wird. Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

> [!NOTE]
> Mit SVG 2 ist der Namespace `xlink` nicht mehr erforderlich. Das Attribut `xlink:actuate` ist veraltet und sollte in modernen SVG-Inhalten nicht verwendet werden.

> [!NOTE]
> Die XLink-Spezifikation definiert zwar mehrere Werte für das Attribut `xlink:actuate`, für das SVG-Element {{SVGElement("a")}} ist der Wert jedoch auf `onRequest` festgelegt.

## Beispiel

```html
<svg viewBox="0 0 160 20" xmlns="http://www.w3.org/2000/svg">
  <a xlink:actuate="onRequest" xlink:href="https://example.com/">
    <text x="10" y="15">MDN Web Docs</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "100")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>onLoad</code> | <code>onRequest</code> | <code>other</code> | <code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>onRequest</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `onRequest`
  - : Der Verweis von der Quellressource zur Zielressource wird verfolgt, wenn der Benutzer nach dem Laden der Quellressource ein Ereignis auslöst.
- `onLoad`
  - : Der Verweis zur Zielressource wird unmittelbar beim Laden der Quellressource verfolgt.
- `other`
  - : Verwendet ein anderes Verhalten als `onLoad` oder `onRequest`.
- `none`
  - : Der Verweis zur Zielressource wird nicht verfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("href")}}
- {{SVGElement("a")}}
