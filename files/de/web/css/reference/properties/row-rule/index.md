---
title: "`row-rule` CSS property"
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`row-rule`** legt die Breite, den Stil und die Farbe der Linien fest, die in mehrzeiligen Grid-, Flex- und mehrspaltigen Layouts zwischen den Zeilen gezeichnet werden.

{{InteractiveExample("CSS Demo: row-rule")}}

```css interactive-example-choice
row-rule: solid;
```

```css interactive-example-choice
row-rule: dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(3, dashed magenta 1px, outset green 5px);
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px, dashed magenta 5px),
  dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px),
  outset green 5px;
```

```html interactive-example
<section id="default-example">
  <ul id="example-element">
    <li>One fish</li>
    <li>Two fish</li>
    <li>Red fish</li>
    <li>Blue fish</li>
  </ul>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-flow: column;
  gap: 7px;
  text-align: left;
}
```

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("row-rule-width")}}

## Syntax

```css
/* One value */
row-rule: dotted;
row-rule: solid 8px;
row-rule: solid blue;
row-rule: thick inset blue;

/* Multiple values */
row-rule: groove, dashed, solid;
row-rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
row-rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
row-rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px);

/* Global values */
row-rule: inherit;
row-rule: initial;
row-rule: revert;
row-rule: revert-layer;
row-rule: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste von Werten angegeben. Jeder Wert kann einem der folgenden Werttypen entsprechen:

- `<gap-rule>`
  - : Besteht aus einem, zwei oder drei der unten aufgeführten Werte in beliebiger Reihenfolge.
    - `<'line-width'>`
      - : Ein {{cssxref("&lt;line-width&gt;")}}: eine positive {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`. Siehe {{cssxref("row-rule-width")}}.
    - `<'line-style'>`
      - : Ein {{cssxref("&lt;line-style&gt;")}}: einer der Werte `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` oder `outset`. Der Standardwert ist `none`. Siehe {{cssxref("row-rule-style")}}.
    - `<'color'>`
      - : Ein {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe der Linie angibt. Der Standardwert ist `currentcolor`. Siehe {{cssxref("row-rule-color")}}.

- `<gap-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit einem {{cssxref("&lt;integer&gt;")}} von mindestens `1` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Der `<integer>` legt fest, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<gap-auto-repeat-rule>`
  - : Eine {{cssxref("repeat()")}}-Funktion mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Die angegebene Liste der `<gap-rule>`-Werte wird so oft wiederholt, wie nötig ist, um Werte für alle Zeilenlinien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

## Beschreibung

Die Eigenschaft `row-rule` definiert den Linienstil für Linien, die in den Zwischenräumen zwischen Zeilen von [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Zeile gezeichnet werden.

`row-rule` ist eine Kurzschreibweise für {{cssxref("row-rule-color")}}, {{cssxref("row-rule-style")}} und {{cssxref("row-rule-width")}}. `row-rule` kann zusammen mit der Kurzschreibweise {{cssxref("column-rule")}} auch über die Kurzschreibweise {{cssxref("rule")}} festgelegt werden.

Der Eigenschaftswert ist eine kommagetrennte Liste von Bestandteilen, die Werte der Typen `<gap-rule>`, `<gap-repeat-rule>` und `<gap-auto-repeat-rule>` enthalten kann. Jeder `<gap-rule>`-Wert definiert Breite, Farbe und Stil einer oder mehrerer Linien.

Besteht der Eigenschaftswert nur aus einem `<gap-rule>`-Wert, erhalten alle Zeilenlinien diesen Stil. Bei der folgenden Deklaration haben alle Zeilenlinien den Wert `dashed red 3px`:

```css
row-rule: dashed red 3px;
```

Wenn mehrere `<gap-rule>`-Werte deklariert werden, werden sie in der angegebenen Reihenfolge auf die Zeilenlinien angewendet. Gibt es mehr Zwischenräume zwischen Zeilen als `<gap-rule>`-Werte, wird die Werteliste wiederholt, bis jeder Zeilenlinie ein Wert zugewiesen ist. Bei der folgenden Deklaration hat beispielsweise jede ungerade Linie den Wert `dashed red 3px` und jede gerade Linie den Wert `dotted blue 5px`:

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### Wiederholte Linienstile

Mit der Funktion `repeat()` und einer Ganzzahl von mindestens `1` als erstem Argument kann eine gültige Liste von CSS-Werten des Typs [`<gap-rule>`](#gap-rule), die als weitere Argumente übergeben wird, die angegebene Anzahl von Malen wiederholt werden. So lässt sich derselbe `<gap-rule>`-Wert mehrfach verwenden, ohne denselben CSS-Code mehrfach zu schreiben. Die folgenden Deklarationen sind gleichwertig:

```css
row-rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
row-rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

Dadurch entsteht eine Liste mit sieben Linienwerten. Wenn die Stil-Liste des `row-rule`-Werts mehr Einträge enthält, als es Zwischenräume zwischen den Zeilen gibt, werden die überzähligen Stilwerte ignoriert. Hat der Container, auf den dies angewendet wird, drei Zeilen, erhält die Linie im ersten Zwischenraum den Wert `solid red 5px` und die im zweiten den Wert `outset blue 10px`.

Gibt es mehr Zwischenräume als Stile, wird die Stil-Liste wiederholt. Hat der Container 8, 15, 22 oder 29 Zeilen, wird diese Stilfolge entsprechend ein-, zwei-, drei- oder viermal wiederholt; die letzte Linie erhält jeweils den Wert `inset green 1px`.

### Automatisch wiederholte Linienstile

Die Funktion `repeat()` akzeptiert als erstes Argument auch `auto` anstelle einer positiven Ganzzahl. Bei `auto` als erstem Argument werden die als weitere Argumente übergebenen Werte des Typs [`<gap-rule>`](#gap-rule) so oft wiederholt, wie nötig ist, um Werte für alle Linien bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind.

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In diesem Fall erhalten die erste und die letzte Zeilenlinie den Wert `solid red 5px`; alle anderen wechseln zwischen `dotted green 1px` und `dashed blue 1px`. Dabei spielt es keine Rolle, ob der Container 3, 6, 11, 16 oder 21 Zeilen hat: Im ersten und letzten Zwischenraum wird stets eine dicke, durchgezogene rote Linie gezeichnet (sofern {{cssxref("row-rule-visibility-items")}} nicht dazu führt, dass keine Linie gezeichnet wird). Alle anderen Zeilenlinien sind dünne, gepunktete grüne oder gestrichelte blaue Linien. Bei nur 2 oder 3 Zeilen gibt es keine gepunkteten oder gestrichelten Linien.

Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine automatische Wiederholung, die Werte für Zeilenlinien bereitstellt, denen sonst kein Wert aus anderen Teilen der Liste zugewiesen würde. Dadurch wird verhindert, dass die Liste zyklisch wiederholt wird. Ein `row-rule`-Wert darf höchstens ein `repeat(auto, <gap-rule>)` enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir einen einzigen Wert für die Linien zwischen Flex-Elementen.

#### HTML

Wir verwenden eine Liste dynamischer Sportduos:

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ul>
```

#### CSS

Wir legen die Liste als Flex-Container fest und erzeugen Zeilen, indem wir {{cssxref("flex-direction")}} mithilfe der Kurzschreibweise {{cssxref("flex-flow")}} auf `column` setzen. Mit einem {{cssxref("gap")}} von `5px` schaffen wir zwischen den Zeilen genügend Platz für die Linie mit dem Wert `3px dashed red`:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;

  row-rule: 3px red dashed;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "180")}}

