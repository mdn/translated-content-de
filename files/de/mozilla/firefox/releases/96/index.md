---
title: Firefox 96 Versionshinweise für Entwickler
short-title: Firefox 96
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 96, die Entwickler betreffen. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion zur Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die `hwb()` Funktionsnotation gibt eine bestimmte Farbe anhand ihres Farbtons, ihrer Helligkeit und Dunkelheit an. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe. ([Firefox Bug 1352755](https://bugzil.la/1352755)).

- Firefox unterstützt nun die {{CSSxRef("color-scheme")}} Eigenschaft. Diese erlaubt es einem Element, anzugeben, in welchen Farbschemata es komfortabel dargestellt werden kann. Häufige Optionen sind "light" und "dark" oder "Tagesmodus" und "Nachtmodus". ([Firefox Bug 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}} Eigenschaft unterstützt jetzt die `reversed()` Funktion zum Erstellen von _umgekehrten_ [CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die zur Nummerierung von Elementen in absteigender Reihenfolge gedacht sind.
  Dies kann mit dem `list-item` Zähler verwendet werden, um nummerierte Listen automatisch in umgekehrter Reihenfolge zu nummerieren, ausgehend von der Anzahl der Elemente in der Liste
  (`list-item` ist ein Zähler, der automatisch für nummerierte Listen angewendet wird, wie zum Beispiel solche, die mit {{HTMLElement("ol")}} erstellt werden).
  Firefox verwendet diese Funktion intern zur Unterstützung des `<ol>` [`reversed` Attributs](/de/docs/Web/HTML/Reference/Elements/ol#reversed).
  ([Firefox Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt. Dies ermöglicht es dem Code, zu überprüfen, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird.
  Diese Funktion ist auf Desktop-Betriebssystemen hinter einer Voreinstellung versteckt.
  ([Firefox Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert und ermöglicht es Webanwendungen, die in mehreren Tabs oder Arbeitern laufen, die Nutzung von Ressourcen zu koordinieren. ([Firefox Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für Bildencoder wurde für das [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) Bildformat hinzugefügt.
  Dies ermöglicht es Canvas-Elementen, ihren Inhalt als WebP-Daten zu exportieren, wenn die Methoden [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden.
  ([Firefox Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor setzt jetzt den Standardwert `rootMargin`, wenn ein leerer String im zugehörigen Parameter übergeben wird, anstatt eine Ausnahme auszulösen ([Firefox Bug 1738791](https://bugzil.la/1738791)).

#### Media, WebRTC und Web Audio

- Eine Anzahl veralteter, nicht standardisierter Statistikfelder wurden aus dem WebRTC API [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Interface entfernt, darunter: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`.
  ([Firefox Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um das Shadow-Root (offen oder geschlossen) eines bestimmten Elements abzurufen ([Firefox Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der zu einem ‘cyclic object value’ Fehler führte, wenn versucht wurde, das `ShadowRoot` eines Elements zurückzugeben ([Firefox Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde erweitert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- Hinzugefügt wurde {{WebExtAPIRef("runtime.getFrameId")}}, mit der die Frame-ID eines beliebigen Fenster-Globals oder Frame-Elements aus einem Inhalts-Skript abgerufen wird ([Firefox Bug 1733104](https://bugzil.la/1733104)).
