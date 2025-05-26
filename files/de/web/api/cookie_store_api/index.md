---
title: Cookie Store API
slug: Web/API/Cookie_Store_API
l10n:
  sourceCommit: b30a619902914a5444ad075de601790933edc84f
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **Cookie Store API** ist eine asynchrone API zur Verwaltung von Cookies, die in Fenstern und auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar ist.

## Konzepte und Nutzung

Die ursprüngliche Methode zum Abrufen und Setzen von Cookies beinhaltet die Arbeit mit [`document.cookie`](/de/docs/Web/API/Document/cookie), um Cookie-Informationen als Zeichenfolge von Schlüssel/Wert-Paaren zu lesen und zu schreiben. Zusätzlich zu der Tatsache, dass dies umständlich und fehleranfällig ist, gibt es auch eine Reihe von Problemen im Kontext der modernen Webentwicklung.

Das `document.cookie`-Interface ist {{Glossary("synchronous", "synchron")}}, single-threaded und blockierend. Beim Schreiben eines Cookies müssen Sie warten, bis der Browser die Zeichenfolge aller Cookies aktualisiert hat. Darüber hinaus bedeutet die Abhängigkeit von [`document`](/de/docs/Web/API/Document), dass Service Worker auf Cookies nicht zugreifen können, da sie das `document`-Objekt nicht erreichen können.

Die _Cookie Store API_ bietet eine aktualisierte Methode zur Verwaltung von Cookies. Sie ist {{Glossary("asynchronous", "asynchron")}} und versprochenbasiert, blockiert daher nicht die Ereignisschleife. Sie ist nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen und somit für Service Worker verfügbar. Die Methoden zum Abrufen und Setzen von Cookies bieten auch mehr Rückmeldungen durch Fehlermeldungen. Das bedeutet, dass Webentwickler nicht ein Cookie setzen und es dann sofort wieder lesend prüfen müssen, um sicherzustellen, dass das Setzen erfolgreich war.

## Schnittstellen

- [`CookieStore`](/de/docs/Web/API/CookieStore) {{Experimental_Inline}}
  - : Das `CookieStore`-Interface ermöglicht das Abrufen und Setzen von Cookies.
- [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) {{Experimental_Inline}}
  - : Das `CookieStoreManager`-Interface bietet eine Registrierung für Service Worker, um es diesen zu ermöglichen, Cookie-Änderungsereignisse zu abonnieren.
- [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) {{Experimental_Inline}}
  - : Ein `CookieChangeEvent` mit dem Namen `change` wird in `CookieStore`-Objekten in [`Window`](/de/docs/Web/API/Window)-Kontexten ausgelöst, wenn Änderungen an skript-sichtbaren Cookies auftreten.
- [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)
  - : Ein `ExtendableCookieChangeEvent` mit dem Namen `cookiechange` wird in [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Kontexten ausgelöst, wenn Änderungen an skript-sichtbaren Cookies auftreten, die mit der Änderungsabonnementliste des Service Workers übereinstimmen.

### Erweiterungen zu anderen Schnittstellen

- [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt zurück, das mit dem Service Worker verknüpft ist.
- [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Interface zurück, das es einer Web-App ermöglicht, Cookie-Änderungsereignisse zu abonnieren und sich von ihnen abzumelden.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) event {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Änderungen an Cookies auftreten, die mit der Änderungsabonnementliste des Service Workers übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
