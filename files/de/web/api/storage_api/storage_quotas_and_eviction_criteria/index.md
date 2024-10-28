---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können verschiedene Technologien nutzen, um Daten im Browser des Nutzers zu speichern (d. h. auf der lokalen Festplatte des Geräts, das der Nutzer zur Anzeige der Website verwendet).

Die Menge an Daten, die Browser Websites speichern lassen, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dieses Limit erreicht wird, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die zum Speichern von Daten verwendet werden können, die Quoten, die Browser einsetzen, um zu verhindern, dass Websites zu viele Daten speichern, und die Mechanismen, die sie verwenden, um Daten bei Bedarf zu löschen.

## Wie trennen Browser Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Speicherorten, auch Buckets genannt, um das Risiko zu verringern, dass Benutzer im Web verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _pro Origin_.

Der Begriff _{{Glossary("origin", "Origin")}}_ ist daher wichtig, um diesen Artikel zu verstehen. Eine Origin wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zur gleichen Origin, da sie das gleiche Schema (`https`), den gleichen Hostnamen (`example.com`) und den Standardport haben.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für eine gesamte Origin, auch wenn diese Origin verwendet wird, um mehrere Websites zu betreiben, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die von einer Origin gespeicherten Daten weiter in verschiedene Partitionen zu trennen, zum Beispiel in Fällen, in denen eine Origin innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren unterschiedlichen Drittanbieter-Origins geladen wird. Aus Gründen der Einfachheit geht dieser Artikel jedoch davon aus, dass Daten immer pro Origin gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien verwenden, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Cookies)                                                             | Ein HTTP-Cookie ist ein kleines Stück Daten, das der Webserver und der Browser einander senden, um zustandsbehaftete Informationen über Seitenaufrufe hinweg zu merken.                                                                                         |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API bietet Mechanismen für Webseiten, um nur Zeichenfolgen enthaltende Schlüssel/Wert-Paare zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API für das Speichern großer Datenstrukturen im Browser und deren Indizierung für hochleistungsfähiges Suchen.                                                                                                                           |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen persistenten Speichermechanismus für HTTP-Anfrage- und -Antwort-Objektpaare, der verwendet wird, um Webseiten schneller zu laden.                                                                                                    |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS stellt ein Dateisystem bereit, das privat für die Origin der Seite ist und zum Lesen und Schreiben von Verzeichnissen und Dateien verwendet werden kann.                                                                                                   |

Beachten Sie, dass zusätzlich zu den oben genannten Browsern andere Datentypen für eine Origin im Browser gespeichert werden, wie z. B. die Zwischenspeicherung von [WebAssembly](/de/docs/WebAssembly)-Code.

## Bleiben im Browser gespeicherte Daten bestehen?

Daten für eine Origin können im Browser auf zwei Arten gespeichert werden: _persistent_ und _nach bestem Wissen und Gewissen_:

- Nach bestem Wissen und Gewissen: Dies ist die Standardmethode, mit der Daten gespeichert werden. Nach bestem Wissen und Gewissen gespeicherte Daten bleiben bestehen, solange die Origin unter ihrer Quote bleibt, das Gerät genügend Speicherplatz hat und der Benutzer nicht über die Browsereinstellungen beschließt, die Daten zu löschen.
- Persistente Speicherung: Eine Origin kann sich dafür entscheiden, ihre Daten persistent zu speichern. Auf diese Weise gespeicherte Daten werden nur gelöscht, wenn der Benutzer dies über die Browsereinstellungen wünscht. Weitere Informationen finden Sie unter [Wann werden Daten gelöscht](#when_is_data_evicted).

Die von einer Origin im Browser gespeicherten Daten sind standardmäßig nach bestem Wissen und Gewissen gespeichert. Beim Verwenden von Webtechnologien wie IndexedDB oder Cache werden die Daten transparent gespeichert, ohne die Erlaubnis des Benutzers einzuholen. Auf ähnliche Weise entfernt der Browser bei Bedarf die Daten nach bestem Wissen und Gewissen, ohne den Benutzer zu unterbrechen.

Wenn Entwickler aus irgendeinem Grund persistenten Speicher benötigen (z. B. beim Erstellen einer Web-App, die auf kritische Daten angewiesen ist, die sonst nirgendwo gespeichert sind), können sie dies mit der Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) tun.

In Firefox wird der Benutzer benachrichtigt, wenn eine Site sich für persistente Speicherung entscheidet, indem ein Benutzeroberflächen-Popup angezeigt wird, das um Erlaubnis bittet.

Safari und die meisten Chromium-basierten Browser, wie Chrome oder Edge, genehmigen oder lehnen die Anfrage automatisch basierend auf der Interaktionshistorie des Benutzers mit der Site ab und zeigen dem Benutzer keine Aufforderungen an.

