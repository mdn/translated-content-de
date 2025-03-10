---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 39dd889d11f10dcdd116e572a3cdb669abc8be81
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

- Die {{CSSXRef("hyphenate-limit-chars")}} CSS-Eigenschaft ermöglicht eine feinkörnige Kontrolle über die Trennung von Text. Sie wird verwendet, um die Mindestwortlänge für die Trennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox-Bug 1947183](https://bugzil.la/1947183)).

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird nun unterstützt. Diese Methode nimmt ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie z.B. ein {{jsxref("Array")}}) von Zahlen entgegen und gibt deren Summe zurück. Sie ist präziser als eine Summierung der Zahlen in einer Schleife, da sie den Verlust der Gleitkommagenauigkeit bei Zwischenergebnissen vermeidet. ([Firefox-Bug 1943120](https://bugzil.la/1943120)).

#### Entfernungen

### SVG

- Das {{svgelement("discard")}} SVG-Element wird nun unterstützt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle.
  Das Element ermöglicht es Entwicklern, einen Auslösezeitpunkt oder ein Ereignis anzugeben, bei dem ein bestimmtes Element und dessen Kinder aus dem DOM entfernt werden sollen.
  Ein SVG-Viewer kann diese Informationen verwenden, um Speicherplatz zu sparen, indem nicht mehr benötigte Elemente wie abgeschlossene Animationen verworfen werden.
  ([Firefox-Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist nun hardwareseitig auf Android und sowohl hardware- als auch softwareseitig auf Linux aktiviert. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox-Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

- Die folgenden nicht standardmäßigen Ereignisse sind nun veraltet und zur Entfernung vorgeschlagen: [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) in [`Document`](/de/docs/Web/API/Document), und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event), und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in [`Element`](/de/docs/Web/API/Element). Eine Konsolenwarnung wird angezeigt, wenn sie verwendet werden. ([Firefox-Bug 1949373](https://bugzil.la/1949373)).

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, die die Seite zur Verwaltung von Erweiterungskurzbefehlen in „Verwalten Sie Ihre Erweiterungen“ (`about:addons`) öffnet und, falls die Erweiterung Kurzbefehle hat, zu den Tastenoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox-Bug 1538451](https://bugzil.la/1538451))
- Das 10 MB-Quota für Daten, die durch die {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird nun durchgesetzt. ([Firefox-Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 137 enthalten, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Sie können weitere solche Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) finden.

## Ältere Versionen

{{Firefox_for_developers}}
