---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Die **`@keyframes`** CSS [Regel](/de/docs/Web/CSS/At-rule) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Transitionen](/de/docs/Web/CSS/CSS_transitions).

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
  - : Ein Name, der die Keyframeliste identifiziert. Dieser muss der Identifikator-Regel in der CSS-Syntax entsprechen.
- `from`
  - : Ein Startversatz von `0%`.
- `to`
  - : Ein Endversatz von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch die Animationssequenz, zu dem das angegebene Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch den angegebenen {{cssxref("animation-range")}}, zu dem das angegebene Keyframe auftreten soll. Siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Informationen zu den Arten von Animationen, die benannte Zeitlinienbereiche verwenden.

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Stil-Liste von Keyframe-Selektoren, die Prozentsätze entlang der Animation angeben, wann das Keyframe auftritt, und einen Block mit den Stilen für dieses Keyframe.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-Regel mit der CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel nicht die Start- oder Endzustände der Animation angibt (also `0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stilelemente für die Start-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand zu animieren und zurück.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden trotzdem animiert.

### Auflösen von Duplikaten

Wenn mehrere Keyframe-Sätze für einen bestimmten Namen existieren, wird der letzte, der vom Parser gefunden wird, verwendet. `@keyframes`-Regeln haben keine Kaskadierung, daher leiten Animationen niemals Keyframes aus mehr als einem Regelset ab.

Wenn ein bestimmter Animationszeitversatz dupliziert ist, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Es gibt eine Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes die gleichen Prozentwerte angeben.

### Wenn Eigenschaften in einigen Keyframes ausgelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden interpoliert, wenn möglich – Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

Hier wird die {{ cssxref("top") }}-Eigenschaft unter Verwendung der `0%`, `30%` und `100%`-Keyframes animiert, und {{ cssxref("left") }} wird mit den `0%`, `68%`, `72%` und `100%`-Keyframes animiert.

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

In diesem Beispiel werden im `50%`-Keyframe die Werte `top: 10px` und `left: 20px` verwendet.

Die Kaskadierung von Keyframes wird ab Firefox 14 unterstützt.

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

Siehe [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) und [Elemente beim Scrollen mit scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [Elemente beim Scrollen mit scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
