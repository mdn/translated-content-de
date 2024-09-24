---
title: Inkompatibilitäten mit Chrome
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Die WebExtension-APIs zielen darauf ab, Kompatibilität über alle Hauptbrowser hinweg bereitzustellen, sodass Erweiterungen in jedem Browser mit minimalen Änderungen ausgeführt werden sollten.

Es gibt jedoch bedeutende Unterschiede zwischen Chrome (und Chromium-basierten Browsern), Firefox und Safari. Insbesondere:

- Die Unterstützung für WebExtension-APIs variiert zwischen den Browsern. Siehe [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) für Einzelheiten.
- Die Unterstützung für `manifest.json`-Schlüssel variiert zwischen den Browsern. Siehe den Abschnitt ["Browser compatibility"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der Seite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) für weitere Details.
- Erweiterungs-API-Namespace:

  - **In Firefox und Safari:** Erweiterungs-APIs werden im `browser`-Namespace aufgerufen. Der `chrome`-Namespace wird ebenfalls zur Kompatibilität mit Chrome unterstützt.
  - **In Chrome:** Erweiterungs-APIs werden im `chrome`-Namespace aufgerufen. (vgl. [Chrome-Bug 798169](https://crbug.com/798169))

- Asynchrone APIs:

  - **In Firefox und Safari:** Asynchrone APIs werden mithilfe von Promises implementiert.
  - **In Chrome:** In Manifest V2 werden asynchrone APIs mithilfe von Callbacks implementiert. In Manifest V3 wird die Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden bereitgestellt. (vgl. [Chrome-Bug 328932](https://crbug.com/328932)) Callbacks werden in Manifest V3 zur Aufwärtskompatibilität unterstützt.

Der Rest dieser Seite beschreibt diese und andere Inkompatibilitäten im Detail.

## JavaScript-APIs

### chrome.\* und browser.\* Namespace

- **In Firefox und Safari:** Die APIs werden über den `browser`-Namespace aufgerufen.

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **In Chrome:** Die APIs werden über den `chrome`-Namespace aufgerufen.

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

- **In Chrome:** In Manifest V2 verwenden asynchrone APIs Callbacks, um Werte zurückzugeben, und {{WebExtAPIRef("runtime.lastError")}}, um Fehler zu kommunizieren. In Manifest V3 werden Callbacks zur Aufwärtskompatibilität unterstützt, zusammen mit Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden.

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

### Firefox unterstützt sowohl die chrome als auch die browser Namespaces

Als Portierhilfe unterstützt die Firefox-Implementierung der WebExtensions `chrome` mithilfe von Callbacks und `browser` mithilfe von Promises. Dies bedeutet, dass viele Chrome-Erweiterungen in Firefox ohne Änderungen funktionieren.

> [!NOTE]
> Der `browser`-Namespace wird von Firefox und Safari unterstützt. Chrome bietet den `browser`-Namespace nicht an, bis [Chrome-Bug 798169](https://crbug.com/798169) gelöst ist.

Wenn Sie sich entscheiden, Ihre Erweiterung so zu schreiben, dass sie `browser` und Promises verwendet, stellt Firefox ein Polyfill bereit, das ihre Ausführung in Chrome ermöglichen sollte: <https://github.com/mozilla/webextension-polyfill>.

### Teilweise unterstützte APIs

Die Seite [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die in Firefox teilweise unterstützt werden. Wo es Einschränkungen bezüglich der Unterstützung einer API-Methode, -Eigenschaft, -Typ oder -Ereignis gibt, wird dies in diesen Tabellen mit einem Sternchen "\*" angezeigt. Ein Klick auf das Sternchen erweitert die Tabelle, um eine Erklärung der Einschränkung anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Der Rest dieses Abschnitts beschreibt die Hauptkompatibilitätsprobleme, die Sie berücksichtigen müssen, wenn Sie eine browserübergreifende Erweiterung erstellen. Denken Sie außerdem daran, die Browser-Kompatibilitätstabellen zu überprüfen, da sie zusätzliche Kompatibilitätsinformationen enthalten können.

#### Benachrichtigungs-API

Für `notifications.create()`, mit `Typ "basic"`:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Benutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort gelöscht.
- **In Chrome**: Dies ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals in schneller Folge aufrufen:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten mit nachfolgenden Aufrufen innerhalb der `notifications.create()`-Callback-Funktion ist keine ausreichende Verzögerung, um dies zu verhindern.

#### Proxy-API

Firefox und Chrome enthalten eine Proxy-API. Allerdings sind das Design dieser beiden APIs nicht kompatibel.

- **In Firefox**: Proxys werden mithilfe der [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)-Eigenschaft oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) festgelegt, um [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) dynamisch bereitzustellen.
  Weitere Informationen zur API finden Sie unter [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy).
- **In Chrome**: Proxyeinstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig)-Objekt definiert. Je nach den Proxy-Einstellungen von Chrome können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxys werden mithilfe der [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings)-Eigenschaft festgelegt.
  Weitere Informationen zur API finden Sie unter [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy).

#### Tabs-API

Bei der Verwendung von `tabs.executeScript()` oder `tabs.insertCSS()`:

- **In Firefox**: Relative URLs werden relativ zur URL der aktuellen Seite aufgelöst.
- **In Chrome**: Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend ab der Root der Erweiterung, wie folgt:

```plain
/path/to/script.js
```

Beim Aufruf von `tabs.remove()`:

- **In Firefox**: Das `tabs.remove()`-Promise wird nach dem `beforeunload`-Ereignis erfüllt.
- **In Chrome**: Das Callback wartet nicht auf `beforeunload`.

#### WebRequest-API

- **In Firefox:**

  - Anfragen können nur umgeleitet werden, wenn ihre ursprüngliche URL das `http:`- oder `https:`-Schema verwendet.
  - Die Berechtigung `activeTab` erlaubt es nicht, Netzwerk-Anfragen im aktuellen Tab abzufangen. (siehe [Fehler 1617479](https://bugzil.la/1617479))
  - Ereignisse werden nicht für Systemanfragen ausgelöst (zum Beispiel Erweiterungs-Updates oder Suchleisten-Vorschläge).

    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die {{WebExtAPIRef("webRequest.onAuthRequired")}} für Proxy-Authentifizierung abfangen müssen. Siehe die Dokumentation zu {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche (z.B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die Datei `manifest.json` der Erweiterung einen [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel mit der URL der Erweiterungsseite enthalten.

    > **Hinweis:** _Jede_ Website kann auf diese URL verlinken oder umleiten, und Erweiterungen sollten jede Eingabe (z.B. POST-Daten) so behandeln, als käme sie von einer untrusted Quelle, wie es bei einer normalen Webseite der Fall sein sollte.

  - Einige der `browser.webRequest.*`-APIs ermöglichen das Zurückgeben von Promises, die `webRequest.BlockingResponse` asynchron auflösen.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt asynchrone `webRequest.BlockingResponse`, indem `'asyncBlocking'` mit einem Callback anstelle eines Promise bereitgestellt wird.

#### Windows-API

- **In Firefox:** `onFocusChanged` der {{WebExtAPIRef("windows")}} API wird mehrfach bei Änderungen des Fokus ausgelöst.

### Nicht unterstützte APIs

#### DeclarativeContent-API

- **In Firefox:** Die [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent)-API von Chrome [ist nicht implementiert](https://bugzil.la/1435864). Darüber hinaus [wird Firefox die `declarativeContent.RequestContentScript`-API nicht unterstützen](https://bugzil.la/1323433#c16) (die selten verwendet wird und in stabilen Versionen von Chrome nicht verfügbar ist).

### Verschiedene Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in eingebetteten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in eingebetteten CSS-Dateien werden relativ zur _Seite, in die sie eingebettet sind,_ aufgelöst.

#### Unterstützung für Dialoge in Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm), und [`prompt()`](/de/docs/Web/API/Window/prompt) werden in Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen werden mit einer zufälligen {{Glossary("UUID")}} zugewiesen, die sich bei jeder Firefox-Instanz ändert: `moz-extension://«random-UUID»/«path»`. Diese Zufälligkeit kann verhindern, dass Sie Dinge tun, wie z.B. die URL Ihrer Erweiterung zu einer CSP-Richtlinie einer anderen Domain hinzuzufügen.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie als `chrome-extension://«your-extension-id»/«path»` zugänglich. Die Erweiterungs-ID ist für eine Erweiterung festgelegt.

#### Manifest "key"-Eigenschaft

- **In Firefox:** Da Firefox zufällige UUIDs für `web_accessible_resources` verwendet, wird diese Eigenschaft nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den Manifest-Schlüssel `browser_specific_settings.gecko.id` festlegen (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Bei der Arbeit mit einer nicht verpackten Erweiterung kann das Manifest eine [`"key"`-Eigenschaft](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID über verschiedene Maschinen hinweg zu fixieren. Dies ist hauptsächlich nützlich, wenn mit `web_accessible_resources` gearbeitet wird.

#### HTTP(S)-Anfragen in Inhalts-Skripten

- **In Firefox:** Wenn ein Inhalts-Skript eine HTTP(S)-Anfrage stellt, müssen Sie absolute URLs bereitstellen.
- **In Chrome:** Wenn ein Inhalts-Skript eine Anfrage (z.B. mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) an eine relative URL (z.B. `/api`) stellt, wird sie an `https://example.com/api` gesendet.

#### Inhalts-Skript-Umgebung

- **In Firefox:** Der globale Gültigkeitsbereich der [Inhalts-Skript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht strikt gleich `window` ([Firefox-Bug 1208775](https://bugzil.la/1208775)). Spezieller gesagt, der globale Gültigkeitsbereich (`globalThis`) ist wie gewohnt aus Standard-JavaScript-Funktionen zusammen gesetzt, plus `window` als Prototyp des globalen Gültigkeitsbereichs. Die meisten DOM-APIs werden über `window` von der Seite vererbt, durch [Xray-Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox), um das Inhalts-Skript vor Modifikationen durch die Webseite zu schützen. Ein Inhalts-Skript kann auf JavaScript-Objekte aus seinem globalen Gültigkeitsbereich oder Xray-verpackte Versionen von der Webseite treffen.
- **In Chrome:** Der globale Gültigkeitsbereich ist `window`, und die verfügbaren DOM-APIs sind im Allgemeinen unabhängig von der Webseite (abgesehen von der gemeinsamen Nutzung des zugrunde liegenden DOM). Inhalts-Skripte können nicht direkt auf JavaScript-Objekte der Webseite zugreifen.

#### Ausführen von Code in einer Webseite aus dem Inhalts-Skript

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Inhalts-Skripts aus und `window.eval` führt Code im Kontext der Seite aus. Siehe [Verwendung von `eval` in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen immer Code im Kontext des Inhalts-Skripts aus, nicht im Kontext der Seite.

#### Teilen von Variablen zwischen Inhalts-Skripten

- **In Firefox:** Sie können keine Variablen zwischen Inhalts-Skripten teilen, indem Sie sie in einem Skript `this.{variableName}` zuordnen und dann versuchen, sie in einem anderen mit `window.{variableName}` zuzugreifen. Dies ist eine Beschränkung, die durch die Sandbox-Umgebung in Firefox geschaffen wurde. Diese Einschränkung könnte entfernt werden; siehe [Firefox-Bug 1208775](https://bugzil.la/1208775).

#### Lebenszyklus des Inhalts-Skripts während der Navigation

- **In Firefox:** Inhalts-Skripte bleiben in einer Webseite integriert, nachdem der Benutzer weg navigiert ist. Allerdings werden Eigenschaften des Fensterobjekts zerstört. Wenn z.B. ein Inhalts-Skript `window.prop1 = "prop"` setzt und der Benutzer dann weg navigiert und zur Seite zurückkehrt, ist `window.prop1` undefiniert. Dieses Problem wird im [Firefox-Bug 1525400](https://bugzil.la/1525400) verfolgt.

  Um das Verhalten von Chrome zu simulieren, hören Sie auf die [pageshow](/de/docs/Web/API/Window/pageshow_event)- und [pagehide](/de/docs/Web/API/Window/pagehide_event)-Ereignisse. Simulieren Sie dann die Einbettung oder Zerstörung des Inhalts-Skripts.

- **In Chrome:** Inhalts-Skripte werden zerstört, wenn der Benutzer von einer Webseite weg navigiert. Wenn der Benutzer auf die Schaltfläche "Zurück" klickt, um über den Verlauf zur Seite zurückzukehren, wird das Inhalts-Skript in die Webseite eingebettet.

#### "Pro-Tab"-Zoomverhalten

- **In Firefox:** Das Zoomlevel bleibt über Seitenladungen und Navigation innerhalb des Tabs bestehen.
- **In Chrome:** Zoomänderungen werden bei der Navigation zurückgesetzt; beim Navigieren eines Tabs werden Seiten immer mit ihren pro-Ursprungs-Zoomfaktoren geladen.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json Schlüssel

Die Hauptseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle, die die Unterstützung von Browsern für `manifest.json`-Schlüssel beschreibt. Wo es Einschränkungen hinsichtlich der Unterstützung eines Schlüssels gibt, wird dies in der Tabelle mit einem Sternchen "\*" angezeigt. Ein Klick auf das Sternchen erweitert die Tabelle, um eine Anmerkung zu dieser Einschränkung anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Messaging

### Argumente für verbindungsbasierte Nachrichten

**Auf Linux und Mac:** Chrome übergibt ein Argument an die native App, das der Ursprung der Erweiterung ist, die sie gestartet hat, in der Form von `chrome-extension://«extensionID/»` (Schrägstrich am Ende erforderlich). Dies ermöglicht der App, die Erweiterung zu identifizieren.

**Auf Windows:** Chrome übergibt zwei Argumente:

1. Den Ursprung der Erweiterung
2. Einen Handle auf das Chrome-native Fenster, das die App gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Schlüssel heißt `allowed_extensions`.
- **In Chrome:** Der Manifest-Schlüssel heißt `allowed_origins`.

### Speicherort des App-Manifests

- **In Chrome:** Das App-Manifest wird an einem anderen Ort erwartet. Siehe [Native Messaging Host Location](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in den Chrome-Dokumenten.

### App-Persistenz

- **In Firefox:** Wenn eine native Messaging-Verbindung geschlossen wird, beendet Firefox die Unterprozesse, wenn sie sich nicht trennen. Unter Windows platziert der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet diesen Job. Wenn die native Anwendung andere Prozesse startet und diese nach dem Beenden der nativen Anwendung geöffnet bleiben sollen, muss die native Anwendung `CreateProcess` verwenden, anstelle von `ShellExecute`, um den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags)-Flag zu starten.

## Datenklon-Algorithmus

Einige Erweiterungs-APIs ermöglichen es einer Erweiterung, Daten von einem Teil der Erweiterung zu einem anderen zu senden, wie z.B. {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die `postMessage()`-Methode von {{WebExtAPIRef("runtime.port")}}, und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [Structured Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird verwendet.
- **In Chrome:** Der [JSON-Serialisierungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. Es könnte in Zukunft auf strukturiertes Klonen umgestellt werden ([Issue 248548](https://crbug.com/248548)).

Der Structured Clone-Algorithmus unterstützt mehr Typen als der JSON-Serialisierungsalgorithmus. Eine bemerkenswerte Ausnahme sind (DOM-)Objekte mit einer `toJSON`-Methode. DOM-Objekte sind standardmäßig weder klonbar noch JSON-serialisierbar, aber mit einer `toJSON()`-Methode können sie JSON-serialisiert werden (aber immer noch nicht mit dem strukturierten Klon-Algorithmus geklont werden). Beispiele für JSON-serialisierbare Objekte, die nicht strukturiert klonbar sind, sind Instanzen von {{domxref("URL")}} und {{domxref("PerformanceEntry")}}.

Erweiterungen, die sich auf die `toJSON()`-Methode des JSON-Serialisierungsalgorithmus verlassen, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} verwenden, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann, da ein geparster JSON-Wert immer strukturell klonbar ist.
