---
title: "`pad` CSS @-Regel-Deskriptor"
short-title: pad
slug: Web/CSS/Reference/At-rules/@counter-style/pad
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`pad`**-Deskriptor der {{cssxref("@counter-style")}} @-Regel wird verwendet, um eine Mindestlänge für Markerdarstellungen festzulegen.

## Syntax

```css
pad: 3 "0";
pad: "+" 5;
```

### Werte

Der Deskriptor akzeptiert die folgenden zwei Werte, die durch ein Leerzeichen getrennt und in beliebiger Reihenfolge angegeben werden können:

- {{cssxref("integer")}}
  - : Gibt die Mindestlänge an, die alle Markerdarstellungen erreichen müssen. Der Wert muss nicht negativ sein. Im Fall des `pad`-Deskriptors wird dieser Wert auch als _Pad-Länge_ bezeichnet.

- [`<symbol>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#symbol)
  - : Gibt das Symbol an, das für das Auffüllen verwendet wird, wenn die durch das `<integer>` definierte Mindestlänge nicht erreicht wird. Im Fall des `pad`-Deskriptors wird dieser Wert auch als _Auffüllsymbol_ bezeichnet.

## Beschreibung

Verwenden Sie den `pad`-Deskriptor, wenn Sie möchten, dass Markerdarstellungen eine Mindestlänge haben. Wenn eine Markerdarstellung kürzer als die angegebene Pad-Länge ist, wird die Markerdarstellung mit dem angegebenen Auffüllsymbol gefüllt. Markerdarstellungen, die länger als die Pad-Länge sind, werden ohne zusätzliches Auffüllen angezeigt.

Der `pad`-Deskriptor nimmt ein `<integer>` für die minimale Markerlänge und ein `<symbol>` für das Auffüllen. Ein häufiges Anwendungsbeispiel des `pad`-Deskriptors ist, wenn Sie möchten, dass eine Liste mit der Nummerierung von `01` beginnt und durch `02`, `03`, `04` usw. fortgesetzt wird, anstatt nur `1`, `2`, `3` und `4`. Indem Sie den `pad`-Deskriptor in diesem Fall als `pad: 2 "0"` angeben, stellt der Browser sicher, dass der Zähler mindestens zwei Zeichen lang ist und fügt zur Erreichung der Mindestlänge von zwei Zeichen bei Bedarf eine Auffüllung mit `0` hinzu. Zähler, die in diesem Beispiel bereits zwei oder mehr Zeichen lang sind, werden normal ohne Auffüllung angezeigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auffüllen eines Zählers

Dieses Beispiel erweitert das `decimal`-{{cssxref("@counter-style/system","system")}} zu einem Zähler, der mindestens drei Zeichen lang ist, und füllt kürzere Zähler mit `0` auf, um diese Mindestlänge zu erreichen. Ein {{cssxref("@counter-style/suffix", "suffix")}}-Deskriptor wurde hinzugefügt, um die Ausgabe lesbarer zu machen.

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
- {{cssxref("symbols()")}}-Funktion, um anonyme Zählerstile zu erstellen
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
