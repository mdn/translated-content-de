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

- Die Funktion [`hwb()`](/de/docs/Web/CSS/color_value/hwb) zur Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die funktionale Notation `hwb()` drückt eine gegebene Farbe gemäß ihrem Farbton, Weißheitsgrad und Schwärze aus. Ein optionaler Alpha-Komponente gibt die Transparenz der Farbe an. ([Firefox Bug 1352755](https://bugzil.la/1352755)).

- Firefox bietet jetzt Unterstützung für die {{CSSxRef("color-scheme")}}-Eigenschaft. Dies erlaubt einem Element anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Übliche Optionen sind "hell" und "dunkel" oder "Tagesmodus" und "Nachtmodus". ([Firefox Bug 1576289](https://bugzil.la/1576289)).

- Die Eigenschaft {{CSSxRef("counter-reset")}} unterstützt nun die Funktion `reversed()` zur Erstellung von _umgekehrten_ [CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die zum Nummerieren von Elementen in absteigender Reihenfolge gedacht sind.
  Dies kann mit dem Zähler `list-item` verwendet werden, um geordnete Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste.
  (`list-item` ist ein Zähler, der für geordnete Listen automatisch angewendet wird, wie z.B. die mit {{HTMLElement("ol")}} erstellten).
  Firefox verwendet dieses Feature intern, um das `<ol>`-Attribut [`reversed`](/de/docs/Web/HTML/Element/ol#reversed) zu unterstützen.
  ([Firefox Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt, wodurch der Code überprüfen kann, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird.
  Das Feature ist auf Desktop-Betriebssystemen hinter einer Einstellung versteckt.
  ([Firefox Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert, wodurch Web-Apps, die in mehreren Tabs oder Workern laufen, die Nutzung von Ressourcen koordinieren können. ([Firefox Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für Image-Encoder wurde für das [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) Bildformat hinzugefügt.
  Dies ermöglicht es `<canvas>`-Elementen, ihren Inhalt als WebP-Daten zu exportieren, wenn die Methoden: [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden.
  ([Firefox Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) setzt jetzt die Standard-`rootMargin`, wenn ein leerer String in der zugehörigen Parameteroption übergeben wird, anstatt eine Ausnahme auszulösen ([Firefox Bug 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Reihe veralteter nicht-standardmäßiger Statistikfelder wurden aus der [WebRTC Statistik-API](/de/docs/Web/API/WebRTC_Statistics_API) entfernt, darunter: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`.
  ([Firefox Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um das Shadow-Root (offen oder geschlossen) eines bestimmten Elements abzurufen ([Firefox Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der einen `cyclic object value`-Fehler verursachte, wenn versucht wurde, das `ShadowRoot` eines Elements zurückzugeben ([Firefox Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde erweitert, um beim Drucken von Dokumenten als PDF Seitenbereiche zu unterstützen ([Firefox Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- Hinzugefügt wurde {{WebExtAPIRef("runtime.getFrameId")}}, welches die Frame-ID eines beliebigen Fenster-Globals oder Frame-Elements aus einem Inhaltsskript erhält ([Firefox Bug 1733104](https://bugzil.la/1733104)).

## Ältere Versionen

{{Firefox_for_developers}}
