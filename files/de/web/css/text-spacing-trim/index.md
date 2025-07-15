---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert den internen Abstand, der auf chinesische/japanische/koreanische (CJK) Interpunktionszeichen zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen festgelegt wird.

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
      - : Setzt CJK-Vollbreite-Eröffnungsinterpunktionszeichen zu Vollbreite am Anfang jeder Zeile. Setzt CJK-Vollbreite-Schlussinterpunktionszeichen zu Vollbreite am Ende jeder Zeile oder auf halbe Breite, wenn sie vor der Rechtfertigung nicht in die Zeile passen. [Reduziert den Abstand](#vollbreite_interpunktionseinschrumpfung) zwischen Interpunktionszeichen.
    - `space-all`
      - : Alle CJK-Vollbreite-Interpunktionszeichen werden auf Vollbreite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Eröffnungsinterpunktionszeichen am Anfang der ersten Zeile des Textblockcontainers auf Vollbreite gesetzt werden, und am Anfang jeder folgenden Zeile, die auf einen expliziten Zeilenumbruch wie ein neues Zeilenzeichen folgt.
    - `trim-start`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Eröffnungsinterpunktionszeichen am Anfang jeder Zeile auf halbe Breite gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert auch `trim-both`, `trim-all` und `auto` Werte. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim` Eigenschaft wendet Abstands/Kerning auf CJK-Interpunktionszeichen an, um eine visuell ansprechende Typografie zu erzeugen, wie es in den [Anforderungen für die japanische Textgestaltung](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für die chinesische Textgestaltung](https://www.w3.org/International/clreq/) (CLREQ) definiert ist.

Viele CJK-Interpunktionszeichen enthalten glyph-interne Abstände. Beispielsweise haben das CJK-Vollbreite-Punkt und die CJK-Vollbreite-Klammer normalerweise glyph-interne Abstände auf ihrer rechten Seite, um ihnen ein konstantes {{Glossary("Advance_measure", "Vorausmaß")}} zu geben, das mit anderen ideographischen Zeichen konsistent ist. Wenn sie jedoch in einer Reihe auftreten, können die glyph-internen Abstände übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solche übermäßigen Abstände zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen anzupassen. Allgemein gesagt:

- Wenn ein Vollbreite-Interpunktionszeichen auf Vollbreite gesetzt ist, hat es auf beiden Seiten interne Abstände und ist die volle Breite eines Ideogramms.
- Wenn ein Vollbreite-Interpunktionszeichen auf halbe Breite gesetzt ist, hat es nur auf einer Seite interne Abstände, und seine andere Seite ist bündig zum Anfang (bei Eröffnungsinterpunktionszeichen) oder Ende (bei Schlussinterpunktionszeichen). Halbbreite Zeichen sind typischerweise halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko übermäßigen Kernings zu vermeiden, müssen Schriftarten über das OpenType-Feature Alternative Halbbreiten (`halt`), das Feature Kontextuelle Halbbreiten-Abstände (`chws`) oder beide verfügen. Wenn die Schriftart keines dieser Features hat, ist `text-spacing-trim` deaktiviert.

### Vollbreite Interpunktionseinschrumpfung

Wenn Paare von Interpunktionszeichen nebeneinander liegen, wird der Abstand zwischen ihnen nach den folgenden Regeln eingeschrumpft:

- Setze ein Vollbreite-Eröffnungsinterpunktionszeichen auf halbe Breite, wenn das vorherige Zeichen ein Vollbreite-Eröffnungsinterpunktionszeichen, ein Vollbreite-Mittellunkt, ein ideografisches Leerzeichen (U+3000), ein Vollbreite-Schlussinterpunktionszeichen mit gleich großer oder größerer Schriftgröße oder ein Zeichen, das zur [Unicode Allgemeine Kategorie "Öffnende Interpunktion" Ps](https://www.compart.com/en/unicode/category/Ps) gehört, ist. Andernfalls setze es auf Vollbreite.
- Setze ein Vollbreite-Schlussinterpunktionszeichen auf halbe Breite, wenn das nächste Zeichen ein Vollbreite-Schlussinterpunktionszeichen, ein Vollbreite-Mittellunkt, ein ideografisches Leerzeichen (U+3000), ein Vollbreite-Eröffnungsinterpunktionszeichen mit größerer Schriftgröße oder ein Zeichen, das zur [Unicode Allgemeine Kategorie "Schließende Interpunktion" (Pe)](https://www.compart.com/en/unicode/category/Pe) gehört, ist. Andernfalls setze es auf Vollbreite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### `text-spacing-trim` Wertvergleich

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

- [`ic`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) Einheiten
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
