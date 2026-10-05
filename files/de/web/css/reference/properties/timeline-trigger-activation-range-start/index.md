---
title: timeline-trigger-activation-range-start CSS property
short-title: timeline-trigger-activation-range-start
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range-start
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

{{SeeCompatTable}}

Die [CSS-Eigenschaft](/de/docs/Web/CSS) **`timeline-trigger-activation-range-start`** legt den Beginn des Aktivierungsbereichs eines Triggers für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

## Syntax

```css
/* Keyword */
timeline-trigger-activation-range-start: normal;

/* <length-percentage> */
timeline-trigger-activation-range-start: 20%;
timeline-trigger-activation-range-start: 350px;

/* Named timeline range */
timeline-trigger-activation-range-start: cover;
timeline-trigger-activation-range-start: exit;

/* Named timeline with <length-percentage> */
timeline-trigger-activation-range-start: entry 40%;
timeline-trigger-activation-range-start: contain -20px;

/* Multiple range start values */
timeline-trigger-activation-range-start:
  contain,
  entry -10%;

/* Global values */
timeline-trigger-activation-range-start: inherit;
timeline-trigger-activation-range-start: initial;
timeline-trigger-activation-range-start: revert;
timeline-trigger-activation-range-start: revert-layer;
timeline-trigger-activation-range-start: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste der folgenden Werte angegeben:

- `normal`
  - : Der Standardwert. Entspricht `cover 0%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `scroll 0%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).
- {{cssxref("length-percentage")}}
  - : Gibt einen Versatz als `<length>` oder `<percentage`> an, gemessen vom Beginn der `normal`-Timeline. Prozentwerte beziehen sich auf die Länge des `normal`-Timeline-Bereichs.
- {{cssxref("timeline-range-name")}}
  - : Gibt den Beginn (`0%`) des Timeline-Bereichs `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` an.
- `<timeline-range-name>` `<length-percentage>`
  - : Gibt einen Längen- oder Prozentversatz an, gemessen vom Beginn des angegebenen [benannten Timeline-Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names). Prozentwerte beziehen sich auf die Länge der benannten Timeline.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-activation-range-start` können Sie den Beginn des [Aktivierungsbereichs](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) eines Triggers ausdrücklich festlegen. Der Wert wird als Timeline-Bereich, Versatz oder Kombination aus beidem angegeben.

Der Aktivierungsbereich eines Triggers ist der Bereich entlang des zugehörigen Scrollports, in dem ein Trigger für eine [scrollgesteuerte CSS-Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) aktiviert wird. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt. Die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt.

Der Wert `normal` legt den Beginn des Aktivierungsbereichs auf den Beginn des standardmäßigen benannten Bereichs fest. Dies entspricht `cover 0%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) und `scroll 0%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).

Mit anderen Werten der Eigenschaft `timeline-trigger-activation-range-start` können Sie Folgendes festlegen:

- Einen Versatz gegenüber dem `normal`-Bereich
  - : Ein `<length>`- oder `<percentage>`-Wert gibt einen Versatz vom Beginn der `normal`-Timeline an. Dieser liegt bei einer View-Progress-Timeline als Quelle standardmäßig bei `cover 0%` und bei einer Scroll-Progress-Timeline als Quelle bei `scroll 0%`. Negative Werte verschieben den Beginn nach außen und verlängern so den Aktivierungsbereich. Positive Werte verschieben den Beginn nach innen und verkürzen den Aktivierungsbereich.
