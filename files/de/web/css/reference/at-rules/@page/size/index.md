---
title: size
slug: Web/CSS/Reference/At-rules/@page/size
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`size`** [CSS](/de/docs/Web/CSS) [At-Regel-Deskriptor](/de/docs/Web/CSS/CSS_syntax/At-rules), der mit der {{cssxref("@page")}} At-Regel verwendet wird, definiert die Größe und Ausrichtung der Box, die zur Darstellung einer Seite verwendet wird. In den meisten Fällen entspricht diese Größe der Zielgröße der gedruckten Seite, falls zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort definiert werden (in diesem Fall füllt die Seite die verfügbaren Dimensionen aus) oder mit absoluten Maßen.

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
  - : Der Benutzeragent entscheidet über die Größe der Seite. In den meisten Fällen werden die Dimensionen und die Ausrichtung des Zielblattes verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d. h., die längste Seite der Box ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d. h., die längste Seite der Box ist vertikal). Dies ist die Standardausrichtung.
- `<length>`
  - : Ein beliebiger Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite der Seitenbox und der zweite der Höhe. Wenn nur ein Wert angegeben wird, wird er sowohl für die Breite als auch für die Höhe verwendet.
- `<page-size>`
  - : Ein Schlüsselwort, das einem der folgenden Werte entsprechen kann:
    - A5
      - : Entspricht den standardisierten ISO-Dimensionen: 148mm x 210mm.
    - A4
      - : Entspricht den standardisierten ISO-Dimensionen: 210mm x 297mm. (am häufigsten für den persönlichen Druck verwendete Dimensionen.)
    - A3
      - : Entspricht den standardisierten ISO-Dimensionen: 297mm x 420mm.
    - B5
      - : Entspricht den standardisierten ISO-Dimensionen: 176mm x 250mm.
    - B4
      - : Entspricht den standardisierten ISO-Dimensionen: 250mm x 353mm.
    - JIS-B5
      - : Entspricht den JIS-Standard-Dimensionen: 182mm x 257mm.
    - JIS-B4
      - : Entspricht den JIS-Standard-Dimensionen: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort entspricht den Dimensionen von Letter-Papier in Nordamerika, d. h., 8.5in x 11in.
    - legal
      - : Dieses Schlüsselwort entspricht den Dimensionen von Legal-Papier in Nordamerika, d. h., 8.5in x 14in.
    - ledger
      - : Dieses Schlüsselwort entspricht den Dimensionen von Ledger-Papier in Nordamerika, d. h., 11in x 17in.

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

### Benutzerdefinierte Größe festlegen

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
