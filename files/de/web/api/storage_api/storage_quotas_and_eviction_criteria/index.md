---
title: Speicherquoten und Auslöschungskriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können mehrere Technologien nutzen, um Daten im Browser des Benutzers zu speichern (d.h. auf der lokalen Festplatte des Geräts, das der Benutzer zur Ansicht der Website verwendet).

Die Menge an Daten, die Browser Websites zu speichern erlauben, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dieses Limit erreicht ist, unterscheiden sich von Browser zu Browser.

Dieser Artikel beschreibt die Webtechnologien, die zur Datenspeicherung genutzt werden können, die Quoten, die Browser implementiert haben, um Websites daran zu hindern, zu viele Daten zu speichern, und die Mechanismen, die sie verwenden, um Daten bei Bedarf zu löschen.

## Wie trennen Browser Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Orten, auch Buckets genannt, um das Risiko zu verringern, dass Benutzer im Internet verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _per origin_.

Der Begriff _{{Glossary("origin")}}_ ist deshalb wichtig, um diesen Artikel zu verstehen. Ein Origin wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zum selben Origin, da sie dasselbe Schema (`https`), denselben Hostnamen (`example.com`) und den Standardport haben.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für einen gesamten Origin, auch wenn dieser Origin verwendet wird, um mehrere Websites zu betreiben, wie z.B. `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die vom Origin gespeicherten Daten weiter in verschiedene Partitionen zu trennen, z.B. in Fällen, in denen ein Origin in einem {{HTMLElement('iframe')}}-Element in mehreren verschiedenen Third-Party-Origins geladen wird. Aus Gründen der Einfachheit geht dieser Artikel jedoch davon aus, dass Daten immer pro Origin gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien nutzen, um Daten im Browser zu speichern:

| Technologie                                                                                       | Beschreibung                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Cookies)                                                           | Ein HTTP-Cookie ist ein kleines Stück Daten, das der Webserver und der Browser einander senden, um zustandsbehaftete Informationen über die Navigation zwischen Seiten hinweg zu speichern.                                        |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                | Die Web Storage API bietet Mechanismen für Webseiten, um nur-String-Schlüssel/Wert-Paare zu speichern, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                    | IndexedDB ist eine Web-API zum Speichern großer Datenstrukturen im Browser und zum Indizieren dieser für hochleistungsfähige Suchen.                                                                                              |
| [Cache API](/de/docs/Web/API/Cache)                                                            | Die Cache API bietet einen persistenten Speichermechanismus für HTTP-Anfrage- und Antwort-Objektpaare, der genutzt wird, um Webseiten schneller zu laden.                                                                          |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das dem Origin der Seite privat ist und verwendet werden kann, um Verzeichnisse und Dateien zu lesen und zu schreiben.                                                                                 |

Beachten Sie, dass zusätzlich zu den oben genannten, Browser andere Arten von Daten im Browser für einen Origin speichern, wie z.B. das Caching von [WebAssembly](/de/docs/WebAssembly) Code.

## Bleiben browsergespeicherte Daten erhalten?

Daten für einen Origin können auf zwei Arten in einem Browser gespeichert werden, _persistent_ und _best-effort_:

- Best-effort: Dies ist die Standardmethode, wie Daten gespeichert werden. Best-effort-Daten bleiben erhalten, solange der Origin unter seinem Quota bleibt, das Gerät ausreichend Speicherplatz hat und der Benutzer nicht über die Einstellungen seines Browsers die Daten löscht.
- Persistent: Ein Origin kann sich dafür entscheiden, seine Daten persistent zu speichern. Auf diese Weise gespeicherte Daten werden nur gelöscht, wenn der Benutzer es entscheidet, indem er seine Browsereinstellungen verwendet. Um mehr zu erfahren, siehe [Wann werden Daten gelöscht](#when_is_data_evicted).

Die im Browser von einem Origin gespeicherten Daten sind standardmäßig best-effort. Bei der Verwendung von Webtechnologien wie IndexedDB oder Cache werden die Daten transparent gespeichert, ohne die Erlaubnis des Benutzers einzuholen. Ähnlich wird der Benutzer nicht unterbrochen, wenn der Browser best-effort-Daten löschen muss.

Wenn Entwickler aus irgend einem Grund persistenten Speicher benötigen (z.B. beim Erstellen einer Webanwendung, die sich auf kritische Daten verlässt, die sonst nirgendwo gespeichert sind), können sie dies tun, indem sie die Methode {{domxref("StorageManager.persist()", "navigator.storage.persist()")}} der {{domxref("Storage_API", "Storage API", "", "nocode")}} verwenden.

In Firefox wird der Benutzer benachrichtigt, wenn eine Seite wählt, persistenten Speicher zu verwenden, und eine Benutzeroberfläche-Popup angezeigt wird, um seine Erlaubnis zu erfragen.

Safari und die meisten auf Chromium basierenden Browser, wie Chrome oder Edge, genehmigen oder verweigern automatisch die Anfrage basierend auf der Interaktionshistorie des Benutzers mit der Seite und zeigen keine Aufforderungen an den Benutzer an.

Beachten Sie, dass [Forschungsteam von Chrome](https://web.dev/articles/persistent-storage) zeigt, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Benutzer eine Website regelmäßig besucht, besteht nur eine sehr geringe Chance, dass die gespeicherten Daten, selbst im best-effort-Modus, vom Browser gelöscht werden.

### Privates Browsen

Beachten Sie, dass im privaten Browsen-Modus (auch _Inkognito_ in Chrome und _InPrivate_ in Edge genannt), Browser möglicherweise andere Quoten anwenden und gespeicherte Daten normalerweise gelöscht werden, wenn der private Browsing-Modus endet.

## Wie viel Daten können gespeichert werden?

### Cookies

Verschiedene Browser haben unterschiedliche Regeln darüber, wie viele Cookies pro Origin erlaubt sind und wie viel Speicherplatz diese Cookies auf der Festplatte verwenden können. Während Cookies nützlich sind, um einige kleine Zustände zwischen dem Browser und dem Webserver über die Navigation zwischen Seiten hinweg zu bewahren, wird die Verwendung von Cookies für die Datenspeicherung im Browser nicht empfohlen. Cookies werden mit jeder HTTP-Anfrage gesendet, sodass das Speichern von Daten in Cookies, das mit einer anderen Webtechnologie gespeichert werden könnte, unnötig die Größe der Anfragen erhöht.

Da Cookies nicht zum Speichern von Daten im Browser verwendet werden sollten, sind Cookie-Speicherbegrenzungen hier nicht aufgeführt.

### Web Storage

Web Storage, das durch die Verwendung der {{domxref("Window.localStorage", "localStorage")}} und {{domxref("Window.sessionStorage", "sessionStorage")}} Eigenschaften des {{domxref("window")}} Objekts zugänglich ist, ist auf ein Maximum von 10 MiB an Daten in allen Browsern begrenzt.

Browser können bis zu 5 MiB lokalen Speicher und 5 MiB Sitzungsspeicher pro Origin speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError` Ausnahme, die mit einem {{jsxref("Statements/try...catch","try...catch")}} Block behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die mit anderen Webtechnologien gespeichert werden, wie IndexedDB, Cache API oder File System API (das das Origin Private File System definiert), werden von einem Speicherverwaltungssystem verwaltet, das spezifisch für jeden Browser ist.

