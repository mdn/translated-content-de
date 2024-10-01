---
title: Chrome-Inkompatibilitäten
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Die WebExtension-APIs zielen darauf ab, Kompatibilität über alle gängigen Browser hinweg bereitzustellen, sodass Erweiterungen in jedem Browser mit minimalen Änderungen laufen sollten.

Es gibt jedoch erhebliche Unterschiede zwischen Chrome (und auf Chromium basierenden Browsern), Firefox und Safari. Insbesondere:

- Die Unterstützung für WebExtension-APIs variiert zwischen den Browsern. Siehe [Unterstützung von JavaScript-APIs in Browsern](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) für Details.
- Die Unterstützung für `manifest.json`-Schlüssel variiert zwischen den Browsern. Siehe den Abschnitt ["Browser-Kompatibilität"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der Seite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) für weitere Details.
- Erweiterungs-API-Namespace:

  - **In Firefox und Safari:** Erweiterungs-APIs werden unter dem `browser`-Namespace aufgerufen. Der `chrome`-Namespace wird ebenfalls für die Kompatibilität mit Chrome unterstützt.
  - **In Chrome:** Erweiterungs-APIs werden unter dem `chrome`-Namespace aufgerufen. (vgl. [Chrome Bug 798169](https://crbug.com/798169))

- Asynchrone APIs:

  - **In Firefox und Safari:** Asynchrone APIs werden mit Promises implementiert.
  - **In Chrome:** In Manifest V2 werden asynchrone APIs mit Rückruffunktionen implementiert. In Manifest V3 wird die Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden bereitgestellt. (vgl. [Chrome Bug 328932](https://crbug.com/328932)) Rückruffunktionen werden in Manifest V3 für die Abwärtskompatibilität unterstützt.

Der Rest dieser Seite beschreibt diese und andere Inkompatibilitäten im Detail.

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

- **In Chrome:** In Manifest V2 verwenden asynchrone APIs Rückruffunktionen, um Werte zurückzugeben und {{WebExtAPIRef("runtime.lastError")}}, um Fehler mitzuteilen. In Manifest V3 werden Rückruffunktionen für die Rückwärtskompatibilität unterstützt, zusammen mit der Unterstützung für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden.

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

### Firefox unterstützt sowohl die chrome- als auch browser-Namespaces

Als Hilfe beim Portieren unterstützt die Firefox-Implementierung von WebExtensions `chrome` unter Verwendung von Rückrufen und `browser` unter Verwendung von Promises. Dies bedeutet, dass viele Chrome-Erweiterungen in Firefox ohne Änderungen funktionieren.

> [!NOTE]
> Der `browser`-Namespace wird von Firefox und Safari unterstützt. Chrome bietet den `browser`-Namespace nicht an, bis [Chrome bug 798169](https://crbug.com/798169) gelöst ist.

Wenn Sie sich entscheiden, Ihre Erweiterung so zu schreiben, dass sie `browser` und Promises verwendet, bietet Firefox ein Polyfill, das es ermöglichen sollte, sie in Chrome auszuführen: <https://github.com/mozilla/webextension-polyfill>.

### Teilweise unterstützte APIs

Die Seite [Unterstützung von JavaScript-APIs in Browsern](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die in Firefox Unterstützung haben. Wo es Einschränkungen bezüglich der Unterstützung einer API-Methode, eines Attributs, Typs oder Ereignisses gibt, wird dies in diesen Tabellen mit einem Sternchen "\*" angezeigt. Wenn Sie das Sternchen auswählen, wird die Tabelle erweitert, um eine Erklärung der Einschränkung anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Der Rest dieses Abschnitts beschreibt die Hauptkompatibilitätsprobleme, die Sie berücksichtigen müssen, wenn Sie eine browserübergreifende Erweiterung erstellen. Vergessen Sie nicht, die Browser-Kompatibilitätstabellen zu überprüfen, da sie möglicherweise zusätzliche Kompatibilitätsinformationen enthalten.

#### Notifications API

Für `notifications.create()` mit `type "basic"`:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Benutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort gelöscht.
- **In Chrome**: Dies ist nicht der Fall.

Bei mehrmaligem Aufruf von `notifications.create()` in schneller Folge:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten auf die nächsten Aufrufe innerhalb der `notifications.create()`-Rückruffunktion ist keine ausreichende Verzögerung, um dies zu verhindern.

#### Proxy API

Firefox und Chrome enthalten eine Proxy-API. Die Gestaltung dieser beiden APIs ist jedoch nicht kompatibel.

- **In Firefox**: Proxies werden mit der Eigenschaft [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) eingestellt, um [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) dynamisch bereitzustellen. Siehe [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) für weitere Informationen zur API.
- **In Chrome**: Proxy-Einstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig)-Objekt definiert. Abhängig von den Proxy-Einstellungen von Chrome können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxies werden mit der Eigenschaft [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings) eingestellt. Siehe [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy) für weitere Informationen zur API.

#### Tabs API

Beim Verwenden von `tabs.executeScript()` oder `tabs.insertCSS()`:

- **In Firefox**: Relative URLs werden relativ zur aktuellen Seiten-URL aufgelöst.
- **In Chrome**: Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend am Stamm der Erweiterung, wie folgt:

```plain
/path/to/script.js
```

Beim Aufrufen von `tabs.remove()`:

- **In Firefox**: Das `tabs.remove()`-Promise wird nach dem `beforeunload`-Ereignis erfüllt.
- **In Chrome**: Der Rückruf wartet nicht auf `beforeunload`.

#### WebRequest API

- **In Firefox:**

  - Anfragen können nur umgeleitet werden, wenn die ursprüngliche URL das Schema `http:` oder `https:` verwendet.
  - Die Berechtigung `activeTab` erlaubt nicht das Abfangen von Netzwerkanfragen im aktuellen Tab. (Siehe [bug 1617479](https://bugzil.la/1617479))
  - Ereignisse werden für Systemanfragen (zum Beispiel Erweiterungs-Updates oder Suchleisten-Vorschläge) nicht ausgelöst.

    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die {{WebExtAPIRef("webRequest.onAuthRequired")}} für Proxy-Authentifizierung abfangen müssen. Siehe die Dokumentation zu {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche (z.B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die `manifest.json`-Datei der Erweiterung einen [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel mit der URL der Erweiterungsseite enthalten.

    > **Hinweis:** _Jede_ Website kann auf diese URL verlinken oder umleiten, und Erweiterungen sollten jeden Eingabewert (z.B. POST-Daten) so behandeln, als ob er von einer nicht vertrauenswürdigen Quelle stammt, genauso wie eine normale Webseite.

  - Einige der `browser.webRequest.*`-APIs erlauben das Zurückgeben von Promises, die `webRequest.BlockingResponse` asynchron auflösen.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt asynchrones `webRequest.BlockingResponse` durch die Bereitstellung von `'asyncBlocking'` über einen Rückruf anstelle eines Promises.

#### Windows API

- **In Firefox:** `onFocusChanged` des API {{WebExtAPIRef("windows")}} wird mehrfach bei einer Fokusänderung ausgelöst.

### Nicht unterstützte APIs

#### DeclarativeContent API

- **In Firefox:** Die [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) API von Chrome ist [nicht implementiert](https://bugzil.la/1435864). Zudem [wird Firefox die `declarativeContent.RequestContentScript` API (die selten verwendet wird und in stabilen Chrome-Versionen nicht verfügbar ist) nicht unterstützen](https://bugzil.la/1323433#c16).

### Verschiedene Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in injizierten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in injizierten CSS-Dateien werden relativ zur _Seite, in die sie injiziert werden_ aufgelöst.

#### Unterstützung für Dialoge in Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) und [`prompt()`](/de/docs/Web/API/Window/prompt) werden auf Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen erhalten eine zufällige {{Glossary("UUID", "UUID")}}, die für jede Instanz von Firefox ändert: `moz-extension://«random-UUID»/«path»`. Diese Zufälligkeit kann verhindern, dass Sie Dinge tun können, wie zum Beispiel die URL Ihrer Erweiterung zur CSP-Richtlinie einer anderen Domain hinzuzufügen.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie zugänglich als `chrome-extension://«your-extension-id»/«path»`. Die Erweiterungs-ID ist für eine Erweiterung festgelegt.

#### Manifest "key"-Eigenschaft

- **In Firefox:** Da Firefox zufällige UUIDs für `web_accessible_resources` verwendet, wird diese Eigenschaft nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den `browser_specific_settings.gecko.id` Manifest-Schlüssel fixieren (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Wenn Sie mit einer nicht verpackten Erweiterung arbeiten, kann das Manifest eine [`"key"`-Eigenschaft](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID auf verschiedenen Rechnern zu fixieren. Dies ist hauptsächlich nützlich, wenn Sie mit `web_accessible_resources` arbeiten.

#### HTTP(S)-Anfragen von Content Scripts

- **In Firefox:** Wenn ein Content Script eine HTTP(S)-Anfrage macht, _müssen_ Sie absolute URLs angeben.
- **In Chrome:** Wenn ein Content Script eine Anfrage (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) an eine relative URL (wie `/api`) macht, wird sie an `https://example.com/api` gesandt.

#### Content Script Umgebung

- **In Firefox:** Der globale Scope der [Content Script Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht strikt gleich `window` ([Firefox Bug 1208775](https://bugzil.la/1208775)). Genauer gesagt, ist der globale Scope (`globalThis`) aus standardmäßigen JavaScript-Features zusammengesetzt, plus `window` als Prototyp des globalen Scopes. Die meisten DOM-APIs werden von der Seite über `window` geerbt, durch [Xray Vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox), um das Content Script vor Modifikationen durch die Webseite zu schützen. Ein Content Script kann JavaScript-Objekte aus seinem globalen Scope oder Xray-umwickelte Versionen von der Webseite treffen.
- **In Chrome:** Der globale Scope ist `window`, und die verfügbaren DOM-APIs sind im Allgemeinen unabhängig von der Webseite (außer dem Teilen des zugrunde liegenden DOMs). Content Scripts können nicht direkt auf JavaScript-Objekte von der Webseite zugreifen.

#### Code in einer Webseite aus Content Script ausführen

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Content Scripts aus und `window.eval` führt Code im Kontext der Seite aus. Siehe [Verwendung von `eval` in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen immer Code im Kontext des Content Scripts aus, nicht im Kontext der Seite.

#### Variablen zwischen Content Scripts teilen

- **In Firefox:** Sie können keine Variablen zwischen Content Scripts teilen, indem Sie sie in einem Skript `this.{variableName}` zuweisen und dann versuchen, sie in einem anderen Skript mit `window.{variableName}` zuzugreifen. Dies ist eine Beschränkung, die durch die Sandbox-Umgebung in Firefox erstellt wurde. Diese Einschränkung könnte entfernt werden; siehe [Firefox Bug 1208775](https://bugzil.la/1208775).

#### Lebenszyklus von Content Scripts während der Navigation

- **In Firefox:** Content Scripts bleiben in einer Webseite injiziert, nachdem der Benutzer weggegangen ist. Jedoch werden die Eigenschaften des Fensterobjekts zerstört. Beispiel: Wenn ein Content Script `window.prop1 = "prop"` setzt und der Benutzer dann weg navigiert und zurück zur Seite kommt, ist `window.prop1` undefiniert. Dieses Problem wird im [Firefox Bug 1525400](https://bugzil.la/1525400) verfolgt.

  Um das Verhalten von Chrome zu simulieren, horchen Sie auf die [pageshow](/de/docs/Web/API/Window/pageshow_event) und [pagehide](/de/docs/Web/API/Window/pagehide_event) Ereignisse. Simulieren Sie dann das Injizieren oder Zerstören des Content Scripts.

- **In Chrome:** Content Scripts werden zerstört, wenn der Benutzer von einer Webseite weg navigiert. Wenn der Benutzer den Zurück-Knopf drückt, um durch die Historie auf die Seite zurückzukehren, wird das Content Script in die Webseite injiziert.

#### "per-tab" Zoom-Verhalten

- **In Firefox:** Das Zoom-Level bleibt über Seitenladevorgänge und Navigation innerhalb des Tabs bestehen.
- **In Chrome:** Zoom-Änderungen werden beim Navigieren zurückgesetzt; ein Tab lädt immer Seiten mit ihren per-Origin-Zoomfaktoren.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json Schlüssel

Die Hauptseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle, die die Unterstützung von `manifest.json`-Schlüsseln in Browsern beschreibt. Wo es Einschränkungen bezüglich der Unterstützung eines bestimmten Schlüssels gibt, wird dies in der Tabelle mit einem Sternchen "\*" angezeigt. Wenn Sie das Sternchen auswählen, wird die Tabelle erweitert, um eine Anmerkung zu der Einschränkung anzuzeigen.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien in GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Messaging

### Verbindungsbasierte Messaging-Argumente

**Auf Linux und Mac:** Chrome übergibt ein Argument an die native App, welches der Ursprung der Erweiterung ist, die sie gestartet hat, in Form von `chrome-extension://«extensionID/»` (nachgestellter Schrägstrich erforderlich). Dies ermöglicht der App, die Erweiterung zu identifizieren.

**Auf Windows:** Chrome übergibt zwei Argumente:

1. Den Ursprung der Erweiterung
2. Ein Handle auf das nativen Chrome-Fenster, das die App gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Schlüssel heißt `allowed_extensions`.
- **In Chrome:** Der Manifest-Schlüssel heißt `allowed_origins`.

### App Manifest Standort

- **In Chrome:** Das App-Manifest wird an einer anderen Stelle erwartet. Siehe [Standort des nativen Messaging-Hosts](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in den Chrome-Dokumenten.

### App-Persistenz

- **In Firefox:** Wenn eine Native Messaging-Verbindung geschlossen wird, beendet Firefox die Subprozesse, falls sie sich nicht trennen. Unter Windows setzt der Browser den Prozess der nativen Anwendung in ein [Job Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Nehmen wir an, die native Anwendung startet andere Prozesse und möchte, dass sie offen bleiben, nachdem die native Anwendung beendet ist. In diesem Fall muss die native Anwendung `CreateProcess` verwenden, anstatt von `ShellExecute` den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags)-Flag zu starten.

## Datenklonierungsalgorithmus

Einige Erweiterungs-APIs erlauben es einer Erweiterung, Daten von einem Teil der Erweiterung zu einem anderen zu senden, wie z.B. {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die `postMessage()`-Methode von {{WebExtAPIRef("runtime.port")}}, und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [Strukturierte Klonalgoithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird verwendet.
- **In Chrome:** Der [JSON-Serialisierungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. Es könnte in Zukunft auf strukturiertes Klonen umgestellt werden ([Issue 248548](https://crbug.com/248548)).

Der strukturierte Klonalgoithmus unterstützt mehr Typen als der JSON-Serialisierungsalgorithmus. Eine bemerkenswerte Ausnahme sind (DOM)-Objekte mit einer `toJSON`-Methode. DOM-Objekte sind nicht standardmäßig klonbar oder JSON-serialisierbar, aber mit einer `toJSON()`-Methode können diese JSON-serialisierbar sein (aber immer noch nicht mit dem strukturierten Klonalgoithmus geklont werden). Beispiele für JSON-serialisierbare Objekte, die nicht strukturiert klonbar sind, beinhalten Instanzen von [`URL`](/de/docs/Web/API/URL) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

Erweiterungen, die auf der `toJSON()`-Methode des JSON-Serialisierungsalgorithmus basieren, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} nutzen, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann, da ein geparster JSON-Wert immer strukturell klonbar ist.
