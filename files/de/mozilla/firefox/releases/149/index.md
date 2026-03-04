---
title: Firefox 149 Versionshinweise für Entwickler (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 3bb5053e4863d70c473a61f374add7f717e44a2c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 149, die Entwickler betreffen.
Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [24. März 2026](https://whattrainisitnow.com/release/?version=149) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das globale Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) unterstützt jetzt den Wert [`hint`](/de/docs/Web/HTML/Reference/Global_attributes/popover#hint). Popovers mit dem Wert `hint` schließen keine `auto`-Popovers, wenn sie angezeigt werden, schließen jedoch andere Hint-Popovers. ([Firefox Fehler 1867743](https://bugzil.la/1867743)).

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

- Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) wird jetzt unterstützt.
  Dies ermöglicht Entwicklern, Komponenten zu implementieren, die mit geräte-nativen Mechanismen geschlossen werden können, wie z. B. mit der <kbd>Esc</kbd>-Taste unter Windows oder der <kbd>Zurück</kbd>-Taste auf Android, ähnlich wie bei integrierten Komponenten wie [Dialogs](/de/docs/Web/HTML/Reference/Elements/dialog) und [Popovers](/de/docs/Web/API/Popover_API).
  ([Firefox Fehler 1966073](https://bugzil.la/1966073)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernen -->

<!-- ### WebAssembly -->

<!-- #### Entfernen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernen -->

Die Fähigkeit von Erweiterungen, Code in ihren `moz-extension:`-Dokumenten dynamisch auszuführen, mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}}, ist veraltet. Die Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben eine Warnung in der Konsole der Registerkarte aus. Diese Einschränkung gilt für alle Versionen von Firefox 152 und später. Alternativ kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Script des Dokuments registriert wird, der dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes zu triggern. ({{bug(2011234)}})

<!-- ### Andere -->

## Experimentelle Webfeatures

Diese Features sind in Firefox 149 enthalten, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
