---
title: pad
slug: Web/CSS/@counter-style/pad
l10n:
  sourceCommit: f75fd658f627b5730a14ada901120cfa4ee01bda
---

{{CSSRef}}

Der **`pad`**-Deskriptor der {{cssxref("@counter-style")}} At-Regel wird verwendet, um eine Mindestlänge für Markerdarstellungen festzulegen.

## Syntax

```css
pad: 3 "0";
pad: "+" 5;
```

### Werte

Der Deskriptor akzeptiert die folgenden zwei Werte, die durch ein Leerzeichen getrennt sind und in beliebiger Reihenfolge angegeben werden können:

- {{cssxref("integer")}}

  - : Gibt die Mindestlänge an, die alle Markerdarstellungen erreichen müssen. Der Wert muss nicht negativ sein. Im Fall des `pad`-Deskriptors wird dieser Wert auch als _Pad-Länge_ bezeichnet.

- [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#symbol)
  - : Gibt das Symbol an, das für die Auffüllung verwendet werden soll, wenn die durch das `<integer>` definierte Mindestlänge nicht erreicht wird. Im Fall des `pad`-Deskriptors wird dieser Wert auch als _Füllsymbol_ bezeichnet.

## Beschreibung

Verwenden Sie den `pad`-Deskriptor, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Wenn eine Markerdarstellung kürzer als die angegebene Pad-Länge ist, wird die Markerdarstellung mit dem angegebenen Füllsymbol aufgefüllt. Markerdarstellungen, die länger als die Pad-Länge sind, werden ohne zusätzliche Auffüllung angezeigt.

Der `pad`-Deskriptor nimmt ein `<integer>` für die Mindestmarkerlänge und ein `<symbol>` für die Auffüllung. Ein häufiges Einsatzgebiet des `pad`-Deskriptors ist, wenn Sie eine Liste von `01` bis `02`, `03`, `04` und so weiter nummerieren möchten, anstatt nur `1`, `2`, `3` und `4`. Durch die Angabe des `pad`-Deskriptors als `pad: 2 "0"` in diesem Fall stellt der Browser sicher, dass der Zähler mindestens zwei Zeichen lang ist und fügt eine Auffüllung mit `0` hinzu, um die Mindestlänge von zwei Zeichen zu erreichen, wo nötig. Zähler, die in diesem Beispiel bereits zwei oder mehr Zeichen lang sind, werden normal ohne Auffüllung angezeigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Zähler auffüllen

Dieses Beispiel erweitert das `decimal`-{{cssxref("@counter-style/system","system")}}, um einen Zähler zu erstellen, der mindestens drei Zeichen lang ist, wobei kürzere Zähler mit `0` aufgefüllt werden, um diese Mindestlänge zu erreichen. Ein {{cssxref("@counter-style/suffix", "suffix")}}-Deskriptor wurde hinzugefügt, um die Ausgabe lesbarer zu machen.

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
- Listendarstellungseigenschaften: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion zur Erstellung anonymer Zählerstile
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
