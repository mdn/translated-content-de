---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können verschiedene Technologien nutzen, um Daten im Browser des Nutzers zu speichern (d. h. auf der lokalen Festplatte des Geräts, das der Nutzer zur Ansicht der Website verwendet).

Die Menge der Daten, die Browser Websites erlauben zu speichern, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dieses Limit erreicht wird, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die verwendet werden können, um Daten zu speichern, die Quoten, die Browser eingerichtet haben, um Websites daran zu hindern, zu viele Daten zu speichern, und die Mechanismen, die sie verwenden, um Daten bei Bedarf zu löschen.

## Wie trennen Browser die Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Orten, auch Buckets genannt, um das Risiko zu verringern, dass Nutzer im Web verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _pro Origin_.

Der Begriff _{{Glossary("origin", "Origin")}}_ ist daher wichtig, um diesen Artikel zu verstehen. Eine Origin wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zur gleichen Origin, da sie das gleiche Schema (`https`), den gleichen Hostnamen (`example.com`) und den Standard-Port haben.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für eine gesamte Origin, auch wenn diese Origin genutzt wird, um mehrere Websites auszuführen, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die von einer Origin gespeicherten Daten weiter in verschiedene Partitionen zu trennen, beispielsweise in Fällen, in denen eine Origin innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren verschiedenen Drittanbieter-Origins geladen wird. Aus Gründen der Einfachheit wird in diesem Artikel jedoch angenommen, dass Daten immer pro Origin gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien nutzen, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Cookies)                                                             | Ein HTTP-Cookie ist ein kleines Datenstück, das der Webserver und der Browser einander senden, um zustandsbehaftete Informationen über die Navigation zwischen Seiten hinaus zu behalten.                                                 |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API bietet Mechanismen für Webseiten, um reine String-Key/Value-Paare zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API, um große Datenstrukturen im Browser zu speichern und diese für leistungsstarke Suchanfragen zu indexieren.                                                                                                    |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen dauerhaften Speichermekanismus für HTTP-Anfrage- und Antwortobjekt-Paare, der verwendet wird, um Webseiten schneller zu laden.                                                                                 |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das privat zur Origin der Seite ist und zum Lesen und Schreiben von Verzeichnissen und Dateien genutzt werden kann.                                                                                          |

Beachten Sie, dass Browser zusätzlich zu den oben genannten auch andere Arten von Daten im Browser für eine Origin speichern, wie z.B. das Caching von [WebAssembly](/de/docs/WebAssembly)-Code.

## Bleiben im Browser gespeicherte Daten bestehen?

Daten für eine Origin können auf zwei Arten in einem Browser gespeichert werden, _persistent_ und _best-effort_:

