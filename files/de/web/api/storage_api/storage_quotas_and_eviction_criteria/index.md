---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: 2b3cb93acd05af163cba698b54b13c7cffffdf41
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können eine Reihe von Technologien verwenden, um Daten im Browser des Benutzers zu speichern (d.h. auf der lokalen Festplatte des Geräts, das der Benutzer verwendet, um die Website zu betrachten).

Die Menge an Daten, die Browser Websites erlauben zu speichern, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dieses Limit erreicht wird, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Web-Technologien, die verwendet werden können, um Daten zu speichern, die Quoten, die Browser festlegen, um Websites daran zu hindern, zu viele Daten zu speichern, und die Mechanismen, die sie zum Löschen von Daten verwenden, wenn nötig.

## Wie trennen Browser Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Orten, auch Buckets genannt, um das Risiko zu verringern, dass Nutzer im Web verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _pro Ursprung_.

Der Begriff _{{Glossary("origin", "Ursprung")}}_ ist daher wichtig, um diesen Artikel zu verstehen. Ein Ursprung wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zum selben Ursprung, weil sie dasselbe Schema (`https`), denselben Hostnamen (`example.com`) und den Standardport haben.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für einen gesamten Ursprung, selbst wenn dieser Ursprung verwendet wird, um mehrere Websites zu betreiben, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die von einem Ursprung gespeicherten Daten in verschiedene Partitionen weiter zu trennen, beispielsweise in Fällen, in denen ein Ursprung innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren verschiedenen Drittanbieterursprüngen geladen wird. Aus Einfachheitsgründen geht dieser Artikel jedoch davon aus, dass Daten immer pro Ursprung gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien verwenden, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Guides/Cookies)                                                      | Ein HTTP-Cookie ist ein kleines Datenstück, das der Webserver und der Browser senden, um zustandsbezogene Informationen über die Seitennavigation hinweg zu speichern.                                                                                          |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API bietet Mechanismen für Webseiten, um nur Zeichenfolgen enthaltende Schlüssel/Wert-Paare zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API, um große Datenstrukturen im Browser zu speichern und sie für eine leistungsstarke Suche zu indexieren.                                                                                                                              |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen persistenten Speichermecanismus für HTTP-Anfrage- und Antwort-Objektpaare, die verwendet werden, um Webseiten schneller zu laden.                                                                                                    |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das für den Ursprung der Seite privat ist und zum Lesen und Schreiben von Verzeichnissen und Dateien verwendet werden kann.                                                                                                        |

Beachten Sie, dass zusätzlich zu den oben genannten, Browser andere Datentypen für einen Ursprung im Browser speichern werden, wie z.B. das Caching von [WebAssembly](/de/docs/WebAssembly)-Code.

## Bleiben im Browser gespeicherte Daten bestehen?

Daten für einen Ursprung können auf zwei Arten in einem Browser gespeichert werden, _persistent_ und _best-effort_:

- Best-effort: Dies ist die Standardmethode, um Daten zu speichern. Best-effort-Daten bleiben bestehen, solange der Ursprung unter seinem Quota liegt, das Gerät genug Speicherplatz hat und der Benutzer nicht in den Browsereinstellungen entscheidet, die Daten zu löschen.
- Persistent: Ein Ursprung kann sich entscheiden, seine Daten auf eine persistente Weise zu speichern. Daten, die auf diese Weise gespeichert werden, werden nur dann gelöscht, wenn der Benutzer dies entscheidet, indem er die Browsereinstellungen verwendet. Um mehr zu erfahren, siehe [Wann werden Daten gelöscht](#when_is_data_evicted).

Die Daten, die durch einen Ursprung im Browser gespeichert werden, sind standardmäßig best-effort. Bei der Verwendung von Web-Technologien wie IndexedDB oder Cache werden die Daten transparent gespeichert, ohne die Genehmigung des Benutzers einzuholen. Ebenso, wenn der Browser best-effort-Daten löschen muss, tut er dies, ohne den Benutzer zu unterbrechen.

Wenn Entwickler aus irgendeinem Grund persistente Speicherung benötigen (z.B. beim Erstellen einer Web-App, die auf kritische Daten angewiesen ist, die nirgendwo anders gespeichert werden), können sie dies tun, indem sie die Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) verwenden.

