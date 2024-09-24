---
title: PresentationConnectionAvailableEvent
slug: Web/API/PresentationConnectionAvailableEvent
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Das **`PresentationConnectionAvailableEvent`**-Interface der [Presentation API](/de/docs/Web/API/Presentation_API) wird auf einem {{domxref("PresentationRequest")}} ausgelöst, wenn eine mit dem Objekt verbundene Verbindung erstellt wird.

Ein [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) [löst](https://www.w3.org/TR/presentation-api/#dfn-firing-an-event) ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) mit dem Namen [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) auf einem [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest) aus, wenn eine mit dem Objekt verbundene Verbindung erstellt wird. Es wird auf der `PresentationRequest`-Instanz unter Verwendung des [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent)-Interfaces ausgelöst, wobei das Attribut [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection) auf das erstellte [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection)-Objekt gesetzt ist. Das Ereignis wird für jede Verbindung ausgelöst, die für den [controller](https://www.w3.org/TR/presentation-api/#dfn-controller) erstellt wird, entweder durch den [controller](https://www.w3.org/TR/presentation-api/#dfn-controller), der `start()` oder `reconnect()` aufruft, oder durch den [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent), der eine Verbindung im Auftrag des Controllers über [`defaultRequest`](https://www.w3.org/TR/presentation-api/#dom-presentation-defaultrequest) erstellt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent", "PresentationConnectionAvailableEvent()")}} {{Experimental_Inline}}
  - : Erstellt ein neues PresentationConnectionAvailableEvent.

## Instanzeigenschaften

- {{domxref("PresentationConnectionAvailableEvent.connection")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das {{domxref("PresentationConnection")}}-Objekt zurück, das das Ereignis ausgelöst hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
