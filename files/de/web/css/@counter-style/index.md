---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@counter-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, vordefinierte Listenstile zu erweitern und eigene Zählerstile zu definieren, die nicht Teil des vordefinierten Satzes von Stilen sind. Die `@counter-style`-Regel enthält [Deskriptoren](#deskriptoren), die definieren, wie der Zählerwert in eine Zeichenkettenrepräsentation umgewandelt wird.

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

Obwohl CSS viele nützliche vordefinierte Zählerstile bereitstellt, bietet die `@counter-style`-At-Regel eine flexible Methode zum Erstellen von Zählern. Diese Regel erfüllt die Anforderungen weltweiter Typografie, indem Autoren ihre eigenen Zählerstile erstellen können, falls die vordefinierten Stile nicht ihren Anforderungen entsprechen.

## Syntax

Die `@counter-style`-At-Regel wird durch einen [Zählerstil-Namen](#zählerstil-name) identifiziert, und der Stil des benannten Zählers kann mithilfe einer `<declaration-list>`, die aus einem oder mehreren [Deskriptoren](#deskriptoren) und deren Werten besteht, fein abgestimmt werden.

### Zählerstil-Name

- `<counter-style-name>`

  - : Gibt einen Namen für Ihren Zählerstil an. Dieser wird als Groß-/Kleinschreibung beachtender {{cssxref("custom-ident")}} ohne Anführungszeichen angegeben. Der Wert darf nicht `none` sein. Wie bei allen benutzerdefinierten Bezeichnern kann der Wert Ihres Zählerstils kein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) sein. Vermeiden Sie außerdem andere aufgezählte CSS-Eigenschaftswerte, einschließlich der Werte von [list](/de/docs/Web/CSS/CSS_lists#properties) und [counter style](/de/docs/Web/CSS/CSS_counter_styles#properties)-Eigenschaften. Der Name Ihres Zählers kann nicht den Groß-/Kleinschreibung ignorierenden {{cssxref("list-style-type")}}-Eigenschaftswerten wie `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` entsprechen.

    > [!NOTE]
    > Die nicht überschreibbaren Zählerstil-Namen `decimal`, `disc`, `square`, `circle`, `disclosure-open` und `disclosure-closed` können nicht als Name eines benutzerdefinierten Zählers verwendet werden. Sie sind jedoch in anderen Kontexten gültig, in denen der `<counter-style-name>`-Datentyp erwartet wird, wie z. B. in `system: extends <counter-style-name>`.

### Deskriptoren

- {{cssxref("@counter-style/system", "system")}}

  - : Gibt den Algorithmus an, der zur Umwandlung des Ganzzahlenwerts eines Zählers in eine Zeichenkettenrepräsentation verwendet wird. Wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, muss auch der Deskriptor `symbols` angegeben werden. Wenn der Wert `additive` ist, muss auch der Deskriptor `additive-symbols` angegeben werden.

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Gibt die Symbole an, die für die Markierungsrepräsentationen verwendet werden sollen. Symbole können Zeichenketten, Bilder oder benutzerdefinierte Bezeichner enthalten. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` gesetzt ist.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}

  - : Definiert die _additiven Paare_ für additive Systeme. Während die im Deskriptor `symbols` angegebenen Symbole von den meisten Algorithmen zur Konstruktion von Markierungsrepräsentationen verwendet werden, bestehen additive Zählsysteme wie römische Zahlen aus einer Reihe gewichteter Symbole. Der Deskriptor ist eine Liste von Zählersymbolen zusammen mit ihren nicht-negativen Gewichten, die nach Gewicht in absteigender Reihenfolge aufgelistet sind. Dieser Deskriptor ist erforderlich, wenn der `system`-Deskriptor auf `additive` gesetzt ist.

- {{cssxref("@counter-style/negative", "negative")}}

  - : Gibt Symbole an, die der Zählerrepräsentation hinzugefügt oder vorangestellt werden, wenn der Wert negativ ist.

- {{cssxref("@counter-style/prefix", "prefix")}}

  - : Gibt ein Symbol an, das der Markierungsrepräsentation vorangestellt werden soll. Präfixe werden der Darstellung in der Endphase hinzugefügt, bevor alle Zeichen hinzugefügt werden, die durch den Deskriptor `negative` bei negativen Zählerwerten eingefügt werden.

- {{cssxref("@counter-style/suffix", "suffix")}}

  - : Gibt, ähnlich wie der Deskriptor `prefix`, ein Symbol an, das der Markierungsrepräsentation angefügt wird. Suffixe erscheinen nach der Markierungsrepräsentation, einschließlich nach allen Zeichen, die durch den Deskriptor `negative` bei negativen Zählerwerten hinzugefügt werden.

- {{cssxref("@counter-style/range", "range")}}

  - : Definiert den Wertebereich, über den der Zählerstil anwendbar ist. Wenn ein Zählerstil verwendet wird, um einen Zählerwert außerhalb der durch diesen Deskriptor definierten Bereiche darzustellen, fällt der Zählerstil auf seinen `fallback`-Stil zurück.

- {{cssxref("@counter-style/pad", "pad")}}

  - : Wird verwendet, wenn die Markierungsrepräsentationen eine Mindestlänge haben sollen. Beispielsweise, wenn Sie möchten, dass die Zähler bei 01 beginnen und über 02, 03, 04 usw. gehen, dann wird der Deskriptor `pad` verwendet. Bei Darstellungen, die länger als der angegebene `pad`-Wert sind, wird die Markierung wie gewohnt erstellt.

- {{cssxref("@counter-style/speak-as", "speak-as")}}

  - : Beschreibt, wie Sprachsynthesizer, wie Bildschirmleseprogramme, den Zählerstil ankündigen sollen. Beispielsweise kann der Wert des Listenelementmarkers je nach Wert dieses Deskriptors als Zahlen oder Alphabete für geordnete Listen oder als Audiomarkierungen für ungeordnete Listen vorgelesen werden.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Gibt den Zählernamen des Systems an, auf das zurückgegriffen werden soll, wenn das angegebene System entweder keine Darstellung eines Zählerwerts erzeugen kann oder wenn der Zählerwert außerhalb des angegebenen `range`-Werts liegt. Wenn der Fallback-Zähler auch die Darstellung des Werts nicht erzeugen kann, wird auf dessen Fallback zurückgegriffen, falls einer angegeben ist. Wenn weder Fallback-Zähler beschrieben sind noch die Kette von Fallback-Systemen einen Zählerwert darstellen kann, wird letztendlich auf den Stil `decimal` zurückgegriffen.

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

Die obige Regel für Zählerstile kann auf Listen wie folgt angewendet werden:

```css
.items {
  list-style: circled-alpha;
}
```

Der obige Code ergibt folgendes Ergebnis:

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

Weitere Beispiele finden Sie auf der [Demo-Seite](https://mdn.github.io/css-examples/counter-style-demo/) ([Code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Vorgefertigte Zählerstile

Finden Sie eine Sammlung von über 100 `counter-style`-Codefragmenten im Dokument [Vorgefertigte Zählerstile](https://www.w3.org/TR/predefined-counter-styles/). Dieses Dokument bietet Zähler, die die Anforderungen von Sprachen und Kulturen weltweit erfüllen.

Der [Counter styles converter](https://r12a.github.io/app-counters/) greift auf diese Liste zu, um Zählerstile zu testen und beispielhaften Code zu generieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)-Modul
