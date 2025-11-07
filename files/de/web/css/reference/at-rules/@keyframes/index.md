---
title: "@keyframes"
slug: Web/CSS/Reference/At-rules/@keyframes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@keyframes`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitions](/de/docs/Web/CSS/Guides/Transitions).

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
  - : Ein Name, der die Keyframe-Liste identifiziert. Dieser muss der Identifier-Produktion in der CSS-Syntax entsprechen.
- `from`
  - : Ein Start-Offset von `0%`.
- `to`
  - : Ein End-Offset von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentwert der Zeit innerhalb der Animationssequenz, bei dem das angegebene Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentwert der Zeit innerhalb des angegebenen {{cssxref("animation-range")}}, bei dem das angegebene Keyframe auftreten soll. Weitere Informationen zu den Arten von Animationen, die benannte Zeitachsenbereiche verwenden, finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations).

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann durch die {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Stil-Liste von Keyframe-Selektoren, die Prozentsätze entlang der Animation angeben, wenn das Keyframe auftritt, und einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes` at-rule mit dem CSS-Objektmodell-Interface [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel nicht die Start- oder Endzustände der Animation angibt (also `0%`/`from` und `100%`/`to`), verwenden Browser die bestehenden Stile des Elements für die Start-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand aus und zurück zu animieren.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden trotzdem animiert.

### Auflösen von Duplikaten

Wenn mehrere Keyframe-Sätze für einen gegebenen Namen existieren, wird der letzte, den der Parser erkannt hat, verwendet. `@keyframes`-Regeln kaskadieren nicht, sodass Animationen nie Keyframes aus mehr als einem Regelset ableiten.

Wenn ein gegebener Animationszeit-Offset dupliziert wird, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Es gibt eine Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes die gleichen Prozentsatzwerte angeben.

### Wenn Eigenschaften in einigen Keyframes weggelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden, wenn möglich, interpoliert — Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

Hier animiert die {{ cssxref("top") }}-Eigenschaft mit den `0%`, `30%` und `100%`-Keyframes, und {{ cssxref("left") }} animiert mit den `0%`, `68%`, `72%` und `100%`-Keyframes.

### Wenn ein Keyframe mehrfach definiert wird

Wenn ein Keyframe mehrfach definiert wird, jedoch nicht alle betroffenen Eigenschaften in jedem Keyframe enthalten sind, werden alle in diesen Keyframes angegebenen Werte berücksichtigt. Zum Beispiel:

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

In diesem Beispiel werden im `50%`-Keyframe die Werte `top: 10px` und `left: 20px` verwendet.

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

### CSS-Animationsbeispiele

Für Beispiele siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) und [Elemente beim Scrollen mit Scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations)
- [Elemente beim Scrollen mit Scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
