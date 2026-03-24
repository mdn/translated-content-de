---
title: Firefox 149 Versionshinweise für Entwickler (Stable)
short-title: Firefox 149 (Stable)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: f06cc15f245827dbd559bbec481750e1b1772105
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt nun den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popover mit dem Wert `hint` schließen keine `auto` Popover, wenn sie angezeigt werden, schließen jedoch andere Hint-Popover. ([Firefox Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete mathematische Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die {{CSSXRef("shape-outside")}} CSS-Eigenschaft unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Dies ermöglicht es Ihnen, eine Form zu definieren, um die Inline-Inhalte herumfließen, unter Verwendung von Abständen vom linken (`x`) und oberen (`y`) Rand des umschließenden Blocks sowie einer Breite (`w`) und Höhe (`h`). ([Firefox Bug 1983187](https://bugzil.la/1983187)).

- Die {{CSSXRef("vertical-align")}} CSS-Eigenschaft ist jetzt eine Kurzform für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox Bug 1830771](https://bugzil.la/1830771)).

- Der [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query) Teil der {{cssxref("@container")}} [At-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules)-Bedingung ist jetzt optional.
  Dies ermöglicht das Matching gegen Container ausschließlich basierend auf ihren Namen.
  ([Firefox Bug 2016474](https://bugzil.la/2016474)).

### JavaScript

- Der `"islamic-umalqura"` [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) wird jetzt von {{jsxref("Intl")}} unterstützt.
  Dieser String wird in der Liste der Kalender sein, die von {{jsxref("Intl.supportedValuesOf()")}} zurückgegeben werden, und kann als der Parameter [`options.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar) im [`DateTimeFormat()` Konstrukteur](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) gesetzt werden.
  ([Firefox Bug 2011505](https://bugzil.la/2011505)).

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Darüber hinaus ermöglichen die Methoden jetzt, sowohl Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bild-Bitmap-Parameter ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig einzustellen — vorher führte das Einstellen beider zur Ausgabe des unskalierten Quell-Bitmaps.
  ([Firefox Bug 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird jetzt unterstützt, um [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und {{httpheader("Integrity-Policy")}} Verstöße zu melden.
  Diese API erlaubt es, [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport) Objekte auf verletzenden Seiten mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zu berichtigen (Berichte können über die Eigenschaft `type` gefiltert werden: `"csp-violation"` oder `"integrity-violation"`).
  Eine serialisierte Version der Berichtsobjekte kann auch an einen Reporting-Server gesendet werden, der im entsprechenden HTTP-Header angegeben ist — Endpoint-Namen und zugehörige URLs müssen zuerst in den HTTP-Antwort-Headern {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} definiert werden.
  ([Firefox Bug 1976074](https://bugzil.la/1976074), [Firefox Bug 2008916](https://bugzil.la/2008916)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht es, den Browser-Picker für ein `<datalist>` programmgesteuert zu starten, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies erlaubt es Entwicklern, Komponenten zu implementieren, die mit geräteinternen Mechanismen, wie der <kbd>Esc</kbd> auf Windows oder der <kbd>Zurück</kbd>-Taste auf Android, geschlossen werden können, ähnlich wie eingebaute Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Palette von Zeichen für Element- und Attributnamen.
  Bisher waren DOM-Methoden deutlich restriktiver, erlauben jetzt jedoch denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle sowie [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Schnittstelle.
  ([Firefox Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeitaufzeichnung des Inhalts im Element streamt.
  Der Stream kann z. B. als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als nicht standardmäßige Methode `mozCaptureStream()` verfügbar.
  ([Firefox Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert nun die Lautstärke des Medienelements beim Erfassen von Audio für alle Arten von Quellen (wie es die Spezifikation erfordert).
  Zuvor hatte die Lautstärkeeinstellung des Elements keinen Einfluss auf das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream) Quellen.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst nun rohes Audio aus der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig davon, welche Art von Quelle das Medienelement abspielt (wie es die Spezifikation erfordert).
  Vor dieser Änderung hatte die Lautstärke des Medienelements Einfluss auf die Lautstärke des erfassten Streams.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Aktualisiert die Screenshot-Implementierungen sowohl für die WebDriver BiDi als auch für die klassische WebDriver-Protokolle, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Dimensionen überschreitet, anstatt ihn stillschweigend zu beschneiden. ([Firefox Bug 1994148](https://bugzil.la/1994148)).
- Aktualisiert die Implementierung von Aktionen für beide WebDriver BiDi und klassische WebDriver-Protokolle, um eine `scroll` Aktion vom Eingabequellentyp `wheel` zuzulassen, die mehr als die Dimensionen der visuellen Ansicht verschiebt. ([Firefox Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Behandlung von Benutzereingabeaufforderungen hinzugefügt, die über Funktionen mit dem `session.new` Befehl konfiguriert werden können. ([Firefox Bug 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` wurde hinzugefügt, der es den Clients ermöglicht, Downloads zu erlauben oder zu verbieten und auch einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontext konfiguriert werden. ([Firefox Bug 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker-Reiche (für spezielle, geteilte und Service-Worker) wurden hinzugefügt. ([Firefox Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem wurde behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die ID des obersten Kontexts anstatt die ID des Iframe-Kontexts auf Android meldeten. ([Firefox Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten wurde behoben, um benutzeragenten-spezifische Shadow-Roots nicht mehr freizulegen. ([Firefox Bug 2016673](https://bugzil.la/2016673)).
- Die Logik bei der Anwendung unterschiedlicher Einstellungen auf neue Browsing-Kontexte wurde aktualisiert, um sicherzustellen, dass im Fall des Erstellens eines Browsing-Kontexts mit dem `window.open` Befehl, Emulationen, Ansichtsüberlagerungen und Preload-Skripte angewendet werden, bevor der Befehl zurückgegeben wird. ([Firefox Bug 1985997](https://bugzil.la/1985997), [Firefox Bug 2005546](https://bugzil.la/2005546) und [Firefox Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere klassische WebDriver-Befehle wurden verbessert, um `implicit` und `pageLoad` Zeitüberschreitungen im Einklang mit der Skript-Zeitüberschreitung zu behandeln, indem `null` Werte die Zeitüberschreitungen deaktivieren. ([Firefox Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Fügt erste Unterstützung für Split-View hinzu. Diese Unterstützung umfasst:
  - Einschluss der Split-View-ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}} und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einem Split-View enthalten.
    ([Firefox Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als oberstes Parameterelement in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzerinteraktion ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen können. Diese Funktion war seit Firefox 108 hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` verfügbar. Diese Änderung angleicht das Verhalten von Firefox an Chrome und Safari. ([Firefox Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} zuerst aufgerufen werden. Diese Änderung angleicht das Verhalten von Firefox an Chrome. ([Firefox Bug 2011516](https://bugzil.la/2011516))

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:` Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. ([Firefox Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung wird für alle Versionen von Firefox 152 und später angewendet. ([Firefox Bug 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}} Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter, der auf [Seitenaktions-](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons in dunklen Themes angewendet wird, ist in Nightly-Builds deaktiviert ([Firefox Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Ausgaben ab Version 152 deaktiviert ([Firefox Bug 2016509](https://bugzil.la/2016509)). Sie können Seitenaktions-SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Ausgaben testen, indem Sie eine boolesche `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen.

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 149 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es, zu spezifizieren, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es, viele Farben zu mischen und die Prozentsätze jeder Farbe zu bestimmen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

- **Mediabasierte Pseudo-Klassen**: `dom.media.pseudo-classes.enabled`

  Die mediabasierte Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand zu stylen, wie z. B. Abspielen oder Pausieren. ([Firefox Bug 1707584](https://bugzil.la/1707584), [Firefox Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (nur Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-rule unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Styles auf seine Kinder anzuwenden. ([Firefox Bug 2014404](https://bugzil.la/2014404)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die CSS Typed Object Model Level 1 Spezifikation wird implementiert.
  In dieser Veröffentlichung wurde die Unterstützung für die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle hinzugefügt, die es ermöglicht, einen CSS-numerischen Wert von einer Einheit in eine andere zu konvertieren. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildunterstützung: Rust-basierter Decoder** (nur Nightly): `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet. ([Firefox Bug 1986393](https://bugzil.la/1986393)).
