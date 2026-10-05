---
title: <animation-action>
slug: Web/CSS/Reference/Values/animation-action
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

Der {{Glossary("enumerated", "Aufzählungsdatentyp")}} **`<animation-action>`** beschreibt Schlüsselwortwerte, die festlegen, wie sich eine Animation unter bestimmten Umständen verhält – beispielsweise, wie eine [ausgelöste Animation](/de/docs/Web/CSS/Guides/Animation_triggers) reagiert, wenn ihr Auslöser aktiviert oder deaktiviert wird.

Die Schlüsselwortwerte von `<animation-action>` werden in der folgenden Eigenschaft verwendet:

- {{cssxref("animation-trigger")}}

## Syntax

Für den Aufzählungsdatentyp `<animation-action>` wird einer der folgenden Werte angegeben:

- `none`
  - : Für die Animation ist keine Aktion festgelegt.
- `play`
  - : Die Animation wird abgespielt, fortgesetzt (falls sie pausiert ist) oder neu gestartet (falls sie bereits beendet ist) – jeweils in ihrer aktuellen Abspielrichtung.
- `play-forwards`
  - : Wie `play`, allerdings wird die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation bei Bedarf angepasst (von negativ auf positiv gesetzt), damit die Animation vorwärts abgespielt wird.
- `play-backwards`
  - : Wie `play`, allerdings wird die `playbackRate` der Animation bei Bedarf angepasst (von positiv auf negativ gesetzt), damit die Animation rückwärts abgespielt wird.
- `play-once`
  - : Wie `play`, allerdings wird die Animation nicht erneut ausgelöst, nachdem sie alle Iterationen durchlaufen hat. Wie `play` setzt `play-once` eine pausierte Animation fort; anders als `play` spielt es eine beendete Animation nicht erneut ab.
- `pause`
  - : Die Animation wird pausiert.
- `replay`
  - : Wie `play`, allerdings wird die Animation zuvor an den Anfang zurückgesetzt.
- `reset`
  - : Wie `pause`, allerdings wird die Animation an den Anfang zurückgesetzt.

## Beschreibung

Der Typ `<animation-action>` legt fest, wie sich eine Animation bei bestimmten Ereignissen verhält. Wenn Sie beispielsweise mit {{cssxref("animation-trigger")}} ein animiertes Element als ausgelöste Animation festlegen, kann der Wert einen oder zwei durch ein Leerzeichen getrennte `<animation-action>`-Werte enthalten. Der erste Wert bestimmt das Verhalten der Animation bei Aktivierung ihres Auslösers, der optionale zweite das Verhalten bei dessen Deaktivierung. Wenn Sie nur einen Wert angeben, ändert die Animation bei Deaktivierung des Auslösers ihr Verhalten nicht, sondern behält das Aktivierungsverhalten bei. Dies hat dieselbe Wirkung, als würden Sie `none` als zweiten Wert angeben.

Einige häufige Muster sind:

- `play-forwards play-backwards` wird häufig verwendet, wenn ein UI-Element beim Scrollen in den sichtbaren Bereich „eingeblendet“ und beim Verlassen dieses Bereichs wieder „ausgeblendet“ werden soll.
- `play pause` wird häufig verwendet, um ein Element beim Scrollen in den sichtbaren Bereich zu animieren und die Animation zu pausieren, wenn es diesen Bereich verlässt.
- `play-once` wird oft allein verwendet, wenn eine Animation beim Scrollen in den sichtbaren Bereich nur einmal abgespielt werden soll.

Die acht `<animation-action>`-Werte ermöglichen unterschiedliche Animationsverhalten. Es ist wichtig zu verstehen, wie sie für sich genommen wirken und welche Effekte sich durch verschiedene Werte für Aktivierung und Deaktivierung des Auslösers ergeben.

### Keine Aktion festlegen

Verwenden Sie `none`, um festzulegen, dass keine Aktion ausgeführt werden soll.

### Animation abspielen

Die Schlüsselwortwerte `play`, `play-forwards`, `play-backwards` und `play-once` bewirken alle, dass die Animation abgespielt wird. Sie unterscheiden sich jedoch im genauen Verhalten.

#### `play`

Mit `play` wird die Animation über alle durch die Eigenschaft {{cssxref("animation-iteration-count")}} festgelegten Iterationen abgespielt.

Wenn nur `play` angegeben ist, wird die Animation bei Aktivierung abgespielt. Da keine Aktion für die Deaktivierung angegeben ist, ändert sich ihr Verhalten bei Deaktivierung nicht.

```css
animation-trigger: --t play;
```

Wird `play` mit `pause`, `replay` oder `reset` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung entsprechend pausiert, erneut abgespielt oder zurückgesetzt. Bei einer späteren Aktivierung wird die Animation wieder abgespielt.

```css
animation-trigger: --t play reset;
```

