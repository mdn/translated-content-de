---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können verschiedene Technologien nutzen, um Daten im Browser des Nutzers zu speichern (d.h. auf der lokalen Festplatte des Geräts, das der Nutzer zur Anzeige der Website verwendet).

Die Menge an Daten, die Browser Websites erlauben zu speichern, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dieses Limit erreicht wird, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die verwendet werden können, um Daten zu speichern, die Quoten, die Browser verwendet haben, um Websites daran zu hindern, zu viele Daten zu speichern, sowie die Mechanismen, die sie zum Löschen von Daten verwenden, wenn dies erforderlich ist.

## Wie trennen Browser Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Orten, auch als Buckets bezeichnet, um das Risiko zu verringern, dass Nutzer über das Web hinweg verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _pro Ursprung_.

Der Begriff _{{Glossary("origin", "Ursprung")}}_ ist daher wichtig, um diesen Artikel zu verstehen. Ein Ursprung wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Beispielsweise gehören `https://example.com` und `https://example.com/app/index.html` zum selben Ursprung, da sie dasselbe Schema (`https`), denselben Hostnamen (`example.com`) und denselben Standardport verwenden.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für einen gesamten Ursprung, selbst wenn dieser Ursprung verwendet wird, um mehrere Websites zu betreiben, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die von einem Ursprung gespeicherten Daten in verschiedenen Partitionen weiter zu trennen, beispielsweise in Fällen, in denen ein Ursprung innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren verschiedenen Drittanbieter-Ursprüngen geladen wird. Der Einfachheit halber wird in diesem Artikel jedoch angenommen, dass Daten immer pro Ursprung gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien verwenden, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Guides/Cookies)                                                      | Ein HTTP-Cookie ist ein kleines Datenstück, das der Webserver und der Browser einander senden, um Statusinformationen über die Seitennavigation hinweg zu speichern.                                                                         |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API bietet Mechanismen für Webseiten, um nur-String-Schlüssel/Wert-Paare zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API zum Speichern großer Datenstrukturen im Browser und deren Indizierung für leistungsstarke Suchvorgänge.                                                                                                           |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen persistenten Speichermechanismus für Objekte von HTTP-Anforderungs- und Antwortpaaren, der dazu verwendet wird, Webseiten schneller zu laden.                                                                     |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das dem Ursprung der Seite privat ist und zum Lesen und Schreiben von Verzeichnissen und Dateien verwendet werden kann.                                                                                         |

Beachten Sie, dass zusätzlich zu den oben genannten, Browser auch andere Arten von Daten für einen Ursprung im Browser speichern, wie das Caching von [WebAssembly](/de/docs/WebAssembly)-Code.

## Verbleiben im Browser gespeicherte Daten?

Daten für einen Ursprung können im Browser auf zwei Arten gespeichert werden: _persistent_ und _Best-Effort_:

- Best-Effort: Dies ist die Standardmethode, mit der Daten gespeichert werden. Best-Effort-Daten bleiben bestehen, solange der Ursprung unter seiner Quote liegt, das Gerät genügend Speicherplatz hat und der Nutzer nicht über die Einstellungen des Browsers entscheidet, die Daten zu löschen.
- Persistent: Ein Ursprung kann sich dafür entscheiden, seine Daten auf eine beständige Weise zu speichern. Daten, die auf diese Weise gespeichert werden, werden nur entfernt oder gelöscht, wenn der Nutzer dies wünscht, indem er die Einstellungen seines Browsers verwendet. Weitere Informationen finden Sie unter [Wann werden Daten gelöscht?](#when_is_data_evicted).

Die im Browser von einem Ursprung gespeicherten Daten sind standardmäßig Best-Effort. Wenn Webtechnologien wie IndexedDB oder Cache verwendet werden, werden die Daten transparent gespeichert, ohne den Nutzer um Erlaubnis zu fragen. In ähnlicher Weise erfolgt das Löschen von Best-Effort-Daten durch den Browser, ohne den Nutzer dabei zu unterbrechen.

Wenn Entwickler aus irgendeinem Grund einen persistenten Speicher benötigen (z.B. wenn sie eine Web-App erstellen, die auf kritischen Daten beruht, die nirgendwo anders gespeichert sind), können sie dies durch die Verwendung der Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) tun.

