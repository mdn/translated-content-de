---
title: <animation-action>
slug: Web/CSS/Reference/Values/animation-action
l10n:
  sourceCommit: 4c62538fb3d6e71c1d8c380b1ff752cdfd545a12
---

{{SeeCompatTable}}

Der **`<animation-action>`**-{{Glossary("enumerated", "enumerated")}}-Datentyp repräsentiert Schlüsselwortwerte, die festlegen, wie sich eine Animation unter bestimmten Umständen verhalten soll – beispielsweise, wie sich eine [durch einen Trigger ausgelöste Animation](/de/docs/Web/CSS/Guides/Animation_triggers) verhalten soll, wenn ihr Trigger aktiviert und deaktiviert wird.

Die Schlüsselwortwerte von `<animation-action>` werden in der folgenden Eigenschaft verwendet:

- {{cssxref("animation-trigger")}}

## Syntax

Der enumerated-Datentyp `<animation-action>` wird mit einem der folgenden Werte angegeben:

- `none`
  - : Für die Animation ist keine Aktion festgelegt.
- `play`
  - : Die Animation wird abgespielt, fortgesetzt (falls sie pausiert ist) oder neu gestartet (falls sie bereits beendet ist), und zwar in ihrer aktuellen Abspielrichtung.
- `play-forwards`
  - : Wie `play`, allerdings wird die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation bei Bedarf angepasst (von negativ auf positiv gesetzt), damit die Animation vorwärts abgespielt wird.
- `play-backwards`
  - : Wie `play`, allerdings wird die `playbackRate` der Animation bei Bedarf angepasst (von positiv auf negativ gesetzt), damit die Animation rückwärts abgespielt wird.
- `play-once`
  - : Wie `play`, allerdings wird die Animation nicht erneut ausgelöst, nachdem sie alle Iterationen durchlaufen hat. Wie bei `play` wird eine pausierte Animation durch `play-once` fortgesetzt; anders als bei `play` wird eine beendete Animation nicht erneut abgespielt.
- `pause`
  - : Die Animation wird pausiert.
- `replay`
  - : Wie `play`, allerdings wird die Animation an den Anfang zurückgesetzt.
- `reset`
  - : Wie `pause`, allerdings wird die Animation an den Anfang zurückgesetzt.

## Beschreibung

Der Typ `<animation-action>` legt fest, wie sich eine Animation bei bestimmten Ereignissen verhält. Wenn Sie beispielsweise für ein animiertes Element einen Wert für {{cssxref("animation-trigger")}} festlegen, um die Animation als durch einen Trigger ausgelöste Animation zu definieren, kann der Wert einen oder zwei durch ein Leerzeichen getrennte `<animation-action>`-Werte enthalten. Der erste Wert legt das Verhalten der Animation bei Aktivierung des Triggers fest, während der optionale zweite Wert das Verhalten bei Deaktivierung festlegt. Wenn Sie nur einen Wert angeben, ändert die Animation ihr Verhalten bei Deaktivierung des Triggers nicht; sie behält das bei der Aktivierung festgelegte Verhalten bei. Dies hat denselben Effekt, als würden Sie `none` als zweiten Wert festlegen.

Einige häufige Muster sind:

- `play-forwards play-backwards` wird häufig verwendet, wenn ein UI-Element beim Scrollen in den sichtbaren Bereich „einanimiert“ und beim Verlassen des sichtbaren Bereichs wieder „ausanimiert“ werden soll.
- `play pause` wird häufig verwendet, um ein Element beim Scrollen in den sichtbaren Bereich zu animieren und die Animation zu pausieren, wenn es den sichtbaren Bereich verlässt.
- `play-once` wird oft allein verwendet, wenn eine Animation nur einmal abgespielt werden soll, sobald das Element in den sichtbaren Bereich scrollt.

Die acht `<animation-action>`-Werte bewirken unterschiedliche Animationsverhalten. Es ist wichtig zu verstehen, wie sie einzeln wirken und welche Effekte sich durch unterschiedliche Werte für die Aktivierung und Deaktivierung des Triggers erzielen lassen.

