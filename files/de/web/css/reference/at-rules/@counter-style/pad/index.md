---
title: pad
slug: Web/CSS/Reference/At-rules/@counter-style/pad
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`pad`** Deskriptor der {{cssxref("@counter-style")}} At-Regel wird verwendet, um eine Mindestlänge für Markerdarstellungen festzulegen.

## Syntax

```css
pad: 3 "0";
pad: "+" 5;
```

### Werte

Der Deskriptor akzeptiert die folgenden zwei Werte, die durch ein Leerzeichen getrennt sind und in beliebiger Reihenfolge angegeben werden können:

- {{cssxref("integer")}}
  - : Gibt die Mindestlänge an, die alle Markerdarstellungen erreichen müssen. Der Wert muss nicht-negativ sein. Im Falle des `pad` Deskriptors wird dieser Wert auch als _pad length_ bezeichnet.

- [`<symbol>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#symbol)
  - : Gibt das Symbol an, das als Füllzeichen verwendet werden soll, falls die durch `<integer>` definierte Mindestlänge nicht erreicht wird. Im Falle des `pad` Deskriptors wird dieser Wert auch als _padding symbol_ bezeichnet.

## Beschreibung

Verwenden Sie den `pad` Deskriptor, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Wenn eine Markerdarstellung kürzer als die angegebene Pad-Länge ist, wird die Markerdarstellung mit dem angegebenen Füllsymbol aufgefüllt. Markerdarstellungen, die länger als die Pad-Länge sind, werden ohne zusätzliche Auffüllung angezeigt.

Der `pad` Deskriptor verwendet ein `<integer>` für die minimale Markerlänge und ein `<symbol>` für die Auffüllung. Ein häufiger Anwendungsfall des `pad` Deskriptors ist, wenn eine Liste mit `01` anfangen und mit `02`, `03`, `04` usw. fortfahren soll, anstatt nur `1`, `2`, `3` und `4`. Indem Sie `pad` Deskriptor als `pad: 2 "0"` angeben, sorgt der Browser dafür, dass der Zähler mindestens zwei Zeichen lang ist und fügt `0` als Auffüllung hinzu, um die minimale Länge von zwei Zeichen zu erreichen, wenn nötig. Zähler, die in diesem Beispiel bereits zwei oder mehr Zeichen lang sind, werden normal ohne Auffüllung angezeigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auffüllen eines Zählers

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
- {{cssxref("symbols", "symbols()")}} Funktion, um anonyme Zählerstile zu erstellen
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
