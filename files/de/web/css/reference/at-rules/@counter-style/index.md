---
title: "@counter-style"
slug: Web/CSS/Reference/At-rules/@counter-style
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählstile zu definieren, die nicht Teil des vordefinierten Sets von Stilen sind. Die `@counter-style` Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenfolgendarstellung umgewandelt wird.

Während CSS viele nützliche vordefinierte Zählstile bietet, stellt die `@counter-style` At-Regel eine offene Methode bereit, um Zähler zu erstellen. Diese At-Regel berücksichtigt die Bedürfnisse der weltweiten Typografie, indem sie Autoren ermöglicht, ihre eigenen Zählstile zu definieren, wenn die vordefinierten Stile nicht den Anforderungen entsprechen.

## Syntax

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

Die `@counter-style` At-Regel wird durch einen [Zählstilnamen](#zählstilname) identifiziert, und der Stil des benannten Zählers kann mit Hilfe einer `<declaration-list>` fein abgestimmt werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und deren Werten besteht.

### Zählstilname

- `<counter-style-name>`
  - : Gibt Ihrem Zählstil einen Namen. Es wird als case-sensitiver {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert sollte nicht gleich `none` sein. Wie bei allen benutzerdefinierten Identifikatoren darf der Wert Ihres Zählstils kein [CSS-weiter Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) sein. Vermeiden Sie andere aufgelistete CSS-Eigenschaftswerte, einschließlich der Werte der [list](/de/docs/Web/CSS/Guides/Lists#properties) und [counter style](/de/docs/Web/CSS/Guides/Counter_styles#properties) Eigenschaften. Der Name Ihres Zählers darf nicht den case-insensitiv {{cssxref("list-style-type")}} Eigenschaftswerten `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` entsprechen.

    > [!NOTE]
    > Die nicht überschreibbaren Zählstilenamen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` dürfen nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>` Datentyp erwartet wird, wie zum Beispiel in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}
  - : Gibt den Algorithmus an, der verwendet werden soll, um den ganzzahligen Wert eines Zählers in eine Zeichenfolgendarstellung umzuwandeln. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols` Deskriptor ebenfalls angegeben werden. Wenn der Wert `additive` ist, muss der `additive-symbols` Deskriptor ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}
  - : Gibt die Symbole an, die für die Markerdarstellungen verwendet werden sollen. Symbole können Zeichenfolgen, Bilder oder benutzerdefinierte Bezeichner enthalten. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : Definiert die _additiven Tupel_ für additive Systeme. Während die in dem `symbols` Deskriptor angegebenen Symbole für die Konstruktion der Markerdarstellung von den meisten Algorithmen verwendet werden, bestehen additive Zählsysteme, wie z.B. römische Ziffern, aus einer Reihe von gewichteten Symbolen. Die Deskriptoren sind eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen Ganzzahlgewichten, die nach Gewicht in absteigender Reihenfolge aufgelistet sind. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}
  - : Gibt Symbole an, die an die Zähldarstellung angehängt oder vorangestellt werden sollen, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Gibt ein Symbol an, das der Markerdarstellung vorangestellt werden soll. Präfixe werden in der letzten Phase zur Darstellung hinzugefügt, bevor Zeichen, die durch den `negative` Deskriptor für negative Zählerwerte hinzugefügt wurden, hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Gibt, ähnlich dem Präfix-Deskriptor, ein Symbol an, das an die Markerdarstellung angehängt wird. Suffixe kommen nach der Markerdarstellung, einschließlich nachdem Zeichen hinzugefügt wurden, die durch den `negative` Deskriptor für negative Zählerwerte hinzugefügt wurden.

- {{cssxref("@counter-style/range", "range")}}
  - : Definiert den Bereich von Werten, über die der Zählstil anwendbar ist. Wenn ein Zählstil verwendet wird, um einen Zählerwert darzustellen, der außerhalb der durch diesen Deskriptor definierten Bereiche liegt, fällt der Zählstil auf seinen `fallback` Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}
  - : Wird verwendet, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und über 02, 03, 04 usw. gehen, dann ist der `pad` Deskriptor zu verwenden. Bei Darstellungen, die größer als der angegebene `pad` Wert sind, wird der Marker wie gewohnt konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmleser, den Zählstil ankündigen sollen. Beispielsweise kann der Wert des Listenpunktmarkers als Zahlen oder Alphabete für geordnete Listen oder als Audiocues für ungeordnete Listen vorgelesen werden, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, auf den zurückgegriffen werden soll, wenn entweder das angegebene System nicht in der Lage ist, die Darstellung eines Zählerwertes zu konstruieren oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn auch der Fallback-Zähler den Wert nicht darstellen kann, wird auf den Fallback dieses Zählers zurückgegriffen, wenn einer angegeben ist. Wenn keine Fallback-Zähler beschrieben sind oder wenn die Kette von Fallback-Systemen nicht in der Lage ist, einen Zählerwert darzustellen, wird letztendlich auf den `decimal` Stil zurückgegriffen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Symbole mit Zählstil spezifizieren

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

Die obige Zählstilregel kann auf Listen wie folgt angewendet werden:

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

Sehen Sie mehr Beispiele auf der [Demo-Seite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Fertige Zählstile

Finden Sie eine Sammlung von über 100 `counter-style` Code-Snippets im Dokument [Fertige Zählstile](https://w3c.github.io/predefined-counter-styles/). Dieses Dokument bietet Zähler, die den Bedürfnissen von Sprachen und Kulturen weltweit gerecht werden.

Der [Zählstilkonverter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Test- und Copy-and-Paste-Code für Zählstile zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("counter()")}}
- {{cssxref("counters()")}}
- {{cssxref("symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS-Zählstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
