---
title: PresentationRequest
slug: Web/API/PresentationRequest
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Ein `PresentationRequest`-Objekt wird verwendet, um eine Präsentation zu initiieren oder wiederherzustellen, die von einem [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) erstellt wurde. Das `PresentationRequest`-Objekt _MUSS_ in einem [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) implementiert werden, der von einem [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) bereitgestellt wird.

Wenn ein `PresentationRequest` konstruiert wird, _MÜSSEN_ die angegebenen `urls` als die Liste der _präsentationsanforderungs-URLs_ verwendet werden, die jeweils eine mögliche [presentation URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) für die `PresentationRequest`-Instanz sind.

{{InheritanceDiagram}}

## Konstruktor

- [`PresentationRequest()`](/de/docs/Web/API/PresentationRequest/PresentationRequest) {{Experimental_Inline}}
  - : Erstellt eine `PresentationRequest`.

## Instanzeigenschaften

Keine

## Instanzmethoden

- [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das mit einer [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) aufgelöst wird, nachdem der Benutzeragent den Benutzer auffordert, ein Display auszuwählen und die Erlaubnis zur Nutzung dieses Displays zu erteilen.
- [`PresentationRequest.reconnect()`](/de/docs/Web/API/PresentationRequest/reconnect) {{Experimental_Inline}}
  - : Wenn die `reconnect(presentationId)`-Methode auf einem `PresentationRequest` _presentationRequest_ aufgerufen wird, _MUSS_ der [user agent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) die Schritte ausführen, um sich _wieder mit einer Präsentation zu verbinden_.
- [`PresentationRequest.getAvailability()`](/de/docs/Web/API/PresentationRequest/getAvailability) {{Experimental_Inline}}
  - : Wenn die `getAvailability()`-Methode aufgerufen wird, _MUSS_ der Benutzeragent die Schritte wie im Link ausführen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
