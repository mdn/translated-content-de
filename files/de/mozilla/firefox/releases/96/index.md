---
title: Firefox 96 Versionshinweise für Entwickler
short-title: Firefox 96
slug: Mozilla/Firefox/Releases/96
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 96, die für Entwickler relevant sind. Firefox 96 wurde am 11. Januar 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die [`hwb()`](/de/docs/Web/CSS/Reference/Values/color_value/hwb)-Funktion zur Verwendung als [CSS-Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) wurde implementiert. Die `hwb()`-Funktionsnotation drückt eine gegebene Farbe basierend auf ihrem Farbton, Weißgrad und Schwarzgrad aus. Eine optionale Alphakomponente repräsentiert die Transparenz der Farbe. ([Firefox Bug 1352755](https://bugzil.la/1352755)).

- Firefox unterstützt jetzt die {{CSSxRef("color-scheme")}}-Eigenschaft. Dies ermöglicht es einem Element, anzugeben, in welchen Farbschemata es problemlos dargestellt werden kann. Übliche Optionen sind "light" und "dark" oder "Tagmodus" und "Nachtmodus". ([Firefox Bug 1576289](https://bugzil.la/1576289)).

- Die {{CSSxRef("counter-reset")}}-Eigenschaft unterstützt jetzt die `reversed()`-Funktion zum Erstellen von _umgekehrten_ [CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), die für die Nummerierung von Elementen in absteigender Reihenfolge vorgesehen sind.
  Dies kann mit dem `list-item`-Zähler verwendet werden, um geordnete Listen in umgekehrter Reihenfolge automatisch zu nummerieren, beginnend mit der Anzahl der Elemente in der Liste
  (`list-item` ist ein Zähler, der automatisch für geordnete Listen angewendet wird, wie solche, die mit {{HTMLElement("ol")}} erstellt werden).
  Firefox verwendet diese Funktion intern, um das `<ol>` [`reversed`-Attribut](/de/docs/Web/HTML/Reference/Elements/ol#reversed) zu unterstützen.
  ([Firefox Bug 1706346](https://bugzil.la/1706346)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) wird jetzt auf Android unterstützt, wodurch der Code überprüfen kann, ob [`navigator.share()`](/de/docs/Web/API/Navigator/share) für bestimmte Ziele erfolgreich sein wird.
  Die Funktion ist auf Desktop-Betriebssystemen hinter einer Präferenz versteckt.
  ([Firefox Bug 1666203](https://bugzil.la/1666203)).
- Die [Web Locks API](/de/docs/Web/API/Web_Locks_API) ist standardmäßig aktiviert, wodurch Webanwendungen, die in mehreren Tabs oder Arbeitern laufen, die Verwendung von Ressourcen koordinieren können. ([Firefox Bug 1740044](https://bugzil.la/1740044)).

#### Canvas

- Es wurde Unterstützung für den Bildencoder für das [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image)-Bildformat hinzugefügt.
  Dadurch können Canvas-Elemente ihren Inhalt als WebP-Daten exportieren, wenn die Methoden [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL), [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) und [`OffscreenCanvas.toBlob`](/de/docs/Web/API/OffscreenCanvas/convertToBlob) verwendet werden.
  ([Firefox Bug 1511670](https://bugzil.la/1511670)).

#### DOM

- Der [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor setzt jetzt das Standard-`rootMargin`, wenn eine leere Zeichenkette im zugehörigen Parameteroptionsfeld übergeben wird, anstatt eine Ausnahme auszulösen ([Firefox Bug 1738791](https://bugzil.la/1738791)).

#### Medien, WebRTC und Web Audio

- Eine Reihe von veralteten nicht standardmäßigen Statistikfeldern wurden aus dem WebRTC API [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Interface entfernt, einschließlich: `bitrateMean`, `bitrateStdDev`, `framerateMean`, `framerateStdDev` und `droppedFrames`.
  ([Firefox Bug 1367562](https://bugzil.la/1367562)).

### WebDriver-Konformität (Marionette)

- Der Befehl `WebDriver:GetElementShadowRoot` wurde hinzugefügt, um das Shadow Root (offen oder geschlossen) eines gegebenen Elements abzurufen ([Firefox Bug 1700073](https://bugzil.la/1700073)).
- Ein Fehler in `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` wurde behoben, der einen `cyclic object value`-Fehler verursachte, wenn versucht wurde, das `ShadowRoot` eines Elements zurückzugeben ([Firefox Bug 1489490](https://bugzil.la/1489490)).
- `WebDriver:Print` wurde verbessert, um Seitenbereiche beim Drucken von Dokumenten als PDF zu unterstützen ([Firefox Bug 1678347](https://bugzil.la/1678347)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("runtime.getFrameId")}} wurde hinzugefügt, um die Frame-ID eines beliebigen Fensterglobus oder Rahmenelements aus einem Inhaltsskript zu erhalten ([Firefox Bug 1733104](https://bugzil.la/1733104)).