Beachten Sie, dass [Untersuchungen des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigen, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Benutzer regelmäßig eine Website besucht, besteht nur eine geringe Chance, dass die gespeicherten Daten, selbst im Modus nach bestem Wissen und Gewissen, vom Browser gelöscht werden.

### Privates Surfen

Beachten Sie, dass im privaten Modus (auch _Inkognito_ in Chrome und _InPrivate_ in Edge genannt) Browser möglicherweise andere Quoten anwenden und gespeicherte Daten in der Regel gelöscht werden, wenn der private Modus endet.

## Wie viele Daten können gespeichert werden?

### Cookies

Verschiedene Browser haben unterschiedliche Regeln bezüglich der Anzahl der erlaubten Cookies pro Origin und des Speicherplatzes, den diese Cookies auf der Festplatte verwenden können. Während Cookies nützlich sind, um einige kleine gemeinsame Zustände zwischen dem Browser und dem Webserver über Seitenaufrufe hinweg beizubehalten, wird nicht empfohlen, Cookies zum Speichern von Daten im Browser zu verwenden. Cookies werden mit jeder HTTP-Anfrage gesendet, sodass die Speicherung von Daten in Cookies, die mit einer anderen Webtechnologie gespeichert werden könnten, die Größe der Anfragen unnötig erhöht.

Da Cookies nicht zum Speichern von Daten im Browser verwendet werden sollten, werden Cookie-Speichergrenzen hier nicht behandelt.

### Web Storage

Web Storage, auf den über die Eigenschaften [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) des [`window`](/de/docs/Web/API/Window)-Objekts zugegriffen werden kann, ist auf allen Browsern auf maximal 10 MiB Daten begrenzt.

Browser können bis zu 5 MiB lokalen Speicher und 5 MiB Sitzungsspeicher pro Origin speichern.

Wenn dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError`-Ausnahme, die mit einem {{jsxref("Statements/try...catch","try...catch")}}-Block behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die mit anderen Webtechnologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert) gespeichert werden, werden von einem speicherverwaltungs-system verwaltet, das spezifisch für jeden Browser ist.

Dieses System reguliert alle Daten, die eine Origin mit diesen APIs speichert.

Jeder Browser bestimmt, mit welchem Mechanismus auch immer er gewählt hat, die maximale Menge an Speicher, die eine gegebene Origin verwenden kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den eine Origin im Modus nach bestem Wissen und Gewissen verwenden kann, der kleinere von:

- 10% der gesamten Plattenkapazität, auf der das Profil des Benutzers gespeichert ist.
- Oder 10 GiB, was das _Gruppenlimit_ ist, das Firefox auf alle Origins anwendet, die Teil der gleichen {{Glossary("eTLD", "eTLD+1-Domain")}} sind.

Ursprünge, für die persistente Speicherung gewährt wurde, können bis zu 50% der gesamten Plattenkapazität verwenden, begrenzt auf 8 TiB, und unterliegen nicht dem eTLD+1-Gruppenlimit.

Zum Beispiel, wenn das Gerät eine 500 GiB-Festplatte hat, erlaubt Firefox einer Origin, bis zu folgenden zu speichern:

- Im Modus nach bestem Wissen und Gewissen: 10 GiB an Daten, was das eTLD+1-Gruppenlimit ist.
- Im persistenten Modus: 250 GiB, was 50% der gesamten Plattenkapazität sind.

Beachten Sie, dass es tatsächlich nicht möglich sein könnte, dass die Origin ihre Quote erreicht, da sie basierend auf der **gesamten** Festplattenkapazität berechnet wird, nicht dem derzeit verfügbaren freien Speicherplatz. Dies geschieht aus Sicherheitsgründen, um {{Glossary("fingerprinting", "Fingerprinting")}} zu vermeiden.

#### Chrome und Chromium-basierte Browser

In Browsern, die auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann eine Origin sowohl im persistenten als auch im Modus nach bestem Wissen und Gewissen bis zu 60% der gesamten Plattenkapazität speichern.

Zum Beispiel, wenn das Gerät eine 1 TiB-Festplatte hat, erlaubt der Browser einer Origin, bis zu 600 GiB zu verwenden.

Wie bei Firefox, da diese Quote basierend auf der gesamten Plattenkapazität berechnet wird, um Fingerprinting zu vermeiden, könnte eine Origin tatsächlich nicht in der Lage sein, ihre Quote zu erreichen.

#### Safari

Ab macOS 14 und iOS 17 weist Safari jeder Origin bis zu etwa 20% des gesamten Speicherplatzes zu. Wenn der Nutzer es als Web-App auf dem Homebildschirm oder dem Dock gespeichert hat, wird dieses Limit auf bis zu 60% der Festplattenkapazität erhöht. Aus Datenschutzgründen haben {{Glossary("Same-origin_policy", "cross-origin")}}-Frames eine separate Quote, die ungefähr 1/10 ihrer Eltern beträgt.

Zum Beispiel wird ein macOS-Gerät mit einer 1 TiB-Festplatte jede Origin auf etwa 200 GiB beschränken. Wenn der Benutzer eine Web-App auf seinem Dock speichert, wird dieser ein größeres Limit von etwa 600 GiB zugewiesen.

Wie andere Browser können die genauen durch die Quote durchgesetzten Grenzen variieren, um Fingerprinting zu vermeiden. Zusätzlich zu dieser Begrenzung erzwingt Safari auch eine übergreifende Quote, dass die gespeicherten Daten aller Ursprünge nicht über hinaus wachsen können: 80% der Festplattenkapazität für jeden Browser und jede Web-App und 15% der Festplattenkapazität für jede Nicht-Browser-App, die Webinhalten darstellt. Weitere Informationen zu Safaris Speicherpolitik finden Sie im [Webkit-Blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari wird einer Origin anfänglich ein 1 GiB-Limit zugewiesen. Sobald die Origin dieses Limit erreicht, fragt Safari den Benutzer um Erlaubnis, der Origin zu gestatten, mehr Daten zu speichern. Dies geschieht unabhängig davon, ob die Origin Daten im Modus nach bestem Wissen und Gewissen oder im persistenten Modus speichert.

## Wie kann man den verfügbaren Speicherplatz überprüfen?

Webentwickler können den verfügbaren Speicherplatz für ihre Origin und den von der Origin genutzten Speicherplatz mit der Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API) überprüfen.

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert zurückgibt, nicht den tatsächlichen Wert. Einige der Ressourcen, die von einer Origin gespeichert werden, können aus anderen Origins stammen und Browser füllen die Größe der ressourcenübergreifenden Daten absichtlich aus, wenn sie den gesamten Nutzungswert melden.

## Was passiert, wenn eine Origin ihre Quote erreicht?

Der Versuch, mehr als die Quote einer Origin zu speichern, z. B. mit IndexedDB, Cache oder OPFS, schlägt mit einer `QuotaExceededError`-Ausnahme fehl.

Webentwickler sollten JavaScript, das in den Browserspeicher schreibt, innerhalb von {{jsxref("Statements/try...catch","try...catch")}}-Blöcken umgeben. Es wird auch empfohlen, durch das Löschen von Daten Speicherplatz freizugeben, bevor neue Daten gespeichert werden.

## Wann werden Daten gelöscht?

Datenlöschung ist der Prozess, bei dem ein Browser die gespeicherten Daten einer Origin löscht.

Datenlöschung kann in mehreren Fällen vorkommen:

- Wenn auf dem Gerät wenig Speicherplatz zur Verfügung steht, auch bekannt als _Speicherdruck_.
- Wenn alle im Browser gespeicherten Daten (über alle Ursprünge hinweg) die gesamte Menge an Speicherplatz überschreiten, die der Browser bereit ist, auf dem Gerät zu verwenden.
- Proaktiv, für Ursprünge, die nicht regelmäßig genutzt werden, was nur in Safari passiert.

### Speicherdrucklöschung

Wenn ein Gerät wenig Speicherplatz zur Verfügung hat, auch bekannt als _Speicherdruck_, kann es dazu kommen, dass der Browser weniger verfügbaren Speicherplatz hat, als er benötigt, um alle von der Origin gespeicherten Daten zu speichern.

Browser verwenden eine Strategie mit dem Prinzip "Least Recently Used" (LRU), um dieses Szenario zu bewältigen. Die Daten der am wenigsten kürzlich verwendeten Origin werden gelöscht. Wenn der Speicherdruck anhält, geht der Browser zur zweit am wenigsten kürzlich verwendeten Origin über, und so weiter, bis das Problem gelöst ist.

Dieser Löschmechanismus gilt nur für Ursprünge, die nicht persistent sind, und überspringt Ursprünge, denen durch die Verwendung von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) Datenspeicherung gewährt wurde.

### Löschung bei Überschreitung der maximalen Browser-Speichernutzung

Einige Browser definieren einen maximalen Speicherplatz, den sie auf der Festplatte des Geräts verwenden können. Zum Beispiel verwendet Chrome derzeit maximal 80% der gesamten Festplattenkapazität.

Diese maximale Speichergröße bedeutet, dass es einen Punkt geben kann, an dem die von allen kombinierten Ursprüngen gespeicherten Daten die maximale Größe überschreiten, ohne dass ein einzelner Ursprung über seiner individuellen Quote liegt.

Wenn dies passiert, beginnt der Browser mit der Löschung nach bestem Wissen und Gewissen genutzter Ursprünge, wie in [Speicherdrucklöschung](#speicherdrucklöschung) beschrieben.

### Proaktive Löschung

Safari führt eine proaktive Löschung von Daten durch, wenn die Verhinderung von Tracking über Websites hinweg aktiviert ist. Wenn ein Ursprung in den letzten sieben Tagen der Browsernutzung keine Benutzerinteraktion hatte, wie Klicks oder Tippen, werden die durch Skripte erstellten Daten gelöscht. Cookies, die vom Server gesetzt werden, sind von dieser Löschung ausgenommen.

## Wie werden Daten gelöscht?

Wenn die Daten einer Origin vom Browser gelöscht werden, werden alle ihre Daten, nicht nur Teile davon, gleichzeitig gelöscht. Wenn die Origin Daten z. B. mit IndexedDB und der Cache-API gespeichert hatte, werden beide Datentypen gelöscht.

Nur das Löschen einiger der Daten der Origin könnte zu Inkonsistenzproblemen führen.

## Siehe auch

- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quota Konzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
