---
title: PresentationConnectionList
slug: Web/API/PresentationConnectionList
l10n:
  sourceCommit: 24740b45b9a6a7e7f4d7d81e5f5e9c515173b439
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Presentation API")}}

`PresentationConnectionList` ist die Sammlung von eingehenden Präsentationsverbindungen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref('PresentationConnectionList.connections')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die nicht-terminierte Menge von {{DOMxRef("PresentationConnection")}}s im [Satz der Präsentationscontroller](https://www.w3.org/TR/presentation-api/#dfn-set-of-presentation-controllers) zurück.

## Ereignisse

- {{domxref('PresentationConnectionList/connectionavailable_event', "connectionavailable")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wann immer eine neue [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) verfügbar wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
