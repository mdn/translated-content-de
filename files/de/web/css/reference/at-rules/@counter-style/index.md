---
title: "`@counter-style` CSS at-rule"
short-title: "@counter-style"
slug: Web/CSS/Reference/At-rules/@counter-style
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, vordefinierte Listentypen zu erweitern und eigene Zählertypen zu definieren, die nicht Teil der vordefinierten Satz von Stilen sind. Die `@counter-style`-Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenketten-Darstellung umgewandelt wird.

Obwohl CSS viele nützliche vordefinierte Zählertypen bietet, stellt die `@counter-style` At-Regel eine offene Methode für die Erstellung von Zählern dar. Diese At-Regel erfüllt die Bedürfnisse der weltweiten Typografie, indem es Autoren ermöglicht, ihre eigenen Zählertypen zu definieren, wenn die vordefinierten Typen nicht ihren Anforderungen entsprechen.

## Syntax

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

Die `@counter-style` At-Regel wird durch einen [Zählertyp-Namen](#zählertyp-name) identifiziert, und die Art des benannten Zählers kann feinabgestimmt werden über eine `<declaration-list>`, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und deren Werten besteht.

### Zählertyp-Name

- `<counter-style-name>`
  - : Gibt einen Namen für Ihren Zählertyp an. Er wird als Groß-/Kleinschreibung beachtendes {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert darf nicht `none` sein. Wie alle benutzerdefinierten Bezeichner darf der Wert Ihres Zählertyps kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) sein. Vermeiden Sie andere aufgezählte CSS-Eigenschaftswerte, einschließlich der Werte von [list](/de/docs/Web/CSS/Guides/Lists#properties)- und [counter style](/de/docs/Web/CSS/Guides/Counter_styles#properties)-Eigenschaften. Der Name Ihres Zählers darf nicht die Groß-/Kleinschreibung ignorierenden {{cssxref("list-style-type")}} Eigenschaftenwerte `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` sein.

    > [!NOTE]
    > Die nicht überschreibbaren Zählertyp-Namen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` dürfen nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der Datentyp `<counter-style-name>` erwartet wird, beispielsweise bei `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}
  - : Gibt den Algorithmus an, der zur Umwandlung des Ganzzahlenwerts eines Zählers in eine Zeichenketten-Darstellung verwendet wird. Ist der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed`, muss der `symbols`-Deskriptor ebenfalls angegeben werden. Ist der Wert `additive`, muss der `additive-symbols`-Deskriptor ebenfalls angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}
  - : Gibt die Symbole an, die für die Markerdarstellungen verwendet werden sollen. Symbole können Zeichenketten, Bilder oder benutzerdefinierte Bezeichner enthalten. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : Definiert die _additiven Paare_ für additive Systeme. Während die in dem `symbols`-Deskriptor angegebenen Symbole von den meisten Algorithmen zur Konstruktion von Markerdarstellungen verwendet werden, bestehen additive Zählersysteme, wie römische Ziffern, aus einer Reihe von gewichteten Symbolen. Die Deskriptoren sind eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen Ganzzahlengewichten, in absteigender Reihenfolge nach Gewicht aufgeführt. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}
  - : Gibt Symbole an, die der Zählerdarstellung hinzugefügt oder angehängt werden sollen, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Gibt ein Symbol an, das der Markerdarstellung vorangestellt werden soll. Präfixe werden der Darstellung in der Endphase hinzugefügt, bevor der `negative`-Deskriptor Zeichen zu negativen Zählerwerten hinzufügt.

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Gibt, ähnlich wie beim Präfix-Deskriptor, ein Symbol an, das der Markerdarstellung angehängt wird. Suffixe kommen nach der Markerdarstellung, einschließlich aller Zeichen, die durch den `negative`-Deskriptor zu negativen Zählerwerten hinzugefügt werden.

- {{cssxref("@counter-style/range", "range")}}
  - : Definiert den Wertebereich, in dem der Zählertyp anwendbar ist. Wird ein Zählertyp zur Darstellung eines Zählerwerts außerhalb der durch diesen Deskriptor definierten Bereiche verwendet, fällt der Zählertyp auf seinen `fallback`-Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}
  - : Wird verwendet, wenn Sie möchten, dass die Markerdarstellungen eine Mindestlänge haben. Wenn Sie beispielsweise möchten, dass die Zähler bei 01 beginnen und durch 02, 03, 04 usw. fortfahren, dann sollte der `pad`-Deskriptor verwendet werden. Für Darstellungen, die größer als der angegebene `pad`-Wert sind, wird der Marker normal konstruiert.

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmleser, den Zählertyp ansagen sollen. Beispielsweise kann der Wert des Listenelements-Markierers je nach Wert dieses Deskriptors als Zahlen oder Buchstaben für geordnete Listen oder als Audio-Signale für ungeordnete Listen vorgelesen werden.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, auf das zurückgegriffen werden soll, wenn das spezifizierte System entweder nicht in der Lage ist, die Darstellung eines Zählerwerts zu konstruieren, oder wenn der Zählerwert außerhalb des spezifizierten `range` liegt. Wenn der Ersatz-Zähler ebenfalls nicht in der Lage ist, den Wert darzustellen, wird dessen Ersatz verwendet, falls einer angegeben ist. Wenn entweder keine Ersatz-Zähler beschrieben sind oder die Kette von Ersatz-Systemen nicht in der Lage ist, einen Zählerwert darzustellen, fällt sie letztendlich auf den `decimal`-Stil zurück.

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

Die obige Zählertyp-Regel kann auf Listen wie folgt angewendet werden:

```css
.items {
  list-style: circled-alpha;
}
```

Der obenstehende Code erzeugt das folgende Ergebnis:

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

Weitere Beispiele finden Sie auf der [Demo-Seite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Vorgefertigte Zählertypen

Finden Sie eine Sammlung von über 100 `counter-style` Code-Snippets im Dokument [Vorgefertigte Zählertypen](https://w3c.github.io/predefined-counter-styles/). Dieses Dokument bietet Zähler an, die den Bedürfnissen von Sprachen und Kulturen weltweit entsprechen.

Der [Zählertypen-Konverter](https://r12a.github.io/app-counters/) zieht aus dieser Liste, um Code zu testen und kopier- und einfügbaren Code für Zählertypen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("counter()")}}
- {{cssxref("counters()")}}
- {{cssxref("symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS-Zählertypen](/de/docs/Web/CSS/Guides/Counter_styles) Modul
