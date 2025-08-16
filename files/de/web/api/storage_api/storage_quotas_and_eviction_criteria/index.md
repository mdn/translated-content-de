---
title: Speicherquoten und Löschkriterien
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
l10n:
  sourceCommit: 9870164d7e4ba835db0ac2df8e9abac869c6d9ca
---

{{DefaultAPISidebar("Storage")}}

Webentwickler können verschiedene Technologien nutzen, um Daten im Browser des Nutzers zu speichern (d.h. auf der lokalen Festplatte des Geräts, mit dem der Nutzer die Website betrachtet).

Die Menge an Daten, die Browser Websites erlauben zu speichern, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dieses Limit erreicht ist, unterscheiden sich zwischen den Browsern.

Dieser Artikel beschreibt die Webtechnologien, die verwendet werden können, um Daten zu speichern, die Quoten, die Browser implementieren, um zu verhindern, dass Websites zu viele Daten speichern, und die Mechanismen, die sie verwenden, um Daten zu löschen, wenn dies nötig ist.

## Wie trennen Browser Daten von verschiedenen Websites?

Browser speichern die Daten von Websites an verschiedenen Orten, auch "Buckets" genannt, um das Risiko zu verringern, dass Nutzer im Web verfolgt werden. In den meisten Fällen verwalten Browser gespeicherte Daten _pro Herkunft_.

Der Begriff _{{Glossary("origin", "Herkunft")}}_ ist daher wichtig, um diesen Artikel zu verstehen. Eine Herkunft wird durch ein Schema (wie HTTPS), einen Hostnamen und einen Port definiert. Zum Beispiel gehören `https://example.com` und `https://example.com/app/index.html` zur gleichen Herkunft, da sie das gleiche Schema (`https`), den gleichen Hostnamen (`example.com`) und den Standardport haben.

Die in diesem Artikel beschriebenen Quoten und Löschkriterien gelten für eine gesamte Herkunft, auch wenn diese Herkunft verwendet wird, um mehrere Websites zu betreiben, wie `https://example.com/site1/` und `https://example.com/site2/`.

In einigen Fällen können Browser jedoch entscheiden, die von einer Herkunft gespeicherten Daten weiter zu separieren, z.B. in Fällen, in denen eine Herkunft innerhalb eines {{HTMLElement('iframe')}}-Elements in mehreren verschiedenen Drittanbieter-Herkünften geladen wird. Aus Vereinfachungsgründen geht dieser Artikel jedoch davon aus, dass Daten immer pro Herkunft gespeichert werden.

## Welche Technologien speichern Daten im Browser?

Webentwickler können die folgenden Webtechnologien nutzen, um Daten im Browser zu speichern:

