---
title: "Element: beforexrselect-Ereignis"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`beforexrselect`**-Ereignis wird ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) weitergeleitet werden. Es kann verwendet werden, um Eingabeereignisse für die XR-Welt zu unterdrücken, während Benutzer mit einer DOM-Overlay-Benutzeroberfläche interagieren.

Dieses Ereignis [steigt im DOM-Baum auf](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling), ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und [komponiert](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforexrselect", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbeforexrselect = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Verfügbarkeit des Ereignisses

Das **`beforexrselect`**-Ereignis ist ein globales Ereignis und steht auf den folgenden Schnittstellen zur Verfügung:

- [`Window`](/de/docs/Web/API/Window)
- [`Document`](/de/docs/Web/API/Document)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`MathMLElement`](/de/docs/Web/API/MathMLElement)

## Beispiele

Um WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) zu unterdrücken, kann eine Anwendung auf das `beforexrselect`-Ereignis warten. Da das Ereignis im DOM-Baum aufsteigt, verhindert ein Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem DOM-Overlay-Element sämtliche WebXR-Auswahlereignisse innerhalb dieses Containers. Dadurch ist die Interaktion mit dem DOM-Element möglich, ohne dass dieselbe Eingabe zusätzlich als Ereignis an die XR-Welt weitergegeben wird.

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
- {{cssxref(":xr-overlay")}}-Pseudoklasse