In Firefox wird der Nutzer durch ein UI-Popup darüber informiert, wenn eine Website sich entscheidet, persistenten Speicher zu verwenden, dass ihre Erlaubnis angefordert wird.

Safari und die meisten auf Chromium basierenden Browser wie Chrome oder Edge genehmigen oder verweigern die Anfrage automatisch basierend auf der Historie der Interaktionen des Nutzers mit der Seite, ohne den Nutzer damit zu belästigen.

Hinweis: [Forschungen des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigen, dass Daten sehr selten durch den Browser gelöscht werden. Wenn ein Nutzer regelmäßig eine Website besucht, besteht nur eine geringe Wahrscheinlichkeit, dass die dort gespeicherten Daten, selbst im Best-Effort-Modus, vom Browser entfernt werden.

### Privater Modus

Beachten Sie, dass Browser im privaten Modus (auch _Inkognito_ in Chrome und _InPrivate_ in Edge genannt) verschiedene Quoten anwenden können und gespeicherte Daten in der Regel gelöscht werden, wenn der private Modus beendet wird.

## Wie viele Daten können gespeichert werden?

### Cookies

Verschiedene Browser haben unterschiedliche Regeln darüber, wie viele Cookies pro Ursprung erlaubt sind und wie viel Platz diese Cookies auf der Festplatte beanspruchen können. Obwohl Cookies nützlich sind, um einige kleine geteilte Zustände zwischen dem Browser und dem Webserver über die Seitennavigation hinweg zu bewahren, wird davon abgeraten, Cookies zur Speicherung von Daten im Browser zu verwenden. Cookies werden mit jeder HTTP-Anfrage gesendet, sodass die Speicherung von Daten in Cookies, die mit einer anderen Webtechnologie gespeichert werden könnten, die Größe der Anfragen unnötig erhöht.

Da Cookies nicht zur Speicherung von Daten im Browser verwendet werden sollten, werden die Browser-Limits für Cookiespeicher hier nicht behandelt.

### Web Storage

Web Storage, das über die [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) Eigenschaften des [`window`](/de/docs/Web/API/Window) Objekts zugänglich ist, ist auf maximal 10 MiB Daten in allen Browsern begrenzt.

Browser können bis zu 5 MiB lokalen Speicher und 5 MiB Sitzungsspeicher pro Ursprung speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine Ausnahme `QuotaExceededError`, die mit einem {{jsxref("Statements/try...catch","try...catch")}} Block behandelt werden sollte.

### Andere Webtechnologien

Die mithilfe anderer Webtechnologien gespeicherten Daten, wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert), werden von einem speichermanagementsystem verwaltet, das für jeden Browser spezifisch ist.

Dieses System regelt alle Daten, die ein Ursprung mit diesen APIs speichert.

Jeder Browser bestimmt mit einem von ihm gewählten Mechanismus die maximale Menge an Speicher, die ein gegebener Ursprung verwenden kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den ein Ursprung im Best-Effort-Modus nutzen kann, der kleinere der folgenden Werte:

- 10% der gesamten Festplattengröße, auf der das Profil des Nutzers gespeichert wird.
- Oder 10 GiB, was die _Gruppenbeschränkung_ ist, die Firefox auf alle Ursprünge, die Teil derselben {{Glossary("eTLD", "eTLD+1 Domain")}} sind, anwendet.

Ursprünge, für die ein persistenter Speicher gewährt wurde, können bis zu 50% der gesamten Festplattengröße speichern, gedeckelt bei 8 TiB, und unterliegen nicht der eTLD+1 Gruppenbeschränkung.

Zum Beispiel, wenn das Gerät eine 500 GiB Festplatte hat, erlaubt Firefox einem Ursprung, bis zu folgendes zu speichern:

- Im Best-Effort-Modus: 10 GiB Daten, was das eTLD+1 Gruppenlimit ist.
- Im Persistent-Modus: 250 GiB, was 50% der gesamten Festplattengröße entspricht.

Beachten Sie, dass es möglicherweise nicht tatsächlich möglich ist, dass der Ursprung seine Quote erreicht, da sie auf der **gesamten** Festplattengröße und nicht auf dem derzeit verfügbaren Speicherplatz berechnet wird. Dies wird aus Sicherheitsgründen getan, um {{Glossary("fingerprinting", "Fingerprinting")}} zu vermeiden.

