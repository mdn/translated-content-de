---
title: Firefox 94 für Entwickler
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
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

- Die Funktion [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) und [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone) wird jetzt zur Kopie komplexer JavaScript-Objekte unterstützt ([Firefox-Bug 1722576](https://bugzil.la/1722576)).

#### DOM

- Entwickler können jetzt einen Hinweis für das Enter-Tasten-Label/Icon auf virtuellen Tastaturen bereitstellen, entweder über [`HTMLElement.enterkeyhint`](/de/docs/Web/API/HTMLElement/enterKeyHint) oder das globale Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) ([Firefox-Bug 1648332](https://bugzil.la/1648332)).
- Die statische Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) wird nun unterstützt. Sie bietet eine einfache und einheitliche Methode zur Funktionsüberprüfung darüber, ob ein Browser bestimmte Arten von Skripten unterstützt, wie JavaScript-Module oder klassische Skripte ([Firefox-Bug 1729239](https://bugzil.la/1729239)).
- Die Eigenschaft [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) wird jetzt unterstützt, sodass der Code überprüfen kann, ob die Eigenschaft `delegatesFocus` gesetzt wurde, als das [Shadow DOM angehängt](/de/docs/Web/API/Element/attachShadow) wurde ([Firefox-Bug 1413836](https://bugzil.la/1413836)).

### WebDriver-Konformität (Marionette)

- `WebDriver:GetWindowHandle` und `WebDriver:GetWindowHandles` geben jetzt Handles für Browserfenster anstelle von Tabs zurück, wenn der Chrome-Bereich aktiviert ist ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

### HTTP

- Die `cache`-Direktive des `Clear-Site-Data`-Antwort-Headers wurde standardmäßig deaktiviert.
  Sie kann mithilfe der Einstellung `privacy.clearsitedata.cache.enabled` aktiviert werden ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `partitionKey`, die First-Party-URL eines Cookies, wenn es im Speicher partitioniert nach der obersten Seite ist, wurde zu {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, und {{WebExtAPIRef('cookies.cookie')}} hinzugefügt. ([Firefox-Bug 1669716](https://bugzil.la/1669716))
- Wenn ein Kontextmenü aktiviert wird, gibt {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} den rohen Wert des `src`-Attributs des angeklickten Elements zurück, anstatt der aktuellen URL (nach Weiterleitungen). ([Firefox-Bug 1659155](https://bugzil.la/1659155))

## Ältere Versionen

{{Firefox_for_developers}}
