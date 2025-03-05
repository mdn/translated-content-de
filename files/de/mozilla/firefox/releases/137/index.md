---
title: Firefox 137 für Entwickler
slug: Mozilla/Firefox/Releases/137
l10n:
  sourceCommit: 4f6e436684338f9e1256108b456d28b28c9726b0
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 137, die Entwickler betreffen. Firefox 137 ist die aktuelle [Nightly-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [1. April 2025](https://whattrainisitnow.com/release/?version=137) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernt

### CSS

#### Entfernt

### JavaScript

- Die statische Methode {{jsxref("Math.sumPrecise()")}} wird jetzt unterstützt. Diese Methode nimmt ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}) von Zahlen und gibt deren Summe zurück. Sie ist präziser als das Aufsummieren der Zahlen in einer Schleife, da sie den Verlust von Gleitkomma-Präzision in Zwischenwerten vermeidet. ([Firefox bug 1943120](https://bugzil.la/1943120)).

#### Entfernt

### SVG

- Das {{svgelement("discard")}} SVG-Element wird jetzt unterstützt, zusammen mit seiner entsprechenden [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement) JavaScript-Schnittstelle.
  Das Element ermöglicht es Entwicklern, eine Auslösezeit oder ein Ereignis zu spezifizieren, zu dem ein bestimmtes Element und seine Kinder aus dem DOM entfernt werden sollen.
  Ein SVG-Viewer kann diese Informationen verwenden, um Speicher zu sparen, indem er Elemente verwirft, die nicht mehr benötigt werden, wie z.B. animierte Elemente, die abgeschlossen sind.
  ([Firefox bug 1945330](https://bugzil.la/1945330)).

#### Entfernt

### HTTP

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

#### DOM

#### Medien, WebRTC und Web Audio

- [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) ist jetzt hardwareseitig auf Android aktiviert sowie hardware- und softwareseitig auf Linux. Dies ergänzt die bestehende Hardware- und Softwareunterstützung auf Windows und macOS. ([Firefox bug 1950032](https://bugzil.la/1950032)).

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt {{WebExtAPIRef("commands.openShortcutSettings")}} hinzu, das die Seite für die Verwaltung von Erweiterungs-Tastenkombinationen in "Meine Erweiterungen verwalten" (`about:addons`) öffnet und, wenn die Erweiterung Tastenkombinationen hat, zu den Tastenkombinationen der Erweiterung scrollt und diese hervorhebt. ([Firefox bug 1538451](https://bugzil.la/1538451))
- Das 10 MB-Limit für Daten, die durch die {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt durchgesetzt. ([Firefox bug 1915688](https://bugzil.la/1915688))

### Entfernt

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 137 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
