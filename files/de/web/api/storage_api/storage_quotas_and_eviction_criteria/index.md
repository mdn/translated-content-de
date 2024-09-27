---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können eine Reihe von Technologien nutzen, um Daten im Browser des Nutzers zu speichern (d.h. auf der lokalen Festplatte des Geräts, das der Nutzer verwendet, um die Webseite zu betrachten).

Die Menge an Daten, die Browser Webseiten speichern lassen, und die Mechanismen, die sie nutzen, um Daten zu löschen, wenn dieses Limit erreicht ist, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die zum Speichern von Daten verwendet werden können, die Quoten, die Browser verwenden, um zu verhindern, dass Webseiten zu viele Daten speichern, und die Mechanismen, die sie nutzen, um Daten zu löschen, wenn nötig.

## Wie trennen Browser Daten von verschiedenen Webseiten?

Browser speichern Daten von Webseiten an verschiedenen Orten, auch Buckets genannt, um das Risiko zu verringern, dass Nutzer im Web verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _pro Ursprung_.

Der Begriff _[Ursprung](/de/docs/Glossary/origin)_ ist daher wichtig, um diesen Artikel zu verstehen. Ein Ursprung wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zum gleichen Ursprung, weil sie dasselbe Schema (`https`), denselben Hostnamen (`example.com`) und den Standardport haben.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für einen gesamten Ursprung, auch wenn dieser Ursprung genutzt wird, um mehrere Webseiten zu betreiben, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die Daten, die von einem Ursprung gespeichert werden, weiter zu trennen, zum Beispiel in Fällen, in denen ein Ursprung innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren verschiedenen Drittanbieter-Ursprüngen geladen wird. Aus Gründen der Einfachheit wird in diesem Artikel jedoch angenommen, dass Daten immer pro Ursprung gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien nutzen, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Cookies)                                                             | Ein HTTP-Cookie ist ein kleines Datenpaket, das der Webserver und der Browser einander senden, um zustandsbehaftete Informationen über die Seitennavigation hinweg zu speichern.                                                              |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API bietet Mechanismen für Webseiten, um nur-String Schlüssel-/Wert-Paare zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API zum Speichern großer Datenstrukturen im Browser und zum Indexieren für hochleistungsfähige Suche.                                                                                                                  |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen dauerhaften Speichermechanismus für HTTP-Anfrage- und Antwortobjektpaare, der verwendet wird, um Webseiten schneller zu laden.                                                                                     |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das privat für den Ursprung der Seite ist und zum Lesen und Schreiben von Verzeichnissen und Dateien verwendet werden kann.                                                                                      |

Beachten Sie, dass zusätzlich zu den oben genannten, Browser andere Arten von Daten für einen Ursprung im Browser speichern, wie die Zwischenspeicherung von [WebAssembly](/de/docs/WebAssembly)-Code.

## Bleiben browsergespeicherte Daten erhalten?

Daten für einen Ursprung können auf zwei Arten in einem Browser gespeichert werden, _persistent_ und _Best-Effort_:

- Best-Effort: Dies ist die Art, wie Daten standardmäßig gespeichert werden. Best-Effort-Daten bleiben erhalten, solange der Ursprung unter seiner Quote bleibt, das Gerät genügend Speicherplatz hat und der Nutzer sich nicht entscheidet, die Daten über die Einstellungen seines Browsers zu löschen.
- Persistent: Ein Ursprung kann sich dafür entscheiden, seine Daten auf eine dauerhafte Weise zu speichern. Daten, die auf diese Weise gespeichert werden, werden nur gelöscht, wenn der Nutzer es möchte, indem er die Einstellungen seines Browsers benutzt. Um mehr zu erfahren, siehe [Wann werden Daten gelöscht](#when_is_data_evicted).

Die im Browser von einem Ursprung gespeicherten Daten sind standardmäßig auf Best-Effort eingestellt. Wenn Webtechnologien wie IndexedDB oder Cache verwendet werden, werden die Daten transparent gespeichert, ohne dass die Zustimmung des Nutzers eingeholt wird. Ebenso wird, wenn der Browser Best-Effort-Daten löschen muss, dies durchgeführt, ohne den Nutzer zu unterbrechen.

Wenn Entwickler aus irgendeinem Grund dauerhaften Speicher benötigen (z.B. beim Erstellen einer Web-App, die auf kritischen Daten beruht, die nirgendwo anders gespeichert sind), können sie dies durch die Nutzung der Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) tun.

