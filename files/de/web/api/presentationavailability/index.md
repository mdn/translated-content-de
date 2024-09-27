---
title: PresentationAvailability
slug: Web/API/PresentationAvailability
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Ein **`PresentationAvailability`**-Objekt ist mit verfügbaren [Presentation Displays](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) verbunden und repräsentiert die _Verfügbarkeit des Presentation Displays_ für eine Präsentationsanfrage. Wenn der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) [die Liste der verfügbaren Presentation Displays überwachen kann](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) im Hintergrund (ohne eine ausstehende Anfrage an `start()`), _MUSS_ das `PresentationAvailability`-Objekt in einem [steuernden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) implementiert werden.

Das `value`-Attribut _MUSS_ den letzten Wert zurückgeben, auf den es gesetzt wurde. Der Wert wird durch den Algorithmus [Überwachen der Liste der verfügbaren Presentation Displays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) aktualisiert.

Das `onchange`-Attribut ist ein [Ereignishandler](https://www.w3.org/TR/presentation-api/#dfn-event-handler), dessen entsprechender [Ereignishandler-Ereignistyp](https://www.w3.org/TR/presentation-api/#dfn-event-handler-event-type) `change` ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`PresentationAvailability.value`](/de/docs/Web/API/PresentationAvailability/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der anzeigt, ob das gegebene Presentation Display verfügbar ist. Das `value`-Attribut _MUSS_ den letzten Wert zurückgeben, auf den es gesetzt wurde.

### Ereignis

- [`change`](/de/docs/Web/API/PresentationAvailability/change_event) {{Experimental_Inline}}
  - : Gibt an, dass sich die Verfügbarkeit des Presentation Displays geändert hat.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
