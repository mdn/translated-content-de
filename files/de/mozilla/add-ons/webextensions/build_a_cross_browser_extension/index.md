---
title: Erstellen Sie eine plattformübergreifende Browser-Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{AddonSidebar}}

Die Einführung der Browsererweiterungen-API hat eine einheitliche Landschaft für die Entwicklung von Browsererweiterungen geschaffen. Dennoch gibt es Unterschiede in den API-Implementierungen und im Umfang der Unterstützung zwischen den Browsern, die die Erweiterungen-API verwenden (die wichtigsten sind Chrome, Edge, Firefox, Opera und Safari).

Um die Reichweite Ihrer Browsererweiterung zu maximieren, sollten Sie sie für mindestens zwei, möglicherweise mehr Browser entwickeln. Dieser Artikel beleuchtet die Hauptprobleme, die bei der Erstellung einer plattformübergreifenden Erweiterung auftreten, und schlägt Lösungen für diese Herausforderungen vor.

> [!NOTE]
> Die Hauptbrowser haben Manifest V3 übernommen. Diese Manifestversion bietet eine bessere Kompatibilität zwischen den Browsererweiterungsumgebungen, wie z.B. Promises zur Handhabung asynchroner Ereignisse. Neben den Informationen in diesem Leitfaden sollten Sie sich auch die Migrationsleitfäden für Manifest V3 zu [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate) ansehen.

## Herausforderungen beim plattformübergreifenden Coden von Erweiterungen

Folgende Bereiche müssen berücksichtigt werden, wenn Sie sich mit einer plattformübergreifenden Erweiterung befassen:

