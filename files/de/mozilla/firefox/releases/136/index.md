---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 5d5299db5672ad4c92f61c2da3ac28d4370517d7
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) erlaubt die Autokorrektur in editierbaren Textelementen einschließlich: der meisten Arten von textbasierten {{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben. Das spezifische Verhalten der Autokorrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Bug 1927977](https://bugzil.la/1927977)).
- Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element editierbar ist; das Formatieren von Rich-Text ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox Bug 1922724](https://bugzil.la/1922724)).

#### Entfernungen

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in einem {{HTMLElement("template")}} zu stylen, die beim Rendern einer [Webkomponente](/de/docs/Web/API/Web_components) Inhalte zu einem {{HTMLElement("slot")}}-Element hinzugefügt haben ([Firefox Bug 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudoklasse wird jetzt unterstützt und erlaubt es Ihnen, jedes Element auszuwählen, das sich derzeit in einem offenen Zustand befindet, dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld präsentieren. ([Firefox Bug 1936113](https://bugzil.la/1936113)).

#### Entfernungen

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird nun unterstützt, was die lokalsensitive Formatierung von Zeitdauern ermöglicht. ([Firefox Bug 1933303](https://bugzil.la/1933303)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird nun bei Anfragen nach einer Seitenaktualisierung, die zu einer neuen Seite umleitet (wenn erlaubt durch die {{httpheader("Referrer-Policy")}}), gesendet und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Verweis-URL gesetzt, nachdem navigiert wurde.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Antwortheader oder ein entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass gleiche Seitenaktualisierungen als gleiche Seitennavigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Bug 1928291](https://bugzil.la/1928291))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Schemes/data) wurde von 32MB auf 512MB erhöht, wodurch das Limit für Chromium-Browser erreicht wird ([Firefox Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die sowohl im Hauptthread als auch in [Servicearbeitern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox Bug 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Das Interface [`CookieStore`](/de/docs/Web/API/CookieStore) zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Hauptthread- und Serviceworker-Kontext ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass, während alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/get) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte sowie im `change`-Ereignis alle Eigenschaften außer `name` und `value` weglassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC kann nun Video codiert mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) senden und empfangen.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden.
  ([Firefox Bug 1944878](https://bugzil.la/1944878) und [Firefox Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von bildschirmgeteiltem Video mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können nun für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardware-beschleunigt ist.
  ([Firefox Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP-Header-Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht codec-unabhängiges Weiterleiten von Simulcast-Streams, auch in Szenarien, bei denen die Nutzlast durchgehend verschlüsselt (E2EE) ist.
  ([Firefox Bug 1945261](https://bugzil.la/1945261)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt WebSocket-Portkonflikte für den RemoteAgent nun effizienter. Wenn der über das `--remote-debugging-port`-Kommandozeilenargument angegebene Port innerhalb von 5 Sekunden nicht zugewiesen werden kann, beispielsweise wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox nun heruntergefahren, anstatt hängen zu bleiben ([Firefox Bug 1927721](https://bugzilla.mozilla.org/show_bug.cgi?id=1927721)).

- Navigationen unter Verwendung des HTTP-Schemas, ausgelöst durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi, werden nicht mehr automatisch auf HTTPS aktualisiert. Diese Anfragen bleiben nun wie beabsichtigt auf HTTP ([Firefox Bug 1943551](https://bugzilla.mozilla.org/show_bug.cgi?id=1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt nun eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um genau die gleichen, zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement zu treffen. Dies hilft, unbeabsichtigte Nebenwirkungen zu vermeiden, wenn mehrere Abonnements existieren, wie z.B. solche, die auf einen bestimmten Tab beschränkt sind ([Firefox Bug 1938576](https://bugzilla.mozilla.org/show_bug.cgi?id=1938576)).

  Hinweis: Die bisherige Logik zum Entfernen von Ereignissen nach Name und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das Feld `userContexts` im Befehl `script.addPreloadScript` hinzugefügt, das es Clients ermöglicht anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browserkontexte, die in solchen angegebenen Benutzerkontexten geöffnet werden ([Firefox Bug 1940927](https://bugzilla.mozilla.org/show_bug.cgi?id=1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun einen vollständig serialisierten Browsing-Kontextbaum zurück, wenn ein Kontext geschlossen wird, einschließlich aller seiner Kindkontexte ([Firefox Bug 1860955](https://bugzilla.mozilla.org/show_bug.cgi?id=1860955)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} schlagen nun mit einem Fehler fehl, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das `Promise` erfüllt. ([Firefox Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist verfügbar. Diese Version der API ist für die Nutzung in Manifext V3-Erweiterungen gedacht und bietet eine breite Kompatibilität mit Chrome, obwohl sich [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox Bug 1943050](https://bugzil.la/1943050)).

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 136 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie den entsprechenden Präferenzwert auf der `about:config`-Seite und setzen Sie ihn auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als die Eigenschaft {{jsxref("Error.stack")}}.
  Der Hauptanwendungsfall besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browsercache zu löschen.
  ([Firefox Bug 1942272](https://bugzil.la/1942272)).

## Ältere Versionen

{{Firefox_for_developers}}
