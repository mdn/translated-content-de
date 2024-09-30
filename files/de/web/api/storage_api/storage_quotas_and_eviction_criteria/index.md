---
title: Speicherquoten und Eviktionskriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können eine Reihe von Technologien nutzen, um Daten im Browser des Benutzers zu speichern (d. h. auf der lokalen Festplatte des Geräts, das der Benutzer verwendet, um die Website anzusehen).

Die Menge an Daten, die Browser Websites speichern lassen, und die Mechanismen, die sie zum Löschen von Daten verwenden, wenn dieses Limit erreicht ist, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die zum Speichern von Daten verwendet werden können, die Quoten, die Browser festlegen, um Websites davon abzuhalten, zu viele Daten zu speichern, und die Mechanismen, die sie bei Bedarf zum Löschen von Daten anwenden.

## Wie trennen Browser Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Orten, auch Buckets genannt, um das Risiko zu verringern, dass Benutzer im Web verfolgt werden. Meistens verwalten Browser gespeicherte Daten _pro Ursprung_.

Der Begriff _[Ursprung](/de/docs/Glossary/origin)_ ist daher wichtig, um diesen Artikel zu verstehen. Ein Ursprung wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zum selben Ursprung, weil sie dasselbe Schema (`https`), denselben Hostnamen (`example.com`) und den Standardport haben.

Die in diesem Artikel beschriebenen Quoten und Eviktionskriterien gelten für einen gesamten Ursprung, auch wenn dieser Ursprung dazu verwendet wird, mehrere Websites zu betreiben, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die vom Ursprung gespeicherten Daten weiter in verschiedene Partitionen zu trennen, z. B. für den Fall, dass ein Ursprung innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren unterschiedlichen Drittanbieter-Ursprüngen geladen wird. Aus Gründen der Einfachheit wird jedoch in diesem Artikel angenommen, dass Daten immer pro Ursprung gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien verwenden, um Daten im Browser zu speichern:

| Technologie                                                                                       | Beschreibung                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Cookies)                                                           | Ein HTTP-Cookie ist ein kleines Stück Daten, das der Webserver und Browser senden, um zustandsbehaftete Informationen über die Seitennavigation hinweg zu behalten.                                                                |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                | Die Web Storage API bietet Mechanismen, um Webseiten nur-String-Schlüssel/Wert-Paare zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                    | IndexedDB ist eine Web-API zum Speichern großer Datenstrukturen im Browser und zum Indexieren für eine leistungsstarke Suche.                                                                                                       |
| [Cache API](/de/docs/Web/API/Cache)                                                            | Die Cache API bietet einen dauerhaften Speichermechanismus für HTTP-Anfrage- und Antwortobjektpaare, der verwendet wird, um Webseiten schneller laden zu lassen.                                                                    |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das für den Ursprung der Seite privat ist und zum Lesen und Schreiben von Verzeichnissen und Dateien verwendet werden kann.                                                                             |

Beachten Sie, dass zusätzlich zu den oben genannten Punkten Browser andere Arten von Daten für einen Ursprung im Browser speichern, wie z. B. [WebAssembly](/de/docs/WebAssembly)-Code-Caching.

## Bleiben im Browser gespeicherte Daten bestehen?

Daten für einen Ursprung können auf zwei Arten in einem Browser gespeichert werden: _persistent_ und _best-effort_:

