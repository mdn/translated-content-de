---
title: PresentationRequest
slug: Web/API/PresentationRequest
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Ein `PresentationRequest`-Objekt wird verwendet, um eine Präsentation von einem [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) zu initiieren oder erneut eine Verbindung herzustellen. Das `PresentationRequest`-Objekt _MUSS_ in einem [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) implementiert werden, bereitgestellt von einem [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent).

Wenn ein `PresentationRequest` konstruiert wird, _MÜSSEN_ die angegebenen `urls` als die Liste der _presentation request URLs_ verwendet werden, die jeweils eine mögliche [presentation URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) für die `PresentationRequest`-Instanz sind.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PresentationRequest.PresentationRequest","PresentationRequest()")}} {{Experimental_Inline}}
  - : Erstellt einen `PresentationRequest`.

## Instanz-Eigenschaften

Keine

## Instanz-Methoden

- {{domxref("PresentationRequest.start()")}} {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das mit einer {{DOMxRef("PresentationConnection")}} aufgelöst wird, nachdem der Benutzeragent den Benutzer auffordert, ein Display auszuwählen und die Erlaubnis zur Nutzung dieses Displays zu erteilen.
- {{domxref("PresentationRequest.reconnect()")}} {{Experimental_Inline}}
  - : Wenn die Methode `reconnect(presentationId)` auf einem `PresentationRequest` _presentationRequest_ aufgerufen wird, _MUSS_ der [User Agent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) die folgenden Schritte ausführen, um _die Verbindung zu einer Präsentation wiederherzustellen_.
- {{domxref("PresentationRequest.getAvailability()")}} {{Experimental_Inline}}
  - : Wenn die Methode `getAvailability()` aufgerufen wird, _MUSS_ der Benutzeragent die Schritte wie im Link beschrieben ausführen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
