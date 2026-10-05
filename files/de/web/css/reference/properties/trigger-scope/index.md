---
title: trigger-scope CSS property
short-title: trigger-scope
slug: Web/CSS/Reference/Properties/trigger-scope
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`trigger-scope`** lässt sich der Geltungsbereich eines Trigger-Namens für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) auf einen Teilbaum des Dokuments beschränken.

## Syntax

```css
/* Keywords */
trigger-scope: none;
trigger-scope: all;

/* <dashed-ident> */
trigger-scope: --my-trigger;

/* Multiple values */
trigger-scope: --my-trigger, --another-trigger;

/* Global values */
trigger-scope: inherit;
trigger-scope: initial;
trigger-scope: revert;
trigger-scope: revert-layer;
trigger-scope: unset;
```

### Werte

Angegeben als `none`, `all` oder als kommagetrennte Liste von {{cssxref("dashed-ident")}}-Werten:

- `none`
  - : Legt fest, dass der Geltungsbereich von Triggern nicht eingeschränkt wird. Dies ist der Standardwert.
- `all`
  - : Beschränkt den Geltungsbereich so, dass _alle_ im Teilbaum festgelegten `timeline-trigger-name`-Werte nur animierten Elementen im selben Teilbaum zugeordnet werden können.
- {{cssxref("dashed-ident")}}
  - : Ein Trigger-Name. Beschränkt den Geltungsbereich so, dass die angegebenen `timeline-trigger-name`-Werte, wenn sie im Teilbaum festgelegt werden, nur animierten Elementen im selben Teilbaum zugeordnet werden können.

## Beschreibung

Mit der Eigenschaft `trigger-scope` lässt sich der Geltungsbereich von Triggern bei [scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) auf bestimmte Teilbäume von Elementen beschränken.

Trigger-Namen werden mit der Eigenschaft {{cssxref("timeline-trigger-name")}} definiert und sind standardmäßig global gültig. Wenn ein animiertes Element über seine Eigenschaft {{cssxref("animation-trigger")}} einem Trigger-Namen zugeordnet ist, bestimmt der Browser das zugehörige Trigger-Element wie folgt:

1. Er durchsucht die Vorfahren des animierten Elements aufwärts, bis er ein Element findet, dessen `timeline-trigger-name` mit dem Namen übereinstimmt, auf den der Wert von `animation-trigger` verweist. Ist das animierte Element selbst der Trigger, wird es sofort gefunden.
2. Findet er unter den Vorfahren keinen passenden Trigger, verwendet er das _letzte_ Element in der HTML-Quellreihenfolge mit diesem `timeline-trigger-name`-Wert.
3. Findet er im DOM kein Element mit diesem `timeline-trigger-name`-Wert, wird das animierte Element nicht durch Scrollen ausgelöst. Da keine zugehörige Timeline vorhanden ist, findet die Animation nicht statt.

Wenn mehrere Elemente Trigger mit demselben Trigger-Namen definieren, wird nur das letzte Element im Dokumentbaum als Trigger für animierte Elemente verwendet, die in ihrer `animation-trigger`-Eigenschaft auf diesen Namen verweisen. Das ist wahrscheinlich nicht das gewünschte Verhalten.

Die Eigenschaft `trigger-scope` kann dieses Problem lösen, indem sie den Geltungsbereich eines Trigger-Namens auf einen Teilbaum des Dokuments beschränkt. Dadurch ist der Trigger nur für Elemente innerhalb desselben Teilbaums sichtbar und hat keine Auswirkungen auf Elemente außerhalb. Wenn `trigger-scope` für ein Element festgelegt ist und dieses Element oder seine Nachfahren als Trigger definiert sind, werden animierte Elemente diesen Triggern nur zugeordnet, wenn sie sich im selben Teilbaum befinden.

Welche Trigger-Namen in den Geltungsbereich fallen, hängt vom festgelegten `trigger-scope`-Wert ab:

- `trigger-scope: all` bedeutet, dass alle Trigger-Namen in den Geltungsbereich fallen.
- `trigger-scope: --my-trigger, --another-trigger` bedeutet, dass nur Trigger mit den Namen `--my-trigger` und/oder `--another-trigger` in den Geltungsbereich fallen.
- `trigger-scope: none` bedeutet, dass für das Element keine Einschränkung des Trigger-Geltungsbereichs festgelegt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich mit der Eigenschaft `trigger-scope` der Geltungsbereich eines `animation-trigger-name` beschränken lässt.

#### HTML

Wir verwenden drei {{htmlelement("section")}}-Elemente, die jeweils zwei {{htmlelement("div")}}-Elemente enthalten: ein `.animated`-Element und ein `.trigger`-Element.

Der Großteil des HTML-Codes, einschließlich eines [Kontrollkästchens](/de/docs/Web/HTML/Reference/Elements/input/checkbox), mit dem sich die Eigenschaft `trigger-scope` aktivieren oder deaktivieren lässt, wurde der Kürze halber ausgeblendet.

```html
<section id="one">
  <div class="animated"></div>
  ...
  <div class="trigger">Trigger for first animation</div>
  ...
</section>
<section id="two">
  <div class="animated"></div>
  ...
  <div class="trigger">Trigger for second animation</div>
  ...
</section>
<section id="three">
  <div class="animated"></div>
  ...
  <div class="trigger">Trigger for third animation</div>
  ...
</section>
```

