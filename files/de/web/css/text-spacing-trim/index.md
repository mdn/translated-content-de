---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) -Eigenschaft steuert den inneren Abstand, der bei chinesischen/japanischen/koreanischen (CJK) Interpunktionszeichen zwischen angrenzenden Zeichen (Kerning) und am Anfang oder Ende von Textzeilen festgelegt wird.

## Syntax

```css
/* Keyword-Werte */
text-spacing-trim: normal;
text-spacing-trim: space-all;
text-spacing-trim: space-first;
text-spacing-trim: trim-start;

/* Globale Werte */
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
      - : Setzt CJK-Vollbreiten-Eröffnungszeichen so, dass sie zu Beginn jeder Zeile in voller Breite sind. Setzt CJK-Vollbreiten-Schlusszeichen so, dass sie am Ende jeder Zeile in voller Breite sind oder halbe Breite haben, wenn sie nicht vor der Ausrichtung auf die Zeile passen. [Reduziert den Abstand](#vollbreiten-satzzeichen-zusammenfallen) zwischen Satzzeichen.
    - `space-all`
      - : Alle CJK-Vollbreiten-Satzzeichen sind auf volle Breite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreiten-Eröffnungszeichen zu Beginn der ersten Zeile des Textblocks in voller Breite gesetzt werden und zu Beginn jeder nachfolgenden Zeile, die nach einem expliziten Zeilenumbruch wie einem Zeilenumbruchzeichen folgt.
    - `trim-start`

      - : Verhält sich wie `normal`, außer dass CJK-Vollbreiten-Eröffnungszeichen zu Beginn jeder Zeile auf halbe Breite gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text)-Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim`-Eigenschaft wendet Abstände/Kerning auf CJK-Interpunktionszeichen an, um eine visuell ansprechende Typografie zu erzeugen, wie sie in den [Anforderungen für japanische Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für chinesische Textlayout](https://www.w3.org/International/clreq/) (CLREQ) definiert ist.

Viele CJK-Interpunktionszeichen enthalten glypheninterne Abstände. Zum Beispiel haben der CJK-Punkt und die CJK-Schlussklammer in der Regel auf ihrer rechten Seite einen glypheninternen Abstand, um ihnen ein konstantes [Vorausmaß](/de/docs/Glossary/Advance_measure) zu geben, das mit anderen ideographischen Zeichen konsistent ist. Wenn sie jedoch in Reihe erscheinen, kann der glypheninterne Abstand übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solchen übermäßigen Abstand zwischen angrenzenden Zeichen (Kerning) und am Anfang oder Ende von Textzeilen anzupassen. Allgemein gesagt:

- Wenn ein Vollbreiten-Satzzeichen auf Vollbreite eingestellt ist, hat es interne Abstände auf beiden Seiten und entspricht der vollen Breite eines Ideogramms.
- Wenn ein Vollbreiten-Satzzeichen auf halbe Breite eingestellt ist, hat es interne Abstände nur auf einer Seite, und seine andere Seite liegt bündig zum Anfang (bei Eröffnungszeichen) oder Ende (bei Schlusszeichen). Halbbreite Zeichen sind in der Regel halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko übermäßigen Kernings zu vermeiden, müssen Schriftarten über die OpenType-Features "Alternate Half Widths" (`halt`) oder "Contextual Half-width Spacing" (`chws`) verfügen oder beides. Falls die Schriftart keines der beiden Features hat, wird `text-spacing-trim` deaktiviert.

### Vollbreiten-Satzzeichen-Zusammenfallen

Wenn Satzzeichenpaare nebeneinander stehen, wird der Raum zwischen ihnen nach den folgenden Regeln reduziert:

- Setzen Sie ein Vollbreiten-Eröffnungszeichen auf halbe Breite, wenn das vorherige Zeichen ein Vollbreiten-Eröffnungszeichen, ein Vollbreiten-Mitteltopf, ein ideografischer Raum (U+3000), ein Vollbreiten-Schlusszeichen einer gleichen oder größeren Schriftgröße oder ein Zeichen der [Unicode-Kategorie "Öffnende Satzzeichen" Ps](https://www.compart.com/en/unicode/category/Ps) ist. Andernfalls setzen Sie es auf volle Breite.
- Setzen Sie ein Vollbreiten-Schlusszeichen auf halbe Breite, wenn das nächste Zeichen ein Vollbreiten-Schlusszeichen, ein Vollbreiten-Mitteltopf, ein ideografischer Raum (U+3000), ein Vollbreiten-Eröffnungszeichen mit größerer Schriftgröße oder ein Zeichen der [Unicode-Kategorie "Schließende Satzzeichen" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Andernfalls setzen Sie es auf volle Breite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der `text-spacing-trim`-Werte

In diesem Beispiel wird der Effekt von vier unterschiedlichen `text-spacing-trim`-Eigenschaften verglichen, indem sie auf vier identische Absätze angewendet werden, damit Sie die visuellen Unterschiede zwischen ihnen sehen können.

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
