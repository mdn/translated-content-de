---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die interne Abstände von chinesischen/japanischen/koreanischen (CJK) Satzzeichen zwischen angrenzenden Zeichen (Kerning) und am Anfang oder Ende von Textzeilen.

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

  - : Definiert die verschiedenen Optionen für das Zuschneiden von Abständen. Verfügbare Werte sind:

    - `normal`
      - : Setzt CJK-Vollbreite-Öffnungssatzzeichen am Anfang jeder Zeile auf Vollbreite. Setzt CJK-Vollbreite-Schlusssatzzeichen am Ende jeder Zeile auf Vollbreite oder auf Halbbreite, wenn sie nicht in die Zeile passen, bevor der Text ausgerichtet wird. [Kollabiert die Abstände](#kollabieren_von_vollbreite-satzzeichen) zwischen Satzzeichen.
    - `space-all`
      - : Alle CJK-Vollbreite-Satzzeichen werden auf Vollbreite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Öffnungssatzzeichen am Anfang der ersten Zeile des Textblockcontainers und am Anfang jeder nachfolgenden Zeile, die nach einem expliziten Zeilenumbruch wie einem Zeilenumbruchzeichen folgt, auf Vollbreite gesetzt werden.
    - `trim-start`

      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Öffnungssatzzeichen am Anfang jeder Zeile auf Halbbreite gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die Eigenschaft `text-spacing-trim` wendet Abstände/Kerning auf CJK-Satzzeichen an, um typografisch ansprechenden Text gemäß den [Anforderungen an das japanische Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen an das chinesische Textlayout](https://www.w3.org/International/clreq/) (CLREQ) zu erzeugen.

Viele CJK-Satzzeichen beinhalten glyph-interne Abstände. Zum Beispiel haben das CJK-Schlusspunkt und die CJK-Schließklammer normalerweise glyph-interne Abstände auf ihrer rechten Seite, um ihnen eine konstante [Vorausmaß](/de/docs/Glossary/Advance_measure) zu geben, die mit anderen ideographischen Zeichen konsistent ist. Wenn sie jedoch in einer Reihe erscheinen, können die glyph-internen Abstände übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solche übermäßigen Abstände zwischen angrenzenden Zeichen (Kerning) und am Anfang oder Ende von Textzeilen zu korrigieren. Allgemein gesprochen:

- Wenn ein Vollbreite-Satzzeichen auf Vollbreite gesetzt wird, hat es interne Abstände auf beiden Seiten und ist so breit wie ein Ideogramm.
- Wenn ein Vollbreite-Satzzeichen auf Halbbreite gesetzt wird, hat es interne Abstände nur auf einer Seite, und seine andere Seite liegt bündig mit dem Anfang (im Falle von Öffnungssatzzeichen) oder Ende (im Falle von Schlusssatzzeichen) der Zeile. Halbbreite Zeichen sind typischerweise halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko von übermäßigem Kerning zu vermeiden, müssen Schriften entweder die OpenType-Alternate-Half-Widths (`halt`) Funktion, die Contextual-Half-width-Spacing (`chws`) Funktion oder beide Funktionen haben. Wenn die Schriftart keine dieser Funktionen hat, ist `text-spacing-trim` deaktiviert.

### Kollabieren von Vollbreite-Satzzeichen

Wenn Satzzeichenpaare aneinander angrenzen, wird der Raum dazwischen gemäß den folgenden Regeln reduziert:

- Setzen Sie ein Vollbreite-Öffnungssatzzeichen auf Halbbreite, wenn das vorherige Zeichen ein Vollbreite-Öffnungssatzzeichen, ein Vollbreite-Mittelpunktszeichen, ein ideographischer Raum (U+3000), ein Vollbreite-Schlusssatzzeichen von gleicher oder größerer Schriftgröße oder ein Zeichen der [Unicode allgemeine Kategorie "Öffnungssatzzeichen" Ps](https://www.compart.com/en/unicode/category/Ps) ist. Andernfalls setzen Sie es auf Vollbreite.
- Setzen Sie ein Vollbreite-Schlusssatzzeichen auf Halbbreite, wenn das nächste Zeichen ein Vollbreite-Schlusssatzzeichen, ein Vollbreite-Mittelpunktszeichen, ein ideographischer Raum (U+3000), ein Vollbreite-Öffnungssatzzeichen mit größerer Schriftgröße, oder ein Zeichen der [Unicode allgemeine Kategorie "Schlusssatzzeichen" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Andernfalls setzen Sie es auf Vollbreite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von `text-spacing-trim`-Werten

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen `text-spacing-trim`-Eigenschaften, indem sie auf vier identische Absätze angewendet werden, damit Sie die visuellen Unterschiede zwischen ihnen sehen können.

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
  font-family: "Yu Gothic", "YuGothic", "Noto Sans JP", "Hiragino Sans",
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

- [`ic`](/de/docs/Web/CSS/CSS_Values_and_Units#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_Values_and_Units#root_font-relative_lengths) Einheiten
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
