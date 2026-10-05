---
title: animation-trigger CSS property
short-title: animation-trigger
slug: Web/CSS/Reference/Properties/animation-trigger
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`animation-trigger`** legt fest, ob auf einem Element deklarierte [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) durch Trigger ausgelöst werden und, falls ja, welche Trigger dies sind und wie sich die Animationen verhalten, wenn der Trigger aktiv oder inaktiv wird. Damit lassen sich [scrollgesteuerte Animationen mit Triggern](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) erstellen.

## Syntax

```css
/* Keywords */
animation-trigger: none;

/* One trigger */
animation-trigger: --my-trigger play;
animation-trigger: --my-other-trigger play-once;
animation-trigger: --my-trigger play-forwards play-backwards;
animation-trigger: --my-other-trigger play reset;

/* Multiple values */
animation-trigger:
  none,
  -forwards play-backwards,
  --my-other-trigger play reset;

/* Global values */
animation-trigger: inherit;
animation-trigger: initial;
animation-trigger: revert;
animation-trigger: revert-layer;
animation-trigger: unset;
```

### Werte

Der Wert wird als kommagetrennte Liste angegeben. Jeder Eintrag ist entweder das Schlüsselwort `none` oder ein {{cssxref("dashed-ident")}}, gefolgt von einem oder zwei {{cssxref("animation-action")}}-Werten.

- `none`
  - : Die zugehörige Animation wird nicht durch einen Trigger ausgelöst.
- {{cssxref("dashed-ident")}}
  - : Ein benutzerdefinierter Bezeichner für den Namen des Triggers, der die Animation auslöst.
- {{cssxref("animation-action")}}
  - : Ein `<animation-action>`-Wert: eines der Schlüsselwörter `none`, `play`, `play-forwards`, `play-backwards`, `play-once`, `pause`, `replay` oder `reset`.

## Beschreibung

Die Eigenschaft `animation-trigger` legt fest, welcher Trigger die Animationen eines animierten Elements steuert. Ein anderer Wert als `none` macht die Animation zu einer [scrollgesteuerten Animation mit Trigger](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

### Einen Trigger definieren

Der Trigger wird durch einen `<dashed-ident>`-Wert identifiziert, der in der Eigenschaft {{cssxref("timeline-trigger-name")}} des beobachteten Elements definiert ist.

Zum Beispiel:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play;
}
```

In diesem Fall wird die Animation abgespielt, wenn ein Element mit dem `timeline-trigger-name` `--my-trigger` in den für den Trigger definierten Aktivierungsbereich eintritt.

Hier erstellen wir einen Trigger, indem wir `timeline-trigger-name` über die Kurzschreibweise {{cssxref("timeline-trigger")}} festlegen. `.trigger` kann ein beliebiges Element sein, auch das Element `.animated`.

```css
.trigger {
  timeline-trigger: --my-trigger view();
}
```

Wenn für ein Element sowohl eine Animation als auch `animation-trigger` festgelegt ist, aber kein scrollendes Element existiert, dessen `timeline-trigger-name` denselben `<dashed-ident>`-Wert hat, besitzt die Animation keinen Trigger und wird daher nie abgespielt.

### Aktionen für die ausgelöste Animation definieren

Der Wert von `animation-trigger` muss nach dem `<dashed-ident>` ein oder zwei {{cssxref("animation-action")}}-Schlüsselwörter enthalten. Sie bestimmen das Verhalten der Animation bei der Aktivierung und Deaktivierung des Triggers. Werden zwei `<animation-action>`-Werte angegeben, gilt der erste für die Aktivierung und der zweite für die Deaktivierung. Wird nur ein `<animation-action>`-Wert angegeben, gilt er für die Aktivierung; bei der Deaktivierung geschieht nichts.

Zum Beispiel:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-forwards play-backwards;
}
```

Wenn der Trigger aktiviert wird, wird die Animation mit `play-forwards` abgespielt. Wenn der Trigger deaktiviert wird, wird sie mit `play-backwards` abgespielt.

Es gibt acht `<animation-action>`-Werte, die jeweils ein anderes Animationsverhalten bewirken.

