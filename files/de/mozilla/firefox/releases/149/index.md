---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: eccbe7d0f6b2f5ddd9b40f91324f4da394d1f1a0
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte heben Sie die Kommentierung für jede Überschrift auf, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popups mit dem Wert `hint` schließen keine `auto`-Popups, wenn sie angezeigt werden, schließen jedoch andere `hint`-Popups. ([Firefox-Bug 1867743](https://bugzil.la/1867743)).

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

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht es Entwicklern, Komponenten zu implementieren, die mithilfe geräteinterner Mechanismen geschlossen werden können, wie der <kbd>Esc</kbd>-Taste auf Windows oder der <kbd>Zurück</kbd>-Taste auf Android, ebenso wie integrierte Komponenten wie [Dialoge](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popups](/de/docs/Web/API/Popover_API).
  ([Firefox-Bug 1966073](https://bugzil.la/1966073)).

#### Medien, WebRTC und Web Audio

- Die Methode [`captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wird jetzt unterstützt.
  Diese gibt ein Objekt zurück, das den Echtzeit-Stream des Inhalts im Element aufnimmt.
  Der Stream kann beispielsweise als Quelle für eine WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.
  Zuvor war `captureStream()` nur als nicht-standardisierte Methode `mozCaptureStream()` verfügbar.
  ([Firefox-Bug 2017708](https://bugzil.la/2017708)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. Diese Funktion steht in Firefox Nightly nicht mehr zur Verfügung und die Beta- und Release-Versionen von Firefox zeigen in der Konsole des Tabs eine Warnung an. Diese Einschränkung wird für alle Versionen von Firefox 152 und höher gelten. Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen. ({{bug(2011234)}})

<!-- ### Andere -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 149 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
