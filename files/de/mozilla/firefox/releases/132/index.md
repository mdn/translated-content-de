---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: a96eef6122bc94bec451a2dbc1a59b280afcd450
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernt

### CSS

#### Entfernt

### JavaScript

#### Entfernt

### SVG

#### Entfernt

### HTTP

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernt

### Sonstige

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 132 neu ausgeliefert, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine bequeme Methode, die einen Rückruf jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) entgegennimmt und ihr Ergebnis in einem {{jsxref("Promise")}} verpackt, so dass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu verwalten ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

## Ältere Versionen

{{Firefox_for_developers}}