- Best-effort: Dies ist die Standardmethode, in der Daten gespeichert werden. Best-effort-Daten bleiben erhalten, solange der Ursprung unter seiner Quote bleibt, das Gerät genug Speicherplatz hat und der Benutzer nicht über die Einstellungen seines Browsers die Daten löscht.
- Persistent: Ein Ursprung kann sich entscheiden, seine Daten auf eine dauerhafte Weise zu speichern. Auf diese Weise gespeicherte Daten werden nur entfernt oder gelöscht, wenn der Benutzer dies über die Einstellungen seines Browsers wählt. Weitere Informationen finden Sie unter [Wann werden Daten entfernt](#when_is_data_evicted).

Die vom Ursprung im Browser gespeicherten Daten sind standardmäßig best-effort. Bei Verwendung von Webtechnologien wie IndexedDB oder Cache werden die Daten transparent gespeichert, ohne den Benutzer um Erlaubnis zu fragen. Ebenso wird, wenn der Browser best-effort-Daten löschen muss, dies ohne Unterbrechung des Benutzers durchgeführt.

Wenn Entwickler aus irgendeinem Grund dauerhaften Speicher benötigen (z. B. beim Erstellen einer Web-App, die auf kritischen Daten basiert, die nirgendwo anders gespeichert sind), können sie dies mithilfe der Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) tun.

In Firefox wird der Benutzer benachrichtigt, wenn eine Website sich entscheidet, dauerhaften Speicher zu verwenden, und ein UI-Popup zeigt an, dass seine Erlaubnis angefordert wird.

Safari und die meisten auf Chromium basierenden Browser, wie Chrome oder Edge, genehmigen oder verweigern die Anforderung automatisch basierend auf dem Interaktionsverlauf des Benutzers mit der Website und zeigen keine Aufforderungen an den Benutzer.

