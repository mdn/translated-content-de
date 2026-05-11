---
title: Firefox 136 Versionshinweise für Entwickler
short-title: Firefox 136
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 12b40a940857526acdc13fec68e668f67c61c4cc
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt haben. Das spezifische Autokorrekturverhalten hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox-Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gibt an, dass das Element editierbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung im eingefügten Text wird automatisch entfernt. ([Firefox-Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalt in ein {{HTMLElement("slot")}}-Element bei der Darstellung eines [Webkomponenten](/de/docs/Web/API/Web_components) hinzugefügt haben. ([Firefox-Bug 1940691](https://bugzil.la/1940691)).
- Die Pseudoklasse [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) wird jetzt unterstützt und ermöglicht es Ihnen, jedes Element auszuwählen, das sich derzeit in einem offenen Zustand befindet. Dies gilt für {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die ein Dropdown-Menü anzeigen. ([Firefox-Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}}-CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben jetzt einen einzelnen Farb-Stop und Positionen von 0 bis 1. Dies erzeugt eine einzige, einheitliche Farbe und wird zur Einstellung der {{cssxref("mask")}}-CSS-Eigenschaft verwendet. ([Firefox-Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht die lokal-sensitive Formatierung von Zeitdauern. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}}-HTTP-Header wird jetzt in Anfragen nach einem Seitenaktualisierung gesendet, das auf eine neue Seite umleitet (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt) und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL gesetzt nach der Navigation.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}}-Antwort-Header ausgelöst werden oder ein entsprechendes {{htmlelement("meta")}} im Markup (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Aktualisierungen derselben Seite als Navigation zu einem Seitenfragment behandelt werden: da die Seite nicht neu angefragt wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox-Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32MB auf 512MB erhöht, um das Limit für Chromium-Browser zu erreichen. ([Firefox-Bug 1911300](https://bugzil.la/1911300)).

- Eigenschaften von Elementen werden jetzt für die [Aria-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references), reflektiert. ([Firefox-Bug 1919102](https://bugzil.la/1919102)).

  Dies schließt ein:
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) in der [`Element`](/de/docs/Web/API/Element) Schnittstelle
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements) in der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle.

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Video senden und empfangen, das mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) codiert wurde.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Einzelsendungen verwendet werden.
  ([Firefox-Bug 1944878](https://bugzil.la/1944878) und [Firefox-Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcasting von bildschirmgeteiltem Video mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcasting verwendet werden).
  Beachten Sie, dass der H264-Codec hardwareunterstützt auf Android ist.
  ([Firefox-Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht das codec-unabhängige Weiterleiten von Simulcast-Streams, auch in Szenarien, in denen der Payload end-to-end verschlüsselt (E2EE) ist.
  ([Firefox-Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt jetzt WebSocket-Portkonflikte für den RemoteAgent effizienter. Wenn der über das Kommandozeilenargument `--remote-debugging-port` angegebene Port nicht innerhalb von 5 Sekunden erworben werden kann, z. B. wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox jetzt heruntergefahren, anstatt zu hängen. ([Firefox-Bug 1927721](https://bugzil.la/1927721)).

- Navigationen über das HTTP-Schema, die durch den Befehl `WebDriver:Navigate` in Marionette oder `browsingContext.navigate` in WebDriver BiDi ausgelöst werden, werden nicht mehr automatisch auf HTTPS aktualisiert. Diese Anfragen bleiben jetzt wie vorgesehen auf HTTP. ([Firefox-Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um gezielt die gleichen zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement zu entfernen. Dies hilft, unbeabsichtigte Nebenwirkungen zu vermeiden, wenn mehrere Abonnements existieren, wie z. B. solche, die auf einen bestimmten Tab beschränkt sind. ([Firefox-Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die vorherige Logik zum Entfernen von Ereignissen nach Namen und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das Feld `userContexts` im Befehl `script.addPreloadScript` hinzugefügt, sodass Clients angeben können, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browserkontexte, die innerhalb solcher spezifizierter Benutzerkontexte geöffnet werden. ([Firefox-Bug 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt jetzt einen vollständig serialisierten Browsing-Kontextbaum zurück, wenn ein Kontext geschlossen wird, einschließlich aller seiner untergeordneten Kontexte. ([Firefox-Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` zum [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, die es Erweiterungen ermöglicht, anzufordern, dass der Browser ihre Hintergrundskripte als Dokument oder als Service Worker ausführt. ([Firefox-Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase `contextMenus.update` und `contextMenus.remove` lehnen jetzt mit einem Fehler ab, wenn das Menüpunktelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist in Desktop-Firefox verfügbar. Diese API-Version ist für die Verwendung in Manifest V3-Erweiterungen bestimmt und bietet eine breite Kompatibilität mit Chrome, obwohl die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterschiedlich sind. ([Firefox-Bug 1943050](https://bugzil.la/1943050)).
- Die Eigenschaft `canResume` von {{WebExtAPIRef("downloads.DownloadItem")}} ist nun auf `true` gesetzt, wenn ein Download mit `NETWORK_FAILED` fehlschlägt. Dies ermöglicht es, Downloads, die aufgrund eines Netzwerkfehlers scheitern, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}} fortzusetzen. ([Firefox-Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 136 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite mit den [Experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars`-Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}}-CSS-Eigenschaft wird verwendet, um die Mindestlänge eines Wortes für die Trennung sowie die Anzahl der Zeichen vor und nach dem Trennstrich festzulegen. ([Firefox-Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stapelverfolgungsinformationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Ihr Hauptanwendungsfall ist das Installieren einer Stapelverfolgung auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox-Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu löschen.
  ([Firefox-Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`.
  Das `<discard>`-SVG-Element ermöglicht es Entwicklern, einen Auslöser anzugeben, wie die vergangene Zeit seit das SVG in den DOM geladen wurde oder das Ende einer bestimmten Animation, zu dem ein angegebenes Element und dessen Kinder aus dem DOM entfernt werden sollten. Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem animierte Elemente verworfen werden, die nicht mehr benötigt werden.
  ([Firefox-Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe String-Daten zu parsen. ([Firefox-Bug 1934525](https://bugzil.la/1934525)).
