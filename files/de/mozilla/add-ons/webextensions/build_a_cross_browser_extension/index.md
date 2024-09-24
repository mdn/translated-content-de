---
title: Erstellen Sie eine plattformübergreifende Browsererweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Einführung der Browsererweiterungs-API hat eine einheitliche Landschaft für die Entwicklung von Browser-Erweiterungen geschaffen. Es gibt jedoch Unterschiede in den API-Implementierungen und im Umfang der Unterstützung unter den Browsern, die die Erweiterungs-API verwenden (die wichtigsten sind Chrome, Edge, Firefox, Opera und Safari).

Um die Reichweite Ihrer Browsererweiterung zu maximieren, sollten Sie sie für mindestens zwei, eventuell weitere Browser entwickeln. Dieser Artikel befasst sich mit den Hauptproblemen, die beim Erstellen einer plattformübergreifenden Erweiterung auftreten, und schlägt Lösungen vor, wie diese Probleme angegangen werden können.

> [!NOTE]
> Die Hauptbrowser haben Manifest V3 übernommen. Diese Manifest-Version bietet eine bessere Kompatibilität zwischen den Browsererweiterungsumgebungen, wie z. B. Versprechen zur Behandlung asynchroner Ereignisse. Neben den Informationen in dieser Anleitung, beziehen Sie sich auf die Manifest V3-Migrationsanleitungen für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate).

## Herausforderungen bei der Codierung plattformübergreifender Erweiterungen

Sie müssen die folgenden Bereiche berücksichtigen, wenn Sie eine plattformübergreifende Erweiterung angehen:

