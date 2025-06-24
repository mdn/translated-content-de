---
title: size
slug: Web/CSS/@page/size
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`size`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) Deskriptor, verwendet mit der {{cssxref("@page")}} at-rule, definiert die Größe und Orientierung des Kastens, der verwendet wird, um eine Seite darzustellen. Meistens entspricht diese Größe der Zielgröße der gedruckten Seite, falls zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort definiert werden (in diesem Fall füllt die Seite die verfügbaren Abmessungen aus) oder mit absoluten Dimensionen.

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
  - : Der Benutzeragent entscheidet über die Größe der Seite. In den meisten Fällen werden die Abmessungen und die Orientierung des Zielblatts verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d.h. die längste Seite des Kastens ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d.h. die längste Seite des Kastens ist vertikal). Dies ist die Standardausrichtung.
- `<length>`
  - : Jeder Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite des Seitenkastens und der zweite entspricht seiner Höhe. Wenn nur ein Wert angegeben wird, wird er sowohl für die Breite als auch für die Höhe verwendet.
- `<page-size>`
  - : Ein Schlüsselwort, das einen der folgenden Werte annehmen kann:
    - A5
      - : Entspricht den Standardabmessungen nach ISO: 148mm x 210mm.
    - A4
      - : Entspricht den Standardabmessungen nach ISO: 210mm x 297mm. (häufig verwendete Abmessungen für den persönlichen Druck.)
    - A3
      - : Entspricht den Standardabmessungen nach ISO: 297mm x 420mm.
    - B5
      - : Entspricht den Standardabmessungen nach ISO: 176mm x 250mm.
    - B4
      - : Entspricht den Standardabmessungen nach ISO: 250mm x 353mm.
    - JIS-B5
      - : Entspricht den JIS-Standardabmessungen: 182mm x 257mm.
    - JIS-B4
      - : Entspricht den JIS-Standardabmessungen: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort ist äquivalent zu den Abmessungen von Briefpapier in Nordamerika, d.h. 8.5in x 11in.
    - legal
      - : Dieses Schlüsselwort ist äquivalent zu den Abmessungen von Rechtsdokumenten in Nordamerika, d.h. 8.5in x 14in.
    - ledger
      - : Dieses Schlüsselwort ist äquivalent zu den Abmessungen von Ledger-Papieren in Nordamerika, d.h. 11in x 17in.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe und Orientierung angeben

```css
@page {
  size: A4 landscape;
}
```

### Eine benutzerdefinierte Größe angeben

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
