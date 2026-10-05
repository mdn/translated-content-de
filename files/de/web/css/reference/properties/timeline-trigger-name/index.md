---
title: timeline-trigger-name CSS property
short-title: timeline-trigger-name
slug: Web/CSS/Reference/Properties/timeline-trigger-name
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-trigger-name`** legt die Kennung oder Kennungen eines Auslösers für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

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

Der Wert besteht aus einem oder mehreren durch Kommas getrennten {{cssxref("dashed-ident")}}-Werten oder dem Schlüsselwort `none`.

- `none`
  - : Gibt an, dass das Element keine Auslöser für scrollgesteuerte Animationen definiert.
- {{cssxref("dashed-ident")}}
  - : Gibt den Namen des Timeline-Auslösers an.

## Beschreibung

Die Eigenschaft `timeline-trigger-name` legt einen oder mehrere Namen zur Kennzeichnung eines Auslösers für eine [scrollgesteuerte CSS-Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest. Diese Kennung wird im Wert der Eigenschaft {{cssxref("animation-trigger")}} verwendet.

Zum Beispiel:

```css
.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

Ein Element mit diesen Deklarationen erstellt einen Auslöser mit dem Namen `--my-trigger`. Die Deklaration `timeline-trigger-source` ist erforderlich, um eine Timeline zu erstellen, die das Auslösen von Animationen steuert. In diesem Fall erstellt der Wert `view()` eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function).

Die resultierende [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) verfolgt die Position des Elements `.trigger` entlang der Blockachse des nächstgelegenen scrollbaren Vorfahren. Der Auslöser wird aktiviert und deaktiviert, wenn das verfolgte Element an bestimmte Positionen innerhalb des Scrollports gescrollt wird.