### Keine Aktion festlegen

Verwenden Sie den Wert `none`, um festzulegen, dass keine Aktion erfolgen soll.

### Animation abspielen

Die Schlüsselwortwerte `play`, `play-forwards`, `play-backwards` und `play-once` bewirken alle, dass die Animation abgespielt wird. Sie legen jedoch jeweils ein anderes Verhalten fest.

#### `play`

Mit `play` wird die Animation über alle ihre Iterationen hinweg abgespielt, wie durch die Eigenschaft {{cssxref("animation-iteration-count")}} festgelegt.

Wenn nur `play` festgelegt ist, wird die Animation bei Aktivierung abgespielt, aber bei Deaktivierung nicht verändert, da keine Deaktivierungsaktion angegeben ist.

```css
animation-trigger: --t play;
```

Wenn `play` mit `pause`, `replay` oder `reset` kombiniert wird, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung entsprechend pausiert, erneut gestartet oder zurückgesetzt. Bei einer späteren Aktivierung wird die Animation wieder abgespielt.

```css
animation-trigger: --t play reset;
```

Wird `play` mit `play-backwards` kombiniert, wird die Animation bei Aktivierung abgespielt. Bei Deaktivierung läuft sie rückwärts durch alle Iterationen, die zuvor vorwärts abgespielt wurden:

```css
animation-trigger: --t play play-backwards;
```

Die Kombination von `play` mit `play-once` ist zwar gültig, aber unnötig, da sie sich genauso verhält wie `play`. Ebenso ist die Kombination von `play` mit `play-forwards` unnötig, da `play-forwards` die Animation in derselben Richtung wie `play` abspielt, selbst wenn {{cssxref("animation-direction")}} auf `reverse` oder `alternate` gesetzt ist.

#### `play-forwards` und `play-backwards`

