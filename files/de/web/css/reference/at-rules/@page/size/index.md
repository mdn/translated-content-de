---
title: size
slug: Web/CSS/Reference/At-rules/@page/size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`size`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) Deskriptor, der mit der {{cssxref("@page")}} at-rule verwendet wird, definiert die Größe und Ausrichtung des Kastens, der zur Darstellung einer Seite verwendet wird. Meistens entspricht diese Größe der Zielgröße der gedruckten Seite, wenn zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort definiert werden (in diesem Fall füllt die Seite die verfügbaren Abmessungen aus) oder mit absoluten Maßen.

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
  - : Der Benutzeragent bestimmt die Größe der Seite. In den meisten Fällen werden die Maße und die Ausrichtung des Zielblatts verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d.h. die längste Seite des Kastens ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d.h. die längste Seite des Kastens ist vertikal). Dies ist die standardmäßige Ausrichtung.
- `<length>`
  - : Jeder Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite des Seitenkastens und der zweite der Höhe. Wenn nur ein Wert angegeben wird, wird er sowohl für die Breite als auch für die Höhe verwendet.
- `<page-size>`
  - : Ein Schlüsselwort, das einen der folgenden Werte haben kann:
    - A5
      - : Dies entspricht den Standard-ISO-Maßen: 148mm x 210mm.
    - A4
      - : Dies entspricht den Standard-ISO-Maßen: 210mm x 297mm. (am häufigsten verwendete Maße für den persönlichen Druck.)
    - A3
      - : Dies entspricht den Standard-ISO-Maßen: 297mm x 420mm.
    - B5
      - : Dies entspricht den Standard-ISO-Maßen: 176mm x 250mm.
    - B4
      - : Dies entspricht den Standard-ISO-Maßen: 250mm x 353mm.
    - JIS-B5
      - : Dies entspricht den JIS-Standardmaßen: 182mm x 257mm.
    - JIS-B4
      - : Dies entspricht den JIS-Standardmaßen: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Maßen des Briefpapiers in Nordamerika, d.h. 8,5in x 11in.
    - legal
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Maßen von Legal-Papieren in Nordamerika, d.h. 8,5in x 14in.
    - ledger
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Maßen von Ledger-Seiten in Nordamerika, d.h. 11in x 17in.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizierung von Größe und Ausrichtung

```css
@page {
  size: A4 landscape;
}
```

### Spezifizierung einer benutzerdefinierten Größe

```css
@page {
  size: 4in 6in;
}
```

### Schachtelung innerhalb einer @media-Regel

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
