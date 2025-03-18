---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 639e9f5f1c6587a286a2a5060078ec4555866e57
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

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen hinzugefügt. Dies bietet Manifest V3-Erweiterungen die gleiche Möglichkeit wie Manifest V2-Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox-Bug 1951166](https://bugzil.la/1951166))
- Das {{WebExtAPIRef("contextualIdentities")}} API ist in Firefox für Android nicht mehr definiert. Zuvor war es definiert, aber fehlerhaft. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird nun auf Firefox für Android nicht mehr erkannt. Zuvor ermöglichte sie eine defekte Version der "containers"-Funktion. ([Firefox-Bug 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version des {{WebExtAPIRef("userScripts")}} API ist jetzt in Firefox für Android verfügbar. ([Firefox-Bug 1949955](https://bugzil.la/1949955))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind neu in Firefox 138 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

## Ältere Versionen

{{Firefox_for_developers}}
