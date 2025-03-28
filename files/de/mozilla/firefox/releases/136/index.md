---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: dd64ea68062eeb63ed49e6de01580b31b25ad23a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die automatische Korrektur in bearbeitbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable). Das spezifische Verhalten der automatischen Korrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Formatierung mit Rich-Text ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die bei der Wiedergabe einer [Web-Komponente](/de/docs/Web/API/Web_components) hinzugefügten Inhalt zu einem {{HTMLElement("slot")}}-Element haben ([Firefox Bug 1940691](https://bugzil.la/1940691)).
- Die pseudo-Klasse [`:open`](/de/docs/Web/CSS/:open) wird jetzt unterstützt und ermöglicht die Auswahl jedes Elements, das derzeit in einem offenen Zustand ist, dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Auswahlelement und {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü präsentieren. ([Firefox Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}} CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben nun einen einzelnen Farbpunkt und 0-1-Positionen. Dies erzeugt eine einzige einheitliche Farbe und wird beim Einstellen der CSS-Eigenschaft {{cssxref("mask")}} verwendet. ([Firefox Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht die lokalsensitive Formatierung von Zeitdauern. ([Firefox Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der HTTP-Header {{httpheader("Referer")}} wird jetzt in Anfragen nach einem Seiten-Refresh gesendet, der zu einer neuen Seite umleitet (falls durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL gesetzt, nachdem navigiert wurde.
  Der Seiten-Refresh kann durch den {{httpheader("Refresh")}}-Antwort-Header oder ein entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Seitenaktualisierungen auf derselben Seite als Navigation zu einem Seitenelement behandelt werden: da die Seite nicht neu angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32MB auf 512MB erhöht, um das Limit für Chromium-Browser anzugleichen ([Firefox Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} Methode auf Basis von {{jsxref("Promise")}} zur Verwaltung von Cookies und kann sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox Bug 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zur Verwaltung von Cookies (Get, Set, Delete).
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zur Nutzung von `CookieStore`-Instanzen.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), welches in Hauptthread- und Service-Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass, obwohl alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte sowie im `change`-Ereignis alle Eigenschaften außer `name` und `value` weglassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Videos senden und empfangen, die mit dem [AV1 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert sind.
  Beim Senden kann er sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden.
  ([Firefox Bug 1944878](https://bugzil.la/1944878) und [Firefox Bug 1932065](https://bugzil.la/1932065)).
- WebRTC simulcast von bildschirmgeteilten Videos mit dem [H264 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardwareunterstützt ist.
  ([Firefox Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP-Header-Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht eine codec-unabhängige Weiterleitung von simulcast-Streams, auch in Szenarien, in denen die Nutzlast Ende-zu-Ende-verschlüsselt (E2EE) ist.
  ([Firefox Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt jetzt Portkonflikte von WebSockets des RemoteAgent effizienter. Wenn der Port, der über das Kommandozeilenargument `--remote-debugging-port` angegeben wird, nicht innerhalb von 5 Sekunden erworben werden kann, z.B. wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox jetzt heruntergefahren anstatt zu hängen ([Firefox Bug 1927721](https://bugzil.la/1927721)).

- Navigierungen unter Verwendung des HTTP-Schemas, ausgelöst durch den Befehl `WebDriver:Navigate` in Marionette oder `browsingContext.navigate` in WebDriver BiDi, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen bleiben nun wie beabsichtigt auf HTTP ([Firefox Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um gezielt die gleichen zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement zu entfernen. Dies hilft, unbeabsichtigte Nebeneffekte zu vermeiden, wenn mehrere Abonnements bestehen, wie z.B. auf einen bestimmten Tab beschränkte ([Firefox Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die bisherige Logik zur Entfernung von Ereignissen nach Name und Kontext ist veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das Feld `userContexts` im Befehl `script.addPreloadScript`, ermöglicht es den Clients anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browserkontexte, die in solchen angegebenen Benutzerkontexten geöffnet werden ([Firefox Bug 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun einen vollständig serialisierten Browsing-Kontext-Baum zurück, wenn ein Kontext geschlossen wird, einschließlich all seiner Kindkontexte ([Firefox Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` zum [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, die Erweiterungen ermöglicht, den Browser zu bitten, ihre Hintergrundskripte als Dokument oder Service-Worker auszuführen ([Firefox Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen jetzt mit einem Fehler ab, wenn das Menüelement nicht existiert. Bisher wurde der Fehler ignoriert und das Promise erfüllt. ([Firefox Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist in der Desktop-Version von Firefox verfügbar. Diese Version der API ist zur Verwendung in Manifest V3-Erweiterungen gedacht und bietet breite Kompatibilität mit Chrome, obwohl die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterschiedlich sind. ([Firefox Bug 1943050](https://bugzil.la/1943050)).
- Die Eigenschaft `canResume` von {{WebExtAPIRef("downloads.DownloadItem")}} wird jetzt auf `true` gesetzt, wenn ein Download mit `NETWORK_FAILED` fehlschlägt. Dies ermöglicht es, Downloads, die aufgrund eines Netzwerksfehlers fehlschlagen, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}} fortzusetzen. ([Firefox Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 136 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und ändern Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars`-Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} legt die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich fest. ([Firefox Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stacktrace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptanwendungsfall besteht darin, einen Stacktrace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der Schnittstelle {{jsxref("Error")}} abgeleitet ist.
  ([Firefox Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`-Header](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu leeren.
  ([Firefox Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}} SVG-Element ermöglicht es Entwicklern, einen Auslöser anzugeben, wie die seit dem Laden des SVG im DOM verstrichene Zeit oder das Ende einer bestimmten Animation, bei dem ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollten. Dies ermöglicht einem SVG-Viewer, Speicher zu schonen, indem animierte Elemente, die nicht mehr benötigt werden, entfernt werden.
  ([Firefox Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Das Interface `SVGPathSegment` unterstützt jetzt die Methoden `getPathData()`, `setPathData()` und `getPathSegmentAtLength()`. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu analysieren. ([Firefox Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
