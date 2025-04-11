---
title: Firefox 96 für Entwickler
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 96, die Entwickler betreffen. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion für die Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die `hwb()` Funktionsnotation drückt eine bestimmte Farbe in Bezug auf ihren Farbton, Weiß- und Schwarzanteil aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe. ([Firefox Bug 1352755](https://bugzil.la/1352755)).

- Firefox unterstützt jetzt die {{CSSxRef("color-scheme")}} Eigenschaft. Diese erlaubt es einem Element anzugeben, in welchen Farbschemata es bequem dargestellt werden kann. Häufige Optionen sind "light" und "dark" oder "day mode" und "night mode". ([Firefox Bug 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}} Eigenschaft unterstützt jetzt die `reversed()` Funktion zum Erstellen von _umgekehrten_ [CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die für das Nummerieren von Elementen in absteigender Reihenfolge gedacht sind. Dies kann mit dem `list-item`-Zähler verwendet werden, um geordnete Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste. (`list-item` ist ein Zähler, der automatisch für geordnete Listen angewendet wird, wie sie mit {{HTMLElement("ol")}} erstellt werden). Firefox verwendet dieses Feature intern zur Unterstützung des `<ol>` [`reversed` Attributs](/de/docs/Web/HTML/Reference/Elements/ol#reversed). ([Firefox Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt, wodurch der Code prüfen kann, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird. Das Feature ist auf Desktop-Betriebssystemen hinter einer Einstellung verborgen. ([Firefox Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert, wodurch Web-Apps, die in mehreren Tabs oder Arbeitern laufen, die Ressourcennutzung koordinieren können. ([Firefox Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für das Bildencoder-Format [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) wurde hinzugefügt. Dies ermöglicht es `canvas`-Elementen, ihren Inhalt als WebP-Daten zu exportieren, wenn die Methoden: [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden. ([Firefox Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor setzt jetzt die standardmäßige `rootMargin` fest, wenn ein leerer String im dazugehörigen Parameter übergeben wird, anstatt eine Ausnahme zu werfen ([Firefox Bug 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Reihe von veralteten, nicht standardmäßigen Statistikfeldern wurden aus der WebRTC API [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Schnittstelle entfernt, einschließlich: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`. ([Firefox Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um das Shadow-Root (offen oder geschlossen) eines bestimmten Elements abzurufen ([Firefox Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript`, der einen `cyclic object value` Fehler verursachte, wenn versucht wurde, das `ShadowRoot` eines Elements zurückzugeben, wurde behoben ([Firefox Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde erweitert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- Hinzugefügt wurde {{WebExtAPIRef("runtime.getFrameId")}}, der die Frame-ID eines beliebigen Fensterglobals oder Frame-Elements aus einem Inhalts-Skript abruft ([Firefox Bug 1733104](https://bugzil.la/1733104)).

## Ältere Versionen

{{Firefox_for_developers}}
