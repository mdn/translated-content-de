---
title: timeline-trigger-active-range-end CSS property
short-title: timeline-trigger-active-range-end
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range-end
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
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

Diese Eigenschaft wird als durch Kommas getrennte Liste der folgenden Werte angegeben:

- `auto`
  - : Verwendet den Wert der Eigenschaft {{cssxref("timeline-trigger-activation-range-end")}}. Dies ist der Standardwert.
- `normal`
  - : Gibt das Ende, also `100%`, des Bereichs `normal` an. Entspricht `cover 100%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `scroll 100%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang der Timeline `normal` aus gemessen wird. Prozentwerte beziehen sich auf die Länge des [Timeline-Bereichs `normal`](#normal).
- {{cssxref("timeline-range-name")}}
  - : Gibt das Ende, also `100%`, des Timeline-Bereichs `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` an.
- `<timeline-range-name>` `<length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang des angegebenen [benannten Timeline-Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) aus gemessen wird. Prozentwerte beziehen sich auf die Länge des benannten Bereichs.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-active-range-end` können Sie das Ende des [aktiven Bereichs](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) eines Triggers explizit auf einen Punkt festlegen, der auf der Timeline am oder nach dem durch {{cssxref("timeline-trigger-activation-range-end")}} festgelegten Ende des Aktivierungsbereichs liegt.

Der _aktive Bereich_ ist der Bereich, innerhalb dessen ein Trigger nach seiner Aktivierung aktiviert bleibt. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt; die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt. Standardmäßig endet der aktive Bereich dort, wo der Aktivierungsbereich endet. Diese Eigenschaft schafft eine Pufferzone und verhindert, dass der Trigger vorzeitig zurückgesetzt wird, wenn ein Benutzer über den Endpunkt des Aktivierungsbereichs hinweg vor- und zurückscrollt. Erst wenn das beobachtete Element den aktiven Bereich verlässt, wird der Trigger inaktiv.

Der Standardwert von `timeline-trigger-active-range-end` ist `auto`. Damit werden derselbe benannte Bereich und derselbe Versatz wie bei {{cssxref("timeline-trigger-activation-range-end")}} verwendet. Wenn Sie einen Timeline-Bereich, einen Versatz oder beides angeben, legt diese Eigenschaft das Ende des aktiven Bereichs unabhängig vom Wert von `timeline-trigger-activation-range-end` fest. Liegt der angegebene Endpunkt nicht hinter dem Ende des Aktivierungsbereichs, hat die Eigenschaft keine Wirkung.

Der Wert `normal` setzt das Ende des aktiven Bereichs auf das Ende des standardmäßigen benannten Bereichs: [`cover 100%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) bei einer View-Progress-Timeline (wenn {{cssxref("timeline-trigger-source")}} auf eine [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion gesetzt ist) oder [`scroll 100%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) bei einer Scroll-Progress-Timeline (wenn `timeline-trigger-source` auf eine [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)-Funktion gesetzt ist).

Mit anderen Werten der Eigenschaft `timeline-trigger-active-range-end` können Sie Folgendes festlegen:

- Einen Versatz relativ zum Bereich `normal`
  - : Ein Wert vom Typ `<length>` oder `<percentage>` gibt einen Versatz vom Anfang der Timeline `normal` an, die standardmäßig entweder `cover` oder `scroll` entspricht. Negative Werte verschieben das Ende nach außen und verlängern so den aktiven Bereich. Positive Werte verschieben das Ende nach innen und verkürzen den aktiven Bereich.
- Das Ende eines bestimmten benannten Bereichs
  - : Ein Wert vom Typ `<timeline-range-name>` gibt einen Versatz von `100%` ab dem Anfang des benannten Timeline-Bereichs an. Dieser kann `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` sein. Siehe [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Einen Versatz relativ zu einem bestimmten benannten Bereich
  - : Wenn sowohl ein Wert vom Typ `<timeline-range-name>` als auch ein Wert vom Typ `<length>` oder `<percentage>` angegeben wird, liegt das Ende im angegebenen Abstand vom Anfang des benannten Bereichs. Prozentwerte beziehen sich auf den angegebenen Bereich. Siehe [Innenabstände mit Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

Wenn der Wert einen Punkt vor dem Ende des Aktivierungsbereichs bezeichnet, wird der Wert von `timeline-trigger-activation-range-end` verwendet, als wäre `auto` angegeben worden.

Die Eigenschaft `timeline-trigger-active-range-end` kann zusammen mit der Eigenschaft {{cssxref("timeline-trigger-active-range-start")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger-active-range")}} festgelegt werden. Diese kann wiederum über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Mehrere Werte für das Bereichsende angeben

Wenn Sie in einer `timeline-trigger-active-range-end`-Deklaration mehrere durch Kommas getrennte Werte angeben, werden diese den Timeline-Triggern in der Reihenfolge zugeordnet, in der sie in der Eigenschaft {{cssxref("timeline-trigger-name")}} erscheinen. Stimmen die Anzahl der Trigger und die Anzahl der Werte für `timeline-trigger-active-range-end` nicht überein, erfolgt die Zuordnung wie bei [mehreren Werten für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

Wenn beispielsweise mehrere Werte für `timeline-trigger-name`, aber nur ein Wert für `timeline-trigger-active-range-end` festgelegt sind, gilt dieser Wert für alle Trigger-Namen. Sind zwei oder mehr Werte für `timeline-trigger-active-range-end` festgelegt, werden sie wiederholt den Trigger-Namen zugeordnet, bis jeder Timeline-Trigger einen Wert hat.

Betrachten Sie diese Deklarationen:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range-end:
  110%,
  exit 300px;
```

In diesem Fall verwendet `--my-trigger` das Bereichsende `110%` und `--my-other-trigger` das Bereichsende `exit 300px`. Da es drei Namen, aber nur zwei Werte für das Bereichsende gibt, werden die Werte wiederholt: Der dritte Trigger-Name, `--another-trigger`, verwendet daher ebenfalls `110%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich die Verlängerung des aktiven Bereichs eines Triggers auswirkt. Es vergleicht zwei identische ausgelöste Animationen, wobei das Ende des aktiven Bereichs eines der Animationstrigger mit der Eigenschaft `timeline-trigger-active-range-end` nach außen verschoben wird.

#### HTML

Das Markup enthält vier {{htmlelement("div")}}-Elemente – zwei, die animiert werden, und zwei, die als Trigger dienen – sowie einfachen Textinhalt, der die Seite scrollbar macht. Der Textinhalt ist der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} der `.animated`-Elemente wird auf `fixed` gesetzt. Dadurch werden sie nahe der oberen linken Ecke des Scrollports positioniert, sodass erkennbar ist, wann ihre Animationen beginnen und enden.

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

Mit der Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf die `.animated`-Elemente angewendet. Ohne zugehörigen Trigger würden die Elemente beim Laden der Seite mit der Animation beginnen. Durch die Eigenschaft `animation-trigger` wird daraus eine ausgelöste Animation. Die Werte verweisen auf die `timeline-trigger-name`-Werte `--t` beziehungsweise `--longer-t` und definieren zwei `<animation-action>`-Werte – `play` und `pause`. Diese legen fest, dass die Animation bei Aktivierung abgespielt und bei Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
.animated.longer {
  animation-trigger: --longer-t play pause;
}
```

Das `.trigger`-Element erstellt den Trigger für das `.animated`-Element mit den folgenden Eigenschaften:

- Einem {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner, auf den der Wert der Eigenschaft `animation-trigger` des `.animated`-Elements verweist, und verknüpft so die beiden Elemente.
- Einer {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt und der nächstgelegene scrollende Vorfahr des Elements als Quelle für den Timeline-Trigger verwendet.
- Einem {{cssxref("timeline-trigger-activation-range-end")}} mit dem Wert `contain 50%`. Der Bereich `contain` reicht von dem Zeitpunkt, an dem das Trigger-Element vollständig in den Scrollport eingetreten ist, bis zu dem Zeitpunkt, an dem es beginnt, ihn zu verlassen. Dieser Wert legt das Ende des Aktivierungsbereichs auf `50%` dieses Bereichs fest. Das Trigger-Element befindet sich dann vertikal in der Mitte des Scrollports.

Das `.trigger.longer`-Element erstellt den Trigger für das `.animated.longer`-Element mit den folgenden Eigenschaften:

- Einem {{cssxref("timeline-trigger-name")}} mit dem Wert `--longer-t` (der `--t` überschreibt). Dieser entspricht dem Bezeichner, auf den der Wert der Eigenschaft `animation-trigger` des `.animated.longer`-Elements verweist, und verknüpft so die beiden Elemente.

- Einem `timeline-trigger-active-range-end` mit dem Wert `cover 100%`. Der Bereich `cover` reicht von dem Zeitpunkt, an dem das Trigger-Element beginnt, in den Scrollport einzutreten, bis zu dem Zeitpunkt, an dem es ihn vollständig verlassen hat.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range-end: contain 50%;
}
.trigger.longer {
  timeline-trigger-name: --longer-t;
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

Scrollen Sie den Inhalt nach oben. Beide Animationen beginnen, wenn die beobachteten `.trigger`-Elemente erstmals sichtbar werden. Die Animation eines Elements wird angehalten, wenn sich der Trigger bei `50%` der `contain`-Timeline befindet. Die Animation des anderen Elements wird erst angehalten, wenn der Trigger den Viewport vollständig verlassen hat.

Wenn Sie anschließend wieder nach unten scrollen, beginnen beide Animationen erneut, sobald die Trigger-Elemente den Punkt `50%` erreichen. Der aktive Bereich verlängert zwar die Zeitspanne, in der der Trigger aktiviert bleibt, ändert aber nicht den Punkt, an dem die Aktivierung erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("timeline-trigger-active-range-start")}}
- Kurzschreibweise {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-activation-range")}}
- Kurzschreibweise {{cssxref("timeline-trigger")}}
- [Durch Scrollen ausgelöste CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
