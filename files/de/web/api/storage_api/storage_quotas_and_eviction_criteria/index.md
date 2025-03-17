---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können eine Reihe von Technologien verwenden, um Daten im Browser des Nutzers zu speichern (d.h. auf der lokalen Festplatte des Geräts, das der Nutzer verwendet, um die Website zu betrachten).

Die Menge an Daten, die Browser Websites speichern lassen, und die Mechanismen, die sie zum Löschen von Daten verwenden, wenn dieses Limit erreicht ist, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die verwendet werden können, um Daten zu speichern, die Quoten, die Browser eingerichtet haben, um zu verhindern, dass Websites zu viele Daten speichern, und die Mechanismen, die sie zum Löschen von Daten bei Bedarf verwenden.

## Wie trennen Browser Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Orten, die auch als Buckets bezeichnet werden, um das Risiko zu verringern, dass Nutzer im gesamten Web nachverfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten pro Ursprung.

Der Begriff _{{Glossary("origin", "Origin")}}_ ist daher wichtig, um diesen Artikel zu verstehen. Ein Ursprung wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zum gleichen Ursprung, da sie das gleiche Schema (`https`), den gleichen Hostnamen (`example.com`) und den Standardport teilen.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für einen gesamten Ursprung, selbst wenn dieser Ursprung zum Betrieb mehrerer Websites verwendet wird, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die Daten eines Ursprungs weiter in verschiedene Partitionen zu unterteilen, zum Beispiel in Fällen, in denen ein Ursprung innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren verschiedenen Drittanbieter-Ursprüngen geladen wird. Aus Gründen der Einfachheit wird in diesem Artikel jedoch davon ausgegangen, dass Daten immer pro Ursprung gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien verwenden, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Guides/Cookies)                                                      | Ein HTTP-Cookie ist ein kleines Datenstück, das der Webserver und Browser austauschen, um statusbezogene Informationen über die Seitennavigation hinweg zu speichern.                                                                                |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API bietet Mechanismen für Webseiten, um Schlüssel/Wert-Paare in reiner Textform zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API zum Speichern großer Datenstrukturen im Browser und zu deren Indexierung für eine performante Suche.                                                                                                                      |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen persistenten Speichermekanismus für HTTP-Anfragen und Antwortobjektpaare, um Webseiten schneller laden zu lassen.                                                                                                         |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS stellt ein Dateisystem bereit, das für den Ursprung der Seite privat ist und zum Lesen und Schreiben von Verzeichnissen und Dateien verwendet werden kann.                                                                                      |

Beachten Sie, dass zusätzlich zu den oben genannten Punkten Browser auch andere Arten von Daten im Browser für einen Ursprung speichern, wie z. B. [WebAssembly](/de/docs/WebAssembly)-Code-Caching.

## Bleiben im Browser gespeicherte Daten erhalten?

Daten für einen Ursprung können im Browser auf zwei Arten gespeichert werden, _persistent_ und _best-effort_:

- Best-effort: Dies ist die standardmäßige Art, wie Daten gespeichert werden. Best-effort-Daten bleiben erhalten, solange der Ursprung unterhalb seiner Quote bleibt, das Gerät genügend Speicherplatz hat und der Nutzer nicht über die Einstellungen seines Browsers auswählt, die Daten zu löschen.
- Persistent: Ein Ursprung kann sich dafür entscheiden, seine Daten auf persistente Weise zu speichern. Daten, die auf diese Weise gespeichert werden, werden nur gelöscht, wenn der Nutzer dies über die Einstellungen seines Browsers wählt. Weitere Informationen finden Sie unter [Wann werden Daten gelöscht](#when_is_data_evicted).

Die im Browser von einem Ursprung gespeicherten Daten sind standardmäßig best-effort. Bei der Verwendung von Webtechnologien wie IndexedDB oder Cache werden die Daten transparent gespeichert, ohne die Erlaubnis des Nutzers einzuholen. Ebenso wird der Browser, wenn er best-effort-Daten löschen muss, dies tun, ohne den Nutzer zu unterbrechen.

Wenn Entwickler aus irgendeinem Grund persistenten Speicher benötigen (z. B. beim Erstellen einer Web-App, die auf kritischen Daten beruht, die sonst nirgendwo gespeichert werden), können sie dies mit der Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) tun.

In Firefox wird der Nutzer informiert durch ein UI-Popup, wenn eine Seite beschließt, persistente Speicher zu verwenden, und um Erlaubnis bittet.

Safari und die meisten auf Chromium basierenden Browser, wie Chrome oder Edge, genehmigen oder verweigern die Anfrage automatisch basierend auf der Interaktionshistorie des Nutzers mit der Website und zeigen keine Aufforderungen an den Nutzer an.

