---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählerstile zu definieren, die nicht Teil des vordefinierten Stilsatzes sind. Die `@counter-style`-Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Textdarstellung umgewandelt wird.

Während CSS viele nützliche, vordefinierte Zählerstile bietet, bietet die `@counter-style`-At-Regel eine flexible Methode zur Erstellung von Zählern. Diese At-Regel kommt den Anforderungen der weltweiten Typografie entgegen, indem sie es Autoren ermöglicht, eigene Zählerstile zu definieren, wenn die vordefinierten Stile ihren Anforderungen nicht gerecht werden.

## Syntax

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

Die `@counter-style`-At-Regel wird durch einen [Zählerstilnamen](#zählerstilname) identifiziert, und der Stil des benannten Zählers kann mit einer `<declaration-list>` feinabgestimmt werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und deren Werten besteht.

### Zählerstilname

- `<counter-style-name>`
  - : Gibt einen Namen für Ihren Zählerstil an. Es wird als groß-/klein-schreibungssensitiver {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert darf nicht `none` sein. Wie bei allen benutzerdefinierten Identifizierern darf der Wert Ihres Zählerstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Eigenschaftenwerte, einschließlich der Werte von [list](/de/docs/Web/CSS/CSS_lists#properties) und [counter style](/de/docs/Web/CSS/CSS_counter_styles#properties) Eigenschaften. Der Name Ihres Zählers darf nicht den groß-/klein-schreibungssensitiven {{cssxref("list-style-type")}} Eigenschaftswerten `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` entsprechen.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstilnamen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>`-Datentyp erwartet wird, z.B. in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}
  - : Gibt den Algorithmus an, der zum Konvertieren des ganzzahligen Wertes eines Zählers in eine Textdarstellung verwendet werden soll. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der Deskriptor `symbols` ebenfalls angegeben werden. Wenn der Wert `additive` ist, muss der Deskriptor `additive-symbols` ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}
  - : Gibt die Symbole an, die für die Markerdarstellungen verwendet werden sollen. Symbole können Zeichenfolgen, Bilder oder benutzerdefinierte Identifizierer enthalten. Dieser Deskriptor ist erforderlich, wenn der Deskriptor `system` auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` eingestellt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : Definiert die _additiven Tupel_ für additive Systeme. Während die im Deskriptor `symbols` angegebenen Symbole von den meisten Algorithmen zur Konstruktion von Markerdarstellungen verwendet werden, bestehen additive Zählersysteme, wie z.B. römische Ziffern, aus einer Reihe von gewichteten Symbolen. Der Deskriptor ist eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen ganzzahligen Gewichten, die nach Gewicht in absteigender Reihenfolge aufgelistet sind. Dieser Deskriptor ist erforderlich, wenn der Deskriptor `system` auf `additive` eingestellt ist.

- {{cssxref("@counter-style/negative", "negative")}}
  - : Gibt die Symbole an, die an die Zählerdarstellung angehängt oder vorangestellt werden sollen, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Gibt ein Symbol an, das der Markerdarstellung vorangestellt werden soll. Präfixe werden in der letzten Stufe zur Darstellung hinzugefügt, bevor Zeichen durch den Deskriptor `negative` zu negativen Zählerwerten hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Gibt, ähnlich wie der Präfix-Deskriptor, ein Symbol an, das an die Markerdarstellung angehängt wird. Suffixe kommen nach der Markerdarstellung, einschließlich der Zeichen, die durch den Deskriptor `negative` zu negativen Zählerwerten hinzugefügt werden.

- {{cssxref("@counter-style/range", "range")}}
  - : Definiert den Wertebereich, über den der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert außerhalb der durch diesen Deskriptor definierten Bereiche darzustellen, fällt der Zählerstil auf seinen `fallback`-Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}
  - : Wird verwendet, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Zum Beispiel, wenn Sie möchten, dass die Zähler bei 01 beginnen und durch 02, 03, 04 usw. gehen, dann sollte der Deskriptor `pad` verwendet werden. Für Darstellungen, die größer sind als der angegebene `pad`-Wert, wird der Marker wie normal konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Beschreibt, wie Sprachausgabe-Synthesizer, wie Bildschirmleseprogramme, den Zählerstil ankündigen sollten. Zum Beispiel kann der Wert des Listenelement-Markers als Zahlen oder Alphabete für geordnete Listen oder als akustische Hinweise für ungeordnete Listen vorgelesen werden, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, auf das zurückgegriffen werden soll, wenn das angegebene System nicht in der Lage ist, die Darstellung eines Zählerwerts zu konstruieren oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn der Fallback-Zähler ebenfalls nicht in der Lage ist, den Wert darzustellen, wird der Fallback dieses Zählers verwendet, sofern einer angegeben ist. Wenn entweder keine Fallback-Zähler beschrieben werden oder wenn die Kette von Fallback-Systemen nicht in der Lage ist, einen Zählerwert darzustellen, fällt sie letztendlich auf den `decimal` Stil zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Symbole mit Zählerstil spezifizieren

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

Die obige Zählerstilregel kann auf Listen wie folgt angewendet werden:

```css
.items {
  list-style: circled-alpha;
}
```

Der obige Code erzeugt das folgende Ergebnis:

```html hidden
<ol class="items">
  <li>one</li>
  <li>two</li>
  <li>three</li>
  <li>four</li>
  <li>five</li>
</ol>
<p>...</p>
<ol class="items" start="25">
  <li>twenty-five</li>
  <li>twenty-six</li>
  <li>twenty-seven</li>
  <li>twenty-eight</li>
</ol>
```

{{EmbedLiveSample('Specifying symbols with counter-style', '', '300')}}

Sehen Sie mehr Beispiele auf der [Demoseite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Fertige Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style`-Code-Snippets im Dokument [Fertige Zählerstile](https://w3c.github.io/predefined-counter-styles/). Dieses Dokument bietet Zähler, die den Bedürfnissen von Sprachen und Kulturen auf der ganzen Welt gerecht werden.

Der [Zählerstile-Konverter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Code für Zählerstile zu testen und für Kopieren und Einfügen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
