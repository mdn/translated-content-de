---
title: PresentationConnectionList
slug: Web/API/PresentationConnectionList
l10n:
  sourceCommit: 24740b45b9a6a7e7f4d7d81e5f5e9c515173b439
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Presentation API")}}

`PresentationConnectionList` ist die Sammlung eingehender Präsentationsverbindungen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`PresentationConnectionList.connections`](/de/docs/Web/API/PresentationConnectionList/connections) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die nicht beendete Menge von [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)s in der [Menge der Präsentationscontroller](https://www.w3.org/TR/presentation-api/#dfn-set-of-presentation-controllers) zurück.

## Ereignisse

- [`connectionavailable`](/de/docs/Web/API/PresentationConnectionList/connectionavailable_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn immer eine neue [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) verfügbar wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
