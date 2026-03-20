---
title: Firefox 149 Release-Notes für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 15efe79bbd42baa8a455356dd8c3843d61b5fd4d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Release-Notes für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Anmerkungen verfassen -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` werden `auto` Popovers nicht schließen, wenn sie angezeigt werden, aber andere Hint-Popovers schließen. ([Firefox Fehler 1867743](https://bugzil.la/1867743)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Mathe-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrunde liegenden Betriebssystem vorhanden sind. ([Firefox Fehler 2014703](https://bugzil.la/2014703)).

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{CSSXRef("shape-outside")}} CSS-Eigenschaft unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Dadurch können Sie eine Form definieren, um die Inline-Inhalte gewickelt werden, mit Entfernungen vom linken (`x`) und oberen (`y`) Rand des enthaltenden Blocks und eine Breite (`w`) und Höhe (`h`). ([Firefox Fehler 1983187](https://bugzil.la/1983187)).

- Die {{CSSXRef("vertical-align")}} CSS-Eigenschaft ist jetzt eine Kurzschreibweise für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox Fehler 1830771](https://bugzil.la/1830771)).

- Der [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query) Teil der Bedingung der {{cssxref("@container")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist jetzt optional.
  Dies ermöglicht es, gegen Container allein aufgrund ihrer Namen zu vergleichen.
  ([Firefox Fehler 2016474](https://bugzil.la/2016474)).

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
  Darüber hinaus erlauben die Methoden jetzt, sowohl Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bildbitmap-Parameter ([`sx`, `sy`, `sw`, und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festzulegen — bisher führte das Festlegen beider zur Rückgabe der unskalierten Quellbitmap.
  ([Firefox Fehler 2010125](https://bugzil.la/2010125)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird nun für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht es, dass der Browser-Picker für ein `<datalist>` programmgesteuert gestartet wird, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox Fehler 1998668](https://bugzil.la/1998668)).

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird nun unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräte-nativen Mechanismen wie der <kbd>Esc</kbd>-Taste auf Windows oder der <kbd>Zurück</kbd>-Taste auf Android ähnlich wie eingebauten Komponenten wie [Dialogen](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API) geschlossen werden können.
  ([Firefox Fehler 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt einen größeren Umfang an Zeichen für Element- und Attributnamen.
  Zuvor waren DOM-Methoden weit restriktiver, jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) der [`Element`](/de/docs/Web/API/Element) Schnittstelle, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) der [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) Schnittstelle.
  ([Firefox Fehler 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird nun unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeitaufnahme der Inhalte im Element streamt.
  Der Stream kann zum Beispiel als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als die nicht standardmäßige Methode `mozCaptureStream()` verfügbar.
  ([Firefox Fehler 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) berücksichtigt nun die Lautstärke des Medienelements beim Erfassen von Audio für alle Quelltypen (wie in der Spezifikation gefordert).
  Zuvor beeinflusste das Einstellen der Lautstärke des Elements nicht das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst nun rohes Audio von der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig von der Art der Quelle, die das Medienelement abspielt (wie in der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des erfassten Streams.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

- Die Implementierungen für Screenshots sowohl im WebDriver BiDi als auch im klassischen WebDriver-Protokoll wurden aktualisiert, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Dimensionen überschreitet, anstatt ihn stillschweigend zu kürzen. ([Firefox Fehler 1994148](https://bugzil.la/1994148)).
- Die Actions-Implementierung für beide Protokolle wurde aktualisiert, um eine `scroll`-Aktion des Eingabequelltyps `wheel` zu ermöglichen, die mehr als die visuellen Ansichtsfenster-Abmessungen scrollt. ([Firefox Fehler 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Handhabung von Benutzeraufforderungen hinzugefügt, die über Fähigkeiten mit dem `session.new`-Befehl konfiguriert werden kann. ([Firefox Fehler 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` wurde hinzugefügt, der es Clients ermöglicht, Downloads zu erlauben oder zu verbieten und auch einen benutzerdefinierten Download-Ordner zu setzen. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontext konfiguriert werden. ([Firefox Fehler 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker-Umgebungen (für dedizierte, geteilte und Service-Worker) wurden hinzugefügt. ([Firefox Fehler 1936770](https://bugzil.la/1936770)).
- Ein Problem wurde behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die Kontext-ID der obersten Ebene statt der Kontext-ID des iframes auf Android meldeten. ([Firefox Fehler 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten wurde korrigiert, um benutzerspezifische Shadow-Roots nicht mehr offenzulegen. ([Firefox Fehler 2016673](https://bugzil.la/2016673)).
- Die Logik für die Anwendung verschiedener Einstellungen auf neue Browsing-Kontexte wurde aktualisiert, um sicherzustellen, dass im Fall der Erstellung eines Browsing-Kontexts mit dem `window.open`-Befehl Emulationen, Ansichtsfenster-Überschreibungen und Preload-Skripte angewandt werden, bevor der Befehl zurückkehrt. ([Firefox Fehler 1985997](https://bugzil.la/1985997), [Firefox Fehler 2005546](https://bugzil.la/2005546) und [Firefox Fehler 2005558](https://bugzil.la/2005558)).

#### Marionette

- Mehrere klassische WebDriver-Befehle wurden verbessert, um `implicit` und `pageLoad`-Timeouts in Übereinstimmung mit der Skript-Timeout zu behandeln, sodass `null`-Werte die Timeouts deaktivieren. ([Firefox Fehler 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Fügt anfängliche Unterstützung für die geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der geteilten Ansicht-ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht beinhalten.
    ([Firefox Fehler 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als oberstes Parameter-Level in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung bietet Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox Fehler 2013477](https://bugzil.la/2013477))
- Für {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ist kein Benutzer-Geste mehr erforderlich, um ein Popup zu öffnen. Diese Funktion war hinter der `extensions.openPopupWithoutUserGesture.enabled`-Einstellung seit Firefox 108 verfügbar. Diese Änderung bringt das Firefox-Verhalten in Einklang mit Chrome und Safari. ([Firefox Fehler 1799344](https://bugzil.la/1799344))
- Wenn `winedowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet wird. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} zuerst aufgerufen werden. Diese Änderung bringt das Firefox-Verhalten in Einklang mit Chrome. ([Firefox Fehler 2011516](https://bugzil.la/2011516))

<!-- ### Entfernungen -->

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:` Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. ([Firefox Fehler 2011234](https://bugzil.la/2011234)) Die Funktion ist nicht mehr in Firefox Nightly verfügbar, und die Beta- und Release-Versionen von Firefox bieten eine Warnung in der Konsolenansicht des Tabs. Diese Einschränkung wird auf alle Versionen von Firefox 152 und höher angewendet. ([Firefox Fehler 2015559](https://bugzil.la/2015559)) Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter, der auf [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons auf dunklen Themes angewendet wird, wird in Nightly-Builds deaktiviert ([Firefox Fehler 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Editionen ab Version 152 deaktiviert ([Firefox Fehler 2016509](https://bugzil.la/2016509)). Sie können Seitenaktions-SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Editionen testen, indem Sie eine boolesche `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und diese auf `false` setzen.

<!-- ### Andere -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 149 verfügbar, jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox Fehler 1986631](https://bugzil.la/1986631) & [Firefox Fehler 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte anstatt nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox Fehler 2007772](https://bugzil.la/2007772)).

- **Medien-basierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medien-basierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie abspielen oder pausiert, zu stylen. ([Firefox Fehler 1707584](https://bugzil.la/1707584), [Firefox Fehler 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` Attribute in `color` Eingabeelementen** (nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML `<input type="color">`-Element unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Fehler 1919718](https://bugzil.la/1919718)).

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS `at-rule` unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und dementsprechend Stile auf seine Kinder anzuwenden. ([Firefox Fehler 2014404](https://bugzil.la/2014404)).

- **CSS Typisiertes Objektmodell Level 1**: `layout.css.typed-om.enabled`

  Die Spezifikation des CSS Typisierten Objektmodells Level 1 wird implementiert.
  In dieser Veröffentlichung wurde die Unterstützung für die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) hinzugefügt, die es ermöglicht, einen CSS-numerischen Wert von einer Einheit in eine andere zu konvertieren. ([Firefox Fehler 1278697](https://bugzil.la/1278697)).

- **JPEG XL Bildunterstützung: Rust-basierter Decoder**: `image.jxl.enabled`

  Der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder wurde durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs`-Bibliothek verwendet. ([Firefox Fehler 1986393](https://bugzil.la/1986393)).
