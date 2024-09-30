---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) erlaubt es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählerstile zu definieren, die nicht Teil des vordefinierten Stilsatzes sind. Die `@counter-style` Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine String-Darstellung umgewandelt wird.

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}

ul {
  list-style: thumbs;
}
```

Obwohl CSS viele nützliche vordefinierte Zählerstile bietet, bietet die `@counter-style` At-Regel eine offene Methode zur Erstellung von Zählern. Diese At-Regel geht auf die Bedürfnisse der weltweiten Typografie ein, indem sie Autoren erlaubt, ihre eigenen Zählerstile zu definieren, wenn die vordefinierten Stile nicht ihren Anforderungen entsprechen.

## Syntax

Die `@counter-style` At-Regel wird durch einen [Zählerstilnamen](#zählerstilname) identifiziert, und der Stil des benannten Zählers kann mit einer `<declaration-list>` fein abgestimmt werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und ihren Werten besteht.

### Zählerstilname

- `<counter-style-name>`

  - : Bietet einen Namen für Ihren Zählerstil. Es wird als case-sensitives {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert sollte nicht gleich `none` sein. Wie bei allen benutzerdefinierten Bezeichnern kann der Wert Ihres Zählerstils kein [CSS-weiter Schlüsselwort](/de/docs/Web/CSS/CSS_Types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Eigenschaftswerte, einschließlich Werte von [list](/de/docs/Web/CSS/CSS_lists#properties) und [counter style](/de/docs/Web/CSS/CSS_counter_styles#properties) Eigenschaften. Der Name Ihres Zählers kann nicht gleich den case-insensitiven {{cssxref("list-style-type")}} Eigenschaftswerten `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstilnamen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der Daten Typ `<counter-style-name>` erwartet wird, z. B. in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}

  - : Gibt den Algorithmus an, der zur Umwandlung des ganzzahligen Wertes eines Zählers in eine String-Darstellung verwendet wird. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss auch der Deskriptor `symbols` angegeben werden. Wenn der Wert `additive` ist, muss der Deskriptor `additive-symbols` ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Legt die Symbole fest, die für die Markerdarstellungen verwendet werden sollen. Symbole können Strings, Bilder oder benutzerdefinierte Bezeichner enthalten. Dieser Deskriptor ist erforderlich, wenn der Deskriptor `system` auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}

  - : Definiert die _additiven Tupel_ für additive Systeme. Während die im Deskriptor `symbols` angegebenen Symbole für die Konstruktion der Markerdarstellung durch die meisten Algorithmen verwendet werden, bestehen additive Zähler Systeme, wie römische Zahlen, aus einer Reihe von gewichteten Symbolen. Der Deskriptor ist eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen ganzzahligen Gewichten, aufgelistet nach Gewicht in absteigender Reihenfolge. Dieser Deskriptor ist erforderlich, wenn der Deskriptor `system` auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}

  - : Gibt Symbole an, die an die Zählerdarstellung angehängt oder vorangestellt werden sollen, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}

  - : Gibt ein Symbol an, das der Markerdarstellung vorangestellt werden soll. Präfixe werden der Darstellung in der Endphase hinzugefügt, vor allen Zeichen, die durch den Deskriptor `negative` hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}

  - : Gibt, ähnlich wie der Präfix-Deskriptor, ein Symbol an, das der Markerdarstellung nachgestellt wird. Suffixe kommen nach der Markerdarstellung, einschließlich nach allen Zeichen, die durch den Deskriptor `negative` hinzugefügt werden.

- {{cssxref("@counter-style/range", "range")}}

  - : Definiert den Wertebereich, über den der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert darzustellen, der außerhalb der durch diesen Deskriptor definierten Bereiche liegt, fällt der Zählerstil auf seinen `fallback` Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}

  - : Wird verwendet, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und über 02, 03, 04 usw. gehen, dann muss der Deskriptor `pad` verwendet werden. Für Darstellungen, die größer als der angegebene `pad` Wert sind, wird der Marker normal konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}

  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmlesegeräte, den Zählerstil ankündigen sollten. Zum Beispiel kann der Wert des Listenmarkierers als Zahlen oder Buchstaben für geordnete Listen oder als akustische Signale für ungeordnete Listen vorgelesen werden, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Namen des Zählerstils an, auf den zurückgegriffen werden soll, wenn entweder das angegebene System die Darstellung eines Zählerwertes nicht konstruieren kann oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn auch der Fallback-Zähler den Wert nicht darstellen kann, wird der Fallback dieses Zählers verwendet, wenn einer angegeben ist. Wenn weder Fallback-Zähler beschrieben sind noch die Kette von Fallback-Systemen den Zählerwert darstellen kann, wird letztendlich auf den `decimal` Stil zurückgegriffen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Symbole mit counter-style angeben

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

Die obige Zählerstilregel kann auf Listen wie diese angewendet werden:

```css
.items {
  list-style: circled-alpha;
}
```

Der obige Code erzeugt folgendes Ergebnis:

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

Finden Sie eine Sammlung von über 100 `counter-style` Codefragmenten im Dokument [Fertige Zählerstile](https://www.w3.org/TR/predefined-counter-styles/). Dieses Dokument bietet Zähler, die den Bedürfnissen von Sprachen und Kulturen auf der ganzen Welt entsprechen.

Der [Zählerstil-Konverter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Code für Zählerstile zu testen und zu erstellen, der kopiert und eingefügt werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
