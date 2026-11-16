---
title: "`text-spacing-trim` CSS property"
short-title: text-spacing-trim
slug: Web/CSS/Reference/Properties/text-spacing-trim
l10n:
  sourceCommit: e976b4bf6b9e0c68b4321904560df47804d8cc48
---

{{seecompattable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-spacing-trim`** steuert die interne Abstandsgebung chinesischer, japanischer und koreanischer (CJK) Satzzeichen zwischen benachbarten Zeichen (Kerning) sowie am Anfang und Ende von Textzeilen.

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
  - : Legt fest, wie die Abstände angepasst werden. Folgende Werte sind verfügbar:
    - `normal`
      - : CJK-Satzzeichen in voller Breite, die einen Ausdruck eröffnen, behalten am Anfang jeder Zeile ihre volle Breite. Schließende CJK-Satzzeichen in voller Breite behalten am Ende jeder Zeile ihre volle Breite oder werden auf halbe Breite gesetzt, wenn sie vor dem Blocksatz nicht mehr in die Zeile passen. [Abstände zwischen Satzzeichen werden zusammengezogen](#zusammenziehen_von_abständen_zwischen_satzzeichen_in_voller_breite).
    - `space-all`
      - : Alle CJK-Satzzeichen in voller Breite behalten ihre volle Breite.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass eröffnende CJK-Satzzeichen in voller Breite am Anfang der ersten Zeile des Blockcontainers und am Anfang jeder weiteren Zeile nach einem expliziten Zeilenumbruch, etwa einem Zeilenumbruchzeichen, ihre volle Breite behalten.
    - `trim-start`
      - : Verhält sich wie `normal`, außer dass eröffnende CJK-Satzzeichen in voller Breite am Anfang jeder Zeile auf halbe Breite gesetzt werden.

    > [!NOTE]
    > Das Modul [CSS Text](/de/docs/Web/CSS/Guides/Text) definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind derzeit jedoch in keinem Browser implementiert.

## Beschreibung

Die Eigenschaft `text-spacing-trim` passt die Abstände und das Kerning von CJK-Satzzeichen an, um ein optisch ansprechendes Schriftbild gemäß den [Anforderungen an den japanischen Textsatz](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen an den chinesischen Textsatz](https://www.w3.org/International/clreq/) (CLREQ) zu erzeugen.

Viele CJK-Satzzeichen enthalten glypheninterne Abstände. Beispielsweise haben der CJK-Punkt und die schließende CJK-Klammer üblicherweise rechts einen glypheninternen Abstand. Dadurch erhalten sie eine konstante {{Glossary("Advance_measure", "Vorschubbreite")}}, die mit der anderer ideografischer Zeichen übereinstimmt. Wenn solche Zeichen jedoch aufeinanderfolgen, kann der glypheninterne Abstand zu groß werden.

Mit `text-spacing-trim` lassen sich solche übermäßigen Abstände zwischen benachbarten Zeichen (Kerning) sowie am Anfang und Ende von Textzeilen anpassen. Grundsätzlich gilt:

- Wird ein Satzzeichen in voller Breite dargestellt, hat es auf beiden Seiten einen internen Abstand und ist so breit wie ein Ideogramm.
- Wird ein Satzzeichen mit halber Breite dargestellt, hat es nur auf einer Seite einen internen Abstand. Seine andere Seite schließt bündig mit dem Zeilenanfang (bei eröffnenden Satzzeichen) beziehungsweise dem Zeilenende (bei schließenden Satzzeichen) ab. Zeichen mit halber Breite sind üblicherweise halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko übermäßigen Kernings zu vermeiden, müssen Schriftarten die OpenType-Funktion Alternate Half Widths (`halt`), die Funktion Contextual Half-width Spacing (`chws`) oder beide unterstützen. Unterstützt die Schriftart keine der beiden Funktionen, wird `text-spacing-trim` deaktiviert.

### Zusammenziehen von Abständen zwischen Satzzeichen in voller Breite

Wenn zwei Satzzeichen direkt aufeinanderfolgen, wird der Abstand zwischen ihnen nach folgenden Regeln zusammengezogen:

- Ein eröffnendes Satzzeichen in voller Breite wird auf halbe Breite gesetzt, wenn das vorherige Zeichen ein eröffnendes Satzzeichen in voller Breite, ein Mittelpunkt in voller Breite, ein ideografisches Leerzeichen (U+3000), ein schließendes Satzzeichen in voller Breite mit gleicher oder größerer Schriftgröße oder ein Zeichen der [allgemeinen Unicode-Kategorie „Open punctuation“ (Ps)](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3APs%3A%5D) ist. Andernfalls behält es seine volle Breite.
- Ein schließendes Satzzeichen in voller Breite wird auf halbe Breite gesetzt, wenn das nächste Zeichen ein schließendes Satzzeichen in voller Breite, ein Mittelpunkt in voller Breite, ein ideografisches Leerzeichen (U+3000), ein eröffnendes Satzzeichen in voller Breite mit größerer Schriftgröße oder ein Zeichen der [allgemeinen Unicode-Kategorie „Close punctuation“ (Pe)](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3APe%3A%5D) ist. Andernfalls behält es seine volle Breite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der Werte von `text-spacing-trim`

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen Werten für `text-spacing-trim`. Sie werden auf vier identische Absätze angewendet, damit Sie die visuellen Unterschiede erkennen können.

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
- Die Einheiten [`ic`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths)
- Das Modul [CSS Text](/de/docs/Web/CSS/Guides/Text)
