---
title: Firefox 156-Releasenotes für Entwickler (Beta)
short-title: Firefox 156 (Beta)
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: 03cb7e674d176cbb03bef39afa55e23f9f193e5a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 156, die Entwickler betreffen.
Firefox 156 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [15. September 2026](https://whattrainisitnow.com/release/?version=156) veröffentlicht.

> [!NOTE]
> Die Releasenotes für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben. -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

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

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Der [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Schlüssel fügt die Eigenschaft `backgrounds_area` hinzu. Diese Eigenschaft ermöglicht es einem Theme festzulegen, wo seine Hintergrundbilder und -verläufe gezeichnet werden. Wird sie auf `"window"` gesetzt, werden sie über das gesamte Browserfenster gezeichnet, während `"top_toolbars"` sie auf die horizontalen Symbolleisten oben im Fenster beschränkt. Wenn `backgrounds_area` weggelassen oder auf `"auto"` gesetzt wird, wählt Firefox den Bereich basierend auf `properties.additional_backgrounds_alignment`. ([Firefox-Fehler 2059526](https://bugzil.la/2059526))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 156 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
