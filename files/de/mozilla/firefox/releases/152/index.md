---
title: Firefox 152 Versionshinweise für Entwickler (Nightly)
short-title: Firefox 152 (Nightly)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: 6b63b8b1220d5a3e881357abf263ae92f6b56189
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 152, die Entwickler betreffen.
Firefox 152 ist die aktuelle [Nightly-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und wird am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### MathML -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

<!-- ### CSS -->

<!-- #### Entfernt -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:` Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wurde entfernt. Diese Funktion wurde in Firefox 149 veraltet. ([Firefox-Bug 2015559](https://bugzil.la/2015559))

  Alternativ kann eine Erweiterung Code dynamisch in ihren Dokumenten ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}} Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 152 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
