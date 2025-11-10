---
title: "XRSession: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/XRSession/visibilitychange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`visibilitychange`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, um sie darüber zu informieren, wenn sie sichtbar oder verborgen wird oder wenn sie sichtbar, aber nicht aktuell fokussiert ist. Beim Empfang des Ereignisses können Sie den Wert der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState)-Eigenschaft der Sitzung überprüfen, um den neuen Sichtbarkeitsstatus zu bestimmen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("visibilitychange", (event) => { })

onvisibilitychange = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Übernimmt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

### Auslöser

Ausgelöst, wenn eine [`XRSession`](/de/docs/Web/API/XRSession) sichtbar oder verborgen wird oder wenn sie sichtbar, aber nicht aktuell fokussiert ist.

Wenn die `XRSession` dieses Ereignis empfängt, wurde der Sichtbarkeitszustand bereits geändert.

### Anwendungsfälle

Nach dem Empfang des Ereignisses können Sie den Wert der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState)-Eigenschaft der Sitzung überprüfen, um den neuen Sichtbarkeitsstatus zu bestimmen.

## Beispiele

Dieses Beispiel demonstriert, wie man auf ein `visibilitychange`-Ereignis auf einer WebXR-Sitzung hört, indem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird, um mit dem Zuhören für das Ereignis zu beginnen:

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

Wenn eine Änderung des Sichtbarkeitszustands auftritt, wird das Ereignis empfangen und an eine Funktion `mySessionVisible()` weitergeleitet, mit einem booleschen Parameter, der angibt, ob die Sitzung derzeit dem Benutzer angezeigt wird oder nicht.

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
