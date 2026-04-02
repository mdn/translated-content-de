---
title: Firefox 149 Versionshinweise für Entwickler (Stable)
short-title: Firefox 149 (Stable)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 1ad93c0731806b155441afe9e44e971d8b2b0e2a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt nun den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popover mit dem Wert `hint` schließen nicht `auto`-Popovers, wenn sie angezeigt werden, jedoch andere `hint`-Popovers. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird nun unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Mathe-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox-Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("shape-outside")}} unterstützt nun die Funktionen [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) und [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect) als Werte. Diese Funktionen wurden bereits für die Eigenschaften {{CSSXRef("clip-path")}} und {{CSSXRef("offset-path")}} implementiert und sind nun auch für `shape-outside` verfügbar. ([Firefox-Bug 1983187](https://bugzil.la/1983187)).

- Die CSS-Eigenschaft {{CSSXRef("vertical-align")}} ist jetzt eine Kurzschreibweise für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox-Bug 1830771](https://bugzil.la/1830771)).

- Der Teil `<container-query>` der Bedingung der {{cssxref("@container")}} [Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist nun optional.
  Dies ermöglicht das Abgleichen von Containern allein basierend auf ihren Namen.
  ([Firefox-Bug 2016474](https://bugzil.la/2016474)).

### JavaScript

- Der `"islamic-umalqura"` [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) wird jetzt von {{jsxref("Intl")}} unterstützt.
  Diese Zeichenkette wird in der Liste der Kalender sein, die von {{jsxref("Intl.supportedValuesOf()")}} zurückgegeben wird, und kann als Parameter [`options.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar) im Konstruktor [`DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) gesetzt werden.
  ([Firefox-Bug 2011505](https://bugzil.la/2011505)).

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Zusätzlich erlauben die Methoden jetzt sowohl Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bild-Bitmap-Parameter ([`sx`, `sy`, `sw` und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festzulegen — vorher führte das Setzen beider zu einer unskalierte Quell-Bitmap. ([Firefox-Bug 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird jetzt zum Melden von Verstößen gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und {{httpheader("Integrity-Policy")}} unterstützt.
  Diese API ermöglicht es, [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport) Objekte auf einer verletzenden Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zu melden (Berichte können nach der `type`-Eigenschaft gefiltert werden: `"csp-violation"` oder `"integrity-violation"`).
  Eine serialisierte Version der Bericht-Objekte kann auch an einen Reporting-Server gesendet werden, der im entsprechenden HTTP-Header angegeben ist — die Endpunktenamen und die entsprechenden URLs müssen zuerst in den HTTP-Antwort-Headern {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} definiert werden.
  ([Firefox-Bug 1976074](https://bugzil.la/1976074), [Firefox-Bug 2008916](https://bugzil.la/2008916)).

- Bis Firefox 148 erstellte `structuredClone.call(iframe.contentWindow)` Objekte fälschlicherweise im Bereich des Anrufenden anstatt im Bereich des iframe. Die Implementierung instanziiert Objekte jetzt im `this`-Bereich, sodass das Verhalten der Methode näher an der Spezifikation ist ([Firefox-Bug 2017797](https://bugzil.la/2017797)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von {{htmlelement("datalist")}}-Optionen unterstützt.
  Dies ermöglicht es, den Browser-Auswahldialog für ein `<datalist>` programmgesteuert zu starten, wenn durch Benutzerinteraktion ausgelöst ([Firefox-Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, Komponenten zu implementieren, die über gerätenative Mechanismen geschlossen werden können, wie die Taste <kbd>Esc</kbd> auf Windows oder die <kbd>Back</kbd>-Taste auf Android, ähnlich wie eingebaute Komponenten wie [Dialoge](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Palette von Zeichen für Element- und Attributnamen.
  Früher waren DOM-Methoden weit restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle.
  ([Firefox-Bug 1773312](https://bugzil.la/1773312)).

#### Media, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Dies gibt ein Objekt zurück, das den Echtzeit-Capture des Inhalts im Element streamt.
  Der Stream kann zum Beispiel als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Früher war `captureStream()` nur als die nicht standardisierte Methode `mozCaptureStream()` verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) berücksichtigt nun die Lautstärke des Media-Elements bei der Aufnahme von Audio für alle Arten von Quellen (wie in der Spezifikation gefordert).
  Zuvor hatte das Setzen der Lautstärke des Elements keinen Einfluss auf das aufgenommene Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst nun Rohdaten-Audio von der Quelle, ohne die Lautstärke des Media-Elements anzuwenden, unabhängig von der Art der Quelle, die das Media-Element abspielt (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Media-Elements die Lautstärke des erfassten Streams.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Aktualisierte die Screenshot-Implementierungen für sowohl die WebDriver BiDi als auch die klassische WebDriver-Protokolle, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Abmessungen überschreitet, anstatt ihn stillschweigend zu schneiden. ([Firefox-Bug 1994148](https://bugzil.la/1994148)).
- Aktualisierte die Actions-Implementierung für sowohl die WebDriver BiDi als auch die klassische WebDriver-Protokolle, um eine `scroll`-Aktion des Eingabequellentyps `wheel` zu erlauben, die mehr als die visuellen Viewport-Dimensionen scrollt. ([Firefox-Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für automatische Nutzeranfrage-Verarbeitung hinzugefügt, die durch Fähigkeiten mit dem `session.new`-Befehl konfiguriert werden kann. ([Firefox-Bug 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` hinzugefügt, der es Clients erlaubt, Downloads zu erlauben oder zu verbieten und auch einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Sitzung oder Benutzerkontexte konfiguriert werden. ([Firefox-Bug 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker-Bereiche (für dedizierte, geteilte und Service-Worker) hinzugefügt. ([Firefox-Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Kontext-ID des obersten Niveaus anstatt der Kontexte-ID des iframe auf Android berichteten. ([Firefox-Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten behoben, um nicht mehr benutzerspezifische Schattenwurzeln offenzulegen. ([Firefox-Bug 2016673](https://bugzil.la/2016673)).
- Die Logik für das Anwenden verschiedener Einstellungen auf neue Browser-Kontexte aktualisiert, um sicherzustellen, dass bei der Erstellung eines Browser-Kontextes mit dem `window.open`-Befehl Emulationen, Viewport-Überschreibungen und Preload-Skripte angewendet werden, bevor der Befehl zurückgegeben wird. ([Firefox-Bug 1985997](https://bugzil.la/1985997), [Firefox-Bug 2005546](https://bugzil.la/2005546), und [Firefox-Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere klassische WebDriver-Befehle verbessert, um `implicit` und `pageLoad`-Timeouts im Einklang mit dem Skript-Timeout zu behandeln, wobei `null`-Werte die Timeouts deaktivieren. ([Firefox-Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Fügt anfängliche Unterstützung für die geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einschluss der ID für die geteilte Ansicht in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht umfassen.
    ([Firefox-Bug 1993037](https://bugzil.la/1993037))
- Fügt Unterstützung für `tabId` als Spitzenwert-Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzu. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox-Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzer-Gesten ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen. Diese Funktion war verfügbar hinter der `extensions.openPopupWithoutUserGesture.enabled` Präferenz ab Firefox 108. Diese Änderung gleicht Firefox' Verhalten an Chrome und Safari an. ([Firefox-Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss zuerst {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} aufgerufen werden. Diese Änderung gleicht das Verhalten von Firefox an das von Chrome an. ([Firefox-Bug 2011516](https://bugzil.la/2011516))
- Die Implementierung von [`structuredClone`](/de/docs/Web/API/Window/structuredClone) wurde geändert, um Objekte im `this`-Bereich anstatt im Bereich des Anrufers zu instanziieren. Zur Rückwärtskompatibilität umfasst der globale Umfang von Inhaltsskripten jetzt seine eigene `structuredClone` Methode, die die `window.structuredClone` Methode überschattet. Für weitere Informationen siehe [`structuredClone` im Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone) ([Firefox-Bug 2017797](https://bugzil.la/2017797)).
- Die Fähigkeit von Erweiterungen, Code in ihren `moz-extension:` Dokumenten dynamisch auszuführen mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} wird veraltet. ([Firefox-Bug 2011234](https://bugzil.la/2011234)). Die Funktion ist in Firefox Nightly nicht mehr verfügbar und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Tab-Konsole aus. Diese Einschränkung gilt für alle Versionen von Firefox 152 und später. ([Firefox-Bug 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch durch Registrierung eines {{WebExtAPIRef("runtime.onMessage")}}-Listeners im Skript des Dokuments ausführen, um dann eine Nachricht zu senden, die die Ausführung des erforderlichen Codes auslöst.
- Der implizite CSS-Filter, der auf [page action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons in dunklen Themen angewendet wird, ist in Nightly-Builds deaktiviert ([Firefox-Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Editionen ab Version 152 deaktiviert sein ([Firefox-Bug 2016509](https://bugzil.la/2016509)). Sie können die SVG-Icons der Seiteneaktion mit dem deaktivierten CSS-Filter in anderen Firefox-Editionen testen, indem Sie eine boolesche `about:config` Präferenz mit dem Namen `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen.

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 149 vorhanden, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und stellen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, zu spezifizieren, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu verwenden. ([Firefox-Bug 1986631](https://bugzil.la/1986631) & [Firefox-Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbarbeiten**: `layout.css.color-mix-multi-color.enabled`

  Die CSS-Funktion [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht Ihnen, viele Farben miteinander zu mischen und die Prozentsätze jeder festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand zu gestalten, wie beispielsweise abgespielt oder pausiert. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es Ihnen zu prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2014404](https://bugzil.la/2014404)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die CSS Typed Object Model Level 1 Spezifikation wird implementiert.
  In dieser Version wurde die Unterstützung für die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle hinzugefügt, die die Konvertierung eines CSS-Numerischen Wertes von einer Einheit zu einer anderen ermöglicht. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bilderunterstützung: Rust-basierter Decoder** (nur Nightly): `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet. ([Firefox-Bug 1986393](https://bugzil.la/1986393)).
