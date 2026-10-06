---
title: timeline-trigger-active-range-end CSS property
short-title: timeline-trigger-active-range-end
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range-end
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-trigger-active-range-end`** legt das Ende des aktiven Bereichs eines Triggers für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

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
  - : Bezeichnet das Ende des Bereichs `normal`, also `100%`. Entspricht `cover 100%` bei einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `scroll 100%` bei einer [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang der `normal`-Timeline aus gemessen wird. Prozentwerte beziehen sich auf die Länge des [`normal`](#normal)-Timeline-Bereichs.
- {{cssxref("timeline-range-name")}}
  - : Bezeichnet das Ende, also `100%`, des Timeline-Bereichs `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll`.
- `<timeline-range-name>` `<length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang des angegebenen [benannten Timeline-Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) aus gemessen wird. Prozentwerte beziehen sich auf die Länge des benannten Bereichs.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-active-range-end` können Sie das Ende des [aktiven Bereichs](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) eines Triggers ausdrücklich auf einen Punkt festlegen, der auf der Timeline am oder nach dem Ende seines Aktivierungsbereichs liegt. Das Ende des Aktivierungsbereichs wird durch {{cssxref("timeline-trigger-activation-range-end")}} angegeben.

Der _aktive Bereich_ ist der Bereich, in dem ein Trigger nach seiner Aktivierung aktiviert bleibt. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt; die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt. Standardmäßig endet der aktive Bereich dort, wo der Aktivierungsbereich endet. Diese Eigenschaft schafft eine Pufferzone, die ein vorzeitiges Zurücksetzen verhindert, wenn Benutzer über den Endpunkt des Aktivierungsbereichs hin und her scrollen. Erst wenn sich das beobachtete Element aus dem aktiven Bereich herausbewegt, wird der Trigger inaktiv.

Der Standardwert von `timeline-trigger-active-range-end` ist `auto`. Damit werden derselbe benannte Bereich und derselbe Versatz wie bei {{cssxref("timeline-trigger-activation-range-end")}} verwendet. Wenn Sie einen Timeline-Bereich, einen Versatz oder beides angeben, legt diese Eigenschaft das Ende des aktiven Bereichs unabhängig vom Wert von `timeline-trigger-activation-range-end` fest. Liegt der angegebene Endpunkt nicht hinter dem Ende des Aktivierungsbereichs, hat der Wert keine Wirkung.

Der Wert `normal` legt das Ende des aktiven Bereichs auf das Ende des standardmäßigen benannten Bereichs fest. Das entspricht entweder [`cover 100%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) bei einer View-Progress-Timeline (wenn {{cssxref("timeline-trigger-source")}} auf eine [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion gesetzt ist) oder [`scroll 100%`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll) bei einer Scroll-Progress-Timeline (wenn `timeline-trigger-source` auf eine [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)-Funktion gesetzt ist).

Mit anderen Werten der Eigenschaft `timeline-trigger-active-range-end` können Sie Folgendes festlegen:

- Einen Versatz vom Bereich `normal`
  - : Ein `<length>`- oder `<percentage>`-Wert gibt einen Versatz vom Anfang der `normal`-Timeline an, die standardmäßig entweder `cover` oder `scroll` entspricht. Negative Werte verschieben das Ende nach außen und verlängern damit den aktiven Bereich. Positive Werte verschieben es nach innen und verkürzen den aktiven Bereich.
- Das Ende eines bestimmten benannten Bereichs
  - : Ein `<timeline-range-name>`-Wert gibt einen Versatz von `100%` ab dem Anfang des benannten Timeline-Bereichs an. Dieser kann `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` oder `scroll` sein. Siehe [Namen von Timeline-Bereichen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Einen Versatz von einem bestimmten benannten Bereich
  - : Wenn sowohl ein `<timeline-range-name>` als auch ein `<length>`- oder `<percentage>`-Wert angegeben werden, wird das Ende um den angegebenen Abstand vom Anfang des benannten Bereichs versetzt. Prozentwerte beziehen sich auf den angegebenen Bereich. Siehe [Einzüge mit Prozentwerten festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

Wenn der Wert auf einen Punkt vor dem Ende des Aktivierungsbereichs gesetzt wird, gilt stattdessen der Wert von `timeline-trigger-activation-range-end`, als wäre `auto` angegeben worden.

Die Eigenschaft `timeline-trigger-active-range-end` kann zusammen mit der Eigenschaft {{cssxref("timeline-trigger-active-range-start")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger-active-range")}} festgelegt werden. Diese lässt sich wiederum über die Kurzschreibweise {{cssxref("timeline-trigger")}} festlegen.

### Mehrere Werte für das Bereichsende angeben

Wenn Sie in einer `timeline-trigger-active-range-end`-Deklaration mehrere kommagetrennte Werte angeben, werden diese den Timeline-Triggern in der Reihenfolge zugeordnet, in der sie in der Eigenschaft {{cssxref("timeline-trigger-name")}} erscheinen. Stimmen die Anzahl der Trigger und die Anzahl der Werte für `timeline-trigger-active-range-end` nicht überein, erfolgt die Zuordnung wie bei [mehreren Werten für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

Wenn beispielsweise mehrere `timeline-trigger-name`-Werte, aber nur ein `timeline-trigger-active-range-end`-Wert festgelegt sind, gilt dieser Wert für alle `timeline-trigger-name`-Werte. Sind zwei oder mehr `timeline-trigger-active-range-end`-Werte festgelegt, werden sie der Reihe nach wiederholt, bis jedem Timeline-Trigger ein Wert zugeordnet ist.

Betrachten Sie diese Deklarationen:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-active-range-end:
  110%,
  exit 300px;
```

In diesem Fall verwendet `--my-trigger` das Bereichsende `110%` und `--my-other-trigger` das Bereichsende `exit 300px`. Da drei Namen, aber nur zwei Bereichsenden vorhanden sind, werden die Werte wiederholt: Der dritte Triggername, `--another-trigger`, verwendet ebenfalls das Bereichsende `110%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich das Verlängern des aktiven Bereichs eines Triggers auswirkt. Es vergleicht zwei identische ausgelöste Animationen. Bei einem der beiden Animationstrigger wird das Ende des aktiven Bereichs mit der Eigenschaft `timeline-trigger-active-range-end` nach außen verschoben.

#### HTML

Das Markup enthält vier {{htmlelement("div")}}-Elemente – zwei, die animiert werden, und zwei, die jeweils als Trigger dienen. Hinzu kommt Textinhalt, damit die Seite scrollbar ist. Der Textinhalt ist der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} der `.animated`-Elemente wird auf `fixed` gesetzt. Dadurch stehen sie nahe der oberen linken Ecke des Scrollports, sodass erkennbar ist, wann ihre Animationen beginnen und anhalten.

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

Als Nächstes definieren wir mit {{cssxref("@keyframes")}} eine `rotate`-Animation:

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

Über die Kurzschreibweise {{cssxref("animation")}} wird die `rotate`-Animation auf die `.animated`-Elemente angewendet. Ohne zugeordneten Trigger würden die Elemente beim Laden der Seite mit der Animation beginnen. Die Eigenschaft `animation-trigger` macht daraus eine ausgelöste Animation. Ihre Werte verweisen jeweils auf einen `timeline-trigger-name` namens `--t` beziehungsweise `--longerT` und definieren die beiden `<animation-action>`-Werte `play` und `pause`. Diese legen fest, dass die Animation bei Aktivierung abgespielt und bei Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
.animated.longer {
  animation-trigger: --longerT play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das Element `.animated` über die folgenden Eigenschaften:

- Ein {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser stimmt mit dem Bezeichner überein, auf den der `animation-trigger`-Wert des Elements `.animated` verweist, und verknüpft so beide Elemente.
- Ein {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt; das Element, das den Timeline-Trigger bereitstellt, ist das nächstgelegene scrollbare Vorfahrenelement.
- Ein {{cssxref("timeline-trigger-activation-range-end")}} mit dem Wert `contain 50%`. Der Bereich `contain` reicht von dem Zeitpunkt, an dem das Trigger-Element vollständig in den Scrollport eingetreten ist, bis zu dem Zeitpunkt, an dem es beginnt, ihn zu verlassen. Dieser Wert legt das Ende des Aktivierungsbereichs auf `50%` dieses Bereichs fest. An diesem Punkt ist das Element vertikal im Scrollport zentriert.

Das Element `.trigger.longer` erstellt den Trigger für das Element `.animated.longer` über die folgenden Eigenschaften:

- Ein {{cssxref("timeline-trigger-name")}} mit dem Wert `--longerT`, der `--t` überschreibt. Dieser Wert stimmt mit dem Bezeichner überein, auf den der `animation-trigger`-Wert des Elements `.animated.longer` verweist, und verknüpft so beide Elemente.

- Ein `timeline-trigger-active-range-end` mit dem Wert `cover 100%`. Der Bereich `cover` reicht von dem Zeitpunkt, an dem das Trigger-Element beginnt, in den Scrollport einzutreten, bis zu dem Zeitpunkt, an dem es ihn vollständig verlassen hat.

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

Scrollen Sie den Inhalt nach oben. Beide Animationen beginnen, wenn die beobachteten `.trigger`-Elemente erstmals sichtbar werden. Die Animation eines Elements hält an, wenn der Trigger `50%` der `contain`-Timeline erreicht. Die Animation des anderen Elements hält erst an, wenn der Trigger den Viewport vollständig verlassen hat.

Wenn Sie anschließend wieder nach unten scrollen, beginnen beide Animationen erneut, sobald die Trigger-Elemente den Punkt bei `50%` erreichen. Das gilt auch dann, wenn beide Animationen bereits angehalten haben: Der verlängerte aktive Bereich beeinflusst, wie lange der Trigger aktiv bleibt, nicht aber den Punkt, an dem die Aktivierung erfolgt.

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
- [Scrollgesteuerte CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
