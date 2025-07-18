---
title: Chrome-Inkompatibilitäten
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die WebExtension-APIs zielen darauf ab, Kompatibilität über alle Hauptbrowser hinweg zu bieten, sodass Erweiterungen mit minimalen Änderungen in jedem Browser ausgeführt werden sollten.

Es gibt jedoch bedeutende Unterschiede zwischen Chrome (und Chromium-basierten Browsern), Firefox und Safari. Insbesondere:

- Die Unterstützung für WebExtension-APIs unterscheidet sich zwischen den Browsern. Siehe [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) für Details.
- Die Unterstützung für `manifest.json`-Schlüssel unterscheidet sich zwischen den Browsern. Siehe den Abschnitt ["Browser-Kompatibilität"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Seite für mehr Details.
- Extension-API-Namespace:
  - **In Firefox und Safari:** Auf die Erweiterungs-APIs wird im `browser`-Namespace zugegriffen. Der `chrome`-Namespace wird ebenfalls für die Kompatibilität mit Chrome unterstützt.
  - **In Chrome:** Auf die Erweiterungs-APIs wird im `chrome`-Namespace zugegriffen. (vgl. [Chrome-Bug 798169](https://crbug.com/798169))

- Asynchrone APIs:
  - **In Firefox und Safari:** Asynchrone APIs werden mithilfe von Promises implementiert.
  - **In Chrome:** In Manifest V2 werden asynchrone APIs mit Callbacks implementiert. In Manifest V3 wird Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden bereitgestellt. (vgl. [Chrome-Bug 328932](https://crbug.com/328932)) Callbacks werden in Manifest V3 aus Gründen der Rückwärtskompatibilität unterstützt.

Der Rest dieser Seite beschreibt diese und andere Inkompatibilitäten im Detail.

## JavaScript-APIs

### chrome.\* und browser.\* Namespace

- **In Firefox und Safari:** Auf die APIs wird mithilfe des `browser`-Namespace zugegriffen.

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **In Chrome:** Auf die APIs wird mithilfe des `chrome`-Namespace zugegriffen.

  ```js
  chrome.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

### Callbacks und Promises

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

- **In Chrome:** In Manifest V2 verwenden asynchrone APIs Callbacks, um Werte zurückzugeben und {{WebExtAPIRef("runtime.lastError")}}, um Fehler zu kommunizieren. In Manifest V3 werden Callbacks zur Rückwärtskompatibilität unterstützt, zusammen mit der Unterstützung von [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden.

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

Als Unterstützung beim Portieren unterstützt die Firefox-Implementierung von WebExtensions `chrome` mit Callbacks und `browser` mit Promises. Das bedeutet, dass viele Chrome-Erweiterungen ohne Änderungen in Firefox funktionieren.

> [!NOTE]
> Der `browser`-Namespace wird von Firefox und Safari unterstützt. Chrome bietet den `browser`-Namespace nicht an, bis [Chrome-Bug 798169](https://crbug.com/798169) behoben ist.

Wenn Sie sich entscheiden, Ihre Erweiterung so zu schreiben, dass sie `browser` und Promises verwendet, stellt Firefox ein Polyfill bereit, das es ermöglichen sollte, sie in Chrome auszuführen: <https://github.com/mozilla/webextension-polyfill>.

### Teilweise unterstützte APIs

Die Seite [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die jegliche Unterstützung in Firefox erhalten. Wo es Vorbehalte hinsichtlich der Unterstützung für eine API-Methode, -Eigenschaft, -Typ oder -Ereignis gibt, wird dies in diesen Tabellen mit einem Sternchen "\*" angezeigt. Wenn Sie auf das Sternchen klicken, wird die Tabelle erweitert, um eine Notiz zu den Vorbehalten anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Der Rest dieses Abschnitts beschreibt die Hauptprobleme bei der Kompatibilität, die Sie bei der Erstellung einer browserübergreifenden Erweiterung berücksichtigen müssen. Denken Sie auch daran, die Browser-Kompatibilitätstabellen zu überprüfen, da sie möglicherweise zusätzliche Kompatibilitätsinformationen enthalten.

#### Notifications-API

Für `notifications.create()` mit `type "basic"`:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Benutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort gelöscht.
- **In Chrome**: Dies ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals in schneller Folge aufrufen:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten auf nachfolgende Aufrufe innerhalb der `notifications.create()`-Callback-Funktion ist keine ausreichende Verzögerung, um dies zu verhindern.

#### Proxy-API

Firefox und Chrome beinhalten eine Proxy-API. Allerdings ist das Design dieser beiden APIs inkompatibel.

- **In Firefox:** Proxies werden entweder dynamisch mit der Eigenschaft [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) gesetzt, um [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) bereitzustellen. Siehe [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) für mehr Informationen zur API.
- **In Chrome:** Proxyeinstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig)-Objekt definiert. Je nach den Chrome-Proxyeinstellungen können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxies werden mit der Eigenschaft [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings) gesetzt. Siehe [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy) für mehr Informationen zur API.

#### Sidebar-API

Firefox und Chrome bieten inkompatible APIs für die Arbeit mit einer [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars).

- **In Firefox (und Opera):** Eine Seitenleiste wird mit dem Manifest-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) angegeben und mit der {{WebExtAPIRef("sidebarAction")}}-API manipuliert.
- **In Chrome:** Eine anfängliche Seitenleiste kann mit dem Manifest-Schlüssel `side_panel` angegeben werden. Die [`sidePanel`-API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) erlaubt dann die Manipulation der Panels.

#### Tabs-API

Bei der Verwendung von `tabs.executeScript()` oder `tabs.insertCSS()`:

- **In Firefox**: Relative URLs werden relativ zur aktuellen Seiten-URL aufgelöst.
- **In Chrome**: Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend am Wurzelverzeichnis der Erweiterung, wie folgt:

```plain
/path/to/script.js
```

Beim Aufruf von `tabs.remove()`:

- **In Firefox**: Das `tabs.remove()`-Promise wird nach dem `beforeunload`-Ereignis erfüllt.
- **In Chrome**: Der Callback wartet nicht auf `beforeunload`.

#### WebRequest-API

- **In Firefox:**
  - Anfragen können nur umgeleitet werden, wenn ihre ursprüngliche URL das `http:`- oder `https:`-Schema verwendet.
  - Die `activeTab`-Berechtigung erlaubt es nicht, Netzwerkanfragen im aktuellen Tab abzufangen. (Siehe [Bug 1617479](https://bugzil.la/1617479))
  - Ereignisse werden nicht für Systemanfragen ausgelöst (zum Beispiel Erweiterungsaktualisierungen oder Suchleisten-Vorschläge).
    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die {{WebExtAPIRef("webRequest.onAuthRequired")}} für Proxy-Authentifizierung abfangen müssen. Siehe die Dokumentation für {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die `manifest.json`-Datei der Erweiterung einen Schlüssel [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) mit der URL der Erweiterungsseite enthalten.

    > [!NOTE]
    > _Jede_ Website kann einen Link zu dieser URL erstellen oder auf diese URL umleiten, und Erweiterungen sollten alle Eingaben (z. B. POST-Daten) so behandeln, als kämen sie von einer nicht vertrauenswürdigen Quelle, wie es eine normale Webseite tun würde.

  - Einige der `browser.webRequest.*`-APIs erlauben es, Promises zurückzugeben, die `webRequest.BlockingResponse` asynchron auflösen.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt asynchrone `webRequest.BlockingResponse` durch die Bereitstellung von `'asyncBlocking'`, durch einen Callback anstelle von einem Promise.

#### Windows-API

- **In Firefox:** `onFocusChanged` der {{WebExtAPIRef("windows")}}-API wird mehrmals ausgelöst, wenn der Fokus sich ändert.

### Nicht unterstützte APIs

#### DeclarativeContent-API

- **In Firefox:** Die Chrome-[declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent)-API [ist nicht implementiert](https://bugzil.la/1435864). Zudem wird Firefox [nicht die Unterstützung](https://bugzil.la/1323433#c16) für die `declarativeContent.RequestContentScript`-API bieten (die selten genutzt wird und in stabilen Chrome-Versionen nicht verfügbar ist).

### Verschiedene Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in injizierten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in injizierten CSS-Dateien werden relativ zur _Seite, in die sie injiziert werden_, aufgelöst.

#### Unterstützung für Dialoge in Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) und [`prompt()`](/de/docs/Web/API/Window/prompt) werden in Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen werden einem zufälligen {{Glossary("UUID", "UUID")}} zugewiesen, das sich für jede Instanz von Firefox ändert: `moz-extension://«random-UUID»/«path»`. Diese Zufälligkeit kann verhindern, dass Sie Dinge tun, wie z.B. die URL Ihrer Erweiterung einer CSP-Richtlinie einer anderen Domäne hinzuzufügen.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgelistet ist, ist sie als `chrome-extension://«your-extension-id»/«path»` zugänglich. Die Erweiterungs-ID ist für eine Erweiterung festgelegt.

#### Manifest-"key"-Eigenschaft

- **In Firefox:** Da Firefox zufällige UUIDs für `web_accessible_resources` verwendet, wird diese Eigenschaft nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den `browser_specific_settings.gecko.id`-Manifest-Schlüssel fixieren (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Beim Arbeiten mit einer nicht gepackten Erweiterung kann das Manifest eine [`"key"`-Eigenschaft](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID über verschiedene Maschinen hinweg zu fixieren. Dies ist hauptsächlich nützlich, wenn mit `web_accessible_resources` gearbeitet wird.

#### Content-Skript HTTP(S)-Anfragen

- **In Firefox:** Wenn ein Content-Skript eine HTTP(S)-Anfrage stellt, _müssen_ absolute URLs bereitgestellt werden.
- **In Chrome:** Wenn ein Content-Skript eine Anfrage stellt (z.B. mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) zu einer relativen URL (wie `/api`), wird diese an `https://example.com/api` gesendet.

#### Content-Skript-Umgebung

- **In Firefox:** Der globale Bereich der [Content-Skript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht exakt gleich `window` ([Firefox-Bug 1208775](https://bugzil.la/1208775)). Konkret besteht der globale Bereich (`globalThis`) aus den üblichen JavaScript-Standardmerkmalen sowie `window` als Prototyp des globalen Bereichs. Die meisten DOM-APIs werden von der Seite über `window` durch [Xray-Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) geerbt, um das Content-Skript vor Änderungen durch die Webseite zu schützen. Ein Content-Skript kann JavaScript-Objekte aus seinem globalen Bereich oder Xray-umwickelte Versionen von der Webseite antreffen.
- **In Chrome:** Der globale Bereich ist `window`, und die verfügbaren DOM-APIs sind im Allgemeinen unabhängig von der Webseite (außer dass sie das zugrunde liegende DOM teilen). Content-Skripte können nicht direkt auf JavaScript-Objekte von der Webseite zugreifen.

#### Ausführung von Code auf einer Webseite aus einem Content-Skript

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Content-Skripts aus und `window.eval` führt Code im Kontext der Seite aus. Siehe [Verwendung von `eval` in Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen immer Code im Kontext des Content-Skripts aus, nicht im Kontext der Seite.

#### Teilen von Variablen zwischen Content-Skripten

- **In Firefox:** Sie können keine Variablen zwischen Content-Skripten teilen, indem Sie sie einem `this.{variableName}` in einem Skript zuweisen und dann versuchen, über `window.{variableName}` in einem anderen darauf zuzugreifen. Dies ist eine Einschränkung, die durch die Sandbox-Umgebung in Firefox entsteht. Diese Einschränkung kann entfernt werden; siehe [Firefox-Bug 1208775](https://bugzil.la/1208775).

#### Content-Skript-Lebenszyklus während der Navigation

- **In Firefox:** Content-Skripte bleiben in eine Webseite injiziert, nachdem der Benutzer die Seite verlassen hat. Allerdings werden Eigenschaften des Fensterobjekts zerstört. Zum Beispiel, wenn ein Content-Skript `window.prop1 = "prop"` setzt und der Benutzer dann die Seite verlässt und zurückkehrt, ist `window.prop1` undefined. Dieses Problem wird im [Firefox-Bug 1525400](https://bugzil.la/1525400) verfolgt.

  Um das Verhalten in Chrome zu imitieren, hören Sie auf die [pageshow](/de/docs/Web/API/Window/pageshow_event)- und [pagehide](/de/docs/Web/API/Window/pagehide_event)-Ereignisse. Simulieren Sie dann die Injektion oder Zerstörung des Content-Skripts.

- **In Chrome:** Content-Skripte werden zerstört, wenn der Benutzer die Seite verlässt. Wenn der Benutzer auf die Schaltfläche "Zurück" klickt, um durch die Historie zur Seite zurückzukehren, wird das Content-Skript in die Webseite injiziert.

#### "pro-Tab"-Zoomverhalten

- **In Firefox:** Der Zoom-Level bleibt über Seitenlade- und Navigationsaktion innerhalb des Tabs hinweg bestehen.
- **In Chrome:** Zoomänderungen werden bei der Navigation zurückgesetzt; das Navigieren in einem Tab lädt Seiten immer mit ihren originabhängigen Zoomfaktoren.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json-Schlüssel

Die Hauptseite zu [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle, die die Browser-Unterstützung für `manifest.json`-Schlüssel beschreibt. Wo es Vorbehalte hinsichtlich der Unterstützung für einen bestimmten Schlüssel gibt, wird dies in der Tabelle mit einem Sternchen "\*" angezeigt. Wenn Sie auf das Sternchen klicken, wird die Tabelle erweitert, um eine Notiz zu den Vorbehalten anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Messaging

### Argumente für verbindungsbasierte Nachrichten

**Unter Linux und Mac:** Chrome übergibt ein Argument an die native App, das der Ursprung der Erweiterung ist, die sie gestartet hat, in Form von `chrome-extension://«extensionID/»` (schließender Schrägstrich erforderlich). Dies ermöglicht es der App, die Erweiterung zu identifizieren.

**Unter Windows:** Chrome übergibt zwei Argumente:

1. Den Ursprung der Erweiterung
2. Einen Handle zum nativen Chrome-Fenster, das die App gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Schlüssel heißt `allowed_extensions`.
- **In Chrome:** Der Manifest-Schlüssel heißt `allowed_origins`.

### Speicherort des App-Manifests

- **In Chrome:** Das App-Manifest wird an einem anderen Ort erwartet. Siehe [Speicherort des Native Messaging-Hosts](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in den Chrome-Dokumenten.

### App-Persistenz

- **In Firefox:** Wenn eine Native Messaging-Verbindung geschlossen wird, beendet Firefox die Unterprozesse, wenn sie nicht abbrechen. Unter Windows platziert der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Falls die native Anwendung andere Prozesse startet und möchte, dass diese nach dem Beenden der nativen Anwendung geöffnet bleiben, muss die native Anwendung `CreateProcess` verwenden, anstatt `ShellExecute`, um den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags)-Flag zu starten.

## Datenkopieralgorithmus

Einige Erweiterungs-APIs erlauben es einer Erweiterung, Daten von einem Teil der Erweiterung an einen anderen zu senden, wie {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die `postMessage()`-Methode von {{WebExtAPIRef("runtime.port")}}, und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [Structureierte Kopieralgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird verwendet.
- **In Chrome:** Der [JSON-Serialisierungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. Er könnte in Zukunft auf strukturierte Kopien umgestellt werden ([Problem 248548](https://crbug.com/248548)).

Der strukturierte Kopieralgorithmus unterstützt mehr Typen als der JSON-Serialisierungsalgorithmus. Eine bemerkenswerte Ausnahme sind (DOM-)Objekte mit einer `toJSON`-Methode. DOM-Objekte sind standardmäßig weder kopierbar noch JSON-serialisierbar, aber mit einer `toJSON()`-Methode können diese JSON-serialisiert werden (aber weiterhin nicht mit dem strukturierten Kopieralgorithmus geklont werden). Beispiele für JSON-serialisierbare Objekte, die nicht strukturell klonbar sind, beinhalten Instanzen von [`URL`](/de/docs/Web/API/URL) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

Erweiterungen, die sich auf die `toJSON()`-Methode des JSON-Serialisierungsalgorithmus verlassen, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} verwenden, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann, da ein geparstes JSON-Wert immer strukturell kopierbar ist.
