---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{CSSRef}}{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert den internen Abstand, der auf chinesische/japanische/koreanische (CJK) Interpunktionszeichen zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen gesetzt wird.

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

  - : Definiert die verschiedenen Option zum Kürzen des Abstands. Verfügbare Werte sind:

    - `normal`
      - : Setzt CJK-Interpunktionszeichen mit voller Breite am Anfang jeder Zeile. Setzt CJK-Interpunktionszeichen mit voller Breite am Ende jeder Zeile oder mit halber Breite, wenn sie nicht in die Zeile vor dem Blocksatz passen. [Reduziert Abstände](#vollbreiteninterpunktion-kollaps) zwischen Interpunktionszeichen.
    - `space-all`
      - : Alle CJK-Interpunktionszeichen mit voller Breite werden auf volle Breite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Einleitungszeichen mit voller Breite am Anfang der ersten Zeile des Textblocks und am Anfang jeder nachfolgenden Zeile, die nach einem expliziten Zeilenumbruch wie einem Zeilenumbruchzeichen folgt, auf volle Breite gesetzt werden.
    - `trim-start`

      - : Verhält sich wie `normal`, außer dass CJK-Einleitungszeichen mit voller Breite am Anfang jeder Zeile auf halbe Breite gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text)-Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim`-Eigenschaft wendet Abstand/Kerning auf CJK Interpunktionszeichen an, um eine optisch ansprechende Typografie zu erzeugen, wie sie in den [Anforderungen an japanisches Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen an chinesisches Textlayout](https://www.w3.org/International/clreq/) (CLREQ) definiert ist.

Viele CJK-Interpunktionszeichen enthalten glypheninternen Abstand. Zum Beispiel haben der CJK-Punkt und die CJK-Schließklammer normalerweise glypheninternen Abstand auf ihrer rechten Seite, um ein konstantes {{Glossary("Advance_measure", "Vorrücken")}} im Einklang mit anderen ideografischen Zeichen zu gewährleisten. Wenn sie jedoch in Folge erscheinen, kann der glypheninterne Abstand zu übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solchen übermäßigen Abstand zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen anzupassen. Allgemein gesagt:

- Wenn ein Interpunktionszeichen mit voller Breite auf volle Breite gesetzt wird, hat es internen Abstand auf beiden Seiten und ist die volle Breite eines Ideogramms.
- Wenn ein Interpunktionszeichen mit voller Breite auf halbe Breite gesetzt wird, hat es internen Abstand nur auf einer Seite, und seine andere Seite ist am Anfang (bei einleitenden Interpunktionszeichen) oder Ende (bei schließenden Interpunktionszeichen) bündig. Zeichen mit halber Breite sind typischerweise halbe Breite eines Ideogramms.

> [!NOTE]
> Um das Risiko übermäßigen Kernings zu vermeiden, müssen Schriftarten das OpenType-Feature "Alternate Half Widths" (`halt`), das Feature "Contextual Half-width Spacing" (`chws`) oder beide haben. Wenn die Schriftart keines dieser Features hat, ist `text-spacing-trim` deaktiviert.

### Vollbreiteninterpunktion-Kollaps

Wenn Paare von Interpunktionszeichen nebeneinander stehen, wird der Abstand zwischen ihnen gemäß den folgenden Regeln reduziert:

- Ein einleitendes Interpunktionszeichen mit voller Breite wird auf halbe Breite gesetzt, wenn das vorherige Zeichen ein einleitendes Interpunktionszeichen mit voller Breite, ein mittlerer Punkt mit voller Breite, ein ideografischer Raum (U+3000), ein schließendes Interpunktionszeichen mit voller Breite in gleicher oder größerer Schriftgröße oder ein Zeichen der [Unicode-Allgemeinkategorie "Öffnende Interpunktion" (Ps)](https://www.compart.com/en/unicode/category/Ps) ist. Andernfalls wird es auf volle Breite gesetzt.
- Ein schließendes Interpunktionszeichen mit voller Breite wird auf halbe Breite gesetzt, wenn das nächste Zeichen ein schließendes Interpunktionszeichen mit voller Breite, ein mittlerer Punkt mit voller Breite, ein ideografischer Raum (U+3000), ein einleitendes Interpunktionszeichen mit voller Breite in größerer Schriftgröße oder ein Zeichen der [Unicode-Allgemeinkategorie "Schließende Interpunktion" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Andernfalls wird es auf volle Breite gesetzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von `text-spacing-trim`-Werten

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen `text-spacing-trim`-Eigenschaften, indem sie auf vier identische Absätze angewendet werden, sodass Sie die visuellen Unterschiede zwischen jedem von ihnen sehen können.

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
