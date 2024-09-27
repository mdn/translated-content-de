---
title: Firefox 96 für Entwickler
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 96, die Entwickler betreffen. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die Funktion [`hwb()`](/de/docs/Web/CSS/color_value/hwb) zur Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die funktionale Notation `hwb()` drückt eine gegebene Farbe gemäß ihrem Farbton, Weißheits- und Schwärzheitsgrad aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe. ([Firefox Fehler 1352755](https://bugzil.la/1352755)).

- Firefox bietet jetzt Unterstützung für die Eigenschaft {{CSSxRef("color-scheme")}}. Diese ermöglicht es einem Element, anzugeben, in welchen Farbschemata es komfortabel dargestellt werden kann. Übliche Optionen sind "light" und "dark" oder "day mode" und "night mode". ([Firefox Fehler 1576289](https://bugzil.la/1576289)).

- Die Eigenschaft {{CSSxRef("counter-reset")}} unterstützt jetzt die Funktion `reversed()` zum Erstellen von _umgekehrten_ [CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die für die Nummerierung von Elementen in absteigender Reihenfolge vorgesehen sind. Dies kann mit dem Zähler `list-item` verwendet werden, um nummerierte Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste (`list-item` ist ein Zähler, der automatisch für nummerierte Listen angewendet wird, wie die mit {{HTMLElement("ol")}} erstellten). Firefox verwendet dieses Feature intern, um das Attribut `<ol>` [`reversed`](/de/docs/Web/HTML/Element/ol#reversed) zu unterstützen. ([Firefox Fehler 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt und ermöglicht es dem Code zu überprüfen, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird. Das Feature ist in Desktop-Betriebssystemen hinter einer Einstellung verborgen. ([Firefox Fehler 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert und ermöglicht es Webanwendungen, die in mehreren Tabs oder Workern laufen, die Nutzung von Ressourcen zu koordinieren. ([Firefox Fehler 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für Bildencoder für das Bildformat [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) wurde hinzugefügt. Dies ermöglicht es `canvas`-Elementen, ihren Inhalt als WebP-Daten zu exportieren, wenn die Methoden [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden. ([Firefox Fehler 1511670](https://bugzil.la/1511670)).

#### DOM

- Der Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) setzt jetzt den Standardwert `rootMargin`, wenn ein leerer String im zugehörigen Parameteroption übergeben wird, anstatt eine Ausnahme auszulösen ([Firefox Fehler 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Reihe veralteter, nicht standardisierter Statistikfelder wurden aus der [WebRTC Statistics API](/de/docs/Web/API/WebRTC_Statistics_API) entfernt, einschließlich: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`. ([Firefox Fehler 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um das Shadow-Root (offen oder geschlossen) eines bestimmten Elements abzurufen ([Firefox Fehler 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der bei dem Versuch, das `ShadowRoot` eines Elements zurückzugeben, einen Fehler `cyclic object value` verursachte ([Firefox Fehler 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde erweitert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox Fehler 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- Hinzugefügt {{WebExtAPIRef("runtime.getFrameId")}}, das die Frame-ID eines beliebigen Fenster-Globals oder Frame-Elements aus einem Inhalts-Skript erhält ([Firefox Fehler 1733104](https://bugzil.la/1733104)).

## Ältere Versionen

{{Firefox_for_developers}}
