---
title: Firefox 96 für Entwickler
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 96, die Entwickler betreffen. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion für die Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die `hwb()`-Notation drückt eine gegebene Farbe entsprechend ihrem Farbton, Weißanteil und Schwarzanteil aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe. ([Firefox Bug 1352755](https://bugzil.la/1352755)).

- Firefox unterstützt jetzt die {{CSSxRef("color-scheme")}} Eigenschaft. Dies ermöglicht es einem Element, anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Übliche Optionen sind "hell" und "dunkel" oder "Tagesmodus" und "Nachtmodus". ([Firefox Bug 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}} Eigenschaft unterstützt jetzt die `reversed()` Funktion zum Erstellen _umgekehrter_ [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die zum Nummerieren von Elementen in absteigender Reihenfolge vorgesehen sind.
  Dies kann mit dem `list-item`-Zähler verwendet werden, um nummerierte Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste
  (`list-item` ist ein Zähler, der automatisch für nummerierte Listen angewendet wird, wie sie mit {{HTMLElement("ol")}} erstellt werden).
  Firefox verwendet dieses Feature intern, um das `<ol>` Attribut [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) zu unterstützen.
  ([Firefox Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt, wodurch der Code prüfen kann, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird.
  Diese Funktion ist auf Desktop-Betriebssystemen hinter einer Präferenz verborgen.
  ([Firefox Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert, wodurch Webanwendungen, die in mehreren Tabs oder Workern ausgeführt werden, die Verwendung von Ressourcen koordinieren können. ([Firefox Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für den Bildencoder für das [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) Bildformat wurde hinzugefügt.
  Dadurch können Canvas-Elemente ihren Inhalt als WebP-Daten exportieren, wenn Sie die Methoden [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwenden.
  ([Firefox Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor setzt jetzt den Standardwert `rootMargin`, wenn ein leerer String im zugehörigen Parameteroption übergeben wird, anstatt eine Ausnahme auszulösen ([Firefox Bug 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Anzahl von veralteten, nicht standardisierten Statistikfeldern wurde aus der WebRTC-API [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Schnittstelle entfernt, darunter: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`.
  ([Firefox Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um den Shadow Root (offen oder geschlossen) zu erhalten, der von einem bestimmten Element gehostet wird ([Firefox Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der einen `cyclic object value` Fehler verursachte, wenn versucht wurde, den `ShadowRoot` eines Elements zurückzugeben ([Firefox Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde erweitert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- Hinzugefügt {{WebExtAPIRef("runtime.getFrameId")}}, um die Frame-ID eines beliebigen Fenster-Globals oder Frame-Elements aus einem Inhaltsskript zu erhalten ([Firefox Bug 1733104](https://bugzil.la/1733104)).

## Ältere Versionen

{{Firefox_for_developers}}
