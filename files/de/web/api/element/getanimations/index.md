---
title: "Element: getAnimations() Methode"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Die `getAnimations()` Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
(festgelegt im `Animatable` Mixin) gibt ein Array aller
[`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die dieses Element betreffen oder in Zukunft betreffen sollen. Sie kann optional auch [`Animation`](/de/docs/Web/API/Animation)-Objekte für nachfolgende
Elemente zurückgeben.

> [!NOTE]
> Dieses Array umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das folgende Eigenschaft enthält:
    - `subtree`
      - : Ein boolescher Wert, der, wenn `true`, bewirkt, dass auch Animationen zurückgegeben werden, die auf Nachkommen von _Element_ abzielen. Dies schließt Animationen ein, die auf CSS-[Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) abzielen, die an _Element_ oder einen seiner Nachkommen angehängt sind. Standardmäßig `false`.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation)-Objekten, von denen jedes eine
Animation darstellt, die derzeit auf das [`Element`](/de/docs/Web/API/Element) abzielt, auf dem diese Methode aufgerufen wird, oder auf eines seiner Nachkommelemente, falls `{ subtree: true }` angegeben ist.

## Beispiele

Der folgende Codeausschnitt wartet auf alle Animationen auf `elem` und seinen
Nachkommen, bevor das Element aus dem Dokument entfernt wird.

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
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions)
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) - Abruf aller Animationen im Dokument
- [`Animation`](/de/docs/Web/API/Animation)
