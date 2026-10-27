---
title: "XRSession: end-Ereignis"
short-title: end
slug: Web/API/XRSession/end_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein `end`-Ereignis wird für ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt ausgelöst, wenn die WebXR-Sitzung beendet wurde – entweder weil die Webanwendung die Sitzung beendet hat oder weil der {{Glossary("user_agent", "User Agent")}} sie beendet hat.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("end", (event) => { })
```

Alternativ können Sie einen Handler der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onend = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Beschreibung

### Auslöser

Wird ausgelöst, wenn die WebXR-Sitzung beendet wurde – entweder weil die Webanwendung die Sitzung beendet hat oder weil der {{Glossary("user_agent", "User Agent")}} sie beendet hat.

Dieses Ereignis kann nicht abgebrochen werden und durchläuft die Ereigniskette nicht nach oben.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf das Ende einer WebXR-Sitzung zu reagieren. Beispielsweise können Sie ein UI-Element anzeigen, das über die Beendigung der Sitzung informiert.

## Beispiele

Um benachrichtigt zu werden, wenn eine WebXR-Sitzung endet, können Sie Ihrer [`XRSession`](/de/docs/Web/API/XRSession)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Handler hinzufügen:

```js
xrSession.addEventListener("end", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie über die Event-Handler-Eigenschaft `xrSession.onend` einen Handler für das `end`-Ereignis festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onend` hinzugefügte Event-Listener ersetzt werden:

```js
xrSession.onend = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