- Den Beginn eines bestimmten benannten Bereichs
  - : Ein `<timeline-range-name>`-Wert gibt einen Versatz von `0%` innerhalb des benannten Timeline-Bereichs an. Dieser kann `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` sein. Siehe [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Einen Versatz gegenüber einem bestimmten benannten Bereich
  - : Wenn sowohl ein `<timeline-range-name>` als auch ein `<length>`- oder `<percentage>`-Wert angegeben werden, liegt der Beginn um den angegebenen Abstand vom Beginn des benannten Bereichs versetzt. Prozentwerte beziehen sich auf die Länge des angegebenen Bereichs. Siehe [Innenabstände mit Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

Die Eigenschaft `timeline-trigger-activation-range-start` kann zusammen mit der Eigenschaft {{cssxref("timeline-trigger-activation-range-end")}} auch über die Kurzform {{cssxref("timeline-trigger-activation-range")}} festgelegt werden. Diese lässt sich wiederum über die Kurzform {{cssxref("timeline-trigger")}} festlegen.

### Mehrere Werte für den Bereichsbeginn angeben

Wenn in einer kommagetrennten `timeline-trigger-activation-range-start`-Deklaration mehrere Werte angegeben werden, gilt jeder Wert für einen Timeline-Trigger in der Reihenfolge, in der die Namen in der Eigenschaft {{cssxref("timeline-trigger-name")}} aufgeführt sind. Wenn die Anzahl der Trigger und der Werte für `timeline-trigger-activation-range-start` nicht übereinstimmt, werden sie wie [mehrere Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) angewendet:

- Wenn mehr `timeline-trigger-activation-range-start`-Werte als `timeline-trigger-name`-Werte vorhanden sind, werden die überzähligen Bereichswerte verworfen.
- Wenn mehr Triggernamen als Bereiche vorhanden sind, werden die `timeline-trigger-activation-range-start`-Werte wiederholt, bis jedem `timeline-trigger-name`-Wert ein `timeline-trigger-activation-range-start`-Wert zugeordnet ist.
- Wenn mehrere `timeline-trigger-name`-Werte, aber nur ein `timeline-trigger-activation-range-start`-Wert festgelegt sind, gilt dieser `timeline-trigger-activation-range-start`-Wert für alle `timeline-trigger-name`-Werte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verschieben wir den Beginn des Aktivierungsbereichs eines Triggers für eine scrollgesteuerte Animation nach innen, indem wir einen benutzerdefinierten Wert für `timeline-trigger-activation-range-start` festlegen.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente – eines, das animiert werden soll, und eines, für das ein Trigger erstellt wird. Hinzu kommt etwas Textinhalt, damit die Seite gescrollt werden kann. Der Textinhalt ist hier der Kürze halber ausgeblendet.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

...
```

```html hidden live-sample___basic-example
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

Die Eigenschaft {{cssxref("position")}} des Elements `.animated` wird auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass wir erkennen können, wann seine Animation beginnt und anhält.

```css hidden live-sample___basic-example
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

```css live-sample___basic-example
.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Als Nächstes definieren wir die {{cssxref("@keyframes")}} für eine `rotate`-Animation:

```css live-sample___basic-example
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

Über die Kurzform {{cssxref("animation")}} wird die `rotate`-Animation auf das Element `.animated` angewendet. Ohne zugehörigen Trigger würde die Animation des Elements beim Laden der Seite beginnen. Durch die Eigenschaft `animation-trigger` wird daraus eine durch einen Trigger gesteuerte Animation. Der Wert verweist auf einen `timeline-trigger-name` namens `--t` und gibt zwei `<animation-action>`-Werte an – `play` und `pause`. Diese legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das Element `.animated` mithilfe der folgenden Eigenschaften:

- Ein {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner, auf den der Wert der Eigenschaft `animation-trigger` des Elements `.animated` verweist, und verknüpft so die beiden Elemente.
- Ein {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt und das nächstgelegene scrollbare Vorfahrenelement als das Element, das die Timeline bereitstellt.
- Ein `timeline-trigger-activation-range-start` mit dem Wert `entry 50%`. Der Bereich `entry` reicht von dem Moment, in dem das Trigger-Element in den Scrollport einzutreten beginnt, bis zu dem Moment, in dem es vollständig eingetreten ist. Dieser Wert legt den Beginn des Aktivierungsbereichs des Triggers auf den Punkt bei `50%` des `entry`-Bereichs fest. Dieser Punkt ist erreicht, wenn `50%` des beobachteten Elements `.trigger` über die Endkante des Scrollports in diesen eingetreten sind.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range-start: entry 50%;
}
```

Wenn der Wert von {{cssxref("timeline-trigger-activation-range-end")}} nicht ausdrücklich festgelegt wird, ist er standardmäßig `normal`, was in diesem Fall `cover 100%` entspricht. Der Wert von {{cssxref("timeline-trigger-active-range-end")}} ist standardmäßig `auto` und damit identisch mit `timeline-trigger-activation-range-end`. Das bedeutet, dass die Deaktivierung am Ende des `cover`-Bereichs erfolgt, wenn das beobachtete Element den Scrollport über dessen Anfangskante verlässt.

```css hidden live-sample___basic-example
@supports not (timeline-trigger-activation-range-start: entry 50%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-activation-range-start property.";
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

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben. Die Animation beginnt, wenn `50%` des beobachteten Elements `.trigger` über die Endkante in den Scrollport eingetreten sind, und wird angehalten, wenn das Element den Scrollport an der gegenüberliegenden Kante vollständig verlassen hat. Wenn Sie nach unten scrollen, kehrt sich der Ablauf um: Die Animation wird erneut abgespielt, sobald das Trigger-Element beginnt, von oben in den Scrollport einzutreten, und wieder angehalten, wenn `50%` des Trigger-Elements den Scrollport nach unten verlassen haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("timeline-trigger-activation-range-end")}}
- Die Kurzform {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-active-range")}}
- Die Kurzform {{cssxref("timeline-trigger")}}
- [Scrollgesteuerte CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Das Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Das Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
