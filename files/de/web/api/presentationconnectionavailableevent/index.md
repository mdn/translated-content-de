---
title: PresentationConnectionAvailableEvent
slug: Web/API/PresentationConnectionAvailableEvent
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Die **`PresentationConnectionAvailableEvent`**-Schnittstelle der [Presentation API](/de/docs/Web/API/Presentation_API) wird bei einem [`PresentationRequest`](/de/docs/Web/API/PresentationRequest) ausgelöst, wenn eine Verbindung mit dem Objekt erstellt wird.

Ein [steuernder Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) [löst](https://www.w3.org/TR/presentation-api/#dfn-firing-an-event) ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) namens [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) bei einem [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest) aus, wenn eine Verbindung mit dem Objekt erstellt wird. Es wird bei der `PresentationRequest`-Instanz ausgelöst, unter Verwendung der [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent)-Schnittstelle, mit dem [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection)-Attribut, das auf das erstellte [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection)-Objekt gesetzt ist. Das Ereignis wird für jede Verbindung ausgelöst, die für den [Controller](https://www.w3.org/TR/presentation-api/#dfn-controller) erstellt wird, entweder vom [Controller](https://www.w3.org/TR/presentation-api/#dfn-controller) durch Aufrufen von `start()` oder `reconnect()` oder durch den [steuernden Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent), der eine Verbindung im Namen des Controllers über [`defaultRequest`](https://www.w3.org/TR/presentation-api/#dom-presentation-defaultrequest) erstellt.

{{InheritanceDiagram}}

## Konstruktor

- [`PresentationConnectionAvailableEvent()`](/de/docs/Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent) {{Experimental_Inline}}
  - : Erstellt ein neues PresentationConnectionAvailableEvent.

## Instanzeigenschaften

- [`PresentationConnectionAvailableEvent.connection`](/de/docs/Web/API/PresentationConnectionAvailableEvent/connection) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)-Objekt zurück, das das Ereignis ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
