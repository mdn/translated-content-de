---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften, für die Sie Notizen schreiben, aus -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere Hinweis-Popovers. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

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

- Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit geräteeigenen Mechanismen geschlossen werden können, wie z.B. <kbd>Esc</kbd> unter Windows oder die <kbd>Zurück</kbd>-Taste auf Android, auf die gleiche Weise wie integrierte Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird nun unterstützt.
  Diese erstellt ein Objekt, das den Echtzeit-Mitschnitt des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als nicht-standardisierte Methode `mozCaptureStream()` verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) respektiert jetzt die Lautstärke des Media-Elements beim Aufzeichnen von Audio für alle Arten von Quellen (wie in der Spezifikation gefordert).
  Zuvor hatte das Festlegen der Lautstärke des Elements keinen Einfluss auf das aufgezeichnete Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst jetzt rohes Audio von der Quelle, ohne die Lautstärke des Media-Elements anzuwenden, unabhängig davon, welchen Quellentyp das Media-Element abspielt (wie in der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Media-Elements die Lautstärke des aufgezeichneten Streams.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

Die Fähigkeit von Erweiterungen, Code in ihren `moz-extension:`-Dokumenten dynamisch auszuführen, mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} ist veraltet. Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole des Tabs aus. Diese Einschränkung gilt für alle Versionen von Firefox 152 und höher. Alternativ kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.([Firefox-Bug 2011234](https://bugzil.la/2011234))

<!-- ### Sonstiges -->

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 149 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)-Werte. Dies ermöglicht es Ihnen, festzulegen, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631) & [Firefox-Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die CSS-Funktion [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, anstatt nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).
