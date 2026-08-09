---
title: Chrome-Inkompatibilitäten
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
l10n:
  sourceCommit: ada91b2a91e483138528d3c79e9350eb493d3d22
---

Die WebExtension-APIs zielen darauf ab, Kompatibilität über alle wichtigen Browser hinweg bereitzustellen, sodass Erweiterungen mit minimalen Änderungen in jedem Browser ausgeführt werden sollen.

Es gibt jedoch erhebliche Unterschiede zwischen Chrome (und Chromium-basierten Browsern), Firefox und Safari. Insbesondere:

- Die Unterstützung für WebExtension-APIs variiert zwischen den Browsern. Siehe die [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) für Details.
- Die Unterstützung für `manifest.json`-Schlüssel unterscheidet sich ebenfalls. Siehe den Abschnitt ["Browser-Kompatibilität"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility) auf der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Seite für mehr Details.

Der Rest dieser Seite beschreibt diese und andere Inkompatibilitäten.

Die Unterstützung für den `browser`-Namespace und Promises ist keine Quelle der Inkompatibilität mehr. Siehe [Historische Unterschiede](#historische_unterschiede).

## JavaScript-APIs

### Teilweise unterstützte APIs

Die Seite [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) enthält Kompatibilitätstabellen für alle APIs, die in Firefox Unterstützung haben. Wo es Vorbehalte bezüglich der Unterstützung einer API-Methode, -Eigenschaft, -Typ oder -Ereignis gibt, wird dies in diesen Tabellen mit einem Sternchen "\*" angezeigt. Durch Klicken auf das Sternchen wird die Tabelle erweitert, um eine Notiz zu zeigen, die den Vorbehalt erklärt.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

Der Rest dieses Abschnitts beschreibt die wichtigsten Kompatibilitätsprobleme, die Sie beim Erstellen einer browserübergreifenden Erweiterung berücksichtigen müssen. Denken Sie auch daran, die Browser-Kompatibilitätstabellen zu überprüfen, da sie zusätzliche Kompatibilitätsinformationen enthalten können.

#### Notifications API

Für `notifications.create()` mit `type "basic"`:

- **In Firefox**: `iconUrl` ist optional.
- **In Chrome**: `iconUrl` ist erforderlich.

Wenn der Nutzer auf eine Benachrichtigung klickt:

- **In Firefox**: Die Benachrichtigung wird sofort gelöscht.
- **In Chrome**: Dies ist nicht der Fall.

Wenn Sie `notifications.create()` mehrmals in schneller Abfolge aufrufen:

- **In Firefox**: Die Benachrichtigungen werden möglicherweise nicht angezeigt. Das Warten auf nachfolgende Aufrufe innerhalb der `notifications.create()` Rückruffunktion ist keine ausreichende Verzögerung, um dies zu verhindern.

#### Proxy API

Firefox und Chrome enthalten eine Proxy-API. Allerdings ist das Design dieser beiden APIs inkompatibel.

- **In Firefox**: Proxies werden mithilfe der [proxy.settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) Eigenschaft oder [proxy.onRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) gesetzt, um dynamisch [ProxyInfo](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo) bereitzustellen.
  Siehe [proxy](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) für mehr Informationen über die API.
- **In Chrome**: Proxy-Einstellungen werden in einem [`proxy.ProxyConfig`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyConfig) Objekt definiert. Abhängig von Chromes Proxy-Einstellungen können die Einstellungen [`proxy.ProxyRules`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-ProxyRules) oder ein [`proxy.PacScript`](https://developer.chrome.com/docs/extensions/reference/api/proxy#type-PacScript) enthalten. Proxies werden mithilfe der [proxy.settings](https://developer.chrome.com/docs/extensions/reference/api/proxy#property-settings) Eigenschaft gesetzt.
  Siehe [chrome.proxy](https://developer.chrome.com/docs/extensions/reference/api/proxy) für mehr Informationen über die API.

#### Sidebar API

Firefox und Chrome bieten inkompatible APIs für die Arbeit mit einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars).

- **In Firefox (und Opera)**: Eine Sidebar wird mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel angegeben und mit der {{WebExtAPIRef("sidebarAction")}} API manipuliert.
- **In Chrome**: Eine initiale Sidebar kann mit dem `side_panel` Manifest-Schlüssel angegeben werden. Die [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel) ermöglicht dann die Bearbeitung von Panels.

#### Tabs API

Wenn `tabs.executeScript()` oder `tabs.insertCSS()` verwendet wird:

- **In Firefox**: Relative URLs werden relativ zur aktuellen Seiten-URL aufgelöst.
- **In Chrome**: Relative URLs werden relativ zur Basis-URL der Erweiterung aufgelöst.

Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend am Root der Erweiterung, wie folgt:

```plain
/path/to/script.js
```

Beim Aufruf von `tabs.remove()`:

- **In Firefox**: Das `tabs.remove()`-Versprechen wird nach dem `beforeunload`-Ereignis erfüllt.
- **In Chrome**: Der Rückruf wartet nicht auf `beforeunload`.

#### WebRequest API

- **In Firefox:**
  - Anfragen können nur umgeleitet werden, wenn ihre ursprüngliche URL das `http:`- oder `https:`-Schema verwendet.
  - Die `activeTab`-Berechtigung ermöglicht nicht das Abfangen von Netzwerk-Anfragen im aktuellen Tab. (Siehe [Bug 1617479](https://bugzil.la/1617479))
  - Ereignisse werden für Systemanfragen (zum Beispiel Erweiterungs-Upgrades oder Suchleisten-Vorschläge) nicht ausgelöst.
    - **Ab Firefox 57:** Firefox macht eine Ausnahme für Erweiterungen, die {{WebExtAPIRef("webRequest.onAuthRequired")}} für Proxy-Authentifizierung abfangen müssen. Siehe die Dokumentation für {{WebExtAPIRef("webRequest.onAuthRequired")}}.

  - Wenn eine Erweiterung eine öffentliche (z. B. HTTPS) URL zu einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) umleiten möchte, muss die `manifest.json`-Datei der Erweiterung einen [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Schlüssel mit der URL der Erweiterungsseite enthalten.

    > [!NOTE]
    > _Jede_ Website kann zu dieser URL verlinken oder umleiten, und Erweiterungen sollten jegliche Eingaben (zum Beispiel POST-Daten) so behandeln, als kämen sie von einer nicht vertrauenswürdigen Quelle, wie es normale Webseiten tun sollten.

  - Einige der `browser.webRequest.*` APIs ermöglichen es, Promise zu nutzen, die `webRequest.BlockingResponse` asynchron zurückgeben.

- **In Chrome:** Nur `webRequest.onAuthRequired` unterstützt asynchrone `webRequest.BlockingResponse` durch Angabe von `'asyncBlocking'`, mittels eines Rückrufs anstelle eines Promise.

#### Windows API

- **In Firefox:** `onFocusChanged` der {{WebExtAPIRef("windows")}} API wird bei einer Fokusänderung mehrmals ausgelöst.

### Nicht unterstützte APIs

#### Debugger API

- **In Firefox:** Chromes [debugger](https://developer.chrome.com/docs/extensions/reference/api/debugger) API [ist nicht implementiert](https://bugzil.la/1316741).

#### DeclarativeContent API

- **In Firefox:** Chromes [declarativeContent](https://developer.chrome.com/docs/extensions/reference/api/declarativeContent) API [ist nicht implementiert](https://bugzil.la/1435864). Zusätzlich wird Firefox [nicht die Unterstützung](https://bugzil.la/1323433#c16) der `declarativeContent.RequestContentScript` API (die selten genutzt wird und in stabilen Versionen von Chrome nicht verfügbar ist) unterstützen.

### Verschiedene Inkompatibilitäten

#### URLs in CSS

- **In Firefox:** URLs in injizierten CSS-Dateien werden relativ zur _CSS-Datei_ aufgelöst.
- **In Chrome:** URLs in injizierten CSS-Dateien werden relativ zu _der Seite, in die sie injiziert werden_, aufgelöst.

#### Unterstützung für Dialoge in Hintergrundseiten

- **In Firefox:** [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) und [`prompt()`](/de/docs/Web/API/Window/prompt) werden auf Hintergrundseiten nicht unterstützt.

#### web_accessible_resources

- **In Firefox:** Ressourcen werden eine zufällige {{Glossary("UUID", "UUID")}} zugewiesen, die sich für jede Instanz von Firefox ändert: `moz-extension://«random-UUID»/«path»`. Diese Zufälligkeit kann verhindern, dass Sie Dinge tun, wie zum Beispiel die URL Ihrer Erweiterung zur CSP-Richtlinie einer anderen Domain hinzuzufügen.
- **In Chrome:** Wenn eine Ressource in `web_accessible_resources` aufgeführt ist, ist sie erreichbar als `chrome-extension://«your-extension-id»/«path»`. Die Erweiterungs-ID ist für eine Erweiterung fixiert.

#### Manifest "key"-Eigenschaft

- **In Firefox:** Da Firefox zufällige UUIDs für `web_accessible_resources` verwendet, wird diese Eigenschaft nicht unterstützt. Firefox-Erweiterungen können ihre Erweiterungs-ID über den `browser_specific_settings.gecko.id` Manifest-Schlüssel fixieren (siehe [browser_specific_settings.gecko](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties)).
- **In Chrome:** Wenn Sie mit einer nicht gepackten Erweiterung arbeiten, kann das Manifest eine [`"key"`-Eigenschaft](https://developer.chrome.com/docs/extensions/reference/manifest/key) enthalten, um die Erweiterungs-ID über verschiedene Maschinen hinweg zu fixieren. Dies ist hauptsächlich nützlich, wenn mit `web_accessible_resources` gearbeitet wird.

#### HTTP(S)-Anfragen von Inhalts-Skripten

- **In Firefox:** Wenn ein Inhalts-Skript eine HTTP(S)-Anfrage macht, _müssen_ Sie absolute URLs bereitstellen.
- **In Chrome:** Wenn ein Inhalts-Skript eine Anfrage macht (zum Beispiel mittels [`fetch()`](/de/docs/Web/API/Fetch_API/Using_Fetch)) zu einer relativen URL (wie `/api`), wird sie an `https://example.com/api` gesendet.

#### Umgebung des Inhalts-Skripts

- **In Firefox:** Der globale Bereich des [Inhalts-Skript-Umfeldes](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) ist nicht strikt gleich `window` ([Firefox-Bug 1208775](https://bugzil.la/1208775)). Genauer gesagt, der globale Bereich (`globalThis`) besteht aus den üblichen standardmäßigen JavaScript-Funktionen, sowie `window` als Prototyp des globalen Bereichs. Die meisten DOM-APIs werden von der Seite durch `window` vererbt, durch die [Xray-Sicht](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#xray_vision_in_firefox), um das Inhalts-Skript vor Modifikationen durch die Webseite zu schützen. Ein Inhalts-Skript kann JavaScript-Objekte aus seinem globalen Bereich oder Xray-umhüllte Versionen von der Webseite begegnen.
- **In Chrome:** Der globale Bereich ist `window`, und die verfügbaren DOM-APIs sind im Allgemeinen unabhängig von der Webseite (außer dass sie das zugrunde liegende DOM teilen). Inhalts-Skripte können direkt auf JavaScript-Objekte von der Webseite nicht zugreifen.

#### Ereignishandhabung in Inhalts-Skripten

- **In Firefox:** Separate Ereignishandhaber werden nicht pro Welt aufrechterhalten. Das bedeutet, dass das zuletzt angeforderte Inhalts-Skript `element.onclick = xxx` die Ereignishandler der Seite oder anderer Erweiterungen überschreibt.
- **In Chrome:** Separate Ereignishandhaber werden pro Welt aufrechterhalten, sodass Chrome Ereignishandhaber für eine Seite und jede anfragende Erweiterung pflegt.

Um diese Inkonsistenz zu umgehen, verwenden Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um Ereignis-Listener zu registrieren. Siehe [Firefox-Bug 1965975](https://bugzil.la/1965975#c5) für mehr Informationen.

#### Ausführen von Code auf einer Webseite aus dem Inhalts-Skript

- **In Firefox:** {{jsxref("Global_Objects/eval", "eval")}} führt Code im Kontext des Inhalts-Skripts aus und `window.eval` führt Code im Kontext der Seite aus. Siehe [Using `eval` in content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts).
- **In Chrome:** {{jsxref("Global_Objects/eval", "eval")}} und `window.eval` führen immer Code im Kontext des Inhalts-Skripts aus, nicht im Kontext der Seite.

#### Variablen zwischen Inhalts-Skripten teilen

- **In Firefox:** Sie können keine Variablen zwischen Inhalts-Skripten teilen, indem Sie sie einem `this.{variableName}` in einem Skript zuweisen und dann versuchen, sie in einem anderen mit `window.{variableName}` zuzugreifen. Dies ist eine Einschränkung, die durch die Sandbox-Umgebung in Firefox entsteht. Diese Einschränkung kann entfernt werden; siehe [Firefox-Bug 1208775](https://bugzil.la/1208775).

#### Inhalts-Skript-Lebenszyklus während der Navigation

- **In Firefox:** Inhalts-Skripte bleiben auf einer Webseite injiziert, nachdem der Nutzer die Seite verlassen hat. Allerdings werden die Eigenschaften des window-Objekts zerstört. Wenn ein Inhalts-Skript zum Beispiel `window.prop1 = "prop"` setzt und der Nutzer dann weg navigiert und zur Seite zurückkehrt, ist `window.prop1` undefiniert. Dieses Problem wird in [Firefox-Bug 1525400](https://bugzil.la/1525400) verfolgt.

  Um das Verhalten von Chrome nachzuahmen, hören Sie die [pageshow](/de/docs/Web/API/Window/pageshow_event) und die [pagehide](/de/docs/Web/API/Window/pagehide_event) Ereignisse ab. Simulieren Sie dann die Injektion oder Zerstörung des Inhalts-Skripts.

- **In Chrome:** Inhalts-Skripte werden zerstört, wenn der Nutzer von einer Webseite weg navigiert. Wenn der Nutzer auf die Rücktaste klickt, um durch die Historie zur Seite zurückzukehren, wird das Inhalts-Skript in die Webseite injiziert.

#### "pro-Tab"-Zoomverhalten

- **In Firefox:** Der Zoomlevel bleibt über Seitenladevorgänge und Navigation innerhalb des Tabs erhalten.
- **In Chrome:** Zoomänderungen werden bei der Navigation zurückgesetzt; das Navigieren in einem Tab lädt Seiten immer mit ihren per-origin Zoomfaktorin.

Siehe {{WebExtAPIRef("tabs.ZoomSettingsScope")}}.

## manifest.json-Schlüssel

Die Hauptseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthält eine Tabelle, die die Browser-Unterstützung für `manifest.json`-Schlüssel beschreibt. Wo es Vorbehalte bezüglich der Unterstützung eines bestimmten Schlüssels gibt, wird dies in der Tabelle mit einem Sternchen "\*" angezeigt. Durch Klicken auf das Sternchen wird die Tabelle erweitert, um eine Notiz zu zeigen, die den Vorbehalt erklärt.

Die Tabellen werden aus Kompatibilitätsdaten generiert, die als [JSON-Dateien auf GitHub](https://github.com/mdn/browser-compat-data) gespeichert sind.

## Native Messaging

### Verbindungsgestützte Nachrichtargumente

**Auf Linux und Mac:** Chrome übergibt dem nativen App ein Argument, das der Ursprung der Erweiterung ist, die es gestartet hat, in der Form von `chrome-extension://«extensionID/»` (Schrägstrich erforderlich). Dies ermöglicht es der App, die Erweiterung zu identifizieren.

**Auf Windows:** Chrome übergibt zwei Argumente:

1. Den Ursprung der Erweiterung
2. Einen Handle zum nativen Chrome-Fenster, das die App gestartet hat

### allowed_extensions

- **In Firefox:** Der Manifest-Schlüssel heißt `allowed_extensions`.
- **In Chrome:** Der Manifest-Schlüssel heißt `allowed_origins`.

### App-Manifest-Standort

- **In Chrome:** Das App-Manifest wird an einem anderen Ort erwartet. Siehe [Native Messaging Host Standort](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) in den Chrome-Dokumenten.

### App-Persistenz

- **In Firefox:** Wenn eine Native Messaging-Verbindung geschlossen wird, tötet Firefox die Unterprozesse ab, wenn sie sich nicht lösen. Auf Windows stellt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und tötet den Job. Wenn die native Anwendung andere Prozesse startet und diese offen bleiben sollen, nachdem die native Anwendung beendet ist, muss die native Anwendung `CreateProcess` anstelle von `ShellExecute` verwenden, um den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag zu starten.

## Daten-Klon-Algorithmus

Einige Erweiterungs-APIs ermöglichen es einer Erweiterung, Daten von einem Teil der Erweiterung zu einem anderen zu senden, wie {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("tabs.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, die `postMessage()` Methode von {{WebExtAPIRef("runtime.port")}}, und {{WebExtAPIRef("tabs.executeScript()")}}.

- **In Firefox:** Der [Strukturierte Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) wird eingesetzt.
- **In Chrome:** Der [JSON-Serialisierungs-Algorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description) wird verwendet. Er könnte in Zukunft auf strukturiertes Klonen umschalten ([Issue 248548](https://crbug.com/248548)).

Der Strukturierte Klon-Algorithmus unterstützt mehr Typen als der JSON-Serialisierungs-Algorithmus. Eine bemerkenswerte Ausnahme sind (DOM-)Objekte mit einer `toJSON` Methode. DOM-Objekte sind standardmäßig weder klonbar noch JSON-serialisierbar, aber mit einer `toJSON()` Methode können diese JSON-serialisiert werden (aber immer noch nicht mit dem strukturierten Klon-Algorithmus geklont werden). Beispiele für JSON-serialisierbare Objekte, die nicht strukturiert klonbar sind, sind Instanzen von [`URL`](/de/docs/Web/API/URL) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

Erweiterungen, die sich auf die `toJSON()` Methode des JSON-Serialisierungs-Algorithmus verlassen, können {{jsxref("JSON.stringify()")}} gefolgt von {{jsxref("JSON.parse()")}} verwenden, um sicherzustellen, dass eine Nachricht ausgetauscht werden kann, da ein geparster JSON-Wert immer strukturell klonbar ist.

## Historische Unterschiede

### chrome.\* und browser.\* Namespace

Vor Chrome 148 stellte Chrome APIs nur unter dem `chrome` Namespace anstelle von `browser` zur Verfügung. Zum Beispiel würde `browser.browserAction.setIcon({ path: "path/to/icon.png" });` stattdessen `chrome.browserAction.setIcon({ path: "path/to/icon.png" });` sein.

Chrome führte die Unterstützung für return-Werte auf Promise-Basis für APIs in Manifest V3 ein, wobei einige APIs später unterstützt wurden. Vor der Einführung von Promises würde ein Aufruf wie `browser.cookies.set({ url: "https://developer.mozilla.org/" }).then(logCookie);` eine Rückruffunktion wie diese verwenden: `browser.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);`.

Für Erweiterungen, die den `devtools_page` Manifest-Schlüssel verwenden, wurde die Unterstützung von Chrome für den `browser` Namespace und Promises in Chrome 152 eingeführt.

Wenn Sie es auf ältere Chrome-Browser-Versionen abgesehen haben, bietet Firefox ein Polyfill an, das den `browser` Namespace und die Promise-Unterstützung bereitstellt: <https://github.com/mozilla/webextension-polyfill>.