#### Chrome und auf Chromium basierende Browser

In Browsern, die auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann ein Ursprung bis zu 60% der gesamten Festplattengröße sowohl im persistenten als auch im Best-Effort-Modus speichern.

Zum Beispiel, wenn das Gerät eine 1 TiB Festplatte hat, erlaubt der Browser einem Ursprung, bis zu 600 GiB zu nutzen.

Ähnlich wie bei Firefox, weil diese Quote basierend auf der gesamten Festplattengröße berechnet wird, um Fingerprinting zu vermeiden, könnte es sein, dass ein Ursprung seine Quote nicht tatsächlich erreichen kann.

#### Safari

WebKit setzt unterschiedliche Quoten für _Browser-Apps_ und andere Anwendungen, die Webinhalte einbetten können (z.B. Apps, die WKWebView verwenden), durch. Eine Browser-App ist eine Anwendung, die als Standardbrowser des Systems festgelegt werden kann. Dies schließt Safari und einige andere auf WebKit basierende Drittanbieterbrowser ein.

Ab macOS 14 und iOS 17:

- Für auf WebKit basierende Browser-Apps kann jeder Ursprung bis zu etwa 60% der gesamten Festplatte speichern.
- Für andere auf WebKit basierende Apps, die Webinhalte einbetten, kann jeder Ursprung bis zu etwa 15% der gesamten Festplatte speichern. Falls der Nutzer die Seite als Web-App auf dem Startbildschirm oder im Dock gespeichert hat, verwendet sie dieselbe Ursprungsquote wie die Browser-App (ca. 60% des Speicherplatzes).

Zum Beispiel wird einem macOS-Gerät mit einer 1 TiB Festplatte innerhalb des Safari-Webbrowsers erlaubt, einen Ursprung auf etwa 600 GiB zu begrenzen. Ursprünge, die in einer eingebetteten WebView einer anderen App ausgeführt werden, haben ein geringeres Limit von etwa 150 GiB.

Aus Datenschutzgründen haben {{Glossary("Same-origin_policy", "cross-origin")}} Frames ein separates Limit, das etwa 1/10 ihrer Eltern-Kontingente beträgt.

Wie andere Browser auch, können die genauen durchgesetzten Grenzen der Quote variieren, um Fingerprinting zu vermeiden.

WebKit setzt auch ein allgemeines Limit durch, dass gespeicherte Daten über alle Ursprünge hinweg nicht mehr als 80% des Speicherplatzes für Browser-Apps und 20% des Speicherplatzes für Nicht-Browser-Apps, die Webinhalte anzeigen, wachsen dürfen.

