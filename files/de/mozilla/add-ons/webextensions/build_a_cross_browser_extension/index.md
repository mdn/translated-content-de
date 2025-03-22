---
title: Erstellen einer plattformübergreifenden Browser-Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: 4f197acb904fe25772ddcd928ca1e397fd7680b4
---

{{AddonSidebar}}

Die Einführung der Browser-Erweiterungs-API hat eine einheitliche Landschaft für die Entwicklung von Browser-Erweiterungen geschaffen. Es gibt jedoch Unterschiede in der Implementierung der API und im Umfang der Abdeckung zwischen den Browsern, die die Erweiterungs-API verwenden (die wichtigsten sind Chrome, Edge, Firefox, Opera und Safari).

Das Maximieren der Reichweite Ihrer Browser-Erweiterung bedeutet, sie für mindestens zwei Browser zu entwickeln, möglicherweise mehr. Dieser Artikel befasst sich mit den Hauptproblemen, die bei der Erstellung einer plattformübergreifenden Erweiterung auftreten, und schlägt Lösungen zur Bewältigung dieser Herausforderungen vor.

> [!NOTE]
> Die wichtigsten Browser haben Manifest V3 übernommen. Diese Manifestversion bietet eine bessere Kompatibilität zwischen den Browser-Erweiterungsumgebungen, wie z.B. Versprechen zur Handhabung von asynchronen Ereignissen. Neben den Informationen in diesem Leitfaden sollten Sie auf die Manifest V3-Migrationsleitfäden für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate) verweisen.

## Hürden beim plattformübergreifenden Erweiterungscoding

Folgende Bereiche müssen Sie ansprechen, wenn Sie eine plattformübergreifende Erweiterung angehen:

