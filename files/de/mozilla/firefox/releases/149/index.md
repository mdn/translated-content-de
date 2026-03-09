---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 4ce8f1db7ea759cc755c96f7d668ca6ba92483b1
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte heben Sie die Überschriften hervor, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globale Attribut unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto` Popovers, wenn sie angezeigt werden, aber sie schließen andere Hinweis-Popovers. ([Firefox Fehler 1867743](https://bugzil.la/1867743)).

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

- Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit nativen Geräte-Mechanismen geschlossen werden können, wie z.B. die <kbd>Esc</kbd> auf Windows oder die <kbd>Zurück</kbd>-Taste auf Android, auf die gleiche Weise wie eingebaute Komponenten wie [dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Fehler 1966073](https://bugzil.la/1966073)).

#### Medien, WebRTC und Web Audio

- Die [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) Methode wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das die Echtzeit-Erfassung des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als die nicht standardisierte Methode `mozCaptureStream()` verfügbar.
  ([Firefox Fehler 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) berücksichtigt jetzt die Lautstärke des Medien-Elements, wenn Audio für alle Arten von Quellen erfasst wird (wie von der Spezifikation gefordert).
  Zuvor hatte das Einstellen der Lautstärke des Elements keinen Einfluss auf das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream) Quellen.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

- Die [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) Methode erfasst jetzt rohes Audio von der Quelle, ohne die Lautstärke des Medien-Elements anzuwenden, unabhängig davon, welche Art von Quelle das Medien-Element abspielt (wie von der Spezifikation gefordert).
  Vor dieser Änderung beeinflusste die Lautstärke des Medien-Elements die Lautstärke des erfassten Streams.
  ([Firefox Fehler 2010427](https://bugzil.la/2010427)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Komformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:` Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. Die Funktion steht nicht mehr in Firefox Nightly zur Verfügung, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsolenansicht des Tabs aus. Diese Einschränkung gilt für alle Versionen von Firefox 152 und später. Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}} Listener im Skript des Dokuments registriert wird, dann wird eine Nachricht gesendet, um die Ausführung des benötigten Codes auszulösen.({{bug(2011234)}})

<!-- ### Andere -->

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 149 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<attr-type>` Werte in der `attr()` CSS Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es, festzulegen, wie ein Attributwert in einen CSS-Wert umgewandelt wird, und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox Fehler 1986631](https://bugzil.la/1986631) & [Firefox Fehler 1998245](https://bugzil.la/1998245)).

- **`color-mix()` akzeptiert mehrere Farbargumente**: `layout.css.color-mix-multi-color.enabled`

  Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox Fehler 2007772](https://bugzil.la/2007772)).
