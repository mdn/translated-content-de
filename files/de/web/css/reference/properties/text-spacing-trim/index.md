---
title: "`text-spacing-trim` CSS property"
short-title: text-spacing-trim
slug: Web/CSS/Reference/Properties/text-spacing-trim
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert den internen Abstand, der bei chinesischen/japanischen/koreanischen (CJK) Interpunktionszeichen zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen gesetzt wird.

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
  - : Definiert die verschiedenen Optionen zur Abstandsreduktion. Verfügbare Werte sind:
    - `normal`
      - : Setzt CJK-Vollbreite-Eröffnungspunkte auf Vollbreite am Anfang jeder Zeile. Setzt CJK-Vollbreite-Schlusspunkte auf Vollbreite am Ende jeder Zeile oder auf halbe Breite, wenn sie nicht in die Zeile vor der Anpassung passen. [Reduziert den Abstand](#reduzierung_von_vollbreite-interpunktion) zwischen Interpunktionszeichen.
    - `space-all`
      - : Alle CJK-Vollbreite-Interpunktionszeichen werden auf Vollbreite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Eröffnungspunkte auf Vollbreite am Anfang der ersten Zeile des Textblocks und am Anfang jeder weiteren Zeile nach einem expliziten Zeilenumbruch wie einem Zeilenendzeichen gesetzt werden.
    - `trim-start`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Eröffnungspunkte auf halbe Breite am Anfang jeder Zeile gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/Guides/Text) Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim` Eigenschaft wendet Abstand/Kerning auf CJK-Interpunktionszeichen an, um optisch ansprechende Typografie zu erzeugen, wie sie in den [Anforderungen für das Layout japanischer Texte](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für das Layout chinesischer Texte](https://www.w3.org/International/clreq/) (CLREQ) definiert sind.

Viele CJK-Interpunktionszeichen enthalten interne Abstände im Glyphen. Beispielsweise haben der CJK-Punkt und die CJK-Schließungsklammer normalerweise interne Abstände auf ihrer rechten Seite, um ein konsistentes {{Glossary("Advance_measure", "Vorrücken")}} mit anderen ideografischen Zeichen zu gewährleisten. Wenn sie jedoch in einer Reihe erscheinen, kann der interne Abstand übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solche übermäßigen Abstände zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen anzupassen. Im Allgemeinen gilt:

- Wenn ein Vollbreite-Interpunktionszeichen auf Vollbreite gesetzt wird, hat es interne Abstände auf beiden Seiten und ist in der vollen Breite eines Ideogramms.
- Wenn ein Vollbreite-Interpunktionszeichen auf halbe Breite gesetzt wird, hat es interne Abstände nur auf einer Seite, und seine andere Seite ist bündig zu Beginn (bei Eröffnungspunkten) oder Ende (bei Schlusspunkten). Halbbildbreite-Zeichen sind typischerweise halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko von übermäßigem Kerning zu vermeiden, müssen Schriftarten das OpenType-Feature Alternative Halbbildbreiten (`halt`), das kontextuelle Halbbildabstands-Feature (`chws`) oder beide haben. Wenn die Schriftart keines der Features hat, ist `text-spacing-trim` deaktiviert.

### Reduzierung von Vollbreite-Interpunktion

Wenn Paare von Interpunktionszeichen nebeneinander stehen, wird der Abstand zwischen ihnen nach den folgenden Regeln reduziert:

- Setzen Sie ein Vollbreite-Eröffnungszeichen auf halbe Breite, wenn das vorherige Zeichen ein Vollbreite-Eröffnungszeichen, ein Vollbreite-Mittelpunkte, ein ideografischer Raum (U+3000), ein Vollbreite-Schlusspunkt mit gleicher oder größerer Schriftgröße oder ein Zeichen, das zur [Unicode-allgemeinen Kategorie "Eröffnende Interpunktion" Ps](https://www.compart.com/en/unicode/category/Ps) gehört, ist. Andernfalls setzen Sie es auf Vollbreite.
- Setzen Sie ein Vollbreite-Schlusszeichen auf halbe Breite, wenn das nächste Zeichen ein Vollbreite-Schlusszeichen, ein Vollbreite-Mittelpunkte, ein ideografischer Raum (U+3000), ein Vollbreite-Eröffnungszeichen mit größerer Schriftgröße oder ein Zeichen, das zur [Unicode-allgemeinen Kategorie "Schließende Interpunktion" (Pe)](https://www.compart.com/en/unicode/category/Pe) gehört, ist. Andernfalls setzen Sie es auf Vollbreite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der `text-spacing-trim` Werte

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen `text-spacing-trim` Eigenschaften, indem sie auf vier identische Absätze angewendet werden, sodass Sie die visuellen Unterschiede zwischen jedem sehen können.

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
- [CSS Text](/de/docs/Web/CSS/Guides/Text) Modul
