---
title: Firefox 96 für Entwickler
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: 0cdac6d253cb44a0371a0cc4cc5b98abc97251b5
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 96, die Entwickler betreffen. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die [`hwb()`](/de/docs/Web/CSS/color_value/hwb) Funktion zur Nutzung als [CSS-Farbwert](/de/docs/Web/CSS/color_value) wurde implementiert. Die `hwb()`-Funktionsnotation drückt eine gegebene Farbe basierend auf ihrem Farbton, ihrer Weiße und Schwärze aus. Eine optionale Alpha-Komponente repräsentiert die Transparenz der Farbe. ([Firefox-Bug 1352755](https://bugzil.la/1352755)).

- Firefox bietet jetzt Unterstützung für die {{CSSxRef("color-scheme")}}-Eigenschaft. Diese ermöglicht es einem Element zu indikieren, in welchen Farbschemata es komfortabel gerendert werden kann. Übliche Optionen sind "hell" und "dunkel" oder "Tagesmodus" und "Nachtmodus". ([Firefox-Bug 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}}-Eigenschaft unterstützt jetzt die `reversed()`-Funktion zur Erstellung von _umgekehrten_ [CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die zur Nummerierung von Elementen in absteigender Reihenfolge vorgesehen sind.
  Diese kann mit dem `list-item`-Zähler verwendet werden, um geordnete Listen automatisch in umgekehrter Reihenfolge zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste
  (`list-item` ist ein Zähler, der automatisch für geordnete Listen, wie die mit {{HTMLElement("ol")}} erstellten, angewendet wird).
  Firefox verwendet diese Funktion intern, um das `<ol>` [`reversed`-Attribut](/de/docs/Web/HTML/Element/ol#reversed) zu unterstützen.
  ([Firefox-Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt, wodurch der Code überprüfen kann, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird.
  Die Funktion befindet sich unter einer Voreinstellung auf Desktop-Betriebssystemen.
  ([Firefox-Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert, wodurch Webanwendungen, die in mehreren Tabs oder Arbeitern ausgeführt werden, die Nutzung von Ressourcen koordinieren können. ([Firefox-Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Unterstützung für den Bildencoder wurde für das [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image)-Bildformat hinzugefügt.
  Dies ermöglicht es `<canvas>`-Elementen, deren Inhalt als webp-Daten zu exportieren, wenn die Methoden: [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden.
  ([Firefox-Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) setzt nun den Standardwert `rootMargin`, wenn ein leerer String im zugehörigen Parameter übergeben wird, anstatt eine Ausnahme zu werfen ([Firefox-Bug 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Reihe von veralteten nicht standardisierten Statistikfeldern wurden aus dem WebRTC-API-Interface [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) entfernt, einschließlich: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`.
  ([Firefox-Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um die Shadow-Root (offen oder geschlossen) zu ermitteln, die von einem gegebenen Element bereitgestellt wird ([Firefox-Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der einen `cyclic object value`-Fehler verursachte, wenn versucht wurde, die `ShadowRoot` eines Elements zurückzugeben ([Firefox-Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde verbessert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox-Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.getFrameId")}} wurde hinzugefügt, um die Frame-ID eines globalen Fensters oder Frame-Elements aus einem Inhaltsskript zu erhalten ([Firefox-Bug 1733104](https://bugzil.la/1733104)).

## Ältere Versionen

{{Firefox_for_developers}}
