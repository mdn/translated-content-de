---
title: timeline-trigger-name CSS property
short-title: timeline-trigger-name
slug: Web/CSS/Reference/Properties/timeline-trigger-name
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-trigger-name`** legt die Bezeichner eines Triggers für [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

## Syntax

```css
/* Keyword */
timeline-trigger-name: none;

/* Single dashed ident */
timeline-trigger-name: --my-trigger;
timeline-trigger-name: --my-other-trigger;

/* Multiple dashed idents */
timeline-trigger-name: --my-trigger, --my-other-name;

/* Global values */
timeline-trigger-name: inherit;
timeline-trigger-name: initial;
timeline-trigger-name: revert;
timeline-trigger-name: revert-layer;
timeline-trigger-name: unset;
```

### Werte

Ein oder mehrere durch Kommas getrennte {{cssxref("dashed-ident")}}-Werte oder das Schlüsselwort `none`.

- `none`
  - : Gibt an, dass das Element keine Trigger für scrollgesteuerte Animationen definiert.
- {{cssxref("dashed-ident")}}
  - : Gibt den Namen des Timeline-Triggers an.

## Beschreibung

Die Eigenschaft `timeline-trigger-name` legt einen oder mehrere Namen fest, mit denen ein Trigger für eine [CSS-Animation, die durch Scrollen ausgelöst wird](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations), identifiziert wird. Diese Bezeichner werden im Wert der Eigenschaft {{cssxref("animation-trigger")}} verwendet.

Zum Beispiel:

```css
.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

Ein Element mit diesen Deklarationen erstellt einen Trigger namens `--my-trigger`. Die Deklaration `timeline-trigger-source` ist erforderlich, um eine Timeline zu erstellen, die das Auslösen von Animationen steuert. In diesem Fall erstellt der Wert `view()` eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function).

Die resultierende [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) verfolgt die Position des Elements `.trigger` entlang der Blockachse des nächstgelegenen scrollbaren Vorfahren. Der Trigger wird aktiviert und deaktiviert, wenn das verfolgte Element zu bestimmten Positionen innerhalb des Scrollports gescrollt wird.

