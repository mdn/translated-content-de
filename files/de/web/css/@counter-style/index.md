---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählerstile zu definieren, die nicht Teil der vordefinierten Stilsätze sind. Die `@counter-style`-Regel enthält [Beschreibungen](#beschreibungen), die definieren, wie der Zählerwert in eine String-Darstellung umgewandelt wird.

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

Während CSS viele nützliche vordefinierte Zählerstile bietet, stellt die `@counter-style` At-Regel eine flexible Methode für die Erstellung von Zählern zur Verfügung. Diese Regel kommt den Anforderungen der Typografie weltweit entgegen, indem sie Autoren ermöglicht, ihre eigenen Zählerstile zu definieren, wenn die vordefinierten Stile nicht den Anforderungen entsprechen.

## Syntax

Die `@counter-style` At-Regel wird durch einen [Zählerstil-Namen](#zählerstil-name) identifiziert, und der Stil des benannten Zählers kann über eine `<declaration-list>` fein abgestimmt werden, die eine oder mehrere [Beschreibungen](#beschreibungen) und deren Werte enthält.

### Zählerstil-Name

- `<counter-style-name>`

  - : Bietet einen Namen für Ihren Zählerstil. Er wird als case-sensitives {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert sollte nicht `none` sein. Wie bei allen benutzerdefinierten Identifikatoren darf der Wert Ihres Zählerstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Eigenschaftenwerte, einschließlich Werte der [list](/de/docs/Web/CSS/CSS_lists#properties) und [Zählerstil](/de/docs/Web/CSS/CSS_counter_styles#properties) Eigenschaften. Der Name Ihres Zählers darf nicht die case-insensitiven {{cssxref("list-style-type")}} Eigenschaftswerte `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstil-Namen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>` Datentyp erwartet wird, wie etwa in `system: extends <counter-style-name>`.

### Beschreibungen

- {{cssxref("@counter-style/system", "system")}}

  - : Gibt den Algorithmus an, der zur Umwandlung des ganzzahligen Werts eines Zählers in eine String-Darstellung verwendet wird. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols`-Deskriptor ebenfalls angegeben werden. Wenn der Wert `additive` ist, muss der `additive-symbols`-Deskriptor ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Gibt die Symbole an, die für die Marker-Darstellungen verwendet werden sollen. Symbole können Strings, Bilder oder benutzerdefinierte Identifikatoren enthalten. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}

  - : Definiert die _additiven Tupel_ für additive Systeme. Während die im `symbols`-Deskriptor angegebenen Symbole von den meisten Algorithmen zur Konstruktion der Marker-Darstellung verwendet werden, bestehen additive Zählsysteme, wie z.B. römische Zahlen, aus einer Reihe von gewichteten Symbolen. Der Deskriptor ist eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen ganzzahligen Gewichten, aufgelistet nach Gewicht in absteigender Reihenfolge. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}

  - : Gibt Symbole an, die der Zählerdarstellung hinzugefügt oder vorangestellt werden, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}

  - : Gibt ein Symbol an, das der Markerdarstellung vorangestellt werden soll. Präfixe werden in der Endphase zur Darstellung hinzugefügt, vor allen Zeichen, die durch den `negative`-Deskriptor zu negativen Zählerwerten hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}

  - : Gibt ähnlich dem Präfix-Deskriptor ein Symbol an, das der Markerdarstellung angehängt wird. Suffixe kommen nach der Markerdarstellung, einschließlich nach allen Zeichen, die durch den `negative`-Deskriptor zu negativen Zählerwerten hinzugefügt werden.

- {{cssxref("@counter-style/range", "range")}}

  - : Definiert den Bereich von Werten, über die der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert außerhalb der durch diesen Deskriptor definierten Bereiche darzustellen, fällt der Zählerstil auf seinen `fallback`-Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}

  - : Wird verwendet, wenn die Markerdarstellungen eine Mindestlänge haben sollen. Wenn Sie zum Beispiel möchten, dass die Zähler bei 01 beginnen und durch 02, 03, 04 usw. gehen, dann soll der `pad`-Deskriptor verwendet werden. Für Darstellungen, die größer als der angegebene `pad`-Wert sind, wird der Marker normal konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}

  - : Beschreibt, wie Sprachsynthesizer, wie Screenreader, den Zählerstil ansagen sollen. Zum Beispiel kann der Wert des Listenelements als Zahlen oder Buchstaben für geordnete Listen oder als akustische Hinweise für ungeordnete Listen vorgelesen werden, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, auf das zurückgegriffen werden soll, wenn entweder das angegebene System nicht in der Lage ist, die Darstellung eines Zählerwerts zu konstruieren oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn auch der Fallback-Zähler den Wert nicht darstellen kann, wird der Fallback dieses Zählers verwendet, falls einer angegeben ist. Wenn keine Fallback-Zähler beschrieben sind oder wenn die Kette der Fallback-Systeme nicht in der Lage ist, einen Zählerwert darzustellen, wird letztendlich auf den `decimal` Stil zurückgegriffen.

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

Die obige Zählerstilregel kann auf Listen wie folgt angewandt werden:

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

{{EmbedLiveSample('Symbole mit counter-style angeben', '', '300')}}

Weitere Beispiele finden Sie auf der [Demo-Seite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Fertige Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style` Code-Snippets in dem [Ready-made Counter Styles](https://w3c.github.io/predefined-counter-styles/) Dokument. Dieses Dokument bietet Zähler, die den Bedürfnissen von Sprachen und Kulturen auf der ganzen Welt entsprechen.

Der [Counter styles converter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Code für Zählerstile zu testen und zu erstellen, der kopiert und eingefügt werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
