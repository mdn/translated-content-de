---
title: Erstellen Sie eine plattformübergreifende Browser-Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Die Einführung der Browser-Erweiterungs-API hat eine einheitliche Landschaft für die Entwicklung von Browser-Erweiterungen geschaffen. Es gibt jedoch Unterschiede in der API-Implementierung und in der Abdeckung durch die Browser, die die Erweiterungs-API verwenden (die wichtigsten sind Chrome, Edge, Firefox, Opera und Safari).

Um die Reichweite Ihrer Browser-Erweiterung zu maximieren, sollten Sie sie mindestens für zwei Browser, eventuell mehr, entwickeln. Dieser Artikel beleuchtet die Hauptprobleme, die bei der Erstellung einer plattformübergreifenden Erweiterung auftreten, und schlägt Lösungen vor, um diese Herausforderungen zu bewältigen.

> [!NOTE]
> Die Hauptbrowser haben Manifest V3 übernommen. Diese Manifestversion bietet eine bessere Kompatibilität zwischen den Umgebungen der Browser-Erweiterungen, wie z. B. Promises zur Behandlung asynchroner Ereignisse. Neben den Informationen in diesem Leitfaden sollten Sie die Manifest V3-Migrationsleitfäden für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate) zu Rate ziehen.

## Hürden beim plattformübergreifenden Codieren von Erweiterungen

Sie müssen die folgenden Bereiche berücksichtigen, wenn Sie an einer plattformübergreifenden Erweiterung arbeiten:

- [API-Namespace](#api-namespace)
- [API asynchrone Ereignisbehandlung](#api_asynchrone_ereignisbehandlung)
- [API-Funktionsabdeckung](#api-funktionsabdeckung)
- [Inhaltskript-Ausführungskontexte](#inhaltskript-ausführungskontexte)
- [Hintergrundseite versus Erweiterungs-Service-Worker (in Manifest V3)](#hintergrundseite_und_erweiterungs-service-worker)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Erweiterungspaketierung](#erweiterungspaketierung)
- [Erweiterungsveröffentlichung](#erweiterungsveröffentlichung)

### API-Namespace

Unter den Hauptbrowsern werden zwei API-Namespaces verwendet:

- `browser.*`, der vorgeschlagene Standard für die Erweiterungs-API, genutzt von Firefox und Safari.
- `chrome.*` wird von Chrome, Opera und Edge verwendet.

Firefox unterstützt auch den `chrome.*`-Namespace für APIs, die mit Chrome kompatibel sind, vor allem, um beim [Portieren](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu helfen. Die Verwendung des `browser.*`-Namespaces wird jedoch bevorzugt. Neben der Tatsache, dass es der vorgeschlagene Standard ist, verwendet `browser.*` Promises—einen modernen und bequemen Mechanismus zur Behandlung asynchroner Ereignisse.

Nur bei den trivialsten Erweiterungen ist der Namespace wahrscheinlich das einzige plattformübergreifende Problem, das gelöst werden muss. Daher ist es selten, wenn überhaupt, sinnvoll, dieses Problem alleine anzugehen. Der beste Ansatz ist, dieses Problem zusammen mit der asynchronen Ereignisbehandlung anzugehen.

### API asynchrone Ereignisbehandlung

Mit der Einführung von Manifest V3 haben alle Hauptbrowser den Standard eingeführt, _Promises_ von asynchronen Methoden zurückzugeben. Firefox und Safari haben volle Unterstützung für Promises bei allen asynchronen APIs. Ab Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Promises, es sei denn, dies ist anders dokumentiert. Die `devtools`-API ist der einzige API-Namespace ohne Promise-Unterstützung ([Chromium-Fehler 1510416](https://crbug.com/1510416)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Rückruffunktionen_ auf. Zur Kompatibilität unterstützen alle Hauptbrowser Rückrufmethoden in allen Manifestversionen. Einzelheiten finden Sie im Abschnitt [Historische Unterschiede](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#historical_differences) auf der Seite zu Chrome-Inkompatibilitäten.

Einige Handler von Erweiterungs-API-Ereignissen sollen asynchron über einen `Promise` oder eine Rückruf-Funktion antworten. Ein Handler des `runtime.onMessage`-Ereignisses kann zum Beispiel [eine asynchrone Antwort mit einem `Promise`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) senden oder [eine Rückruf-Funktion verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse). Ein `Promise` als Rückgabewert eines Ereignishandlers wird in Firefox und Safari unterstützt, jedoch noch nicht in Chrome.

Firefox unterstützt auch Rückrufmethoden für die APIs, die den `chrome.*`-Namespace unterstützen. Dennoch wird die Verwendung von Promises empfohlen. Promises vereinfachen die asynchrone Ereignisbehandlung erheblich, insbesondere wenn Sie Ereignisse miteinander verketten müssen. Dies bedeutet, dass Sie ein Polyfill oder ähnliches verwenden sollten, sodass Ihre Erweiterung den `browser.*`-Namespace in Firefox und Safari und `chrome.*` in Chrome, Opera und Edge verwendet.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, schauen Sie sich [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

#### Das WebExtension Browser-API-Polyfill

Wie nutzen Sie die Vorteile von Promises einfach? Die Lösung besteht darin, für Firefox mit Promises zu programmieren und das [WebExtension-Browser-API-Polyfill](https://github.com/mozilla/webextension-polyfill/) zu verwenden, um Chrome, Opera und Edge abzudecken.

Dieses Polyfill adressiert den API-Namespace und die asynchrone Ereignisbehandlung für Firefox, Chrome, Opera und Edge.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung über npm oder laden Sie es direkt von den [GitHub-Releases](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Referenzieren Sie dann `browser-polyfill.js` in:

- `manifest.json`, um es für Hintergrund- und Inhalts-Skripte verfügbar zu machen.
- HTML-Dokumenten, wie z. B. `browserAction`-Popups oder Tab-Seiten.
- Der `executeScript`-Aufruf in dynamisch injizierten Inhalts-Skripten, die über `tabs.executeScript` geladen werden, wenn es nicht über eine `content_scripts`-Deklaration in `manifest.json` geladen wurde.

Zum Beispiel macht dieser `manifest.json`-Code das Polyfill für Hintergrund-Skripte verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel ist sicherzustellen, dass das Polyfill in Ihrer Erweiterung ausgeführt wird, bevor andere Skripte, die den `browser.*`-API-Namespace erwarten, ausgeführt werden.

> [!NOTE]
> Für weitere Einzelheiten und Informationen zur Verwendung des Polyfills mit einem Modul-Bundler, siehe das [README des Projekts auf GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Es gibt andere Polyfill-Optionen. Zum Zeitpunkt der Erstellung bietet jedoch keine der anderen Optionen die Abdeckung des WebExtension-Browser-API-Polyfills. Wenn Firefox nicht Ihre erste Wahl war, haben Sie die Möglichkeit, die Einschränkungen alternativer Polyfills zu akzeptieren, zu Firefox zu portieren und plattformübergreifende Unterstützung hinzuzufügen, oder ein eigenes Polyfill zu entwickeln.

### API-Funktionsabdeckung

Die Unterschiede in den API-Funktionen, die in jedem der Hauptbrowser angeboten werden, fallen in drei Hauptkategorien:

1. **Fehlende Unterstützung für eine gesamte Funktion.** Zum Beispiel unterstützte Edge zum Zeitpunkt der Erstellung nicht die Funktion {{WebExtAPIRef("browserSettings")}}.
2. **Variationen in der Unterstützung von Funktionen innerhalb einer Funktion.** Zum Beispiel unterstützt Firefox zum Zeitpunkt der Erstellung nicht die Benachrichtigungsmethode {{WebExtAPIRef("notifications.onButtonClicked")}}, während Firefox der einzige Browser ist, der {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen, die browserspezifische Funktionen unterstützen.** Zum Beispiel war Containers eine spezifische Funktion von Firefox, die von der Funktion {{WebExtAPIRef("contextualIdentities")}} unterstützt wurde.

Details zur Unterstützung der Erweiterungs-APIs unter den Hauptbrowsern sowie in Firefox für Android und Safari auf iOS finden Sie auf der Seite der Mozilla Developer Network [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Informationen zur Browser-Kompatibilität sind ebenfalls bei jeder Funktion und deren Methoden, Typen und Ereignissen in den Referenzseiten der Mozilla Developer Network [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz zur Lösung von API-Unterschieden besteht darin, die in Ihrer Erweiterung verwendeten Funktionen auf diejenigen zu beschränken, die in der gesamten Zielbrowserreihe die gleiche Funktionalität bieten. In der Praxis ist dieser Ansatz für die meisten Erweiterungen wahrscheinlich zu einschränkend.

Anstatt, wo es Unterschiede zwischen den APIs gibt, sollten Sie entweder alternative Implementierungen oder Fallback-Funktionen anbieten. (Denken Sie daran: Sie müssen dies möglicherweise auch tun, um Unterschiede in der API-Unterstützung zwischen Versionen des _gleichen_ Browsers einzubeziehen.)

Die empfohlene Methode zur Implementierung alternativer oder Fallback-Funktionen besteht darin, Laufzeitprüfungen auf die Verfügbarkeit der Merkmale einer Funktion vorzunehmen. Der Vorteil einer Laufzeitprüfung besteht darin, dass Sie die Erweiterung nicht aktualisieren und neu verteilen müssen, um eine Funktion zu nutzen, wenn sie verfügbar wird.

Der folgende Code ermöglicht es Ihnen, eine Laufzeitprüfung durchzuführen:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Inhaltskript-Ausführungskontexte

Inhalts-Skripte können auf das DOM der Seite zugreifen und es ändern, genau wie Seitenskripte. Sie können auch Änderungen sehen, die von Seitenskripten am DOM vorgenommen werden. Inhalts-Skripte erhalten jedoch eine "saubere" Ansicht des DOM.

Firefox und Chrome verwenden grundsätzlich unterschiedliche Ansätze zur Behandlung dieses Verhaltens: In Firefox wird es als Xray-Vision bezeichnet, während Chrome isolierte Welten verwendet. Weitere Einzelheiten finden Sie im Abschnitt [Umgebung des Inhalts-Skripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) des Konzepts Artikels zu Inhalts-Skripten.

Firefox stellt jedoch einige APIs bereit, die Inhalts-Skripten den Zugriff auf von Seitenskripten erstellte JavaScript-Objekte ermöglichen und deren JavaScript-Objekte Seitenskripten freilegen können. Siehe [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für Details.

Es gibt auch Unterschiede zwischen der [Content Security Policy (CSP) für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungs-Service-Worker

Als Teil seiner Implementierung von Manifest V3 hat Chrome Hintergrundseiten durch Erweiterungs-Service-Worker ersetzt. Firefox behält die Verwendung von Hintergrundseiten, während Safari Hintergrundseiten und Service-Worker unterstützt.

Weitere Informationen finden Sie im Abschnitt [Browserunterstützung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite zum `"background"`-Manifest-Schlüssel. Diese enthält ein Beispiel, wie ein plattformübergreifendes Skript implementiert werden kann.

### Manifest-Schlüssel

Die Unterschiede in den [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Dateischlüsseln, die von den Hauptbrowsern unterstützt werden, fallen im Wesentlichen in drei Kategorien:

1. **Erweiterungsinformationsattribute.** Zum Beispiel enthalten Firefox und Opera zum Zeitpunkt der Erstellung den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility)-Schlüssel für Details zum Entwickler der Erweiterung.
2. **Erweiterungsfunktionen.** Zum Zeitpunkt der Erstellung unterstützte Chrome zum Beispiel nicht den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility)-Schlüssel.
3. **Schlüsseloptionalität.** Zum Zeitpunkt der Erstellung sind im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` obligatorische Schlüssel.

Informationen zur Browser-Kompatibilität sind bei jedem Schlüssel auf den Referenzseiten zu [`manifest.json`-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) auf der Mozilla Developer Network enthalten.

Da `manifest.json`-Dateien in der Regel wenig geändert werden—außer bei Versionsnummern, die sich zwischen den verschiedenen Browsern unterscheiden können—ist die Erstellung und Bearbeitung einer statischen Version für jeden Browser normalerweise der einfachste Ansatz.

### Erweiterungspaketierung

Das Paketieren einer Erweiterung zur Verteilung über die Browser-Erweiterungs-Stores ist relativ unkompliziert. Firefox, Chrome, Edge und Opera verwenden ein einfaches ZIP-Format, das die `manifest.json`-Datei im Stammverzeichnis des ZIP-Pakets erfordert. Safari verlangt, dass Erweiterungen ähnlich wie Apps paketiert werden.

Für Details zur Paketierung, beziehen Sie sich auf die Richtlinien auf den jeweiligen Entwicklerportalen der Erweiterungen.

### Erweiterungsveröffentlichung

Jeder der großen Browser unterhält Stores für Browser-Erweiterungen. Jeder Store überprüft Ihre Erweiterung auch auf Sicherheitslücken.

Daher müssen Sie das Hinzufügen und Aktualisieren Ihrer Erweiterung für jeden Store separat angehen. In einigen Fällen können Sie Ihre Erweiterung mit einem Dienstprogramm hochladen.

Diese Tabelle fasst den Ansatz und die Funktionen jedes Stores zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Dienstprogramm</th>
      <th>Vorveröffentlichungsprüfprozess</th>
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
          Eine manuelle Überprüfung der Erweiterung erfolgt nach der Veröffentlichung, was dazu führen kann, dass die Erweiterung ausgesetzt wird, wenn Probleme gefunden werden, die behoben werden müssen.
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
      <td><p>Ja, laut Apple werden im Durchschnitt 50% der Apps innerhalb von 24 Stunden geprüft und über 90% innerhalb von 48 Stunden.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Andere Überlegungen

#### Versionsnummerierung

Die Firefox-, Chrome- und Edge-Stores verlangen, dass jede hochgeladene Version eine andere Versionsnummer hat. Dies bedeutet, dass Sie nicht zu einer früheren Versionsnummer zurückkehren können, wenn Sie auf Probleme in einer Veröffentlichung stoßen.

## Fazit

Bei der Entwicklung plattformübergreifender Erweiterungen können die Unterschiede zwischen den Erweiterungs-API-Implementierungen dadurch angegangen werden, dass man Firefox als Ziel nimmt und das [WebExtension Browser-API-Polyfill](https://github.com/mozilla/webextension-polyfill/) verwendet.

Der Großteil Ihrer plattformübergreifenden Arbeit wird sich wahrscheinlich darauf konzentrieren, mit den Variationen der von den Hauptbrowsern unterstützten API-Funktionen umzugehen. Sie müssen möglicherweise auch Unterschiede zwischen den Implementierungen des Inhaltskript- und Hintergrundskripts berücksichtigen. Das Erstellen Ihrer `manifest.json`-Dateien sollte relativ einfach sein und manuell durchgeführt werden können. Anschließend müssen Sie die Unterschiede in den Prozessen für die Einreichung in jedem Erweiterungs-Store berücksichtigen.

Wenn Sie den Rat in diesem Artikel befolgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die auf allen vier Hauptbrowsern gut funktioniert und es Ihnen ermöglicht, Ihre Erweiterungsfunktionen mehr Menschen zugänglich zu machen.
