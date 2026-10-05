---
title: CSS-Eigenschaft `column-rule`
short-title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`column-rule`** legt die Breite, den Stil und die Farbe der Linien fest, die in mehrspaltigen, Grid- und Flex-Layouts zwischen Spalten gezeichnet werden.

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

## Zugehörige Eigenschaften

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

Diese Eigenschaft wird als kommagetrennte Liste von Werten angegeben. Jeder Wert kann einem der folgenden Werttypen entsprechen:

- `<gap-rule>`
  - : Besteht aus einem, zwei oder drei der unten aufgeführten Werte, in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}-Wert: Dies kann eines der Schlüsselwörter `thin`, `medium` oder `thick` oder ein positiver {{cssxref("length")}}-Wert sein und gibt die Breite der Linie an. Der Standardwert ist `medium`.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}-Wert: einer der Werte `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("column-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie angibt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("column-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}}-Wert von `1` oder größer als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Der `<integer>`-Wert gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Die angegebene Liste von `<gap-rule>`-Werten wird so oft wiederholt, wie nötig ist, um Werte für alle Spaltenlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `column-rule` definiert den Linienstil aller Trennlinien, die in den Zwischenräumen zwischen Spalten in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- und [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Spalte gezeichnet werden.

`column-rule` ist eine Kurzschreibweise für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} und {{cssxref("column-rule-width")}}. `column-rule` kann zusammen mit der Kurzschreibweise {{cssxref("row-rule")}} auch über die Kurzschreibweise {{cssxref("rule")}} festgelegt werden.

Der Eigenschaftswert ist eine kommagetrennte Liste von Bestandteilen, die Werte der Typen `<gap-rule>`, `<gap-repeat-rule>` und `<gap-auto-repeat-rule>` enthalten kann. Jeder `<gap-rule>`-Wert definiert die Breite, Farbe und den Stil einer oder mehrerer Trennlinien.

Besteht der Eigenschaftswert nur aus einem `<gap-rule>`-Wert, erhalten alle Spaltenlinien diesen Stil. Bei der folgenden Deklaration haben alle Spaltenlinien den Wert `dashed maroon 3px`:

```css
column-rule: dashed maroon 3px;
```

Werden mehrere `<gap-rule>`-Werte angegeben, gelten sie für die Spaltenlinien in der angegebenen Reihenfolge. Gibt es zwischen den Spalten mehr Zwischenräume als `<gap-rule>`-Werte, wird die Werteliste wiederholt, bis jede Spaltenlinie einen Wert erhält. Bei der folgenden Deklaration hat beispielsweise jede ungerade Trennlinie den Wert `dashed maroon 3px` und jede gerade Trennlinie den Wert `dotted navy 5px`.

```css
column-rule:
  dashed maroon 3px,
  dotted navy 5px;
```

### Wiederholte Linienstile

Mit der Funktion `repeat()` und einer Ganzzahl von `1` oder größer als erstem Argument lässt sich eine gültige Liste von CSS-[`<gap-rule>`](#gap-rule)-Werten, die als weitere Argumente übergeben werden, die angegebene Anzahl von Malen wiederholen. So kann derselbe `<gap-rule>`-Wert mehrfach verwendet werden, ohne denselben CSS-Code mehrfach anzugeben. Die folgenden Deklarationen sind gleichwertig:

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

Dadurch entsteht eine Liste mit sieben Trennlinienwerten. Wenn die Anzahl der Stile in der Stilliste des `column-rule`-Werts die Anzahl der Zwischenräume zwischen den Spalten übersteigt, werden die überschüssigen Stilwerte ignoriert. Hat der Container, auf den dies angewendet wird, drei Spalten, erhält die Trennlinie im ersten Zwischenraum den Wert `solid maroon 5px` und die im zweiten den Wert `outset navy 10px`.

Gibt es mehr Zwischenräume als Stile, wird die Stilliste wiederholt. Hat der Container 8, 15, 22 oder 29 Spalten, wird diese Stilfolge entsprechend ein-, zwei-, drei- oder viermal wiederholt. Die letzte Trennlinie erhält dabei den Wert `inset olive 1px`.

### Automatisch wiederholte Linienstile

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Mit `auto` als erstem Argument werden die als weitere Argumente übergebenen [`<gap-rule>`](#gap-rule)-Werte so oft wiederholt, wie nötig ist, um Werte für alle Trennlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
column-rule:
  solid maroon 5px,
  repeat(auto, dotted olive 1px, dashed navy 1px),
  solid maroon 5px;
```

