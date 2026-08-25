---
title: Erstellen Sie eine Cross-Browser-Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: 83b221d2955a42bed9b87a5206a7953d1b57d8a9
---

Die Einführung der Browsererweiterungs-API schuf eine einheitliche Landschaft für die Entwicklung von Browser-Erweiterungen. Es gibt jedoch Unterschiede in den API-Implementierungen und im Abdeckungsumfang zwischen den Browsern, die die Erweiterungs-API verwenden (die wichtigsten sind Chrome, Edge, Firefox, Opera und Safari).

Um die Reichweite Ihrer Browser-Erweiterung zu maximieren, sollten Sie sie für mindestens zwei Browser, möglicherweise mehr, entwickeln. Dieser Artikel behandelt die Hauptherausforderungen, denen Sie bei der Erstellung einer Cross-Browser-Erweiterung gegenüberstehen, und schlägt vor, wie diese Herausforderungen angegangen werden können.

> [!NOTE]
> Die wichtigsten Browser haben Manifest V3 übernommen. Diese Manifestversion bietet eine bessere Kompatibilität zwischen den Browsererweiterungsumgebungen, wie z.B. die Verwendung des `browser.*` Namespace und Promises für die Behandlung asynchroner Ereignisse. Zusätzlich zu den Informationen in diesem Leitfaden beziehen Sie sich bitte auf die Manifest V3-Migrationsleitfäden für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate).

## Hürden beim Codieren von plattformübergreifenden Erweiterungen

Sie müssen folgende Bereiche ansprechen, wenn Sie eine plattformübergreifende Erweiterung angehen möchten:

