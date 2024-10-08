---
title: "XRSession: end-Ereignis"
short-title: end
slug: Web/API/XRSession/end_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein `end`-Ereignis wird an einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt ausgelöst, wenn die WebXR-Sitzung beendet wurde, entweder weil die Webanwendung beschlossen hat, die Sitzung zu beenden, oder weil der {{Glossary("user_agent", "User Agent")}} die Sitzung beendet hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("end", (event) => {});

onend = (event) => {};
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn die WebXR-Sitzung beendet wurde, entweder weil die Webanwendung beschlossen hat, die Sitzung zu beenden, oder weil der {{Glossary("user_agent", "User Agent")}} die Sitzung beendet hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf das Ende einer WebXR-Sitzung zu reagieren. Möglicherweise möchten Sie ein UI-Element anzeigen, das über die Beendigung der Sitzung informiert.

## Beispiele

Um informiert zu werden, wenn eine WebXR-Sitzung endet, können Sie einen Handler zu Ihrer [`XRSession`](/de/docs/Web/API/XRSession)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, so:

```js
XRSession.addEventListener("end", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `XRSession.onend`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `end`-Ereignis festzulegen:

```js
XRSession.onend = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
