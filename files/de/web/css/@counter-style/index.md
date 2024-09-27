---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählerstile zu definieren, die nicht Teil der vordefinierten Stilsets sind. Die `@counter-style`-Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenfolgenrepräsentation umgewandelt wird.

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

Während CSS viele nützliche vordefinierte Zählerstile bietet, ermöglicht die `@counter-style` At-Regel eine offene Methode zur Erstellung von Zählern. Diese At-Regel bedient die Anforderungen weltweiter Typografie, indem sie Autoren erlaubt, eigene Zählerstile zu definieren, wenn die vordefinierten Stile ihren Anforderungen nicht entsprechen.

## Syntax

Die `@counter-style` At-Regel wird durch einen [Zählerstilnamen](#zählerstilname) identifiziert, und der Stil des benannten Zählers kann mithilfe einer `<declaration-list>` feinjustiert werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und deren Werten besteht.

### Zählerstilname

- `<counter-style-name>`

  - : Gibt einen Namen für Ihren Zählerstil an. Er wird als groß- und kleinschreibungssensitiver {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert darf nicht `none` entsprechen. Wie alle benutzerdefinierten Bezeichner darf der Wert Ihres Zählerstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Property-Werte, einschließlich Werten von [list](/de/docs/Web/CSS/CSS_lists#properties) und [counter style](/de/docs/Web/CSS/CSS_counter_styles#properties) Eigenschaften. Der Name Ihres Zählers darf nicht den groß- und kleinschreibungsunabhängigen {{cssxref("list-style-type")}} Property-Werten `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` entsprechen.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstilenamen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>` Datentyp erwartet wird, wie in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}

  - : Gibt den Algorithmus an, der für die Umwandlung des ganzzahligen Wertes eines Zählers in eine Zeichenfolgenrepräsentation verwendet wird. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss auch der `symbols`-Deskriptor angegeben werden. Wenn der Wert `additive` ist, muss der `additive-symbols`-Deskriptor ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Gibt die Symbole an, die für die Markierungsdarstellungen verwendet werden sollen. Symbole können Zeichenfolgen, Bilder oder benutzerdefinierte Bezeichner enthalten. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}

  - : Definiert die _additiven Tupel_ für additive Systeme. Während die im `symbols`-Deskriptor angegebenen Symbole zur Konstruktion der Markierungsdarstellung durch die meisten Algorithmen verwendet werden, bestehen additive Zähler wie römische Zahlen aus einer Reihe gewichteter Symbole. Die Deskriptoren sind eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen Ganzzahlgewichten in absteigender Reihenfolge. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}

  - : Gibt Symbole an, die in die Zählerdarstellung eingefügt oder vorangestellt werden, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}

  - : Gibt ein Symbol an, das der Markierungsdarstellung vorangestellt werden soll. Präfixe werden in der letzten Phase hinzugefügt, bevor alle durch den `negative`-Deskriptor hinzugefügten Zeichen negativer Zählerwerte erscheinen.

- {{cssxref("@counter-style/suffix", "suffix")}}

  - : Gibt, ähnlich wie der Präfix-Deskriptor, ein Symbol an, das der Markierungsdarstellung angehängt wird. Suffixe kommen nach der Markierungsdarstellung, einschließlich nach allen durch den `negative`-Deskriptor hinzugefügten Zeichen negativer Zählerwerte.

- {{cssxref("@counter-style/range", "range")}}

  - : Definiert den Wertebereich, über den der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert außerhalb der durch diesen Deskriptor definierten Bereiche darzustellen, fällt der Zählerstil auf seinen `fallback`-Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}

  - : Wird verwendet, wenn Sie möchten, dass die Markierungsdarstellungen eine Mindestlänge haben. Wenn Sie zum Beispiel wünschen, dass die Zähler bei 01 beginnen und über 02, 03, 04 usw. fortlaufen, dann sollte der `pad`-Deskriptor verwendet werden. Für Darstellungen, die größer sind als der angegebene `pad`-Wert, wird die Markierung normal konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}

  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmlesegeräte, den Zählerstil ansagen sollten. Zum Beispiel kann der Wert des Listenelementmarkers basierend auf dem Wert dieses Deskriptors als Zahlen oder Buchstaben für geordnete Listen oder als Audiohinweise für ungeordnete Listen ausgegeben werden.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, auf den zurückgegriffen werden soll, wenn das angegebene System entweder nicht in der Lage ist, die Darstellung eines Zählerwerts zu konstruieren, oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn der Fallback-Zähler auch nicht in der Lage ist, den Wert darzustellen, wird der Fallback dieses Zählers verwendet, falls einer angegeben ist. Wenn entweder keine Fallback-Zähler beschrieben sind oder wenn die Kette von Fallback-Systemen nicht in der Lage ist, einen Zählerwert darzustellen, wird letztendlich auf den `decimal`-Stil zurückgegriffen.

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

Die obige Zählerstilregel kann auf Listen wie folgt angewendet werden:

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

{{EmbedLiveSample('Symbole mit counter-style spezifizieren', '', '300')}}

Sehen Sie mehr Beispiele auf der [Demoseite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Fertige Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style`-Code-Snippets im Dokument [Vordefinierte Zählerstile](https://www.w3.org/TR/predefined-counter-styles/). Dieses Dokument bietet Zähler, die den Bedürfnissen von Sprachen und Kulturen weltweit gerecht werden.

Der [Zählerstile-Konverter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Copy-and-Paste-Code für Zählerstile zu testen und zu erstellen.

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
