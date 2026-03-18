---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 6caf618993f50c0617a0a509e7c5dcb0c3f404c9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Web-Entwickler

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popover mit dem Wert `hint` schließen keine `auto` Popover, wenn sie angezeigt werden, schließen aber andere Hint-Popover. ([Firefox Bug 1867743](https://bugzil.la/1867743)).

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Schriftart für Mathematik und/oder MathML verwenden können, ohne zu wissen, welche Schriftarten auf dem zugrundeliegenden Betriebssystem vorhanden sind. ([Firefox Bug 2014703](https://bugzil.la/2014703)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("shape-outside")}} unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Dies ermöglicht Ihnen, eine Form für Inline-Inhalte zu definieren, die sich umhüllen, indem Distanzen von den linken (`x`) und oberen (`y`) Kanten des umgebenden Blocks sowie eine Breite (`w`) und Höhe (`h`) verwendet werden. ([Firefox Bug 1983187](https://bugzil.la/1983187)).

- Die CSS-Eigenschaft {{CSSXRef("vertical-align")}} ist jetzt eine Kurzform-Eigenschaft für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox Bug 1830771](https://bugzil.la/1830771)).

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Darüber hinaus erlauben die Methoden jetzt, dass sowohl die Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch die Parameter des Bild-Bitmap ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festgelegt werden können — bisher führte das Setzen beider zur Rückkehr des unskalierten Quellbildes.
  ([Firefox Bug 2010125](https://bugzil.la/2010125)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen in einem {{htmlelement("datalist")}} unterstützt.
  Dies ermöglicht es, den Browser-Picker für ein `<datalist>` programmgesteuert zu starten, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräte-nativen Mechanismen geschlossen werden können, wie z.B. der <kbd>Esc</kbd>-Taste unter Windows oder der <kbd>Zurück</kbd>-Taste auf Android, in der gleichen Weise wie eingebettete Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Palette von Zeichen für Element- und Attributnamen.
  Zuvor waren DOM-Methoden weit restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle.
  ([Firefox Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeitaufnahme des Inhalts im Element streamt.
  Der Stream kann z.B. als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Bisher war `captureStream()` nur als nicht-standardisierte `mozCaptureStream()` Methode verfügbar.
  ([Firefox Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) beachtet jetzt die Lautstärke des Medien-Elements beim Erfassen von Audio für alle Arten von Quellen (wie es die Spezifikation erfordert).
  Bisher hatte das Einstellen der Lautstärke des Elements keinen Einfluss auf das aufgenommene Audio für [`MediaStream`](/de/docs/Web/API/MediaStream) Quellen.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt Roh-Audio von der Quelle, ohne die Lautstärke des Medien-Elements anzuwenden, unabhängig von der Art der Quelle, die das Medien-Element abspielt (wie es die Spezifikation erfordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medien-Elements die Lautstärke des aufgenommenen Streams.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

## Änderungen für Add-on-Entwickler

- Fügt anfängliche Unterstützung für geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der ID der geteilten Ansicht in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht enthalten.
    ([Firefox Bug 1993037](https://bugzil.la/1993037))
- Fügt Unterstützung für `tabId` als oberstes Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzu. Diese Änderung dient der Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzerbefehl ist nicht mehr erforderlich, um {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} zu öffnen. Diese Funktion war ab Firefox 108 hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` verfügbar. Diese Änderung setzt das Verhalten von Firefox mit Chrome und Safari gleich. ([Firefox Bug 1799344](https://bugzil.la/1799344))

Die Möglichkeit von Erweiterungen, Code in ihren `moz-extension:` Dokumenten dynamisch auszuführen mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}}, ist veraltet. Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung gilt für alle Versionen von Firefox 152 und höher. Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}} Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes zu triggern. ([Firefox Bug 2011234](https://bugzil.la/2011234))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 149 enthalten, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht Ihnen zu spezifizieren, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die CSS-Funktion [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, statt nur zwei. Dies ermöglicht Ihnen, viele Farben zu mischen und die Prozentsätze jeder festzulegen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

- **Media-basierte Pseudo-Klassen**: `dom.media.pseudo-classes.enabled`

  Die media-basierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie z.B. abspielend oder pausiert, zu stylen. ([Firefox Bug 1707584](https://bugzil.la/1707584), [Firefox Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (nur Nightly): `layout.css.style-queries.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt Abfragen mit [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries). Dies ermöglicht Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und dem entsprechend seinen Kindern Stile zuzuweisen. ([Firefox Bug 2014404](https://bugzil.la/2014404)).
