---
title: "@keyframes"
slug: Web/CSS/Reference/At-rules/@keyframes
l10n:
  sourceCommit: f94b7a0b06a0e32df81ec8197720d306fe50a4a0
---

Die **`@keyframes`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitions](/de/docs/Web/CSS/Guides/Transitions).

## Syntax

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

### Werte

- {{cssxref("custom-ident")}}
  - : Ein Name, der die Keyframe-Liste identifiziert. Dieser muss der Identifikatorproduktion in der CSS-Syntax entsprechen.
- `from`
  - : Ein Startoffset von `0%`.
- `to`
  - : Ein Endoffset von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch die Animationssequenz, bei dem das angegebene Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch den angegebenen {{cssxref("animation-range")}}, bei dem das angegebene Keyframe auftreten soll. Weitere Informationen zu den Arten von Animationen, die benannte Zeitachsenbereiche verwenden, finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations).

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Stil-Liste von [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors), die angeben, bei welchen Prozentsätzen der Animation das Keyframe auftritt, und einen Block mit den Stilen für dieses Keyframe.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes` At-Regel über die CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel den Start- oder Endzustand der Animation nicht angibt (d.h. `0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stile des Elements für die Start-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand an zu animieren und zurück.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden dennoch animiert.

### Auflösen von Duplikaten

Wenn mehrere Keyframe-Sets für einen bestimmten Namen existieren, wird das letzte vom Parser erkannte verwendet. `@keyframes`-Regeln werden nicht vererbt, sodass Animationen niemals Keyframes aus mehr als einem Regelsatz ableiten.

Wenn eine gegebene Animationszeitoffset dupliziert ist, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentwert für diesen Frame verwendet. Es gibt eine Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes die gleichen Prozentwerte angeben.

### Wenn Eigenschaften in einigen Keyframes weggelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden, wenn möglich, interpoliert – Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

Hier animiert die Eigenschaft {{ cssxref("top") }} unter Verwendung der `0%`, `30%` und `100%` Keyframes, und {{ cssxref("left") }} animiert unter Verwendung der `0%`, `68%`, `72%` und `100%` Keyframes.

### Wenn ein Keyframe mehrfach definiert ist

Wenn ein Keyframe mehrmals definiert wird, aber nicht alle betroffenen Eigenschaften in jedem Keyframe vorhanden sind, werden alle in diesen Keyframes angegebenen Werte in Betracht gezogen. Zum Beispiel:

```css
@keyframes identifier {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    left: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
```

In diesem Beispiel werden beim `50%` Keyframe die Werte `top: 10px` und `left: 20px` verwendet.

Kaskadierende Keyframes werden ab Firefox 14 unterstützt.

### `!important` in einem Keyframe

Deklarationen in einem Keyframe, die mit `!important` qualifiziert sind, werden ignoriert.

```css
@keyframes important1 {
  0% {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important; /* ignored */
  }
  100% {
    margin-top: 100px;
  }
}

@keyframes important2 {
  from {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  to {
    margin-top: 150px !important; /* ignored */
    margin-bottom: 50px;
  }
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

### CSS-Animations-Beispiele

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) und [scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-name")}}
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS scroll-gesteuerte Animation Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verständnis von Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Elemente bei Scrollen mit scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
