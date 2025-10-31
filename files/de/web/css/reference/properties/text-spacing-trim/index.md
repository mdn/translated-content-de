---
title: text-spacing-trim
slug: Web/CSS/Reference/Properties/text-spacing-trim
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft kontrolliert den internen Abstand, der auf chinesische/japanische/koreanische (CJK) Interpunktionszeichen zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen angewendet wird.

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
  - : Definiert die verschiedenen Optionen für das Trimmen von Abständen. Verfügbare Werte sind:
    - `normal`
      - : Setzt CJK-Vollbreite-Anfangszeichen so, dass sie am Anfang jeder Zeile vollbreit sind. Setzt CJK-Vollbreite-Abschlusszeichen so, dass sie am Ende jeder Zeile vollbreit sind oder halbbreit, wenn sie vor der Rechtfertigung nicht in die Zeile passen. [Kollabiert die Abstände](#vollbreite_interpunktion_kollabieren) zwischen Interpunktionszeichen.
    - `space-all`
      - : Alle CJK-Vollbreite-Interpunktionszeichen werden auf vollbreit gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Anfangszeichen am Anfang der ersten Zeile des Textblocks und am Anfang jeder nachfolgenden Zeile nach einem expliziten Zeilenumbruch, wie einem Zeilenumbruchzeichen, vollbreit gesetzt werden.
    - `trim-start`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Anfangszeichen am Anfang jeder Zeile halbbreit gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim` Eigenschaft wendet Abstände/Kerning auf CJK-Interpunktionszeichen an, um eine optisch ansprechende Typografie zu erzeugen, wie sie in den [Anforderungen für japanisches Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für chinesisches Textlayout](https://www.w3.org/International/clreq/) (CLREQ) definiert sind.

Viele CJK-Interpunktionszeichen enthalten glyph-internalen Abstand. Zum Beispiel haben der CJK-Vollstopp und die CJK-Schließklammer normalerweise glyph-internalen Abstand auf ihrer rechten Seite, um ihnen ein konstantes {{Glossary("Advance_measure", "Vorrückenmaß")}} zu geben, das mit anderen ideografischen Zeichen konsistent ist. Wenn sie jedoch in einer Reihe erscheinen, kann der glyph-interne Abstand übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solchen übermäßigen Abstand zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen anzupassen. Allgemein gesagt:

- Wenn ein vollbreites Interpunktionszeichen auf vollbreit gesetzt ist, hat es einen internen Abstand auf beiden Seiten und ist die volle Breite eines Ideogramms.
- Wenn ein vollbreites Interpunktionszeichen auf halbbreit gesetzt ist, hat es einen internen Abstand nur auf einer Seite, und seine andere Seite ist bündig mit dem Anfang (bei öffnenden Interpunktionszeichen) oder dem Ende (bei schließenden Interpunktionszeichen). Halbbreite Zeichen sind typischerweise halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko von übermäßigem Kerning zu vermeiden, müssen Schriften die OpenType Alternate Half Widths (`halt`) Funktion, die Contextual Half-width Spacing (`chws`) Funktion oder beide haben. Wenn die Schriftart keine dieser Funktionen hat, ist `text-spacing-trim` deaktiviert.

### Vollbreite Interpunktion kollabieren

Wenn Paare von Interpunktionszeichen nebeneinander stehen, wird der Raum zwischen ihnen gemäß den folgenden Regeln reduziert:

- Setzen Sie ein vollbreites öffnendes Interpunktionszeichen auf halbbreit, wenn das vorherige Zeichen ein vollbreites öffnendes Interpunktionszeichen, ein vollbreiter Mittelpunkt, ein ideografischer Raum (U+3000), ein vollbreites schließendes Interpunktionszeichen einer gleichwertigen oder größeren Schriftgröße oder ein Zeichen der [Unicode-Allgemeinkategorie "Open punctuation" Ps](https://www.compart.com/en/unicode/category/Ps) ist. Andernfalls setzen Sie es auf vollbreit.
- Setzen Sie ein vollbreites schließendes Interpunktionszeichen auf halbbreit, wenn das nächste Zeichen ein vollbreites schließendes Interpunktionszeichen, ein vollbreiter Mittelpunkt, ein ideografischer Raum (U+3000), ein vollbreites öffnendes Interpunktionszeichen einer größeren Schriftgröße oder ein Zeichen der [Unicode-Allgemeinkategorie "Close punctuation" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Andernfalls setzen Sie es auf vollbreit.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von `text-spacing-trim` Werten

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen `text-spacing-trim` Eigenschaften, indem sie auf vier identische Absätze angewendet werden, damit Sie die visuellen Unterschiede zwischen jedem sehen können.

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

{{EmbedLiveSample("`text-spacing-trim` value comparison", "100%", 320)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("text-autospace")}}
- [`ic`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#root_font-relative_lengths) Einheiten
- [CSS text](/de/docs/Web/CSS/CSS_text) Modul
