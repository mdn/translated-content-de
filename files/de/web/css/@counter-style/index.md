---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und Ihre eigenen Zählerstile zu definieren, die nicht Teil des vordefinierten Satzes von Stilen sind. Die `@counter-style`-Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenkettenrepräsentation umgewandelt wird.

Obwohl CSS viele nützliche vordefinierte Zählerstile bietet, stellt die `@counter-style`-At-Regel eine offene Methode zur Erstellung von Zählern dar. Diese At-Regel kommt den Bedürfnissen der weltweiten Typografie entgegen, indem sie Autoren erlaubt, ihre eigenen Zählerstile zu definieren, wenn die vordefinierten Stile nicht ihren Anforderungen entsprechen.

## Syntax

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

Die `@counter-style`-At-Regel wird durch einen [Zählerstil-Namen](#zählerstil-name) identifiziert, und der Stil des benannten Zählers kann mit einer `<declaration-list>` feinabgestimmt werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und ihren Werten besteht.

### Zählerstil-Name

- `<counter-style-name>`
  - : Verleiht Ihrem Zählerstil einen Namen. Er wird als Groß-/Kleinschreibung beachtendes {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert darf nicht `none` sein. Wie bei allen benutzerdefinierten Identifikatoren darf der Wert Ihres Zählerstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Eigenschaftswerte, einschließlich Werten von [list](/de/docs/Web/CSS/CSS_lists#properties) und [counter style](/de/docs/Web/CSS/CSS_counter_styles#properties) Eigenschaften. Der Name Ihres Zählers darf nicht die Groß-/Kleinschreibung unbeachtenden {{cssxref("list-style-type")}} Eigenschaftenwerte von `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstil-Namen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>` Datentyp erwartet wird, wie z. B. in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}
  - : Gibt den Algorithmus an, der verwendet werden soll, um den ganzzahligen Wert eines Zählers in eine Zeichenkettenrepräsentation umzuwandeln. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss auch der `symbols`-Deskriptor angegeben werden. Wenn der Wert `additive` ist, muss auch der `additive-symbols`-Deskriptor angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}
  - : Gibt die Symbole an, die für die Markierungsdarstellung verwendet werden sollen. Symbole können Zeichenfolgen, Bilder oder benutzerdefinierte Identifikatoren enthalten. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` eingestellt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : Definiert die _additiven Tupel_ für additive Systeme. Während die in den `symbols`-Deskriptor angegebene Symbole für die Konstruktion der Markierungsdarstellung durch die meisten Algorithmen verwendet werden, bestehen additive Zählersysteme, wie römische Ziffern, aus einer Reihe gewichteter Symbole. Der Deskriptor ist eine Liste von Zählersymbolen zusammen mit ihren nicht negativen Ganzzahlgewichten, aufgelistet nach Gewicht in absteigender Reihenfolge. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `additive` eingestellt ist.

- {{cssxref("@counter-style/negative", "negative")}}
  - : Gibt Symbole an, die an die Zählerdarstellung angehängt oder vorangestellt werden sollen, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Gibt ein Symbol an, das der Markierungsdarstellung vorangestellt werden soll. Präfixe werden in der Endphase zur Darstellung hinzugefügt, bevor Zeichen hinzugefügt werden, die durch den `negative`-Deskriptor für negative Zählerwerte hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Gibt, ähnlich wie der Präfix-Deskriptor, ein Symbol an, das der Markierungsdarstellung hinzugefügt wird. Suffixe folgen der Markierungsdarstellung, einschließlich aller Zeichen, die durch den `negative`-Deskriptor für negative Zählerwerte hinzugefügt werden.

- {{cssxref("@counter-style/range", "range")}}
  - : Definiert den Wertebereich, über den der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert außerhalb der durch diesen Deskriptor definierten Bereiche darzustellen, fällt der Zählerstil auf seinen `fallback`-Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}
  - : Wird verwendet, wenn Sie möchten, dass die Markierungsdarstellungen eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und durch 02, 03, 04 usw. gehen, dann sollte der `pad`-Deskriptor verwendet werden. Für Darstellungen, die größer als der angegebene `pad`-Wert sind, wird die Markierung wie gewohnt konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmleser, den Zählerstil ansagen sollten. Zum Beispiel kann der Wert des Listenelements als Zahlen oder Buchstaben für geordnete Listen oder als akustische Hinweise für ungeordnete Listen vorgelesen werden, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Namen des Zählersystems an, auf das zurückgegriffen werden soll, wenn entweder das angegebene System nicht in der Lage ist, die Darstellung eines Zählerwerts zu konstruieren oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn der Fallback-Zähler ebenfalls nicht in der Lage ist, den Wert darzustellen, wird auf seinen Fallback zurückgegriffen, falls einer angegeben ist. Wenn keine Fallback-Zähler beschrieben sind oder wenn die Kette von Fallback-Systemen nicht in der Lage ist, einen Zählerwert darzustellen, wird schließlich auf den `decimal`-Stil zurückgegriffen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifikation von Symbolen mit counter-style

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

Siehe mehr Beispiele auf der [Demoseite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Vorgefertigte Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style`-Code-Snippets im Dokument [Vorgefertigte Zählerstile](https://w3c.github.io/predefined-counter-styles/). Dieses Dokument bietet Zähler, die den Bedürfnissen von Sprachen und Kulturen weltweit entsprechen.

Der [Counter styles converter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Code für Zählerstile zu testen und zu erstellen, den Sie kopieren und einfügen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS-Counterstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
