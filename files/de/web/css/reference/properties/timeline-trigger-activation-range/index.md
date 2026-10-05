---
title: CSS-Eigenschaft timeline-trigger-activation-range
short-title: timeline-trigger-activation-range
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`timeline-trigger-activation-range`** legt den Anfang und das Ende des Aktivierungsbereichs eines Triggers für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-activation-range-end")}}

## Syntax

```css
/* Keyword */
timeline-trigger-activation-range: normal;

/* Range start only */
/* Offset only */
timeline-trigger-activation-range: 40%;
timeline-trigger-activation-range: 200px;
/* Named timeline only */
timeline-trigger-activation-range: contain;
timeline-trigger-activation-range: entry;
/* Named timeline and offset value */
timeline-trigger-activation-range: exit 50%;
timeline-trigger-activation-range: contain 150px;

/* Range start and end */
timeline-trigger-activation-range: 20% 80%;
timeline-trigger-activation-range: entry exit;
timeline-trigger-activation-range: normal 20%;
timeline-trigger-activation-range: 20% normal;
/* Offset on start only */
timeline-trigger-activation-range: entry 10% 90%;
/* Offset on end only */
timeline-trigger-activation-range: 200px exit 300px;
/* Named timeline and offset for both start and end */
timeline-trigger-activation-range: entry 0% exit 50%;
timeline-trigger-activation-range: contain 100px contain 90%;

/* Multiple ranges */
timeline-trigger-activation-range:
  contain,
  entry 0% exit 50%;

/* Global values */
timeline-trigger-activation-range: inherit;
timeline-trigger-activation-range: initial;
timeline-trigger-activation-range: revert;
timeline-trigger-activation-range: revert-layer;
timeline-trigger-activation-range: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste von Animationsbereichen angegeben. Jeder Animationsbereich besteht aus einem Wert für {{cssxref("timeline-trigger-activation-range-start")}} und optional einem Wert für {{cssxref("timeline-trigger-activation-range-end")}}.

- `<'timeline-trigger-activation-range-start'>`
  - : Das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, ein {{cssxref("timeline-range-name")}} oder ein `<timeline-range-name>` gefolgt von einem `<length-percentage>`. Dieser Wert gibt {{cssxref("timeline-trigger-activation-range-start")}} an. Wird ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt, ist der Standardwert für `<length-percentage>` `0%`.
- `<'timeline-trigger-activation-range-end'>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name>` gefolgt von einem `<length-percentage>`. Dieser Wert gibt {{cssxref("timeline-trigger-activation-range-end")}} an. Wird ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt, ist der Standardwert für `<length-percentage>` `100%`.

Prozentwerte beziehen sich auf die Länge des benannten Timeline-Bereichs, sofern einer angegeben ist. Andernfalls beziehen sie sich auf die durch `normal` repräsentierte Timeline.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-activation-range` können Sie den Anfang oder sowohl den Anfang als auch das Ende des Aktivierungsbereichs eines Triggers ausdrücklich festlegen. Die Eigenschaft setzt {{cssxref("timeline-trigger-activation-range-start")}} und {{cssxref("timeline-trigger-activation-range-end")}} in einer einzigen Deklaration. Beide Werte können als Timeline-Bereich, als Versatz oder als Kombination aus beidem angegeben werden. Der Versatz für Anfang und Ende wird jeweils vom Anfang des zugehörigen Bereichs aus gemessen. Wird nur der Wert für `timeline-trigger-activation-range-start` angegeben, erhält `timeline-trigger-activation-range-end` den Standardwert `normal`. Dieser entspricht je nach Wert von {{cssxref("timeline-trigger-source")}} entweder `contain 100%` oder `scroll 100%`.

Der Aktivierungsbereich eines Triggers ist der Bereich entlang des zugehörigen Scrollports, in dem ein Trigger für eine [scrollgesteuerte CSS-Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) aktiviert wird. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt. Die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt.

Der Standardwert ist `normal`. Damit wird der Aktivierungsbereich auf den standardmäßigen benannten Bereich gesetzt. Dieser hängt von {{cssxref("timeline-trigger-source")}} ab: Bei einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) entspricht er `cover`, bei einer [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) entspricht er `scroll`. Die Standardversätze sind `0%` für den Anfang und `100%` für das Ende des Aktivierungsbereichs. Somit entspricht `normal` entweder `cover 0% cover 100%` oder `scroll 0% scroll 100%`.

Mit anderen Werten für `timeline-trigger-activation-range` können Sie Folgendes festlegen:

- Versätze für Anfang und Ende relativ zum Bereich `normal`
  - : Ein `<length>`- oder `<percentage>`-Wert gibt einen Versatz vom Anfang der Timeline `normal` an. Deren Standardwert ist wiederum [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) für eine `view()`-Progress-Timeline als Quelle und [`scroll`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) für eine `scroll()`-Progress-Timeline als Quelle. Negative Werte verschieben Anfang und Ende nach außen und verlängern so den Aktivierungsbereich. Positive Werte verschieben sie nach innen und verkürzen ihn.
