---
title: Firefox 94 für Entwickler
short-title: Firefox 94
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 94, die Entwickler betreffen werden. Firefox 94 wurde am 2. November 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) und [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) wird jetzt zur Kopie komplexer JavaScript-Objekte unterstützt ([Firefox-Bug 1722576](https://bugzil.la/1722576)).

#### DOM

- Entwickler können nun einen Hinweis für das Enter-Tastensymbol auf virtuellen Tastaturen vorgeben, entweder mittels [`HTMLElement.enterkeyhint`](/de/docs/Web/API/HTMLElement/enterKeyHint) oder dem globalen Attribut [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) ([Firefox-Bug 1648332](https://bugzil.la/1648332)).
- Die statische Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) wird jetzt unterstützt. Diese bietet eine einfache und einheitliche Methode zur Überprüfung, ob ein Browser bestimmte Skripttypen wie JavaScript-Module oder klassische Skripte unterstützt ([Firefox-Bug 1729239](https://bugzil.la/1729239)).
- Die Eigenschaft [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) wird nun unterstützt, sodass der Code überprüfen kann, ob die `delegatesFocus`-Eigenschaft gesetzt wurde, als der [Shadow DOM angehängt wurde](/de/docs/Web/API/Element/attachShadow) ([Firefox-Bug 1413836](https://bugzil.la/1413836)).

### WebDriver-Konformität (Marionette)

- `WebDriver:GetWindowHandle` und `WebDriver:GetWindowHandles` geben jetzt Handles für Browser-Fenster zurück, anstatt für Tabs, wenn der Chrome-Bereich aktiviert ist ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

### HTTP

- Die `cache`-Direktive des [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Antwort-Headers wurde standardmäßig deaktiviert. Sie kann über die Präferenz `privacy.clearsitedata.cache.enabled` aktiviert werden ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `partitionKey`, die First-Party-URL eines Cookies, wenn es im Speicher liegt, der nach Top-Level-Site partitioniert ist, wurde zu {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, und {{WebExtAPIRef('cookies.cookie')}} hinzugefügt. ([Firefox-Bug 1669716](https://bugzil.la/1669716))
- Wenn ein Kontextmenü aktiviert wird, gibt {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} den Rohwert des `src`-Attributs des angeklickten Elements zurück, anstatt der aktuellen URL (nach Umleitungen). ([Firefox-Bug 1659155](https://bugzil.la/1659155))
