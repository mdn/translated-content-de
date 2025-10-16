---
title: Firefox 105 Versionshinweise für Entwickler
short-title: Firefox 105
slug: Mozilla/Firefox/Releases/105
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 105, die Entwickler betreffen. Firefox 105 wurde am 20. September 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Eingebettete Inhalte, wie SVG-Definitionen und Inhalte in einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), beachten jetzt die Design-Präferenzen der Elemente, in denen sie eingebettet sind, anstatt der Präferenzen des Betriebssystems oder Browsers (welche unterschiedlich sein können).
  Insbesondere erbt eingebetteter Inhalt jetzt das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des einbettenden Elements, und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Queries im eingebetteten Inhalt respektieren diesen Wert anstatt der Design-Einstellung auf OS-/Browser-Ebene ([Firefox Bug 1779457](https://bugzil.la/1779457)).

### JavaScript

- Bereichsbeschränkungen wurden für die Funktionen `formatRange` und `selectRange` der Objekte [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) und [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) gelockert. Diese Änderung ermöglicht nun negative Bereiche ([Firefox Bug 1780545](https://bugzil.la/1780545)).

### APIs

#### DOM

- Die [TextDecoderStream](/de/docs/Web/API/TextDecoderStream) und [TextEncoderStream](/de/docs/Web/API/TextEncoderStream) Schnittstellen, Teil der [Encoding API](/de/docs/Web/API/Encoding_API), werden jetzt unterstützt ([Firefox Bug 1486949](https://bugzil.la/1486949)).

- Die [OffscreenCanvas](/de/docs/Web/API/OffscreenCanvas) API bietet eine Zeichenfläche, die außerhalb des Bildschirms sowohl im Fenster als auch in [Web Worker](/de/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas) Kontexten gerendert werden kann.
  Dies erlaubt es `<canvas>`-Elementen, von der DOM getrennt zu werden. Die [OffscreenCanvasRenderingContext2D](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) Schnittstelle bietet Unterstützung hierfür und ist jetzt standardmäßig aktiviert ([Firefox Bug 1779009](https://bugzil.la/1779009)).

- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) kann jetzt in Worker-Threads verwendet werden ([Firefox Bug 1072107](https://bugzil.la/1072107)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Auf Systemen mit bevorzugter IPv6-DNS-Auflösung schlagen Verbindungen nicht mehr fehl, wenn `localhost` als Host für den WebSocket-Server verwendet wird ([Firefox Bug 1769994](https://bugzil.la/1769994)).

- Verbesserte `RemoteValue`-Unterstützung, um es zu ermöglichen, dass einfache JS-Objekte mit einfach serialisierbaren Feldern in JSON serialisiert werden können ([Firefox Bug 1779226](https://bugzil.la/1779226)).

#### Marionette

- Der Befehl `WebDriver:GetElementProperty` kann jetzt Knoteneigenschaften zurückgeben, wie sie durch Webinhalte festgelegt wurden ([Firefox Bug 1398792](https://bugzil.la/1398792)).

## Änderungen für Add-on-Entwickler

- Unterstützung zur Definition von persistenten Skripten unter Verwendung von {{WebExtAPIRef("scripting")}} wurde hinzugefügt. Ein Skript wird als persistent identifiziert durch die Verwendung der `persistAcrossSessions`-Eigenschaft in {{WebExtAPIRef("scripting.RegisteredContentScript")}} ([Firefox Bug 1751436](https://bugzil.la/1751436)).
- Die Ressourcen einer Erweiterung können standardmäßig nicht mehr von anderen Erweiterungen geladen werden. Damit andere Erweiterungen Ressourcen laden können, müssen diese im `web_accessible_resources` Schlüssel des Manifests der Erweiterung aufgelistet werden ([Firefox Bug 1711168](https://bugzil.la/1711168)).
