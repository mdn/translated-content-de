---
title: Firefox 105 Versionshinweise für Entwickler
short-title: Firefox 105
slug: Mozilla/Firefox/Releases/105
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen zu Änderungen in Firefox 105, die Entwickler betreffen. Firefox 105 wurde am 20. September 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Eingebettete Inhalte, wie SVG-Definitionen und Inhalte in einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), respektieren jetzt die Theme-Vorgaben der Elemente, in denen sie eingebettet sind, anstatt der Betriebssystem- oder Browser-Vorgaben (die möglicherweise unterschiedlich sind).
  Insbesondere übernehmen eingebettete Inhalte jetzt das [`color-scheme`](/de/docs/Web/CSS/Reference/Properties/color-scheme) des einbettenden Elements, und mediale Abfragen [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) in den eingebetteten Inhalten respektieren diesen Wert anstelle der Theme-Einstellung auf Betriebssystem-/Browserebene ([Firefox-Bug 1779457](https://bugzil.la/1779457)).

### JavaScript

- Die Einschränkungen der Bereichsgrößen für die `formatRange` und `selectRange` Funktionen für [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) und [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) Objekte wurden gelockert. Diese Änderung erlaubt jetzt negative Bereiche ([Firefox-Bug 1780545](https://bugzil.la/1780545)).

### APIs

#### DOM

- Die [TextDecoderStream](/de/docs/Web/API/TextDecoderStream) und [TextEncoderStream](/de/docs/Web/API/TextEncoderStream) Schnittstellen, Teil der [Encoding API](/de/docs/Web/API/Encoding_API), werden jetzt unterstützt ([Firefox-Bug 1486949](https://bugzil.la/1486949)).

- Die [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas) API stellt eine Leinwand bereit, die sowohl im Fenster- als auch im [Web Worker](/de/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas) Kontext außerhalb des Bildschirms gerendert werden kann.
  Dadurch können `<canvas>` Elemente vom DOM entkoppelt werden. Die [OffscreenCanvasRenderingContext2D](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) Schnittstelle bietet Unterstützung hierfür und ist jetzt standardmäßig aktiviert ([Firefox-Bug 1779009](https://bugzil.la/1779009)).

- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) kann jetzt in Worker-Threads verwendet werden ([Firefox-Bug 1072107](https://bugzil.la/1072107)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Auf Systemen mit bevorzugter IPv6-DNS-Auflösung schlagen die Verbindungen nicht mehr fehl, wenn `localhost` als Host für den WebSocket-Server verwendet wird ([Firefox-Bug 1769994](https://bugzil.la/1769994)).

- Verbesserte `RemoteValue` Unterstützung, um die Serialisierung einfacher JS-Objekte mit JSON-serialisierbaren Feldern zu ermöglichen ([Firefox-Bug 1779226](https://bugzil.la/1779226)).

#### Marionette

- Der Befehl `WebDriver:GetElementProperty` kann jetzt Knoteneigenschaften zurückgeben, die von Webinhalten gesetzt wurden ([Firefox-Bug 1398792](https://bugzil.la/1398792)).

## Änderungen für Add-on-Entwickler

- Die Unterstützung für die Definition persistenter Skripte mithilfe von {{WebExtAPIRef("scripting")}} wurde hinzugefügt. Ein Skript wird als persistent identifiziert, indem die Eigenschaft `persistAcrossSessions` in {{WebExtAPIRef("scripting.RegisteredContentScript")}} verwendet wird ([Firefox-Bug 1751436](https://bugzil.la/1751436)).
- Die Ressourcen einer Erweiterung können standardmäßig nicht mehr von anderen Erweiterungen geladen werden. Um anderen Erweiterungen das Laden von Ressourcen zu ermöglichen, müssen diese im Manifest-Schlüssel [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) der Erweiterung aufgeführt werden ([Firefox-Bug 1711168](https://bugzil.la/1711168)).
