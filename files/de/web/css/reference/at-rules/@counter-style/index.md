---
title: "@counter-style"
slug: Web/CSS/Reference/At-rules/@counter-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählerstile zu definieren, die nicht Teil des vordefinierten Stilsatzes sind. Die `@counter-style` Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenketten-Darstellung umgewandelt wird.

Während CSS viele nützliche vordefinierte Zählerstile bereitstellt, bietet die `@counter-style` At-Regel eine offene Methode zur Erstellung von Zählern. Diese At-Regel bedient die Bedürfnisse der weltweiten Typografie, indem sie Autoren erlaubt, ihre eigenen Zählerstile zu definieren, wenn die vordefinierten Stile nicht ihren Anforderungen entsprechen.

## Syntax

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

Die `@counter-style` At-Regel wird durch einen [Counter-Style-Namen](#counter-style-name) identifiziert, und der Stil des benannten Zählers kann mit einer `<declaration-list>`, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und ihren Werten besteht, feinabgestimmt werden.

### Counter-Style-Name

- `<counter-style-name>`

  - : Bietet einen Namen für Ihren Zählerstil. Er wird als Groß-/Kleinschreibung beachtendes {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert sollte nicht `none` sein. Wie alle benutzerdefinierten Bezeichner kann der Wert Ihres Zählerstils kein [CSS-generisches Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Eigenschaftenwerte, einschließlich der Werte der [listen](/de/docs/Web/CSS/Guides/Lists#properties) und [Counter-Style](/de/docs/Web/CSS/Guides/Counter_styles#properties) Eigenschaften. Der Name Ihres Zählers kann nicht die Groß-/Kleinschreibung nicht beachtende {{cssxref("list-style-type")}} Eigenschaftswerte von `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstilnamen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als der Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>` Datentyp erwartet wird, wie in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}

  - : Gibt den zu verwendenden Algorithmus an, um den ganzzahligen Wert eines Zählers in eine Zeichenketten-Darstellung umzuwandeln. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols` Deskriptor ebenfalls angegeben werden. Wenn der Wert `additive` ist, muss der `additive-symbols` Deskriptor ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Gibt die Symbole an, die für die Markerdarstellungen verwendet werden sollen. Symbole können Zeichenketten, Bilder oder benutzerdefinierte Bezeichner enthalten. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}

  - : Definiert die _additiven Tupel_ für additive Systeme. Während die im `symbols` Deskriptor angegebenen Symbole von den meisten Algorithmen zur Darstellung von Markern verwendet werden, bestehen additive Zählsysteme, wie römische Zahlen, aus einer Reihe von gewichteten Symbolen. Die Deskriptorenliste enthält Zählersymbole zusammen mit ihren nicht-negativen ganzzahligen Gewichten, nach Gewicht in absteigender Reihenfolge aufgelistet. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}

  - : Gibt Symbole an, die der Zählerdarstellung hinzugefügt oder vorangestellt werden, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}

  - : Gibt ein Symbol an, das der Markerdarstellung vorangestellt werden soll. Präfixe werden in der endgültigen Phase zur Darstellung hinzugefügt, vor allen Zeichen, die durch den `negative` Deskriptor zu negativen Zählerwerten hinzugefügt wurden.

- {{cssxref("@counter-style/suffix", "suffix")}}

  - : Gibt, ähnlich dem Präfix-Deskriptor, ein Symbol an, das der Markerdarstellung hinzugefügt wird. Suffixe kommen nach der Markerdarstellung, einschließlich nach allen Zeichen, die durch den `negative` Deskriptor zu negativen Zählerwerten hinzugefügt wurden.

- {{cssxref("@counter-style/range", "range")}}

  - : Definiert den Bereich von Werten, über die der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert darzustellen, der außerhalb der durch diesen Deskriptor definierten Bereiche liegt, wird der Zählerstil auf seinen `fallback`-Stil zurückfallen.

- {{cssxref("@counter-style/pad", "pad")}}

  - : Wird verwendet, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und mit 02, 03, 04 usw. fortfahren, dann ist der `pad` Deskriptor zu verwenden. Für Darstellungen, die größer als der angegebene `pad`-Wert sind, wird der Marker wie gewohnt konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}

  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmlesegeräte, den Zählerstil ankündigen sollen. Zum Beispiel kann der Wert des Listenelements als Zahlen oder Alphabete für geordnete Listen oder als Audiohinweise für ungeordnete Listen vorgelesen werden, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, zu dem gewechselt werden soll, wenn entweder das angegebene System nicht in der Lage ist, die Darstellung eines Zählerwertes zu konstruieren, oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn der Ersatz-Zähler ebenfalls versagt, den Wert darzustellen, dann wird dessen Fallback verwendet, falls eines angegeben ist. Gibt es entweder keine beschriebenen Ersatz-Zähler oder kann die Kette der Ersatzsysteme keinen Zählerwert darstellen, fällt letztlich auf den `decimal` Stil zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Symbole mit counter-style spezifizieren

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

Die obige Counter-Style-Regel kann auf Listen wie diese angewendet werden:

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

### Vorgefertigte Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style` Code-Snippets im Dokument [Vorgefertigte Zählerstile](https://w3c.github.io/predefined-counter-styles/). Dieses Dokument bietet Zähler, die die Bedürfnisse von Sprachen und Kulturen weltweit erfüllen.

Der [Zählerstile-Konverter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Code für Zählerstile zu testen und zum Kopieren und Einfügen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS Counter Styles](/de/docs/Web/CSS/Guides/Counter_styles) Modul
