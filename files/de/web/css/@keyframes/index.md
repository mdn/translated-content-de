---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@keyframes`** CSS-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Schlüsselbilder (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Übergänge](/de/docs/Web/CSS/CSS_transitions).

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
  - : Ein Startversatz von `0%`.
- `to`
  - : Ein Endversatz von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit innerhalb der Animationssequenz, bei dem das angegebene Schlüsselbild auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit innerhalb des angegebenen {{cssxref("animation-range")}}, bei dem das angegebene Schlüsselbild auftreten soll. Weitere Informationen zu den Arten von Animationen, die benannte Zeitachsenbereiche verwenden, finden Sie unter [CSS Scroll-Driven Animations](/de/docs/Web/CSS/CSS_scroll-driven_animations).

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Schlüsselbilddeklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Stilleiste von Schlüsselbildselektoren, die Prozentsätze entlang der Animation spezifizieren, wann das Schlüsselbild auftritt, sowie einen Block, der die Stile für dieses Schlüsselbild enthält.

Sie können die Prozentsätze der Schlüsselbilder in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-At-Regel mit dem CSS-Objektmodell-Interface [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Schlüsselbildlisten

Wenn eine Schlüsselbildregel nicht die Anfangs- oder Endzustände der Animation spezifiziert (d.h. `0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stile des Elements für die Anfangs-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Ausgangszustand aus zu animieren und zurück.

Eigenschaften, die in Schlüsselbildregeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden dennoch animiert.

### Auflösen von Duplikaten

Wenn mehrere Schlüsselbildsätze für einen gegebenen Namen existieren, wird der letzte vom Parser erkannte verwendet. `@keyframes`-Regeln kaskadieren nicht, sodass Animationen niemals Schlüsselbilder aus mehr als einem Regelsatz ableiten.

Wenn ein gegebener Animationszeitversatz dupliziert ist, werden alle Schlüsselbilder in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Innerhalb einer `@keyframes`-Regel gibt es eine Kaskade, wenn mehrere Schlüsselbilder dieselben Prozentwerte angeben.

### Wenn Eigenschaften in einigen Schlüsselbildern ausgelassen werden

Eigenschaften, die nicht in jedem Schlüsselbild angegeben sind, werden interpoliert, wenn möglich — Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

Hier animiert die {{ cssxref("top") }}-Eigenschaft unter Verwendung der `0%`, `30%` und `100%` Schlüsselbilder, und {{ cssxref("left") }} animiert unter Verwendung der `0%`, `68%`, `72%` und `100%` Schlüsselbilder.

### Wenn ein Schlüsselbild mehrfach definiert ist

Wenn ein Schlüsselbild mehrfach definiert ist, aber nicht alle betroffenen Eigenschaften in jedem Schlüsselbild vorhanden sind, werden alle in diesen Schlüsselbildern angegebenen Werte berücksichtigt. Zum Beispiel:

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

In diesem Beispiel werden im `50%`-Schlüsselbild die Werte `top: 10px` und `left: 20px` verwendet.

Kaskadierende Schlüsselbilder werden ab Firefox 14 unterstützt.

### `!important` in einem Schlüsselbild

Deklarationen in einem Schlüsselbild, die mit `!important` qualifiziert sind, werden ignoriert.

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

### CSS-Animtionsbeispiele

Siehe [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) und [Elemente beim Scrollen mit Scroll-Driven Animations animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range")}}
- [CSS Scroll-Driven Animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)-Modul
- [Elemente beim Scrollen mit Scroll-Driven Animations animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
