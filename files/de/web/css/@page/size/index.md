---
title: size
slug: Web/CSS/@page/size
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Der **`size`** [CSS](/de/docs/Web/CSS) [At-Regel-Deskriptor](/de/docs/Web/CSS/At-rule), der mit der {{cssxref("@page")}} At-Regel verwendet wird, definiert die Größe und Ausrichtung der Box, die verwendet wird, um eine Seite darzustellen. In den meisten Fällen entspricht diese Größe der Zielgröße der gedruckten Seite, wenn zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort (in diesem Fall füllt die Seite die verfügbaren Abmessungen aus) oder mit absoluten Abmessungen definiert werden.

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
  - : Der Benutzeragent entscheidet über die Größe der Seite. In den meisten Fällen werden die Abmessungen und die Ausrichtung des Zielblatts verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d.h. die längste Seite der Box ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d.h. die längste Seite der Box ist vertikal). Dies ist die Standardausrichtung.
- `<length>`
  - : Jeder Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite der Seitenbox und der zweite der Höhe. Wenn nur ein Wert angegeben wird, wird er sowohl für die Breite als auch für die Höhe verwendet.
- `<page-size>`

  - : Ein Schlüsselwort, das einen der folgenden Werte annehmen kann:

    - A5
      - : Entspricht den Standard-ISO-Abmessungen: 148mm x 210mm.
    - A4
      - : Entspricht den Standard-ISO-Abmessungen: 210mm x 297mm. (die am häufigsten verwendeten Abmessungen für das persönliche Drucken.)
    - A3
      - : Entspricht den Standard-ISO-Abmessungen: 297mm x 420mm.
    - B5
      - : Entspricht den Standard-ISO-Abmessungen: 176mm x 250mm.
    - B4
      - : Entspricht den Standard-ISO-Abmessungen: 250mm x 353mm.
    - JIS-B5
      - : Entspricht den JIS-Standardabmessungen: 182mm x 257mm.
    - JIS-B4
      - : Entspricht den JIS-Standardabmessungen: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort entspricht den Abmessungen von Briefpapier in Nordamerika, d.h. 8.5in x 11in.
    - legal
      - : Dieses Schlüsselwort entspricht den Abmessungen von juristischen Papieren in Nordamerika, d.h. 8.5in x 14in.
    - ledger
      - : Dieses Schlüsselwort entspricht den Abmessungen von Ledger-Seiten in Nordamerika, d.h. 11in x 17in.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe und Ausrichtung festlegen

```css
@page {
  size: A4 landscape;
}
```

### Eine benutzerdefinierte Größe festlegen

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
