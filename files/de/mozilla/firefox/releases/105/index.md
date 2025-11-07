---
title: Firefox 105 Versionshinweise für Entwickler
short-title: Firefox 105
slug: Mozilla/Firefox/Releases/105
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 105, die Entwickler betreffen. Firefox 105 wurde am 20. September 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Eingebettete Inhalte, wie SVG-Definitionen und Inhalte in einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), berücksichtigen nun die Designpräferenzen der Elemente, in die sie eingebettet sind, statt der Präferenzen des Betriebssystems oder des Browsers (die unterschiedlich sein können).
  Insbesondere erben eingebettete Inhalte jetzt das [`color-scheme`](/de/docs/Web/CSS/Reference/Properties/color-scheme) des einbettenden Elements, und [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)-Medienabfragen im eingebetteten Inhalt respektieren diesen Wert anstelle der Designeinstellung des Betriebssystems oder Browsers ([Firefox-Bug 1779457](https://bugzil.la/1779457)).

### JavaScript

- Begrenzungen wurden für die Funktionen `formatRange` und `selectRange` bei [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) und [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) Objekten gelockert. Diese Änderung ermöglicht nun negative Bereiche ([Firefox-Bug 1780545](https://bugzil.la/1780545)).

### APIs

#### DOM

- Die [TextDecoderStream](/de/docs/Web/API/TextDecoderStream) und [TextEncoderStream](/de/docs/Web/API/TextEncoderStream) Schnittstellen, Teil der [Encoding API](/de/docs/Web/API/Encoding_API), werden nun unterstützt ([Firefox-Bug 1486949](https://bugzil.la/1486949)).

- Die [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas) API bietet eine Leinwand, die sowohl im Fenster- als auch im [Web-Worker](/de/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas) Kontext offscreen gerendert werden kann.
  Dies ermöglicht es, `<canvas>`-Elemente vom DOM zu entkoppeln. Die [OffscreenCanvasRenderingContext2D](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) Schnittstelle bietet Unterstützung dafür und ist jetzt standardmäßig aktiviert ([Firefox-Bug 1779009](https://bugzil.la/1779009)).

- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) kann jetzt in Worker-Threads verwendet werden ([Firefox-Bug 1072107](https://bugzil.la/1072107)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Auf Systemen mit bevorzugter IPv6-DNS-Auflösung wird der Verbindungsausfall bei Verwendung von `localhost` als Host für den WebSocket-Server nun vermieden ([Firefox-Bug 1769994](https://bugzil.la/1769994)).

- Verbessertes `RemoteValue`-Unterstützung, um einfache JS-Objekte mit einfachen JSON-serialisierbaren Feldern zu serialisieren ([Firefox-Bug 1779226](https://bugzil.la/1779226)).

#### Marionette

- Der `WebDriver:GetElementProperty`-Befehl kann jetzt Knoten-Eigenschaften, die durch Web-Inhalte gesetzt wurden, zurückgeben ([Firefox-Bug 1398792](https://bugzil.la/1398792)).

## Änderungen für Add-on-Entwickler

- Unterstützung für die Definition von persistenten Skripten mit {{WebExtAPIRef("scripting")}} wurde hinzugefügt. Ein Skript wird als persistent identifiziert, indem die `persistAcrossSessions`-Eigenschaft in {{WebExtAPIRef("scripting.RegisteredContentScript")}} verwendet wird ([Firefox-Bug 1751436](https://bugzil.la/1751436)).
- Die Ressourcen einer Erweiterung können standardmäßig nicht mehr von anderen Erweiterungen geladen werden. Um anderen Erweiterungen das Laden von Ressourcen zu ermöglichen, müssen diese im [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Manifest-Schlüssel der Erweiterung aufgelistet werden ([Firefox-Bug 1711168](https://bugzil.la/1711168)).
