---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 6b66bdf7b16eba72143776cbc5b157e25a8508d8
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} bietet Ihnen eine feinkörnige Kontrolle über die Silbentrennung in Texten. Sie wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich anzugeben. ([Firefox-Bug 1947183](https://bugzil.la/1947183)).
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} akzeptiert nun die Werte `spelling-error` und `grammar-error`. Diese Werte nutzen die Stilvorgaben des Browsers für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften in der {{cssxref("text-decoration")}} Kurzform. ([Firefox-Bug 1950844](https://bugzil.la/1950844)).

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird nun unterstützt. Diese nimmt ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Summieren der Zahlen in einer Schleife, da sie einen Verlust an Gleitkommapräzision in Zwischenergebnissen vermeidet. ([Firefox-Bug 1943120](https://bugzil.la/1943120)).
- Die statische Methode {{jsxref("Atomics.pause()")}} wird nun unterstützt. Diese Methode gibt dem Prozessor einen Hinweis, dass der aktuelle Thread in einem Spinlock ist, während auf den Zugriff auf eine gemeinsame Ressource gewartet wird. Das System kann dann die dem Kern zugewiesenen Ressourcen (wie Energie) oder den Thread reduzieren, ohne den aktuellen Thread freizugeben. ([Firefox-Bug 1937805](https://bugzil.la/1937805)).

#### Entfernungen

### SVG

- Das {{svgelement("discard")}} SVG-Element wird nun unterstützt, zusammen mit seiner entsprechenden [JavaScript-Interface `SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement).
  Das Element ermöglicht es Entwicklern, eine Auslösezeit oder ein Ereignis anzugeben, bei dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen.
  Ein SVG-Viewer kann diese Information verwenden, um Speicher zu sparen, indem Elemente, die nicht mehr benötigt werden, wie animierte Elemente, die abgeschlossen sind, verworfen werden.
  ([Firefox-Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathSegment/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathSegment/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathSegment/getPathSegmentAtLength) des [`SVGPathSegment`](/de/docs/Web/API/SVGPathSegment) Interfaces werden nun unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfaddaten zu arbeiten, anstatt rohe String-Daten zu parsen. ([Firefox-Bug 1945312](https://bugzil.la/1945312)).

#### DOM

#### Media, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt auf Android hardwareseitig aktiviert und auf Linux sowohl hardware- als auch softwareseitig aktiviert. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox-Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht-standardisierten Ereignisse sind nun veraltet und für die Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Document`](/de/docs/Web/API/Document) sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox-Bug 1949373](https://bugzil.la/1949373)).

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, die die Seite "Erweiterungen-Verknüpfungen verwalten" von "Verwalten Sie Ihre Erweiterungen" (`about:addons`) öffnet und, falls die Erweiterung Verknüpfungen hat, zu den Verknüpfungstastenoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox-Bug 1538451](https://bugzil.la/1538451))
- Das 10-MB-Limit für Daten, die durch die API {{WebExtAPIRef("storage.session")}} gespeichert werden, wird jetzt durchgesetzt. ([Firefox-Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 137 enthalten, aber standardmäßig deaktiviert. Um sie zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly Version): ist nun standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) soll die Arbeit mit Daten und Zeiten in verschiedenen Szenarien vereinfachen und bietet integrierte Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1946823](https://bugzil.la/1946823)).

## Ältere Versionen

{{Firefox_for_developers}}
