---
title: timeline-trigger-activation-range-end CSS property
short-title: timeline-trigger-activation-range-end
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range-end
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-trigger-activation-range-end`** legt das Ende des Aktivierungsbereichs eines Triggers für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

## Syntax

```css
/* Keyword */
timeline-trigger-activation-range-end: normal;

/* <length-percentage> */
timeline-trigger-activation-range-end: 80%;
timeline-trigger-activation-range-end: 400px;

/* Named timeline range */
timeline-trigger-activation-range-end: contain;
timeline-trigger-activation-range-end: exit;

/* Named timeline with <length-percentage> */
timeline-trigger-activation-range-end: entry 110%;
timeline-trigger-activation-range-end: contain 600px;

/* Multiple range end values */
timeline-trigger-activation-range-end:
  contain,
  entry 100%;

/* Global values */
timeline-trigger-activation-range-end: inherit;
timeline-trigger-activation-range-end: initial;
timeline-trigger-activation-range-end: revert;
timeline-trigger-activation-range-end: revert-layer;
timeline-trigger-activation-range-end: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste der folgenden Werte angegeben:

- `normal`
  - : Der Standardwert. Entspricht `cover 100%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `scroll 100%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).
- {{cssxref("length-percentage")}}
  - : Gibt einen Versatz als `<length>` oder `<percentage`> an, gemessen vom Anfang der `normal`-Timeline. Prozentwerte beziehen sich auf die Länge des `normal`-Timeline-Bereichs.
- {{cssxref("timeline-range-name")}}
  - : Gibt das Ende (`100%`) des Timeline-Bereichs `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` an.
