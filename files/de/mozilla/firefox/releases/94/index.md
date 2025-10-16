---
title: Firefox 94 Versionshinweise für Entwickler
short-title: Firefox 94
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 94, die Entwickler betreffen werden. Firefox 94 wurde am 2. November 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktionen [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) und [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) werden jetzt unterstützt, um komplexe JavaScript-Objekte zu kopieren ([Firefox Bug 1722576](https://bugzil.la/1722576)).

#### DOM

- Entwickler können jetzt einen Hinweis für das Label/Icon der Enter-Taste auf virtuellen Tastaturen angeben, entweder durch [`HTMLElement.enterkeyhint`](/de/docs/Web/API/HTMLElement/enterKeyHint) oder das globale Attribut [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) ([Firefox Bug 1648332](https://bugzil.la/1648332)).
- Die statische Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) wird nun unterstützt. Diese bietet eine einfache und einheitliche Methode für das Überprüfen, ob ein Browser bestimmte Arten von Skripten, wie JavaScript-Module oder klassische Skripte, unterstützt ([Firefox Bug 1729239](https://bugzil.la/1729239)).
- Die Eigenschaft [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) wird jetzt unterstützt, was es ermöglicht, im Code zu überprüfen, ob die Eigenschaft `delegatesFocus` gesetzt wurde, als der [Shadow-DOM angehängt wurde](/de/docs/Web/API/Element/attachShadow) ([Firefox Bug 1413836](https://bugzil.la/1413836)).

### WebDriver-Konformität (Marionette)

- `WebDriver:GetWindowHandle` und `WebDriver:GetWindowHandles` geben jetzt Handles für Browserfenster statt Tabs zurück, wenn der Chrome-Bereich aktiviert ist. ([Firefox Bug 1729291](https://bugzil.la/1729291))

### HTTP

- Die `cache`-Direktive des [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Antwortheaders ist standardmäßig deaktiviert.
  Sie kann über die Einstellung `privacy.clearsitedata.cache.enabled` aktiviert werden ([Firefox Bug 1729291](https://bugzil.la/1729291)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `partitionKey`, die First-Party-URL eines Cookies, wenn es in einem nach oberster Site partitionierten Speicher ist, wurde zu {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, und {{WebExtAPIRef('cookies.cookie')}} hinzugefügt. ([Firefox Bug 1669716](https://bugzil.la/1669716))
- Wenn ein Kontextmenü aktiviert wird, gibt {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} den Rohwert des `src`-Attributs des angeklickten Elements zurück, anstatt der aktuellen URL (nach Weiterleitungen). ([Firefox Bug 1659155](https://bugzil.la/1659155))
