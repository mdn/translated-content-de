---
title: tabindex
slug: Web/SVG/Reference/Attribute/tabindex
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`tabindex`**-Attribut ermöglicht es Ihnen, zu steuern, ob ein Element fokussierbar ist und die relative Reihenfolge des Elements für die Zwecke der sequentiellen Fokusnavigation zu definieren.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<?xml version="1.0"?>
<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="15" tabindex="0" />
  <circle cx="60" cy="160" r="30" tabindex="0" />
  <circle cx="160" cy="60" r="30" tabindex="0" />
  <circle cx="160" cy="160" r="60" tabindex="0" />
</svg>
```

{{EmbedLiveSample("Example", "260", "260")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer">gültige Ganzzahl</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- gültige Ganzzahl
  - : Relative Reihenfolge des Elements für die Zwecke der sequentiellen Fokusnavigation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML `tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)