- Best-effort: Dies ist die Weise, wie Daten standardmäßig gespeichert werden. Best-effort-Daten bleiben bestehen, solange die Origin unterhalb ihrer Quote bleibt, das Gerät über ausreichend Speicherplatz verfügt und der Nutzer sich nicht dafür entscheidet, die Daten über die Einstellungen seines Browsers zu löschen.
- Persistent: Eine Origin kann sich dafür entscheiden, ihre Daten auf persistente Weise zu speichern. Auf diese Weise gespeicherte Daten werden nur gelöscht, wenn der Nutzer dies über seine Browsereinstellungen entscheidet. Weitere Informationen hierzu finden Sie unter [Wann werden Daten gelöscht](#when_is_data_evicted).

Die von einer Origin im Browser gespeicherten Daten sind standardmäßig auf Best-effort-Basis. Beim Einsatz von Webtechnologien wie IndexedDB oder Cache werden die Daten transparent ohne Erlaubnisfragen an den Nutzer gespeichert. Ebenso löscht der Browser beim Bedarf an Best-effort-Daten ohne Unterbrechung des Nutzers.

Wenn Entwickler aus irgendeinem Grund persistenten Speicher benötigen (z. B. beim Erstellen einer Web-App, die auf kritischen Daten angewiesen ist, die nirgendwo sonst gespeichert sind), können sie dies durch Einsatz der [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) Methode der [Storage API](/de/docs/Web/API/Storage_API) tun.

In Firefox wird der Nutzer informiert, wenn eine Website sich entscheidet, persistenten Speicher zu verwenden, indem ein UI-Popup ihre Erlaubnis anfordert.

Safari und die meisten auf Chromium basierenden Browser, wie Chrome oder Edge, genehmigen oder verweigern die Anfrage basierend auf der Benutzerhistorie der Interaktion mit der Site und zeigen keine Eingabeaufforderungen an den Nutzer.

Beachten Sie, dass [Forschung des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigt, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Nutzer eine Website regelmäßig besucht, besteht sehr wenig Gefahr, dass ihre gespeicherten Daten, selbst im Best-effort-Modus, vom Browser gelöscht werden.

### Privates Surfen

Beachten Sie, dass im privaten Surfmodus (auch _Incognito_ in Chrome und _InPrivate_ in Edge genannt) die Browser möglicherweise andere Quoten anwenden und gespeicherte Daten normalerweise gelöscht werden, wenn der private Surfmodus beendet wird.

## Wie viel Daten können gespeichert werden?

### Cookies

Verschiedene Browser haben unterschiedliche Regeln darüber, wie viele Cookies pro Origin erlaubt sind und wie viel Speicherplatz diese Cookies auf der Festplatte beanspruchen können. Während Cookies nützlich sind, um einen kleinen gemeinsamen Zustand zwischen dem Browser und dem Webserver über die Navigation hinweg zu bewahren, wird davon abgeraten, Cookies zur Datenspeicherung im Browser zu verwenden. Cookies werden mit jeder einzelnen HTTP-Anfrage gesendet, sodass die Speicherung von Daten in Cookies, die auch durch eine andere Webtechnologie gespeichert werden könnten, unnötigerweise die Größe der Anfragen erhöht.

Da Cookies nicht zur Speicherung von Daten im Browser verwendet werden sollten, werden die Browserlimits für Cookie-Speicher hier nicht behandelt.

### Web Storage

Web Storage, das über die [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) Eigenschaften des [`window`](/de/docs/Web/API/Window) Objekts zugänglich ist, ist auf maximal 10 MiB Daten in allen Browsern begrenzt.

Browser können bis zu 5 MiB lokalen Speicher und 5 MiB Sitzungspeicher pro Origin speichern.

Sobald dieses Limit erreicht wird, werfen Browser eine `QuotaExceededError`-Ausnahme, die mit einem {{jsxref("Statements/try...catch","try...catch")}}-Block behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die durch andere Webtechnologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert), gespeichert werden, werden von einem speichermanagementsystem verwaltet, das spezifisch für jeden Browser ist.

Dieses System reguliert alle Daten, die eine Origin mit diesen APIs speichert.

Jeder Browser bestimmt mit einem ihm eigenen Mechanismus, welche maximale Menge an Speicher eine bestimmte Origin nutzen kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den eine Origin im Best-effort-Modus nutzen kann, der kleinere der beiden folgenden Werte:

- 10% der gesamten Plattengröße, auf der das Profil des Benutzers gespeichert ist.
- Oder 10 GiB, was das _Gruppenlimit_ ist, das Firefox auf alle Origins anwendet, die Teil der gleichen {{Glossary("eTLD", "eTLD+1 Domain")}} sind.

Origins, für die ein persistenter Speicher genehmigt wurde, können bis zu 50% der gesamten Plattengröße speichern, gedeckelt bei 8 TiB, und unterliegen nicht dem eTLD+1-Gruppenlimit.

Zum Beispiel, wenn das Gerät eine 500 GiB Festplatte hat, wird Firefox einer Origin erlauben, bis zu zu speichern:

- Im Best-effort-Modus: 10 GiB an Daten, was das eTLD+1-Gruppenlimit ist.
- Im persistenten Modus: 250 GiB, was 50% der gesamten Plattengröße ist.

Beachten Sie, dass es möglicherweise nicht tatsächlich möglich ist, dass die Origin ihr Limit erreicht, da es basierend auf der **gesamten** Festplattengröße berechnet wird, nicht auf dem derzeit verfügbaren Speicherplatz. Dies geschieht aus Sicherheitsgründen, um {{Glossary("fingerprinting", "Fingerprinting")}} zu vermeiden.

#### Chrome und Chromium-basierte Browser

In Browsern, die auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann eine Origin bis zu 60% der gesamten Plattengröße in sowohl persistenten als auch Best-effort-Modi speichern.

Zum Beispiel wird ein Browser bei einem Gerät mit einer 1 TiB-Festplatte erlauben, dass eine Origin bis zu 600 GiB nutzen kann.

Wie bei Firefox, da diese Quoten basierend auf der gesamten Festplattengröße berechnet werden, um Fingerprinting zu vermeiden, kann es sein, dass eine Origin ihr Limit tatsächlich nicht erreichen kann.

#### Safari

Ab macOS 14 und iOS 17 weist Safari jeder Origin einen Speicherplatz von etwa 20% der gesamten Plattengröße zu. Wenn der Nutzer es als Web-App auf dem Home-Bildschirm oder im Dock gespeichert hat, erhöht sich dieses Limit auf bis zu 60% der Plattengröße. Aus Datenschutzgründen haben {{Glossary("Same-origin_policy", "Cross-Origin")}}-Rahmen eine separate Quote, die etwa 1/10 ihrer Eltern beträgt.

Zum Beispiel wird ein macOS-Gerät mit einer 1 TiB-Festplatte jede Origin auf etwa 200 GiB begrenzen. Wenn der Nutzer eine Web-App im Dock speichert, wird dieser ein größeres Limit von etwa 600 GiB zugewiesen.

Wie andere Browser können die von der Quote durchgesetzten genauen Limits variieren, um Fingerprinting zu vermeiden. Zusätzlich erzwingt Safari auch eine Gesamtquote, dass gespeicherte Daten über alle Origins hinaus nicht mehr wachsen können: 80% der Plattengröße für jeden Browser und jede Web-App und 15% der Plattengröße für jede Nicht-Browser-App, die Webinhalte anzeigt. Weitere Informationen zu Safaris Speicherentscheidungen finden sich im [WebKit Blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari erhält eine Origin eine anfängliche 1 GiB-Quote. Sobald die Origin dieses Limit erreicht, bittet Safari den Nutzer um Erlaubnis, der Origin zu erlauben, mehr Daten zu speichern. Das passiert unabhängig davon, ob die Origin Daten im Best-effort-Modus oder persistentem Modus speichert.

## Wie prüft man den verfügbaren Speicherplatz?

Webentwickler können prüfen, wie viel Speicherplatz für ihre Origin verfügbar ist und wie viel von der Origin genutzt wird, mit der [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate)-Methode der [Storage API](/de/docs/Web/API/Storage_API).

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert zurückgibt, nicht den tatsächlichen Wert. Einige der von einer Origin gespeicherten Ressourcen können von anderen Origins stammen und Browser erhöhen absichtlich die Größe der datenübergreifenden Daten, wenn sie den gesamten Nutzungswert ausgeben.

## Was passiert, wenn eine Origin ihr Limit erreicht?

Der Versuch, mehr als die Quote einer Origin mit IndexedDB, Cache oder OPFS zu speichern, schlägt zum Beispiel mit einer `QuotaExceededError`-Ausnahme fehl.

Webentwickler sollten JavaScript, das in den Browserspeicher schreibt, innerhalb von {{jsxref("Statements/try...catch","try...catch")}}-Blöcken verpacken. Es wird auch empfohlen, Speicherplatz freizugeben, indem Daten vor dem Speichern neuer Daten gelöscht werden.

## Wann werden Daten gelöscht?

Das Löschen von Daten ist der Prozess, bei dem ein Browser die gespeicherten Daten einer Origin löscht.

Das Löschen von Daten kann in mehreren Fällen passieren:

- Wenn auf dem Gerät wenig Speicherplatz zur Verfügung steht, auch bekannt als _Speicherdruck_.
- Wenn alle im Browser gespeicherten Daten (über alle Origins hinweg) den Gesamtplatz überschreiten, den der Browser auf dem Gerät verwenden möchte.
- Proaktiv für Origins, die nicht regelmäßig genutzt werden, was nur in Safari passiert.

### Löschung bei Speicherdruck

Wenn auf einem Gerät wenig Speicherplatz zur Verfügung steht, bekannt als _Speicherdruck_, kann es passieren, dass der Browser weniger Speicherplatz zur Verfügung hat, als er benötigt, um alle gespeicherten Daten der Origin zu speichern.

Browser verwenden eine Least Recently Used (LRU)-Richtlinie, um mit diesem Szenario umzugehen. Daten von der am wenigsten kürzlich genutzten Origin werden gelöscht. Wenn der Speicherdruck fortbesteht, geht der Browser zur zweitwenig genutzten Origin über und so weiter, bis das Problem gelöst ist.

Dieser Löschmechanismus gilt nur für Origins, die nicht persistent sind und überspringt Origins, die mit der Verwendung von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) persistente Daten gewährt bekommen haben.

### Löschung bei Überschreiten des maximalen Speicherplatzes des Browsers

Einige Browser definieren eine maximale Speicherkapazität, die sie auf der Festplatte des Geräts verwenden können. Zum Beispiel verwendet Chrome derzeit maximal 80% der gesamten Plattengröße.

Diese maximale Speichergröße bedeutet, dass es einen Punkt geben kann, an dem die von allen kombinierten Origins gespeicherten Daten die maximale Größe überschreiten, ohne dass eine einzelne Origin über ihrer individuellen Quote liegt.

Wenn dies passiert, beginnt der Browser, Best-effort-Origins zu löschen, wie unter [Speicherdrucklöschung](#löschung_bei_speicherdruck) beschrieben.

### Proaktive Löschung

Safari löscht proaktiv Daten, wenn Cross-Site-Tracking-Verhinderung eingeschaltet ist. Wenn eine Origin keine Benutzerinteraktion, wie Klick oder Tap, in den letzten sieben Tagen der Browsernutzung hat, werden ihre von Skripten erstellten Daten gelöscht. Vom Server gesetzte Cookies sind von dieser Löschakion ausgeschlossen.

## Wie werden Daten gelöscht?

Wenn die Daten einer Origin vom Browser gelöscht werden, werden alle ihre Daten, nicht nur einzelne Teile, gleichzeitig gelöscht. Wenn die Origin Daten durch Verwendung von IndexedDB und der Cache-API gespeichert hatte, werden beispielsweise beide Datentypen gelöscht.

Das Entfernen nur einiger Daten der Origin könnte zu Konsistenzproblemen führen.

## Siehe auch

- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Permanenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quoten-Konzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
