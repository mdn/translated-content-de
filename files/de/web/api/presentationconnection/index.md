---
title: PresentationConnection
slug: Web/API/PresentationConnection
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Die **`PresentationConnection`**-Schnittstelle der [Presentation API](/de/docs/Web/API/Presentation_API) bietet Methoden und Eigenschaften zum Verwalten einer einzelnen Präsentation. Jede [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) wird durch ein `PresentationConnection`-Objekt dargestellt. Sowohl der [steuernde Benutzer-Agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) als auch der [empfangende Benutzer-Agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) _MUSS_ `PresentationConnection` implementieren.

{{InheritanceDiagram}}

## Eigenschaften der Instanz

- [`PresentationConnection.binaryType`](/de/docs/Web/API/PresentationConnection/binaryType) {{Experimental_Inline}}
  - : Gibt entweder blob oder arrayBuffer zurück. Wenn ein `PresentationConnection`-Objekt erstellt wird, muss sein [`binaryType`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection-binarytype) IDL-Attribut auf die Zeichenkette [`"arraybuffer"`](https://www.w3.org/TR/presentation-api/#dom-binarytype-arraybuffer) gesetzt werden.
- [`PresentationConnection.id`](/de/docs/Web/API/PresentationConnection/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Stellt die Identifikation der Präsentationsverbindung bereit.
- [`PresentationConnection.state`](/de/docs/Web/API/PresentationConnection/state) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den aktuellen Zustand der [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zurück.
- [`PresentationConnection.url`](/de/docs/Web/API/PresentationConnection/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die URL zurück, die verwendet wurde, um die Präsentation zu erstellen oder wiederherzustellen.

## Methoden der Instanz

- [`PresentationConnection.close()`](/de/docs/Web/API/PresentationConnection/close) {{Experimental_Inline}}
  - : Schließt die aktuelle Verbindung und sendet ein [`PresentationConnectionCloseEvent`](/de/docs/Web/API/PresentationConnectionCloseEvent) an das [`close`](/de/docs/Web/API/PresentationConnection/close) Ereignis.
- [`PresentationConnection.send()`](/de/docs/Web/API/PresentationConnection/send) {{Experimental_Inline}}
  - : Sendet entweder Binär- oder Textdaten zwischen einem steuernden Browserkontext und einem präsentierenden Browserkontext.
- [`PresentationConnection.terminate()`](/de/docs/Web/API/PresentationConnection/terminate) {{Experimental_Inline}}
  - : Beendet die aktuelle Verbindung und löst ein [`terminate`](/de/docs/Web/API/PresentationConnection/terminate_event) Ereignis aus.

## Ereignisse

- [`close`](/de/docs/Web/API/PresentationConnection/close_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf von [`PresentationConnection.close()`](/de/docs/Web/API/PresentationConnection/close) erfolgt.
- [`connect`](/de/docs/Web/API/PresentationConnection/connect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Präsentationsverbindung hergestellt wird.
- [`message`](/de/docs/Web/API/PresentationConnection/message_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf von [`PresentationConnection.send()`](/de/docs/Web/API/PresentationConnection/send) erfolgt.
- [`terminate`](/de/docs/Web/API/PresentationConnection/terminate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Aufruf von [`PresentationConnection.terminate()`](/de/docs/Web/API/PresentationConnection/terminate) erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