Wird `play` mit `play-backwards` kombiniert, wird die Animation bei Aktivierung abgespielt. Bei Deaktivierung läuft sie rückwärts durch alle Iterationen, die sie zuvor vorwärts durchlaufen hat:

```css
animation-trigger: --t play play-backwards;
```

Die Kombination von `play` mit `play-once` ist zwar gültig, aber unnötig, da sie sich genauso verhält wie `play`. Ebenso ist die Kombination von `play` mit `play-forwards` unnötig: `play-forwards` spielt die Animation in derselben Richtung ab wie `play`, auch wenn {{cssxref("animation-direction")}} auf `reverse` oder `alternate` gesetzt ist.

#### `play-forwards` und `play-backwards`

Mit `play-forwards` und `play-backwards` wird die Animation über alle Iterationen abgespielt, jedoch in Vorwärts- beziehungsweise Rückwärtsrichtung. Dazu wird die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation angepasst; der Wert von {{cssxref("animation-direction")}} bleibt unverändert.

Wird nur `play-forwards` als Aktivierungsaktion angegeben, hat dies dieselbe Wirkung wie die alleinige Angabe von `play`:

```css
animation-trigger: --t play-forwards;
```

Die Kombination von `play-forwards` mit `play-backwards` bewirkt, dass die Animation bei Aktivierung vorwärts abgespielt wird. Bei Deaktivierung läuft sie rückwärts durch alle Iterationen, die sie zuvor vorwärts durchlaufen hat. Bei späteren Aktivierungen beginnt sie erneut, vorwärts zu laufen.

```css
animation-trigger: --t play-forwards play-backwards;
```

Die Kombination von `play-forwards` mit `pause`, `replay` oder `reset` hat dieselbe Wirkung wie bei `play`: Die Animation wird bei Aktivierung abgespielt und bei Deaktivierung entsprechend pausiert, erneut abgespielt oder zurückgesetzt. Bei späteren Aktivierungen wird sie wieder abgespielt.

```css
animation-trigger: --t play-forwards pause;
```

Es ist nicht sinnvoll, `play-forwards` mit `play` oder `play-once` zu kombinieren, da alle diese Aktionen die Animation effektiv vorwärts abspielen. Dieselbe Aktion bei Aktivierung und Deaktivierung hat keinen erkennbaren Effekt.

Beachten Sie, dass `play-backwards` als Aktivierungsaktion keine Wirkung hat, wenn die Animation bereits am Anfang ihrer Iterationen steht. Im folgenden Beispiel wird die Animation nicht abgespielt, weil sie sich bereits am Anfang befindet:

```css
animation-trigger: --t play-backwards;
```

#### `play-once`

Mit `play-once` wird die Animation über alle Iterationen abgespielt, jedoch nur einmal. Wenn {{cssxref("animation-iteration-count")}} auf `infinite` gesetzt ist, unterscheidet sich die Wirkung von `play-once` kaum von der von `play` oder `play-forwards`. Bei einer endlichen Anzahl von Iterationen zeigt sich jedoch das folgende Verhalten.

Wird `play-once` mit `pause` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung pausiert. Sobald sie alle Iterationen durchlaufen hat, wird sie bei späteren Aktivierungen jedoch nicht erneut abgespielt.

```css
animation-trigger: --t play-once pause;
```

Wird `play-once` mit `replay` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung erneut von Anfang an abgespielt. Bei keinem Durchlauf überschreitet sie ihre festgelegte Anzahl von Iterationen. Sie wird jedoch bei späteren Deaktivierungen erneut abgespielt, weil sie jedes Mal an den Anfang zurückgesetzt wird. Bei späteren Aktivierungen wird sie dagegen nicht erneut abgespielt.

```css
animation-trigger: --t play-once replay;
```

Wird `play-once` mit `reset` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung an den Anfang zurückgesetzt. Bei einer späteren Aktivierung wird sie erneut abgespielt.

```css
animation-trigger: --t play-once reset;
```

Wird `play-once` mit `play-backwards` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung rückwärts durch alle Iterationen abgespielt. Bei späteren Aktivierungen wird sie nicht erneut abgespielt, bei späteren Deaktivierungen jedoch erneut rückwärts.

```css
animation-trigger: --t play-once play-backwards;
```

### Animation pausieren

Der Wert `pause` pausiert die Animation bei Aktivierung oder Deaktivierung an der Stelle, die sie während der Wiedergabe erreicht hat. Die Kombination mit anderen Werten wurde bereits erläutert. Ein bisher nicht genanntes Beispiel ist `pause` als Aktivierungsaktion:

```css
animation-trigger: --t pause play;
```

Dies hat einen interessanten Effekt: Bei Aktivierung wird die Animation nicht abgespielt, bei einer späteren Deaktivierung dagegen schon. Das ist nützlich, wenn die Animation erst abgespielt werden soll, wenn das betreffende Element den Scrollport verlässt.

