---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: efe381c1cc01bbcc2f89e40c97890917c7575c9b
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen. Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie Überschriften, für die Sie Hinweise verfassen. -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popover mit dem Wert `hint` schließen keine `auto` Popovers, wenn sie angezeigt werden, sondern schließen andere Hinweis-Popovers. ([Firefox Fehler 1867743](https://bugzil.la/1867743)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Mathe-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Fehler 2014703](https://bugzil.la/2014703)).

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einer {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht es, den Browser-Auswahldialog für ein `<datalist>` programmgesteuert zu starten, wenn er durch Benutzerinteraktion ausgelöst wird. ([Firefox Fehler 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteintegrierten Mechanismen geschlossen werden können, wie z. B. die <kbd>Esc</kbd>-Taste unter Windows oder die <kbd>Zurück</kbd>-Taste auf Android, auf die gleiche Weise wie integrierte Komponenten wie [dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Fehler 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt einen breiteren Bereich von Zeichen für Element- und Attributnamen.
  Bisher waren DOM-Methoden weitaus restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle sowie [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined)-Schnittstelle.
  ([Firefox Fehler 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeit-Erfassung des Inhalts im Element streamt.
  Der Stream kann zum Beispiel als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Bisher war `captureStream()` nur als nicht-standardisierte Methode `mozCaptureStream()` verfügbar.
  ([Firefox Fehler 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert jetzt die Lautstärke des Media-Elements beim Aufnehmen von Audio für alle Quelltypen (wie von der Spezifikation gefordert).
  Bisher hatte das Einstellen der Lautstärke des Elements keinen Einfluss auf das aufgenommene Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst nun rohe Audiodaten aus der Quelle, ohne die Lautstärke des Media-Elements anzuwenden, unabhängig davon, welcher Quelltyp im Media-Element wiedergegeben wird (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Media-Elements die Lautstärke des erfassten Streams.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Kompatibilität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt Unterstützung für `tabId` als oberste Ebene Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzu. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Fehler 2013477](https://bugzil.la/2013477))
- Eine Benutzeraktion ist nicht mehr erforderlich, um mit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup zu öffnen. Diese Funktion war hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` ab Firefox 108 verfügbar. Diese Änderung passt das Verhalten von Firefox an Chrome und Safari an. ([Firefox Fehler 1799344](https://bugzil.la/1799344))

<!-- ### Entfernungen -->

Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wird abgelehnt. Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Beschränkung gilt für alle Versionen von Firefox 152 und höher. Alternativ kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.([Firefox Fehler 2011234](https://bugzil.la/2011234))

<!-- ### Andere -->

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 149 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es, festzulegen, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu nehmen. ([Firefox Fehler 1986631](https://bugzil.la/1986631) & [Firefox Fehler 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte anstatt nur zwei. Dies erlaubt es, viele Farben zu mischen und die Prozentsätze jeder festzulegen. ([Firefox Fehler 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} erlauben es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie spielen oder pausieren, zu stylen. ([Firefox Fehler 1707584](https://bugzil.la/1707584), [Firefox Fehler 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly-Version): `dom.forms.html_color_picker.enabled`

  Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Fehler 1919718](https://bugzil.la/1919718)).