- [API-Namespace](#api-namespace)
- [API asynchrone Ereignisbehandlung](#api_asynchrone_ereignisbehandlung)
- [API-Funktionsabdeckung](#api-funktionsabdeckung)
- [Ausführungskontexte von Inhalts-Skripten](#ausführungskontexte_von_inhalts-skripten)
- [Hintergrundseite versus Erweiterungs-Service-Worker (in Manifest V3)](#hintergrundseite_und_erweiterungs-service-worker)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Verpackung der Erweiterung](#verpackung_der_erweiterung)
- [Veröffentlichung der Erweiterung](#veröffentlichung_der_erweiterung)

### API-Namespace

Es gibt zwei API-Namespaces, die von den Hauptbrowsern verwendet werden:

- `browser.*`, der vorgeschlagene Standard für die Erweiterungen-API, verwendet von Firefox und Safari.
- `chrome.*` wird von Chrome, Opera und Edge verwendet.

Firefox unterstützt auch den `chrome.*`-Namespace für APIs, die mit Chrome kompatibel sind, vor allem um bei der [Portierung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu helfen. Die Verwendung des `browser.*`-Namespaces wird jedoch bevorzugt. Neben der Tatsache, dass er der vorgeschlagene Standard ist, nutzt `browser.*` Promises—einen modernen und praktischen Mechanismus zur Handhabung asynchroner Ereignisse.

Nur in den trivialsten Erweiterungen ist der Namespace wahrscheinlich das einzige plattformübergreifende Problem, das anzugehen ist. Daher ist es selten, dass es sinnvoll ist, dieses Problem allein anzugehen. Der beste Ansatz besteht darin, dieses Problem zusammen mit der asynchronen Ereignisbehandlung anzugehen.

### API asynchrone Ereignisbehandlung

Mit der Einführung von Manifest V3 haben alle Hauptbrowser den Standard übernommen, _Promises_ von asynchronen Methoden zurückzugeben. Firefox und Safari bieten volle Unterstützung für Promises bei allen asynchronen APIs. Ab Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Promises, sofern nicht anders dokumentiert. Die `devtools`-API ist der einzige API-Namespace ohne Promise-Unterstützung ([Chromium Bug 1510416](https://crbug.com/1510416)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Callbacks_ auf. Zur Kompatibilität unterstützen alle Hauptbrowser für alle Manifestversionen Callbacks. Einzelheiten finden Sie unter [Callbacks und Promises](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#callbacks_and_promises).

Einige Handler von Erweiterungs-API-Ereignissen sollen asynchron über eine `Promise` oder eine Callback-Funktion antworten. Zum Beispiel kann ein Handler für das `runtime.onMessage`-Ereignis [eine asynchrone Antwort unter Verwendung einer `Promise`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) oder [einen Callback](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse) senden. Eine `Promise` als Rückgabewert von einem Ereignishandler wird in Firefox und Safari unterstützt, jedoch noch nicht in Chrome.

Firefox unterstützt auch Callbacks für die APIs, die den `chrome.*`-Namespace unterstützen. Die Verwendung von Promises wird jedoch empfohlen, da Promises die asynchrone Ereignisbehandlung erheblich vereinfachen, insbesondere wenn Sie Ereignisse miteinander verketten müssen. Dies bedeutet, dass Sie eine Polyfill oder Ähnliches verwenden, sodass Ihre Erweiterung den `browser.*`-Namespace in Firefox und Safari und `chrome.*` in Chrome, Opera und Edge nutzt.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, schauen Sie sich [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

#### Das WebExtension-Browser-API-Polyfill

Wie können Sie Promises einfach nutzen? Die Lösung besteht darin, für Firefox unter Verwendung von Promises zu coden und das [WebExtension-Browser-API-Polyfill](https://github.com/mozilla/webextension-polyfill/) zu verwenden, um Chrome, Opera und Edge abzudecken.

Dieses Polyfill befasst sich mit dem API-Namespace und der asynchronen Ereignisbehandlung über Firefox, Chrome, Opera und Edge hinweg.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung mit npm oder laden Sie es direkt von den [GitHub-Veröffentlichungen](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Verweisen Sie dann auf `browser-polyfill.js` in:

- `manifest.json`, um es in Hintergrund- und Inhaltsskripten verfügbar zu machen.
- HTML-Dokumenten, wie z.B. `browserAction`-Fenstern oder Tabseiten.
- Dem `executeScript`-Aufruf in dynamisch injizierten Inhaltsskripten, die von `tabs.executeScript` geladen werden, wo es nicht mittels einer `content_scripts`-Deklaration in `manifest.json` geladen wurde.

Zum Beispiel macht dieser `manifest.json`-Code das Polyfill für Hintergrundskripte verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel ist es sicherzustellen, dass das Polyfill in Ihrer Erweiterung ausgeführt wird, bevor alle anderen Skripte, die den `browser.*`-API-Namespace erwarten, ausgeführt werden.

> [!NOTE]
> Für weitere Details und Informationen zur Verwendung des Polyfills mit einem Modul-Bundler siehe das [README des Projekts auf GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Es gibt andere Polyfill-Optionen. Allerdings bieten zum Zeitpunkt der Erstellung keine der anderen Optionen die Abdeckung des WebExtension-Browser-API-Polyfills. Wenn Sie Firefox nicht als Ihre erste Wahl anvisiert haben, sind Ihre Optionen daher, die Einschränkungen alternativer Polyfills zu akzeptieren, zu Firefox zu portieren und plattformübergreifende Unterstützung hinzuzufügen oder Ihr eigenes Polyfill zu entwickeln.

### API-Funktionsabdeckung

Die Unterschiede in den von den Hauptbrowsern angebotenen API-Funktionen lassen sich in drei Hauptkategorien einteilen:

1. **Mangelnde Unterstützung für eine gesamte Funktion.** Zum Beispiel unterstützte Edge zum Zeitpunkt der Erstellung nicht die {{WebExtAPIRef("browserSettings")}}-Funktion.
2. **Variationen in der Unterstützung von Funktionen innerhalb einer Funktion.** Zum Beispiel unterstützte Firefox zum Zeitpunkt der Erstellung die Benachrichtigungsfunktion {{WebExtAPIRef("notifications.onButtonClicked")}} nicht, während Firefox der einzige Browser ist, der {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen, die browserspezifische Funktionen unterstützen.** Zum Beispiel war Containers zum Zeitpunkt der Erstellung eine Firefox-spezifische Funktion, die von der {{WebExtAPIRef("contextualIdentities")}}-Funktion unterstützt wurde.

Details zur Unterstützung der Erweiterungs-APIs unter den Hauptbrowsern sowie Firefox für Android und Safari auf iOS finden Sie auf der Mozilla Developer Network-Seite [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Informationen zur Browser-Kompatibilität sind ebenfalls bei jeder Funktion und ihren Methoden, Typen und Ereignissen auf den Referenzseiten der [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) auf der Mozilla Developer Network enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz zur Bewältigung von API-Unterschieden ist die Begrenzung der in Ihrer Erweiterung verwendeten Funktionen auf solche, die in Ihrer Zielbrowserpalette die gleiche Funktionalität bieten. In der Praxis ist dieser Ansatz jedoch für die meisten Erweiterungen wahrscheinlich zu einschränkend.

Stattdessen sollten Sie bei Unterschieden zwischen den APIs entweder alternative Implementierungen oder Fallback-Funktionalitäten anbieten. (Denken Sie daran: Sie müssen dies möglicherweise auch tun, um Unterschiede in der API-Unterstützung zwischen Versionen des _gleichen_ Browsers zu berücksichtigen.)

Die empfohlene Methode zur Implementierung alternativer oder Fallback-Funktionalitäten ist die Verwendung von Laufzeitprüfungen zur Verfügbarkeit der Funktionen einer Funktion. Der Vorteil einer Laufzeitprüfung besteht darin, dass Sie die Erweiterung nicht aktualisieren und neu verteilen müssen, um eine Funktion zu nutzen, wenn diese verfügbar wird.

Der folgende Code ermöglicht es Ihnen, eine Laufzeitprüfung durchzuführen:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Ausführungskontexte von Inhalts-Skripten

Inhalts-Skripte können auf das DOM der Seite zugreifen und es ändern, genauso wie Seitenskripte. Sie können auch Änderungen sehen, die von Seitenskripten am DOM vorgenommen wurden. Inhalts-Skripte erhalten jedoch eine "saubere" Ansicht des DOM.

Firefox und Chrome verwenden grundlegend unterschiedliche Ansätze, um dieses Verhalten zu handhaben: In Firefox wird es Xray Vision genannt, während Chrome isolierte Welten verwendet. Weitere Informationen finden Sie im Abschnitt [Umgebung für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) des Konzeptsartikels zu Inhalts-Skripten.

Firefox bietet jedoch einige APIs, mit denen Inhalts-Skripte auf von Seitenskripten erstellte JavaScript-Objekte zugreifen und ihre JavaScript-Objekte für Seitenskripte zugänglich machen können. Siehe [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für Details.

Es gibt auch Unterschiede zwischen den [Content Security Policy (CSP) für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungs-Service-Worker

Als Teil seiner Implementierung von Manifest V3 hat Chrome Hintergrundseiten durch Erweiterungs-Service-Worker ersetzt. Firefox behält die Verwendung von Hintergrundseiten bei, während Safari sowohl Hintergrundseiten als auch Service-Worker unterstützt.

Weitere Informationen finden Sie im Abschnitt [Browser-Unterstützung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite zum `"background"`-Manifest-Schlüssel. Dies beinhaltet ein Beispiel, wie man ein plattformübergreifendes Skript implementiert.

### Manifest-Schlüssel

Die Unterschiede in den von den Hauptbrowsern unterstützten [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)-Dateischlüsseln fallen im Wesentlichen in drei Kategorien:

1. **Erweiterungsinformationsattribute.** Zum Beispiel enthalten Firefox und Opera zum Zeitpunkt der Erstellung den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility)-Schlüssel für Details über den Entwickler der Erweiterung.
2. **Erweiterungsfunktionen.** Zum Beispiel unterstützt Chrome zum Zeitpunkt der Erstellung den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility)-Schlüssel nicht.
3. **Schlüsselfakultativität.** Zum Zeitpunkt der Erstellung sind im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` obligatorische Schlüssel.

Informationen zur Browser-Kompatibilität sind bei jedem Schlüssel in den [`manifest.json`-Schlüssel-Referenzseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) auf der Mozilla Developer Network enthalten.

Da sich `manifest.json`-Dateien normalerweise nur wenig ändern—außer bei den Versionsnummern, die zwischen den verschiedenen Browsern unterschiedlich sein können—ist es in der Regel der einfachste Ansatz, eine statische Version für jeden Browser zu erstellen und zu bearbeiten.

### Verpackung der Erweiterung

Das Verpacken einer Erweiterung für die Verteilung über die Browsererweiterungs-Stores ist relativ einfach. Firefox, Chrome, Edge und Opera verwenden alle ein einfaches Zip-Format, das erfordert, dass die `manifest.json`-Datei im Root des Zip-Pakets vorhanden ist. Safari erfordert, dass Erweiterungen ähnlich wie Apps verpackt werden.

Einzelheiten zur Verpackung entnehmen Sie bitte den Anleitungen auf den jeweiligen Entwicklerportalen der Erweiterungen.

### Veröffentlichung der Erweiterung

Jeder der großen Browser unterhält eigene Browsererweiterungs-Stores. Jeder Store überprüft auch Ihre Erweiterung auf Sicherheitslücken.

Daher müssen Sie das Hinzufügen und Aktualisieren Ihrer Erweiterung für jeden Store separat angehen. In einigen Fällen können Sie Ihre Erweiterung mit einem Hilfsprogramm hochladen.

Diese Tabelle fasst den Ansatz und die Funktionen jedes Stores zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Hilfsprogramm</th>
      <th>Pre-Veröffentlichungs-Überprüfungsprozess</th>
      <th>Zwei-Faktor-Authentifizierung für Konto</th>
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
        <p>Automatisch, ein paar Sekunden.</p>
        <p>
          Eine manuelle Überprüfung der Erweiterung erfolgt nach der Veröffentlichung, was dazu führen kann, dass die Erweiterung gesperrt wird, wenn Probleme festgestellt werden, die behoben werden müssen.
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
      <td><p>Ja mit, laut Apple, im Durchschnitt 50% der Apps innerhalb von 24 Stunden überprüft und über 90% innerhalb von 48 Stunden überprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsnummerierung

Die Stores von Firefox, Chrome und Edge verlangen, dass jede hochgeladene Version eine andere Versionsnummer hat. Das bedeutet, dass Sie nicht zu einer früheren Versionsnummer zurückkehren können, wenn bei einer Veröffentlichung Probleme auftreten.

## Fazit

Bei der Entwicklung von plattformübergreifenden Erweiterungen können die Unterschiede zwischen den Implementierungen der Erweiterungs-APIs dadurch angegangen werden, dass Firefox anvisiert und das [WebExtension-Browser-API-Polyfill](https://github.com/mozilla/webextension-polyfill/) verwendet wird.

Der Großteil Ihrer plattformübergreifenden Arbeit wird sich wahrscheinlich auf das Handling von Variationen zwischen den von den Hauptbrowsern unterstützten API-Funktionen konzentrieren. Sie müssen möglicherweise auch Unterschiede zwischen den Implementierungen von Inhalts- und Hintergrundskripten berücksichtigen. Das Erstellen Ihrer `manifest.json`-Dateien sollte relativ unkompliziert sein und etwas, das Sie manuell tun können. Anschließend müssen Sie die Unterschiede in den Prozessen für das Einreichen bei jedem Erweiterungs-Store berücksichtigen.

Indem Sie den Rat in diesem Artikel befolgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die in allen vier Hauptbrowsern gut funktioniert, und Ihnen somit ermöglicht, Ihre Erweiterungsfunktionen einem größeren Publikum bereitzustellen.
