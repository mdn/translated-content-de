---
title: "Element: getAnimations() Methode"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{APIRef("Web Animations")}}

Die `getAnimations()`-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces
(spezifiziert im `Animatable`-Mixin) gibt ein Array von allen
[`Animation`](/de/docs/Web/API/Animation)-Objekten zurück, die dieses Element beeinflussen oder in Zukunft beeinflussen werden. Sie kann optional auch [`Animation`](/de/docs/Web/API/Animation)-Objekte für Nachfahren-Elemente zurückgeben.

> [!NOTE]
> Dieses Array umfasst [CSS Animationen](/de/docs/Web/CSS/CSS_animations), [CSS Transitionen](/de/docs/Web/CSS/CSS_transitions) und [Web Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgende Eigenschaft enthält:
    - `subtree`
      - : Ein boolescher Wert, der, wenn `true`, bewirkt, dass auch Animationen, die auf Nachfahren von _Element_ abzielen, zurückgegeben werden. Dies schließt Animationen ein, die auf irgendwelche CSS [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) abzielen, die an _Element_ oder einen seiner Nachfahren angehängt sind. Standardmäßig `false`.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation)-Objekten, von denen jedes eine Animation darstellt, die derzeit auf das [`Element`](/de/docs/Web/API/Element) abzielt, auf dem diese Methode aufgerufen wird, oder auf einen seiner Nachfahren-Elemente, falls `{ subtree: true }` angegeben ist.

## Beispiele

Der folgende Codeausschnitt wird warten, bis alle Animationen auf `elem` und seinen Nachfahren beendet sind, bevor das Element aus dem Dokument entfernt wird.

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

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS Transitionen](/de/docs/Web/CSS/CSS_transitions)
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) - Alle Animationen im Dokument abrufen
- [`Animation`](/de/docs/Web/API/Animation)
