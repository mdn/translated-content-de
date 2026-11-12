---
title: fetchpriority
slug: Web/SVG/Reference/Attribute/fetchpriority
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

{{SeeCompatTable}}{{non-standard_header}}

Das Attribut `fetchpriority` gibt dem Browser einen Hinweis darauf, mit welcher relativen Priorität er eine externe Ressource abrufen soll. Es funktioniert genauso wie das Attribut `fetchpriority` für die HTML-Elemente {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}}.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGelement("feimage")}}
- {{SVGelement("image")}}
- {{SVGelement("script")}}

## Beispiele

Dieses Beispiel zeigt, wie die Priorität eines SVG-Elements {{SVGelement("script")}} auf `high` gesetzt wird.

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
  - : Ruft die externe Ressource mit hoher Priorität im Verhältnis zu anderen externen Ressourcen ab.
- `low`
  - : Ruft die externe Ressource mit niedriger Priorität im Verhältnis zu anderen externen Ressourcen ab.
- `auto`
  - : Legt keine bevorzugte Abrufpriorität fest.
    Dieser Wert wird verwendet, wenn kein Wert oder ein ungültiger Wert angegeben ist.
    Dies ist der Standardwert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Element {{SVGelement("script")}}
- HTML-Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
