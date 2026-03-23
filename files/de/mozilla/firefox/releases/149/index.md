---
title: Firefox 149 Release Notes für Entwickler (Stabil)
short-title: Firefox 149 (Stabil)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 4e100cee733013cb48babc0c734fe96dda9ece6c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 wurde am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt nun den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine passende Mathe-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden OS vorhanden sind. ([Firefox-Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die {{CSSXRef("shape-outside")}} CSS-Eigenschaft unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Dies ermöglicht es Ihnen, eine Form zu definieren, um die Inline-Inhalte herumfließen, unter Verwendung von Abständen von den linken (`x`) und oberen (`y`) Kanten des umschließenden Blocks sowie einer Breite (`w`) und Höhe (`h`). ([Firefox-Bug 1983187](https://bugzil.la/1983187)).

- Die {{CSSXRef("vertical-align")}} CSS-Eigenschaft ist nun eine Kurzform-Eigenschaft für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox-Bug 1830771](https://bugzil.la/1830771)).

- Der Teil der Bedingung [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query) der {{cssxref("@container")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist jetzt optional.
  Dies erlaubt das Abgleichen gegen Container basierend allein auf ihren Namen.
  ([Firefox-Bug 2016474](https://bugzil.la/2016474)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird nun von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Zusätzlich erlauben die Methoden jetzt, sowohl die Vergrößerungsoptionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch die Bild-Bitmap-Parameter ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festzulegen — zuvor führte das Festlegen beider dazu, dass das unskalierte Quell-Bitmap zurückgegeben wurde. ([Firefox-Bug 2010125](https://bugzil.la/2010125)).

- Die [Reporting API](/de/docs/Web/API/Reporting_API) wird jetzt für das Reporting von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)- und {{httpheader("Integrity-Policy")}}-Verstößen unterstützt.
  Dies ermöglicht es, dass Berichtobjekte, die [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Objekte und [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)-Objekte sind, auf verletzenden Seiten mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) gemeldet werden können (Berichte können mithilfe der `type`-Eigenschaft gefiltert werden: `"csp-violation"` oder `"integrity-violation"`).
  Eine serialisierte Version der Berichtobjekte kann auch an einen Berichtserver gesendet werden, der in den entsprechenden HTTP-Headern spezifiziert ist — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert werden. ([Firefox-Bug 1976074](https://bugzil.la/1976074), [Firefox-Bug 2008916](https://bugzil.la/2008916)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird nun für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht das programmatische Starten des Browser-Pickers für ein `<datalist>`, wenn er durch eine Benutzerinteraktion ausgelöst wird ([Firefox-Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteinternen Mechanismen geschlossen werden können, wie z.B. die <kbd>Esc</kbd> auf Windows oder die <kbd>Zurück</kbd>-Taste auf Android, auf die gleiche Weise wie integrierte Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben nun eine breitere Palette von Zeichen für Element- und Attributnamen.
  Zuvor waren DOM-Methoden viel restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined)-Schnittstelle.
  ([Firefox-Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Dies gibt ein Objekt zurück, das den Echtzeit-Capture des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Vorher war `captureStream()` nur als die nicht standardmäßige Methode `mozCaptureStream()` verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert jetzt die Lautstärke des Medienelements, wenn Audio für alle Arten von Quellen erfasst wird (wie es die Spezifikation verlangt).
  Zuvor beeinflusste das Einstellen der Lautstärke des Elements nicht das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt rohes Audio aus der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig von der Art der Quelle, die das Medienelement spielt (wie es die Spezifikation verlangt).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des erfassten Streams.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Implementierungen der Screenshot-Funktionen für sowohl das WebDriver BiDi- als auch das klassische WebDriver-Protokoll wurden aktualisiert, um bei Überschreitung der maximal unterstützten Dimensionen des angeforderten Screenshot-Bereichs korrekt einen Fehler zurückzugeben, anstatt diesen stillschweigend abzuschneiden. ([Firefox-Bug 1994148](https://bugzil.la/1994148)).
- Die Implementierung der Aktionen sowohl für das WebDriver BiDi- als auch das klassische WebDriver-Protokoll wurde aktualisiert, um eine `scroll`-Aktion des Eingabequellentyps `wheel` zu erlauben, die über die visuellen Viewport-Dimensionen hinaus scrollt. ([Firefox-Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Handhabung von Benutzeraufforderungen hinzugefügt, die durch Fähigkeiten mit dem `session.new`-Befehl konfiguriert werden kann. ([Firefox-Bug 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` wurde hinzugefügt, der es Clients ermöglicht, Downloads zu erlauben oder zu verbieten und auch einen benutzerdefinierten Download-Ordner festzulegen. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontexte konfiguriert werden. ([Firefox-Bug 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker-Realm (für dedizierte, geteilte und Service-Worker) wurden hinzugefügt. ([Firefox-Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem wurde behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Kontext-ID des obersten Levels anstelle der des iframes auf Android gemeldet haben. ([Firefox-Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten wurde korrigiert, um das Exponieren von Benutzeragent-spezifischen Schattenwurzeln zu verhindern. ([Firefox-Bug 2016673](https://bugzil.la/2016673)).
- Die Logik bei der Anwendung unterschiedlicher Einstellungen auf neue Browsing-Kontexte wurde aktualisiert, um sicherzustellen, dass beim Erstellen eines Browsing-Kontextes mit dem `window.open`-Befehl Emulationen, Viewport-Overrides und Vorladeskripte angewendet werden, bevor der Befehl zurückkehrt. ([Firefox-Bug 1985997](https://bugzil.la/1985997), [Firefox-Bug 2005546](https://bugzil.la/2005546) und [Firefox-Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere klassische WebDriver-Befehle wurden verbessert, um `implizierte` und `pageLoad`-Timeouts gemäß dem Skript-Timeout zu handhaben, wobei `null`-Werte verwendet werden können, um die Timeouts zu deaktivieren. ([Firefox-Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Erste Unterstützung für geteilte Ansicht hinzugefügt. Diese Unterstützung umfasst:
  - Einbeziehung der ID der geteilten Ansicht in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}} und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht enthalten.
    ([Firefox-Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als Parameter der obersten Ebene in {{WebExtAPIRef("action.isEnabled")}} and {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox-Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzer-Eingriff ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen können. Diese Funktion war hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` seit Firefox 108 verfügbar. Diese Änderung passt das Verhalten von Firefox an Chrome und Safari an. ([Firefox-Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss zuerst {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} aufgerufen werden. Diese Änderung passt das Verhalten von Firefox an Chrome an. ([Firefox-Bug 2011516](https://bugzil.la/2011516))

- Die Fähigkeit von Erweiterungen, Code in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} dynamisch auszuführen, wird eingestellt. ([Firefox-Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung wird auf alle Versionen von Firefox 152 und später angewendet. ([Firefox-Bug 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht gesendet wird, um die Ausführung des benötigten Codes zu triggern.
- Der implizite CSS-Filter, der auf [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)-SVG-Icons in dunklen Themen angewendet wurde, ist in Nightly-Builds deaktiviert ([Firefox-Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Ausgaben ab Version 152 deaktiviert sein ([Firefox-Bug 2016509](https://bugzil.la/2016509)). Sie können Page Action-SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Ausgaben testen, indem Sie eine boolesche `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen.

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 149 enthalten, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, festzulegen, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631) & [Firefox-Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

- **Pseudoklassen basierend auf Medien**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} erlauben es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand zu stylen, wie z.B. Abspielen oder Pausieren. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

- **Anfragen über `@container style()`** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-at-rule unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2014404](https://bugzil.la/2014404)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die CSS Typed Object Model Level 1 Spezifikation wird implementiert.
  In dieser Version wurde Unterstützung für die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) hinzugefügt, die es erlaubt, einen CSS-numerischen Wert von einer Einheit in eine andere zu konvertieren. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildunterstützung: Rust-basierter Decoder**: `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet. ([Firefox-Bug 1986393](https://bugzil.la/1986393)).
