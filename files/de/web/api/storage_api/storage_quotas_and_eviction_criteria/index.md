---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können eine Reihe von Technologien verwenden, um Daten im Browser des Nutzers zu speichern (d.h. auf der lokalen Festplatte des Geräts, das der Nutzer verwendet, um die Website zu betrachten).

Die Menge an Daten, die Browser Websites erlauben zu speichern, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dieses Limit erreicht wird, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die zum Speichern von Daten verwendet werden können, die Quoten, die Browser festgelegt haben, um Websites daran zu hindern, zu viele Daten zu speichern, und die Mechanismen, die sie zum Löschen von Daten verwenden, wenn dies erforderlich ist.

## Wie trennen Browser Daten von verschiedenen Websites?

Browser speichern Daten von Websites an verschiedenen Orten, die auch "Buckets" genannt werden, um das Risiko zu verringern, dass Nutzer über das Web hinweg verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _pro Ursprung_.

Der Begriff _{{Glossary("origin", "origin")}}_ ist daher wichtig, um diesen Artikel zu verstehen. Ein Ursprung wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zum selben Ursprung, weil sie dasselbe Schema (`https`), denselben Hostnamen (`example.com`) und den Standardport haben.

Die Quoten und Löschkriterien, die in diesem Artikel beschrieben werden, gelten für einen gesamten Ursprung, selbst wenn dieser Ursprung zum Betreiben mehrerer Websites verwendet wird, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die vom Ursprung gespeicherten Daten in unterschiedlichen Partitionen weiter zu trennen, beispielsweise in Fällen, in denen ein Ursprung innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren verschiedenen Dritt-Ursprüngen geladen wird. Aus Vereinfachungsgründen wird in diesem Artikel jedoch angenommen, dass Daten immer pro Ursprung gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien verwenden, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Cookies](/de/docs/Web/HTTP/Guides/Cookies)                                                      | Ein HTTP-Cookie ist ein kleines Datenstück, das der Webserver und der Browser einander senden, um zustandsbehaftete Informationen über Seitenaufrufe hinweg zu merken.                                                                     |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API bietet Mechanismen, um Webseiten String-only Schlüssel/Werte-Paare zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API zum Speichern großer Datenstrukturen im Browser und zum Indizieren dieser für leistungsstarke Suchanfragen.                                                                                                     |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen persistenten Speichermachanismus für HTTP-Anfrage- und Antwortobjektpaare, der verwendet wird, um Webseiten schneller zu laden.                                                                                 |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das auf den Ursprung der Seite beschränkt ist und zum Lesen und Schreiben von Verzeichnissen und Dateien verwendet werden kann.                                                                               |

Beachten Sie, dass Browser neben den oben genannten auch andere Datenarten für einen Ursprung im Browser speichern, wie etwa das Caching von [WebAssembly](/de/docs/WebAssembly)-Code.

## Bleiben im Browser gespeicherte Daten erhalten?

Daten für einen Ursprung können auf zwei Arten im Browser gespeichert werden, _persistent_ und _best-effort_:

- Best-effort: Dies ist die Standardmethode, Daten zu speichern. Best-effort-Daten bleiben bestehen, solange der Ursprung unter seiner Quote bleibt, das Gerät genügend Speicherplatz hat und der Nutzer sich nicht entscheidet, die Daten über die Einstellungen des Browsers zu löschen.
- Persistent: Ein Ursprung kann sich dafür entscheiden, seine Daten persistent zu speichern. Diese Daten werden nur gelöscht, wenn der Benutzer dies über die Einstellungen seines Browsers wählt. Weitere Informationen finden Sie unter [Wann werden Daten gelöscht](#when_is_data_evicted).

Die von einem Ursprung im Browser gespeicherten Daten sind standardmäßig best-effort. Bei der Verwendung von Webtechnologien wie IndexedDB oder Cache werden die Daten transparent gespeichert, ohne die Erlaubnis des Nutzers einzuholen. Ebenso, wenn der Browser best-effort-Daten löschen muss, geschieht dies ohne den Nutzer zu unterbrechen.

Wenn Entwickler aus irgendeinem Grund persistenten Speicher benötigen (z. B. beim Erstellen einer Web-App, die auf kritische Daten angewiesen ist, die nirgendwo sonst gespeichert sind), können sie dies tun, indem sie die Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) verwenden.

