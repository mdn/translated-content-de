---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}{{seecompattable}}

Die **`text-spacing-trim`**-Eigenschaft [CSS](/de/docs/Web/CSS) steuert den inneren Abstand, der bei chinesischen, japanischen und koreanischen (CJK) Satzzeichen zwischen benachbarten Zeichen (Kerning) sowie am Anfang und Ende von Textzeilen festgelegt wird.

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

  - : Definiert die verschiedenen Optionen für das Reduzieren von Abständen. Verfügbare Werte sind:

    - `normal`
      - : Setzt CJK-Vollbreiten-Eröffnungszeichen am Anfang jeder Zeile auf Vollbreite. Setzt CJK-Vollbreiten-Schlusszeichen am Ende jeder Zeile auf Vollbreite oder auf Halbbreite, wenn sie vor der Ausrichtung nicht auf die Zeile passen. [Reduziert den Abstand](#reduzierung_von_vollbreiten-satzzeichen) zwischen Satzzeichen.
    - `space-all`
      - : Alle CJK-Vollbreiten-Satzzeichen werden auf Vollbreite gesetzt.
    - `space-first`
      - : Verhält sich wie `normal`, außer dass CJK-Vollbreiten-Eröffnungszeichen am Anfang der ersten Zeile des Blockcontainers des Textes und am Anfang jeder nachfolgenden Zeile nach einem expliziten Zeilenumbruch (z. B. einem Zeilenumbruchzeichen) auf Vollbreite gesetzt werden.
    - `trim-start`

      - : Verhält sich wie `normal`, außer dass CJK-Vollbreiten-Eröffnungszeichen am Anfang jeder Zeile auf Halbbreite gesetzt werden.

    > [!NOTE]
    > Das [CSS Text](/de/docs/Web/CSS/CSS_text)-Modul definiert auch die Werte `trim-both`, `trim-all` und `auto`. Diese sind jedoch derzeit in keinem Browser implementiert.

## Beschreibung

Die Eigenschaft `text-spacing-trim` wendet Abstände/Kerning auf CJK-Satzzeichen an, um eine optisch ansprechende Typografie zu erzeugen, wie sie in den [Anforderungen an das Layout japanischer Texte](https://w3c.github.io/jlreq/) (JLREQ) und den [Anforderungen an das Layout chinesischer Texte](https://www.w3.org/International/clreq/) (CLREQ) definiert ist.

Viele CJK-Satzzeichen enthalten glyph-interne Abstände. Zum Beispiel haben der CJK-Punkt und die CJK-Schließklammer normalerweise glyph-interne Abstände auf ihrer rechten Seite, um ihnen eine konstante {{Glossary("Advance_measure", "Advance Measure")}} zu geben, die mit anderen ideografischen Zeichen konsistent ist. Wenn sie jedoch in einer Reihe erscheinen, können die glyph-internen Abstände übermäßig werden.

`text-spacing-trim` kann verwendet werden, um solche übermäßigen Abstände zwischen benachbarten Zeichen (Kerning) sowie am Anfang oder Ende von Textzeilen anzupassen. Allgemein gilt:

- Wenn ein Vollbreiten-Satzzeichen auf Vollbreite eingestellt ist, hat es innenliegende Abstände auf beiden Seiten und entspricht der vollen Breite eines Ideogramms.
- Wenn ein Vollbreiten-Satzzeichen auf Halbbreite eingestellt ist, hat es innenliegende Abstände nur auf einer Seite, und seine andere Seite liegt bündig am Anfang (bei Eröffnungszeichen) oder Ende (bei Schlusszeichen) an. Halbbreiten-Zeichen sind typischerweise halb so breit wie ein Ideogramm.

> [!NOTE]
> Um das Risiko übermäßigen Kernings zu vermeiden, müssen Schriftarten über die OpenType-Features Alternate Half Widths (`halt`), Contextual Half-width Spacing (`chws`) oder beide verfügen. Wenn die Schriftart keines dieser Features hat, wird `text-spacing-trim` deaktiviert.

### Reduzierung von Vollbreiten-Satzzeichen

Wenn Satzzeichenpaare angrenzend sind, wird der Abstand zwischen ihnen gemäß folgender Regeln reduziert:

- Setzen Sie ein Vollbreiten-Eröffnungszeichen auf Halbbreite, wenn das vorherige Zeichen ein Vollbreiten-Eröffnungszeichen, ein Mittelpunkt in Vollbreite, ein ideografisches Leerzeichen (U+3000), ein Vollbreiten-Schlusszeichen mit gleicher oder größerer Schriftgröße oder ein Zeichen aus der [Unicode-General-Kategorie "Öffnendes Satzzeichen" Ps](https://www.compart.com/en/unicode/category/Ps) ist. Andernfalls setzen Sie es auf Vollbreite.
- Setzen Sie ein Vollbreiten-Schlusszeichen auf Halbbreite, wenn das nächste Zeichen ein Vollbreiten-Schlusszeichen, ein Mittelpunkt in Vollbreite, ein ideografisches Leerzeichen (U+3000), ein Vollbreiten-Eröffnungszeichen mit größerer Schriftgröße oder ein Zeichen aus der [Unicode-General-Kategorie "Schließendes Satzzeichen" (Pe)](https://www.compart.com/en/unicode/category/Pe) ist. Andernfalls setzen Sie es auf Vollbreite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von `text-spacing-trim`-Werten

Dieses Beispiel zeigt die Wirkung von vier verschiedenen `text-spacing-trim`-Eigenschaften, indem sie auf vier identische Absätze angewendet werden, damit Sie die visuellen Unterschiede zwischen diesen sehen können.

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

- [`ic`](/de/docs/Web/CSS/CSS_Values_and_Units#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_Values_and_Units#root_font-relative_lengths)-Einheiten
- Modul [CSS Text](/de/docs/Web/CSS/CSS_text)
