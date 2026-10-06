---
title: CSS-Eigenschaft timeline-trigger-activation-range
short-title: timeline-trigger-activation-range
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
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
  - : Das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, ein {{cssxref("timeline-range-name")}} oder ein `<timeline-range-name>`, gefolgt von einem `<length-percentage>`. Dieser Wert legt {{cssxref("timeline-trigger-activation-range-start")}} fest. Wird ein `<timeline-range-name>` ohne `<length-percentage>` angegeben, ist der Standardwert für `<length-percentage>` `0%`.
- `<'timeline-trigger-activation-range-end'>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name>`, gefolgt von einem `<length-percentage>`. Dieser Wert legt {{cssxref("timeline-trigger-activation-range-end")}} fest. Wird ein `<timeline-range-name>` ohne `<length-percentage>` angegeben, ist der Standardwert für `<length-percentage>` `100%`.

Prozentwerte beziehen sich auf die Länge des benannten Timeline-Bereichs, falls einer angegeben ist. Andernfalls beziehen sie sich auf die durch `normal` repräsentierte Timeline.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-activation-range` können Sie den Anfang oder sowohl den Anfang als auch das Ende des Aktivierungsbereichs eines Triggers ausdrücklich festlegen. Die Eigenschaft setzt {{cssxref("timeline-trigger-activation-range-start")}} und {{cssxref("timeline-trigger-activation-range-end")}} in einer einzigen Deklaration. Jeder der beiden Werte wird als Timeline-Bereich, als Offset oder als Kombination aus beidem angegeben. Der Offset für Anfang und Ende wird jeweils vom Anfang des zugehörigen Bereichs aus gemessen. Wird nur der Wert für `timeline-trigger-activation-range-start` angegeben, ist der Standardwert für `timeline-trigger-activation-range-end` `normal`. Abhängig vom Wert von {{cssxref("timeline-trigger-source")}} entspricht dies entweder `contain 100%` oder `scroll 100%`.

Der Aktivierungsbereich eines Triggers ist der Bereich entlang des zugehörigen Scrollports, in dem der Trigger einer [scrollgesteuerten CSS-Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) aktiviert wird. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt. Die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt.

Der Standardwert ist `normal`. Damit wird der Aktivierungsbereich auf den standardmäßigen benannten Bereich gesetzt. Welcher benannte Bereich standardmäßig verwendet wird, hängt von {{cssxref("timeline-trigger-source")}} ab: Bei einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) entspricht er `cover`, bei einer [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `scroll`. Die Standardwerte für die Offsets sind `0%` für den Anfang und `100%` für das Ende des Aktivierungsbereichs. Daher wird `normal` entweder zu `cover 0% cover 100%` oder zu `scroll 0% scroll 100%` aufgelöst.

Mit anderen Werten für `timeline-trigger-activation-range` können Sie Folgendes festlegen:

- Offsets für Anfang und Ende relativ zum Bereich `normal`
  - : Ein `<length>`- oder `<percentage>`-Wert gibt einen Offset vom Anfang der Timeline `normal` an. Diese entspricht standardmäßig [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) bei einer `view()`-Progress-Timeline als Quelle und [`scroll`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) bei einer `scroll()`-Progress-Timeline als Quelle. Negative Werte verschieben Anfang und Ende nach außen und vergrößern so den Aktivierungsbereich. Positive Werte verschieben Anfang und Ende nach innen und verkleinern ihn.
- Bestimmte benannte Bereiche
  - : Wird ein `<timeline-range-name>` ohne Offset angegeben, ist der Standardwert für den Offset am Anfang `0%` und am Ende `100%`. Zu den benannten Timeline-Bereichen gehören `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` und `scroll`. Weitere Informationen finden Sie unter [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Offsets relativ zu bestimmten benannten Bereichen
  - : Werden für den Anfang oder das Ende sowohl ein `<timeline-range-name>` als auch ein `<length>`- oder `<percentage>`-Wert angegeben, bezeichnet der Wert einen Längen- oder Prozent-Offset vom Anfang des benannten Bereichs. Prozentwerte beziehen sich auf die gesamte Länge des angegebenen benannten Bereichs. Weitere Informationen finden Sie unter [Abstände mit Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

In jeder Komponente eines Werts für `timeline-trigger-activation-range` muss der `<timeline-range-name>`-Wert vor dem `<length>`- oder `<percentage>`-Offset stehen. Im folgenden Beispiel könnte man annehmen, dass `timeline-trigger-activation-range-start` auf `contain` und `timeline-trigger-activation-range-end` auf `50%` gesetzt wird. Das ist jedoch nicht der Fall. Stattdessen wird `timeline-trigger-activation-range-start` auf `contain 50%` gesetzt, während für `timeline-trigger-activation-range-end` der Standardwert `normal` gilt:

```css
timeline-trigger-activation-range: contain 50%;
```

Um `timeline-trigger-activation-range-start` auf `contain` und `timeline-trigger-activation-range-end` auf `50%` zu setzen, geben Sie ausdrücklich `0%` als Standard-Offset für den Anfang an:

```css
timeline-trigger-activation-range: contain 0% 50%;
```

Standardmäßig entspricht der aktive Bereich dem Aktivierungsbereich. Wenn der aktive Bereich größer als der Aktivierungsbereich sein soll, verwenden Sie die Eigenschaften {{cssxref("timeline-trigger-active-range-start")}} und {{cssxref("timeline-trigger-active-range-end")}} oder die Kurzschreibweise {{cssxref("timeline-trigger-active-range")}}. Ein größerer aktiver Bereich ist nützlich, wenn Sie eine Animation innerhalb eines kleinen Aktivierungsbereichs auslösen, den Trigger aber über einen größeren Bereich hinweg aktiv halten möchten.

Die Eigenschaft `timeline-trigger-activation-range` kann zusammen mit {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-active-range")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Explizite Werte und Standardwerte für `timeline-trigger-activation-range`

Hinsichtlich expliziter Werte und Standardwerte verhält sich `timeline-trigger-activation-range` genauso wie die Eigenschaft {{cssxref("animation-range")}}. Weitere Informationen finden Sie unter:

- [Anfang und Ende eines Bereichs ausdrücklich mit zwei Werten festlegen](/de/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values)
- [Den Anfang eines Bereichs festlegen und für das Ende den Standardwert verwenden](/de/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end)

### Mehrere Bereiche angeben

Werden in einer kommagetrennten `timeline-trigger-activation-range`-Deklaration mehrere Werte angegeben, gilt jeder Wert für einen Timeline-Trigger – in der Reihenfolge, in der die Namen in der Eigenschaft {{cssxref("timeline-trigger-name")}} stehen. Wenn die Anzahl der Trigger und der Werte für `timeline-trigger-activation-range` nicht übereinstimmt, werden sie wie [mehrere Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) angewendet:

- Gibt es mehr `timeline-trigger-activation-range`-Werte als `timeline-trigger-name`-Werte, werden die überzähligen Bereichswerte verworfen.
- Gibt es mehr Trigger-Namen als Bereiche, werden die `timeline-trigger-activation-range`-Werte wiederholt, bis jedem `timeline-trigger-name`-Wert ein `timeline-trigger-activation-range`-Wert zugeordnet ist.
- Sind mehrere `timeline-trigger-name`-Werte, aber nur ein `timeline-trigger-activation-range`-Wert festgelegt, gilt dieser Wert für alle `timeline-trigger-name`-Werte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verkleinern wir den Aktivierungsbereich eines Triggers für eine scrollgesteuerte Animation, indem wir einen benutzerdefinierten Wert für `timeline-trigger-activation-range` festlegen.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente – eines, das animiert wird, und eines, das als Trigger dient – sowie Textinhalt, damit die Seite gescrollt werden kann. Der Textinhalt ist hier der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} des Elements `.animated` wird auf `fixed` gesetzt. Dadurch wird das Element nahe der oberen linken Ecke des Scrollports positioniert, sodass wir sehen können, wann seine Animation beginnt und endet.

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

Anschließend definieren wir die {{cssxref("@keyframes")}} für eine `rotate`-Animation:

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

Über die Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf das Element `.animated` angewendet. Ohne zugehörigen Trigger würde die Animation des Elements beim Laden der Seite beginnen. Die Eigenschaft `animation-trigger` macht daraus eine durch einen Trigger ausgelöste Animation. Ihr Wert verweist auf einen `timeline-trigger-name` namens `--t` und gibt zwei `<animation-action>`-Werte an – `play` und `pause`. Diese legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt über die folgenden Eigenschaften den Trigger für das Element `.animated`:

- {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner, auf den der `animation-trigger`-Wert des Elements `.animated` verweist, und stellt so die Verbindung zwischen beiden her.
- {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird eine View-Progress-Timeline als Timeline-Trigger festgelegt; das nächstgelegene scrollende Vorfahrenelement stellt dabei die Timeline bereit.
- `timeline-trigger-activation-range` mit dem Wert `entry 50% exit 50%`. Der Bereich `entry` reicht von dem Moment, in dem das Trigger-Element beginnt, in den Scrollport einzutreten, bis es vollständig eingetreten ist. Der Bereich `exit` reicht von dem Moment, in dem das Trigger-Element beginnt, den Scrollport zu verlassen, bis es ihn vollständig verlassen hat. Mit diesem Wert beginnt der Aktivierungsbereich des Triggers bei `50%` des `entry`-Bereichs und endet bei `50%` des `exit`-Bereichs.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 50%;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben und unten. Die Animation beginnt abzuspielen, sobald `50%` des beobachteten Elements `.trigger` aus einer der beiden Richtungen in den Scrollport eingetreten sind. Sie pausiert, sobald `50%` des Trigger-Elements den Scrollport an einem der beiden Ränder verlassen haben.

### Mehrere Bereichswerte vergleichen

Dieses Beispiel entspricht dem vorherigen Beispiel, ermöglicht aber die Auswahl verschiedener Aktivierungsbereiche, um deren Auswirkungen zu vergleichen.

Das Markup ist dasselbe wie im vorherigen Beispiel, außer dass wir ein {{htmlelement("select")}}-Element hinzugefügt haben. Damit lässt sich der Wert für `timeline-trigger-activation-range` ändern. Wird ein neuer Wert ausgewählt, wird er mithilfe von JavaScript auf das Trigger-Element angewendet. HTML und JavaScript sind hier der Kürze halber ausgeblendet.

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

Das CSS entspricht dem vorherigen Beispiel, außer dass wir den Wert für `timeline-trigger-activation-range` weggelassen haben. Bis ein Bereichswert ausgewählt wird, gilt daher der Standardwert `normal`, der in diesem Fall `cover 0% cover 100%` entspricht.

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

Wählen Sie verschiedene Bereichswerte aus und scrollen Sie das beobachtete Element im Scrollport nach oben und unten. So können Sie sehen, an welchen Stellen das animierte Element beginnt und aufhört, sich zu drehen.

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
