---
title: "@counter-style"
slug: Web/CSS/Reference/At-rules/@counter-style
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und Ihre eigenen Zählerstile zu definieren, die nicht Teil des vordefinierten Satzes von Stilen sind. Die `@counter-style`-Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenfolgenrepräsentation umgewandelt wird.

Während CSS viele nützliche vordefinierte Zählerstile bietet, bietet die `@counter-style`-At-Regel eine offene Methode zur Erstellung von Zählern. Diese At-Regel erfüllt die Anforderungen der weltweiten Typografie, indem sie den Autoren ermöglicht, ihre eigenen Zählerstile zu definieren, wenn die vordefinierten Stile nicht ihren Bedürfnissen entsprechen.

## Syntax

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

Die `@counter-style`-At-Regel wird durch einen [Zählerstil-Namen](#zählerstil-name) identifiziert, und der Stil des benannten Zählers kann mithilfe einer `<declaration-list>` fein abgestimmt werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und deren Werten besteht.

### Zählerstil-Name

- `<counter-style-name>`
  - : Bietet einen Namen für Ihren Zählerstil. Er wird als case-sensitiver {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert sollte nicht `none` sein. Wie bei allen benutzerdefinierten Identifikatoren darf der Wert Ihres Zählerstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Eigenschaftenwerte, einschließlich der Werte von [list](/de/docs/Web/CSS/CSS_lists#properties) und [counter style](/de/docs/Web/CSS/CSS_counter_styles#properties) Eigenschaften. Der Name Ihres Zählers kann nicht die case-insensitiven {{cssxref("list-style-type")}} Eigenschaftenwerte von `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstilenamen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der Datentyp `<counter-style-name>` erwartet wird, z. B. bei `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}
  - : Gibt den Algorithmus an, der zur Umwandlung des ganzzahligen Werts eines Zählers in eine Zeichenfolgenrepräsentation verwendet wird. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der Deskriptor `symbols` ebenfalls angegeben werden. Wenn der Wert `additive` ist, muss der Deskriptor `additive-symbols` ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}
  - : Bestimmt die Symbole, die für die Markierungsdarstellungen verwendet werden sollen. Symbole können Zeichenfolgen, Bilder oder benutzerdefinierte Identifikatoren enthalten. Dieser Deskriptor ist erforderlich, wenn der Deskriptor `system` auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : Definiert die _additiven Tupel_ für additive Systeme. Während die Symbole, die im Deskriptor `symbols` angegeben sind, zur Konstruktion der Markierungsdarstellung durch die meisten Algorithmen verwendet werden, bestehen additive Zählsysteme, wie römische Ziffern, aus einer Reihe gewichteter Symbole. Der Deskriptor ist eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen ganzzahligen Gewichten, geordnet nach absteigender Gewichtung. Dieser Deskriptor ist erforderlich, wenn der Deskriptor `system` auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}
  - : Gibt Symbole an, die der Zählerdarstellung angefügt oder vorangestellt werden, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Gibt ein Symbol an, das der Markierungsdarstellung vorangestellt werden soll. Präfixe werden der Darstellung in der Endphase hinzugefügt, vor allen Zeichen, die von dem Deskriptor `negative` zu negativen Zählerwerten hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Gibt, ähnlich zum Präfixdeskriptor, ein Symbol an, das der Markierungsdarstellung angefügt wird. Suffixe folgen auf die Markierungsdarstellung, einschließlich aller Zeichen, die von dem Deskriptor `negative` zu negativen Zählerwerten hinzugefügt werden.

- {{cssxref("@counter-style/range", "range")}}
  - : Definiert den Wertebereich, über den der Zählerstil anwendbar ist. Wenn ein Zählerstil zur Darstellung eines Zählerwerts verwendet wird, der außerhalb der von diesem Deskriptor definierten Bereiche liegt, fällt der Zählerstil auf seinen `fallback`-Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}
  - : Wird verwendet, wenn Sie möchten, dass die Markierungsdarstellung eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und durch 02, 03, 04 usw. weitergehen, dann ist der Deskriptor `pad` zu verwenden. Bei Darstellungen, die größer als der angegebene `pad`-Wert sind, wird die Markierung normal konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Beschreibt, wie Sprachausgaben, wie Bildschirmleseprogramme, den Zählerstil ankündigen sollen. Zum Beispiel kann der Wert des Eintragsmarkierers für geordnete Listen als Zahlen oder Alphabete vorgelesen werden oder als Audiowiedergabe für ungeordnete Listen, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, auf das zurückgegriffen werden soll, wenn entweder das angegebene System nicht in der Lage ist, die Darstellung eines Zählerwerts zu konstruieren, oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn auch der Fallback-Zähler den Wert nicht darstellen kann, wird dessen Fallback verwendet, falls einer angegeben ist. Wenn keine Fallback-Zähler beschrieben sind oder die Kette von Fallback-Systemen einen Zählerwert nicht darstellen kann, dann fällt sie letztendlich auf den `decimal`-Stil zurück.

## Formaler Syntax

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

Die obige Zählerstil-Regel kann auf Listen wie folgt angewendet werden:

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

Siehe weitere Beispiele auf der [Demo-Seite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Vorgefertigte Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style`-Code-Schnipseln in dem Dokument [Vorgefertigte Zählerstile](https://w3c.github.io/predefined-counter-styles/). Dieses Dokument bietet Zähler, die den Anforderungen von Sprachen und Kulturen weltweit gerecht werden.

Der [Counter styles converter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Test- und Kopiercode für Zählerstile zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles) module