Die Kombination `play-forwards play-backwards` ist ein häufiges Muster: Ein Element wird beim Aktivieren seines Triggers „eingeblendet“, etwa wenn es in den sichtbaren Bereich gescrollt wird, und beim Deaktivieren wieder „ausgeblendet“, etwa wenn es aus dem sichtbaren Bereich gescrollt wird.

Die Aktion `play-once` wird im Allgemeinen allein oder als Teil von `play-once pause` verwendet. Wird `play-once` als Aktivierungsaktion festgelegt, wird die Animation nur einmal abgespielt, wenn das Element in den sichtbaren Bereich gescrollt wird. Durch `pause` als Deaktivierungsaktion wird die Animation angehalten, wenn der Trigger seinen aktiven Bereich verlässt. Wird der Trigger erneut aktiviert, läuft die Animation an der Stelle weiter, an der sie angehalten wurde.

Weitere Informationen und Beispiele zu den einzelnen Schlüsselwörtern finden Sie beim Datentyp {{cssxref("animation-action")}}.

### Eine Animation durch mehrere Trigger auslösen

Wenn Sie Trigger auf mehreren Elementen definieren möchten, die alle dieselbe Animation auf einem Element auslösen, müssen Sie die Animation auf diesem animierten Element mehrfach angeben und jeder `animation`-Instanz einen anderen Trigger zuweisen.

Zum Beispiel:

```css
.animated {
  animation:
    spinOnce 2s 1 ease-out,
    spinOnce 2s 1 ease-out;
  animation-trigger:
    --t1 play-forwards play-backwards,
    --t2 play-forwards play-backwards;
}

.trigger1 {
  timeline-trigger: --t1 view();
}

.trigger2 {
  timeline-trigger: --t2 view();
}
```

