---
title: Firefox 138 für Entwickler
slug: Mozilla/Firefox/Releases/138
l10n:
  sourceCommit: 24df08617c877ca0254f2bb23c5a0e0eb190c0aa
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 138, die Entwickler betreffen. Firefox 138 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. April 2025](https://whattrainisitnow.com/release/?version=138) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

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

- Unterstützung für `page_action` als {{WebExtAPIRef("menus.ContextType")}} im {{WebExtAPIRef("menus")}} API für Manifest V3-Erweiterungen hinzugefügt. Dies bietet Manifest V3-Erweiterungen die gleiche Fähigkeit wie Manifest V2-Erweiterungen, Menüeinträge zu `page_action` hinzuzufügen. ([Firefox Fehler 1951166](https://bugzil.la/1951166))
- Die {{WebExtAPIRef("contextualIdentities")}} API ist nicht mehr in Firefox für Android definiert. Zuvor war sie definiert, aber defekt. ([Firefox Fehler 1659500](https://bugzil.la/1659500))
- Die `contextualIdentities`-Berechtigung wird jetzt in Firefox für Android nicht mehr erkannt. Zuvor aktivierte sie eine defekte Version der "Containers"-Funktion. ([Firefox Fehler 1659500](https://bugzil.la/1659500))
- Die neue Manifest V3-Version der {{WebExtAPIRef("userScripts")}} API ist jetzt auf Firefox für Android verfügbar. ([Firefox Fehler 1949955](https://bugzil.la/1949955))
- Die {{WebExtAPIRef("alarms.create")}} API gibt jetzt ein Promise statt `undefined` zurück. ([Firefox Fehler 1869171](https://bugzil.la/1869171))

### Entfernungen

### Sonstiges

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 138 integriert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite zu [experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
