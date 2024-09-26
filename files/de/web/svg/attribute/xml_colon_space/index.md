---
title: xml:space
slug: Web/SVG/Attribute/xml:space
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{Deprecated_Header}}

SVG unterstützt das eingebaute XML-Attribut **`xml:space`**, um Leerzeichen innerhalb von Elementen zu verwalten. Kindelemente innerhalb eines Elements können ebenfalls ein `xml:space`-Attribut haben, das das des Elternteils überschreibt.

> [!NOTE]
> Anstatt das `xml:space`-Attribut zu verwenden, nutzen Sie die {{cssxref("white-space")}} CSS-Eigenschaft.

Dieses Attribut beeinflusst, wie Browser Textinhalte analysieren und verändert somit die Art und Weise, wie das {{Glossary("DOM")}} aufgebaut wird. Daher kann das Ändern dieses Attributwerts über die DOM-API keinen Effekt haben.

## Elemente

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Verwendungshinweise

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

  - : Mit diesem Wert werden Leerzeichenzeichen in folgender Reihenfolge verarbeitet:

    1. Alle Zeilenumbrüche werden entfernt.
    2. Alle Tabulatorzeichen werden in Leerzeichen umgewandelt.
    3. Alle führenden und abschließenden Leerzeichen werden entfernt.
    4. Alle aufeinanderfolgenden Leerzeichen werden zu einem einzelnen Leerzeichen zusammengefasst.

- `preserve`

  - : Dieser Wert weist den Benutzeragenten an, alle Zeilenumbrüche und Tabulatorzeichen in Leerzeichen umzuwandeln. Anschließend werden alle Leerzeichen gerendert (einschließlich führender, abschließender und mehrfach aufeinanderfolgender Leerzeichen).

    Zum Beispiel trennt der String "a&nbsp;&nbsp;&nbsp;b" (drei Leerzeichen zwischen "a" und "b") die Buchstaben "a" und "b" stärker als "a b" (ein Leerzeichen zwischen "a" und "b").

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