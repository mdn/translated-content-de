---
title: "Dokument: getAnimations()-Methode"
short-title: getAnimations()
slug: Web/API/Document/getAnimations
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die `getAnimations()`-Methode der {{domxref("Document")}}-Schnittstelle
gibt ein Array aller derzeit wirksamen {{domxref("Animation")}}-Objekte zurück, deren
Zielelemente Nachkommen des Dokuments sind. Dieses Array umfasst [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("Animation")}}-Objekten, die jeweils eine
Animation darstellen, die derzeit mit Elementen verknüpft ist, die Nachkommen des
{{domxref("Document")}} sind, auf dem sie aufgerufen wird.

## Beispiele

Der folgende Codeausschnitt verlangsamt alle Animationen auf einer Seite, indem er ihre
{{domxref("Animation.playbackRate")}} halbiert.

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
- {{domxref("Element.getAnimations()")}} - Nur die Animationen eines einzelnen
  {{domxref("Element")}} und seiner Nachkommen abrufen.
- {{domxref("Animation")}}
