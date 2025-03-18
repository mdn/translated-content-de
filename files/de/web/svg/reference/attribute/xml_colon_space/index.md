---
title: xml:space
slug: Web/SVG/Reference/Attribute/xml:space
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

SVG unterstützt das eingebaute XML-Attribut **`xml:space`**, um mit Leerzeichen innerhalb von Elementen umzugehen. Kindelemente innerhalb eines Elements können ebenfalls ein `xml:space`-Attribut haben, das das des übergeordneten Elements außer Kraft setzt.

> [!NOTE]
> Anstelle des `xml:space`-Attributs verwenden Sie die CSS-Eigenschaft {{cssxref("white-space")}}.

Dieses Attribut beeinflusst, wie Browser Textinhalte parsen und daher verändert es die Art und Weise, wie das {{Glossary("DOM", "DOM")}} aufgebaut wird. Dementsprechend kann es keinen Effekt haben, wenn Sie den Wert dieses Attributs über die DOM API ändern.

## Elemente

Dieses Attribut kann mit jedem SVG-Element verwendet werden.

## Verwendungsnotizen

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

    1. Alle Zeilenumbrüche werden entfernt.
    2. Alle Tabulatorzeichen werden in Leerzeichen umgewandelt.
    3. Alle führenden und nachfolgenden Leerzeichen werden entfernt.
    4. Alle aufeinanderfolgenden Leerzeichen werden zu einem einzigen Leerzeichen reduziert.

- `preserve`

  - : Dieser Wert weist den Benutzeragenten an, alle Zeilenumbrüche und Tabulatorzeichen in Leerzeichen umzuwandeln. Anschließend werden alle Leerzeichen angezeigt (einschließlich führender, nachfolgender und mehrerer aufeinanderfolgender Leerzeichen).

    Zum Beispiel trennt der String "a&nbsp;&nbsp;&nbsp;b" (drei Leerzeichen zwischen "a" und "b") "a" und "b" mehr als "a b" (ein Leerzeichen zwischen "a" und "b").

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
