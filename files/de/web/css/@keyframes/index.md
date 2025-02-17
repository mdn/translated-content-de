---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@keyframes`** CSS-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animation als [Transitionen](/de/docs/Web/CSS/CSS_transitions).

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
  - : Ein Name, der die Liste der Keyframes identifiziert. Dieser muss der Identifikatorproduktion in der CSS-Syntax entsprechen.
- `from`
  - : Ein Startversatz von `0%`.
- `to`
  - : Ein Endversatz von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der animierten Zeit, bei dem das angegebene Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit des angegebenen {{cssxref("animation-range")}}, bei dem das angegebene Keyframe auftreten soll. Weitere Informationen zu den Arten von Animationen, die benannte Zeitbereich verwenden, finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann durch die Eigenschaft {{ cssxref("animation-name") }} verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration zu verknüpfen. Jede `@keyframes`-Regel enthält eine Liste von Keyframe-Selektoren, die Prozentsätze für den Zeitpunkt der Keyframes angeben, sowie einen Block mit den Stilen für dieses Keyframe.

Die Reihenfolge der Keyframe-Prozentangaben kann beliebig sein; sie wird in der Reihenfolge verarbeitet, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-At-Regel mit der CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel keinen Anfangs- oder Endzustand der Animation spezifiziert (`0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stile des Elements für die Anfangs- und Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand zu animieren und zurück.

Eigenschaften, die in den Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden dennoch animiert.

### Auflösung von Duplikaten

Falls mehrere Keyframe-Sets für einen bestimmten Namen existieren, wird das letzte, das vom Parser gefunden wird, verwendet. `@keyframes`-Regeln kaskadieren nicht, daher leiten Animationen niemals Keyframes von mehr als einem Regelsatz ab.

Wenn ein bestimmter Animationszeitpunkt dupliziert ist, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Innerhalb einer `@keyframes`-Regel gibt es eine Kaskadierung, wenn mehrere Keyframes dieselben Prozentwerte angeben.

### Wenn Eigenschaften in einigen Keyframes ausgelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden interpoliert, wenn es möglich ist — Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

In diesem Beispiel wird die Eigenschaft {{ cssxref("top") }} mithilfe der Keyframes `0%`, `30%` und `100%` animiert, und {{ cssxref("left") }} wird mithilfe der Keyframes `0%`, `68%`, `72%` und `100%` animiert.

### Wenn ein Keyframe mehrfach definiert ist

Wenn ein Keyframe mehrfach definiert ist, aber nicht alle betroffenen Eigenschaften in jedem Keyframe enthalten sind, werden alle in diesen Keyframes angegebenen Werte berücksichtigt. Zum Beispiel:

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

In diesem Beispiel werden beim Keyframe `50%` die Werte `top: 10px` und `left: 20px` verwendet.

Kaskadierende Keyframes werden ab Firefox 14 unterstützt.

### `!important` in einem Keyframe

Deklarationen in einem Keyframe, die mit `!important` qualifiziert sind, werden ignoriert.

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important; /* ignored */
  }
  to {
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

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) und [Elemente beim Scrollen mit Scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animationsmodul](/de/docs/Web/CSS/CSS_animations)
- [Elemente beim Scrollen mit Scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
