---
title: "Element: beforexrselect-Ereignis"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef}}{{SeeCompatTable}}

Das **`beforexrselect`**-Ereignis wird ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) gesendet werden. Es kann verwendet werden, um Eingabeereignisse in der XR-Welt zu unterdrücken, während der Benutzer mit einer DOM-Overlay-Benutzeroberfläche interagiert.

Dieses Ereignis [bubbles](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling), ist [cancelable](/de/docs/Web/API/Event/cancelable) und ist [composed](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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

Das **`beforexrselect`**-Ereignis ist ein globales Ereignis und für die folgenden Schnittstellen verfügbar:

- [`Window`](/de/docs/Web/API/Window)
- [`Document`](/de/docs/Web/API/Document)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`MathMLElement`](/de/docs/Web/API/MathMLElement)

## Beispiele

Um WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) zu unterdrücken, kann eine Anwendung das `beforexrselect`-Ereignis abhören. Das Ereignis steigt auf, daher verhindert ein Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das DOM-Overlay-Element, dass WebXR-Auswahlereignisse innerhalb dieses Containers auftreten und ermöglicht die Interaktion mit dem DOM-Element, wodurch doppelte Erfassung von Ereignissen in der XR-Welt vermieden wird.

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
