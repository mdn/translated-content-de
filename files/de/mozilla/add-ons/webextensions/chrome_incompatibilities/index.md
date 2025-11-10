---
title: Chrome-Inkompatibilitäten
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: 5da938df742b8cfe824e4e1447b42d1b779a08c3
---

Die WebExtension-APIs zielen darauf ab, Kompatibilität über alle Hauptbrowser hinweg bereitzustellen, damit Erweiterungen in jedem Browser mit minimalen Änderungen ausgeführt werden können.

Es gibt jedoch erhebliche Unterschiede zwischen Chrome (und auf Chromium basierenden Browsern), Firefox und Safari. Im Besonderen:

- Die Unterstützung für WebExtension-APIs unterscheidet sich je nach Browser. Details finden Sie unter [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Die Unterstützung für `manifest.json` Schlüssel unterscheidet sich je nach Browser. Details finden Sie im Abschnitt ["Browser-Kompatibilität"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der Seite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Namensraum der Erweiterungs-API:
  - **In Firefox und Safari:** Auf Erweiterungs-APIs wird unter dem Namensraum `browser` zugegriffen. Der Namensraum `chrome` wird ebenfalls für die Kompatibilität mit Chrome unterstützt.
  - **In Chrome:** Auf Erweiterungs-APIs wird unter dem Namensraum `chrome` zugegriffen. (siehe [Chrome Bug 798169](https://crbug.com/798169))

- Asynchrone APIs:
  - **In Firefox und Safari:** Asynchrone APIs werden mit Promises implementiert.
  - **In Chrome:** In Manifest V2 werden asynchrone APIs mit Rückruffunktionen implementiert. In Manifest V3 wird die Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden bereitgestellt. (siehe [Chrome Bug 328932](https://crbug.com/328932)) Rückruffunktionen werden in Manifest V3 für die Abwärtskompatibilität unterstützt.

Der Rest dieser Seite beschreibt diese und andere Inkompatibilitäten im Detail.

## JavaScript-APIs

### chrome.\* und browser.\* Namensraum

- **In Firefox und Safari:** Die APIs werden mit dem Namensraum `browser` aufgerufen.

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **In Chrome:** Die APIs werden mit dem Namensraum `chrome` aufgerufen.

  ```js
  chrome.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

### Rückrufe und Promises

- **In Firefox und Safari (alle Versionen) und Chrome (ab Manifest Version 3):** Asynchrone APIs verwenden [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), um Werte zurückzugeben.

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

- **In Chrome:** In Manifest V2 verwenden asynchrone APIs Rückruffunktionen, um Werte zurückzugeben, und {{WebExtAPIRef("runtime.lastError")}}, um Fehler zu kommunizieren. In Manifest V3 werden Rückruffunktionen für die Abwärtskompatibilität unterstützt, zusammen mit der Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden.

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

### Firefox unterstützt sowohl chrome- als auch browser-Namensräume

Als Unterstützung für das Portieren unterstützt die Firefox-Implementierung von WebExtensions `chrome` mit Rückruffunktionen und `browser` mit Promises. Das bedeutet, dass viele Chrome-Erweiterungen in Firefox ohne Änderungen funktionieren.

> [!NOTE]
> Der Namensraum `browser` wird von Firefox und Safari unterstützt. Chrome bietet den `browser`-Namensraum nicht an, bis [Chrome Bug 798169](https://crbug.com/798169) behoben ist.

Wenn Sie sich entscheiden, Ihre Erweiterung so zu schreiben, dass sie `browser` und Promises verwendet, stellt Firefox ein Polyfill bereit, das sie in Chrome ausführen soll: <https://github.com/mozilla/webextension-polyfill>.

### Teilweise unterstützte APIs

Die Seite [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die in Firefox in irgendeiner Form unterstützt werden. Wo es Einschränkungen bei der Unterstützung einer API-Methode, eines Eigenschafts, eines Typs oder eines Ereignisses gibt, wird dies in diesen Tabellen mit einem Sternchen "\*" angegeben. Das Auswählen des Sternchens erweitert die Tabelle, um eine Erläuterung der Einschränkung anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Der Rest dieses Abschnitts beschreibt die Hauptkompatibilitätsprobleme, die Sie bei der Entwicklung einer plattformübergreifenden Erweiterung berücksichtigen müssen. Vergessen Sie auch nicht, die Browser-Kompatibilitätstabellen zu überprüfen, da diese möglicherweise zusätzliche Kompatibilitätsinformationen enthalten.

#### Notifications API

Für `notifications.create()` mit `type "basic"`:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Benutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort gelöscht.
- **In Chrome**: Dies ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals schnell hintereinander aufrufen:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten auf nachfolgende Aufrufe innerhalb der `notifications.create()` Rückruffunktion ist keine ausreichende Verzögerung, um dies zu verhindern.

#### Proxy API

Firefox und Chrome enthalten eine Proxy-API. Das Design dieser beiden APIs ist jedoch nicht kompatibel.

- **In Firefox**: Proxys werden mithilfe der Eigenschaft [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) dynamisch bereitgestellt, um [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) bereitzustellen.
  Weitere Informationen zur API finden Sie unter [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy).
- **In Chrome**: Proxy-Einstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig)-Objekt definiert. Abhängig von den Proxy-Einstellungen von Chrome können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxys werden über die Eigenschaft [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings) gesetzt.
  Weitere Informationen zur API finden Sie unter [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy).

#### Sidebar API

Firefox und Chrome bieten inkompatible APIs für die Arbeit mit einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars).

- **In Firefox (und Opera)**: Eine Sidebar wird mit dem Manifest-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) angegeben und mit der API {{WebExtAPIRef("sidebarAction")}} manipuliert.
- **In Chrome**: Eine anfängliche Sidebar kann mit dem Manifest-Schlüssel `side_panel` spezifiziert werden. Die [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) ermöglicht es dann, Panels zu manipulieren.

#### Tabs API

Beim Verwenden von `tabs.executeScript()` oder `tabs.insertCSS()`:

- **In Firefox**: Relative URLs werden relativ zur aktuellen Seiten-URL aufgelöst.
- **In Chrome**: Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um plattformübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend am Stamm der Erweiterung, so:

```plain
/path/to/script.js
```

Beim Aufrufen von `tabs.remove()`:

- **In Firefox**: Das Promise von `tabs.remove()` wird nach dem `beforeunload`-Ereignis erfüllt.
- **In Chrome**: Der Rückruf wartet nicht auf `beforeunload`.

#### WebRequest API

- **In Firefox:**
  - Anfragen können nur umgeleitet werden, wenn ihre ursprüngliche URL das Schema `http:` oder `https:` verwendet.
  - Die Berechtigung `activeTab` erlaubt es nicht, Netzwerkanforderungen im aktuellen Tab abzufangen. (Siehe [Bug 1617479](https://bugzil.la/1617479))
  - Ereignisse werden nicht für Systemanfragen ausgelöst (zum Beispiel bei Erweiterungsupgrades oder Suchvorschlägen in der Suchleiste).
    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die {{WebExtAPIRef("webRequest.onAuthRequired")}} für die Proxy-Autorisierung abfangen müssen. Siehe die Dokumentation zu {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die Datei `manifest.json` der Erweiterung einen Schlüssel [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) mit der URL der Erweiterungsseite enthalten.

    > [!NOTE]
    > _Jede_ Website kann einen Link zu dieser URL herstellen oder zu dieser URL umleiten, und Erweiterungen sollten jede Eingabe (z. B. POST-Daten) so behandeln, als ob sie von einer nicht vertrauenswürdigen Quelle stammt, wie es normale Webseiten tun sollten.

  - Einige der `browser.webRequest.*` APIs ermöglichen das Zurückgeben von Promises, die `webRequest.BlockingResponse` asynchron auflösen.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt asynchrone `webRequest.BlockingResponse`, indem `'asyncBlocking'` über einen Rückruf anstelle eines Promise bereitgestellt wird.

#### Windows API

- **In Firefox:** `onFocusChanged` der API {{WebExtAPIRef("windows")}} wird bei einer Fokusänderung mehrfach ausgelöst.

### Nicht unterstützte APIs

#### DeclarativeContent API

- **In Firefox:** Die Chrome-API [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) [ist nicht implementiert](https://bugzil.la/1435864). Darüber hinaus [wird Firefox die API declarativeContent.RequestContentScript nicht unterstützen](https://bugzil.la/1323433#c16) (die selten verwendet wird und in stabilen Versionen von Chrome nicht verfügbar ist).

### Verschiedene Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in injizierten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in injizierten CSS-Dateien werden relativ zur _Seite, in die sie eingespeist werden_, aufgelöst.

#### Unterstützung für Dialoge in Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm), und [`prompt()`](/de/docs/Web/API/Window/prompt) werden in Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen werden einer zufälligen {{Glossary("UUID", "UUID")}} zugeordnet, die sich bei jeder Instanz von Firefox ändert: `moz-extension://«random-UUID»/«path»`. Diese Zufälligkeit kann Sie daran hindern, Dinge zu tun, wie z. B. die URL Ihrer Erweiterung zur CSP-Richtlinie einer anderen Domäne hinzuzufügen.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie als `chrome-extension://«your-extension-id»/«path»` zugänglich. Die Erweiterungs-ID ist für eine Erweiterung fixiert.

#### Manifest "key" Eigenschaft

- **In Firefox:** Da Firefox zufällige UUIDs für `web_accessible_resources` verwendet, wird diese Eigenschaft nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den `browser_specific_settings.gecko.id` Manifest-Schlüssel festlegen (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Beim Arbeiten mit einer ungepackten Erweiterung kann das Manifest eine [`"key"` Eigenschaft](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID auf verschiedenen Maschinen zu fixieren. Dies ist hauptsächlich nützlich, wenn mit `web_accessible_resources` gearbeitet wird.

#### HTTP(S)-Anfragen von Content Scripts

- **In Firefox:** Wenn ein Content Script eine HTTP(S)-Anfrage stellt, _muss_ eine absolute URL angegeben werden.
- **In Chrome:** Wenn ein Content Script eine Anfrage stellt (zum Beispiel unter Verwendung von [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) zu einer relativen URL (wie `/api`), wird sie an `https://example.com/api` gesendet.

#### Umgebung von Content Scripts

- **In Firefox:** Der globale Scope der [Content Script Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht strikt gleich `window` ([Firefox Bug 1208775](https://bugzil.la/1208775)). Genauer gesagt setzt sich der globale Scope (`globalThis`) aus den üblichen Standard-JavaScript-Funktionen sowie `window` als Prototyp des globalen Scopes zusammen. Die meisten DOM-APIs werden über `window` von der Seite geerbt, durch [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox), um das Content Script vor Modifikationen der Webseite zu schützen. Ein Content Script kann entweder JavaScript-Objekte aus seinem globalen Scope oder Xray-umwickelte Versionen von der Webseite treffen.
- **In Chrome:** Der globale Scope ist `window`, und die verfügbaren DOM-APIs sind im Allgemeinen unabhängig von der Webseite (abgesehen vom gemeinsamen DOM). Content-Skripte können nicht direkt auf JavaScript-Objekte der Webseite zugreifen.

#### Seitenereignishandler von Content Scripts

- **In Firefox:** Es wird kein separates Ereignishandling pro Welt gepflegt. Das bedeutet, dass das zuletzt angeforderte Content Script `element.onclick = xxx` die Seitenereignishandler oder die von anderen Erweiterungen überschreibt.
- **In Chrome:** Es wird ein separates Ereignishandling pro Welt gepflegt, sodass Chrome Ereignishandler für eine Seite und jede anfordernde Erweiterung pflegt.

Um diese Inkonsistenz zu umgehen, verwenden Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Ereignis-Listener zu registrieren. Weitere Informationen finden Sie bei [Firefox Bug 1965975](https://bugzil.la/1965975#c5).

#### Ausführen von Code in einer Webseite aus einem Content Script

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Content Scripts aus, und `window.eval` führt Code im Kontext der Seite aus. Siehe [Verwendung von `eval` in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen immer Code im Kontext des Content Scripts aus, nicht im Kontext der Seite.

#### Freigabe von Variablen zwischen Content Scripts

- **In Firefox:** Sie können keine Variablen zwischen Content Scripts freigeben, indem Sie sie einem Script zu `this.{variableName}` zuweisen und dann versuchen, sie mit `window.{variableName}` in einem anderen Script aufzurufen. Dies ist eine Einschränkung der Sandbox-Umgebung in Firefox. Diese Einschränkung könnte entfernt werden; siehe [Firefox Bug 1208775](https://bugzil.la/1208775).

#### Lebenszyklus von Content Scripts während der Navigation

- **In Firefox:** Content Scripts bleiben in einer Webseite erheblich weitereingebetteter nach dem Benutzer wegge navigiert hat. Die Eigenschaften des Fensterobjekts werden jedoch zerstört. Wenn ein Content Script zum Beispiel `window.prop1 = "prop"` einstellt und der Benutzer dann weg navigiert und zur Seite zurückkehrt, ist `window.prop1` undefiniert. Dieses Problem wird im [Firefox Bug 1525400](https://bugzil.la/1525400) verfolgt.

  Um das Verhalten von Chrome zu simulieren, hören Sie auf die [pageshow](/de/docs/Web/API/Window/pageshow_event)- und [pagehide](/de/docs/Web/API/Window/pagehide_event)-Ereignisse. Simulieren Sie dann das Einfügen oder Zerstören des Content Scripts.

- **In Chrome:** Content Scripts werden zerstört, wenn der Benutzer von einer Webseite navigiert. Wenn der Benutzer durch Klick auf die Zurück-Taste durch die Historie zur Seite zurückkehrt, wird das Content Script in die Webseite eingefügt.

#### "pro-Tab" Zoomverhalten

- **In Firefox:** Der Zoomfaktor bleibt über das Seitenladen und die Navigation innerhalb des Tabs hinweg erhalten.
- **In Chrome:** Zoomänderungen werden bei der Navigation zurückgesetzt; das Navigieren zu einer Seite lädt immer Seiten mit ihren Herkunfts-Zoomfaktoren.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json Schlüssel

Die Hauptseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle, die die Browserunterstützung für `manifest.json` Schlüssel beschreibt. Wo es Einschränkungen bei der Unterstützung eines bestimmten Schlüssels gibt, wird dies in der Tabelle mit einem Sternchen "\*" angegeben. Das Auswählen des Sternchens erweitert die Tabelle, um eine Erläuterung der Einschränkung anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Messaging

### Argumente für verbindungsbasierte Nachrichten

**Auf Linux und Mac:** Chrome übergibt ein Argument an die native App, welches der Ursprung der Erweiterung ist, die es gestartet hat, in der Form `chrome-extension://«extensionID/»` (einschließlich erforderlichem Schrägstrich). Dies ermöglicht der App, die Erweiterung zu identifizieren.

**Auf Windows:** Chrome übergibt zwei Argumente:

1. Den Ursprung der Erweiterung
2. Ein Handle zum nativen Chrome Fenster, das die App gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Schlüssel heißt `allowed_extensions`.
- **In Chrome:** Der Manifest-Schlüssel heißt `allowed_origins`.

### Speicherort des App-Manifests

- **In Chrome:** Das App-Manifest wird an einem anderen Ort erwartet. Siehe [Speicherort des Native Messaging Hosts](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in den Chrome-Dokumenten.

### App-Persistenz

- **In Firefox:** Wenn eine Native Messaging-Verbindung geschlossen wird, beendet Firefox die Subprozesse, wenn diese sich nicht trennen. Auf Windows legt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Wenn die native Anwendung andere Prozesse startet und möchte, dass diese geöffnet bleiben, nachdem die native Anwendung beendet ist, muss die native Anwendung `CreateProcess` anstelle von `ShellExecute` verwenden, um den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags)-Flag zu starten.

## Datenklon-Algorithmus

Einige Erweiterungs-APIs erlauben es einer Erweiterung, Daten von einem Teil der Erweiterung zu einem anderen zu senden, wie {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die `postMessage()`-Methode von {{WebExtAPIRef("runtime.port")}} und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [Strukturierter Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird verwendet.
- **In Chrome:** Der [JSON-Serialisierungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. Es könnte in Zukunft auf strukturiertes Klonen umgeschaltet werden ([Issue 248548](https://crbug.com/248548)).

Der Strukturierte Klon-Algorithmus unterstützt mehr Typen als der JSON-Serialisierungsalgorithmus. Eine bemerkenswerte Ausnahme sind (DOM-)Objekte mit einer `toJSON`-Methode. DOM-Objekte sind standardmäßig weder klonbar noch JSON-serialisierbar, aber mit einer `toJSON()`-Methode können diese JSON-serialisiert werden (aber immer noch nicht mit dem strukturierten Klon-Algorithmus geklont werden). Beispiele für JSON-serialisierbare Objekte, die nicht strukuriert klonbar sind, umfassen Instanzen von [`URL`](/de/docs/Web/API/URL) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

Erweiterungen, die auf die `toJSON()`-Methode des JSON-Serialisierungsalgorithmus angewiesen sind, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} verwenden, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann, da ein geparster JSON-Wert immer strukturell klonbar ist.
