---
title: Presentation
slug: Web/API/Presentation
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

Die **`Presentation`** kann im Kontext als zwei mögliche Benutzeragenten definiert werden: _Controlling user agent_ und _Receiving user agent_.

Im kontrollierenden Browsing-Kontext bietet das `Presentation`-Interface einen Mechanismus, um das Standardverhalten des Browsers beim Starten einer Präsentation auf einem externen Bildschirm zu überschreiben. Im empfangenden Browsing-Kontext bietet das `Presentation`-Interface den Zugriff auf die verfügbaren Präsentationsverbindungen.

## Instanz-Eigenschaften

- [`Presentation.defaultRequest`](/de/docs/Web/API/Presentation/defaultRequest) {{Experimental_Inline}}
  - : In einem [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _MUSS_ das `defaultRequest`-Attribut die [default presentation request](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) zurückgeben, falls vorhanden, andernfalls `null`. In einem [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) _MUSS_ es `null` zurückgeben.
- [`Presentation.receiver`](/de/docs/Web/API/Presentation/receiver) {{Experimental_Inline}}
  - : In einem [receiving user agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) _MUSS_ das `receiver`-Attribut die [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)-Instanz zurückgeben, die mit dem [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) verbunden ist und durch den [receiving user agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) erstellt wurde, wenn der [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) erstellt wird.

## Instanz-Methoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