Die Kombination von `pause` mit `reset` ist nicht sinnvoll, da beide die Animation effektiv pausieren. `reset` setzt sie zusätzlich an den Anfang zurück. Wurde die Animation noch nicht abgespielt, hat `reset` keinen erkennbaren Effekt.

### Animation zurücksetzen

Die Werte `replay` und `reset` ähneln `pause`, allerdings gilt:

- `reset` pausiert die Animation und setzt sie an den Anfang zurück.
- `replay` setzt die Animation an den Anfang zurück und startet sie dann erneut.

Die Kombination dieser Werte mit anderen Werten wurde bereits erläutert. Ein Fall wurde jedoch noch nicht behandelt: ihre Verwendung als Aktivierungsaktion.

Zum Beispiel:

```css
animation-trigger: --t replay pause;
```

Dies hat einen interessanten Effekt: Bei Aktivierung wird die Animation abgespielt (wie bei einer Aktion vom Typ `play`), bei Deaktivierung pausiert sie. Bei einer späteren Aktivierung beginnt sie jedoch unabhängig vom vorherigen Abspielzustand erneut am Anfang. Das ist nützlich, wenn eine Animation beim Eintritt des betreffenden Elements in den Scrollport abgespielt, beim Verlassen pausiert und bei jedem erneuten Eintritt von Anfang an abgespielt werden soll.

Ein weiteres interessantes Beispiel:

```css
animation-trigger: --t reset play;
```

Hier wird die Animation bei Aktivierung nicht abgespielt, bei Deaktivierung dagegen schon. Bei einer späteren Aktivierung wird sie unabhängig vom vorherigen Abspielzustand auf den Fortschritt `0` zurückgesetzt. Das ist nützlich, wenn eine Animation beim Verlassen des Scrollports abgespielt und bei jedem erneuten Eintritt an den Anfang zurückgesetzt werden soll.

### Entsprechungen in der Web Animations API

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

Dieses Beispiel zeigt, wie Sie eine einfache durch Scrollen ausgelöste Animation erstellen, die bei Aktivierung des Auslösers vorwärts und bei Deaktivierung rückwärts abgespielt wird.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente: eines für die Animation und eines als Auslöser. Hinzu kommt Textinhalt, damit die Seite gescrollt werden kann. Der Textinhalt ist der Kürze halber ausgeblendet.

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

Wir geben dem `.animated`-Element für {{cssxref("position")}} den Wert `fixed` und positionieren es nahe der oberen linken Ecke des Scrollports. So können wir erkennen, wann seine Animation beginnt und endet.

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

Als Nächstes definieren wir mit {{cssxref("@keyframes")}} die `rotate`-Animation:

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

Auf das `.animated`-Element wird die `rotate`-Animation angewendet. Anschließend weisen wir ihm einen `animation-trigger`-Wert zu, der über den `timeline-trigger-name` `--t` auf einen Auslöser verweist und die beiden `<animation-action>`-Werte `play-forwards` und `play-backwards` enthält. Diese legen fest, dass die Animation bei Aktivierung vorwärts und bei Deaktivierung rückwärts abgespielt wird.

```css live-sample___basic-example
.animated {
  animation: rotate 1.5s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}
```

Das `.trigger`-Element erzeugt mit dem `timeline-trigger`-Wert `--t view()` den Auslöser für das animierte `<div>`. Dieser Wert enthält den Bezeichner, auf den der Wert der `animation-trigger`-Eigenschaft des animierten `<div>` verweist (den `timeline-trigger-name`), und verknüpft so die beiden Elemente. Außerdem enthält er:

