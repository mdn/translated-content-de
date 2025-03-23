---
title: tabindex
slug: Web/SVG/Reference/Attribute/tabindex
l10n:
  sourceCommit: 05617e872df6d1c5b5d480eaa1b11852c1ce39f1
---

Das **`tabindex`**-Attribut ermöglicht es Ihnen, zu steuern, ob ein Element fokussierbar ist und die relative Reihenfolge des Elements für die Zwecke der sequentiellen Fokussierung zu definieren.

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
  <circle r="10" tabindex="0" fill="green" cx="60" cy="60" />
  <circle r="40" tabindex="0" fill="red" cx="60" cy="160" />
  <circle r="60" tabindex="0" fill="blue" cx="160" cy="60" />
  <circle r="20" tabindex="0" fill="black" cx="160" cy="160" />
</svg>
```

{{EmbedLiveSample("Example", "260", "260")}}

## Verwendungshinweise

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
  - : Relative Reihenfolge des Elements für die Zwecke der sequentiellen Fokussierung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML `tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)