| Technologie                                                                                      | Beschreibung                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/de/docs/Web/HTTP/Guides/Cookies)                                                      | Ein HTTP-Cookie ist ein kleines Datenstück, das der Webserver und der Browser gegenseitig senden, um zustandsbezogene Informationen über die Navigation hinweg zu speichern.                                                                       |
| [Web Storage](/de/docs/Web/API/Web_Storage_API)                                                  | Die Web Storage API stellt Mechanismen bereit, damit Webseiten String-Only-Schlüssel-/Wert-Paare speichern können, darunter [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/de/docs/Web/API/IndexedDB_API)                                                      | IndexedDB ist eine Web-API zum Speichern großer Datenstrukturen im Browser und zum Indizieren für hochperformante Suchanfragen.                                                                                                                    |
| [Cache API](/de/docs/Web/API/Cache)                                                              | Die Cache API bietet einen persistenten Speichermodus für HTTP-Anfrage- und Antwort-Objektpaare, der genutzt wird, um Webseiten schneller zu laden.                                                                                                |
| [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS bietet ein Dateisystem, das der Herkunft der Seite privat ist und zum Lesen und Schreiben von Verzeichnissen und Dateien genutzt werden kann.                                                                                                 |

Beachten Sie, dass Browser neben den oben genannten auch andere Datentypen für eine Herkunft im Browser speichern, wie etwa das Caching von [WebAssembly](/de/docs/WebAssembly)-Code.

## Persistieren im Browser gespeicherte Daten?

Daten für eine Herkunft können auf zwei Arten in einem Browser gespeichert werden, _persistent_ und _best-effort_:

- Best-effort: Dies ist die Art und Weise, wie Daten standardmäßig gespeichert werden. Best-effort-Daten bleiben erhalten, solange die Herkunft unterhalb ihrer Quote liegt, das Gerät über genügend Speicherplatz verfügt und der Nutzer nicht entscheidet, die Daten über die Browsereinstellungen zu löschen.
- Persistent: Eine Herkunft kann sich dafür entscheiden, ihre Daten persistent zu speichern. Auf diese Weise gespeicherte Daten werden nur gelöscht oder entfernt, wenn der Benutzer dies über die Browsereinstellungen wählt. Mehr darüber erfahren Sie unter [Wann werden Daten gelöscht?](#when_is_data_evicted).

Die von einer Herkunft im Browser gespeicherten Daten sind standardmäßig best-effort. Wenn Sie Webtechnologien wie IndexedDB oder Cache verwenden, werden die Daten transparent gespeichert, ohne die Erlaubnis des Nutzers einzuholen. Ebenso, wenn der Browser best-effort-Daten löschen muss, geschieht dies ohne Unterbrechung des Nutzers.

Wenn Entwickler aus irgendeinem Grund persistenten Speicher benötigen (z.B. beim Erstellen einer Web-App, die auf kritische Daten angewiesen ist, die nirgendwo anders gespeichert werden), können sie dies mit der Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) der [Storage API](/de/docs/Web/API/Storage_API) tun.

In Firefox wird der Nutzer benachrichtigt, wenn eine Seite beschließt, persistenten Speicher zu verwenden, und es wird ein UI-Popup angezeigt, dass um Erlaubnis bittet.

Safari und die meisten Chromium-basierten Browser, wie Chrome oder Edge, genehmigen oder verweigern die Anfrage automatisch basierend auf dem Interaktionsverlauf des Nutzers mit der Website und zeigen dem Nutzer keine Aufforderung an.

Beachten Sie, dass [Forschung des Chrome-Teams](https://web.dev/articles/persistent-storage) zeigt, dass Daten sehr selten vom Browser gelöscht werden. Wenn ein Nutzer regelmäßig eine Website besucht, besteht kaum eine Chance, dass deren gespeicherte Daten, selbst im Best-Effort-Modus, vom Browser gelöscht werden.

### Privates Browsen

Beachten Sie, dass im Modus für privates Surfen (auch als _Inkognito_ in Chrome und _InPrivate_ in Edge bezeichnet) Browser möglicherweise unterschiedliche Quoten anwenden und gespeicherte Daten normalerweise gelöscht werden, wenn der private Browsing-Modus beendet wird.

## Wie viele Daten können gespeichert werden?

### Cookies

Unterschiedliche Browser haben unterschiedliche Regeln dafür, wie viele Cookies pro Herkunft zulässig sind und wie viel Speicherplatz diese Cookies auf der Festplatte verwenden können. Während Cookies nützlich sind, um einige kleine zustandsbezogene Informationen zwischen dem Browser und dem Webserver beim Navigieren zwischen Seiten zu bewahren, wird die Verwendung von Cookies zum Speichern von Daten im Browser nicht empfohlen. Cookies werden mit jeder HTTP-Anfrage gesendet, sodass das Speichern von Daten in Cookies, die durch eine andere Webtechnologie gespeichert werden könnten, die Größe der Anfragen unnötig erhöht.

Da Cookies nicht zum Speichern von Daten im Browser verwendet werden sollten, sind die Browsergrenzen für den Cookie-Speicher hier nicht behandelt.

### Web Storage

Web Storage, das durch die Verwendung der Eigenschaften [`localStorage`](/de/docs/Web/API/Window/localStorage) und [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) des [`window`](/de/docs/Web/API/Window) Objekts zugänglich ist, ist auf maximal 10 MiB Daten in allen Browsern begrenzt.

Browser können bis zu 5 MiB lokalen Speicher und 5 MiB Sitzungsspeicher pro Herkunft speichern.

Sobald dieses Limit erreicht ist, werfen Browser eine `QuotaExceededError`-Ausnahme, die durch die Verwendung eines {{jsxref("Statements/try...catch","try...catch")}} Blocks behandelt werden sollte.

### Andere Webtechnologien

Die Daten, die mithilfe anderer Webtechnologien wie IndexedDB, Cache API oder File System API (die das Origin Private File System definiert) gespeichert werden, werden von einem Speicherverwaltungssystem verwaltet, das spezifisch für jeden Browser ist.

Dieses System reguliert alle Daten, die eine Herkunft unter Verwendung dieser APIs speichert.

Jeder Browser bestimmt, mit welchem Mechanismus auch immer er es wählt, die maximale Menge an Speicher, die eine gegebene Herkunft verwenden kann.

#### Firefox

In Firefox ist der maximale Speicherplatz, den eine Herkunft im Best-Effort-Modus verwenden kann, der kleinere von:

- 10% der gesamten Festplattengröße, auf der das Profil des Nutzers gespeichert ist.
- Oder 10 GiB, was das _Gruppenlimit_ ist, das Firefox auf alle Herkünfte anwendet, die Teil derselben {{Glossary("eTLD", "eTLD+1-Domain")}} sind.

Herkünfte, denen persistent Speicherung gewährt wurde, können bis zu 50% der gesamten Festplattengröße speichern, begrenzt auf 8 TiB, und unterliegen nicht dem eTLD+1-Gruppenlimit.

Zum Beispiel, wenn das Gerät eine 500 GiB Festplatte hat, erlaubt Firefox einer Herkunft zu speichern bis zu:

- Im Best-Effort-Modus: 10 GiB Daten, was das eTLD+1 Gruppenlimit ist.
- Im persistenten Modus: 250 GiB, was 50% der gesamten Festplattengröße sind.

Beachten Sie, dass es möglicherweise nicht tatsächlich möglich ist, dass die Herkunft ihr Kontingent erreicht, da es basierend auf der **gesamt**en Festplattengröße berechnet wird, nicht dem derzeit verfügbaren Speicherplatz. Dies geschieht aus Sicherheitsgründen, um {{Glossary("fingerprinting", "Fingerprinting")}} zu vermeiden.

#### Chrome und Chromium-basierte Browser

In Browsern, die auf dem [Chromium open-source project](https://www.chromium.org/Home/) basieren, einschließlich Chrome und Edge, kann eine Herkunft bis zu 60% der gesamten Festplattengröße sowohl im persistenten als auch im Best-Effort-Modus speichern.

Zum Beispiel, wenn das Gerät eine 1 TiB Festplatte hat, erlaubt der Browser einer Herkunft bis zu 600 GiB zu nutzen.

Wie bei Firefox könnte eine Herkunft aufgrund der auf der Gesamtgröße der Festplatte berechneten Quoten, um Fingerprinting zu vermeiden, tatsächlich nicht in der Lage sein, ihr Kontingent zu erreichen.

#### Safari

Webkit setzt unterschiedliche Quoten für _Browser-Apps_ und für andere Anwendungen, die Webinhalte einbetten können (z.B. Apps, die WKWebView verwenden). Eine Browser-App ist eine Anwendung, die als Systemstandardbrowser gesetzt werden kann. Dazu gehören Safari und einige andere WebKit-basierte Drittanbieter-Browser.

Ab macOS 14 und iOS 17:

- Für Webkit-basierte Browser-Apps kann jede Herkunft bis zu etwa 60% der gesamten Festplatte speichern.
- Für andere Webkit-basierte Apps, die Webinhalte einbetten, kann jede Herkunft bis zu etwa 15% der gesamten Festplatte speichern. Wenn der Nutzer die Website als Web-App auf dem Home-Bildschirm oder im Dock gespeichert hat, verwendet sie das gleiche Herkunfts-Kontingent wie die Browser-App (etwa 60% des Speicherplatzes).

Zum Beispiel wird ein macOS-Gerät mit einer 1 TiB-Festplatte jede Herkunft innerhalb des Safari-Webbrowsers auf etwa 600 GiB begrenzen. Herkünfte, die in einem eingebetteten WebView einer anderen App laufen, erhalten ein geringeres Limit von etwa 150 GiB.

Aus Datenschutzgründen haben {{Glossary("Same-origin_policy", "cross-origin")}} Frames ein separates Kontingent, das ungefähr 1/10 ihrer Eltern beträgt.

Wie bei anderen Browsern können die genauen durch das Kontingent durchgesetzten Grenzen variieren, um Fingerprinting zu vermeiden.

WebKit erzwingt auch ein Gesamtkontingent, das gespeicherte Daten über alle Herkünfte hinweg nicht über 80% des Speicherplatzes für Browser-Apps und 20% des Speicherplatzes für Nicht-Browser-Apps, die Webinhalte anzeigen, hinauswachsen kann.

Weitere Informationen zu WebKits Speicherpolitik finden Sie auf dem [WebKit-Blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In früheren Versionen von Safari wird einer Herkunft ein anfängliches 1 GiB-Kontingent zugewiesen. Sobald die Herkunft dieses Limit erreicht, fragt Safari den Nutzer um Erlaubnis, der Herkunft zu gestatten, mehr Daten zu speichern. Dies geschieht unabhängig davon, ob die Herkunft Daten im Best-Effort-Modus oder im persistenten Modus speichert.

> [!NOTE]
> Auf iOS/iPadOS mussten Drittanbieter-Browser historisch WebKit verwenden, sodass diese WebKit-Quoten für sie ebenso wie für Safari gelten. In der EU (iOS 17.4+) erlaubt Apple alternative Browser-Engines; in solchen Fällen kommen stattdessen die eigenen Engine-Politiken dieser Browser zur Anwendung, anstatt die von WebKit.
>
> Auf macOS verwenden Nicht-WebKit-Browser (z.B. Chromium/Firefox) ihre eigene Speicherpolitik.
>
> Weitere Informationen zur EU-spezifischen Informationen finden Sie auf der [Apple Developer Support Page](https://developer.apple.com/support/alternative-browser-engines).

## Wie kann man den verfügbaren Speicherplatz überprüfen?

Webentwickler können überprüfen, wie viel Platz für ihre Herkunft verfügbar ist und wie viel von der Herkunft genutzt wird, mit der Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API).

Beachten Sie, dass diese Methode nur den geschätzten Nutzungswert zurückgibt, nicht den tatsächlichen Wert. Einige der Ressourcen, die von einer Herkunft gespeichert werden, können von anderen Herkünften stammen und Browser polstern freiwillig die Größe der Cross-Origin-Daten, wenn sie den gesamten Nutzungswert melden.

## Was passiert, wenn eine Herkunft ihr Kontingent füllt?

Der Versuch, mehr als das Kontingent einer Herkunft zu speichern, beispielsweise mit IndexedDB, Cache oder OPFS, schlägt mit einer `QuotaExceededError`-Ausnahme fehl.

Webentwickler sollten JavaScript, das in Browser-Speicher schreibt, in {{jsxref("Statements/try...catch","try...catch")}} Blöcken einschließen. Es wird auch empfohlen, Speicherplatz freizugeben, indem Daten gelöscht werden, bevor neue Daten gespeichert werden.

## Wann werden Daten gelöscht?

Die Datenlöschung ist der Prozess, bei dem ein Browser die von einer Herkunft gespeicherten Daten löscht.

Datenlöschung kann in mehreren Fällen auftreten:

- Wenn das Gerät wenig Speicherplatz hat, auch bekannt als _Speicherdruck_.
- Wenn alle im Browser gespeicherten Daten (über alle Herkünfte hinweg) die Gesamtmenge an Speicherplatz überschreiten, die der Browser auf dem Gerät zu verwenden bereit ist.
- Proaktiv, für Herkünfte, die nicht regelmäßig verwendet werden, was nur in Safari passiert.

### Speicherdruck-Löschung

Wenn ein Gerät wenig Speicherplatz hat, auch bekannt als _Speicherdruck_, kann es einen Punkt geben, an dem der Browser weniger verfügbaren Speicherplatz hat, als er benötigt, um alle von der Herkunft gespeicherten Daten zu speichern.

Browser verwenden eine Least Recently Used (LRU) Richtlinie, um mit diesem Szenario umzugehen. Die Daten von der zuletzt genutzten Herkunft werden gelöscht. Wenn der Speicherdruck weiter anhält, bewegt sich der Browser zur zweitwenigst genutzten Herkunft usw., bis das Problem gelöst ist.

Dieser Löschmechanismus gilt nur für Herkünfte, die nicht persistent sind, und überspringt Herkünfte, denen Datenpersistenz durch die Verwendung von [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) gewährt wurde.

### Maximaler Speicher des Browsers überschritten Löschung

Einige Browser definieren eine maximale Speichergröße, die sie auf der Festplatte des Geräts verwenden können. Beispielsweise nutzt Chrome derzeit maximal 80% der gesamten Festplattengröße.

Diese maximale Speichergröße bedeutet, dass es einen Punkt geben kann, an dem die von allen kombinierten Herkünften gespeicherten Daten die maximale Größe ohne eine einzelne Herkunft, die über ihr individuelles Kontingent hinausgeht, überschreiten.

In diesem Fall beginnt der Browser mit der Löschung von Best-Effort-Herkünften, wie im Abschnitt [Speicherdruck-Löschung](#speicherdruck-löschung) beschrieben.

### Proaktive Löschung

Safari löscht Daten proaktiv, wenn die Verhinderung von Cross-Site-Tracking aktiviert ist. Wenn eine Herkunft in den letzten sieben Tagen der Browsing-Nutzung keine Nutzerinteraktion hatte, wie Klicken oder Tippen, werden ihre durch Skripte erstellten Daten gelöscht. Vom Server gesetzte Cookies sind von dieser Löschung ausgenommen.

## Wie werden Daten gelöscht?

Wenn die Daten einer Herkunft durch den Browser gelöscht werden, wird gleichzeitig der gesamte, nicht nur ein Teil ihrer Daten gelöscht. Wenn die Herkunft beispielsweise Daten mit IndexedDB und der Cache-API gespeichert hat, werden beide Datentypen gelöscht.

Nur einige Daten der Herkunft zu löschen, könnte Konsistenzprobleme verursachen.

## Siehe auch

- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Permanenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quota Konzept](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
