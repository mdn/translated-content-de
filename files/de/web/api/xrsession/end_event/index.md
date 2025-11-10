---
title: "XRSession: end-Event"
short-title: end
slug: Web/API/XRSession/end_event
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein `end`-Event wird auf einem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt ausgelöst, wenn die WebXR-Sitzung beendet wurde. Dies kann entweder dadurch geschehen, dass die Webanwendung die Sitzung beendet hat oder der {{Glossary("user_agent", "User-Agent")}} die Sitzung beendet hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("end", (event) => { })

onend = (event) => { }
```

## Ereignistyp

Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

### Auslösung

Ausgelöst, wenn die WebXR-Sitzung beendet wurde, entweder weil die Webanwendung die Sitzung beendet hat oder weil der {{Glossary("user_agent", "User-Agent")}} die Sitzung beendet hat.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergeleitet.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf das Ende einer WebXR-Sitzung zu reagieren. Sie möchten möglicherweise ein UI-Element anzeigen, das über die Beendigung der Sitzung informiert.

## Beispiele

Um informiert zu werden, wenn eine WebXR-Sitzung endet, können Sie Ihrem [`XRSession`](/de/docs/Web/API/XRSession)-Objekt einen Handler hinzufügen, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, wie folgt:

```js
XRSession.addEventListener("end", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `XRSession.onend`-Ereignishander-Eigenschaft verwenden, um einen Handler für das `end`-Event zu etablieren:

```js
XRSession.onend = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
