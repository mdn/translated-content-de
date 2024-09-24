---
title: Größe
slug: Web/CSS/@page/size
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Der **`size`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule)-Deskriptor, verwendet mit der {{cssxref("@page")}}-At-Regel, definiert die Größe und Ausrichtung des Rahmens, der verwendet wird, um eine Seite darzustellen. Meistens entspricht diese Größe der Zielgröße der gedruckten Seite, falls zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort definiert werden (in diesem Fall füllt die Seite die verfügbaren Dimensionen aus) oder mit absoluten Dimensionen.

## Syntax

```css
/* Schlüsselwortwerte für skalierbare Größe */
size: auto;
size: portrait;
size: landscape;

/* <Längen> Werte */
/* 1 Wert: Höhe = Breite */
size: 6in;

/* 2 Werte: Breite dann Höhe */
size: 4in 6in;

/* Schlüsselwortwerte für absolute Größe */
size: A4;
size: B5;
size: JIS-B4;
size: letter;

/* Mischung von Größe und Ausrichtung */
size: A4 portrait;
```

### Werte

- `auto`
  - : Der User-Agent entscheidet die Größe der Seite. In den meisten Fällen werden die Dimensionen und die Ausrichtung des Zielblattes verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d.h. die längere Seite des Rahmens ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d.h. die längere Seite des Rahmens ist vertikal). Dies ist die Standardausrichtung.
- `<length>`
  - : Ein beliebiger Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite des Seitenrahmens und der zweite Wert seiner Höhe. Wenn nur ein Wert angegeben wird, wird dieser für sowohl Breite als auch Höhe verwendet.
- `<page-size>`

  - : Ein Schlüsselwort, das einer der folgenden Werte sein kann:

    - A5
      - : Entspricht dem Standard, ISO-Dimensionen: 148mm x 210mm.
    - A4
      - : Entspricht dem Standard, ISO-Dimensionen: 210mm x 297mm. (häufigst verwendete Dimensionen für persönliches Drucken.)
    - A3
      - : Entspricht dem Standard, ISO-Dimensionen: 297mm x 420mm.
    - B5
      - : Entspricht dem Standard, ISO-Dimensionen: 176mm x 250mm.
    - B4
      - : Entspricht dem Standard, ISO-Dimensionen: 250mm x 353mm.
    - JIS-B5
      - : Entspricht den JIS-Standarddimensionen: 182mm x 257mm.
    - JIS-B4
      - : Entspricht den JIS-Standarddimensionen: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort entspricht den Maßen von Briefpapier in Nordamerika, d.h. 8,5in x 11in.
    - legal
      - : Dieses Schlüsselwort entspricht den Maßen von Rechtspapieren in Nordamerika, d.h. 8,5in x 14in.
    - ledger
      - : Dieses Schlüsselwort entspricht den Maßen von Großbuchseiten in Nordamerika, d.h. 11in x 17in.

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
