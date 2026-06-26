---
title: Veröffentlichungsnotizen zu Firefox 149 für Entwickler
short-title: Firefox 149
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 4c414e3e776ea5a6bd7b2fc9479d87b5b8e91a1d
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Pop-ups mit dem Wert `hint` schließen keine `auto` Pop-ups, wenn sie angezeigt werden, schließen jedoch andere Hinweis-Pop-ups. ([Firefox Fehler 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird nun unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Mathe-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Fehler 2014703](https://bugzil.la/2014703)).

### CSS

- Die {{CSSXRef("shape-outside")}} CSS-Eigenschaft unterstützt jetzt die Funktionen [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) und [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect) als Werte. Diese Funktionen waren vorher bereits für die {{CSSXRef("clip-path")}}- und {{CSSXRef("offset-path")}}-Eigenschaften implementiert und sind nun auch für `shape-outside` verfügbar. ([Firefox Fehler 1983187](https://bugzil.la/1983187)).

- Die CSS-Eigenschaft {{CSSXRef("vertical-align")}} ist jetzt eine Kurzform für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox Fehler 1830771](https://bugzil.la/1830771)).

- Der `<container-query>` Teil der {{cssxref("@container")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) Bedingung ist jetzt optional.
  Dies erlaubt das Abstimmen gegen Container ausschließlich basierend auf ihren Namen.
  ([Firefox Fehler 2016474](https://bugzil.la/2016474)).

### JavaScript

- Der `"islamic-umalqura"` [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) wird jetzt von {{jsxref("Intl")}} unterstützt.
  Dieser String wird in der Liste der Kalender, die von {{jsxref("Intl.supportedValuesOf()")}} zurückgegeben werden, enthalten sein und kann als Parameter [`options.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar) im [`DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) gesetzt werden.
  ([Firefox Fehler 2011505](https://bugzil.la/2011505)).

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Zusätzlich erlauben die Methoden jetzt, dass sowohl Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bild-Bitmap-Parameter ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig gesetzt werden können — vorher führte das Setzen beider zur Rückgabe des unskalierten Quell-Bitmaps.
  ([Firefox Fehler 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird jetzt für das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und {{httpheader("Integrity-Policy")}} Verletzungen unterstützt.
  Diese API ermöglicht es, [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport) Objekte auf verletzenden Seiten mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zu melden (Berichte können basierend auf der `type`-Eigenschaft gefiltert werden: `"csp-violation"` oder `"integrity-violation"`).
  Eine serialisierte Version der Berichtsobjekte kann auch an einen Meldeserver gesendet werden, der im entsprechenden HTTP-Header angegeben ist — Endpunktnamen und entsprechende URLs müssen zuerst in den HTTP-Antwort-Headern {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} definiert werden.
  ([Firefox Fehler 1976074](https://bugzil.la/1976074), [Firefox Fehler 2008916](https://bugzil.la/2008916)).

- Bis zu Firefox 148 erstellte `structuredClone.call(iframe.contentWindow)` Objekte fälschlicherweise im Realm des Aufrufers statt im Realm des iframes. Die Implementierung erstellt nun Objekte im `this` Realm, sodass das Verhalten der Methode näher an der Spezifikation liegt. ([Firefox Fehler 2017797](https://bugzil.la/2017797)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies erlaubt das programmgesteuerte Starten des Browser-Auswahlfensters für ein `<datalist>`, wenn es durch eine Benutzerinteraktion ausgelöst wird. ([Firefox Fehler 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, wie die <kbd>Esc</kbd>-Taste auf Windows oder die <kbd>Zurück</kbd>-Taste auf Android, ähnlich wie eingebaute Komponenten wie [Dialoge](/de/docs/Web/HTML/Reference/Elements/dialog) und [Pop-ups](/de/docs/Web/API/Popover_API).
  ([Firefox Fehler 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Palette von Zeichen für Element- und Attributnamen.
  Früher waren DOM-Methoden viel restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle.
  ([Firefox Fehler 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das den Echtzeit-Mitschnitt des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Bisher war `captureStream()` nur als nicht-standardisierte Methode `mozCaptureStream()` verfügbar.
  ([Firefox Fehler 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert jetzt die Lautstärke des Media-Elements beim Erfassen von Audio für alle Arten von Quellen (wie von der Spezifikation gefordert).
  Bisher beeinflusste das Einstellen der Lautstärke des Elements nicht das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream) Quellen.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt Roh-Audio von der Quelle, ohne die Lautstärke des Media-Elements anzuwenden, unabhängig von der Art der Quelle, die das Media-Element abspielt (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Media-Elements die Lautstärke des erfassten Streams.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Aktualisierte die Screenshot-Implementierungen sowohl für die WebDriver BiDi als auch für die klassischen WebDriver-Protokolle, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Abmessungen überschreitet, anstatt ihn stillschweigend zu beschneiden. ([Firefox Fehler 1994148](https://bugzil.la/1994148)).
- Aktualisierte die Aktionen-Implementierung sowohl für die WebDriver BiDi als auch für die klassischen WebDriver-Protokolle, um eine `scroll` Aktion des Eingabequellen-Typs `wheel` zu erlauben, mehr als die visuellen Viewport-Abmessungen zu scrollen. ([Firefox Fehler 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Benutzeraufforderungshandhabung hinzugefügt, die durch Fähigkeiten mit dem `session.new` Befehl konfiguriert werden kann. ([Firefox Fehler 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` wurde hinzugefügt, der es Clients erlaubt, Downloads zu erlauben oder zu verbieten und einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontext konfiguriert werden. ([Firefox Fehler 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker Realms (für dedizierte, gemeinsame und Service-Worker) wurden hinzugefügt. ([Firefox Fehler 1936770](https://bugzil.la/1936770)).
- Behoben wurde ein Problem, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Top-Level-Kontext-ID anstelle der Kontext-ID des iframes auf Android gemeldet haben. ([Firefox Fehler 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten wurde behoben, um zu verhindern, dass benutzerspezifische Shadow Roots des User Agents offengelegt werden. ([Firefox Fehler 2016673](https://bugzil.la/2016673)).
- Die Logik zur Anwendung verschiedener Einstellungen auf neue Browsing-Kontexte wurde aktualisiert, um sicherzustellen, dass bei der Erstellung eines Browsing-Kontextes mit dem `window.open` Befehl Emulationen, Viewport-Überlagerungen und Preload-Skripte angewendet werden, bevor der Befehl zurückkehrt. ([Firefox Fehler 1985997](https://bugzil.la/1985997), [Firefox Fehler 2005546](https://bugzil.la/2005546) und [Firefox Fehler 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere klassische WebDriver-Befehle wurden verbessert, um `implicit` und `pageLoad` Zeitüberschreitungen in Einklang mit der Skript-Zeitüberschreitung zu behandeln, sodass `null`-Werte die Zeitüberschreitungen deaktivieren können. ([Firefox Fehler 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Fügt anfängliche Unterstützung für die geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der Split-View-ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht beinhalten.
    ([Firefox Fehler 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als oberstes Parameter-Level in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Fehler 2013477](https://bugzil.la/2013477))
- Ein Benutzergeste ist nicht mehr erforderlich, um {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} zu öffnen. Diese Funktion war hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` ab Firefox 108 verfügbar. Diese Änderung bringt das Verhalten von Firefox mit Chrome und Safari in Einklang. ([Firefox Fehler 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss zunächst {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} aufgerufen werden. Diese Änderung bringt das Verhalten von Firefox mit Chrome in Einklang. ([Firefox Fehler 2011516](https://bugzil.la/2011516))
- Die Implementierung von [`structuredClone`](/de/docs/Web/API/Window/structuredClone) wurde geändert, um Objekte im `this` Realm statt im Realm des Aufrufers zu erstellen. Für die Rückwärtskompatibilität enthält der globale Bereich von Inhalteskripten nun seine eigene `structuredClone` Methode, die die `window.structuredClone` Methode überschattet. Weitere Informationen finden Sie unter [`structuredClone` in Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone) ([Firefox Fehler 2017797](https://bugzil.la/2017797)).
- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:` Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wird eingestellt. ([Firefox Fehler 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung im Konsolen-Tab aus. Diese Einschränkung wird ab Firefox 152 für alle Versionen von Firefox angewendet. ([Firefox Fehler 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code dynamisch in ihren Dokumenten ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Dokumentenskript registriert und dann eine Nachricht gesendet wird, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter, der auf [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons in dunklen Themes angewendet wurde, ist in Nightly-Versionen deaktiviert ([Firefox Fehler 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Versionen ab Version 152 deaktiviert ([Firefox Fehler 2016509](https://bugzil.la/2016509)). Sie können Page Action SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Versionen testen, indem Sie eine boolesche `about:config`-Einstellung mit dem Namen `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen.

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 149 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt nun Werte für [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type). Dies ermöglicht es, anzugeben, wie ein Attributwert in einen CSS-Wert umgewandelt wird, und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu entnehmen. ([Firefox Fehler 1986631](https://bugzil.la/1986631) & [Firefox Fehler 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt nun mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es, viele Farben zu mischen und die Prozentsätze jeder einzustellen. ([Firefox Fehler 2007772](https://bugzil.la/2007772)).

- **Media-basierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die media-basierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Status zu stylen, wie zum Beispiel beim Abspielen oder Pausieren. ([Firefox Fehler 1707584](https://bugzil.la/1707584), [Firefox Fehler 2014512](https://bugzil.la/2014512)).

- **`alpha` & `Farbraum`-Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Fehler 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft besitzt, und die Styles entsprechend auf seine Kinder anzuwenden. ([Firefox Fehler 2014404](https://bugzil.la/2014404)).

- **`base-select` Wert für die `appearance` CSS-Eigenschaft**: `dom.select.customizable_select.enabled` und `layout.css.appearance-base.enabled`

  Der [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) Wert für die {{cssxref("appearance")}} CSS-Eigenschaft, relevant nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudoelement, ermöglicht es, sie vollständig zu stylen. Zurzeit wird nur das Styling des `<select>` Elements unterstützt. Das Styling des `::picker(select)` Pseudoelements wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Arbeit. Zwei Einstellungen müssen zur Nutzung aktiviert sein. ([Firefox Fehler 1974787](https://bugzil.la/1974787)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die CSS Typed Object Model Level 1 Spezifikation wird implementiert.
  In dieser Version wurde Unterstützung für die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle hinzugefügt, die die Umwandlung eines CSS-Zahlenwerts von einer Einheit in eine andere ermöglicht. ([Firefox Fehler 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildunterstützung: Rust-basierter Decoder** (nur Nightly): `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet. ([Firefox Fehler 1986393](https://bugzil.la/1986393)).
