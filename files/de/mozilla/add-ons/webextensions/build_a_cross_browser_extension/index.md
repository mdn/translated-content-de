---
title: Erstellen Sie eine plattformübergreifende Browser-Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Einführung der Browsererweiterungs-API hat eine einheitliche Landschaft für die Entwicklung von Browsererweiterungen geschaffen. Es gibt jedoch Unterschiede in den API-Implementierungen und im Abdeckungsbereich zwischen den Browsern, die die Erweiterungs-API verwenden (die wichtigsten sind Chrome, Edge, Firefox, Opera und Safari).

Um die Reichweite Ihrer Browser-Erweiterung zu maximieren, sollten Sie sie für mindestens zwei Browser, möglicherweise mehr, entwickeln. Dieser Artikel beleuchtet die Hauptprobleme, die bei der Erstellung einer plattformübergreifenden Erweiterung auftreten, und schlägt vor, wie diese Herausforderungen angegangen werden können.

> [!NOTE]
> Die Hauptbrowser haben Manifest V3 übernommen. Diese Manifestversion bietet eine bessere Kompatibilität zwischen den Browsererweiterungsumgebungen, wie etwa Promises zur Behandlung asynchroner Ereignisse. Zusätzlich zu den Informationen in diesem Leitfaden lesen Sie die Manifest V3-Migrationsleitfäden für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate).

## Herausforderungen bei der plattformübergreifenden Erweiterungscodierung

Bei der Bewältigung einer plattformübergreifenden Erweiterung müssen Sie die folgenden Bereiche ansprechen:

