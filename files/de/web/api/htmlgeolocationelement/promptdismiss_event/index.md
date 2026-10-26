---
title: "HTMLGeolocationElement: promptdismiss-Ereignis"
short-title: promptdismiss
slug: Web/API/HTMLGeolocationElement/promptdismiss_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`promptdismiss`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und den daraufhin angezeigten Dialog über die Schaltfläche „Schließen“ oder die <kbd>Esc</kbd>-Taste schließt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("promptdismiss", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onpromptdismiss = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Mit `promptdismiss` auf das Schließen der Berechtigungsabfrage reagieren

In unserer [Demo einer eingebetteten Karte](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `promptdismiss`-Event-Handler, um darauf zu reagieren, dass der Benutzer die Berechtigungsabfrage des `<geolocation>`-Elements schließt:

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
```

In der Funktion `notifyUserRetrySelection()` bitten wir den Benutzer, die Schaltfläche erneut zu drücken und den Zugriff auf den Standort zu erlauben.

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    'Please press the "Use location" button again and allow location for this site.';
}
```

Eine vollständige Erläuterung dieses Beispiels finden Sie auf der Hauptseite zu [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
