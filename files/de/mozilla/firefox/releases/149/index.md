---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 1ba0755482292cd52e89cf96fda34000c8e60c91
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt nun den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto`-Popovers, wenn sie angezeigt werden, sondern schließen andere Hint-Popovers. ([Firefox Bug 1867743](https://bugzil.la/1867743)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Mathematikschriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Bug 2014703](https://bugzil.la/2014703)).

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

### CSS

- Die CSS-Eigenschaft {{CSSXRef("shape-outside")}} unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Damit können Sie eine Form definieren, um die Inline-Inhalte fließen, wobei Entfernungen von den linken (`x`) und oberen (`y`) Rändern des enthaltenen Blocks sowie eine Breite (`w`) und Höhe (`h`) verwendet werden. ([Firefox Bug 1983187](https://bugzil.la/1983187)).

- Die CSS-Eigenschaft {{CSSXRef("vertical-align")}} ist jetzt eine Shorthand-Eigenschaft für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox Bug 1830771](https://bugzil.la/1830771)).

<!-- #### Entfernt -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

- Der Parameter [`options.resizeQuality`](/de/docs/Web/API/Window/createImageBitmap#resizequality) wird jetzt von [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützt.
  Außerdem erlauben die Methoden jetzt, dass sowohl Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bildparameter ([`sx`, `sy`, `sw` und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festgelegt werden können – zuvor führte dies zur Rückgabe des unskalierten Quell-Bitmaps.
  ([Firefox Bug 2010125](https://bugzil.la/2010125)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht es, dass der Browser-Picker für ein `<datalist>` programmgesteuert gestartet werden kann, wenn er durch eine Benutzerinteraktion ausgelöst wird ([Firefox Bug 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, Komponenten zu implementieren, die mit geräte-nativen Mechanismen wie <kbd>Esc</kbd> auf Windows oder der <kbd>Zurück</kbd>-Taste auf Android geschlossen werden können, ähnlich wie eingebaute Komponenten wie [Dialoge](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine breitere Palette von Zeichen für Element- und Attributnamen.
  Bisher waren DOM-Methoden weitaus restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined)-Schnittstelle.
  ([Firefox Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) ist jetzt unterstützt.
  Dies gibt ein Objekt zurück, das die Echtzeit-Erfassung des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC-`RTCPeerConnection` verwendet werden.
  Zuvor war `captureStream()` nur als nicht-standardisierte `mozCaptureStream()`-Methode verfügbar.
  ([Firefox Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert nun die Lautstärke des Medienelements bei der Audioaufnahme für alle Quelltypen (wie es die Spezifikation erfordert).
  Zuvor beeinflusste die Einstellung der Lautstärke des Elements das aufgenommene Audio für `MediaStream`-Quellen nicht.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst nun rohes Audio der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig davon, welcher Typ von Quelle das Medienelement abspielt (wie es die Spezifikation erfordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des aufgenommenen Streams.
  ([Firefox Bug 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt erste Unterstützung für geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der geteilten Ansichts-ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht beinhalten.
    ([Firefox Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als obersten Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzergestus ist nicht mehr erforderlich, um {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} zu öffnen. Diese Funktion war zu dem `extensions.openPopupWithoutUserGesture.enabled`-Einstellung von Firefox 108 verfügbar. Diese Änderung stimmt das Verhalten von Firefox mit Chrome und Safari ab. ([Firefox Bug 1799344](https://bugzil.la/1799344))

<!-- ### Entfernt -->

- Die Fähigkeit von Erweiterungen, dynamisch Code in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. ([Firefox Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox zeigen eine Warnung in der Konsole des Tabs an. Diese Einschränkung gilt für alle Versionen von Firefox 152 und später. ([Firefox Bug 2015559](https://bugzil.la/2015559)) Alternativ kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des benötigten Codes auszulösen.
- Der implizite CSS-Filter, der auf [Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)-SVG-Icons in dunklen Themen angewendet wird, ist in den Nightly-Builds deaktiviert ([Firefox Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Ausgaben ab Version 152 deaktiviert ([Firefox Bug 2016509](https://bugzil.la/2016509)). Sie können Seitenaktions-SVG-Icons mit deaktiviertem CSS-Filter in anderen Firefox-Ausgaben testen, indem Sie eine boolesche `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und sie auf `false` setzen.

<!-- ### Andere -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 149 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und legen Sie sie auf `true` fest.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()`-CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht die Angabe, wie ein Attributwert in einen CSS-Wert geparst wird, und das direkte Übernehmen dieser Werte von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes). ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix)-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, anstatt nur zwei. Dies ermöglicht das Mischen vieler Farben und das Festlegen der Prozentsätze jeder Farbe. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es, {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand, wie Abspielen oder Pausiert, zu stylen. ([Firefox Bug 1707584](https://bugzil.la/1707584), [Firefox Bug 2014512](https://bugzil.la/2014512)).

- **`alpha`- und `colorspace`-Attribute in `color`-Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Bug 1919718](https://bugzil.la/1919718)).

- **Abfrage nach `@container style()`** (nur Nightly): `layout.css.style-queries.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt Abfragen von [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries). Dies ermöglicht es, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und entsprechend seiner Kinder die Stile anzupassen. ([Firefox Bug 2014404](https://bugzil.la/2014404)).