Dieses System regelt alle Daten, die ein Origin mit diesen APIs speichert.

Jeder Browser bestimmt, unter Verwendung des Mechanismus, den er wählt, die maximale Menge an Speicher, die ein bestimmter Origin verwenden kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den ein Origin im Best-effort-Modus verwenden kann, das kleinere der folgenden:

- 10% der Gesamtgröße der Festplatte, auf der das Profil des Benutzers gespeichert ist.
- Oder 10 GiB, was das _Gruppenlimit_ ist, das Firefox auf alle Origins anwendet, die Teil derselben {{Glossary("eTLD", "eTLD+1 domain")}} sind.

Origins, denen persistenten Speicher gewährt wurde, können bis zu 50% der Gesamtgröße der Festplatte speichern, begrenzt auf 8 TiB, und unterliegen nicht dem eTLD+1 Gruppenlimit.

Zum Beispiel, wenn das Gerät eine 500 GiB Festplatte hat, erlaubt Firefox einem Origin, bis zu:

- Im Best-effort-Modus: 10 GiB Daten, was das eTLD+1 Gruppenlimit ist.
- Im Persistenten Modus: 250 GiB, was 50% der Gesamtgröße der Festplatte ist.

Beachten Sie, dass es tatsächlich nicht möglich sein könnte, dass der Origin sein Quota erreicht, da es basierend auf der **Gesamt**größe der Festplatte berechnet wird, nicht dem derzeit verfügbaren Speicherplatz. Dies wird aus Sicherheitsgründen gemacht, um {{Glossary("fingerprinting")}} zu vermeiden.

