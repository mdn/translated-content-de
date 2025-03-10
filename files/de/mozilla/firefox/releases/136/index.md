---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable). Das spezifische Autokorrekturverhalten hängt vom User-Agent und dem zugrunde liegenden Betriebssystem ab. ([Firefox Fehler 1927977](https://bugzil.la/1927977)).
- Der `plaintext-only` Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox Fehler 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalte zu einem {{HTMLElement("slot")}}-Element hinzufügen, wenn ein [Web Component](/de/docs/Web/API/Web_components) gerendert wird ([Firefox Fehler 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudoklasse wird jetzt unterstützt und ermöglicht es Ihnen, jedes Element auszuwählen, das sich aktuell in einem offenen Zustand befindet. Dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Auswahlelement und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld darstellen. ([Firefox Fehler 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}} CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}}, und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farbverlauf und Positionen zwischen 0 und 1. Dies erzeugt eine einzige Volltonfarbe und wird bei der Einstellung der {{cssxref("mask")}} CSS-Eigenschaft verwendet. ([Firefox Fehler 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt, was die locale-abhängige Formatierung von Zeitdauern ermöglicht. ([Firefox Fehler 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt bei Anfragen gesendet, die einer Seitenaktualisierung folgen, die auf eine neue Seite umleitet (wenn dies durch die {{httpheader("Referrer-Policy")}} erlaubt wird), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Antwortheader oder ein gleichwertiges {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass gleiche Seitenaktualisierungen als Navigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Fehler 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32MB auf 512MB erhöht, was dem Limit der Chromium-Browser entspricht ([Firefox Fehler 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Worker](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox Fehler 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und dessen Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das in Haupt-Thread- und Service-Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass während jegliche der unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und die im `change`-Ereignis alle Eigenschaften außer `name` und `value` weglassen (was den Informationen entspricht, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Schnittstellen und Eigenschaften sind nicht umgesetzt: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager), und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Video, das mit dem [AV1 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert wurde, senden und empfangen.
  Beim Senden kann es sowohl für das gleichzeitige Senden mehrerer Versionen derselben Quelle ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden.
  ([Firefox Fehler 1944878](https://bugzil.la/1944878) und [Firefox Fehler 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von bildschirmgeteiltem Video mit dem [H264 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können nun für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardwarebeschleunigt ist.
  ([Firefox Fehler 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht das codec-unabhängige Weiterleiten von Simulcast-Streams, einschließlich in Szenarios, in denen die Nutzlast End-to-End-verschlüsselt (E2EE) ist.
  ([Firefox Fehler 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox geht jetzt effizienter mit WebSocket-Portkonflikten für den RemoteAgent um. Wenn der Port, der über das `--remote-debugging-port`-Kommandozeilenargument angegeben wurde, nicht innerhalb von 5 Sekunden bezogen werden kann, zum Beispiel, wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox nunherunterfahren, anstatt hängenzubleiben ([Firefox Fehler 1927721](https://bugzil.la/1927721)).

- Navigierungen unter Verwendung des HTTP-Schemas, die durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi ausgelöst werden, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen bleiben nun wie beabsichtigt auf HTTP ([Firefox Fehler 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um exakt die gleichen zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement gezielt zu entfernen. Dies hilft, unbeabsichtigte Nebenwirkungen zu verhindern, wenn mehrere Abonnements existieren, z. B. solche, die auf einen spezifischen Tab beschränkt sind ([Firefox Fehler 1938576](https://bugzil.la/1938576)).

  Hinweis: Die bisherige Logik zum Entfernen von Ereignissen nach Name und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im Befehl `script.addPreloadScript`, das es den Clients ermöglicht, anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neu in diesen Benutzerkontexten geöffneten Browsing-Kontexte ([Firefox Fehler 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun einen vollständig serialisierten Browsing-Kontextbaum zurück, wenn ein Kontext geschlossen wird, einschließlich all seiner untergeordneten Kontexte ([Firefox Fehler 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` zum [`background` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, wodurch Erweiterungen den Browser anfordern können, dass ihre Hintergrundskripte als Dokument oder Service Worker ausgeführt werden ([Firefox Fehler 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} und die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} schlagen jetzt mit einem Fehler fehl, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Promise erfüllt. ([Firefox Fehler 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist verfügbar. Diese Version der API ist zur Verwendung in Manifest V3-Erweiterungen vorgesehen und bietet umfassende Kompatibilität mit Chrome, obwohl sich die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox Fehler 1943050](https://bugzil.la/1943050)).

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 136 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die passende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Sie finden weitere solcher Features auf der [Seite für experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars` Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft wird verwendet, um die minimale Wortlänge für Trennungen sowie die Anzahl der Zeichen vor und nach dem Trennzeichen festzulegen. ([Firefox Fehler 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die {{jsxref("Error.captureStackTrace()")}}-statische Methode installiert die Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptverwendungszweck besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox Fehler 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data) Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu löschen.
  ([Firefox Fehler 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>` Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}} SVG-Element ermöglicht es Entwicklern, einen Auslöser anzugeben, wie zum Beispiel die seit dem Laden der SVG im DOM verstrichene Zeit oder das Ende einer bestimmten Animation, zu dem ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollten. Dies erlaubt einem SVG-Betrachter, Speicher zu sparen, indem animierte Elemente, die nicht mehr benötigt werden, verworfen werden.
  ([Firefox Fehler 1069931](https://bugzil.la/1069931)).
- **SVG Path API-Methoden**: `dom.svg.pathSegment.enabled`.
  Das `SVGPathSegment`-Interface unterstützt jetzt die Methoden `getPathData()`, `setPathData()`, und `getPathSegmentAtLength()`. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe String-Daten zu parsen. ([Firefox Fehler 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
