---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 2b6564bf3bf831ea47bb5c8fffa6b300776090fb
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben. Das spezifische Verhalten der Autokorrektur hängt vom User-Agent und dem zugrunde liegenden Betriebssystem ab. ([Firefox Fehler 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element editierbar ist; Formatierungen im Text sind deaktiviert und jegliche Formatierungen im eingefügten Text werden automatisch entfernt ([Firefox Fehler 1922724](https://bugzil.la/1922724)).

#### Entfernungen

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente im {{HTMLElement("template")}}-Element zu stylen, die bei der Darstellung einer [Webkomponente](/de/docs/Web/API/Web_components) Inhalt zu einem {{HTMLElement("slot")}}-Element hinzugefügt haben ([Firefox Fehler 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudoklasse wird jetzt unterstützt und erlaubt die Auswahl von Elementen, die sich derzeit in einem offenen Zustand befinden. Dies gilt für die {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Auswahlfeld und {{htmlelement("select")}}-Elemente, die eine Dropdown-Box präsentieren. ([Firefox Fehler 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}}-CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farbpunkt und Positionen zwischen 0 und 1. Dies erzeugt eine einfarbige Fläche und wird zum Setzen der {{cssxref("mask")}}-CSS-Eigenschaft verwendet. ([Firefox Fehler 1900530](https://bugzil.la/1900530)).

#### Entfernungen

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht die lokalsensitive Formatierung von Zeitdauern. ([Firefox Fehler 1933303](https://bugzil.la/1933303)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der HTTP-Header {{httpheader("Referer")}} wird jetzt in Anfragen nach einer Seitenaktualisierung gesendet, die zu einer neuen Seite weiterleitet (wenn durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Antwortheader oder ein äquivalentes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass gleiche Seitenaktualisierungen als Navigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Fehler 1928291](https://bugzil.la/1928291))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die maximale Größe von [Data URLs](/de/docs/Web/URI/Schemes/data) wurde von 32 MB auf 512 MB erhöht, um die Grenze mit den Chromium-Browsern anzugleichen ([Firefox Fehler 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde umgesetzt ([Firefox Fehler 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Das Interface [`CookieStore`](/de/docs/Web/API/CookieStore) zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das in Hauptthread- und Service-Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass, während jede der unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden kann, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und im `change`-Ereignis alle Eigenschaften außer `name` und `value` weglassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Interfaces und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager), und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Video, codiert im [AV1-Code](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table), senden und empfangen.
  Beim Senden kann es sowohl für das Senden mehrerer simultaner Versionen derselben Quelle („[simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)“) als auch für Einzelcasts verwendet werden.
  ([Firefox Fehler 1944878](https://bugzil.la/1944878) und [Firefox Fehler 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von Bildschirmfreigabe-Video mit dem [H264-Code](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcasts verwendet werden).
  Beachten Sie, dass der H264-Code auf Android hardwarebeschleunigt ist.
  ([Firefox Fehler 1210175](https://bugzil.la/1210175)).
- Unterstützung von WebRTC für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und ihre Verwendung mit AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht die codecunabhängige Weiterleitung von Simulcast-Streams, auch in Szenarien, in denen die Nutzlast end-to-end verschlüsselt (E2EE) ist.
  ([Firefox Fehler 1945261](https://bugzil.la/1945261)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt WebSocket-Portkonflikte für den RemoteAgent jetzt effizienter. Wenn der Port, der über das `--remote-debugging-port`-Kommandozeilenargument angegeben wurde, nicht innerhalb von 5 Sekunden erlangt werden kann, z.B. wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox jetzt heruntergefahren, anstatt zu hängen ([Firefox Fehler 1927721](https://bugzilla.mozilla.org/show_bug.cgi?id=1927721)).

- Navigationen, die durch das HTTP-Schema ausgelöst und durch den Befehl `WebDriver:Navigate` in Marionette oder `browsingContext.navigate` in WebDriver BiDi initiiert werden, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen bleiben nun auf HTTP, wie beabsichtigt ([Firefox Fehler 1943551](https://bugzilla.mozilla.org/show_bug.cgi?id=1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um gezielt dieselben zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement anzuvisieren. Dies hilft, unbeabsichtigte Nebeneffekte zu vermeiden, wenn mehrere Abonnements existieren, wie zum Beispiel solche, die auf einen bestimmten Tab beschränkt sind ([Firefox Fehler 1938576](https://bugzilla.mozilla.org/show_bug.cgi?id=1938576)).

  Hinweis: Die vorherige Logik zur Entfernung von Ereignissen nach Name und Kontext wurde als veraltet markiert und wird in einer zukünftigen Version entfernt.

- Unterstützung für das Feld `userContexts` im Befehl `script.addPreloadScript` hinzugefügt, welches es Clients ermöglicht, anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browsing-Kontexte, die in solchen angegebenen Benutzerkontexten geöffnet werden ([Firefox Fehler 1940927](https://bugzilla.mozilla.org/show_bug.cgi?id=1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt jetzt einen vollständig serialisierten Browsing-Kontextbaum zurück, wenn ein Kontext geschlossen wird, einschließlich aller seiner Kindkontexte ([Firefox Fehler 1860955](https://bugzilla.mozilla.org/show_bug.cgi?id=1860955)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} und die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} schlagen nun mit einem Fehler fehl, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox Fehler 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist verfügbar. Diese Version der API ist für die Verwendung in Manifest V3-Erweiterungen gedacht und bietet breite Kompatibilität mit Chrome, obwohl [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterschiedlich sind. ([Firefox Fehler 1943050](https://bugzil.la/1943050)).

### Entfernungen

### Sonstiges

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 136 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Eigenschaft `hyphenate-limit-chars`**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}}-CSS-Eigenschaft wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich anzugeben. ([Firefox Fehler 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptanwendungsfall ist das Installieren eines Stack-Traces auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox Fehler 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu leeren.
  ([Firefox Fehler 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}}-SVG-Element ermöglicht es Entwicklern, einen Auslöser anzugeben, wie zum Beispiel die verstrichene Zeit seit dem Laden des SVG in das DOM oder das Ende einer bestimmten Animation, bei der ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen. Auf diese Weise kann ein SVG-Viewer Speicher sparen, indem animierte Elemente verworfen werden, die nicht mehr benötigt werden.
  ([Firefox Fehler 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Das Interface `SVGPathSegment` unterstützt nun die Methoden `getPathData()`, `setPathData()`, und `getPathSegmentAtLength()`. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt Rohzeichenfolgendaten zu parsen. ([Firefox Fehler 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
