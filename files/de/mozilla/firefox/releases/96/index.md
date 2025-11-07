---
title: Firefox 96 Versionshinweise für Entwickler
short-title: Firefox 96
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 96, die Entwickler betreffen. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb) Funktion zur Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) wurde implementiert. Die funktionale Notation `hwb()` drückt eine gegebene Farbe basierend auf ihrem Farbton, Weißheits- und Schwärzegrad aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe. ([Firefox Bug 1352755](https://bugzil.la/1352755)).

- Firefox unterstützt jetzt die {{CSSxRef("color-scheme")}} Eigenschaft. Diese erlaubt einem Element anzuzeigen, in welchen Farbschemata es komfortabel dargestellt werden kann. Übliche Optionen sind "light" und "dark" oder "Tagesmodus" und "Nachtmodus". ([Firefox Bug 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}} Eigenschaft unterstützt jetzt die `reversed()` Funktion zum Erstellen _umgekehrter_ [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), die für die Nummerierung von Elementen in absteigender Reihenfolge vorgesehen sind. Dies kann mit dem `list-item` Zähler verwendet werden, um nummerierte Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste. (`list-item` ist ein Zähler, der automatisch für nummerierte Listen angewendet wird, wie z.B. jene, die mit {{HTMLElement("ol")}} erstellt werden). Firefox verwendet diese Funktion intern, um das `<ol>` [`reversed` Attribut](/de/docs/Web/HTML/Reference/Elements/ol#reversed) zu unterstützen. ([Firefox Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt, was es ermöglicht, zu prüfen, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird. Das Feature ist auf Desktop-Betriebssystemen hinter einer Präferenz verborgen. ([Firefox Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert und erlaubt es Webanwendungen, die in mehreren Tabs oder Workern laufen, die Nutzung von Ressourcen zu koordinieren. ([Firefox Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für Bildkodierer wurde für das [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) Bildformat hinzugefügt. Dadurch können Canvas-Elemente ihren Inhalt als WebP-Daten exportieren, wenn die Methoden [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden. ([Firefox Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor setzt jetzt den Standardwert für `rootMargin`, wenn im zugehörigen Parameter eine leere Zeichenkette übergeben wird, statt eine Ausnahme zu werfen. ([Firefox Bug 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Reihe veralteter, nicht standardmäßiger Statistikfelder wurden aus der WebRTC API [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Schnittstelle entfernt, einschließlich: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`. ([Firefox Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um die Shadow-Wurzel (offen oder geschlossen) eines gegebenen Elements abzurufen. ([Firefox Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der bei dem Versuch, die `ShadowRoot` eines Elements zurückzugeben, einen `cyclic object value` Fehler verursachte. ([Firefox Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde verbessert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen. ([Firefox Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.getFrameId")}} wurde hinzugefügt, um die Rahmen-ID eines beliebigen Fenster-Globals oder Frame-Elements aus einem Content-Skript abzurufen. ([Firefox Bug 1733104](https://bugzil.la/1733104)).
