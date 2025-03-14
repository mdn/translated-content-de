---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft bietet Ihnen eine feinkörnige Kontrolle über die Trennung von Wörtern im Text. Sie wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox Bug 1947183](https://bugzil.la/1947183)).

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese nimmt ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen an und gibt ihre Summe zurück. Sie ist präziser als das Summieren der Zahlen in einer Schleife, da sie einen Verlust der Gleitpunktgenauigkeit in Zwischenresultaten vermeidet. ([Firefox Bug 1943120](https://bugzil.la/1943120)).

#### Entfernungen

### SVG

- Das {{svgelement("discard")}} SVG-Element wird jetzt unterstützt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle.
  Das Element ermöglicht Entwicklern, eine Auslösezeit oder ein Ereignis anzugeben, zu dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen.
  Ein SVG-Viewer kann diese Information nutzen, um Speicher zu sparen, indem er Elemente verwirft, die nicht mehr benötigt werden, wie z.B. animierte Elemente, die abgeschlossen sind.
  ([Firefox Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathSegment/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathSegment/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathSegment/getPathSegmentAtLength) der [`SVGPathSegment`](/de/docs/Web/API/SVGPathSegment) Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe Zeichenfolgendaten zu parsen. ([Firefox Bug 1945312](https://bugzil.la/1945312)).

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) wird jetzt auf Android hardwareseitig aktiviert und sowohl hardware- als auch softwareseitig auf Linux unterstützt. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardisierten Ereignisse sind jetzt veraltet und zur Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) im [`Document`](/de/docs/Web/API/Document), sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) im [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox Bug 1949373](https://bugzil.la/1949373)).

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, die die Seite Erweiterte Tastenkombinationen verwalten der Erweiterungen verwalten (`about:addons`) öffnet und, wenn die Erweiterung über Tastenkombinationen verfügt, zu den Tastenkombinationseinstellungen der Erweiterung scrollt und diese hervorhebt. ([Firefox Bug 1538451](https://bugzil.la/1538451))
- Das 10-MB-Kontingent für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt durchgesetzt. ([Firefox Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 137 verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Sie können weitere solcher Features auf der Seite für [experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **Temporal API** (Nightly-Veröffentlichung): ist jetzt standardmäßig in Firefox Nightly aktiviert. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) soll die Arbeit mit Daten und Zeiten in verschiedenen Szenarien vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1946823](https://bugzil.la/1946823)).

## Ältere Versionen

{{Firefox_for_developers}}
