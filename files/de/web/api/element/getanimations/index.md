---
title: "Element: getAnimations()-Methode"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Animations")}}

Die `getAnimations()`-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle (spezifiziert im `Animatable`-Mixin) gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die dieses Element beeinflussen oder in Zukunft beeinflussen sollen. Sie kann optional auch [`Animation`](/de/docs/Web/API/Animation)-Objekte für nachfolgende Elemente zurückgeben.

> [!NOTE]
> Dieses Array enthält [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das die folgende Eigenschaft enthält:

    - `subtree`
      - : Ein boolescher Wert, der, wenn `true`, bewirkt, dass auch Animationen zurückgegeben werden, die Nachfolger des _Element_ anvisieren. Dies schließt Animationen ein, die auf CSS-[Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) abzielen, die am _Element_ oder einem seiner Nachfolger angehängt sind. Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation)-Objekten, die jeweils eine Animation darstellen, die derzeit das [`Element`](/de/docs/Web/API/Element) anvisiert, auf dem diese Methode aufgerufen wird, oder eines seiner nachfolgenden Elemente, wenn `{ subtree: true }` angegeben ist.

## Beispiele

Das folgende Codebeispiel wartet darauf, dass alle Animationen auf `elem` und seinen Nachfolgern abgeschlossen sind, bevor das Element aus dem Dokument entfernt wird.

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
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) - Alle Animationen im Dokument abrufen
- [`Animation`](/de/docs/Web/API/Animation)