- Bestimmte benannte Bereiche
  - : Wird ein `<timeline-range-name>`-Wert ohne Versatz festgelegt, beträgt der Standardversatz `0%` für den Anfang und `100%` für das Ende. Zu den benannten Timeline-Bereichen gehören `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` und `scroll`. Weitere Informationen finden Sie unter [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Versätze relativ zu bestimmten benannten Bereichen
  - : Werden für den Anfang oder das Ende sowohl ein `<timeline-range-name>` als auch ein `<length>`- oder `<percentage>`-Wert angegeben, ist der Wert ein Längen- oder Prozentversatz vom Anfang des benannten Bereichs. Prozentwerte beziehen sich auf die gesamte Länge des angegebenen benannten Bereichs. Weitere Informationen finden Sie unter [Einzüge mithilfe von Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

In jedem Bestandteil eines `timeline-trigger-activation-range`-Werts muss der `<timeline-range-name>`-Wert vor dem `<length>`- oder `<percentage>`-Versatz stehen. Im folgenden Beispiel könnte man annehmen, dass `timeline-trigger-activation-range-start` auf `contain` und `timeline-trigger-activation-range-end` auf `50%` gesetzt wird. Das ist jedoch nicht der Fall: `timeline-trigger-activation-range-start` wird auf `contain 50%` gesetzt, während `timeline-trigger-activation-range-end` den Standardwert `normal` erhält:

```css
timeline-trigger-activation-range: contain 50%;
```

Um `timeline-trigger-activation-range-start` auf `contain` und `timeline-trigger-activation-range-end` auf `50%` zu setzen, geben Sie `0%` als standardmäßigen Anfangsversatz ausdrücklich an:

```css
timeline-trigger-activation-range: contain 0% 50%;
```

Standardmäßig entspricht der aktive Bereich dem Aktivierungsbereich. Soll der aktive Bereich länger sein als der Aktivierungsbereich, verwenden Sie die Eigenschaften {{cssxref("timeline-trigger-active-range-start")}} und {{cssxref("timeline-trigger-active-range-end")}} oder die Kurzschreibweise {{cssxref("timeline-trigger-active-range")}}. Das ist nützlich, wenn Sie eine Animation in einem kleinen Aktivierungsbereich auslösen, den Trigger aber über einen größeren Bereich hinweg aktiv halten möchten.

Die Eigenschaft `timeline-trigger-activation-range` kann zusammen mit {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-active-range")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Explizite Werte und Standardwerte für `timeline-trigger-activation-range`

Hinsichtlich expliziter Werte und Standardwerte funktioniert `timeline-trigger-activation-range` genauso wie die Eigenschaft {{cssxref("animation-range")}}. Weitere Informationen finden Sie unter:

- [Anfang und Ende des Bereichs ausdrücklich mit zwei Werten festlegen](/de/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values)
- [Den Anfang des Bereichs festlegen und für das Ende den Standardwert verwenden](/de/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end)

### Mehrere Bereiche angeben

Werden in einer kommagetrennten `timeline-trigger-activation-range`-Deklaration mehrere Werte angegeben, gilt jeder Wert für einen Timeline-Trigger, und zwar in der Reihenfolge, in der die Namen in der Eigenschaft {{cssxref("timeline-trigger-name")}} stehen. Stimmen die Anzahl der Trigger und die Anzahl der `timeline-trigger-activation-range`-Werte nicht überein, werden die Werte wie bei [mehreren Werten für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) angewendet:

- Gibt es mehr `timeline-trigger-activation-range`-Werte als `timeline-trigger-name`-Werte, werden die überzähligen Bereichswerte verworfen.
- Gibt es mehr Triggernamen als Bereiche, werden die `timeline-trigger-activation-range`-Werte wiederholt, bis jedem `timeline-trigger-name`-Wert ein `timeline-trigger-activation-range`-Wert zugewiesen ist.
- Sind mehrere `timeline-trigger-name`-Werte, aber nur ein `timeline-trigger-activation-range`-Wert festgelegt, gilt dieser für alle `timeline-trigger-name`-Werte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verkleinern wir den Aktivierungsbereich eines Triggers für eine scrollgesteuerte Animation, indem wir einen eigenen Wert für `timeline-trigger-activation-range` festlegen.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente – eines, das animiert werden soll, und eines, an dem ein Trigger erstellt wird – sowie Text, damit die Seite scrollbar ist. Der Textinhalt ist hier der Kürze halber ausgeblendet.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

...
```

```html hidden live-sample___basic-example live-sample___compare-multiple-values
<div class="animated">I am animated</div>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<div class="trigger">I create the trigger</div>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>
```

#### CSS

Die Eigenschaft {{cssxref("position")}} des Elements `.animated` wird auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass wir sehen können, wann seine Animation beginnt und endet.

```css hidden live-sample___basic-example live-sample___compare-multiple-values
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
}

div {
  height: 100px;
  border: 5px solid black;
}

.animated {
  width: 100px;
  background: orange;
}

.trigger {
  background: wheat;
}
```

```css live-sample___basic-example live-sample___compare-multiple-values
.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Als Nächstes definieren wir die {{cssxref("@keyframes")}} für eine `rotate`-Animation:

```css live-sample___basic-example live-sample___compare-multiple-values
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

Über die Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf das Element `.animated` angewendet. Ohne zugehörigen Trigger würde die Animation des Elements beim Laden der Seite beginnen. Durch die Eigenschaft `animation-trigger` wird sie zu einer durch einen Trigger gesteuerten Animation. Der Wert verweist auf einen `timeline-trigger-name` mit dem Wert `--t` und gibt zwei `<animation-action>`-Werte an: `play` und `pause`. Diese legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung pausiert wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das Element `.animated` mithilfe der folgenden Eigenschaften:

- Ein {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner, auf den im Wert der Eigenschaft `animation-trigger` des Elements `.animated` verwiesen wird, und verknüpft so die beiden Elemente.
- Ein {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Damit wird der Timeline-Trigger als View-Progress-Timeline festgelegt, deren Quelle der nächstgelegene scrollbare Vorfahre des Elements ist.
- Ein `timeline-trigger-activation-range` mit dem Wert `entry 50% exit 50%`. Der Bereich `entry` reicht von dem Moment, in dem das Trigger-Element beginnt, in den Scrollport einzutreten, bis es vollständig eingetreten ist. Der Bereich `exit` reicht von dem Moment, in dem das Trigger-Element beginnt, den Scrollport zu verlassen, bis es ihn vollständig verlassen hat. Durch diesen Wert beginnt der Aktivierungsbereich des Triggers bei `50%` des Bereichs `entry` und endet bei `50%` des Bereichs `exit`.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 50%;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben und unten. Die Animation beginnt abzuspielen, sobald `50%` des beobachteten Elements `.trigger` aus einer der beiden Richtungen in den Scrollport eingetreten sind. Sie pausiert, sobald `50%` des Trigger-Elements den Scrollport an einer der beiden Seiten verlassen haben.

### Mehrere Bereichswerte vergleichen

Dieses Beispiel entspricht dem vorherigen, ermöglicht aber die Auswahl verschiedener Aktivierungsbereiche, um deren Auswirkungen zu vergleichen.

Das Markup entspricht dem vorherigen Beispiel, außer dass ein {{htmlelement("select")}}-Element hinzugefügt wurde, mit dem sich der Wert von `timeline-trigger-activation-range` ändern lässt. Wird ein neuer Wert ausgewählt, wird er mithilfe von JavaScript auf das Trigger-Element angewendet. HTML und JavaScript sind hier der Kürze halber ausgeblendet.

```html hidden live-sample___compare-multiple-values
<form>
  <label for="range-select">Select activation range</label>
  <select id="range-select">
    <optgroup label="Start value">
      <option>40%</option>
      <option>200px</option>
      <option>contain</option>
      <option selected>cover</option>
      <option>entry</option>
      <option>exit 50%</option>
      <option>contain 150px</option>
    </optgroup>
    <optgroup label="Start and end value">
      <option>20% 80%</option>
      <option>entry exit</option>
      <option>normal 20%</option>
      <option>20% normal</option>
      <option>contain contain 40%</option>
      <option>200px exit 300px</option>
      <option>entry 10% 90%</option>
      <option>entry 0% exit 50%</option>
      <option>contain 100px contain 90%</option>
    </optgroup>
  </select>
</form>
```

```js hidden live-sample___compare-multiple-values
const selectElem = document.querySelector("select");
const triggerElem = document.querySelector(".trigger");

selectElem.addEventListener("change", () => {
  triggerElem.style.timelineTriggerActivationRange = selectElem.value;
});
```

#### CSS

Das CSS entspricht dem vorherigen Beispiel, allerdings wurde der Wert für `timeline-trigger-activation-range` weggelassen. Bis ein Bereichswert ausgewählt wird, gilt daher der Standardwert `normal`, der in diesem Fall `cover 0% cover 100%` entspricht.

```css hidden live-sample___compare-multiple-values
form {
  width: 250px;
  padding: 5px;
  border: 2px solid black;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
}

label,
select {
  font-size: 1rem;
}

select {
  padding: 5px;
  margin-top: 5px;
  width: 100%;
}
```

```css live-sample___compare-multiple-values
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}

.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

```css hidden live-sample___basic-example live-sample___compare-multiple-values
@supports not (timeline-trigger-activation-range: entry 50% exit 50%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-activation-range property.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("compare-multiple-values", "100%", "240")}}

Wählen Sie verschiedene Bereichswerte aus und scrollen Sie dann das beobachtete Element im Scrollport nach oben und unten. So sehen Sie, wo das animierte Element seine Drehung beginnt und beendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-active-range")}}
- Kurzschreibweise {{cssxref("timeline-trigger")}}
- {{cssxref("trigger-scope")}}
- Typ {{cssxref("animation-action")}}
- [Scrollgesteuerte CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
