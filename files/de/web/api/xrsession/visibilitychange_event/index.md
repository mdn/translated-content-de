---
title: "XRSession: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/XRSession/visibilitychange_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`visibilitychange`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn sie sichtbar oder verborgen wird oder wenn sie sichtbar wird, aber derzeit nicht fokussiert ist. Wenn Sie das Ereignis empfangen, können Sie den Wert der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState)-Eigenschaft der Sitzung prüfen, um ihren neuen Sichtbarkeitsstatus zu ermitteln.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("visibilitychange", (event) => { })
```

Alternativ können Sie den [Event-Handler-Property](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onvisibilitychange = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn eine [`XRSession`](/de/docs/Web/API/XRSession) sichtbar oder verborgen wird oder wenn sie sichtbar wird, aber derzeit nicht fokussiert ist.

Wenn die `XRSession` dieses Ereignis empfängt, wurde der Sichtbarkeitsstatus bereits geändert.

### Anwendungsfälle

Wenn Sie das Ereignis empfangen, können Sie den Wert der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState)-Eigenschaft der Sitzung prüfen, um ihren neuen Sichtbarkeitsstatus zu ermitteln.

## Beispiele

Dieses Beispiel zeigt, wie Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf einer WebXR-Sitzung auf ein `visibilitychange`-Ereignis warten:

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

Wenn sich der Sichtbarkeitsstatus ändert, wird das Ereignis empfangen und an die Funktion `mySessionVisible()` weitergegeben. Ein boolescher Parameter gibt dabei an, ob die Sitzung dem Benutzer gerade angezeigt wird.

Sie können den Event-Handler auch erstellen, indem Sie ihn der `onvisibilitychange`-Event-Handler-Property der [`XRSession`](/de/docs/Web/API/XRSession) zuweisen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onvisibilitychange` hinzugefügte Event-Listener ersetzt werden:

```js
xrSession.onvisibilitychange = (e) => {
  /* event handled here */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
