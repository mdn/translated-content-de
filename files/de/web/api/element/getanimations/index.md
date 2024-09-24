---
title: "Element: getAnimations()-Methode"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Animations")}}

Die `getAnimations()` Methode der {{domxref("Element")}} Schnittstelle
(spezifiziert im `Animatable` Mixin) gibt ein Array von allen
{{domxref("Animation")}} Objekten zurück, die dieses Element beeinflussen oder die geplant sind, es in Zukunft zu tun. Optional können auch {{domxref("Animation")}} Objekte für untergeordnete Elemente zurückgegeben werden.

> [!NOTE]
> Dieses Array umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionen-Objekt, das folgende Eigenschaft enthält:

    - `subtree`
      - : Ein Boolescher Wert, der, wenn `true`, bewirkt, dass auch Animationen zurückgegeben werden, die auf Nachkommen von _Element_ abzielen. Dies schließt Animationen ein, die auf beliebige CSS-[Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) abzielen, die an _Element_ oder einen seiner Nachkommen angehängt sind. Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("Animation")}} Objekten, die jeweils eine Animation darstellen, die derzeit auf das {{domxref("Element")}} abzielt, auf dem diese Methode aufgerufen wird, oder auf eines seiner nachgeordneten Elemente, wenn `{ subtree: true }` angegeben ist.

## Beispiele

Der folgende Codeausschnitt wird darauf warten, dass alle Animationen auf `elem` und seinen Nachkommen abgeschlossen sind, bevor das Element aus dem Dokument entfernt wird.

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
- {{domxref("Document.getAnimations()")}} - Alle Animationen im Dokument abrufen
- {{domxref("Animation")}}
