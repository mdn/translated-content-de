---
title: size
slug: Web/CSS/@page/size
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Der **`size`** [CSS](/de/docs/Web/CSS) [At-rule](/de/docs/Web/CSS/At-rule)-Descriptor, verwendet mit der {{cssxref("@page")}}-At-rule, definiert die Größe und Ausrichtung des Kastens, der verwendet wird, um eine Seite darzustellen. Meistens entspricht diese Größe der Zielgröße der gedruckten Seite, falls zutreffend.

Die Größe kann entweder mit einem "skalierbaren" Schlüsselwort definiert werden (in diesem Fall füllt die Seite die verfügbaren Dimensionen aus) oder mit absoluten Dimensionen.

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
  - : Der Benutzer-Agent entscheidet über die Größe der Seite. In den meisten Fällen werden die Maße und die Ausrichtung des Zielblatts verwendet.
- `landscape`
  - : Der Inhalt der Seite wird im Querformat angezeigt (d.h. die längste Seite des Kastens ist horizontal).
- `portrait`
  - : Der Inhalt der Seite wird im Hochformat angezeigt (d.h. die längste Seite des Kastens ist vertikal). Dies ist die Standardausrichtung.
- `<length>`
  - : Jeder Längenwert (siehe {{cssxref("&lt;length&gt;")}}). Der erste Wert entspricht der Breite des Seitenkastens und der zweite Wert entspricht dessen Höhe. Wenn nur ein Wert angegeben wird, wird er sowohl für die Breite als auch für die Höhe verwendet.
- `<page-size>`

  - : Ein Schlüsselwort, das einer der folgenden Werte sein kann:

    - A5
      - : Entspricht den standardmäßigen ISO-Dimensionen: 148mm x 210mm.
    - A4
      - : Entspricht den standardmäßigen ISO-Dimensionen: 210mm x 297mm. (am häufigsten verwendete Maße für privates Drucken.)
    - A3
      - : Entspricht den standardmäßigen ISO-Dimensionen: 297mm x 420mm.
    - B5
      - : Entspricht den standardmäßigen ISO-Dimensionen: 176mm x 250mm.
    - B4
      - : Entspricht den standardmäßigen ISO-Dimensionen: 250mm x 353mm.
    - JIS-B5
      - : Entspricht den JIS-Standards: 182mm x 257mm.
    - JIS-B4
      - : Entspricht den JIS-Standards: 257mm x 364mm.
    - letter
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Maßen von Briefpapier in Nordamerika, d.h. 8.5in x 11in.
    - legal
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Maßen von Legal-Papieren in Nordamerika, d.h. 8.5in x 14in.
    - ledger
      - : Dieses Schlüsselwort ist ein Äquivalent zu den Maßen von Ledger-Seiten in Nordamerika, d.h. 11in x 17in.

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
