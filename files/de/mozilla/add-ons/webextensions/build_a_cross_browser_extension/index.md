---
title: Erstellen Sie eine plattformübergreifende Browser-Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Einführung der Browser-Erweiterungen API hat eine einheitliche Landschaft für die Entwicklung von Browser-Erweiterungen geschaffen. Dennoch gibt es Unterschiede in den API-Implementierungen und im Abdeckungsumfang zwischen den Browsern, die die Erweiterungen API verwenden (die wichtigsten sind Chrome, Edge, Firefox, Opera und Safari).

Um die Reichweite Ihrer Browser-Erweiterung zu maximieren, sollten Sie diese mindestens für zwei Browser entwickeln, möglicherweise mehr. Dieser Artikel befasst sich mit den Hauptherausforderungen bei der Erstellung einer plattformübergreifenden Erweiterung und schlägt vor, wie diese Herausforderungen angegangen werden können.

> [!NOTE]
> Die Hauptbrowser haben Manifest V3 übernommen. Diese Manifest-Version bietet eine bessere Kompatibilität zwischen den Browser-Erweiterungsumgebungen, wie z. B. Versprechen zur Behandlung von asynchronen Ereignissen. Neben den Informationen in diesem Leitfaden sollten Sie die Migrationsleitfäden für Manifest V3 für [Firefox](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) und [Chrome](https://developer.chrome.com/docs/extensions/develop/migrate) konsultieren.

## Hürden beim plattformübergreifenden Erweiterungscoden

Bei der Bewältigung einer plattformübergreifenden Erweiterung müssen Sie die folgenden Bereiche berücksichtigen:

- [API-Namespace](#api-namespace)
- [API asynchrones Ereignishandling](#api_asynchrones_ereignishandling)
- [API-Funktionsabdeckung](#api-funktionsabdeckung)
- [Ausführungskontexte von Inhaltsskripten](#ausführungskontexte_von_inhaltsskripten)
- [Hintergrundseite versus Erweiterungsservice-Arbeiter (in Manifest V3)](#hintergrundseite_und_erweiterungsservice-arbeiter)
- [Manifest-Schlüssel](#manifest-schlüssel)
- [Erweiterungspaketierung](#erweiterungspaketierung)
- [Erweiterungsveröffentlichung](#erweiterungsveröffentlichung)

### API-Namespace

Es gibt zwei API-Namespaces, die von den Hauptbrowsern verwendet werden:

- `browser.*`, der vorgeschlagene Standard für die Erweiterungen API, der von Firefox und Safari verwendet wird.
- `chrome.*`, verwendet von Chrome, Opera und Edge.

Firefox unterstützt auch den `chrome.*` Namespace für APIs, die mit Chrome kompatibel sind, hauptsächlich um beim [Portieren](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) zu helfen. Es wird jedoch bevorzugt, den `browser.*` Namespace zu verwenden. Neben dem vorgeschlagenen Standard verwendet `browser.*` Versprechen—einen modernen und bequemen Mechanismus zur Behandlung von asynchronen Ereignissen.

Nur in den trivialsten Erweiterungen ist der Namespace wahrscheinlich das einzige plattformübergreifende Problem, das angegangen werden muss. Daher ist es selten, wenn überhaupt, hilfreich, dieses Problem allein anzugehen. Der beste Ansatz ist, dies mit dem asynchronen Ereignishandling anzugehen.

### API asynchrones Ereignishandling

Mit der Einführung von Manifest V3 haben alle Hauptbrowser den Standard übernommen, _Promises_ von asynchronen Methoden zurückzugeben. Firefox und Safari haben volle Unterstützung für Promises in allen asynchronen APIs. Ab Chrome 121 unterstützen alle asynchronen Erweiterungs-APIs Versprechen, sofern nicht anders dokumentiert. Die `devtools` API ist der einzige API-Namespace ohne Promise-Unterstützung ([Chromium-Fehler 1510416](https://crbug.com/1510416)).

In Manifest V2 unterstützen Firefox und Safari Promises für asynchrone Methoden. Gleichzeitig rufen Chrome-Methoden _Callbacks_ auf. Zur Kompatibilität unterstützen alle Hauptbrowser Callbacks über alle Manifest-Versionen hinweg. Weitere Informationen finden Sie unter [Callbacks und Promises](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#callbacks_and_promises).

Einige Handler von Erweiterungs API-Ereignissen sollten asynchron über eine `Promise` oder eine Callback-Funktion antworten. Zum Beispiel kann ein Handler des `runtime.onMessage` Ereignisses [eine asynchrone Antwort unter Verwendung eines `Promise`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise) oder unter Verwendung [eines Callbacks](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse) senden. Ein `Promise` als Rückgabewert von einem Ereignishandler wird in Firefox und Safari unterstützt, jedoch noch nicht in Chrome.

Firefox unterstützt auch Callbacks für die APIs, die den `chrome.*` Namespace unterstützen. Die Verwendung von Promises wird jedoch empfohlen. Promises vereinfachen das asynchrone Ereignishandling erheblich, besonders wenn Sie Ereignisse miteinander verbinden müssen. Dies bedeutet, dass eine Polyfill oder ähnliches verwendet wird, sodass Ihre Erweiterung den `browser.*` Namespace in Firefox und Safari und `chrome.*` in Chrome, Opera und Edge verwendet.

> [!NOTE]
> Wenn Sie mit den Unterschieden zwischen diesen beiden Methoden nicht vertraut sind, werfen Sie einen Blick auf [Asynchrones JavaScript kennenlernen: Callbacks, Promises und Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises).

#### Die WebExtension-Browser-API-Polyfill

Wie können Sie also die Vorteile von Promises einfach nutzen? Die Lösung ist, für Firefox mit Promises zu programmieren und die [WebExtension-Browser-API-Polyfill](https://github.com/mozilla/webextension-polyfill/) zu verwenden, um Chrome, Opera und Edge anzusprechen.

Dieses Polyfill behandelt den API-Namespace und das asynchrone Ereignishandling über Firefox, Chrome, Opera und Edge.

Um das Polyfill zu verwenden, installieren Sie es in Ihrer Entwicklungsumgebung mit npm oder laden Sie es direkt von [GitHub Releases](https://github.com/mozilla/webextension-polyfill/releases) herunter.

Dann verweisen Sie auf `browser-polyfill.js` in:

- `manifest.json`, um es für Hintergrund- und Inhaltsskripte verfügbar zu machen.
- HTML-Dokumente, wie `browserAction` Popups oder Tab-Seiten.
- Den `executeScript` Aufruf in dynamisch injizierten Inhaltsskripten, die durch `tabs.executeScript` geladen werden, wo es nicht mit einer `content_scripts` Deklaration in `manifest.json` geladen wurde.

Zum Beispiel macht dieser `manifest.json` Code das Polyfill für Hintergrundskripte verfügbar:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Ihr Ziel sollte sein, dass das Polyfill in Ihrer Erweiterung vor allen anderen Skripten ausgeführt wird, die den `browser.*` API-Namespace erwarten.

> [!NOTE]
> Für weitere Details und Informationen zur Verwendung des Polyfills mit einem Modul-Bundler siehe das [README des Projekts auf GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Es gibt andere Polyfill-Optionen. Zum Zeitpunkt des Schreibens bietet jedoch keine der anderen Optionen die Abdeckung der WebExtension-Browser-API-Polyfill. Wenn Sie Firefox nicht als Ihre erste Wahl anvisiert haben, können Sie die Einschränkungen alternativer Polyfills akzeptieren, nach Firefox portieren und plattformübergreifende Unterstützung hinzufügen oder Ihr eigenes Polyfill entwickeln.

### API-Funktionsabdeckung

Die Unterschiede in den von den Hauptbrowsern angebotenen API-Funktionen fallen in drei Hauptkategorien:

1. **Fehlende Unterstützung für eine gesamte Funktion.** Zum Beispiel unterstützte Edge zum Zeitpunkt des Schreibens die {{WebExtAPIRef("browserSettings")}} Funktion nicht.
2. **Variationen bei der Unterstützung von Funktionen innerhalb einer Funktion.** Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens die Benachrichtigungsfunktionsmethode {{WebExtAPIRef("notifications.onButtonClicked")}} nicht, während Firefox der einzige Browser ist, der {{WebExtAPIRef("notifications.onShown")}} unterstützt.
3. **Proprietäre Funktionen zur Unterstützung von browserspezifischen Features.** Zum Beispiel war zum Zeitpunkt des Schreibens Container ein spezifisches Firefox-Feature, das von der {{WebExtAPIRef("contextualIdentities")}} Funktion unterstützt wurde.

Details zur Unterstützung der Erweiterungs-APIs unter den Hauptbrowsern und Firefox für Android sowie Safari auf iOS finden Sie auf der Mozilla Developer Network Seite [Browser Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Informationen zur Browser-Kompatibilität sind auch mit jeder Funktion und ihren Methoden, Typen und Ereignissen in den Mozilla Developer Network [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) Referenzseiten enthalten.

#### Umgang mit API-Unterschieden

Ein einfacher Ansatz zur Bewältigung von API-Unterschieden besteht darin, die in Ihrer Erweiterung verwendeten Funktionen auf solche zu beschränken, die die gleiche Funktionalität in Ihrer Reihe von Zielbrowsern bieten. In der Praxis wird sich dieser Ansatz für die meisten Erweiterungen als zu restriktiv erweisen.

Stattdessen sollten Sie, wo es Unterschiede zwischen den APIs gibt, entweder alternative Implementierungen oder Fallback-Funktionalität anbieten. (Denken Sie daran: Sie müssen dies möglicherweise auch tun, um Unterschiede in der API-Unterstützung zwischen Versionen desselben Browsers zu berücksichtigen.)

Die empfohlene Methode zur Implementierung von Alternativ- oder Fallback-Funktionalität besteht darin, zur Laufzeit zu überprüfen, ob Funktionen verfügbar sind. Der Vorteil einer Laufzeitüberprüfung besteht darin, dass Sie die Erweiterung nicht aktualisieren und neu verteilen müssen, um die Vorteile einer Funktion zu nutzen, wenn sie verfügbar wird.

Der folgende Code ermöglicht Ihnen eine Laufzeitüberprüfung:

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Ausführungskontexte von Inhaltsskripten

Inhaltsskripte können auf das DOM der Seite zugreifen und es ändern, ebenso wie Seitenskripte. Sie können auch alle durch Seitenskripte vorgenommenen Änderungen am DOM sehen. Inhaltsskripte erhalten jedoch eine "saubere" Ansicht des DOM.

Firefox und Chrome verwenden grundsätzlich unterschiedliche Ansätze, um dieses Verhalten zu behandeln: In Firefox wird es Xray-Vision genannt, während Chrome isolierte Welten verwendet. Weitere Details finden Sie im Abschnitt [Umgebung von Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) des Konzepts zu Inhaltsskripten.

Allerdings bietet Firefox einige APIs, die es Inhaltsskripten ermöglichen, auf von Seitenskripten erstellte JavaScript-Objekte zuzugreifen und ihre eigenen JavaScript-Objekte an Seitenskripte weiterzugeben. Siehe [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) für Details.

Es gibt auch Unterschiede zwischen der [Content Security Policy (CSP) für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts).

### Hintergrundseite und Erweiterungsservice-Arbeiter

Als Teil der Implementierung von Manifest V3 hat Chrome die Hintergrundseiten durch Erweiterungsservice-Arbeiter ersetzt. Firefox behält die Verwendung von Hintergrundseiten bei, während Safari sowohl Hintergrundseiten als auch Service-Arbeiter unterstützt.

Weitere Informationen finden Sie im Abschnitt [Browser-Unterstützung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) auf der Seite zum `"background"` Manifest-Schlüssel. Dies umfasst ein Beispiel zur Implementierung eines plattformübergreifenden Skripts.

### Manifest-Schlüssel

Die Unterschiede in den vom Hauptbrowser unterstützten [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Dateischlüsseln fallen grundsätzlich in drei Kategorien:

1. **Attributinformationen zur Erweiterung.** Zum Beispiel enthalten Firefox und Opera zum Zeitpunkt des Schreibens den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) Schlüssel für Details über den Entwickler der Erweiterung.
2. **Erweiterungsfunktionen.** Zum Beispiel unterstützte Chrome zum Zeitpunkt des Schreibens den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) Schlüssel nicht.
3. **Optionalität der Schlüssel.** Zum Zeitpunkt des Schreibens sind im Allgemeinen nur `"manifest_version"`, `"version"` und `"name"` obligatorische Schlüssel.

Browser-Kompatibilitätsinformationen sind mit jedem Schlüssel auf den Mozilla Developer Network [`manifest.json` Schlüsselreferenzseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) enthalten.

Da sich `manifest.json` Dateien wenig ändern—mit Ausnahme der Versionsnummern, die sich zwischen den verschiedenen Browsern unterscheiden können—ist das Erstellen und Bearbeiten einer statischen Version für jeden Browser in der Regel der einfachste Ansatz.

### Erweiterungspaketierung

Das Paketieren einer Erweiterung zur Verteilung über die Browser-Erweiterungsstores ist relativ einfach. Firefox, Chrome, Edge und Opera verwenden alle ein einfaches ZIP-Format, das die `manifest.json` Datei im Stammverzeichnis des ZIP-Pakets erfordert. Safari benötigt, dass Erweiterungen ähnlich wie Apps verpackt werden.

Für Einzelheiten zur Paketierung konsultieren Sie die Anleitungen auf den jeweiligen Entwicklerportalen der Erweiterungen.

### Erweiterungsveröffentlichung

Jeder der großen Browser unterhält einen Store für Browser-Erweiterungen. Jeder Store überprüft auch Ihre Erweiterung auf Sicherheitslücken.

Daher müssen Sie das Hinzufügen und Aktualisieren Ihrer Erweiterung für jeden Store separat in Angriff nehmen. In einigen Fällen können Sie Ihre Erweiterung mit einem Dienstprogramm hochladen.

Diese Tabelle fasst den Ansatz und die Merkmale jedes Stores zusammen:

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registrierungsgebühr</th>
      <th>Upload-Dienstprogramm</th>
      <th>Vorveröffentlichungs-Überprüfungsprozess</th>
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
          Nach der Veröffentlichung findet eine manuelle Überprüfung der Erweiterung statt, die dazu führen kann, dass die Erweiterung gesperrt wird, wenn Probleme festgestellt werden, die behoben werden müssen.
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
      <td><p>Ja, laut Apple werden im Durchschnitt 50% der Apps innerhalb von 24 Stunden und über 90% innerhalb von 48 Stunden geprüft.</p></td>
      <td><p>Ja</p></td>
    </tr>
  </tbody>
</table>

### Weitere Überlegungen

#### Versionsnummerierung

Die Firefox-, Chrome- und Edge-Stores verlangen, dass jede hochgeladene Version eine andere Versionsnummer hat. Das bedeutet, dass Sie nicht zu einer früheren Versionsnummer zurückkehren können, wenn Sie auf Probleme in einer Veröffentlichung stoßen.

## Fazit

Wenn Sie sich der Entwicklung einer plattformübergreifenden Erweiterung nähern, können die Unterschiede zwischen den API-Implementierungen der Erweiterungen durch eine Zielausrichtung auf Firefox und die Verwendung der [WebExtension-Browser-API-Polyfill](https://github.com/mozilla/webextension-polyfill/) angegangen werden.

Der Großteil Ihrer plattformübergreifenden Arbeit wird wahrscheinlich darauf fokussiert sein, Unterschiede zwischen den von den Hauptbrowsern unterstützten API-Features zu behandeln. Möglicherweise müssen Sie auch Unterschiede zwischen den Implementierungen von Inhaltsskripten und Hintergrundskripten berücksichtigen. Die Erstellung Ihrer `manifest.json` Dateien sollte relativ einfach und etwas sein, das Sie manuell erledigen können. Anschließend müssen Sie die Unterschiede in den Prozessen für das Einreichen in jedem Erweiterungsstore berücksichtigen.

Wenn Sie den Ratschlägen in diesem Artikel folgen, sollten Sie in der Lage sein, eine Erweiterung zu erstellen, die in allen vier Hauptbrowsern gut funktioniert, sodass Sie Ihre Erweiterungsfunktionen mehr Menschen zugänglich machen können.
