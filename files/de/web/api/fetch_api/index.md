---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{DefaultAPISidebar("Fetch API")}}

Die Fetch API bietet eine Schnittstelle zum Abrufen von Ressourcen (einschließlich über das Netzwerk). Sie ist ein leistungsstärkerer und flexiblerer Ersatz für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Konzepte und Nutzung

Die Fetch API verwendet [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Objekte (sowie andere Dinge, die mit Netzwerk-Anfragen zu tun haben) und verwandte Konzepte wie CORS und die HTTP Origin-Header-Semantik.

Zum Ausführen einer Anfrage und Abrufen einer Ressource verwenden Sie die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode. Sie ist eine globale Methode im Kontext von sowohl [`Window`](/de/docs/Web/API/Window) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope). Das macht sie in praktisch jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die `fetch()`-Methode erfordert ein obligatorisches Argument: den Pfad zur Ressource, die Sie abrufen möchten. Sie gibt ein {{JSxRef("Promise")}} zurück, das zur [`Response`](/de/docs/Web/API/Response) dieser Anfrage aufgelöst wird – sobald der Server mit den Headern antwortet – **selbst wenn die Serverantwort einen HTTP-Fehlerstatus hat**. Optional können Sie auch ein `init`-Optionsobjekt als zweites Argument übergeben (siehe [`Request`](/de/docs/Web/API/Request)).

Sobald eine [`Response`](/de/docs/Web/API/Response) abgerufen wird, stehen mehrere Methoden zur Verfügung, um zu definieren, was der Inhaltskörper ist und wie er behandelt werden sollte.

Sie können eine Anfrage und Antwort direkt mit den Konstruktoren [`Request()`](/de/docs/Web/API/Request/Request) und [`Response()`](/de/docs/Web/API/Response/Response) erstellen, aber es ist unüblich, dies direkt zu tun. Stattdessen werden diese eher als Ergebnisse anderer API-Aktionen erstellt (zum Beispiel [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) aus Service-Worker-Aktionen).

Erfahren Sie mehr über die Verwendung der Fetch API-Funktionen in [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch).

### Deferred Fetch

Die [`fetchLater()`](/de/docs/Web/API/Window/fetchLater)-API ermöglicht es einem Entwickler, einen _aufgeschobenen Abruf_ anzufordern, der nach einer bestimmten Zeit oder wenn die Seite geschlossen oder weg navigiert wird, gesendet werden kann. Siehe [Verwendung von Deferred Fetch](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch).

## Schnittstellen

- [`Window.fetch()`](/de/docs/Web/API/Window/fetch) und [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Die `fetch()`-Methode, die zum Abrufen einer Ressource verwendet wird.
- [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater)
  - : Wird verwendet, um eine aufgeschobene Abrufanforderung zu stellen.
- [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)
  - : Repräsentiert die Menge an Optionen, die verwendet werden können, um eine aufgeschobene Abrufanforderung zu konfigurieren.
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
  - : Repräsentiert das Ergebnis der Anforderung eines aufgeschobenen Abrufs.
- [`Headers`](/de/docs/Web/API/Headers)
  - : Repräsentiert Antwort-/Anfrageheader, die Sie abfragen und abhängig von den Ergebnissen unterschiedliche Aktionen ausführen können.
- [`Request`](/de/docs/Web/API/Request)
  - : Repräsentiert eine Ressourcengebrauchsanfrage.
- [`Response`](/de/docs/Web/API/Response)
  - : Repräsentiert die Antwort auf eine Anfrage.

## HTTP-Header

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : Kontrolliert das [Quota auf höchster Ebene](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für die `fetchLater()`-API.
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : Kontrolliert das [gemeinsame Quota für Cross-Origin-Untersubframes](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für die `fetchLater()`-API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
