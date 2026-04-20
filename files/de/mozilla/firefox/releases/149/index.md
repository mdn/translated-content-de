---
title: Firefox 149 Versionshinweise für Entwickler
short-title: Firefox 149
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: ce29b1c36065db92c2a59ba507a4941fbf0a5159
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popover mit dem Wert `hint` schließen keine `auto` Popover, wenn sie angezeigt werden, sondern schließen andere Hinweis-Popover. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Mathematik-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox-Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die {{CSSXRef("shape-outside")}}-CSS-Eigenschaft unterstützt jetzt die Funktionen [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) und [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect) als Werte. Diese Funktionen waren zuvor bereits für die Eigenschaften {{CSSXRef("clip-path")}} und {{CSSXRef("offset-path")}} implementiert und sind jetzt auch für `shape-outside` verfügbar. ([Firefox-Bug 1983187](https://bugzil.la/1983187)).

- Die {{CSSXRef("vertical-align")}}-CSS-Eigenschaft ist jetzt eine Kurzschreibweise für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox-Bug 1830771](https://bugzil.la/1830771)).

- Der [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query)-Teil der {{cssxref("@container")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules)-Bedingung ist jetzt optional.
  Dies ermöglicht das Abgleichen gegen Container basierend nur auf ihren Namen.
  ([Firefox-Bug 2016474](https://bugzil.la/2016474)).

### JavaScript

- Der `"islamic-umalqura"` [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) wird jetzt von {{jsxref("Intl")}} unterstützt.
  Dieser String wird in der Liste der Kalender enthalten sein, die von {{jsxref("Intl.supportedValuesOf()")}} zurückgegeben werden, und kann als [`options.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar)-Parameter im [`DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) festgelegt werden.
  ([Firefox-Bug 2011505](https://bugzil.la/2011505)).

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Darüber hinaus erlauben die Methoden jetzt, dass sowohl Größenänderungsoptionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bild-Bitmap-Parameter ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festgelegt werden können — zuvor führte die Festlegung beider zur Rückgabe der unskalierten Quellbitmap.
  ([Firefox-Bug 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird nun zum Berichten von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und {{httpheader("Integrity-Policy")}}-Verstößen unterstützt.
  Diese API ermöglicht das Berichten von [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)-Objekten auf problematischen Seiten mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) (Berichte können nach dem `type`-Eigenschaft gefiltert werden: `"csp-violation"` oder `"integrity-violation"`).
  Eine serialisierte Version der Berichtsobjekte kann auch an einen im entsprechenden HTTP-Header angegebenen Berichtsserver gesendet werden — Endpoint-Namen und entsprechende URLs müssen zuerst in den HTTP-Antwort-Headern {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} definiert werden.
  ([Firefox-Bug 1976074](https://bugzil.la/1976074), [Firefox-Bug 2008916](https://bugzil.la/2008916)).

- Bis Firefox 148 erstellte `structuredClone.call(iframe.contentWindow)` fälschlicherweise Objekte im Realm des Aufrufers statt im Realm des iframes. Die Implementierung instanziiert jetzt Objekte im `this` Realm, sodass das Verhalten der Methode enger an die Spezifikation angepasst ist ([Firefox-Bug 2017797](https://bugzil.la/2017797)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht das programmatische Aufrufen des Browser-Auswahlmenüs für ein `<datalist>`, wenn es durch Benutzerinteraktion ausgelöst wird ([Firefox-Bug 1998668](https://bugzil.la/1998668)).

- Das Interface [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, Komponenten zu implementieren, die über gerätenative Mechanismen geschlossen werden können, wie die `<kbd>Esc</kbd>`-Taste unter Windows oder die `<kbd>Zurück</kbd>`-Taste unter Android, ähnlich wie eingebaute Komponenten wie [dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [popovers](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Palette an Zeichen für Element- und Attributnamen.
  Früher waren DOM-Methoden viel einschränkender, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) des [`Document`](/de/docs/Web/API/Document)-Interfaces, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) des [`Element`](/de/docs/Web/API/Element)-Interfaces, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) des [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interfaces und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) des [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Interfaces.
  ([Firefox-Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeit-Erfassung des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als nicht-standardisierte `mozCaptureStream()`-Methode verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert jetzt die Lautstärke des Medienelements beim Erfassen von Audio für alle Typen von Quellen (wie es die Spezifikation erfordert).
  Zuvor beeinflusste das Einstellen der Lautstärke des Elements das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen nicht.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt rohes Audio von der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig von der Art der Quelle, die das Medienelement abspielt (wie es die Spezifikation erfordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des erfassten Streams.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Aktualisierte die Screenshot-Implementierungen sowohl für die WebDriver BiDi- als auch die klassischen WebDriver-Protokolle, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Dimensionen überschreitet, anstatt ihn stillschweigend zu beschneiden. ([Firefox-Bug 1994148](https://bugzil.la/1994148)).
- Aktualisierte die Aktionen-Implementierung für beide Protokolle, um eine `scroll`-Aktion des Eingabequellentyps `wheel` zu ermöglichen, die mehr als die Dimensionen des visuellen Viewports scrollt. ([Firefox-Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Handhabung von Benutzeraufforderungen hinzugefügt, die über Fähigkeiten mit dem `session.new`-Befehl konfiguriert werden kann. ([Firefox-Bug 1905086](https://bugzil.la/1905086)).
- Den Befehl `browser.setDownloadBehavior` hinzugefügt, der es Clients ermöglicht, Downloads zu erlauben oder zu verbieten und auch einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontext konfiguriert werden. ([Firefox-Bug 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker-Realms (für dedizierte, gemeinsame und Service-Worker) hinzugefügt. ([Firefox-Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Kontext-ID auf oberster Ebene anstelle der Kontext-ID des iframes auf Android meldeten. ([Firefox-Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung von DOM-Knoten aktualisiert, um das Exponieren von user-agentspezifischen Schattenwurzeln zu stoppen. ([Firefox-Bug 2016673](https://bugzil.la/2016673)).
- Die Logik zur Anwendung verschiedener Einstellungen auf neue Browsing-Kontexte aktualisiert, um sicherzustellen, dass im Fall der Erstellung eines Browsing-Kontextes mit dem `window.open`-Befehl Emulationen, Viewport-Overrides und Vorab-Skripte angewendet werden, bevor der Befehl zurückkehrt. ([Firefox-Bug 1985997](https://bugzil.la/1985997), [Firefox-Bug 2005546](https://bugzil.la/2005546) und [Firefox-Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere klassische WebDriver-Befehle verbessert, um `implicit` und `pageLoad`-Timeouts im Einklang mit dem Skript-Timeout zu handhaben und es zu ermöglichen, `null`-Werte zum Deaktivieren der Timeouts zu verwenden. ([Firefox-Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Fügt anfängliche Unterstützung für geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der geteilten Ansichts-ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}} und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht umfassen.
    ([Firefox-Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als obersten Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox-Bug 2013477](https://bugzil.la/2013477))
- Eine Benutzeraktion ist nicht länger erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen. Diese Funktion war ab Firefox 108 hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` verfügbar. Diese Änderung stimmt das Verhalten von Firefox mit Chrome und Safari ab. ([Firefox-Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss zuerst {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} aufgerufen werden. Diese Änderung stimmt das Firefox-Verhalten mit Chrome ab. ([Firefox-Bug 2011516](https://bugzil.la/2011516))
- Die Implementierung von [`structuredClone`](/de/docs/Web/API/Window/structuredClone) wurde geändert, um Objekte im `this` Realm statt im Realm des Aufrufers zu instanziieren. Aus Gründen der Rückwärtskompatibilität enthält der globale Bereich von Inhaltsskripten jetzt eine eigene `structuredClone`-Methode, die die `window.structuredClone`-Methode überschattet. Weitere Informationen finden Sie unter [`structuredClone` in Sharing objects with page scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone) ([Firefox-Bug 2017797](https://bugzil.la/2017797)).
- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. ([Firefox-Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist im Firefox Nightly nicht mehr verfügbar, und die Beta- sowie die Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung wird auf alle Versionen von Firefox 152 und später angewendet. ([Firefox-Bug 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter, der auf [Seitentasten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)-SVG-Icons in dunklen Themen angewendet wird, ist in Nightly-Builds deaktiviert ([Firefox-Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Editionen ab Version 152 deaktiviert ([Firefox-Bug 2016509](https://bugzil.la/2016509)). Sie können Seitentasten-SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Editionen testen, indem Sie eine Boolean-`about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und sie auf `false` setzen.

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 149 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und stellen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)-Werte. Dies ermöglicht es Ihnen, zu spezifizieren, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631) & [Firefox-Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, nicht nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand, wie z.B. Wiedergabe oder Pause, zu stylen. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)-Element unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Dies ermöglicht es Ihnen zu prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2014404](https://bugzil.la/2014404)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die CSS Typed Object Model Level 1-Spezifikation wird implementiert.
  In dieser Version wurde die Unterstützung für die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) des [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Interfaces hinzugefügt, die es ermöglicht, einen CSS-numerischen Wert von einer Einheit in eine andere zu konvertieren. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildunterstützung: Rust-basierter Decoder** (nur Nightly): `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/)-Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs`-Bibliothek verwendet. ([Firefox-Bug 1986393](https://bugzil.la/1986393)).
