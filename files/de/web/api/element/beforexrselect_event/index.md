---
title: "Element: beforexrselect-Ereignis"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef}}{{SeeCompatTable}}

Das **`beforexrselect`**-Ereignis wird vor der Auslösung von WebXR-Auswahlereignissen ({{domxref("XRSession/select_event", "select")}}, {{domxref("XRSession/selectstart_event", "selectstart")}}, {{domxref("XRSession/selectend_event", "selectend")}}) ausgelöst. Es kann verwendet werden, um XR-Welteingabeereignisse zu unterdrücken, während der Benutzer mit einer DOM-Overlay-Benutzeroberfläche interagiert.

Dieses Ereignis [bubbles](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling), ist [stornierbar](/de/docs/Web/API/Event/cancelable) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforexrselect", (event) => {});

onbeforexrselect = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRSessionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : Die {{domxref("XRSession")}}, auf die sich das Ereignis bezieht.

## Ereignisverfügbarkeit

Das **`beforexrselect`**-Ereignis ist ein globales Ereignis und für die folgenden Schnittstellen verfügbar:

- {{domxref("Window")}}
- {{domxref("Document")}}
- {{domxref("HTMLElement")}}
- {{domxref("SVGElement")}}
- {{domxref("MathMLElement")}}

## Beispiele

Um WebXR-Auswahlereignisse ({{domxref("XRSession/select_event", "select")}}, {{domxref("XRSession/selectstart_event", "selectstart")}}, {{domxref("XRSession/selectend_event", "selectend")}}) zu unterdrücken, kann eine Anwendung auf das `beforexrselect`-Ereignis hören. Das Ereignis wird verbreitet, sodass ein Aufruf von {{domxref("Event/preventDefault", "preventDefault()")}} auf dem DOM-Overlay-Element alle WebXR-Auswahlereignisse innerhalb dieses Containers verhindert, wodurch die Interaktion mit dem DOM-Element ermöglicht wird und doppelte Ereigniseingaben in die XR-Welt vermieden werden.

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

- {{domxref("XRSession/select_event", "select")}} Ereignis
- {{domxref("XRSession/selectstart_event", "selectstart")}} Ereignis
- {{domxref("XRSession/selectend_event", "selectend")}} Ereignis