Bei jedem animierten Element, dessen Eigenschaft {{cssxref("animation-trigger")}} auf `--my-trigger` gesetzt ist, wird die Animation durch den Auslöser `--my-trigger` gesteuert:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-once;
}
```

Jeder `animation-trigger`-Wert enthält zwei oder drei Bestandteile: den `<dashed-ident>`-Wert, der den Auslöser kennzeichnet, und ein oder zwei {{cssxref("animation-action")}}-Schlüsselwörter. Diese legen fest, was bei der Aktivierung und gegebenenfalls bei der Deaktivierung des Auslösers geschehen soll. In diesem Fall wird die Animation bei der Aktivierung einmal abgespielt.

Das animierte Element kann einen eigenen Auslöser erstellen. Setzen Sie dazu seine Eigenschaften `timeline-trigger-name` und `animation-trigger` so, dass sie denselben `<dashed-ident>`-Wert enthalten:

```css
.animatedAndTrigger {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-once;

  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

Die Eigenschaft `timeline-trigger-name` kann zusammen mit den Eigenschaften {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Mehrere Auslösernamen

Sie können im `timeline-trigger-name`-Wert desselben Auslösers mehrere durch Kommas getrennte `<dashed-ident>`-Werte angeben. Dadurch kann über mehrere Kennungen auf ihn verwiesen werden. Das kann nützlich sein, wenn Sie mehrere Komponenten in eine Seite einbinden, deren Animationen Sie auslösen möchten, deren vordefinierte `animation-trigger`-Werte Sie aber nicht ändern können.

Mit mehreren `timeline-trigger-name`-Werten können Sie einen Auslöser für alle Animationen erstellen:

```css
.trigger {
  timeline-trigger-name: --animation-trigger-1, --animation-trigger-2;
  timeline-trigger-source: view();
}
```

Wenn Sie denselben `<dashed-ident>`-Wert mehrfach in derselben `timeline-trigger-name`-Liste angeben, definiert nur das letzte Vorkommen einen Auslöser. Die vorherigen Vorkommen haben keine Wirkung.

Wenn mehrere Elemente Auslöser mit demselben Namen definieren, wird der Auslöser des letzten Elements in der Quellreihenfolge verwendet, sofern der Gültigkeitsbereich nicht eingeschränkt ist. Weitere Informationen finden Sie unter {{cssxref("trigger-scope")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie eine einfache scrollgesteuerte Animation erstellen. Mit der Eigenschaft `timeline-trigger-name` benennen wir einen Auslöser und verweisen in der Eigenschaft `animation-trigger` eines animierten Elements auf diesen Namen.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente: eines, das animiert wird, und eines, das einen Auslöser erstellt. Hinzu kommt Textinhalt, durch den die Seite scrollbar wird. Der Textinhalt ist der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} des animierten `<div>`-Elements wird auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass wir erkennen können, wann seine Animation beginnt und pausiert.

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

Mit der Kurzschreibweise `animation` wenden wir die Animation `rotate` auf das Element `.animated` an. Ohne einen zugeordneten Auslöser würde das Element beim Laden der Seite mit der Animation beginnen. Durch die Eigenschaft `animation-trigger` wird daraus eine ausgelöste Animation. Ihr Wert verweist auf den `timeline-trigger-name` `--t` und enthält zwei `<animation-action>`-Werte — `play` und `pause`. Diese legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung pausiert wird.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Auslöser für das Element `.animated` mithilfe der folgenden Eigenschaften:

- Ein `timeline-trigger-name` mit dem Wert `--t`. Dieser entspricht der Kennung, auf die im `animation-trigger`-Wert des animierten Elements verwiesen wird, und verknüpft so die beiden Elemente.
- Ein {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Auslöser als View-Progress-Timeline festgelegt und der nächstgelegene scrollbare Vorfahr als Element, das die Timeline bereitstellt.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Versuchen Sie, den Inhalt nach oben zu scrollen. Sobald ein Teil des verfolgten Elements `.trigger` im Scrollport erscheint, wird die Animation abgespielt. Sobald es den Scrollport an einer der beiden Seiten vollständig verlassen hat, pausiert die Animation.

### Das animierte Element selbst als Auslöser verwenden

Dieses Beispiel zeigt, wie ein animiertes Element seinen eigenen Auslöser erstellen kann.

#### HTML

Diesmal enthält unser Markup nur ein {{htmlelement("div")}}-Element.

```html
<div>I create my own trigger</div>
```

Der Textinhalt, durch den die Seite scrollbar wird, ist der Kürze halber ausgeblendet.

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

Wir definieren eine Keyframe-Animation namens `invert-colors`, die die Vordergrund- und Hintergrundfarben umkehrt:

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

Wir setzen einen `animation-trigger`-Wert, der auf den `timeline-trigger-name` `--t` verweist. Außerdem geben wir zwei `<animation-action>`-Werte an — `play-forwards` und `play-backwards`. Damit wird die Animation bei der Aktivierung vorwärts und bei der Deaktivierung rückwärts abgespielt.

Anschließend legen wir für dasselbe `<div>` die folgenden Eigenschaften fest:

- Ein `timeline-trigger-name` mit dem Wert `--t`. Damit wird festgelegt, dass das `<div>` den Auslöser für seine eigene Animation erstellt.
- Ein `timeline-trigger-source` mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Auslöser als View-Progress-Timeline festgelegt und der nächstgelegene scrollbare Vorfahr als Element, das die Timeline bereitstellt.
- Ein {{cssxref("timeline-trigger-activation-range")}} mit dem Wert [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#contain). Damit wird der Auslöser aktiviert, wenn sich das verfolgte Element vollständig innerhalb des Scrollports befindet. Da {{cssxref("timeline-trigger-active-range")}} standardmäßig den Wert `auto` hat, entspricht der aktive Bereich dem Aktivierungsbereich. Der Auslöser wird daher deaktiviert, sobald sich das Element nicht mehr vollständig innerhalb des Scrollports befindet. Im Gegensatz dazu würden die Standardwerte [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) für den Aktivierungsbereich und den aktiven Bereich den Auslöser aktivieren, sobald ein Teil des Elements in den Scrollport eintritt, und ihn erst deaktivieren, wenn das Element den Scrollport vollständig verlassen hat. Die rückwärts abgespielte Animation würde dann stattfinden, wenn das Element nicht mehr sichtbar ist.

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

Versuchen Sie, den Inhalt nach oben zu scrollen. Die Animation des verfolgten Elements wird abgespielt, sobald es vollständig in den Scrollport eingetreten ist, und pausiert, sobald es beginnt, den Scrollport zu verlassen.

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
- [Scrollgesteuerte CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Das Modul [CSS-Animationsauslöser](/de/docs/Web/CSS/Guides/Animation_triggers)
- Das Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
