---
title: PresentationConnectionCloseEvent
slug: Web/API/PresentationConnectionCloseEvent
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Das **`PresentationConnectionCloseEvent`**-Interface der [Presentation API](/de/docs/Web/API/Presentation_API) wird ausgelöst auf einer {{domxref("PresentationConnection")}}, wenn diese geschlossen wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PresentationConnectionCloseEvent.PresentationConnectionCloseEvent", "PresentationConnectionCloseEvent()")}} {{Experimental_Inline}}
  - : Erstellt ein neues PresentationConnectionCloseEvent.

## Instanzeigenschaften

- {{DOMxRef("PresentationConnectionCloseEvent.message")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine lesbare Nachricht, die mehr Informationen darüber bietet, warum die Verbindung geschlossen wurde.
- {{DOMxRef("PresentationConnectionCloseEvent.reason")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, warum die Verbindung geschlossen wurde. Diese Eigenschaft nimmt einen der folgenden Werte an: `error`, `closed` oder `wentaway`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