In Firefox wird der Benutzer mit einem UI-Popup benachrichtigt, wenn eine Website sich entscheidet, persistente Speicherung zu verwenden, und seine Erlaubnis angefordert wird.

Safari und die meisten auf Chromium basierenden Browser wie Chrome oder Edge genehmigen oder verweigern automatisch die Anfrage basierend auf der bisherigen Interaktion des Benutzers mit der Website und zeigen dem Benutzer keine Eingabeaufforderungen an.

Beachten Sie, dass [Forschung des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigt, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Benutzer regelmäßig eine Website besucht, besteht nur eine geringe Chance, dass deren gespeicherte Daten, selbst im Best-Effort-Modus, vom Browser gelöscht werden.

### Privates Browsen

Beachten Sie, dass im privaten Browsing-Modus (auch _Inkognito_ in Chrome und _InPrivate_ in Edge genannt) Browser möglicherweise andere Quoten anwenden und gespeicherte Daten normalerweise gelöscht werden, wenn der private Browsing-Modus endet.

## Wie viele Daten können gespeichert werden?

### Cookies

Unterschiedliche Browser haben unterschiedliche Regeln, wie viele Cookies pro Ursprung erlaubt sind und wie viel Platz diese Cookies auf der Festplatte beanspruchen können. Während Cookies nützlich sind, um einige kleine gemeinsam genutzte Zustände zwischen dem Browser und dem Web-Server über die Seitennavigation hinweg zu bewahren, wird die Verwendung von Cookies zur Speicherung von Daten im Browser nicht empfohlen. Cookies werden mit jeder HTTP-Anfrage gesendet, daher erhöht die Speicherung von Daten in Cookies, die durch eine andere Web-Technologie gespeichert werden könnten, unnötig die Größe von Anfragen.

Da Cookies nicht zur Speicherung von Daten im Browser verwendet werden sollten, werden hier keine Cookie-Speicherlimits der Browser behandelt.

### Web Storage

Web Storage, das über die [`localStorage`](/de/docs/Web/API/Window/localStorage)- und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)-Eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts zugänglich ist, ist in allen Browsern auf maximal 10 MiB Daten begrenzt.

