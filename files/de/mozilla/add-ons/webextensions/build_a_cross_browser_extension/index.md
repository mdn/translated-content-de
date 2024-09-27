---
title: Erstellen Sie eine plattformübergreifende Browser-Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Einführung der Browser-Erweiterungen-API hat eine einheitliche Landschaft für die Entwicklung von Browser-Erweiterungen geschaffen. Dennoch gibt es Unterschiede in den API-Implementierungen und im Abdeckungsumfang zwischen den Browsern, die die Erweiterungen-API verwenden (zu den wichtigsten gehören Chrome, Edge, Firefox, Opera und Safari).

Um die Reichweite Ihrer Browser-Erweiterung zu maximieren, sollten Sie diese für mindestens zwei Browser entwickeln, möglicherweise mehr. Dieser Artikel betrachtet die Hauptprobleme, die bei der Erstellung einer plattformübergreifenden Erweiterung auftreten können, und schlägt Lösungen zur Bewältigung dieser Herausforderungen vor.

> [!NOTE]
> Die wichtigsten Browser haben Manifest V3 eingeführt. Diese Manifest-Version bietet eine bessere Kompatibilität zwischen den Umgebungen von Browser-Erweiterungen, wie Versprechungen (Promises) zur Behandlung asynchroner Ereignisse. Zusätzlich zu den Informationen in diesem Leitfaden sollten Sie die Manifest V3 Migrationsleitfäden für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate) konsultieren.

## Herausforderungen beim plattformübergreifenden Codieren von Erweiterungen

Sie müssen die folgenden Bereiche ansprechen, wenn Sie eine plattformübergreifende Erweiterung angehen:

