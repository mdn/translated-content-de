---
title: "Element: beforexrselect Event"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`beforexrselect`**-Ereignis wird ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) gesendet werden. Es kann verwendet werden, um XR-Welteingabeereignisse zu unterdrücken, während der Benutzer mit einer DOM-Overlay-Benutzeroberfläche interagiert.

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling), ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforexrselect", (event) => { })

onbeforexrselect = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Ereignisverfügbarkeit

Das **`beforexrselect`**-Ereignis ist ein globales Ereignis und für die folgenden Schnittstellen verfügbar:

- [`Window`](/de/docs/Web/API/Window)
- [`Document`](/de/docs/Web/API/Document)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`MathMLElement`](/de/docs/Web/API/MathMLElement)

## Beispiele

Um WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) zu unterdrücken, kann eine Anwendung das `beforexrselect`-Ereignis abhören. Das Ereignis bubbelt, daher verhindert ein Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem DOM-Overlay-Element alle WebXR-Auswahlereignisse innerhalb dieses Containers, sodass eine Interaktion mit dem DOM-Element möglich ist und doppelte Ereigniseingaben in die XR-Welt vermieden werden.

```js
document
  .getElementById("xr-overlay")
  .addEventListener("beforexrselect", (ev) => ev.preventDefault());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`select`](/de/docs/Web/API/XRSession/select_event)-Ereignis
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event)-Ereignis
- {{cssxref(":xr-overlay")}} Pseudoklasse