Ein funktionsfähiges Beispiel finden Sie unter [Mehrere Trigger für dieselbe Animation](#mehrere_trigger_für_dieselbe_animation).

### Zurücksetzen durch die Kurzschreibweise `animation`

Die Eigenschaft `animation-trigger` ist eine Untereigenschaft der Kurzschreibweise {{cssxref("animation")}}, die von dieser nur zurückgesetzt wird. Das bedeutet, dass Triggernamen und Animationsaktionen nicht in der Kurzschreibweise `animation` angegeben werden können. Wenn Sie `animation` festlegen, wird `animation-trigger` jedoch auf seinen Anfangswert `none` zurückgesetzt. Legen Sie deshalb `animation-trigger` innerhalb einer Deklarationsliste immer nach der zugehörigen Eigenschaft `animation` fest, oder deklarieren Sie `animation-trigger` in einem Deklarationsblock mit Selektoren höherer {{cssxref("specificity")}}.

### Mehrere `animation-trigger`-Werte

Mehrere {{cssxref("animation-trigger")}}-Werte funktionieren genauso wie [mehrere Werte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) für die Kurzschreibweise {{cssxref("animation")}} und die anderen einzelnen Animationseigenschaften:

- Wenn mehrere `animation-name`-Werte, aber nur ein `animation-trigger`-Wert festgelegt sind, gilt dieser `animation-trigger` für alle Animationen.
- Wenn zwei oder mehr kommagetrennte `animation-trigger`-Werte festgelegt sind, werden sie den Animationen der Reihe nach wiederholt zugewiesen, bis jede Animation einen `animation-trigger`-Wert hat. Ein Beispiel finden Sie unter [Mehrere scrollgesteuerte Animationen mit Triggern deklarieren](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations#multiple_scroll-triggered_animations).

Gegeben sei folgendes CSS:

```css
.animated {
  animation:
    fade-in linear 1s forwards,
    rotate infinite 5s both,
    shrink ease-in 3s forwards,
    colorchange steps(5) 5s forwards;

  animation-trigger:
    --t1 play pause,
    --t2 forwards backwards;
}
.trigger1 {
  timeline-trigger: --t1 view();
}
.trigger2 {
  timeline-trigger: --t2 view();
}
```

Wenn für das animierte Element `animation-trigger: --t1 play pause, --t2 forwards backwards` festgelegt ist, löst `--t1` die Animationen `fade-in` und `shrink` aus, während `--t2` die Animationen `rotate` und `colorchange` auslöst.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie eine scrollgesteuerte Animation mit Trigger erstellen, die bei Aktivierung abgespielt und bei Deaktivierung angehalten wird.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente – eines für die Animation und eines zum Erstellen eines Triggers – sowie etwas Text, damit die Seite gescrollt werden kann. Der Text ist der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} des Elements `.animated` wird auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass zu sehen ist, wie die Animation abgespielt und angehalten wird.

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

```css live-sample___basic-example live-sample___multiple-triggers
.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Als Nächstes definieren wir die {{cssxref("@keyframes")}} für die Animation `rotate`:

```css live-sample___basic-example live-sample___multiple-triggers
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

Mit der Kurzschreibweise `animation` wird die Animation `rotate` auf das Element `.animated` angewendet. Ohne zugehörigen Trigger würde die Animation beim Laden der Seite beginnen. Die Eigenschaft `animation-trigger` macht sie zu einer durch einen Trigger ausgelösten Animation. Der Wert verweist auf einen `timeline-trigger-name` namens `--t` und gibt zwei `<animation-action>`-Werte an – `play` und `pause`. Diese legen fest, dass die Animation bei Aktivierung abgespielt und bei Deaktivierung angehalten wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play pause;
}
```

Wir legen für das Element `.trigger` den `timeline-trigger-name` `--t` fest. Da dieser Wert dem Bezeichner entspricht, auf den der Wert von `animation-trigger` im Deklarationsblock von `.animated` verweist, werden die beiden Elemente miteinander verknüpft. So entsteht der Trigger für das animierte Element. Außerdem geben wir für {{cssxref("timeline-trigger-source")}} den Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) an. Dadurch basiert der Timeline-Trigger auf einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines); sowohl der aktive Bereich als auch der Aktivierungsbereich umfassen die gesamte `cover`-Timeline. Beides ließe sich auch zusammen als `timeline-trigger: view() --t` deklarieren.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben und unten. Sobald ein Teil des Elements `.trigger` im Scrollport erscheint, wird die Animation abgespielt. Hat das Element den Scrollport an einer der beiden Kanten vollständig verlassen, wird die Animation angehalten.

### Das animierte Element als Trigger verwenden

Dieses Beispiel zeigt, wie ein animiertes Element auch seinen eigenen Trigger erstellen kann.

#### HTML

Diesmal enthält das Markup nur ein {{htmlelement("div")}}-Element sowie Text, durch den die Seite gescrollt werden kann. Das Markup für den Text ist der Kürze halber ausgeblendet.

```html
<div>I create my own trigger</div>
```

```html hidden live-sample___same-element
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

<div>I create my own trigger</div>

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

Wir erstellen einen `@keyframes`-Block, der die Hintergrund- und Vordergrundfarben umkehrt:

```css hidden live-sample___same-element
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
}

div {
  height: 100px;
  background: orange;
  border: 5px solid black;
}
```

```css live-sample___same-element
@keyframes invert-colors {
  from {
    background: orange;
    color: black;
  }

  to {
    background: black;
    color: orange;
  }
}
```

Wir legen `animation` für das {{htmlelement("div")}}-Element fest, sodass die Farben innerhalb von 600ms fließend umgekehrt werden. Außerdem legen wir einen `animation-trigger`-Wert fest, der auf den `timeline-trigger-name` `--t` verweist und zwei `<animation-action>`-Werte enthält: `play-forwards` und `play-backwards`. Sie bestimmen, dass die Animation bei Aktivierung vorwärts und bei Deaktivierung rückwärts abgespielt wird.

Zusätzlich legen wir für das `<div>` den Wert `timeline-trigger: --t view() contain` fest, sodass es den Trigger für seine eigene Animation erstellt. Die Kurzschreibweise `timeline-trigger` enthält Werte für drei einzelne Eigenschaften:

