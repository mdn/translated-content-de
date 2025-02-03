---
title: Firefox 96 für Entwickler
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 96, die Entwickler betreffen. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion zur Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die `hwb()` Funktionsnotation drückt eine gegebene Farbe basierend auf ihrem Farbton, dem Weißheits- und Schwarzheitsgrad aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe. ([Firefox Fehler 1352755](https://bugzil.la/1352755)).

- Firefox unterstützt nun die {{CSSxRef("color-scheme")}} Eigenschaft. Diese ermöglicht es einem Element anzugeben, in welchen Farbschemata es komfortabel gerendert werden kann. Häufige Optionen sind "light" und "dark" oder "Tagesmodus" und "Nachtmodus". ([Firefox Fehler 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}} Eigenschaft unterstützt nun die `reversed()` Funktion zur Erstellung _invertierter_ [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die für das Nummerieren von Elementen in absteigender Reihenfolge gedacht sind.
  Dies kann mit dem `list-item` Zähler verwendet werden, um geordnete Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste
  (`list-item` ist ein Zähler, der automatisch für geordnete Listen, wie sie mit {{HTMLElement("ol")}} erstellt werden, angewendet wird).
  Firefox verwendet diese Funktion intern, um das `<ol>` [`reversed` Attribut](/de/docs/Web/HTML/Element/ol#reversed) zu unterstützen.
  ([Firefox Fehler 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt, sodass Code überprüfen kann, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird.
  Das Feature ist auf Desktop-Betriebssystemen hinter einer Einstellung verborgen.
  ([Firefox Fehler 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert und ermöglicht es Webanwendungen, die in mehreren Tabs oder Workern laufen, die Nutzung von Ressourcen zu koordinieren. ([Firefox Fehler 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für Bildencoder des [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) Bildformats wurde hinzugefügt.
  Dies ermöglicht es `<canvas>` Elementen, ihren Inhalt als webp-Daten zu exportieren, wenn die Methoden: [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden.
  ([Firefox Fehler 1511670](https://bugzil.la/1511670)).

#### DOM

- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) Konstruktor setzt nun die Standard-`rootMargin`, wenn im zugehörigen Parameteroption ein leerer String übergeben wird, anstatt eine Ausnahme zu werfen ([Firefox Fehler 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Reihe von veralteten nicht standardmäßigen Statistikfeldern wurden aus dem WebRTC API [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Interface entfernt, darunter: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`.
  ([Firefox Fehler 1367562](https://bugzil.la/1367562)).

### WebDriver Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um den Shadow Root (offen oder geschlossen) eines gegebenen Elements abzurufen ([Firefox Fehler 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der einen `zyklischen Objektwert` Fehler verursachte, wenn versucht wurde, den `ShadowRoot` eines Elements zurückzugeben ([Firefox Fehler 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde verbessert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox Fehler 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.getFrameId")}} wurde hinzugefügt, um die Frame-ID eines beliebigen Fensterglobals oder Frame-Elements aus einem Content-Skript zu erhalten ([Firefox Fehler 1733104](https://bugzil.la/1733104)).

## Ältere Versionen

{{Firefox_for_developers}}
