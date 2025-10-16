---
title: Firefox 136 Versionshinweise für Entwickler
short-title: Firefox 136
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) ermöglicht die Autokorrektur in bearbeitbaren Textelementen, einschließlich: der meisten Arten von {{htmlelement("input")}} Textelelementen, {{htmlelement("textarea")}} Elementen und Elementen mit dem gesetzten Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable). Das spezifische Verhalten der Autokorrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Formatierung von Text ist deaktiviert und jegliche Formatierung im eingefügten Text wird automatisch entfernt ([Firefox Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die beim Rendern einer [Webkomponente](/de/docs/Web/API/Web_components) Inhalt zu einem {{HTMLElement("slot")}} Element hinzugefügt haben ([Firefox Bug 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open) Pseudoklasse wird nun unterstützt und ermöglicht es, jedes Element auszuwählen, das sich momentan in einem offenen Zustand befindet; dies gilt für die {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}} Elemente mit einem Auswahlwerkzeug und {{htmlelement("select")}} Elemente, die ein Dropdown-Feld anzeigen. ([Firefox Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}} CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}}, und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farbverlaufspunkt und 0-1-Positionen. Dies erzeugt eine einzige Volltonfarbe und wird zur Einstellung der {{cssxref("mask")}} CSS-Eigenschaft verwendet. ([Firefox Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht die lokalsensible Formatierung von Zeitdauern. ([Firefox Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt bei Anfragen nach einem Seitenneuladen gesendet, das zu einer neuen Seite umleitet (wenn erlaubt durch die {{httpheader("Referrer-Policy")}}), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.
  Das Seitenneuladen kann durch den {{httpheader("Refresh")}} Antwort-Header oder ein gleichwertiges {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Neuladungen derselben Seite als Navigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32MB auf 512MB erhöht, was dem Limit in Chromium-Browsern entspricht ([Firefox Bug 1911300](https://bugzil.la/1911300)).

- Element-Eigenschaften werden nun für die [Aria Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references), reflektiert ([Firefox Bug 1919102](https://bugzil.la/1919102)).

  Dazu gehören:
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) in der [`Element`](/de/docs/Web/API/Element) Schnittstelle
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements) in der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle.

#### Medien, WebRTC und Web Audio

- WebRTC kann nun Video, das mit dem [AV1 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert ist, senden und empfangen.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden.
  ([Firefox Bug 1944878](https://bugzil.la/1944878) und [Firefox Bug 1932065](https://bugzil.la/1932065)).
- WebRTC Simulcast von bildschirmgeteiltem Video mit dem [H264 Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können nun für den Simulcast verwendet werden).
  Beachten Sie, dass der H264 Codec auf Android hardwarebeschleunigt ist.
  ([Firefox Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), und deren Verwendung mit AV1, VP8 und VP9 Codecs.
  Die DD Header-Erweiterung ermöglicht das codec-unabhängige Forwarding von Simulcast-Streams, auch in Szenarien, in denen der Payload end-to-end verschlüsselt (E2EE) ist.
  ([Firefox Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox geht nun mit WebSocket-Portkonflikten für den RemoteAgent effizienter um. Wenn der über das `--remote-debugging-port` Kommandozeilenargument angegebene Port nicht innerhalb von 5 Sekunden erworben werden kann, z. B. wenn ein anderer Firefox-Prozess ihn bereits verwendet, fährt Firefox nun herunter, anstatt zu hängen ([Firefox Bug 1927721](https://bugzil.la/1927721)).

- Navigationen unter Verwendung des HTTP-Schemas, ausgelöst durch den Befehl `WebDriver:Navigate` in Marionette oder `browsingContext.navigate` in WebDriver BiDi, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen bleiben nun wie vorgesehen auf HTTP ([Firefox Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt nun eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um dieselben zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement gezielt anzusprechen. Dies hilft, unbeabsichtigte Nebenwirkungen zu vermeiden, wenn mehrere Abonnements bestehen, beispielsweise solche, die auf einen bestimmten Tab beschränkt sind ([Firefox Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die vorherige Logik zur Entfernung von Ereignissen nach Name und Kontext ist veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts` Feld im `script.addPreloadScript` Befehl hinzugefügt, das es Clients ermöglicht, anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browsingkontexte, die innerhalb solcher spezifizierten Benutzerkontexte geöffnet werden ([Firefox Bug 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun einen vollständig serialisierten Browsing-Kontextbaum zurück, wenn ein Kontext geschlossen wird, einschließlich all seiner Kindkontexte ([Firefox Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` zum [`background` manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, mit der Erweiterungen anfordern können, dass der Browser ihre Hintergrundskripte als Dokument oder Service Worker ausführt ([Firefox Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} und die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen nun mit einem Fehler ab, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}} API ist auf Desktop Firefox verfügbar. Diese Version der API ist für die Verwendung in Manifest V3 Erweiterungen bestimmt und bietet breite Kompatibilität mit Chrome, obwohl die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern abweichen. ([Firefox Bug 1943050](https://bugzil.la/1943050)).
- Die `canResume` Eigenschaft von {{WebExtAPIRef("downloads.DownloadItem")}} ist nun auf `true` gesetzt, wenn ein Download mit `NETWORK_FAILED` fehlschlägt. Dadurch können Downloads, die aufgrund eines Netzwerkfehlers fehlschlagen, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}} fortgesetzt werden. ([Firefox Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 136 ausgeliefert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars` Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft wird verwendet, um die Mindestwortlänge für Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich zu spezifizieren. ([Firefox Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als die Eigenschaft {{jsxref("Error.stack")}}.
  Der Hauptanwendungsfall besteht darin, einer benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}} Schnittstelle ableitet, eine Stapelverfolgung hinzuzufügen.
  ([Firefox Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu leeren.
  ([Firefox Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>` Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}} SVG-Element ermöglicht es Entwicklern, einen Auslöser anzugeben, wie z.B. die verstrichene Zeit seit dem SVG in das DOM geladen wurde oder das Ende einer bestimmten Animation, zu welchem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollten. Dies ermöglicht es einem SVG-Viewer, den Speicher zu schonen, indem animierte Elemente, die nicht mehr benötigt werden, verworfen werden.
  ([Firefox Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData), und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) Schnittstelle werden nun unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe String-Daten zu parsen. ([Firefox Bug 1934525](https://bugzil.la/1934525)).
