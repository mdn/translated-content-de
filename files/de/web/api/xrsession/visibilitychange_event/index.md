---
title: "XRSession: visibilitychange-Ereignis"
short-title: visibilitychange
slug: Web/API/XRSession/visibilitychange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`visibilitychange`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, um sie darüber zu informieren, wenn sie sichtbar oder verborgen wird, oder wenn sie sichtbar, aber derzeit nicht fokussiert ist. Nach Erhalt des Ereignisses können Sie den Wert der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState)-Eigenschaft der Sitzung überprüfen, um den neuen Sichtbarkeitszustand zu bestimmen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

### Auslöser

Ausgelöst, wenn eine [`XRSession`](/de/docs/Web/API/XRSession) sichtbar oder verborgen wird, oder wenn sie sichtbar, aber derzeit nicht fokussiert ist.

Wenn die `XRSession` dieses Ereignis empfängt, wurde der Sichtbarkeitszustand bereits geändert.

### Anwendungsfälle

Nach Erhalt des Ereignisses können Sie den Wert der [`visibilityState`](/de/docs/Web/API/XRSession/visibilityState)-Eigenschaft der Sitzung überprüfen, um den neuen Sichtbarkeitszustand zu bestimmen.

## Beispiele

Dieses Beispiel zeigt, wie Sie ein `visibilitychange`-Ereignis auf einer WebXR-Sitzung mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören, um damit zu beginnen, auf das Ereignis zu lauschen:

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

Wenn eine Änderung des Sichtbarkeitszustands auftritt, wird das Ereignis empfangen und an eine Funktion `mySessionVisible()` weitergeleitet, mit einem Booleschen Parameter, der angibt, ob die Sitzung derzeit dem Benutzer angezeigt wird oder nicht.

Sie können den Ereignishandler auch erstellen, indem Sie ihn der `onvisibilitychange`-Ereignishandlereigenschaft der [`XRSession`](/de/docs/Web/API/XRSession) zuweisen, wie folgt:

```js
xrSession.onvisibilitychange = (e) => {
  /* event handled here */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