- `<timeline-range-name>` `<length-percentage>`
  - : Gibt einen Längen- oder Prozentversatz an, gemessen vom Anfang des angegebenen [benannten Timeline-Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names). Prozentwerte beziehen sich auf die Länge der benannten Timeline.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-activation-range-end` können Sie das Ende des [Aktivierungsbereichs](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) eines Triggers ausdrücklich als Timeline-Bereich, Versatz oder Kombination aus beidem festlegen.

Der Aktivierungsbereich eines Triggers ist der Bereich entlang des zugehörigen Scrollports, in dem ein Trigger für eine [CSS-Animation, die durch Scrollen ausgelöst wird](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations), aktiviert wird. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt; die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt.

Der Wert `normal` setzt das Ende des Aktivierungsbereichs auf das Ende des standardmäßigen benannten Bereichs. Dies entspricht `cover 100%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) und `scroll 100%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).

Mit anderen Werten für `timeline-trigger-activation-range-end` lässt sich Folgendes festlegen:

- Ein Versatz gegenüber dem Bereich `normal`
  - : Ein Wert vom Typ `<length>` oder `<percentage>` gibt einen Versatz vom Anfang der `normal`-Timeline an. Deren Ende liegt standardmäßig bei `cover 100%` für eine View-Progress-Timeline als Quelle und bei `scroll 100%` für eine Scroll-Progress-Timeline als Quelle. Negative Werte verschieben das Ende nach außen und verlängern so den Aktivierungsbereich. Positive Werte verschieben das Ende nach innen und verkürzen ihn.
- Das Ende eines bestimmten benannten Bereichs
  - : Ein Wert vom Typ `<timeline-range-name>` gibt einen Versatz von `100%` entlang des benannten Timeline-Bereichs an. Mögliche Werte sind `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` und `scroll`. Siehe [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Ein Versatz gegenüber einem bestimmten benannten Bereich
  - : Wenn sowohl ein Wert vom Typ `<timeline-range-name>` als auch ein Wert vom Typ `<length>` oder `<percentage>` angegeben wird, liegt das Ende im angegebenen Abstand vom Anfang des benannten Bereichs. Prozentwerte beziehen sich auf den angegebenen Bereich. Siehe [Innenabstände mithilfe von Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

Standardmäßig entspricht der aktive Bereich dem Aktivierungsbereich. Mit den Eigenschaften {{cssxref("timeline-trigger-active-range-end")}} oder {{cssxref("timeline-trigger-active-range")}} können Sie das Ende des aktiven Bereichs verschieben, sodass dieser länger als der Aktivierungsbereich ist. Das ist nützlich, wenn Sie eine Animation innerhalb eines kleinen Aktivierungsbereichs auslösen möchten, der Trigger aber innerhalb eines größeren Bereichs aktiv bleiben soll.

Die Eigenschaft `timeline-trigger-activation-range-end` kann zusammen mit der Eigenschaft {{cssxref("timeline-trigger-activation-range-start")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger-activation-range")}} festgelegt werden. Diese lässt sich wiederum über die Kurzschreibweise {{cssxref("timeline-trigger")}} festlegen.

### Mehrere Werte für das Bereichsende angeben

Wenn in einer `timeline-trigger-activation-range-end`-Deklaration mehrere kommagetrennte Werte angegeben werden, gilt jeder Wert für einen Timeline-Trigger, und zwar in der Reihenfolge, in der die Namen in der Eigenschaft {{cssxref("timeline-trigger-name")}} stehen. Stimmen die Anzahl der Trigger und die Anzahl der Werte für `timeline-trigger-activation-range-end` nicht überein, werden sie wie [mehrere Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) behandelt:

- Gibt es mehr Werte für `timeline-trigger-activation-range-end` als für `timeline-trigger-name`, werden die überzähligen Bereichswerte verworfen.
- Gibt es mehr Trigger-Namen als Bereichswerte, werden die Werte für `timeline-trigger-activation-range-end` wiederholt, bis jedem Wert für `timeline-trigger-name` ein Wert für `timeline-trigger-activation-range-end` zugeordnet ist.
- Werden mehrere Werte für `timeline-trigger-name`, aber nur ein Wert für `timeline-trigger-activation-range-end` festgelegt, gilt dieser Wert für alle `timeline-trigger-name`-Werte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verschieben wir das Ende des Aktivierungsbereichs eines Triggers für eine scrollgesteuerte Animation nach innen, indem wir einen benutzerdefinierten Wert für `timeline-trigger-activation-range-end` festlegen.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente: eines, das animiert wird, und eines, für das ein Trigger erstellt wird. Hinzu kommt etwas Text, damit die Seite gescrollt werden kann. Der Textinhalt ist der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} des Elements `.animated` wird auf `fixed` gesetzt. Dadurch wird es nahe der linken oberen Ecke des Scrollports positioniert, sodass wir erkennen können, wann seine Animation beginnt und endet.

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

Mit der Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf das Element `.animated` angewendet. Ohne zugehörigen Trigger würde die Animation des Elements beim Laden der Seite beginnen. Die Eigenschaft `animation-trigger` macht daraus eine durch einen Trigger gesteuerte Animation. Ihr Wert verweist auf einen `timeline-trigger-name` namens `--t` und gibt zwei `<animation-action>`-Werte an: `play` und `pause`. Sie legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das Element `.animated` mithilfe der folgenden Eigenschaften:

- Ein {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser stimmt mit dem Bezeichner überein, auf den der Wert der Eigenschaft `animation-trigger` des Elements `.animated` verweist, und verknüpft so die beiden Elemente.
- Eine {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird eine View-Progress-Timeline als Quelle des Timeline-Triggers und das nächstgelegene scrollende Vorfahrenelement als das Element festgelegt, das die Timeline bereitstellt.
- Ein `timeline-trigger-activation-range-end` mit dem Wert `contain 60%`. Der Bereich `contain` reicht von dem Zeitpunkt, an dem das Trigger-Element vollständig in den Scrollport eingetreten ist, bis zu dem Zeitpunkt, an dem es beginnt, ihn zu verlassen. Dieser Wert setzt das Ende des Aktivierungsbereichs des Triggers auf `60%` des Bereichs `contain`.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range-end: contain 60%;
}
```

Wenn kein Wert ausdrücklich festgelegt wird, verwendet {{cssxref("timeline-trigger-activation-range-start")}} standardmäßig `normal`. In diesem Fall entspricht das `cover 0%`. Dies ist der Anfang des Bereichs `cover`: Die Aktivierung erfolgt also, wenn das beobachtete Element beginnt, über die Endkante in den Scrollport einzutreten.

```css hidden live-sample___basic-example
@supports not (timeline-trigger-activation-range-end: contain 60%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-activation-range-end property.";
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

Scrollen Sie den Inhalt nach oben. Die Animation beginnt, sobald das beobachtete Element `.trigger` an der Endkante des Scrollports sichtbar wird. Sie pausiert, wenn das Element `60%` des Timeline-Bereichs nach oben gescrollt ist. Wenn Sie nach unten scrollen, kehrt sich der Effekt um: Die Animation wird erneut abgespielt, sobald das Trigger-Element die `60%`-Position erreicht, und pausiert wieder, wenn es die Endkante erreicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("timeline-trigger-activation-range-start")}}
- Kurzschreibweise {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-active-range")}}
- Kurzschreibweise {{cssxref("timeline-trigger")}}
- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
