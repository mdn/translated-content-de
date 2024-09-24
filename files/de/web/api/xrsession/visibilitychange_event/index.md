---
title: "XRSession: visibilitychange Ereignis"
short-title: visibilitychange
slug: Web/API/XRSession/visibilitychange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`visibilitychange`** Ereignis wird an eine {{domxref("XRSession")}} gesendet, um sie darüber zu informieren, wenn sie sichtbar oder versteckt wird, oder wenn sie sichtbar, aber derzeit nicht fokussiert ist. Nach Erhalt des Ereignisses können Sie den Wert der {{domxref("XRSession.visibilityState", "visibilityState")}}-Eigenschaft der Sitzung abfragen, um den neuen Sichtbarkeitsstatus zu bestimmen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRSessionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften der Elternschnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : Die {{domxref("XRSession")}}, auf die sich das Ereignis bezieht.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn eine {{domxref("XRSession")}} sichtbar oder versteckt wird, oder wenn sie sichtbar, aber nicht fokussiert ist.

Wenn die `XRSession` dieses Ereignis empfängt, wurde der Sichtbarkeitsstatus bereits geändert.

### Anwendungsfälle

Nach Erhalt des Ereignisses können Sie den Wert der {{domxref("XRSession.visibilityState", "visibilityState")}}-Eigenschaft der Sitzung abfragen, um den neuen Sichtbarkeitsstatus zu bestimmen.

## Beispiele

Dieses Beispiel zeigt, wie man ein `visibilitychange`-Ereignis in einer WebXR-Sitzung abhört, indem {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwendet wird, um mit dem Abhören des Ereignisses zu beginnen:

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

Wenn eine Änderung des Sichtbarkeitsstatus eintritt, wird das Ereignis empfangen und an eine Funktion `mySessionVisible()` weitergegeben, mit einem booleschen Parameter, der angibt, ob die Sitzung derzeit dem Benutzer angezeigt wird.

Sie können den Ereignishandler auch erstellen, indem Sie ihn der `onvisibilitychange`-Ereignishandler-Eigenschaft der {{domxref("XRSession")}} zuweisen, wie folgt:

```js
xrSession.onvisibilitychange = (e) => {
  /* event handled here */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
