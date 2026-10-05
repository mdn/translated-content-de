---
title: CSS-Animationstrigger
short-title: Animation triggers
slug: Web/CSS/Guides/Animation_triggers
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

Das Modul **CSS-Animationstrigger** bietet Funktionen, mit denen sich reguläre zeitbasierte [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) auslösen lassen, wenn ein bestimmter Timeline-Trigger eintritt.

**Scroll-ausgelöste Animationen** ermöglichen es Ihnen, ohne JavaScript zu steuern, wann eine reguläre zeitbasierte Animation beginnt, pausiert oder stoppt. Ausschlaggebend ist dabei, wann ein Trigger aktiviert oder deaktiviert wird – beispielsweise, wenn ein Element beim Scrollen einen [Timeline-Bereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) betritt oder verlässt.

Diese Bereiche stammen normalerweise aus [View-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines). So kann eine Animation beispielsweise beginnen, wenn ein Element einen Scrollport betritt, und pausieren, wenn es ihn verlässt. Mit Eigenschaften können Sie den Timeline-Bereich ändern sowie die aktiven Bereiche und Aktivierungsbereiche steuern. Trigger können beim Betreten und Verlassen des Timeline-Bereichs unterschiedliche Aktionen festlegen und so die Wiedergabe der Animation steuern.

Das Modul für Animationstrigger definiert außerdem **Event-Trigger**. Sobald diese unterstützt werden, können sie Timeline-basierte Animationen aktivieren, wenn bestimmte DOM-Ereignisse auftreten.

## Animationstrigger in Aktion

Dieses Beispiel zeigt [Scroll-ausgelöste Animationen](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations). Scrollen Sie im Kasten nach oben und unten: Wenn der Text „bouncer“ erscheint, wird die Animation des Balls ausgelöst. Verschwindet er, wird dieselbe Animation rückwärts ausgelöst. Scrollen Sie weiter: Derselbe Ablauf wiederholt sich, wenn der Text „another bouncer“ im Scrollport erscheint und anschließend wieder verschwindet.

```html hidden live-sample___in-action
<section>
  <div>
    <p>scroll down</p>
    <p id="trigger">bouncer</p>
    <p>keep scrolling</p>
    <p>keep scrolling</p>
    <p>keep scrolling</p>
    <p id="trigger2">another bouncer</p>
    <p>scroll up</p>
  </div>
</section>

<span id="ball"><span></span></span>
```

```css hidden live-sample___in-action
#ball,
#ball span {
  animation:
    moveright 2s 1 ease-out both,
    moveright 2s 1 ease-out forwards;
  animation-trigger:
    --t play-forwards play-backwards,
    --t2 play-forwards play-backwards;
}
#ball span {
  animation-name: bounce, bounce;
}

#trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
#trigger2 {
  timeline-trigger-name: --t2;
  timeline-trigger-source: view();
}

html {
  font-family: sans-serif;
  font-size: 1.3rem;
}

* {
  box-sizing: border-box;
}

@layer scroller {
  section {
    border: solid;
    width: 200px;
    height: 250px;
    margin-top: 50px;
    overflow: scroll;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    margin: 100% 0;
  }
  #trigger,
  #trigger2 {
    padding: 0;
    color: red;
  }
}

@layer animation-setup {
  #ball {
    position: fixed;
    top: 96vh;
  }
  #ball span {
    background: red;
    border-radius: 50%;
    height: 5vw;
    display: block;
    aspect-ratio: 1/1;
  }

  @keyframes moveright {
    from {
      transform: translatex(0);
    }
    to {
      transform: translatex(90vw);
    }
  }

  @keyframes bounce {
    9%,
    24%,
    35%,
    44%,
    51%,
    58%,
    63%,
    68%,
    72%,
    76%,
    to {
      transform: translatey(0);
      animation-timing-function: ease-out;
    }
    from,
    17%,
    30%,
    40%,
    48%,
    55%,
    61%,
    66%,
    70%,
    74% {
      animation-timing-function: ease-in;
    }
    0% {
      transform: translatey(-96vh);
    }
    17% {
      transform: translatey(-57.6vh);
    }
    30% {
      transform: translatey(-34.56vh);
    }
    40% {
      transform: translatey(-20.74vh);
    }
    48% {
      transform: translatey(-12.44vh);
    }
    55% {
      transform: translatey(-7.46vh);
    }
    61% {
      transform: translatey(-4.48vh);
    }
    66% {
      transform: translatey(-2.69vh);
    }
    70% {
      transform: translatey(-1.61vh);
    }
    74% {
      transform: translatey(-0.97vh);
    }
  }
}
```

