---
title: Firefox 105 für Entwickler
slug: Mozilla/Firefox/Releases/105
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 105, die Entwickler betreffen. Firefox 105 wurde am 20. September 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Eingebetteter Inhalt, wie SVG-Definitionen und Inhalte in einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), respektiert jetzt die Themenvorlieben der Elemente, in die sie eingebettet sind, anstatt der Betriebssystem- oder Browserpräferenzen (die unterschiedlich sein können).
  Konkret erbt eingebetteter Inhalt jetzt das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des einbettenden Elements, und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medien-Abfragen im eingebetteten Inhalt respektieren diesen Wert statt der Thema-Einstellung auf OS-/Browserebene ([Firefox Bug 1779457](https://bugzil.la/1779457)).

### JavaScript

- Die Bereichseinschränkungen für die Funktionen `formatRange` und `selectRange` bei [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) und [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) Objekten wurden gelockert. Diese Änderung erlaubt nun negative Bereiche ([Firefox Bug 1780545](https://bugzil.la/1780545)).

### APIs

#### DOM

- Die Schnittstellen [TextDecoderStream](/de/docs/Web/API/TextDecoderStream) und [TextEncoderStream](/de/docs/Web/API/TextEncoderStream), Teil der [Encoding API](/de/docs/Web/API/Encoding_API), werden nun unterstützt ([Firefox Bug 1486949](https://bugzil.la/1486949)).

- Die [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas) API stellt eine Leinwand bereit, die sowohl im Fenster- als auch im [Web-Worker](/de/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas)-Kontext off-screen gerendert werden kann.
  Dies ermöglicht es, `<canvas>`-Elemente vom DOM zu entkoppeln. Die Schnittstelle [OffscreenCanvasRenderingContext2D](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) bietet Unterstützung dafür und ist nun standardmäßig aktiviert ([Firefox Bug 1779009](https://bugzil.la/1779009)).

- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) kann jetzt in Worker-Threads verwendet werden ([Firefox Bug 1072107](https://bugzil.la/1072107)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Auf Systemen mit bevorzugter IPv6-DNS-Auflösung schlagen Clients nicht mehr bei der Verbindung fehl, wenn `localhost` als Host für den WebSocket-Server verwendet wird ([Firefox Bug 1769994](https://bugzil.la/1769994)).

- Verbesserte Unterstützung für `RemoteValue`, um einfache JS-Objekte mit einfach serienisierbaren JSON-Feldern zu serialisieren ([Firefox Bug 1779226](https://bugzil.la/1779226)).

#### Marionette

- Der Befehl `WebDriver:GetElementProperty` kann jetzt Knoten-Eigenschaften zurückgeben, die durch Web-Inhalte gesetzt wurden ([Firefox Bug 1398792](https://bugzil.la/1398792)).

## Änderungen für Add-On-Entwickler

- Unterstützung für die Definition persistentier Skripts mit {{WebExtAPIRef("scripting")}} wurde hinzugefügt. Ein Skript wird als persistent identifiziert, indem die `persistAcrossSessions` Eigenschaft in {{WebExtAPIRef("scripting.RegisteredContentScript")}} verwendet wird ([Firefox Bug 1751436](https://bugzil.la/1751436)).
- Die Ressourcen einer Erweiterung können standardmäßig nicht mehr von anderen Erweiterungen geladen werden. Um anderen Erweiterungen das Laden von Ressourcen zu ermöglichen, müssen sie im Manifest-Schlüssel [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) der Erweiterung aufgelistet werden ([Firefox Bug 1711168](https://bugzil.la/1711168)).

## Ältere Versionen

{{Firefox_for_developers}}
