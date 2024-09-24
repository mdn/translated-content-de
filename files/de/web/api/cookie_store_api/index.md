---
title: Cookie-Store-API
slug: Web/API/Cookie_Store_API
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **Cookie-Store-API** ist eine asynchrone API zur Verwaltung von Cookies, verfügbar in Fenstern und auch in [Service Workern](/de/docs/Web/API/Service_Worker_API).

## Konzepte und Nutzung

Die bestehende Methode zum Abrufen und Setzen von Cookies beinhaltet die Arbeit mit {{domxref("document.cookie")}} als Zeichenkette von Schlüssel/Wert-Paaren. Neben der Tatsache, dass dies umständlich und fehleranfällig ist, bringt es im Kontext der modernen Webentwicklung eine Reihe von Problemen mit sich.

Die `document.cookie`-Schnittstelle ist {{Glossary("synchronous")}}, einsträngig und blockierend. Beim Schreiben eines Cookies müssen Sie darauf warten, dass der Browser die Zeichenkette aller Cookies aktualisiert. Darüber hinaus bedeutet die Abhängigkeit von {{domxref("document")}}, dass Cookies von Service Workern, die nicht auf das `document`-Objekt zugreifen können, nicht aufgerufen werden können.

Die _Cookie-Store-API_ bietet eine aktualisierte Methode zur Verwaltung von Cookies. Sie ist {{Glossary("asynchronous")}} und auf Versprechen basierend, blockiert also nicht die Ereignisschleife. Sie ist nicht auf {{domxref("document")}} angewiesen und daher für Service Worker verfügbar. Die Methoden zum Abrufen und Setzen von Cookies bieten auch mehr Rückmeldung in Form von Fehlermeldungen. Dies bedeutet, dass Web-Entwickler nicht sofort ein Cookie setzen und dann zurücklesen müssen, um zu überprüfen, ob das Setzen erfolgreich war.

## Schnittstellen

- {{domxref("CookieStore")}} {{Experimental_Inline}}
  - : Die `CookieStore`-Schnittstelle ermöglicht das Abrufen und Setzen von Cookies.
- {{domxref("CookieStoreManager")}} {{Experimental_Inline}}
  - : Die `CookieStoreManager`-Schnittstelle bietet eine Registrierung für den Service Worker, um es Service Workern zu ermöglichen, sich für Cookie-Änderungsereignisse anzumelden.
- {{domxref("CookieChangeEvent")}} {{Experimental_Inline}}
  - : Ein `CookieChangeEvent` mit dem Namen `change` wird in `CookieStore`-Objekten im {{domxref("Window")}}-Kontext ausgelöst, wenn Skript-sichtbare Cookie-Änderungen auftreten.
- {{domxref("ExtendableCookieChangeEvent")}}
  - : Ein `ExtendableCookieChangeEvent` mit dem Namen `cookiechange` wird im {{domxref("ServiceWorkerGlobalScope")}}-Kontext ausgelöst, wenn Skript-sichtbare Cookie-Änderungen auftreten, die mit der Cookie-Änderungsabonnementliste des Service Workers übereinstimmen.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("ServiceWorkerGlobalScope.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf das {{domxref("CookieStore")}}-Objekt zurück, das mit dem Service Worker verbunden ist.
- {{domxref("ServiceWorkerRegistration.cookies")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf die {{domxref("CookieStoreManager")}}-Schnittstelle zurück, die es einer Webanwendung ermöglicht, sich von Cookie-Änderungsereignissen an- und abzumelden.
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf das {{domxref("CookieStore")}}-Objekt für den aktuellen Dokumentkontext zurück.
- {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} Event {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Cookie-Änderungen aufgetreten sind, die mit der Cookie-Änderungsabonnementliste des Service Workers übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
