---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{DefaultAPISidebar("Fetch API")}} {{AvailableInWorkers}}

Die Fetch API bietet eine Schnittstelle zum Abrufen von Ressourcen (einschließlich über das Netzwerk). Sie ist ein leistungsfähigerer und flexiblerer Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Konzepte und Nutzung

Die Fetch API verwendet [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Objekte (und andere Elemente, die mit Netzwerkanforderungen verbunden sind) sowie verwandte Konzepte wie CORS und die Semantik des HTTP-Origin-Headers.

Um eine Anforderung zu stellen und eine Ressource abzurufen, verwenden Sie die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode. Sie ist eine globale Methode sowohl in den [`Window`](/de/docs/Web/API/Window)- als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontexten. Dies macht sie in nahezu jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die `fetch()`-Methode erfordert ein obligatorisches Argument, den Pfad zur Ressource, die Sie abrufen möchten. Sie gibt ein {{JSxRef("Promise")}} zurück, das auf die [`Response`](/de/docs/Web/API/Response) auf diese Anforderung aufgelöst wird — sobald der Server mit Headern antwortet — **auch wenn die Serverantwort einen HTTP-Fehlerstatus hat**. Sie können optional auch ein `init`-Optionsobjekt als zweites Argument übergeben (siehe [`Request`](/de/docs/Web/API/Request)).

Sobald eine [`Response`](/de/docs/Web/API/Response) abgerufen wurde, stehen eine Reihe von Methoden zur Verfügung, um festzulegen, was der Inhalt des Bodys ist und wie er behandelt werden soll.

Sie können eine Anforderung und Antwort direkt mit den Konstruktoren [`Request()`](/de/docs/Web/API/Request/Request) und [`Response()`](/de/docs/Web/API/Response/Response) erstellen, aber es ist unüblich, dies direkt zu tun. Stattdessen werden diese eher als Ergebnisse anderer API-Aktionen erstellt (zum Beispiel [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) von Service Workern).

Erfahren Sie mehr über die Verwendung der Fetch-API-Funktionen unter [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch).

## Fetch-Schnittstellen

- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die `fetch()`-Methode, die zum Abrufen einer Ressource verwendet wird.
- [`Headers`](/de/docs/Web/API/Headers)
  - : Repräsentiert Antwort-/Anforderungsheader, mit denen Sie diese abfragen und je nach Ergebnis verschiedene Aktionen durchführen können.
- [`Request`](/de/docs/Web/API/Request)
  - : Repräsentiert eine Ressourcenanforderung.
- [`Response`](/de/docs/Web/API/Response)
  - : Repräsentiert die Antwort auf eine Anforderung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
