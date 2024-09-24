---
title: PresentationConnection
slug: Web/API/PresentationConnection
l10n:
  sourceCommit: 24740b45b9a6a7e7f4d7d81e5f5e9c515173b439
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Das **`PresentationConnection`** Interface der [Presentation API](/de/docs/Web/API/Presentation_API) bietet Methoden und Eigenschaften zur Verwaltung einer einzelnen Präsentation. Jede [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) wird durch ein `PresentationConnection` Objekt repräsentiert. Sowohl der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) als auch der [empfangende Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) _MUSS_ `PresentationConnection` implementieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("PresentationConnection.binaryType")}} {{Experimental_Inline}}
  - : Gibt entweder blob oder arrayBuffer zurück. Wenn ein `PresentationConnection` Objekt erstellt wird, _MUSS_ sein [`binaryType`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection-binarytype) IDL-Attribut auf den String " [`arraybuffer`](https://www.w3.org/TR/presentation-api/#dom-binarytype-arraybuffer)" gesetzt werden.
- {{domxref("PresentationConnection.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Bietet die Kennung der Präsentationsverbindung.
- {{domxref("PresentationConnection.state")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den aktuellen Status der [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zurück.
- {{domxref("PresentationConnection.url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die URL zurück, die zur Erstellung oder zum erneuten Verbinden der Präsentation verwendet wird.

## Instanzmethoden

- {{domxref("PresentationConnection.close()")}} {{Experimental_Inline}}
  - : Schließt die aktuelle Verbindung und sendet ein {{domxref("PresentationConnectionCloseEvent")}} an das {{DOMxRef("PresentationConnection/close", "close")}} Ereignis.
- {{domxref("PresentationConnection.send()")}} {{Experimental_Inline}}
  - : Sendet entweder binäre oder Textdaten zwischen einer steuernden und einer präsentierenden Browsing-Kontext.
- {{domxref("PresentationConnection.terminate()")}} {{Experimental_Inline}}
  - : Beendet die aktuelle Verbindung und löst das {{domxref("PresentationConnection/terminate_event", "terminate")}} Ereignis aus.

## Ereignisse

- {{domxref("PresentationConnection/close_event", "close")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf von {{DOMxRef("PresentationConnection.close", "PresentationConnection.close()")}} erfolgt.
- {{domxref("PresentationConnection/connect_event", "connect")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Präsentationsverbindung hergestellt wird.
- {{domxref("PresentationConnection/message_event", "message")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf von {{DOMxRef("PresentationConnection.send", "PresentationConnection.send()")}} erfolgt.
- {{domxref("PresentationConnection/terminate_event", "terminate")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf von {{DOMxRef("PresentationConnection.terminate", "PresentationConnection.terminate()")}} erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