Beachten Sie, dass [Forschungen des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigen, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Nutzer regelmäßig eine Website besucht, ist die Wahrscheinlichkeit sehr gering, dass ihre gespeicherten Daten, selbst im Best-Effort-Modus, vom Browser gelöscht werden.

### Privates Browsen

Beachten Sie, dass im privaten Surfen-Modus (auch genannt _Incognito_ in Chrome und _InPrivate_ in Edge) Browser möglicherweise andere Quoten anwenden und gespeicherte Daten normalerweise gelöscht werden, wenn der private Browsermodus endet.

## Wie viele Daten können gespeichert werden?

### Cookies

Unterschiedliche Browser haben unterschiedliche Regeln bezüglich der Anzahl der Cookies, die pro Ursprung zugelassen sind, und wie viel Speicherplatz diese Cookies auf der Festplatte einnehmen dürfen. Während Cookies nützlich sind, um einen kleinen gemeinsamen Status zwischen dem Browser und dem Webserver über die Seitennavigation hinweg zu bewahren, wird davon abgeraten, Cookies zum Speichern von Daten im Browser zu verwenden. Cookies werden mit jedem HTTP-Anfrage gesendet, daher führt das Speichern von Daten in Cookies, die durch eine andere Webtechnologie gespeichert werden könnten, unnötig zur Erhöhung der Anfragegröße.

Da Cookies nicht zum Speichern von Daten im Browser verwendet werden sollten, werden hier keine Speicherbeschränkungen für Cookies behandelt.

### Web Storage

Der Web Storage, der über die [`localStorage`](/de/docs/Web/API/Window/localStorage)- und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)-Eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts zugänglich ist, ist auf maximal 10 MiB Daten in allen Browsern begrenzt.

