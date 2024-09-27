---
title: PresentationReceiver
slug: Web/API/PresentationReceiver
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Presentation API")}}

Das **`PresentationReceiver`**-Interface der [Presentation API](/de/docs/Web/API/Presentation_API) bietet eine Möglichkeit für einen empfangenden Browsing-Kontext, auf steuernde Browsing-Kontexte zuzugreifen und mit ihnen zu kommunizieren.

## Instanzeigenschaften

- [`PresentationReceiver.connectionList`](/de/docs/Web/API/PresentationReceiver/connectionList) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`PresentationConnectionList`](/de/docs/Web/API/PresentationConnectionList)-Objekt aufgelöst wird, das eine Liste von _eingehenden Präsentationsverbindungen_ enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
