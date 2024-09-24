---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`hyphenate-character`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Zeichen (oder den String) fest, das am Ende einer Zeile vor einem Trennungsstrich verwendet wird.

Sowohl automatische als auch bedingte Trennstriche werden entsprechend dem angegebenen Wert von hyphenate-character angezeigt.

{{EmbedInteractiveExample("pages/css/hyphenate-character.html")}}

## Syntax

```css
hyphenate-character: <string>;
hyphenate-character: auto;
```

Der Wert setzt entweder den String, der anstelle eines Trennstrichs verwendet werden soll, oder gibt an, dass der User-Agent basierend auf den aktuellen typografischen Konventionen eine geeignete Zeichenfolge auswählen soll (Standard).

### Werte

- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der am Ende der Zeile vor einem Trennungsstrich verwendet werden soll.
    Der User-Agent kann diesen Wert kürzen, wenn zu viele Zeichen verwendet werden.
- `auto`
  - : Der User-Agent wählt eine geeignete Zeichenfolge basierend auf den typografischen Konventionen der Inhaltsprache aus.
    Dies ist der Standardwert der Eigenschaft und muss nur explizit gesetzt werden, um einen anderen geerbten Wert zu überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt zwei identische Textblöcke, die {{cssxref("hyphens")}} gesetzt haben, um sicherzustellen, dass sie bei Bedarf und bei bedingten Trennstrichen (erstellt mit `&shy;`) brechen.
Der erste Block hat den Wert des Trennzeichens auf das Gleichheitszeichen ("`=`") geändert.
Der zweite Block hat kein hyphenate-character gesetzt, was für User Agents, die diese Eigenschaft unterstützen, `hyphenate-character: auto` entspricht.

### HTML

```html
<dl>
  <dt><code>hyphenate-character: "="</code></dt>
  <dd id="string" lang="en">Superc&shy;alifragilisticexpialidocious</dd>
  <dt><code>hyphenate-character is not set</code></dt>
  <dd lang="en">Superc&shy;alifragilisticexpialidocious</dd>
</dl>
```

### CSS

```css
dd {
  width: 90px;
  border: 1px solid black;
  hyphens: auto;
}

dd#string {
  -webkit-hyphenate-character: "=";
  hyphenate-character: "=";
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("hyphens")}}, {{cssxref("overflow-wrap")}}.