Weitere Informationen zu WebKits Speicherpolitik finden Sie im [WebKit-Blog](https://webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari erhält ein Ursprung ein anfängliches Quote von 1 GiB. Sobald der Ursprung dieses Limit erreicht, fragt Safari den Nutzer um Erlaubnis, um dem Ursprung zu gestatten, mehr Daten zu speichern. Dies geschieht unabhängig davon, ob der Ursprung Daten im Best-Effort-Modus oder im Persistent-Modus speichert.

> [!NOTE]
> Unter iOS/iPadOS mussten Drittanbieterbrowser historisch gesehen WebKit verwenden, sodass diese WebKit-Quoten sowohl für sie als auch für Safari gelten. In der EU (iOS 17.4+) erlaubt Apple alternative Browser-Engines; in solchen Fällen gelten die eigenen Richtlinien dieser Browser-Engines anstelle von WebKits.
>
> Auf macOS verwenden nicht-auf-WebKit basierende Browser (z.B. Chromium/Firefox) ihre eigenen Speicherpolitiken.
>
> Weitere Informationen zu den EU-spezifischen Informationen finden Sie auf der [Apple Developer Support Seite](https://developer.apple.com/support/alternative-browser-engines).

## Wie kann der verfügbare Speicherplatz überprüft werden?

Webentwickler können mit der Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API) überprüfen, wie viel Speicherplatz für ihren Ursprung verfügbar ist und wie viel vom Ursprung genutzt wird.

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert zurückgibt, nicht den tatsächlichen Wert. Einige der Ressourcen, die von einem Ursprung gespeichert werden, können von anderen Ursprüngen kommen, und Browser polstern die Größe der Daten von Cross-Origenen freiwillig auf, wenn sie den gesamten Nutzungswert melden.

## Was passiert, wenn ein Ursprung sein Kontingent erreicht?

Wenn versucht wird, mehr als das Kontingent eines Ursprungs unter Verwendung von IndexedDB, Cache oder OPFS zu speichern, schlägt dies mit einer Ausnahme `QuotaExceededError` fehl.

Webentwickler sollten JavaScript, das in den Browserspeicher schreibt, in {{jsxref("Statements/try...catch","try...catch")}} Blöcke einschließen. Es wird auch empfohlen, Speicherplatz freizugeben, indem Daten gelöscht werden, bevor neue Daten gespeichert werden.

## Wann werden Daten gelöscht?

Das Löschen von Daten ist der Prozess, bei dem ein Browser die gespeicherten Daten eines Ursprungs löscht.

Das Löschen von Daten kann in mehreren Fällen auftreten:

- Wenn das Gerät wenig Speicherplatz hat, auch bekannt als _Speicherdruck_.
- Wenn alle im Browser gespeicherten Daten (über alle Ursprünge hinweg) die Menge an Speicherplatz überschreiten, die der Browser auf dem Gerät verwenden möchte.
- Proaktiv, für Ursprünge, die nicht regelmäßig verwendet werden, was nur in Safari der Fall ist.

### Speicherdrucklöschung

Wenn ein Gerät wenig Speicherplatz hat, auch bekannt als _Speicherdruck_, kann es vorkommen, dass der Browser weniger verfügbaren Speicherplatz hat als er benötigt, um alle gespeicherten Daten des Ursprungs zu speichern.

Browser verwenden eine Least Recently Used (LRU)-Richtlinie, um mit diesem Szenario umzugehen. Die Daten des am wenigsten kürzlich verwendeten Ursprungs werden gelöscht. Wenn der Speicherdruck anhält, wechselt der Browser zum zweitwenigsten kürzlich verwendeten Ursprung usw., bis das Problem gelöst ist.

Dieser Löschmechanismus betrifft nur Ursprünge, die nicht persistent sind und überspringt Ursprünge, denen durch die Verwendung von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) Datenbeständigkeit gewährt wurde.

### Löschung bei Überschreitung des maximal erlaubten Browserspeicherplatzes

Einige Browser definieren einen maximalen Speicherplatz, den sie auf der Festplatte des Geräts verwenden können. Zum Beispiel verwendet Chrome derzeit maximal 80% der gesamten Festplattengröße.

Diese maximale Speicherplatzgröße bedeutet, dass es zu einem Punkt kommen kann, an dem die von allen kombinierten Ursprüngen gespeicherten Daten die maximale Größe überschreiten, ohne dass ein einzelner Ursprung über seinem individuellen Kontingent liegt.

Wenn dies geschieht, beginnt der Browser mit der Löschung von Best-Effort-Ursprüngen, wie unter [Speicherdrucklöschung](#speicherdrucklöschung) beschrieben.

### Proaktive Löschung

Safari löscht Daten proaktiv, wenn das Verhindern von Websitenübergreifendem Tracking aktiviert ist. Wenn ein Ursprung innerhalb der letzten sieben Tage der Nutzung des Browsers keine Nutzerinteraktion, wie Klicks oder Tippen, hatte, werden seine aus Skripten erstellten Daten gelöscht. Vom Server gesetzte Cookies sind von dieser Löschung ausgenommen.

## Wie werden Daten gelöscht?

Wenn die Daten eines Ursprungs vom Browser gelöscht werden, werden alle seine Daten, nicht Teile davon, gleichzeitig gelöscht. Wenn der Ursprung z.B. Daten mithilfe von IndexedDB und der Cache-API gespeichert hat, werden beide Datentypen gelöscht.

Das Löschen nur einiger der gespeicherten Daten eines Ursprungs könnte zu Konsistenzproblemen führen.

## Siehe auch

- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome-Webspeicher- und Quotenkonzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
