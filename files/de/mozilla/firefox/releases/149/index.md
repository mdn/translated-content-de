---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: e18965d0c9cbab33fb8b6286d0c4ebd6df70fff7
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, zu denen Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globale Attribut unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen aber andere Hint-Popovers. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

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

- Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle wird nun unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, wie z.B. <kbd>Esc</kbd> auf Windows oder die <kbd>Zurück</kbd>-Taste auf Android, ähnlich wie bei eingebauten Komponenten wie [dialogen](/de/docs/Web/HTML/Reference/Elements/dialog) und [popovers](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

#### Medien, WebRTC und Web Audio

- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) wird nun unterstützt.
  Diese gibt ein Objekt zurück, das den Echtzeit-Capture des Inhalts im Element streamt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Bisher war `captureStream()` nur als nicht standardisiertes `mozCaptureStream()`-Verfahren verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) berücksichtigt jetzt die Lautstärke des Medienelements beim Erfassen von Audio für alle Arten von Quellen (wie in der Spezifikation gefordert).
  Bisher beeinflusste das Einstellen der Lautstärke des Elements nicht das erfasste Audio für [`MediaStream`](/de/docs/Web/API/MediaStream) Quellen.
  ([Firefox-Bug 2010427](https://bugzil.la/2010427)).

- Die Methode [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erfasst nun rohes Audio von der Quelle, ohne die Lautstärke des Medienelements anzuwenden, unabhängig vom Typ der Quelle, die das Medienelement abspielt (wie in der Spezifikation gefordert).
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

<!-- ### Entfernungen -->

Die Fähigkeit von Erweiterungen, Code in ihren `moz-extension:` Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} dynamisch auszuführen, ist veraltet. Die Funktion steht in Firefox Nightly nicht mehr zur Verfügung und die Beta- und Release-Versionen von Firefox zeigen eine Warnung in der Konsole der Registerkarte an. Diese Einschränkung wird für alle Versionen von Firefox 152 und später gelten. Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen. ({{bug(2011234)}})

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features sind in Firefox 149 enthalten, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
