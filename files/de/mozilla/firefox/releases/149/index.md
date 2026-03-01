---
title: Versionshinweise für Entwickler zu Firefox 149 (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 286918035156c33cc4ed073304f4c51ab5cfacfe
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 149, die Entwickler betreffen. Firefox 149 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [24. März 2026](https://whattrainisitnow.com/release/?version=149).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

## Änderungen für Add-on-Entwickler

Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, ist veraltet. Diese Funktion ist in Firefox Nightly nicht mehr verfügbar, und die Beta- und Release-Versionen von Firefox geben einen Warnhinweis in der Konsole des Tabs aus. Diese Einschränkung wird für alle Versionen von Firefox 152 und später gelten. Als Alternative kann eine Erweiterung Code dynamisch in ihren Dokumenten ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert wird und dann eine Nachricht gesendet wird, um die Ausführung des erforderlichen Codes auszulösen. ({{bug(2011234)}})

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 149 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
