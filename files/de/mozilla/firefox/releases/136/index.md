---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben. Das spezifische Verhalten der Autokorrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Bug 1927977](https://bugzil.la/1927977)).
- Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; die Formatierung von Rich Text ist deaktiviert und jede Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) {{CSSXRef(":has-slotted")}} wird verwendet, um Elemente in einem {{HTMLElement("template")}} zu stylen, die beim Rendern einer [Webkomponente](/de/docs/Web/API/Web_components) Inhalt zu einem {{HTMLElement("slot")}}-Element hinzufügen ([Firefox Bug 1940691](https://bugzil.la/1940691)).
- Die Pseudoklasse [`:open`](/de/docs/Web/CSS/:open) wird jetzt unterstützt und ermöglicht es Ihnen, jedes Element auszuwählen, das sich gerade in einem offenen Zustand befindet. Dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü präsentieren. ([Firefox Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}}-CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farbstopp und 0-1-Positionen. Dies erzeugt eine einheitliche Farbe und wird verwendet, um die {{cssxref("mask")}}-CSS-Eigenschaft festzulegen. ([Firefox Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht die lokalsensitive Formatierung von Zeitdauern. ([Firefox Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}}-HTTP-Header wird jetzt bei Anfragen gesendet, die einer Seitenaktualisierung folgen, die zu einer neuen Seite weiterleitet (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Antwort-Header oder entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Seitenaktualisierungen auf derselben Seite als Navigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32MB auf 512MB erhöht, um das Limit für Chromium-Browser anzupassen ([Firefox Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox Bug 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change` event](/de/docs/Web/API/CookieStore/change_event) (und seine Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das in Haupt-Thread- und Service-Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass während alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) und im `change`-Ereignis zurückgegebenen Cookie-Objekte nur die Eigenschaften `name` und `value` enthalten (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Video senden und empfangen, das mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) codiert ist.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden.
  ([Firefox Bug 1944878](https://bugzil.la/1944878) und [Firefox Bug 1932065](https://bugzil.la/1932065)).
- Der WebRTC-Simulcast von bildschirmfreigegebenem Video mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardwareunterstützt ist.
  ([Firefox Bug 1210175](https://bugzil.la/1210175)).
- Unterstützung für WebRTC für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), und deren Verwendung mit den AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht codecunabhängiges Forwarding von Simulcast-Streams, einschließlich in Szenarien, in denen das Payload-Ende-zu-Ende-verschlüsselt (E2EE) ist.
  ([Firefox Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt jetzt WebSocket-Portkonflikte für den RemoteAgent effizienter. Wenn der über das Befehlszeilenargument `--remote-debugging-port` angegebene Port innerhalb von 5 Sekunden nicht erworben werden kann, etwa weil ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox nun heruntergefahren, anstatt zu hängen ([Firefox Bug 1927721](https://bugzilla.mozilla.org/show_bug.cgi?id=1927721)).

- Navigationen, die durch das HTTP-Schema ausgelöst werden, ausgelöst durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen bleiben jetzt wie vorgesehen auf HTTP ([Firefox Bug 1943551](https://bugzilla.mozilla.org/show_bug.cgi?id=1943551)).

#### WebDriver BiDi

- Der `session.subscribe`-Befehl gibt jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um dieselben zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement gezielt anzusprechen. Dies hilft, unbeabsichtigte Nebeneffekte zu vermeiden, wenn mehrere Abonnements existieren, wie z.B. solche, die auf einen bestimmten Tab beschränkt sind ([Firefox Bug 1938576](https://bugzilla.mozilla.org/show_bug.cgi?id=1938576)).

  Hinweis: Die bisherige Logik zum Entfernen von Ereignissen nach Name und Kontext wurde abgelehnt und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im `script.addPreloadScript`-Befehl hinzugefügt, wodurch Clients angeben können, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browserverläufe, die in solchen angegebenen Benutzerkontexten geöffnet werden ([Firefox Bug 1940927](https://bugzilla.mozilla.org/show_bug.cgi?id=1940927)).

- Das `browsingContext.contextDestroyed`-Ereignis gibt jetzt einen vollständig serialisierten Browsing-Kontext-Baum zurück, wenn ein Kontext geschlossen wird, einschließlich aller seiner Kindkontexte ([Firefox Bug 1860955](https://bugzilla.mozilla.org/show_bug.cgi?id=1860955)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} und die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} schlagen jetzt mit einem Fehler fehl, wenn der Menüpunkt nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist verfügbar. Diese Version der API ist zur Verwendung in Manifest V3-Erweiterungen gedacht und bietet breite Kompatibilität mit Chrome, obwohl sich die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox Bug 1943050](https://bugzil.la/1943050)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 136, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **CSS `hyphenate-limit-chars`-Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}}-CSS-Eigenschaft wird verwendet, um die minimale Wortlänge für Trennzeichen sowie die Anzahl der Zeichen vor und nach dem Trennzeichen spezifisch festzulegen. ([Firefox Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptanwendungsfall besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu leeren.
  ([Firefox Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}}-SVG-Element ermöglicht es Entwicklern, einen Auslöser anzugeben, wie beispielsweise die verstrichene Zeit seit dem Laden des SVG in den DOM oder das Ende einer bestimmten Animation, zu der ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollten. Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem animierte Elemente, die nicht mehr benötigt werden, verworfen werden.
  ([Firefox Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Die `SVGPathSegment`-Schnittstelle unterstützt jetzt die `getPathData()`, `setPathData()` und `getPathSegmentAtLength()` Methoden. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu analysieren. ([Firefox Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
