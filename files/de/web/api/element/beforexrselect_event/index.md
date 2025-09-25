---
title: "Element: beforexrselect Event"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`beforexrselect`**-Ereignis wird ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) versandt werden. Es kann verwendet werden, um XR-Welteingabeereignisse zu unterdrücken, während der Benutzer mit einer DOM-Overlay-UI interagiert.

Dieses Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling), ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforexrselect", (event) => { })

onbeforexrselect = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Ereignisverfügbarkeit

Das **`beforexrselect`**-Ereignis ist ein globales Ereignis und steht den folgenden Schnittstellen zur Verfügung:

- [`Window`](/de/docs/Web/API/Window)
- [`Document`](/de/docs/Web/API/Document)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`MathMLElement`](/de/docs/Web/API/MathMLElement)

## Beispiele

Um WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) zu unterdrücken, kann eine Anwendung auf das `beforexrselect`-Ereignis hören. Das Ereignis bubbelt, sodass ein Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem DOM-Overlay-Element alle WebXR-Auswahlereignisse innerhalb dieses Containers verhindert, die Interaktion mit dem DOM-Element ermöglicht und doppelte Ereigniseingaben in die XR-Welt vermeidet.

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

- [`select`](/de/docs/Web/API/XRSession/select_event) Ereignis
- [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event) Ereignis
- [`selectend`](/de/docs/Web/API/XRSession/selectend_event) Ereignis