- [API-Namensraum](#api-namensraum)
- [API-Asynchrone Ereignisbehandlung](#api-asynchrone_ereignisbehandlung)
- [API-Funktionsabdeckung](#api-funktionsabdeckung)
- [Ausführungskontexte von Content-Skripten](#ausführungskontexte_von_content-skripten)
- [Hintergrundseite versus Erweiterungs-Service-Worker (in Manifest V3)](#hintergrundseite_und_erweiterungsserviceworker)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Verpackung von Erweiterungen](#verpackung_von_erweiterungen)
- [Erweiterungsveröffentlichung](#erweiterungsveröffentlichung)

### API-Namensraum

Es gibt zwei API-Namensräume, die von den wichtigsten Browsern verwendet werden:

- `browser.*`, der vorgeschlagene Standard für die Erweiterungs-API, der von Firefox und Safari verwendet wird.
- `chrome.*`, verwendet von Chrome, Opera und Edge.

Firefox unterstützt auch den `chrome.*` Namensraum für APIs, die mit Chrome kompatibel sind, vor allem um beim [Portieren](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu helfen. Dennoch wird die Verwendung des `browser.*` Namensraums bevorzugt. Zusätzlich zum vorgeschlagenen Standard verwendet `browser.*` Versprechen—ein modernes und bequemes Mechanismus zur Handhabung asynchroner Ereignisse.

Nur bei den trivialsten Erweiterungen ist der Namensraum wahrscheinlich das einzige plattformübergreifende Problem, das angesprochen werden muss. Daher ist es selten, wenn überhaupt, hilfreich, dieses Problem allein zu behandeln. Am besten wird dies zusammen mit der asynchronen Ereignisbehandlung behandelt.

### API-Asynchrone Ereignisbehandlung

Mit der Einführung von Manifest V3 haben alle großen Browser den Standard der Rückgabe von _Promises_ aus asynchronen Methoden übernommen. Firefox und Safari unterstützen vollständig Versprechen in allen asynchronen APIs. Seit Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Versprechen, sofern nicht anders dokumentiert. Die `devtools` API ist der einzige API-Namensraum ohne Versprechensunterstützung ([Chromium-Bug 1510416](https://crbug.com/1510416)).

In Manifest V2 unterstützen Firefox und Safari Versprechen für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Callbacks_ auf. Aus Kompatibilitätsgründen unterstützen alle großen Browser Callbacks in allen Manifest-Versionen. Siehe [Callbacks und Promises](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#callbacks_and_promises) für Details.

Einige Handler von Erweiterungs-API-Ereignissen sollen asynchron über ein `Promise` oder eine Callback-Funktion antworten. Zum Beispiel kann ein Handler des `runtime.onMessage`-Ereignisses [eine asynchrone Antwort mit einem `Promise` senden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) oder unter Verwendung [eines Callbacks](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse). Ein `Promise` als Rückgabewert von einem Ereignishandler wird in Firefox und Safari unterstützt, aber noch nicht in Chrome.

Firefox unterstützt auch Callbacks für die APIs, die den `chrome.*` Namensraum unterstützen. Die Verwendung von Versprechen wird jedoch empfohlen. Versprechen vereinfachen die asynchrone Ereignisbehandlung erheblich, insbesondere wenn Sie Ereignisse verketten müssen. Das bedeutet, dass Sie ein Polyfill oder ähnliches verwenden sollten, sodass Ihre Erweiterung den `browser.*` Namensraum in Firefox und Safari verwendet und `chrome.*` in Chrome, Opera und Edge.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, sehen Sie sich [Asynchrones JavaScript kennenlernen: Callbacks, Promises und Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

#### Das WebExtension-Browser-API-Polyfill

Wie können Sie also die Vorteile von Promises leicht nutzen? Die Lösung besteht darin, mit Promises für Firefox zu programmieren und das [WebExtension-Browser-API-Polyfill](https://github.com/mozilla/webextension-polyfill/) zu verwenden, um Chrome, Opera und Edge zu adressieren.

Dieses Polyfill behandelt den API-Namensraum und die asynchrone Ereignisbehandlung in Firefox, Chrome, Opera und Edge.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung über npm oder laden Sie es direkt von den [GitHub-Veröffentlichungen](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Beziehen Sie sich dann auf `browser-polyfill.js` in:

- `manifest.json`, um es Hintergrund- und Content-Skripten zur Verfügung zu stellen.
- HTML-Dokumente, wie z.B. `browserAction`-Popups oder Tab-Seiten.
- Den `executeScript`-Aufruf in dynamisch geladenen Content-Skripten, die von `tabs.executeScript` geladen werden, wo es nicht durch eine `content_scripts`-Deklaration in `manifest.json` geladen wurde.

Zum Beispiel macht dieser `manifest.json`-Code das Polyfill für Hintergrundskripten verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel ist es sicherzustellen, dass das Polyfill in Ihrer Erweiterung ausgeführt wird, bevor alle anderen Skripte, die den `browser.*` API-Namensraum erwarten, ausgeführt werden.

> [!NOTE]
> Für weitere Details und Informationen zur Verwendung des Polyfills mit einem Modul-Bundler siehe die [README des Projekts auf GitHub](https://github.com/mozilla/webextension-polyfill/blob/master/README.md).

Es gibt andere Polyfill-Optionen. Zum Zeitpunkt des Schreibens bietet jedoch keine der anderen Optionen die Abdeckung des WebExtension-Browser-API-Polyfills. Wenn Sie Firefox nicht als Ihre erste Wahl anvisiert haben, besteht Ihre Optionen darin, die Einschränkungen alternativer Polyfills zu akzeptieren, auf Firefox zu portieren und plattformübergreifende Unterstützung hinzuzufügen oder Ihr eigenes Polyfill zu entwickeln.

### API-Funktionsabdeckung

Die Unterschiede in den von den wichtigsten Browsern angebotenen API-Funktionen fallen in drei breite Kategorien:

1. **Fehlende Unterstützung für eine gesamte Funktion.**
   Zum Beispiel unterstützte Edge zum Zeitpunkt des Schreibens die {{WebExtAPIRef("browserSettings")}}-Funktion nicht.
2. **Variationen in der Unterstützung von Funktionen innerhalb einer Funktion.**
   Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens nicht die Benachrichtigungsfunktion-Methode {{WebExtAPIRef("notifications.onButtonClicked")}}, während Firefox der einzige Browser ist, der {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen, die browserspezifische Merkmale unterstützen.**
   Zum Beispiel war Container zum Zeitpunkt des Schreibens ein Firefox-spezifisches Merkmal, das von der {{WebExtAPIRef("contextualIdentities")}}-Funktion unterstützt wird.

Informationen über die Unterstützung der Erweiterungs-APIs zwischen den wichtigsten Browsern sowie Firefox für Android und Safari auf iOS finden sich auf der Seite [Browser-Support für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) im Mozilla Developer Network. Informationen zur Browser-Kompatibilität sind auch bei jeder Funktion und ihren Methoden, Typen und Ereignissen in den Referenzseiten der [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) des Mozilla Developer Network enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz, um API-Unterschiede anzugehen, ist, die Funktionen, die in Ihrer Erweiterung verwendet werden, auf solche zu beschränken, die über das gesamte Spektrum Ihrer Zielbrowser hinweg die gleiche Funktionalität bieten. In der Praxis ist dieser Ansatz für die meisten Erweiterungen wahrscheinlich zu einschränkend.

Stattdessen sollten Sie, wenn es Unterschiede zwischen den APIs gibt, entweder alternative Implementierungen oder Fallback-Funktionalität anbieten. (Denken Sie daran: Dies müssen Sie möglicherweise auch tun, um Unterschiede in der API-Unterstützung zwischen Versionen des _gleichen_ Browsers zu berücksichtigen.)

Die empfohlene Methode zur Implementierung alternativer oder Fallback-Funktionalität besteht darin, während der Laufzeit auf die Verfügbarkeit der Funktionen einer Funktion zu überprüfen. Der Vorteil einer Laufzeitprüfung besteht darin, dass Sie die Erweiterung nicht aktualisieren und neu verteilen müssen, um eine Funktion zu nutzen, wenn sie verfügbar wird.

Der folgende Code ermöglicht es Ihnen, eine Laufzeitprüfung durchzuführen:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Ausführungskontexte von Content-Skripten

Content-Skripte können auf das DOM der Seite zugreifen und es ändern, ebenso wie Seitenskripte. Sie können auch alle Änderungen sehen, die von Seitenskripten am DOM vorgenommen werden. Content-Skripte erhalten jedoch eine "saubere" Ansicht des DOM.

Firefox und Chrome verwenden grundlegend unterschiedliche Ansätze zur Handhabung dieses Verhaltens: In Firefox wird es als Xray Vision bezeichnet, während Chrome isolierte Welten verwendet. Weitere Details finden Sie im Abschnitt [Umgebung von Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) im Artikel über das Konzept von Content-Skripten.

Allerdings bietet Firefox einige APIs, die es Content-Skripten ermöglichen, auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden, und ihre JavaScript-Objekte für Seitenskripte zugänglich zu machen. Siehe [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für Details.

Es gibt auch Unterschiede zwischen den [Content Security Policy (CSP) für Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungsserviceworker

Im Rahmen der Implementierung von Manifest V3 hat Chrome Hintergrundseiten durch Erweiterungsserviceworker ersetzt. Firefox behält die Verwendung von Hintergrundseiten bei, während Safari sowohl Hintergrundseiten als auch Serviceworker unterstützt.

Weitere Informationen finden Sie im Abschnitt [Unterstützung von Browsern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite zum Manifest-Schlüssel `"background"`. Dies schließt ein Beispiel für die Implementierung eines plattformübergreifenden Skripts ein.

### Manifest-Schlüssel

Die Unterschiede in den von den wichtigsten Browsern unterstützten Schlüsseln in der Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) fallen grob in drei Kategorien:

1. **Erweiterungsinformationsattribute.**
   Zum Beispiel binden zum Zeitpunkt des Schreibens Firefox und Opera den Schlüssel [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) für Details über den Entwickler der Erweiterung ein.
2. **Erweiterungsmerkmale.**
   Zum Beispiel unterstützte Chrome zum Zeitpunkt des Schreibens den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) nicht.
3. **Optionalität von Schlüssel.**
   Zum Zeitpunkt des Schreibens sind im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` verpflichtende Schlüssel.

Informationen zur Browser-Kompatibilität sind bei jedem Schlüssel auf den Referenzseiten der [`manifest.json`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) im Mozilla Developer Network enthalten.

Da `manifest.json`-Dateien in der Regel wenig verändern—außer bei Versionsnummern, die zwischen den verschiedenen Browsern variieren können—ist das Erstellen und Bearbeiten einer statischen Version für jeden Browser in der Regel der einfachste Ansatz.

### Verpackung von Erweiterungen

Das Verpacken einer Erweiterung für die Verteilung über die Browser-Erweiterungs-Stores ist relativ unkompliziert. Firefox, Chrome, Edge und Opera verwenden alle ein einfaches Zip-Format, das die `manifest.json`-Datei am Wurzelverzeichnis des Zip-Pakets erfordert. Safari erfordert, dass Erweiterungen ähnlich wie Apps verpackt werden.

Für Details zur Verpackung beziehen Sie sich auf die Anleitungen auf den jeweiligen Entwicklerportalen der Erweiterung.

### Erweiterungsveröffentlichung

Jeder der wichtigsten Browser betreibt eigene Browser-Erweiterungs-Stores. Jeder Store überprüft Ihre Erweiterung auch, um auf Sicherheitsanfälligkeiten zu prüfen.

Folglich müssen Sie das Hinzufügen und Aktualisieren Ihrer Erweiterung für jeden Store separat angehen. In einigen Fällen können Sie Ihre Erweiterung mit einem Dienstprogramm hochladen.

Diese Tabelle fasst den Ansatz und die Merkmale jedes Stores zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Dienstprogramm</th>
      <th>Vorveröffentlichungsprüfungsprozess</th>
      <th>Zwei-Faktor-Authentifizierung für Konten</th>
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
        <p>Automatisch, wenige Sekunden.</p>
        <p>
          Eine manuelle Überprüfung der Erweiterung erfolgt nach der Veröffentlichung, was zur Suspendierung der Erweiterung führen kann, wenn Probleme gefunden werden, die behoben werden müssen.
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
      <td><p>Ja, laut Apple, im Durchschnitt 50% der Apps werden in 24 Stunden und über 90% in 48 Stunden geprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsnummerierung

Die Firefox-, Chrome- und Edge-Stores erfordern, dass jede hochgeladene Version eine andere Versionsnummer hat. Das bedeutet, dass Sie nicht zu einer früheren Versionsnummer zurückkehren können, wenn Sie auf Probleme in einer Veröffentlichung stoßen.

## Fazit

Beim Herangehen an die plattformübergreifende Entwicklung von Erweiterungen können die Unterschiede zwischen den API-Implementierungen durch das Anvisieren von Firefox und die Verwendung des [WebExtension-Browser-API-Polyfills](https://github.com/mozilla/webextension-polyfill/) adressiert werden.

Der Großteil Ihrer plattformübergreifenden Arbeit wird sich voraussichtlich darauf konzentrieren, Unterschiede zwischen den von den wichtigsten Browsern unterstützten API-Funktionen zu behandeln. Möglicherweise müssen Sie auch die Unterschiede zwischen den Implementierungen von Content-Skripten und Hintergrundskripten berücksichtigen. Das Erstellen Ihrer `manifest.json`-Dateien sollte relativ unkompliziert sein und etwas, das Sie manuell tun können. Sie müssen dann die Variationen in den Prozessen berücksichtigen, um sie an jeden Erweiterungsstore zu übermitteln.

Indem Sie den Ratschlägen in diesem Artikel folgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die in allen vier wichtigsten Browsern gut funktioniert, wodurch Sie Ihre Erweiterungsfunktionen mehr Menschen zugänglich machen können.
