---
title: CSS-Eigenschaft timeline-trigger-activation-range
short-title: timeline-trigger-activation-range
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Die **`timeline-trigger-activation-range`**-[CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt den Anfang und das Ende des Aktivierungsbereichs eines Triggers für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

## Einzelne Eigenschaften

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
  - : Das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, ein {{cssxref("timeline-range-name")}} oder ein `<timeline-range-name>` gefolgt von einem `<length-percentage>`. Der Wert gibt {{cssxref("timeline-trigger-activation-range-start")}} an. Wird ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt, ist der Standardwert für `<length-percentage>` `0%`.
- `<'timeline-trigger-activation-range-end'>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name>` gefolgt von einem `<length-percentage>`. Der Wert gibt {{cssxref("timeline-trigger-activation-range-end")}} an. Wird ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt, ist der Standardwert für `<length-percentage>` `100%`.

Prozentwerte beziehen sich auf die Länge des benannten Timeline-Bereichs, falls einer angegeben ist. Andernfalls beziehen sie sich auf die durch `normal` bezeichnete Timeline.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-activation-range` können Sie den Anfang oder den Anfang und das Ende des Aktivierungsbereichs eines Triggers ausdrücklich festlegen. Die Eigenschaft legt {{cssxref("timeline-trigger-activation-range-start")}} und {{cssxref("timeline-trigger-activation-range-end")}} in einer einzigen Deklaration fest. Beide Werte können als Timeline-Bereich, Versatz oder Kombination aus beidem angegeben werden. Sowohl der Anfangs- als auch der Endversatz wird vom Anfang des jeweiligen Bereichs aus gemessen. Wenn nur ein Wert für `timeline-trigger-activation-range-start` angegeben wird, erhält `timeline-trigger-activation-range-end` den Standardwert `normal`. Dieser entspricht je nach Wert von {{cssxref("timeline-trigger-source")}} entweder `contain 100%` oder `scroll 100%`.

Der Aktivierungsbereich eines Triggers ist der Bereich entlang des zugehörigen Scrollports, innerhalb dessen der Trigger einer [CSS-Animation mit Scroll-Trigger](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) aktiviert wird. Die Aktivierung erfolgt, wenn das verfolgte Element in den _Aktivierungsbereich_ eintritt; die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt.

Der Standardwert ist `normal`. Damit wird der Aktivierungsbereich auf den standardmäßig benannten Bereich gesetzt. Welcher benannte Bereich als Standard gilt, hängt von {{cssxref("timeline-trigger-source")}} ab: Bei einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) entspricht er `cover`, bei einer [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `scroll`. Die Standardwerte für die Versätze sind `0%` für den Anfang und `100%` für das Ende der Aktivierung. Daher wird `normal` entweder zu `cover 0% cover 100%` oder zu `scroll 0% scroll 100%` aufgelöst.

Mit anderen Werten für `timeline-trigger-activation-range` können Sie Folgendes festlegen:

- Anfangs- und Endversätze relativ zum Bereich `normal`
  - : Ein `<length>`- oder `<percentage>`-Wert gibt einen Versatz vom Anfang der Timeline `normal` an. Diese entspricht standardmäßig [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover), wenn die Timeline-Quelle `view()` ist, und [`scroll`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll), wenn die Timeline-Quelle `scroll()` ist. Negative Werte verschieben den Anfang beziehungsweise das Ende nach außen und verlängern dadurch den Aktivierungsbereich. Positive Werte verschieben sie nach innen und verkürzen ihn.
- Bestimmte benannte Bereiche
  - : Wird ein `<timeline-range-name>`-Wert ohne Versatz festgelegt, beträgt der Standardversatz für den Anfang `0%` und für das Ende `100%`. Zu den benannten Timeline-Bereichen gehören `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` und `scroll`. Weitere Informationen finden Sie unter [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Versätze relativ zu bestimmten benannten Bereichen
  - : Werden für den Anfang oder das Ende sowohl ein `<timeline-range-name>` als auch ein `<length>`- oder `<percentage>`-Wert angegeben, bezeichnet der zweite Wert einen Längen- oder Prozentversatz vom Anfang des benannten Bereichs. Prozentwerte beziehen sich auf die gesamte Länge des angegebenen benannten Bereichs. Weitere Informationen finden Sie unter [Einzüge mithilfe von Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

In jeder Komponente eines `timeline-trigger-activation-range`-Werts muss `<timeline-range-name>` vor dem `<length>`- oder `<percentage>`-Versatz stehen. Im folgenden Beispiel könnte man annehmen, dass `timeline-trigger-activation-range-start` auf `contain` und `timeline-trigger-activation-range-end` auf `50%` gesetzt wird. Das ist jedoch nicht der Fall: Stattdessen wird `timeline-trigger-activation-range-start` auf `contain 50%` gesetzt, während `timeline-trigger-activation-range-end` den Standardwert `normal` erhält:

```css
timeline-trigger-activation-range: contain 50%;
```

Um `timeline-trigger-activation-range-start` auf `contain` und `timeline-trigger-activation-range-end` auf `50%` zu setzen, geben Sie `0%`, den Standardversatz für den Anfang, ausdrücklich an:

```css
timeline-trigger-activation-range: contain 0% 50%;
```

Standardmäßig stimmt der aktive Bereich mit dem Aktivierungsbereich überein. Damit der aktive Bereich länger als der Aktivierungsbereich ist, verwenden Sie die Eigenschaften {{cssxref("timeline-trigger-active-range-start")}} und {{cssxref("timeline-trigger-active-range-end")}} oder die Kurzschreibweise {{cssxref("timeline-trigger-active-range")}}. Ein längerer aktiver Bereich ist nützlich, wenn Sie eine Animation in einem kleinen Aktivierungsbereich auslösen, den Trigger aber über einen größeren Bereich hinweg aktiv halten möchten.

Die Eigenschaft `timeline-trigger-activation-range` kann zusammen mit {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-active-range")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Explizite Werte und Standardwerte für `timeline-trigger-activation-range`

Hinsichtlich expliziter Werte und Standardwerte funktioniert `timeline-trigger-activation-range` genauso wie die Eigenschaft {{cssxref("animation-range")}}. Weitere Informationen finden Sie unter:

- [Bereichsanfang und -ende mit zwei Werten ausdrücklich festlegen](/de/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values)
- [Bereichsanfang festlegen und den Standardwert für das Bereichsende verwenden](/de/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end)

### Mehrere Bereiche angeben

Wenn in einer kommagetrennten `timeline-trigger-activation-range`-Deklaration mehrere Werte angegeben werden, gilt jeder Wert für einen Timeline-Trigger, und zwar in der Reihenfolge der Namen in der Eigenschaft {{cssxref("timeline-trigger-name")}}. Stimmen die Anzahl der Trigger und die Anzahl der Werte für `timeline-trigger-activation-range` nicht überein, werden sie wie [mehrere Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) zugeordnet:

- Gibt es mehr `timeline-trigger-activation-range`-Werte als `timeline-trigger-name`-Werte, werden die überschüssigen Bereichswerte verworfen.
- Gibt es mehr Triggernamen als Bereiche, werden die `timeline-trigger-activation-range`-Werte wiederholt, bis jedem `timeline-trigger-name`-Wert ein `timeline-trigger-activation-range`-Wert zugeordnet ist.
- Sind mehrere `timeline-trigger-name`-Werte, aber nur ein `timeline-trigger-activation-range`-Wert festgelegt, gilt dieser Wert für alle `timeline-trigger-name`-Werte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verkleinern wir den Aktivierungsbereich eines Triggers für eine scrollgesteuerte Animation, indem wir einen eigenen Wert für `timeline-trigger-activation-range` festlegen.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente: eines, das animiert werden soll, und eines, an dem der Trigger erstellt wird. Hinzu kommen Textinhalte, damit die Seite gescrollt werden kann. Der Kürze halber haben wir die Textinhalte ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} des Elements `.animated` ist auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass wir sehen können, wann seine Animation beginnt und endet.

```css hidden live-sample___basic-example live-sample___compare-multiple-values
body {
  width: 80%;
  margin: 0 auto;
  font-family: "Helvetica", "Arial";
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

Mit der Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf das Element `.animated` angewendet. Ohne zugehörigen Trigger würde die Animation des Elements beim Laden der Seite beginnen. Durch die Eigenschaft `animation-trigger` wird sie zu einer ausgelösten Animation. Der Wert verweist auf den `timeline-trigger-name` `--t` und gibt zwei `<animation-action>`-Werte an — `play` und `pause`. Diese legen fest, dass die Animation bei Aktivierung abgespielt und bei Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das Element `.animated` mithilfe der folgenden Eigenschaften:

- {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser stimmt mit dem Bezeichner überein, auf den der Wert der Eigenschaft `animation-trigger` des Elements `.animated` verweist, und verknüpft so die beiden Elemente.
- {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt; das Element, das die Timeline für den Trigger bereitstellt, ist das nächstgelegene scrollende Vorfahrenelement.
- `timeline-trigger-activation-range` mit dem Wert `entry 50% exit 50%`. Der Bereich `entry` erstreckt sich von dem Moment, in dem das Trigger-Element erstmals in den Scrollport eintritt, bis zu dem Moment, in dem es vollständig eingetreten ist. Der Bereich `exit` erstreckt sich von dem Moment, in dem das Trigger-Element den Scrollport erstmals verlässt, bis zu dem Moment, in dem es ihn vollständig verlassen hat. Dieser Wert legt fest, dass der Aktivierungsbereich des Triggers bei `50%` des Bereichs `entry` beginnt und bei `50%` des Bereichs `exit` endet.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 50%;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben und unten. Die Animation beginnt abzuspielen, wenn `50%` des verfolgten Elements `.trigger` aus einer der beiden Richtungen in den Scrollport eingetreten sind. Sie pausiert, wenn `50%` des Trigger-Elements den Scrollport an einem der beiden Ränder verlassen haben.

### Mehrere Bereichswerte vergleichen

Dieses Beispiel entspricht dem vorherigen, ermöglicht aber die Auswahl verschiedener Aktivierungsbereiche, um deren Auswirkungen zu vergleichen.

Das Markup ist dasselbe wie im vorherigen Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben. Damit lässt sich der Wert von `timeline-trigger-activation-range` ändern. Wird ein neuer Wert ausgewählt, wird er mithilfe von JavaScript auf das Trigger-Element angewendet. Der Kürze halber haben wir HTML und JavaScript ausgeblendet.

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

Das CSS entspricht dem vorherigen Beispiel, mit der Ausnahme, dass wir den Wert für `timeline-trigger-activation-range` weggelassen haben. Bis ein Bereichswert ausgewählt wird, gilt daher der Standardwert `normal`, der in diesem Fall `cover 0% cover 100%` entspricht.

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

Wählen Sie verschiedene Bereichswerte aus und scrollen Sie das verfolgte Element im Scrollport nach oben und unten. So sehen Sie, an welchen Stellen das animierte Element beginnt und aufhört, sich zu drehen.

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
- [CSS-Animationen mit Scroll-Trigger verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