- Einen Wert für {{cssxref("timeline-trigger-name")}}: einen `<dashed-ident>`-Bezeichner, auf den die Eigenschaft `animation-trigger` verweist.
- Einen Wert für {{cssxref("timeline-trigger-source")}}: [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) legt fest, dass der Timeline-Trigger auf einer View-Progress-Timeline basiert, die das Element innerhalb seines nächstgelegenen scrollenden Vorfahren verfolgt.
- Einen Wert für {{cssxref("timeline-trigger-activation-range")}}: Der {{cssxref("timeline-range-name")}}-Wert [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#contain) bewirkt, dass der Trigger aktiviert wird, wenn sich das `<div>` vollständig im Scrollport befindet. Da wir für die Komponente {{cssxref("timeline-trigger-active-range")}} keinen Wert festgelegt haben, entspricht der aktive Bereich dem Aktivierungsbereich. Der Trigger wird daher deaktiviert, sobald das Element beginnt, den Scrollport zu verlassen.

```css live-sample___same-element
div {
  animation: invert-colors 0.6s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
  timeline-trigger: --t view() contain;
}
```

#### Ergebnis

{{EmbedLiveSample("same-element", "100%", "240")}}

Scrollen Sie den Inhalt nach oben. Sobald sich das `<div>` vollständig im Scrollport befindet, wird seine Animation abgespielt. Sobald ein Teil des Elements den Scrollport an einer der beiden Kanten verlässt, wird die Animation rückwärts abgespielt.

### Mehrere Trigger für dieselbe Animation

Dieses Beispiel zeigt, wie mehrere Trigger zur Steuerung derselben Animation zugewiesen werden. Es ähnelt dem [Beispiel zur grundlegenden Verwendung](#grundlegende_verwendung), verwendet aber mehrere Trigger für dieselbe Keyframe-Animation.

#### HTML

Wir verwenden drei `<div>`-Elemente als Trigger. Der Text ist der Kürze halber ausgeblendet.

```html
<div class="animated">I am animated</div>

...

<div class="trigger1">I create a trigger</div>

...

<div class="trigger2">I create another trigger</div>

...

<div class="trigger3">I create yet another trigger</div>

...
```

```html hidden live-sample___multiple-triggers
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

<div class="trigger1">I create a trigger</div>

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

<div class="trigger2">I create another trigger</div>

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

<div class="trigger3">I create yet another trigger</div>

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

### CSS

```css hidden live-sample___multiple-triggers
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

.trigger1,
.trigger2,
.trigger3 {
  background: palegoldenrod;
}
```

Der Wert der Kurzschreibweise `animation` ist eine kommagetrennte Liste von Animationen, in der derselbe `animation-name` – `rotate` – dreimal verwendet wird. Der Wert von `animation-trigger` ist eine kommagetrennte Liste mit drei Animationstriggern, jeweils einem für jede Animationsinstanz.

```css live-sample___multiple-triggers
.animated {
  animation:
    rotate 3s infinite linear both,
    rotate 3s infinite linear forwards,
    rotate 3s infinite linear forwards;
  animation-trigger:
    --t1 play-forwards play-backwards,
    --t2 play-forwards play-backwards,
    --t3 play-forwards play-backwards;
}
```

Wir definieren auf jedem `<div>`-Element, das als Trigger dient, einen Timeline-Trigger mit einem anderen Namen. Diese Namen entsprechen denen, auf die die Eigenschaft `animation-trigger` des Elements `.animated` verweist.

```css live-sample___multiple-triggers
.trigger1 {
  timeline-trigger: --t1 view();
}

.trigger2 {
  timeline-trigger: --t2 view();
}

.trigger3 {
  timeline-trigger: --t3 view();
}
```

```css hidden live-sample___basic-example live-sample___same-element live-sample___multiple-triggers
@supports not (animation-trigger: --t play-forwards play-backwards) {
  body::before {
    content: "Your browser does not support the animation-trigger property.";
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

{{EmbedLiveSample("multiple-triggers", "100%", "160")}}

Scrollen Sie den Inhalt nach oben und unten. Beachten Sie, wie die Animation aktiviert und anschließend deaktiviert wird, wenn die einzelnen Trigger-Elemente in den sichtbaren Bereich hinein- und wieder herausgescrollt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Datentyp {{cssxref("animation-action")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}}
- Kurzschreibweise {{cssxref("timeline-trigger")}}
- {{cssxref("trigger-scope")}}
- [CSS-Animationen mit Scroll-Triggern verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS animation triggers](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS animations](/de/docs/Web/CSS/Guides/Animations)
- Modul [CSS scroll-driven animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
