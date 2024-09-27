---
title: PresentationRequest
slug: Web/API/PresentationRequest
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

```yaml
title: PresentationRequest
slug: Web/API/PresentationRequest
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PresentationRequest
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Ein `PresentationRequest`-Objekt wird verwendet, um eine Präsentation zu initiieren oder wieder mit einer Präsentation zu verbinden, die von einem [kontrollierenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) durchgeführt wird. Das `PresentationRequest`-Objekt _MUSS_ in einem [kontrollierenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) implementiert werden, der von einem [kontrollierenden Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) bereitgestellt wird.

Wenn ein `PresentationRequest` konstruiert wird, _MÜSSEN_ die angegebenen `urls` als Liste der _Präsentationsanforderungs-URLs_ verwendet werden, welche jeweils eine mögliche [Präsentations-URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) für die `PresentationRequest`-Instanz sind.

{{InheritanceDiagram}}

## Konstruktor

- [`PresentationRequest()`](/de/docs/Web/API/PresentationRequest/PresentationRequest) {{Experimental_Inline}}
  - : Erstellt einen `PresentationRequest`.

## Instanz-Eigenschaften

Keine

## Instanz-Methoden

- [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das mit einer [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) aufgelöst wird, nachdem der Benutzeragent den Benutzer dazu auffordert, ein Display auszuwählen und die Berechtigung zur Verwendung dieses Displays zu erteilen.
- [`PresentationRequest.reconnect()`](/de/docs/Web/API/PresentationRequest/reconnect) {{Experimental_Inline}}
  - : Wenn die Methode `reconnect(presentationId)` auf einem `PresentationRequest` _presentationRequest_ aufgerufen wird, _MUSS_ der [Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) die folgenden Schritte ausführen, um eine _Verbindung zu einer Präsentation wiederherzustellen_.
- [`PresentationRequest.getAvailability()`](/de/docs/Web/API/PresentationRequest/getAvailability) {{Experimental_Inline}}
  - : Wenn die Methode `getAvailability()` aufgerufen wird, _MUSS_ der Benutzeragent die Schritte gemäß dem Link ausführen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
```
