---
title: Versionshinweise zu Firefox 157 für Entwickler (Beta)
short-title: Firefox 157 (Beta)
slug: Mozilla/Firefox/Releases/157
l10n:
  sourceCommit: c37fc5cbb2093f7fad32f196033332d168db217d
---

Dieser Artikel informiert über die Änderungen in Firefox 157, die für Entwickler relevant sind.
Firefox 157 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [29. September 2026](https://whattrainisitnow.com/release/?version=157).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version werden noch bearbeitet.

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

### CSS

- Mit der Funktion [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) in der {{cssxref("@supports")}}-At-Regel können Sie prüfen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, beispielsweise `@supports at-rule(@scope)`. Sie funktioniert auch in der Funktion [`supports()`](/de/docs/Web/CSS/Reference/At-rules/@import#supports-condition) der CSS-At-Regel {{cssxref("@import")}}. ([Firefox-Bug 2060755](https://bugzil.la/2060755))

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Der [WebGPU](/de/docs/Web/API/WebGPU_API)-[Texture-Usage-Typ](/de/docs/Web/API/GPUTexture/usage#value) `TRANSIENT_ATTACHMENT` wird jetzt unterstützt. Damit lassen sich speichereffiziente Attachments erstellen, die nur innerhalb des aktuellen Render Pass verwendet werden. Zugehörige Render-Pass-Operationen verbleiben im Tile-Speicher. Dadurch wird Datenverkehr mit dem VRAM vermieden, und für die Texturen muss unter Umständen kein VRAM zugewiesen werden. ([Firefox-Bug 2005061](https://bugzil.la/2005061))

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

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 157 enthalten, aber standardmäßig deaktiviert.
Wenn Sie sie ausprobieren möchten, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
