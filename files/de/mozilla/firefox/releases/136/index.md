---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: d670b020fd3e368585b2a6c29079b90d5efbeb37
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben. Das spezifische Autokorrekturverhalten hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung im eingefügten Text wird automatisch entfernt. ([Firefox Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalte in ein {{HTMLElement("slot")}}-Element eingefügt haben, wenn ein [Webcomponent](/de/docs/Web/API/Web_components) dargestellt wird. ([Firefox Bug 1940691](https://bugzil.la/1940691)).
- Die Pseudo-Klasse [`:open`](/de/docs/Web/CSS/:open) wird jetzt unterstützt und ermöglicht es Ihnen, jedes Element auszuwählen, das sich derzeit in einem offenen Zustand befindet. Dies gilt für die {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die ein Dropdownkasten darstellen. ([Firefox Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}} CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben nun einen einzigen Farbverlaufspunkt und 0-1 Positionen. Dies erzeugt eine einzige Vollfarbe und wird zur Einstellung der CSS-Eigenschaft {{cssxref("mask")}} verwendet. ([Firefox Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht die lokale-sensitive Formatierung von Zeitspannen. ([Firefox Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der HTTP-Header {{httpheader("Referer")}} wird jetzt in Anfragen gesendet, die nach einer Seitenaktualisierung an eine neue Seite weiterleiten (wenn dies durch die {{httpheader("Referrer-Policy")}} erlaubt ist). Außerdem wird [`document.referrer`](/de/docs/Web/API/Document/referrer) nach der Navigation auf die Referrer-URL gesetzt.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Antwort-Header oder ein entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass bei der Aktualisierung derselben Seite keine neue Anfrage gesendet wird, sondern eine Navigation zu einem Seitenfragment erfolgt, sodass {{httpheader("Referer")}} nicht gesendet wird.
  ([Firefox Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe der [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32 MB auf 512 MB erhöht, um das Limit für Chromium-Browser anzupassen ([Firefox Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service Workers](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox Bug 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Das Interface [`CookieStore`](/de/docs/Web/API/CookieStore) zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Haupt-Thread und in Service Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass während alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und im `change`-Ereignis alle Eigenschaften außer `name` und `value` auslassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager), und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### Medien, WebRTC und Webaudio

- WebRTC kann jetzt Videos senden und empfangen, die mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert sind.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Einzelübertragungen verwendet werden.
  ([Firefox Bug 1944878](https://bugzil.la/1944878) und [Firefox Bug 1932065](https://bugzil.la/1932065)).
- Das Simulcasting von Bildschirmfreigabe-Videos mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardware-beschleunigt ist.
  ([Firefox Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit AV1, VP8 und VP9 Codecs.
  Die DD-Header-Erweiterung ermöglicht das Codec-unabhängige Weiterleiten von Simulcast-Streams, einschließlich in Szenarien, in denen die Nutzlast von Ende zu Ende verschlüsselt ist (E2EE).
  ([Firefox Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt nun WebSocket-Portkonflikte für den RemoteAgent effizienter. Wenn der über das Befehlszeilenargument `--remote-debugging-port` angegebene Port innerhalb von 5 Sekunden nicht erworben werden kann, z. B. wenn ein anderer Firefox-Prozess ihn bereits nutzt, wird Firefox nun heruntergefahren anstatt hängen zu bleiben ([Firefox Bug 1927721](https://bugzil.la/1927721)).

- Navigierungen mit dem HTTP-Schema, ausgelöst durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen bleiben nun wie vorgesehen auf HTTP ([Firefox Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt nun eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um gezielt dieselben zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement zu treffen. Dies hilft, unbeabsichtigte Nebeneffekte zu verhindern, wenn mehrere Abonnements existieren, wie z. B. jene, die auf einen bestimmten Tab beschränkt sind ([Firefox Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die bisherige Logik zum Entfernen von Ereignissen nach Namen und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im Befehl `script.addPreloadScript`, wodurch Clients festlegen können, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browserkontexte, die innerhalb solcher festgelegten Benutzerkontexte geöffnet werden ([Firefox Bug 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun einen vollständig serialisierten Browserkontext-Baum zurück, wenn ein Kontext geschlossen wird, einschließlich aller seiner untergeordneten Kontexte ([Firefox Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` zum [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, die es Erweiterungen ermöglicht, den Browser zu bitten, ihre Hintergrundskripte als Dokument oder Service Worker auszuführen ([Firefox Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen jetzt mit einem Fehler ab, wenn das Menüelement nicht existiert. Bisher wurde der Fehler ignoriert und das Promise erfüllt. ([Firefox Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist in der Desktop-Version von Firefox verfügbar. Diese Version der API ist zur Verwendung in Manifest V3-Erweiterungen gedacht und bietet breite Kompatibilität mit Chrome, obwohl sich [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox Bug 1943050](https://bugzil.la/1943050)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 136 implementiert, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und aktivieren Sie sie durch Setzen auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Eigenschaft `hyphenate-limit-chars`**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft wird verwendet, um die Mindestwortlänge für Trennungen sowie die Anzahl der Zeichen vor und nach dem Trennzeichen festzulegen. ([Firefox Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als die Eigenschaft {{jsxref("Error.stack")}}.
  Ihr Hauptverwendungszweck besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu löschen.
  ([Firefox Bug 1942272](https://bugzil.la/1942272)).
- **SVG-Element `<discard>` für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}} SVG-Element ermöglicht es Entwicklern, einen Auslöser festzulegen, wie beispielsweise die verstrichene Zeit seit das SVG in das DOM geladen wurde oder das Ende einer bestimmten Animation, bei dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollten. Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem animierte Elemente, die nicht mehr benötigt werden, verworfen werden.
  ([Firefox Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Die `SVGPathSegment`-Schnittstelle unterstützt jetzt die Methoden `getPathData()`, `setPathData()` und `getPathSegmentAtLength()`. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu analysieren. ([Firefox Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