- Einen `timeline-trigger-source`-Wert von [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Auslöser als View-Progress-Timeline festgelegt; das nächstgelegene scrollbare Vorfahrenelement dient als Grundlage für diese Timeline.
- Einen {{cssxref("timeline-trigger-activation-range")}}-Wert von [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#contain). Dadurch wird der Auslöser aktiviert, wenn sich das `.trigger`-Element vollständig im Scrollport befindet. Da {{cssxref("timeline-trigger-active-range")}} standardmäßig `auto` ist, entspricht sein Wert dem Aktivierungsbereich. Der Auslöser wird daher deaktiviert, sobald sich das Element nicht mehr vollständig im Scrollport befindet.

```css live-sample___basic-example
.trigger {
  timeline-trigger: --t view() contain;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben. Sobald das beobachtete `<div>` vollständig im Scrollport erscheint, wird die Animation abgespielt. Wenn es beginnt, den Scrollport an einer der beiden Kanten zu verlassen, wird die Animation rückwärts abgespielt.

### Vergleich der `<animation-action>`-Werte

Dieses Beispiel vergleicht die verschiedenen `<animation-action>`-Werte. Indem Sie dieselbe Rotationsanimation auf identische, nebeneinander angeordnete Elemente anwenden und die `animation-trigger`-Werte variieren, können Sie die Auswirkungen der verschiedenen Aktionen vergleichen.

#### HTML

Wir verwenden ein {{htmlelement("section")}}-Element mit fünf {{htmlelement("div")}}-Elementen, die jeweils eine Zahl enthalten. Zusätzlich gibt es Textinhalt, damit die Seite gescrollt werden kann. Er ist der Kürze halber ausgeblendet.

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

Wir wenden auf jedes `<div>`-Element dieselbe {{cssxref("animation")}} an: Die `rotate`-Animation wird unbegrenzt wiederholt, wobei jede Iteration zwei Sekunden dauert. Außerdem gestalten wir jedes `<div>` als farbigen Kreis mit einem Durchmesser von `50px`.

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

Als Nächstes legen wir fest, dass das `<section>`-Element mit dem `timeline-trigger`-Wert `--t view() contain 20% contain 80%` einen Animationsauslöser erzeugt. Dabei setzen wir {{cssxref("timeline-trigger-activation-range")}} und den Standardwert von {{cssxref("timeline-trigger-active-range")}} auf `contain 20% contain 80%`. Das bedeutet, dass der Auslöser aktiviert wird, wenn das `<section>`-Element ungefähr `20%` des Weges durch den Scrollport nach oben gescrollt wurde, und deaktiviert wird, wenn es ungefähr `80%` dieses Weges zurückgelegt hat. So lassen sich die Auswirkungen von `<animation-action>` deutlicher erkennen, als wenn der Aktivierungsbereich den gesamten Scrollport umfassen würde.

```css live-sample___different-effects
section {
  timeline-trigger: --t view() contain 20% contain 80%;
}
```

Anschließend legen wir für jedes `<div>`-Element einen anderen Wert der Eigenschaft {{cssxref("animation-trigger")}} fest. Alle verweisen auf den `timeline-trigger-name` des `<section>`-Elements, verwenden jedoch unterschiedliche Kombinationen von `<animation-action>`-Werten. Das letzte `<div>` erhält zusätzlich einen neuen Wert für die Eigenschaft `animation`, der den zuvor festgelegten überschreibt. Er entspricht dem ursprünglichen `animation`-Wert, allerdings ist die Anzahl der Iterationen auf `1` statt auf `infinite` gesetzt. Die Wirkung von `play-once` lässt sich leichter demonstrieren, wenn `animation-iteration-count` nicht `infinite` ist; andernfalls würde die Animation unabhängig davon unbegrenzt laufen.

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

Scrollen Sie nach unten, bis die `<section>`- und `<div>`-Elemente in den Scrollport eintreten. Bewegen Sie sie über den Anfang und das Ende des Aktivierungsbereichs des Auslösers und konzentrieren Sie sich dabei jeweils auf ein anderes `<div>`, um die Auswirkungen der verschiedenen `<animation-action>`-Kombinationen zu sehen.

Die Auswirkungen sind:

1. Für das erste `<div>` (ganz links) ist `play-forwards play-backwards` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich eintritt, wird die Animation vorwärts abgespielt. Wenn es den Aktivierungsbereich verlässt (am oberen oder unteren Rand des Scrollports), beginnt sie rückwärts zu laufen.
2. Für das zweite `<div>` ist nur ein `<animation-action>`-Wert festgelegt: `play`. Wenn das beobachtete Element in den Aktivierungsbereich eintritt, beginnt die Animation. Da keine Deaktivierungsaktion ihr Verhalten ändert, läuft sie jedoch unbegrenzt weiter, bis die Seite neu geladen wird.
3. Für das dritte `<div>` ist `play replay` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich eintritt, beginnt die Animation vorwärts zu laufen. Wenn es den Bereich verlässt, wird die Animation auf den Fortschritt `0` zurückgesetzt und erneut abgespielt.
4. Für das vierte `<div>` ist `pause play` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich eintritt, bleibt die Animation pausiert. Sobald es den Bereich verlässt, beginnt die Animation. Danach pausiert sie, solange sich das beobachtete Element innerhalb des Aktivierungsbereichs befindet, und läuft, wenn es sich außerhalb befindet.
5. Für das fünfte `<div>` (ganz rechts, mit einer Iterationsanzahl von `1`) ist `play-once reset` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich eintritt, wird die Animation einmal abgespielt. Verlässt es den Bereich, wird sie auf den Fortschritt `0` zurückgesetzt und pausiert. Danach wird die Animation bei jedem Eintritt des beobachteten Elements in den Aktivierungsbereich einmal abgespielt und beim Verlassen zurückgesetzt.

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
- Modul [CSS-Animationsauslöser](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
