---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 2a8977006694ec6b9691565bda16096985ce18da
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} bietet Ihnen eine feingranulare Kontrolle über die Silbentrennung im Text. Sie wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox Bug 1947183](https://bugzil.la/1947183)).

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese nimmt ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen an und gibt deren Summe zurück. Sie ist präziser als das Summieren der Zahlen in einer Schleife, da sie den Verlust an Gleitkomma-Genauigkeit in Zwischenergebnissen vermeidet. ([Firefox Bug 1943120](https://bugzil.la/1943120)).

#### Entfernungen

### SVG

- Das SVG-Element {{svgelement("discard")}} wird jetzt unterstützt, zusammen mit seinem entsprechenden JavaScript-Interface [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement). Das Element erlaubt es Entwicklern, einen Auslösezeitpunkt oder ein Ereignis festzulegen, bei dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen. Ein SVG-Viewer kann diese Information nutzen, um Speicher zu sparen, indem er Elemente entfernt, die nicht mehr benötigt werden, wie z. B. animierte Elemente, die abgeschlossen sind. ([Firefox Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Methoden [`getPathData()`](/de/docs/Web/API/SVGPathSegment/getPathData), [`setPathData()`](/de/docs/Web/API/SVGPathSegment/setPathData) und [`getPathSegmentAtLength()`](/de/docs/Web/API/SVGPathSegment/getPathSegmentAtLength) der [`SVGPathSegment`](/de/docs/Web/API/SVGPathSegment)-Schnittstelle werden jetzt unterstützt. Diese Methoden bieten eine bequeme Möglichkeit, mit SVG-Pfad-Daten zu arbeiten, anstatt rohe String-Daten zu parsen. ([Firefox Bug 1945312](https://bugzil.la/1945312)).

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt hardwarebasiert auf Android aktiviert und sowohl hardware- als auch softwarebasiert auf Linux. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardisierten Ereignisse sind jetzt veraltet und zur Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) im [`Document`](/de/docs/Web/API/Document), sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) im [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox Bug 1949373](https://bugzil.la/1949373)).

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, das die Seite „Erweiterungen-Tastenkombinationen verwalten“ in „Verwalten Sie Ihre Erweiterungen“ (`about:addons`) öffnet und, falls die Erweiterung Tastenkombinationen hat, zu den Tastenkombinationsoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox Bug 1538451](https://bugzil.la/1538451))
- Das 10 MB-Limit für die von der {{WebExtAPIRef("storage.session")}} API gespeicherten Daten wird jetzt durchgesetzt. ([Firefox Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 137 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
