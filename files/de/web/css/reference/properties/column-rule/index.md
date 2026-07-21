---
title: CSS-Eigenschaft `column-rule`
short-title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

Die CSS-Kurzschreibweise **`column-rule`** legt die Breite, den Stil und die Farbe der Linien fest, die zwischen Spalten in mehrspaltigen Gitter-, Flex- und Mehrspalten-Layouts gezeichnet werden.

{{InteractiveExample("CSS Demo: column-rule")}}

```css interactive-example-choice
column-rule: solid;
```

```css interactive-example-choice
column-rule: groove 0.8em teal;
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(3, dashed pink 1px, outset olive 5px);
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(auto, dashed pink 1px, dashed pink 5px),
  dotted thick teal;
```

```css interactive-example-choice
column-rule:
  dashed medium olive,
  repeat(auto, dotted pink 1px),
  inset orange 5px;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Lady Catnip sitting in Lincoln's Inn Hall. Nice May weather. As much
    mud in the streets as if the waters had but newly retired from the face of
    the earth, and it would not be great to meet a Fred, two feet long or so,
    waddling like an iguana up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 7;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

## Syntax

```css
/* One value */
column-rule: dashed;
column-rule: inset 8px;
column-rule: solid teal;
column-rule: thick outset rgb(18 122 67);

/* Multiple values */
column-rule: groove, dashed, solid;
column-rule:
  dotted medium teal,
  dashed pink 0.5em,
  outset olive 1px;
column-rule:
  solid #0ff,
  repeat(3, dashed pink 1px, outset olive 5px);
column-rule:
  inset 3px yellow,
  repeat(auto, dashed pink 1px, groove olive 5px);

/* Global values */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### Werte

Die Eigenschaft `column-rule` akzeptiert eine durch Kommata getrennte Liste von Werten, einschließlich:

- `<gap-rule>`
  - : Angegeben als einer, zwei oder drei der unten aufgeführten Werte, in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` oder ein positiver {{cssxref("length")}}-Wert sein, der die Breite der Linie darstellt. Der Standardwert ist `medium`.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: einer von `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("column-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie darstellt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("column-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit einem {{cssxref("&lt;integer&gt;")}} von `1` oder mehr als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als folgenden Argumenten. Das `<integer>` gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion, mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als folgenden Argumenten. Die bereitgestellte Liste der `<gap-rule>`-Werte wird so oft wiederholt, wie nötig, um Werte für alle Spaltenregel zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswertes angegeben werden.

## Beschreibung

Die Eigenschaft `column-rule` definiert den Linienstil von Regeln, die in den Lücken zwischen Spalten in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern mit mehr als einer Spalte gezeichnet werden.

Die `column-rule` ist eine Kurzschreibweise für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} und {{cssxref("column-rule-width")}}. Die `column-rule`, zusammen mit der Kurzschreibweise {{cssxref("row-rule")}}, kann auch mit der Kurzschreibweise {{cssxref("rule")}} gesetzt werden.

Der Eigenschaftswert ist eine durch Kommata getrennte Liste von Komponenten, die die Typen `<gap-rule>`, `<gap-repeat-rule>` und `<gap-auto-repeat-rule>` enthalten kann. Jede `<gap-rule>` definiert die Breite, Farbe und den Stil einer oder mehrerer Linienregeln.

Wenn der Eigenschaftswert nur eine `<gap-rule>` enthält, haben alle Spaltenregeln diesen Stil. Wenn wir folgendes deklarieren, haben alle Spaltenregeln `dashed maroon 3px`:

```css
column-rule: dashed maroon 3px;
```

Wenn mehr als eine `<gap-rule>` deklariert wird, werden sie in der angegebenen Reihenfolge auf Spaltenregeln angewendet. Wenn es mehr Trennlinien zwischen Spalten als `<gap-rule>`-Werte gibt, wird die Liste der Werte wiederholt, bis jede Spaltenregel eine Lücke hat. Wenn wir beispielsweise das folgende deklarieren, wird jede ungerade Regel `dashed maroon 3px` und jede gerade Regel `dotted navy 5px` sein.

```css
column-rule:
  dashed maroon 3px,
  dotted navy 5px;
```

### Wiederholende Linienstile