- [API-Namensraum](#api-namensraum)
- [Asynchrone Ereignisbehandlung der API](#asynchrone_ereignisbehandlung_der_api)
- [Abdeckung der API-Funktionen](#abdeckung_der_api-funktionen)
- [Ausführungskontexte von Inhalts-Skripten](#ausführungskontexte_von_inhalts-skripten)
- [Hintergrundseite versus Erweiterungs-Service-Worker (in Manifest V3)](#hintergrundseite_und_erweiterungs-service-worker)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Verpackung der Erweiterung](#verpackung_der_erweiterung)
- [Veröffentlichung der Erweiterung](#veröffentlichung_der_erweiterung)

### API-Namensraum

Unter den Hauptbrowsern sind zwei API-Namensräume im Einsatz:

- `browser.*`, der vorgeschlagene Standard für die Erweiterungs-API, verwendet von Firefox und Safari.
- `chrome.*`, verwendet von Chrome, Opera und Edge.

Firefox unterstützt auch den `chrome.*`-Namensraum für APIs, die mit Chrome kompatibel sind, hauptsächlich um die [Portierung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu erleichtern. Allerdings wird die Verwendung des `browser.*`-Namensraums bevorzugt. Neben dem Vorteil, ein vorgeschlagener Standard zu sein, verwendet `browser.*` Promises, ein modernes und praktisches Mittel zur Behandlung asynchroner Ereignisse.

Nur in den trivialsten Erweiterungen ist der Namensraum wahrscheinlich das einzige plattformübergreifende Problem, das angegangen werden muss. Daher ist es selten, wenn überhaupt, hilfreich, dieses Problem allein zu adressieren. Der beste Ansatz besteht darin, dies in Kombination mit der asynchronen Ereignisbehandlung anzugehen.

### Asynchrone Ereignisbehandlung der API

Mit der Einführung von Manifest V3 haben alle Hauptbrowser den Standard übernommen, _Promises_ von asynchronen Methoden zurückzugeben. Firefox und Safari bieten volle Unterstützung für Promises bei allen asynchronen APIs. Ab Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Promises, sofern nicht anders dokumentiert. Die `devtools`-API ist der einzige API-Namensraum ohne Promise-Unterstützung ([Chromium-Bug 1510416](https://crbug.com/1510416)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Callbacks_ auf. Der Kompatibilität halber unterstützen alle Hauptbrowser Callbacks über alle Manifestversionen hinweg. Siehe [Callbacks und Promises](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#callbacks_and_promises) für Details.

Einige Handler von Ereignissen der Erweiterungs-API sollen asynchron durch eine `Promise`- oder Callback-Funktion reagieren. Beispielsweise kann ein Handler des Ereignisses `runtime.onMessage` [eine asynchrone Antwort mit einer `Promise` senden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) oder [mit einem Callback](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse). Eine `Promise` als Rückgabewert eines Ereignis-Handlers wird in Firefox und Safari unterstützt, jedoch noch nicht in Chrome.

Firefox unterstützt auch Callbacks für die APIs, die den `chrome.*`-Namensraum unterstützen. Dennoch wird die Verwendung von Promises empfohlen. Promises vereinfachen die asynchrone Ereignisbehandlung erheblich, insbesondere wenn Ereignisse verkettet werden müssen. Das bedeutet, dass Sie ein Polyfill oder Ähnliches verwenden sollten, damit Ihre Erweiterung den `browser.*`-Namensraum in Firefox und Safari und `chrome.*` in Chrome, Opera und Edge verwendet.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, sehen Sie sich [Javascript kennenlernen: Callbacks, Promises und Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

#### Das WebExtension-Browser-API-Polyfill

Wie können Sie Promises einfach nutzen? Die Lösung besteht darin, für Firefox mit Promises zu kodieren und das [WebExtension-Browser-API-Polyfill](https://github.com/mozilla/webextension-polyfill/) für Chrome, Opera und Edge zu nutzen.

Dieses Polyfill adressiert den API-Namensraum und die asynchrone Ereignisbehandlung über Firefox, Chrome, Opera und Edge hinweg.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung mit npm oder laden Sie es direkt von den [GitHub-Veröffentlichungen](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Beziehen Sie dann `browser-polyfill.js` in:

- `manifest.json`, um es für Hintergrund- und Inhalts-Skripte verfügbar zu machen.
- HTML-Dokumente, wie Popups oder Tab-Seiten von `browserAction`.
- Den `executeScript`-Aufruf in dynamisch eingezogenen Inhalts-Skripten, die durch `tabs.executeScript` geladen werden, wo es nicht über eine `content_scripts`-Deklaration in `manifest.json` geladen wurde.

Dieser `manifest.json`-Code macht das Polyfill beispielsweise für Hintergrundskripte verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel ist es sicherzustellen, dass das Polyfill in Ihrer Erweiterung ausgeführt wird, bevor andere Skripte, die den `browser.*`-API-Namensraum erwarten, ausgeführt werden.

> [!NOTE]
> Weitere Details und Informationen zur Nutzung des Polyfills mit einem Modulpaketierer finden Sie im [Readme des Projekts auf GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Es gibt andere Polyfill-Optionen. Zum Zeitpunkt des Schreibens bietet jedoch keine der anderen Optionen die Abdeckung des WebExtension-Browser-API-Polyfills. Wenn Sie Firefox nicht als erste Wahl gewählt haben, bestehen Ihre Optionen darin, die Einschränkungen alternativer Polyfills zu akzeptieren, auf Firefox zu portieren und plattformübergreifende Unterstützung hinzuzufügen oder Ihr eigenes Polyfill zu entwickeln.

### Abdeckung der API-Funktionen

Die Unterschiede in den von den Hauptbrowsern angebotenen API-Funktionen fallen in drei breite Kategorien:

1. **Fehlende Unterstützung für eine gesamte Funktion.** Zum Beispiel unterstützte Edge zum Zeitpunkt des Schreibens die {{WebExtAPIRef("browserSettings")}}-Funktion nicht.
2. **Variationen in der Unterstützung für Funktionen innerhalb einer Funktion.** Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens die Benachrichtigungsfunktion nicht {{WebExtAPIRef("notifications.onButtonClicked")}}, während Firefox als einziger Browser {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen, die browserspezifische Funktionen unterstützen.** Zum Beispiel war Containers zum Zeitpunkt des Schreibens ein spezifisches Firefox-Feature, das von der {{WebExtAPIRef("contextualIdentities")}}-Funktion unterstützt wurde.

Details zur Unterstützung der Erweiterungs-APIs unter den Hauptbrowsern sowie Firefox für Android und Safari auf iOS finden Sie auf der Mozilla Developer Network-Seite [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Informationen zur Browser-Kompatibilität sind auch bei jeder Funktion und ihren Methoden, Typen und Ereignissen auf den Referenzseiten der Mozilla Developer Network [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz zur Adressierung von API-Unterschieden besteht darin, die in Ihrer Erweiterung verwendeten Funktionen auf diejenigen zu beschränken, die in Ihrer Zielbrowser-Reihe die gleiche Funktionalität bieten. In der Praxis ist dieser Ansatz jedoch für die meisten Erweiterungen wahrscheinlich zu einschränkend.

Stattdessen sollten Sie bei Unterschieden zwischen den APIs entweder alternative Implementierungen oder Fallback-Funktionalitäten anbieten. (Denken Sie daran, dass Sie dies möglicherweise auch tun müssen, um Unterschiede in der API-Unterstützung zwischen Versionen des _gleichen_ Browsers auszugleichen.)

Die empfohlene Methode, um alternative oder Fallback-Funktionalitäten zu implementieren, besteht darin, Laufzeitprüfungen auf die Verfügbarkeit von Funktionen durchzuführen. Der Vorteil von Laufzeitprüfungen ist, dass Sie die Erweiterung nicht aktualisieren und verteilen müssen, um eine Funktion zu nutzen, sobald sie verfügbar wird.

Der folgende Code ermöglicht Ihnen, eine Laufzeitprüfung durchzuführen:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Ausführungskontexte von Inhalts-Skripten

Inhalts-Skripte können auf das DOM der Seite zugreifen und es ändern, ebenso wie Seiten-Skripte. Sie können auch Änderungen sehen, die von Seiten-Skripten am DOM vorgenommen wurden. Inhalts-Skripte erhalten jedoch einen "sauberen" Blick auf das DOM.

Firefox und Chrome verwenden grundlegend unterschiedliche Ansätze, um dieses Verhalten zu handhaben: In Firefox wird dies als Xray vision bezeichnet, während Chrome isolierte Welten verwendet. Weitere Details finden Sie im Abschnitt [Inhalts-Skriptumgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) des Inhalts-Skripte-Konzeptartikels.

Firefox bietet jedoch einige APIs, die es Inhalts-Skripten ermöglichen, auf von Seiten-Skripten erstellte JavaScript-Objekte zuzugreifen und ihre JavaScript-Objekte Seiten-Skripten zur Verfügung zu stellen. Siehe [Teilen von Objekten mit Seiten-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für Details.

Es gibt auch Unterschiede zwischen der [Content Security Policy (CSP) für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungs-Service-Worker

Im Rahmen der Implementierung von Manifest V3 hat Chrome Hintergrundseiten durch Erweiterungs-Service-Worker ersetzt. Firefox behält die Verwendung von Hintergrundseiten bei, während Safari sowohl Hintergrundseiten als auch Service-Worker unterstützt.

Weitere Informationen finden Sie im Abschnitt [Browserunterstützung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite des "background"-Manifest-Schlüssels. Dies schließt ein einfaches Beispiel ein, wie man ein plattformübergreifendes Skript implementiert.

### Manifest-Schlüssel

Die Unterschiede in den in den Hauptbrowsern unterstützten [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)-Dateischlüsseln fallen im Großen und Ganzen in drei Kategorien:

1. **Attributinformationen zur Erweiterung.** Zum Beispiel beinhalten Firefox und Opera zum Zeitpunkt des Schreibens den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility)-Schlüssel für Details über den Entwickler der Erweiterung.
2. **Erweiterungsfunktionen.** Zum Beispiel unterstützte Chrome zum Zeitpunkt des Schreibens den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) nicht.
3. **Optionalität der Schlüssel.** Zum Zeitpunkt des Schreibens sind im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` obligatorische Schlüssel.

Informationen zur Browser-Kompatibilität sind bei jedem Schlüssel in den Referenzseiten des Mozilla Developer Network [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthalten.

Da `manifest.json`-Dateien in der Regel wenig, außer den Versionsnummern, die zwischen den verschiedenen Browsern unterschiedlich sein können, geändert werden, ist es in der Regel der einfachste Ansatz, eine statische Version für jeden Browser zu erstellen und zu bearbeiten.

### Verpackung der Erweiterung

Das Verpacken einer Erweiterung zur Verteilung über die Browsererweiterungs-Stores ist relativ unkompliziert. Firefox, Chrome, Edge und Opera verwenden alle ein einfaches ZIP-Format, das erfordert, dass die `manifest.json`-Datei im Stammverzeichnis des ZIP-Pakets liegt. Safari verlangt, dass Erweiterungen ähnlich wie Apps verpackt werden.

Für Details zum Verpacken lesen Sie die Anleitung auf den jeweiligen Entwicklerportalen der Erweiterungen.

### Veröffentlichung der Erweiterung

Jeder der großen Browser betreibt eigene Stores für Browser-Erweiterungen. Jeder Store überprüft auch Ihre Erweiterung auf Sicherheitslücken.

Daher müssen Sie das Hinzufügen und Aktualisieren Ihrer Erweiterung für jeden Store separat angehen. In einigen Fällen können Sie Ihre Erweiterung mit einem Dienstprogramm hochladen.

Diese Tabelle fasst den Ansatz und die Merkmale jedes Stores zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Dienstprogramm</th>
      <th>Vorveröffentlichungsprüfung</th>
      <th>Account-Zwei-Faktor-Authentifizierung</th>
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
      <td><p>Keine SLA angegeben</p></td>
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
          Eine manuelle Überprüfung der Erweiterung erfolgt nach der Veröffentlichung, was zur Sperrung der Erweiterung führen kann, wenn Probleme gefunden werden, die behoben werden müssen.
        </p>
      </td>
      <td><p>Ja</p></td>
    </tr>
    <tr>
      <th><p>Opera</p></th>
      <td><p>Nein</p></td>
      <td><p>Nein</p></td>
      <td><p>Manuell, keine SLA angegeben</p></td>
      <td><p>Nein</p></td>
    </tr>
    <tr>
      <th><p>Safari</p></th>
      <td><p>Ja</p></td>
      <td><p>Nein</p></td>
      <td><p>Ja, laut Apple werden durchschnittlich 50% der Apps innerhalb von 24 Stunden und über 90% innerhalb von 48 Stunden überprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsnummerierung

Die Stores von Firefox, Chrome und Edge erfordern, dass jede hochgeladene Version eine andere Versionsnummer hat. Das bedeutet, dass Sie nicht zu einer früheren Versionsnummer zurückkehren können, wenn Sie auf Probleme in einer Veröffentlichung stoßen.

## Fazit

Bei der plattformübergreifenden Erweiterungsentwicklung können die Unterschiede zwischen den Implementierungen der Erweiterungs-API durch Targeting von Firefox und die Verwendung des [WebExtension-Browser-API-Polyfills](https://github.com/mozilla/webextension-polyfill/) adressiert werden.

Der Großteil Ihrer plattformübergreifenden Arbeit wird sich wahrscheinlich auf die Handhabung von Unterschieden zwischen den von den Hauptbrowsern unterstützten API-Funktionen konzentrieren. Möglicherweise müssen Sie auch Unterschiede zwischen der Content-Skript- und der Hintergrundskript-Implementierung berücksichtigen. Die Erstellung Ihrer `manifest.json`-Dateien sollte relativ einfach sein und kann von Ihnen manuell durchgeführt werden. Danach müssen Sie die Unterschiede in den Prozessen für das Einreichen in jeden Erweiterungsshop berücksichtigen.

Wenn Sie den Ratschlägen in diesem Artikel folgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die gut auf allen vier Hauptbrowsern funktioniert, sodass Sie Ihre Erweiterungsfunktionen mehr Menschen zur Verfügung stellen können.
