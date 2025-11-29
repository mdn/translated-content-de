---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Cache speichert eine mit einer Anfrage verbundene Antwort und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Wiederverwendbarkeit bietet mehrere Vorteile. Erstens, da die Anfrage nicht an den Ursprungsserver gesendet werden muss, wird die Antwort umso schneller, je näher der Client und der Cache beieinander liegen. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Wenn eine Antwort wiederverwendbar ist, muss der Ursprungsserver die Anfrage nicht verarbeiten – das bedeutet, er muss die Anfrage nicht parsen und routen, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Serverlast.

Ein ordnungsgemäßer Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP-Caching-Spezifikation](https://httpwg.org/specs/rfc9111.html) gibt es zwei Haupttypen von Caches: **private Caches** und **geteilte Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen bestimmten Client gebunden ist – typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andernfalls, wenn personalisierte Inhalte in einem anderen als einem privaten Cache gespeichert werden, können andere Benutzer möglicherweise diese Inhalte abrufen – was zu ungewolltem Informationsverlust führen kann.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Anweisung festlegen.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber die Anwesenheit eines Cookies zeigt nicht immer an, dass es privat ist, und ein Cookie allein macht die Antwort nicht privat.

### Geteilter Cache

Der geteilte Cache befindet sich zwischen Client und Server und kann Antworten speichern, die unter den Benutzern geteilt werden können. Geteilte Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Zugriffssteuerung implementieren einige Proxys Caching, um den Netzwerkverkehr zu reduzieren. Dies wird normalerweise nicht vom Service-Entwickler verwaltet, daher muss es durch geeignete HTTP-Header und ähnliches gesteuert werden. In der Vergangenheit haben veraltete Proxy-Cache-Implementierungen – wie solche, die den HTTP-Caching-Standard nicht richtig verstehen – oft Probleme für Entwickler verursacht.

**Kitchen-sink-Header** wie der folgende werden verwendet, um das Verhalten von "alten und nicht aktualisierten Proxy-Cache-Implementierungen" zu umgehen, die moderne HTTP-Caching-Spezifikationsanweisungen wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, mit der zunehmenden Verbreitung von HTTPS und verschlüsselter Client/Server-Kommunikation, können Proxy-Caches im Pfad nur eine Antwort durchleiten und nicht als Cache agieren. In solch einem Szenario besteht kein Grund, sich um veraltete Proxy-Cache-Implementierungen zu sorgen, die die Antwort nicht einmal sehen können.

Andererseits, wenn ein {{Glossary("TLS", "TLS")}}-Bridge-Proxy die gesamte Kommunikation in einer Man-in-the-Middle-Manier entschlüsselt, indem er ein Zertifikat von einer {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} auf dem PC der Organisation installiert, und Zugriffskontrolle ausübt, ist es möglich, die Inhalte der Antwort zu sehen und sie im Cache zu speichern. Da jedoch [CT (Certificate Transparency)](/de/docs/Web/Security/Defenses/Certificate_Transparency) in den letzten Jahren weitverbreitet ist und einige Browser nur Zertifikate mit einem SCT (signed certificate timestamp) zulassen, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In solch einem kontrollierten Umfeld gibt es keinen Grund zur Sorge über "veraltete und nicht aktualisierte" Proxy-Caches.

#### Verwaltete Caches

Verwaltete Caches werden explizit von Service-Entwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient zu liefern. Beispiele sind Reverse-Proxies, CDNs und Service-Arbeiter in Kombination mit der Cache-API.

Die Eigenschaften von verwalteten Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches durch den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keinen Weg, um einen Cache explizit zu löschen – aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit gelöscht werden, durch Dashboard-Bedienungen, API-Aufrufe, Neustarts, und dergleichen. Das ermöglicht eine proaktivere Caching-Strategie.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten einer expliziten Manipulation zu ignorieren. Zum Beispiel kann man das Folgende angeben, um sich von einem privaten Cache oder Proxy-Cache abzumelden und dabei die eigene Strategie zu verwenden, um nur in einem verwalteten Cache zu cachen.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache VCL (Varnish Configuration Language, eine Art von {{Glossary("DSL/Domain_specific_language", "DSL")}}), um das Speichern im Cache zu behandeln, während Service-Arbeiter in Kombination mit der Cache-API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, dass wenn ein verwalteter Cache eine `no-store`-Anweisung absichtlich ignoriert, es nicht notwendig ist, ihn als "nicht standardkonform" zu betrachten. Vielmehr sollten Sie auf die Verwendung von Kitchen-sink-Headern verzichten, die Dokumentation des verwendeten verwalteten Cache-Mechanismus sorgfältig lesen, und sicherstellen, dass Sie den Cache in den vom gewählten Mechanismus bereitgestellten Wegen richtig steuern.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (z.B. `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines geteilten (Proxy-)Caches, eines Reverse-Proxy-Caches und eines geteilten (verwalteten) Caches in einem CDN, der zum Cache des Ursprungsservers führt](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist darauf ausgelegt, so viel wie möglich zu cachen, daher werden Antworten gespeichert und wiederverwendet, wenn bestimmte Bedingungen erfüllt sind, auch wenn kein `Cache-Control` angegeben ist. Dies wird als **heuristisches Caching** bezeichnet.

Nehmen Sie zum Beispiel die folgende Antwort. Diese Antwort wurde zuletzt vor einem Jahr aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die ein volles Jahr lang nicht aktualisiert wurden, für einige Zeit danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des fehlenden `max-age`) und verwendet sie eine Weile wieder. Wie lange sie wiederverwendet wird, hängt von der Implementierung ab, aber die Spezifikation empfiehlt etwa 10 % (in diesem Fall 0,1 Jahr) der Zeit nach dem Speichern.

Heuristisches Caching ist ein Workaround, der vor der weit verbreiteten Unterstützung von `Cache-Control` existierte, und im Grunde sollten alle Antworten explizit einen `Cache-Control`-Header angeben.

## Frisch und abgelaufen basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **abgelaufen**. Der _frische_ Zustand weist normalerweise darauf hin, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _abgelaufene_ Zustand bedeutet, dass die gecachte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgelaufen ist, ist das **Alter**. Im HTTP ist das Alter die Zeit seit der Erzeugung der Antwort. Dies ist ähnlich dem {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

Nehmen Sie das folgende Beispiel einer Antwort (604800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort gespeichert hat, berechnet die vergangene Zeit seit der Generierung der Antwort und verwendet das Ergebnis als das _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche ist, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche ist, ist die Antwort _abgelaufen_.

Solange die gespeicherte Antwort frisch bleibt, wird sie zur Erfüllung von Clientanfragen verwendet.

Wenn eine Antwort in einem geteilten Cache gespeichert ist, ist es möglich, dem Client das Alter der Antwort mitzuteilen. In Fortsetzung des Beispiels würde der geteilte Cache die folgende Antwort an nachfolgende Clientanfragen senden, wenn er die Antwort einen Tag lang gespeichert hat.

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

Der Client, der diese Antwort erhält, sieht sie für die verbleibenden 518400 Sekunden als frisch an, was der Differenz zwischen dem `max-age` der Antwort und `Age` entspricht.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header angegeben.

Der `Expires`-Header gibt die Lebensdauer des Caches mit einer expliziten Zeit an, anstatt eine vergangene Zeit anzugeben.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Da das Zeitformat jedoch schwer zu parsen ist, viele Implementierungsfehler gefunden wurden und es möglich ist, Probleme zu verursachen, indem die Systemuhr absichtlich verschoben wird, wurde `max-age` – zur Angabe einer verstrichenen Zeit – für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, ist definiert, dass `max-age` bevorzugt wird. Es ist also nicht erforderlich, `Expires` bereitzustellen, jetzt wo HTTP/1.1 weit verbreitet ist.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortinhalt            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber der Inhalt von Antworten ist nicht immer derselbe, selbst wenn sie dieselbe URL haben. Besonders wenn Inhaltsaushandlungen durchgeführt werden, kann die Antwort vom Server von den Werten der Anforderungsheader `Accept`, `Accept-Language` und `Accept-Encoding` abhängen.

Zum Beispiel ist es unerwünscht, eine im Cache gespeicherte englische Antwort mit einem `Accept-Language: en`-Header für Anfragen mit einem Anforderungsheader `Accept-Language: ja` wieder zu verwenden. In diesem Fall können Sie die Antworten — basierend auf der Sprache — separat cachen, indem Sie `Accept-Language` zum Wert des `Vary`-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das bewirkt, dass der Cache basierend auf einer Kombination aus der Antwort-URL und dem Anforderungsheader `Accept-Language` — anstatt nur basierend auf der Antwort-URL — indiziert wird.

| URL                              | `Accept-Language` | Antwortinhalt            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Wenn Sie Inhalte (zum Beispiel für responsives Design) basierend auf dem User-Agent optimieren, könnten Sie versucht sein, `User-Agent` in den Wert des `Vary`-Headers aufzunehmen. Der Anforderungsheader `User-Agent` hat jedoch in der Regel eine sehr große Anzahl an Variationen, wodurch die Wahrscheinlichkeit drastisch verringert wird, dass der Cache wiederverwendet wird. Wenn möglich, sollten Sie stattdessen eine Methode zur Verhaltensänderung basierend auf der Funktionserkennung anstelle des `User-Agent`-Anforderungsheaders in Betracht ziehen.

Für Anwendungen, die Cookies verwenden, um zu verhindern, dass andere gecachte personalisierte Inhalte wiederverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` anzugeben.

## Validierung

Abgelaufene Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um eine abgelaufene Antwort durch Anfragen an den Ursprungsserver in eine frische zu verwandeln. Dies wird **Validierung** oder manchmal **Revalidierung** genannt.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die einen `If-Modified-Since`- oder einen `If-None-Match`-Anforderungsheader enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 generiert und hat ein `max-age` von 1 Stunde, sodass Sie wissen, dass sie bis 23:22:22 frisch ist.

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

Um 23:22:22 wird die Antwort abgelaufen und der Cache kann nicht wiederverwendet werden. Die folgende Anfrage zeigt, dass ein Client eine Anfrage mit einem `If-Modified-Since`-Anforderungsheader sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn der Inhalt seit der angegebenen Zeit nicht geändert wurde.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortinhalt — es gibt nur einen Statuscode —, sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Sobald diese Antwort empfangen wird, wird die auf dem Client gespeicherte abgelaufene Antwort zurück in den frischen Zustand versetzt und kann während der verbleibenden 1 Stunde wiederverwendet werden.

Der Server kann die Änderungszeit vom Betriebssystem-Dateisystem abrufen, was für statische Dateien relativ einfach ist. Es gibt jedoch einige Probleme, wie zum Beispiel dass das Zeitformat komplex und schwer zu parsen ist, und verteilte Server Schwierigkeiten haben, die Dateiänderungszeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Antwortheader als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Antwortheaders ist ein beliebiger Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, sodass Server frei sind, den Wert auf beliebige Weise festzulegen — zum Beispiel als Hash des Antwortinhalts oder als Versionsnummer.

Wenn zum Beispiel ein Hash-Wert für den `ETag`-Header verwendet wird und der Hash-Wert der Ressource `index.html` `33a64df5` ist, sieht die Antwort wie folgt aus:

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

Wenn diese Antwort abgelaufen ist, nimmt der Client den Wert des `ETag`-Antwortheaders für die zwischengespeicherte Antwort und setzt ihn in den `If-None-Match`-Anforderungsheader, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der Wert des `ETag`-Headers, den er für die angeforderte Ressource bestimmt, mit dem `If-None-Match`-Wert in der Anfrage übereinstimmt.

Wenn der Server jedoch feststellt, dass die angeforderte Ressource jetzt einen anderen `ETag`-Wert haben sollte, antwortet der Server stattdessen mit `200 OK` und der neuesten Version der Ressource.

> [!NOTE]
> RFC9110 bevorzugt es, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Bei der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, dann hat `If-None-Match` Vorrang für den Validator.
> Wenn Sie nur Caching in Betracht ziehen, könnten Sie denken, dass `Last-Modified` nicht erforderlich ist.
> `Last-Modified` ist jedoch nicht nur für Caching nützlich; es handelt sich um einen Standard-HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Webcrawlern, um die Crawl-Frequenz anzupassen, und für viele andere Zwecke.
> Daher ist es besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen, wenn man das gesamte HTTP-Ökosystem berücksichtigt.

### Erneute Validierung erzwingen

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern immer die neuesten Inhalte vom Server abrufen möchten, können Sie die `no-cache`-Anweisung verwenden, um die Validierung zu erzwingen.

Indem Sie `Cache-Control: no-cache` zur Antwort zusammen mit `Last-Modified` und `ETag` hinzufügen — wie unten gezeigt —, erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder erhält andernfalls eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
ETag: "deadbeef"
Cache-Control: no-cache

<!doctype html>
…
```

Es wird oft gesagt, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort abgelaufen ist, und `must-revalidate` bedeutet, dass sie nicht ohne Revalidierung wiederverwendet werden darf, sobald sie abgelaufen ist – sodass die Semantik insgesamt der von `no-cache` gleicht.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 die `no-cache`-Anweisung nicht verarbeiten konnten – und daher wurde zur Lösung dieser Einschränkung `max-age=0` als Workaround verwendet.

Da nun weitgehend HTTP/1.1-konforme Server bereitgestellt sind, gibt es keinen Grund mehr, diese Kombination aus `max-age=0` und `must-revalidate` zu verwenden – stattdessen sollten Sie `no-cache` verwenden.

## Nicht cachen

Die `no-cache`-Anweisung verhindert nicht das Speichern von Antworten, sondern verhindert die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in einem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

In der Regel ergibt sich in der Praxis aus einem "nicht cachen" -Erfordernis folgendes Set an Umständen:

- Möchte nicht, dass die Antwort von jemand anderem als dem spezifischen Client gespeichert wird, aus Datenschutzgründen.
- Möchte immer aktuelle Informationen liefern.
- Weiß nicht, was bei veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die am besten geeignete Anweisung.

Die folgenden Abschnitte betrachten die Umstände genauer.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet anderen Benutzern eines Caches zugänglich wäre.

In einem solchen Fall wird die Verwendung der `private`-Anweisung dazu führen, dass die personalisierte Antwort nur beim spezifischen Client gespeichert wird und nicht an andere Benutzer des Caches weitergegeben wird.

```http
Cache-Control: private
```

In einem solchen Fall, auch wenn `no-store` gegeben ist, muss ebenfalls `private` gegeben sein.

### Jedes Mal aktuelle Inhalte bereitstellen

Die `no-store`-Anweisung verhindert zwar, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für dieselbe URL.

Mit anderen Worten, wenn es eine alte Antwort gibt, die bereits für eine bestimmte URL gespeichert ist, verhindert das Zurückgeben von `no-store` nicht, dass die alte Antwort wiederverwendet wird.

Eine `no-cache`-Anweisung würde jedoch den Client zwingen, vor der Wiederverwendung einer gespeicherten Antwort eine Validierungsanfrage zu senden.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client zwingen, sich jedes Mal mit dem Server zu verbinden und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, sehen Sie möglicherweise Kitchen-sink-Header wie die folgenden.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative im Umgang mit solchen veralteten Implementierungen zu verwenden, und es ist kein Problem, wenn von Anfang an `no-cache` gegeben ist, da der Server immer die Anfrage erhalten wird.

Wenn es der geteilte Cache ist, über den Sie besorgt sind, können Sie sicherstellen, dass unbeabsichtigtes Caching verhindert wird, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was `no-store` einbüßt

Sie könnten denken, dass die Hinzufügung von `no-store` eine gute Möglichkeit ist, sich vom Caching abzumelden.

Es wird jedoch nicht empfohlen, großzügig `no-store` zu vergeben, da Sie viele Vorteile verlieren, die HTTP und Browser bieten, einschließlich des Browser-Cache für Vorwärts-/Rückwärtsnavigation.

Um die Vorteile des gesamten Funktionsumfangs der Webplattform zu nutzen, bevorzugen Sie die Verwendung von `no-cache` in Kombination mit `private`.

## Neuladen und erzwungenes Neuladen

Die Validierung kann für Anfragen sowie für Antworten durchgeführt werden.

**Neuladen** und **erzwungenes Neuladen** sind häufige Beispiele für Validierungen, die von der Browser-Seite aus durchgeführt werden.

### Neuladen

Um Fensterbeschädigungen zu beheben oder auf die neueste Version der Ressource zu aktualisieren, bieten Browser Nutzern eine Neuladefunktion an.

Eine vereinfachte Ansicht der HTTP-Anfrage, die während eines Browser-Neuladens gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus wie oben; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0`-Anweisung in der Anfrage gibt an "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" – was in der Praxis bedeutet, dass intermediar gespeicherte Antworten nicht wiederverwendet werden.

Das führt dazu, dass eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert wird.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus auf `no-cache` gesetzt aufgerufen wird (beachten Sie, dass `reload` nicht der richtige Modus für diesen Fall ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neuladen

Browser verwenden `max-age=0` während des Neuladens aus Gründen der Abwärtskompatibilität, da viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden. Aber `no-cache` ist jetzt in diesem Anwendungsfall gut geeignet, und **erzwungenes Neuladen** ist eine zusätzliche Möglichkeit, gecachte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser-**erzwungenen Neuladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus wie oben; die Anfragen von Safari sehen etwas anders aus.)

Da das keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie ein `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus auf `reload` gesetzt aufgerufen wird (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeiden von Revalidierung

Inhalte, die sich nie ändern, sollten durch Cache-Busting eine lange `max-age` haben — das heißt, indem eine Versionsnummer, ein Hash-Wert usw. in die Anforderungs-URL aufgenommen wird.

Wenn der Benutzer jedoch neu lädt, wird eine Revalidierungsanfrage gesendet, auch wenn der Server weiß, dass der Inhalt unveränderlich ist.

Um dies zu verhindern, kann die `immutable`-Anweisung verwendet werden, um explizit anzugeben, dass keine Revalidierung erforderlich ist, weil sich der Inhalt nie ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Revalidierungen während des Neuladens.

Beachten Sie, dass anstelle der Implementierung dieser Anweisung, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass keine Revalidierung während des Neuladens für Unterressourcen durchgeführt wird.

## Löschen gespeicherter Antworten

Es gibt keine Möglichkeit, Antworten auf einem Zwischenspeicher-Server zu löschen, die mit einer langen `max-age` gespeichert wurden.

Stellen Sie sich vor, dass die folgende Antwort von `https://example.com/` gespeichert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Möglicherweise möchten Sie diese Antwort überschreiben, wenn sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert ist – da aufgrund des Cachings keine weiteren Anfragen den Server erreichen.

Eine der in der Spezifikation erwähnten Methoden besteht darin, eine Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST` zu senden, aber für viele Clients ist das schwer zu tun.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Header und Direktivwert kann verwendet werden, um Browser-Caches zu leeren – hat jedoch keinen Effekt auf Zwischenspeicher. Ansonsten bleiben die Antworten im Browser-Cache, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell eine Neuladen-, erzwingen-Neuladen- oder Verlauf-löschen-Aktion durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server die Kontrolle über eine URL nicht verlieren möchte – zum Beispiel im Fall, dass eine Ressource häufig aktualisiert wird – sollten Sie `no-cache` hinzufügen, sodass der Server immer Anfragen erhält und die vorgesehenen Antworten senden kann.

## Anfragenkollaps

Der geteilte Cache befindet sich hauptsächlich vor dem Ursprungsserver und soll den Datenverkehr zum Ursprungsserver reduzieren.

Wenn also mehrere identische Anfragen gleichzeitig an einem geteilten Cache ankommen, wird der Zwischenspeicher eine einzige Anfrage im Namen von sich selbst an den Ursprung weiterleiten, die er dann für alle Clients wiederverwenden kann. Dies wird _**Anfragenkollaps**_ genannt.

Der Anfragenkollaps tritt auf, wenn Anfragen gleichzeitig ankommen, also selbst wenn `max-age=0` oder `no-cache` in der Antwort gegeben wird, wird die Antwort wiederverwendet.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie im Kollaps geteilt wird, sollten Sie die `private`-Anweisung hinzufügen:

![Anfragenkollaps gezeigt als mehrere Clients, die GET-Anfragen senden und ein Cache, das sie zu einer einzigen GET-Anfrage an den Ursprung zusammenfasst. Der Ursprungsserver antwortet mit einem 200 OK, das der Cache zurück an alle Clients teilt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Häufige Caching-Muster

Es gibt viele Anweisungen in der `Cache-Control`-Spezifikation, und es mag schwierig sein, alle zu verstehen. Aber die meisten Websites können durch eine Kombination von einigen wenigen Mustern abgedeckt werden.

Dieser Abschnitt beschreibt die gängigen Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten für das Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern implizites Caching gemäß dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten einen Standard-`Cache-Control`-Header explizit hinzuzufügen.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es eine häufige Praxis, den Standard-`Cache-Control`-Wert so einzustellen, dass `no-cache` enthalten ist:

```http
Cache-Control: no-cache
```

Zusätzlich, wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und die Inhalte für jeden Benutzer personalisiert sind, muss auch `private` angegeben werden, um das Teilen mit anderen Benutzern zu vermeiden:

```http
Cache-Control: no-cache, private
```

### Cache-Busting

Die Ressourcen, die am besten mit Caching funktionieren, sind statische unveränderliche Dateien, deren Inhalt sich niemals ändert. Für Ressourcen, die sich _doch_ ändern, ist es eine gängige bewährte Praxis, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, sodass die URL-Einheit länger gecacht werden kann.

Betrachten Sie als Beispiel das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

Im modernen Web-Entwicklungsprozess werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung voranschreitet. Wenn außerdem die Versionen von JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind, bricht die Anzeige.

Daher macht es das obige HTML schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie JavaScript und CSS mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hash-Wert enthalten. Einige der Möglichkeiten dazu sind unten gezeigt.

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

Da der Cache Ressourcen basierend auf ihren URLs voneinander unterscheidet, wird der Cache nicht erneut verwendet, wenn sich die URL ändert, wenn eine Ressource aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für lange Zeit gecacht werden. Wie lange sollte `max-age` gesetzt werden? Die QPACK-Spezifikation bietet eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Header-Feldern, mit Tabellen von häufig verwendeten Feldwerten definiert.

Einige häufig verwendete Cache-Header-Werte sind unten gezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie Werte in 1 Byte komprimieren, wenn sie über HTTP3 übertragen werden.

Nummern `37`, `38` und `41` sind für Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch existiert, nicht sehr hoch – auch wenn `max-age` auf 1 Woche gesetzt ist. Daher macht es in der Praxis keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass Nummer `41` die längste `max-age` (1 Jahr) hat, jedoch mit `public`.

Der `public`-Wert hat die Wirkung, dass die Antwort gespeichert wird, auch wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Anweisung sollte nur verwendet werden, wenn es erforderlich ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Sie ist ansonsten nicht erforderlich, da eine Antwort im geteilten Cache gespeichert wird, solange `max-age` gegeben ist.

Wenn die Antwort jedoch mit grundlegender Authentifizierung personalisiert wird, kann die Anwesenheit von `public` Probleme verursachen. Wenn Sie sich darüber Gedanken machen, können Sie den zweitlängsten Wert `38` (1 Monat) wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified`- und `ETag`-Headers festzulegen, damit Sie eine Ressource beim Neuladen nicht erneut übertragen müssen. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag`-Wert kann hier ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

Zusätzlich kann `immutable` hinzugefügt werden, um die Validierung beim Neuladen zu verhindern.

Das kombinierte Ergebnis ist unten gezeigt.

```http
# bundle.v123.js
HTTP/1.1 200 OK
Content-Type: text/javascript
Content-Length: 1024
Cache-Control: public, max-age=31536000, immutable
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

**Cache-Busting** ist eine Technik, um eine Antwort über einen langen Zeitraum hinweg cachebar zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Die Technik kann auf alle Unterressourcen wie Bilder angewendet werden.

> [!NOTE]
> Beim Bewerten der Verwendung von `immutable` und QPACK:
> Wenn Sie besorgt sind, dass `immutable` den von QPACK bereitgestellten voreingestellten Wert ändert, beachten Sie, dass
> in diesem Fall der `immutable`-Teil separat codiert werden kann, indem der `Cache-Control`-Wert in zwei Zeilen aufgeteilt wird – allerdings hängt dies von dem Kodierungsalgorithmus ab, den eine bestimmte QPACK-Implementierung verwendet.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Anders als Unterressourcen können Hauptressourcen nicht durch Cache-Busting bearbeitet werden, da ihre URLs nicht in derselben Weise dekoriert werden können wie die URLs von Unterressourcen.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Für diesen Fall wäre `no-cache` angemessen – anstelle von `no-store` –, da wir kein HTML speichern möchten, sondern stattdessen möchten, dass es immer aktuell ist.

Darüber hinaus wird das Hinzufügen von `Last-Modified` und `ETag` es Clients ermöglichen, bedingte Anfragen zu senden, und eine `304 Not Modified` kann zurückgegeben werden, wenn es keine Aktualisierungen am HTML gegeben hat:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Diese Einstellung ist für nicht personalisiertes HTML geeignet, aber für eine Antwort, die mit Cookies personalisiert wird – zum Beispiel nach einer Anmeldung – vergessen Sie nicht, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Das Gleiche kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht über Cache-Busting geändert werden können.

Die meisten Webinhalte können durch eine Kombination der beiden oben beschriebenen Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der Methode, die in vorherigen Abschnitten beschrieben wurde, können Unterressourcen durch Cache-Busting für lange Zeit gecacht werden, aber Hauptressourcen (die in der Regel HTML-Dokumente sind) nicht.

Das Caching von Hauptressourcen ist schwierig, da es unter Verwendung von nur den Standardanweisungen der HTTP-Caching-Spezifikation keine Möglichkeit gibt, die Inhalte des Caches aktiv zu löschen, wenn Inhalte auf dem Server aktualisiert werden.

Es ist jedoch möglich, indem ein verwalteter Cache wie ein CDN oder ein Service-Arbeiter bereitgestellt wird.

Ein CDN, das Cache-Purging über eine API oder ein Dashboard-Operation erlaubt, würde eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der relevante Cache nur dann explizit gelöscht wird, wenn ein Update auf dem Server erfolgt.

Ein Service-Arbeiter könnte das Gleiche tun, indem er Inhalte in der Cache-API löscht, wenn ein Update auf dem Server auftritt.

Für weitere Informationen lesen Sie die Dokumentation Ihres CDN und konsultieren Sie die [Service-Arbeiter-Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