Die `repeat()`-Funktion, mit einem Integer von `1` oder mehr als erstem Argument, kann verwendet werden, um eine gültige Liste von CSS-[`<gap-rule>`](#gap-rule)-Werten die als folgende Argumente angegeben werden, die angegebene Anzahl an Malen zu wiederholen. Dadurch kann dasselbe `<gap-rule>` eine festgelegte Anzahl von Malen wiederholt werden, ohne dass dieselbe CSS mehrfach wiederholt wird. Die folgenden Deklarationen sind äquivalent:

```css
column-rule:
  solid maroon 5px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px;
column-rule:
  solid maroon 5px,
  repeat(3, outset navy 10px, inset olive 1px);
```

Dies erzeugt eine Liste von sieben Regeln. Wenn die Anzahl der Stile in der Stil-Liste des `column-rule`-Werts die Anzahl der Lücken zwischen den Spalten übersteigt, werden die überschüssigen Stilwerte ignoriert. Wenn der Container, auf den dies angewendet wird, drei Spalten hat, wird die Regel in der ersten Spalte `solid maroon 5px` sein und die zweite `outset navy 10px`.

Wenn es mehr Lücken als Stile gibt, wird die Liste der Stile wiederholt. Wenn der Container 8, 15, 22 oder 29 Spalten hat, wird diese Abfolge von Stilen eins, zwei, drei oder vier Mal entsprechend wiederholt, wobei die letzte Regel `inset olive 1px` sein wird.

### Automatisches Wiederholen von Linienstilen

Die `repeat()`-Funktion akzeptiert auch `auto` als erstes Argument anstelle eines positiven Integers. Mit `auto` als erstem Argument werden die [`<gap-rule>`](#gap-rule)-Werte, die als folgende Argumente angegeben werden, so oft wiederholt, wie nötig, um Werte für alle Regeln zu füllen, die nicht explizit von anderen Komponenten des Eigenschaftswerts angegeben werden.

```css
column-rule:
  solid maroon 5px,
  repeat(auto, dotted olive 1px, dashed navy 1px),
  solid maroon 5px;
```

In diesem Fall werden die erste und letzte Spaltenregel `solid maroon 5px` sein, und alle anderen werden zwischen `dotted olive 1px` und `dashed navy 1px` alternieren. Es spielt keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Spalten hat; die ersten und letzten Abstände haben immer eine dicke, solide kastanienbraune Linie (es sei denn, {{cssxref("column-rule-visibility-items")}} führt dazu, dass keine Linie gezeichnet wird), und alle anderen Spaltenregeln werden dünne, gepunktete olivgrüne oder gestrichelte marineblaue Linien sein. Wenn es nur 2 oder 3 Spalten gibt, werden keine gepunkteten oder gestrichelten Linien vorhanden sein.

Das `auto`-Schlüsselwort innerhalb der `repeat()`-Funktion erzeugt einen automatischen Wiederholer, der Werte für Spaltenregeln füllt, die sonst keine Werte von anderen Teilen der Liste erhalten würden, und verhindert, dass die Liste zyklisch wird. Höchstens kann nur ein `repeat(auto, <gap-rule>)` in einem `column-rule`-Wert vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir eine einzige Regel für die Linien, die zwischen Flex-Elementen gezeichnet werden.

#### HTML

Wir fügen eine Liste von Autoren ein:

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Kimberlé Crenshaw</li>
  <li>Angela Y. Davis</li>
  <li>Bernardine Evaristo</li>
  <li>Audre Lorde</li>
  <li>Cathy Park Hong</li>
  <li>Zoya Patel</li>
  <li>Juno Mac</li>
  <li>Molly Smith</li>
  <li>Tara Westover</li>
</ul>
```

#### CSS

Wir definieren, dass die Liste ein Flex-Container ist, indem wir Spalten durch Setzen von {{cssxref("flex-direction")}} auf `row` mit der Kurzschreibweise {{cssxref("flex-flow")}} erstellen. Wir fügen eine {{cssxref("gap")}} von `12px` hinzu, um genügend Platz zwischen den Spalten für unsere `10px groove maroon`-Regel zu schaffen:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 12px;
  list-style-type: none;

  column-rule: 10px groove maroon;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "180")}}

### Wiederholen von Werten

Dieses Beispiel demonstriert, wie die Werte wiederholt werden, wenn es in der Liste der Stile mehr Spaltenregeln als Werte gibt. Es zeigt auch die Standardwerte für die Breite, Farbe und den Stil `medium`, `currentcolor` und `none` entsprechend.

Mit dem gleichen HTML und CSS wie im vorherigen Beispiel fügen wir vier durch Kommata getrennte `<gap-rule>`-Werte als `column-rule`-Wert hinzu, wobei die Breite im ersten `<gap-rule>`, die Farbe im zweiten und der Stil im dritten weggelassen werden, wobei das vierte alle drei Komponenten enthält:

```css live-sample___repeat
ul {
  column-rule:
    maroon dashed,
    1px dotted,
    5px teal,
    10px orange solid;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

Die kastanienbraune Linie ist `3px` breit. Die gepunktete Linie ist in derselben Farbe wie der Text. Es gibt keine türkisfarbenen Linien, da der `<line-style>` des dritten `<gap-rule>` standardmäßig `none` ist, wird keine Linie gezeichnet. Es gibt mehr Abstände als `<gap-rule>`-Werte, daher wird die Liste der Werte wiederholt.

### Verwenden der `repeat()`-Funktion

Dieses Beispiel zeigt die Verwendung der `repeat()`-Funktion innerhalb des `column-rule`-Eigenschaftswerts. Wir verwenden das gleiche HTML und CSS wie in den vorherigen Beispielen. Wir fügen eine `repeat()`-Funktion hinzu und setzen die Liste von zwei `<gap-rule>`-Werten auf viermalige Wiederholung.

```css live-sample___func live-sample___auto
ul {
  column-rule:
    10px maroon dashed,
    repeat(4, dotted olive 3px, dashed teal 3px),
    10px maroon dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat neun Spalten, also acht Abstände. Die `repeat()`-Funktion wiederholt zwei Stilwerte viermal, wodurch eine Liste von zehn `<gap-rule>`-Werten entsteht. Da es weniger Spaltenabstände als gesamte `<gap-rule>`-Werte gibt, werden die letzten beiden Werte in der Liste verworfen.

### Verwenden von `auto` innerhalb von `repeat()`

Dieses Beispiel demonstriert die Verwendung des `auto`-Arguments anstelle eines Integers in der `repeat()`-Funktion.

Mit `repeat(auto, <gap-rule>)` setzen wir alle Spaltenregeln auf `1px dotted` und standardmäßig auf die aktuelle Farbe, außer die erste und letzte, die wir auf `10px groove maroon` setzen.

```css live-sample___auto
ul {
  column-rule:
    10px groove maroon,
    repeat(auto, 3px dotted maroon),
    10px groove maroon;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule: thin, thick) {
    body::before {
      content: "Your browser doesn't support multiple values for the column-rule property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule")}} Kurzschreibweise
- {{cssxref("rule")}} Kurzschreibweise
- [CSS Gaps](/de/docs/Web/CSS/Guides/Gaps) Modul
