---
title: Firefox 149 Versionshinweise für Entwickler (Stable)
short-title: Firefox 149 (Stable)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: d1d2fb19fa649240ce6e25c4d79e21d9a5f6de37
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt nun den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto` Popovers, wenn sie angezeigt werden, aber andere hint Popovers werden geschlossen. ([Firefox Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine passende Mathematikschrift und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriften auf dem zugrundeliegenden Betriebssystem vorhanden sind. ([Firefox Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die {{CSSXRef("shape-outside")}} CSS-Eigenschaft unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Dadurch können Sie eine Form definieren, um den Inhalt inline zu umfließen, indem Sie Abstände von den linken (`x`) und oberen (`y`) Kanten des umgebenden Blocks sowie eine Breite (`w`) und Höhe (`h`) verwenden. ([Firefox Bug 1983187](https://bugzil.la/1983187)).

- Die {{CSSXRef("vertical-align")}} CSS-Eigenschaft ist jetzt eine Kurzform-Eigenschaft für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox Bug 1830771](https://bugzil.la/1830771)).

- Der Teil [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query) der {{cssxref("@container")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules)-Bedingung ist jetzt optional.
  Dies ermöglicht das Abgleichen gegen Container, die allein auf ihren Namen beruhen.
  ([Firefox Bug 2016474](https://bugzil.la/2016474)).

### JavaScript

- Der `"islamic-umalqura"` [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) wird nun von {{jsxref("Intl")}} unterstützt.
  Diese Zeichenfolge wird in der Liste der von {{jsxref("Intl.supportedValuesOf()")}} zurückgegebenen Kalender enthalten sein und kann als [`options.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar)-Parameter im [`DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) festgelegt werden.
  ([Firefox Bug 2011505](https://bugzil.la/2011505)).

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Zusätzlich erlauben die Methoden nun, sowohl Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bildbitmap-Parameter ([`sx`, `sy`, `sw` und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festzulegen — vorher führte dies dazu, dass die unskalierte Quellbitmap zurückgegeben wurde.
  ([Firefox Bug 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird jetzt für das Reporting von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und {{httpheader("Integrity-Policy")}}-Verstößen unterstützt.
  Diese API erlaubt es, [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)-Objekte in verletzenden Seiten mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zu melden (Berichte können nach der `type` Eigenschaft gefiltert werden: `"csp-violation"` oder `"integrity-violation"`).
  Eine serialisierte Version der Berichtsobjekte kann auch an einen im entsprechenden HTTP-Header angegebenen Reporting-Server gesendet werden — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert werden.
  ([Firefox Bug 1976074](https://bugzil.la/1976074), [Firefox Bug 2008916](https://bugzil.la/2008916)).

- Bis Firefox 148 erstellte `structuredClone.call(iframe.contentWindow)` Objekte fälschlicherweise im Realm des Aufrufers anstelle des Realms des iframes. Die Implementierung instanziiert nun Objekte im `this`-Realm, sodass das Verhalten der Methode näher an der Spezifikation ist.

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen, die in einer {{htmlelement("datalist")}} definiert sind, unterstützt.
  Dadurch kann der Browser-Picker für ein `<datalist>` programmgesteuert gestartet werden, wenn er durch eine Benutzerinteraktion ausgelöst wird. ([Firefox Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mithilfe gerätenativer Mechanismen geschlossen werden können, wie die <kbd>Esc</kbd>-Taste auf Windows oder die <kbd>Zurück</kbd>-Taste auf Android, ähnlich wie eingebaute Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt einen breiteren Bereich von Zeichen für Element- und Attributnamen.
  Früher waren DOM-Methoden weitaus restriktiver, aber jetzt erlauben sie die gleiche Zeichenmenge wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle.
  ([Firefox Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Dies gibt ein Objekt zurück, das die Echtzeit-Aufnahme des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Früher war `captureStream()` nur als die nicht standardmäßige Methode `mozCaptureStream()` verfügbar.
  ([Firefox Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert nun die Lautstärke des Medienelements beim Erfassen von Audio für alle Arten von Quellen (wie von der Spezifikation gefordert).
  Früher hatte das Einstellen der Lautstärke des Elements keinen Einfluss auf das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt rohes Audio von der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig davon, welche Art von Quelle das Medienelement abspielt (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des erfassten Streams.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

### WebDriver-Komformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Screenshot-Implementierungen für sowohl die WebDriver BiDi- als auch die WebDriver-Klassikprotokolle wurden aktualisiert, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Dimensionen überschreitet, anstatt ihn stumm abzuschneiden. ([Firefox Bug 1994148](https://bugzil.la/1994148)).
- Die Aktionen-Implementierung für sowohl die WebDriver BiDi- als auch die WebDriver-Klassikprotokolle wurden aktualisiert, um eine `scroll`-Aktion des Eingabequellen-Typs `wheel` zuzulassen, die mehr als die Größen der sichtbaren Ansicht scrollt. ([Firefox Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Verwaltung von Benutzeraufforderungen hinzugefügt, die über Fähigkeiten mit dem Befehl `session.new` konfiguriert werden kann. ([Firefox Bug 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` wurde hinzugefügt, der Clients erlaubt, Downloads zu erlauben oder zu verbieten und auch einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontext konfiguriert werden. ([Firefox Bug 1989022](https://bugzil.la/1989022)).
- Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker Realms (für dedizierte, geteilte und Service-Worker) hinzugefügt. ([Firefox Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Top-Level Kontexterkennung anstelle der Kontexterkennung des iframes auf Android berichteten. ([Firefox Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten korrigiert, um das Aussetzen benutzeragentspezifischer Schattenwurzeln zu vermeiden. ([Firefox Bug 2016673](https://bugzil.la/2016673)).
- Die Logik zur Anwendung verschiedener Einstellungen auf neue Browserkontexte aktualisiert, um sicherzustellen, dass bei der Erstellung eines Browserkontextes mit dem Befehl `window.open`, Emulationen, Viewport-Überschreibungen und Vorschubeladungsskripte angewendet werden, bevor der Befehl zurückkehrt. ([Firefox Bug 1985997](https://bugzil.la/1985997), [Firefox Bug 2005546](https://bugzil.la/2005546) und [Firefox Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere WebDriver-Klassikbefehle verbessert, um `implicit` und `pageLoad` Timeouts in Einklang mit dem Skript-Timeout zu behandeln, unter Verwendung von `null` Werten, um die Timeouts zu deaktivieren. ([Firefox Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Addon-Entwickler

- Einführung der anfänglichen Unterstützung für geteilte Ansichten. Diese Unterstützung umfasst:
  - Aufnahme der geteilten Ansichts-ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht einbeziehen.
    ([Firefox Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als obersten Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung bietet eine Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Bug 2013477](https://bugzil.la/2013477))
- Es ist kein Benutzerbefehl mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen. Dieses Feature war hinter der `extensions.openPopupWithoutUserGesture.enabled` Präferenz ab Firefox 108 verfügbar. Diese Änderung bringt das Verhalten von Firefox in Einklang mit Chrome und Safari. ([Firefox Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss zuerst {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} aufgerufen werden. Diese Änderung bringt das Verhalten von Firefox in Einklang mit Chrome. ([Firefox Bug 2011516](https://bugzil.la/2011516))
- Die Implementierung von [`structuredClone`](/de/docs/Web/API/Window/structuredClone) wurde geändert, um Objekte im `this` Realm anstelle des Realms des Aufrufers zu instanziieren. Für die Rückwärtskompatibilität enthält der globale Bereich von Inhalts-Skripten jetzt seine eigene `structuredClone` Methode, die die `window.structuredClone` Methode überschattet. Weitere Informationen finden Sie unter [`structuredClone` in Sharing objects with page scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:` Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wird veraltet. ([Firefox Bug 2011234](https://bugzil.la/2011234)) Das Feature ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung wird auf alle Versionen von Firefox 152 und später angewendet werden. ([Firefox Bug 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter, der auf [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons bei dunklen Themen angewendet wird, wird in Nightly-Builds deaktiviert ([Firefox Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Ausgaben ab Version 152 deaktiviert ([Firefox Bug 2016509](https://bugzil.la/2016509)). Sie können Seitenaktion SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Ausgaben testen, indem Sie eine boolesche `about:config`-Präferenz namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen.

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 149 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, festzulegen, wie ein Attributwert in einen CSS-Wert analysiert wird und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu nehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, nicht nur zwei. Dies ermöglicht es, viele Farben zu mischen und die Prozentsätze jeder einzelnen festzulegen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie etwa spielen oder pausiert, zu stylen. ([Firefox Bug 1707584](https://bugzil.la/1707584), [Firefox Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabe-Elementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (nur Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2014404](https://bugzil.la/2014404)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die CSS Typed Object Model Level 1 Spezifikation wird implementiert.
  In dieser Version wurde die Unterstützung für die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle hinzugefügt, die die Konvertierung eines CSS-numerischen Wertes von einer Einheit zu einer anderen erlaubt. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildunterstützung: Rust-basierter Decoder** (nur Nightly): `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet. ([Firefox Bug 1986393](https://bugzil.la/1986393)).
