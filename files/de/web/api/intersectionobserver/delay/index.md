---
title: "IntersectionObserver: delay-Eigenschaft"
short-title: delay
slug: Web/API/IntersectionObserver/delay
l10n:
  sourceCommit: 809a1f18b067a6f768ccde5b9672733014179ede
---

{{APIRef("Intersection Observer API")}}

Die **`delay`** schreibgeschützte Eigenschaft der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle gibt die minimale Verzögerung zwischen Benachrichtigungen von diesem Observer an.

Die Verzögerung wird verwendet, um die Häufigkeit der Benachrichtigungen zu begrenzen, wenn [Sichtbarkeit verfolgt wird](/de/docs/Web/API/IntersectionObserver/trackVisibility), da dies ein rechenintensiver Vorgang ist.
Die Empfehlung beim Verfolgen der Sichtbarkeit ist, die Verzögerung auf den größtmöglichen tolerierbaren Wert einzustellen.

## Wert

Eine positive Zahl in Millisekunden.

Der Wert wird mit dem [`option.delay`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#delay)-Argument im `IntersectionObserver()`-Konstruktor festgelegt.
Der Wert wird auf 100 oder mehr begrenzt, wenn [`trackVisibility`](/de/docs/Web/API/IntersectionObserver/trackVisibility) `true` ist, aber ansonsten standardmäßig auf 0 gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
