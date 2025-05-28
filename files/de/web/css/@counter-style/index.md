---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{CSSRef}}

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) erlaubt es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählstile zu definieren, die nicht Teil der vordefinierten Stile sind. Die `@counter-style` Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenfolgenrepräsentation umgewandelt wird.

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

Während CSS viele nützliche vordefinierte Zählstile bietet, bietet die `@counter-style` At-Regel eine offene Methode zur Erstellung von Zählern. Diese At-Regel geht auf die Bedürfnisse der weltweiten Typografie ein, indem sie Autoren ermöglicht, ihre eigenen Zählstile zu definieren, wenn die vordefinierten Stile nicht ihren Anforderungen entsprechen.

## Syntax

Die `@counter-style` At-Regel wird durch einen [Zählstilnamen](#zählstilname) identifiziert, und der Stil des benannten Zählers kann mit einer `<declaration-list>` verfeinert werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und ihren Werten besteht.

### Zählstilname

- `<counter-style-name>`

  - : Liefert einen Namen für Ihren Zählstil. Er wird als case-sensitives {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert darf nicht `none` sein. Wie bei allen benutzerdefinierten Identifikatoren kann der Wert Ihres Zählstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Property-Werte, einschließlich der Werte von [list](/de/docs/Web/CSS/CSS_lists#properties) und [counter style](/de/docs/Web/CSS/CSS_counter_styles#properties) Properties. Der Name Ihres Zählers kann nicht die case-insensitive {{cssxref("list-style-type")}} Property-Werte `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählstilnamen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der Datentyp `<counter-style-name>` erwartet wird, wie z.B. in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}

  - : Gibt den Algorithmus an, der verwendet werden soll, um den ganzzahligen Wert eines Zählers in eine Zeichenfolgenrepräsentation umzuwandeln. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss auch der `symbols` Deskriptor angegeben werden. Wenn der Wert `additive` ist, muss auch der `additive-symbols` Deskriptor angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Gibt die Symbole an, die für die Markerrepräsentationen verwendet werden sollen. Symbole können Zeichenfolgen, Bilder oder benutzerdefinierte Identifikatoren enthalten. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}

  - : Definiert die _additive tuples_ für additive Systeme. Während die im `symbols` Deskriptor angegebenen Symbole für die Konstruktion der Markerrepräsentation durch die meisten Algorithmen verwendet werden, bestehen additive Zählersysteme, wie römische Ziffern, aus einer Reihe von gewichteten Symbolen. Die Deskriptoren sind eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen ganzzahligen Gewichten, die in absteigender Reihenfolge nach Gewicht aufgelistet sind. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}

  - : Gibt Symbole an, die an die Zählerdarstellung angehängt oder vorangestellt werden, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}

  - : Gibt ein Symbol an, das der Markerrepräsentation vorangestellt werden soll. Präfixe werden der Darstellung in der Endphase hinzugefügt, bevor die im `negative` Deskriptor angegebenen Zeichen für negative Zählerwerte hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}

  - : Gibt, ähnlich dem Prefix-Deskriptor, ein Symbol an, das der Markerrepräsentation angehängt wird. Suffixe kommen nach der Markerrepräsentation, einschließlich nach den vom `negative` Deskriptor hinzugefügten Zeichen für negative Zählerwerte.

- {{cssxref("@counter-style/range", "range")}}

  - : Definiert den Wertebereich, über den der Zählstil anwendbar ist. Wenn ein Zählstil verwendet wird, um einen Zählerwert außerhalb der durch diesen Deskriptor definierten Bereiche darzustellen, fällt der Zählstil auf seinen `fallback` Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}

  - : Wird verwendet, wenn Sie möchten, dass die Markerrepräsentationen eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und über 02, 03, 04 usw. gehen, dann ist der `pad` Deskriptor zu verwenden. Für Darstellungen, die größer als der angegebene `pad`-Wert sind, wird der Marker normal konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}

  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmleser, den Zählstil ankündigen sollen. Beispielsweise kann der Wert des Listenelementmarkers als Zahlen oder Buchstaben für geordnete Listen oder als akustische Signale für ungeordnete Listen vorgelesen werden, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, auf das zurückgegriffen werden soll, wenn entweder das angegebene System die Darstellung eines Zählerwerts nicht konstruieren kann oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn der Fallback-Zähler es ebenfalls nicht schafft, den Wert darzustellen, wird der Fallback dieses Zählers verwendet, falls einer angegeben ist. Wenn keine Fallback-Zähler beschrieben sind oder wenn die Kette der Fallback-Systeme nicht in der Lage ist, einen Zählerwert darzustellen, wird letztendlich auf den `decimal` Stil zurückgegriffen.

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

Weitere Beispiele finden Sie auf der [Demoseite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Fertiggestellte Zählstile

Finden Sie eine Sammlung von über 100 `counter-style` Code-Schnipseln im Dokument [Ready-made Counter Styles](https://w3c.github.io/predefined-counter-styles/). Dieses Dokument bietet Zähler, die den Bedürfnissen von Sprachen und Kulturen weltweit gerecht werden.

Der [Counter styles converter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Code für Zählstile zum Testen sowie zum Kopieren und Einfügen zu erstellen.

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
