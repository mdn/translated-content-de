---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{DefaultAPISidebar("Fetch API")}}

Die Fetch API bietet eine Schnittstelle zum Abrufen von Ressourcen (auch über das Netzwerk). Sie ist ein mächtigerer und flexiblerer Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Konzepte und Verwendung

Die Fetch API verwendet [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) Objekte (und andere Dinge im Zusammenhang mit Netzwerk-Anfragen), sowie verwandte Konzepte wie CORS und die Semantik des HTTP Origin-Headers.

Um eine Anfrage zu stellen und eine Ressource abzurufen, nutzen Sie die [`fetch()`](/de/docs/Web/API/Window/fetch) Methode. Diese ist eine globale Methode sowohl im [`Window`](/de/docs/Web/API/Window) als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope) Kontext. Dadurch ist sie in fast jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die `fetch()` Methode benötigt ein obligatorisches Argument, den Pfad zu der Ressource, die Sie abrufen möchten. Sie gibt ein {{JSxRef("Promise")}} zurück, das auf die [`Response`](/de/docs/Web/API/Response) dieser Anfrage auflöst — sobald der Server mit Headers antwortet — **selbst wenn der Server mit einem HTTP-Fehlerstatus antwortet**. Sie können optional auch ein `init`-Optionsobjekt als zweites Argument übergeben (siehe [`Request`](/de/docs/Web/API/Request)).

Sobald eine [`Response`](/de/docs/Web/API/Response) abgerufen ist, stehen zahlreiche Methoden zur Verfügung, um zu definieren, was der Body-Inhalt ist und wie er behandelt werden sollte.

Sie können eine Anfrage und Antwort direkt über die Konstruktoren [`Request()`](/de/docs/Web/API/Request/Request) und [`Response()`](/de/docs/Web/API/Response/Response) erstellen, aber es ist ungewöhnlich, dies direkt zu tun. Stattdessen werden diese eher als Ergebnis anderer API-Aktionen erstellt (zum Beispiel, [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) von Service Workern).

Erfahren Sie mehr über die Verwendung der Fetch API-Funktionen in [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch).

### Deferred Fetch

Die [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) API ermöglicht es einem Entwickler, einen _deferred fetch_ anzufordern, der nach einem bestimmten Zeitraum oder wenn die Seite geschlossen oder navigiert wird, gesendet werden kann. Siehe [Using Deferred Fetch](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch).

## Schnittstellen

- [`Window.fetch()`](/de/docs/Web/API/Window/fetch) und [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Die `fetch()` Methode, die verwendet wird, um eine Ressource abzurufen.
- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater)
  - : Wird verwendet, um eine Anfrage für einen verzögerten Abruf zu stellen.
- [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)
  - : Repräsentiert die Menge der Optionen, die verwendet werden können, um eine verzögerte Abrufanfrage zu konfigurieren.
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
  - : Stellt das Ergebnis einer Anfrage für einen verzögerten Abruf dar.
- [`Headers`](/de/docs/Web/API/Headers)
  - : Repräsentiert Antwort-/Anfrage-Header, die es Ihnen ermöglichen, diese abzufragen und je nach Ergebnis unterschiedliche Aktionen durchzuführen.
- [`Request`](/de/docs/Web/API/Request)
  - : Repräsentiert eine Ressourcenanfrage.
- [`Response`](/de/docs/Web/API/Response)
  - : Repräsentiert die Antwort auf eine Anfrage.

## HTTP-Header

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : Kontrolliert das [Top-Level-Kontingent](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für die `fetchLater()` API.
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : Kontrolliert das [geteilte Cross-Origin-Subframe-Kontingent](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für die `fetchLater()` API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
- [Zugriff auf lokale Netzwerke](/de/docs/Web/Security/Defenses/Local_network_access)
