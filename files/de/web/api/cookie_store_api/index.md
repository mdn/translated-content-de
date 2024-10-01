---
title: Cookie Store API
slug: Web/API/Cookie_Store_API
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **Cookie Store API** ist eine asynchrone API zum Verwalten von Cookies, die in Fenstern und auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar ist.

## Konzepte und Verwendung

Die bestehende Methode zum Abrufen und Setzen von Cookies umfasst die Arbeit mit [`document.cookie`](/de/docs/Web/API/Document/cookie) als Zeichenfolge von Schlüssel/Wert-Paaren. Neben der Tatsache, dass dies umständlich und fehleranfällig ist, gibt es auch eine Reihe von Problemen im Kontext der modernen Webentwicklung.

Die Schnittstelle `document.cookie` ist {{Glossary("synchronous", "synchron")}}, single-threaded und blockierend. Beim Schreiben eines Cookies müssen Sie warten, bis der Browser die Zeichenfolge aller Cookies aktualisiert hat. Zudem bedeutet die Abhängigkeit von [`document`](/de/docs/Web/API/Document), dass Cookies von Service-Workern, die nicht auf das `document`-Objekt zugreifen können, nicht erreicht werden können.

Die _Cookie Store API_ bietet eine aktualisierte Methode zum Verwalten von Cookies. Sie ist {{Glossary("asynchronous", "asynchron")}} und basiert auf Versprechen, sodass sie die Ereignisschleife nicht blockiert. Sie ist unabhängig von [`document`](/de/docs/Web/API/Document) und steht daher Service-Workern zur Verfügung. Die Methoden zum Abrufen und Setzen von Cookies bieten außerdem durch Fehlermeldungen mehr Feedback. Dies bedeutet, dass Webentwickler nicht ein Cookie setzen und dann sofort zurücklesen müssen, um zu überprüfen, ob das Setzen erfolgreich war.

## Schnittstellen

- [`CookieStore`](/de/docs/Web/API/CookieStore) {{Experimental_Inline}}
  - : Die Schnittstelle `CookieStore` ermöglicht das Abrufen und Setzen von Cookies.
- [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) {{Experimental_Inline}}
  - : Die Schnittstelle `CookieStoreManager` bietet eine Registrierung für Service-Worker, um ihnen zu ermöglichen, sich für Ereignisse zu Cookie-Änderungen zu registrieren.
- [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) {{Experimental_Inline}}
  - : Ein `CookieChangeEvent` mit dem Namen `change` wird gegen `CookieStore`-Objekte in [`Window`](/de/docs/Web/API/Window)-Kontexten ausgelöst, wenn skript-sichtbare Cookie-Änderungen auftreten.
- [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)
  - : Ein `ExtendableCookieChangeEvent` mit dem Namen `cookiechange` wird in [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Kontexten ausgelöst, wenn skript-sichtbare Cookie-Änderungen auftreten, die der Cookie-Änderungs-Abonnementliste des Service-Workers entsprechen.

### Erweiterungen zu anderen Schnittstellen

- [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das mit dem Service-Worker verbundene [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt zurück.
- [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die Schnittstelle [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) zurück, die es einer Web-App ermöglicht, sich für Cookie-Änderungsereignisse zu registrieren und diese abzubestellen.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Cookie-Änderungen aufgetreten sind, die der Cookie-Änderungs-Abonnementliste des Service-Workers entsprechen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
