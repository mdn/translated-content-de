---
title: Versionshinweise für Entwickler zu Firefox 160 (Beta)
short-title: Firefox 160 (Beta)
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: 521fe7795f4dbfa723d800a94884d7608fa0e17e
---

Dieser Artikel informiert über Änderungen in Firefox 160, die für Entwickler relevant sind.
Firefox 160 ist die aktuelle [Betaversion von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [10. November 2026](https://whattrainisitnow.com/release/?version=160).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.PlatformInfo")}} gibt auf ARM64-Plattformen für `arch` jetzt `arm64` zurück. Zuvor wurde `aarch64` zurückgegeben. Damit entspricht der von Firefox auf ARM64-Plattformen zurückgegebene Wert dem von Chrome. ([Firefox-Bug 2080310](https://bugzil.la/2080310))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen werden mit Firefox 160 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
