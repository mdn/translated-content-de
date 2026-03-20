---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 8ae151e4d6b1ee73aef9d8e10222241f053b9e38
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften, für die Sie Notizen schreiben, aus -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem `hint`-Wert schließen keine `auto`-Popovers, wenn sie angezeigt werden, schließen jedoch andere Hinweis-Popovers. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies gewährleistet, dass Websites eine geeignete Mathematik-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox-Bug 2014703](https://bugzil.la/2014703)).

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die CSS-Eigenschaft {{CSSXRef("shape-outside")}} unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Dies ermöglicht es Ihnen, eine Form zu definieren, um die Inline-Inhalte gewickelt werden, wobei Abstände von den linken (`x`) und oberen (`y`) Kanten des umgebenden Blocks sowie eine Breite (`w`) und Höhe (`h`) verwendet werden. ([Firefox-Bug 1983187](https://bugzil.la/1983187)).

- Die CSS-Eigenschaft {{CSSXRef("vertical-align")}} ist jetzt eine Kurzform für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox-Bug 1830771](https://bugzil.la/1830771)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Darüber hinaus erlauben die Methoden jetzt, dass sowohl Größenänderungsoptionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bild-Bitmap-Parameter ([`sx`, `sy`, `sw` und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festgelegt werden — zuvor führte die gleichzeitige Einstellung beider zur Rückgabe des unskalierten Quell-Bitmaps.
  ([Firefox-Bug 2010125](https://bugzil.la/2010125)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht es, dass der Browser-Picker für ein `<datalist>`-Element programmgesteuert gestartet werden kann, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox-Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, wie der <kbd>Esc</kbd>-Taste auf Windows oder der <kbd>Zurück</kbd>-Taste auf Android, in derselben Weise wie eingebettete Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Auswahl von Zeichen für Element- und Attributnamen.
  Bisher waren DOM-Methoden viel restriktiver, aber jetzt erlauben sie dasselbe Satz von Zeichen wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) sowie [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined)-Schnittstelle.
  ([Firefox-Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeitaufnahme der Inhalte im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Früher war `captureStream()` nur als die nicht-standardisierte `mozCaptureStream()`-Methode verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) berücksichtigt jetzt die Lautstärke des Medienelements, wenn Audio für alle Arten von Quellen erfasst wird (wie von der Spezifikation gefordert).
  Früher beeinflusste das Einstellen der Lautstärke des Elements das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen nicht.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt Roh-Audio von der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig vom Typ der Quelle, die das Medienelement abspielt (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des erfassten Streams.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Erste Unterstützung für Split-View hinzufügen. Diese Unterstützung umfasst:
  - Einbeziehung der Split-View-ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}} und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einem Split-View enthalten.
    ([Firefox-Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als ein Top-Level-Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzufügen. Diese Änderung verbessert die Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox-Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzerinteraktion ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen können. Diese Funktion war hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` ab Firefox 108 verfügbar. Mit dieser Änderung stimmt das Verhalten von Firefox mit dem von Chrome und Safari überein. ([Firefox-Bug 1799344](https://bugzil.la/1799344))
- Wenn `winedowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet werden kann. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} zuerst aufgerufen werden. Diese Änderung macht das Verhalten von Firefox mit dem von Chrome kompatibel. ([Firefox-Bug 2011516](https://bugzil.la/2011516))

<!-- ### Entfernungen -->

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wird eingestellt. ([Firefox-Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar und die Beta- und Release-Versionen von Firefox zeigen eine Warnung in der Konsole des Tabs an. Diese Einschränkung wird in allen Firefox-Versionen ab 152 und höher gelten. ([Firefox-Bug 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter, der auf SVG-Icons der [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) in dunklen Themen angewendet wird, ist in Nightly-Builds deaktiviert ([Firefox-Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Ausgaben ab Version 152 deaktiviert ([Firefox-Bug 2016509](https://bugzil.la/2016509)). Sie können Seitenaktions-SVG-Icons mit deaktiviertem CSS-Filter in anderen Firefox-Ausgaben testen, indem Sie eine boolean `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen.

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 149 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>`-Werte in der `attr()`-CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)-Werte. Dies ermöglicht es Ihnen, festzulegen, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631) & [Firefox-Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die CSS-Funktion [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, anstatt nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

- **Pseudo-Klassen basierend auf Medien**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand, wie z.B. Wiedergabe oder Pause, zu stylen. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` Anfragen** (Nightly): `layout.css.style-queries.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Anfragen. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2014404](https://bugzil.la/2014404)).