Mit `play-forwards` und `play-backwards` wird die Animation über alle ihre Iterationen hinweg abgespielt, wobei die Abspielrichtung auf vorwärts beziehungsweise rückwärts geändert wird. Dies geschieht durch Anpassen der [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation; der Wert von {{cssxref("animation-direction")}} bleibt unverändert.

Wenn Sie nur `play-forwards` als Aktivierungsaktion angeben, hat dies denselben Effekt wie die alleinige Angabe von `play`:

```css
animation-trigger: --t play-forwards;
```

Die Kombination von `play-forwards` mit `play-backwards` bewirkt, dass die Animation bei Aktivierung vorwärts abgespielt wird und bei Deaktivierung rückwärts durch alle zuvor vorwärts abgespielten Iterationen läuft. Bei späteren Aktivierungen beginnt die Animation erneut vorwärts zu laufen.

```css
animation-trigger: --t play-forwards play-backwards;
```

Die Kombination von `play-forwards` mit `pause`, `replay` oder `reset` hat denselben Effekt wie bei `play`: Die Animation wird bei Aktivierung abgespielt und bei Deaktivierung entsprechend pausiert, erneut gestartet oder zurückgesetzt. Bei späteren Aktivierungen wird sie wieder abgespielt.

```css
animation-trigger: --t play-forwards pause;
```

Es ist nicht sinnvoll, `play-forwards` mit `play` oder `play-once` zu kombinieren, da all diese Aktionen die Animation effektiv vorwärts abspielen. Wenn bei Deaktivierung dasselbe wie bei Aktivierung geschieht, ist kein erkennbarer Effekt zu sehen.

Beachten Sie, dass `play-backwards` als Aktivierungsaktion keine Wirkung hat, wenn sich die Animation bereits am Anfang ihrer Iterationen befindet. Im folgenden Beispiel wird die Animation nicht abgespielt, weil sie sich bereits am Anfang befindet:

```css
animation-trigger: --t play-backwards;
```

#### `play-once`

Mit `play-once` wird die Animation über alle ihre Iterationen hinweg abgespielt, jedoch nur einmal. Wenn {{cssxref("animation-iteration-count")}} auf `infinite` gesetzt ist, unterscheidet sich die Wirkung von `play-once` kaum von der von `play` oder `play-forwards`. Wenn `animation-iteration-count` jedoch auf eine endliche Zahl gesetzt ist, können Sie das folgende Verhalten beobachten.

Wird `play-once` mit `pause` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung pausiert. Sobald die Animation jedoch alle Iterationen durchlaufen hat, wird sie bei späteren Aktivierungen nicht erneut abgespielt.

```css
animation-trigger: --t play-once pause;
```

Wenn Sie `play-once` mit `replay` kombinieren, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung erneut von Anfang an abgespielt. Bei keinem Abspielen überschreitet sie ihre festgelegte Anzahl von Iterationen. Sie wird jedoch bei späteren Deaktivierungen erneut abgespielt, weil sie jedes Mal an den Anfang zurückgesetzt wird. Bei späteren Aktivierungen wird die Animation hingegen nicht erneut abgespielt.

```css
animation-trigger: --t play-once replay;
```

Wird `play-once` mit `reset` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung an den Anfang zurückgesetzt. Bei einer späteren Aktivierung wird sie erneut abgespielt.

```css
animation-trigger: --t play-once reset;
```

Wird `play-once` mit `play-backwards` kombiniert, wird die Animation bei Aktivierung abgespielt und läuft bei Deaktivierung rückwärts durch alle Iterationen. Bei einer späteren Aktivierung wird sie nicht erneut abgespielt, bei späteren Deaktivierungen läuft sie jedoch erneut rückwärts.

```css
animation-trigger: --t play-once play-backwards;
```

### Animation pausieren

Der Wert `pause` pausiert die Animation bei Aktivierung oder Deaktivierung an der Stelle, die sie beim Abspielen erreicht hat. Die Kombination dieses Werts mit anderen Werten wurde bereits erläutert. Ein bisher nicht erwähnter Fall ist die Verwendung von `pause` als Aktivierungsaktion, beispielsweise:

```css
animation-trigger: --t pause play;
```

Dies hat einen interessanten Effekt: Bei Aktivierung wird nichts abgespielt, bei einer späteren Deaktivierung hingegen schon. Das ist nützlich, wenn eine Animation nur abgespielt werden soll, wenn das betreffende Element den Scrollport verlässt.

Es ist nicht sinnvoll, `pause` mit `reset` zu kombinieren, da beide Aktionen die Animation effektiv pausieren. `reset` setzt sie zusätzlich an den Anfang zurück. Wenn die Animation noch nicht abgespielt wurde, hat `reset` keinen erkennbaren Effekt.

### Animation zurücksetzen

Die Werte `replay` und `reset` ähneln `pause`, mit folgenden Unterschieden:

- `reset` pausiert die Animation und setzt sie außerdem an den Anfang zurück.
- `replay` setzt die Animation an den Anfang zurück und startet sie anschließend erneut.

Die Kombination dieser Werte mit anderen Werten wurde bereits erläutert. Ein Fall wurde jedoch noch nicht erwähnt: ihre Verwendung als Aktivierungsaktion.

Zum Beispiel:

```css
animation-trigger: --t replay pause;
```

Dies hat einen interessanten Effekt: Die Animation wird bei Aktivierung abgespielt (wie bei einer Aktion wie `play`) und bei Deaktivierung pausiert. Bei einer späteren Aktivierung beginnt sie jedoch unabhängig von ihrem vorherigen Abspielzustand erneut am Anfang. Das ist nützlich, wenn eine Animation abgespielt werden soll, sobald das betreffende Element in den Scrollport gelangt, pausieren soll, wenn es ihn verlässt, und bei jedem späteren Eintritt wieder von Anfang an abgespielt werden soll.

Ein weiteres interessantes Beispiel:

```css
animation-trigger: --t reset play;
```

Dies hat ebenfalls einen interessanten Effekt: Die Animation wird bei Aktivierung nicht abgespielt, bei Deaktivierung jedoch schon. Bei einer späteren Aktivierung wird sie unabhängig von ihrem vorherigen Abspielzustand auf den Fortschritt `0` zurückgesetzt. Das ist nützlich, wenn eine Animation abgespielt werden soll, sobald das betreffende Element den Scrollport verlässt, und bei jedem späteren Eintritt wieder an den Anfang zurückgesetzt werden soll.

### Entsprechung in der Web Animations API

Das durch die verschiedenen `<animation-action>`-Schlüsselwörter festgelegte Verhalten entspricht dem Aufruf verschiedener Methoden der [Web Animations API](/de/docs/Web/API/Web_Animations_API) für die jeweilige Animation:

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

Dieses Beispiel zeigt, wie Sie eine einfache durch Scrollen ausgelöste Animation erstellen, die bei Aktivierung des Triggers vorwärts und bei Deaktivierung rückwärts abgespielt wird.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente – eines für die Animation und eines als Trigger – sowie etwas Textinhalt, damit die Seite scrollbar ist. Der Textinhalt wurde der Kürze halber ausgeblendet.

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

Wir geben dem Element `.animated` für {{cssxref("position")}} den Wert `fixed` und positionieren es in der Nähe der linken oberen Ecke des Scrollports. So können wir sehen, wann seine Animation beginnt und endet.

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

Auf das Element `.animated` wird die `rotate`-Animation angewendet. Anschließend geben wir ihm einen `animation-trigger`-Wert, der auf einen `timeline-trigger-name` namens `--t` verweist und die beiden `<animation-action>`-Werte `play-forwards` und `play-backwards` enthält. Diese legen fest, dass die Animation bei Aktivierung vorwärts und bei Deaktivierung rückwärts abgespielt wird.

```css live-sample___basic-example
.animated {
  animation: rotate 1.5s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}
```

Das Element `.trigger` erstellt den Trigger für das animierte `<div>` mit dem `timeline-trigger`-Wert `--t view()`. Dieser Wert enthält den Bezeichner, auf den der `animation-trigger`-Eigenschaftswert des animierten `<div>` verweist (den `timeline-trigger-name`), und verknüpft so die beiden Elemente. Außerdem enthält er:

- Einen `timeline-trigger-source`-Wert von [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird als Timeline-Trigger eine View-Progress-Timeline festgelegt und als Element, das den Timeline-Trigger bereitstellt, der nächste scrollende Vorfahr.
- Einen {{cssxref("timeline-trigger-activation-range")}}-Wert von [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#contain). Das bedeutet, dass der Trigger aktiviert wird, wenn sich das Element `.trigger` vollständig im Scrollport befindet. Da {{cssxref("timeline-trigger-active-range")}} standardmäßig `auto` ist, entspricht sein Wert dem Aktivierungsbereich. Der Trigger wird daher deaktiviert, sobald sich das Element nicht mehr vollständig im Scrollport befindet.

```css live-sample___basic-example
.trigger {
  timeline-trigger: --t view() contain;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Versuchen Sie, den Inhalt nach oben zu scrollen. Sobald das beobachtete `<div>` vollständig im Scrollport erscheint, wird die Animation abgespielt. Wenn es beginnt, den Scrollport an einer der beiden Kanten zu verlassen, läuft die Animation rückwärts.

### Vergleich der `<animation-action>`-Werte

Dieses Beispiel vergleicht die verschiedenen `<animation-action>`-Werte. Indem Sie dieselbe Rotationsanimation auf identische nebeneinanderstehende Elemente anwenden und die `animation-trigger`-Werte variieren, können Sie die Auswirkungen der verschiedenen Aktionen vergleichen.

#### HTML

Wir verwenden ein {{htmlelement("section")}}-Element mit fünf {{htmlelement("div")}}-Elementen, die jeweils eine Zahl enthalten. Außerdem fügen wir Textinhalt hinzu, damit die Seite scrollbar ist; diesen haben wir der Kürze halber ausgeblendet.

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

Wir wenden dieselbe {{cssxref("animation")}} auf jedes `<div>`-Element an: Die `rotate`-Animation wird unendlich oft abgespielt, wobei jede Iteration zwei Sekunden dauert. Außerdem gestalten wir jedes `<div>` als farbigen Kreis mit einem Durchmesser von `50px`.

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

Als Nächstes legen wir fest, dass das `<section>`-Element einen Animationstrigger mit dem `timeline-trigger`-Wert `--t view() contain 20% contain 80%` erstellt. Daran ist nichts Ungewöhnliches, außer dass wir einen Wert für {{cssxref("timeline-trigger-activation-range")}} festgelegt haben und {{cssxref("timeline-trigger-active-range")}} standardmäßig `contain 20% contain 80%` übernimmt. Das bedeutet, dass der Trigger aktiviert wird, wenn das `<section>`-Element etwa `20%` des Wegs durch den Scrollport nach oben gescrollt ist, und deaktiviert wird, wenn es etwa `80%` des Wegs nach oben gescrollt ist. So können Sie die Auswirkungen der `<animation-action>`-Werte deutlicher erkennen, als wenn sich der Aktivierungsbereich über den gesamten Scrollport erstrecken würde.

```css live-sample___different-effects
section {
  timeline-trigger: --t view() contain 20% contain 80%;
}
```

Als Nächstes legen wir für jedes `<div>`-Element einen anderen Wert der Eigenschaft {{cssxref("animation-trigger")}} fest. Jeder Wert verweist auf den `timeline-trigger-name` des `<section>`-Elements, verwendet aber eine andere Kombination von `<animation-action>`-Werten. Auf das letzte `<div>` wird außerdem ein neuer Wert für die Eigenschaft `animation` angewendet, der den zuvor festgelegten Wert überschreibt. Er entspricht dem ursprünglichen `animation`-Wert, außer dass die Anzahl der Iterationen auf `1` statt auf `infinite` gesetzt ist. Die Wirkung von `play-once` lässt sich leichter zeigen, wenn `animation-iteration-count` nicht `infinite` ist (in diesem Fall würde die Animation ohnehin endlos laufen).

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

Scrollen Sie nach unten, bis die `<section>`- und `<div>`-Elemente in den Scrollport gelangen. Bewegen Sie sie über den Anfang und das Ende des Aktivierungsbereichs des Triggers hinweg und konzentrieren Sie sich dabei jedes Mal auf ein anderes `<div>`, um die Auswirkungen der jeweiligen `<animation-action>`-Werte zu sehen.

Die Auswirkungen sind:

1. Für das erste `<div>` (ganz links) ist `play-forwards play-backwards` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, wird die Animation vorwärts abgespielt. Verlässt es den Aktivierungsbereich (am oberen oder unteren Rand des Scrollports), beginnt die Animation rückwärts zu laufen.
2. Für das zweite `<div>` ist nur ein `<animation-action>`-Wert festgelegt: `play`. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, beginnt die Animation. Da keine Deaktivierungsaktion festgelegt ist, die ihr Verhalten ändern würde, läuft sie jedoch bis zum erneuten Laden der Seite weiter.
3. Für das dritte `<div>` ist `play replay` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, beginnt die Animation vorwärts zu laufen. Verlässt es den Aktivierungsbereich, wird die Animation auf den Fortschritt `0` zurückgesetzt und anschließend erneut abgespielt.
4. Für das vierte `<div>` ist `pause play` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, bleibt die Animation pausiert. Verlässt es den Aktivierungsbereich, beginnt die Animation jedoch zu laufen. Danach pausiert sie, solange sich das beobachtete Element im Aktivierungsbereich befindet, und läuft, wenn es sich außerhalb befindet.
5. Für das fünfte `<div>` (ganz rechts, mit einer Iterationsanzahl von `1`) ist `play-once reset` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, wird die Animation einmal abgespielt. Verlässt es den Aktivierungsbereich, wird die Animation auf den Fortschritt `0` zurückgesetzt und pausiert. Danach wird die Animation jedes Mal einmal abgespielt, wenn das beobachtete Element in den Aktivierungsbereich gelangt, und zurückgesetzt, wenn es ihn verlässt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}}-Kurzschreibweise
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
