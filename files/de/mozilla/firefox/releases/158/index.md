---
title: "Firefox 158: Versionshinweise für Entwickler (Nightly)"
short-title: Firefox 158 (Nightly)
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: 6667e73bf698511ffd956b8a9eafc8ea7c6adb46
---

Dieser Artikel informiert über Änderungen in Firefox 158, die Entwickler betreffen.
Firefox 158 ist die aktuelle [Nightly-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und erscheint am [13. Oktober 2026](https://whattrainisitnow.com/release/?version=158).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte entfernen Sie die Kommentarzeichen bei allen Überschriften, für die Sie Hinweise verfassen. -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

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

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemeines -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} löst jetzt bei Übergabe eines ungültigen Hostnamens einen Fehler aus, anstatt `false` zurückzugeben. ([Firefox-Bug 2066620](https://bugzil.la/2066620))
- [`runtime.getVersion()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) wurde hinzugefügt. Die Methode gibt die Version der Erweiterung zurück, wie sie im Manifest angegeben ist. ([Firefox-Bug 1992418](https://bugzil.la/1992418))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 158 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
