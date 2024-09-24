---
title: Firefox 94 für Entwickler
slug: Mozilla/Firefox/Releases/94
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 94, die Entwickler betreffen werden. Firefox 94 wurde am 2. November 2021 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die globale Funktion {{domxref("structuredClone()")}} wird jetzt unterstützt, um komplexe JavaScript-Objekte zu kopieren ([Firefox-Bug 1722576](https://bugzil.la/1722576)).

#### DOM

- Entwickler können nun einen Hinweis für das "Enter"-Tastenlabel/-symbol auf virtuellen Tastaturen bereitstellen, entweder über [`HTMLElement.enterkeyhint`](/de/docs/Web/API/HTMLElement/enterKeyHint) oder das globale Attribut [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint) ([Firefox-Bug 1648332](https://bugzil.la/1648332)).
- Die statische Methode {{domxref("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}} wird jetzt unterstützt. Diese bietet eine einfache und einheitliche Methode zur Funktionsprüfung, ob ein Browser bestimmte Skripttypen wie JavaScript-Module oder klassische Skripte unterstützt ([Firefox-Bug 1729239](https://bugzil.la/1729239)).
- Die Eigenschaft {{domxref("ShadowRoot.delegatesFocus")}} wird jetzt unterstützt, was es ermöglicht, im Code zu überprüfen, ob die Eigenschaft `delegatesFocus` gesetzt wurde, als der [Shadow DOM angehängt wurde](/de/docs/Web/API/Element/attachShadow) ([Firefox-Bug 1413836](https://bugzil.la/1413836)).

### WebDriver-Konformität (Marionette)

- `WebDriver:GetWindowHandle` und `WebDriver:GetWindowHandles` geben jetzt Handles für Browserfenster statt für Tabs zurück, wenn der Chrome-Bereich aktiviert ist ([Firefox-Bug 1729291](https://bugzil.la/1729291))

### HTTP

- Die `cache`-Direktive des [`Clear-Site-Data`](/de/docs/Web/HTTP/Headers/Clear-Site-Data)-Antwort-Headers ist standardmäßig deaktiviert. Sie kann mit der Einstellung `privacy.clearsitedata.cache.enabled` aktiviert werden ([Firefox-Bug 1729291](https://bugzil.la/1729291)).

## Änderungen für Add-on-Entwickler

- Unterstützung für `partitionKey`, die erst-partei-URL eines Cookies, wenn es in einem durch die oberste Site partitionierten Speicher liegt, wurde zu {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, und {{WebExtAPIRef('cookies.cookie')}} hinzugefügt. ([Firefox-Bug 1669716](https://bugzil.la/1669716))
- Wenn ein Kontextmenü aktiviert wird, gibt {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} den Rohwert des `src`-Attributs des angeklickten Elements zurück, anstatt die aktuelle URL (nach Weiterleitungen). ([Firefox-Bug 1659155](https://bugzil.la/1659155))

## Ältere Versionen

{{Firefox_for_developers}}
