---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 8379a43c93b36c69c44a4a0b23219aeae0affb0f
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaft {{CSSXRef("hyphenate-limit-chars")}} ermöglicht eine detaillierte Kontrolle über die Silbentrennung in Texten. Sie wird verwendet, um die Mindestwortlänge für die Silbentrennung sowie die Anzahl der Zeichen vor und nach dem Bindestrich festzulegen. ([Firefox Bug 1947183](https://bugzil.la/1947183)).

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird nun unterstützt. Diese Methode nimmt ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie z.B. ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Addieren der Zahlen in einer Schleife, da sie den Verlust der Gleitkommapräzision in Zwischenergebnissen vermeidet. ([Firefox Bug 1943120](https://bugzil.la/1943120)).

#### Entfernungen

### SVG

- Das {{svgelement("discard")}} SVG-Element wird nun unterstützt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle.
  Mit dem Element können Entwickler einen Auslösezeitpunkt oder ein Ereignis angeben, zu dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen.
  Ein SVG-Viewer kann diese Informationen nutzen, um Speicher zu sparen, indem Elemente verworfen werden, die nicht mehr benötigt werden, wie z.B. abgeschlossene animierte Elemente.
  ([Firefox Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt hardwaremäßig auf Android aktiviert und hardware- und softwaremäßig auf Linux aktiviert. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, welches die Seite „Erweiterungsshortcuts verwalten“ von „Ihre Erweiterungen verwalten“ (`about:addons`) öffnet und, wenn die Erweiterung Shortcuts hat, zu den Shortcut-Tastenoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox Bug 1538451](https://bugzil.la/1538451))
- Das 10-MB-Limit für Daten, die durch die API {{WebExtAPIRef("storage.session")}} gespeichert werden, wird jetzt durchgesetzt. ([Firefox Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Sonstiges

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 137 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
