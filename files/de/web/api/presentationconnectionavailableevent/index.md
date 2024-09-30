---
title: PresentationConnectionAvailableEvent
slug: Web/API/PresentationConnectionAvailableEvent
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Das **`PresentationConnectionAvailableEvent`**-Interface der [Presentation API](/de/docs/Web/API/Presentation_API) wird auf einem [`PresentationRequest`](/de/docs/Web/API/PresentationRequest) ausgelöst, wenn eine mit dem Objekt verknüpfte Verbindung erstellt wird.

Ein [steuernder Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) [löst](https://www.w3.org/TR/presentation-api/#dfn-firing-an-event) ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) namens [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) auf einem [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest) aus, wenn eine mit dem Objekt verbundene Verbindung erstellt wird. Es wird an die `PresentationRequest`-Instanz unter Verwendung des [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent)-Interfaces ausgelöst, wobei das [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection)-Attribut auf das erstellte [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection)-Objekt gesetzt ist. Das Ereignis wird für jede Verbindung ausgelöst, die für den [Steuerer](https://www.w3.org/TR/presentation-api/#dfn-controller) erstellt wird, entweder durch das Aufrufen von `start()` oder `reconnect()` durch den [Steuerer](https://www.w3.org/TR/presentation-api/#dfn-controller) oder durch das Erstellen einer Verbindung im Auftrag des Steuerers durch den [steuernden Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) über [`defaultRequest`](https://www.w3.org/TR/presentation-api/#dom-presentation-defaultrequest).

{{InheritanceDiagram}}

## Konstruktor

- [`PresentationConnectionAvailableEvent()`](/de/docs/Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent) {{Experimental_Inline}}
  - : Erstellt ein neues PresentationConnectionAvailableEvent.

## Instanz-Eigenschaften

- [`PresentationConnectionAvailableEvent.connection`](/de/docs/Web/API/PresentationConnectionAvailableEvent/connection) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf das [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)-Objekt zurück, das das Ereignis ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