Browser können bis zu 5 MiB lokalen Speicher und 5 MiB Sitzungsspeicher pro Ursprung speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError`-Ausnahme, die durch die Verwendung eines {{jsxref("Statements/try...catch","try...catch")}}-Blocks behandelt werden sollte.

### Andere Web-Technologien

Die Daten, die durch die Verwendung anderer Web-Technologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert), gespeichert werden, werden von einem speicherverwaltenden System kontrolliert, das spezifisch für jeden Browser ist.

Dieses System reguliert all die Daten, die ein Ursprung mit diesen APIs speichert.

Jeder Browser bestimmt mit einem beliebigen Mechanismus, den er wählt, die maximale Menge an Speicherplatz, den ein bestimmter Ursprung verwenden kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den ein Ursprung im Best-Effort-Modus verwenden kann, das jeweils kleinere von:

- 10 % der gesamten Festplattengröße, auf der das Profil des Benutzers gespeichert ist.
- Oder 10 GiB, was das _Gruppenlimit_ ist, das Firefox auf alle Ursprünge anwendet, die Teil derselben {{Glossary("eTLD", "eTLD+1-Domäne")}} sind.

Ursprünge, für die eine persistente Speicherung gewährt wurde, können bis zu 50 % der gesamten Festplattengröße speichern, begrenzt auf 8 TiB, und unterliegen nicht dem eTLD+1-Gruppenlimit.

Zum Beispiel, wenn das Gerät eine 500 GiB große Festplatte hat, erlaubt Firefox einem Ursprung bis zu:

- Im Best-Effort-Modus: 10 GiB Daten, was das eTLD+1-Gruppenlimit ist.
- Im Persistent-Modus: 250 GiB, was 50 % der gesamten Festplattengröße entspricht.

Beachten Sie, dass es möglicherweise nicht tatsächlich möglich ist, dass der Ursprung seine Quote erreicht, da sie basierend auf der **gesamten** Festplattengröße berechnet wird, nicht auf dem aktuell verfügbaren Speicherplatz. Dies wird aus Sicherheitsgründen gemacht, um {{Glossary("fingerprinting", "Fingerprinting")}} zu vermeiden.

#### Chrome und auf Chromium basierende Browser

In Browsern, die auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann ein Ursprung bis zu 60 % der gesamten Festplattengröße sowohl im persistenten als auch im Best-Effort-Modus speichern.

Zum Beispiel wird ein Browser einem Ursprung bei einem Gerät mit einer 1 TiB Festplatte erlauben, bis zu 600 GiB zu verwenden.

Wie bei Firefox könnte es aufgrund der Berechnung dieser Quote basierend auf der gesamten Festplattengröße zur Vermeidung von Fingerprinting sein, dass ein Ursprung seine Quote tatsächlich nicht erreichen kann.

#### Safari

Webkit setzt unterschiedliche Quoten für _Browser-Apps_ und für andere Anwendungen, die Webinhalte einbetten können (zum Beispiel Apps, die WKWebView verwenden). Eine Browser-App ist eine Anwendung, die als Standardsystembrowser festgelegt werden kann. Dazu gehören Safari und einige andere WebKit-basierte Drittanbieter-Browser.

Ab macOS 14 und iOS 17:

- Für Webkit-basierte Browser-Apps kann jeder Ursprung bis zu etwa 60 % der gesamten Festplattengröße speichern.
- Für andere Webkit-basierte Apps, die Webinhalte einbetten, kann jeder Ursprung bis zu etwa 15 % der gesamten Festplattengröße speichern. Wenn der Benutzer die Website als Web-App auf dem Home-Bildschirm oder Dock gespeichert hat, verwendet sie dasselbe Ursprung-Quota wie die Browser-App (etwa 60 % des Speicherplatzes).

Zum Beispiel wird ein macOS-Gerät mit einer 1 TiB Festplatte jeden Ursprung im Safari-Webbrowser auf rund 600 GiB beschränken. Ursprünge, die in der eingebetteten WebView einer anderen App laufen, werden auf rund 150 GiB beschränkt.

Aus Datenschutzgründen haben {{Glossary("Same-origin_policy", "cross-origin")}}-Frames ein separates Quota, das etwa 1/10 ihrer Eltern ausmacht.

Wie andere Browser können die genauen Begrenzungen, die durch die Speicherquote durchgesetzt werden, variieren, um Fingerprinting zu vermeiden.

WebKit erzwingt auch ein Gesamtlagerquote, dass gespeicherte Daten über alle Ursprünge nicht mehr als 80 % der Festplattengröße bei Browser-Apps und 20 % der Festplattengröße bei Nicht-Browser-Apps wachsen kann, die Webinhalte anzeigen.

Weitere Informationen zu den Speicherrichtlinien von WebKit finden Sie auf dem [WebKit-Blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari wird einem Ursprung eine anfängliche Quote von 1 GiB zugewiesen. Wenn der Ursprung dieses Limit erreicht, fragt Safari den Benutzer um Erlaubnis, mehr Daten speichern zu lassen. Dies geschieht, ob der Ursprung Daten im Best-Effort-Modus oder im Persistent-Modus speichert.

> [!NOTE]
> Auf iOS/iPadOS mussten Drittanbieter-Browser historisch gesehen WebKit verwenden, daher gelten diese WebKit-Quoten sowohl für sie als auch für Safari. In der EU (iOS 17.4+) erlaubt Apple alternative Browser-Engines; in solchen Fällen gelten die eigenen Engine-Richtlinien dieser Browser anstelle von WebKit's.
>
> Auf macOS verwenden Nicht-WebKit-Browser (z.B. Chromium/Firefox) ihre eigenen Speicher-Richtlinien.
>
> Weitere Informationen zur EU-spezifischen Information finden Sie auf der [Apple Developer Support Page](https://developer.apple.com/support/alternative-browser-engines).

## Wie überprüft man den verfügbaren Speicherplatz?

Webentwickler können mit der [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate)-Methode der [Storage API](/de/docs/Web/API/Storage_API) überprüfen, wie viel Speicherplatz für ihren Ursprung verfügbar ist und wie viel vom Ursprung verwendet wird.

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert zurückgibt, nicht den tatsächlichen Wert. Einige der Ressourcen, die von einem Ursprung gespeichert werden, können von anderen Ursprüngen stammen und Browser steigern absichtlich die Größe der cross-orign Daten, wenn sie den Gesamtverbrauchswert melden.

## Was passiert, wenn ein Ursprung sein Quota voll ausschöpft?

Der Versuch, mehr als ein Ursprung's Quota mit zum Beispiel IndexedDB, Cache oder OPFS zu speichern, schlägt mit einer `QuotaExceededError`-Ausnahme fehl.

Webentwickler sollten JavaScript, das in den Browser-Speicher schreibt, in {{jsxref("Statements/try...catch","try...catch")}}-Blöcke einbinden. Es wird auch empfohlen, Speicherplatz freizugeben, indem Daten gelöscht werden, bevor neue Daten gespeichert werden.

## Wann werden Daten gelöscht?

Datenlöschung ist der Prozess, bei dem ein Browser die gespeicherten Daten eines Ursprungs löscht.

Datenlöschung kann in mehreren Fällen auftreten:

- Wenn das Gerät wenig Speicherplatz hat, auch bekannt als _Storage Pressure_.
- Wenn alle im Browser gespeicherten Daten (über alle Ursprünge hinweg) die Gesamtmenge an Speicherplatz überschreiten, die der Browser auf dem Gerät verwenden möchte.
- Proaktiv, für Ursprünge, die nicht regelmäßig genutzt werden, was nur in Safari passiert.

### Storage Pressure Löschung

Wenn ein Gerät wenig Speicherplatz hat, auch bekannt als _Storage Pressure_, kann es zu einem Punkt kommen, an dem der Browser weniger verfügbaren Speicherplatz hat, als er benötigt, um alle gespeicherten Daten des Ursprungs zu speichern.

Browser verwenden eine Least Recently Used (LRU)-Policy, um mit diesem Szenario umzugehen. Die Daten des am wenigsten kürzlich verwendeten Ursprungs werden gelöscht. Wenn der Druck weiterhin besteht, wechselt der Browser zum zweitwenigsten kürzlich verwendeten Ursprung, und so weiter, bis das Problem gelöst ist.

Dieser Löschmechanismus gilt nur für Ursprünge, die nicht persistent sind, und überspringt Ursprünge, denen Datenspeicherung mit Persistenz gewährt wurde, indem [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) verwendet wird.

### Überschreitung der maximalen Speichernutzung des Browsers

Einige Browser definieren einen maximalen Speicherplatz, den sie auf der Festplatte des Gerätes verwenden können. Zum Beispiel verwendet Chrome derzeit höchstens 80 % der gesamten Festplattengröße.

Diese maximale Speichergröße bedeutet, dass es zu einem Punkt kommen kann, an dem die von allen kombinierten Ursprüngen gespeicherten Daten die maximale Größe überschreiten, ohne dass ein einziger Ursprung über seinem individuellen Quota liegt.

Wenn dies passiert, beginnt der Browser mit der Löschung von Best-Effort-Ursprüngen, wie in [Storage Pressure Löschung](#storage_pressure_löschung) beschrieben.

### Proaktive Löschung

Safari löscht proaktiv Daten, wenn die Cross-Site-Tracking-Prävention eingeschaltet ist. Wenn ein Ursprung in den letzten sieben Tagen der Browserverwendung keine Benutzerinteraktion wie Klick oder Tipp hatte, werden seine durch Script erstellten Daten gelöscht. Vom Server gesetzte Cookies sind von dieser Löschung ausgenommen.

## Wie werden Daten gelöscht?

Wenn die Daten eines Ursprungs vom Browser gelöscht werden, werden alle seine Daten, nicht nur Teile davon, gleichzeitig gelöscht. Wenn der Ursprung Daten durch die Verwendung von IndexedDB und der Cache API gespeichert hatte, werden zum Beispiel beide Datentypen gelöscht.

Das nur teilweise Löschen der Daten eines Ursprungs könnte Konsistenzprobleme verursachen.

## Siehe auch

- [Storage for the web on web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistent storage on web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage and Quota Concepts](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
