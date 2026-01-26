---
title: pad
slug: Web/CSS/Reference/At-rules/@counter-style/pad
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`pad`** Deskriptor der {{cssxref("@counter-style")}} At-Regel wird verwendet, um eine Mindestlänge für Marker-Darstellungen festzulegen.

## Syntax

```css
pad: 3 "0";
pad: "+" 5;
```

### Werte

Der Deskriptor akzeptiert die folgenden zwei Werte, die durch ein Leerzeichen getrennt und in beliebiger Reihenfolge angegeben werden können:

- {{cssxref("integer")}}
  - : Gibt die Mindestlänge an, die alle Marker-Darstellungen erreichen müssen. Der Wert muss nicht negativ sein. Im Fall des `pad` Deskriptors ist dieser Wert auch als _Pad-Länge_ bekannt.

- [`<symbol>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#symbol)
  - : Gibt das Symbol an, das für die Auffüllung verwendet wird, wenn die durch den `<integer>` definierte Mindestlänge nicht erreicht wird. Im Fall des `pad` Deskriptors ist dieser Wert auch als _Auffüllsymbol_ bekannt.

## Beschreibung

Verwenden Sie den `pad` Deskriptor, wenn die Marker-Darstellungen eine Mindestlänge haben müssen. Wenn eine Marker-Darstellung kürzer als die angegebene Pad-Länge ist, wird die Marker-Darstellung mit dem angegebenen Auffüllsymbol aufgefüllt. Marker-Darstellungen, die länger als die Pad-Länge sind, werden ohne zusätzliche Auffüllung angezeigt.

Der `pad` Deskriptor verwendet einen `<integer>` für die Mindestmarker-Länge und ein `<symbol>` für die Auffüllung. Ein häufiges Anwendungsbeispiel für den `pad` Deskriptor ist, wenn Sie möchten, dass eine Liste mit `01` beginnt und über `02`, `03`, `04` usw. fortfährt, anstatt nur `1`, `2`, `3` und `4`. Indem Sie in diesem Fall den `pad` Deskriptor als `pad: 2 "0"` angeben, stellt der Browser sicher, dass der Zähler mindestens zwei Zeichen lang ist und fügt eine Auffüllung mit `0` hinzu, um die Mindestlänge von zwei Zeichen zu erreichen, wo erforderlich. Zähler, die in diesem Beispiel bereits zwei oder mehr Zeichen lang sind, werden normal, ohne Auffüllung, angezeigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Zähler auffüllen

Dieses Beispiel erweitert das `decimal` {{cssxref("@counter-style/system","system")}}, um einen Zähler zu erstellen, der mindestens drei Zeichen lang ist, und kürzere Zähler mit `0` aufzufüllen, um diese Mindestlänge zu erreichen. Ein {{cssxref("@counter-style/suffix", "suffix")}} Deskriptor wurde hinzugefügt, um die Ausgabe lesbarer zu machen.

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
- Listeneigenschaften: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}} Funktion zur Erstellung anonymer Zählerstile
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
