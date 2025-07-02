---
title: Firefox 94 für Entwickler
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
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

- Die Funktion [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) und [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) wird jetzt für das Kopieren komplexer JavaScript-Objekte unterstützt ([Firefox-Bug 1722576](https://bugzil.la/1722576)).

#### DOM

- Entwickler können nun einen Hinweis für das Label/Icon der Eingabetaste auf virtuellen Tastaturen angeben, entweder durch [`HTMLElement.enterkeyhint`](/de/docs/Web/API/HTMLElement/enterKeyHint) oder das globale Attribut [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint) ([Firefox-Bug 1648332](https://bugzil.la/1648332)).
- Die statische Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) wird jetzt unterstützt. Diese bietet eine einfache und einheitliche Methode zur Überprüfung, ob ein Browser bestimmte Skripttypen wie JavaScript-Module oder klassische Skripte unterstützt ([Firefox-Bug 1729239](https://bugzil.la/1729239)).
- Die Eigenschaft [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) wird jetzt unterstützt, sodass der Code überprüfen kann, ob die Eigenschaft `delegatesFocus` gesetzt wurde, als der [Shadow DOM angehängt wurde](/de/docs/Web/API/Element/attachShadow) ([Firefox-Bug 1413836](https://bugzil.la/1413836)).

### WebDriver-Konformität (Marionette)

- `WebDriver:GetWindowHandle` und `WebDriver:GetWindowHandles` geben jetzt Handles für Browserfenster statt für Tabs zurück, wenn der Chrome-Bereich aktiviert ist ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

### HTTP

- Die Anweisung `cache` des [`Clear-Site-Data`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data)-Antwort-Headers wurde standardmäßig deaktiviert. Sie kann mit der Einstellung `privacy.clearsitedata.cache.enabled` aktiviert werden ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `partitionKey`, die Erstparteien-URL eines Cookies, wenn es in einem nach obersten Webseiten partitionierten Speicher abgelegt ist, wurde hinzugefügt zu {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, und {{WebExtAPIRef('cookies.cookie')}}. ([Firefox-Bug 1669716](https://bugzil.la/1669716))
- Wenn ein Kontextmenü aktiviert wird, gibt {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} den rohen Wert des `src`-Attributs des angeklickten Elements zurück, anstatt die aktuelle URL (nach Weiterleitungen). ([Firefox-Bug 1659155](https://bugzil.la/1659155))

## Ältere Versionen

{{Firefox_for_developers}}
