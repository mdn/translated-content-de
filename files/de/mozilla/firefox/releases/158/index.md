---
title: "Firefox 158: Versionshinweise für Entwickler (Beta)"
short-title: Firefox 158 (Beta)
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: 9e1bb040feef5f13af079e995b2f05eab8cd21b3
---

Dieser Artikel informiert über die Änderungen in Firefox 158, die Entwickler betreffen.
Firefox 158 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [13. Oktober 2026](https://whattrainisitnow.com/release/?version=158).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte entfernen Sie die Kommentarzeichen bei den Überschriften, zu denen Sie Hinweise verfassen. -->

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

### APIs

- [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats) wird jetzt unterstützt und gibt Statistiken zur zugrunde liegenden Verbindung des Transports und zu dessen Datagrammen zurück. ([Firefox-Bug 2007202](https://bugzil.la/2007202)).

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

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} löst jetzt bei Übergabe eines ungültigen Hostnamens einen Fehler aus, statt `false` zurückzugeben. ([Firefox-Bug 2066620](https://bugzil.la/2066620))
- [`runtime.getVersion()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) wurde hinzugefügt und gibt die im Manifest angegebene Version der Erweiterung zurück. ([Firefox-Bug 1992418](https://bugzil.la/1992418))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 158 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere Funktionen dieser Art finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
