---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte heben Sie alle Überschriften hervor, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` werden `auto`-Popovers nicht schließen, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

- Die CSS-Eigenschaft [`font-family: math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt unterstützt und wird standardmäßig auf {{mathmlelement('math')}}-Elemente angewendet.
  Dies stellt sicher, dass Websites eine geeignete Mathe-Schriftart und/oder MathML verwenden können, ohne wissen zu müssen, welche Schriftarten auf dem zugrundeliegenden Betriebssystem vorhanden sind. ([Firefox-Bug 2014703](https://bugzil.la/2014703)).

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die CSS-Eigenschaft {{CSSXRef("shape-outside")}} unterstützt jetzt die Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) als Wert. Dies ermöglicht Ihnen, eine Form für Inline-Inhalte zu definieren, die sich um den Inhalt wickeln, unter Verwendung von Abständen von der linken (`x`) und oberen (`y`) Kante des umschließenden Blocks sowie einer Breite (`w`) und Höhe (`h`). ([Firefox-Bug 1983187](https://bugzil.la/1983187)).

- Die CSS-Eigenschaft {{CSSXRef("vertical-align")}} ist jetzt eine Shorthand-Eigenschaft für die Eigenschaften {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} und {{CSSXRef("baseline-source")}}. ([Firefox-Bug 1830771](https://bugzil.la/1830771)).

- Der [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query)-Teil der {{cssxref("@container")}}-„At-rule“-Bedingung ist jetzt optional.
  Dies ermöglicht die Übereinstimmung mit Containern ausschließlich basierend auf ihren Namen.
  ([Firefox-Bug 2016474](https://bugzil.la/2016474)).

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
  Darüber hinaus erlauben die Methoden jetzt, dass sowohl Resize-Optionen ([`options.resizeWidth`](/de/docs/Web/API/Window/createImageBitmap#resizewidth) oder [`options.resizeHeight`](/de/docs/Web/API/Window/createImageBitmap#resizeheight)) als auch Bild-Bitmap-Parameter ([`sx`, `sy`, `sw` und `sh`](/de/docs/Web/API/Window/createImageBitmap#sx)) gleichzeitig festgelegt werden können – zuvor führte die gleichzeitige Festlegung beider zur unskalierten Quell-Bitmap.
  ([Firefox-Bug 2010125](https://bugzil.la/2010125)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) wird jetzt für eine Liste von Optionen unterstützt, die in einem {{htmlelement("datalist")}} definiert sind.
  Dies ermöglicht es, den Browser-Picker für ein `<datalist>` programmatisch zu starten, wenn er durch eine Benutzerinteraktion ausgelöst wird ([Firefox-Bug 1998668](https://bugzil.la/1998668)).

- Das Interface [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies erlaubt Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, wie etwa <kbd>Esc</kbd> auf Windows oder die <kbd>Zurück</kbd>-Taste auf Android, ähnlich wie bei eingebauten Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

- DOM-Methoden erlauben jetzt eine größere Auswahl an Zeichen für Element- und Attributnamen.
  Zuvor waren DOM-Methoden weitaus restriktiver, aber jetzt erlauben sie denselben Zeichensatz wie der HTML-Parser.
  Die betroffenen Methoden sind: [`createAttribute()`](/de/docs/Web/API/Document/createAttribute), [`createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS), [`createElement()`](/de/docs/Web/API/Document/createElement) und [`createElementNS()`](/de/docs/Web/API/Document/createElementNS) des [`Document`](/de/docs/Web/API/Document)-Interfaces, [`toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute), [`setAttribute()`](/de/docs/Web/API/Element/setAttribute), [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) des [`Element`](/de/docs/Web/API/Element)-Interfaces, [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) des [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interfaces, und [`define()`](/de/docs/Web/API/CustomElementRegistry/define) und [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined) des [`whenDefined()`](/de/docs/Web/API/CustomElementRegistry/whenDefined)-Interfaces.
  ([Firefox-Bug 1773312](https://bugzil.la/1773312)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Dies gibt ein Objekt zurück, das die Echtzeitaufnahme des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als nicht-standardisiertes `mozCaptureStream()`-Verfahren verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert jetzt die Lautstärke des Medienelements, wenn Audio für alle Arten von Quellen aufgenommen wird (wie in der Spezifikation vorgeschrieben).
  Zuvor beeinflusste das Einstellen der Lautstärke des Elements nicht das aufgenommene Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) fängt jetzt Roh-Audio von der Quelle ein, ohne die Lautstärke des Medienelements anzuwenden, unabhängig vom Typ der Quelle, die das Medienelement abspielt (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des aufgenommenen Streams.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Aktualisierte die Screenshot-Implementierungen sowohl für die WebDriver-BiDi- als auch für die klassische WebDriver-Protokolle, um korrekt einen Fehler zurückzugeben, wenn der angeforderte Screenshot-Bereich die maximal unterstützten Dimensionen überschreitet, anstatt ihn stillschweigend zu beschneiden. ([Firefox-Bug 1994148](https://bugzil.la/1994148)).
- Aktualisierte die Aktionen-Implementierung sowohl für die WebDriver-BiDi- als auch für die klassische WebDriver-Protokolle, um eine `scroll`-Aktion des Eingabequellentyps `wheel` zu erlauben, mehr als die visuellen Ansichtsfenster-Dimensionen zu scrollen. ([Firefox-Bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Unterstützung für die automatische Benutzer-Dialog-Handhabung hinzugefügt, die durch Fähigkeiten mit dem Befehl `session.new` konfiguriert werden kann. ([Firefox-Bug 1905086](https://bugzil.la/1905086)).
- Der Befehl `browser.setDownloadBehavior` wurde hinzugefügt, mit dem Clients das Herunterladen erlauben oder verbieten und auch einen benutzerdefinierten Download-Ordner festlegen können. Dieses Verhalten kann pro Sitzung oder pro Benutzerkontexte konfiguriert werden. ([Firefox-Bug 1989022](https://bugzil.la/1989022)).
- Die Ereignisse `script.realmCreated` und `script.realmDestroyed` für Worker-Realm (für dedizierte, geteilte und Service-Worker) wurden hinzugefügt. ([Firefox-Bug 1936770](https://bugzil.la/1936770)).
- Ein Problem wurde behoben, bei dem die Ereignisse `browsingContext.userPromptOpened` und `browsingContext.userPromptClosed` fälschlicherweise die oberste Kontext-ID anstatt die Kontext-ID des iframes auf Android berichteten. ([Firefox-Bug 2007385](https://bugzil.la/2007385)).
- Die Serialisierung für DOM-Knoten wurde korrigiert, um spezifische Schatten-Roots des Benutzer-Agenten nicht offenzulegen. ([Firefox-Bug 2016673](https://bugzil.la/2016673)).
- Die Logik des Anwendens verschiedener Einstellungen auf neue Browsing-Kontexte aktualisiert, um sicherzustellen, dass im Fall des Erstellens eines Browsing-Kontexts mit dem Befehl `window.open`, Emulationen, Ansichtsfenster-Overrides und Preload-Skripte angewendet werden, bevor der Befehl zurückkehrt. ([Firefox-Bug 1985997](https://bugzil.la/1985997), [Firefox-Bug 2005546](https://bugzil.la/2005546) und [Firefox-Bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Verbessert einige klassische WebDriver-Befehle, um `implizite` und `pageLoad`-Timeouts in Übereinstimmung mit dem Skript-Timeout zu behandeln, wodurch `null`-Werte die Timeouts deaktivieren können. ([Firefox-Bug 2008345](https://bugzil.la/2008345)).

## Änderungen für Add-on-Entwickler

- Fügt erste Unterstützung für die geteilte Ansicht hinzu. Diese Unterstützung umfasst:
  - Einbeziehung der ID der geteilten Ansicht in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}} und {{WebExtAPIRef("tabs.Tab")}}
  - Dokumentation des Verhaltens, wenn {{WebExtAPIRef("tabs.move")}} oder {{WebExtAPIRef("tabs.remove")}} Tabs in einer geteilten Ansicht einbeziehen.
    ([Firefox-Bug 1993037](https://bugzil.la/1993037))
- Unterstützung für `tabId` als oberstes Parameter-Level in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung dient der Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox-Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzer-Geste ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen können. Diese Funktion war hinter der Einstellung `extensions.openPopupWithoutUserGesture.enabled` seit Firefox 108 verfügbar. Diese Änderung bringt das Verhalten von Firefox in Einklang mit Chrome und Safari. ([Firefox-Bug 1799344](https://bugzil.la/1799344))
- Wenn `windowId` in {{WebExtAPIRef("action.openPopup")}} oder {{WebExtAPIRef("browserAction.openPopup")}} übergeben wird, muss das Fenster fokussiert (aktiv) sein, damit das Popup geöffnet werden kann. Um ein Popup in einem nicht fokussierten Fenster zu öffnen, muss {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} zuerst aufgerufen werden. Diese Änderung bringt das Verhalten von Firefox in Einklang mit Chrome. ([Firefox-Bug 2011516](https://bugzil.la/2011516))

<!-- ### Entfernungen -->

- Die Möglichkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. ([Firefox-Bug 2011234](https://bugzil.la/2011234)) Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung gilt für alle Versionen von Firefox 152 und später. ([Firefox-Bug 2015559](https://bugzil.la/2015559)) Alternativ kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.
- Der implizite CSS-Filter auf [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG-Icons in dunklen Themen ist in Nightly Builds deaktiviert ([Firefox-Bug 2001318](https://bugzil.la/2001318)) und wird in anderen Firefox-Ausgaben ab Version 152 deaktiviert ([Firefox-Bug 2016509](https://bugzil.la/2016509)). Sie können die Page Action SVG-Icons mit dem deaktivierten CSS-Filter in anderen Firefox-Ausgaben testen, indem Sie eine boolean-`about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen.

<!-- ### Andere -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 149 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **`<attr-type>`-Werte in der `attr()`-CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)-Werte. Dies ermöglicht es Ihnen zu spezifizieren, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631) & [Firefox-Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix)-CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, anstatt nur zwei. Dies ermöglicht Ihnen, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

- **Medienbasierte Pseudoklassen**: `dom.media.pseudo-classes.enabled`

  Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand, wie z. B. Wiedergabe oder Pause, zu stylen. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

- **`alpha`- und `colorspace`-Attribute in `color`-Eingabeelementen** (Nur Nightly): `dom.forms.html_color_picker.enabled`

  Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

- **`@container style()`-Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2014404](https://bugzil.la/2014404)).

- **CSS Typisiertes Objektmodell Level 1**: `layout.css.typed-om.enabled`

  Die Spezifikation des CSS Typisierten Objektmodells Level 1 wird implementiert.
  In dieser Version wurde die Unterstützung für die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) hinzugefügt, die die Umwandlung eines CSS-Zahlenwerts von einer Einheit in eine andere erlaubt. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL-Bildunterstützung: Rust-basierter Dekoder**: `image.jxl.enabled`

  Der vorherige C++-Dekoder für [JPEG XL](https://jpeg.org/jpegxl/) wurde durch eine neue, auf Rust basierende Implementierung ersetzt, die die Bibliothek `jxl-rs` verwendet. ([Firefox-Bug 1986393](https://bugzil.la/1986393)).
