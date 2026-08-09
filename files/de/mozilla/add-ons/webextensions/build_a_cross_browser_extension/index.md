---
title: Erstellung einer plattformübergreifenden Browsererweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: ada91b2a91e483138528d3c79e9350eb493d3d22
---

Die Einführung der API für Browsererweiterungen hat eine einheitliche Landschaft für die Entwicklung dieser Erweiterungen geschaffen. Trotzdem gibt es Unterschiede in den API-Implementierungen und der Abdeckung unter den Browsern, die die Erweiterungs-API verwenden (die wichtigsten sind Chrome, Edge, Firefox, Opera und Safari).

Um die Reichweite Ihrer Browsererweiterung zu maximieren, sollten Sie diese zumindest für zwei, wenn nicht mehr, Browser entwickeln. Dieser Artikel beleuchtet die Hauptprobleme beim Erstellen einer plattformübergreifenden Erweiterung und gibt Hinweise, wie diese Herausforderungen gemeistert werden können.

> [!NOTE]
> Die Hauptbrowser haben Manifest V3 übernommen. Diese Manifest-Version bietet eine bessere Kompatibilität zwischen den Umgebungen der Browsererweiterungen, wie z.B. Promises für die Behandlung asynchroner Ereignisse. Zusätzlich zu den Informationen in diesem Leitfaden sollten Sie die Manifest V3-Migrationsleitfäden für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate) konsultieren.

## Herausforderungen beim plattformübergreifenden Codieren von Erweiterungen

Sie müssen die folgenden Bereiche angehen, wenn Sie sich mit einer plattformübergreifenden Erweiterung befassen:

