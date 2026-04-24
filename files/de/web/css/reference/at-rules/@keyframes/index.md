---
title: "`@keyframes` CSS at-rule"
short-title: "@keyframes"
slug: Web/CSS/Reference/At-rules/@keyframes
l10n:
  sourceCommit: f2a9542e6c266ac7028eae954b5c7913e499d1f1
---

Die **`@keyframes`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) steuert die Zwischenschritte in einer CSS-Animationssequenz, indem sie Stile für Keyframes (oder Wegpunkte) entlang der Animationssequenz definiert. Dies gibt mehr Kontrolle über die Zwischenschritte der Animationssequenz als [Übergänge](/de/docs/Web/CSS/Guides/Transitions).

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

- `<keyframes-name>`
  - : Ein Groß- und Kleinschreibung beachtender {{cssxref("custom-ident")}} oder String, der die Keyframe-Liste benennt.
- `from`
  - : Entspricht dem Wert `0%`.
- `to`
  - : Entspricht dem Wert `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz der Animationssequenz, bei dem das spezifizierte Keyframe auftreten soll.
- {{cssxref("timeline-range-name")}} {{cssxref("&lt;percentage&gt;")}}
  - : Ein Prozentsatz des spezifizierten {{cssxref("animation-range")}}, bei dem das spezifizierte Keyframe auftreten soll.

## Beschreibung

Um Keyframes zu verwenden, erstellen Sie eine `@keyframes`-Regel mit einem Namen, der dann von der {{ cssxref("animation-name") }}-Eigenschaft verwendet wird, um eine Animation mit ihrer Keyframe-Deklaration abzugleichen. Jede `@keyframes`-Regel enthält eine Liste von [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors), die Prozentsätze entlang der Animation festlegen, an denen das Keyframe auftritt, und einen Block, der die Stile für dieses Keyframe enthält.

Sie können die Keyframe-Prozentsätze in beliebiger Reihenfolge auflisten; sie werden in der Reihenfolge behandelt, in der sie auftreten sollen.

JavaScript kann auf die `@keyframes`-At-Regel mit der CSS-Objektmodell-Schnittstelle [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) zugreifen.

### Gültige Keyframe-Listen

Wenn eine Keyframe-Regel nicht die Start- oder Endzustände der Animation angibt (das heißt `0%`/`from` und `100%`/`to`), verwenden Browser die vorhandenen Stile des Elements für die Start-/Endzustände. Dies kann verwendet werden, um ein Element von seinem Anfangszustand zurück zu animieren.

Eigenschaften, die in Keyframe-Regeln nicht animiert werden können, werden ignoriert, aber unterstützte Eigenschaften werden weiterhin animiert.

### Auflösen von Duplikaten

Wenn mehrere Keyframe-Sets für einen bestimmten Namen existieren, wird das letzte vom Parser erkannte verwendet. `@keyframes`-Regeln kaskadieren nicht, daher leiten Animationen niemals Keyframes aus mehr als einem Regel-Set ab.

Wenn ein gegebenes Animationszeit-Offset dupliziert wird, werden alle Keyframes in der `@keyframes`-Regel für diesen Prozentsatz für diesen Frame verwendet. Es gibt innerhalb einer `@keyframes`-Regel eine Kaskadierung, wenn mehrere Keyframes die gleichen Prozentwerte angeben.

### Wenn Eigenschaften in einigen Keyframes weggelassen werden

Eigenschaften, die nicht in jedem Keyframe angegeben sind, werden interpoliert, wenn möglich — Eigenschaften, die nicht interpoliert werden können, werden aus der Animation entfernt. Zum Beispiel:

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

Hierbei animiert die {{ cssxref("top") }}-Eigenschaft unter Verwendung der `0%`, `30%` und `100%` Keyframes, und {{ cssxref("left") }} animiert unter Verwendung der `0%`, `68%`, `72%` und `100%` Keyframes.

### Wenn ein Keyframe mehrfach definiert ist

Wenn ein Keyframe mehrfach definiert, aber nicht alle betroffenen Eigenschaften in jedem Keyframe vorhanden sind, werden alle in diesen Keyframes angegebenen Werte berücksichtigt. Zum Beispiel:

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

In diesem Beispiel sind beim `50%`-Keyframe die verwendeten Werte `top: 10px` und `left: 20px`.

### `!important` in einem Keyframe

Deklarationen in einem Keyframe, die mit dem {{cssxref("important")}}-Flag versehen sind, werden ignoriert.

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
- [Zeitpläne scroll-gesteuerter CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verstehen von Zeitbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [Elemente bei Scrollen mit scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