In Firefox wird der Nutzer benachrichtigt, wenn eine Seite beschließt, dauerhaften Speicher zu verwenden, indem ein UI-Popup angezeigt wird, das um Erlaubnis bittet.

Safari und die meisten auf Chromium basierenden Browser, wie Chrome oder Edge, genehmigen oder lehnen die Anfrage basierend auf der Nutzungsverlauf des Nutzers mit der Seite automatisch ab und zeigen keine Aufforderungen an.

Beachten Sie, dass [Untersuchungen des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigen, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Nutzer regelmäßig eine Webseite besucht, besteht sehr wenig Wahrscheinlichkeit, dass die gespeicherten Daten, selbst im Best-Effort-Modus, vom Browser gelöscht werden.

### Privates Surfen

Beachten Sie, dass im privaten Surfen (auch _Inkognito_ in Chrome und _InPrivate_ in Edge genannt), Browser möglicherweise andere Quoten anwenden und gespeicherte Daten normalerweise gelöscht werden, wenn der Modus des privaten Surfens endet.

## Wie viel Daten können gespeichert werden?

### Cookies

Verschiedene Browser haben unterschiedliche Regeln darüber, wie viele Cookies pro Ursprung erlaubt sind und wie viel Platz diese Cookies auf der Festplatte verwenden können. Während Cookies nützlich sind, um einen kleinen gemeinsamen Zustand zwischen dem Browser und dem Webserver über die Seitennavigation hinweg zu bewahren, wird die Verwendung von Cookies zum Speichern von Daten im Browser nicht empfohlen. Cookies werden mit jeder HTTP-Anfrage gesendet, sodass das Speichern von Daten in Cookies, die durch die Verwendung einer anderen Webtechnologie gespeichert werden könnten, die Größe der Anfragen unnötig erhöht.

Da Cookies nicht zum Speichern von Daten im Browser verwendet werden sollten, werden Cookie-Speichergrenzen hier nicht behandelt.

### Web Storage

Web Storage, das über die [`localStorage`](/de/docs/Web/API/Window/localStorage)- und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)-Eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts zugegriffen werden kann, ist auf maximal 10 MiB Daten in allen Browsern beschränkt.

