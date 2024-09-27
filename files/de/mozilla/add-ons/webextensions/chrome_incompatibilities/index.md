---
title: Chrome-Inkompatibilitäten
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Die WebExtension-APIs zielen darauf ab, Kompatibilität über alle Hauptbrowser hinweg bereitzustellen, sodass Erweiterungen mit minimalen Änderungen in jedem Browser ausgeführt werden sollten.

Es gibt jedoch erhebliche Unterschiede zwischen Chrome (und auf Chromium basierenden Browsern), Firefox und Safari. Insbesondere:

- Die Unterstützung für WebExtension-APIs unterscheidet sich zwischen den Browsern. Siehe [Browser-Unterstützung für JavaScript APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) für Details.
- Die Unterstützung für `manifest.json`-Schlüssel unterscheidet sich zwischen den Browsern. Siehe den Abschnitt ["Browser-Kompatibilität"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Seite für weitere Details.
- Erweiterungs-API-Namespace:

  - **In Firefox und Safari:** Erweiterungs-APIs werden im `browser`-Namespace aufgerufen. Der `chrome`-Namespace wird ebenfalls zur Kompatibilität mit Chrome unterstützt.
  - **In Chrome:** Erweiterungs-APIs werden im `chrome`-Namespace aufgerufen. (vgl. [Chrome-Bug 798169](https://crbug.com/798169))

- Asynchrone APIs:

  - **In Firefox und Safari:** Asynchrone APIs werden mit Promises implementiert.
  - **In Chrome:** In Manifest V2 werden asynchrone APIs mit Callbacks implementiert. In Manifest V3 wird die Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden bereitgestellt. (vgl. [Chrome-Bug 328932](https://crbug.com/328932)) Callbacks werden in Manifest V3 für die Rückwärtskompatibilität unterstützt.

Der Rest dieser Seite erklärt diese und andere Inkompatibilitäten.

## JavaScript-APIs

### chrome.\* und browser.\* Namespace

- **In Firefox und Safari:** Die APIs werden mit dem `browser`-Namespace aufgerufen.

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **In Chrome:** Die APIs werden mit dem `chrome`-Namespace aufgerufen.

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

- **In Chrome:** In Manifest V2 verwenden asynchrone APIs Callbacks zur Rückgabe von Werten und {{WebExtAPIRef("runtime.lastError")}}, um Fehler zu kommunizieren. In Manifest V3 werden Callbacks für die Rückwärtskompatibilität unterstützt, zusammen mit der Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden.

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

### Firefox unterstützt sowohl die chrome als auch browser Namespaces

Als Unterstützung bei der Portierung unterstützt die Firefox-Implementierung von WebExtensions `chrome` mit Callbacks und `browser` mit Promises. Das bedeutet, dass viele Chrome-Erweiterungen in Firefox ohne Änderungen funktionieren.

> [!NOTE]
> Der `browser`-Namespace wird von Firefox und Safari unterstützt. Chrome bietet den `browser`-Namespace nicht an, bis [Chrome-Bug 798169](https://crbug.com/798169) gelöst ist.

Wenn Sie sich entscheiden, Ihre Erweiterung zu schreiben, um `browser` und Promises zu verwenden, bietet Firefox ein Polyfill, das es ermöglichen sollte, es in Chrome auszuführen: <https://github.com/mozilla/webextension-polyfill>.

### Teilweise unterstützte APIs

Die Seite [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die irgendeine Unterstützung in Firefox haben. Wo es Vorbehalte bezüglich der Unterstützung für eine API-Methode, Eigenschaft, Typ oder Ereignis gibt, wird dies in diesen Tabellen mit einem Stern "\*" angezeigt. Das Auswählen des Sterns erweitert die Tabelle, um eine Erklärung des Vorbehalts anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Der Rest dieses Abschnitts beschreibt die Hauptkompatibilitätsprobleme, die Sie bedenken müssen, wenn Sie eine plattformübergreifende Erweiterung erstellen. Denken Sie auch daran, die Browser-Kompatibilitätstabellen zu überprüfen, da sie zusätzliche Kompatibilitätsinformationen enthalten können.

#### Benachrichtigungs-API

Für `notifications.create()`, mit `type "basic"`:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Benutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort gelöscht.
- **In Chrome**: Dies ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals schnell hintereinander aufrufen:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten auf die Ausführung nachfolgender Aufrufe innerhalb der `notifications.create()`-Callback-Funktion ist nicht ausreichend, um dies zu verhindern.

#### Proxy-API

Firefox und Chrome enthalten eine Proxy-API. Das Design dieser beiden APIs ist jedoch inkompatibel.

- **In Firefox**: Proxies werden mithilfe der [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)-Eigenschaft oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) festgelegt, um [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) dynamisch bereitzustellen. Siehe [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) für weitere Informationen zur API.
- **In Chrome**: Proxy-Einstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig)-Objekt definiert. Abhängig von Chromes Proxy-Einstellungen können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxies werden mithilfe der [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings)-Eigenschaft festgelegt. Siehe [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy) für weitere Informationen zur API.

#### Tabs-API

Bei der Verwendung von `tabs.executeScript()` oder `tabs.insertCSS()`:

- **In Firefox**: Übergebene relative URLs werden relativ zur aktuellen Seiten-URL aufgelöst.
- **In Chrome**: Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um plattformübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend im Stammverzeichnis der Erweiterung, so:

```plain
/path/to/script.js
```

Beim Aufrufen von `tabs.remove()`:

- **In Firefox**: Das `tabs.remove()`-Promise wird nach dem `beforeunload`-Ereignis erfüllt.
- **In Chrome**: Der Callback wartet nicht auf `beforeunload`.

#### WebRequest-API

- **In Firefox:**

  - Anfragen können nur umgeleitet werden, wenn ihre ursprüngliche URL das `http:`- oder `https:`-Schema verwendet.
  - Die Berechtigung `activeTab` erlaubt es nicht, Netzwerkanfragen im aktuellen Tab abzufangen. (Siehe [Bug 1617479](https://bugzil.la/1617479))
  - Ereignisse werden nicht für Systemanfragen ausgelöst (zum Beispiel Erweiterungs-Upgrades oder Suchleistenvorschläge).

    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die erforderlich sind, um {{WebExtAPIRef("webRequest.onAuthRequired")}} für Proxy-Autorisierung abzufangen. Siehe die Dokumentation für {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche (z.B. HTTPS) URL auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die `manifest.json`-Datei der Erweiterung einen [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel mit der URL der Erweiterungsseite enthalten.

    > **Hinweis:** _Jede_ Webseite kann einen Link oder eine Umleitung auf diese URL setzen, und Erweiterungen sollten jede Eingabe (z.B. POST-Daten) so behandeln, als käme sie aus einer nicht vertrauenswürdigen Quelle, wie eine normale Webseite.

  - Einige der `browser.webRequest.*`-APIs erlauben das Zurückgeben von Promises, die `webRequest.BlockingResponse` asynchron auflösen.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt asynchrones `webRequest.BlockingResponse`, indem es `'asyncBlocking'` durch einen Callback anstelle eines Promises bereitstellt.

#### Windows-API

- **In Firefox:** `onFocusChanged` der {{WebExtAPIRef("windows")}}-API wird mehrfach bei einer Fokusänderung ausgelöst.

### Nicht unterstützte APIs

#### DeclarativeContent-API

- **In Firefox:** Die [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent)-API von Chrome [wird nicht implementiert](https://bugzil.la/1435864). Darüber hinaus [wird Firefox die `declarativeContent.RequestContentScript`-API nicht unterstützen](https://bugzil.la/1323433#c16) (die selten verwendet wird und in stabilen Versionen von Chrome nicht verfügbar ist).

### Verschiedene Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in injizierten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in injizierten CSS-Dateien werden relativ zu _der Seite, in die sie injiziert werden_ aufgelöst.

#### Unterstützung für Dialoge in Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) und [`prompt()`](/de/docs/Web/API/Window/prompt) werden in Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen werden mit einem zufälligen [UUID](/de/docs/Glossary/UUID) zugewiesen, der für jede Instanz von Firefox wechselt: `moz-extension://«random-UUID»/«path»`. Diese Zufälligkeit kann verhindern, dass Sie Dinge tun, wie das Hinzufügen der URL Ihrer Erweiterung zu einer CSP-Richtlinie einer anderen Domain.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie zugänglich als `chrome-extension://«your-extension-id»/«path»`. Die Erweiterungs-ID ist für eine Erweiterung fixiert.

#### Manifest "key"-Eigenschaft

- **In Firefox:** Da Firefox zufällige UUIDs für `web_accessible_resources` verwendet, wird diese Eigenschaft nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den `browser_specific_settings.gecko.id`-Manifest-Schlüssel festlegen (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Bei der Arbeit mit einer nicht gepackten Erweiterung kann das Manifest eine [`"key"`-Eigenschaft](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID auf verschiedenen Maschinen zu fixieren. Dies ist hauptsächlich nützlich, wenn mit `web_accessible_resources` gearbeitet wird.

#### HTTP(S)-Anfragen im Inhalts-Skript

- **In Firefox:** Wenn ein Inhalts-Skript eine HTTP(S)-Anfrage macht, _müssen_ absolute URLs bereitgestellt werden.
- **In Chrome:** Wenn ein Inhalts-Skript eine Anfrage macht (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) zu einer relativen URL (wie `/api`), wird sie an `https://example.com/api` gesendet.

#### Inhalts-Skriptumgebung

- **In Firefox:** Der globale Bereich der [Inhalts-Skriptumgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht strikt gleich `window` ([Firefox-Bug 1208775](https://bugzil.la/1208775)). Genauer gesagt, der globale Bereich (`globalThis`) besteht wie üblich aus Standard-JavaScript-Funktionen sowie `window` als Prototyp des globalen Bereichs. Die meisten DOM-APIs werden über das `window`-Objekt von der Seite geerbt, durch [Xray-Sicht](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox), um das Inhalts-Skript vor Modifikationen durch die Webseite zu schützen. Ein Inhalts-Skript kann JavaScript-Objekte aus seinem globalen Bereich oder Xray-umwickelte Versionen von der Webseite begegnen.
- **In Chrome:** Der globale Bereich ist `window` und die verfügbaren DOM-APIs sind im Allgemeinen unabhängig von der Webseite (abgesehen von der gemeinsamen Nutzung des zugrunde liegenden DOM). Inhalts-Skripte können nicht direkt auf JavaScript-Objekte von der Webseite zugreifen.

#### Code ausführen in einer Webseite von einem Inhalts-Skript

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Inhalts-Skripts aus und `window.eval` führt Code im Kontext der Seite aus. Siehe [Verwendung von `eval` in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen immer Code im Kontext des Inhalts-Skripts aus, nicht im Kontext der Seite.

#### Variablen zwischen Inhalts-Skripten teilen

- **In Firefox:** Sie können keine Variablen zwischen Inhalts-Skripten teilen, indem Sie sie in einem Skript `this.{variableName}` zuweisen und dann versuchen, sie in einem anderen mit `window.{variableName}` zuzugreifen. Dies ist eine vom Sandkasten-Umfeld in Firefox geschaffene Einschränkung. Diese Einschränkung könnte entfernt werden; siehe [Firefox-Bug 1208775](https://bugzil.la/1208775).

#### Inhalts-Skript-Lebenszyklus während der Navigation

- **In Firefox:** Inhalts-Skripte bleiben in eine Webseite injiziert, nachdem der Benutzer weiter navigiert hat. Allerdings werden Eigenschaften des Fenster-Objekts zerstört. Wenn zum Beispiel ein Inhalts-Skript `window.prop1 = "prop"` setzt und der Benutzer dann weiter navigiert und zur Seite zurückkehrt, ist `window.prop1` undefiniert. Dieses Problem wird in [Firefox-Bug 1525400](https://bugzil.la/1525400) behandelt.

  Um das Verhalten von Chrome nachzuahmen, hören Sie auf die [pageshow](/de/docs/Web/API/Window/pageshow_event)- und [pagehide](/de/docs/Web/API/Window/pagehide_event)-Ereignisse. Simulieren Sie dann die Injektion oder Zerstörung des Inhalts-Skripts.

- **In Chrome:** Inhalts-Skripte werden zerstört, wenn der Benutzer von einer Webseite navigiert. Wenn der Benutzer auf die Zurück-Taste klickt, um über den Verlauf zur Seite zurückzukehren, wird das Inhalts-Skript in die Webseite injiziert.

#### "pro-Tab"-Zoomverhalten

- **In Firefox:** Der Zoomlevel bleibt über Seitenladungen hinweg und beim Navigieren innerhalb des Tabs erhalten.
- **In Chrome:** Zoomänderungen werden bei der Navigation zurückgesetzt; das Navigieren in einem Tab lädt Seiten immer mit ihren pro-Quelle Zoomfaktoren.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json Schlüssel

Die Hauptseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle, die die Browser-Unterstützung für `manifest.json`-Schlüssel beschreibt. Wo es Vorbehalte bezüglich der Unterstützung für einen bestimmten Schlüssel gibt, wird dies in der Tabelle mit einem Stern "\*" angegeben. Das Auswählen des Sterns erweitert die Tabelle, um eine Erklärung des Vorbehalts anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Nachrichtenübermittlung

### Verbindungsbasierte Nachrichten-Argumente

**Unter Linux und Mac:** Chrome übergibt ein Argument an die native App, das die Herkunft der Erweiterung, die sie gestartet hat, in der Form von `chrome-extension://«extensionID/»` (Schrägstrich erforderlich) enthält. Dies ermöglicht der App, die Erweiterung zu identifizieren.

**Unter Windows:** Chrome übergibt zwei Argumente:

1. Die Herkunft der Erweiterung
2. Ein Handle auf das Chrome-native Fenster, das die App gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Schlüssel wird `allowed_extensions` genannt.
- **In Chrome:** Der Manifest-Schlüssel wird `allowed_origins` genannt.

### App-Manifest-Standort

- **In Chrome:** Das App-Manifest wird an einer anderen Stelle erwartet. Siehe [Standort des nativen Nachrichtenübermittlungshosts](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in den Chrome-Dokumenten.

### App-Persistenz

- **In Firefox:** Wenn eine native Nachrichtenverbindung geschlossen wird, beendet Firefox die Unterprozesse, wenn sie sich nicht lösen. Unter Windows bringt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet das Job. Falls die native Anwendung andere Prozesse startet und möchte, dass sie offen bleiben, nachdem die native Anwendung beendet wurde, muss die native Anwendung `CreateProcess` anstelle von `ShellExecute` verwenden, um den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags)-Flag zu starten.

## Daten-Cloning-Algorithmus

Einige Erweiterungs-APIs erlauben es, Daten von einem Teil der Erweiterung an einen anderen zu senden, wie {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die `postMessage()`-Methode von {{WebExtAPIRef("runtime.port")}} und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [strukturierte Cloning-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird verwendet.
- **In Chrome:** Der [JSON-Serialisierungs-Algorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. In der Zukunft könnte auf strukturiertes Cloning umgestellt werden ([Problem 248548](https://crbug.com/248548)).

Der strukturierte Cloning-Algorithmus unterstützt mehr Typen als der JSON-Serialisierungs-Algorithmus. Eine bemerkenswerte Ausnahme sind (DOM)-Objekte mit einer `toJSON`-Methode. DOM-Objekte sind standardmäßig weder klonbar noch mit JSON serialisierbar, aber mit einer `toJSON()`-Methode können sie mit JSON serialisiert werden (aber dennoch nicht mit dem strukturierten Cloning-Algorithmus geklont werden). Beispiele für JSON-seria
lisierbare Objekte, die nicht strukturiert klonbar sind, umfassen Instanzen von [`URL`](/de/docs/Web/API/URL) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

Erweiterungen, die sich auf die `toJSON()`-Methode des JSON-Serialisierungs-Algorithmus verlassen, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} verwenden, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann, da ein geparster JSON-Wert immer strukturiert klonbar ist.
