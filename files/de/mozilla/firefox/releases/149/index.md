---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 3ea29f3443256eb763b957f2eb8d9c597f039add
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt nun den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popups mit dem Wert `hint` schließen keine `auto` Popups, wenn sie angezeigt werden, schließen jedoch andere Hint-Popups. ([Firefox Fehler 1867743](https://bugzil.la/1867743)).

<!-- No notable changes. -->

<!-- #### Removals -->

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}} Elemente angewendet.
  Dies stellt sicher, dass Websites eine passende Mathe-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Fehler 2014703](https://bugzil.la/2014703)).

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht es, den Browser-Auswahl für eine `<datalist>` programmgesteuert zu starten, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox Fehler 1998668](https://bugzil.la/1998668)).

- Das Interface [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräte-nativen Mechanismen geschlossen werden können, wie z.B. der <kbd>Esc</kbd> auf Windows oder der <kbd>Zurück</kbd>-Taste auf Android, auf die gleiche Weise wie eingebaute Komponenten wie [Dialoge](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popups](/de/docs/Web/API/Popover_API).
  ([Firefox Fehler 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Palette von Zeichen für Element- und Attributnamen.
  Zuvor waren DOM-Methoden weit restriktiver, aber jetzt erlauben sie die gleiche Menge an Zeichen wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle.
  ([Firefox Fehler 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese Methode gibt ein Objekt zurück, das die Echtzeit-Erfassung des Inhalts im Element streamt.
  Der Stream kann zum Beispiel als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als nicht-standardisiertes `mozCaptureStream()` verfügbar.
  ([Firefox Fehler 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) berücksichtigt jetzt die Lautstärke des Media-Elements, wenn Audio für alle Quelltypen erfasst wird (wie in der Spezifikation gefordert).
  Zuvor beeinflusste das Einstellen der Lautstärke des Elements nicht das erfasste Audio bei [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt rohes Audio von der Quelle, ohne die Lautstärke des Media-Elements anzuwenden, unabhängig vom Quellentyp, den das Media-Element abspielt (wie in der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Media-Elements die Lautstärke des erfassten Streams.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Unterstützung für `tabId` als oberstes Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} wird hinzugefügt. Diese Änderung stellt die Kompatibilität mit der Chrome-Implementierung von `action.isEnabled` sicher. ([Firefox Fehler 2013477](https://bugzil.la/2013477))
- Eine Benutzeraktion ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen können. Diese Funktion war ab Firefox 108 hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` verfügbar. Diese Änderung bringt das Verhalten von Firefox in Einklang mit Chrome und Safari. ([Firefox Fehler 1799344](https://bugzil.la/1799344))

<!-- ### Removals -->

Die Fähigkeit von Erweiterungen, Code in ihren `moz-extension:` Dokumenten dynamisch mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wird veraltet. Diese Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung wird für alle Versionen von Firefox 152 und später gelten. Alternativ kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}} Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.([Firefox Fehler 2011234](https://bugzil.la/2011234))

<!-- ### Other -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 149 enthalten, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht, wie ein Attributwert in einem CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox Fehler 1986631](https://bugzil.la/1986631) & [Firefox Fehler 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox Fehler 2007772](https://bugzil.la/2007772)).
