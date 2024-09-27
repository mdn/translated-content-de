---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{DefaultAPISidebar("Fetch API")}} {{AvailableInWorkers}}

Die Fetch API stellt eine Schnittstelle zum Abrufen von Ressourcen bereit (einschließlich über das Netzwerk). Sie ist ein leistungsfähigerer und flexiblerer Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Konzepte und Verwendung

Die Fetch API verwendet [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Objekte (und andere Elemente, die mit Netzwerkanforderungen zu tun haben), sowie verwandte Konzepte wie CORS und die Semantik des HTTP-Origin-Headers.

Zum Anfordern und Abrufen einer Ressource verwenden Sie die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode. Es handelt sich um eine globale Methode sowohl in [`Window`](/de/docs/Web/API/Window)- als auch in [`Worker`](/de/docs/Web/API/WorkerGlobalScope)-Kontexten. Dadurch ist sie in nahezu jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die `fetch()`-Methode benötigt ein obligatorisches Argument, den Pfad zur Ressource, die Sie abrufen möchten. Sie gibt einen {{JSxRef("Promise")}} zurück, der auf die [`Response`](/de/docs/Web/API/Response) zu dieser Anfrage gelöst wird — sobald der Server mit Headern antwortet — **auch wenn die Serverantwort ein HTTP-Fehlerstatus ist**. Sie können auch optional ein `init`-Optionsobjekt als zweites Argument übergeben (siehe [`Request`](/de/docs/Web/API/Request)).

Sobald eine [`Response`](/de/docs/Web/API/Response) abgerufen wurde, stehen eine Reihe von Methoden zur Verfügung, um zu definieren, was der Inhalt des Körpers ist und wie er behandelt werden soll.

Sie können eine Anfrage und Antwort direkt mithilfe der [`Request()`](/de/docs/Web/API/Request/Request)- und [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktoren erstellen, aber es ist unüblich, dies direkt zu tun. Stattdessen werden sie eher als Ergebnisse anderer API-Aktionen erstellt (zum Beispiel [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) von Service-Workern).

Erfahren Sie mehr über die Nutzung der Fetch API-Funktionen unter [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch).

## Fetch-Schnittstellen

- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die `fetch()`-Methode, die verwendet wird, um eine Ressource abzurufen.
- [`Headers`](/de/docs/Web/API/Headers)
  - : Stellt Antwort-/Anforderungs-Header dar, die es Ihnen ermöglichen, sie abzufragen und unterschiedliche Aktionen basierend auf den Ergebnissen durchzuführen.
- [`Request`](/de/docs/Web/API/Request)
  - : Stellt eine Ressourcenanfrage dar.
- [`Response`](/de/docs/Web/API/Response)
  - : Stellt die Antwort auf eine Anfrage dar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