In diesem Fall erhalten die erste und die letzte Spaltenlinie den Wert `solid maroon 5px`; alle übrigen wechseln zwischen `dotted olive 1px` und `dashed navy 1px`. Dabei spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Spalten hat: Im ersten und letzten Zwischenraum wird stets eine dicke, durchgezogene kastanienbraune Linie gezeichnet (es sei denn, {{cssxref("column-rule-visibility-items")}} bewirkt, dass keine Linie gezeichnet wird). Alle anderen Spaltenlinien sind dünne, gepunktete olivgrüne oder gestrichelte marineblaue Linien. Bei nur 2 oder 3 Spalten gibt es keine gepunkteten oder gestrichelten Linien.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Werte für Spaltenlinien ergänzt, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden. Dadurch wird verhindert, dass die Liste erneut von vorn durchlaufen wird. Ein `column-rule`-Wert darf höchstens ein `repeat(auto, <gap-rule>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir einen einzelnen Wert für die Linien zwischen Flex-Elementen.

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

Wir definieren die Liste als Flex-Container und erzeugen Spalten, indem wir {{cssxref("flex-direction")}} über die Kurzschreibweise {{cssxref("flex-flow")}} auf `row` setzen. Mit einem {{cssxref("gap")}} von `12px` schaffen wir zwischen den Spalten genügend Platz für die Trennlinie mit dem Wert `10px groove maroon`:

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

### Wiederholte Werte

Dieses Beispiel zeigt, wie Werte wiederholt werden, wenn die Stilliste weniger Werte als Spaltenlinien enthält. Es zeigt außerdem die Standardwerte `medium`, `currentcolor` und `none` für Breite, Farbe beziehungsweise Stil.

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben vier kommagetrennte `<gap-rule>`-Werte als Wert für `column-rule` an. Beim ersten `<gap-rule>`-Wert lassen wir die Breite weg, beim zweiten die Farbe und beim dritten den Stil. Der vierte enthält alle drei Bestandteile:

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

Die kastanienbraune Linie ist `3px` breit. Die gepunktete Linie hat dieselbe Farbe wie der Text. Es gibt keine blaugrünen Linien, da der `<line-style>`-Wert des dritten `<gap-rule>`-Werts standardmäßig `none` ist und deshalb keine Linie gezeichnet wird. Da es mehr Zwischenräume als `<gap-rule>`-Werte gibt, wird die Werteliste wiederholt.

### Verwendung der Funktion `repeat()`

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` im Wert der Eigenschaft `column-rule`. Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Mit einer `repeat()`-Funktion legen wir fest, dass die Liste aus zwei `<gap-rule>`-Werten viermal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  column-rule:
    10px maroon dashed,
    repeat(4, dotted olive 3px, dashed teal 3px),
    10px maroon dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat neun Spalten und damit acht Zwischenräume. Die Funktion `repeat()` wiederholt zwei Stilwerte viermal und erzeugt so eine Liste mit zehn `<gap-rule>`-Werten. Da es weniger Spaltenzwischenräume als `<gap-rule>`-Werte gibt, werden die letzten beiden Werte der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt die Verwendung des Arguments `auto` anstelle einer Ganzzahl in der Funktion `repeat()`.

Mit `repeat(auto, <gap-rule>)` setzen wir alle Spaltenlinien auf `1px dotted`, wobei standardmäßig die aktuelle Farbe verwendet wird. Die erste und die letzte Spaltenlinie setzen wir stattdessen auf `10px groove maroon`.

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
- Kurzschreibweise {{cssxref("row-rule")}}
- Kurzschreibweise {{cssxref("rule")}}
- [CSS-Zwischenräume definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Zwischenräume](/de/docs/Web/CSS/Guides/Gaps)
