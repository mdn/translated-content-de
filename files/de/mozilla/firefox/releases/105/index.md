---
title: Firefox 105 für Entwickler
slug: Mozilla/Firefox/Releases/105
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 105, die Entwickler betreffen. Firefox 105 wurde am 20. September 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Eingebettete Inhalte, wie SVG-Definitionen und Inhalte in einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe), respektieren jetzt die Themenpräferenzen der Elemente, in die sie eingebettet sind, anstatt der Präferenzen des Betriebssystems oder Browsers (die möglicherweise unterschiedlich sind).
  Genauer gesagt, erben eingebettete Inhalte jetzt das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des einbettenden Elements, und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Queries in den eingebetteten Inhalten respektieren diesen Wert anstelle der Theme-Einstellung auf OS-/Browserebene ([Firefox Bug 1779457](https://bugzil.la/1779457)).

### JavaScript

- Die Bereichsbeschränkungen wurden bei den Funktionen `formatRange` und `selectRange` für [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) und [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) Objekte gelockert. Diese Änderung erlaubt jetzt negative Bereiche ([Firefox Bug 1780545](https://bugzil.la/1780545)).

### APIs

#### DOM

- Die [TextDecoderStream](/de/docs/Web/API/TextDecoderStream) und [TextEncoderStream](/de/docs/Web/API/TextEncoderStream) Schnittstellen, Teil der [Encoding API](/de/docs/Web/API/Encoding_API), werden jetzt unterstützt ([Firefox Bug 1486949](https://bugzil.la/1486949)).

- Die [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas) API bietet ein Canvas, das sowohl im Fenster- als auch im [Web Worker](/de/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas) Kontext off-screen gerendert werden kann.
  Dies ermöglicht es, `<canvas>` Elemente vom DOM zu entkoppeln. Die [OffscreenCanvasRenderingContext2D](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) Schnittstelle unterstützt dies und ist jetzt standardmäßig aktiviert ([Firefox Bug 1779009](https://bugzil.la/1779009)).

- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) kann jetzt in Worker-Threads verwendet werden ([Firefox Bug 1072107](https://bugzil.la/1072107)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Auf Systemen mit bevorzugter IPv6-DNS-Auflösung werden Clients nicht mehr fehlschlagen, wenn `localhost` als Host für den WebSocket-Server verwendet wird ([Firefox Bug 1769994](https://bugzil.la/1769994)).

- Verbesserte `RemoteValue` Unterstützung, um einfache JS-Objekte mit einfach serialisierbaren JSON-Feldern zu ermöglichen ([Firefox Bug 1779226](https://bugzil.la/1779226)).

#### Marionette

- Der `WebDriver:GetElementProperty` Befehl kann jetzt Knoten-Eigenschaften zurückgeben, die durch Webinhalte festgelegt wurden ([Firefox Bug 1398792](https://bugzil.la/1398792)).

## Änderungen für Add-on-Entwickler

- Unterstützung für die Definition von persistenten Skripten mit {{WebExtAPIRef("scripting")}} wurde hinzugefügt. Ein Skript wird als persistent identifiziert durch die `persistAcrossSessions` Eigenschaft in {{WebExtAPIRef("scripting.RegisteredContentScript")}} ([Firefox Bug 1751436](https://bugzil.la/1751436)).
- Die Ressourcen einer Erweiterung können standardmäßig nicht mehr von anderen Erweiterungen geladen werden. Um anderen Erweiterungen das Laden von Ressourcen zu ermöglichen, müssen diese im Manifest-Schlüssel [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) der Erweiterung aufgeführt werden ([Firefox Bug 1711168](https://bugzil.la/1711168)).

## Ältere Versionen

{{Firefox_for_developers}}
