---
title: text-spacing-trim
slug: Web/CSS/Reference/Properties/text-spacing-trim
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert den internen Abstand bei chinesischen/japanischen/koreanischen (CJK) Satzzeichen zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen.

## Syntax

```css
/* Keyword values */
text-spacing-trim: normal;
text-spacing-trim: space-all;
text-spacing-trim: space-first;
text-spacing-trim: trim-start;

/* Global values */
text-spacing-trim: inherit;
text-spacing-trim: initial;
text-spacing-trim: revert;
text-spacing-trim: revert-layer;
text-spacing-trim: unset;
```

### Werte

- `<spacing-trim>`
  - : Definiert die verschiedenen Optionen für das Abstands-Trimming. Verfügbare Werte sind:
    - `normal`
      - : Setzt CJK-Vollbreite-öffnende Satzzeichen am Anfang jeder Zeile auf Vollbreite. Setzt CJK-Vollbreite-schließende Satzzeichen am Ende jeder Zeile auf Vollbreite oder auf halbe Breite, wenn sie nicht vor der Ausrichtung in die Zeile passen. [Kollabiert Abstände](#kollabieren_von_vollbreite-satzzeichen) zwischen Satzzeichen.
    - `space-all`
      - : Alle CJK-Vollbreite-Satzzeichen werden auf Vollbreite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-öffnende Satzzeichen am Anfang der ersten Zeile des Textblocks und am Anfang jeder nach einem expliziten Zeilenumbruch wie einem Zeilenumbruchzeichen kommenden Zeile auf Vollbreite gesetzt werden.
    - `trim-start`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-öffnende Satzzeichen am Anfang jeder Zeile auf halbe Breite gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/Guides/Text) Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim` Eigenschaft wendet Abstände/Kerning auf CJK-Satzzeichen an, um eine visuell ansprechende Typografie gemäß den [Anforderungen für das japanische Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für das chinesische Textlayout](https://www.w3.org/International/clreq/) (CLREQ) zu erzeugen.

Viele CJK-Satzzeichen enthalten glypheninterne Abstände. Beispielsweise haben das CJK-Punkt- und das CJK-Schließende Klammerzeichen normalerweise glypheninterne Abstände auf ihrer rechten Seite, um ihnen ein konstantes {{Glossary("Advance_measure", "advance measure")}} zu geben, das mit anderen ideografischen Zeichen übereinstimmt. Wenn sie jedoch in einer Reihe erscheinen, kann der glypheninterne Abstand übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solche übermäßigen Abstände zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen zu ajustieren. Allgemein gesagt:

- Wenn ein Vollbreite-Satzzeichen auf Vollbreite gesetzt ist, hat es interne Abstände auf beiden Seiten und ist die volle Breite eines Ideogramms.
- Wenn ein Vollbreite-Satzzeichen auf halbe Breite gesetzt ist, hat es interne Abstände nur auf einer Seite, und seine andere Seite liegt bündig mit dem Anfang (im Fall von öffnenden Satzzeichen) oder dem Ende (im Fall von schließenden Satzzeichen). Halbbreitenzeichen sind typischerweise die halbe Breite eines Ideogramms.

> [!NOTE]
> Um das Risiko übermäßigen Kernings zu vermeiden, müssen Schriftarten das OpenType-Feature "Alternate Half Widths" (`halt`), das Feature "Contextual Half-width Spacing" (`chws`) oder beide haben. Wenn die Schriftart keines der beiden Features hat, ist `text-spacing-trim` deaktiviert.

### Kollabieren von Vollbreite-Satzzeichen

Wenn Paare von Satzzeichen einander benachbart sind, wird der Raum zwischen ihnen gemäß den folgenden Regeln kollabiert:

- Setzen Sie ein Vollbreite-öffnendes Satzzeichen auf halbe Breite, wenn das vorherige Zeichen ein Vollbreite-öffnendes Satzzeichen, ein Vollbreite-Mittelpunktsymbol, ein ideografischer Raum (U+3000), ein Vollbreite-schließendes Satzzeichen mit gleicher oder größerer Schriftgröße oder ein Zeichen aus der [Unicode-General-Kategorie "Open punctuation" Ps](https://www.compart.com/en/unicode/category/Ps) ist. Ansonsten setzen Sie es auf Vollbreite.
- Setzen Sie ein Vollbreite-schließendes Satzzeichen auf halbe Breite, wenn das nächste Zeichen ein Vollbreite-schließendes Satzzeichen, ein Vollbreite-Mittelpunktsymbol, ein ideografischer Raum (U+3000), ein Vollbreite-öffnendes Satzzeichen mit größerer Schriftgröße oder ein Zeichen aus der [Unicode-General-Kategorie "Close punctuation" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Ansonsten setzen Sie es auf Vollbreite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der `text-spacing-trim` Werte

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen `text-spacing-trim` Eigenschaften, indem sie auf vier identische Absätze angewendet werden, sodass Sie die visuelle Unterschiede zwischen jedem sehen können.

#### HTML

```html
<main>
  <div id="normal">
    <h2>normal</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-all">
    <h2>space-all</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-first">
    <h2>space-first</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="trim-start">
    <h2>trim-start</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
</main>
```

#### CSS

```css
main {
  font-family:
    "Yu Gothic", "YuGothic", "Noto Sans JP", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", sans-serif;
  display: grid;
  gap: 0.5em;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin: 0 auto;
}
h2 {
  font-size: 80%;
  margin: 0;
}
p {
  font-size: 20px;
  border: 1px solid blue;
  margin: 0;
}
#normal {
  text-spacing-trim: normal;
  grid-column: 1;
  grid-row: 1;
}
#space-all {
  text-spacing-trim: space-all;
  grid-column: 2;
  grid-row: 1;
}
#space-first {
  text-spacing-trim: space-first;
  grid-column: 1;
  grid-row: 2;
}
#trim-start {
  text-spacing-trim: trim-start;
  grid-column: 2;
  grid-row: 2;
}
```

#### Ergebnis

{{EmbedLiveSample("`text-spacing-trim` value comparison", "100%",320)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("text-autospace")}}
- [`ic`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) Einheiten
- [CSS text](/de/docs/Web/CSS/Guides/Text) Modul
