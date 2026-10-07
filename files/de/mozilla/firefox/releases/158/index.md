---
title: Firefox 158 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 158 (Beta)
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: 09a4c3ae25ae642e81cbf93a76a162a276b8aeb3
---

Dieser Artikel informiert über die Änderungen in Firefox 158, die für Entwickler relevant sind.
Firefox 158 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [13. Oktober 2026](https://whattrainisitnow.com/release/?version=158).

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

### APIs

- [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats) wird jetzt unterstützt und gibt Statistiken zur zugrunde liegenden Verbindung des Transports sowie zu seinen Datagrammen zurück. ([Firefox-Bug 2007202](https://bugzil.la/2007202)).

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

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} löst jetzt einen Fehler aus, wenn ein ungültiger Hostname übergeben wird, statt `false` zurückzugeben. ([Firefox-Bug 2066620](https://bugzil.la/2066620))
- [`runtime.getVersion()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) wurde hinzugefügt und gibt die im Manifest angegebene Version der Erweiterung zurück. ([Firefox-Bug 1992418](https://bugzil.la/1992418))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 158 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`corner-shape`-Eigenschaften**: `layout.css.corner-shape.enabled`

  Die Kurzschreibweise {{cssxref("corner-shape")}} und die zugehörigen Langschreibweisen werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie die Form von Ecken mithilfe eines der Schlüsselwortwerte von {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
  ([Firefox-Bug 2070927](https://bugzil.la/2070927)).
