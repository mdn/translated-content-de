---
title: "@keyframes"
slug: Web/CSS/Reference/At-rules/@keyframes
l10n:
  sourceCommit: 4779d7c77859441641c1e061b21f2c74024fe796
---

Die **`@keyframes`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies bietet mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Übergänge](/de/docs/Web/CSS/Guides/Transitions).

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
  - : Ein Anfangsversatz von `0%`.
- `to`
  - : Ein Endversatz von `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch die Animationssequenz, zu dem das angegebene Keyframe auftreten soll.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Zeit durch den angegebenen {{cssxref("animation-range")}}, zu dem das angegebene Keyframe auftreten soll. Weitere Informationen zu den Arten von Animationen, die benannte Zeitstrahlbereiche verwenden, finden Sie in [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations).

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Stil-Liste von Keyframe-Selektoren, die Prozentsätze entlang der Animation angeben, wann das Keyframe auftritt, und einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge verarbeitet, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes` at-rule mit dem CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel die Anfangs- oder Endzustände der Animation (also `0%`/`from` und `100%`/`to`) nicht angibt, verwenden Browser die bestehenden Stile des Elements für die Anfangs-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand aus und zurück zu animieren.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden dennoch animiert.

### Auflösen von Duplikaten

Wenn mehrere Keyframe-Sätze für einen gegebenen Namen existieren, wird der letzte, der vom Parser gefunden wird, verwendet. `@keyframes`-Regeln kaskadieren nicht, sodass Animationen niemals Keyframes von mehr als einem Regelsatz ableiten.

Wenn ein gegebener Animationszeit-Versatz dupliziert wird, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Es gibt eine Kaskadierung innerhalb einer `@keyframes`-Regel, wenn mehrere Keyframes dieselben Prozentsatzwerte angeben.

### Wenn Eigenschaften in einigen Keyframes ausgelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden, wenn möglich, interpoliert — Eigenschaften, die nicht interpoliert werden können, werden von der Animation ausgeschlossen. Zum Beispiel:

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

Hier animiert die {{ cssxref("top") }}-Eigenschaft mit den Keyframes `0%`, `30%` und `100%`, und {{ cssxref("left") }} animiert mit den Keyframes `0%`, `68%`, `72%` und `100%`.

### Wenn ein Keyframe mehrfach definiert ist

Wenn ein Keyframe mehrfach definiert ist, aber nicht alle betroffenen Eigenschaften in jedem Keyframe vorhanden sind, werden alle in diesen Keyframes angegebenen Werte berücksichtigt. Zum Beispiel:

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

In diesem Beispiel sind bei dem `50%`-Keyframe die verwendeten Werte `top: 10px` und `left: 20px`.

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

Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) und [scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-name")}}
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS-Scroll-gesteuerte Animation-Zeitstrahlen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Elemente bei Bildlauf mit Scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
