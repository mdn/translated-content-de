---
title: Firefox 94 für Entwickler
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
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

- Die Funktion [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) und [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) wird jetzt unterstützt, um komplexe JavaScript-Objekte zu kopieren ([Firefox-Bug 1722576](https://bugzil.la/1722576)).

#### DOM

- Entwickler können nun einen Hinweis für das "Eingabetaste"-Label/Icon auf virtuellen Tastaturen angeben, entweder mit [`HTMLElement.enterkeyhint`](/de/docs/Web/API/HTMLElement/enterKeyHint) oder dem globalen Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) ([Firefox-Bug 1648332](https://bugzil.la/1648332)).
- Die statische Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) wird nun unterstützt. Diese Methode bietet eine einfache und einheitliche Möglichkeit zur Überprüfung, ob ein Browser bestimmte Skripttypen unterstützt, wie z.B. JavaScript-Module oder klassische Skripte ([Firefox-Bug 1729239](https://bugzil.la/1729239)).
- Die Eigenschaft [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) wird nun unterstützt, was es ermöglicht, per Code zu überprüfen, ob die `delegatesFocus`-Eigenschaft gesetzt wurde, als das [Shadow-DOM angehängt](/de/docs/Web/API/Element/attachShadow) wurde ([Firefox-Bug 1413836](https://bugzil.la/1413836)).

### WebDriver-Konformität (Marionette)

- `WebDriver:GetWindowHandle` und `WebDriver:GetWindowHandles` geben nun Handles für Browserfenster anstatt von Tabs zurück, wenn der Chrome-Bereich aktiviert ist ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

### HTTP

- Die `cache`-Direktive des [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-Antwort-Headers ist standardmäßig deaktiviert.
  Sie kann über die Einstellung `privacy.clearsitedata.cache.enabled` aktiviert werden ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `partitionKey`, die First-Party-URL eines Cookies, wenn es in einem Speicher partitioniert durch die oberste Seite ist, wurde zu {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, und {{WebExtAPIRef('cookies.cookie')}} hinzugefügt. ([Firefox-Bug 1669716](https://bugzil.la/1669716))
- Wenn ein Kontextmenü aktiviert wird, gibt {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} den rohen Wert des `src`-Attributs des angeklickten Elements zurück, anstatt der aktuellen URL (nach Umleitungen). ([Firefox-Bug 1659155](https://bugzil.la/1659155))

## Ältere Versionen

{{Firefox_for_developers}}
