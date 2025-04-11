---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich der meisten Arten von {{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut. Das spezifische Verhalten der Autokorrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox-Bug 1927977](https://bugzil.la/1927977)).
- Der `plaintext-only` Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox-Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in einem {{HTMLElement("template")}} zu stylen, die beim Rendern einer [Webkomponente](/de/docs/Web/API/Web_components) einem {{HTMLElement("slot")}}-Element Inhalt hinzufügen ([Firefox-Bug 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudoklasse wird jetzt unterstützt und ermöglicht die Auswahl eines Elements, das sich derzeit in einem offenen Zustand befindet. Dies gilt für die {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit Picker und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld darstellen. ([Firefox-Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}} CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farbstopp und Positionen von 0-1. Dies erzeugt eine einfarbige Farbe und wird bei der Einstellung der {{cssxref("mask")}} CSS-Eigenschaft verwendet. ([Firefox-Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird nun unterstützt, was die lokalisierungssensitive Formatierung von Zeitdauern ermöglicht. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt in Anfragen gesendet, die einem Seiten-Refresh folgen, der auf eine neue Seite umleitet (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL gesetzt, nachdem die Navigation stattgefunden hat. Der Seiten-Refresh kann durch den {{httpheader("Refresh")}} Antwort-Header oder ein entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`). Beachten Sie, dass gleiche Seiten-Refreshes als gleiche Seiten-Navigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet. ([Firefox-Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32MB auf 512MB erhöht, was das Limit für Chromium-Browser entspricht ([Firefox-Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann. Ein Teil der Cookie Store API wurde implementiert ([Firefox-Bug 1937477](https://bugzil.la/1937477)). Dies beinhaltet:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change` event](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Haupt-Thread und in Service-Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass, obwohl alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte, und im `change`-Event, alle Eigenschaften außer `name` und `value` weglassen (entspricht den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die folgenden Interfaces und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

- Element-Eigenschaften werden jetzt für die [Aria-Attribute, die Element-Referenzen enthalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) (reflektiert ([Firefox-Bug 1919102](https://bugzil.la/1919102)).

  Dies schließt ein:

  - [`ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) im [`Element`](/de/docs/Web/API/Element) Interface
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements) im [`ElementInternals`](/de/docs/Web/API/ElementInternals) Interface.

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Video senden und empfangen, das mit dem [AV1 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert ist. Beim Senden kann es sowohl für das Senden mehrerer simultaner Versionen derselben Quelle ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden. ([Firefox-Bug 1944878](https://bugzil.la/1944878) und [Firefox-Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von bildschirmgeteiltem Video mit dem [H264 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden). Beachten Sie, dass der H264-Codec auf Android hardware-gestützt ist. ([Firefox-Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit AV1, VP8 und VP9 Codecs. Die DD-Header-Erweiterung ermöglicht codec-unabhängiges Weiterleiten von Simulcast-Streams, auch in Szenarien, in denen die Nutzlast Ende-zu-Ende-verschlüsselt (E2EE) ist. ([Firefox-Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt Portkonflikte bei WebSockets für den RemoteAgent nun effizienter. Wenn der Port, der über das `--remote-debugging-port` Kommandozeilenargument angegeben wird, innerhalb von 5 Sekunden nicht erworben werden kann, beispielsweise wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox nun heruntergefahren, anstatt hängen zu bleiben ([Firefox-Bug 1927721](https://bugzil.la/1927721)).

- Navigationen, die durch das `WebDriver:Navigate`-Kommando in Marionette oder `browsingContext.navigate` in WebDriver BiDi über das HTTP-Schema ausgelöst werden, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen verbleiben nun wie beabsichtigt auf HTTP ([Firefox-Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der `session.subscribe`-Befehl gibt jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um genau die gleichen zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement zu deaktivieren. Dies hilft, unbeabsichtigte Nebeneffekte zu verhindern, wenn mehrere Abonnements bestehen, wie solche, die auf ein bestimmtes Tab beschränkt sind ([Firefox-Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die bisherige Logik zur Entfernung von Ereignissen nach Name und Kontext wurde als veraltet markiert und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im `script.addPreloadScript`-Befehl hinzugefügt, das es Clients ermöglicht, anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich neu geöffneter Browsing-Kontexte innerhalb solcher spezifizierter Benutzerkontexte ([Firefox-Bug 1940927](https://bugzil.la/1940927)).

- Das `browsingContext.contextDestroyed`-Ereignis gibt jetzt einen vollständig serialisierten Browsing-Kontext-Baum zurück, wenn ein Kontext geschlossen wird, einschließlich aller seiner Kindkontexte ([Firefox-Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Das `preferred_environment`-Eigenschaft zum [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzugefügt, wodurch Erweiterungen anfordern können, dass der Browser ihre Hintergrundskripte als Dokument oder Service-Worker ausführt ([Firefox-Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliasnamen {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen jetzt mit einem Fehler ab, wenn das Menüelement nicht existiert. Bisher wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist auf Desktop-Firefox verfügbar. Diese Version der API ist für die Verwendung in Manifest V3-Erweiterungen gedacht und bietet breite Kompatibilität mit Chrome, obwohl sich [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox-Bug 1943050](https://bugzil.la/1943050)).
- Die Eigenschaft `canResume` von {{WebExtAPIRef("downloads.DownloadItem")}} wird jetzt auf `true` gesetzt, wenn ein Download mit `NETWORK_FAILED` fehlschlägt. Dies ermöglicht es, Downloads, die aufgrund eines Netzwerkfehlers fehlschlagen, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}} fortzusetzen. ([Firefox-Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 136 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Voreinstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars`-Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`. Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft wird verwendet, um insbesondere die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox-Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`. Die {{jsxref("Error.captureStackTrace()")}}-statische Methode installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft. Ihr Hauptanwendungsfall besteht darin, eine Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abstammt. ([Firefox-Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`. Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit den [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)- oder `*`-Direktiven verwendet werden, um den Browser-Cache zu löschen. ([Firefox-Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`. Das {{svgelement("discard")}}-SVG-Element ermöglicht es Entwicklern, einen Auslöser zu spezifizieren, wie zum Beispiel die verstrichene Zeit seit das SVG in den DOM geladen wurde oder das Ende einer bestimmten Animation. Zu diesem Zeitpunkt sollen ein angegebenes Element und seine Kinder aus dem DOM entfernt werden. Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem er animierte, nicht mehr benötigte Elemente verwirft. ([Firefox-Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`. Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) des [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Interfaces werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu parsen. ([Firefox-Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
