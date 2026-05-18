---
title: Firefox 152 Versionshinweise für Entwickler (Beta)
short-title: Firefox 152 (Beta)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: 0b214cbce88da71a9d4470364e378285c2a921a5
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 152, die Entwickler betreffen.
Firefox 152 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

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

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernen -->

<!-- ### WebAssembly -->

<!-- #### Entfernen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Erweiterungsentwickler

- Die Möglichkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wurde entfernt. Diese Funktion wurde in Firefox 149 als veraltet markiert. ([Firefox-Bug 2015559](https://bugzil.la/2015559))

  Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Abhörer im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des benötigten Codes auszulösen.

<!-- ### Entfernen -->

<!-- ### Sonstiges -->

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 152 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
