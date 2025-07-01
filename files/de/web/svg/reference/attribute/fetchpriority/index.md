---
title: fetchpriority
slug: Web/SVG/Reference/Attribute/fetchpriority
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das `fetchpriority`-Attribut gibt dem Browser einen Hinweis auf die relative Priorität, die beim Abrufen einer externen Ressource verwendet werden soll. Dies funktioniert auf die gleiche Weise wie das `fetchpriority`-Attribut für die HTML {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}} Elemente.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGelement("feimage")}}
- {{SVGelement("image")}}
- {{SVGelement("script")}}

## Hinweise zur Verwendung

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
    Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
    Dies ist der Standard.

## Beispiele

Dieses Beispiel zeigt, wie die Priorität eines SVG-{{SVGelement("script")}}-Elements auf `high` gesetzt wird.

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

- SVG {{SVGelement("script")}} Element
- HTML `<script>`-Element [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/script#fetchpriority) Attribut
