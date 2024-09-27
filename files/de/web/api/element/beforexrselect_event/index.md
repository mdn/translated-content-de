---
title: "Element: beforexrselect Ereignis"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef}}{{SeeCompatTable}}

Das **`beforexrselect`** Ereignis wird ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) gesendet werden. Es kann verwendet werden, um XR-Welt-Eingabeereignisse zu unterdrücken, während der Benutzer mit einer DOM-Overlay-Benutzeroberfläche interagiert.

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling), ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforexrselect", (event) => {});

onbeforexrselect = (event) => {};
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Ereignisverfügbarkeit

Das **`beforexrselect`** Ereignis ist ein globales Ereignis und für die folgenden Schnittstellen verfügbar:

- [`Window`](/de/docs/Web/API/Window)
- [`Document`](/de/docs/Web/API/Document)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`MathMLElement`](/de/docs/Web/API/MathMLElement)

## Beispiele

Um WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) zu unterdrücken, kann eine Anwendung auf das `beforexrselect` Ereignis horchen. Das Ereignis bubbelt, daher verhindert ein Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem DOM-Overlay-Element alle WebXR-Auswahlereignisse innerhalb dieses Containers, wodurch die Interaktion mit dem DOM-Element ermöglicht und doppelte Ereigniseingaben in die XR-Welt vermieden werden.

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