Bei jedem animierten Element, dessen Eigenschaft {{cssxref("animation-trigger")}} auf `--my-trigger` gesetzt ist, wird die Animation durch den Trigger `--my-trigger` gesteuert:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-once;
}
```

Jeder `animation-trigger`-Wert besteht aus zwei oder drei Komponenten: dem `<dashed-ident>`, das den Trigger identifiziert, und einem oder zwei {{cssxref("animation-action")}}-Schlüsselwörtern. Diese legen fest, was bei der Aktivierung und optional bei der Deaktivierung des Triggers geschehen soll. In diesem Fall wird die Animation bei der Aktivierung einmal abgespielt.

Das animierte Element kann seinen eigenen Trigger erstellen. Setzen Sie dazu die Eigenschaften `timeline-trigger-name` und `animation-trigger` so, dass sie denselben `<dashed-ident>`-Wert enthalten:

```css
.animatedAndTrigger {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-once;

  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

Die Eigenschaft `timeline-trigger-name` kann zusammen mit den Eigenschaften {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Mehrere Trigger-Namen

Sie können im Wert von `timeline-trigger-name` eines Triggers mehrere durch Kommas getrennte `<dashed-ident>`-Werte angeben. Dadurch kann der Trigger über mehrere Bezeichner referenziert werden. Das kann nützlich sein, wenn Sie mehrere Komponenten in eine Seite einfügen, deren Animationen Sie auslösen möchten, deren vordefinierte `animation-trigger`-Werte Sie aber nicht bearbeiten können.

Mit mehreren `timeline-trigger-name`-Werten können Sie einen Trigger für alle Animationen erstellen:

```css
.trigger {
  timeline-trigger-name: --animation-trigger-1, --animation-trigger-2;
  timeline-trigger-source: view();
}
```

Wenn Sie dasselbe `<dashed-ident>` mehrfach in derselben `timeline-trigger-name`-Liste angeben, definiert nur das letzte Vorkommen einen Trigger. Die vorherigen Vorkommen haben keine Wirkung.

Wenn mehrere Elemente Trigger mit demselben Namen definieren, wird der Trigger verwendet, den das letzte Element in der Quellreihenfolge definiert – sofern der Geltungsbereich nicht eingeschränkt ist. Weitere Informationen finden Sie unter {{cssxref("trigger-scope")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie eine einfache scrollgesteuerte Animation erstellen. Mit der Eigenschaft `timeline-trigger-name` benennen wir einen Trigger und referenzieren diesen Namen in der Eigenschaft `animation-trigger` eines animierten Elements.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente: eines für die Animation und eines für den Trigger. Hinzu kommt Textinhalt, der die Seite scrollbar macht. Der Textinhalt wurde der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} des animierten `<div>`-Elements wird auf `fixed` gesetzt. Dadurch befindet es sich nahe der oberen linken Ecke des Scrollports, sodass wir erkennen können, wann seine Animation beginnt und stoppt.

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

Als Nächstes definieren wir die {{cssxref("@keyframes")}} für die Animation `rotate`, die wir später verwenden:

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

Mit der Kurzschreibweise `animation` wenden wir die Animation `rotate` auf das Element `.animated` an. Ohne zugehörigen Trigger würde die Animation beim Laden der Seite beginnen. Durch die Eigenschaft `animation-trigger` wird sie zu einer ausgelösten Animation. Der Wert referenziert einen `timeline-trigger-name` namens `--t` und enthält zwei `<animation-action>`-Werte – `play` und `pause`. Sie legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung pausiert wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das Element `.animated` mithilfe der folgenden Eigenschaften:

- Ein `timeline-trigger-name` mit dem Wert `--t`. Dieser entspricht dem Bezeichner im `animation-trigger`-Wert des animierten Elements und verknüpft so die beiden Elemente.
- Ein {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird eine View-Progress-Timeline als Timeline-Trigger festgelegt und der nächstgelegene scrollbare Vorfahr als Element, das die Timeline für den Trigger bereitstellt.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Versuchen Sie, den Inhalt nach oben zu scrollen. Sobald ein Teil des verfolgten Elements `.trigger` im Scrollport erscheint, wird die Animation abgespielt. Wenn das Element den Scrollport an einer der beiden Seiten vollständig verlassen hat, wird die Animation pausiert.

### Das animierte Element als Trigger verwenden

Dieses Beispiel zeigt, wie ein animiertes Element seinen eigenen Trigger erstellen kann.

#### HTML

Diesmal enthält unser Markup nur ein {{htmlelement("div")}}-Element.

```html
<div>I create my own trigger</div>
```

Der Textinhalt, der die Seite scrollbar macht, wurde der Kürze halber ausgeblendet.

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

Wir definieren eine Keyframe-Animation namens `invert-colors`, die die Vorder- und Hintergrundfarben umkehrt:

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

Wir legen einen `animation-trigger`-Wert fest, der einen `timeline-trigger-name` namens `--t` referenziert. Außerdem geben wir zwei `<animation-action>`-Werte an – `play-forwards` und `play-backwards`. Diese bewirken, dass die Animation bei der Aktivierung vorwärts und bei der Deaktivierung rückwärts abgespielt wird.

Anschließend legen wir für dasselbe `<div>` die folgenden Eigenschaften fest:

- Ein `timeline-trigger-name` mit dem Wert `--t`. Dadurch erstellt das `<div>` den Trigger für seine eigene Animation.
- Ein `timeline-trigger-source` mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird eine View-Progress-Timeline als Timeline-Trigger festgelegt und der nächstgelegene scrollbare Vorfahr als Element, das die Timeline für den Trigger bereitstellt.
- Ein {{cssxref("timeline-trigger-activation-range")}} mit dem Wert [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#contain). Dadurch wird der Trigger aktiviert, wenn sich das verfolgte Element vollständig im Scrollport befindet. Da {{cssxref("timeline-trigger-active-range")}} standardmäßig `auto` ist, entspricht der aktive Bereich dem Aktivierungsbereich. Der Trigger wird daher deaktiviert, sobald sich das Element nicht mehr vollständig im Scrollport befindet. Im Gegensatz dazu bewirkt der Standardwert [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) für Aktivierungsbereich und aktiven Bereich, dass der Trigger aktiviert wird, sobald ein Teil des Elements in den Scrollport eintritt, und erst deaktiviert wird, wenn es den Scrollport vollständig verlassen hat. Die rückwärts laufende Animation würde dann stattfinden, während das Element nicht sichtbar ist.

```css live-sample___same-element
div {
  animation: invert-colors 0.6s ease-in both;

  animation-trigger: --t play-forwards play-backwards;

  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain;
}
```

```css hidden live-sample___basic-example live-sample___same-element
@supports not (timeline-trigger-name: --t) {
  body::before {
    content: "Your browser does not support the timeline-trigger-name property.";
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

{{EmbedLiveSample("same-element", "100%", "240")}}

Versuchen Sie, den Inhalt nach oben zu scrollen. Die Animation des verfolgten Elements wird abgespielt, nachdem es vollständig in den Scrollport eingetreten ist, und pausiert, sobald es beginnt, den Scrollport zu verlassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}}
- Die Kurzschreibweise {{cssxref("timeline-trigger")}}
- {{cssxref("trigger-scope")}}
- Der Typ {{cssxref("animation-action")}}
- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Das Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Das Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
