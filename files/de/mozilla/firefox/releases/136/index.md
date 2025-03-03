---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 0e3cc2f0448d2f7cddfc3ded158405515c517b0b
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, bei denen das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt ist. Das spezifische Autokorrekturverhalten hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Fehler 1927977](https://bugzil.la/1927977)).
- Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Formatierung von Rich-Text ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox Fehler 1922724](https://bugzil.la/1922724)).

#### Entfernungen

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in einem {{HTMLElement("template")}} zu stylen, die Inhalte zu einem {{HTMLElement("slot")}}-Element hinzufügen, wenn ein [Webkomponente](/de/docs/Web/API/Web_components) gerendert wird ([Firefox Fehler 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open)-Pseudoklasse wird jetzt unterstützt und ermöglicht es, jedes Element auszuwählen, das sich derzeit in einem offenen Zustand befindet. Dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die eine Dropdown-Box präsentieren ([Firefox Fehler 1936113](https://bugzil.la/1936113)).

#### Entfernungen

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht die lokalsensitive Formatierung von Zeiträumen. ([Firefox Fehler 1933303](https://bugzil.la/1933303)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt bei Anfragen nach einem Seitenaktualisierung gesendet, die zu einer neuen Seite weiterleitet (falls erlaubt durch die {{httpheader("Referrer-Policy")}}), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.
  Die Auffrischung der Seite kann durch den {{httpheader("Refresh")}}-Antwortheader oder ein gleichwertiges {{htmlelement("meta")}}-Element im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Auffrischungen derselben Seite als Navigation zu einem Seitenfragment derselben Seite behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Fehler 1928291](https://bugzil.la/1928291))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die maximale Größe von [Daten-URLs](/de/docs/Web/URI/Schemes/data) wurde von 32MB auf 512MB erhöht, was dem Limit für Chromium-Browser entspricht ([Firefox Fehler 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} auf {{jsxref("Promise")}}-basierende Methode zum Verwalten von Cookies. Diese kann sowohl im Hauptthread als auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox Fehler 1937477](https://bugzil.la/1937477)). Dazu gehören:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface für das Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) für das Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Event](/de/docs/Web/API/CookieStore/change_event) (und dessen Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das in Hauptthread- und Service-Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass während jede der unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/get) werden kann, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und im `change`-Event alle Eigenschaften außer `name` und `value` weglassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### DOM

#### Medien, WebRTC und Web-Audio

- WebRTC kann jetzt Videos mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) senden und empfangen.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden.
  ([Firefox Fehler 1944878](https://bugzil.la/1944878) und [Firefox Fehler 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von bildschirmfreigegebenem Video mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardwarebeschleunigt ist.
  ([Firefox Fehler 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit den Codecs AV1, VP8 und VP9.
  Die DD-Header-Erweiterung ermöglicht das codecunabhängige Weiterleiten von Simulcast-Streams, auch in Szenarien, in denen die Nutzlast Ende-zu-Ende-verschlüsselt (E2EE) ist.
  ([Firefox Fehler 1945261](https://bugzil.la/1945261)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt jetzt WebSocket-Portkonflikte für den RemoteAgent effizienter. Wenn der über das `--remote-debugging-port`-Kommandozeilenargument angegebene Port nicht innerhalb von 5 Sekunden zugewiesen werden kann, beispielsweise wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox jetzt heruntergefahren, anstatt zu hängen ([Firefox Fehler 1927721](https://bugzilla.mozilla.org/show_bug.cgi?id=1927721)).

- Navigationen mit dem HTTP-Schema, ausgelöst durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen verbleiben nun wie vorgesehen auf HTTP ([Firefox Fehler 1943551](https://bugzilla.mozilla.org/show_bug.cgi?id=1943551)).

#### WebDriver BiDi

- Der `session.subscribe`-Befehl gibt jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um präzise auf die gleichen zuvor abonnierten Events und Kontexte abzuzielen wie das ursprüngliche Abonnement. Dies hilft, unbeabsichtigte Nebeneffekte zu vermeiden, wenn mehrere Abonnements existieren, wie z.B. solche, die auf einen bestimmten Tab beschränkt sind ([Firefox Fehler 1938576](https://bugzilla.mozilla.org/show_bug.cgi?id=1938576)).

  Hinweis: Die vorherige Logik zum Entfernen von Events nach Name und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im Befehl `script.addPreloadScript` hinzugefügt, mit dem Clients festlegen können, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browsing-Kontexte, die in solchen bestimmten Benutzerkontexten geöffnet werden ([Firefox Fehler 1940927](https://bugzilla.mozilla.org/show_bug.cgi?id=1940927)).

- Das `browsingContext.contextDestroyed`-Ereignis gibt nun einen vollständig serialisierten Browsing-Kontextbaum zurück, wenn ein Kontext geschlossen wird, einschließlich all seiner Kindkontexte ([Firefox Fehler 1860955](https://bugzilla.mozilla.org/show_bug.cgi?id=1860955)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} und die Aliassen {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen jetzt mit einem Fehler ab, wenn das Menüelement nicht existiert. Bisher wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox Fehler 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist verfügbar. Diese Version der API ist für die Verwendung in Manifest V3-Erweiterungen gedacht und bietet umfassende Kompatibilität mit Chrome, obwohl die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterschiedlich sind. ([Firefox Fehler 1943050](https://bugzil.la/1943050)).

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen werden neu in Firefox 136 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als die {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptverwendungszweck besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlertyp zu installieren, der nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox Fehler 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu löschen.
  ([Firefox Fehler 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}} SVG-Element ermöglicht es Entwicklern, einen Auslösemechanismus festzulegen, wie z.B. die seit dem Laden des SVG im DOM verstrichene Zeit oder das Ende einer bestimmten Animation, bei dem ein spezifiziertes Element und seine Kinder aus dem DOM entfernt werden sollen. Dies ermöglicht einem SVG-Betrachter, Speicher zu sparen, indem animierte Elemente, die nicht mehr benötigt werden, verworfen werden.
  ([Firefox Fehler 1069931](https://bugzil.la/1069931)).

## Ältere Versionen

{{Firefox_for_developers}}
