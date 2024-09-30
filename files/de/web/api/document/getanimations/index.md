---
title: "Document: getAnimations()-Methode"
short-title: getAnimations()
slug: Web/API/Document/getAnimations
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die `getAnimations()`-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt ein Array aller aktuell wirksamen [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, deren Ziel-Elemente Nachkommen des Dokuments sind. Dieses Array schließt [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API) ein.

## Syntax

```js-nolint
getAnimations()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation)-Objekten, die jeweils eine Animation darstellen, die aktuell mit Elementen verknüpft ist, welche Nachkommen des [`Document`](/de/docs/Web/API/Document) sind, auf dem es aufgerufen wird.

## Beispiele

Das folgende Code-Snippet verlangsamt alle Animationen auf einer Seite, indem es ihre [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) halbiert.

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) - Nur die Animationen auf einem einzigen [`Element`](/de/docs/Web/API/Element) und dessen Nachkommen abrufen.
- [`Animation`](/de/docs/Web/API/Animation)
