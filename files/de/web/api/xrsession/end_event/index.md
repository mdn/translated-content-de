---
title: "XRSession: end event"
short-title: end
slug: Web/API/XRSession/end_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein `end`-Ereignis wird bei einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt ausgelöst, wenn die WebXR-Sitzung beendet wurde, entweder weil die Webanwendung beschlossen hat, die Sitzung zu beenden, oder weil der {{Glossary("user_agent", "User-Agent")}} die Sitzung beendet hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("end", (event) => { })

onend = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

### Auslösung

Wird ausgelöst, wenn die WebXR-Sitzung beendet wurde, entweder weil die Webanwendung beschlossen hat, die Sitzung zu beenden, oder weil der {{Glossary("user_agent", "User-Agent")}} die Sitzung beendet hat.

Dieses Ereignis kann nicht abgebrochen werden und löst sich nicht blasenförmig aus.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf das Ende einer WebXR-Sitzung zu reagieren. Sie könnten beispielsweise ein UI-Element anzeigen, das über die Beendigung der Sitzung informiert.

## Beispiele

Um informiert zu werden, wenn eine WebXR-Sitzung endet, können Sie einen Handler zu Ihrer [`XRSession`](/de/docs/Web/API/XRSession)-Instanz hinzufügen, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, wie hier gezeigt:

```js
XRSession.addEventListener("end", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `XRSession.onend` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `end`-Ereignis festzulegen:

```js
XRSession.onend = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
