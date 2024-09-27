---
title: PresentationConnection
slug: Web/API/PresentationConnection
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Das **`PresentationConnection`**-Interface der [Presentation API](/de/docs/Web/API/Presentation_API) bietet Methoden und Eigenschaften zur Verwaltung einer einzelnen Präsentation. Jede [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) wird durch ein `PresentationConnection`-Objekt repräsentiert. Sowohl der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) als auch der [empfangende Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) _MUSS_ `PresentationConnection` implementieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PresentationConnection.binaryType`](/de/docs/Web/API/PresentationConnection/binaryType) {{Experimental_Inline}}
  - : Gibt entweder `blob` oder `arrayBuffer` zurück. Wenn ein `PresentationConnection`-Objekt erstellt wird, muss sein [`binaryType`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection-binarytype) IDL-Attribut auf den String [`"arraybuffer"`](https://www.w3.org/TR/presentation-api/#dom-binarytype-arraybuffer) gesetzt werden.
- [`PresentationConnection.id`](/de/docs/Web/API/PresentationConnection/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Stellt die Präsentationsverbindungskennung bereit.
- [`PresentationConnection.state`](/de/docs/Web/API/PresentationConnection/state) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den aktuellen Zustand der [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zurück.
- [`PresentationConnection.url`](/de/docs/Web/API/PresentationConnection/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die URL zurück, die zur Erstellung oder Wiederverbindung zur Präsentation verwendet wurde.

## Instanz-Methoden

- [`PresentationConnection.close()`](/de/docs/Web/API/PresentationConnection/close) {{Experimental_Inline}}
  - : Schließt die aktuelle Verbindung und sendet ein [`PresentationConnectionCloseEvent`](/de/docs/Web/API/PresentationConnectionCloseEvent) an das [`close`](/de/docs/Web/API/PresentationConnection/close)-Ereignis.
- [`PresentationConnection.send()`](/de/docs/Web/API/PresentationConnection/send) {{Experimental_Inline}}
  - : Sendet entweder binäre oder Textdaten zwischen einem steuernden Browsing-Kontext und einem präsentierenden Browsing-Kontext.
- [`PresentationConnection.terminate()`](/de/docs/Web/API/PresentationConnection/terminate) {{Experimental_Inline}}
  - : Beendet die aktuelle Verbindung und löst das [`terminate`](/de/docs/Web/API/PresentationConnection/terminate_event)-Ereignis aus.

## Ereignisse

- [`close`](/de/docs/Web/API/PresentationConnection/close_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf zu [`PresentationConnection.close()`](/de/docs/Web/API/PresentationConnection/close) erfolgt.
- [`connect`](/de/docs/Web/API/PresentationConnection/connect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Präsentationsverbindung hergestellt wird.
- [`message`](/de/docs/Web/API/PresentationConnection/message_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf zu [`PresentationConnection.send()`](/de/docs/Web/API/PresentationConnection/send) erfolgt.
- [`terminate`](/de/docs/Web/API/PresentationConnection/terminate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf zu [`PresentationConnection.terminate()`](/de/docs/Web/API/PresentationConnection/terminate) erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
