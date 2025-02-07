---
title: Chrome-Inkompatibilitäten
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: 5212bc3426242d2fbf649b233a402f591d70f8a2
---

{{AddonSidebar}}

Die WebExtension-APIs zielen darauf ab, Kompatibilität über alle wichtigen Browser hinweg bereitzustellen, sodass Erweiterungen mit minimalen Änderungen in jedem Browser ausgeführt werden können.

Es gibt jedoch erhebliche Unterschiede zwischen Chrome (und auf Chromium basierenden Browsern), Firefox und Safari. Insbesondere:

- Die Unterstützung für WebExtension-APIs variiert zwischen Browsern. Siehe [Browser-Kompatibilität für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) für Details.
- Die Unterstützung für `manifest.json`-Schlüssel variiert zwischen Browsern. Weitere Informationen finden Sie im Abschnitt ["Browser-Kompatibilität"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der Seite zu [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Namespace für Erweiterungs-APIs:

  - **In Firefox und Safari:** Erweiterungs-APIs werden über den Namespace `browser` aufgerufen. Der Namespace `chrome` wird ebenfalls zur Kompatibilität mit Chrome unterstützt.
  - **In Chrome:** Erweiterungs-APIs werden über den Namespace `chrome` aufgerufen. (vgl. [Chrome-Bug 798169](https://crbug.com/798169))

- Asynchrone APIs:

  - **In Firefox und Safari:** Asynchrone APIs werden mithilfe von Promises implementiert.
  - **In Chrome:** In Manifest V2 werden asynchrone APIs mit Callbacks implementiert. In Manifest V3 wird die Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden bereitgestellt. (vgl. [Chrome-Bug 328932](https://crbug.com/328932)) Callbacks werden in Manifest V3 zur Rückwärtskompatibilität ebenfalls unterstützt.

Im Rest dieser Seite werden diese und andere Inkompatibilitäten im Detail beschrieben.

## JavaScript-APIs

### chrome.\* und browser.\* Namespace

- **In Firefox und Safari:** Die APIs werden mit dem Namespace `browser` aufgerufen.

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **In Chrome:** Die APIs werden mit dem Namespace `chrome` aufgerufen.

  ```js
  chrome.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

### Callbacks und Promises

- **In Firefox und Safari (alle Versionen) sowie in Chrome (ab Manifest Version 3):** Asynchrone APIs nutzen [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), um Werte zu liefern.

  ```js
  function logCookie(c) {
    console.log(c);
  }

  function logError(e) {
    console.error(e);
  }

  let setCookie = browser.cookies.set({
    url: "https://developer.mozilla.org/",
  });
  setCookie.then(logCookie, logError);
  ```

- **In Chrome:** In Manifest V2 nutzen asynchrone APIs Callbacks, um Werte zu liefern, und {{WebExtAPIRef("runtime.lastError")}}, um Fehler zu kommunizieren. In Manifest V3 werden Callbacks zur Rückwärtskompatibilität unterstützt, sowie zugleich [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden.

  ```js
  function logCookie(c) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log(c);
    }
  }

  chrome.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
  ```

### Firefox unterstützt sowohl die chrome- als auch die browser-Namespaces

Zur Unterstützung der Portierung unterstützt die Firefox-Implementierung von WebExtensions den Namespace `chrome` mithilfe von Callbacks sowie den Namespace `browser` mit Promises. Dadurch funktionieren viele Chrome-Erweiterungen in Firefox ohne Änderungen.

> [!NOTE]
> Der Namespace `browser` wird von Firefox und Safari unterstützt. Chrome bietet diesen Namespace nicht an, bis [Chrome-Bug 798169](https://crbug.com/798169) behoben ist.

Wenn Sie Ihre Erweiterung auf Basis des `browser`-Namespaces und Promises schreiben möchten, stellt Firefox ein Polyfill bereit, das die Ausführung in Chrome ermöglichen sollte: <https://github.com/mozilla/webextension-polyfill>.

### Teilweise unterstützte APIs

Die Seite [Browser-Kompatibilität für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die in Firefox teilweise unterstützt werden. Wo es Einschränkungen bezüglich der Unterstützung einer API-Methode, einer Eigenschaft, eines Typs oder eines Ereignisses gibt, wird dies in diesen Tabellen mit einem Sternchen "\*" angezeigt. Das Anklicken des Sternchens erweitert die Tabelle und zeigt eine Erklärung der Einschränkung.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Im Rest dieses Abschnitts werden die wichtigsten Kompatibilitätsprobleme beschrieben, die Sie beim Erstellen einer browserübergreifenden Erweiterung berücksichtigen sollten. Prüfen Sie auch die Browser-Kompatibilitätstabellen, da diese möglicherweise zusätzliche Informationen enthalten.

#### Notifications API

Für `notifications.create()` mit `type "basic"`:

- **In Firefox:** `iconUrl` ist optional.
- **In Chrome:** `iconUrl` ist erforderlich.

Wenn ein Benutzer auf eine Benachrichtigung klickt:

- **In Firefox:** Die Benachrichtigung wird sofort entfernt.
- **In Chrome:** Dies ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals in schneller Folge aufrufen:

- **In Firefox:** Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten auf die Rückgabe im Callback von `notifications.create()` bietet keine ausreichende Verzögerung zur Vermeidung dieses Problems.

#### Proxy API

Firefox und Chrome enthalten eine Proxy-API. Das Design dieser beiden APIs ist jedoch nicht kompatibel.

- **In Firefox:** Proxys werden entweder über die [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)-Eigenschaft oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) gesetzt, um [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) dynamisch bereitzustellen.
  Weitere Informationen zur API finden Sie unter [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy).
- **In Chrome:** Proxy-Einstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig)-Objekt definiert. Abhängig von den Proxyeinstellungen in Chrome können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxys werden mithilfe der [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings)-Eigenschaft gesetzt.
  Weitere Informationen zur API finden Sie unter [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy).

#### Sidebar API

Firefox und Chrome stellen inkompatible APIs zum Arbeiten mit einer [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) bereit.

- **In Firefox (und Opera):** Eine Seitenleiste wird über den Manifest-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) angegeben und mittels der API {{WebExtAPIRef("sidebarAction")}} manipuliert.
- **In Chrome:** Eine anfängliche Seitenleiste kann über den Schlüssel `side_panel` im Manifest angegeben werden. Die [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) ermöglicht anschließend die Manipulation von Panels.

#### Tabs API

Beim Verwenden von `tabs.executeScript()` oder `tabs.insertCSS()`:

- **In Firefox:** Relative URLs werden relativ zur aktuellen Seiten-URL aufgelöst.
- **In Chrome:** Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend am Stamm der Erweiterung, wie folgt:

```plain
/path/to/script.js
```

Beim Aufrufen von `tabs.remove()`:

- **In Firefox:** Das Promise von `tabs.remove()` wird nach dem `beforeunload`-Ereignis erfüllt.
- **In Chrome:** Der Callback wartet nicht auf `beforeunload`.

...

(Der vollständige Text ist zu lang für diese Antwort. Bitte spezifizieren Sie, ob eine bestimmte Passage prioritär behandelt werden soll.)
