---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 07694cac986733003efce4a13c83a5c08f4d4fb4
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in bearbeitbaren Textelementen einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut. Das spezifische Autokorrekturverhalten hängt vom Benutzeragenten und dem zugrundeliegenden Betriebssystem ab. ([Firefox-Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; die Formatierung von Rich-Text ist deaktiviert und jegliche Formatierung im eingefügten Text wird automatisch entfernt. ([Firefox-Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird zur Gestaltung von Elementen in {{HTMLElement("template")}} verwendet, die beim Rendern eines [Web-Komponenten](/de/docs/Web/API/Web_components) Inhalts zu einem {{HTMLElement("slot")}}-Element hinzugefügt werden. ([Firefox-Bug 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudoklasse wird nun unterstützt und erlaubt die Auswahl von Elementen, die sich derzeit in einem offenen Zustand befinden. Dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld präsentieren. ([Firefox-Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}} CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farbverlauf und Positionen zwischen 0-1. Dies erzeugt eine einzelne Vollfarbe und wird beim Setzen der {{cssxref("mask")}} CSS-Eigenschaft verwendet. ([Firefox-Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird nun unterstützt, was eine lokalisierungssensitive Formatierung von Zeitdauern ermöglicht. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird nun in Anfragen nach einer Seitenaktualisierung gesendet, die zu einer neuen Seite umleitet (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.
  Die Seitenaktualisierung könnte durch den {{httpheader("Refresh")}} Antwort-Header oder ein entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Aktualisierungen auf derselben Seite wie eine Navigation zu einem Seitenfragment behandelt werden: Da die Seite nicht neu angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox-Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32 MB auf 512 MB erhöht, was dem Limit für Chromium-Browser entspricht ([Firefox-Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Subset der Cookie Store API wurde implementiert ([Firefox-Bug 1937477](https://bugzil.la/1937477)). Dies umfasst:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface, um Cookies zu erhalten, zu setzen und zu löschen.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Erhalten von `CookieStore`-Instanzen.
  - Das [`change` event](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Hauptthread und im Service-Worker-Kontext ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass zwar alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte sowie im `change`-Event alle Eigenschaften außer `name` und `value` (passend zu den von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegebenen Informationen) weglassen.
  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

- Eigenschaften von Elementen werden nun für die [Aria-Attribute, die Elementverweise enthalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references), reflektiert ([Firefox-Bug 1919102](https://bugzil.la/1919102)).

  Dies umfasst:

  - [`ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) in der [`Element`](/de/docs/Web/API/Element) Schnittstelle
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements) in der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle.

#### Medien, WebRTC und Web Audio

- WebRTC kann nun Video, das mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert ist, senden und empfangen. Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden. ([Firefox-Bug 1944878](https://bugzil.la/1944878) und [Firefox-Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von bildschirmgeteiltem Video mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können nun für Simulcast verwendet werden). Beachten Sie, dass der H264-Codec auf Android hardwarebeschleunigt ist. ([Firefox-Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit AV1-, VP8- und VP9-Codecs. Die DD-Header-Erweiterung ermöglicht das codec-unabhängige Weiterleiten von Simulcast-Streams, auch in Szenarien, in denen die Nutzlast Ende-zu-Ende-verschlüsselt (E2EE) ist. ([Firefox-Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt nun WebSocket-Portkonflikte für den RemoteAgent effizienter. Wenn der über das `--remote-debugging-port` Befehlszeilenargument angegebene Port innerhalb von 5 Sekunden nicht erworben werden kann, beispielsweise wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox nun herunterfahren, anstatt hängen zu bleiben ([Firefox-Bug 1927721](https://bugzil.la/1927721)).

- Navigationsanfragen, die durch das `WebDriver:Navigate`-Kommando in Marionette oder `browsingContext.navigate` in WebDriver BiDi ausgelöst werden, werden nicht mehr automatisch auf HTTPS aktualisiert. Diese Anfragen bleiben nun wie beabsichtigt auf HTTP ([Firefox-Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der `session.subscribe`-Befehl gibt nun eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um genau dieselben zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement gezielt zu entfernen. Dies hilft, unbeabsichtigte Nebeneffekte zu verhindern, wenn mehrere Abonnements vorhanden sind, wie etwa solche, die auf einen bestimmten Tab beschränkt sind ([Firefox-Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die bisherige Logik zum Entfernen von Ereignissen nach Namen und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im `script.addPreloadScript`-Befehl hinzugefügt, das es Clients ermöglicht, anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich neuer Browsing-Kontexte, die innerhalb dieser angegebenen Benutzerkontexte geöffnet werden ([Firefox-Bug 1940927](https://bugzil.la/1940927)).

- Das `browsingContext.contextDestroyed`-Event gibt nun einen vollständig serialisierten Browsing-Kontextbaum zurück, wenn ein Kontext geschlossen wird, einschließlich aller seiner untergeordneten Kontexte ([Firefox-Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` zum [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, die Erweiterungen ermöglicht, den Browser zu bitten, ihre Hintergrundskripte als Dokument oder Service Worker auszuführen ([Firefox-Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen nun mit einem Fehler ab, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist auf Desktop-Firefox verfügbar. Diese Version der API ist für die Verwendung in Manifest-V3-Erweiterungen gedacht und bietet breite Kompatibilität mit Chrome, obwohl sich die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox-Bug 1943050](https://bugzil.la/1943050)).
- Die `canResume`-Eigenschaft von {{WebExtAPIRef("downloads.DownloadItem")}} wird nun auf `true` gesetzt, wenn ein Download aufgrund `NETWORK_FAILED` fehlschlägt. Dies ermöglicht es, Downloads, die aufgrund eines Netzwerkfehlers fehlschlagen, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}} fortzusetzen. ([Firefox-Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Web-Features

Diese Features sind in Firefox 136 neu implementiert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars` Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft wird verwendet, um die minimale Wortlänge für Trennungen sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox-Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stapelinformationen auf einem angegebenen Objekt als die {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptverwendungszweck besteht darin, eine Stackspur auf ein benutzerdefiniertes Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox-Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit den [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)- oder `*`-Direktiven verwendet werden, um den Browser-Cache zu leeren.
  ([Firefox-Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>` Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}} SVG-Element ermöglicht es Entwicklern, einen Auslöser anzugeben, wie die verstrichene Zeit seit dem Laden des SVGs in den DOM oder das Ende einer bestimmten Animation, bei dem ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollten. Dies ermöglicht es, dass ein SVG-Viewer Speicher spart, indem er nicht mehr benötigte animierte Elemente entfernt.
  ([Firefox-Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Schnittstelle werden nun unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu analysieren. ([Firefox-Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
