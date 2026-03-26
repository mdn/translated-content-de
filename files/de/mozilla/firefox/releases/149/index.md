---
title: Firefox 149 Versionshinweise für Entwickler (Stable)
short-title: Firefox 149 (Stable)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 05b5b1f7d349d5e48e197394c1c4ced51d5fc8ce
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem `hint`-Wert schließen keine `auto`-Popovers, wenn sie angezeigt werden, schließen jedoch andere Hinweis-Popovers. ([Firefox Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird nun unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Math-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die {{CSSXRef("shape-outside")}} CSS-Eigenschaft unterstützt nun die Funktionen [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) und [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect) als Werte. Diese Funktionen waren bereits für die Eigenschaften {{CSSXRef("clip-path")}} und {{CSSXRef("offset-path")}} implementiert und sind nun auch für `shape-outside` verfügbar. ([Firefox Bug 1983187](https://bugzil.la/1983187)).

- Die {{CSSXRef("vertical-align")}} CSS-Eigenschaft ist nun eine Kurzschreibung für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox Bug 1830771](https://bugzil.la/1830771)).

- Der ['<container-query>'](/de/docs/Web/CSS/Reference/At-rules/@container#container-query) Teil der {{cssxref("@container")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) Bedingung ist nun optional.
  Dies ermöglicht das Abgleichen mit Containern, die ausschließlich auf ihren Namen basieren.
  ([Firefox Bug 2016474](https://bugzil.la/2016474)).

### JavaScript

- Der `"islamic-umalqura"` [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) wird jetzt von {{jsxref("Intl")}} unterstützt.
  Dieser String wird in der Liste der Kalender, die von {{jsxref("Intl.supportedValuesOf()")}} zurückgegeben werden, enthalten sein und kann als [`options.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar) Parameter im [`DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) festgelegt werden.
  ([Firefox Bug 2011505](https://bugzil.la/2011505)).

### APIs

- Der [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) Parameter wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Darüber hinaus erlauben die Methoden jetzt, dass sowohl Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bitmap-Parameter ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festgelegt werden können — bisher führte das Festlegen beider zur Rückgabe des unskalierten Quell-Bitmaps.
  ([Firefox Bug 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird jetzt zum Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und {{httpheader("Integrity-Policy")}} Verletzungen unterstützt.
  Diese API erlaubt [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport) Objekte auf fehlerhaften Seiten zu berichten, indem ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) verwendet wird (Berichte können nach dem `type`-Eigentum gefiltert werden: `"csp-violation"` oder `"integrity-violation"`).
  Eine serialisierte Version der Berichtsobjekte kann auch an einen Reporting-Server gesendet werden, der im entsprechenden HTTP-Header angegeben ist — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden.
  ([Firefox Bug 1976074](https://bugzil.la/1976074), [Firefox Bug 2008916](https://bugzil.la/2008916)).

- Bis Firefox 148 erstellte `structuredClone.call(iframe.contentWindow)` Objekte inkorrekt im Real des Anrufers statt im iframe-Real. Die Implementierung instanziiert nun Objekte im `this`-Real, sodass das Verhalten der Methode näher an der Spezifikation liegt.

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht das programmgesteuerte Öffnen des Browser-Pickers für ein `<datalist>`, wenn dies durch eine Benutzerinteraktion ausgelöst wird ([Firefox Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, wie z.B. die <kbd>Esc</kbd>-Taste auf Windows oder die <kbd>Zurück</kbd>-Taste auf Android, auf die gleiche Weise wie eingebaute Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt einen breiteren Bereich von Zeichen für Element- und Attributnamen.
  Zuvor waren DOM-Methoden weit restriktiver, aber jetzt erlauben sie den gleichen Satz von Zeichen wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle.
  ([Firefox Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeitaufnahme der Inhalte im Element streamt.
  Der Stream kann zum Beispiel als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als nicht-standardisierte `mozCaptureStream()` Methode verfügbar.
  ([Firefox Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) beachtet nun die Lautstärke des Medienelements beim Erfassen von Audio für alle Arten von Quellen (wie in der Spezifikation gefordert).
  Zuvor beeinflusste das Einstellen der Lautstärke des Elements nicht die erfasste Audioausgabe für [`MediaStream`](/de/docs/Web/API/MediaStream) Quellen.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt rohes Audio von der Quelle ohne Anwendung der Lautstärke des Medienelements, unabhängig vom Typ der Quelle, die das Medienelement abspielt (wie in der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des erfassten Streams.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Aktualisierte die Screenshot-Implementierungen für sowohl das WebDriver BiDi als auch das klassische WebDriver-Protokoll, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Dimensionen überschreitet, anstatt ihn stillschweigend zu beschneiden. ([Firefox Bug 1994148](https://bugzil.la/1994148)).
- Aktualisierte die Aktionen-Implementierung für sowohl das WebDriver BiDi als auch das klassische WebDriver-Protokoll, um eine `scroll` Aktion des Eingabequellentyps `wheel` zu ermöglichen, die mehr als die visuellen Ansichtport-Dimensionen scrollt. ([Firefox Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Benutzeraufforderungsbehandlung hinzugefügt, die über Fähigkeiten mit dem `session.new`-Kommando konfiguriert werden kann. ([Firefox Bug 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` wurde hinzugefügt, der es Kunden ermöglicht, Downloads zu erlauben oder zu verbieten und auch einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Session oder pro Benutzerkontext konfiguriert werden. ([Firefox Bug 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Arbeiter-Realms (für dedizierte, geteilte und Dienst-Arbeiter) hinzugefügt. ([Firefox Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` falsch die Kontext-ID des Top-Level-Kontextes anstatt der Kontext-ID des Iframes auf Android berichteten. ([Firefox Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten korrigiert, um das Exponieren von benutzerspezifischen Schattenwurzeln zu verhindern. ([Firefox Bug 2016673](https://bugzil.la/2016673)).
- Die Logik zur Anwendung unterschiedlicher Einstellungen auf neue Durchsuchungskontexte aktualisiert, um sicherzustellen, dass beim Erstellen eines Durchsuchungskontextes mit dem `window.open`-Kommando Emulationen, Ansichtport-Überschreibungen und Preload-Skripte vor der Rückkehr des Befehls angewendet werden. ([Firefox Bug 1985997](https://bugzil.la/1985997), [Firefox Bug 2005546](https://bugzil.la/2005546) und [Firefox Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere klassische WebDriver-Befehle verbessert, um `implizite` und `pageLoad`-Timeouts im Einklang mit dem Skript-Timeout zu handhaben, sodass `null`-Werte die Timeouts deaktivieren können. ([Firefox Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Fügt erste Unterstützung für geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der ID der geteilten Ansicht in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht einschließen.
    ([Firefox Bug 1993037](https://bugzil.la/1993037))
- Unterstützt `tabId` als Parameter auf oberster Ebene in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}}. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzer-Geste ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen. Diese Funktion war hinter der `extensions.openPopupWithoutUserGesture.enabled` Präferenz von Firefox 108 verfügbar. Diese Änderung vereinheitlicht das Verhalten von Firefox mit Chrome und Safari. ([Firefox Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet werden kann. Zum Öffnen eines Popups in einem nicht fokussierten Fenster muss {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} zuerst aufgerufen werden. Diese Änderung passt das Firefox-Verhalten an das von Chrome an. ([Firefox Bug 2011516](https://bugzil.la/2011516))
- Die Implementierung von [`structuredClone`](/de/docs/Web/API/Window/structuredClone) wurde geändert, damit Objekte im `this`-Real statt im Real des Anrufers instanziiert werden. Aus Gründen der Rückwärtskompatibilität umfasst der globale Umfang der Inhalts-Skripte jetzt eine eigene `structuredClone`-Methode, die die `window.structuredClone` Methode überschattet. Weitere Informationen finden Sie unter [`structuredClone` in Sharing objects with page scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

- Die Fähigkeit von Erweiterungen, Code in ihren `moz-extension:` Dokumenten dynamisch mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wird nicht mehr unterstützt. ([Firefox Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung wird für alle Versionen von Firefox 152 und höher gelten. ([Firefox Bug 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert wird und dann eine Nachricht gesendet wird, um die Ausführung des benötigten Codes auszulösen.
- Der implizite CSS-Filter, der auf [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons in dunklen Themes angewendet wurde, ist in Nightly-Builds deaktiviert ([Firefox Bug 2001318](https://bugzil.la/2001318)) und wird ab Version 152 in anderen Firefox-Editionen deaktiviert sein ([Firefox Bug 2016509](https://bugzil.la/2016509)). Sie können Page Action SVG-Icons mit dem CSS-Filter in anderen Firefox-Editionen testen, indem Sie eine boolesche `about:config`-Präferenz namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und diese auf `false` setzen.

## Experimentelle Webfeatures

Diese Funktionen werden in Firefox 149 bereitgestellt, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, zu spezifizieren, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu beziehen. ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, nicht nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} erlauben es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Status zu stylen, wie z.B. abspielend oder pausiert. ([Firefox Bug 1707584](https://bugzil.la/1707584), [Firefox Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es Ihnen, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2014404](https://bugzil.la/2014404)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die CSS-Typed Object Model Level 1 Spezifikation wird implementiert.
  In dieser Version wurde Unterstützung für die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle hinzugefügt, die die Umrechnung eines CSS-numerischen Wertes von einer Einheit in eine andere ermöglicht. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildunterstützung: Rust-basierter Decoder** (nur Nightly): `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddekoder wurde durch eine neue, rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet. ([Firefox Bug 1986393](https://bugzil.la/1986393)).
