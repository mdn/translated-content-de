---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 3cc1a6783def002ef12a3d9420af77cb11cf4b3a
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte alle Überschriften auskommentieren, zu denen Sie Notizen verfassen -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

### HTML

- Das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globale Attribut unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem `hint`-Wert schließen keine `auto`-Popovers, wenn sie angezeigt werden, sondern schließen andere `hint`-Popovers. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

<!-- ### MathML -->

<!-- #### Entfernen -->

<!-- ### SVG -->

<!-- #### Entfernen -->

<!-- ### CSS -->

<!-- #### Entfernen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

<!-- ### HTTP -->

<!-- #### Entfernen -->

<!-- ### Sicherheit -->

<!-- #### Entfernen -->

### APIs

#### DOM

- Das [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Interface wird jetzt unterstützt.
  Dadurch können Entwickler Komponenten implementieren, die mit gerätespezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste auf Windows oder der <kbd>Zurück</kbd>-Taste auf Android auf die gleiche Weise wie eingebaute Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API) geschlossen werden können.
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeitaufnahme des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als nicht-standardmäßige `mozCaptureStream()`-Methode verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) berücksichtigt jetzt die Lautstärke des Medienelements, wenn Audio für alle Arten von Quellen aufgenommen wird (wie von der Spezifikation gefordert).
  Zuvor hatte das Einstellen der Lautstärke des Elements keinen Einfluss auf das aufgenommene Audio für [`MediaStream`](/de/docs/Web/API/MediaStream)-Quellen.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) nimmt nun Rohaudio von der Quelle auf, ohne die Lautstärke des Medienelements anzuwenden, unabhängig davon, welcher Quellentyp das Medienelement abspielt (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medienelements die Lautstärke des aufgenommenen Streams.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernen -->

<!-- ### WebAssembly -->

<!-- #### Entfernen -->

<!-- ### WebDriver Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Unterstützung für `tabId` als oberstes Parameter in {{WebExtAPIRef("action.isEnabled")}} und {{WebExtAPIRef("browserAction.isEnabled")}} hinzugefügt. Diese Änderung sorgt für Kompatibilität mit der Chrome-Implementierung von `action.isEnabled`. ([Firefox-Bug 2013477](https://bugzil.la/2013477))
- Ein Benutzerinteraktionsgriff ist nicht mehr erforderlich, damit {{WebExtAPIRef("action.openPopup")}} und {{WebExtAPIRef("browserAction.openPopup")}} ein Popup öffnen können. Diese Funktion war ab Firefox 108 hinter der Präferenz `extensions.openPopupWithoutUserGesture.enabled` verfügbar. Diese Änderung passt das Verhalten von Firefox an Chrome und Safari an. ([Firefox-Bug 1799344](https://bugzil.la/1799344))

<!-- ### Entfernen -->

Die Möglichkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox zeigen eine Warnung in der Konsole des Tabs. Diese Einschränkung wird für alle Versionen von Firefox 152 und später gelten. Alternativ kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert wird, um dann eine Nachricht zu senden, die die Ausführung des erforderlichen Codes auslöst.([Firefox-Bug 2011234](https://bugzil.la/2011234))

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 149 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>`-Werte in `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht Ihnen, festzulegen, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631) & [Firefox-Bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).
