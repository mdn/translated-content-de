---
title: Firefox 149 Versionshinweise für Entwickler (Stable)
short-title: Firefox 149 (Stable)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 03d0f9c7f12ab197ec28ca085bd3723b15b02296
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen. Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popups mit dem Wert `hint` schließen keine `auto` Popups, wenn sie angezeigt werden, schließen jedoch andere hint Popups. ([Firefox Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}} Elemente angewendet. Dies stellt sicher, dass Websites eine geeignete Mathe-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("shape-outside")}} unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Dies ermöglicht es, eine Form zu definieren, um herum Inline-Inhalte fließen, indem Entfernungen von den linken (`x`) und oberen (`y`) Kanten des enthaltenden Blocks sowie Breite (`w`) und Höhe (`h`) verwendet werden. ([Firefox Bug 1983187](https://bugzil.la/1983187)).

- Die CSS-Eigenschaft {{CSSXRef("vertical-align")}} ist jetzt eine Kurzform für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox Bug 1830771](https://bugzil.la/1830771)).

- Der Teil [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query) der {{cssxref("@container")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules)-Bedingung ist jetzt optional. Dies ermöglicht das Abgleichen gegen Container basierend ausschließlich auf ihren Namen. ([Firefox Bug 2016474](https://bugzil.la/2016474)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt. Zusätzlich erlauben die Methoden jetzt, dass sowohl Größenänderungsoptionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bildbitmap-Parameter ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig gesetzt werden können — zuvor wurde bei Einstellung beider der unskalierte Quellbitmap zurückgegeben. ([Firefox Bug 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird jetzt für das Berichten von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)- und {{httpheader("Integrity-Policy")}}-Verletzungen unterstützt. Dies ermöglicht das Berichten von Objekten, die [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport) Objekte sind, auf verletzenden Seiten unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) (Berichte können auf die `type` Eigenschaft gefiltert werden: `"csp-violation"` oder `"integrity-violation"`). Eine serialisierte Version der Berichtsobjekte kann auch an einen Berichtsserver gesendet werden, der im entsprechenden HTTP-Header angegeben ist — Endpunktnamen und entsprechende URLs müssen zuerst im {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Header definiert werden. ([Firefox Bug 1976074](https://bugzil.la/1976074), [Firefox Bug 2008916](https://bugzil.la/2008916)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einer {{htmlelement("datalist")}} definiert sind. Dies ermöglicht, dass der Browser-Picker für ein `<datalist>` programmatisch gestartet werden kann, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt. Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, wie z.B. die <kbd>Esc</kbd>-Taste auf Windows oder die <kbd>Zurück</kbd>-Taste auf Android, in der gleichen Weise wie integrierte Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popups](/de/docs/Web/API/Popover_API). ([Firefox Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Palette von Zeichen für Element- und Attributnamen. Bisher waren DOM-Methoden deutlich restriktiver, jetzt erlauben sie den gleichen Zeichensatz wie der HTML-Parser. Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle. ([Firefox Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt. Dies gibt ein Objekt zurück, das die Echtzeitaufnahme des Inhalts im Element streamt. Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden. Zuvor war `captureStream()` nur als nicht standardisierte Methode `mozCaptureStream()` verfügbar. ([Firefox Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) berücksichtigt jetzt die Lautstärke des Medienelements, wenn Audio für alle Arten von Quellen erfasst wird (wie in der Spezifikation gefordert). Zuvor hatte das Einstellen der Lautstärke des Elements keinen Einfluss auf das erfasste Audio von [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen. ([Firefox Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt rohes Audio von der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig von der Art der Quelle, die das Medienelement abspielt (wie in der Spezifikation gefordert). Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des erfassten Streams. ([Firefox Bug 2010427](https://bugzil.la/2010427)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Screenshot-Implementierungen für die WebDriver BiDi- und WebDriver-Klassik-Protokolle wurden aktualisiert, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Dimensionen überschreitet, anstatt ihn stillschweigend abzuschneiden. ([Firefox Bug 1994148](https://bugzil.la/1994148)).
- Die Handlungen-Implementierung für beide WebDriver BiDi- und WebDriver-Klassik-Protokolle wurde aktualisiert, um eine `scroll` Handlung des Eingabequellentyps `wheel` zu ermöglichen, mehr als die visuelle Viewport-Dimensionen zu scrollen. ([Firefox Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für automatische Benutzeraufforderungshandhabung hinzugefügt, die über Fähigkeiten mit dem Befehl `session.new` konfiguriert werden kann. ([Firefox Bug 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` hinzugefügt, der es Clients ermöglicht, Downloads zu erlauben oder zu verbieten und auch einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontext konfiguriert werden. ([Firefox Bug 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker-Bereiche (für dedizierte, geteilte und Service-Worker) hinzugefügt. ([Firefox Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Kontext-ID der obersten Ebene statt der Kontext-ID des iframes auf Android meldeten. ([Firefox Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten wurde korrigiert, um spezifische Schattenwurzeln des User-Agents nicht mehr offenzulegen. ([Firefox Bug 2016673](https://bugzil.la/2016673)).
- Die Logik des Anwendens unterschiedlicher Einstellungen auf neue Browsing-Kontexte wurde aktualisiert, um sicherzustellen, dass im Fall des Erstellens eines Browsing-Kontexts mit dem Befehl `window.open`, Emulationen, Viewport-Überschreibungen und Preload-Skripte angewendet werden, bevor der Befehl zurückkehrt. ([Firefox Bug 1985997](https://bugzil.la/1985997), [Firefox Bug 2005546](https://bugzil.la/2005546), und [Firefox Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere WebDriver-Klassik-Befehle verbessert, um `implizite` und `pageLoad` Timeouts im Einklang mit dem Skript-Timeout zu handhaben und `null` Werte zuzulassen, um die Timeouts zu deaktivieren. ([Firefox Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Unterstützt wird die anfängliche Unterstützung für geteilte Ansicht. Diese Unterstützung umfasst:
  - Aufnahme der geteilten Ansichts-ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht umfassen. ([Firefox Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als oberster Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Bug 2013477](https://bugzil.la/2013477))
- Eine Benutzeraktion ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen können. Diese Funktion war hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` in Firefox 108 verfügbar. Diese Änderung passt das Verhalten von Firefox an Chrome und Safari an. ([Firefox Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} zuerst aufgerufen werden. Diese Änderung passt das Firefox-Verhalten an Chrome an. ([Firefox Bug 2011516](https://bugzil.la/2011516))

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. ([Firefox Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar und die Beta- und Release-Versionen von Firefox zeigen eine Warnung in der Konsole des Tabs an. Diese Beschränkung wird für alle Versionen von Firefox 152 und höher gelten. ([Firefox Bug 2015559](https://bugzil.la/2015559)) Stattdessen kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert wird und dann eine Nachricht gesendet wird, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter, der auf [page action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons in dunklen Themen angewendet wird, ist in Nightly-Builds deaktiviert ([Firefox Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Ausgaben ab Version 152 deaktiviert werden ([Firefox Bug 2016509](https://bugzil.la/2016509)). Sie können Page Action SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Ausgaben testen, indem Sie ein boolean `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und es auf `false` setzen.

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 149 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Sie finden mehr solcher Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)-Werte. Dies ermöglicht es, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, anstatt nur zwei. Dies ermöglicht es, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie "spielend" oder "pausiert", zu stylen. ([Firefox Bug 1707584](https://bugzil.la/1707584), [Firefox Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabe-Elementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Styles auf seine Kinder anzuwenden. ([Firefox Bug 2014404](https://bugzil.la/2014404)).

- **CSS Typisierte Objektmodell Level 1**: `layout.css.typed-om.enabled`

  Die CSS Typisierte Objektmodell Level 1 Spezifikation wird implementiert. In dieser Version wurde Unterstützung für die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) hinzugefügt, die es ermöglicht, einen CSS-numerischen Wert von einer Einheit in eine andere umzuwandeln. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildsupport: Rust-basierter Decoder** (nur Nightly): `image.jxl.enabled`

  Der bisherige C++ [JPEG XL](https://jpeg.org/jpegxl/)-Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet. ([Firefox Bug 1986393](https://bugzil.la/1986393)).
