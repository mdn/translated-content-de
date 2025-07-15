---
title: Firefox 96 für Entwickler
short-title: Firefox 96
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 96, die Entwickler betreffen. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion zur Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die funktionelle Notation `hwb()` drückt eine gegebene Farbe gemäß ihrem Farbton, ihrer Weißheit und ihrer Schwärze aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe. ([Firefox-Bug 1352755](https://bugzil.la/1352755)).

- Firefox bietet jetzt Unterstützung für die {{CSSxRef("color-scheme")}}-Eigenschaft. Diese erlaubt einem Element anzugeben, in welchen Farbschemata es komfortabel dargestellt werden kann. Übliche Optionen sind "light" und "dark" oder "day mode" und "night mode". ([Firefox-Bug 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}}-Eigenschaft unterstützt jetzt die Funktion `reversed()` zur Erstellung von _umgekehrten_ [CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die für die Nummerierung von Elementen in absteigender Reihenfolge gedacht sind.
  Diese kann mit dem Zähler `list-item` verwendet werden, um nummerierte Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste
  (`list-item` ist ein Zähler, der automatisch für nummerierte Listen angewendet wird, wie z. B. diejenigen, die mit {{HTMLElement("ol")}} erstellt wurden).
  Firefox verwendet dieses Feature intern, um das `<ol>`-Attribut [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) zu unterstützen.
  ([Firefox-Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt, was es dem Code ermöglicht zu überprüfen, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird.
  Das Feature befindet sich hinter einer Einstellung auf Desktop-Betriebssystemen.
  ([Firefox-Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert, sodass Webanwendungen, die in mehreren Tabs oder Workern laufen, die Nutzung von Ressourcen koordinieren können. ([Firefox-Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Die Unterstützung für den Bildencoder im [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image)-Bildformat wurde hinzugefügt.
  Dies ermöglicht es, dass Canvas-Elemente ihren Inhalt als WebP-Daten exportieren können, wenn die Methoden [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden.
  ([Firefox-Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor setzt jetzt den Standardwert `rootMargin`, wenn ein leerer String in der zugehörigen Parameteroption übergeben wird, anstatt eine Ausnahme auszulösen ([Firefox-Bug 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Reihe von veralteten nicht-standardmäßigen Statistikfeldern wurden aus der WebRTC API `RTCStatsReport`-Schnittstelle entfernt, einschließlich: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`.
  ([Firefox-Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um das Shadow-Root (offen oder geschlossen) zu erhalten, das von einem gegebenen Element gehostet wird ([Firefox-Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der einen `cyclic object value`-Fehler verursachte, wenn versucht wurde, das `ShadowRoot` eines Elements zurückzugeben ([Firefox-Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde verbessert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox-Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.getFrameId")}} wurde hinzugefügt, um die Frame-ID eines beliebigen Fensterglobals oder Frame-Elements aus einem Inhalts-Skript abzurufen ([Firefox-Bug 1733104](https://bugzil.la/1733104)).
