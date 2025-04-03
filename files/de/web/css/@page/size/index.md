---
title: size
slug: Web/CSS/@page/size
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Der **`size`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) Descriptor, verwendet mit der {{cssxref("@page")}} At-Regel, definiert die Größe und Ausrichtung der Box, die verwendet wird, um eine Seite darzustellen. Meistens entspricht diese Größe der Zielgröße der gedruckten Seite, falls zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort definiert werden (in diesem Fall wird die Seite die verfügbaren Dimensionen ausfüllen) oder mit absoluten Abmessungen.

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
  - : Der User-Agent entscheidet über die Größe der Seite. In den meisten Fällen werden die Dimensionen und die Ausrichtung des Zielblatts verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d.h. die längste Seite der Box ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d.h. die längste Seite der Box ist vertikal). Dies ist die Standardausrichtung.
- `<length>`
  - : Jeder Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite der Seitenbox und der zweite entspricht ihrer Höhe. Wenn nur ein Wert angegeben wird, wird dieser für Breite und Höhe verwendet.
- `<page-size>`

  - : Ein Schlüsselwort, das einen der folgenden Werte annehmen kann:

    - A5
      - : Entspricht den Standard-ISO-Dimensionen: 148mm x 210mm.
    - A4
      - : Entspricht den Standard-ISO-Dimensionen: 210mm x 297mm. (häufigste Abmessungen für das persönliche Drucken.)
    - A3
      - : Entspricht den Standard-ISO-Dimensionen: 297mm x 420mm.
    - B5
      - : Entspricht den Standard-ISO-Dimensionen: 176mm x 250mm.
    - B4
      - : Entspricht den Standard-ISO-Dimensionen: 250mm x 353mm.
    - JIS-B5
      - : Entspricht den JIS-Standarddimensionen: 182mm x 257mm.
    - JIS-B4
      - : Entspricht den JIS-Standarddimensionen: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort entspricht den Dimensionen von Briefpapier in Nordamerika, d.h. 8.5in x 11in.
    - legal
      - : Dieses Schlüsselwort entspricht den Dimensionen von juristischen Papieren in Nordamerika, d.h. 8.5in x 14in.
    - ledger
      - : Dieses Schlüsselwort entspricht den Dimensionen von Ledger-Seiten in Nordamerika, d.h. 11in x 17in.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe und Ausrichtung angeben

```css
@page {
  size: A4 landscape;
}
```

### Anpassbare Größe angeben

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
