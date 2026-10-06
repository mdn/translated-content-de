---
title: <animation-action>
slug: Web/CSS/Reference/Values/animation-action
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Der {{Glossary("enumerated", "Aufzählungsdatentyp")}} **`<animation-action>`** repräsentiert Schlüsselwortwerte, die festlegen, wie sich eine Animation unter bestimmten Umständen verhalten soll – beispielsweise, wie sich eine [ausgelöste Animation](/de/docs/Web/CSS/Guides/Animation_triggers) verhält, wenn ihr Auslöser aktiviert und deaktiviert wird.

Die Schlüsselwortwerte von `<animation-action>` werden in den folgenden Eigenschaften verwendet:

- {{cssxref("animation-trigger")}}

## Syntax

Der Aufzählungstyp `<animation-action>` wird durch einen der folgenden Werte angegeben:

- `none`
  - : Für die Animation wird keine Aktion festgelegt.
- `play`
  - : Die Animation wird abgespielt, fortgesetzt (falls sie pausiert ist) oder neu gestartet (falls sie bereits beendet ist), und zwar in ihrer aktuellen Abspielrichtung.
- `play-forwards`
  - : Wie `play`, jedoch wird die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation bei Bedarf angepasst (von einem negativen auf einen positiven Wert), damit die Animation vorwärts abgespielt wird.
- `play-backwards`
  - : Wie `play`, jedoch wird die `playbackRate` der Animation bei Bedarf angepasst (von einem positiven auf einen negativen Wert), damit die Animation rückwärts abgespielt wird.
- `play-once`
  - : Wie `play`, jedoch wird die Animation nicht erneut ausgelöst, nachdem sie alle ihre Wiederholungen durchlaufen hat. Wie `play` setzt `play-once` eine pausierte Animation fort; anders als `play` startet es eine beendete Animation nicht erneut.
- `pause`
  - : Die Animation wird pausiert.
- `replay`
  - : Wie `play`, jedoch wird die Animation an den Anfang zurückgesetzt.
- `reset`
  - : Wie `pause`, jedoch wird die Animation an den Anfang zurückgesetzt.

## Beschreibung

Der Typ `<animation-action>` legt fest, wie sich eine Animation verhält, wenn bestimmte Ereignisse eintreten. Wird beispielsweise für ein animiertes Element ein Wert für {{cssxref("animation-trigger")}} festgelegt, um die Animation als ausgelöste Animation zu definieren, kann der Wert einen oder zwei durch ein Leerzeichen getrennte `<animation-action>`-Werte enthalten. Der erste Wert legt das Verhalten der Animation bei Aktivierung ihres Auslösers fest, der optionale zweite Wert das Verhalten bei Deaktivierung. Wenn Sie nur einen Wert angeben, ändert die Animation ihr Verhalten bei Deaktivierung des Auslösers nicht; sie behält das Aktivierungsverhalten bei. Dies hat denselben Effekt, als würden Sie `none` als zweiten Wert festlegen.

Einige häufige Muster sind:

- `play-forwards play-backwards` wird häufig verwendet, wenn ein UI-Element beim Scrollen in den sichtbaren Bereich hinein animiert und beim Verlassen des sichtbaren Bereichs wieder heraus animiert werden soll.
- `play pause` wird häufig verwendet, um ein Element beim Scrollen in den sichtbaren Bereich zu animieren und die Animation beim Verlassen des sichtbaren Bereichs zu pausieren.
- `play-once` wird oft allein verwendet, wenn eine Animation beim Scrollen in den sichtbaren Bereich nur einmal abgespielt werden soll.

Die acht `<animation-action>`-Werte ermöglichen unterschiedliche Animationsverhalten. Es ist wichtig zu verstehen, wie sie einzeln wirken und welche Effekte durch unterschiedliche Werte für die Aktivierung und Deaktivierung eines Auslösers entstehen können.

### Keine Aktion festlegen

Um festzulegen, dass keine Aktion erfolgen soll, verwenden Sie den Wert `none`.

### Die Animation abspielen

Die Schlüsselwortwerte `play`, `play-forwards`, `play-backwards` und `play-once` bewirken alle, dass die Animation abgespielt wird. Jeder Wert legt jedoch ein anderes Verhalten fest.

#### `play`

Mit `play` wird die Animation über alle ihre Wiederholungen hinweg abgespielt, wie durch die Eigenschaft {{cssxref("animation-iteration-count")}} festgelegt.

Wenn nur `play` festgelegt ist, wird die Animation bei Aktivierung abgespielt, aber nie deaktiviert, da keine Aktion für die Deaktivierung angegeben ist.

