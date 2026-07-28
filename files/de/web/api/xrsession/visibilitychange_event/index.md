---
title: "XRSession: visibilitychange Event"
short-title: visibilitychange
slug: Web/API/XRSession/visibilitychange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`visibilitychange`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, um sie darüber zu informieren, wann sie sichtbar oder versteckt wird oder wann sie sichtbar, aber nicht aktuell fokussiert ist. Nach Erhalt des Ereignisses können Sie den Wert der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState)-Eigenschaft der Sitzung überprüfen, um den neuen Sichtbarkeitszustand zu bestimmen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("visibilitychange", (event) => { })

onvisibilitychange = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn eine [`XRSession`](/de/docs/Web/API/XRSession) sichtbar oder versteckt wird, oder wenn sie sichtbar, aber nicht aktuell fokussiert ist.

Wenn die `XRSession` dieses Ereignis empfängt, wurde der Sichtbarkeitszustand bereits geändert.

### Anwendungsfälle

Nach Erhalt des Ereignisses können Sie den Wert der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState)-Eigenschaft der Sitzung überprüfen, um den neuen Sichtbarkeitszustand zu bestimmen.

## Beispiele

Dieses Beispiel demonstriert, wie man mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf ein `visibilitychange`-Ereignis in einer WebXR-Sitzung lauscht, um mit dem Abhören des Ereignisses zu beginnen:

```js
navigator.xr.requestSession("inline").then((xrSession) => {
  xrSession.addEventListener("visibilitychange", (e) => {
    switch (e.session.visibilityState) {
      case "visible":
      case "visible-blurred":
        mySessionVisible(true);
        break;
      case "hidden":
        mySessionVisible(false);
        break;
    }
  });
});
```

Wenn eine Änderung des Sichtbarkeitszustands auftritt, wird das Ereignis empfangen und an eine Funktion `mySessionVisible()` weitergeleitet, mit einem booleschen Parameter, der angibt, ob die Sitzung dem Benutzer derzeit angezeigt wird oder nicht.

Sie können den Ereignis-Handler auch erstellen, indem Sie ihn der `onvisibilitychange`-Ereignis-Handler-Eigenschaft der [`XRSession`](/de/docs/Web/API/XRSession) zuweisen, wie folgt:

```js
xrSession.onvisibilitychange = (e) => {
  /* event handled here */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
