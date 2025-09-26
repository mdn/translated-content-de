---
title: Firefox 136 für Entwickler
short-title: Firefox 136
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 9584088475846ff014dadddf8f6eff25c0796bbb
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, einschließlich der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt haben. Das spezifische Verhalten der Autokorrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox-Bug 1927977](https://bugzil.la/1927977)).
- Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox-Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente innerhalb eines {{HTMLElement("template")}} zu stylen, die Inhalte zu einem {{HTMLElement("slot")}}-Element hinzugefügt haben, wenn ein [Web Component](/de/docs/Web/API/Web_components) gerendert wird. ([Firefox-Bug 1940691](https://bugzil.la/1940691)).
- Die Pseudoklasse [`:open`](/de/docs/Web/CSS/:open) wird jetzt unterstützt und ermöglicht es Ihnen, jedes Element auszuwählen, das sich derzeit in einem geöffneten Zustand befindet. Dies gilt für die {{htmlelement("details")}}-, {{htmlelement("dialog")}}-, {{htmlelement("input")}}-Elemente mit einem Auswahlfeld und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld präsentieren. ([Firefox-Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}}-CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben jetzt einen einzigen Farbstopp und 0-1-Positionen. Dies erzeugt eine einzelne Volltonfarbe und wird beim Setzen der CSS-Eigenschaft {{cssxref("mask")}} verwendet. ([Firefox-Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht eine lokalsensible Formatierung von Zeitdauern. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}}-HTTP-Header wird jetzt bei Anfragen gesendet, die einem Seiten-Refresh folgen, der zu einer neuen Seite weiterleitet (wenn dies durch die {{httpheader("Referrer-Policy")}} erlaubt ist), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.
  Der Seiten-Refresh kann durch den {{httpheader("Refresh")}}-Antwortheader oder ein äquivalentes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Seitenaktualisierungen, die sich auf dieselbe Seite beziehen, als gleiche Seitennavigation zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird der {{httpheader("Referer")}} nicht gesendet.
  ([Firefox-Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32MB auf 512MB erhöht, was dem Limit für Chromium-Browser entspricht. ([Firefox-Bug 1911300](https://bugzil.la/1911300)).

- Eigenschaften von Elementen werden jetzt für die [Aria-Attribute, die Verweise auf Elemente enthalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references), widergespiegelt. ([Firefox-Bug 1919102](https://bugzil.la/1919102)).

  Dies umfasst:
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) in der [`Element`](/de/docs/Web/API/Element) Schnittstelle
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements) in der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle.

#### Medien, WebRTC und Web Audio

- WebRTC kann jetzt Video, das mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) codiert ist, senden und empfangen.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für Singlecast verwendet werden.
  ([Firefox-Bug 1944878](https://bugzil.la/1944878) und [Firefox-Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von bildschirmfreigegebenem Video mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264, und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardwarebeschleunigt ist.
  ([Firefox-Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Nutzung mit AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht das codecunabhängige Weiterleiten von Simulcast-Streams, einschließlich Szenarien, in denen die Nutzlast Ende-zu-Ende-verschlüsselt (E2EE) ist.
  ([Firefox-Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox handhabt jetzt Portkonflikte von WebSockets für den RemoteAgent effizienter. Wenn der über das `--remote-debugging-port`-Kommandozeilenargument angegebene Port nicht innerhalb von 5 Sekunden erworben werden kann, zum Beispiel wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox jetzt heruntergefahren anstatt hängen zu bleiben. ([Firefox-Bug 1927721](https://bugzil.la/1927721)).

- Navigationen über das HTTP-Schema, die durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi ausgelöst werden, werden nicht mehr automatisch auf HTTPS umgestellt. Diese Anfragen bleiben nun auf HTTP, wie vorgesehen ([Firefox-Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der `session.subscribe`-Befehl gibt jetzt eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um die gleichen zuvor abonnierten Ereignisse und Kontexte wie das ursprüngliche Abonnement gezielt aufzuheben. Dies hilft, unbeabsichtigte Nebenwirkungen zu vermeiden, wenn mehrere Abonnements vorhanden sind, wie z.B. solche, die auf einen bestimmten Tab beschränkt sind. ([Firefox-Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die vorherige Logik zum Entfernen von Ereignissen nach Name und Kontext wurde veraltet und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im `script.addPreloadScript`-Befehl hinzugefügt, das es Clients ermöglicht, anzugeben, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich aller neuen Browser-Kontexte, die innerhalb solcher spezifizierten Benutzerkontexte geöffnet werden ([Firefox-Bug 1940927](https://bugzil.la/1940927)).

- Das `browsingContext.contextDestroyed`-Ereignis gibt jetzt einen vollständig serialisierten Browser-Kontextbaum zurück, wenn ein Kontext geschlossen wird, einschließlich aller seiner Kindkontexte. ([Firefox-Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` dem [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, die Erweiterungen ermöglicht, den Browser darum zu bitten, ihre Hintergrundskripte als Dokument oder Service Worker auszuführen ([Firefox-Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen jetzt mit einem Fehler ab, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist in der Desktop-Version von Firefox verfügbar. Diese Version der API ist für die Verwendung in Manifest V3-Erweiterungen vorgesehen und bietet breite Kompatibilität mit Chrome, obwohl sich die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox-Bug 1943050](https://bugzil.la/1943050)).
- Die `canResume`-Eigenschaft von {{WebExtAPIRef("downloads.DownloadItem")}} wird jetzt auf `true` gesetzt, wenn ein Download mit `NETWORK_FAILED` fehlschlägt. Dadurch können Downloads, die aufgrund eines Netzwerkfehlers fehlschlagen, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}} fortgesetzt werden. ([Firefox-Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 136 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars`-Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} wird verwendet, um die minimale Wortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich anzugeben. ([Firefox-Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptnutzungsfall besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox-Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit den [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)- oder `*`-Direktiven verwendet werden, um den Browser-Cache zu leeren.
  ([Firefox-Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}}-SVG-Element ermöglicht es Entwicklern, einen Auslöser zu spezifizieren, wie z.B. die verstrichene Zeit seit dem Laden der SVG in den DOM oder das Ende einer bestimmten Animation, zu dem ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollen. Dadurch kann ein SVG-Viewer Speicher sparen, indem animierte Elemente verworfen werden, die nicht mehr benötigt werden.
  ([Firefox-Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu parsen. ([Firefox-Bug 1934525](https://bugzil.la/1934525)).
