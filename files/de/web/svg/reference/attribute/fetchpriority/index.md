---
title: fetchpriority
slug: Web/SVG/Reference/Attribute/fetchpriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{SeeCompatTable}}{{non-standard_header}}

Das `fetchpriority`-Attribut gibt dem Browser einen Hinweis auf die relative Priorität beim Abrufen einer externen Ressource. Dies funktioniert auf die gleiche Weise wie das `fetchpriority`-Attribut für die HTML-{{HTMLElement("img", "", "#fetchpriority")}}- und {{HTMLElement("script", "", "#fetchpriority")}}-Elemente.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGelement("feimage")}}
- {{SVGelement("image")}}
- {{SVGelement("script")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>high</code> | <code>low</code> | <code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
  </tbody>
</table>

- `high`
  - : Ruft die externe Ressource mit hoher Priorität im Vergleich zu anderen externen Ressourcen ab.
- `low`
  - : Ruft die externe Ressource mit niedriger Priorität im Vergleich zu anderen externen Ressourcen ab.
- `auto`
  - : Setzt keine Präferenz für die Abrufpriorität.
    Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
    Dies ist der Standardwert.

## Beispiele

Dieses Beispiel zeigt, wie man die Priorität eines SVG-{{SVGelement("script")}}-Elements auf `high` setzt.

```html
<svg
  viewBox="0 0 10 10"
  height="120px"
  width="120px"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="normal" cx="5" cy="5" r="4" />
  <script href="./color-change.js" fetchpriority="high"></script>
</svg>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGelement("script")}}-Element
- HTML-Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
