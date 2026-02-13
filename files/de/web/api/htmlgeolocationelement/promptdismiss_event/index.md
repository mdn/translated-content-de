---
title: "HTMLGeolocationElement: promptdismiss-Ereignis"
short-title: promptdismiss
slug: Web/API/HTMLGeolocationElement/promptdismiss_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`promptdismiss`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und den resultierenden Dialog durch Drücken der "Schließen"-Schaltfläche oder der <kbd>Esc</kbd>-Taste schließt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("promptdismiss", (event) => { })

onpromptdismiss = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von `promptdismiss`, um auf die Ablehnung durch den Benutzer zu reagieren

In unserem [Eingebettete Karte Demo](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `promptdismiss`-Ereignishandler, um darauf zu reagieren, dass der Benutzer die `<geolocation>`-Berechtigungsaufforderung ablehnt:

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
```

In der Funktion `notifyUserRetrySelection()` bitten wir den Benutzer, die Schaltfläche erneut zu drücken und den Standort zuzulassen.

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    'Please press the "Use location" button again and allow location for this site.';
}
```

Sehen Sie auf der Hauptseite [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) eine vollständige Anleitung dieses Beispiels.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
