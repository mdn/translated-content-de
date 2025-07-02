---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) ermöglicht die Autokorrektur in bearbeitbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut. Das spezifische Verhalten der Autokorrektur hängt vom Benutzeragenten und dem zugrunde liegenden Betriebssystem ab. ([Firefox Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; die Formatierung von Text wird deaktiviert und jede Formatierung im eingefügten Text wird automatisch entfernt ([Firefox Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, denen Inhalte zu einem {{HTMLElement("slot")}}-Element hinzugefügt wurden, während ein [Web-Component](/de/docs/Web/API/Web_components) gerendert wird ([Firefox Bug 1940691](https://bugzil.la/1940691)).
- Die [`:open`](/de/docs/Web/CSS/:open)-Pseudoklasse wird nun unterstützt und ermöglicht es, jedes Element auszuwählen, das sich aktuell in einem offenen Zustand befindet. Dies gilt für die {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}}-Elemente mit einem Picker und {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld darstellen. ([Firefox Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}}-CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben nun einen einzigen Farbstop und 0-1-Positionen. Dies erzeugt eine einfarbige Fläche und wird beim Setzen der {{cssxref("mask")}}-CSS-Eigenschaft verwendet. ([Firefox Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt, was eine lokalisierungsabhängige Formatierung von Zeitdauern ermöglicht. ([Firefox Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt bei Anfragen nach einem Seiten-Refresh, der auf eine neue Seite umleitet (wenn erlaubt durch die {{httpheader("Referrer-Policy")}}), gesendet, und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.
  Der Seiten-Refresh kann durch den {{httpheader("Refresh")}}-Antwortheader ausgelöst werden oder durch ein entsprechendes {{htmlelement("meta")}} im Markup (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass gleichseitige Refreshes als Navigation zu einem Seitenfragment betrachtet werden: Da die Seite nicht neu angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32 MB auf 512 MB erhöht, um das Limit für Chromium-Browser anzupassen ([Firefox Bug 1911300](https://bugzil.la/1911300)).

- Eigenschaften von Elementen werden nun für die [Aria-Attribute, die Elementreferenzen enthalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references), reflektiert ([Firefox Bug 1919102](https://bugzil.la/1919102)).

  Dazu gehören:
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) in der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements) in der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle.

#### Medien, WebRTC und Web Audio

- WebRTC kann nun Video senden und empfangen, das mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodiert ist.
  Beim Senden kann es sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle ("[simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)") als auch für das singlecast verwendet werden.
  ([Firefox Bug 1944878](https://bugzil.la/1944878) und [Firefox Bug 1932065](https://bugzil.la/1932065)).
- Das Simulcast von WebRTC von bildschirmgeteilten Videos mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können jetzt für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec auf Android hardwarebeschleunigt ist.
  ([Firefox Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit den AV1-, VP8- und VP9-Codecs.
  Die DD-Header-Erweiterung ermöglicht das codec-unabhängige Weiterleiten von Simulcast-Streams, auch in Szenarien, in denen der Payload End-to-End-verschlüsselt ist (E2EE).
  ([Firefox Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt nun WebSocket-Portkonflikte für den RemoteAgent effizienter. Wenn der über das `--remote-debugging-port`-Kommandozeilenargument angegebene Port nicht innerhalb von 5 Sekunden bereitgestellt werden kann, zum Beispiel wenn ein anderer Firefox-Prozess ihn bereits verwendet, wird Firefox jetzt heruntergefahren, anstatt hängen zu bleiben ([Firefox Bug 1927721](https://bugzil.la/1927721)).

- Navigationen, die durch das HTTP-Schema ausgelöst werden und durch den `WebDriver:Navigate`-Befehl in Marionette oder `browsingContext.navigate` in WebDriver BiDi initiiert wurden, werden nicht mehr automatisch auf HTTPS hochgestuft. Diese Anfragen verbleiben nun wie beabsichtigt auf HTTP ([Firefox Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt nun eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um exakt die gleiche, zuvor abonnierte Ereignisse und Kontexte wie das ursprüngliche Abonnement zu entfernen. Dies hilft, unbeabsichtigte Nebeneffekte zu vermeiden, wenn mehrere Abonnements existieren, wie solche, die auf einen bestimmten Tab beschränkt sind ([Firefox Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die vorherige Logik zum Entfernen von Ereignissen nach Namen und Kontext wurde abgelehnt und wird in einer zukünftigen Version entfernt.

- Unterstützung für das `userContexts`-Feld im `script.addPreloadScript`-Befehl hinzugefügt, wodurch Clients angeben können, in welchen Benutzerkontexten (Containern) das Skript immer automatisch geladen werden soll, einschließlich neuer Browsing-Kontexte, die innerhalb solcher angegebenen Benutzerkontexte geöffnet werden ([Firefox Bug 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun einen vollständig serialisierten Browsing-Kontext-Baum zurück, wenn ein Kontext geschlossen wird, einschließlich aller untergeordneten Kontexte ([Firefox Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die `preferred_environment`-Eigenschaft zum [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, wodurch Erweiterungen angeben können, dass der Browser ihre Background-Skripte entweder als Dokument oder als Service Worker ausführen soll ([Firefox Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} und die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen nun mit einem Fehler ab, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Versprechen erfüllt. ([Firefox Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist auf dem Desktop von Firefox verfügbar. Diese Version der API soll in Manifest V3-Erweiterungen verwendet werden und bietet breite Kompatibilität mit Chrome, obwohl sich die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox Bug 1943050](https://bugzil.la/1943050)).
- Die `canResume`-Eigenschaft von {{WebExtAPIRef("downloads.DownloadItem")}} ist nun auf `true` gesetzt, wenn ein Download mit `NETWORK_FAILED` fehlschlägt. Dies ermöglicht es, Downloads, die aufgrund eines Netzwerkfehlers fehlschlagen, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}} fortzusetzen. ([Firefox Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 136 enthalten, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `hyphenate-limit-chars`-Eigenschaft**: `layout.css.hyphenate-limit-chars.enabled`.
  Die {{CSSXRef("hyphenate-limit-chars")}}-CSS-Eigenschaft wird verwendet, um die minimale Wortlänge für Trennungen sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stack-Trace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptanwendungsfall ist, einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist, einen Stack-Trace zuzuweisen.
  ([Firefox Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Header kann mit den [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) oder `*` Direktiven verwendet werden, um den Browser-Cache zu leeren.
  ([Firefox Bug 1942272](https://bugzil.la/1942272)).
- **SVG `<discard>`-Element für SVG-Animationen**: `svg.discard.enabled`.
  Das {{svgelement("discard")}}-SVG-Element erlaubt es Entwicklern, einen Auslöser anzugeben, wie die vergangene Zeit seit das SVG in den DOM geladen wurde oder das Ende einer bestimmten Animation, zu dem ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollten. Dies ermöglicht es einem SVG-Viewer, Speicher zu sparen, indem animierte Elemente, die nicht mehr benötigt werden, entfernt werden.
  ([Firefox Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Pfad-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Die [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength)-Methoden der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)-Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten umzugehen, anstatt rohe Zeichenfolgendaten zu analysieren. ([Firefox Bug 1934525](https://bugzil.la/1934525)).

## Ältere Versionen

{{Firefox_for_developers}}
