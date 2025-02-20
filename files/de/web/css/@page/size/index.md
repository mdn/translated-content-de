---
title: size
slug: Web/CSS/@page/size
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **`size`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule)-Deskriptor, welcher mit der {{cssxref("@page")}}-At-Regel verwendet wird, definiert die Größe und Ausrichtung des Rahmens, der für die Darstellung einer Seite verwendet wird. Meistens entspricht diese Größe der Zielgröße der gedruckten Seite, falls zutreffend.

Die Größe kann entweder mit einem „skalierbaren“ Schlüsselwort definiert werden (in diesem Fall füllt die Seite die verfügbaren Abmessungen aus) oder mit absoluten Abmessungen.

## Syntax

```css
/* Keyword values for scalable size */
size: auto;
size: portrait;
size: landscape;

/* <length> values */
/* 1 value: height = width */
size: 6in;

/* 2 values: width then height */
size: 4in 6in;

/* Keyword values for absolute size */
size: A4;
size: B5;
size: JIS-B4;
size: letter;

/* Mixing size and orientation */
size: A4 portrait;
```

### Werte

- `auto`
  - : Der User-Agent entscheidet über die Größe der Seite. In den meisten Fällen werden die Abmessungen und die Ausrichtung des Zielblatts verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d. h. die längste Seite des Rahmens ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d. h. die längste Seite des Rahmens ist vertikal). Dies ist die Standardausrichtung.
- `<length>`
  - : Ein beliebiger Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite des Seitenrahmens und der zweite Wert der Höhe. Wird nur ein Wert angegeben, so wird dieser sowohl für die Breite als auch für die Höhe verwendet.
- `<page-size>`

  - : Ein Schlüsselwort, das einen der folgenden Werte annehmen kann:

    - A5
      - : Entspricht den standardmäßigen ISO-Abmessungen: 148mm x 210mm.
    - A4
      - : Entspricht den standardmäßigen ISO-Abmessungen: 210mm x 297mm. (häufigste Abmessungen für den privaten Druck.)
    - A3
      - : Entspricht den standardmäßigen ISO-Abmessungen: 297mm x 420mm.
    - B5
      - : Entspricht den standardmäßigen ISO-Abmessungen: 176mm x 250mm.
    - B4
      - : Entspricht den standardmäßigen ISO-Abmessungen: 250mm x 353mm.
    - JIS-B5
      - : Entspricht den JIS-Standardabmessungen: 182mm x 257mm.
    - JIS-B4
      - : Entspricht den JIS-Standardabmessungen: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort entspricht den Abmessungen von Letter-Papier in Nordamerika, d. h. 8,5in x 11in.
    - legal
      - : Dieses Schlüsselwort entspricht den Abmessungen von Legal-Papier in Nordamerika, d. h. 8,5in x 14in.
    - ledger
      - : Dieses Schlüsselwort entspricht den Abmessungen von Ledger-Seiten in Nordamerika, d. h. 11in x 17in.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren von Größe und Ausrichtung

```css
@page {
  size: A4 landscape;
}
```

### Spezifizieren einer benutzerdefinierten Größe

```css
@page {
  size: 4in 6in;
}
```

### Verschachtelung innerhalb einer @media-Regel

```css
@media print {
  @page {
    size: 50mm 150mm;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
