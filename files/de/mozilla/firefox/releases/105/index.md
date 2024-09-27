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

- Eingebettete Inhalte, wie z.B. SVG-Definitionen und Inhalte in einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe), respektieren nun die Designvorgaben der Elemente, in die sie eingebettet sind, anstatt der Betriebssystem- oder Browsereinstellungen (die unterschiedlich sein können).
  Speziell erben eingebettete Inhalte nun das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des einbettenden Elements, und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Queries im eingebetteten Inhalt respektieren diesen Wert anstelle der Betriebssystem/Browsereinstellungen ([Firefox Fehler 1779457](https://bugzil.la/1779457)).

### JavaScript

- Die Bereichsbeschränkungen wurden für die `formatRange` und `selectRange` Funktionen der [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), und [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) Objekte gelockert. Diese Änderung erlaubt nun negative Bereiche ([Firefox Fehler 1780545](https://bugzil.la/1780545)).

### APIs

#### DOM

- Die [TextDecoderStream](/de/docs/Web/API/TextDecoderStream) und [TextEncoderStream](/de/docs/Web/API/TextEncoderStream) Schnittstellen, Teil der [Encoding API](/de/docs/Web/API/Encoding_API), werden nun unterstützt ([Firefox Fehler 1486949](https://bugzil.la/1486949)).

- Die [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas) API bietet eine Leinwand, die im Offscreen-Modus sowohl im Fenster- als auch im [Web Worker](/de/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas) Kontext gerendert werden kann.
  Dies ermöglicht es, `<canvas>` Elemente vom DOM zu entkoppeln. Die [OffscreenCanvasRenderingContext2D](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) Schnittstelle bietet dafür Unterstützung und ist nun standardmäßig aktiviert ([Firefox Fehler 1779009](https://bugzil.la/1779009)).

- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) kann jetzt in Worker-Threads verwendet werden ([Firefox Fehler 1072107](https://bugzil.la/1072107)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Auf Systemen mit bevorzugter IPv6-DNS-Auflösung wird die Verbindung nicht mehr scheitern, wenn `localhost` als Host für den WebSocket-Server verwendet wird ([Firefox Fehler 1769994](https://bugzil.la/1769994)).

- Verbesserte `RemoteValue` Unterstützung, um einfache JS-Objekte mit einfach JSON-serialisierbaren Feldern zu serialisieren ([Firefox Fehler 1779226](https://bugzil.la/1779226)).

#### Marionette

- Der `WebDriver:GetElementProperty` Befehl kann nun Knoten-Eigenschaften zurückgeben, wie sie von Web-Inhalten gesetzt wurden ([Firefox Fehler 1398792](https://bugzil.la/1398792)).

## Änderungen für Add-on-Entwickler

- Unterstützung für das Definieren von persistenten Skripten mit {{WebExtAPIRef("scripting")}} wurde hinzugefügt. Ein Skript wird als persistent identifiziert durch die `persistAcrossSessions` Eigenschaft in {{WebExtAPIRef("scripting.RegisteredContentScript")}} ([Firefox Fehler 1751436](https://bugzil.la/1751436)).
- Ressourcen einer Erweiterung können standardmäßig nicht mehr von anderen Erweiterungen geladen werden. Um anderen Erweiterungen das Laden der Ressourcen zu ermöglichen, müssen sie im [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Manifest-Schlüssel der Erweiterung aufgelistet werden ([Firefox Fehler 1711168](https://bugzil.la/1711168)).

## Ältere Versionen

{{Firefox_for_developers}}
