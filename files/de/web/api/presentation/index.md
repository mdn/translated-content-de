---
title: Presentation
slug: Web/API/Presentation
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

**`Presentation`** kann im jeweiligen Kontext für zwei Arten von User Agents definiert sein: einen _steuernden User Agent_ und einen _empfangenden User Agent_.

In einem steuernden Browsing-Kontext bietet die `Presentation`-Schnittstelle einen Mechanismus, um das Standardverhalten des Browsers beim Starten einer Präsentation auf einem externen Bildschirm zu überschreiben. In einem empfangenden Browsing-Kontext ermöglicht die `Presentation`-Schnittstelle den Zugriff auf die verfügbaren Präsentationsverbindungen.

## Instanzeigenschaften

- [`Presentation.defaultRequest`](/de/docs/Web/API/Presentation/defaultRequest) {{Experimental_Inline}}
  - : In einem [steuernden User Agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _MUSS_ das Attribut `defaultRequest` die [Standard-Präsentationsanfrage](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) zurückgeben, sofern eine vorhanden ist, andernfalls `null`. In einem [empfangenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) _MUSS_ es `null` zurückgeben.
- [`Presentation.receiver`](/de/docs/Web/API/Presentation/receiver) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : In einem [empfangenden User Agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) _MUSS_ das Attribut `receiver` die Instanz von [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver) zurückgeben, die dem [empfangenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) zugeordnet ist und vom [empfangenden User Agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) erstellt wurde, als der [empfangende Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) erstellt wurde.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
