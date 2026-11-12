---
title: xml:space
slug: Web/SVG/Reference/Attribute/xml:space
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

SVG unterstützt das integrierte XML-Attribut **`xml:space`**, mit dem sich Leerraumzeichen innerhalb von Elementen behandeln lassen. Untergeordnete Elemente können ebenfalls ein `xml:space`-Attribut besitzen, das den Wert des übergeordneten Elements überschreibt.

> [!NOTE]
> Verwenden Sie statt des Attributs `xml:space` die CSS-Eigenschaft {{cssxref("white-space")}}.

Dieses Attribut beeinflusst, wie Browser Textinhalte parsen, und verändert damit, wie das {{Glossary("DOM", "DOM")}} aufgebaut wird. Eine Änderung des Attributwerts über die DOM-API hat daher möglicherweise keine Auswirkung.

## Elemente

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html-nolint
<svg viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" xml:space="default">    Default    spacing</text>
  <text y="40" xml:space="preserve">    Preserved    spacing</text>
</svg>
```

{{EmbedLiveSample("Examples", "160", "50")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>default</code> | <code>preserve</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>default</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `default`
  - : Bei diesem Wert werden Leerraumzeichen in der folgenden Reihenfolge verarbeitet:
    1. Alle Zeilenumbrüche werden entfernt.
    2. Alle Tabulatorzeichen werden in Leerzeichen umgewandelt.
    3. Alle führenden und abschließenden Leerzeichen werden entfernt.
    4. Alle aufeinanderfolgenden Leerzeichen werden zu einem einzigen Leerzeichen zusammengefasst.

- `preserve`
  - : Dieser Wert weist den User Agent an, alle Zeilenumbrüche und Tabulatorzeichen in Leerzeichen umzuwandeln. Anschließend stellt er alle Leerzeichen dar, einschließlich führender, abschließender und mehrerer aufeinanderfolgender Leerzeichen.

    Beispielsweise ist der Abstand zwischen „a“ und „b“ in der Zeichenfolge „a&nbsp;&nbsp;&nbsp;b“ (drei Leerzeichen zwischen „a“ und „b“) größer als in „a b“ (ein Leerzeichen zwischen „a“ und „b“).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
