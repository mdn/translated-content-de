---
title: animation
slug: Web/CSS/animation
l10n:
  sourceCommit: 6b62c5d66e283b84ba1f5cbf670fffe72ba05562
---

{{CSSRef}}

Die **`animation`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft wendet eine Animation zwischen Stilen an. Sie ist eine Kurzform für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}}, und {{cssxref("animation-timeline")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`animation-delay`](/de/docs/Web/CSS/animation-delay)
- [`animation-direction`](/de/docs/Web/CSS/animation-direction)
- [`animation-duration`](/de/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/de/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/de/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/de/docs/Web/CSS/animation-name)
- [`animation-play-state`](/de/docs/Web/CSS/animation-play-state)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`animation-timing-function`](/de/docs/Web/CSS/animation-timing-function)

## Syntax

```css
/* @keyframes Dauer | Beschleunigungsfunktion | Verzögerung |
Wiederholungsanzahl | Richtung | Füllmodus | Spielstatus | Name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes Dauer | Beschleunigungsfunktion | Verzögerung | Name */
animation: 3s linear 1s slidein;

/* zwei Animationen */
animation:
  3s linear slidein,
  3s ease-out 5s slideout;
```

Die `animation`-Eigenschaft wird als eine oder mehrere Einzelanimationen angegeben, die durch Kommata getrennt sind.

Jede individuelle Animation wird wie folgt spezifiziert:

- null, eine oder zwei Vorkommen des Werts {{cssxref("&lt;time&gt;")}}

