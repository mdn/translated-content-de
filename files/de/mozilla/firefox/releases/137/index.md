---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 79be2656c0b4f807b1ab102f0bf96471183a03a3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese Methode nimmt ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen entgegen und gibt deren Summe zurück. Sie ist präziser als das Addieren der Zahlen in einer Schleife, da sie Verluste in der Gleitkommapräzision bei Zwischenresultaten vermeidet. ([Firefox-Bug 1943120](https://bugzil.la/1943120)).

#### Entfernungen

### SVG

- Das {{svgelement("discard")}} SVG-Element wird jetzt unterstützt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement)-JavaScript-Schnittstelle. Das Element ermöglicht es Entwicklern, eine Trigger-Zeit oder ein Ereignis zu spezifizieren, bei dem ein angegebenes Element und seine Kinder aus dem DOM entfernt werden sollen. Ein SVG-Viewer kann diese Informationen nutzen, um Speicher zu sparen, indem er Elemente verwirft, die nicht mehr benötigt werden, wie z.B. animierte Elemente, die abgeschlossen sind. ([Firefox-Bug 1945330](https://bugzil.la/1945330)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt auf Android hardwarebeschleunigt sowie hardware- und softwareseitig auf Linux aktiviert. Dies ergänzt die bestehende Hardware- und Software-Unterstützung auf Windows und macOS. ([Firefox-Bug 1950032](https://bugzil.la/1950032)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, die die Seite zum Verwalten von Erweiterungstastenkombinationen von "Erweiterungen verwalten" (`about:addons`) öffnet und, sofern die Erweiterung Tastenkombinationen hat, zu den Tastenkombinationsoptionen der Erweiterung scrollt und diese hervorhebt. ([Firefox-Bug 1538451](https://bugzil.la/1538451))
- Das 10 MB Kontingent für von der {{WebExtAPIRef("storage.session")}} API gespeicherte Daten wird jetzt durchgesetzt. ([Firefox-Bug 1915688](https://bugzil.la/1915688))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 137 ausgeliefert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Mehr solche Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
