---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert den internen Abstand, der bei chinesischen/japanischen/koreanischen (CJK) Interpunktionszeichen zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen eingestellt wird.

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
      - : Setzt CJK Vollbreite-Eröffnungsinterpunktionszeichen auf Vollbreite am Anfang jeder Zeile. Setzt CJK Vollbreite-Schlussinterpunktionszeichen auf Vollbreite am Ende jeder Zeile oder auf Halbbreite, wenn sie vor der Ausrichtung nicht in die Zeile passen. [Kollabiert den Abstand](#vollbreite-interpunktionskollaps) zwischen Interpunktionszeichen.
    - `space-all`
      - : Alle CJK Vollbreite-Interpunktionszeichen werden auf Vollbreite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK Vollbreite-Eröffnungsinterpunktionszeichen am Anfang der ersten Zeile des Textblockcontainers und am Anfang jeder folgenden Zeile nach einem expliziten Zeilenumbruch wie einem Zeilenumbruchzeichen auf Vollbreite gesetzt werden.
    - `trim-start`
      - : Verhält sich wie `normal`, außer dass CJK Vollbreite-Eröffnungsinterpunktionszeichen am Anfang jeder Zeile auf Halbbreite gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die Eigenschaft `text-spacing-trim` wendet Abstände/Kerning auf CJK-Interpunktionszeichen an, um eine optisch ansprechende Typografie zu erzeugen, wie sie in den [Anforderungen für das japanische Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für das chinesische Textlayout](https://www.w3.org/International/clreq/) (CLREQ) definiert sind.

Viele CJK-Interpunktionszeichen enthalten glypheninternen Abstand. Zum Beispiel haben der CJK-Punkt und die CJK-Schließklammer normalerweise auf der rechten Seite einen glypheninternen Abstand, um ihnen ein konstantes {{Glossary("Advance_measure", "Vormaß")}} zu geben, das mit anderen ideografischen Zeichen übereinstimmt. Wenn sie jedoch in einer Reihe erscheinen, kann der glypheninterne Abstand übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solchen übermäßigen Abstand zwischen benachbarten Zeichen (Kerning) sowie am Anfang oder Ende von Textzeilen anzupassen. Allgemein gesprochen:

- Wenn ein Vollbreite-Interpunktionszeichen auf Vollbreite gesetzt ist, hat es auf beiden Seiten einen internen Abstand und ist die volle Breite eines Ideogramms.
- Wenn ein Vollbreite-Interpunktionszeichen auf Halbbreite gesetzt ist, hat es nur auf einer Seite einen internen Abstand, und die andere Seite ist bündig zum Anfang (im Fall von Eröffnungsinterpunktionszeichen) oder Ende (im Fall von Schlussinterpunktionszeichen). Halbbreite Zeichen sind typischerweise halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko von übermäßigem Kerning zu vermeiden, müssen Schriften entweder die OpenType Alternate Half Widths (`halt`)-Funktion, die Contextual Half-width Spacing (`chws`)-Funktion oder beide haben. Wenn die Schriftart keine dieser Funktionen hat, ist `text-spacing-trim` deaktiviert.

### Vollbreite-Interpunktionskollaps

Wenn Paare von Interpunktionszeichen benachbart zueinander stehen, wird der Abstand zwischen ihnen gemäß den folgenden Regeln kollabiert:

- Setzen Sie ein Vollbreite-Eröffnungsinterpunktionszeichen auf Halbbreite, wenn das vorherige Zeichen ein Vollbreite-Eröffnungsinterpunktionszeichen, ein Vollbreite-Mittelpunkt, ein ideografisches Leerzeichen (U+3000), ein Vollbreite-Schlussinterpunktionszeichen mit einer gleichwertigen oder größeren Schriftgröße oder ein Zeichen ist, das zur [Unicode-Allgemeinkategorie "Open punctuation" Ps](https://www.compart.com/en/unicode/category/Ps) gehört. Andernfalls setzen Sie es auf Vollbreite.
- Setzen Sie ein Vollbreite-Schlussinterpunktionszeichen auf Halbbreite, wenn das nächste Zeichen ein Vollbreite-Schlussinterpunktionszeichen, ein Vollbreite-Mittelpunkt, ein ideografisches Leerzeichen (U+3000), ein Vollbreite-Eröffnungsinterpunktionszeichen mit größerer Schriftgröße oder ein Zeichen ist, das zur [Unicode-Allgemeinkategorie "Close punctuation" (Pe)](https://www.compart.com/en/unicode/category/Pe) gehört. Andernfalls setzen Sie es auf Vollbreite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von `text-spacing-trim` Werten

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

{{EmbedLiveSample("`text-spacing-trim` value comparison", "100%", 320)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ic`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) Einheiten
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
