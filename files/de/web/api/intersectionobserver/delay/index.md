---
title: "IntersectionObserver: delay-Eigenschaft"
short-title: delay
slug: Web/API/IntersectionObserver/delay
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

Die **`delay`** schreibgeschützte Eigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces gibt die minimale Verzögerung zwischen Benachrichtigungen von diesem Observer an.

Die Verzögerung wird verwendet, um die Häufigkeit der Benachrichtigungen zu begrenzen, wenn die [Sichtbarkeit verfolgt wird](/de/docs/Web/API/IntersectionObserver/trackVisibility), da dies eine rechnerisch aufwendige Operation ist. Die Empfehlung beim Verfolgen der Sichtbarkeit ist, die Verzögerung auf den größtmöglichen tolerierbaren Wert zu setzen.

## Wert

Eine positive Zahl in Millisekunden.

Der Wert wird mit dem [`option.delay`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#delay)-Argument an den `IntersectionObserver()`-Konstruktor übergeben.
Der Wert wird auf 100 oder mehr begrenzt, wenn [`trackVisibility`](/de/docs/Web/API/IntersectionObserver/trackVisibility) `true` ist, andernfalls ist der Standardwert 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
