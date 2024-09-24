---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählerstile zu definieren, die nicht Teil der vordefinierten Stile sind. Die `@counter-style` Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenketten-Darstellung umgewandelt wird.

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

Obwohl CSS viele nützliche vordefinierte Zählerstile bietet, bietet die `@counter-style` At-Regel eine offene Methode zur Erstellung von Zählern. Diese At-Regel erfüllt die Anforderungen der weltweiten Typographie, indem sie Autoren erlaubt, eigene Zählerstile zu definieren, wenn die vordefinierten Stile nicht den Anforderungen entsprechen.

## Syntax

Die `@counter-style` At-Regel wird durch einen [Zählerstilnamen](#zählerstilname) identifiziert, und der Stil des benannten Zählers kann mit einer `<declaration-list>` verfeinert werden, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und deren Werten besteht.

### Zählerstilname

- `<counter-style-name>`

  - : Liefert einen Namen für Ihren Zählerstil. Er wird als groß-/kleinschreibungssensitiver {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert darf nicht `none` sein. Wie alle benutzerdefinierten Identifikatoren kann der Wert Ihres Zählerstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Eigenschaftswerte, einschließlich der Werte von [Listen](/de/docs/Web/CSS/CSS_lists#properties) und [Zählerstil](/de/docs/Web/CSS/CSS_counter_styles#properties) Eigenschaften. Der Name Ihres Zählers kann nicht die groß-/kleinschreibungsunempfindlichen {{cssxref("list-style-type")}} Eigenschaftswerte `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstiltitel `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>` Datentyp erwartet wird, wie z. B. in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}

  - : Gibt den Algorithmus an, der zur Umwandlung des Ganzzahlwerts eines Zählers in eine Zeichenketten-Darstellung verwendet werden soll. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss der `symbols` Deskriptor ebenfalls angegeben werden. Wenn der Wert `additive` ist, muss der `additive-symbols` Deskriptor ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Gibt die Symbole an, die für die Markerdarstellungen verwendet werden sollen. Symbole können Zeichenketten, Bilder oder benutzerdefinierte Identifikatoren enthalten. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}

  - : Definiert die _additive Tupel_ für additive Systeme. Während die im `symbols` Deskriptor angegebenen Symbole für die Konstruktion der Markerdarstellung durch die meisten Algorithmen verwendet werden, bestehen additive Zählersysteme, wie römische Ziffern, aus einer Reihe gewichteter Symbole. Der Deskriptor ist eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen Gewichten, aufgelistet nach absteigender Gewichtung. Dieser Deskriptor ist erforderlich, wenn der `system` Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}

  - : Gibt Symbole an, die der Zählerdarstellung vor- oder nachgestellt werden, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}

  - : Gibt ein Symbol an, das der Markerdarstellung vorangestellt werden soll. Präfixe werden der Darstellung in der Endphase hinzugefügt, bevor Zeichen, die durch den `negative` Deskriptor zu negativen Zählerwerten hinzugefügt wurden, hinzugefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}

  - : Gibt, ähnlich wie der Prefix-Deskriptor, ein Symbol an, das der Markerdarstellung hinzugefügt wird. Suffixe kommen nach der Markerdarstellung, auch nach Zeichen, die durch den `negative` Deskriptor zu negativen Zählerwerten hinzugefügt wurden.

- {{cssxref("@counter-style/range", "range")}}

  - : Definiert den Wertebereich, über den der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert außerhalb der durch diesen Deskriptor definierten Bereiche darzustellen, wird der Zählerstil auf seinen `fallback` Stil zurückfallen.

- {{cssxref("@counter-style/pad", "pad")}}

  - : Wird verwendet, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und über 02, 03, 04 usw. gehen, dann ist der `pad` Deskriptor zu verwenden. Für Darstellungen, die größer als der angegebene `pad` Wert sind, wird der Marker wie gewohnt konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}

  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmlesegeräte, den Zählerstil ansagen sollten. Zum Beispiel kann der Wert des Listenmarkierungspunkts bei geordneten Listen als Zahlen oder Buchstaben vorgelesen werden oder als Audiocues bei ungeordneten Listen, basierend auf dem Wert dieses Deskriptors.

- {{cssxref("@counter-style/fallback", "fallback")}}

  - : Gibt den Zählernamen des Systems an, auf das zurückgegriffen werden soll, wenn entweder das angegebene System nicht in der Lage ist, die Darstellung eines Zählerwerts zu konstruieren oder wenn der Zählerwert außerhalb des angegebenen `range` liegt. Wenn auch der Fallback-Zähler den Wert nicht repräsentieren kann, dann wird auf dessen Fallback, falls festgelegt, zurückgegriffen. Wenn es keine beschriebenen Fallback-Zähler gibt oder die Kette der Fallback-Systeme einen Zählerwert nicht repräsentieren kann, fällt letztlich auf den `decimal` Stil zurück.

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

Der obige Code erzeugt folgendes Ergebnis:

```html hidden
<ol class="items">
  <li>eins</li>
  <li>zwei</li>
  <li>drei</li>
  <li>vier</li>
  <li>fünf</li>
</ol>
<p>...</p>
<ol class="items" start="25">
  <li>fünfundzwanzig</li>
  <li>sechsundzwanzig</li>
  <li>siebenundzwanzig</li>
  <li>achtundzwanzig</li>
</ol>
```

{{EmbedLiveSample('Specifying symbols with counter-style', '', '300')}}

Sehen Sie mehr Beispiele auf der [Demo-Seite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Vorgefertigte Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style` Code-Snippets im Dokument [Vorgefertigte Zählerstile](https://www.w3.org/TR/predefined-counter-styles/). Dieses Dokument bietet Zähler, die den Bedürfnissen von Sprachen und Kulturen auf der ganzen Welt entsprechen.

Der [Zählerstil-Konverter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Kopier- und Einfügecode für Zählerstile zu testen und zu erstellen.

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