### Wiederholte Werte

Dieses Beispiel zeigt, wie Werte wiederholt werden, wenn die Stil-Liste weniger Werte als Zeilenlinien enthält. Es zeigt außerdem die Standardwerte `medium`, `currentcolor` und `none` für Breite, Farbe beziehungsweise Stil.

#### CSS

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und geben vier kommagetrennte `<gap-rule>`-Werte als Wert für `row-rule` an. Beim ersten `<gap-rule>`-Wert lassen wir die Breite weg, beim zweiten die Farbe und beim dritten den Stil. Der vierte enthält alle drei Bestandteile:

```css live-sample___repeat
ul {
  row-rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

#### Ergebnis

{{EmbedLiveSample("Repeat", "", "180")}}

Die rote Linie ist `3px` breit, die gepunktete Linie hat dieselbe Farbe wie der Text und die `5px` breite blaue Linie erscheint nicht: Der Stil des dritten `<gap-rule>`-Werts ist standardmäßig `none`, sodass keine Linie gezeichnet wird.

### Verwendung der Funktion `repeat()`

Dieses Beispiel zeigt die Verwendung der Funktion `repeat()` innerhalb des Eigenschaftswerts von `row-rule`.

#### CSS

Wir verwenden dasselbe HTML und CSS wie in den vorherigen Beispielen. Mit einer `repeat()`-Funktion legen wir fest, dass die Liste aus zwei `<gap-rule>`-Werten dreimal wiederholt wird.

```css live-sample___func live-sample___auto
ul {
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

#### Ergebnis

{{EmbedLiveSample("func", "", "180")}}

Der Flex-Container hat sechs Zeilen und damit fünf Zwischenräume. Die Funktion `repeat()` wiederholt zwei Stilwerte dreimal und erzeugt so eine Liste mit sechs Stilwerten. Da es weniger Zwischenräume als `<gap-rule>`-Werte gibt, werden die überzähligen Werte am Ende der Liste verworfen.

### Verwendung von `auto` innerhalb von `repeat()`

Dieses Beispiel zeigt, wie Sie in der Funktion `repeat()` das Argument `auto` anstelle einer Ganzzahl verwenden.

#### CSS

Mit `repeat(auto, <gap-rule>)` setzen wir alle Zeilenlinien auf `1px dotted`, wobei standardmäßig die aktuelle Farbe verwendet wird. Ausgenommen sind die erste und die letzte Linie, die wir auf `3px solid red` setzen.

```css live-sample___auto
ul {
  row-rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

#### Ergebnis

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule: thin, thick) {
    body::before {
      content: "Your browser doesn't support the row-rule property";
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

- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-width")}}
- {{cssxref("row-rule-style")}}
- Kurzschreibweise {{cssxref("column-rule")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Zwischenräume](/de/docs/Web/CSS/Guides/Gaps)
