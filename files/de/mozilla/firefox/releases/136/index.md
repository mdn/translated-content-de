---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben. Das spezifische Autokorrekturverhalten hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox-Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Formatierung von Text wird deaktiviert und jede Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox-Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente im {{HTMLElement("template")}}-Element zu stylen, die beim Rendern einer [Webkomponente](/de/docs/Web/API/Web_components) in ein {{HTMLElement("slot")}}-Element Inhalt hinzufügen ([Firefox-Bug 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudoklasse wird jetzt unterstützt und ermöglicht es Ihnen, jedes Element auszuwählen, das sich derzeit in einem offenen Zustand befindet. Dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Auswahlwerkzeug und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld präsentieren. ([Firefox-Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}}-CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farb-Stop und 0-1 Positionen. Dies erzeugt eine einfarbige Fläche und wird beim Setzen der {{cssxref("mask")}}-CSS-Eigenschaft verwendet. ([Firefox-Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht die lokalsensitive Formatierung von Zeiträumen. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}}-HTTP-Header wird jetzt bei Anfragen gesendet, die einer Seitenaktualisierung folgen, die auf eine neue Seite weiterleitet (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL gesetzt, nachdem navigiert wurde.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Response-Header oder ein entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (z.B. `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Seitenaktualisierungen derselben Seite als Navigation zu einem Seitenfragment derselben Seite behandelt werden: Da die Seite nicht erneut angefragt wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox-Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32 MB auf 512 MB erhöht, was dem Limit für Chromium-Browser entspricht ([Firefox-Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox-Bug 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change` event](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Haupt-Thread und in Service Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass während jeder unterstützte Cookie-Eigenschaft [gesetzt](/de/docs/Web/API/CookieStore/set) werden kann, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und das `change`-Ereignis alle Eigenschaften außer `name` und `value` auslassen (was den Informationen entspricht, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Video kodiert mit dem [AV1 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) senden und empfangen.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch Singlecast verwendet werden.
  ([Firefox-Bug 1944878](https://bugzil.la/1944878) und [Firefox-Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von bildschirmfreigegebenem Video mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardwarebeschleunigt ist.
  ([Firefox-Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), und deren Verwendung mit AV1-, VP8- und VP9-Codecs.
  Die DD-Headererweiterung ermöglicht codec-unabhängiges Weiterleiten von Simulcast-Streams, einschließlich Szenarien, in denen die Nutzlast Ende-zu-Ende-verschlüsselt (E2EE) ist.
  ([Firefox-Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt nun WebSocket-Portkonflikte für den RemoteAgent effizienter. Wenn der über das Kommandozeilenargument `--remote-debugging-port` angegebene Port nicht innerhalb von 5 Sekunden erworben werden kann, etwa wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox nun heruntergefahren, anstatt zu hängen ([Firefox-Bug 1927721](https://bugzil.la/1927721)).

- Navigationsaufrufe mit dem HTTP-Schema, die durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi ausgelöst werden, werden nicht mehr automatisch auf HTTPS umgestellt. Diese Anfragen bleiben nun wie beabsichtigt auf HTTP ([Firefox-Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt nun eine Abonnement-ID zurück, die zusammen mit `session.unsubscribe` verwendet werden kann, um genau die gleichen zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement zu gezielt zu entfernen. Dies hilft, unbeabsichtigte Nebeneffekte zu verhindern, wenn mehrere Abonnements existieren, beispielsweise solche, die auf einen bestimmten Tab beschränkt sind ([Firefox-Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die vorherige Logik zum Entfernen von Ereignissen nach Name und Kontext wurde als veraltet markiert und wird in einer zukünftigen Version entfernt.

- Unterstützung für das Feld `userContexts` im Befehl `script.addPreloadScript` hinzugefügt, wodurch Clients angeben können, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browsing-Kontexte, die innerhalb solcher spezifizierter Benutzerkontexte geöffnet werden ([Firefox-Bug 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun beim Schließen eines Kontexts einen vollständig serialisierten Browserkontextbaum zurück, einschließlich aller darunter liegenden Kontexte ([Firefox-Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die `preferred_environment`-Eigenschaft zum [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, mit der Erweiterungen anfordern können, dass der Browser ihre Hintergrundskripte als Dokument oder Service Worker ausführt ([Firefox-Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} und die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} geben jetzt eine Fehlermeldung zurück, wenn das Menüelement nicht existiert. Bisher wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist verfügbar. Diese Version der API ist für die Verwendung in Manifest V3-Erweiterungen vorgesehen und bietet breite Kompatibilität mit Chrome, obwohl sich die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) in den Browsern unterscheiden. ([Firefox-Bug 1943050](https://bugzil.la/1943050)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 136, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **CSS-`hyphenate-limit-chars`-Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}}-CSS-Eigenschaft wird verwendet, um speziell die Mindestwortlänge für die Bindestrichsetzung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox-Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptanwendungsfall besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abstammt.
  ([Firefox-Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: Cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit den [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)- oder `*`-Direktiven verwendet werden, um den Browser-Cache zu löschen.
  ([Firefox-Bug 1942272](https://bugzil.la/1942272)).
- **SVG-`<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}}-SVG-Element erlaubt es Entwicklern, einen Auslöser anzugeben, wie beispielsweise die vergangene Zeit seit dem Laden des SVGs in den DOM oder das Ende einer bestimmten Animation, bei dem ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollen. Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem animierte Elemente, die nicht mehr benötigt werden, entfernt werden.
  ([Firefox-Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Das Interface `SVGPathSegment` unterstützt jetzt die Methoden `getPathData()`, `setPathData()`, und `getPathSegmentAtLength()`. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfaddaten zu arbeiten, anstatt rohe Stringdaten zu parsen. ([Firefox-Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
