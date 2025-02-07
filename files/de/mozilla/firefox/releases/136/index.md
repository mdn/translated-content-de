---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 48fc59029d83dbc53748561d30be41f6a0ae62c1
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

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

- Die maximale Größe von [Data URLs](/de/docs/Web/URI/Schemes/data) wurde von 32 MB auf 512 MB erhöht, womit der Grenzwert für Chromium-Browser angepasst wurde ([Firefox-Bug 1911300](https://bugzil.la/1911300)).

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

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} lehnen jetzt mit einem Fehler ab, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Promise erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743))

### Entfernt

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen wurden in Firefox 136 neu eingeführt, sind jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
