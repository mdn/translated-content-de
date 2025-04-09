---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{DefaultAPISidebar("Fetch API")}} {{AvailableInWorkers}}

Die Fetch API bietet eine Schnittstelle zum Abrufen von Ressourcen (einschließlich über das Netzwerk). Sie ist ein leistungsfähigerer und flexiblerer Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Konzepte und Nutzung

Die Fetch API verwendet [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Objekte (und andere Dinge, die mit Netzwerkanfragen verbunden sind), sowie verwandte Konzepte wie CORS und die Semantik des HTTP-Origin-Headers.

Um eine Anfrage zu stellen und eine Ressource abzurufen, verwenden Sie die Methode [`fetch()`](/de/docs/Web/API/Window/fetch). Es ist eine globale Methode sowohl im [`Window`](/de/docs/Web/API/Window)- als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontext. Dies macht sie in so ziemlich jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die `fetch()`-Methode erfordert ein obligatorisches Argument, den Pfad zu der Ressource, die Sie abrufen möchten. Sie gibt ein {{JSxRef("Promise")}} zurück, das zur [`Response`](/de/docs/Web/API/Response) auf diese Anfrage aufgelöst wird – sobald der Server mit den Headern antwortet – **auch wenn die Serverantwort ein HTTP-Fehlerstatus ist**. Sie können optional auch ein `init`-Optionsobjekt als zweites Argument übergeben (siehe [`Request`](/de/docs/Web/API/Request)).

Sobald eine [`Response`](/de/docs/Web/API/Response) abgerufen wurde, stehen eine Reihe von Methoden zur Verfügung, um zu definieren, was der Inhalt des Körpers ist und wie damit umgegangen werden soll.

Sie können eine Anfrage und Antwort direkt mit den Konstruktoren [`Request()`](/de/docs/Web/API/Request/Request) und [`Response()`](/de/docs/Web/API/Response/Response) erstellen, aber es ist ungewöhnlich, dies direkt zu tun. Diese werden stattdessen häufiger als Ergebnisse anderer API-Aktionen erstellt (zum Beispiel [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) aus Service Workern).

Erfahren Sie mehr über die Verwendung der Fetch API-Funktionen im [Verwenden von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch).

## Schnittstellen

- [`Window.fetch()`](/de/docs/Web/API/Window/fetch) und [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Die `fetch()`-Methode, die zum Abrufen einer Ressource verwendet wird.
- [`Headers`](/de/docs/Web/API/Headers)
  - : Repräsentiert Antwort-/Anfrage-Header und ermöglicht es Ihnen, sie abzufragen und je nach Ergebnis unterschiedliche Aktionen durchzuführen.
- [`Request`](/de/docs/Web/API/Request)
  - : Repräsentiert eine Ressourcenanforderung.
- [`Response`](/de/docs/Web/API/Response)
  - : Repräsentiert die Antwort auf eine Anfrage.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
