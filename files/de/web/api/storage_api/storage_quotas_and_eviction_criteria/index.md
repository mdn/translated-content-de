---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können eine Reihe von Technologien nutzen, um Daten im Browser des Nutzers zu speichern (d.h. auf der lokalen Festplatte des Geräts, das der Nutzer zum Betrachten der Website verwendet).

Die Menge an Daten, die Browser erlauben, von Websites gespeichert zu werden, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dieses Limit erreicht ist, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die zur Datenspeicherung verwendet werden können, die Quoten, die Browser festlegen, um Websites daran zu hindern, zu viele Daten zu speichern, und die Mechanismen, die sie zum Löschen von Daten bei Bedarf verwenden.

## Wie trennen Browser die Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Orten, auch Buckets genannt, um das Risiko zu verringern, dass Nutzer über das Web verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _pro Ursprung_.

Der Begriff _{{Glossary("origin", "Ursprung")}}_ ist daher wichtig, um diesen Artikel zu verstehen. Ein Ursprung wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zum selben Ursprung, da sie dasselbe Schema (`https`), denselben Hostnamen (`example.com`) und den Standardport haben.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für einen gesamten Ursprung, selbst wenn dieser Ursprung verwendet wird, um mehrere Websites auszuführen, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die von einem Ursprung gespeicherten Daten in verschiedenen Partitionen weiter zu trennen, zum Beispiel in Fällen, in denen ein Ursprung in einem {{HTMLElement('iframe')}}-Element in mehreren verschiedenen Drittanbieterursprüngen geladen wird. Aus Gründen der Einfachheit wird in diesem Artikel jedoch angenommen, dass Daten immer pro Ursprung gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien nutzen, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Guides/Cookies)                                                      | Ein HTTP-Cookie ist ein kleines Datenstück, das der Webserver und der Browser sich gegenseitig senden, um Statusinformationen über die Navigation zwischen Seiten hinweg zu speichern.                                                                                 |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API bietet Mechanismen, damit Webseiten ausschließlich Schlüssel-/Wert-Paare als Zeichenfolgen speichern können, einschließlich [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API zum Speichern großer Datenstrukturen im Browser und deren Indizierung für hochleistungsfähiges Suchen.                                                                                                                                      |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen dauerhaften Speichermodul für HTTP-Anfrage- und Antwortobjektpaare, das genutzt wird, um Webseiten schneller zu laden.                                                                                                                      |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das für den Ursprung der Seite privat ist und zum Lesen und Schreiben von Verzeichnissen und Dateien genutzt werden kann.                                                                                                                 |

Beachten Sie, dass zusätzlich zu den oben genannten Browsern auch andere Arten von Daten für einen Ursprung im Browser gespeichert werden, wie z.B. Caching von [WebAssembly](/de/docs/WebAssembly)-Code.

## Bleiben die im Browser gespeicherten Daten bestehen?

Daten für einen Ursprung können auf zwei Arten in einem Browser gespeichert werden, _persistent_ und _best-effort_:

- Best-effort: Dies ist die Standardweise, wie Daten gespeichert werden. Best-effort-Daten bleiben bestehen, solange der Ursprung unter seiner Quote bleibt, das Gerät genügend Speicherplatz hat und der Nutzer sich nicht entscheidet, die Daten über die Einstellungen seines Browsers zu löschen.
- Persistent: Ein Ursprung kann sich entscheiden, seine Daten auf eine beständige Weise zu speichern. Auf diese Weise gespeicherte Daten werden nur gelöscht oder entfernt, wenn der Nutzer dies über die Einstellungen seines Browsers wählt. Um mehr zu erfahren, siehe [Wann werden Daten gelöscht](#wann_werden_daten_gelöscht).

Die im Browser von einem Ursprung gespeicherten Daten sind standardmäßig best-effort. Bei der Nutzung von Webtechnologien wie IndexedDB oder Cache werden die Daten transparent ohne die Erlaubnis des Nutzers gespeichert. Ebenso entfernt der Browser bei Bedarf best-effort-Daten, ohne den Nutzer zu unterbrechen.

Wenn Entwickler aus irgendeinem Grund beständigen Speicher benötigen (z.B. beim Erstellen einer Webanwendung, die sich auf kritische Daten verlässt, die anderswo nicht persistiert sind), können sie dies durch die Verwendung der Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) tun.

In Firefox wird der Nutzer benachrichtigt, wenn eine Website wählt, persistente Speicherung zu verwenden, indem ein UI-Popup angezeigt wird, das seine Zustimmung erfordert.

Safari und die meisten auf Chromium basierenden Browser, wie Chrome oder Edge, genehmigen oder verweigern die Anfrage automatisch basierend auf der Nutzerhistorie der Interaktion mit der Website und zeigen keine Aufforderungen an den Nutzer an.

Beachten Sie, dass [Forschung des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigt, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Nutzer eine Website regelmäßig besucht, besteht sehr wenig Wahrscheinlichkeit, dass deren gespeicherte Daten, selbst im best-effort-Modus, vom Browser entfernt werden.

### Privates Surfen

Beachten Sie, dass im privaten Surfen (auch _Inkognito_ in Chrome und _InPrivate_ in Edge genannt) Browser möglicherweise andere Quoten anwenden und gespeicherte Daten in der Regel gelöscht werden, wenn der private Browsing-Modus endet.

## Wie viele Daten können gespeichert werden?

### Cookies

Verschiedene Browser haben unterschiedliche Regeln hinsichtlich der Anzahl von erlaubten Cookies pro Ursprung und wie viel Speicherplatz diese Cookies auf der Festplatte nutzen können. Während Cookies nützlich sind, um einen kleinen gemeinsamen Zustand zwischen dem Browser und dem Webserver über die Navigation zwischen Seiten zu erhalten, wird die Nutzung von Cookies zur Speicherung von Daten im Browser nicht empfohlen. Cookies werden mit jeder einzelnen HTTP-Anfrage gesendet, daher erhöht das Speichern von Daten in Cookies, die mit einer anderen Webtechnologie gespeichert werden könnten, unnötig die Größe der Anfragen.

Da Cookies nicht zur Speicherung von Daten im Browser verwendet werden sollten, werden hier keine Cookie-Speichergrenzen behandelt.

### Web Storage

Web Storage, zugänglich über die [`localStorage`](/de/docs/Web/API/Window/localStorage)- und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage)-Eigenschaften des [`window`](/de/docs/Web/API/Window)-Objekts, ist auf maximal 10 MiB Daten in allen Browsern begrenzt.

Browser können bis zu 5 MiB lokalen Speicher und 5 MiB Sitzungsspeicher pro Ursprung speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError`-Ausnahme, die mit einem {{jsxref("Statements/try...catch","try...catch")}}-Block behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die mit anderen Webtechnologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert) gespeichert werden, werden von einem spezifischen Speichermanagementsystem jedes Browsers verwaltet.

Dieses System reguliert alle Daten, die ein Ursprung mit diesen APIs speichert.

Jeder Browser bestimmt, mit welchem Mechanismus auch immer er wählt, die maximale Menge an Speicher, die ein gegebener Ursprung nutzen kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den ein Ursprung im Best-effort-Modus nutzen kann, jeweils der kleinere von:

- 10% der Gesamtdiskgröße, auf der das Profil des Nutzers gespeichert ist.
- Oder 10 GiB, was das _Gruppenlimit_ ist, das Firefox auf alle Ursprünge anwendet, die Teil derselben {{Glossary("site", "Website")}} sind.

Ursprünge, für die beständige Speicherung gewährt wurde, können bis zu 50% der Gesamtdiskgröße speichern, begrenzt auf 8 TiB, und unterliegen nicht dem Gruppenlimit.

Zum Beispiel, wenn das Gerät eine 500 GiB Festplatte hat, erlaubt Firefox einem Ursprung, bis zu:

- Im Best-effort-Modus: 10 GiB Daten, was das Gruppenlimit ist.
- Im Persistenzmodus: 250 GiB, was 50% der Gesamtdiskgröße entspricht.

Beachten Sie, dass es möglicherweise nicht möglich ist, das Kontingent des Ursprungs tatsächlich zu erreichen, da es auf der **Gesamtgröße** der Festplatte und nicht auf dem derzeit verfügbaren Speicherplatz berechnet wird. Dies wird aus Sicherheitsgründen getan, um {{Glossary("fingerprinting", "Fingerabdruckerkennung")}} zu vermeiden.

#### Chrome und Chromium-basierte Browser

In Browsern, die auf dem [Chromium Open-Source-Projekt](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann ein Ursprung bis zu 60% der Gesamtdiskgröße sowohl im Best-effort- als auch im Persistenzmodus speichern.

Zum Beispiel wird in einem Gerät mit einer 1 TiB Festplatte der Browser einem Ursprung die Nutzung von bis zu 600 GiB erlauben.

Wie bei Firefox könnte es, weil dieses Kontingent basierend auf der Gesamtdiskgröße berechnet wird, um Fingerabdruckerkennung zu vermeiden, sein, dass ein Ursprung nicht tatsächlich in der Lage ist, sein Kontingent zu erreichen.

#### Safari

WebKit setzt unterschiedliche Quoten für _Browser-Apps_ und für andere Anwendungen, die Webinhalte einbetten können (zum Beispiel Apps, die WKWebView verwenden). Eine Browser-App ist eine Anwendung, die als Standardbrowser des Systems eingestellt werden kann. Dazu gehören Safari und einige andere WebKit-basierte Drittanbieterbrowser.

Ab macOS 14 und iOS 17:

- Für WebKit-basierte Browser-Apps kann jeder Ursprung bis zu etwa 60% der gesamten Festplatte speichern.
- Für andere WebKit-basierte Apps, die Webinhalte einbetten, kann jeder Ursprung bis zu etwa 15% der gesamten Festplatte speichern. Wenn der Nutzer die Website als Web-App auf dem Home-Bildschirm oder im Dock gespeichert hat, verwendet sie das gleiche Ursprungskontingent wie die Browser-App (etwa 60% des Speicherplatzes).

Zum Beispiel wird ein macOS-Gerät mit einem 1 TiB Laufwerk jedes Herkunft innerhalb des Safari-Webbrowsers auf etwa 600 GiB beschränken. Ursprünge, die in der eingebetteten WebView einer anderen App laufen, erhalten ein geringeres Limit von etwa 150 GiB.

Aus Datenschutzgründen haben {{Glossary("Same-origin_policy", "cross-origin")}}-Frames ein separates Kontingent, das etwa 1/10 ihrer Eltern ausmacht.

Wie andere Browser können die genauen Grenzen des durch das Kontingent durchgesetzten Speichers variieren, um Fingerabdruckerkennung zu vermeiden.

WebKit erzwingt auch ein allgemeines Kontingent, das gespeicherte Daten über alle Ursprünge nicht über 80% der Festplattengröße für Browser-Apps und 20% der Festplattengröße für Nicht-Browser-Apps, die Webinhalte anzeigen, wachsen darf.

Weitere Informationen zu WebKit-Speicherpolitiken finden Sie auf dem [WebKit-Blog](https://webkit.org/blog/14403/updates-to-storage-policy/).

In älteren Safari-Versionen erhält ein Ursprung ein anfängliches 1 GiB-Kontingent. Sobald der Ursprung dieses Limit erreicht, fragt Safari den Nutzer um Erlaubnis, ob der Ursprung mehr Daten speichern darf. Dies passiert unabhängig davon, ob der Ursprung Daten im Best-effort- oder im Persistenzmodus speichert.

> [!NOTE]
> Auf iOS/iPadOS mussten Drittanbieter-Browser historisch gesehen WebKit verwenden, so dass diese WebKit-Quoten sowohl für sie als auch für Safari gelten. In der EU (iOS 17.4+) erlaubt Apple alternative Browser-Engines; in solchen Fällen gelten die eigenen Richtlinien der Browser-Engines anstelle der von WebKit.
>
> Auf macOS verwenden Nicht-WebKit-Browser (z.B. Chromium/Firefox) ihre eigenen Speicherpolitiken.
>
> Weitere Informationen zur EU-spezifischen Information finden Sie auf der [Apple Developer Support Seite](https://developer.apple.com/support/alternative-browser-engines).

## Wie kann man den verfügbaren Speicherplatz überprüfen?

Webentwickler können mit der Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API) überprüfen, wie viel Speicherplatz für ihren Ursprung verfügbar ist und wie viel von diesem Ursprung genutzt wird.

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert und nicht den tatsächlichen Wert zurückgibt. Einige der Ressourcen, die von einem Ursprung gespeichert werden, können von anderen Ursprüngen kommen und Browser polstern die Größe der ursprungsübergreifenden Daten absichtlich, wenn sie den gesamten Nutzungswert melden.

## Was passiert, wenn ein Ursprung sein Kontingent ausschöpft?

Der Versuch, mehr als das Kontingent eines Ursprungs mit IndexedDB, Cache oder OPFS zu speichern, schlägt mit einer `QuotaExceededError`-Ausnahme fehl.

Webentwickler sollten JavaScript, das in der Browser-Speicherung schreibt, in {{jsxref("Statements/try...catch","try...catch")}}-Blöcke einwickeln. Es wird auch empfohlen, Speicherplatz freizugeben, indem Daten gelöscht werden, bevor neue Daten gespeichert werden.

## Wann werden Daten entfernt?

Datenentfernung ist der Prozess, durch den ein Browser die gespeicherten Daten eines Ursprungs löscht.

Datenentfernung kann in verschiedenen Fällen stattfinden:

- Wenn das Gerät einen niedrigen Speicherstand erreicht, auch bekannt als _Storage Pressure_.
- Wenn alle im Browser gespeicherten Daten (über alle Ursprünge hinweg) die Gesamtmenge an Speicherplatz überschreiten, die der Browser auf dem Gerät verwenden möchte.
- Proaktiv, für Ursprünge, die nicht regelmäßig genutzt werden, was nur in Safari passiert.

### Storage Pressure Eviction

Wenn ein Gerät einen niedrigen Speicherstand hat, auch bekannt als _Storage Pressure_, kann es dazu kommen, dass der Browser weniger verfügbaren Platz hat, als er benötigt, um alle gespeicherten Daten des Ursprungs zu speichern.

Browser verwenden eine Least Recently Used (LRU)-Policy, um mit diesem Szenario umzugehen. Die Daten des am wenigsten kürzlich genutzten Ursprungs werden gelöscht. Wenn der Speicherplatz weiterhin unter Druck steht, fährt der Browser mit dem zweitwenigsten kürzlich genutzten Ursprung fort und so weiter, bis das Problem behoben ist.

Dieser Löschmechanismus gilt nur für nicht-beständige Ursprünge und überspringt Ursprünge, für die durch die Nutzung von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) dauerhafte Datenspeicherung gewährt wurde.

### Überschreiten der maximalen Speichernutzung des Browsers

Einige Browser definieren einen maximalen Speicherplatz, den sie auf der Festplatte des Geräts verwenden können. Beispielsweise verwendet Chrome derzeit höchstens 80% der Gesamtdiskgröße.

Diese maximale Speichergröße bedeutet, dass es einen Punkt geben kann, an dem die von allen kombinierten Ursprüngen gespeicherten Daten die maximale Größe überschreiten, ohne dass ein einzelner Ursprung über seinem individuellen Kontingent liegt.

Wenn dies geschieht, beginnt der Browser, Best-effort-Ursprünge wie im Abschnitt [Storage Pressure Eviction](#storage_pressure_eviction) beschrieben zu entfernen.

### Proaktive Entfernung

Safari entfernt proaktiv Daten, wenn die ursprungsübergreifende Verfolgungsprävention aktiviert ist. Wenn ein Ursprung in den letzten sieben Tagen der Browsernutzung keine Nutzerinteraktion, wie Klicken oder Tippen, hat, werden seine Daten, die durch Skript erstellt wurden, gelöscht. Serverseitig gesetzte Cookies sind von dieser Entfernung ausgeschlossen.

## Wie werden Daten gelöscht?

Wenn die Daten eines Ursprungs vom Browser entfernt werden, werden alle seine Daten, nicht nur Teile davon, gleichzeitig gelöscht. Wenn der Ursprung zum Beispiel Daten sowohl mit IndexedDB als auch mit der Cache API gespeichert hat, werden beide Datentypen gelöscht.

Nur einen Teil der Daten eines Ursprungs zu löschen, könnte zu Konsistenzproblemen führen.

## Siehe auch

- [Speicherung für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quota-Konzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
