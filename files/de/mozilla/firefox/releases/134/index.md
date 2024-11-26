---
title: Firefox 134 für Entwickler
slug: Mozilla/Firefox/Releases/134
l10n:
  sourceCommit: 6989fc79df85a04a48f6359c6ca18dc09508d45a
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 134, die Entwickler betreffen. Firefox 134 ist die aktuelle [Nightly-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [7. Januar 2025](https://whattrainisitnow.com/release/?version=134) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Unterstützung für die statische Methode {{jsxref("RegExp.escape()")}}, die zum Escapen potenzieller regex-Syntaxzeichen in einem String verwendet werden kann und einen neuen String zurückgibt, der als [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Muster für den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor sicher verwendet werden kann. ([Firefox Bug 1918235](https://bugzil.la/1918235)).
- Die {{jsxref("Promise.try()")}}-Hilfsmethode wird jetzt unterstützt. Die Methode nimmt einen Callback jeglicher Art (eine Funktion, die zurückkehrt oder wirft, synchron oder asynchron) und umschließt ihr Ergebnis in einem {{jsxref("Promise")}}. Dies ermöglicht es, die Promise-Semantik ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zu nutzen, um das Ergebnis von Methoden jeglicher Art zu behandeln. ([Firefox Bug 1917879](https://bugzil.la/1917879) und [Firefox Bug 1905364](https://bugzil.la/1905364)).
- {{jsxref("Intl.DurationFormat")}} wird unterstützt, was eine ortsabhängige Formatierung von Zeitdauern ermöglicht. ([Firefox Bug 1648139](https://bugzil.la/1648139)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstige

## Experimentelle Webfunktionalitäten

Diese Funktionen sind neu in Firefox 134, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere derartige Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
