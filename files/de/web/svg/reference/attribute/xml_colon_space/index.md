---
title: xml:space
slug: Web/SVG/Reference/Attribute/xml:space
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

SVG unterstützt das eingebaute XML-Attribut **`xml:space`**, um Leerzeichen innerhalb von Elementen zu handhaben. Kindelemente innerhalb eines Elements können ebenfalls ein `xml:space`-Attribut haben, das das des übergeordneten Elements überschreibt.

> [!NOTE]
> Anstelle des `xml:space`-Attributs verwenden Sie die CSS-Eigenschaft {{cssxref("white-space")}}.

Dieses Attribut beeinflusst, wie Browser Textinhalte parsen und somit ändert es die Art und Weise, wie das {{Glossary("DOM", "DOM")}} aufgebaut wird. Daher kann das Ändern des Attributwerts über die DOM-API keine Auswirkung haben.

## Elemente

Dieses Attribut kann mit jedem SVG-Element verwendet werden.

## Nutzungshinweise

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
  - : Mit diesem Wert werden Leerzeichen in folgender Reihenfolge verarbeitet:
    1. Alle Zeilenumbruchzeichen werden entfernt.
    2. Alle Tab-Zeichen werden in Leerzeichen umgewandelt.
    3. Alle führenden und abschließenden Leerzeichen werden entfernt.
    4. Alle aufeinanderfolgenden Leerzeichen werden zu einem einzelnen Leerzeichen zusammengefasst.

- `preserve`
  - : Dieser Wert weist den Benutzeragenten an, alle Zeilenumbruchs- und Tab-Zeichen in Leerzeichen umzuwandeln. Dann werden alle Leerzeichen gezeichnet (einschließlich führender, abschließender und mehrfach aufeinanderfolgender Leerzeichen).

    Zum Beispiel trennt der String „a&nbsp;&nbsp;&nbsp;b“ (drei Leerzeichen zwischen „a“ und „b“) „a“ und „b“ mehr als „a b“ (ein Leerzeichen zwischen „a“ und „b“).

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
