---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{CSSRef}}

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählerstile zu definieren, die nicht Teil des vordefinierten Satzes von Stilen sind. Die `@counter-style` Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine String-Darstellung umgewandelt wird.

Während CSS viele nützliche vordefinierte Zählerstile bietet, stellt die `@counter-style` At-Regel eine offene Methode zur Erstellung von Zählern bereit. Diese At-Regel unterstützt die Bedürfnisse weltweiter Typografie, indem Autoren in der Lage sind, eigene Zählerstile zu definieren, wenn die vordefinierten Stile den Anforderungen nicht entsprechen.

## Syntax

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

Die `@counter-style` At-Regel wird durch einen [Zählerstilnamen](#zählerstilname) identifiziert, und der Stil des benannten Zählers kann mit einer `<declaration-list>` fein abgestimmt werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und deren Werten besteht.

### Zählerstilname

- `<counter-style-name>`
  - : Gibt einen Namen für Ihren Zählerstil an. Es wird als fallunterscheidendes {{cssxref("custom-ident")}} ohne Anführungszeichen spezifiziert. Der Wert sollte nicht `none` sein. Wie alle benutzerdefinierten Bezeichner darf der Wert Ihres Zählerstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) sein. Vermeiden Sie andere enumerierte CSS Eigenschaftswerte, einschließlich der Werte von [list](/de/docs/Web/CSS/CSS_lists#properties) und [counter style](/de/docs/Web/CSS/CSS_counter_styles#properties) Eigenschaften. Der Name Ihres Zählers kann nicht einer der fallunabhängigen {{cssxref("list-style-type")}} Eigenschaftswerte `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstilnamen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>` Datentyp erwartet wird, wie z.B. in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}
  - : Gibt den Algorithmus an, der zum Umwandeln des ganzzahligen Wertes eines Zählers in eine String-Darstellung verwendet werden soll. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols` Deskriptor ebenfalls angegeben werden. Wenn der Wert `additive` ist, muss der `additive-symbols` Deskriptor ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}
  - : Gibt die Symbole an, die für die Markerdarstellungen verwendet werden sollen. Symbole können Zeichenketten, Bilder oder benutzerdefinierte Bezeichner enthalten. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : Definiert die _additiven Tupel_ für additive Systeme. Während die im `symbols` Deskriptor angegebenen Symbole für die Konstruktion der Markerdarstellung durch die meisten Algorithmen verwendet werden, bestehen additive Zählsysteme, wie römische Ziffern, aus einer Reihe von gewichteten Symbolen. Der Deskriptor ist eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen ganzzahligen Gewichten, in absteigender Reihenfolge nach Gewicht aufgelistet. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}
  - : Gibt Symbole an, die an die Zähldarstellung angehängt oder vorangestellt werden sollen, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Gibt ein Symbol an, das der Markerdarstellung vorangestellt werden soll. Präfixe werden der Darstellung in der letzten Phase hinzugefügt, bevor Zeichen hinzugefügt werden, die durch den `negative` Deskriptor für negative Zählerwerte hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Gibt, ähnlich dem Präfix-Deskriptor, ein Symbol an, das der Markerdarstellung angehängt wird. Suffixe kommen nach der Markerdarstellung, einschließlich nach Zeichen, die durch den `negative` Deskriptor für negative Zählerwerte hinzugefügt werden.

- {{cssxref("@counter-style/range", "range")}}
  - : Definiert den Wertebereich, über den der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert darzustellen, der außerhalb der durch diesen Deskriptor definierten Bereiche liegt, fällt der Zählerstil auf seinen `fallback` Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}
  - : Wird verwendet, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und durch 02, 03, 04 usw. gehen, dann ist der `pad` Deskriptor zu verwenden. Für Darstellungen, die größer als der angegebene `pad` Wert sind, wird der Marker normal konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Beschreibt, wie Sprachsynthesizer, wie Screenreader, den Zählerstil ansagen sollen. Zum Beispiel kann der Wert des Listenpunktmarkers als Zahlen oder Buchstaben für geordnete Listen oder als akustische Hinweise für ungeordnete Listen vorgelesen werden, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, zu dem zurückgefallen wird, wenn entweder das angegebene System in der Lage ist, die Darstellung eines Zählerwertes zu konstruieren oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn auch der Fallback-Zähler den Wert nicht darstellen kann, dann wird der Fallback dieses Zählers verwendet, falls einer angegeben ist. Wenn keine Fallback-Zähler beschrieben sind oder wenn die Kette der Fallback-Systeme den Zählerwert nicht darstellen kann, dann wird letztendlich auf den `decimal` Stil zurückgegriffen.

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

Weitere Beispiele finden Sie auf der [Demoseite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Fertige Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style` Code-Snippets im Dokument [Vorbereitete Zählerstile](https://w3c.github.io/predefined-counter-styles/). Dieses Dokument bietet Zählerstile, die den Anforderungen von Sprachen und Kulturen weltweit gerecht werden.

Der [Zählerstile-Konverter](https://r12a.github.io/app-counters/) bezieht sich auf diese Liste, um Test- und Kopieren-und-Einfügen-Code für Zählerstile zu erstellen.

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
