---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 9cdfac539af02dfc6f86c9ef13a4bb5eed897928
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 138, die Entwickler betreffen. Firefox 138 ist die aktuelle [Nightly-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

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

#### Allgemeines

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen. Dies ermöglicht Manifest V3-Erweiterungen, genauso wie Manifest V2, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Bug 1951166](https://bugzil.la/1951166))
- Das {{WebExtAPIRef("contextualIdentities")}} API ist nicht mehr in Firefox für Android definiert. Zuvor war es definiert, aber defekt. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird jetzt in Firefox für Android nicht mehr erkannt. Zuvor aktivierte sie eine fehlerhafte Version des "Containers"-Features. ([Firefox Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version des {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox Bug 1949955](https://bugzil.la/1949955))
- Das {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise statt undefiniert zurück. ([Firefox Bug 1869171](https://bugzil.la/1869171))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 138 verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Voreinstellung und setzen Sie diese auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
