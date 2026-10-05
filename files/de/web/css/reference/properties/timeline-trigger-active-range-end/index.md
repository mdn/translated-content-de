---
title: timeline-trigger-active-range-end CSS property
short-title: timeline-trigger-active-range-end
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range-end
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-trigger-active-range-end`** legt das Ende des aktiven Bereichs eines Triggers für eine [durch Scrollen ausgelöste Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

## Syntax

```css
/* Keywords */
timeline-trigger-active-range-end: auto;
timeline-trigger-active-range-end: normal;

/* <length-percentage> */
timeline-trigger-active-range-end: 80%;
timeline-trigger-active-range-end: 400px;

/* Named timeline range */
timeline-trigger-active-range-end: contain;
timeline-trigger-active-range-end: exit;

/* Named timeline with <length-percentage> */
timeline-trigger-active-range-end: exit -10px;
timeline-trigger-active-range-end: contain 110%;

/* Multiple range end values */
timeline-trigger-active-range-end:
  contain 110%,
  exit -10px;

/* Global values */
timeline-trigger-active-range-end: inherit;
timeline-trigger-active-range-end: initial;
timeline-trigger-active-range-end: revert;
timeline-trigger-active-range-end: revert-layer;
timeline-trigger-active-range-end: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste der folgenden Werte angegeben:

- `auto`
  - : Verwendet den Wert der Eigenschaft {{cssxref("timeline-trigger-activation-range-end")}}. Dies ist der Standardwert.
