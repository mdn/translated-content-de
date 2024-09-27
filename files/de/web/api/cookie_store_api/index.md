---
title: Cookie Store API
slug: Web/API/Cookie_Store_API
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **Cookie Store API** ist eine asynchrone API zur Verwaltung von Cookies, die sowohl in Fenstern als auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar ist.

## Konzepte und Verwendung

Die vorhandene Methode zum Abrufen und Setzen von Cookies beinhaltet die Arbeit mit [`document.cookie`](/de/docs/Web/API/Document/cookie) als Zeichenfolge von Schlüssel/Wert-Paaren. Diese Methode ist nicht nur umständlich und fehleranfällig, sondern weist auch eine Reihe von Problemen im Kontext der modernen Webentwicklung auf.

Das `document.cookie`-Interface ist [synchron](/de/docs/Glossary/synchronous), einzelfädig und blockierend. Beim Schreiben eines Cookies muss man warten, bis der Browser die Zeichenfolge aller Cookies aktualisiert. Darüber hinaus bedeutet die Abhängigkeit von [`document`](/de/docs/Web/API/Document), dass Service-Worker nicht auf Cookies zugreifen können, da sie das `document`-Objekt nicht verwenden können.

Die _Cookie Store API_ bietet eine aktualisierte Methode zur Verwaltung von Cookies. Sie ist [asynchron](/de/docs/Glossary/asynchronous) und basiert auf Promises, blockiert daher nicht die Ereignisschleife. Sie ist nicht auf [`document`](/de/docs/Web/API/Document) angewiesen und steht somit auch Service-Workern zur Verfügung. Die Methoden zum Abrufen und Setzen von Cookies bieten darüber hinaus mehr Rückmeldung durch Fehlermeldungen. Das bedeutet, dass Webentwickler nicht sofort nach dem Setzen eines Cookies dieses wieder lesen müssen, um zu überprüfen, ob das Setzen erfolgreich war.

## Schnittstellen

- [`CookieStore`](/de/docs/Web/API/CookieStore) {{Experimental_Inline}}
  - : Das `CookieStore`-Interface ermöglicht das Abrufen und Setzen von Cookies.
- [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) {{Experimental_Inline}}
  - : Das `CookieStoreManager`-Interface bietet eine Service-Worker-Registrierung, um Service-Worker in die Lage zu versetzen, sich für Cookie-Änderungsereignisse zu registrieren.
- [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) {{Experimental_Inline}}
  - : Ein `CookieChangeEvent` namens `change` wird auf `CookieStore`-Objekten in [`Window`](/de/docs/Web/API/Window)-Kontexten ausgelöst, wenn Änderungen bei skript-sichtbaren Cookies auftreten.
- [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent)
  - : Ein `ExtendableCookieChangeEvent` namens `cookiechange` wird in [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Kontexten ausgelöst, wenn Änderungen bei skript-sichtbaren Cookies auftreten, die mit der Cookie-Änderungsabonnementsliste des Service-Workers übereinstimmen.

### Erweiterungen für andere Schnittstellen

- [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt zurück, das dem Service-Worker zugeordnet ist.
- [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Interface zurück, das es einer Web-App ermöglicht, sich für Cookie-Änderungsereignisse zu registrieren oder sich davon abzumelden.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Änderungen bei Cookies aufgetreten sind, die mit der Cookie-Änderungsabonnementsliste des Service-Workers übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
