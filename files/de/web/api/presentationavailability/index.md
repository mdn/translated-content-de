---
title: Präsentationsverfügbarkeit
slug: Web/API/PresentationAvailability
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Ein **`PresentationAvailability`**-Objekt ist mit verfügbaren [Präsentationsdisplays](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) assoziiert und repräsentiert die _Verfügbarkeit von Präsentationsdisplays_ für eine Präsentationsanfrage. Wenn der [steuernde Benutzer-Agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) die [Liste der verfügbaren Präsentationsdisplays überwachen](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) kann (ohne eine ausstehende Anfrage an `start()`), _MUSS_ das `PresentationAvailability`-Objekt in einem [steuernden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) implementiert werden.

Das `value`-Attribut _MUSS_ den letzten Wert zurückgeben, auf den es gesetzt wurde. Der Wert wird durch den Algorithmus zur [Überwachung der Liste der verfügbaren Präsentationsdisplays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) aktualisiert.

Das `onchange`-Attribut ist ein [Ereignishandler](https://www.w3.org/TR/presentation-api/#dfn-event-handler), dessen entsprechender [Ereignishandlertyp](https://www.w3.org/TR/presentation-api/#dfn-event-handler-event-type) `change` ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("PresentationAvailability.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das gegebene Präsentationsdisplay verfügbar ist. Das `value`-Attribut _MUSS_ den letzten Wert zurückgeben, auf den es gesetzt wurde.

### Ereignis

- {{domxref("PresentationAvailability.change_event", "change")}} {{Experimental_Inline}}
  - : Gibt an, dass sich die Verfügbarkeit des Präsentationsdisplays geändert hat.

## Instanz-Methoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}