#### Chrome und Chromium-basierte Browser

In Browsern basierend auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/), einschließlich Chrome und Edge, kann ein Origin bis zu 60% der Gesamtgröße der Festplatte sowohl im persistenten als auch im Best-effort-Modus speichern.

Zum Beispiel, wenn das Gerät eine 1 TiB Festplatte hat, erlaubt der Browser einem Origin, bis zu 600 GiB zu verwenden.

Wie bei Firefox, da dieses Quota basierend auf der gesamten Festplattengröße berechnet wird, um Fingerprinting zu vermeiden, könnte es sein, dass ein Origin sein Quota tatsächlich nicht erreichen kann.

#### Safari

Ab macOS 14 und iOS 17 darf Safari bis zu etwa 20% des gesamten Speicherplatzes für jeden Origin zuweisen. Wenn der Benutzer es als Web-App auf dem Home-Bildschirm oder im Dock speichert, wird dieses Limit auf bis zu 60% der Festplattengröße erhöht. Aus Datenschutzgründen haben {{Glossary("Same-origin policy", "cross-origin")}} Frames ein separates Kontingent, das etwa 1/10 ihrer Eltern beträgt.

Zum Beispiel wird ein macOS-Gerät mit einer 1 TiB Festplatte jedes Origin auf etwa 200 GiB limitieren. Wenn der Benutzer eine Web-App in seinem Dock speichert, wird dieser ein größeres Limit von etwa 600 GiB zugewiesen.

