---
title: Chrome-Inkompatibilitäten
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{AddonSidebar}}

Die WebExtension-APIs zielen darauf ab, Kompatibilität in allen großen Browsern zu bieten, sodass Erweiterungen mit minimalen Änderungen auf jedem Browser ausgeführt werden sollten.

Es gibt jedoch erhebliche Unterschiede zwischen Chrome (und auf Chromium basierenden Browsern), Firefox und Safari. Insbesondere:

- Die Unterstützung für WebExtension-APIs variiert zwischen den Browsern. Weitere Informationen finden Sie unter [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Die Unterstützung für `manifest.json`-Schlüssel variiert zwischen den Browsern. Siehe den Abschnitt ["Browser-Kompatibilität"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Seite für weitere Details.
- Erweiterungs-API-Namespace:

  - **In Firefox und Safari:** Erweiterungs-APIs werden unter dem `browser`-Namespace aufgerufen. Der `chrome`-Namespace wird ebenfalls zur Kompatibilität mit Chrome unterstützt.
  - **In Chrome:** Erweiterungs-APIs werden unter dem `chrome`-Namespace aufgerufen. (siehe [Chrome Bug 798169](https://crbug.com/798169))

- Asynchrone APIs:
  - **In Firefox und Safari:** Asynchrone APIs werden mit Promises implementiert.
  - **In Chrome:** In Manifest V2 werden asynchrone APIs mit Callbacks implementiert. In Manifest V3 wird die Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden bereitgestellt. (siehe [Chrome Bug 328932](https://crbug.com/328932)) Callbacks werden in Manifest V3 zur Rückwärtskompatibilität unterstützt.

Der Rest dieser Seite beschreibt diese und andere Inkompatibilitäten im Detail.

## JavaScript-APIs

### chrome.\* und browser.\* Namespace

- **In Firefox und Safari:** Auf die APIs wird mit dem `browser`-Namespace zugegriffen.

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **In Chrome:** Auf die APIs wird mit dem `chrome`-Namespace zugegriffen.

  ```js
  chrome.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

### Callbacks und Promises

- **In Firefox und Safari (alle Versionen) und in Chrome (ab Manifest Version 3):** Verwenden asynchrone APIs [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), um Werte zurückzugeben.

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

- **In Chrome:** In Manifest V2 verwenden asynchrone APIs Callbacks, um Werte zurückzugeben, und {{WebExtAPIRef("runtime.lastError")}}, um Fehler zu kommunizieren. In Manifest V3 werden Callbacks zur Rückwärtskompatibilität unterstützt, zusammen mit der Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden.

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

### Firefox unterstützt sowohl die chrome- als auch die browser-Namespace

Als Unterstützung bei der Portierung unterstützt die Firefox-Implementierung von WebExtensions `chrome` unter Verwendung von Callbacks und `browser` unter Verwendung von Promises. Dies bedeutet, dass viele Chrome-Erweiterungen in Firefox ohne Änderungen funktionieren.

> [!NOTE]
> Der `browser`-Namespace wird von Firefox und Safari unterstützt. Chrome bietet den `browser`-Namespace nicht an, bis [Chrome Bug 798169](https://crbug.com/798169) behoben ist.

Wenn Sie sich entscheiden, Ihre Erweiterung mit `browser` und Promises zu schreiben, bietet Firefox ein Polyfill, das es ermöglichen sollte, sie in Chrome auszuführen: <https://github.com/mozilla/webextension-polyfill>.

### Teilweise unterstützte APIs

Die [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) Seite enthält Kompatibilitätstabellen für alle APIs, die eine Unterstützung in Firefox haben. Wo es Vorbehalte bezüglich der Unterstützung einer API-Methode, Eigenschaft, Typ oder Ereignisses gibt, wird dies in diesen Tabellen mit einem Sternchen "\*" angezeigt. Die Auswahl des Sternchens erweitert die Tabelle, um eine Anmerkung anzuzeigen, die den Vorbehalt erklärt.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Der Rest dieses Abschnitts beschreibt die wichtigsten Kompatibilitätsprobleme, die Sie beim Erstellen einer browserübergreifenden Erweiterung berücksichtigen müssen. Denken Sie auch daran, die Browser-Kompatibilitätstabellen zu überprüfen, da sie möglicherweise zusätzliche Kompatibilitätsinformationen enthalten.

#### Benachrichtigungen API

Für `notifications.create()`, mit `type "basic"`:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Benutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort gelöscht.
- **In Chrome**: Dies ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals in schneller Folge aufrufen:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten, um nachfolgende Aufrufe innerhalb der `notifications.create()`-Callback-Funktion zu machen, ist keine ausreichende Verzögerung, um dies zu verhindern.

#### Proxy API

Firefox und Chrome enthalten eine Proxy API. Das Design dieser beiden APIs ist jedoch inkompatibel.

- **In Firefox**: Proxys werden mit der [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) Eigenschaft oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) festgelegt, um [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) dynamisch bereitzustellen.
  Siehe [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) für weitere Informationen über die API.
- **In Chrome**: Proxy-Einstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig) Objekt definiert. Abhängig von Chromes Proxy-Einstellungen können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxys werden mit der [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings) Eigenschaft gesetzt.
  Siehe [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy) für weitere Informationen über die API.

#### Seitenleiste API

Firefox und Chrome bieten inkompatible APIs zum Arbeiten mit einer [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars).

- **In Firefox (und Opera)**: Eine Seitenleiste wird mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel angegeben und mit der {{WebExtAPIRef("sidebarAction")}} API manipuliert.
- **In Chrome**: Eine anfängliche Seitenleiste kann mit dem `side_panel` Manifest-Schlüssel spezifiziert werden. Die [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) ermöglicht dann die Manipulation von Panels.

#### Tabs API

Bei der Verwendung von `tabs.executeScript()` oder `tabs.insertCSS()`:

- **In Firefox**: Relativen URLs werden relativ zur URL der aktuellen Seite aufgelöst.
- **In Chrome**: Relativen URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend beim Stamm der Erweiterung, so:

```plain
/path/to/script.js
```

Beim Aufruf von `tabs.remove()`:

- **In Firefox**: Das `tabs.remove()`-Promise wird nach dem `beforeunload`-Ereignis erfüllt.
- **In Chrome**: Der Callback wartet nicht auf `beforeunload`.

#### WebRequest API

- **In Firefox:**

  - Anforderungen können nur umgeleitet werden, wenn ihre ursprüngliche URL das `http:` oder `https:`-Schema verwendet.
  - Die `activeTab`-Berechtigung ermöglicht es nicht, Netzwerk-Anfragen im aktuellen Tab abzufangen. (Siehe [Bug 1617479](https://bugzil.la/1617479))
  - Ereignisse werden nicht für Systemanfragen ausgelöst (zum Beispiel Erweiterungsaktualisierungen oder Suchleisten-Vorschläge).

    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die {{WebExtAPIRef("webRequest.onAuthRequired")}} für Proxy-Autorisierung abfangen müssen. Siehe die Dokumentation für {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche (z.B. HTTPS) URL auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die Datei `manifest.json` der Erweiterung einen [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Schlüssel mit der URL der Erweiterungsseite enthalten.

    > [!NOTE] > _Jede_ Website kann auf diese URL verlinken oder zu ihr umleiten, und Erweiterungen sollten Eingaben (z.B. POST-Daten) wie von einer nicht vertrauenswürdigen Quelle behandeln, wie es eine normale Webseite tun würde.

  - Einige der `browser.webRequest.*`-APIs erlauben das Zurückgeben von Promises, die `webRequest.BlockingResponse` asynchron auflösen.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt asynchrone `webRequest.BlockingResponse`, indem `'asyncBlocking'` bereitgestellt wird, durch einen Callback anstelle eines Promises.

#### Windows API

- **In Firefox:** `onFocusChanged` der {{WebExtAPIRef("windows")}} API wird mehrmals für eine Fokusänderung ausgelöst.

### Nicht unterstützte APIs

#### DeclarativeContent API

- **In Firefox:** Chromes [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) API [ist nicht implementiert](https://bugzil.la/1435864). Zusätzlich wird Firefox [nicht unterstützen](https://bugzil.la/1323433#c16) die `declarativeContent.RequestContentScript` API (die selten verwendet wird und in stabilen Versionen von Chrome nicht verfügbar ist).

### Verschiedene Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in eingebetteten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in eingebetteten CSS-Dateien werden relativ zur _Seite, in die sie eingebettet sind_, aufgelöst.

#### Unterstützung für Dialoge in Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm), und [`prompt()`](/de/docs/Web/API/Window/prompt) werden in Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen sind einer zufälligen {{Glossary("UUID", "UUID")}} zugewiesen, die sich für jede Instanz von Firefox ändert: `moz-extension://«random-UUID»/«path»`. Diese Zufälligkeit kann es verhindern, Dinge zu tun, wie z.B. die URL Ihrer Erweiterung zu einer CSP-Richtlinie einer anderen Domäne hinzuzufügen.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgelistet ist, ist sie als `chrome-extension://«your-extension-id»/«path»` zugänglich. Die Erweiterungs-ID ist für eine Erweiterung festgelegt.

#### Manifest "key" Eigenschaft

- **In Firefox:** Da Firefox zufällige UUIDs für `web_accessible_resources` verwendet, wird diese Eigenschaft nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den `browser_specific_settings.gecko.id` Manifest-Schlüssel festlegen (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Bei der Arbeit mit einer nicht gepackten Erweiterung kann das Manifest eine [`"key"` Eigenschaft](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID über verschiedene Maschinen hinweg zu fixieren. Dies ist vor allem nützlich, wenn mit `web_accessible_resources` gearbeitet wird.

#### HTTP(S)-Anfragen von Content Scripts

- **In Firefox:** Wenn ein Content Script eine HTTP(S)-Anfrage stellt, müssen _muss_ eine absolute URL angegeben werden.
- **In Chrome:** Wenn ein Content Script eine Anfrage stellt (z.B. mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) an eine relative URL (wie `/api`), wird sie an `https://example.com/api` gesendet.

#### Content Script Umgebung

- **In Firefox:** Der globale Kontext der [Content Script Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht strikt gleich `window` ([Firefox Bug 1208775](https://bugzil.la/1208775)). Genauer gesagt, der globale Kontext (`globalThis`) besteht aus Standard-JavaScript-Funktionen wie üblich, plus `window` als Prototyp des globalen Kontexts. Die meisten DOM-APIs werden durch [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) von der Seite übernommen, um das Content Script vor Änderungen durch die Webseite zu schützen. Ein Content Script kann JavaScript-Objekte aus seinem globalen Kontext oder Xray-verpackte Versionen von der Webseite begegnen.
- **In Chrome:** Der globale Kontext ist `window`, und die verfügbaren DOM-APIs sind allgemein unabhängig von der Webseite (außer dem Teilen des zugrundeliegenden DOM). Content Scripts können nicht direkt auf JavaScript-Objekte von der Webseite zugreifen.

#### Ausführen von Code in einer Webseite aus einem Content Script

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Content Scripts aus und `window.eval` führt Code im Kontext der Seite aus. Siehe [Verwenden von `eval` in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen immer Code im Kontext des Content Scripts aus, nicht im Kontext der Seite.

#### Variablen zwischen Content Scripts teilen

- **In Firefox:** Sie können keine Variablen zwischen Content Scripts teilen, indem Sie sie einem `this.{variableName}` in einem Script zuweisen und dann versuchen, mit `window.{variableName}` in einem anderen darauf zuzugreifen. Dies ist eine Einschränkung, die durch die Sandbox-Umgebung in Firefox geschaffen wurde. Diese Einschränkung könnte entfernt werden; siehe [Firefox Bug 1208775](https://bugzil.la/1208775).

#### Lebenszyklus von Content Scripts während der Navigation

- **In Firefox:** Content Scripts bleiben in einer Webseite eingebettet, nachdem der Benutzer navigiert hat. Allerdings werden `window` Objekteigenschaften zerstört. Zum Beispiel, wenn ein Content Script `window.prop1 = "prop"` festlegt und der Benutzer dann navigiert und zur Seite zurückkehrt, ist `window.prop1` undefiniert. Dieses Problem wird in [Firefox Bug 1525400](https://bugzil.la/1525400) verfolgt.

  Um das Chrome-Verhalten zu simulieren, hören Sie auf die [pageshow](/de/docs/Web/API/Window/pageshow_event) und [pagehide](/de/docs/Web/API/Window/pagehide_event) Ereignisse. Simulieren Sie dann die Injektion oder Zerstörung des Content Scripts.

- **In Chrome:** Content Scripts werden zerstört, wenn der Benutzer von einer Webseite weg navigiert. Wenn der Benutzer auf die Zurück-Taste klickt, um durch den Verlauf zur Seite zurückzukehren, wird das Content Script in die Webseite eingebettet.

#### "per-tab" Zoomverhalten

- **In Firefox:** Das Zoomlevel bleibt über Seitenladungen und Navigation innerhalb des Tabs bestehen.
- **In Chrome:** Zoomänderungen werden bei der Navigation zurückgesetzt; das Navigieren in einem Tab lädt immer Seiten mit ihren pro-Origin-Zoomfaktoren.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json Schlüssel

Die Hauptseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle, die die Browserunterstützung für `manifest.json` Schlüssel beschreibt. Wo es Vorbehalte zur Unterstützung eines bestimmten Schlüssels gibt, wird dies in der Tabelle mit einem Sternchen "\*" angezeigt. Das Auswählen des Sternchens erweitert die Tabelle, um eine Anmerkung anzuzeigen, die den Vorbehalt erklärt.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Messaging

### Verbindungsbasierte Messaging-Argumente

**Unter Linux und Mac:** Chrome übergibt ein Argument an die native App, das der Ursprung der Erweiterung ist, die sie gestartet hat, in der Form `chrome-extension://«extensionID/»` (Schrägstrich erforderlich). Dies ermöglicht der App, die Erweiterung zu identifizieren.

**Unter Windows:** Chrome übergibt zwei Argumente:

1. Der Ursprung der Erweiterung
2. Ein Handle für das Chrome-native Fenster, das die App gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Schlüssel heißt `allowed_extensions`.
- **In Chrome:** Der Manifest-Schlüssel heißt `allowed_origins`.

### Standort des App-Manifests

- **In Chrome:** Das App-Manifest wird an einem anderen Ort erwartet. Siehe [Native Messaging Host Standort](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in den Chrome-Dokumenten.

### App-Persistenz

- **In Firefox:** Wenn eine native Messaging-Verbindung geschlossen wird, beendet Firefox die Subprozesse, wenn sie nicht abbrechen. Unter Windows bringt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Angenommen, die native Anwendung startet andere Prozesse und möchte, dass diese nach dem Beenden der nativen Anwendung geöffnet bleiben. In diesem Fall muss die native Anwendung `CreateProcess` anstelle von `ShellExecute` verwenden, um den zusätzlichen Prozess mit der [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flagge zu starten.

## Datenklon-Algorithmus

Einige Erweiterungs-APIs erlauben es einer Erweiterung, Daten von einem Teil der Erweiterung zu einem anderen zu senden, wie z.B. {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die `postMessage()`-Methode von {{WebExtAPIRef("runtime.port")}} und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [Strukturierte Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird verwendet.
- **In Chrome:** Der [JSON-Serialisierungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. Er könnte in Zukunft auf strukturiertes Klonen umstellen ([Problem 248548](https://crbug.com/248548)).

Der Strukturierte Klon-Algorithmus unterstützt mehr Typen als der JSON-Serialisierungsalgorithmus. Eine bemerkenswerte Ausnahme sind (DOM) Objekte mit einer `toJSON`-Methode. DOM-Objekte sind standardmäßig weder klonbar noch JSON-serialisierbar, aber mit einer `toJSON()`-Methode können diese JSON-serialisierbar sein (aber immer noch nicht mit dem strukturierten Klon-Algorithmus klonbar). Beispiele für JSON-serialisierbare Objekte, die nicht strukturiert klonbar sind, umfassen Instanzen von [`URL`](/de/docs/Web/API/URL) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

Erweiterungen, die auf die `toJSON()`-Methode des JSON-Serialisierungsalgorithmus angewiesen sind, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} verwenden, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann, da ein analysierter JSON-Wert immer strukturell klonbar ist.
