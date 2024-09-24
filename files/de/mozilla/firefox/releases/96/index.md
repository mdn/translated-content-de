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

- Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb)-Funktion für die Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die funktionale Notation `hwb()` drückt eine gegebene Farbe basierend auf ihrem Farbton, Weißanteil und Schwarzanteil aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe. ([Firefox Bug 1352755](https://bugzil.la/1352755)).

- Firefox bietet jetzt Unterstützung für die {{CSSxRef("color-scheme")}}-Eigenschaft. Diese ermöglicht es einem Element anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Übliche Optionen sind "light" und "dark" oder "day mode" und "night mode". ([Firefox Bug 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}}-Eigenschaft unterstützt jetzt die Funktion `reversed()` zur Erstellung _umgekehrter_ [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die zur Nummerierung von Elementen in absteigender Reihenfolge bestimmt sind.
  Dies kann mit dem `list-item`-Zähler verwendet werden, um geordnete Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste
  (`list-item` ist ein Zähler, der automatisch für geordnete Listen angewendet wird, wie die, die mit {{HTMLElement("ol")}} erstellt werden).
  Firefox verwendet diese Funktion intern, um das `<ol>`-[`reversed`-Attribut](/de/docs/Web/HTML/Element/ol#reversed) zu unterstützen.
  ([Firefox Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- {{domxref("navigator.canShare()")}} wird jetzt auf Android unterstützt, was es ermöglicht, zu überprüfen, ob {{domxref("navigator.share()")}} für bestimmte Ziele erfolgreich sein wird.
  Diese Funktion befindet sich bei Desktop-Betriebssystemen hinter einer Einstellung.
  ([Firefox Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert, was es Web-Apps ermöglicht, die in mehreren Tabs oder Workern laufen, die Nutzung von Ressourcen zu koordinieren. ([Firefox Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für Bild-Encoding im [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image)-Bildformat wurde hinzugefügt.
  Dadurch können Canvas-Elemente ihren Inhalt als WebP-Daten exportieren, wenn die Methoden: {{domxref("HTMLCanvasElement.toDataURL()")}}, {{domxref("HTMLCanvasElement.toBlob()")}} und {{domxref("OffscreenCanvas.convertToBlob", "OffscreenCanvas.toBlob")}} verwendet werden.
  ([Firefox Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der {{domxref("IntersectionObserver.IntersectionObserver()","IntersectionObserver()")}}-Konstruktor setzt nun die Standard-`rootMargin`, wenn ein leerer String im zugehörigen Parameteroption übergeben wird, anstatt eine Ausnahme auszulösen ([Firefox Bug 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Anzahl veralteter nicht-standardmäßiger Statistikenfelder wurde aus der [WebRTC Statistics API](/de/docs/Web/API/WebRTC_Statistics_API) entfernt, einschließlich: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`.
  ([Firefox Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um das Shadow-Root (offen oder geschlossen) zu einem gegebenen Element abzurufen ([Firefox Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der zu einem `cyclic object value`-Fehler führte, wenn versucht wurde, das `ShadowRoot` eines Elements zurückzugeben ([Firefox Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde verbessert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.getFrameId")}} wurde hinzugefügt, um die Frame-ID von jedem Fensterglobalen oder Frame-Element aus einem Inhalts-Skript zu erhalten ([Firefox Bug 1733104](https://bugzil.la/1733104)).

## Ältere Versionen

{{Firefox_for_developers}}