Wie bei anderen Browsern können die genauen durch das Quota erzwungenen Grenzen variieren, um Fingerprinting zu vermeiden. Zusätzlich erzwingt Safari auch ein Gesamtlimit, dass gespeicherte Daten über alle Origins nicht übersteigen dürfen: 80% der Festplattengröße für jeden Browser und jede Web-App und 15% der Festplattengröße für jede Nicht-Browser-App, die Webinhalte anzeigt. Weitere Informationen zu Safaris Speicherpolitik finden Sie im [Webkit Blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari erhält ein Origin ein anfängliches Quota von 1 GiB. Sobald das Origin dieses Limit erreicht, bittet Safari den Benutzer um Erlaubnis, um dem Origin zu gestatten, mehr Daten zu speichern. Dies passiert, unabhängig davon ob das Origin Daten im Best-effort-Modus oder Persistent-Modus speichert.

## Wie prüft man den verfügbaren Speicherplatz?

Webentwickler können überprüfen, wie viel Platz für ihr Origin verfügbar ist und wie viel vom Origin verwendet wird, mit der Methode {{domxref("StorageManager.estimate()", "navigator.storage.estimate()")}} der {{domxref("Storage_API", "Storage API", "", "nocode")}}.

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert und nicht den tatsächlichen Wert zurückgibt. Einige der vom Origin gespeicherten Ressourcen können von anderen Origins stammen, und Browser polstern freiwillig die Größe der off-origin Daten, wenn der Gesamtwert der Nutzung gemeldet wird.

## Was passiert, wenn ein Origin sein Quota füllt?

Der Versuch, mehr als das Quota eines Origin zu speichern, z.B. durch IndexedDB, Cache oder OPFS, schlägt mit einer `QuotaExceededError` Ausnahme fehl.

Webentwickler sollten JavaScript, das in den Browserspeicher schreibt, in {{jsxref("Statements/try...catch","try...catch")}} Blöcke einwickeln. Es wird auch empfohlen, Speicherplatz freizugeben, indem man Daten löscht, bevor neue Daten gespeichert werden.

## Wann werden Daten gelöscht?

Das Löschen von Daten ist der Prozess, durch den ein Browser die vom Origin gespeicherten Daten löscht.

Datenlöschen kann in mehreren Fällen passieren:

- Wenn das Gerät wenig Speicherplatz hat, auch bekannt als _Speicherdruck_.
- Wenn alle im Browser gespeicherten Daten (über alle Origins hinweg) den gesamten Platz überschreiten, den der Browser auf dem Gerät verwenden möchte.
- Proaktiv, für Origins, die nicht regelmäßig genutzt werden, was nur in Safari passiert.

### Speicherdruck-Auslöschung

Wenn ein Gerät wenig Speicherplatz hat, auch bekannt als _Speicherdruck_, kann es zu einem Punkt kommen, an dem der Browser weniger verfügbaren Speicherplatz hat, als er benötigt, um alle vom Origin gespeicherten Daten zu speichern.

Browser verwenden eine Least Recently Used (LRU) Richtlinie, um mit diesem Szenario umzugehen. Die Daten des am wenigsten kürzlich verwendeten Origin werden gelöscht. Wenn der Speicherdruck anhält, geht der Browser zum zweit am wenigsten kürzlich verwendeten Origin über, und so weiter, bis das Problem gelöst ist.

Dieser Löschmechanismus gilt nur für Origins, die nicht persistent sind und überspringt Origins, denen Datenpersistenz durch die Verwendung von {{domxref("StorageManager.persist()", "navigator.storage.persist()")}} gewährt wurde.

### Überschreitung des maximalen Browserspeicherplatzes

Einige Browser definieren eine maximale Menge an Speicherplatz, die sie auf der Festplatte des Geräts nutzen können. Beispielsweise verwendet Chrome derzeit höchstens 80% der gesamten Festplattengröße.

Diese maximale Speichergröße bedeutet, dass es zu einem Punkt kommen kann, an dem die Daten aller kombinierten Origins die maximale Größe überschreiten, ohne dass ein Origin über seinem individuellen Quota liegt.

Wenn dies passiert, beginnt der Browser mit dem Löschen der Best-effort Origins, wie in [Speicherdruck-Auslöschung](#speicherdruck-auslöschung) beschrieben.

### Proaktive Auslöschung

Safari löscht Daten proaktiv, wenn die Verfolgungsvermeidung über Websites hinweg aktiviert ist. Wenn ein Origin in den letzten sieben Tagen der Browsernutzung keine Benutzerinteraktionen hat, wie Klicken oder Tippen, werden seine durch Skript erstellten Daten gelöscht. Vom Server gesetzte Cookies sind von dieser Löschung ausgenommen.

## Wie werden Daten gelöscht?

Wenn die Daten eines Origin vom Browser gelöscht werden, werden alle seine Daten gleichzeitig gelöscht, nicht nur Teile davon. Wenn der Origin beispielsweise durch die Verwendung von IndexedDB und der Cache API Daten gespeichert hat, dann werden beide Datentypen gelöscht.

Das Löschen nur einiger Daten des Origin könnte Konsistenzprobleme verursachen.

## Siehe auch

- [Storage for the web on web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistent storage on web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage and Quota Concepts](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