- [API-Namespace](#api-namespace)
- [API-asynchrones Event-Handling](#api-asynchrones_event-handling)
- [API-Funktionenabdeckung](#api-funktionenabdeckung)
- [Ausführungskontexte von Inhalts-Skripten](#ausführungskontexte_von_inhalts-skripten)
- [Hintergrundseite versus Erweiterungsservice-Arbeiter (in Manifest V3)](#hintergrundseite_und_erweiterungsdienstarbeiter)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Erweiterungspaketierung](#erweiterungspaketierung)
- [Erweiterungsveröffentlichung](#erweiterungsveröffentlichung)

### API-Namespace

Es gibt zwei API-Namespaces, die von den Hauptbrowsern verwendet werden:

- `browser.*`, der Standard für die Erweiterungs-API. Ursprünglich von Firefox und Safari verwendet, ab [Mitte 2026](https://developer.chrome.com/docs/extensions/develop/concepts/browser-namespace) von Chrome unterstützt (d.h. Chrome 148, Opera 121, und Edge 136, und 4 Versionen später für Erweiterungen, die [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) verwenden).
- `chrome.*` wird von Chrome, Opera und Edge verwendet.

Firefox unterstützt ebenfalls den `chrome.*` Namespace für APIs, die mit Chrome kompatibel sind, vor allem um bei der [Portierung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu helfen. Die Verwendung des `browser.*` Namespace wird jedoch bevorzugt. Neben dem vorgeschlagenen Standard verwendet `browser.*` Promises – ein modernes und bequemes Mechanismus zur Behandlung asynchroner Ereignisse.

### API-asynchrones Event-Handling

Mit der Einführung von Manifest V3 nahmen alle wichtigen Browser den Standard der Rückgabe von _[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)_ bei asynchronen Methoden an. Firefox und Safari unterstützen Promises bei allen asynchronen APIs. Ab Chrome Version 121 unterstützen alle asynchronen Erweiterungs-APIs Promises, es sei denn, es ist anders dokumentiert. Für Erweiterungen, die den `devtools_page` Manifest-Schlüssel verwenden, stellte Chrome in Version 152 Promise-Unterstützung bereit (siehe [Chrome Bug 500769389](https://crbug.com/500769389)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Callbacks_ auf. Aus Kompatibilitätsgründen unterstützen alle Hauptbrowser Callbacks über alle Manifest-Versionen hinweg. Siehe den Abschnitt [Historische Unterschiede](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#historical_differences) auf der Seite Chrome-Inkompatibilitäten für Details.

Einige Handler von Erweiterungs-API-Ereignissen sollen asynchron durch ein `Promise` oder eine Callback-Funktion antworten. Ein Handler des `runtime.onMessage`-Ereignisses kann [eine asynchrone Antwort mithilfe eines `Promise`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) senden oder [ein Callback verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse). Ein `Promise` als Rückgabewert von einem Ereignishandler wird in Firefox und Safari unterstützt, aber noch nicht in Chrome.

Firefox unterstützt auch Callbacks für die APIs, die den `chrome.*` Namespace unterstützen. Die Verwendung von Promises wird jedoch empfohlen. Promises vereinfachen die asynchrone Ereignisbehandlung erheblich, insbesondere wenn Sie Ereignisse verketten müssen. Wenn Sie den `browser.*` Namespace mit Promises verwenden und Chrome 147 oder früher anvisieren möchten, müssen Sie ein Polyfill oder ähnliches verwenden.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, schauen Sie sich [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

#### Das WebExtension Browser-API-Polyfill

Ab Chrome Version 148 unterstützt Chrome den `browser` Namenraum, außer in Erweiterungen, die eine DevTools-Seite enthalten. Diese Einschränkung wurde in Chrome 152 (siehe [Chrome Bug 500769389](https://crbug.com/500769389)) entfernt, und der `browser` Namespace wurde für alle Chrome-Erweiterungen verfügbar.

Um den `browser.*` Namespace und Promises in früheren Versionen zu nutzen, verwenden Sie das [WebExtension Browser API Polyfill](https://github.com/mozilla/webextension-polyfill/). Dieses Polyfill behandelt den API-Namespace und das asynchrone Ereignis-Handling in Firefox, Chrome, Opera und Edge.

> [!NOTE]
> In Chrome Version 152 oder später ist das Polyfill ein No-Op.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung mit npm oder laden Sie es direkt von [GitHub-Releases](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Verweisen Sie dann auf `browser-polyfill.js` in:

- `manifest.json`, um es für Hintergrund- und Inhalts-Skripte verfügbar zu machen.
- HTML-Dokumenten, wie `browserAction` Popups oder Tab-Seiten.
- Der `executeScript`-Aufruf in dynamisch injizierten Inhalts-Skripten, die durch `tabs.executeScript` geladen werden, wo es nicht mit einer `content_scripts`-Deklaration in `manifest.json` geladen wurde.

Dieses `manifest.json`-Beispiel macht das Polyfill für Hintergrundskripte verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel ist sicherzustellen, dass das Polyfill in Ihrer Erweiterung ausgeführt wird, bevor andere Skripte, die den `browser.*` API-Namespace erwarten, ausgeführt werden.

> [!NOTE]
> Weitere Details und Informationen zur Verwendung des Polyfills mit einem Modulpaketierer finden Sie im [README des Projekts auf GitHub](https://github.com/mozilla/webextension-polyfill/blob/master/README.md).

Es gibt andere Polyfill-Optionen. Derzeit bietet jedoch keine der anderen Optionen die Abdeckung des WebExtension-Browser-API-Polyfills. Falls Firefox nicht Ihre erste Wahl war, bestehen Ihre Optionen darin, die Einschränkungen alternativer Polyfills zu akzeptieren, auf Firefox zu portieren und Cross-Browser-Unterstützung hinzuzufügen oder Ihr eigenes Polyfill zu entwickeln.

### API-Funktionenabdeckung

Die Unterschiede in den von den Hauptbrowsern angebotenen API-Funktionen fallen in drei Hauptkategorien:

1. **Fehlende Unterstützung für eine gesamte Funktion.**
   Zum Beispiel unterstützte Edge zum Zeitpunkt des Schreibens die {{WebExtAPIRef("browserSettings")}}-Funktion nicht.
2. **Variationen in der Unterstützung von Funktionen innerhalb einer Funktion.**
   Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens nicht die Benachrichtigungsfunktion {{WebExtAPIRef("notifications.onButtonClicked")}}, während Firefox der einzige Browser ist, der {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen zur Unterstützung browserspezifischer Merkmale.**
   Zum Beispiel war Containers zum Zeitpunkt des Schreibens ein Firefox-spezifisches Feature, das von der {{WebExtAPIRef("contextualIdentities")}}-Funktion unterstützt wird.

Details zur Unterstützung der Erweiterungs-APIs unter den Hauptbrowsern sowie Firefox für Android und Safari auf iOS finden Sie auf der [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) Seite des Mozilla Developer Network. Browser-Kompatibilitätsinformationen sind ebenfalls bei jeder Funktion und ihren Methoden, Typen und Ereignissen in den JavaScript-API-Referenzseiten des Mozilla Developer Network enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz zur Bewältigung von API-Unterschieden besteht darin, die in Ihrer Erweiterung verwendeten Funktionen auf solche zu beschränken, die über Ihre Zielbrowser hinweg die gleiche Funktionalität bieten. In der Praxis wird dieser Ansatz wahrscheinlich zu restriktiv für die meisten Erweiterungen sein.

Stattdessen sollten Sie dort, wo Unterschiede zwischen den APIs bestehen, entweder alternative Implementierungen oder Rückfallebenen anbieten. (Denken Sie daran: Sie müssen dies möglicherweise auch tun, um Unterschiede in der API-Unterstützung zwischen Versionen desselben Browsers zu berücksichtigen.)

Die Verwendung von Laufzeitprüfungen zur Verfügbarkeit von Funktionen wird empfohlen, um alternative oder Rückfallfunktionen zu implementieren. Der Vorteil einer Laufzeitprüfung besteht darin, dass Sie die Erweiterung nicht aktualisieren und neu verteilen müssen, um eine Funktion zu nutzen, sobald sie verfügbar wird.

Der folgende Code ermöglicht es Ihnen, eine Laufzeitprüfung durchzuführen:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Ausführungskontexte von Inhalts-Skripten

Inhalts-Skripte können auf das DOM der Seite zugreifen und es modifizieren, genauso wie Seitenskripte. Sie können auch jede Änderung im DOM sehen, die von Seitenskripten vorgenommen wird. Inhalts-Skripte erhalten jedoch eine "saubere" Ansicht des DOMs.

Firefox und Chrome verwenden grundsätzlich unterschiedliche Ansätze, um dieses Verhalten zu handhaben: In Firefox wird es als "Xray vision" bezeichnet, während Chrome isolierte Welten verwendet. Weitere Details finden Sie im Abschnitt [Umgebung des Inhalts-Skripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) des Konzeptartikels zu Inhalts-Skripten.

Firefox bietet jedoch einige APIs, mit denen Inhalts-Skripte auf JavaScript-Objekte zugreifen können, die von Seitenskripten erstellt wurden, und um ihre JavaScript-Objekte für Seitenskripte sichtbar zu machen. Weitere Details finden Sie unter [Sharing objects with page scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

Es gibt auch Unterschiede zwischen der [Content Security Policy (CSP) für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungsdienstarbeiter

Als Teil seiner Implementierung von Manifest V3 hat Chrome Hintergrundseiten durch Erweiterungsdienstarbeiter ersetzt. Firefox behält die Verwendung von Hintergrundseiten bei, während Safari sowohl Hintergrundseiten als auch Dienstarbeiter unterstützt.

Weitere Informationen finden Sie im Abschnitt [Browser-Unterstützung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite über den `"background"` Manifest-Schlüssel. Dies beinhaltet ein Beispiel zur Implementierung eines Cross-Browser-Skripts.

### Manifest-Schlüssel

Die Unterschiede in den [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Dateischlüsseln, die von den Hauptbrowsern unterstützt werden, fallen im Wesentlichen in drei Kategorien:

1. **Attribute zur Erweiterungsinformation.**
   Zum Beispiel enthalten Firefox und Opera zum Zeitpunkt des Schreibens den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility)-Schlüssel für Details über den Entwickler der Erweiterung.
2. **Erweiterungsfunktionen.**
   Zum Beispiel unterstützte Chrome zum Zeitpunkt des Schreibens nicht den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility)-Schlüssel.
3. **Schlüsseloptionen.**
   Zum Zeitpunkt des Schreibens sind im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` obligatorische Schlüssel.

Browser-Kompatibilitätsinformationen sind bei jedem Schlüssel in den [`manifest.json`-Schlüsselreferenzseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) des Mozilla Developer Network enthalten.

Da `manifest.json`-Dateien tendenziell wenig Änderungen aufweisen – außer bei Versionsnummern, die zwischen den verschiedenen Browsern unterschiedlich sein können – ist es in der Regel der einfachste Ansatz, eine statische Version für jeden Browser zu erstellen und zu bearbeiten.

### Erweiterungspaketierung

Die Verpackung einer Erweiterung für die Verteilung über die Browser-Erweiterungsgeschäfte ist relativ einfach. Firefox, Chrome, Edge und Opera verwenden alle ein einfaches Zip-Format, das erfordert, dass die `manifest.json`-Datei im Stamm des Zip-Pakets liegt. Safari erfordert, dass Erweiterungen in ähnlicher Weise wie Apps verpackt werden.

Für Einzelheiten zur Paketierung, beziehen Sie sich bitte auf die Richtlinien in den jeweiligen Entwicklerportalen der Erweiterungen.

### Erweiterungsveröffentlichung

Jeder der großen Browser führt Browsererweiterungsgeschäfte. Jedes Geschäft überprüft Ihre Erweiterung auch auf Sicherheitslücken.

Infolgedessen müssen Sie sich separat darum bemühen, Ihre Erweiterung für jedes Geschäft hinzuzufügen und zu aktualisieren. In einigen Fällen können Sie Ihre Erweiterung mithilfe eines Dienstprogramms hochladen.

Diese Tabelle fasst den Ansatz und die Merkmale jedes Geschäfts zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Dienstprogramm</th>
      <th>Überprüfungsprozess vor der Veröffentlichung</th>
      <th>Kontozweistufen-Authentifizierung</th>
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
      <td><p>Kein SLA angegeben</p></td>
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
          Eine manuelle Überprüfung der Erweiterung findet nach der Veröffentlichung statt, was dazu führen kann, dass die Erweiterung gesperrt wird, wenn Probleme festgestellt werden, die behoben werden müssen.
        </p>
      </td>
      <td><p>Ja</p></td>
    </tr>
    <tr>
      <th><p>Opera</p></th>
      <td><p>Nein</p></td>
      <td><p>Nein</p></td>
      <td><p>Manuell, kein SLA angegeben</p></td>
      <td><p>Nein</p></td>
    </tr>
    <tr>
      <th><p>Safari</p></th>
      <td><p>Ja</p></td>
      <td><p>Nein</p></td>
      <td><p>Ja, laut Apple werden im Durchschnitt 50% der Apps innerhalb von 24 Stunden und über 90% innerhalb von 48 Stunden überprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsnummerierung

Die Firefox-, Chrome- und Edge-Geschäfte erfordern, dass jede hochgeladene Version eine andere Versionsnummer hat. Das bedeutet, dass Sie nicht zu einer früheren Versionsnummer zurückkehren können, wenn Sie auf Probleme in einem Release stoßen.

## Fazit

Wenn Sie die Entwicklung einer plattformübergreifenden Erweiterung angehen, können Sie den `browser.*`-Namespace und Promises in einer Firefox-Implementierung verwenden. Sie können dies tun, im Wissen, dass diese Funktionen ab Chrome 148 unterstützt werden. Wenn Sie frühere Versionen von Chrome anvisieren möchten, können Sie dann das [WebExtension Browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) verwenden.

Der Großteil Ihrer plattformübergreifenden Arbeit wird sich wahrscheinlich darauf konzentrieren, Variationen zwischen den von den Hauptbrowsern unterstützten API-Funktionen zu behandeln. Sie müssen möglicherweise auch Unterschiede zwischen der Implementierung von Inhalts-Skripten und Hintergrund-Skripten berücksichtigen. Die Erstellung Ihrer `manifest.json`-Dateien sollte relativ einfach sein und etwas sein, das Sie manuell tun können. Anschließend müssen Sie die Unterschiede in den Prozessen zur Einreichung an jedes Erweiterungsgeschäft berücksichtigen.

Wenn Sie den Rat in diesem Artikel befolgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die gut auf allen vier Hauptbrowsern funktioniert, sodass Sie Ihre Erweiterungsfunktionen an mehr Personen liefern können.
