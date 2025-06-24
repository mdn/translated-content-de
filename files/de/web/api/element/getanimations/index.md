---
title: "Element: getAnimations() Methode"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Animations")}}

Die `getAnimations()`-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle (spezifiziert im `Animatable`-Mixin) gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die dieses Element beeinflussen oder geplant sind, dies zukünftig zu tun. Optional können auch [`Animation`](/de/docs/Web/API/Animation)-Objekte für Nachkommen-Elemente zurückgegeben werden.

> [!NOTE]
> Dieses Array umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgende Eigenschaft enthält:
    - `subtree`
      - : Ein boolescher Wert, der, wenn `true`, verursacht, dass auch Animationen zurückgegeben werden, die Nachkommen des _Element_ anvisieren. Dies schließt Animationen ein, die auf CSS-[Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) abzielen, die an das _Element_ oder eines seiner Nachkommen angehängt sind. Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation)-Objekten, von denen jedes eine Animation repräsentiert, die aktuell auf das [`Element`](/de/docs/Web/API/Element), auf dem diese Methode aufgerufen wurde, abzielt, oder auf eines seiner Nachkommelemente, wenn `{ subtree: true }` spezifiziert ist.

## Beispiele

Der folgende Code-Schnipsel wartet darauf, dass alle Animationen auf `elem` und seinen Nachkommen beendet sind, bevor das Element aus dem Dokument entfernt wird.

```js
Promise.all(
  elem.getAnimations({ subtree: true }).map((animation) => animation.finished),
).then(() => elem.remove());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Animations-API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) - Holt alle Animationen im Dokument
- [`Animation`](/de/docs/Web/API/Animation)
