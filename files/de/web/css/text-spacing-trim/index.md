---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: d92ee717f209ccad5d5a5705d64548e1d289f5d9
---

{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert den internen Abstand bei chinesischen/japanischen/koreanischen (CJK) Satzzeichen zwischen angrenzenden Zeichen (Kerning) sowie am Anfang oder Ende von Textzeilen.

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
  - : Definiert die verschiedenen Abstandsoptionen. Verfügbare Werte sind:
    - `normal`
      - : Setzt CJK Satzzeichen in voller Breite am Anfang jeder Zeile. Setzt CJK schließende Satzzeichen in voller Breite am Ende jeder Zeile oder halbbreit, wenn sie vor der Ausrichtung nicht in die Zeile passen. [Reduziert den Abstand](#reduktion_von_satzzeichen_in_voller_breite) zwischen Satzzeichen.
    - `space-all`
      - : Alle CJK Satzzeichen in voller Breite werden in voller Breite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK öffnende Satzzeichen in voller Breite am Anfang der ersten Zeile des Textblocks und am Anfang jeder darauffolgenden Zeile nach einem expliziten Zeilenumbruch in voller Breite gesetzt sind.
    - `trim-start`
      - : Verhält sich wie `normal`, außer dass CJK öffnende Satzzeichen in halbbreiter Form am Anfang jeder Zeile gesetzt sind.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim` Eigenschaft wendet einen Abstand/Kerning für CJK Satzzeichen an, um eine optisch ansprechende Typografie gemäß den [Anforderungen für japanisches Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für chinesisches Textlayout](https://www.w3.org/International/clreq/) (CLREQ) zu erzeugen.

Viele CJK Satzzeichen enthalten einen internen Abstand im Glyphen. Beispielsweise verfügen das CJK-Punktzeichen und die CJK-Klammer in der Regel über einen internen Abstand auf ihrer rechten Seite, um eine konstante {{Glossary("Advance_measure", "advance measure")}} im Einklang mit anderen ideografischen Zeichen zu gewährleisten. Wenn sie jedoch in einer Reihe erscheinen, kann der interne Abstand übermäßig groß werden.

`text-spacing-trim` kann verwendet werden, um einen solchen übermäßigen Abstand zwischen angrenzenden Zeichen (Kerning) und am Anfang oder Ende von Textzeilen anzupassen. Allgemein gilt:

- Wenn ein Satzzeichen in voller Breite auf volle Breite gesetzt wird, hat es internen Abstand auf beiden Seiten und entspricht der vollen Breite eines Ideogramms.
- Wenn ein Satzzeichen in voller Breite auf halbe Breite gesetzt wird, hat es internen Abstand nur auf einer Seite, und seine andere Seite ist bündig mit dem Anfang (bei öffnenden Satzzeichen) oder dem Ende (bei schließenden Satzzeichen). Satzzeichen in halber Breite sind in der Regel halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko eines übermäßigen Kernings zu vermeiden, müssen Schriftarten das OpenType-Feature Alternative Halbe Breiten (`halt`) oder das kontextuelle Halbbreitenabstands-Feature (`chws`) oder beides haben. Wenn die Schriftart keines dieser Features hat, ist `text-spacing-trim` deaktiviert.

### Reduktion von Satzzeichen in voller Breite

Wenn Paare von Satzzeichen nebeneinander stehen, wird der Abstand zwischen ihnen gemäß den folgenden Regeln reduziert:

- Setze ein öffnendes Satzzeichen in voller Breite auf halbe Breite, wenn das vorhergehende Zeichen ein öffnendes Satzzeichen in voller Breite, ein Mittelpunktszeichen in voller Breite, ein ideografischer Abstand (U+3000), ein schließendes Satzzeichen in voller Breite der gleichen oder größeren Schriftgröße oder ein [Unicode-Zeichen der allgemeinen Kategorie "Öffnendes Satzzeichen" Ps](https://www.compart.com/en/unicode/category/Ps) ist. Andernfalls setze es auf volle Breite.
- Setze ein schließendes Satzzeichen in voller Breite auf halbe Breite, wenn das nächste Zeichen ein schließendes Satzzeichen in voller Breite, ein Mittelpunktszeichen in voller Breite, ein ideografischer Abstand (U+3000), ein öffnendes Satzzeichen in voller Breite mit größerer Schriftgröße oder ein [Unicode-Zeichen der allgemeinen Kategorie "Schließendes Satzzeichen" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Andernfalls setze es auf volle Breite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der `text-spacing-trim` Werte

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen `text-spacing-trim` Eigenschaften, indem sie auf vier identische Absätze angewendet werden, sodass Sie die visuellen Unterschiede zwischen ihnen sehen können.

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
- [`ic`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) Einheiten
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
