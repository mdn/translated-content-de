---
title: size
slug: Web/CSS/@page/size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`size`** [CSS](/de/docs/Web/CSS) [At-Regel-Descriptor](/de/docs/Web/CSS/CSS_syntax/At-rule), verwendet mit der {{cssxref("@page")}} At-Regel, definiert die Größe und die Ausrichtung des Kastens, der zur Darstellung einer Seite genutzt wird. In den meisten Fällen entspricht diese Größe der Zielgröße der gedruckten Seite, falls zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort definiert werden (in diesem Fall füllt die Seite die verfügbaren Dimensionen aus) oder mit absoluten Abmessungen.

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
  - : Jeder Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite des Seitenkastens und der zweite Wert entspricht der Höhe. Wenn nur ein Wert angegeben wird, wird dieser sowohl für Breite als auch für Höhe verwendet.
- `<page-size>`
  - : Ein Schlüsselwort, das einen der folgenden Werte haben kann:
    - A5
      - : Dies entspricht den standardmäßigen ISO-Abmessungen: 148mm x 210mm.
    - A4
      - : Dies entspricht den standardmäßigen ISO-Abmessungen: 210mm x 297mm. (am häufigsten verwendete Abmessungen für persönlichen Druck.)
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
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Abmessungen von Briefpapier in Nordamerika, d.h. 8.5in x 11in.
    - legal
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Abmessungen von Legal-Papieren in Nordamerika, d.h. 8.5in x 14in.
    - ledger
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Abmessungen von Ledger-Seiten in Nordamerika, d.h. 11in x 17in.

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

### Eine benutzerdefinierte Größe angeben

```css
@page {
  size: 4in 6in;
}
```

### In eine @media-Regel verschachteln

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
