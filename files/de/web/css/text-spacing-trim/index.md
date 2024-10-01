---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`text-spacing-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert den internen Abstand, der auf chinesische/japanische/koreanische (CJK) Interpunktionszeichen zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen angewendet wird.

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

  - : Definiert die verschiedenen Optionen für die Abstandsanpassung. Verfügbare Werte sind:

    - `normal`
      - : Setzt CJK-Vollbreite-Anfangszeichensetzungszeichen auf Vollbreite am Anfang jeder Zeile. Setzt CJK-Vollbreite-Endzeichensetzungszeichen auf Vollbreite am Ende jeder Zeile oder auf halbe Breite, wenn sie vor der Ausrichtung nicht in die Zeile passen. [Kollabiert den Abstand](#kollaps_von_vollbreiten-interpunktion) zwischen Interpunktionszeichen.
    - `space-all`
      - : Alle CJK-Vollbreite-Interpunktionszeichen werden auf Vollbreite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Anfangszeichensetzungszeichen auf Vollbreite am Anfang der ersten Zeile des Textblock-Containers und am Anfang jeder nach einem expliziten Zeilenumbruch kommenden Zeile gesetzt werden, wie zum Beispiel ein Zeilenumbruchzeichen.
    - `trim-start`

      - : Verhält sich wie `normal`, außer dass CJK-Vollbreite-Anfangszeichensetzungszeichen auf halbe Breite am Anfang jeder Zeile gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert auch die Werte `trim-both,` `trim-all,` und `auto`. Allerdings sind diese derzeit in keinem Browser implementiert.

## Beschreibung

Die `text-spacing-trim` Eigenschaft wendet Abstand/Kerning auf CJK Interpunktionszeichen an, um eine visuell ansprechende Typografie zu erzeugen, wie sie in den [Anforderungen für japanische Textlayout](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen für chinesische Textlayout](https://www.w3.org/International/clreq/) (CLREQ) definiert ist.

Viele CJK Interpunktionszeichen enthalten internen Glyphenabstand. Beispielsweise haben der CJK Punkt und die CJK-Schlussklammer normalerweise intern einen Abstand auf ihrer rechten Seite, um ihnen einen konstanten {{Glossary("Advance_measure", "Fortschrittsmaß")}} zu geben, der mit anderen ideografischen Zeichen konsistent ist. Wenn sie jedoch hintereinander erscheinen, kann der interne Glyphenabstand übermäßig werden.

`text-spacing-trim` kann verwendet werden, um einen solchen übermäßigen Abstand zwischen benachbarten Zeichen (Kerning) und am Anfang oder Ende von Textzeilen anzupassen. Im Allgemeinen gilt:

- Wenn ein Vollbreite-Interpunktionszeichen auf Vollbreite gesetzt wird, hat es intern auf beiden Seiten einen Abstand und ist so breit wie ein Ideogramm.
- Wenn ein Vollbreite-Interpunktionszeichen auf halbe Breite gesetzt wird, hat es intern auf einer Seite einen Abstand und die andere Seite ist bündig mit dem Anfang (bei Anfangszeichensetzungszeichen) oder dem Ende (bei Schlusszeichensetzungszeichen). Zeichen mit halber Breite sind typischerweise halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko übermäßigen Kerns zu vermeiden, müssen Schriftarten die OpenType Merkmale für alternative halbe Breiten (`halt`) oder kontextuelle Halbbreitenabstände (`chws`) oder beide haben. Wenn die Schriftart keines dieser Merkmale hat, ist `text-spacing-trim` deaktiviert.

### Kollaps von Vollbreiten-Interpunktion

Wenn Paare von Interpunktionszeichen nebeneinander liegen, wird der Abstand zwischen ihnen gemäß den folgenden Regeln reduziert:

- Setzen Sie ein Vollbreite-Anfangszeichensetzungszeichen auf halbe Breite, wenn das vorhergehende Zeichen ein Vollbreite-Anfangszeichensetzungszeichen, ein Vollbreite-Mittelpunkte, ein ideografischer Abstand (U+3000), ein Vollbreite-Schlusszeichensetzungszeichen mit einer gleichwertigen oder größeren Schriftgröße oder ein Zeichen der [Unicode allgemeine Kategorie "Öffnende Interpunktion" Ps](https://www.compart.com/en/unicode/category/Ps) ist. Andernfalls auf Vollbreite setzen.
- Setzen Sie ein Vollbreite-Schlusszeichensetzungszeichen auf halbe Breite, wenn das nächste Zeichen ein Vollbreite-Schlusszeichensetzungszeichen, ein Vollbreite-Mittelpunkte, ein ideografischer Abstand (U+3000), ein Vollbreite-Anfangszeichensetzungszeichen mit größerer Schriftgröße oder ein Zeichen der [Unicode allgemeine Kategorie "Schließende Interpunktion" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Andernfalls auf Vollbreite setzen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der `text-spacing-trim` Werte

Dieses Beispiel vergleicht die Wirkung von vier verschiedenen `text-spacing-trim` Eigenschaften, indem sie auf vier identische Absätze angewendet werden, damit Sie die visuellen Unterschiede zwischen jedem von ihnen sehen können.

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