- null oder ein Vorkommen der folgenden Werte:

  - [`<single-easing-function>`](#single-easing-function)
  - [`<single-animation-iteration-count>`](#single-animation-iteration-count)
  - [`<single-animation-direction>`](#single-animation-direction)
  - [`<single-animation-fill-mode>`](#single-animation-fill-mode)
  - [`<single-animation-play-state>`](#single-animation-play-state)

- ein optionaler Name für die Animation, der `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein kann

> **Hinweis:** {{cssxref("animation-timeline")}}, {{cssxref("animation-range-start")}}, und {{cssxref("animation-range-end")}} sind derzeit nicht in dieser Liste enthalten, da aktuelle Implementierungen nur zurücksetzbar sind. Das heißt, dass das Einfügen von `animation` einen zuvor deklarierten `animation-timeline`-Wert auf `auto` und zuvor deklarierte `animation-range-start`- und `animation-range-end`-Werte auf `normal` zurücksetzt, aber diese Eigenschaften können nicht über `animation` gesetzt werden. Bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen diese Eigenschaften nach der Deklaration einer `animation`-Shorthand deklariert werden, damit sie wirksam werden.

### Werte

- `<single-easing-function>`
  - : Bestimmt die Art der Übergänge. Der Wert muss einer der in {{cssxref("easing-function")}} verfügbaren sein.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein.
- `<single-animation-fill-mode>`
  - : Legt fest, wie Styles vor und nach der Ausführung der Animation auf das Ziel angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein.

## Beschreibung

Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird der {{cssxref("animation-duration")}} zugewiesen, und der zweite wird der {{cssxref("animation-delay")}} zugewiesen.

Die Reihenfolge der anderen Werte innerhalb jeder Animationsdefinition ist ebenfalls wichtig, um einen {{cssxref("animation-name")}} Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Shorthand als Wert für eine Animationseigenschaft geparst werden kann, die nicht `animation-name` ist, wird der Wert zuerst auf diese Eigenschaft angewendet und nicht auf `animation-name`. Aus diesem Grund ist es ratsam, einen Wert für `animation-name` als letzten Wert in einer Liste von Werten bei Verwendung der `animation`-Shorthand anzugeben; dies gilt auch, wenn Sie mehrere, durch Kommata getrennte Animationen mit der `animation`-Shorthand angeben.

Während ein Animationsname festgelegt sein muss, damit eine Animation angewendet wird, sind alle Werte der `animation`-Shorthand optional und standardmäßig auf den Initialwert für jede Einzelkomponente der `animation` Eigenschaft gesetzt. Der Initialwert von `animation-name` ist `none`, was bedeutet, dass wenn kein `animation-name`-Wert in der `animation`-Shorthand-Eigenschaft deklariert wird, keine Animation auf irgend eine Eigenschaft angewendet wird.

Wenn der `animation-duration`-Wert in der `animation`-Shorthand-Eigenschaft weggelassen wird, beträgt der Wert dieser Eigenschaft standardmäßig `0s`. In diesem Fall wird die Animation trotzdem stattfinden (die `animationStart` und `animationEnd` Ereignisse werden ausgelöst), aber es wird keine sichtbare Animation geben.

Im Fall des `animation-fill-mode` [forwards](/de/docs/Web/CSS/animation-fill-mode#forwards) Wertes verhalten sich animierte Eigenschaften so, als ob sie in einem Set-`will-change`-Eigenschaftswert enthalten sind. Wenn während der Animation ein neuer Stapelkontext erstellt wird, behält das Zielelement den Stapelkontext, nachdem die Animation beendet ist.

## Barrierefreiheit

Blinkende und flimmernde Animationen können problematisch für Menschen mit kognitiven Bedenken, wie z.B. Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS), sein. Darüber hinaus können bestimmte Arten von Bewegungen Auslöser für Vestibuläre Störungen, Epilepsie und Migräne sowie Skotopische Sensibilität sein.

Berücksichtigen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion), um ein ergänzendes Erlebnis für Benutzer zu schaffen, die eine Präferenz für reduzierte Animationen ausgedrückt haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Richtlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgs-Kriterium 2.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Das Animieren von [CSS Box Model](/de/docs/Web/CSS/CSS_box_model) Eigenschaften wird nicht empfohlen. Das Animieren einer beliebigen Box Model Eigenschaft ist von Natur aus CPU-intensiv; ziehen Sie in Betracht, stattdessen die [transform](/de/docs/Web/CSS/transform) Eigenschaft zu animieren.

### Sonnenaufgang

Hier animieren wir eine gelbe Sonne über einen hellblauen Himmel. Die Sonne erhebt sich
in die Mitte des Ansichtsfensters und fällt dann außer Sicht.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden; /* verbirgt jeden Teil der Sonne unterhalb des Horizonts */
  background-color: lightblue;
  display: flex;
  justify-content: center; /* zentriert die Sonne im Hintergrund */
}

.sun {
  background-color: yellow;
  border-radius: 50%; /* erzeugt einen kreisförmigen Hintergrund */
  height: 100vh; /* macht die Sonne so groß wie das Ansichtsfenster */
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate sun-rise;
}

@keyframes sun-rise {
  from {
    /* schiebt die Sonne unter das Ansichtsfenster */
    transform: translateY(110vh);
  }
  to {
    /* bringt die Sonne zurück zu ihrer Standardposition */
    transform: translateY(0);
  }
}
```

{{EmbedLiveSample('Sun_Rise')}}

### Mehrere Eigenschaften animieren

Zur Erweiterung der Sonnenanimation im vorherigen Beispiel fügen wir eine zweite Animation hinzu, die die Farbe der Sonne ändert, während sie auf- und untergeht. Die Sonne beginnt dunkelrot, wenn sie unter dem Horizont ist, und wird leuchtend orange, wenn sie den höchsten Punkt erreicht.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate animating-multiple-properties;
}

/* es ist möglich, mehrere Eigenschaften in einer einzigen Animation zu animieren */
@keyframes animating-multiple-properties {
  from {
    transform: translateY(110vh);
    background-color: red;
    filter: brightness(75%);
  }
  to {
    transform: translateY(0);
    background-color: orange;
    /* nicht gesetzte Eigenschaften, wie z.B. 'filter', kehren zu ihren Standardwerten zurück */
  }
}
```

{{EmbedLiveSample('Animating Multiple Properties')}}

### Mehrere Animationen anwenden

Hier ist eine Sonne, die auf einem hellblauen Hintergrund auf- und untergeht. Die Sonne
dreht sich allmählich durch alle Regenbogenfarben. Die Zeiten für Position und Farbe der Sonne sind unabhängig.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /* mehrere Animationen werden durch Kommata getrennt, die Parameter jeder Animation werden unabhängig festgelegt */
  animation:
    4s linear 0s infinite alternate rise,
    24s linear 0s infinite psychedelic;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

{{EmbedLiveSample('Applying Multiple Animations')}}

### Kaskadierende Mehrfachanimationen

Hier ist eine gelbe Sonne auf einem hellblauen Hintergrund. Die Sonne springt zwischen der
linken und rechten Seite des Ansichtsfensters hin und her. Die Sonne bleibt im Ansichtsfenster, obwohl eine Aufwärtsanimation definiert ist. Die Transform-Eigenschaft der Aufwärtsanimation wird durch die Bounce-Animation "überschrieben".

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /*
    Animationen, die später in der Kaskade deklariert werden, überschreiben die
    Eigenschaften zuvor deklarierter Animationen
  */
  /* Bounce 'überschreibt' das von Rise gesetzte Transform, daher bewegt sich die Sonne nur horizontal */
  animation:
    4s linear 0s infinite alternate rise,
    4s linear 0s infinite alternate bounce;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

{{EmbedLiveSample('Cascading Multiple Animations')}}

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#examples) für zusätzliche Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
