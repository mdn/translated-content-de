---
title: timeline-trigger-activation-range-end CSS property
short-title: timeline-trigger-activation-range-end
slug: Web/CSS/Reference/Properties/timeline-trigger-activation-range-end
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
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
  - : Gibt einen Versatz als `<length>` oder `<percentage>` an, gemessen vom Beginn der `normal`-Timeline. Prozentwerte beziehen sich auf die Länge des Bereichs der `normal`-Timeline.
- {{cssxref("timeline-range-name")}}
  - : Gibt das Ende (`100%`) des Timeline-Bereichs `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` an.
- `<timeline-range-name>` `<length-percentage>`
  - : Gibt einen Längen- oder Prozentversatz an, gemessen vom Beginn des angegebenen [benannten Timeline-Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names). Prozentwerte beziehen sich auf die Länge der benannten Timeline.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-activation-range-end` können Sie das Ende des [Aktivierungsbereichs](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) eines Triggers ausdrücklich als Timeline-Bereich, Versatz oder Kombination aus beidem festlegen.

Der Aktivierungsbereich eines Triggers ist der Bereich entlang des zugehörigen Scrollports, innerhalb dessen ein Trigger für eine [scrollgesteuerte CSS-Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) aktiviert wird. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt; die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt.

Der Wert `normal` setzt das Ende des Aktivierungsbereichs auf das Ende des standardmäßigen benannten Bereichs. Das entspricht `cover 100%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) und `scroll 100%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).

Mit anderen Werten für `timeline-trigger-activation-range-end` können Sie Folgendes festlegen:

- Einen Versatz gegenüber dem Bereich `normal`
  - : Ein Wert vom Typ `<length>` oder `<percentage>` gibt einen Versatz gegenüber dem Beginn der `normal`-Timeline an. Diese reicht bei einer View-Progress-Timeline als Quelle standardmäßig bis `cover 100%` und bei einer Scroll-Progress-Timeline als Quelle bis `scroll 100%`. Negative Werte verschieben das Ende nach außen und verlängern so den Aktivierungsbereich. Positive Werte verschieben das Ende des Aktivierungsbereichs nach innen und verkürzen ihn.
- Das Ende eines bestimmten benannten Bereichs
  - : Ein Wert vom Typ `<timeline-range-name>` gibt einen Versatz von `100%` entlang des benannten Timeline-Bereichs an. Dabei handelt es sich um `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll`. Siehe [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Einen Versatz gegenüber einem bestimmten benannten Bereich
  - : Wenn sowohl ein Wert vom Typ `<timeline-range-name>` als auch ein Wert vom Typ `<length>` oder `<percentage>` angegeben wird, liegt das Ende im angegebenen Abstand vom Beginn des benannten Bereichs. Prozentwerte beziehen sich auf den angegebenen Bereich. Siehe [Insets mit Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

Standardmäßig entspricht der aktive Bereich dem Aktivierungsbereich. Mit den Eigenschaften {{cssxref("timeline-trigger-active-range-end")}} oder {{cssxref("timeline-trigger-active-range")}} können Sie das Ende des aktiven Bereichs verlängern, sodass dieser größer als der Aktivierungsbereich ist. Das ist nützlich, wenn Sie eine Animation innerhalb eines kleinen Aktivierungsbereichs auslösen möchten, der Trigger aber innerhalb eines größeren Bereichs aktiv bleiben soll.

Die Eigenschaft `timeline-trigger-activation-range-end` kann zusammen mit {{cssxref("timeline-trigger-activation-range-start")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger-activation-range")}} festgelegt werden. Diese lässt sich wiederum über die Kurzschreibweise {{cssxref("timeline-trigger")}} festlegen.

### Mehrere Werte für das Bereichsende angeben

Wenn in einer `timeline-trigger-activation-range-end`-Deklaration mehrere kommagetrennte Werte angegeben werden, gilt jeder Wert für einen Timeline-Trigger, und zwar in der Reihenfolge, in der die Namen in der Eigenschaft {{cssxref("timeline-trigger-name")}} erscheinen. Stimmen die Anzahl der Trigger und die Anzahl der Werte für `timeline-trigger-activation-range-end` nicht überein, werden sie wie [mehrere Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) zugeordnet:

- Übersteigt die Anzahl der Werte für `timeline-trigger-activation-range-end` die Anzahl der Werte für `timeline-trigger-name`, werden die überschüssigen Bereichswerte verworfen.
- Ist die Anzahl der Trigger-Namen größer als die Anzahl der Bereichswerte, werden die Werte für `timeline-trigger-activation-range-end` wiederholt, bis jedem Wert für `timeline-trigger-name` ein Wert für `timeline-trigger-activation-range-end` zugeordnet ist.
- Sind mehrere Werte für `timeline-trigger-name`, aber nur ein Wert für `timeline-trigger-activation-range-end` festgelegt, gilt dieser Wert für alle Werte von `timeline-trigger-name`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verschieben wir das Ende des Aktivierungsbereichs eines Triggers für eine scrollgesteuerte Animation nach innen, indem wir einen eigenen Wert für `timeline-trigger-activation-range-end` festlegen.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente – eines, das animiert werden soll, und eines, auf dem ein Trigger erstellt wird. Hinzu kommt etwas Textinhalt, damit die Seite scrollbar ist. Der Kürze halber haben wir den Textinhalt ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} des Elements `.animated` ist auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass wir erkennen können, wann seine Animation beginnt und endet.

```css hidden live-sample___basic-example
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

