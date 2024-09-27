---
title: "Element: getAnimations() Methode"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Animations")}}

Die `getAnimations()` Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
(spezifiziert im `Animatable`-Mixin) gibt ein Array aller
[`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die dieses Element beeinflussen oder dies in Zukunft tun sollen.
Optional kann sie auch [`Animation`](/de/docs/Web/API/Animation)-Objekte für Nachfahr-Elemente zurückgeben.

> [!NOTE]
> Dieses Array enthält [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit der folgenden Eigenschaft:

    - `subtree`
      - : Ein boolescher Wert, der, wenn `true`, dazu führt, dass auch Animationen zurückgegeben werden,
        die auf Nachfahren von _Element_ abzielen. Dies schließt Animationen ein,
        die auf jegliche an _Element_ oder einen seiner Nachfahren angehängte CSS-[Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) abzielen. Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation)-Objekten, wobei jedes eine
Animation darstellt, die derzeit auf das [`Element`](/de/docs/Web/API/Element) abzielt, auf dem diese Methode aufgerufen wird,
oder auf eines seiner Nachfahr-Elemente, wenn `{ subtree: true }` angegeben ist.

## Beispiele

Das folgende Code-Snippet wartet auf das Ende aller Animationen auf `elem` und seinen
Nachfahren, bevor das Element aus dem Dokument entfernt wird.

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