- [API-Namespace](#api-namespace)
- [Asynchrone Ereignisbehandlung der API](#asynchrone_ereignisbehandlung_der_api)
- [API-Funktionsabdeckung](#api-funktionsabdeckung)
- [Ausführungskontext von Inhalts-Skripten](#ausführungskontexte_von_inhalts-skripten)
- [Hintergrundseite versus Erweiterungs-Service-Worker (in Manifest V3)](#hintergrundseite_und_erweiterungs-service-worker)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Verpackung der Erweiterung](#verpackung_der_erweiterung)
- [Veröffentlichung der Erweiterung](#veröffentlichung_der_erweiterung)

### API-Namespace

Es gibt zwei API-Namespaces, die in den Hauptbrowsern verwendet werden:

- `browser.*`, der vorgeschlagene Standard für die Erweiterungs-API, der von Firefox und Safari verwendet wird.
- `chrome.*` wird von Chrome, Opera und Edge verwendet.

Firefox unterstützt auch den `chrome.*` Namespace für APIs, die mit Chrome kompatibel sind, hauptsächlich um das [Portieren](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu erleichtern. Dennoch wird der `browser.*` Namespace bevorzugt. Neben dem Status als vorgeschlagener Standard verwendet `browser.*` Promises, ein modernes und praktisches Mechanismus zur Behandlung asynchroner Ereignisse.

Nur bei den trivialsten Erweiterungen ist der Namespace wahrscheinlich das einzige plattformübergreifende Problem, das gelöst werden muss. Daher ist es selten, wenn überhaupt, hilfreich, dieses Problem isoliert anzugehen. Der beste Ansatz ist, es zusammen mit der asynchronen Ereignisbehandlung anzugehen.

### Asynchrone Ereignisbehandlung der API

Mit der Einführung von Manifest V3 haben alle führenden Browser den Standard übernommen, _Promises_ von asynchronen Methoden zurückzugeben. Firefox und Safari unterstützen umfassend Promises für alle asynchronen APIs. Ab Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Promises, es sei denn, es ist anderweitig dokumentiert. Die `devtools` API ist der einzige API-Namespace ohne Promise-Unterstützung ([Chromium-Bug 1510416](https://crbug.com/1510416)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Callbacks_ auf. Für die Kompatibilität unterstützen alle führenden Browser Callbacks in allen Manifest-Versionen. Weitere Informationen finden Sie im Abschnitt [Historische Unterschiede](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#historical_differences) der Chrome-Inkompatibilitäten-Seite.

Einige Handler von Erweiterungs-API-Ereignissen sollen asynchron über ein `Promise` oder eine Callback-Funktion antworten. Beispielsweise kann ein Handler des `runtime.onMessage`-Ereignisses [eine asynchrone Antwort mit einem `Promise` senden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) oder [mit einem Callback](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse). Ein `Promise` als Rückgabewert eines Ereignishandlers wird in Firefox und Safari unterstützt, jedoch noch nicht in Chrome.

Firefox unterstützt auch Callbacks für die APIs, die den `chrome.*` Namespace unterstützen. Dennoch wird die Verwendung von Promises empfohlen. Promises vereinfachen die asynchrone Ereignisbehandlung stark, insbesondere wenn mehrere Ereignisse miteinander verkettet werden müssen. Dies bedeutet, dass ein Polyfill oder Ähnliches verwendet wird, sodass Ihre Erweiterung den `browser.*` Namespace in Firefox und Safari verwendet und `chrome.*` in Chrome, Opera und Edge.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, sehen Sie sich [Verständnis von asynchronem JavaScript: Callbacks, Promises und Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

#### Das WebExtension Browser API Polyfill

Wie können Sie Promises auf einfache Weise nutzen? Der Lösungsansatz besteht darin, für Firefox unter Verwendung von Promises zu programmieren und das [WebExtension Browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) zu verwenden, um Chrome, Opera und Edge abzudecken.

Dieses Polyfill löst die Probleme mit dem API-Namespace und der asynchronen Ereignisbehandlung in Firefox, Chrome, Opera und Edge.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung mit npm oder laden Sie es direkt von den [GitHub-Veröffentlichungen](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Verweisen Sie dann auf `browser-polyfill.js` in:

- `manifest.json`, um es für Hintergrund- und Content-Skripten verfügbar zu machen.
- HTML-Dokumenten, wie `browserAction`-Popups oder Tab-Seiten.
- Dem `executeScript`-Aufruf in dynamisch injizierten Content-Skripten, die von `tabs.executeScript` geladen werden, falls es nicht mithilfe einer `content_scripts`-Deklaration in `manifest.json` geladen wurde.

Zum Beispiel macht dieser `manifest.json` Code das Polyfill für Hintergrundskripte verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel ist es, sicherzustellen, dass das Polyfill in Ihrer Erweiterung vor allen anderen Skripten, die den `browser.*` API-Namespace erwarten, ausgeführt wird.

> [!NOTE]
> Weitere Einzelheiten und Informationen zur Verwendung des Polyfills mit einem Modul-Bundler finden Sie in der [Readme des Projekts auf GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Es gibt andere Polyfill-Optionen. Zum Zeitpunkt der Erstellung dieses Artikels bietet jedoch keine der anderen Optionen die Deckung des WebExtension Browser API Polyfills. Wenn Sie Firefox nicht als Ihre erste Wahl ausgewählt haben, bestehen Ihre Optionen darin, die Einschränkungen alternativer Polyfills zu akzeptieren, nach Firefox zu portieren und eine plattformübergreifende Unterstützung hinzuzufügen oder Ihr eigenes Polyfill zu entwickeln.

### API-Funktionsabdeckung

Die Unterschiede in den von den Hauptbrowsern angebotenen API-Funktionen fallen in drei breite Kategorien:

1. **Fehlende Unterstützung für eine komplette Funktion.**
   Zum Beispiel unterstützte Edge zum Zeitpunkt der Erstellung dieses Artikels die {{WebExtAPIRef("browserSettings")}} Funktion nicht.
2. **Variationen in der Unterstützung von Funktionen innerhalb einer Funktion.**
   Zum Beispiel unterstützt Firefox zum Zeitpunkt der Erstellung dieses Artikels nicht die Benachrichtigungsmethode {{WebExtAPIRef("notifications.onButtonClicked")}}, während Firefox der einzige Browser ist, der {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen, die browserspezifische Funktionen unterstützen.**
   Zum Beispiel war "Containers" ein Firefox-spezifisches Feature, das von der {{WebExtAPIRef("contextualIdentities")}} Funktion unterstützt wird.

Details zur Unterstützung der Erweiterungs-APIs unter den Hauptbrowsern und Firefox für Android und Safari auf iOS finden Sie auf der Mozilla Developer Network-Seite [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Informationen zur Browser-Kompatibilität sind auch für jede Funktion und ihre Methoden, Typen und Ereignisse in den Mozilla Developer Network [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) Referenzseiten enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz zur Bewältigung von API-Unterschieden besteht darin, die Funktionen zu beschränken, die in Ihrer Erweiterung verwendet werden, auf Funktionen, die über Ihre gesamte Palette der Zielbrowser hinweg dieselbe Funktionalität bieten. In der Praxis ist dieser Ansatz wahrscheinlich zu restriktiv für die meisten Erweiterungen.

Stattdessen sollten Sie bei Unterschieden zwischen den APIs entweder alternative Implementierungen oder Ausweichlösungen anbieten. (Denken Sie daran: Sie müssen dies möglicherweise auch tun, um Unterschiede in der API-Unterstützung zwischen Versionen desselben Browsers zu berücksichtigen.)

Die empfohlene Vorgehensweise, um alternative oder Ausweichlösungen umzusetzen, besteht darin, zur Laufzeit Prüfungen der Verfügbarkeit von Funktionen einer Methode durchzuführen. Der Vorteil einer Laufzeitprüfung besteht darin, dass Sie die Erweiterung nicht aktualisieren und neu verteilen müssen, um eine Funktion zu nutzen, wenn sie verfügbar wird.

Der folgende Code ermöglicht Ihnen eine Laufzeitprüfung:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Ausführungskontexte von Inhalts-Skripten

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, genau wie Seiten-Skripte. Sie können auch alle Änderungen sehen, die durch Seiten-Skripte am DOM vorgenommen wurden. Trotzdem erhalten Inhaltsskripte eine "saubere" Sicht auf das DOM.

Firefox und Chrome verwenden grundlegend unterschiedliche Ansätze, um dieses Verhalten zu handhaben: In Firefox wird es als Xray vision bezeichnet, während Chrome isolierte Welten verwendet. Weitere Details finden Sie im Abschnitt [Inhalts-Skriptumgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) des Konzepts der Inhalts-Skripte.

Allerdings bietet Firefox einige APIs, die Inhaltsskripten ermöglichen, auf von Seiten-Skripten erstellte JavaScript-Objekte zuzugreifen und ihre JavaScript-Objekte gegenüber Seiten-Skripten freizugeben. Weitere Informationen finden Sie unter [Teilen von Objekten mit Seiten-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

Es gibt auch Unterschiede zwischen den [Richtlinien für die Inhalts-Sicherheitsrichtlinie (CSP) für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungs-Service-Worker

Im Rahmen der Implementierung von Manifest V3 hat Chrome die Hintergrundseiten durch Erweiterungs-Service-Worker ersetzt. Firefox behält die Verwendung von Hintergrundseiten bei, während Safari sowohl Hintergrundseiten als auch Service-Worker unterstützt.

Weitere Informationen finden Sie im Abschnitt [Browserunterstützung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite zum `"background"` Manifest-Schlüssel. Dort finden Sie auch ein Beispiel, wie man ein plattformübergreifendes Skript implementiert.

### Manifest-Schlüssel

Die Unterschiede in den Schlüsseln der Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), die von den Hauptbrowsern unterstützt werden, fallen im Wesentlichen in drei Kategorien:

1. **Erweiterungsinformationsattribute.**
   Zum Beispiel umfasst Firefox und Opera zum Zeitpunkt der Erstellung dieses Artikels den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) Schlüssel für Informationen über den Entwickler der Erweiterung.
2. **Erweiterungsfunktionen.**
   Zum Beispiel unterstützte Chrome den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) Schlüssel zum Zeitpunkt der Erstellung dieses Artikels nicht.
3. **Schlüsseloptionalität.**
   Generell sind zum Zeitpunkt der Erstellung nur `"manifest_version"`, `"version"` und `"name"` Pflichtschlüssel.

Browser-Kompatibilitätsinformationen sind zu jedem Schlüssel in den Mozilla-Entwicklernetzwerk [`manifest.json` Schlüsselreferenz-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthalten.

Da sich `manifest.json`-Dateien tendenziell wenig ändern - außer bei Versionsnummern, die je nach Browser variieren können - ist es in der Regel am einfachsten, eine statische Version für jeden Browser zu erstellen und zu bearbeiten.

### Verpackung der Erweiterung

Das Verpacken einer Erweiterung zur Verteilung über die Browser-Erweiterungs-Store ist relativ einfach. Firefox, Chrome, Edge und Opera verwenden alle ein einfaches Zip-Format, das erfordert, dass sich die `manifest.json`-Datei im Stammverzeichnis des Zip-Pakets befindet. Safari erfordert, dass Erweiterungen ähnlich wie Apps verpackt werden.

Für Details zum Verpacken konsultieren Sie die Anleitungen auf den jeweiligen Entwicklerportalen der Erweiterungen.

### Veröffentlichung der Erweiterung

Jeder der großen Browser betreibt Browser-Erweiterung-Stores. Jeder Store überprüft auch Ihre Erweiterung auf Sicherheitslücken.

Als Konsequenz müssen Sie die Veröffentlichung und Aktualisierung Ihrer Erweiterung für jeden Store separat angehen. In manchen Fällen können Sie Ihre Erweiterung mit einem Hilfsprogramm hochladen.

Diese Tabelle fasst den Ansatz und die Merkmale jedes Stores zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Hilfsprogramm</th>
      <th>Vorveröffentlichungs-Prüfprozess</th>
      <th>Zwei-Faktor-Authentifizierung des Kontos</th>
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
      <td><p>Kein SLA bereitgestellt</p></td>
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
        <p>Automatisch, einige Sekunden.</p>
        <p>
          Eine manuelle Überprüfung der Erweiterung erfolgt nach der Veröffentlichung, was dazu führen kann, dass die Erweiterung ausgesetzt wird, falls Probleme gefunden werden, die behoben werden müssen.
        </p>
      </td>
      <td><p>Ja</p></td>
    </tr>
    <tr>
      <th><p>Opera</p></th>
      <td><p>Nein</p></td>
      <td><p>Nein</p></td>
      <td><p>Manuell, kein SLA bereitgestellt</p></td>
      <td><p>Nein</p></td>
    </tr>
    <tr>
      <th><p>Safari</p></th>
      <td><p>Ja</p></td>
      <td><p>Nein</p></td>
      <td><p>Ja, nach Angaben von Apple werden im Durchschnitt 50% der Apps in 24 Stunden und über 90% in 48 Stunden überprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsverwaltung

Die Stores von Firefox, Chrome und Edge erfordern, dass jede hochgeladene Version eine andere Versionsnummer hat. Das bedeutet, dass Sie nicht zu einer vorherigen Versionsnummer zurückkehren können, falls bei einem Release Probleme auftreten.

## Fazit

Beim Herangehen an die Entwicklung einer plattformübergreifenden Erweiterung können die Unterschiede zwischen den Erweiterungs-API-Implementierungen durch die Zielsetzung auf Firefox und die Verwendung des [WebExtension Browser API Polyfills](https://github.com/mozilla/webextension-polyfill/) adressiert werden.

Der Großteil Ihrer plattformübergreifenden Arbeit wird sich wahrscheinlich darauf konzentrieren, die Unterschiede zwischen den von den Hauptbrowsern unterstützten API-Funktionen zu handhaben. Möglicherweise müssen Sie auch Unterschiede zwischen der Implementierung von Inhalts- und Hintergrundskripten berücksichtigen. Das Erstellen Ihrer `manifest.json`-Dateien sollte relativ einfach und manuell machbar sein. Danach sollten Sie die Unterschiede in den Prozessen für die Einreichung in jedem Erweiterungsstore berücksichtigen.

Wenn Sie den Rat in diesem Artikel befolgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die in allen vier Hauptbrowsern gut funktioniert und es Ihnen ermöglicht, Ihre Erweiterungsfunktionen mehr Menschen bereitzustellen.