Mit der Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf das Element `.animated` angewendet. Ohne zugehörigen Trigger würde das Element beim Laden der Seite mit der Animation beginnen. Die Eigenschaft `animation-trigger` macht daraus eine ausgelöste Animation. Ihr Wert verweist auf einen `timeline-trigger-name` namens `--t` und gibt zwei `<animation-action>`-Werte an – `play` und `pause`. Diese legen fest, dass die Animation bei Aktivierung abgespielt und bei Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das Element `.animated` mithilfe der folgenden Eigenschaften:

- Ein {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner, auf den im Wert der Eigenschaft `animation-trigger` des Elements `.animated` verwiesen wird, und verknüpft so die beiden Elemente.
- Eine {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt und das Element, das den Timeline-Trigger bereitstellt, als nächstgelegenes scrollendes Vorfahrenelement.
- Ein `timeline-trigger-activation-range-end` mit dem Wert `contain 60%`. Der Bereich `contain` reicht von dem Zeitpunkt, an dem das Trigger-Element vollständig in den Scrollport eingetreten ist, bis zu dem Zeitpunkt, an dem es beginnt, ihn zu verlassen. Dieser Wert setzt das Ende des Aktivierungsbereichs des Triggers auf `60%` des Bereichs `contain`.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range-end: contain 60%;
}
```

Wird für {{cssxref("timeline-trigger-activation-range-start")}} kein Wert ausdrücklich festgelegt, gilt standardmäßig `normal`, was in diesem Fall `cover 0%` entspricht. Das ist der Beginn des Bereichs `cover`: Die Aktivierung erfolgt also, wenn das beobachtete Element beginnt, über die Endkante in den Scrollport einzutreten.

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

Versuchen Sie, den Inhalt nach oben zu scrollen. Die Animation beginnt, wenn das beobachtete Element `.trigger` an der Endkante des Scrollports erstmals sichtbar wird. Sie wird angehalten, wenn das Element `60%` des Timeline-Bereichs nach oben durchlaufen hat. Wenn Sie nach unten scrollen, kehrt sich der Effekt um: Die Animation wird erneut abgespielt, sobald das Trigger-Element die Position bei `60%` erreicht, und wieder angehalten, wenn es die Endkante erreicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-activation-range")}} als Kurzschreibweise
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} als Kurzschreibweise
- [Scrollgesteuerte CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