```html hidden live-sample___trigger-scope
<section id="one">
  <div class="animated"></div>

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

  <div class="trigger">Trigger for first animation</div>

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
</section>
<section id="two">
  <div class="animated"></div>
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

  <div class="trigger">Trigger for second animation</div>

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
</section>
<section id="three">
  <div class="animated"></div>

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

  <div class="trigger">Trigger for third animation</div>

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
</section>
<label for="trigger-scope"
  >Set <code>trigger-scope</code> to <code>none</code>
  <input id="trigger-scope" type="checkbox" />
</label>
```

#### CSS

Wir definieren drei {{cssxref("@keyframes")}}-Animationen. Jede wird auf ein anderes `.animated`-Element angewendet.

```css live-sample___trigger-scope
@keyframes fade-in {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes color-cycle {
  from {
    background: red;
    scale: 1;
  }

  to {
    background: blue;
    scale: 2;
  }
}

@keyframes move-up-down {
  25% {
    translate: 0 -20px;
  }

  75% {
    translate: 0 20px;
  }
}
```

```css hidden live-sample___trigger-scope
body {
  width: 60%;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
}

p {
  line-height: 1.5;
}

section {
  background: #eee;
  padding: 10px 20px;
  margin-top: 20px;
}

.animated {
  width: 50px;
  height: 50px;
  background: red;
  border: 5px solid black;
}

label {
  position: fixed;
  bottom: 2px;
  right: 2px;
  padding: 5px;
  border: 2px solid black;
  background: white;
}
```

Die {{cssxref("position")}} der animierten Elemente wird auf `fixed` gesetzt. Dadurch werden sie nahe am oberen Rand des Scrollports positioniert und bleiben jederzeit sichtbar.

Alle animierten Elemente haben denselben `animation-trigger`-Wert: Ihre Animationen werden durch einen Trigger mit dem `timeline-trigger-name` `--t` ausgelöst. Die Animationen werden abgespielt, wenn ihr Trigger aktiviert wird, und zurückgesetzt, wenn er deaktiviert wird.

```css live-sample___trigger-scope
.animated {
  position: fixed;
  top: 10px;
  animation-trigger: --t play reset;
}
```

Über die Kurzschreibweise {{cssxref("animation")}} erhält jedes `.animated`-Element einen anderen {{cssxref("animation-name")}}. Außerdem haben die Elemente jeweils einen anderen {{cssxref("left")}}-Wert, damit sie nicht übereinander positioniert werden.

```css live-sample___trigger-scope
#one .animated {
  animation: fade-in 1s infinite alternate ease-in;
  left: 10px;
}

#two .animated {
  animation: color-cycle 1s infinite alternate linear;
  left: 110px;
}

#three .animated {
  animation: move-up-down 2s infinite linear;
  left: 210px;
}
```

Die `.trigger`-Elemente werden als Trigger für die `.animated`-Elemente festgelegt. Dazu erhalten sie einen {{cssxref("timeline-trigger-name")}}-Wert mit demselben Bezeichner `--t` sowie den {{cssxref("timeline-trigger-source")}}-Wert `view()`. Wir setzen {{cssxref("timeline-trigger-activation-range")}} auf `contain` und belassen {{cssxref("timeline-trigger-active-range")}} beim Standardwert, der hier demselben Wert entspricht. Dadurch erfolgen die Aktivierung und Deaktivierung, während der Trigger noch sichtbar ist. Außerdem legen wir einige einfache Stile fest, damit sich die Trigger vom übrigen Text abheben.

```css live-sample___trigger-scope
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain;

  padding: 10px;
  border: 2px solid black;
  background: black;
  color: white;
}
```

Abschließend setzen wir `trigger-scope` für die {{htmlelement("section")}}-Elemente auf `all`. Dadurch wird die Wirkung jedes Triggers mit dem Namen `--t` auf das jeweilige Vorfahrenelement `<section>` beschränkt.

```css live-sample___trigger-scope
section {
  trigger-scope: all;
}
```

```css hidden live-sample___trigger-scope
:has(:checked) section {
  trigger-scope: none;
}

@supports not (trigger-scope: all) {
  body::before {
    content: "Your browser does not support the trigger-scope property.";
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

{{embedlivesample("trigger-scope", "100%", 400)}}

Scrollen Sie im Beispiel nach unten. Es wird jeweils nur ein Quadrat animiert. Der Grund dafür ist, dass jedes Quadrat nur dann animiert wird, wenn das Trigger-Element im selben Geltungsbereich (demselben `<section>`) im Scrollport sichtbar ist. Obwohl die drei Trigger denselben Trigger-Namen verwenden, wird die Animation jedes `.animated`-Elements von einem anderen Trigger ausgelöst.

Aktivieren Sie nun das Kontrollkästchen, um `trigger-scope: all` von den `<section>`-Elementen zu entfernen. Scrollen Sie erneut durch den Inhalt. Keines der Quadrate wird animiert, bis das dritte `.trigger`-Element im Scrollport sichtbar ist. Dann beginnen alle Quadrate gleichzeitig mit ihrer Animation. Da die Beschränkung des Geltungsbereichs entfernt wurde, wird die Animation jedes `.animated`-Elements durch das letzte Element mit `--t` als `timeline-trigger-name` aktiviert und deaktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}}
- Kurzschreibweise {{cssxref("timeline-trigger")}}
- Typ {{cssxref("animation-action")}}
- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
