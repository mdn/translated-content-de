---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: e3f43c5cbd93635407902fb7fd9615a69447a3e6
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die für Entwickler relevant sind. Firefox 136 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in bearbeitbaren Textelementen einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elemente, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben. Das spezifische Autokorrekturverhalten hängt vom User-Agent und dem zugrunde liegenden Betriebssystem ab. ([Firefox-Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Rich-Text-Formatierung ist deaktiviert und jede Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox-Bug 1922724](https://bugzil.la/1922724)).

#### Entfernungen

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalte zu einem {{HTMLElement("slot")}}-Element hinzugefügt haben, wenn ein [Web-Component](/de/docs/Web/API/Web_components) gerendert wird ([Firefox-Bug 1940691](https://bugzil.la/1940691)).
- Die Pseudoklasse [`:open`](/de/docs/Web/CSS/:open) wird jetzt unterstützt und ermöglicht die Auswahl jedes Elements, das derzeit in einem offenen Zustand ist. Dies gilt für die {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die ein Dropdownfeld präsentieren. ([Firefox-Bug 1936113](https://bugzil.la/1936113)).

#### Entfernungen

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt, was die lokalisierungssensible Formatierung von Zeitdauern ermöglicht. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt in Anfragen gesendet, die einer Seitenaktualisierung folgen, die zu einer neuen Seite umleitet (wenn dies von der {{httpheader("Referrer-Policy")}} erlaubt ist), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL gesetzt, nachdem navigiert wurde.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Antwortheader oder das entsprechende {{htmlelement("meta")}} in Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass same-page Aktualisierungen als Navigation zu einem Seitenfragment behandelt werden: da die Seite nicht neu angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox-Bug 1928291](https://bugzil.la/1928291))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Schemes/data) wurde von 32MB auf 512MB erhöht, um das Limit der Chromium-Browser zu erreichen ([Firefox-Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox-Bug 1937477](https://bugzil.la/1937477)). Dazu gehören:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change` event](/de/docs/Web/API/CookieStore/change_event) (und seine Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Hauptthread- und Service-Worker-Kontext ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass während jeder der unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden kann, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte, und im `change`-Event, alle Eigenschaften außer `name` und `value` weglassen (entspricht den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager), und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Komformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen jetzt mit einem Fehler ab, wenn das Menüeintrag nicht existiert. Bisher wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 136 enthalten, aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als Eigenschaft {{jsxref("Error.stack")}}.
  Hauptanwendungsfall ist das Installieren eines Stack-Trace auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox-Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data) Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) oder `*` genutzt werden, um den Browser-Cache zu leeren.
  ([Firefox-Bug 1942272](https://bugzil.la/1942272)).

## Ältere Versionen

{{Firefox_for_developers}}
