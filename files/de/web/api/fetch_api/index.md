---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Fetch API")}} {{AvailableInWorkers}}

Die Fetch-API bietet eine Schnittstelle zum Abrufen von Ressourcen (einschließlich über das Netzwerk). Sie ist ein leistungsfähigerer und flexiblerer Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Konzepte und Nutzung

Die Fetch-API verwendet [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Objekte (sowie andere Dinge, die mit Netzwerk-Anfragen zu tun haben), sowie verwandte Konzepte wie CORS und die Semantik des HTTP-Origin-Headers.

Um eine Anfrage zu stellen und eine Ressource abzurufen, verwenden Sie die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode. Sie ist eine globale Methode sowohl in [`Window`](/de/docs/Web/API/Window)- als auch in [`Worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontexten. Dadurch ist sie praktisch in jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die Methode `fetch()` erfordert ein obligatorisches Argument, den Pfad zur Ressource, die Sie abrufen möchten. Sie gibt ein {{JSxRef("Promise")}} zurück, das sich zur [`Response`](/de/docs/Web/API/Response) auf diese Anfrage auflöst — sobald der Server mit Headern antwortet — **sogar wenn die Serverantwort einen HTTP-Fehlerstatus enthält**. Sie können auch optional ein `init`-Optionsobjekt als zweites Argument übergeben (siehe [`Request`](/de/docs/Web/API/Request)).

Sobald eine [`Response`](/de/docs/Web/API/Response) abgerufen wurde, stehen eine Reihe von Methoden zur Verfügung, um zu definieren, was der Inhalt des Körpers ist und wie er behandelt werden soll.

Sie können eine Anfrage und eine Antwort direkt mit den Konstruktoren [`Request()`](/de/docs/Web/API/Request/Request) und [`Response()`](/de/docs/Web/API/Response/Response) erstellen, aber es ist unüblich, dies direkt zu tun. Stattdessen werden diese eher als Ergebnisse anderer API-Aktionen erstellt (zum Beispiel durch [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) von Service-Workern).

Erfahren Sie mehr über die Nutzung der Features der Fetch-API in [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch).

## Fetch-Schnittstellen

- [`Window.fetch()`](/de/docs/Web/API/Window/fetch) und [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Die `fetch()`-Methode, um eine Ressource abzurufen.
- [`Headers`](/de/docs/Web/API/Headers)
  - : Repräsentiert Antwort-/Anfrageheader und ermöglicht es Ihnen, diese abzufragen und unterschiedliche Aktionen je nach Ergebnis zu ergreifen.
- [`Request`](/de/docs/Web/API/Request)
  - : Repräsentiert eine Ressourcenanfrage.
- [`Response`](/de/docs/Web/API/Response)
  - : Repräsentiert die Antwort auf eine Anfrage.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
