---
title: Firefox 94 für Entwickler
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 94, die Entwickler betreffen. Firefox 94 wurde am 2. November 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) und [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) wird nun zum Kopieren komplexer JavaScript-Objekte unterstützt ([Firefox Fehler 1722576](https://bugzil.la/1722576)).

#### DOM

- Entwickler können nun einen Hinweis für das Enter-Tasten-Label/-Symbol auf virtuellen Tastaturen bereitstellen, entweder durch [`HTMLElement.enterkeyhint`](/de/docs/Web/API/HTMLElement/enterKeyHint) oder das globale Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) ([Firefox Fehler 1648332](https://bugzil.la/1648332)).
- Die statische Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) wird nun unterstützt. Dies bietet eine einfache und einheitliche Methode zur Funktionsprüfung, ob ein Browser bestimmte Skripttypen wie JavaScript-Module oder klassische Skripte unterstützt ([Firefox Fehler 1729239](https://bugzil.la/1729239)).
- Die Eigenschaft [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) wird nun unterstützt, wodurch Code prüfen kann, ob die `delegatesFocus`-Eigenschaft gesetzt wurde, als der [Shadow DOM angehängt wurde](/de/docs/Web/API/Element/attachShadow) ([Firefox Fehler 1413836](https://bugzil.la/1413836)).

### WebDriver-Konformität (Marionette)

- `WebDriver:GetWindowHandle` und `WebDriver:GetWindowHandles` geben nun Handles für Browserfenster statt für Tabs zurück, wenn der Chrome-Modus aktiviert ist ([Firefox Fehler 1729291](https://bugzil.la/1729291))

### HTTP

- Die `cache`-Direktive des [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Antwort-Headers ist standardmäßig deaktiviert.
  Sie kann durch die Einstellung `privacy.clearsitedata.cache.enabled` aktiviert werden ([Firefox Fehler 1729291](https://bugzil.la/1729291)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `partitionKey`, die First-Party-URL eines Cookies, wenn es in einem nach Top-Level-Site partitionierten Speicher liegt, wurde zu {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}} und {{WebExtAPIRef('cookies.cookie')}} hinzugefügt. ([Firefox Fehler 1669716](https://bugzil.la/1669716))
- Wenn ein Kontextmenü aktiviert wird, gibt {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} den Rohwert des `src`-Attributes des angeklickten Elements zurück, anstatt der aktuellen URL (nach Weiterleitungen). ([Firefox Fehler 1659155](https://bugzil.la/1659155))

## Ältere Versionen

{{Firefox_for_developers}}