```css
animation-trigger: --t play;
```

Wenn `play` mit `pause`, `replay` oder `reset` kombiniert wird, wird die Animation bei Aktivierung abgespielt. Bei Deaktivierung wird dann `pause`, `replay` beziehungsweise `reset` ausgeführt. Bei einer späteren Aktivierung wird die Animation erneut abgespielt.

```css
animation-trigger: --t play reset;
```

Wird `play` mit `play-backwards` kombiniert, wird die Animation bei Aktivierung abgespielt. Bei Deaktivierung durchläuft sie anschließend alle zuvor vorwärts abgespielten Wiederholungen rückwärts:

```css
animation-trigger: --t play play-backwards;
```

Die Kombination von `play` mit `play-once` ist zwar gültig, aber unnötig, da sie sich genauso wie `play` verhält. Ebenso ist die Kombination von `play` mit `play-forwards` unnötig, da `play-forwards` die Animation in derselben Richtung wie `play` abspielt, selbst wenn {{cssxref("animation-direction")}} auf `reverse` oder `alternate` gesetzt ist.

#### `play-forwards` und `play-backwards`

Mit `play-forwards` und `play-backwards` wird die Animation über alle ihre Wiederholungen hinweg abgespielt, wobei die Abspielrichtung auf vorwärts beziehungsweise rückwärts geändert wird. Dies geschieht durch Anpassen der [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation; der Wert von {{cssxref("animation-direction")}} bleibt unverändert.

Wenn nur `play-forwards` als Aktivierungsaktion angegeben wird, hat dies denselben Effekt wie die alleinige Angabe von `play`:

```css
animation-trigger: --t play-forwards;
```

Die Kombination von `play-forwards` mit `play-backwards` bewirkt, dass die Animation bei Aktivierung vorwärts abgespielt wird. Bei Deaktivierung durchläuft sie anschließend alle zuvor vorwärts abgespielten Wiederholungen rückwärts. Bei späteren Aktivierungen beginnt die Animation erneut, vorwärts zu laufen.

```css
animation-trigger: --t play-forwards play-backwards;
```

Die Kombination von `play-forwards` mit `pause`, `replay` oder `reset` hat denselben Effekt wie bei `play`: Die Animation wird bei Aktivierung abgespielt. Bei Deaktivierung wird dann `pause`, `replay` beziehungsweise `reset` ausgeführt. Bei späteren Aktivierungen wird die Animation erneut abgespielt.

```css
animation-trigger: --t play-forwards pause;
```

Es ist nicht sinnvoll, `play-forwards` mit `play` oder `play-once` zu kombinieren, da all diese Aktionen die Animation effektiv vorwärts abspielen. Dieselbe Aktion bei Deaktivierung wie bei Aktivierung auszuführen, hat keinen erkennbaren Effekt.

Beachten Sie, dass `play-backwards` als Aktivierungsaktion keine Wirkung hat, wenn die Animation bereits am Anfang ihrer Wiederholungen steht. Im folgenden Beispiel wird die Animation nicht abgespielt, weil sie sich bereits am Anfang befindet:

```css
animation-trigger: --t play-backwards;
```

#### `play-once`

Mit `play-once` wird die Animation über alle ihre Wiederholungen hinweg abgespielt, jedoch nur einmal. Wenn {{cssxref("animation-iteration-count")}} auf `infinite` gesetzt ist, unterscheidet sich die Wirkung von `play-once` kaum von der von `play` oder `play-forwards`. Ist `animation-iteration-count` jedoch auf eine endliche Zahl gesetzt, können Sie das folgende Verhalten beobachten.

Wird `play-once` mit `pause` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung pausiert. Nachdem die Animation jedoch alle ihre Wiederholungen durchlaufen hat, wird sie bei späteren Aktivierungen nicht erneut abgespielt.

```css
animation-trigger: --t play-once pause;
```

Wenn Sie `play-once` mit `replay` kombinieren, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung erneut von Anfang an abgespielt. Bei keinem Durchlauf überschreitet sie die festgelegte Anzahl an Wiederholungen. Da die Animation aber jedes Mal an den Anfang zurückgesetzt wird, wird sie bei späteren Deaktivierungen erneut abgespielt. Bei späteren Aktivierungen wird die Animation hingegen nicht erneut abgespielt.

```css
animation-trigger: --t play-once replay;
```

Wird `play-once` mit `reset` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung an den Anfang zurückgesetzt. Bei einer späteren Aktivierung wird die Animation erneut abgespielt.

```css
animation-trigger: --t play-once reset;
```

Wird `play-once` mit `play-backwards` kombiniert, wird die Animation bei Aktivierung abgespielt und durchläuft bei Deaktivierung alle Wiederholungen rückwärts. Bei einer späteren Aktivierung wird die Animation nicht erneut abgespielt, bei späteren Deaktivierungen jedoch erneut rückwärts.

```css
animation-trigger: --t play-once play-backwards;
```

### Die Animation pausieren

Der Wert `pause` pausiert die Animation bei Aktivierung beziehungsweise Deaktivierung an der Stelle, die sie beim Abspielen erreicht hat. Die Verwendung in Kombination mit anderen Werten wurde bereits besprochen. Ein noch nicht erwähntes Beispiel ist `pause` als Aktivierungsaktion:

```css
animation-trigger: --t pause play;
```

Dies hat einen interessanten Effekt: Bei Aktivierung wird nichts abgespielt, bei einer anschließenden Deaktivierung dagegen schon. Das ist nützlich, wenn eine Animation nur abgespielt werden soll, wenn das betreffende Element den Scrollport verlässt.

Es ist nicht sinnvoll, `pause` mit `reset` zu kombinieren, da beide Werte die Animation effektiv pausieren. `reset` setzt sie zusätzlich an den Anfang zurück. Wenn die Animation noch nicht abgespielt wurde, hat `reset` keinen erkennbaren Effekt.

### Die Animation zurücksetzen

Die Werte `replay` und `reset` ähneln `pause`, allerdings gilt:

- `reset` pausiert die Animation und setzt sie zusätzlich an den Anfang zurück.
- `replay` setzt die Animation an den Anfang zurück und startet sie anschließend erneut.

Die Verwendung dieser Werte in Kombination mit anderen Werten wurde bereits besprochen. Ein Fall wurde jedoch noch nicht erwähnt: ihre Verwendung als Aktivierungsaktion.

Zum Beispiel:

```css
animation-trigger: --t replay pause;
```

Dies hat einen interessanten Effekt: Die Animation wird bei Aktivierung abgespielt (wie bei einer Aktion wie `play`) und bei Deaktivierung pausiert. Bei einer späteren Aktivierung wird sie jedoch unabhängig vom vorherigen Abspielzustand erneut von Anfang an abgespielt. Das ist nützlich, wenn eine Animation abgespielt werden soll, sobald das betreffende Element in den Scrollport gelangt, pausieren soll, wenn es den Scrollport verlässt, und bei jedem späteren Eintritt wieder von Anfang an abgespielt werden soll.

Ein weiteres interessantes Beispiel:

```css
animation-trigger: --t reset play;
```

Dies hat einen interessanten Effekt: Die Animation wird bei Aktivierung nicht abgespielt, bei Deaktivierung jedoch schon. Bei einer späteren Aktivierung wird sie unabhängig vom vorherigen Abspielzustand auf den Fortschritt `0` zurückgesetzt. Das ist nützlich, wenn eine Animation abgespielt werden soll, sobald das betreffende Element den Scrollport verlässt, und bei jedem späteren Eintritt wieder an den Anfang zurückgesetzt werden soll.

### Entsprechung in der Web Animations API

Das durch die verschiedenen `<animation-action>`-Schlüsselwörter festgelegte Verhalten entspricht dem Aufruf verschiedener Methoden der [Web Animations API](/de/docs/Web/API/Web_Animations_API) für die betreffende Animation:

- `play`
  - : Entspricht dem Aufruf von [`Animation.play()`](/de/docs/Web/API/Animation/play) für die Animation.
- `play-forwards`
  - : Entspricht dem Setzen von [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) einer laufenden Animation auf den positiven Betrag ihres Werts.
- `play-backwards`
  - : Entspricht dem Setzen von [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) einer laufenden Animation auf den positiven Betrag ihres Werts, multipliziert mit `-1`.
- `play-once`
  - : Entspricht dem Aufruf von `Animation.play()` für die Animation, mit dem Unterschied, dass sie nur einmal abgespielt wird.
- `pause`
  - : Entspricht dem Aufruf von [`Animation.pause()`](/de/docs/Web/API/Animation/pause) für die Animation.
- `replay`
  - : Entspricht dem Setzen von [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) einer laufenden Animation auf `0`.
- `reset`
  - : Entspricht dem Setzen von `Animation.overallProgress` einer pausierten Animation auf `0`.

## Formale Syntax

{{CSSSyntaxRaw(`<animation-action> = none | pause | play | play-backwards | play-forwards | play-once | replay | reset`)}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie eine einfache scrollgesteuerte Animation erstellen, die bei Aktivierung des Auslösers vorwärts und bei Deaktivierung rückwärts abgespielt wird.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente – eines für die Animation und eines als Auslöser – sowie Textinhalt, der das Scrollen der Seite ermöglicht. Der Kürze halber ist der Textinhalt ausgeblendet.

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

Wir geben dem Element `.animated` einen {{cssxref("position")}}-Wert von `fixed` und positionieren es nahe der oberen linken Ecke des Scrollports. So können wir sehen, wann seine Animation beginnt und endet.

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

```css live-sample___basic-example live-sample___different-effects
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

Auf das Element `.animated` wird die `rotate`-Animation angewendet. Anschließend geben wir ihm einen `animation-trigger`-Wert, der auf den `timeline-trigger-name` `--t` verweist und die beiden `<animation-action>`-Werte `play-forwards` und `play-backwards` enthält. Diese legen fest, dass die Animation bei Aktivierung vorwärts und bei Deaktivierung rückwärts abgespielt wird.

```css live-sample___basic-example
.animated {
  animation: rotate 1.5s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}
```

Das Element `.trigger` erstellt mit einem `timeline-trigger`-Wert von `--t view()` den Auslöser für das animierte `<div>`. Dieser Wert enthält den Bezeichner, auf den im `animation-trigger`-Eigenschaftswert des animierten `<div>` verwiesen wird (den `timeline-trigger-name`), und verknüpft so die beiden Elemente. Er enthält außerdem:

- Einen `timeline-trigger-source`-Wert von [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Auslöser als View-Progress-Timeline festgelegt und das Element, das den Timeline-Auslöser bereitstellt, als nächstgelegenes scrollendes Vorfahrenelement.
- Einen {{cssxref("timeline-trigger-activation-range")}}-Wert von [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#contain). Das bedeutet, dass der Auslöser aktiviert wird, wenn sich das Element `.trigger` vollständig im Scrollport befindet. Da {{cssxref("timeline-trigger-active-range")}} standardmäßig den Wert `auto` hat, entspricht sein Wert dem Aktivierungsbereich. Der Auslöser wird daher deaktiviert, sobald sich das Element nicht mehr vollständig im Scrollport befindet.

```css live-sample___basic-example
.trigger {
  timeline-trigger: --t view() contain;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Versuchen Sie, den Inhalt nach oben zu scrollen. Sobald das beobachtete `<div>` vollständig im Scrollport erscheint, wird die Animation abgespielt. Wenn es beginnt, den Scrollport an einer der beiden Seiten zu verlassen, wird die Animation rückwärts abgespielt.

### Die `<animation-action>`-Werte vergleichen

Dieses Beispiel vergleicht die verschiedenen `<animation-action>`-Werte. Indem Sie dieselbe Rotationsanimation auf identische, nebeneinander angeordnete Elemente anwenden und die `animation-trigger`-Werte variieren, können Sie die Wirkungen der verschiedenen Aktionen vergleichen.

#### HTML

Wir verwenden ein {{htmlelement("section")}}-Element, das fünf {{htmlelement("div")}}-Elemente enthält, in denen jeweils eine Zahl steht. Außerdem fügen wir Textinhalt hinzu, damit die Seite gescrollt werden kann. Der Kürze halber ist dieser Text ausgeblendet.

```html
<section>
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="three">3</div>
  <div class="four">4</div>
  <div class="five">5</div>
</section>
```

```html hidden live-sample___different-effects
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
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="three">3</div>
  <div class="four">4</div>
  <div class="five">5</div>
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

Wir wenden dieselbe {{cssxref("animation")}} auf jedes `<div>`-Element an: Die `rotate`-Animation wird unendlich oft abgespielt, wobei jede Wiederholung zwei Sekunden dauert. Außerdem gestalten wir jedes `<div>` als farbigen Kreis mit einem Durchmesser von `50px`.

```css hidden live-sample___different-effects
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
}

div {
  display: flex;
  justify-content: center;
}

section {
  display: flex;
  justify-content: space-between;
}
```

```css live-sample___different-effects
div {
  animation: rotate 2s infinite linear both;
  height: 50px;
  width: 50px;
  border: 5px solid black;
  border-radius: 50%;
  background-color: orange;
}
```

Als Nächstes legen wir fest, dass das `<section>`-Element einen Animationsauslöser mit dem `timeline-trigger`-Wert `--t view() contain 20% contain 80%` erstellt. Daran ist nichts Ungewöhnliches, außer dass wir einen Wert für {{cssxref("timeline-trigger-activation-range")}} festgelegt haben und {{cssxref("timeline-trigger-active-range")}} standardmäßig den Wert `contain 20% contain 80%` übernimmt. Das bedeutet, dass der Auslöser aktiviert wird, wenn das `<section>`-Element etwa `20%` des Weges nach oben durch den Scrollport zurückgelegt hat, und deaktiviert wird, wenn es etwa `80%` dieses Weges zurückgelegt hat. So lassen sich die Effekte von `<animation-action>` deutlicher erkennen, als wenn der Aktivierungsbereich den gesamten Scrollport abdecken würde.

```css live-sample___different-effects
section {
  timeline-trigger: --t view() contain 20% contain 80%;
}
```

Anschließend legen wir für jedes `<div>`-Element einen anderen Wert für die Eigenschaft {{cssxref("animation-trigger")}} fest. Alle verweisen auf den `timeline-trigger-name` des `<section>`-Elements, verwenden aber jeweils andere `<animation-action>`-Werte. Für das letzte `<div>` legen wir zusätzlich einen neuen Wert für die Eigenschaft `animation` fest, der den zuvor festgelegten Wert überschreibt. Er entspricht dem ursprünglichen `animation`-Wert, mit dem Unterschied, dass die Anzahl der Wiederholungen auf `1` statt auf `infinite` gesetzt ist. Die Wirkung von `play-once` lässt sich leichter zeigen, wenn `animation-iteration-count` nicht `infinite` ist (andernfalls würde die Animation unabhängig davon endlos laufen).

```css live-sample___different-effects
.one {
  animation-trigger: --t play-forwards play-backwards;
}

.two {
  animation-trigger: --t play;
}

.three {
  animation-trigger: --t play replay;
}

.four {
  animation-trigger: --t pause play;
}

.five {
  animation: rotate 2s 1 linear both;
  animation-trigger: --t play-once reset;
}
```

```css hidden live-sample___basic-example live-sample___different-effects
@supports not (animation-trigger: --t play-once reset) {
  body::before {
    content: "Your browser does not support scroll-triggered animations.";
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

{{EmbedLiveSample("different-effects", "100%", "240")}}

Scrollen Sie nach unten, bis die `<section>`- und `<div>`-Elemente in den Scrollport gelangen. Bewegen Sie sie durch den Anfang und das Ende des Aktivierungsbereichs des Auslösers und konzentrieren Sie sich dabei jedes Mal auf ein anderes `<div>`, um die Effekte der jeweiligen `<animation-action>`-Werte zu sehen.

Die Effekte sind:

1. Für das erste `<div>` (ganz links) ist `play-forwards play-backwards` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, wird die Animation vorwärts abgespielt. Wenn es den Aktivierungsbereich verlässt (am oberen oder unteren Rand des Scrollports), beginnt die Animation rückwärts zu laufen.
2. Für das zweite `<div>` ist nur ein `<animation-action>`-Wert festgelegt: `play`. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, beginnt die Animation. Da keine Deaktivierungsaktion festgelegt ist, die ihr Verhalten ändert, läuft sie jedoch weiter, bis die Seite neu geladen wird.
3. Für das dritte `<div>` ist `play replay` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, beginnt die Animation vorwärts zu laufen. Wenn es den Aktivierungsbereich verlässt, wird die Animation auf den Fortschritt `0` zurückgesetzt und anschließend erneut abgespielt.
4. Für das vierte `<div>` ist `pause play` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, wird die Animation aufgrund des pausierten Zustands weiterhin nicht abgespielt. Sobald es den Aktivierungsbereich verlässt, beginnt die Animation jedoch zu laufen. Von da an pausiert sie, wenn sich das beobachtete Element innerhalb des Aktivierungsbereichs befindet, und läuft, wenn es sich außerhalb befindet.
5. Für das fünfte `<div>` (ganz rechts, mit einer Wiederholungsanzahl von `1`) ist `play-once reset` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, wird die Animation einmal abgespielt. Wenn es den Aktivierungsbereich verlässt, wird die Animation auf den Fortschritt `0` zurückgesetzt und pausiert. Von da an wird die Animation bei jedem Eintritt des beobachteten Elements in den Aktivierungsbereich einmal abgespielt und beim Verlassen zurückgesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-trigger")}}
- Die Shorthand-Eigenschaft {{cssxref("timeline-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- [CSS-Animationen mit Scroll-Auslösern verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationsauslöser](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
