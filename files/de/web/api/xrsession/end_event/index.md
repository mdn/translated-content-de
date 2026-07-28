---
title: "XRSession: end-Ereignis"
short-title: end
slug: Web/API/XRSession/end_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein `end`-Ereignis wird an einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt ausgelöst, wenn die WebXR-Sitzung beendet wurde, entweder weil die Webanwendung sich entschieden hat, die Sitzung zu beenden, oder weil der {{Glossary("user_agent", "User Agent")}} die Sitzung beendet hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("end", (event) => { })

onend = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Beschreibung

### Auslösung

Ausgelöst, wenn die WebXR-Sitzung beendet ist, entweder weil die Webanwendung entschieden hat, die Sitzung zu beenden, oder weil der {{Glossary("user_agent", "User Agent")}} die Sitzung beendet hat.

Dieses Ereignis ist nicht stornierbar und wird nicht verbreitet.

### Anwendungsszenarien

Sie können dieses Ereignis nutzen, um auf das Ende einer WebXR-Sitzung zu reagieren. Vielleicht möchten Sie zum Beispiel ein UI-Element anzeigen, das über das Ende der Sitzung informiert.

## Beispiele

Um informiert zu werden, wenn eine WebXR-Sitzung zu Ende geht, können Sie einen Handler zu Ihrer [`XRSession`](/de/docs/Web/API/XRSession)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, wie folgt:

```js
XRSession.addEventListener("end", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `XRSession.onend`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `end`-Ereignis zu definieren:

```js
XRSession.onend = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
