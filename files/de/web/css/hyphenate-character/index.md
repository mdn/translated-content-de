---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **`hyphenate-character`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Zeichen (oder den Zeichenstring) fest, das am Ende einer Zeile vor einem Trennungsumbruch verwendet wird.

Sowohl automatische als auch bedingte Trennzeichen werden entsprechend dem angegebenen `hyphenate-character`-Wert angezeigt.

{{EmbedInteractiveExample("pages/css/hyphenate-character.html")}}

## Syntax

```css
hyphenate-character: <string>;
hyphenate-character: auto;
```

Der Wert legt entweder den zu verwendenden Zeichenstring anstelle eines Bindestrichs fest oder zeigt an, dass der Benutzeragent einen geeigneten Zeichenstring basierend auf den aktuellen typografischen Konventionen auswählen sollte (Standard).

### Werte

- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der am Ende der Zeile vor einem Trennungsumbruch verwendet werden soll.
    Der Benutzeragent kann diesen Wert kürzen, wenn zu viele Zeichen verwendet werden.
- `auto`
  - : Der Benutzeragent wählt einen geeigneten Zeichenstring basierend auf den typografischen Konventionen der Inhaltsprache aus.
    Dies ist der Standardwert der Eigenschaft und muss nur explizit gesetzt werden, um einen anderen geerbten Wert zu überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt zwei identische Textblöcke, die so eingestellt sind, dass sie bei Bedarf und bei weichen Trennungsbrüchen (erstellt mit `&shy;`) brechen.
Der erste Block hat den Wert des Trennzeichens auf das Gleichheitszeichen (`=`) geändert.
Der zweite Block hat kein `hyphenate-character` gesetzt, was für Benutzeragenten, die diese Eigenschaft unterstützen, gleichbedeutend mit `hyphenate-character: auto` ist.

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
