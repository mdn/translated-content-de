---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{DefaultAPISidebar("Fetch API")}} {{AvailableInWorkers}}

Die Fetch API bietet eine Schnittstelle zum Abrufen von Ressourcen (einschließlich über das Netzwerk). Sie ist ein leistungsfähigerer und flexiblerer Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Konzepte und Verwendung

Die Fetch API verwendet [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Objekte (und andere Dinge, die mit Netzwerkanforderungen zu tun haben), sowie verwandte Konzepte wie CORS und die HTTP-Origin-Header-Semantik.

Um eine Anforderung zu stellen und eine Ressource abzurufen, verwenden Sie die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode. Diese Methode ist global sowohl im [`Window`](/de/docs/Web/API/Window)-Kontext als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext verfügbar. Dadurch ist sie in nahezu jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die `fetch()`-Methode nimmt ein obligatorisches Argument, den Pfad zur abzurufenden Ressource. Sie gibt ein {{JSxRef("Promise")}} zurück, das auf die [`Response`](/de/docs/Web/API/Response) dieser Anforderung aufgelöst wird — sobald der Server mit Headern antwortet — **selbst wenn die Serverantwort ein HTTP-Fehlerstatus ist**. Sie können auch optional ein `init'-Optionsobjekt als zweites Argument übergeben (siehe [`Request`](/de/docs/Web/API/Request)).

Sobald eine [`Response`](/de/docs/Web/API/Response) abgerufen wurde, gibt es eine Reihe von Methoden, um festzulegen, was der Inhalt des Körpers ist und wie er behandelt werden soll.

Sie können eine Anforderung und Antwort direkt mit den Konstruktoren [`Request()`](/de/docs/Web/API/Request/Request) und [`Response()`](/de/docs/Web/API/Response/Response) erstellen, aber es ist selten, dies direkt zu tun. Stattdessen werden sie eher als Ergebnisse anderer API-Aktionen erstellt (zum Beispiel [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) von Service Workern).

Erfahren Sie mehr über die Verwendung der Funktionen der Fetch API in [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch).

## Fetch-Schnittstellen

- [`Window.fetch()`](/de/docs/Web/API/Window/fetch) und [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Die `fetch()`-Methode, die zum Abrufen einer Ressource verwendet wird.
- [`Headers`](/de/docs/Web/API/Headers)
  - : Stellt Antwort-/Anforderungs-Header dar und ermöglicht es Ihnen, sie abzufragen und je nach Ergebnis unterschiedliche Aktionen durchzuführen.
- [`Request`](/de/docs/Web/API/Request)
  - : Stellt eine Ressourcenanforderung dar.
- [`Response`](/de/docs/Web/API/Response)
  - : Stellt die Antwort auf eine Anforderung dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
