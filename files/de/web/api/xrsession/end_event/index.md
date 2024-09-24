---
title: "XRSession: end-Ereignis"
short-title: end
slug: Web/API/XRSession/end_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein `end` Ereignis wird bei einem {{DOMxRef("XRSession")}}-Objekt ausgelöst, wenn die WebXR-Sitzung beendet wurde, entweder weil die Webanwendung sich entschieden hat, die Sitzung zu beenden, oder weil der {{Glossary("user agent")}} die Sitzung beendet hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("end", (event) => {});

onend = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRSessionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : Die {{domxref("XRSession")}}, auf die sich das Ereignis bezieht.

## Beschreibung

### Auslöser

Ausgelöst, wenn die WebXR-Sitzung beendet wurde, entweder weil die Webanwendung sich entschieden hat, die Sitzung zu beenden, oder weil der {{Glossary("user agent")}} die Sitzung beendet hat.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergegeben.

### Anwendungsfälle

Sie können dieses Ereignis nutzen, um auf das Ende einer WebXR-Sitzung zu reagieren. Beispielsweise könnten Sie ein UI-Element anzeigen, das über das Ende der Sitzung informiert.

## Beispiele

Um benachrichtigt zu werden, wenn eine WebXR-Sitzung endet, können Sie einen Handler zu Ihrer {{domxref("XRSession")}}-Instanz hinzufügen, indem Sie {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden, wie folgt:

```js
XRSession.addEventListener("end", (event) => {
  /* die Sitzung wurde beendet */
});
```

Alternativ können Sie die `XRSession.onend`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `end`-Ereignis festzulegen:

```js
XRSession.onend = (event) => {
  /* die Sitzung wurde beendet */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
