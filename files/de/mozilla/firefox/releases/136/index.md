---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut. Das spezifische Verhalten der Autokorrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Fehler 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element editierbar ist; die Formatierung von Text ist deaktiviert, und jegliche Formatierungen im eingefügten Text werden automatisch entfernt ([Firefox Fehler 1922724](https://bugzil.la/1922724)).

#### Entfernungen

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalte zu einem {{HTMLElement("slot")}}-Element hinzugefügt haben, wenn ein [Webkomponent](/de/docs/Web/API/Web_components) gerendert wird ([Firefox Fehler 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudoklasse wird jetzt unterstützt und ermöglicht es, jedes Element zu selektieren, das sich momentan in einem offenen Zustand befindet. Dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld präsentieren. ([Firefox Fehler 1936113](https://bugzil.la/1936113)).

#### Entfernungen

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt, was die formatabhängige Darstellung von Zeiträumen ermöglicht. ([Firefox Fehler 1933303](https://bugzil.la/1933303)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der HTTP-Header {{httpheader("Referer")}} wird jetzt in Anfragen gesendet, die einer Seitenaktualisierung folgen, die auf eine neue Seite umleitet (wenn dies durch die {{httpheader("Referrer-Policy")}} erlaubt ist), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.
  Die Seitenaktualisierung kann durch den Antwort-Header {{httpheader("Refresh")}} oder ein entsprechendes {{htmlelement("meta")}} in der Markierung ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass gleiche Seitenaktualisierungen als Navigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Fehler 1928291](https://bugzil.la/1928291))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die maximale Größe von [Daten-URLs](/de/docs/Web/URI/Schemes/data) wurde von 32MB auf 512MB erhöht, um die Grenze von Chromium-Browsern zu erreichen ([Firefox Fehler 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox Fehler 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle zum Abrufen, Setzen und Löschen von Cookies.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore)-Eigenschaften zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Event](/de/docs/Web/API/CookieStore/change_event) (und seine Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Hauptthread- und Service-Worker-Kontext ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass, obwohl alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/get) werden können, die Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegeben werden, sowie im `change`-Event, alle Eigenschaften außer `name` und `value` auslassen (entspricht der Information, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben wird).
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### DOM

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Videos senden und empfangen, die mit dem [AV1 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) codiert sind.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden.
  ([Firefox Fehler 1944878](https://bugzil.la/1944878) und [Firefox Fehler 1932065](https://bugzil.la/1932065)).
- WebRTC Simulcast von bildschirmgeteiltem Video mit dem [H264 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec hardwaremäßig auf Android aktiviert ist.
  ([Firefox Fehler 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und ihren Einsatz mit AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht codec-unabhängiges Weiterleiten von Simulcast-Streams, auch in Szenarien, in denen die Nutzlast Ende-zu-Ende-verschlüsselt (E2EE) ist.
  ([Firefox Fehler 1945261](https://bugzil.la/1945261)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} geben jetzt einen Fehler zurück, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox Fehler 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist verfügbar. Diese Version der API ist für die Verwendung in Manifext V3-Erweiterungen gedacht und bietet eine breite Kompatibilität mit Chrome, obwohl sich [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox Fehler 1943050](https://bugzil.la/1943050)).

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 136 ausgeliefert, jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptanwendungsfall ist das Installieren eines Stack-Traces auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox Fehler 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der Header [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data) kann mit den Anweisungen [`cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu löschen.
  ([Firefox Fehler 1942272](https://bugzil.la/1942272)).

## Ältere Versionen

{{Firefox_for_developers}}