Browser können bis zu 5 MiB lokalen Speicher und 5 MiB Sitzungsspeicher pro Ursprung speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError`-Ausnahme, die mit einem {{jsxref("Statements/try...catch","try...catch")}}-Block behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die mit anderen Webtechnologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert) gespeichert werden, werden von einem speicherverwaltungssystem verwaltet, das spezifisch für jeden Browser ist.

Dieses System reguliert alle Daten, die ein Ursprung mit diesen APIs speichert.

Jeder Browser bestimmt, mit welchem Mechanismus auch immer er wählt, die maximale Menge an Speicher, die ein gegebener Ursprung nutzen kann.

#### Firefox

In Firefox ist der maximal Platz, den ein Ursprung im Best-Effort-Modus nutzen kann, der kleinere von:

- 10 % der gesamten Speichergröße, auf der das Profil des Nutzers gespeichert ist.
- Oder 10 GiB, welches das _Gruppenlimit_ ist, das Firefox auf alle Ursprünge anwendet, die zu derselben {{Glossary("eTLD", "eTLD+1 Domain")}} gehören.

Ursprünge, für die persisten Speicher gewährt wurde, können bis zu 50 % der gesamten Festplattengröße speichern, begrenzt auf 8 TiB, und unterliegen nicht dem eTLD+1-Gruppenlimit.

Zum Beispiel, wenn das Gerät eine 500 GiB große Festplatte hat, wird Firefox einem Ursprung erlauben, bis zu:

- Im Best-Effort-Modus: 10 GiB an Daten zu speichern, was das eTLD+1-Gruppenlimit ist.
- Im Persistent-Modus: 250 GiB, was 50 % der gesamten Speichergröße entspricht.

Beachten Sie, dass es möglicherweise nicht tatsächlich möglich ist, dass der Ursprung seine Quote erreicht, da sie basierend auf der **Gesamt**größe der Festplatte berechnet wird, nicht auf dem aktuell verfügbaren Speicherplatz. Dies geschieht aus Sicherheitsgründen, um {{Glossary("fingerprinting", "Fingerprinting")}} zu verhindern.

#### Chrome und auf Chromium basierende Browser

In Browsern, die auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann ein Ursprung in beiden Modi, Best-Effort und Persistent, bis zu 60 % der gesamten Speichergröße speichern.

Zum Beispiel, wenn das Gerät eine Festplatte von 1 TiB hat, wird der Browser einem Ursprung erlauben, bis zu 600 GiB zu nutzen.

Wie bei Firefox kann ein Ursprung tatsächlich nicht in der Lage sein, seine Quote zu erreichen, da diese basierend auf der Gesamtgröße der Festplatte berechnet wird, um Fingerprinting zu vermeiden.

#### Safari

Ab macOS 14 und iOS 17 weist Safari jedem Ursprung bis zu 20 % des gesamten Speicherplatzes zu. Wenn der Nutzer es als Web-App auf dem Home-Bildschirm oder Dock gespeichert hat, wird dieses Limit auf bis zu 60 % der Speicherkapazität erhöht. Aus Datenschutzgründen erhalten {{Glossary("Same-origin_policy", "cross-origin")}} Frames ein separates Kontingent, das ungefähr 1/10 der ihrer Eltern beträgt.

Zum Beispiel wird ein MacOS-Gerät mit einem 1 TiB Laufwerk jedem Ursprung eine Grenze von etwa 200 GiB setzen. Wenn der Nutzer eine Web-App auf seinem Dock speichert, wird dieser ein größeres Limit von etwa 600 GiB zugewiesen.

Wie andere Browser können die genauen vom Kontingent erzwungenen Grenzen variieren, um Fingerprinting zu vermeiden. Zusätzlich erzwingt Safari auch ein gesamtes Kontingent, das das gespeicherte Datenvolumen über alle Ursprünge hinweg nicht übersteigen darf: 80 % der Festplattengröße für jeden Browser und jede Web-App und 15 % der Festplattengröße für jede Nicht-Browser-App, die Web-Inhalte anzeigt. Weitere Informationen zu Safaris Speicher-Richtlinien finden Sie auf dem [WebKit-Blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari erhält ein Ursprung ein anfängliches Kontingent von 1 GiB. Sobald der Ursprung dieses Limit erreicht, fragt Safari den Nutzer um Erlaubnis, um dem Ursprung zu erlauben, mehr Daten zu speichern. Dies geschieht unabhängig davon, ob der Ursprung Daten im Best-Effort- oder Persistent-Modus speichert.

## Wie überprüft man den verfügbaren Speicherplatz?

Webentwickler können mit der Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API) überprüfen, wie viel Speicherplatz für ihren Ursprung verfügbar ist und wie viel vom Ursprung genutzt wird.

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert und nicht den tatsächlichen Wert zurückgibt. Einige der Ressourcen, die von einem Ursprung gespeichert werden, können von anderen Ursprüngen stammen, und Browser polstern freiwillig die Größe der Cross-Origin-Daten, wenn sie den Gesamtnutzungswert berichten.

## Was passiert, wenn ein Ursprung seine Quote erreicht?

Der Versuch, mehr als die Quote eines Ursprungs mit beispielweise IndexedDB, Cache oder OPFS zu speichern, schlägt mit einer `QuotaExceededError`-Ausnahme fehl.

Webentwickler sollten JavaScript, das in den Browserspeicher schreibt, innerhalb von {{jsxref("Statements/try...catch","try...catch")}}-Blöcken einwickeln. Es wird auch empfohlen, Platz freizugeben, indem Daten gelöscht werden, bevor neue Daten gespeichert werden.

## Wann werden Daten gelöscht?

Das Löschen von Daten ist der Prozess, mit dem ein Browser die von einem Ursprung gespeicherten Daten löscht.

Das Löschen von Daten kann in mehreren Fällen auftreten:

- Wenn auf dem Gerät wenig Speicherplatz zur Verfügung steht, auch bekannt als _Speicherdruck_.
- Wenn alle im Browser gespeicherten Daten (über alle Ursprünge hinweg) die Gesamtmenge an Speicher übersteigen, die der Browser auf dem Gerät verwenden möchte.
- Proaktiv, für Ursprünge, die nicht regelmäßig benutzt werden, was nur in Safari passiert.

### Speicherdrucklöschung

Wenn auf einem Gerät wenig Speicherplatz zur Verfügung steht, auch bekannt als _Speicherdruck_, kann es vorkommen, dass der Browser weniger verfügbaren Platz hat, als er benötigt, um alle gespeicherten Daten des Ursprungs zu speichern.

Browser verwenden eine Least Recently Used (LRU)-Richtlinie, um mit diesem Szenario umzugehen. Die Daten des am wenigsten verwendeten Ursprungs werden gelöscht. Wenn der Speicherdruck anhält, wechselt der Browser zum zweit wenig genutzten Ursprung und so weiter, bis das Problem gelöst ist.

Dieser Löschmechanismus gilt nur für Ursprünge, die nicht persistent sind, und überspringt Ursprünge, denen Datenspeicherung mit Hilfe von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) gewährt wurde.

### Überschreiten der maximalen Speichernutzung des Browsers

Einige Browser definieren einen maximalen Speicherplatz, den sie auf der Festplatte des Geräts verwenden können. Beispielsweise verwendet Chrome derzeit höchstens 80 % der Gesamtgröße der Festplatte.

Diese maximale Speichergröße bedeutet, dass es vorkommen kann, dass die von allen kombinierten Ursprüngen gespeicherten Daten die maximale Größe überschreiten, ohne dass ein einziger Ursprung seine individuelle Quote überschreitet.

Wenn dies passiert, beginnt der Browser damit, Best-Effort-Ursprünge wie in [Speicherdrucklöschung](#speicherdrucklöschung) beschrieben zu löschen.

### Proaktives Löschen

Safari löscht proaktiv Daten, wenn die Verhinderung von übergreifendem Tracking eingeschaltet ist. Wenn ein Ursprung in den letzten sieben Tagen der Browsernutzung keine Nutzerinteraktion wie Klicken oder Tippen hatte, werden seine durch Skripte erstellten Daten gelöscht. Serverseitig gesetzte Cookies sind von dieser Löschung ausgenommen.

## Wie werden Daten gelöscht?

Wenn Daten eines Ursprungs vom Browser gelöscht werden, werden alle seine Daten und nicht nur Teile davon gleichzeitig gelöscht. Wenn der Ursprung Daten mit IndexedDB und der Cache API gespeichert hat, werden beispielsweise beide Arten von Daten gelöscht.

Nur das Löschen eines Teils der Ursprungsdaten könnte Konsistenzprobleme verursachen.

## Siehe auch

- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Webspeicher- und Quotenkonzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
