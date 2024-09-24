---
title: Fetch-API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{DefaultAPISidebar("Fetch API")}} {{AvailableInWorkers}}

Die Fetch-API bietet eine Schnittstelle zum Abrufen von Ressourcen (einschließlich über das Netzwerk). Sie ist ein leistungsfähigerer und flexiblerer Ersatz für {{DOMxRef("XMLHttpRequest")}}.

## Konzepte und Verwendung

Die Fetch-API verwendet {{DOMxRef("Request")}}- und {{DOMxRef("Response")}}-Objekte (und andere Elemente, die bei Netzwerkanforderungen beteiligt sind) sowie verwandte Konzepte wie CORS und die HTTP-Origin-Header-Semantik.

Um eine Anforderung zu stellen und eine Ressource abzurufen, verwenden Sie die Methode {{domxref("Window/fetch", "fetch()")}}. Sie ist eine globale Methode sowohl im {{DOMxRef("Window")}} als auch im {{DOMxRef("WorkerGlobalScope", "Worker")}} Kontext. Dadurch ist sie in nahezu jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die Methode `fetch()` nimmt ein obligatorisches Argument, den Pfad zur Ressource, die Sie abrufen möchten. Sie gibt ein {{JSxRef("Promise")}} zurück, das sich zur {{DOMxRef("Response")}} auf diese Anforderung auflöst – sobald der Server mit Headern antwortet – **auch wenn die Serverantwort ein HTTP-Fehlerstatus ist**. Optional können Sie als zweites Argument ein `init` Optionsobjekt übergeben (siehe {{DOMxRef("Request")}}).

Sobald eine {{DOMxRef("Response")}} abgerufen wurde, stehen eine Reihe von Methoden zur Verfügung, um zu definieren, was der Inhalt des Körpers ist und wie er behandelt werden soll.

Sie können eine Anforderung und Antwort direkt mit den Konstruktoren {{DOMxRef("Request.Request", "Request()")}} und {{DOMxRef("Response.Response", "Response()")}} erstellen, aber es ist unüblich, dies direkt zu tun. Stattdessen werden sie eher als Ergebnisse anderer API-Aktionen erstellt (zum Beispiel {{DOMxRef("FetchEvent.respondWith()")}} von Service-Workern).

Erfahren Sie mehr über die Verwendung der Fetch-API-Funktionen in [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch).

## Fetch-Schnittstellen

- {{domxref("Window/fetch", "fetch()")}}
  - : Die Methode `fetch()`, die zum Abrufen einer Ressource verwendet wird.
- {{DOMxRef("Headers")}}
  - : Repräsentiert Antwort-/Anforderungsheader und ermöglicht es Ihnen, sie abzufragen und je nach Ergebnis unterschiedliche Aktionen durchzuführen.
- {{DOMxRef("Request")}}
  - : Repräsentiert eine Ressource-Anforderung.
- {{DOMxRef("Response")}}
  - : Repräsentiert die Antwort auf eine Anforderung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