- `normal`
  - : Gibt das Ende, also `100%`, des Bereichs `normal` an. Dies entspricht `cover 100%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `scroll 100%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang der `normal`-Timeline aus gemessen wird. Prozentwerte beziehen sich auf die Länge des [`normal`](#normal)-Timeline-Bereichs.
- {{cssxref("timeline-range-name")}}
  - : Gibt das Ende, also `100%`, des Timeline-Bereichs `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` an.
- `<timeline-range-name>` `<length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang des angegebenen [benannten Timeline-Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) aus gemessen wird. Prozentwerte beziehen sich auf die Länge des benannten Bereichs.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-active-range-end` können Sie das Ende des [aktiven Bereichs](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) eines Triggers ausdrücklich auf einen Punkt festlegen, der auf der Timeline am Ende des Aktivierungsbereichs oder dahinter liegt. Das Ende des Aktivierungsbereichs wird durch {{cssxref("timeline-trigger-activation-range-end")}} angegeben.

Der _aktive Bereich_ ist der Bereich, innerhalb dessen ein Trigger nach seiner Aktivierung aktiviert bleibt. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt; die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt. Standardmäßig endet der aktive Bereich dort, wo auch der Aktivierungsbereich endet. Mit dieser Eigenschaft lässt sich eine Pufferzone schaffen, die ein vorzeitiges Zurücksetzen verhindert, wenn eine Person über den Endpunkt des Aktivierungsbereichs hinweg vor- und zurückscrollt. Erst wenn das beobachtete Element den aktiven Bereich verlässt, wird der Trigger inaktiv.

Der Standardwert von `timeline-trigger-active-range-end` ist `auto`. Dadurch werden derselbe benannte Bereich und derselbe Versatz wie bei {{cssxref("timeline-trigger-activation-range-end")}} verwendet. Wenn Sie einen Timeline-Bereich, einen Versatz oder beides angeben, legt die Eigenschaft das Ende des aktiven Bereichs unabhängig vom Wert von `timeline-trigger-activation-range-end` fest. Verlängert der Wert den Aktivierungsbereich nicht, hat er keine Wirkung.

Der Wert `normal` legt das Ende des aktiven Bereichs auf das Ende des standardmäßigen benannten Bereichs fest. Dies entspricht entweder [`cover 100%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) für eine View-Progress-Timeline (wenn {{cssxref("timeline-trigger-source")}} auf die Funktion [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) gesetzt ist) oder [`scroll 100%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) für eine Scroll-Progress-Timeline (wenn `timeline-trigger-source` auf die Funktion [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) gesetzt ist).

Mit anderen Werten der Eigenschaft `timeline-trigger-active-range-end` können Sie Folgendes festlegen:

- Einen Versatz zum Bereich `normal`
  - : Ein Wert vom Typ `<length>` oder `<percentage>` gibt einen Versatz vom Anfang der `normal`-Timeline an, die standardmäßig entweder `cover` oder `scroll` entspricht. Negative Werte verschieben das Ende nach außen und verlängern so den aktiven Bereich. Positive Werte verschieben das Ende nach innen und verkürzen den aktiven Bereich.
- Das Ende eines bestimmten benannten Bereichs
  - : Ein Wert vom Typ `<timeline-range-name>` gibt einen Versatz von `100%` ab dem Anfang des benannten Timeline-Bereichs an. Dieser kann `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` sein. Weitere Informationen finden Sie unter [Namen von Timeline-Bereichen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Einen Versatz zu einem bestimmten benannten Bereich
  - : Wenn sowohl ein Wert vom Typ `<timeline-range-name>` als auch ein Wert vom Typ `<length>` oder `<percentage>` angegeben werden, liegt das Ende um den angegebenen Abstand vom Anfang des benannten Bereichs entfernt. Prozentwerte beziehen sich auf den angegebenen Bereich. Weitere Informationen finden Sie unter [Abstände mit Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

Wenn der Wert auf einen Punkt vor dem Ende des Aktivierungsbereichs gesetzt wird, wird der Wert von `timeline-trigger-activation-range-end` verwendet, als wäre `auto` angegeben worden.

Die Eigenschaft `timeline-trigger-active-range-end` kann zusammen mit der Eigenschaft {{cssxref("timeline-trigger-active-range-start")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger-active-range")}} festgelegt werden. Diese wiederum kann über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Mehrere Werte für das Bereichsende angeben

Wenn Sie in einer einzigen `timeline-trigger-active-range-end`-Deklaration mehrere kommagetrennte Werte angeben, gelten diese für die Timeline-Trigger in der Reihenfolge, in der sie in der Eigenschaft {{cssxref("timeline-trigger-name")}} aufgeführt sind. Stimmen die Anzahl der Trigger und die Anzahl der Werte für `timeline-trigger-active-range-end` nicht überein, werden die Werte wie bei [mehreren Werten für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) angewendet.

Wenn beispielsweise mehrere Werte für `timeline-trigger-name`, aber nur ein Wert für `timeline-trigger-active-range-end` festgelegt sind, gilt dieser Wert für alle `timeline-trigger-name`-Werte. Sind zwei oder mehr Werte für `timeline-trigger-active-range-end` festgelegt, werden sie für die `timeline-trigger-name`-Werte der Reihe nach wiederholt, bis jedem Timeline-Trigger ein Wert für `timeline-trigger-active-range-end` zugewiesen ist.

Betrachten Sie diese Deklarationen:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range-end:
  110%,
  exit 300px;
```

In diesem Fall verwendet `--my-trigger` das Bereichsende `110%` und `--my-other-trigger` das Bereichsende `exit 300px`. Da es drei Namen, aber nur zwei Bereichsenden gibt, werden die Bereichsenden wiederholt. Der dritte Triggername, `--another-trigger`, verwendet daher ebenfalls das Bereichsende `110%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich die Verlängerung des aktiven Bereichs eines Triggers auswirkt. Dazu werden zwei identische ausgelöste Animationen verglichen. Bei einem der Animationstrigger wird das Ende des aktiven Bereichs mit der Eigenschaft `timeline-trigger-active-range-end` nach außen verschoben.

#### HTML

Das Markup enthält vier {{htmlelement("div")}}-Elemente – zwei, die animiert werden, und zwei, die als Trigger dienen. Außerdem enthält es einfachen Text, damit die Seite gescrollt werden kann. Der Textinhalt wird hier der Kürze halber nicht gezeigt.

```html
<div class="animated">I am animated</div>
<div class="animated longer">I am animated longer</div>

...
<section>
  <div class="trigger">I create the trigger</div>
  <div class="trigger longer">I create a longer trigger</div>
</section>
...
```

```html hidden live-sample___basic-example
<div class="animated">I am animated</div>
<div class="animated longer">I am animated longer</div>
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

<section>
  <div class="trigger">I create the trigger</div>
  <div class="trigger longer">I create a longer trigger</div>
</section>
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

Die Eigenschaft {{cssxref("position")}} der `.animated`-Elemente wird auf `fixed` gesetzt. Dadurch werden sie nahe der linken oberen Ecke des Scrollports positioniert, sodass erkennbar ist, wann ihre Animationen beginnen und anhalten.

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
.animated.longer {
  left: 150px;
}
section {
  display: flex;
  gap: 20px;
}
```

Als Nächstes definieren wir mit {{cssxref("@keyframes")}} die Animation `rotate`:

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

Über die Kurzschreibweise {{cssxref("animation")}} wird die Animation `rotate` auf die `.animated`-Elemente angewendet. Ohne zugehörigen Trigger würden die Elemente mit dem Laden der Seite beginnen, sich zu animieren. Die Eigenschaft `animation-trigger` macht daraus eine ausgelöste Animation. Die Werte verweisen jeweils auf einen `timeline-trigger-name` von `--t` beziehungsweise `--longerT` und definieren zwei `<animation-action>`-Werte – `play` und `pause`. Diese legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
.animated.longer {
  animation-trigger: --longerT play pause;
}
```

Das `.trigger`-Element erstellt über die folgenden Eigenschaften den Trigger für das `.animated`-Element:

- Einen {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner, auf den der Wert der Eigenschaft `animation-trigger` des `.animated`-Elements verweist, und verknüpft so die beiden Elemente.
- Eine {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird für den Timeline-Trigger eine View-Progress-Timeline verwendet; das nächstgelegene scrollende Vorfahrenelement dient als Timeline-Quelle.
- Einen {{cssxref("timeline-trigger-activation-range-end")}} mit dem Wert `contain 50%`. Der Bereich `contain` reicht von dem Zeitpunkt, zu dem sich das Trigger-Element vollständig im Scrollport befindet, bis zu dem Zeitpunkt, zu dem es beginnt, ihn zu verlassen. Dieser Wert legt fest, dass der Aktivierungsbereich des Triggers bei `50%` dieses Bereichs endet – also dann, wenn das Element vertikal im Scrollport zentriert ist.

Das Element `.trigger.longer` erstellt über die folgenden Eigenschaften den Trigger für das Element `.animated.longer`:

- Einen {{cssxref("timeline-trigger-name")}} mit dem Wert `--longerT` (der `--t` überschreibt). Dieser entspricht dem Bezeichner, auf den der Wert der Eigenschaft `animation-trigger` des Elements `.animated.longer` verweist, und verknüpft so die beiden Elemente.

- Einen `timeline-trigger-active-range-end` mit dem Wert `cover 100%`. Der Bereich `cover` reicht von dem Zeitpunkt, zu dem das Trigger-Element erstmals beginnt, in den Scrollport einzutreten, bis zu dem Zeitpunkt, zu dem es ihn vollständig verlassen hat.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range-end: contain 50%;
}
.trigger.longer {
  timeline-trigger-name: --longerT;
  timeline-trigger-active-range-end: cover 100%;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-active-range-end: cover 100%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-active-range-end property.";
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

Scrollen Sie den Inhalt nach oben. Beide Animationen beginnen, sobald die beobachteten `.trigger`-Elemente erstmals sichtbar werden. Die Animation eines Elements wird angehalten, wenn der Trigger `50%` der `contain`-Timeline erreicht. Die andere Animation wird erst angehalten, wenn der Trigger den Viewport vollständig verlassen hat.

Wenn Sie anschließend wieder nach unten scrollen, beginnen beide Animationen erneut, sobald die Trigger-Elemente den `50%`-Punkt erreichen. Das gilt auch dann, wenn beide Animationen zuvor angehalten wurden: Der verlängerte aktive Bereich bewirkt lediglich, dass der Trigger länger aktiv bleibt. Er ändert nicht den Punkt, an dem die Aktivierung erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-active-range")}}-Kurzschreibweise
- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger")}}-Kurzschreibweise
- [Durch Scrollen ausgelöste CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
