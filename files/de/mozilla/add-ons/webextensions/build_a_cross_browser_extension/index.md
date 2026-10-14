---
title: Eine browserübergreifende Erweiterung erstellen
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: 8adfa9f21be15f90b5ee73dbfb9bc441038ac55d
---

Mit der Einführung der Browsererweiterungs-API entstand eine einheitliche Grundlage für die Entwicklung von Browsererweiterungen. Allerdings unterscheiden sich die Implementierungen und der Funktionsumfang der API zwischen den Browsern, die sie verwenden – insbesondere Chrome, Edge, Firefox, Opera und Safari.

Wenn Ihre Browsererweiterung möglichst viele Menschen erreichen soll, müssen Sie sie für mindestens zwei Browser entwickeln, möglicherweise auch für mehr. Dieser Artikel beschreibt die wichtigsten Herausforderungen bei der Erstellung einer browserübergreifenden Erweiterung und zeigt, wie Sie diese bewältigen können.

> [!NOTE]
> Die wichtigsten Browser haben Manifest V3 eingeführt. Diese Manifest-Version verbessert die Kompatibilität zwischen den Umgebungen für Browsererweiterungen, etwa durch die Verwendung des `browser.*`-Namespace und von Promises zur Verarbeitung asynchroner Ereignisse. Lesen Sie ergänzend zu diesem Leitfaden die Anleitungen zur Migration auf Manifest V3 für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate).

## Herausforderungen bei der Entwicklung plattformübergreifender Erweiterungen

Bei der Entwicklung einer plattformübergreifenden Erweiterung müssen Sie folgende Bereiche berücksichtigen:

- [API-Namespace](#api-namespace)
- [Verarbeitung asynchroner API-Ereignisse](#verarbeitung_asynchroner_api-ereignisse)
- [Unterstützung von API-Funktionen](#unterstützung_von_api-funktionen)
- [Ausführungskontexte von Content Scripts](#ausführungskontexte_von_content_scripts)
- [Background Page und Extension Service Worker (in Manifest V3)](#background_page_und_extension_service_worker)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Paketierung der Erweiterung](#paketierung_der_erweiterung)
- [Veröffentlichung der Erweiterung](#veröffentlichung_der_erweiterung)

### API-Namespace

In den wichtigsten Browsern werden zwei API-Namespaces verwendet:

- `browser.*`, der Standard für die Erweiterungs-API. Er wurde ursprünglich von Firefox und Safari verwendet und wird seit [Mitte 2026](https://developer.chrome.com/docs/extensions/develop/concepts/browser-namespace) von Chrome unterstützt (d.h. ab Chrome 148, Opera 121 und Edge 136; für Erweiterungen mit [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) jeweils vier Versionen später).
- `chrome.*`, verwendet von Chrome, Opera und Edge.

Firefox unterstützt außerdem den `chrome.*`-Namespace für APIs, die mit Chrome kompatibel sind, vor allem um die [Portierung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu erleichtern. Die Verwendung des `browser.*`-Namespace ist jedoch vorzuziehen. `browser.*` ist nicht nur der vorgeschlagene Standard, sondern verwendet auch Promises – einen modernen und praktischen Mechanismus zur Verarbeitung asynchroner Ereignisse.

### Verarbeitung asynchroner API-Ereignisse

Mit der Einführung von Manifest V3 haben alle wichtigen Browser den Standard übernommen, dass asynchrone Methoden _[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)_ zurückgeben. Firefox und Safari unterstützen Promises für alle asynchronen APIs. Seit Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Promises, sofern nicht anders dokumentiert. Für Erweiterungen, die den Manifest-Schlüssel `devtools_page` verwenden, wurde die Unterstützung für Promises mit Chrome 152 eingeführt (siehe [Chrome-Bug 500769389](https://crbug.com/500769389)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Chrome-Methoden rufen dagegen _Callbacks_ auf. Aus Kompatibilitätsgründen unterstützen alle wichtigen Browser Callbacks in allen Manifest-Versionen. Weitere Informationen finden Sie im Abschnitt [Historische Unterschiede](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#historical_differences) auf der Seite zu Chrome-Inkompatibilitäten.

Von manchen Handlern für Ereignisse der Erweiterungs-API wird erwartet, dass sie asynchron über ein `Promise` oder eine Callback-Funktion antworten. Beispielsweise kann ein Handler für das Ereignis `runtime.onMessage` [eine asynchrone Antwort mit einem `Promise` senden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) oder [einen Callback verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse). Ein `Promise` als Rückgabewert eines Event-Handlers wird von Firefox und Safari unterstützt, bislang jedoch nicht von Chrome.

Firefox unterstützt außerdem Callbacks für APIs, die den `chrome.*`-Namespace unterstützen. Dennoch wird empfohlen, Promises zu verwenden. Sie vereinfachen die Verarbeitung asynchroner Ereignisse erheblich, insbesondere wenn mehrere Ereignisse verkettet werden müssen. Wenn Sie den `browser.*`-Namespace mit Promises verwenden und Chrome 147 oder ältere Versionen unterstützen möchten, benötigen Sie einen Polyfill oder eine vergleichbare Lösung.

> [!NOTE]
> Falls Ihnen die Unterschiede zwischen diesen beiden Methoden nicht vertraut sind, lesen Sie [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises).

#### Der WebExtension browser API Polyfill

Seit Chrome 148 unterstützt Chrome den `browser`-Namespace, außer in Erweiterungen mit einer DevTools-Seite. Diese Einschränkung wurde in Chrome 152 aufgehoben (siehe [Chrome-Bug 500769389](https://crbug.com/500769389)); seitdem ist der `browser`-Namespace für alle Chrome-Erweiterungen verfügbar.

Um den `browser.*`-Namespace und Promises in älteren Versionen zu verwenden, nutzen Sie den [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill/). Dieser Polyfill gleicht Unterschiede beim API-Namespace und bei der Verarbeitung asynchroner Ereignisse zwischen Firefox, Chrome, Opera und Edge aus.

> [!NOTE]
> In Chrome 152 oder neuer hat der Polyfill keine Wirkung.

Installieren Sie den Polyfill mit npm in Ihrer Entwicklungsumgebung oder laden Sie ihn direkt von den [GitHub-Releases](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Binden Sie anschließend `browser-polyfill.js` an folgenden Stellen ein:

- In `manifest.json`, damit es für Background Scripts und Content Scripts verfügbar ist.
- In HTML-Dokumenten, etwa in `browserAction`-Popups oder Tab-Seiten.
- Im `executeScript`-Aufruf für dynamisch eingefügte Content Scripts, die über `tabs.executeScript` geladen werden, sofern es nicht bereits über eine `content_scripts`-Deklaration in `manifest.json` geladen wurde.

Der folgende Code in `manifest.json` stellt den Polyfill beispielsweise für Background Scripts bereit:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Stellen Sie sicher, dass der Polyfill in Ihrer Erweiterung ausgeführt wird, bevor andere Skripte ausgeführt werden, die den `browser.*`-API-Namespace erwarten.

> [!NOTE]
> Weitere Informationen, auch zur Verwendung des Polyfills mit einem Module Bundler, finden Sie in der [README-Datei des Projekts auf GitHub](https://github.com/mozilla/webextension-polyfill/blob/master/README.md).

Es gibt weitere Polyfills. Zum Zeitpunkt der Erstellung dieses Artikels bietet jedoch keiner davon einen vergleichbaren Abdeckungsgrad wie der WebExtension browser API Polyfill. Wenn Sie Ihre Erweiterung nicht zuerst für Firefox entwickelt haben, können Sie daher die Einschränkungen anderer Polyfills akzeptieren, Ihre Erweiterung auf Firefox portieren und browserübergreifende Unterstützung hinzufügen oder einen eigenen Polyfill entwickeln.

### Unterstützung von API-Funktionen

Die Unterschiede zwischen den API-Funktionen der wichtigsten Browser lassen sich grob in drei Kategorien einteilen:

1. **Eine Funktion wird überhaupt nicht unterstützt.**
   Zum Zeitpunkt der Erstellung dieses Artikels unterstützte Edge beispielsweise die Funktion {{WebExtAPIRef("browserSettings")}} nicht.
2. **Die Unterstützung einzelner Features einer Funktion unterscheidet sich.**
   Zum Zeitpunkt der Erstellung dieses Artikels unterstützte Firefox beispielsweise die Methode {{WebExtAPIRef("notifications.onButtonClicked")}} der Benachrichtigungsfunktion nicht, während Firefox als einziger Browser {{WebExtAPIRef("notifications.onShown")}} unterstützte.
3. **Proprietäre Funktionen unterstützen browserspezifische Features.**
   Zum Zeitpunkt der Erstellung dieses Artikels waren Container beispielsweise ein Firefox-spezifisches Feature, das von der Funktion {{WebExtAPIRef("contextualIdentities")}} unterstützt wurde.

Einzelheiten zur Unterstützung der Erweiterungs-APIs in den wichtigsten Browsern sowie in Firefox für Android und Safari auf iOS finden Sie auf der Mozilla-Developer-Network-Seite [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Informationen zur Browser-Kompatibilität finden Sie auch für jede Funktion sowie deren Methoden, Typen und Ereignisse auf den Referenzseiten zu den [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) im Mozilla Developer Network.

#### Umgang mit API-Unterschieden

Eine einfache Möglichkeit, API-Unterschiede zu berücksichtigen, besteht darin, in Ihrer Erweiterung nur Funktionen zu verwenden, die in allen Zielbrowsern dieselbe Funktionalität bieten. In der Praxis dürfte dieser Ansatz für die meisten Erweiterungen jedoch zu restriktiv sein.

Stattdessen sollten Sie bei Unterschieden zwischen den APIs alternative Implementierungen oder Fallback-Funktionen bereitstellen. (Denken Sie daran, dass dies möglicherweise auch für Unterschiede in der API-Unterstützung zwischen Versionen _desselben_ Browsers erforderlich ist.)

Es wird empfohlen, zur Laufzeit zu prüfen, ob die benötigten Features einer Funktion verfügbar sind, und auf dieser Grundlage alternative oder Fallback-Funktionen zu implementieren. Eine Laufzeitprüfung hat den Vorteil, dass Sie die Erweiterung nicht aktualisieren und erneut verteilen müssen, sobald eine Funktion verfügbar wird.

Mit dem folgenden Code können Sie eine Laufzeitprüfung durchführen:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Ausführungskontexte von Content Scripts

Content Scripts können ebenso wie Seitenskripte auf das DOM einer Seite zugreifen und es verändern. Sie können auch Änderungen sehen, die Seitenskripte am DOM vornehmen. Content Scripts erhalten jedoch eine „bereinigte“ Sicht auf das DOM.

Firefox und Chrome verwenden grundlegend unterschiedliche Ansätze, um dieses Verhalten umzusetzen: In Firefox heißt der Mechanismus Xray Vision, während Chrome isolierte Welten verwendet. Weitere Informationen finden Sie im Abschnitt [Content-Script-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) des Artikels über Content Scripts.

Firefox stellt jedoch einige APIs bereit, mit denen Content Scripts auf JavaScript-Objekte zugreifen können, die von Seitenskripten erstellt wurden, und ihre eigenen JavaScript-Objekte für Seitenskripte verfügbar machen können. Weitere Informationen finden Sie unter [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

Auch bei der [Content Security Policy (CSP) für Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts) gibt es Unterschiede.

### Background Page und Extension Service Worker

Im Rahmen der Implementierung von Manifest V3 hat Chrome Background Pages durch Extension Service Worker ersetzt. Firefox verwendet weiterhin Background Pages, während Safari sowohl Background Pages als auch Service Worker unterstützt.

Weitere Informationen finden Sie im Abschnitt zur [Browserunterstützung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite zum Manifest-Schlüssel `"background"`. Dieser Abschnitt enthält ein Beispiel für die Implementierung eines browserübergreifenden Skripts. Das Beispiel [script-on-click](https://github.com/mdn/webextensions-examples/tree/main/script-on-click) demonstriert diesen Ansatz anhand einer vollständigen, funktionsfähigen Erweiterung.

### Manifest-Schlüssel

Die Unterschiede zwischen den Schlüsseln der Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), die von den wichtigsten Browsern unterstützt werden, lassen sich grob in drei Kategorien einteilen:

1. **Angaben zur Erweiterung.**
   Zum Zeitpunkt der Erstellung dieses Artikels unterstützten Firefox und Opera beispielsweise den Schlüssel [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) für Angaben zu den Entwicklern der Erweiterung.
2. **Features der Erweiterung.**
   Zum Zeitpunkt der Erstellung dieses Artikels unterstützte Chrome beispielsweise den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) nicht.
3. **Pflichtschlüssel und optionale Schlüssel.**
   Zum Zeitpunkt der Erstellung dieses Artikels waren im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` Pflichtschlüssel.

Informationen zur Browser-Kompatibilität finden Sie für jeden Schlüssel auf den Mozilla-Developer-Network-[Referenzseiten zu den Schlüsseln von `manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Da sich `manifest.json`-Dateien in der Regel nur wenig ändern – abgesehen von Versionsnummern, die sich zwischen den Browsern unterscheiden können –, ist es meist am einfachsten, für jeden Browser eine eigene statische Version zu erstellen und zu bearbeiten.

### Paketierung der Erweiterung

Eine Erweiterung für die Verteilung über die Erweiterungs-Stores der Browser zu paketieren, ist relativ unkompliziert. Firefox, Chrome, Edge und Opera verwenden ein einfaches ZIP-Format, bei dem sich die Datei `manifest.json` im Stammverzeichnis des ZIP-Pakets befinden muss. Für Safari müssen Erweiterungen ähnlich wie Apps paketiert werden.

Einzelheiten zur Paketierung finden Sie in den Anleitungen der jeweiligen Entwicklerportale für Erweiterungen.

### Veröffentlichung der Erweiterung

Jeder der wichtigsten Browser betreibt einen Store für Browsererweiterungen. Jeder Store prüft Ihre Erweiterung auch auf Sicherheitslücken.

Daher müssen Sie das Hinzufügen und Aktualisieren Ihrer Erweiterung für jeden Store separat durchführen. In einigen Fällen können Sie Ihre Erweiterung mithilfe eines Hilfsprogramms hochladen.

Die folgende Tabelle fasst die Verfahren und Merkmale der einzelnen Stores zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Hilfsprogramm zum Hochladen</th>
      <th>Prüfverfahren vor der Veröffentlichung</th>
      <th>Zwei-Faktor-Authentifizierung für das Konto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><p>Chrome</p></th>
      <td><p>Ja</p></td>
      <td><p>Ja</p></td>
      <td><p>Automatisch, weniger als eine Stunde</p></td>
      <td><p>Ja</p></td>
    </tr>
    <tr>
      <th><p>Edge</p></th>
      <td><p>Nein</p></td>
      <td><p>Nein</p></td>
      <td><p>Keine Service-Level-Vereinbarung angegeben</p></td>
      <td><p>Ja</p></td>
    </tr>
    <tr>
      <th><p>Firefox</p></th>
      <td><p>Nein</p></td>
      <td>
        <p>
          <a
            href="https://extensionworkshop.com/documentation/develop/web-ext-command-reference/"
            >web-ext</a
          >
        </p>
      </td>
      <td>
        <p>Automatisch, wenige Sekunden.</p>
        <p>
          Nach der Veröffentlichung wird die Erweiterung manuell geprüft.
          Werden dabei Probleme festgestellt, die behoben werden müssen,
          kann die Erweiterung gesperrt werden.
        </p>
      </td>
      <td><p>Ja</p></td>
    </tr>
    <tr>
      <th><p>Opera</p></th>
      <td><p>Nein</p></td>
      <td><p>Nein</p></td>
      <td><p>Manuell, keine Service-Level-Vereinbarung angegeben</p></td>
      <td><p>Nein</p></td>
    </tr>
    <tr>
      <th><p>Safari</p></th>
      <td><p>Ja</p></td>
      <td><p>Nein</p></td>
      <td><p>Ja. Laut Apple werden im Durchschnitt 50 % der Apps innerhalb von 24 Stunden und über 90 % innerhalb von 48 Stunden geprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsnummern

Die Stores für Firefox, Chrome und Edge verlangen, dass jede hochgeladene Version eine andere Versionsnummer hat. Wenn bei einer Veröffentlichung Probleme auftreten, können Sie daher nicht zu einer früheren Versionsnummer zurückkehren.

## Fazit

Bei der Entwicklung einer plattformübergreifenden Erweiterung können Sie in einer Firefox-Implementierung den `browser.*`-Namespace und Promises verwenden. Diese Features werden ab Chrome 148 unterstützt. Wenn Sie ältere Chrome-Versionen unterstützen möchten, können Sie zusätzlich den [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) verwenden.

Der größte Teil Ihrer plattformübergreifenden Arbeit wird sich wahrscheinlich darauf konzentrieren, Unterschiede zwischen den von den wichtigsten Browsern unterstützten API-Features zu berücksichtigen. Möglicherweise müssen Sie auch Unterschiede bei der Implementierung von Content Scripts und Background Scripts beachten. Ihre `manifest.json`-Dateien lassen sich relativ einfach erstellen, auch manuell. Anschließend müssen Sie die unterschiedlichen Verfahren für die Einreichung bei den einzelnen Erweiterungs-Stores berücksichtigen.

Wenn Sie die Hinweise in diesem Artikel befolgen, sollten Sie eine Erweiterung erstellen können, die in allen vier wichtigsten Browsern gut funktioniert und deren Features damit mehr Menschen zur Verfügung stehen.