Beachten Sie, dass [Forschung des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigt, dass Daten sehr selten durch den Browser gelöscht werden. Wenn ein Benutzer regelmäßig eine Website besucht, besteht nur eine geringe Wahrscheinlichkeit, dass ihre gespeicherten Daten, selbst im Best-Effort-Modus, vom Browser entfernt werden.

### Privates Browsen

Beachten Sie, dass im privaten Browsen-Modus (auch _Inkognito_ in Chrome und _InPrivate_ in Edge genannt) Browser möglicherweise unterschiedliche Quoten anwenden und gespeicherte Daten normalerweise gelöscht werden, wenn der private Browsen-Modus endet.

## Wie viele Daten können gespeichert werden?

### Cookies

Verschiedene Browser haben unterschiedliche Regeln darüber, wie viele Cookies pro Ursprung erlaubt sind und wie viel Speicherplatz diese Cookies auf der Festplatte nutzen können. Obwohl Cookies nützlich sind, um einen kleinen gemeinsamen Zustand zwischen dem Browser und dem Webserver über die Seitennavigation hinweg zu erhalten, wird davon abgeraten, Cookies zum Speichern von Daten im Browser zu verwenden. Cookies werden mit jeder einzelnen HTTP-Anfrage gesendet, daher erhöht das Speichern von Daten in Cookies, die auch mithilfe einer anderen Webtechnologie gespeichert werden könnten, unnötig die Größe der Anfragen.

Da Cookies nicht zum Speichern von Daten im Browser verwendet werden sollten, werden hier keine Cookie-Speicher-Browser-Grenzen behandelt.

### Web Storage

Web Storage, auf das mit den Eigenschaften [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) des [`window`](/de/docs/Web/API/Window)-Objekts zugegriffen werden kann, ist auf maximal 10 MiB Daten auf allen Browsern begrenzt.

Browser können bis zu 5 MiB an lokalem Speicher und 5 MiB an Sitzungsspeicher pro Ursprung speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError`-Ausnahme, die mit einem {{jsxref("Statements/try...catch","try...catch")}}-Block behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die durch andere Webtechnologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert) gespeichert werden, werden von einem speicherverwaltungsspezifischen System verwaltet, das für jeden Browser spezifisch ist.

Dieses System regelt alle Daten, die ein Ursprung unter Verwendung dieser APIs speichert.

Jeder Browser bestimmt mittels eines beliebigen Mechanismus, den er wählt, die maximale Speichermenge, die ein gegebener Ursprung verwenden kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den ein Ursprung im Best-Effort-Modus verwenden kann, der jeweils kleinere von:

- 10% der gesamten Festplattengröße, auf der das Profil des Benutzers gespeichert ist.
- Oder 10 GiB, was das _Gruppenlimit_ ist, das Firefox für alle Ursprünge anwendet, die Teil derselben [eTLD+1-Domain](/de/docs/Glossary/eTLD) sind.

Ursprünge, denen dauerhafter Speicher gewährt wurde, können bis zu 50% der gesamten Festplattengröße speichern, gedeckelt bei 8 TiB, und unterliegen nicht dem eTLD+1-Gruppenlimit.

Zum Beispiel, wenn das Gerät eine 500 GiB große Festplatte hat, erlaubt Firefox einem Ursprung, bis zu:

- Im Best-Effort-Modus: 10 GiB an Daten zu speichern, was das eTLD+1-Gruppenlimit ist.
- Im Dauerhaften Modus: 250 GiB, was 50% der gesamten Festplattengröße ist.

Beachten Sie, dass es möglicherweise nicht tatsächlich möglich ist, dass der Ursprung sein Quota erreicht, da es auf Grundlage der **gesamten** Festplattengröße berechnet wird, nicht des aktuell verfügbaren Speicherplatzes. Dies erfolgt aus Sicherheitsgründen, um [Fingerprinting](/de/docs/Glossary/fingerprinting) zu vermeiden.

#### Chrome und Chromium-basierte Browser

In Browsern, die auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann ein Ursprung bis zu 60% der gesamten Festplattengröße sowohl im Best-Effort- als auch im Dauerhaften Modus speichern.

Zum Beispiel, wenn das Gerät eine 1 TiB große Festplatte hat, erlaubt der Browser einem Ursprung, bis zu 600 GiB zu nutzen.

Wie bei Firefox, da dieses Quota basierend auf der gesamten Festplattengröße berechnet wird, um Fingerprinting zu vermeiden, könnte es einem Ursprung tatsächlich nicht möglich sein, sein Quota zu erreichen.

#### Safari

Beginnend mit macOS 14 und iOS 17 gewährt Safari jedem Ursprung bis zu etwa 20% des gesamten Festplattenspeicherplatzes. Wenn der Benutzer es als Web-App auf dem Home-Bildschirm oder dem Dock gespeichert hat, wird dieses Limit auf bis zu 60% der Festplattengröße erhöht. Aus Datenschutzgründen haben [cross-origin](/de/docs/Glossary/Same-origin_policy)-Frames eine separate Quote, die etwa 1/10 ihrer Eltern beträgt.

Zum Beispiel wird ein macOS-Gerät mit einer 1 TiB-Festplatte jeden Ursprung auf circa 200 GiB beschränken. Wenn der Benutzer eine Web-App in seinem Dock speichert, wird dafür ein größeres Limit von etwa 600 GiB gewährt.

Wie andere Browser können die festgelegten Grenzen zur Vermeidung von Fingerprinting variieren. Zusätzlich setzt Safari auch ein allgemeines Quota durch, dass gespeicherte Daten über alle Ursprünge hinaus nicht wachsen dürfen: 80% der Festplattengröße für jeden Browser und Web-App, und 15% der Festplattengröße für jede Nicht-Browser-App, die Webinhalte anzeigt. Weitere Informationen zu Safaris Speicherpolitik finden Sie im [Webkit-Blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari erhält ein Ursprung eine anfängliche Quote von 1 GiB. Sobald der Ursprung dieses Limit erreicht hat, fragt Safari den Benutzer um Erlaubnis, ob der Ursprung mehr Daten speichern darf. Dies geschieht unabhängig davon, ob der Ursprung Daten im Best-Effort- oder im Dauerhaften Modus speichert.

## Wie überprüft man den verfügbaren Speicherplatz?

Webentwickler können überprüfen, wie viel Speicherplatz für ihren Ursprung verfügbar ist und wie viel vom Ursprung genutzt wird, mithilfe der Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API).

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert zurückgibt, nicht den tatsächlichen Wert. Einige der Ressourcen, die von einem Ursprung gespeichert werden, könnten von anderen Ursprüngen stammen und Browser polstern bewusst die Größe der Cross-Origin-Daten bei der Meldung des gesamten Nutzungswerts.

## Was passiert, wenn ein Ursprung sein Quota erreicht?

Der Versuch, mehr als das Quota eines Ursprungs zu speichern, z.B. mit IndexedDB, Cache oder OPFS, führt zu einer `QuotaExceededError`-Ausnahme.

Webentwickler sollten JavaScript, das in den Browserspeicher schreibt, in {{jsxref("Statements/try...catch","try...catch")}}-Blöcken umschließen. Es wird auch empfohlen, Speicherplatz freizugeben, indem Daten gelöscht werden, bevor neue Daten gespeichert werden.

## Wann werden Daten entfernt?

Die Eviktion von Daten ist der Prozess, durch den ein Browser die gespeicherten Daten eines Ursprungs löscht.

Die Daten-Eviktion kann in mehreren Fällen auftreten:

- Wenn der Speicherplatz auf dem Gerät knapp wird, auch bekannt als _Speicherdruck_.
- Wenn alle im Browser gespeicherten Daten (über alle Ursprünge hinweg) die gesamte Menge an Speicherplatz übersteigen, die der Browser auf dem Gerät verwenden möchte.
- Proaktiv, für Ursprünge, die nicht regelmäßig verwendet werden, was nur in Safari auftritt.

### Speicherdruck-Eviktion

Wenn der Speicherplatz auf einem Gerät knapp wird, auch bekannt als _Speicherdruck_, kann es zu einem Punkt kommen, an dem dem Browser weniger Speicherplatz zur Verfügung steht, als er benötigt, um alle gespeicherten Daten des Ursprungs zu speichern.

Browser verwenden eine Least Recently Used (LRU)-Richtlinie, um mit diesem Szenario umzugehen. Die Daten des am wenigsten verwendeten Ursprungs werden gelöscht. Wenn der Speicherdruck anhält, geht der Browser zum zweitwenigsten verwendeten Ursprung über und so weiter, bis das Problem gelöst ist.

Dieser Eviktionsmechanismus gilt nur für Ursprünge, die nicht persistent sind, und überspringt Ursprünge, denen durch die Verwendung von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) Datenpersistenz gewährt wurde.

### Maximale Nutzung des Browserspeichers überschritten

Einige Browser definieren einen maximalen Speicherplatz, den sie auf dem Gerät verwenden können. Zum Beispiel nutzt Chrome derzeit maximal 80% der gesamten Festplattengröße.

Diese maximale Speichernutzung bedeutet, dass es einen Punkt geben kann, an dem die Daten, die von allen kombinierten Ursprüngen gespeichert werden, die maximale Größe überschreiten, ohne dass ein bestimmter Ursprung über seiner individuellen Quote liegt.

Wenn dies geschieht, beginnt der Browser mit der Eviktion von Best-Effort-Ursprüngen, wie in [Speicherdruck-Eviktion](#speicherdruck-eviktion) beschrieben.

### Proaktive Eviktion

Safari entfernt proaktiv Daten, wenn die Cross-Site Tracking-Prävention eingeschaltet ist. Wenn ein Ursprung in den letzten sieben Tagen der Browsernutzung keine Benutzerinteraktion, wie Klick oder Tippen, hatte, werden seine aus Skripten erstellten Daten gelöscht. Vom Server gesetzte Cookies sind von dieser Eviktion ausgenommen.

## Wie werden Daten entfernt?

Wenn die Daten eines Ursprungs vom Browser entfernt werden, werden alle seine Daten, nicht nur Teile davon, gleichzeitig gelöscht. Wenn der Ursprung beispielsweise Daten durch die Verwendung von IndexedDB und der Cache-API gespeichert hat, werden beide Arten von Daten gelöscht.

Nur einige der Daten des Ursprungs zu löschen, könnte zu Konsistenzproblemen führen.

## Siehe auch

- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Dauerhafter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quoten-Konzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
