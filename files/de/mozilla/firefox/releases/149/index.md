---
title: Firefox 149 Versionshinweise für Entwickler
short-title: Firefox 149
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies gewährleistet, dass Websites eine geeignete Mathe-Schrift und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriften auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox-Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("shape-outside")}} unterstützt jetzt die Funktionen [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) und [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect) als Werte. Diese Funktionen waren zuvor bereits für die Eigenschaften {{CSSXRef("clip-path")}} und {{CSSXRef("offset-path")}} implementiert und sind jetzt auch für `shape-outside` verfügbar. ([Firefox-Bug 1983187](https://bugzil.la/1983187)).

- Die CSS-Eigenschaft {{CSSXRef("vertical-align")}} ist jetzt eine Shorthand-Eigenschaft für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox-Bug 1830771](https://bugzil.la/1830771)).

- Der `<container-query>` Teil der {{cssxref("@container")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) Bedingung ist jetzt optional.
  Dies ermöglicht das Abgleichen von Containern nur anhand ihrer Namen.
  ([Firefox-Bug 2016474](https://bugzil.la/2016474)).

### JavaScript

- Der `"islamic-umalqura"` [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) wird jetzt von {{jsxref("Intl")}} unterstützt.
  Diese Zeichenkette wird in der Liste der Kalender enthalten sein, die von {{jsxref("Intl.supportedValuesOf()")}} zurückgegeben wird, und kann als [`options.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar) Parameter im [`DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) festgelegt werden.
  ([Firefox-Bug 2011505](https://bugzil.la/2011505)).

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Zusätzlich erlauben die Methoden jetzt, sowohl Resizing-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Image-Bitmap-Parameter ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festzulegen — zuvor führte das Setzen beider zu dem unveränderten Quell-Bitmap.
  ([Firefox-Bug 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird jetzt für das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und {{httpheader("Integrity-Policy")}} Verstößen unterstützt.
  Diese API erlaubt die Erstellung von [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport) Objekten auf Seiten mit Verletzungen, die mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) gemeldet werden können (Berichte können nach dem `type`-Eigenschaftsfilter gefiltert werden: `"csp-violation"` oder `"integrity-violation"`).
  Eine serialisierte Version der Berichtsobjekte kann ebenfalls an einen Melder-Server gesendet werden, der im entsprechenden HTTP-Header angegeben wurde — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheader definiert werden.
  ([Firefox-Bug 1976074](https://bugzil.la/1976074), [Firefox-Bug 2008916](https://bugzil.la/2008916)).

- Bis einschließlich Firefox 148 erstellte `structuredClone.call(iframe.contentWindow)` fälschlicherweise Objekte im Realm des Aufrufers anstelle des Realms des iframes. Die Implementierung erstellt jetzt Objekte im `this`-Realm, sodass das Verhalten der Methode der Spezifikation besser entspricht ([Firefox-Bug 2017797](https://bugzil.la/2017797)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht, dass der Browser-Picker für ein `<datalist>` programmgesteuert ausgelöst wird, wenn er durch Benutzerinteraktion aktiviert wird ([Firefox-Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, Komponenten zu implementieren, die mithilfe nativer Gerätemechanismen geschlossen werden können, wie die <kbd>Esc</kbd> auf Windows oder die <kbd>Zurück</kbd> Taste auf Android, ähnlich wie integrierte Komponenten wie [dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [popovers](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt einen größeren Bereich von Zeichen für Element- und Attributnamen.
  Zuvor waren DOM-Methoden weitaus restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle.
  ([Firefox-Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeitaufnahme des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als die nicht standardisierte Methode `mozCaptureStream()` verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) beachtet jetzt die Lautstärke des Medien-Elements beim Aufnehmen von Audio für alle Arten von Quellen (wie von der Spezifikation gefordert).
  Zuvor hatte das Einstellen der Lautstärke des Elements keine Auswirkungen auf das aufgenommene Audio für [`MediaStream`](/de/docs/Web/API/MediaStream) Quellen.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt Roh-Audio aus der Quelle, ohne die Lautstärke des Medien-Elements anzuwenden, unabhängig von der Art der Quelle, die das Medien-Element abspielt (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medien-Elements die Lautstärke des erfassten Streams.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Aktualisierte die Screenshot-Implementierungen für das WebDriver BiDi und das klassische WebDriver-Protokoll, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Abmessungen überschreitet, anstatt ihn stillschweigend zu beschneiden. ([Firefox-Bug 1994148](https://bugzil.la/1994148)).
- Aktualisierte die Implementierung der Aktionen für das WebDriver BiDi und das klassische WebDriver-Protokoll, um eine `scroll`-Aktion des Eingabequellentyps `wheel` zuzulassen, die mehr als die Abmessungen des visuellen Viewports scrollt. ([Firefox-Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Bearbeitung von Benutzeraufforderungen hinzugefügt, die über Fähigkeiten mit dem `session.new`-Befehl konfiguriert werden kann. ([Firefox-Bug 1905086](https://bugzil.la/1905086)).
- Der `browser.setDownloadBehavior`-Befehl wurde hinzugefügt, der es Clients ermöglicht, Downloads zuzulassen oder zu verbieten und auch einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontexte konfiguriert werden. ([Firefox-Bug 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker-Realms (für dedizierte, geteilte und Service-Worker) wurden hinzugefügt. ([Firefox-Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem wurde behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Kontext-ID des obersten Levels anstelle der Kontext-ID des iframes auf Android meldeten. ([Firefox-Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten wurde so behoben, dass keine User-Agent spezifischen Shadow-Roots mehr offengelegt werden. ([Firefox-Bug 2016673](https://bugzil.la/2016673)).
- Die Logik für das Anwenden verschiedener Einstellungen auf neue Browsing-Kontexte wurde aktualisiert, um sicherzustellen, dass im Fall der Erstellung eines Browsing-Kontexts mit dem `window.open`-Befehl Emulationen, Viewport-Überschreibungen und Preload-Skripte angewendet werden, bevor der Befehl zurückkehrt. ([Firefox-Bug 1985997](https://bugzil.la/1985997), [Firefox-Bug 2005546](https://bugzil.la/2005546), und [Firefox-Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere klassische WebDriver-Befehle verbessert, um `implicit`- und `pageLoad`-Timeouts im Einklang mit dem Script-Timeout zu handhaben, was `null`-Werte erlaubt, um die Timeouts zu deaktivieren. ([Firefox-Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Fügt initiale Unterstützung für die geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der ID der geteilten Ansicht in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht enthalten.
    ([Firefox-Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als Top-Level-Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox-Bug 2013477](https://bugzil.la/2013477))
- Eine Benutzeraktion ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen. Diese Funktion war ab Firefox 108 hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` verfügbar. Diese Änderung bringt das Verhalten von Firefox mit Chrome und Safari in Einklang. ([Firefox-Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} zuerst aufgerufen werden. Diese Änderung bringt das Firefox-Verhalten in Einklang mit Chrome. ([Firefox-Bug 2011516](https://bugzil.la/2011516))
- Die Implementierung von [`structuredClone`](/de/docs/Web/API/Window/structuredClone) wurde geändert, um Objekte im `this`-Realm anstelle des Realms des Aufrufers zu instanziieren. Für die Abwärtskompatibilität enthält der globale Bereich von Inhaltsskripten jetzt eine eigene `structuredClone`-Methode, die die `window.structuredClone`-Methode überschattet. Für weitere Informationen siehe [`structuredClone` in Teilen von Objekten mit Page Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone) ([Firefox-Bug 2017797](https://bugzil.la/2017797)).
- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. ([Firefox-Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung wird für alle Versionen von Firefox 152 und höher gelten. ([Firefox-Bug 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}} Listener im Skript des Dokuments registriert und dann eine Nachricht gesendet wird, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter, der auf [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons in dunklen Themen angewendet wird, ist in Nightly-Builds deaktiviert ([Firefox-Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Ausgaben ab Version 152 deaktiviert ([Firefox-Bug 2016509](https://bugzil.la/2016509)). Sie können Page Action SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Ausgaben testen, indem Sie eine boolesche `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen.

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 149 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechenden Einstellungen auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dadurch können Sie spezifizieren, wie ein Attributwert in einen CSS-Wert geparst wird und diese direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) Attributen nehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631) & [Firefox-Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte statt nur zwei. Dies ermöglicht es, viele Farben zu mischen und die Prozentsätze von jeder festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudo-Klassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand zu stylen, wie spielen oder pausiert. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS at-rule unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2014404](https://bugzil.la/2014404)).

- **Wert `base-select` für die CSS-Eigenschaft appearance**: `dom.select.customizable_select.enabled` und `layout.css.appearance-base.enabled`

  Der [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) Wert für die {{cssxref("appearance")}} CSS-Eigenschaft, die nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element relevant ist, ermöglicht es, sie vollständig zu stylen. Derzeit wird nur das Styling des `<select>`-Elements unterstützt. Das Styling des `::picker(select)` Pseudo-Elements wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der Arbeit an [Anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Zwei Einstellungen müssen aktiviert sein, um sie zu verwenden. ([Firefox-Bug 1974787](https://bugzil.la/1974787)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die Implementierung der CSS Typed Object Model Level 1 Spezifikation ist im Gange.
  In dieser Version wurde die Unterstützung für die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) hinzugefügt, die die Umwandlung eines CSS-numerischen Wertes von einer Einheit in eine andere erlaubt. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildunterstützung: Rust-basierter Decoder** (nur Nightly): `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet. ([Firefox-Bug 1986393](https://bugzil.la/1986393)).
