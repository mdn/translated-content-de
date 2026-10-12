---
title: timeline-trigger-active-range-start CSS property
short-title: timeline-trigger-active-range-start
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range-start
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
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

Diese Eigenschaft wird als kommagetrennte Liste aus den folgenden Werten angegeben:

- `auto`
  - : Verwendet den Wert der Eigenschaft {{cssxref("timeline-trigger-activation-range-start")}}. Dies ist der Standardwert.
- `normal`
  - : Legt den Beginn des Bereichs `normal` fest, also `0%`. Dies entspricht `cover 0%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `scroll 0%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, der vom Beginn der Timeline `normal` aus gemessen wird. Prozentwerte beziehen sich auf die Länge des [`normal`](#normal)-Timeline-Bereichs.
- {{cssxref("timeline-range-name")}}
  - : Legt den Beginn, also `0%`, des Timeline-Bereichs `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` fest.
- `<timeline-range-name>` `<length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Beginn des angegebenen [benannten Timeline-Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) aus gemessen wird. Prozentwerte beziehen sich auf die Länge des benannten Bereichs.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-active-range-start` können Sie den Beginn des [aktiven Bereichs](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) eines Triggers ausdrücklich auf einen Wert festlegen, der gleich dem Wert von {{cssxref("timeline-trigger-activation-range-start")}} ist oder davor liegt. Letztere Eigenschaft legt den Beginn des Aktivierungsbereichs des Triggers fest.

Der _aktive Bereich_ ist der Bereich, in dem ein Trigger nach seiner Aktivierung aktiviert bleibt. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt; die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt. Standardmäßig beginnt der aktive Bereich dort, wo der Aktivierungsbereich beginnt. Mit dieser Eigenschaft können Sie eine Pufferzone schaffen, damit der Trigger nicht vorzeitig zurückgesetzt wird, wenn Benutzer über den Anfangspunkt der Aktivierung hinweg vor- und zurückscrollen. Erst wenn das beobachtete Element den _aktiven Bereich_ verlässt, wird der Trigger inaktiv.

Der Standardwert von `timeline-trigger-active-range-start` ist `auto`. Damit werden derselbe benannte Bereich und derselbe Versatz wie bei {{cssxref("timeline-trigger-activation-range-start")}} verwendet. Wenn Sie einen Timeline-Bereich, einen Versatz oder beides angeben, legt diese Eigenschaft den Beginn des aktiven Bereichs unabhängig vom Wert von `timeline-trigger-activation-range-start` fest. Wenn die Anfangsposition den Aktivierungsbereich nicht erweitert, hat sie keine Wirkung.

Der Wert `normal` legt den Beginn des aktiven Bereichs auf den Beginn des standardmäßigen benannten Bereichs fest: Für eine View-Progress-Timeline (wenn {{cssxref("timeline-trigger-source")}} auf eine [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion gesetzt ist) ergibt sich [`cover 0%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover), für eine Scroll-Progress-Timeline (wenn `timeline-trigger-source` auf eine [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)-Funktion gesetzt ist) dagegen [`scroll 0%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll).

Mit anderen Werten der Eigenschaft `timeline-trigger-active-range-start` können Sie Folgendes festlegen:

- Einen Versatz zum Bereich `normal`
  - : Ein `<length>`- oder `<percentage>`-Wert gibt einen Versatz vom Beginn der `normal`-Timeline [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) oder [`scroll`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) an. Negative Werte verschieben den Beginn nach außen und verlängern so den aktiven Bereich. Positive Werte verschieben den Beginn des aktiven Bereichs nach innen und verkürzen ihn.
- Den Beginn eines bestimmten benannten Bereichs
  - : Ein `<timeline-range-name>`-Wert gibt einen Versatz von `0%` innerhalb des benannten Timeline-Bereichs an. Dieser kann `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` sein. Weitere Informationen finden Sie unter [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Einen Versatz zu einem bestimmten benannten Bereich
  - : Wenn sowohl ein `<timeline-range-name>`-Wert als auch ein `<length>`- oder `<percentage>`-Wert angegeben werden, wird der Beginn um den angegebenen Abstand vom Beginn des benannten Bereichs verschoben. Prozentwerte beziehen sich auf den angegebenen Bereich. Weitere Informationen finden Sie unter [Einzüge mithilfe von Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

Die Eigenschaft `timeline-trigger-active-range-start` kann zusammen mit der Eigenschaft {{cssxref("timeline-trigger-active-range-end")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger-active-range")}} festgelegt werden. Diese wiederum kann über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Mehrere Werte für den Bereichsbeginn angeben

Wenn Sie in einer einzigen `timeline-trigger-active-range-start`-Deklaration mehrere kommagetrennte Werte angeben, werden diese in der Reihenfolge auf die Timeline-Trigger angewendet, in der die Trigger in der Eigenschaft {{cssxref("timeline-trigger-name")}} aufgeführt sind. Stimmen die Anzahl der Trigger und die Anzahl der Werte für `timeline-trigger-active-range-start` nicht überein, werden sie genauso angewendet wie [mehrere Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

Wenn beispielsweise mehrere `timeline-trigger-name`-Werte, aber nur ein `timeline-trigger-active-range-start`-Wert angegeben sind, gilt dieser Wert für alle `timeline-trigger-name`-Werte. Sind zwei oder mehr `timeline-trigger-active-range-start`-Werte angegeben, werden sie wiederholt auf die `timeline-trigger-name`-Werte angewendet, bis jedem Timeline-Trigger ein `timeline-trigger-active-range-start`-Wert zugeordnet ist.

Betrachten Sie die folgenden Deklarationen:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range-start:
  contain,
  entry 5%;
```

In diesem Fall verwendet `--my-trigger` den Beginn des Bereichs `contain` und `--my-other-trigger` den Beginn des Bereichs `entry 5%`. Da drei Namen, aber nur zwei Bereichsanfänge vorhanden sind, werden die Werte wiederholt: Der dritte Triggername, `--another-trigger`, verwendet daher ebenfalls den Beginn des Bereichs `contain`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, welche Auswirkungen es hat, den aktiven Bereich eines Triggers zu erweitern. Es vergleicht zwei identische ausgelöste Animationen, wobei der Beginn des aktiven Bereichs eines Animationstriggers mit der Eigenschaft `timeline-trigger-active-range-start` nach außen verschoben wird.

#### HTML

Das Markup enthält vier {{htmlelement("div")}}-Elemente – zwei für die Animationen und zwei für die Trigger – sowie einfachen Textinhalt, damit die Seite scrollbar ist. Der Textinhalt ist der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} der `.animated`-Elemente ist auf `fixed` gesetzt. Dadurch werden sie in der Nähe der linken oberen Ecke des Scrollports positioniert, sodass Sie sehen können, wann ihre Animationen beginnen und enden.

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

Mit der Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf die `.animated`-Elemente angewendet. Ohne zugehörigen Trigger würden die Elemente beim Laden der Seite mit der Animation beginnen. Durch die Eigenschaft `animation-trigger` wird die Animation stattdessen ausgelöst. Die Werte verweisen jeweils auf einen `timeline-trigger-name` namens `--t` beziehungsweise `--longer-t` und definieren dieselben beiden `<animation-action>`-Werte – `play` und `pause`. Diese legen fest, dass die Animationen bei der Aktivierung abgespielt und bei der Deaktivierung pausiert werden.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
.animated.longer {
  animation-trigger: --longer-t play pause;
}
```

Das `.trigger`-Element erstellt den Trigger für das `.animated`-Element mithilfe der folgenden Eigenschaften:

- Ein {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner im Wert der Eigenschaft `animation-trigger` des `.animated`-Elements und verknüpft dadurch die beiden Elemente.
- Ein {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird für den Timeline-Trigger eine View-Progress-Timeline verwendet; das Element, das die Timeline bereitstellt, ist das nächstgelegene scrollbare Vorfahrenelement.
- Ein {{cssxref("timeline-trigger-activation-range")}} mit dem Wert `contain 50% contain 100%`. Der Bereich `contain` reicht von dem Zeitpunkt, an dem sich das Trigger-Element vollständig im Scrollport befindet, bis zu dem Zeitpunkt, an dem es diesen zu verlassen beginnt. Mit diesem Wert beginnt der Aktivierungsbereich des Triggers bei `50%` des Bereichs `contain` (wenn die Unterkante des beobachteten Elements die Mitte des Scrollports erreicht) und endet bei `100%`, wenn die Oberkante des Elements den Scrollport erstmals verlässt.

Das `.trigger.longer`-Element erstellt den Trigger für das `.animated.longer`-Element mithilfe der folgenden Eigenschaften:

- Ein {{cssxref("timeline-trigger-name")}} mit dem Wert `--longer-t` (der `--t` überschreibt). Dieser entspricht dem Bezeichner im Wert der Eigenschaft `animation-trigger` des `.animated.longer`-Elements und verknüpft dadurch die beiden Elemente.

- Ein `timeline-trigger-active-range-start` mit dem Wert `contain 0%`. Dieser Punkt ist erreicht, wenn die Unterkante des Trigger-Elements mit der Unterkante des Scrollports übereinstimmt.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 50% contain 100%;
}
.trigger.longer {
  timeline-trigger-name: --longer-t;
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

Scrollen Sie den Inhalt nach oben. Beide Animationen beginnen abzuspielen, wenn die beobachteten `.trigger`-Elemente die Mitte des Scrollports erreichen, und hören auf, wenn diese Elemente den Scrollport am oberen Rand zu verlassen beginnen.

Wenn Sie anschließend nach unten scrollen, beginnen beide Animationen abzuspielen, sobald sich die beobachteten Elemente vollständig im Scrollport befinden und ihre Oberkanten mit der Oberkante des Scrollports übereinstimmen. Die erste Animation pausiert, wenn das beobachtete Element den Aktivierungsbereich verlässt, also die Mitte des Scrollports passiert. Die zweite Animation pausiert erst, wenn ihr Trigger-Element beginnt, den Scrollport am unteren Rand zu verlassen. Der Grund dafür ist, dass der erweiterte aktive Bereich der zweiten Animation den Trigger länger aktiv hält.

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
- [Durch Scrollen ausgelöste CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