- [API-Namespace](#api-namespace)
- [Asynchrone Ereignisbehandlung durch die API](#asynchrone_ereignisbehandlung_durch_die_api)
- [API-Funktionsabdeckung](#api-funktionsabdeckung)
- [Ausführungskontexte von Inhalts-Skripten](#ausführungskontexte_von_inhalts-skripten)
- [Hintergrundseite versus Erweiterungs-Service Worker (in Manifest V3)](#hintergrundseite_und_erweiterungs-service_worker)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Erweiterungspaketierung](#erweiterungspaketierung)
- [Erweiterungsveröffentlichung](#erweiterungsveröffentlichung)

### API-Namespace

Unter den Hauptbrowsern sind zwei API-Namespaces im Einsatz:

- `browser.*`, der vorgeschlagene Standard für die Erweiterungs-API, der von Firefox und Safari verwendet wird.
- `chrome.*`, der von Chrome, Opera und Edge verwendet wird.

Firefox unterstützt auch den `chrome.*` Namespace für APIs, die mit Chrome kompatibel sind, hauptsächlich um beim [Portieren](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu helfen. Es wird jedoch bevorzugt, den `browser.*` Namespace zu verwenden. Abgesehen davon, dass es sich um den vorgeschlagenen Standard handelt, verwendet `browser.*` Promises, einen modernen und bequemen Mechanismus zur Bearbeitung asynchroner Ereignisse.

Nur bei den trivialsten Erweiterungen ist der Namespace das einzige plattformübergreifende Problem, das angesprochen werden muss. Daher ist es selten, wenn überhaupt, hilfreich, sich allein um dieses Problem zu kümmern. Der beste Ansatz ist, dies mit der asynchronen Ereignisbehandlung anzugehen.

### Asynchrone Ereignisbehandlung durch die API

Mit der Einführung von Manifest V3 haben alle Hauptbrowser den Standard angenommen, _Promises_ von asynchronen Methoden zurückzugeben. Firefox und Safari unterstützen Promises vollständig in allen asynchronen APIs. Seit Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Promises, es sei denn, es ist anders dokumentiert. Die `devtools` API ist der einzige API-Namespace ohne Unterstützung für Promises ([Chromium Fehler 1510416](https://crbug.com/1510416)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Callbacks_ auf. Aus Kompatibilitätsgründen unterstützen alle Hauptbrowser Callbacks in allen Manifest-Versionen. Details finden Sie unter [Callbacks und Promises](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#callbacks_and_promises).

Einige Handler von Erweiterungs-API-Ereignissen sollen asynchron über eine `Promise` oder Callback-Funktion antworten. Beispielsweise kann ein Handler des `runtime.onMessage` Ereignisses [eine asynchrone Antwort mit einer `Promise` senden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) oder [mit einem Callback](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse). Eine `Promise` als Rückgabewert von einem Ereignishandler wird in Firefox und Safari unterstützt, jedoch noch nicht in Chrome.

Firefox unterstützt auch Callbacks für die APIs, die den `chrome.*` Namespace unterstützen. Es wird jedoch empfohlen, Promises zu verwenden. Promises vereinfachen die asynchrone Ereignisbehandlung erheblich, insbesondere wenn Sie Ereignisse miteinander verketten müssen. Dies bedeutet, dass Sie ein Polyfill oder Ähnliches verwenden, sodass Ihre Erweiterung den `browser.*` Namespace in Firefox und Safari und `chrome.*` in Chrome, Opera und Edge verwendet.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, lesen Sie [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises).

#### Das WebExtension Browser API Polyfill

Wie profitieren Sie also einfach von Promises? Die Lösung besteht darin, für Firefox mit Promises zu codieren und das [WebExtension Browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) zu verwenden, um Chrome, Opera und Edge abzudecken.

Dieses Polyfill behandelt den API-Namespace und die asynchrone Ereignisbehandlung in Firefox, Chrome, Opera und Edge.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung mit npm oder laden Sie es direkt von den [GitHub-Veröffentlichungen](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Verweisen Sie dann `browser-polyfill.js` in:

- `manifest.json`, um es für Hintergrund- und Inhaltsskripte verfügbar zu machen.
- HTML-Dokumente, wie `browserAction` Popups oder Tab-Seiten.
- Den `executeScript` Aufruf in dynamisch injizierten Inhaltsskripten, die durch `tabs.executeScript` geladen werden, sofern sie nicht mit einer `content_scripts`-Deklaration in `manifest.json` geladen wurden.

Beispielsweise macht dieser `manifest.json`-Code das Polyfill für Hintergrundskripte verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel ist es sicherzustellen, dass das Polyfill in Ihrer Erweiterung ausgeführt wird, bevor andere Skripte, die den `browser.*` API-Namespace erwarten, ausgeführt werden.

> [!NOTE]
> Weitere Details und Informationen zur Verwendung des Polyfills mit einem Modul-Bundler finden Sie im [Readme des Projekts auf GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Es gibt andere Polyfill-Optionen. Allerdings bieten zum Zeitpunkt des Schreibens keine der anderen Optionen die Abdeckung des WebExtension Browser API Polyfill. Wenn Firefox nicht Ihre erste Wahl ist, haben Sie die Möglichkeit, die Einschränkungen alternativer Polyfills zu akzeptieren, für Firefox zu portieren und plattformübergreifende Unterstützung hinzuzufügen oder Ihr eigenes Polyfill zu entwickeln.

### API-Funktionsabdeckung

Die Unterschiede in den API-Funktionen, die in jedem der Hauptbrowser angeboten werden, fallen in drei breite Kategorien:

1. **Fehlende Unterstützung für eine gesamte Funktion.**
   Zum Beispiel unterstützt Edge zum Zeitpunkt des Schreibens nicht die {{WebExtAPIRef("browserSettings")}} Funktion.
2. **Variationen in der Unterstützung von Funktionen innerhalb einer Funktion.**
   Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens nicht die Benachrichtigungsfunktionsmethode {{WebExtAPIRef("notifications.onButtonClicked")}}, während Firefox der einzige Browser ist, der {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen, die browserspezifische Features unterstützen.**
   Zum Beispiel war Container zum Zeitpunkt des Schreibens ein Firefox-spezifisches Feature, das von der {{WebExtAPIRef("contextualIdentities")}} Funktion unterstützt wurde.

Details zur Unterstützung der Erweiterungs-APIs unter den Hauptbrowsern sowie Firefox für Android und Safari auf iOS finden Sie auf der Seite der Mozilla Developer Network [Unterstützung für JavaScript-APIs durch Browser](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Informationen zur Browser-Kompatibilität sind auch bei jeder Funktion und ihren Methoden, Typen und Ereignissen in den Mozilla Developer Network [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) Referenzseiten enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz zur Bewältigung von API-Unterschieden besteht darin, die verwendeten Funktionen in Ihrer Erweiterung auf Funktionen zu beschränken, die in der gesamten Bandbreite Ihrer Zielbrowser die gleiche Funktionalität bieten. In der Praxis ist dieser Ansatz für die meisten Erweiterungen wahrscheinlich zu einschränkend.

Stattdessen sollten Sie, wo es Unterschiede zwischen den APIs gibt, entweder alternative Implementierungen oder Fallback-Funktionalität anbieten. (Denken Sie daran: Möglicherweise müssen Sie dies auch tun, um Unterschiede in der API-Unterstützung zwischen Versionen desselben Browsers zu berücksichtigen.)

Die Durchführung von Laufzeitprüfungen zur Verfügbarkeit der Funktionen einer Funktion ist der empfohlene Ansatz zur Implementierung alternativer oder Fallback-Funktionalität. Der Vorteil der Durchführung einer Laufzeitprüfung besteht darin, dass Sie die Erweiterung nicht aktualisieren und neu verteilen müssen, um den Vorteil einer Funktion zu nutzen, wenn sie verfügbar wird.

Der folgende Code ermöglicht Ihnen die Durchführung einer Laufzeitprüfung:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Ausführungskontexte von Inhalts-Skripten

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, genau wie Seitenskripten. Sie können auch alle Änderungen sehen, die Skripte an der Seite vorgenommen haben. Inhaltsskripte erhalten jedoch eine "saubere" Ansicht des DOM.

Firefox und Chrome verwenden grundsätzlich unterschiedliche Ansätze, um dieses Verhalten zu handhaben: In Firefox wird es Xray Vision genannt, während Chrome isolierte Welten verwendet. Weitere Informationen finden Sie im [Content script environment](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) Abschnitt des Inhaltskript-Konzepteursartikels.

Allerdings bietet Firefox einige APIs, die es Inhaltsskripten ermöglichen, auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden, und ihre JavaScript-Objekte für Seitenskripte sichtbar zu machen. Details siehe [Freigabe von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).

Es gibt auch Unterschiede zwischen den [Content Security Policy (CSP) für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungs-Service Worker

Im Rahmen der Implementierung von Manifest V3 hat Chrome Hintergrundseiten durch Erweiterungs-Service Worker ersetzt. Firefox behält die Verwendung von Hintergrundseiten bei, während Safari sowohl Hintergrundseiten als auch Service Worker unterstützt.

Weitere Informationen finden Sie im Abschnitt [Unterstützung durch Browser](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite zum Manifest-Schlüssel `"background"`. Dies beinhaltet ein einfaches Beispiel, wie ein plattformübergreifendes Skript implementiert werden kann.

### Manifest-Schlüssel

Die Unterschiede in den unterstützten Schlüsseln der Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) durch die Hauptbrowser fallen grob in drei Kategorien:

1. **Erweiterungsinformationsattribute.**
   Zum Beispiel beinhalten Firefox und Opera zum Zeitpunkt des Schreibens den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) Schlüssel für Details über den Entwickler der Erweiterung.
2. **Erweiterungsfunktionen.**
   Zum Beispiel unterstützte Chrome zu dem Zeitpunkt, als dies geschrieben wurde, den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) nicht.
3. **Schlüsseloptionalität.**
   Zum Zeitpunkt des Schreibens sind im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` verpflichtende Schlüssel.

Informationen zur Browser-Kompatibilität sind bei jedem Schlüssel auf den Mozilla Developer Network Seiten zu den [`manifest.json` Schlüsselreferenzen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthalten.

Da sich `manifest.json` Dateien in der Regel wenig ändern—abgesehen von den Versionsnummern, die zwischen den verschiedenen Browsern unterschiedlich sein können—ist es in der Regel am einfachsten, für jeden Browser eine statische Version zu erstellen und zu bearbeiten.

### Erweiterungspaketierung

Das Verpacken einer Erweiterung zur Verteilung über die Browser-Erweiterungs-Stores ist relativ einfach. Firefox, Chrome, Edge und Opera verwenden alle ein einfaches ZIP-Format, das erfordert, dass die `manifest.json` Datei am Anfang des ZIP-Pakets liegt. Safari erfordert, dass Erweiterungen auf ähnliche Weise wie Apps gepackt werden.

Für Details zur Paketierung konsultieren Sie die Anleitung auf den jeweiligen Entwicklerportalen der Erweiterungen.

### Erweiterungsveröffentlichung

Jeder der großen Browser betreibt Browser-Erweiterungs-Stores. Jeder Store überprüft auch Ihre Erweiterung auf Sicherheitslücken.

Infolgedessen müssen Sie das Hinzufügen und Aktualisieren Ihrer Erweiterung für jeden Store separat angehen. In einigen Fällen können Sie Ihre Erweiterung mit einem Dienstprogramm hochladen.

Diese Tabelle fasst den Ansatz und die Merkmale jedes Stores zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Dienstprogramm</th>
      <th>Vorveröffentlichungs-Überprüfungsprozess</th>
      <th>Konto-Zwei-Faktor-Authentifizierung</th>
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
          Eine manuelle Überprüfung der Erweiterung erfolgt nach der Veröffentlichung, was zur Aussetzung der Erweiterung führen kann, wenn Probleme festgestellt werden, die behoben werden müssen.
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
      <td><p>Ja mit, laut Apple, im Durchschnitt 50 % der Apps innerhalb von 24 Stunden und über 90 % innerhalb von 48 Stunden überprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsnummerierung

Die Stores von Firefox, Chrome und Edge verlangen, dass jede hochgeladene Version eine andere Versionsnummer hat. Das bedeutet, dass Sie nicht zu einer früheren Versionsnummer zurückkehren können, wenn Sie auf Probleme in einer Veröffentlichung stoßen.

## Fazit

Wenn Sie eine plattformübergreifende Erweiterungsentwicklung in Angriff nehmen, können die Unterschiede zwischen den Erweiterungs-API-Implementierungen angegangen werden, indem Sie Firefox anvisieren und das [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) verwenden.

Der Großteil Ihrer plattformübergreifenden Arbeit wird sich wahrscheinlich auf die Bewältigung von Variationen zwischen den API-Funktionen konzentrieren, die von den Hauptbrowsern unterstützt werden. Möglicherweise müssen Sie auch Unterschiede zwischen den Implementierungen von Inhalts- und Hintergrundskripten berücksichtigen. Die Erstellung Ihrer `manifest.json` Dateien sollte relativ einfach sein und kann manuell erfolgen. Anschließend müssen Sie die verschiedenen Abläufe für die Einreichung in jedem Erweiterungsspeicher berücksichtigen.

Wenn Sie den Ratschlägen in diesem Artikel folgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die in allen vier Hauptbrowsern gut funktioniert und es Ihnen ermöglicht, Ihre Erweiterungsfunktionen mehr Menschen zugänglich zu machen.
