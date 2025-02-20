---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}{{seecompattable}}

Die **`text-spacing-trim`**-[CSS](/de/docs/Web/CSS)-Eigenschaft steuert den inneren Abstand, der auf chinesische/japanische/koreanische (CJK) Interpunktionszeichen zwischen angrenzenden Zeichen (Kerning) sowie am Anfang oder Ende von Textzeilen angewendet wird.

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

  - : Definiert die verschiedenen Optionen für den Abstandsschnitt. Verfügbare Werte sind:

    - `normal`
      - : Setzt CJK volle Breite öffnende Interpunktionszeichen am Anfang jeder Zeile auf volle Breite. Setzt CJK volle Breite schließende Interpunktionszeichen am Ende jeder Zeile auf volle Breite oder halbbreit, wenn sie nicht in die Zeile vor der Justierung passen. [Reduziert Abstände](#kollapsen_von_interpunktionszeichen_in_voller_breite) zwischen Interpunktionszeichen.
    - `space-all`
      - : Alle CJK Interpunktionszeichen in voller Breite werden auf volle Breite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK volle Breite öffnende Interpunktionszeichen am Anfang der ersten Zeile des Textblocks sowie am Anfang jeder nach einem expliziten Zeilenumbruch wie einem Newline-Zeichen folgenden Zeile auf volle Breite gesetzt werden.
    - `trim-start`

      - : Verhält sich wie `normal`, außer dass CJK volle Breite öffnende Interpunktionszeichen am Anfang jeder Zeile auf halbbreit gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text)-Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim`-Eigenschaft wendet Abstand/Kerning auf CJK Interpunktionszeichen an, um eine visuell ansprechende Typografie zu erzeugen, wie sie in den [Anforderungen für das Layout japanischer Texte](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für das Layout chinesischer Texte](https://www.w3.org/International/clreq/) (CLREQ) definiert sind.

Viele CJK Interpunktionszeichen enthalten Platzierungen innerhalb des Glyphs. Zum Beispiel haben der CJK Punkt und die CJK schließende Klammer normalerweise Platzierungen innerhalb des Glyphs an ihrer rechten Seite, um ihnen eine konstante {{Glossary("Advance_measure", "Vorausmessung")}} zu geben, die mit anderen ideographischen Zeichen konsistent ist. Wenn sie jedoch in einer Reihe auftreten, kann die Platzierung innerhalb des Glyphs übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solche übermäßigen Abstände zwischen angrenzenden Zeichen (Kerning) sowie am Anfang oder Ende von Textzeilen anzupassen. Allgemein gesprochen:

- Wenn ein Interpunktionszeichen mit voller Breite auf volle Breite eingestellt ist, hat es interne Abstände auf beiden Seiten und ist in der vollen Breite eines Ideographen.
- Wenn ein Interpunktionszeichen mit voller Breite auf halbbreit eingestellt ist, hat es interne Abstände nur auf einer Seite, und die andere Seite ist bündig mit dem Anfang (bei öffnenden Interpunktionszeichen) oder dem Ende (bei schließenden Interpunktionszeichen). Halbbreite Zeichen sind in der Regel die halbe Breite eines Ideographen.

> [!NOTE]
> Um das Risiko übermäßigen Kernings zu vermeiden, müssen Schriften das OpenType-Feature Alternierende Halbbreiten (`halt`), das Kontextuelle Halbbreiten-Spatial-Feature (`chws`) oder beide haben. Wenn die Schriftart keines dieser Features hat, ist `text-spacing-trim` deaktiviert.

### Kollapsen von Interpunktionszeichen in voller Breite

Wenn Paare von Interpunktionszeichen direkt nebeneinander liegen, wird der Raum zwischen ihnen nach den folgenden Regeln reduziert:

- Setzen Sie ein Interpunktionszeichen mit voller Breite am Anfang auf halbbreit, wenn das vorherige Zeichen ein Interpunktionszeichen mit voller Breite, ein Mittelpunktszeichen mit voller Breite, ein ideografisches Leerzeichen (U+3000), ein schließendes Interpunktionszeichen mit voller Breite in gleicher oder größerer Schriftgröße oder ein Zeichen, das zur [Unicode-Kategorie "Öffnende Interpunktionszeichen" Ps](https://www.compart.com/en/unicode/category/Ps) gehört, ist. Andernfalls setzen Sie es auf volle Breite.
- Setzen Sie ein Interpunktionszeichen mit voller Breite am Ende auf halbbreit, wenn das nächste Zeichen ein schließendes Interpunktionszeichen mit voller Breite, ein Mittelpunktszeichen mit voller Breite, ein ideografisches Leerzeichen (U+3000), ein öffnendes Interpunktionszeichen mit voller Breite in größerer Schriftgröße oder ein Zeichen, das zur [Unicode-Kategorie "Schließende Interpunktionszeichen" (Pe)](https://www.compart.com/en/unicode/category/Pe) gehört, ist. Andernfalls setzen Sie es auf volle Breite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von `text-spacing-trim`-Werten

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen `text-spacing-trim`-Eigenschaften, die auf vier identische Absätze angewendet werden, sodass Sie die visuellen Unterschiede zwischen jedem einzelnen sehen können.

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

- [`ic`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) Einheiten
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
