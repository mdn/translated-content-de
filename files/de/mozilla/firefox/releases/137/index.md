---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 4e867aac413921f448ecb4bf2245841412dec3f1
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} bietet Ihnen eine fein abgestimmte Kontrolle über die Silbentrennung im Text. Sie wird verwendet, um die minimale Wortlänge für Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox-Bug 1947183](https://bugzil.la/1947183)).
- Die CSS-Eigenschaft {{cssxref("text-decoration-line")}} akzeptiert nun die Werte `spelling-error` und `grammar-error`. Diese Werte verwenden das Styling des Browsers für Rechtschreib- und Grammatikfehler und ignorieren die anderen Eigenschaften in der Kurzform {{cssxref("text-decoration")}}. ([Firefox-Bug 1950844](https://bugzil.la/1950844)).

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese nimmt ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Summieren der Zahlen in einer Schleife, da sie den Verlust der Gleitkommapräzision in Zwischenergebnissen vermeidet. ([Firefox-Bug 1943120](https://bugzil.la/1943120)).

#### Entfernungen

### SVG

- Das SVG-Element {{svgelement("discard")}} wird nun unterstützt, zusammen mit seiner entsprechenden [JavaScript-Schnittstelle `SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement). Das Element ermöglicht es Entwicklern, eine Auslösezeit oder ein Ereignis anzugeben, zu dem ein bestimmtes Element und dessen Kinder aus dem DOM entfernt werden sollen. Ein SVG-Viewer kann diese Informationen verwenden, um Speicher zu sparen, indem Elemente, die nicht mehr benötigt werden, wie beispielsweise abgeschlossene animierte Elemente, entfernt werden. ([Firefox-Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathSegment/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathSegment/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathSegment/getPathSegmentAtLength) der [`SVGPathSegment`](/de/docs/Web/API/SVGPathSegment)-Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgen-Daten zu analysieren. ([Firefox-Bug 1945312](https://bugzil.la/1945312)).

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist nun hardwareseitig unter Android und sowohl hardware- als auch softwareseitig unter Linux aktiviert. Dies ergänzt die bestehende Hardware- und Softwareunterstützung unter Windows und macOS. ([Firefox-Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardmäßigen Ereignisse sind nun veraltet und für die Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Dokument`](/de/docs/Web/API/Document), sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox-Bug 1949373](https://bugzil.la/1949373)).

### WebAssembly

#### Entfernungen

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, die die Seite "Verwalten der Erweiterungstastenkombinationen" von "Verwalten Sie Ihre Erweiterungen" (`about:addons`) öffnet und, falls die Erweiterung Tastenkombinationen hat, zu den Tastenoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox-Bug 1538451](https://bugzil.la/1538451))
- Das 10-MB-Kontingent für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird nun durchgesetzt. ([Firefox-Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Andere

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 137, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): ist jetzt standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit integrierten Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1946823](https://bugzil.la/1946823)).

## Ältere Versionen

{{Firefox_for_developers}}
