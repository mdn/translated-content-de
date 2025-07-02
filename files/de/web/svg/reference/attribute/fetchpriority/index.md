---
title: fetchpriority
slug: Web/SVG/Reference/Attribute/fetchpriority
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

Das `fetchpriority` Attribut gibt dem Browser einen Hinweis auf die relative Priorität, die beim Abrufen einer externen Ressource verwendet werden soll. Dies funktioniert genauso wie das `fetchpriority` Attribut für die HTML {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}} Elemente.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  - : Setzt keine Vorliebe für die Abrufpriorität.
    Wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
    Dies ist der Standardwert.

## Beispiele

Dieses Beispiel zeigt, wie die Priorität eines SVG {{SVGelement("script")}} Elements auf `high` gesetzt wird.

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
- HTML `<script>` Element's [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/script#fetchpriority) Attribut