In Firefox wird der Nutzer benachrichtigt, wenn eine Website sich für persistenten Speicher entscheidet, indem ein UI-Popup angezeigt wird, das um Erlaubnis bittet.

Safari und die meisten auf Chromium basierenden Browser wie Chrome oder Edge genehmigen oder verweigern die Anfrage automatisch basierend auf dem Verlauf der Interaktion des Nutzers mit der Website und zeigen dem Nutzer keine Aufforderungen an.

Beachten Sie, dass [Forschung des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigt, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Nutzer regelmäßig eine Website besucht, besteht wenig Chance, dass die gespeicherten Daten, selbst im best-effort-Modus, vom Browser gelöscht werden.

### Privates Surfen

Beachten Sie, dass im Modus des privaten Surfens (auch im Chrome als _Incognito_ und im Edge als _InPrivate_ bezeichnet) Browser eventuell andere Quoten anwenden, und gespeicherte Daten in der Regel gelöscht werden, sobald der Modus des privaten Surfens endet.

## Wie viele Daten können gespeichert werden?

### Cookies

Verschiedene Browser haben unterschiedliche Regeln dazu, wie viele Cookies pro Ursprung erlaubt sind und wie viel Platz diese Cookies auf der Festplatte beanspruchen können. Während Cookies nützlich sind, um einige kleine gemeinsame Zustände zwischen dem Browser und dem Webserver über Seitenaufrufe hinweg zu bewahren, wird davon abgeraten, Cookies zur Datenspeicherung im Browser zu verwenden. Cookies werden mit jeder einzelnen HTTP-Anfrage gesendet, daher wird durch die Speicherung von Daten in Cookies, die auch mit einer anderen Webtechnologie gespeichert werden könnten, unnötigerweise die Größe der Anfragen erhöht.

Da Cookies nicht zur Datenspeicherung im Browser verwendet werden sollten, werden hier keine Cookie-Speicherlimits behandelt.

### Web Storage

Web Storage, auf den über die Eigenschaften [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) des [`window`](/de/docs/Web/API/Window)-Objekts zugegriffen werden kann, ist auf maximal 10 MiB Daten auf allen Browsern beschränkt.

Browser können bis zu 5 MiB für lokalen Speicher und 5 MiB für Sitzungsspeicher pro Ursprung speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError`-Ausnahme, die mit einem {{jsxref("Statements/try...catch","try...catch")}}-Block behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die mit anderen Webtechnologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert) gespeichert werden, werden von einem speicherverwaltungssystem geregelt, das spezifisch für jeden Browser ist.

Dieses System reguliert alle Daten, die ein Ursprung mit diesen APIs speichert.

Jeder Browser bestimmt über einen selbst gewählten Mechanismus die maximale Menge an Speicher, die ein gegebener Ursprung verwenden kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den ein Ursprung im Best-Effort-Modus nutzen kann, der jeweils kleinere der folgenden:

- 10% der gesamten Festplattengröße, auf der das Profil des Nutzers gespeichert ist.
- Oder 10 GiB, was das _Gruppenlimit_ ist, das Firefox für alle Ursprünge anwendet, die Teil derselben {{Glossary("eTLD", "eTLD+1 Domain")}} sind.

Ursprünge, für die dauerhafter Speicher gewährt wurde, können bis zu 50% der gesamten Festplattengröße speichern, begrenzt auf 8 TiB, und unterliegen nicht dem eTLD+1-Gruppenlimit.

Beispielsweise, wenn das Gerät über eine 500-GiB-Festplatte verfügt, erlaubt Firefox einem Ursprung, bis zu:

- Im Best-Effort-Modus: 10 GiB Daten zu speichern, was dem eTLD+1-Gruppenlimit entspricht.
- Im Persistenzmodus: 250 GiB, was 50% der gesamten Festplattengröße entspricht.

Beachten Sie, dass es tatsächlich nicht möglich sein kann, dass der Ursprung seine Quote erreicht, da sie basierend auf der **gesamten** Festplattengröße und nicht dem aktuell verfügbaren Speicherplatz berechnet wird. Dies wird aus Sicherheitsgründen getan, um {{Glossary("fingerprinting", "Fingerabdrücke")}} zu vermeiden.

#### Chrome und Chromium-basierte Browser

In Browsern, die auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann ein Ursprung bis zu 60% der gesamten Festplattengröße sowohl im Persistent- als auch im Best-Effort-Modus speichern.

Zum Beispiel, wenn das Gerät über eine 1-TiB-Festplatte verfügt, wird der Browser einem Ursprung erlauben, bis zu 600 GiB zu nutzen.

Wie bei Firefox kann ein Ursprung aufgrund der Berechnung der Quote basierend auf der gesamten Festplattengröße zur Vermeidung von Fingerabdrücken möglicherweise nicht wirklich seine Quote erreichen.

#### Safari

Webkit setzt unterschiedliche Quoten für _Browser-Apps_ und für andere Anwendungen, die Webinhalte einbetten können (zum Beispiel Apps, die WKWebView verwenden). Eine Browser-App ist eine Anwendung, die als Standardbrowser des Systems festgelegt werden kann. Dazu gehört Safari und einige andere WebKit-basierte Drittanbieter-Browser.

Ab macOS 14 und iOS 17:

- Für Webkit-basierte Browser-Apps kann jeder Ursprung bis zu etwa 60% der gesamten Festplattengröße speichern.
- Für andere Webkit-basierte Apps, die Webinhalte einbetten, kann jeder Ursprung bis zu etwa 15% der gesamten Festplattengröße speichern. Wenn der Nutzer die Seite als Web-App auf dem Home-Bildschirm oder dem Dock gespeichert hat, nutzt sie die gleiche Ursprungsquote wie die Browser-App (etwa 60% des Speicherplatzes).

Beispielsweise wird ein macOS-Gerät mit einer 1-TiB-Festplatte jedes Ursprungs innerhalb des Safari-Webbrowsers auf etwa 600 GiB beschränken. Ursprünge, die in einem eingebetteten WebView einer anderen App laufen, haben ein niedrigeres Limit von etwa 150 GiB.

Aus Datenschutzgründen haben {{Glossary("Same-origin_policy", "Cross-Origin")}}-Frames eine separate Quote, die ungefähr 1/10 der ihrer Eltern beträgt.

Wie andere Browser können die von der Quote durchgesetzten genauen Limits variieren, um Fingerabdrücke zu vermeiden.

WebKit setzt auch ein Gesamtlagerlimit durch, das gespeicherte Daten über alle Ursprünge hinaus nicht mehr als 80% der Festplattengröße für Browser-Apps und 20% der Festplattengröße für nicht-Browser-Apps, die Webinhalte anzeigen, wachsen können.

Weitere Informationen über WebKits Speicherpolitik finden Sie im [WebKit Blog](https://webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari wird einem Ursprung anfänglich eine Quote von 1 GiB gewährt. Sobald der Ursprung dieses Limit erreicht, fragt Safari den Benutzer um Erlaubnis, um dem Ursprung zu erlauben, mehr Daten zu speichern. Dies geschieht unabhängig davon, ob der Ursprung Daten im Best-Effort- oder im Persistenzmodus speichert.

> [!NOTE]
> Auf iOS/iPadOS mussten Drittanbieter-Browser historisch WebKit verwenden, daher gelten diese WebKit-Quoten sowohl für sie als auch für Safari. In der EU (iOS 17.4+) erlaubt Apple alternative Browser-Engines; in solchen Fällen gelten die eigenen Richtlinien dieser Browser-Engines anstelle der WebKits.
>
> Auf macOS verwenden nicht-WebKit-Browser (z.B. Chromium/Firefox) ihre eigenen Speicherpolitik.
>
> Weitere Informationen zu den EU-spezifischen Informationen finden Sie auf der [Apple Developer Support Page](https://developer.apple.com/support/alternative-browser-engines).

## Wie überprüft man den verfügbaren Speicherplatz?

Webentwickler können prüfen, wie viel Speicherplatz für ihren Ursprung verfügbar ist und wie viel davon bereits genutzt wird, mit der Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API).

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert und nicht den tatsächlichen Wert zurückgibt. Einige der Ressourcen, die von einem Ursprung gespeichert werden, können von anderen Ursprüngen stammen und Browser polstern absichtlich die Größe der Cross-Origin-Daten beim Melden des Gesamtnutzungswerts.

## Was passiert, wenn ein Ursprung seine Quote füllt?

Der Versuch, mehr als die Quote eines Ursprungs mit Technologien wie IndexedDB, Cache oder OPFS zu speichern, schlägt mit einer `QuotaExceededError`-Ausnahme fehl.

Webentwickler sollten JavaScript, das im Browser Speicher schreibt, innerhalb von {{jsxref("Statements/try...catch","try...catch")}}-Blöcke einbinden. Es wird auch empfohlen, Speicherplatz freizugeben, indem vor dem Speichern neuer Daten vorhandene Daten gelöscht werden.

## Wann werden Daten gelöscht?

Datenlöschung ist der Prozess, bei dem ein Browser die gespeicherten Daten eines Ursprungs löscht.

Datenlöschung kann in mehreren Fällen auftreten:

- Wenn das Gerät wenig Speicherplatz hat, auch bekannt als _Speicherdruck_.
- Wenn alle im Browser gespeicherten Daten (über alle Ursprünge hinweg) die Gesamtmenge des Speicherplatzes überschreiten, den der Browser auf dem Gerät zu nutzen bereit ist.
- Proaktiv, für Ursprünge, die nicht regelmäßig genutzt werden, was nur in Safari geschieht.

### Speicherdruck Löschung

Wenn ein Gerät wenig Speicherplatz hat, auch bekannt als _Speicherdruck_, kann es zu einem Zeitpunkt kommen, an dem der Browser weniger verfügbaren Speicherplatz hat, als er benötigt, um alle gespeicherten Daten des Ursprungs zu speichern.

Browser verwenden eine Least Recently Used (LRU) Politik, um mit diesem Szenario umzugehen. Die Daten des am wenigsten kürzlich verwendeten Ursprungs werden gelöscht. Wenn der Speicherdruck anhält, geht der Browser zum zweit am wenigsten kürzlich verwendeten Ursprung über, und so weiter, bis das Problem gelöst ist.

Dieser Löschmechanismus gilt nur für Ursprünge, die nicht persistent sind, und überspringt Ursprünge, denen mit Hilfe von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) Datenspeicherung gewährt wurde.

### Überschreitung der maximalen Speichernutzung des Browsers

Einige Browser definieren einen maximalen Speicherplatz, den sie auf der Festplatte des Geräts nutzen können. Zum Beispiel verwendet Chrome derzeit höchstens 80% der gesamten Festplattengröße.

Diese maximale Speicherkapazität bedeutet, dass es zu einem Punkt kommen kann, an dem die von allen kombinierten Ursprüngen gespeicherten Daten die maximale Größe überschreiten, ohne dass ein einzelner Ursprung über seine individuelle Quote hinausgeht.

In diesem Fall beginnt der Browser mit der Löschung von Best-Effort-Ursprüngen, wie unter [Speicherdruck Löschung](#speicherdruck_löschung) beschrieben.

### Proaktive Löschung

Safari löscht proaktiv Daten, wenn die Verhinderung von Nachverfolgung über Seiten hinweg aktiviert ist. Wenn ein Ursprung innerhalb der letzten sieben Tage der Browsernutzung keine Nutzerinteraktion hatte, wie Klicken oder Tippen, werden seine Daten, die aus Skripten erstellt wurden, gelöscht. Vom Server gesetzte Cookies sind von dieser Löschung ausgenommen.

## Wie werden Daten gelöscht?

Wenn die Daten eines Ursprungs vom Browser gelöscht werden, werden alle seine Daten, nicht nur Teile davon, gleichzeitig gelöscht. Wenn der Ursprung beispielsweise Daten mit IndexedDB und der Cache API gespeichert hatte, werden beide Datentypen gelöscht.

Das Löschen nur einiger der Daten eines Ursprungs könnte zu Inkonsistenzproblemen führen.

## Siehe auch

- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Dauerhafter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quoten Konzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
