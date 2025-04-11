---
title: Firefox 94 für Entwickler
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 94, die Entwickler betreffen werden. Firefox 94 wurde am 2. November 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktionen [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) und [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) werden nun unterstützt, um komplexe JavaScript-Objekte zu kopieren ([Firefox Bug 1722576](https://bugzil.la/1722576)).

#### DOM

- Entwickler können nun einen Hinweis für das Enter-Tasten-Label/Icon auf virtuellen Tastaturen geben, indem sie entweder [`HTMLElement.enterkeyhint`](/de/docs/Web/API/HTMLElement/enterKeyHint) oder das globale Attribut [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) verwenden ([Firefox Bug 1648332](https://bugzil.la/1648332)).
- Die statische Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) wird jetzt unterstützt. Diese Methode bietet eine einfache und einheitliche Methode zur Überprüfung, ob ein Browser bestimmte Skripttypen, wie JavaScript-Module oder klassische Skripte, unterstützt ([Firefox Bug 1729239](https://bugzil.la/1729239)).
- Die Eigenschaft [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) wird nun unterstützt, sodass Code überprüfen kann, ob die Eigenschaft `delegatesFocus` beim [Anhängen des Shadow DOMs](/de/docs/Web/API/Element/attachShadow) gesetzt wurde ([Firefox Bug 1413836](https://bugzil.la/1413836)).

### WebDriver-Konformität (Marionette)

- `WebDriver:GetWindowHandle` und `WebDriver:GetWindowHandles` geben nun Handles für Browserfenster statt für Tabs zurück, wenn der Chrome-Bereich aktiviert ist ([Firefox Bug 1729291](https://bugzil.la/1729291))

### HTTP

- Die `cache`-Direktive des [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Antwort-Headers ist standardmäßig deaktiviert.
  Sie kann aktiviert werden mit der Präferenz `privacy.clearsitedata.cache.enabled` ([Firefox Bug 1729291](https://bugzil.la/1729291)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `partitionKey`, die First-Party-URL eines Cookies, wenn es in einem nach oberster Seite partitionierten Speicher vorhanden ist, wird hinzugefügt zu {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, und {{WebExtAPIRef('cookies.cookie')}}. ([Firefox Bug 1669716](https://bugzil.la/1669716))
- Wenn ein Kontextmenü aktiviert wird, gibt {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} den Rohwert des `src`-Attributs des angeklickten Elements zurück, anstatt der aktuellen URL (nach Weiterleitungen). ([Firefox Bug 1659155](https://bugzil.la/1659155))

## Ältere Versionen

{{Firefox_for_developers}}