Browser können bis zu 5 MiB lokaler Speicherung und 5 MiB Sitzungsspeicherung pro Ursprung speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError`-Ausnahme, die durch die Verwendung eines {{jsxref("Statements/try...catch","try...catch")}}-Blocks behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die durch andere Webtechnologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert) gespeichert werden, werden durch ein speicherverwaltungssystem verwaltet, das spezifisch für jeden Browser ist.

Dieses System regelt alle Daten, die ein Ursprung unter Verwendung dieser APIs speichert.

Jeder Browser bestimmt mit welchem Mechanismus auch immer er wählt, die maximale Menge an Speicher, die ein gegebener Ursprung verwenden kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den ein Ursprung im Best-Effort-Modus verwenden kann, der jeweils kleinere von:

- 10% der gesamten Festplattengröße, auf der das Profil des Nutzers gespeichert ist.
- Oder 10 GiB, das ist das _Gruppenlimit_, das Firefox auf alle Ursprünge anwendet, die Teil derselben [eTLD+1-Domain](/de/docs/Glossary/eTLD) sind.

Ursprünge, für die dauerhafter Speicherplatz gewährt wurde, können bis zu 50% der gesamten Festplattengröße speicher, mit einer Obergrenze von 8 TiB, und unterliegen nicht dem eTLD+1-Gruppenlimit.

Wenn das Gerät zum Beispiel eine 500 GiB Festplatte hat, erlaubt Firefox einem Ursprung, bis zu zu speichern:

- Im Best-Effort-Modus: 10 GiB Daten, was das eTLD+1-Gruppenlimit ist.
- Im persistenten Modus: 250 GiB, was 50% der gesamten Festplattengröße ist.

Beachten Sie, dass es tatsächlich nicht möglich sein könnte, dass der Ursprung seine Quote erreicht, da sie auf Basis der gesamten Festplattengröße, nicht des aktuell verfügbaren Speicherplatzes berechnet wird. Dies wird aus Sicherheitsgründen gemacht, um [Fingerabdrücke](/de/docs/Glossary/fingerprinting) zu vermeiden.

#### Chrome und Chromium-basierte Browser

In Browsern, die auf dem [Chromium-Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann ein Ursprung bis zu 60% der gesamten Festplattengröße sowohl im persistenten als auch im Best-Effort-Modus speichern.

Wenn das Gerät zum Beispiel eine 1 TiB Festplatte hat, erlaubt der Browser einem Ursprung, bis zu 600 GiB zu nutzen.

Wie bei Firefox, weil diese Quote auf Basis der gesamten Festplattengröße berechnet wird, um Fingerabdrücke zu vermeiden, könnte ein Ursprung tatsächlich nicht in der Lage sein, seine Quote zu erreichen.

#### Safari

Ab macOS 14 und iOS 17 erlaubt Safari bis zu etwa 20% des gesamten Festplattenspeichers für jeden Ursprung. Wenn der Nutzer es als Web-App auf dem Home-Bildschirm oder im Dock gespeichert hat, wird dieses Limit auf bis zu 60% der Festplattengröße erhöht. Aus Datenschutzgründen haben [Cross-Origin](/de/docs/Glossary/Same-origin_policy) Frames ein separates Kontingent, das etwa 1/10 ihrer Eltern beträgt.

Ein macOS-Gerät mit einem 1 TiB Laufwerk wird zum Beispiel jedes Ursprungs auf rund 200 GiB beschränken. Wenn der Nutzer eine Web-App im Dock speichert, erhält diese ein höheres Limit von etwa 600 GiB.

Wie andere Browser können die genauen, durch die Quote durchgesetzten Grenzen variieren, um Fingerabdrücke zu vermeiden. Zusätzlich erzwingt Safari auch ein Gesamtkontingent, dass gespeicherte Daten über alle Ursprünge hinweg nicht übersteigen können: 80% der Festplattengröße für jeden Browser und jede Web-App, und 15% der Festplattengröße für jede Nicht-Browser-App, die Web-Inhalte anzeigt. Mehr Infos zu Safaris Speicherpolitik finden sich auf dem [Webkit-Blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari erhält ein Ursprung ein anfängliches 1 GiB Kontingent. Sobald der Ursprung dieses Limit erreicht, fragt Safari den Nutzer um Erlaubnis, den Ursprung mehr Daten speichern zu lassen. Dies passiert unabhängig davon, ob der Ursprung Daten im Best-Effort-Modus oder im persistenten Modus speichert.

## Wie überprüft man den verfügbaren Speicherplatz?

Webentwickler können überprüfen, wie viel Speicherplatz für ihren Ursprung verfügbar ist und wie viel vom Ursprung genutzt wird, mit der Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API).

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert zurückgibt, nicht den tatsächlichen Wert. Einige der Ressource, die von einem Ursprung gespeichert sind, können von anderen Ursprüngen stammen und Browser polstern die Größe der Cross-Origin-Daten freiwillig, wenn sie den gesamten Nutzungswert berichten.

## Was passiert, wenn ein Ursprung seine Quote voll ausnutzt?

Der Versuch, mehr als die Quote eines Ursprungs zu speichern, schlägt z. B. bei der Verwendung von IndexedDB, Cache oder OPFS mit einer `QuotaExceededError`-Ausnahme fehl.

Webentwickler sollten JavaScript, das in den Browserspeicher schreibt, innerhalb von {{jsxref("Statements/try...catch","try...catch")}}-Blöcken einbetten. Das Freigeben von Speicherplatz durch Löschen von Daten, bevor neue Daten gespeichert werden, wird ebenfalls empfohlen.

## Wann werden Daten gelöscht?

Das Löschen von Daten ist der Prozess, bei dem ein Browser die gespeicherten Daten eines Ursprungs löscht.

Datenlöschung kann in mehreren Fällen passieren:

- Wenn auf dem Gerät wenig Speicherplatz zur Verfügung steht, auch als _Speicherdruck_ bekannt.
- Wenn alle im Browser gespeicherten Daten (über alle Ursprünge hinweg) den insgesamt verfügbaren Speicherplatz, den der Browser auf dem Gerät nutzen möchte, überschreiten.
- Proaktiv, für Ursprünge, die nicht regelmäßig genutzt werden, was nur in Safari vorkommt.

### Löschung bei Speicherdruck

Wenn ein Gerät wenig Speicherplatz hat, auch als _Speicherdruck_ bekannt, kann es einen Punkt geben, an dem der Browser weniger Platz zur Verfügung hat, als benötigt wird, um alle Daten des Ursprungs zu speichern.

Browser verwenden eine Last Recently Used (LRU) Richtlinie, um mit diesem Szenario umzugehen. Die Daten vom zuletzt am wenigsten verwendeten Ursprung werden gelöscht. Wenn der Speicherdruck anhält, geht der Browser zum zweit am wenigsten verwendeten Ursprung über und so weiter, bis das Problem gelöst ist.

Dieser Löschmechanismus gilt nur für Ursprünge, die nicht persistent sind und überspringt Ursprünge, denen die Speicherung von Daten durch die Verwendung von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) gewährt wurde.

### Löschung beim Überschreiten des maximalen Browser-Speicherplatzes

Einige Browser definieren einen maximalen Speicherplatz, den sie auf der Festplatte des Geräts nutzen können. Zum Beispiel verwendet Chrome derzeit höchstens 80% der gesamten Festplattengröße.

Dieser maximale Speicherplatz bedeutet, dass es einen Punkt geben kann, an dem die von allen kombinierten Ursprüngen gespeicherten Daten die maximale Größe überschreiten, ohne dass ein einzelner Ursprung seine individuelle Quote überschreitet.

Wenn dies passiert, beginnt der Browser, Best-Effort-Ursprünge wie in [Löschung bei Speicherdruck](#löschung_bei_speicherdruck) beschrieben zu löschen.

### Proaktive Löschung

Safari löscht proaktiv Daten, wenn Tracking-Schutz zwischen Websites aktiviert ist. Wenn ein Ursprung in den letzten sieben Tagen der Browsernutzung keine Nutzerinteraktion, wie Klicken oder Tippen, hatte, werden seine durch Skripte erstellten Daten gelöscht. Vom Server gesetzte Cookies sind von dieser Löschung ausgenommen.

## Wie werden Daten gelöscht?

Wenn die Daten eines Ursprungs vom Browser gelöscht werden, werden all seine Daten vollständig gelöscht, nicht nur Teile davon. Wenn der Ursprung zum Beispiel Daten mittels IndexedDB und der Cache API gespeichert hatte, dann werden beide Datentypen gelöscht.

Das Löschen nur einiger Daten des Ursprungs könnte Konsistenzprobleme verursachen.

## Siehe auch

- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Dauerhafter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quotenkonzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
