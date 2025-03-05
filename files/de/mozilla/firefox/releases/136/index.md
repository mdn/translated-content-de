---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 79be2656c0b4f807b1ab102f0bf96471183a03a3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von textbasierten {{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut. Das spezifische Verhalten der Autokorrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Bug 1927977](https://bugzil.la/1927977)).
- Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung im eingefügten Text wird automatisch entfernt. ([Firefox Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente im {{HTMLElement("template")}} zu stylen, die beim Rendern eines [Webkomponenten](/de/docs/Web/API/Web_components) mit Inhalt in ein {{HTMLElement("slot")}}-Element eingefügt werden. ([Firefox Bug 1940691](https://bugzil.la/1940691)).
- Die Pseudoklasse [`:open`](/de/docs/Web/CSS/:open) wird jetzt unterstützt und ermöglicht die Auswahl jedes Elements, das sich derzeit in einem offenen Zustand befindet. Dies gilt für die {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Auswahlelement und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld präsentieren. ([Firefox Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}} CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben nun einen einzigen Farbpunkt und 0-1 Positionen. Dies erzeugt eine einheitliche Farbfläche und wird zur Einstellung der {{cssxref("mask")}} CSS-Eigenschaft verwendet. ([Firefox Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt, was eine lokalsensible Formatierung von Zeitspannen ermöglicht. ([Firefox Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt bei Anfragen nach einer Seitenaktualisierung gesendet, die zu einer neuen Seite umleitet (falls von der {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Antwortheader oder ein äquivalentes {{htmlelement("meta")}}-Element im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Aktualisierungen derselben Seite als Navigation zu einem Seitenfragment derselben Seite behandelt werden: Da die Seite nicht neu angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data URLs](/de/docs/Web/URI/Schemes/data) wurde von 32MB auf 512MB erhöht, was dem Limit für Chromium-Browser entspricht. ([Firefox Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Servicearbeitern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert. ([Firefox Bug 1937477](https://bugzil.la/1937477)). Dies beinhaltet:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zum Abrufen, Setzen und Löschen von Cookies.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore)-Eigenschaften zur Erhaltung von `CookieStore`-Instanzen.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Haupt-Thread und in Serviceworker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass, obwohl jede der unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden kann, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und im `change`-Ereignis alle Eigenschaften mit Ausnahme von `name` und `value` weglassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Interfaces und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager), und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### Medien, WebRTC und Web-Audio

- WebRTC kann jetzt Video senden und empfangen, das mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert wurde.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für "singlecast" verwendet werden.
  ([Firefox Bug 1944878](https://bugzil.la/1944878) und [Firefox Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast des Bildschirmteilungs-Videos mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardwarebeschleunigt ist.
  ([Firefox Bug 1210175](https://bugzil.la/1210175)).
- Unterstützung für das WebRTC [Dependency Descriptor (DD) RTP-Header-Erweiterung](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), und dessen Verwendung mit AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht das codec-unabhängige Weiterleiten von Simulcast-Streams, einschließlich in Szenarien, in denen das Payload-Ende-zu-Ende-verschlüsselt ist (E2EE).
  ([Firefox Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt jetzt WebSocket-Portkonflikte für den RemoteAgent effizienter. Wenn der über das Kommandozeilenargument `--remote-debugging-port` angegebene Port nicht innerhalb von 5 Sekunden erworben werden kann, zum Beispiel, wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox nun heruntergefahren, anstatt zu hängen ([Firefox Bug 1927721](https://bugzilla.mozilla.org/show_bug.cgi?id=1927721)).

- Navigationen unter Verwendung des HTTP-Schemas, ausgelöst durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi, werden nicht mehr automatisch auf HTTPS aufgewertet. Diese Anfragen bleiben nun wie vorgesehen auf HTTP. ([Firefox Bug 1943551](https://bugzilla.mozilla.org/show_bug.cgi?id=1943551)).

#### WebDriver BiDi

- Der `session.subscribe`-Befehl gibt nun eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um genau dieselben zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement gezielt anzusteuern. Dies hilft, unbeabsichtigte Nebeneffekte bei vorhandenem Mehrfachabonnement zu vermeiden, wie sie auf einen bestimmten Tab begrenzt sind. ([Firefox Bug 1938576](https://bugzilla.mozilla.org/show_bug.cgi?id=1938576)).

  Hinweis: Die vorherige Logik zum Entfernen von Ereignissen nach Name und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im Befehl `script.addPreloadScript` hinzugefügt, wodurch Clients festlegen können, in welchen Benutzerkontexten (Containern) das Skript automatisch geladen werden soll, einschließlich neuer Browsing-Kontexte, die innerhalb solcher spezifizierter Benutzerkontexte geöffnet werden. ([Firefox Bug 1940927](https://bugzilla.mozilla.org/show_bug.cgi?id=1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun einen vollständig serialisierten Browsingkontext-Baum zurück, wenn ein Kontext geschlossen wird, einschließlich aller untergeordneten Kontexte. ([Firefox Bug 1860955](https://bugzilla.mozilla.org/show_bug.cgi?id=1860955)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} schlagen nun mit einem Fehler fehl, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist verfügbar. Diese Version der API ist für die Verwendung in Manifest V3-Erweiterungen gedacht und bietet breite Kompatibilität mit Chrome, obwohl die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) sich zwischen den Browsern unterscheiden. ([Firefox Bug 1943050](https://bugzil.la/1943050)).

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 136 bereitgestellt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Voreinstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars` Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Trennstrich festzulegen. ([Firefox Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die {{jsxref("Error.captureStackTrace()")}}-statische Methode installiert Stapelspureninformationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Ihr Hauptanwendungsfall besteht darin, eine Stapelspur auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet wird.
  ([Firefox Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-Header kann mit den [`cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache)- oder `*`-Direktiven verwendet werden, um den Browsercache zu löschen.
  ([Firefox Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>` Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}} SVG-Element ermöglicht es Entwicklern, einen Auslöser wie die verstrichene Zeit seit dem Laden des SVG in den DOM oder das Ende einer bestimmten Animation anzugeben, bei welchem ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollten. Dies erlaubt einem SVG-Viewer, Speicher zu schonen, indem er nicht mehr benötigte animierte Elemente verwirft.
  ([Firefox Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Das `SVGPathSegment`-Interface unterstützt jetzt die Methoden `getPathData()`, `setPathData()`, und `getPathSegmentAtLength()`. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgen-Daten zu parsen. ([Firefox Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
