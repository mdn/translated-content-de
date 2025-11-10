---
title: Cookie Store API
slug: Web/API/Cookie_Store_API
l10n:
  sourceCommit: b87a7ca843b0762664c660ec916e42a3e6afd4d9
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **Cookie Store API** ist eine asynchrone API zum Verwalten von Cookies, die sowohl in Fenstern als auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar ist.

## Konzepte und Anwendung

Die ursprüngliche Methode zum Abrufen und Setzen von Cookies besteht darin, mit [`document.cookie`](/de/docs/Web/API/Document/cookie) zu arbeiten, um Cookie-Informationen als Zeichenkette von Schlüssel/Wert-Paaren zu erhalten und zu setzen.
Zusätzlich zu dieser umständlichen und fehleranfälligen Methode gibt es in der modernen Webentwicklung eine Reihe von Problemen.

Die `document.cookie`-Schnittstelle ist {{Glossary("synchronous", "synchron")}}, single-threaded und blockierend. Beim Schreiben eines Cookies müssen Sie warten, bis der Browser die Zeichenkette aller Cookies aktualisiert hat. Darüber hinaus können Service-Worker aufgrund der Abhängigkeit von [`document`](/de/docs/Web/API/Document) nicht auf Cookies zugreifen, da sie nicht auf das `document`-Objekt zugreifen können.

Die _Cookie Store API_ bietet eine aktualisierte Methode zum Verwalten von Cookies. Sie ist {{Glossary("asynchronous", "asynchron")}} und basiert auf Promises, blockiert daher nicht die Ereignisschleife. Sie ist nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen und steht somit Service-Workern zur Verfügung. Die Methoden zum Abrufen und Setzen von Cookies bieten auch mehr Rückmeldung in Form von Fehlermeldungen. Das bedeutet, dass Webentwickler nicht sofort ein Cookie setzen und dann zurücklesen müssen, um sicherzustellen, dass das Setzen erfolgreich war.

## Schnittstellen

- [`CookieStore`](/de/docs/Web/API/CookieStore) {{Experimental_Inline}}
  - : Die `CookieStore`-Schnittstelle ermöglicht das Abrufen und Setzen von Cookies.
- [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) {{Experimental_Inline}}
  - : Die `CookieStoreManager`-Schnittstelle bietet eine Service-Worker-Registrierung, um Service-Worker in die Lage zu versetzen, sich für Cookie-Änderungsereignisse anzumelden.
- [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) {{Experimental_Inline}}
  - : Ein `CookieChangeEvent` mit dem Namen `change` wird gegen `CookieStore`-Objekte in [`Window`](/de/docs/Web/API/Window)-Kontexten ausgelöst, wenn sichtbare Skript-Cookie-Änderungen auftreten.
- [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)
  - : Ein `ExtendableCookieChangeEvent` mit dem Namen `cookiechange` wird in [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Kontexten ausgelöst, wenn sichtbare Skript-Cookie-Änderungen auftreten, die mit der Cookie-Änderungsabonnementliste des Service-Workers übereinstimmen.

### Erweiterungen zu anderen Schnittstellen

- [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt zurück, das dem Service-Worker zugeordnet ist.
- [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf die [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Schnittstelle zurück, die es einer Web-Anwendung ermöglicht, sich für Cookie-Änderungsereignisse an- und abzumelden.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event)-Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Cookie-Änderungen aufgetreten sind, die mit der Cookie-Änderungsabonnementliste des Service-Workers übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
