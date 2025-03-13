---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verknüpft ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Erstens, da die Anfrage nicht an den Ursprungsserver gesendet werden muss, gilt: Je näher der Client und der Cache beieinander liegen, desto schneller ist die Antwort. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Wenn eine Antwort wiederverwendbar ist, muss der Ursprungsserver die Anfrage nicht verarbeiten – er muss also die Anfrage nicht parsen und routen, die Sitzung basierend auf dem Cookie erneut herstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Dies reduziert die Belastung des Servers.

Ein ordnungsgemäßer Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP-Caching](https://httpwg.org/specs/rfc9111.html)-Spezifikation gibt es zwei Haupttypen von Caches: **private Caches** und **gemeinsame Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen bestimmten Client gebunden ist – typischerweise ein Browsercache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen Cache als einem privaten Cache gespeichert werden, könnten andere Benutzer diese Inhalte abrufen – was zu einer unbeabsichtigten Informationsweitergabe führen könnte.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber die Anwesenheit eines Cookies bedeutet nicht immer, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Gemeinsamer Cache

Der gemeinsame Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die unter Benutzern geteilt werden können. Und gemeinsame Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Funktion der Zugriffskontrolle implementieren einige Proxys Caching, um den Datenverkehr aus dem Netzwerk zu reduzieren. Dies wird normalerweise nicht vom Dienstentwickler verwaltet, daher muss es durch geeignete HTTP-Header usw. gesteuert werden. In der Vergangenheit haben jedoch veraltete Proxy-Cache-Implementierungen – wie Implementierungen, die den HTTP-Caching-Standard nicht richtig verstehen – oft Probleme für Entwickler verursacht.

**Kitchen-sink-Header** wie der folgende werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikations-Direktiven wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, da HTTPS üblicher geworden ist und die Client/Server-Kommunikation verschlüsselt ist, können Proxy-Caches im Pfad in vielen Fällen nur noch eine Antwort tunneln und nicht als Cache agieren. In diesem Szenario besteht daher kein Grund zur Besorgnis über veraltete Proxy-Cache-Implementierungen, die die Antwort nicht einmal sehen können.

Andererseits, wenn ein {{Glossary("TLS", "TLS")}}-Bridge-Proxy alle Kommunikationen in einer Person-in-the-Middle-Weise entschlüsselt, indem er ein Zertifikat einer von der Organisation verwalteten {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} auf dem PC installiert, und Zugriffskontrollen durchführt, ist es möglich, den Inhalt der Antwort zu sehen und sie zu cachen. Da jedoch [CT (Zertifikattransparenz)](/de/docs/Web/Security/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate zulassen, die mit einem SCT (signierter Zertifikatstempel) ausgestellt wurden, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung besteht keine Notwendigkeit, dass der Proxy-Cache "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden explizit von Dienstentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient bereitzustellen. Beispiele sind Reverse Proxies, CDNs und Service Workers in Kombination mit der Cache-API.

Die Eigenschaften verwalteter Caches variieren je nach eingesetztem Produkt. In den meisten Fällen kann das Verhalten des Caches über den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards gesteuert werden.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keinen Weg, einen Cache ausdrücklich zu löschen – aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Das ermöglicht eine proaktivere Caching-Strategie.

Es ist auch möglich, die standardmäßigen HTTP-Caching-Spezifikationsprotokolle zugunsten der expliziten Manipulation zu ignorieren. Zum Beispiel kann das Folgende angegeben werden, um sich aus einem privaten Cache oder Proxy-Cache abzumelden, während Sie Ihre eigene Strategie verwenden, um nur in einem verwalteten Cache zu cachen.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache die VCL (Varnish Configuration Language, eine Art von {{Glossary("DSL/Domain_specific_language", "DSL")}}), um das Cache-Speicherverhalten zu steuern, während Service Worker in Kombination mit der Cache-API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, wenn ein verwalteter Cache eine `no-store`-Direktive absichtlich ignoriert, besteht keine Notwendigkeit, ihn als "nicht konform" mit dem Standard zu betrachten. Was Sie tun sollten, ist, auf die "Kitchen-sink-Header" zu verzichten und die Dokumentation des von Ihnen verwendeten verwalteten Cache-Mechanismus genau zu lesen, um sicherzustellen, dass Sie den Cache auf die vom gewählten Mechanismus bereitgestellten Arten ordnungsgemäß steuern.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zur Standardisierung dieser Header zu definieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines gemeinsamen (Proxy-)Caches, eines Reverse-Proxy-Caches und eines gemeinsamen (verwalteten) Caches in einem CDN, der zum Cache des Ursprungsservers führt](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist so konzipiert, dass es so viel wie möglich cached. Selbst wenn also kein `Cache-Control` angegeben ist, werden Antworten gespeichert und wiederverwendet, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

Zum Beispiel, nehmen wir folgende Antwort. Diese Antwort wurde zuletzt vor einem Jahr aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die ein ganzes Jahr lang nicht aktualisiert wurden, für einige Zeit danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz fehlendem `max-age`) und verwendet sie eine Zeit lang weiter. Wie lange sie verwendet wird, hängt von der Implementierung ab, aber die Spezifikation empfiehlt etwa 10 % (in diesem Fall 0,1 Jahr) der Zeit nach dem Speichern.

Heuristisches Caching ist eine Lösung, die vor der weit verbreiteten Unterstützung von `Cache-Control` kam, und grundsätzlich sollten alle Antworten explizit einen `Cache-Control`-Header angeben.

## Frisch und veraltet basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **veraltet**. Der _frische_ Zustand gibt normalerweise an, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _veraltete_ Zustand bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch ist und wann sie veraltet ist, ist das **Alter**. Im HTTP-Kontext ist das Alter die Zeit, die seit der Generierung der Antwort vergangen ist. Dies ähnelt dem {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

Nehmen Sie folgende Beispielantwort (604800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort gespeichert hat, berechnet die Zeit, die seit der Generierung der Antwort vergangen ist, und verwendet das Ergebnis als das _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche ist, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche ist, ist die Antwort _veraltet_.

Solange die gespeicherte Antwort frisch bleibt, wird sie zur Erfüllung von Clientanfragen verwendet.

Wenn eine Antwort in einem gemeinsamen Cache gespeichert ist, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Setzt man das obige Beispiel fort: Wenn der gemeinsame Cache die Antwort für einen Tag gespeichert hat, würde der gemeinsame Cache folgende Antwort an nachfolgende Clientanfragen senden.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800
Age: 86400

<!doctype html>
…
```

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden frisch ist, der Unterschied zwischen dem `max-age` der Antwort und dem `Age`.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header spezifiziert.

Der `Expires`-Header gibt die Lebensdauer des Caches mit einer expliziten Zeit an, anstatt eine verstrichene Zeit anzugeben.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Jedoch ist das Zeitformat schwer zu parsen, viele Implementierungsfehler wurden gefunden, und es ist möglich, Probleme durch absichtliches Verschieben der Systemuhr zu verursachen; daher wurde `max-age` — um eine verstrichene Zeit anzugeben — für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, wird `max-age` bevorzugt. Daher ist es nicht nötig, `Expires` anzugeben, da HTTP/1.1 weit verbreitet ist.

## Vary

Der Weg, auf dem Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortkörper            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber die Inhalte von Antworten sind nicht immer gleich, selbst wenn sie die gleiche URL haben. Besonders wenn eine Inhaltsverhandlung stattfindet, kann die Antwort vom Server von den Werten der Anforderungsheader `Accept`, `Accept-Language` und `Accept-Encoding` abhängen.

Zum Beispiel, für englische Inhalte, die mit einem `Accept-Language: en`-Header zurückgegeben und gecachet wurden, ist es unerwünscht, diese gecachte Antwort dann für Anfragen mit einem `Accept-Language: ja`-Header zu verwenden. In diesem Fall können Sie dazu führen, dass Antworten separat — basierend auf der Sprache — gecachet werden, indem Sie `Accept-Language` zum Wert des `Vary`-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das bewirkt, dass der Cache basierend auf einer Kombination aus der Antwort-URL und dem Anforderungsheader `Accept-Language` erkannt wird — anstatt nur basierend auf der Antwort-URL.

| URL                              | `Accept-Language` | Antwortkörper            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Außerdem, wenn Sie eine Inhaltsoptimierung bereitstellen (zum Beispiel für responsives Design) basierend auf dem Benutzeragenten, könnten Sie in Versuchung geraten, den `User-Agent` im Wert des `Vary`-Headers einzuschließen. Allerdings hat der `User-Agent`-Header in der Regel sehr viele Varianten, was die Chance drastisch verringert, dass der Cache wiederverwendet wird. Wenn möglich, erwägen Sie stattdessen, das Verhalten basierend auf Feature-Erkennung zu variieren, anstatt basierend auf dem `User-Agent`-Header.

Für Anwendungen, die Cookies verwenden, um zu verhindern, dass andere gecachte personalisierte Inhalte wiederverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` anzugeben.

## Validierung

Veraltete Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um eine veraltete Antwort durch Nachfragen am Ursprungsserver in eine frische Antwort zu verwandeln. Dies nennt man **Validierung**, oder manchmal **Revalidierung**.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die einen `If-Modified-Since`- oder `If-None-Match`-Anforderungsheader enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 generiert und hat eine `max-age` von einer Stunde, sodass Sie wissen, dass sie bis 23:22:22 frisch ist.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600

<!doctype html>
…
```

Um 23:22:22 wird die Antwort veraltet und der Cache kann nicht wiederverwendet werden. Die folgende Anfrage zeigt, dass ein Client eine Anfrage mit einem `If-Modified-Since`-Anforderungsheader sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn sich der Inhalt seit der angegebenen Zeit nicht geändert hat.

Da diese Antwort nur "keine Änderung" bedeutet, gibt es keinen Antwortkörper – es gibt nur einen Statuscode – sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Bei Erhalt dieser Antwort versetzt der Client die gespeicherte veraltete Antwort wieder in den frischen Zustand und kann sie während der verbleibenden Stunde wiederverwenden.

Der Server kann die Änderungszeit aus dem Betriebssystem-Dateisystem abrufen, was relativ leicht zu tun ist, wenn es sich um statische Dateiserver handelt. Es gibt jedoch einige Probleme, zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Dateiaufzeichnungszeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Antwortheader als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Antwortheaders ist ein willkürlicher Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, daher sind die Server frei, den Wert basierend auf beliebigen Mitteln festzulegen — wie beispielsweise einem Hash des Körperinhalts oder einer Versionsnummer.

Als Beispiel, wenn ein Hashwert für den `ETag`-Header verwendet wird und der Hashwert der Ressource `index.html` `33a64df5` ist, sieht die Antwort wie folgt aus:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
ETag: "33a64df5"
Cache-Control: max-age=3600

<!doctype html>
…
```

Wenn diese Antwort veraltet ist, nimmt der Client den Wert des `ETag`-Antwortheaders der gecachten Antwort und setzt ihn in den `If-None-Match`-Anforderungsheader, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der Wert des `ETag`-Headers, den er für die angeforderte Ressource bestimmt, derselbe ist wie der `If-None-Match`-Wert in der Anfrage.

Wenn der Server jedoch bestimmt, dass die angeforderte Ressource nun einen anderen `ETag`-Wert aufweisen sollte, wird der Server stattdessen mit einem `200 OK` und der neuesten Version der Ressource antworten.

> [!NOTE]
> RFC9110 bevorzugt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich. Während der Cache-Neuvalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, hat `If-None-Match` Vorrang als Validierer. Wenn Sie nur das Caching betrachten, könnten Sie denken, dass `Last-Modified` unnötig ist. Allerdings ist `Last-Modified` nicht nur nützlich für Caching; es ist ein Standard-HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Crawlern, um die Crawl-Frequenz anzupassen, und für andere verschiedene Zwecke. Daher wäre es im Hinblick auf das gesamte HTTP-Ökosystem besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwingung der Revalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, aber stattdessen immer den neuesten Inhalt vom Server abrufen möchten, können Sie die `no-cache`-Direktive verwenden, um die Validierung zu erzwingen.

Indem Sie `Cache-Control: no-cache` der Antwort zusammen mit `Last-Modified` und `ETag` hinzufügen – wie unten gezeigt – erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder erhält eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
ETag: deadbeef
Cache-Control: no-cache

<!doctype html>
…
```

Es wird oft behauptet, dass die Kombination von `max-age=0` und `must-revalidate` dieselbe Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort veraltet ist, und `must-revalidate` bedeutet, dass sie nicht ohne Revalidierung wiederverwendet werden darf, wenn sie einmal veraltet ist – in Kombination sehen die Semantiken also wie die gleichen wie bei `no-cache` aus.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache`-Direktive richtig zu handhaben – und so wurde als Workaround `max-age=0` verwendet.

Aber jetzt, da HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund, diese Kombination von `max-age=0` und `must-revalidate` zu verwenden – Sie sollten stattdessen einfach `no-cache` verwenden.

## Nicht Cachen

Die `no-cache`-Direktive verhindert nicht das Speichern von Antworten, sondern verhindert stattdessen die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht wollen, dass eine Antwort in irgendeinem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen bedeutet eine „nicht speichern“-Anforderung in der Praxis jedoch die folgenden Umstände:

- Die Antwort soll aus Datenschutzgründen von niemand anderem als dem spezifischen Client gespeichert werden.
- Es sollen immer aktuelle Informationen bereitgestellt werden.
- Unklar, was bei veralteten Implementierungen geschehen könnte.

Unter diesen Umständen ist `no-store` nicht immer die am besten geeignete Direktive.

Die folgenden Abschnitte befassen sich mit den Umständen im Detail.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar wird.

In einem solchen Fall wird durch die Verwendung der `private`-Direktive die personalisierte Antwort nur mit dem spezifischen Client gespeichert und nicht an einen anderen Benutzer des Caches weitergegeben.

```http
Cache-Control: private
```

In einem solchen Fall muss, selbst wenn `no-store` angegeben wird, auch `private` angegeben werden.

### Immer aktuelle Inhalte bereitstellen

Die `no-store`-Direktive verhindert, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für die gleiche URL.

Mit anderen Worten, wenn bereits eine alte Antwort für eine bestimmte URL gespeichert ist, verhindert die Rückgabe von `no-store` nicht die Wiederverwendung der alten Antwort.

Jedoch wird durch eine `no-cache`-Direktive der Client gezwungen, vor der Wiederverwendung einer gespeicherten Antwort eine Validierungsanfrage zu senden.

```http
Cache-Control: no-cache
```

Wenn der Server bedingte Anfragen nicht unterstützt, können Sie den Client zwingen, den Server jedes Mal zu kontaktieren und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, können Sie sogenannte „kitchen-sink headers“ wie die folgenden verwenden.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative für den Umgang mit solchen veralteten Implementierungen zu verwenden, und es ist kein Problem, wenn `no-cache` von Anfang an angegeben wird, da der Server die Anfrage immer erhält.

Wenn es sich um den gemeinsamen Cache handelt, über den Sie sich Sorgen machen, können Sie sicherstellen, dass unbeabsichtigtes Caching verhindert wird, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Möglicherweise denken Sie, dass das Hinzufügen von `no-store` ein guter Weg wäre, um sich vom Caching abzumelden.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu gewähren, da Sie viele Vorteile von HTTP und Browsern verlieren, einschließlich des „Back/Forward“-Cache des Browsers.

Daher sollten Sie, um die Vorteile des vollständigen Funktionsumfangs der Webplattform zu nutzen, `no-cache` in Kombination mit `private` bevorzugen.

## Neuladen und erzwungenes Neuladen

Die Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Die **Neuladen**- und **erzwungenes Neuladen**-Aktionen sind gängige Beispiele für die Validierung, die von der Browserseite aus durchgeführt wird.

### Neuladen

Um ein Wiederherstellen aus Fensterbeschädigungen oder ein Aktualisieren auf die neueste Version der Ressource durchzuführen, bieten Browser eine Neuladefunktion für Benutzer an.

Eine vereinfachte Ansicht der HTTP-Anfrage, die während eines Browser-Neuladens gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich zu obigem aus; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0`-Direktive in der Anfrage spezifiziert „Wiederverwendung von Antworten mit einem Alter von 0 oder weniger“ – sodass zwischengespeicherte Antworten tatsächlich nicht wiederverwendet werden.

Daher wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten wird auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard beschrieben und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus auf `no-cache` angewendet wird (beachten Sie, dass `reload` nicht der richtige Modus für diesen Fall ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neuladen

Browser verwenden `max-age=0` während des Neuladens aus Gründen der Rückwärtskompatibilität – da viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden. `no-cache` reicht jedoch jetzt in diesem Anwendungsfall aus, und **erzwungenes Neuladen** ist eine zusätzliche Möglichkeit, um zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser-**erzwungenen Neuladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich zu obigem aus; die Anfragen von Safari sehen etwas anders aus.)

Da dies keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie von dem Ursprungsserver ein `200 OK` erhalten.

Dieses Verhalten wird auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard beschrieben und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus auf `reload` (beachten Sie, dass es nicht `force-reload` ist) aufgerufen wird:

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung der Revalidierung

Inhalte, die sich nie ändern, sollten eine lange `max-age` durch Cache-Busting erhalten – das heißt, indem eine Versionsnummer, ein Hashwert usw. in die Anforderungs-URL aufgenommen wird.

Wenn der Benutzer jedoch aktualisiert, wird eine Revalidierungsanfrage gesendet, obwohl der Server weiß, dass der Inhalt unveränderlich ist.

Um das zu verhindern, kann die `immutable`-Direktive verwendet werden, um ausdrücklich anzugeben, dass keine Revalidierung erforderlich ist, da sich der Inhalt niemals ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Dies verhindert unnötige Nevalidierungen während des Neuladens.

Beachten Sie, dass anstatt diese Direktive zu implementieren, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass während des Neuladens keine Nevalidierung für Unterressourcen durchgeführt wird.

## Löschen gespeicherter Antworten

Es gibt keine Möglichkeit, Antworten auf einem Zwischenspeicher-Server zu löschen, die mit einer langen `max-age` gespeichert wurden.

Stellen Sie sich vor, die folgende Antwort von `https://example.com/` wurde gespeichert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Sie möchten diese Antwort möglicherweise überschreiben, sobald sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert ist – da aufgrund des Caching keine weiteren Anfragen den Server erreichen.

Eine der in der Spezifikation erwähnten Methoden besteht darin, eine Anfrage für die gleiche URL mit einer unsicheren Methode wie `POST` zu senden, aber für viele Clients ist dies schwer zu tun.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Header und der Direktivwert können verwendet werden, um Browser-Caches zu leeren – hat jedoch keine Auswirkungen auf Zwischen-Caches. Andernfalls bleiben Antworten im Browser-Cache, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell eine Neuladung, ein erzwungenes Neuladen oder eine Verlaufslöschung durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server die Kontrolle über eine URL nicht verlieren möchte – zum Beispiel im Fall, dass eine Ressource häufig aktualisiert wird – sollten Sie `no-cache` hinzufügen, damit der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Anfragenzusammenbruch

Der geteilte Cache befindet sich hauptsächlich vor dem Ursprungsserver und soll den Datenverkehr zum Ursprungsserver reduzieren.

Wenn also mehrere identische Anfragen gleichzeitig bei einem geteilten Cache eintreffen, wird der Zwischen-Cache im Namen von sich selbst eine einzige Anfrage an den Ursprung weiterleiten, die dann das Ergebnis für alle Clients wiederverwenden kann. Dies nennt man _**Anfragenzusammenbruch**_.

Ein Anfragenzusammenbruch tritt auf, wenn Anfragen gleichzeitig eintreffen, sodass selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, es wiederverwendet wird.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie im Zusammenbruch geteilt wird, sollten Sie die `private`-Direktive hinzufügen:

![Anfragenzusammenbruch, dargestellt als mehrere Clients, die GET-Anfragen senden, und ein Cache, der sie zu einem GET an den Ursprung zusammenfasst. Der Ursprungsserver antwortet mit einem 200 OK, das der Cache an alle Clients zurückgibt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Häufige Cache-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites können durch eine Kombination weniger Muster abgedeckt werden.

Dieser Abschnitt beschreibt die gängigen Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten für Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach „nicht cachen“, sondern implizites Caching gemäß dem sogenannten „heuristischen Caching“.

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, alle Antworten explizit mit einem Standard-`Cache-Control`-Header zu versehen.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es gängige Praxis, den Standardwert von `Cache-Control` auf `no-cache` festzulegen:

```http
Cache-Control: no-cache
```

Wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss `private` ebenfalls angegeben werden, um die Weitergabe an andere Benutzer zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache Busting

Die Ressourcen, die sich am besten für Caching eignen, sind statische unveränderliche Dateien, deren Inhalte sich nie ändern. Und für Ressourcen, die sich _doch_ ändern, ist es eine häufige Praxis, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, damit die URL-Einheit für einen längeren Zeitraum gecacht werden kann.

Als Beispiel betrachten wir das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

Im modernen Web-Development werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung voranschreitet. Auch wenn die Versionen von JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind, kann die Anzeige fehlschlagen.

Das obige HTML macht es daher schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie das JavaScript und CSS mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hashwert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten gezeigt.

```plain
# version in filename
bundle.v123.js

# version in query
bundle.js?v=123

# hash in filename
bundle.YsAIAAAA-QG4G6kCMAMBAAAAAAAoK.js

# hash in query
bundle.js?v=YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

Da der Zwischenspeicher Ressourcen basierend auf ihren URLs voneinander unterscheidet, wird der Cache nicht wiederverwendet, wenn sich die URL ändert, wenn eine Ressource aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen langfristig gecacht werden. Wie lange soll `max-age` sein? Die QPACK-Spezifikation bietet eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Header-Feldern, mit Tabellen von häufig verwendeten Feldwerten.

Einige häufig verwendete Cache-Headerwerte sind unten angezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie Werte bei der Übertragung über HTTP3 in 1 Byte komprimieren.

Die Nummern `37`, `38` und `41` gelten für Zeiträume von einer Woche, einem Monat bzw. einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort noch nach einer Woche existiert, nicht sehr hoch – auch wenn `max-age` auf 1 Woche gesetzt ist. Daher macht es in der Praxis keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass Nummer `41` die längste `max-age` (1 Jahr) hat, jedoch mit `public`.

Der `public`-Wert hat die Wirkung, dass die Antwort speicherbar gemacht wird, selbst wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Direktive sollte nur verwendet werden, wenn es notwendig ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist. Andernfalls ist sie nicht erforderlich, da eine Antwort im gemeinsamen Cache gespeichert wird, solange `max-age` angegeben ist.

Wenn die Antwort mit einer grundlegenden Authentifizierung personalisiert wird, kann die Anwesenheit von `public` Probleme verursachen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified`- und `ETag`-Header zu setzen, damit Sie eine Ressource beim Neuladen nicht erneut übertragen müssen. Es ist einfach, diese Header für vorgebaute statische Dateien zu generieren.

Der `ETag`-Wert hier kann ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

Zusätzlich kann `immutable` hinzugefügt werden, um eine Nevalidierung beim Neuladen zu verhindern.

Das kombinierte Ergebnis wird unten gezeigt.

```http
# bundle.v123.js
HTTP/1.1 200 OK
Content-Type: application/javascript
Content-Length: 1024
Cache-Control: public, max-age=31536000, immutable
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

**Cache Busting** ist eine Technik, um eine Antwort langfristig cache-fähig zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Die Technik kann auf alle Unterressourcen angewendet werden, wie Bilder.

> [!NOTE]
> Beim Bewerten der Verwendung von `immutable` und QPACK: Wenn Sie befürchten, dass `immutable` den vordefinierten Wert von QPACK ändert, beachten Sie, dass in diesem Fall der `immutable`-Teil durch Aufteilen des `Cache-Control`-Wertes in zwei Zeilen separat kodiert werden kann – obwohl dies von dem Kodierungsalgorithmus abhängt, den eine bestimmte QPACK-Implementierung verwendet.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Unterressourcen können Hauptressourcen nicht mit Cache Busting gestaltet werden, da ihre URLs nicht auf die gleiche Weise dekoriert werden können wie die URLs von Unterressourcen.

Wenn das folgende HTML selbst gespeichert ist, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

In diesem Fall wäre `no-cache` angemessen — anstelle von `no-store` — da wir HTML nicht speichern möchten, sondern nur, dass es immer auf dem neuesten Stand ist.

Darüber hinaus ermöglichen `Last-Modified` und `ETag` den Clients, bedingte Anfragen zu senden, und ein `304 Not Modified` kann zurückgegeben werden, wenn keine Aktualisierungen des HTML vorliegen:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
```

Diese Einstellung eignet sich für nicht personalisierten HTML-Code, aber für eine Antwort, die mithilfe von Cookies personalisiert wird — beispielsweise nach einer Anmeldung — vergessen Sie nicht, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Dasselbe kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs beim Cache-Busting nicht geändert werden können.

Die meisten Webinhalte können mit einer Kombination aus den oben beschriebenen zwei Mustern abgedeckt werden.

### Weitere Informationen zu verwalteten Caches

Mit der in den vorherigen Abschnitten beschriebenen Methode können Unterressourcen durch Cache Busting über einen langen Zeitraum gecacht werden, Hauptressourcen (die gewöhnlich HTML-Dokumente sind) jedoch nicht.

Das Cachen von Hauptressourcen ist schwierig, weil es mit nur standardmäßigen Direktiven der HTTP-Caching-Spezifikation keinen Weg gibt, Cache-Inhalte aktiv zu löschen, wenn der Inhalt auf dem Server aktualisiert wird.

Es ist jedoch möglich, indem ein verwalteter Cache wie ein CDN oder ein Service Worker bereitgestellt wird.

Zum Beispiel würde ein CDN, das Cache-Purging über eine API oder Dashboard-Operation erlaubt, eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der relevante Cache explizit nur dann gelöscht wird, wenn eine Aktualisierung auf dem Server erfolgt.

Ein Service Worker könnte dasselbe tun, wenn er den Inhalt in der Cache-API löschen könnte, wenn eine Aktualisierung auf dem Server erfolgt.

Weitere Informationen finden Sie in der Dokumentation Ihres CDN, und konsultieren Sie die [Service Worker Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
