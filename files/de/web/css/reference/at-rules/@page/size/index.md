---
title: "`size` CSS-At-Regel-Deskriptor"
short-title: size
slug: Web/CSS/Reference/At-rules/@page/size
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`size`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) Deskriptor, der mit der {{cssxref("@page")}} At-Regel verwendet wird, definiert die Größe und Ausrichtung des Kastens, der verwendet wird, um eine Seite darzustellen. Meistens entspricht diese Größe der Zielgröße der gedruckten Seite, falls zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort definiert werden (in diesem Fall wird die Seite die verfügbaren Dimensionen ausfüllen) oder mit absoluten Dimensionen.

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
  - : Der Benutzeragent entscheidet über die Größe der Seite. In den meisten Fällen werden die Dimensionen und die Ausrichtung des Zielblatts verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d.h. die längste Seite des Kastens ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d.h. die längste Seite des Kastens ist vertikal). Dies ist die Standardausrichtung.
- `<length>`
  - : Jeder Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite des Seitenkastens und der zweite entspricht seiner Höhe. Wenn nur ein Wert angegeben wird, wird dieser sowohl für die Breite als auch für die Höhe verwendet.
- `<page-size>`
  - : Ein Schlüsselwort, das einen der folgenden Werte haben kann:
    - A5
      - : Dies entspricht den standardmäßigen ISO-Abmessungen: 148mm x 210mm.
    - A4
      - : Dies entspricht den standardmäßigen ISO-Abmessungen: 210mm x 297mm. (häufigst verwendete Abmessungen für den persönlichen Druck.)
    - A3
      - : Dies entspricht den standardmäßigen ISO-Abmessungen: 297mm x 420mm.
    - B5
      - : Dies entspricht den standardmäßigen ISO-Abmessungen: 176mm x 250mm.
    - B4
      - : Dies entspricht den standardmäßigen ISO-Abmessungen: 250mm x 353mm.
    - JIS-B5
      - : Dies entspricht den JIS-Standardabmessungen: 182mm x 257mm.
    - JIS-B4
      - : Dies entspricht den JIS-Standardabmessungen: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort entspricht den Abmessungen des Briefpapiers in Nordamerika, d.h. 8.5in x 11in.
    - legal
      - : Dieses Schlüsselwort entspricht den Abmessungen der Legal-Papiere in Nordamerika, d.h. 8.5in x 14in.
    - ledger
      - : Dieses Schlüsselwort entspricht den Abmessungen der Ledger-Seiten in Nordamerika, d.h. 11in x 17in.

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

### Verschachtelung innerhalb einer @media Regel

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
