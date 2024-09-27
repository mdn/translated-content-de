---
title: pad
slug: Web/CSS/@counter-style/pad
l10n:
  sourceCommit: f75fd658f627b5730a14ada901120cfa4ee01bda
---

{{CSSRef}}

Der **`pad`** Deskriptor der {{cssxref("@counter-style")}} At-Regel wird verwendet, um eine Mindestlänge für Markenrepräsentationen festzulegen.

## Syntax

```css
pad: 3 "0";
pad: "+" 5;
```

### Werte

Der Deskriptor akzeptiert die folgenden zwei Werte, die durch ein Leerzeichen getrennt sind und in beliebiger Reihenfolge angegeben werden können:

- {{cssxref("integer")}}

  - : Gibt die Mindestlänge an, die alle Markenrepräsentationen erreichen müssen. Der Wert muss nicht negativ sein. Im Falle des `pad` Deskriptor ist dieser Wert auch als _Pad-Länge_ bekannt.

- [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#symbol)
  - : Gibt das Symbol an, das für das Auffüllen verwendet werden soll, wenn die durch den `<integer>` definierte Mindestlänge nicht erreicht wird. Im Falle des `pad` Deskriptor ist dieser Wert auch als _Auffüllsymbol_ bekannt.

## Beschreibung

Verwenden Sie den `pad` Deskriptor, wenn Sie möchten, dass die Markenrepräsentationen eine Mindestlänge haben. Wenn eine Markenrepräsentation kürzer als die angegebene Pad-Länge ist, wird die Markenrepräsentation mit dem angegebenen Auffüllsymbol aufgefüllt. Markenrepräsentationen, die länger als die Pad-Länge sind, werden ohne zusätzliches Auffüllen angezeigt.

Der `pad` Deskriptor nimmt ein `<integer>` für die minimale Markerlänge und ein `<symbol>` für das Auffüllen. Ein häufiger Anwendungsfall des `pad` Deskriptors besteht darin, wenn Sie eine Liste benötigen, die mit der Nummerierung `01` beginnt und mit `02`, `03`, `04` usw. fortfährt, anstatt einfach `1`, `2`, `3` und `4`. Indem Sie in diesem Fall den `pad` Deskriptor als `pad: 2 "0"` festlegen, stellt der Browser sicher, dass der Zähler mindestens zwei Zeichen lang ist und fügt ein Auffüllen mit `0` hinzu, um die Mindestlänge von zwei Zeichen zu erreichen, wo dies erforderlich ist. Zähler, die in diesem Beispiel bereits zwei oder mehr Zeichen lang sind, werden normal ohne Auffüllen angezeigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auffüllen eines Zählers

Dieses Beispiel erweitert das `decimal` {{cssxref("@counter-style/system","system")}}, um einen Zähler zu erstellen, der mindestens drei Zeichen lang ist, und kürzere Zähler mit `0` auffüllt, um diese Mindestlänge zu erreichen. Ein {{cssxref("@counter-style/suffix", "suffix")}} Deskriptor wurde hinzugefügt, um die Ausgabe lesbarer zu machen.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li value="40">Forty</li>
  <li>Forty-one</li>
  <li value="200">Two hundred</li>
  <li value="3000">Three thousand</li>
  <li>and so on</li>
</ul>
```

#### CSS

```css
@counter-style pad-example {
  system: extends decimal;
  suffix: ": ";
  pad: 3 "0";
}

ul {
  list-style: pad-example;
}
```

#### Ergebnis

{{ EmbedLiveSample('Padding a counter', '100', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listenstil-Eigenschaften: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion, um anonyme Zählerstile zu erstellen
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