- [API-Namespace](#api-namespace)
- [API-asynchrones Ereignishandling](#api-asynchrones_ereignishandling)
- [API-Funktionsabdeckung](#api-funktionsabdeckung)
- [Ausführungskontexte von Inhalts-Skripten](#ausführungskontexte_von_inhalts-skripten)
- [Hintergrundseite versus Erweiterungs-Service-Mitarbeiter (in Manifest V3)](#hintergrundseite_und_erweiterungs-service-mitarbeiter)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Erweiterungsverpackung](#erweiterungsverpackung)
- [Veröffentlichung der Erweiterung](#veröffentlichung_der_erweiterung)

### API-Namespace

Unter den Hauptbrowsern sind zwei API-Namespaces in Gebrauch:

- `browser.*`, der vorgeschlagene Standard für die Erweiterungs-API, verwendet von Firefox und Safari.
- `chrome.*`, verwendet von Chrome, Opera und Edge.

Firefox unterstützt auch den `chrome.*`-Namespace für APIs, die mit Chrome kompatibel sind, hauptsächlich zur Unterstützung bei der [Portierung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/). Allerdings wird die Verwendung des `browser.*`-Namespaces bevorzugt. Neben dem vorgeschlagenen Standard verwendet `browser.*` Versprechen, einen modernen und praktischen Mechanismus zur Handhabung asynchroner Ereignisse.

Nur bei den trivialsten Erweiterungen ist der Namespace wahrscheinlich das einzige plattformübergreifende Thema. Daher ist es selten, wenn überhaupt, hilfreich, dieses Problem allein anzugehen. Der beste Ansatz ist, dies im Zusammenhang mit der asynchronen Ereignisbehandlung zu betrachten.

### API-asynchrones Ereignishandling

Mit der Einführung von Manifest V3 haben alle Hauptbrowser den Standard übernommen, dass von asynchronen Methoden _Promises_ zurückgegeben werden. Firefox und Safari bieten volle Unterstützung für Promises in allen asynchronen APIs. Ab Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Versprechen, sofern nicht anders dokumentiert. Die `devtools`-API ist der einzige API-Namespace ohne Unterstützung von Promises ([Chromium Bug 1510416](https://crbug.com/1510416)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Callbacks_ auf. Zur Kompatibilität unterstützen alle Hauptbrowser Callbacks über alle Manifest-Versionen hinweg. Siehe [Callbacks and Promises](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#callbacks_and_promises) für Details.

Einige Handler von Erweiterungs-API-Ereignissen sollen asynchron über eine `Promise`- oder Callback-Funktion antworten. Zum Beispiel kann ein Handler des `runtime.onMessage`-Ereignisses [eine asynchrone Antwort mit einem `Promise`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) oder mit [einem Callback](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse) senden. Eine `Promise` als Rückgabewert eines Ereignishandlers wird in Firefox und Safari unterstützt, aber noch nicht in Chrome.

Firefox unterstützt auch Callbacks für die APIs, die den `chrome.*`-Namespace unterstützen. Dennoch wird empfohlen, Promises zu verwenden, da diese die asynchrone Ereignisbehandlung erheblich vereinfachen, insbesondere wenn Ereignisse verkettet werden müssen. Das bedeutet, dass ein Polyfill oder ähnliches verwendet wird, sodass Ihre Erweiterung den `browser.*`-Namespace in Firefox und Safari verwendet und `chrome.*` in Chrome, Opera und Edge.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, schauen Sie sich [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Promises verwenden](/de/docs/Web/JavaScript/Guide/Using_promises) an.

#### Das WebExtension Browser API Polyfill

Wie können Sie also einfach die Vorteile von Promises nutzen? Die Lösung besteht darin, für Firefox unter Verwendung von Promises zu programmieren und das [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) zu verwenden, um Chrome, Opera und Edge zu adressieren.

Dieses Polyfill befasst sich mit dem API-Namespace und der asynchronen Ereignisbehandlung in Firefox, Chrome, Opera und Edge.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung mit npm oder laden Sie es direkt von den [GitHub-Veröffentlichungen](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Dann verweisen Sie `browser-polyfill.js` in:

- `manifest.json`, um es für Hintergrund- und Inhaltsskripte verfügbar zu machen.
- HTML-Dokumenten, wie `browserAction`-Pop-ups oder Tabs-Seiten.
- Der `executeScript`-Aufruf in dynamisch injizierten Inhaltsskripten, die von `tabs.executeScript` geladen wurden, wo es nicht mit einer `content_scripts`-Deklaration in `manifest.json` geladen wurde.

Zum Beispiel, dieser `manifest.json`-Code macht das Polyfill für Hintergrundskripte verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel ist es sicherzustellen, dass das Polyfill in Ihrer Erweiterung ausgeführt wird, bevor andere Skripte, die den `browser.*`-API-Namespace erwarten, ausgeführt werden.

> [!NOTE]
> Weitere Details und Informationen zur Verwendung des Polyfills mit einem Modulpaketierer finden Sie in der [README-Datei des Projekts auf GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Es gibt andere Polyfill-Optionen. Zum Zeitpunkt der Erstellung dieses Artikels bietet jedoch keine der anderen Optionen die Abdeckung des WebExtension Browser API Polyfill. Wenn Sie Firefox nicht als erste Wahl anvisiert haben, haben Sie die Wahl, die Einschränkungen alternativer Polyfills zu akzeptieren, auf Firefox zu portieren und plattformübergreifende Unterstützung hinzuzufügen oder Ihr eigenes Polyfill zu entwickeln.

### API-Funktionsabdeckung

Die Unterschiede in den API-Funktionen, die in jedem der Hauptbrowser angeboten werden, fallen in drei große Kategorien:

1. **Keine Unterstützung für eine gesamte Funktion.**
   Zum Beispiel unterstützt Edge zum Zeitpunkt der Erstellung dieses Artikels nicht die {{WebExtAPIRef("browserSettings")}}-Funktion.
2. **Variationen in der Unterstützung von Funktionen innerhalb einer Funktion.**
   Zum Beispiel unterstützt Firefox zum Zeitpunkt der Erstellung dieses Artikels nicht die Benachrichtigungsmethode {{WebExtAPIRef("notifications.onButtonClicked")}}, während Firefox der einzige Browser ist, der {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen, die browserspezifische Merkmale unterstützen.**
   Zum Beispiel war Containers zum Zeitpunkt der Erstellung dieses Artikels ein Firefox-spezifisches Merkmal, das von der {{WebExtAPIRef("contextualIdentities")}}-Funktion unterstützt wurde.

Details zur Unterstützung der Erweiterungs-APIs unter den Hauptbrowsern, Firefox für Android und Safari auf iOS finden Sie auf der Mozilla Developer Network-Seite [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Kompatibilitätsinformationen für Browser sind auch mit jeder Funktion und deren Methoden, Typen und Ereignissen in den Referenzseiten der Mozilla Developer Network [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz zur Bewältigung von API-Unterschieden besteht darin, die in Ihrer Erweiterung verwendeten Funktionen auf solche zu beschränken, die in Ihrer Reihe von Zielbrowsern die gleiche Funktionalität bieten. In der Praxis wird dieser Ansatz wahrscheinlich zu restriktiv für die meisten Erweiterungen sein.

Stattdessen sollten Sie bei Unterschieden zwischen den APIs entweder alternative Implementierungen oder Fallback-Funktionen anbieten. (Denken Sie daran: Möglicherweise müssen Sie dies auch tun, um Unterschiede in der API-Unterstützung zwischen Versionen desselben Browsers zu berücksichtigen.)

Der empfohlene Ansatz zur Implementierung alternativer oder Fallback-Funktionalitäten besteht darin, zur Laufzeit die Verfügbarkeit von Funktionen zu überprüfen. Der Vorteil einer Laufzeitprüfung besteht darin, dass Sie die Erweiterung nicht aktualisieren und erneut verteilen müssen, um eine Funktion zu nutzen, wenn sie verfügbar wird.

Der folgende Code ermöglicht es Ihnen, eine Laufzeitprüfung durchzuführen:

```js
if (typeof fn === "function") {
  // Es ist sicher, die Funktion zu verwenden
}
```

### Ausführungskontexte von Inhalts-Skripten

Inhalts-Skripte können auf das DOM der Seite zugreifen und es ändern, genauso wie Seitenskripte es können. Sie können auch alle Änderungen sehen, die Seitenskripte am DOM vornehmen. Allerdings erhalten Inhalts-Skripte eine "saubere" Ansicht des DOM.

Firefox und Chrome verwenden grundsätzlich unterschiedliche Ansätze, um dieses Verhalten zu handhaben: In Firefox heißt es Xray Vision, während Chrome isolierte Welten verwendet. Weitere Details finden Sie im Abschnitt [Inhalts-Skript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) des Konzeptartikels zu Inhalts-Skripten.

Firefox bietet jedoch einige APIs, die es Inhalts-Skripten ermöglichen, auf von Seitenskripten erstellte JavaScript-Objekte zuzugreifen und ihre JavaScript-Objekte Seitenskripten offenzulegen. Siehe [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für Details.

Es gibt auch Unterschiede in der [Content Security Policy (CSP) für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungs-Service-Mitarbeiter

Im Rahmen ihrer Implementierung von Manifest V3 hat Chrome Hintergrundseiten durch Erweiterungs-Service-Mitarbeiter ersetzt. Firefox behält die Verwendung von Hintergrundseiten bei, während Safari sowohl Hintergrundseiten als auch Service-Mitarbeiter unterstützt.

Weitere Informationen finden Sie im Abschnitt [Browserunterstützung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite zum Manifestenschlüssel `"background"`. Diese Seite enthält ein einfaches Beispiel, wie man ein plattformübergreifendes Skript implementiert.

### Manifest-Schlüssel

Die Unterschiede in den unterstützten Schlüsseln der Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) bei den Hauptbrowsern fallen im Wesentlichen in drei Kategorien:

1. **Attributattribute der Erweiterungsinformationen.**
   Zum Beispiel enthalten Firefox und Opera zum Zeitpunkt der Erstellung dieses Artikels den Schlüssel [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) für Details zum Entwickler der Erweiterung.
2. **Erweiterungsmerkmale.**
   Zum Beispiel unterstützte Chrome zum Zeitpunkt der Erstellung dieses Artikels den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) nicht.
3. **Optionalität von Schlüsseln.**
   Zum Zeitpunkt der Erstellung dieses Artikels sind im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` Pflichtschlüssel.

Browserkompatibilitätsinformationen sind mit jedem Schlüssel in den Referenzseiten der Mozilla Developer Network [`manifest.json`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthalten.

Da sich `manifest.json`-Dateien wenig ändern – außer bei Veröffentlichungsnummern, die zwischen den verschiedenen Browsern variieren können – ist das Erstellen und Bearbeiten einer statischen Version für jeden Browser in der Regel der einfachste Ansatz.

### Erweiterungsverpackung

Das Verpacken einer Erweiterung zur Verteilung über die Browsererweiterungsgeschäfte ist relativ einfach. Firefox, Chrome, Edge und Opera verwenden ein einfaches Zip-Format, das die `manifest.json`-Datei im Stammverzeichnis des Zip-Pakets erfordert. Safari verlangt, dass Erweiterungen ähnlich wie Apps verpackt werden.

Weitere Informationen zur Verpackung finden Sie in den Anleitungen auf den jeweiligen Entwicklerportalen der Erweiterungen.

### Veröffentlichung der Erweiterung

Jeder der großen Browser unterhält Browsererweiterungsgeschäfte. Jedes Geschäft überprüft auch Ihre Erweiterung, um Sicherheitslücken zu erkennen.

Daher müssen Sie das Hinzufügen und Aktualisieren Ihrer Erweiterung für jedes Geschäft separat angehen. In einigen Fällen können Sie Ihre Erweiterung mit einem Werkzeug hochladen.

Diese Tabelle fasst den Ansatz und die Funktionen jedes Geschäfts zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Dienstprogramm</th>
      <th>Pre-Publikationsprüfung</th>
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
          Eine manuelle Überprüfung der Erweiterung erfolgt nach der Veröffentlichung, was dazu führen kann, dass die Erweiterung ausgesetzt wird, wenn Probleme gefunden werden, die behoben werden müssen.
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
      <td><p>Ja, laut Apple werden im Durchschnitt 50 % der Apps innerhalb von 24 Stunden und über 90 % innerhalb von 48 Stunden überprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsnummerierung

Die Geschäfte von Firefox, Chrome und Edge erfordern, dass jede hochgeladene Version eine andere Versionsnummer hat. Das bedeutet, dass Sie nicht auf eine frühere Versionsnummer zurückkehren können, wenn Sie in einer Veröffentlichung auf Probleme stoßen.

## Fazit

Bei der Entwicklung einer plattformübergreifenden Erweiterung können die Unterschiede zwischen den Erweiterungs-API-Implementierungen durch Fokussierung auf Firefox und die Verwendung des [WebExtension Browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) angegangen werden.

Der Großteil Ihrer plattformübergreifenden Arbeit wird sich wahrscheinlich auf die Handhabung von Variationen zwischen den von den Hauptbrowsern unterstützten API-Funktionen konzentrieren. Möglicherweise müssen Sie auch Unterschiede zwischen den Implementierungen von Inhalts-Skript und Hintergrundskript beachten. Das Erstellen Ihrer `manifest.json`-Dateien sollte relativ einfach und manuell machbar sein. Des Weiteren sollten Sie die Variationen in den Prozessen für die Einreichung in jedem Erweiterungsgeschäft berücksichtigen.

Wenn Sie den Ratschlägen in diesem Artikel folgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die in allen vier Hauptbrowsern gut funktioniert, sodass Sie Ihre Erweiterungsfunktionen mehr Menschen zur Verfügung stellen können.
