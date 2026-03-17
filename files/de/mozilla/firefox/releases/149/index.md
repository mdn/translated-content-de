---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: a0cae6a26d6b7263ddea94c4e3b3484fe218b354
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen. Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popover mit dem Wert `hint` werden beim Anzeigen keine `auto`-Popover schließen, aber andere Hinweis-Popover schließen. ([Firefox Bug 1867743](https://bugzil.la/1867743)).

<!-- No notable changes. -->

<!-- #### Removals -->

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet. Dies stellt sicher, dass Websites eine passende Mathematik-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Bug 2014703](https://bugzil.la/2014703)).

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

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind. Dadurch kann der Browser-Auswahldialog für ein `<datalist>` programmgesteuert gestartet werden, wenn er durch eine Benutzereingabe ausgelöst wird ([Firefox Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt. Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteinternen Mechanismen geschlossen werden können, wie z.B. die <kbd>Esc</kbd>-Taste unter Windows oder die <kbd>Zurück</kbd>-Taste unter Android, auf die gleiche Weise wie eingebaute Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popover](/de/docs/Web/API/Popover_API). ([Firefox Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt einen größeren Bereich von Zeichen für Element- und Attributnamen. Früher waren DOM-Methoden viel restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser. Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined)-Schnittstelle. ([Firefox Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das das Echtzeit-Capture des Inhalts im Element streamt. Der Stream kann beispielsweise als Quelle für eine WebRTC-`[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)` verwendet werden. Früher war `captureStream()` nur als nicht standardisierte `mozCaptureStream()`-Methode verfügbar. ([Firefox Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert jetzt die Lautstärke des Media-Elements beim Aufnehmen von Audio für alle Quelltypen (wie es die Spezifikation erfordert). Früher hatte das Einstellen der Lautstärke des Elements keinen Einfluss auf das aufgenommene Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen. ([Firefox Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt rohes Audio von der Quelle, ohne die Lautstärke des Media-Elements anzuwenden, unabhängig von der Art der Quelle, die das Media-Element abspielt (wie es die Spezifikation erfordert). Vor dieser Änderung beeinflusste die Lautstärke des Media-Elements die Lautstärke des erfassten Streams. ([Firefox Bug 2010427](https://bugzil.la/2010427)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt die anfängliche Unterstützung für die geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der ID der geteilten Ansicht in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht einschließen.
    ([Firefox Bug 1993037](https://bugzil.la/1993037))
- Fügt Unterstützung für `tabId` als oberstes Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzu. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzerereignis ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen. Dieses Feature war hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` seit Firefox 108 verfügbar. Diese Änderung passt das Verhalten von Firefox an Chrome und Safari an. ([Firefox Bug 1799344](https://bugzil.la/1799344))

<!-- ### Removals -->

Die Fähigkeit von Erweiterungen, Code in ihren `moz-extension:`-Dokumenten dynamisch auszuführen mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} ist veraltet. Dieses Feature ist in Firefox Nightly nicht mehr verfügbar, und die Beta- sowie Release-Versionen von Firefox liefern eine Warnung in der Konsole des Tabs. Diese Einschränkung wird für alle Versionen von Firefox 152 und später gelten. Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Dokumentenskript registriert wird, der eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.([Firefox Bug 2011234](https://bugzil.la/2011234))

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 149 angeboten, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>`-Werte in der `attr()`-CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)-Werte. Dies ermöglicht es Ihnen, wie ein Attributswert in einen CSS-Wert umgewandelt wird, zu spezifizieren und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix)-CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, nicht nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

- **Pseudoklassen basierend auf Medienzustand**: `dom.media.pseudo-classes.enabled`

  Die Pseudoklassen basierend auf Medienzustand {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand wie abspielend oder pausiert zu stylen. ([Firefox Bug 1707584](https://bugzil.la/1707584), [Firefox Bug 2014512](https://bugzil.la/2014512)).

- **`alpha`- und `colorspace`-Attribute in `color`-Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Bug 1919718](https://bugzil.la/1919718)).
