---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft kontrolliert den internen Abstand, der bei chinesischen/japanischen/koreanischen (CJK) Interpunktionszeichen zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen gesetzt ist.

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
  - : Definiert die verschiedenen Optionen für das Verkürzen der Abstände. Verfügbare Werte sind:
    - `normal`
      - : Setzt CJK-Weitzeichen-Einleitungspunkte auf die volle Breite am Anfang jeder Zeile. Setzt CJK-Weitzeichen-Schlusspunkte auf die volle Breite am Ende jeder Zeile oder auf halbe Breite, wenn sie nicht in die Zeile passen, bevor der Text ausgeglichen wird. [Reduziert Abstände](#full-width_interpunktionskollaps) zwischen Interpunktionszeichen.
    - `space-all`
      - : Alle CJK-Weitzeichen-Interpunktionszeichen werden auf volle Breite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Weitzeichen-Einleitungspunkte auf volle Breite am Anfang des ersten Absatzes des Textblocks gesetzt werden und am Anfang jeder nachfolgenden Zeile, die nach einem expliziten Zeilenumbruch erscheint, wie etwa einem Zeilenumbruchzeichen.
    - `trim-start`
      - : Verhält sich wie `normal`, außer dass CJK-Weitzeichen-Einleitungspunkte am Anfang jeder Zeile auf halbe Breite gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die Eigenschaft `text-spacing-trim` wendet Abstände/Kerning auf CJK-Interpunktionszeichen an, um visuell ansprechende Typografie gemäß den [Anforderungen für japanische Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für chinesische Textlayout](https://www.w3.org/International/clreq/) (CLREQ) zu erzeugen.

Viele CJK-Interpunktionszeichen enthalten schriftinterne Abstände. Beispielsweise haben der CJK-Punkt und die CJK-schließende Klammer normalerweise schriftinterne Abstände auf ihrer rechten Seite, um ihnen ein konstantes {{Glossary("Advance_measure", "Vorschubmaß")}} entsprechend den anderen ideografischen Zeichen zu geben. Wenn sie jedoch in einer Reihe auftreten, kann der schriftinterne Abstand zu groß werden.

`text-spacing-trim` kann verwendet werden, um diese übermäßigen Abstände zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen anzupassen. Allgemein gilt:

- Wenn ein weitbildendes Interpunktionszeichen auf volle Breite gesetzt wird, hat es interne Abstände auf beiden Seiten und ist von der vollen Breite eines Ideografen.
- Wenn ein weitbildendes Interpunktionszeichen auf halbe Breite gesetzt wird, hat es interne Abstände nur auf einer Seite, und die andere Seite ist bündig mit dem Anfang (im Fall von Einleitungszeichen) oder dem Ende (im Fall von Schlusspunkten) des Textes. Zeichen mit halber Breite sind typischerweise halb so breit wie ein Ideograf.

> [!NOTE]
> Um das Risiko übermäßigen Kernings zu vermeiden, müssen Schriftarten über die OpenType-Features Alternative Halbbreiten (`halt`), Kontextuelle Halbbreitenabstände (`chws`) oder beide verfügen. Falls die Schriftart keines der Features besitzt, wird `text-spacing-trim` deaktiviert.

### Full-width Interpunktionskollaps

Wenn Paare von Interpunktionszeichen nebeneinander stehen, werden die Abstände zwischen ihnen gemäß der folgenden Regeln reduziert:

- Setzen Sie ein weitbildiges Einleitungszeichen auf halbe Breite, wenn das vorhergehende Zeichen ein weitbildiges Einleitungszeichen, ein weitbildiger Mittelpunkt, ein ideografisches Leerzeichen (U+3000), ein weitbildiges Schlusspunktäquivalent oder ein Zeichen aus der [Unicode Generalkategorie "Open punctuation" Ps](https://www.compart.com/en/unicode/category/Ps) ist. Andernfalls setzen Sie es auf volle Breite.
- Setzen Sie ein weitbildiges Schlusspunktzeichen auf halbe Breite, wenn das nächste Zeichen ein weitbildiges Schlusspunktzeichen, ein weitbildiger Mittelpunkt, ein ideografisches Leerzeichen (U+3000), ein weitbildiges Einleitungszeichen mit größerem Schriftgrad oder ein Zeichen aus der [Unicode Generalkategorie "Close punctuation" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Andernfalls setzen Sie es auf volle Breite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der `text-spacing-trim` Werte

Dieses Beispiel vergleicht die Auswirkung von vier verschiedenen `text-spacing-trim` Eigenschaften, indem sie auf vier identische Absätze angewendet werden, sodass Sie die visuellen Unterschiede zwischen ihnen sehen können.

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
- [`ic`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#root_font-relative_lengths) Einheiten
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
