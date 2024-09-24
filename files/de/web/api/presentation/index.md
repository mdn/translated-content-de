---
title: Präsentation
slug: Web/API/Presentation
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Die **`Presentation`** kann im Kontext als zwei mögliche Benutzeragenten definiert werden: _steuernder Benutzeragent_ und _empfangender Benutzeragent_.

Im steuernden Browsing-Kontext bietet das `Presentation`-Interface einen Mechanismus, um das standardmäßige Browserverhalten, Präsentationen auf einem externen Bildschirm zu starten, zu überschreiben. Im empfangenden Browsing-Kontext stellt das `Presentation`-Interface den Zugang zu den verfügbaren Präsentationsverbindungen bereit.

## Instanz-Eigenschaften

- {{DOMxRef("Presentation.defaultRequest")}} {{Experimental_Inline}}
  - : In einem [steuernden Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _MUSS_ das Attribut `defaultRequest` die [Standard-Präsentationsanfrage](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) zurückgeben, falls vorhanden, andernfalls `null`. In einem [empfangenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) _MUSS_ es `null` zurückgeben.
- {{DOMxRef("Presentation.receiver")}} {{Experimental_Inline}}
  - : In einem [empfangenden Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) _MUSS_ das Attribut `receiver` die {{DOMxRef("PresentationReceiver")}}-Instanz zurückgeben, die mit dem [empfangenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) verbunden ist und vom [empfangenden Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) erstellt wurde, wenn der [empfangende Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) erstellt wird.

## Instanz-Methoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
