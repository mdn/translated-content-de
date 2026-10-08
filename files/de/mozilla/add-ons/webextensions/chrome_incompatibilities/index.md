---
title: Inkompatibilitäten mit Chrome
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Die WebExtension-APIs sollen Kompatibilität zwischen allen wichtigen Browsern bieten, damit Erweiterungen mit möglichst wenigen Änderungen in jedem Browser funktionieren.

Zwischen Chrome (und Chromium-basierten Browsern), Firefox und Safari bestehen jedoch erhebliche Unterschiede. Insbesondere:

- Die Unterstützung für WebExtension-APIs unterscheidet sich je nach Browser. Einzelheiten finden Sie unter [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Die Unterstützung für `manifest.json`-Schlüssel unterscheidet sich je nach Browser. Weitere Einzelheiten finden Sie im Abschnitt [„Browser-Kompatibilität“](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der Seite zu [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Auf dieser Seite werden diese und weitere Inkompatibilitäten erläutert.

Die Unterstützung für den `browser`-Namespace und Promises ist inzwischen keine Ursache für Inkompatibilitäten mehr. Siehe [Frühere Unterschiede](#frühere_unterschiede).

## JavaScript-APIs

### Teilweise unterstützte APIs

Die Seite [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die in Firefox zumindest teilweise unterstützt werden. Einschränkungen bei der Unterstützung einer API-Methode, einer Property, eines Typs oder eines Events sind in diesen Tabellen mit einem Sternchen „\*“ gekennzeichnet. Wenn Sie das Sternchen auswählen, wird die Tabelle erweitert und ein Hinweis zur Einschränkung angezeigt.

Die Tabellen werden aus Kompatibilitätsdaten erstellt, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Im restlichen Abschnitt werden die wichtigsten Kompatibilitätsprobleme beschrieben, die Sie bei der Entwicklung einer browserübergreifenden Erweiterung berücksichtigen sollten. Prüfen Sie außerdem die Browser-Kompatibilitätstabellen, da sie zusätzliche Informationen enthalten können.

#### Notifications API

Für `notifications.create()` mit `type "basic"` gilt:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Benutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort entfernt.
- **In Chrome**: Das ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals kurz hintereinander aufrufen:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Nachfolgende Aufrufe erst innerhalb der Callback-Funktion von `notifications.create()` auszuführen, ist keine ausreichende Verzögerung, um dies zu verhindern.

#### Proxy API

Firefox und Chrome verfügen über eine Proxy API. Die beiden APIs sind jedoch unterschiedlich aufgebaut und nicht miteinander kompatibel.

- **In Firefox**: Proxys werden über die Property [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) festgelegt oder mithilfe von [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) dynamisch als [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) bereitgestellt.
  Weitere Informationen zur API finden Sie unter [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy).
- **In Chrome**: Proxy-Einstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig)-Objekt definiert. Je nach Proxy-Konfiguration von Chrome können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxys werden über die Property [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings) festgelegt.
  Weitere Informationen zur API finden Sie unter [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy).

#### Sidebar API

Firefox und Chrome bieten unterschiedliche, nicht miteinander kompatible APIs für die Arbeit mit einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars).

- **In Firefox (und Opera)**: Eine Sidebar wird mit dem Manifest-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) angegeben und mit der {{WebExtAPIRef("sidebarAction")}} API gesteuert.
- **In Chrome**: Eine anfängliche Sidebar kann mit dem Manifest-Schlüssel `side_panel` angegeben werden. Anschließend können Panels mit der [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) gesteuert werden.

#### Tabs API

Bei der Verwendung von `tabs.executeScript()` oder `tabs.insertCSS()` gilt:

- **In Firefox**: Übergebene relative URLs werden relativ zur URL der aktuellen Seite aufgelöst.
- **In Chrome**: Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Damit der Code browserübergreifend funktioniert, können Sie den Pfad als absolute URL angeben, die beim Stammverzeichnis der Erweiterung beginnt, beispielsweise so:

```plain
/path/to/script.js
```

Beim Aufruf von `tabs.remove()` gilt:

- **In Firefox**: Das von `tabs.remove()` zurückgegebene Promise wird nach dem `beforeunload`-Event erfüllt.
- **In Chrome**: Der Callback wartet nicht auf `beforeunload`.

#### WebRequest API

- **In Firefox:**
  - Requests können nur umgeleitet werden, wenn ihre ursprüngliche URL das Schema `http:` oder `https:` verwendet.
  - Die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) erlaubt es nicht, Netzwerkanfragen im aktuellen Tab abzufangen. (Siehe [Bug 1617479](https://bugzil.la/1617479).)
  - Bei Systemanfragen (beispielsweise für Updates von Erweiterungen oder Vorschläge in der Suchleiste) werden keine Events ausgelöst.
    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die {{WebExtAPIRef("webRequest.onAuthRequired")}} zur Proxy-Authentifizierung abfangen müssen. Weitere Informationen finden Sie in der Dokumentation zu {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche URL (z. B. eine HTTPS-URL) auf eine [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss ihre `manifest.json`-Datei einen [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel mit der URL der Erweiterungsseite enthalten.

    > [!NOTE]
    > _Jede_ Website kann auf diese URL verlinken oder dorthin umleiten. Erweiterungen sollten daher sämtliche Eingaben (beispielsweise POST-Daten) als Daten aus einer nicht vertrauenswürdigen Quelle behandeln, wie es auch eine gewöhnliche Webseite tun sollte.

  - Einige der `browser.webRequest.*`-APIs erlauben die Rückgabe von Promises, die asynchron zu einem `webRequest.BlockingResponse` aufgelöst werden.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt eine asynchrone `webRequest.BlockingResponse`, indem `'asyncBlocking'` angegeben und statt eines Promise ein Callback verwendet wird.

#### Windows API

- **In Firefox:** `onFocusChanged` der {{WebExtAPIRef("windows")}} API wird bei einer Fokusänderung mehrfach ausgelöst.

### Nicht unterstützte APIs

#### Debugger API

- **In Firefox:** Die [debugger](https://developer.chrome.com/docs/extensions/reference/api/debugger) API von Chrome [ist nicht implementiert](https://bugzil.la/1316741).

#### DeclarativeContent API

- **In Firefox:** Die [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) API von Chrome [ist nicht implementiert](https://bugzil.la/1435864). Außerdem wird Firefox die `declarativeContent.RequestContentScript` API [nicht unterstützen](https://bugzil.la/1323433#c16). Diese wird selten verwendet und ist in stabilen Chrome-Versionen nicht verfügbar.

### Weitere Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in injizierten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in injizierten CSS-Dateien werden relativ zu _der Seite, in die sie injiziert werden_, aufgelöst.

#### Unterstützung für Dialoge in Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) und [`prompt()`](/de/docs/Web/API/Window/prompt) werden in Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen erhalten eine zufällige {{Glossary("UUID", "UUID")}}, die sich bei jeder Firefox-Instanz ändert: `moz-extension://«random-UUID»/«path»`. Dadurch kann beispielsweise verhindert werden, dass Sie die URL Ihrer Erweiterung zur CSP-Richtlinie einer anderen Domain hinzufügen.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie unter `chrome-extension://«your-extension-id»/«path»` erreichbar. Die Erweiterungs-ID ist für eine Erweiterung fest.

#### Manifest-Property „key“

- **In Firefox:** Da Firefox für `web_accessible_resources` zufällige UUIDs verwendet, wird diese Property nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den Manifest-Schlüssel `browser_specific_settings.gecko.id` festlegen (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Bei der Arbeit mit einer nicht gepackten Erweiterung kann das Manifest eine [`"key"`-Property](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID auf verschiedenen Rechnern beizubehalten. Dies ist vor allem bei der Arbeit mit `web_accessible_resources` nützlich.

#### HTTP(S)-Anfragen aus Content Scripts

- **In Firefox:** Wenn ein Content Script eine HTTP(S)-Anfrage stellt, _müssen_ Sie eine absolute URL angeben.
- **In Chrome:** Wenn ein Content Script eine Anfrage an eine relative URL (wie `/api`) stellt, beispielsweise mit [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch), wird sie an `https://example.com/api` gesendet.

#### Content-Script-Umgebung

- **In Firefox:** Der globale Gültigkeitsbereich der [Content-Script-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht strikt identisch mit `window` ([Firefox-Bug 1208775](https://bugzil.la/1208775)). Genauer gesagt besteht der globale Gültigkeitsbereich (`globalThis`) wie üblich aus den Standardfunktionen von JavaScript; hinzu kommt `window` als Prototyp des globalen Gültigkeitsbereichs. Die meisten DOM-APIs werden über `window` von der Seite geerbt. Dabei schützt [Xray vision](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox) das Content Script vor Änderungen durch die Webseite. Ein Content Script kann auf JavaScript-Objekte aus seinem eigenen globalen Gültigkeitsbereich oder auf Xray-umhüllte Versionen von Objekten der Webseite treffen.
- **In Chrome:** Der globale Gültigkeitsbereich ist `window`, und die verfügbaren DOM-APIs sind im Allgemeinen unabhängig von der Webseite (abgesehen vom gemeinsam genutzten zugrunde liegenden DOM). Content Scripts können nicht direkt auf JavaScript-Objekte der Webseite zugreifen.

#### Event-Handler der Seite in Content Scripts

- **In Firefox:** Es werden nicht für jede Ausführungsumgebung separate Event-Handler verwaltet. Das bedeutet, dass das Content Script, das zuletzt `element.onclick = xxx` ausführt, die Event-Handler der Seite oder anderer Erweiterungen überschreibt.
- **In Chrome:** Für jede Ausführungsumgebung werden separate Event-Handler verwaltet. Chrome behält daher die Event-Handler der Seite und jeder Erweiterung bei, die solche Handler registriert.

Um diese Inkonsistenz zu umgehen, registrieren Sie Event-Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Weitere Informationen finden Sie unter [Firefox-Bug 1965975](https://bugzil.la/1965975#c5).

#### Code aus einem Content Script auf einer Webseite ausführen

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Content Scripts aus, während `window.eval` Code im Kontext der Seite ausführt. Siehe [Verwendung von `eval` in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen Code immer im Kontext des Content Scripts aus, nicht im Kontext der Seite.

#### Variablen zwischen Content Scripts teilen

- **In Firefox:** Sie können Variablen nicht zwischen Content Scripts teilen, indem Sie sie in einem Script `this.{variableName}` zuweisen und anschließend in einem anderen Script versuchen, über `window.{variableName}` darauf zuzugreifen. Diese Einschränkung ergibt sich aus der Sandbox-Umgebung von Firefox. Sie wird möglicherweise aufgehoben; siehe [Firefox-Bug 1208775](https://bugzil.la/1208775).

#### Lebenszyklus von Content Scripts bei der Navigation

- **In Firefox:** Content Scripts bleiben in eine Webseite injiziert, nachdem der Benutzer sie verlassen hat. Die Properties des `window`-Objekts werden jedoch gelöscht. Wenn ein Content Script beispielsweise `window.prop1 = "prop"` setzt und der Benutzer die Seite verlässt und anschließend zu ihr zurückkehrt, ist `window.prop1` nicht definiert. Dieses Problem wird unter [Firefox-Bug 1525400](https://bugzil.la/1525400) verfolgt.

  Um das Verhalten von Chrome nachzubilden, achten Sie auf die Events [pageshow](/de/docs/Web/API/Window/pageshow_event) und [pagehide](/de/docs/Web/API/Window/pagehide_event). Simulieren Sie anschließend das Injizieren beziehungsweise Entfernen des Content Scripts.

- **In Chrome:** Content Scripts werden entfernt, wenn der Benutzer eine Webseite verlässt. Wenn der Benutzer über die Zurück-Schaltfläche im Browserverlauf zur Seite zurückkehrt, wird das Content Script erneut in die Webseite injiziert.

#### Zoomverhalten pro Tab

- **In Firefox:** Die Zoomstufe bleibt beim Laden anderer Seiten und bei der Navigation innerhalb des Tabs erhalten.
- **In Chrome:** Zoomänderungen werden bei der Navigation zurückgesetzt; Seiten werden in einem Tab immer mit dem Zoomfaktor ihres jeweiligen Ursprungs geladen.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json-Schlüssel

Die Hauptseite zu [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle zur Browserunterstützung der `manifest.json`-Schlüssel. Einschränkungen bei der Unterstützung eines Schlüssels sind in der Tabelle mit einem Sternchen „\*“ gekennzeichnet. Wenn Sie das Sternchen auswählen, wird die Tabelle erweitert und ein Hinweis zur Einschränkung angezeigt.

Die Tabellen werden aus Kompatibilitätsdaten erstellt, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Messaging

### Argumente bei verbindungsbasiertem Messaging

**Unter Linux und Mac:** Chrome übergibt der nativen Anwendung ein Argument: den Ursprung der Erweiterung, die sie gestartet hat, in der Form `chrome-extension://«extensionID/»` (der abschließende Schrägstrich ist erforderlich). Dadurch kann die Anwendung die Erweiterung identifizieren.

**Unter Windows:** Chrome übergibt zwei Argumente:

1. Den Ursprung der Erweiterung
2. Ein Handle auf das native Chrome-Fenster, das die Anwendung gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Schlüssel heißt `allowed_extensions`.
- **In Chrome:** Der Manifest-Schlüssel heißt `allowed_origins`.

### Speicherort des Anwendungsmanifests

- **In Chrome:** Das Anwendungsmanifest wird an einem anderen Ort erwartet. Siehe [Speicherort des Native-Messaging-Hosts](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in der Chrome-Dokumentation.

### Fortbestehen der Anwendung

- **In Firefox:** Wenn eine Native-Messaging-Verbindung geschlossen wird, beendet Firefox die Unterprozesse, sofern sie sich nicht vom übergeordneten Prozess lösen. Unter Windows ordnet der Browser den Prozess der nativen Anwendung einem [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) zu und beendet den Job. Wenn die native Anwendung weitere Prozesse startet, die nach dem Beenden der nativen Anwendung weiterlaufen sollen, muss sie zum Starten des zusätzlichen Prozesses `CreateProcess` statt `ShellExecute` mit dem Flag [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) verwenden.

## Algorithmus zum Klonen von Daten

Einige Erweiterungs-APIs ermöglichen es einer Erweiterung, Daten zwischen ihren Komponenten zu senden. Dazu gehören {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die Methode `postMessage()` von {{WebExtAPIRef("runtime.port")}} und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird verwendet.
- **In Chrome:** Der [JSON-Serialisierungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. Möglicherweise wird künftig auf Structured Cloning umgestellt ([Issue 248548](https://crbug.com/248548)).

Der Structured-Clone-Algorithmus unterstützt mehr Typen als der JSON-Serialisierungsalgorithmus. Eine wichtige Ausnahme sind (DOM-)Objekte mit einer `toJSON`-Methode. DOM-Objekte sind standardmäßig weder klonbar noch JSON-serialisierbar. Mit einer `toJSON()`-Methode können sie jedoch JSON-serialisiert werden (lassen sich aber weiterhin nicht mit dem Structured-Clone-Algorithmus klonen). Zu den JSON-serialisierbaren Objekten, die sich nicht strukturiert klonen lassen, gehören Instanzen von [`URL`](/de/docs/Web/API/URL) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

Erweiterungen, die auf die `toJSON()`-Methode des JSON-Serialisierungsalgorithmus angewiesen sind, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} verwenden, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann: Ein geparster JSON-Wert lässt sich immer strukturiert klonen.

## Frühere Unterschiede

### chrome.\*- und browser.\*-Namespace

Vor Chrome 148 stellte Chrome APIs nur unter dem `chrome`-Namespace und nicht unter `browser` bereit. Beispielsweise musste statt `browser.browserAction.setIcon({ path: "path/to/icon.png" });` der Aufruf `chrome.browserAction.setIcon({ path: "path/to/icon.png" });` verwendet werden.

Mit Manifest V3 führte Chrome die Unterstützung für Promise-basierte Rückgabewerte von APIs ein; einige APIs wurden erst später unterstützt. Vor der Einführung von Promises wurde bei einem Aufruf wie `browser.cookies.set({ url: "https://developer.mozilla.org/" }).then(logCookie);` stattdessen ein Callback verwendet: `browser.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);`.

Für Erweiterungen, die den Manifest-Schlüssel `devtools_page` verwenden, wurde die Unterstützung für den `browser`-Namespace und Promises in Chrome 152 eingeführt.

Wenn Sie ältere Chrome-Versionen unterstützen möchten, bietet Firefox ein Polyfill für den `browser`-Namespace und Promises: <https://github.com/mozilla/webextension-polyfill>.
