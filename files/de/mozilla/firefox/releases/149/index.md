---
title: Firefox 149 Veröffentlichungsnotizen für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: a517460f04217a7144fc5896f1b272c71fb635b5
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Veröffentlichungsnotizen für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, zu denen Sie Anmerkungen machen. -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt nun den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto`-Popovers, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers. ([Firefox Bug 1867743](https://bugzil.la/1867743)).

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird nun für eine Liste von Optionen, die in einem {{htmlelement("datalist")}} definiert sind, unterstützt.
  Dies ermöglicht es, den Browser-Auswahlmechanismus für ein `<datalist>` programmatisch zu starten, wenn er durch Benutzerinteraktion ausgelöst wird. ([Firefox Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird nun unterstützt.
  Dies ermöglicht Entwicklern, Komponenten zu implementieren, die über geräte-native Mechanismen geschlossen werden können, wie beispielsweise die <kbd>Esc</kbd>-Taste unter Windows oder die <kbd>Back</kbd>-Taste unter Android, auf die gleiche Weise wie integrierte Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben nun eine breitere Palette von Zeichen für Element- und Attributnamen.
  Bisher waren die DOM-Methoden wesentlich restriktiver, aber jetzt erlauben sie denselben Satz von Zeichen wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle, sowie [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined)-Schnittstelle.
  ([Firefox Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird nun unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeitaufnahme des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Vorher war `captureStream()` nur als nicht-standardisierte Methode `mozCaptureStream()` verfügbar.
  ([Firefox Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert nun die Lautstärke des Medienelements beim Aufnehmen von Audio für alle Arten von Quellen (wie in der Spezifikation gefordert).
  Zuvor wirkte sich das Einstellen der Lautstärke des Elements nicht auf das aufgenommene Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen aus.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) nimmt nun Roh-Audio von der Quelle auf, ohne die Lautstärke des Medienelements anzuwenden, unabhängig von der Art der Quelle, die das Medienelement abspielt (wie in der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des aufgenommenen Streams.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Unterstützung für `tabId` als oberster Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung bietet Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzer-Geste ist nicht mehr erforderlich, um {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} zu öffnen. Diese Funktion war hinter der `extensions.openPopupWithoutUserGesture.enabled`-Einstellung ab Firefox 108 verfügbar. Diese Änderung bringt das Verhalten von Firefox in Einklang mit Chrome und Safari. ([Firefox Bug 1799344](https://bugzil.la/1799344))

<!-- ### Entfernungen -->

Die Möglichkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wird abgelehnt. Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung gilt für alle Versionen von Firefox 152 und später. Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.([Firefox Bug 2011234](https://bugzil.la/2011234))

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 149 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es, zu spezifizieren, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu beziehen. ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, statt nur zwei. Dies erlaubt es, viele Farben zu mischen und die Prozentsätze jeder Farbe zu setzen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).
