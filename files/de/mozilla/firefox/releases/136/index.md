---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: d65517535ae067fa876d5fae83626dff838e9796
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelelementen, einschließlich der meisten Arten von Text{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut gesetzt haben. Das spezifische Autokorrekturverhalten hängt vom Benutzeragenten und dem zugrundeliegenden Betriebssystem ab. ([Firefox Bug 1927977](https://bugzil.la/1927977)).
- Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; die Formatierung von Rich Text ist deaktiviert und jede Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die beim Rendern einer [Webkomponente](/de/docs/Web/API/Web_components) einem {{HTMLElement("slot")}}-Element hinzugefügten Inhalt haben ([Firefox Bug 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudo-Klasse wird jetzt unterstützt und ermöglicht es, jedes Element auszuwählen, das sich derzeit in einem offenen Zustand befindet. Dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Auswahldialog und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld präsentieren. ([Firefox Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}} CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farbstop und 0-1-Positionen. Dies erzeugt eine einheitlich feste Farbe und wird verwendet, um die {{cssxref("mask")}} CSS-Eigenschaft festzulegen. ([Firefox Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt, was die locale-sensible Formatierung von Zeitdauern ermöglicht. ([Firefox Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt in Anfragen gesendet, die einem Seiten-Refresh folgen, der auf eine neue Seite umleitet (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt. Der Seiten-Refresh kann durch den {{httpheader("Refresh")}}-Antwortheader oder das äquivalente {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`). Beachten Sie, dass Refreshes auf derselben Seite als Navigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet. ([Firefox Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32 MB auf 512 MB erhöht, um das Limit der Chromium-Browser anzugleichen ([Firefox Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann. Ein Teil der Cookie Store API wurde implementiert ([Firefox Bug 1937477](https://bugzil.la/1937477)). Dies beinhaltet:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface für das Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change` Ereignis](/de/docs/Web/API/CookieStore/change_event) (und dessen Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), welches im Haupt-Thread und in Service Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass, während alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte sowie im `change`-Ereignis alle Eigenschaften außer `name` und `value` weggelassen. Diese entsprechen den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden. Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager), und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

- Elementeigenschaften werden jetzt für die [Aria-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references), reflektiert ([Firefox Bug 1919102](https://bugzil.la/1919102)).

  Dies beinhaltet:

  - [`ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) im [`Element`](/de/docs/Web/API/Element)-Interface
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements) im [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interface.

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Video, das mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert wurde, senden und empfangen. Beim Senden kann er sowohl verwendet werden, um mehrere gleichzeitige Versionen derselben Quelle zu senden ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für den Einzelversand. ([Firefox Bug 1944878](https://bugzil.la/1944878) und [Firefox Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von bildschirmfreigebenen Videos mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden). Beachten Sie, dass der H264-Codec auf Android hardware-unterstützt ist. ([Firefox Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), und deren Nutzung mit AV1-, VP8- und VP9-Codecs. Die DD-Header-Erweiterung ermöglicht das codec-unabhängige Weiterleiten von Simulcast-Streams, einschließlich in Szenarien, in denen das Payload Ende-zu-Ende-verschlüsselt (E2EE) ist. ([Firefox Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt jetzt WebSocket-Port-Konflikte für den RemoteAgent effizienter. Wenn der Port, der über das `--remote-debugging-port` Befehlszeilenargument angegeben wurde, nicht innerhalb von 5 Sekunden erworben werden kann, wie zum Beispiel, wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox jetzt heruntergefahren anstatt zu hängen ([Firefox Bug 1927721](https://bugzil.la/1927721)).

- Navigationen unter Verwendung des HTTP-Schemas, die durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi ausgelöst werden, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen bleiben nun wie vorgesehen auf HTTP ([Firefox Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der `session.subscribe`-Befehl liefert jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um gezielt die gleichen zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement zu adressieren. Dies hilft, unbeabsichtigte Nebeneffekte zu verhindern, wenn mehrere Abonnements bestehen, wie solche, die auf einen bestimmten Tab beschränkt sind ([Firefox Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die vorherige Logik zum Entfernen von Ereignissen nach Name und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das Feld `userContexts` im Befehl `script.addPreloadScript`, das es Clients ermöglicht, anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich jeder neuen Browserkontexte, die innerhalb solcher spezifizierten Benutzerkontexte geöffnet werden ([Firefox Bug 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` liefert jetzt einen vollständig serialisierten Browsing-Kontext-Baum zurück, wenn ein Kontext geschlossen wird, einschließlich aller Kinderkontexte ([Firefox Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` zum [`background` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, wodurch Erweiterungen anfordern können, dass der Browser ihre Hintergrundskripte als Dokument oder Serviceworker ausführt ([Firefox Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} und die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} schlagen jetzt mit einem Fehler fehl, wenn das Menüelement nicht existiert. Bisher wurde der Fehler ignoriert und das Promise erfüllt. ([Firefox Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist auf Desktop Firefox verfügbar. Diese Version der API ist zur Verwendung in Manifest V3-Erweiterungen gedacht und bietet breite Kompatibilität mit Chrome, obwohl die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterschiedlich sind. ([Firefox Bug 1943050](https://bugzil.la/1943050)).
- Die `canResume`-Eigenschaft von {{WebExtAPIRef("downloads.DownloadItem")}} wird jetzt auf `true` gesetzt, wenn ein Download mit `NETWORK_FAILED` fehlschlägt. Dadurch können Downloads, die aufgrund eines Netzwerkfehlers fehlschlagen, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}} fortgesetzt werden. ([Firefox Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 136 ausgeliefert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars` Eigentum**: `layout.css.hyphenate-limit-chars.enabled`. Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft wird verwendet, um die minimale Wortlänge für die Trennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`. Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stapelspuren-Informationen auf einem bereitgestellten Objekt als die Eigenschaft {{jsxref("Error.stack")}}. Ihr Hauptanwendungsfall ist das Installieren einer Stapelspur auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist. ([Firefox Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`. Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browsercache zu leeren. ([Firefox Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>` Element für SVG-Animationen**: `svg.discard.enabled`. Das {{svgelement("discard")}} SVG-Element ermöglicht es Entwicklern, einen Auslöser festzulegen, wie beispielsweise die verstrichene Zeit seit das SVG in das DOM geladen wurde oder das Ende einer bestimmten Animation, zu dem ein spezifiziertes Element und seine Kinder aus dem DOM entfernt werden sollen. Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem animierte Elemente verworfen werden, die nicht mehr benötigt werden. ([Firefox Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`. Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData), und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe String-Daten zu analysieren. ([Firefox Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
