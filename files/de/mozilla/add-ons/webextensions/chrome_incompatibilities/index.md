---
title: Chrome-Inkompatibilitäten
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: 44486ddd7fdf565786160ef8beda8528f67dafee
---

Die WebExtension-APIs zielen darauf ab, Kompatibilität in allen wichtigen Browsern bereitzustellen, sodass Erweiterungen in jedem Browser mit minimalen Änderungen laufen sollten.

Es gibt jedoch signifikante Unterschiede zwischen Chrome (und Chromium-basierten Browsern), Firefox und Safari. Insbesondere:

- Die Unterstützung für WebExtension-APIs variiert zwischen den Browsern. Details finden Sie unter [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Die Unterstützung für `manifest.json`-Keys variiert ebenfalls. Weitere Details finden Sie im Abschnitt ["Browser-Kompatibilität"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Seite.
- Erweiterungs-API-Namespace:
  - **In Firefox und Safari:** Erweiterungs-APIs werden über den `browser` Namespace aufgerufen. Der `chrome` Namespace wird ebenfalls zur Kompatibilität mit Chrome unterstützt.
  - **In Chrome:** Erweiterungs-APIs werden über den `chrome` Namespace aufgerufen. (siehe [Chrome bug 798169](https://crbug.com/798169))

- Asynchrone APIs:
  - **In Firefox und Safari:** Asynchrone APIs werden mit Versprechen implementiert.
  - **In Chrome:** In Manifest V2 werden asynchrone APIs mit Rückrufen implementiert. In Manifest V3 wird die Unterstützung von [Versprechen](https://developer.chrome.com/docs/extensions/develop/migrate#promises) für die meisten geeigneten Methoden geboten. (siehe [Chrome bug 328932](https://crbug.com/328932)) Rückrufe werden in Manifest V3 aus Gründen der Rückwärtskompatibilität unterstützt.

Der Rest dieser Seite beschreibt diese und andere Inkompatibilitäten im Detail.

## JavaScript-APIs

### chrome.\* und browser.\* Namespace

- **In Firefox und Safari:** Die APIs werden über den `browser` Namespace aufgerufen.

  ```js
  browser.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

- **In Chrome:** Die APIs werden über den `chrome` Namespace aufgerufen.

  ```js
  chrome.browserAction.setIcon({ path: "path/to/icon.png" });
  ```

### Rückrufe und Versprechen

- **In Firefox und Safari (alle Versionen) und Chrome (ab Manifest Version 3):** Asynchrone APIs verwenden [Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), um Werte zurückzugeben.

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

- **In Chrome:** In Manifest V2 verwenden asynchrone APIs Rückrufe, um Werte zurückzugeben und {{WebExtAPIRef("runtime.lastError")}} zur Fehlerkommunikation. In Manifest V3 werden Rückrufe aus Gründen der Rückwärtskompatibilität unterstützt, zusammen mit der Unterstützung von [Versprechen](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden.

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

### Firefox unterstützt sowohl die chrome als auch die browser Namensräume

Als Portierhilfe unterstützt die Firefox-Implementierung von WebExtensions `chrome` unter Verwendung von Rückrufen und `browser` unter Verwendung von Versprechen. Das bedeutet, dass viele Chrome-Erweiterungen in Firefox ohne Änderungen funktionieren.

> [!NOTE]
> Der `browser` Namespace wird von Firefox und Safari unterstützt. Chrome bietet den `browser` Namespace nicht an, bis [Chrome bug 798169](https://crbug.com/798169) gelöst ist.

Wenn Sie sich entscheiden, Ihre Erweiterung so zu schreiben, dass sie `browser` und Versprechen verwendet, bietet Firefox ein Polyfill, das es ermöglichen sollte, sie in Chrome auszuführen: <https://github.com/mozilla/webextension-polyfill>.

### Teilweise unterstützte APIs

Die Seite [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die in Firefox irgendeine Unterstützung haben. Wo es Hinweise bezüglich der Unterstützung einer API-Methode, Eigenschaft, Typ oder Ereignis gibt, wird dies in diesen Tabellen mit einem Sternchen "\*" angezeigt. Durch Auswahl des Sternchens wird die Tabelle erweitert, um eine Notiz zu erklären, die den Hinweis erklärt.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Im Folgenden werden die Hauptkompatibilitätsprobleme beschrieben, die Sie berücksichtigen müssen, wenn Sie eine plattformübergreifende Erweiterung erstellen. Denken Sie auch daran, die Browser-Kompatibilitätstabellen zu prüfen, da sie zusätzliche Kompatibilitätsinformationen enthalten können.

#### Benachrichtigungs-API

Für `notifications.create()`, mit `type "basic"`:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Benutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort gelöscht.
- **In Chrome**: Dies ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals in schneller Folge aufrufen:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten auf die nachfolgenden Aufrufe innerhalb der `notifications.create()` Rückruffunktion ist keine ausreichende Verzögerung, um dies zu verhindern.

#### Proxy-API

Firefox und Chrome enthalten eine Proxy-API. Das Design dieser beiden APIs ist jedoch inkompatibel.

- **In Firefox**: Proxies werden mit der Eigenschaft [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) dynamisch [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) gesetzt.
  Weitere Informationen zur API finden Sie unter [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy).
- **In Chrome**: Proxy-Einstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig) Objekt definiert. Abhängig von Chromes Proxyeinstellungen können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxies werden mit der Eigenschaft [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings) gesetzt.
  Weitere Informationen zur API finden Sie unter [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy).

#### Sidebar-API

Firefox und Chrome bieten inkompatible APIs für die Arbeit mit einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars).

- **In Firefox (und Opera)**: Eine Sidebar wird mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Key spezifiziert und mit der API {{WebExtAPIRef("sidebarAction")}} bearbeitet.
- **In Chrome**: Eine initiale Sidebar kann mit dem Manifest-Key `side_panel` spezifiziert werden. Die [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) ermöglicht es dann, Panels zu bearbeiten.

#### Tabs-API

Wenn Sie `tabs.executeScript()` oder `tabs.insertCSS()` verwenden:

- **In Firefox**: Relative URLs werden relativ zur aktuellen Seiten-URL aufgelöst.
- **In Chrome**: Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um plattformübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend am Root der Erweiterung, wie folgt:

```plain
/path/to/script.js
```

Beim Aufruf von `tabs.remove()`:

- **In Firefox**: Das `tabs.remove()` Versprechen wird nach dem `beforeunload` Ereignis erfüllt.
- **In Chrome**: Der Rückruf wartet nicht auf `beforeunload`.

#### WebRequest-API

- **In Firefox:**
  - Anfragen können nur umgeleitet werden, wenn ihre ursprüngliche URL das `http:` oder `https:` Schema verwendet.
  - Die `activeTab` Berechtigung erlaubt es nicht, Netzwerk-Anfragen im aktuellen Tab abzufangen. (Siehe [Bug 1617479](https://bugzil.la/1617479))
  - Ereignisse werden nicht für Systemanfragen ausgelöst (z. B. Erweiterungs-Updates oder Suchleisten-Vorschläge).
    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die {{WebExtAPIRef("webRequest.onAuthRequired")}} zum Proxy-Authentifizierung abfangen müssen. Siehe die Dokumentation zu {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die `manifest.json`-Datei der Erweiterung einen [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Key mit der URL der Erweiterungsseite enthalten.

    > [!NOTE]
    > _Jede_ Website kann zu dieser URL verlinken oder umleiten, und Erweiterungen sollten alle Eingaben (z. B. POST-Daten) so behandeln, als kämen sie von einer nicht vertrauenswürdigen Quelle, wie es bei einer normalen Webseite der Fall wäre.

  - Einige der `browser.webRequest.*` APIs erlauben es, Versprechen zurückzugeben, die `webRequest.BlockingResponse` asynchron auflösen.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt asynchrone `webRequest.BlockingResponse` durch die Bereitstellung von `'asyncBlocking'`, über einen Rückruf statt eines Versprechens.

#### Windows-API

- **In Firefox:** `onFocusChanged` der {{WebExtAPIRef("windows")}} API wird mehrmals für eine Fokussänderung ausgelöst.

### Nicht unterstützte APIs

#### Debugger-API

- **In Firefox:** Die [debugger](https://developer.chrome.com/docs/extensions/reference/api/debugger) API von Chrome [ist nicht implementiert](https://bugzil.la/1316741).

#### DeclarativeContent-API

- **In Firefox:** Die [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) API von Chrome [ist nicht implementiert](https://bugzil.la/1435864). Außerdem [wird](https://bugzil.la/1323433#c16) Firefox die `declarativeContent.RequestContentScript` API nicht unterstützen (die selten verwendet und in stabilen Versionen von Chrome nicht verfügbar ist).

### Verschiedene Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in eingefügten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in eingefügten CSS-Dateien werden relativ zur _Seite, in die sie eingefügt werden_, aufgelöst.

#### Unterstützung für Dialoge auf Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) und [`prompt()`](/de/docs/Web/API/Window/prompt) werden auf Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen werden einem zufälligen {{Glossary("UUID", "UUID")}} zugewiesen, das für jede Instanz von Firefox ändert: `moz-extension://«random-UUID»/«path»`. Diese Zufälligkeit kann verhindern, dass Sie Dinge tun, wie zum Beispiel die URL Ihrer Erweiterung zur CSP-Richtlinie eines anderen Domain hinzuzufügen.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie zugänglich als `chrome-extension://«your-extension-id»/«path»`. Die Erweiterungs-ID ist für eine Erweiterung festgelegt.

#### Manifest "key" Eigenschaft

- **In Firefox:** Da Firefox zufällige UUIDs für `web_accessible_resources` verwendet, wird diese Eigenschaft nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den `browser_specific_settings.gecko.id` Manifest-Key fixieren (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Beim Arbeiten mit einer entpackten Erweiterung kann das Manifest eine [`"key"` Eigenschaft](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID über verschiedene Maschinen hinweg zu fixieren. Dies ist hauptsächlich nützlich, wenn mit `web_accessible_resources` gearbeitet wird.

#### HTTP(S)-Anfragen durch Inhalts-Skript

- **In Firefox:** Wenn ein Inhalts-Skript eine HTTP(S)-Anfrage macht, müssen Sie absolute URLs bereitstellen.
- **In Chrome:** Wenn ein Inhalts-Skript eine Anfrage macht (zum Beispiel mittels [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) an eine relative URL (wie `/api`), wird sie an `https://example.com/api` gesendet.

#### Inhalts-Skriptumgebung

- **In Firefox:** Der globale Geltungsbereich der [Inhalts-Skriptumgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht streng gleich `window` ([Firefox bug 1208775](https://bugzil.la/1208775)). Genauer gesagt, der globale Geltungsbereich (`globalThis`) besteht aus standardmäßigen JavaScript-Funktionen wie üblich, plus `window` als Prototyp des globalen Geltungsbereichs. Die meisten DOM-APIs werden von der Seite durch `window` vererbt, durch [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox), um das Inhalts-Skript vor Modifikationen durch die Webseite zu schützen. Ein Inhalts-Skript kann JavaScript-Objekte aus seinem globalen Geltungsbereich oder Xray-umhüllte Versionen von der Webseite antreffen.
- **In Chrome:** Der globale Geltungsbereich ist `window`, und die verfügbaren DOM-APIs sind im Allgemeinen unabhängig von der Webseite (abgesehen von der gemeinsamen Nutzung des zugrunde liegenden DOMs). Inhalts-Skripte können nicht direkt auf JavaScript-Objekte von der Webseite zugreifen.

#### Inhalts-Skript-Seitenereignis-Handler

- **In Firefox:** separate Ereignis-Handler werden nicht pro Welt gepflegt. Das bedeutet, dass das jüngste Inhalts-Skript, das `element.onclick = xxx` anfordert, die Ereignis-Handler der Seite oder anderer Erweiterungen überschreibt.
- **In Chrome:** separate Ereignis-Handler werden pro Welt gepflegt, sodass Chrome Ereignis-Handler für eine Seite und jede anfordernde Erweiterung verwaltet.

Um diese Inkonsistenz zu umgehen, verwenden Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Ereignis-Listener zu registrieren. Siehe [Firefox bug 1965975](https://bugzil.la/1965975#c5) für weitere Informationen.

#### Ausführung von Code in einer Webseite aus Inhalts-Skript

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Inhalts-Skripts aus und `window.eval` führt Code im Kontext der Seite aus. Siehe [Verwendung von `eval` in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen immer Code im Kontext des Inhalts-Skripts, nicht im Kontext der Seite aus.

#### Variablen zwischen Inhalts-Skripten teilen

- **In Firefox:** Sie können keine Variablen zwischen Inhalts-Skripten teilen, indem Sie sie zu `this.{variableName}` in einem Skript zuweisen und dann versuchen, sie mit `window.{variableName}` in einem anderen abzurufen. Dieser ist eine Einschränkung der Sandbox-Umgebung in Firefox. Diese Einschränkung könnte entfernt werden; siehe [Firefox bug 1208775](https://bugzil.la/1208775).

#### Inhalts-Skript Lebenszyklus während der Navigation

- **In Firefox:** Inhalts-Skripte bleiben in einer Webseite nach der Navigation bestehen. Die Eigenschaften des Fensterobjekts werden jedoch gelöscht. Zum Beispiel, wenn ein Inhalts-Skript `window.prop1 = "prop"` setzt und der Benutzer dann navigiert und zur Seite zurückkehrt, ist `window.prop1` undefiniert. Dieses Problem wird in [Firefox bug 1525400](https://bugzil.la/1525400) verfolgt.

  Um das Verhalten von Chrome zu imitieren, hören Sie auf die [pageshow](/de/docs/Web/API/Window/pageshow_event)- und [pagehide](/de/docs/Web/API/Window/pagehide_event)-Ereignisse. Simulieren Sie dann das Einfügen oder die Zerstörung des Inhalts-Skripts.

- **In Chrome:** Inhalts-Skripte werden zerstört, wenn der Benutzer von einer Webseite weg navigiert. Wenn der Benutzer die Zurück-Taste klickt, um über die Historie zur Seite zurückzukehren, wird das Inhalts-Skript erneut in die Webseite eingefügt.

#### "pro-Tab" Zoom-Verhalten

- **In Firefox:** Der Zoom-Level bleibt bei Lade- und Navigationsvorgängen innerhalb des Tabs erhalten.
- **In Chrome:** Zoom-Änderungen werden beim Navigieren zurückgesetzt; das Navigieren eines Tabs lädt Seiten immer mit ihren pro-Herkunft-Zoomfaktoren.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json Keys

Die Hauptseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle, die die Browser-Unterstützung für `manifest.json`-Keys beschreibt. Wo es Hinweise zur Unterstützung einer bestimmten Eigenschaft gibt, wird dies in der Tabelle mit einem Sternchen "\*" angezeigt. Durch Auswahl des Sternchens wird die Tabelle erweitert, um eine Notiz zu erklären, die den Hinweis erklärt.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Messaging

### Argumente für verbindungsbasiertes Messaging

**Auf Linux und Mac:** Chrome übergibt der nativen App ein Argument, nämlich die Herkunft der Erweiterung, die sie gestartet hat, in Form von `chrome-extension://«extensionID/»` (nachgestellter Schrägstrich erforderlich). Dies ermöglicht es der App, die Erweiterung zu identifizieren.

**Auf Windows:** Chrome übergibt zwei Argumente:

1. Die Herkunft der Erweiterung
2. Ein Handle zum nativen Chrome-Fenster, das die App gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Key heißt `allowed_extensions`.
- **In Chrome:** Der Manifest-Key heißt `allowed_origins`.

### Speicherort des App-Manifests

- **In Chrome:** Das App-Manifest wird an einem anderen Ort erwartet. Siehe [Native messaging host location](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in der Chrome-Dokumentation.

### App-Bestand

- **In Firefox:** Wenn eine native Messaging-Verbindung geschlossen wird, beendet Firefox die Subprozesse, wenn sie nicht unterbrochen werden. Auf Windows platziert der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Wenn die native Anwendung andere Prozesse startet und möchte, dass sie nach dem Beenden der nativen Anwendung geöffnet bleiben, muss die native Anwendung `CreateProcess` anstelle von `ShellExecute` verwenden, um den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag zu starten.

## Daten-Klon-Algorithmus

Einige Erweiterungs-APIs erlauben es einer Erweiterung, Daten von einem Teil der Erweiterung zu einem anderen zu senden, wie {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die `postMessage()` Methode von {{WebExtAPIRef("runtime.port")}}, und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [Structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird verwendet.
- **In Chrome:** Der [JSON serialization algorithm](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. Er könnte in Zukunft zum strukturellen Klonen wechseln ([Issue 248548](https://crbug.com/248548)).

Der Structured clone algorithm unterstützt mehr Typen als der JSON serialization algorithm. Eine bemerkenswerte Ausnahme sind (DOM-)Objekte mit einer `toJSON` Methode. DOM-Objekte sind weder klonbar noch JSON-serialisierbar standardmäßig, aber mit einer `toJSON()` Methode können diese JSON-serialisiert werden (aber immer noch nicht mit dem strukturellen Klonalgorithmus geklont werden). Beispiele für JSON-serialisierbare Objekte, die nicht strukturell klonbar sind, sind Instanzen von [`URL`](/de/docs/Web/API/URL) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

Erweiterungen, die sich auf die `toJSON()` Methode des JSON serialization algorithm verlassen, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} verwenden, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann, da ein geparster JSON-Wert immer strukturell klonbar ist.
