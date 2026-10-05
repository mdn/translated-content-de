---
title: timeline-trigger-active-range-start CSS property
short-title: timeline-trigger-active-range-start
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range-start
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-trigger-active-range-start`** legt den Beginn des aktiven Bereichs eines Triggers für eine [durch Scrollen ausgelöste Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

## Syntax

```css
/* Keywords */
timeline-trigger-active-range-start: auto;
timeline-trigger-active-range-start: normal;

/* <length-percentage> */
timeline-trigger-active-range-start: 10%;
timeline-trigger-active-range-start: 50px;

/* Named timeline range */
timeline-trigger-active-range-start: contain;
timeline-trigger-active-range-start: exit;

/* Named timeline with <length-percentage> */
timeline-trigger-active-range-start: entry -5%;
timeline-trigger-active-range-start: contain 100px;

/* Multiple range start values */
timeline-trigger-active-range-start:
  contain -10px,
  entry 5%;

/* Global values */
timeline-trigger-active-range-start: inherit;
timeline-trigger-active-range-start: initial;
timeline-trigger-active-range-start: revert;
timeline-trigger-active-range-start: revert-layer;
timeline-trigger-active-range-start: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste der folgenden Werte angegeben:

- `auto`
  - : Übernimmt den Wert der Eigenschaft {{cssxref("timeline-trigger-activation-range-start")}}. Dies ist der Standardwert.
