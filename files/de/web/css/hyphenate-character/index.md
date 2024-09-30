---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **`hyphenate-character`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Zeichen (oder die Zeichenkette) fest, das am Ende einer Zeile vor einem Trennungsumbruch verwendet wird.

Sowohl automatische als auch bedingte Trennstriche werden entsprechend dem angegebenen `hyphenate-character`-Wert angezeigt.

{{EmbedInteractiveExample("pages/css/hyphenate-character.html")}}

## Syntax

```css
hyphenate-character: <string>;
hyphenate-character: auto;
```

Der Wert legt entweder die zu verwendende Zeichenkette anstelle eines Trennstrichs fest oder gibt an, dass der User-Agent eine geeignete Zeichenkette basierend auf den aktuellen typografischen Konventionen auswählen sollte (Standard).

### Werte

- `<string>`
  - : Die {{cssxref("&lt;string&gt;")}}, die am Ende der Zeile vor einem Trennungsumbruch verwendet werden soll.
    Der User-Agent kann diesen Wert kürzen, wenn zu viele Zeichen verwendet werden.
- `auto`
  - : Der User-Agent wählt eine geeignete Zeichenkette basierend auf den typografischen Konventionen der Inhaltssprache aus.
    Dies ist der Standardwert der Eigenschaft und muss nur explizit gesetzt werden, um einen anderen vererbten Wert zu überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt zwei identische Textblöcke, die {{cssxref("hyphens")}} gesetzt haben, um sicherzustellen, dass sie dort umgebrochen werden, wo es nötig ist, und bei bedingten Trennungen (erstellt mit `&shy;`).
Der erste Block hat den Wert des Trennzeichens auf das Gleichheitszeichen (`=`) geändert.
Der zweite Block hat kein `hyphenate-character` gesetzt, was für User-Agents, die diese Eigenschaft unterstützen, gleichbedeutend mit `hyphenate-character: auto` ist.

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
