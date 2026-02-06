---
title: "HTMLGeolocationElement: promptdismiss-Ereignis"
short-title: promptdismiss
slug: Web/API/HTMLGeolocationElement/promptdismiss_event
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

Das **`promptdismiss`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und das resultierende Dialogfeld schließt, indem er die "Schließen"-Schaltfläche oder die <kbd>Esc</kbd>-Taste drückt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("promptdismiss", (event) => { })

onpromptdismiss = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von `promptdismiss`, um auf das Ablehnen der Berechtigung durch den Benutzer zu reagieren

In unserem [Demo zur eingebetteten Karte](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `promptdismiss`-Ereignishandler, um auf das Schließen der `<geolocation>`-Berechtigungsabfrage durch den Benutzer zu reagieren:

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
```

In der `notifyUserRetrySelection()`-Funktion bitten wir den Benutzer, die Taste erneut zu drücken und die Standortfreigabe zu erlauben.

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    'Please press the "Use location" button again and allow location for this site.';
}
```

Siehe die Hauptseite von [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) für eine vollständige Erklärung dieses Beispiels.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