- `normal`
  - : Gibt den Beginn, also `0%`, des Bereichs `normal` an. Dies entspricht `cover 0%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `scroll 0%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, der vom Beginn der `normal`-Timeline aus gemessen wird. Prozentwerte beziehen sich auf die Länge des [`normal`](#normal)-Timeline-Bereichs.
- {{cssxref("timeline-range-name")}}
  - : Gibt den Beginn, also `0%`, des Timeline-Bereichs `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` an.
- `<timeline-range-name>` `<length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Beginn des angegebenen [benannten Timeline-Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) aus gemessen wird. Prozentwerte beziehen sich auf die Länge des benannten Bereichs.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-active-range-start` können Sie den Beginn des [aktiven Bereichs](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) eines Triggers ausdrücklich auf einen Wert festlegen, der gleich dem durch {{cssxref("timeline-trigger-activation-range-start")}} angegebenen Beginn des Aktivierungsbereichs ist oder davor liegt.

Der _aktive Bereich_ ist der Bereich, in dem ein Trigger nach seiner Aktivierung aktiviert bleibt. Die Aktivierung erfolgt, wenn das verfolgte Element in den _Aktivierungsbereich_ eintritt. Die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt. Standardmäßig beginnt der aktive Bereich dort, wo auch der Aktivierungsbereich beginnt. Diese Eigenschaft schafft einen Pufferbereich und verhindert, dass der Trigger vorzeitig zurückgesetzt wird, wenn eine Person über den Beginn des Aktivierungsbereichs hinweg vor- und zurückscrollt. Erst wenn sich ein verfolgtes Element aus dem _aktiven Bereich_ herausbewegt, wird der Trigger inaktiv.

Der Standardwert von `timeline-trigger-active-range-start` ist `auto`. Damit werden derselbe benannte Bereich und derselbe Versatz wie bei {{cssxref("timeline-trigger-activation-range-start")}} verwendet. Wird ein Timeline-Bereich, ein Versatz oder beides angegeben, legt diese Eigenschaft den Beginn des aktiven Bereichs unabhängig vom Wert von `timeline-trigger-activation-range-start` fest. Wenn die Startposition des Bereichs den Aktivierungsbereich nicht erweitert, hat sie keine Wirkung.

Der Wert `normal` setzt den Beginn des aktiven Bereichs auf den Beginn des standardmäßigen benannten Bereichs. Das ergibt entweder [`cover 0%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) für eine View-Progress-Timeline (wenn {{cssxref("timeline-trigger-source")}} auf eine [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion gesetzt ist) oder [`scroll 0%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) für eine Scroll-Progress-Timeline (wenn `timeline-trigger-source` auf eine [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)-Funktion gesetzt ist).

Mit anderen Werten der Eigenschaft `timeline-trigger-active-range-start` können Sie Folgendes festlegen:

- Einen Versatz gegenüber dem Bereich `normal`
  - : Ein `<length>`- oder `<percentage>`-Wert gibt einen Versatz gegenüber dem Beginn der `normal`-Timeline von [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) oder [`scroll`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) an. Negative Werte verschieben den Beginn nach außen und verlängern so den aktiven Bereich. Positive Werte verschieben den Beginn des aktiven Bereichs nach innen und verkürzen ihn.
- Den Beginn eines bestimmten benannten Bereichs
  - : Ein `<timeline-range-name>`-Wert gibt einen Versatz von `0%` entlang des benannten Timeline-Bereichs an. Dieser kann `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` sein. Siehe [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Einen Versatz gegenüber einem bestimmten benannten Bereich
  - : Werden sowohl ein `<timeline-range-name>` als auch ein `<length>`- oder `<percentage>`-Wert angegeben, wird der Beginn um den angegebenen Abstand vom Beginn des benannten Bereichs verschoben. Prozentwerte beziehen sich auf den angegebenen Bereich. Siehe [Insets mit Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

Die Eigenschaft `timeline-trigger-active-range-start` kann zusammen mit der Eigenschaft {{cssxref("timeline-trigger-active-range-end")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger-active-range")}} festgelegt werden. Diese kann wiederum über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Mehrere Werte für den Bereichsbeginn angeben

Wenn Sie in einer einzigen `timeline-trigger-active-range-start`-Deklaration mehrere kommagetrennte Werte angeben, werden diese den Timeline-Triggern in der Reihenfolge zugewiesen, in der sie in der Eigenschaft {{cssxref("timeline-trigger-name")}} erscheinen. Stimmen die Anzahl der Trigger und der Werte der Eigenschaft `timeline-trigger-active-range-start` nicht überein, werden sie wie [mehrere Werte von Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) zugewiesen.

Wenn beispielsweise mehrere `timeline-trigger-name`-Werte, aber nur ein `timeline-trigger-active-range-start`-Wert festgelegt sind, gilt dieser für alle `timeline-trigger-name`-Werte. Sind zwei oder mehr `timeline-trigger-active-range-start`-Werte festgelegt, werden sie der Reihe nach wiederholt, bis jedem Timeline-Trigger ein Wert zugewiesen ist.

Betrachten Sie diese Deklarationen:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range-start:
  contain,
  entry 5%;
```

In diesem Fall verwendet `--my-trigger` den Beginn des Bereichs `contain` und `--my-other-trigger` den Beginn `entry 5%`. Da es drei Namen, aber nur zwei Werte für den Bereichsbeginn gibt, werden diese wiederholt. Der dritte Trigger-Name, `--another-trigger`, verwendet daher ebenfalls den Beginn des Bereichs `contain`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich die Erweiterung des aktiven Bereichs eines Triggers auswirkt. Es vergleicht zwei identische ausgelöste Animationen, wobei der Beginn des aktiven Bereichs eines Animationstriggers mit der Eigenschaft `timeline-trigger-active-range-start` nach außen verschoben wird.

#### HTML

Das Markup enthält vier {{htmlelement("div")}}-Elemente – zwei für die Animationen und zwei als Trigger – sowie Textinhalt, der das Scrollen der Seite ermöglicht. Der Textinhalt ist der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} der `.animated`-Elemente ist auf `fixed` gesetzt. Dadurch werden sie nahe der oberen linken Ecke des Scrollports positioniert, sodass erkennbar ist, wann ihre Animationen beginnen und enden.

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

Mithilfe der Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf die `.animated`-Elemente angewendet. Ohne zugehörigen Trigger würden die Elemente beim Laden der Seite mit der Animation beginnen. Durch die Eigenschaft `animation-trigger` wird die Animation ausgelöst. Die Werte verweisen jeweils auf einen `timeline-trigger-name` von `--t` beziehungsweise `--longerT` und definieren dieselben beiden `<animation-action>`-Werte – `play` und `pause`. Diese legen fest, dass die Animationen bei der Aktivierung abgespielt und bei der Deaktivierung angehalten werden.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
.animated.longer {
  animation-trigger: --longerT play pause;
}
```

Das `.trigger`-Element erstellt den Trigger für das `.animated`-Element mit den folgenden Eigenschaften:

- {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner im Wert der Eigenschaft `animation-trigger` des `.animated`-Elements und verknüpft die beiden Elemente.
- {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt, wobei das nächstgelegene scrollende Vorfahrenelement die Timeline bereitstellt.
- {{cssxref("timeline-trigger-activation-range")}} mit dem Wert `contain 50% contain 100%`. Der Bereich `contain` reicht von dem Zeitpunkt, zu dem das Trigger-Element vollständig in den Scrollport eingetreten ist, bis zu dem Zeitpunkt, zu dem es ihn zu verlassen beginnt. Dieser Wert legt fest, dass der Aktivierungsbereich des Triggers bei `50%` des Bereichs `contain` beginnt (wenn sich die Unterkante des verfolgten Elements auf halber Höhe des Scrollports befindet) und bei `100%` endet, wenn die Oberkante des Elements den Scrollport erstmals verlässt.

Das `.trigger.longer`-Element erstellt den Trigger für das `.animated.longer`-Element mit den folgenden Eigenschaften:

- {{cssxref("timeline-trigger-name")}} mit dem Wert `--longerT` (der `--t` überschreibt). Dieser entspricht dem Bezeichner im Wert der Eigenschaft `animation-trigger` des `.animated.longer`-Elements und verknüpft die beiden Elemente.

- `timeline-trigger-active-range-start` mit dem Wert `contain 0%`. Dies ist der Punkt, an dem sich die Unterkante des Trigger-Elements an der Unterkante des Scrollports befindet.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 50% contain 100%;
}
.trigger.longer {
  timeline-trigger-name: --longerT;
  timeline-trigger-active-range-start: contain 0%;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-active-range-start: contain 0%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-active-range-start property.";
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

Scrollen Sie den Inhalt nach oben. Beide Animationen beginnen abzuspielen, wenn die verfolgten `.trigger`-Elemente die Mitte des Scrollports erreichen, und werden angehalten, wenn die Elemente beginnen, den Scrollport an seiner Oberkante zu verlassen.

Wenn Sie anschließend nach unten scrollen, beginnen beide Animationen abzuspielen, sobald sich die verfolgten Elemente vollständig im Scrollport befinden und ihre Oberkanten auf die Oberkante des Scrollports treffen. Die erste Animation wird angehalten, wenn das verfolgte Element den Aktivierungsbereich verlässt, also die Mitte des Scrollports passiert. Die zweite Animation wird erst angehalten, wenn ihr Trigger-Element beginnt, den Scrollport an dessen Unterkante zu verlassen. Das liegt daran, dass der erweiterte aktive Bereich der zweiten Animation dafür sorgt, dass der Trigger länger aktiv bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("timeline-trigger-active-range-end")}}
- Kurzschreibweise {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger-activation-range-end")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-activation-range")}}
- Kurzschreibweise {{cssxref("timeline-trigger")}}
- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
