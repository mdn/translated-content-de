---
title: PresentationConnectionCloseEvent
slug: Web/API/PresentationConnectionCloseEvent
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Das **`PresentationConnectionCloseEvent`**-Interface der [Presentation API](/de/docs/Web/API/Presentation_API) wird auf einem [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) ausgelöst, wenn es geschlossen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`PresentationConnectionCloseEvent()`](/de/docs/Web/API/PresentationConnectionCloseEvent/PresentationConnectionCloseEvent) {{Experimental_Inline}}
  - : Erstellt ein neues `PresentationConnectionCloseEvent`.

## Instanzeigenschaften

- [`PresentationConnectionCloseEvent.message`](/de/docs/Web/API/PresentationConnectionCloseEvent/message) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine lesbare Nachricht, die weitere Informationen darüber enthält, warum die Verbindung geschlossen wurde.
- [`PresentationConnectionCloseEvent.reason`](/de/docs/Web/API/PresentationConnectionCloseEvent/reason) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, warum die Verbindung geschlossen wurde. Diese Eigenschaft nimmt einen der folgenden Werte an: `error`, `closed` oder `wentaway`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
