---
title: Versionshinweise zu Firefox 136 für Entwickler
short-title: Firefox 136
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 wurde am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) ermöglicht die Autokorrektur in editierbaren Textelementen, darunter die meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elemente und Elemente, bei denen das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt ist. Das spezifische Verhalten der Autokorrektur hängt vom User-Agent und vom zugrunde liegenden Betriebssystem ab. ([Firefox-Bug 1927977](https://bugzil.la/1927977)).
- Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gibt an, dass das Element editierbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt ([Firefox-Bug 1922724](https://bugzil.la/1922724)).

### CSS

- Die {{CSSXRef(":has-slotted")}}-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu formatieren, deren Inhalt beim Rendern einer [Webkomponente](/de/docs/Web/API/Web_components) einem {{HTMLElement("slot")}}-Element hinzugefügt wird ([Firefox-Bug 1940691](https://bugzil.la/1940691)).
- Die Pseudoklasse [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) wird nun unterstützt und ermöglicht es Ihnen, jedes Element auszuwählen, das sich derzeit in einem geöffneten Zustand befindet. Dies gilt für die Elemente {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}} mit einer Auswahloberfläche sowie {{htmlelement("select")}}-Elemente, die ein Dropdown-Feld darstellen. ([Firefox-Bug 1936113](https://bugzil.la/1936113)).
- Die {{cssxref("gradient")}}-CSS-Funktionen {{cssxref("linear-gradient")}}, {{cssxref("conic-gradient")}} und {{cssxref("radial-gradient")}} erlauben nun einen einzelnen Farb-Stopp und Positionen von 0–1. Dadurch wird eine einzelne Volltonfarbe erzeugt; dies wird beim Setzen der CSS-Eigenschaft {{cssxref("mask")}} verwendet. ([Firefox-Bug 1900530](https://bugzil.la/1900530)).

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird nun unterstützt und ermöglicht die gebietsschemaabhängige Formatierung von Zeitspannen. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

### HTTP

- Der HTTP-Header {{httpheader("Referer")}} wird nun bei Anfragen gesendet, die auf eine Seitenaktualisierung folgen und auf eine neue Seite umleiten, sofern dies durch {{httpheader("Referrer-Policy")}} erlaubt ist. [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.
  Die Seitenaktualisierung kann durch den Response-Header {{httpheader("Refresh")}} oder durch ein entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (beispielsweise `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Aktualisierungen derselben Seite als Navigation derselben Seite zu einem Seitenfragment behandelt werden: Da die Seite nicht erneut angefordert wird, wird {{httpheader("Referer")}} nicht gesendet.
  ([Firefox-Bug 1928291](https://bugzil.la/1928291))

### APIs

- Die maximale Größe von [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) wurde von 32 MB auf 512 MB erhöht und entspricht damit dem Limit für Chromium-Browser ([Firefox-Bug 1911300](https://bugzil.la/1911300)).

- Element-Eigenschaften werden nun für [ARIA-Attribute reflektiert, die Elementreferenzen enthalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) ([Firefox-Bug 1919102](https://bugzil.la/1919102)).

  Dazu gehören:
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) in der Schnittstelle [`Element`](/de/docs/Web/API/Element)
  - [`ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement), [`ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements), [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements), [`ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements), [`ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements), [`ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements), [`ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements), [`ariaOwnsElements`](/de/docs/Web/API/ElementInternals/ariaOwnsElements) in der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals).

#### Medien, WebRTC und Web Audio

- WebRTC kann nun mit dem [AV1-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table) kodierte Videos senden und empfangen.
  Beim Senden kann er sowohl für das Senden mehrerer gleichzeitiger Versionen derselben Quelle („[Simulcast](/de/docs/Web/API/WebRTC_API/Protocols#simulcast)“) als auch für Singlecast verwendet werden.
  ([Firefox-Bug 1944878](https://bugzil.la/1944878) und [Firefox-Bug 1932065](https://bugzil.la/1932065)).
- WebRTC-Simulcast von per Bildschirmfreigabe übertragenen Videos mit dem [H264-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) wird ebenfalls unterstützt (AV1, H264 und [VP8](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) können nun für Simulcast verwendet werden).
  Beachten Sie, dass der H264-Codec unter Android hardwarebeschleunigt ist.
  ([Firefox-Bug 1210175](https://bugzil.la/1210175)).
- WebRTC-Unterstützung für die [Dependency Descriptor (DD) RTP Header Extension](/de/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension) und deren Verwendung mit den Codecs AV1, VP8 und VP9.
  Die DD-Header-Erweiterung ermöglicht die codecunabhängige Weiterleitung von Simulcast-Streams, auch in Szenarien, in denen die Nutzlast Ende-zu-Ende-verschlüsselt (E2EE) ist.
  ([Firefox-Bug 1945261](https://bugzil.la/1945261)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Firefox behandelt WebSocket-Portkonflikte für den RemoteAgent nun effizienter. Wenn der über das Befehlszeilenargument `--remote-debugging-port` angegebene Port nicht innerhalb von 5 Sekunden reserviert werden kann, etwa weil er bereits von einem anderen Firefox-Prozess verwendet wird, wird Firefox nun beendet, anstatt hängen zu bleiben ([Firefox-Bug 1927721](https://bugzil.la/1927721)).

- Navigationen über das HTTP-Schema, die durch den Befehl `WebDriver:Navigate` in Marionette oder `browsingContext.navigate` in WebDriver BiDi ausgelöst werden, werden nicht mehr automatisch auf HTTPS aktualisiert. Diese Anfragen bleiben nun wie vorgesehen bei HTTP ([Firefox-Bug 1943551](https://bugzil.la/1943551)).

#### WebDriver BiDi

- Der Befehl `session.subscribe` gibt nun eine Abonnement-ID zurück, die mit `session.unsubscribe` verwendet werden kann, um genau dieselben zuvor abonnierten Ereignisse und Kontexte wie beim ursprünglichen Abonnement anzusprechen. Dadurch werden unbeabsichtigte Nebeneffekte verhindert, wenn mehrere Abonnements vorhanden sind, etwa solche, die auf einen bestimmten Tab beschränkt sind ([Firefox-Bug 1938576](https://bugzil.la/1938576)).

  Hinweis: Die bisherige Logik zum Entfernen von Ereignissen nach Name und Kontext wurde als veraltet eingestuft und wird in einer zukünftigen Version entfernt.

- Unterstützung für das Feld `userContexts` im Befehl `script.addPreloadScript` wurde hinzugefügt. Dadurch können Clients angeben, in welchen Benutzerkontexten (Containern) das Skript stets automatisch geladen werden soll, einschließlich aller neuen Browsing-Kontexte, die innerhalb dieser angegebenen Benutzerkontexte geöffnet werden ([Firefox-Bug 1940927](https://bugzil.la/1940927)).

- Das Ereignis `browsingContext.contextDestroyed` gibt nun beim Schließen eines Kontexts einen vollständig serialisierten Browsing-Kontext-Baum zurück, einschließlich aller seiner untergeordneten Kontexte ([Firefox-Bug 1860955](https://bugzil.la/1860955)).

## Änderungen für Add-on-Entwickler

- Fügt die Eigenschaft `preferred_environment` zum [`background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) hinzu, sodass Erweiterungen anfordern können, dass der Browser ihre Hintergrundskripte als Dokument oder Service Worker ausführt ([Firefox-Bug 1798655](https://bugzil.la/1798655)).
- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase `contextMenus.update` und `contextMenus.remove` lehnen nun mit einem Fehler ab, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Promise erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).
- Eine neue Version der {{WebExtAPIRef("userScripts")}}-API ist in Firefox für Desktop verfügbar. Diese Version der API ist für die Verwendung in Manifest-V3-Erweiterungen bestimmt und bietet breite Kompatibilität mit Chrome, obwohl sich die [Berechtigungsmechanismen](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) zwischen den Browsern unterscheiden. ([Firefox-Bug 1943050](https://bugzil.la/1943050)).
- Die Eigenschaft `canResume` von {{WebExtAPIRef("downloads.DownloadItem")}} wird nun auf `true` gesetzt, wenn ein Download mit `NETWORK_FAILED` fehlschlägt. Dies ermöglicht die Fortsetzung von Downloads, die aufgrund eines Netzwerkfehlers fehlgeschlagen sind, mit {{WebExtAPIRef("downloads.resume","downloads.resume()")}}. ([Firefox-Bug 1694049](https://bugzil.la/1694049)).

## Experimentelle Webfeatures

Diese Features werden mit Firefox 136 neu ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Eigenschaft `hyphenate-limit-chars`**: `layout.css.hyphenate-limit-chars.enabled`.
  Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} wird verwendet, um die minimale Wortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox-Bug 1521723](https://bugzil.la/1521723)).
- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stack-Trace-Informationen als Eigenschaft {{jsxref("Error.stack")}} auf einem bereitgestellten Objekt.
  Ihr Hauptanwendungsfall besteht darin, einen Stack-Trace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der Schnittstelle {{jsxref("Error")}} abgeleitet ist.
  ([Firefox-Bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  Der Header [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) kann mit den Direktiven [`cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) oder `*` verwendet werden, um den Browser-Cache zu leeren.
  ([Firefox-Bug 1942272](https://bugzil.la/1942272)).
- **SVG-Element `<discard>` für SVG-Animationen**: `svg.discard.enabled`.
  Das SVG-Element `<discard>` ermöglicht Entwicklern, einen Auslöser anzugeben, beispielsweise die seit dem Laden des SVG in das DOM vergangene Zeit oder das Ende einer bestimmten Animation, bei dem ein angegebenes Element und seine Kindelemente aus dem DOM entfernt werden sollen. Dadurch kann ein SVG-Viewer Speicher sparen, indem animierte Elemente verworfen werden, die nicht mehr benötigt werden.
  ([Firefox-Bug 1069931](https://bugzil.la/1069931)).
- **SVG-Path-API-Methoden**: `dom.svg.pathSegment.enabled`.
  Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathElement/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathElement/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathElement/getPathSegmentAtLength) der Schnittstelle [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) werden nun unterstützt. Diese Methoden bieten eine praktische Möglichkeit, mit SVG-Pfaddaten zu arbeiten, anstatt rohe Zeichenfolgendaten zu parsen. ([Firefox-Bug 1934525](https://bugzil.la/1934525)).