```css hidden live-sample___in-action
@supports not (timeline-trigger-source: view()) {
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

{{embedlivesample("in-action", "100%", 400)}}

Wir haben die Animationstrigger definiert, indem wir für die „bouncer“-Elemente {{cssxref("timeline-trigger-name")}} und {{cssxref("timeline-trigger-source")}} angegeben haben. Für den Ball ist eine hüpfende {{cssxref("animation")}} zweimal festgelegt. Außerdem besitzt er die Eigenschaft {{cssxref("animation-trigger")}}. Diese verweist auf die Namen beider Trigger und legt fest, welche Aktionen bei der Aktivierung und Deaktivierung der Animationen ausgeführt werden. Die Aktivierung und Deaktivierung erfolgt, wenn die „bouncer“-Elemente in den sichtbaren Bereich gelangen beziehungsweise ihn verlassen.

## Referenz

### Eigenschaften

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}}-Kurzschreibweise
- {{cssxref("timeline-trigger-activation-range")}}-Kurzschreibweise
  - {{cssxref("timeline-trigger-activation-range-end")}}
  - {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-active-range")}}-Kurzschreibweise
  - {{cssxref("timeline-trigger-active-range-end")}}
  - {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- {{cssxref("trigger-scope")}}

Das Modul für CSS-Animationstrigger führt außerdem die Eigenschaften `event-trigger`, `event-trigger-name` und `event-trigger-source` ein. Derzeit unterstützt kein Browser diese Funktionen.

### Datentypen und Werte

- {{cssxref("&lt;animation-action>")}}

## Leitfäden

- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
  - : Eine Einführung in die Implementierung von CSS-Animationen, die durch Scrollen ausgelöst werden.
- [Namen von Timeline-Bereichen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
  - : Der Datentyp {{cssxref("timeline-range-name")}}: die verschiedenen Namen von Timeline-Bereichen verstehen.
- [Timeline-Einrückungen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)
  - : Die Syntax für den Anbindungsbereich von Animationen verstehen, mit der sich durch Scrollen gesteuerte und ausgelöste Animationen einrücken lassen.

## Verwandte Konzepte

- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}}-At-Regel
  - [`<keyframe-selector>`](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- Modul [Durch Scrollen gesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
  - {{cssxref("animation-range")}}-Kurzschreibweise
    - {{cssxref("animation-range-end")}}
    - {{cssxref("animation-range-start")}}
  - {{cssxref("scroll-timeline")}}-Kurzschreibweise
    - {{cssxref("scroll-timeline-axis")}}
    - {{cssxref("scroll-timeline-name")}}
  - {{cssxref("timeline-scope")}}
  - {{cssxref("view-timeline")}}-Kurzschreibweise
    - {{cssxref("view-timeline-axis")}}
    - {{cssxref("view-timeline-inset")}}
    - {{cssxref("view-timeline-name")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- [Durch Scrollen gesteuerte Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [Timelines für durch Scrollen gesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Durch Scrollen ausgelöste CSS-Animationen kommen!](https://developer.chrome.com/blog/scroll-triggered-animations) auf developer.chrome.com (2025)
