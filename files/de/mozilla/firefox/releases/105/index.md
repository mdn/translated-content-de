---
title: Firefox 105 für Entwickler
slug: Mozilla/Firefox/Releases/105
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 105, die Entwickler betreffen. Firefox 105 wurde am 20. September 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Eingebetteter Inhalt, wie SVG-Definitionen und Inhalte in einem [`<iframe>`](/de/docs/Web/HTML/Element/iframe), beachtet nun die Design-Präferenzen der Elemente, in denen er eingebettet ist, anstatt der Betriebssystem- oder Browser-Präferenzen (die unterschiedlich sein können).
  Konkret erbt eingebetteter Inhalt jetzt das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des einbettenden Elements, und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Queries im eingebetteten Inhalt respektieren diesen Wert anstelle der Design-Einstellung auf Betriebssystem-/Browser-Ebene ([Firefox Fehler 1779457](https://bugzil.la/1779457)).

### JavaScript

- Bereichsbeschränkungen bei den `formatRange`- und `selectRange`-Funktionen für [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) und [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)-Objekte wurden gelockert. Diese Änderung erlaubt jetzt negative Bereiche ([Firefox Fehler 1780545](https://bugzil.la/1780545)).

### APIs

#### DOM

- Die [TextDecoderStream](/de/docs/Web/API/TextDecoderStream)- und [TextEncoderStream](/de/docs/Web/API/TextEncoderStream)-Schnittstellen, Teil der [Encoding API](/de/docs/Web/API/Encoding_API), werden jetzt unterstützt ([Firefox Fehler 1486949](https://bugzil.la/1486949)).

- Die [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas) API bietet eine Leinwand, die sowohl im Fenster als auch in [Web Worker](/de/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas)-Kontexten außerhalb des Bildschirms gerendert werden kann.
  Dadurch können `<canvas>`-Elemente vom DOM entkoppelt werden. Die [OffscreenCanvasRenderingContext2D](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Schnittstelle unterstützt dies und ist jetzt standardmäßig aktiviert ([Firefox Fehler 1779009](https://bugzil.la/1779009)).

- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) kann jetzt in Worker Threads verwendet werden ([Firefox Fehler 1072107](https://bugzil.la/1072107)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Auf Systemen mit bevorzugter IPv6-DNS-Auflösung werden die Clients nicht mehr fehlschlagen, wenn `localhost` als Host für den WebSocket-Server verwendet wird ([Firefox Fehler 1769994](https://bugzil.la/1769994)).

- Verbesserte `RemoteValue`-Unterstützung, um einfache JS-Objekte mit einfachen JSON-serialisierbaren Feldern zu serialisieren ([Firefox Fehler 1779226](https://bugzil.la/1779226)).

#### Marionette

- Der `WebDriver:GetElementProperty`-Befehl kann nun Knoten-Eigenschaften zurückgeben, die durch Web-Inhalte gesetzt wurden ([Firefox Fehler 1398792](https://bugzil.la/1398792)).

## Änderungen für Add-on-Entwickler

- Unterstützung für die Definition persistenter Skripte unter Verwendung von {{WebExtAPIRef("scripting")}} wurde hinzugefügt. Ein Skript wird als persistent identifiziert, indem die Eigenschaft `persistAcrossSessions` in {{WebExtAPIRef("scripting.RegisteredContentScript")}} verwendet wird ([Firefox Fehler 1751436](https://bugzil.la/1751436)).
- Ressourcen einer Erweiterung können standardmäßig nicht länger von anderen Erweiterungen geladen werden. Um anderen Erweiterungen das Laden von Ressourcen zu ermöglichen, müssen sie im [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Manifest-Schlüssel der Erweiterung aufgelistet werden ([Firefox Fehler 1711168](https://bugzil.la/1711168)).

## Ältere Versionen

{{Firefox_for_developers}}
