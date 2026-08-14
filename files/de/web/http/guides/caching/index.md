---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: b13e73fdf1fedcb837aebdd842f1a9a6adc76e10
---

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verknüpft ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Erstens, da die Anfrage nicht an den Ursprungsserver gesendet werden muss, gilt: Je näher sich der Client und der Cache befinden, desto schneller erfolgt die Antwort. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Wenn eine Antwort wiederverwendbar ist, muss der Ursprungsserver die Anfrage nicht verarbeiten — somit muss er nicht die Anfrage parsen und routen, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Belastung des Servers.

Der ordnungsgemäße Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP Caching](https://httpwg.org/specs/rfc9111.html) Spezifikation gibt es zwei Hauptarten von Caches: **private Caches** und **geteilte Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen spezifischen Client gebunden ist — typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen als einem privaten Cache gespeichert werden, könnten andere Benutzer auf diese Inhalte zugreifen — was unbeabsichtigte Informationslecks verursachen könnte.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive spezifizieren.

```http
Cache-Control: private
```

Personalisierte Inhalte werden gewöhnlich durch Cookies gesteuert, aber das Vorhandensein eines Cookies weist nicht immer darauf hin, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Geteilte Caches

Der geteilte Cache befindet sich zwischen Client und Server und kann Antworten speichern, die unter Benutzern geteilt werden können. Geteilte Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Zugriffskontrollfunktion implementieren einige Proxys Caching, um den Datenverkehr aus dem Netzwerk zu reduzieren. Dies wird in der Regel nicht vom Servicentwickler verwaltet, daher muss es durch geeignete HTTP-Header und ähnliches kontrolliert werden. In der Vergangenheit haben veraltete Proxy-Cache-Implementierungen — wie Implementierungen, die den HTTP-Caching-Standard nicht richtig verstehen — jedoch oft Probleme für Entwickler verursacht.

**Kitchen-sink headers** wie der folgende werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikationsdirektiven wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, mit der zunehmenden Verbreitung von HTTPS und der Verschlüsselung der Kommunikation zwischen Client und Server, können Proxy-Caches auf dem Pfad in vielen Fällen nur eine Antwort tunneln und nicht als Cache fungieren. Daher muss man sich in diesem Szenario keine Sorgen über veraltete Proxy-Cache-Implementierungen machen, die nicht einmal die Antwort sehen können.

Andererseits ist es möglich, dass ein {{Glossary("TLS", "TLS")}}-Bridge-Proxy alle Kommunikationen auf eine Man-in-the-Middle-Weise entschlüsselt, indem er ein Zertifikat von einer von der Organisation verwalteten {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} auf dem PC installiert und Zugriffskontrollen durchführt usw. — er kann den Inhalt der Antwort sehen und cachen. Da jedoch [CT (Zertifikatstransparenz)](/de/docs/Web/Security/Defenses/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate mit einem SCT (signierte Zertifizierungszeitstempel) zulassen, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung muss man sich keine Sorgen darüber machen, dass der Proxy-Cache "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden explizit von Servicentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient bereitzustellen. Beispiele sind Reverse Proxies, CDNs und Service Worker in Kombination mit der Cache-API.

Die Eigenschaften von verwalteten Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches über den [`Cache-Control`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Beispielsweise definiert die HTTP-Caching-Spezifikation im Wesentlichen keinen Weg, einen Cache explizit zu löschen - aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Dadurch wird eine proaktivere Caching-Strategie ermöglicht.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten expliziter Manipulation zu ignorieren. Beispielsweise kann das Folgende spezifiziert werden, um auf einen privaten Cache oder Proxy-Cache zu verzichten, während Sie Ihre eigene Strategie verwenden, um nur in einem verwalteten Cache zu speichern.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache die VCL (Varnish Configuration Language, eine Art {{Glossary("DSL/Domain_specific_language", "DSL")}}) Logik zum Handhaben von Cache-Speicherungen, während Service Worker in Kombination mit der Cache-API es ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, dass, wenn ein verwalteter Cache eine [`no-store`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#no-store)-Direktive absichtlich ignoriert, dies nicht als "nicht konform" mit dem Standard wahrgenommen werden muss. Was Sie tun sollten, ist, die Verwendung von Kitchen-sink headers zu vermeiden, aber die Dokumentation des verwendeten verwalteten Cache-Mechanismus sorgfältig zu lesen und sicherzustellen, dass Sie den Cache ordnungsgemäß in den vom gewählten Mechanismus bereitgestellten Wegen kontrollieren.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird an der Definition eines [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Headers gearbeitet, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines geteilten (Proxy-) Caches, eines Reverse-Proxy-Caches und eines geteilten (verwalteten) Caches in einem CDN, die zum Cache des Ursprungsservers führen](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist so konzipiert, dass so viel wie möglich gecachet wird; selbst wenn kein `Cache-Control` angegeben ist, werden Antworten gespeichert und wiederverwendet, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

Zum Beispiel, betrachten Sie die folgende Antwort. Diese Antwort wurde zuletzt vor einem Jahr aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die ein ganzes Jahr lang nicht aktualisiert wurden, einige Zeit danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des Fehlens von `max-age`) und verwendet sie für eine Weile erneut. Wie lange die Wiederverwendung erfolgt, liegt bei der Implementierung, aber die Spezifikation empfiehlt etwa 10 % (in diesem Fall 0,1 Jahr) der Zeit nach der Speicherung.

Heuristisches Caching ist ein Workaround, der vor der weit verbreiteten Unterstützung von `Cache-Control` aufkam, und grundsätzlich sollten alle Antworten ausdrücklich einen `Cache-Control`-Header angeben.

## Frisch und abgelaufen basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **abgelaufen**. Der _frische_ Zustand zeigt normalerweise an, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _abgelaufene_ Zustand bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgelaufen ist, ist das **Alter**. In HTTP ist das Alter die Zeit, die seit der Generierung der Antwort vergangen ist. Dies ähnelt dem {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

Nehmen Sie die folgende Beispielantwort (604800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort gespeichert hat, berechnet die seit der Generierung der Antwort vergangene Zeit und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _abgelaufen_.

Solange die gespeicherte Antwort frisch bleibt, wird sie verwendet, um Client-Anfragen zu erfüllen.

Wenn eine Antwort in einem geteilten Cache gespeichert ist, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Fortfahrend mit dem Beispiel, wenn der geteilte Cache die Antwort für einen Tag gespeichert hat, würde der geteilte Cache die folgende Antwort an nachfolgende Client-Anfragen senden.

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

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden frisch ist, der Unterschied zwischen dem `max-age` der Antwort und `Age`.

## Expires oder max-age

In HTTP/1.0 wurde die Frische mit dem `Expires`-Header angegeben.

Der `Expires`-Header gibt die Lebensdauer des Caches mit einer expliziten Zeit statt durch Angabe einer abgelaufenen Zeit an.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Da jedoch das Zeitformat schwer zu parsen war, viele Implementierungsfehler gefunden wurden und es möglich war, Probleme durch ein absichtliches Verschieben der Systemuhr zu induzieren, wurde `max-age` — zur Angabe einer abgelaufenen Zeit — für `Cache-Control` in HTTP/1.1 eingeführt.

Wenn sowohl [`Expires`](/de/docs/Web/HTTP/Reference/Headers/Expires) als auch [`Cache-Control: max-age`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#max-age) verfügbar sind, wird `max-age` als vorzuziehen definiert. Daher ist es nicht notwendig, `Expires` bereitzustellen, da HTTP/1.1 weitgehend verwendet wird.

## Vary

Die Möglichkeit, Antworten voneinander zu unterscheiden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Response body            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber der Inhalt von Antworten ist nicht immer derselbe, auch wenn sie die gleiche URL haben. Besonders wenn Inhaltsverhandlungen durchgeführt werden, kann die Antwort des Servers von den Werten der `Accept`, `Accept-Language` und `Accept-Encoding` Anfrage-Header abhängen.

Zum Beispiel, wenn für englischen Inhalt, der mit einem [`Accept-Language: en`](/de/docs/Web/HTTP/Reference/Headers/Accept-Language) Header zurückgegeben und zwischengespeichert wird, ist es unerwünscht, diese zwischengespeicherte Antwort dann für Anfragen zu wiederverwenden, die einen `Accept-Language: ja` Anfrage-Header haben. In diesem Fall können Sie die Antworten separat nach Sprache zwischenspeichern, indem Sie `Accept-Language` zum Wert des [`Vary`](/de/docs/Web/HTTP/Reference/Headers/Vary) Headers hinzufügen.

```http
Vary: Accept-Language
```

Das führt dazu, dass der Cache basierend auf einer Kombination aus der URL der Antwort und dem `Accept-Language` Anfrage-Header gesteuert wird — anstelle basierend nur auf der URL der Antwort.

| URL                              | `Accept-Language` | Response body            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Wenn Sie auch eine Inhaltsoptimierung bereitstellen (zum Beispiel für responsives Design) basierend auf dem User Agent, könnten Sie versucht sein, `User-Agent` in den Wert des `Vary` Headers aufzunehmen. Der `User-Agent` Anfrage-Header hat jedoch im Allgemeinen eine sehr große Anzahl von Variationen, was die Chance drastisch reduziert, dass der Cache wiederverwendet wird. Ziehen Sie daher, wenn möglich, eine Variation des Verhaltens basierend auf der Feature-Erkennung statt auf dem `User-Agent` Anfrage-Header in Betracht.

Für Anwendungen, die Cookies verwenden, um andere daran zu hindern, zwischengespeicherten personalisierten Inhalt wiederzuverwenden, sollten Sie [`Cache-Control: private`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#private) anstelle eines Cookies für `Vary` angeben.

## Validierung

Abgelaufene Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um eine abgelaufene Antwort durch eine Anfrage an den Ursprungsserver in eine frische zu verwandeln. Dies wird als **Validierung** oder manchmal **Revalidierung** bezeichnet.

Die Validierung erfolgt durch Verwendung einer **bedingten Anfrage**, die einen [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since) oder [`If-None-Match`](/de/docs/Web/HTTP/Reference/Headers/If-None-Match) Anfrage-Header enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 generiert und hat eine `max-age` von 1 Stunde, sodass Sie wissen, dass sie bis 23:22:22 frisch ist.

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

Um 23:22:22 wird die Antwort abgelaufen und der Cache kann nicht mehr verwendet werden. Die folgende Anfrage zeigt daher, dass ein Client eine Anfrage mit einem `If-Modified-Since` Anfrage-Header sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn der Inhalt seit der angegebenen Zeit nicht geändert wurde.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortkörper — es gibt nur einen Statuscode —, sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Nach Erhalt dieser Antwort setzt der Client die gespeicherte abgelaufene Antwort in den frischen Zustand zurück und kann sie während der verbleibenden 1 Stunde erneut verwenden.

Der Server kann die Änderungszeit vom Betriebssystem-Dateisystem erhalten, was relativ einfach für den Fall ist, dass statische Dateien bereitgestellt werden. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Dateiaktualisierungszeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der [`ETag`](/de/docs/Web/HTTP/Reference/Headers/ETag) Antwort-Header als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag` Antwort-Headers ist ein beliebiger Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, daher sind Server frei, den Wert basierend auf beliebigen Mitteln festzulegen – wie einem Hash des Inhalts oder einer Versionsnummer.

Wenn zum Beispiel ein Hash-Wert für den `ETag` Header verwendet wird und der Hash-Wert der `index.html` Ressource `33a64df5` ist, sieht die Antwort wie folgt aus:

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

Wenn diese Antwort abgelaufen ist, nimmt der Client den Wert des `ETag` Antwort-Headers für die zwischengespeicherte Antwort und setzt ihn in den `If-None-Match` Anfrage-Header, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server gibt `304 Not Modified` zurück, wenn der von ihm bestimmte `ETag` Wert für die angeforderte Ressource mit dem `If-None-Match` Wert in der Anfrage übereinstimmt.

Wenn der Server jedoch feststellt, dass die angeforderte Ressource jetzt einen anderen `ETag` Wert haben sollte, antwortet der Server stattdessen mit `200 OK` und der neuesten Version der Ressource.

> [!NOTE]
> RFC9110 empfiehlt, dass Server, wenn möglich, sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden.
> Während der Cache-Revalidierung hat, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, `If-None-Match` Vorrang für den Validator.
> Wenn Sie nur Caching in Betracht ziehen, könnten Sie denken, dass `Last-Modified` unnötig ist.
> `Last-Modified` ist jedoch nicht nur für Caching nützlich; es ist ein standardmäßiger HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Crawlern, um die Crawl-Frequenz anzupassen, und für andere verschiedene Zwecke.
> Daher ist es unter Berücksichtigung des gesamten HTTP-Ökosystems besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwinge Revalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern stattdessen immer den neuesten Inhalt vom Server abrufen möchten, können Sie die `no-cache` Direktive verwenden, um die Validierung zu erzwingen.

Indem dem Erfassungs-Header `Cache-Control: no-cache` in Kombination mit [`Last-Modified`](/de/docs/Web/HTTP/Reference/Headers/Last-Modified) und `ETag` hinzugefügt wird – wie unten gezeigt – erhält der Client eine `200 OK` Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder wird andernfalls eine `304 Not Modified` Antwort erhalten, wenn die angeforderte Ressource nicht aktualisiert wurde.

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

> [!NOTE]
> Die `no-cache` Direktive (oder das Äquivalent, wie `max-age=0, must-revalidate`) garantiert keine Revalidierung für Verlaufsnavigationen – wie solche, die mit der <kbd>Zurück</kbd>-Taste durchgeführt werden.
> Wenn der Back/Forward-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Schnappschuss der Seite ohne Revalidierung wieder her.
> Selbst wenn bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort weiterhin ohne Revalidierung bereitstellen.
> Dies ist [von der Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), weil Verlaufsnavigationen in der Regel als Wiederherstellen eines Schnappschusses einer Sitzung in der Vergangenheit und nicht als neue Anforderung für eine zuvor besuchte Seite behandelt werden.

Es wird oft gesagt, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort veraltet ist, und `must-revalidate` bedeutet, dass sie nicht wiederverwendet werden darf, ohne sie einmal sie veraltet ist – sodass die Semantik in Kombination die gleiche wie `no-cache` zu sein scheint.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache`-Direktive zu verarbeiten — und daher wurde `max-age=0` als Workaround verwendet, um mit dieser Einschränkung umzugehen.

Aber jetzt, da HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund mehr, diese Kombination aus `max-age=0` und `must-revalidate` zu verwenden – Sie sollten stattdessen einfach `no-cache` verwenden.

## Kein Caching

Die `no-cache` Direktive verhindert nicht das Speichern von Antworten, sondern verhindert stattdessen die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in einem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen bedeutet jedoch eine "nicht zwischenspeichern"-Anforderung in der Praxis die folgenden Umstände:

- Die Antwort soll aus Datenschutzgründen von niemandem außer dem spezifischen Client gespeichert werden.
- Es wird immer aktuelle Informationen bereitgestellt.
- Es ist unbekannt, was in veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die am besten geeignete Direktive.

Die folgenden Abschnitte betrachten die Umstände im Detail.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar ist.

In einem solchen Fall wird die Verwendung der `private`-Direktive dazu führen, dass die personalisierte Antwort nur mit dem spezifischen Client gespeichert wird und nicht mit jedem anderen Benutzer des Caches.

```http
Cache-Control: private
```

### Jedes Mal aktuelle Inhalte bereitstellen

Die `no-store` Direktive verhindert das Speichern einer Antwort, löscht jedoch keine bereits gespeicherte Antwort für die gleiche URL.

Das bedeutet, dass, wenn bereits eine alte Antwort für eine bestimmte URL gespeichert ist, die Rückgabe von `no-store` nicht verhindern wird, dass die alte Antwort wiederverwendet wird.

Eine `no-cache` Direktive wird den Client jedoch dazu zwingen, vor der Wiederverwendung jeder gespeicherten Antwort eine Validierungsanfrage zu senden.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client zwingen, jedes Mal auf den Server zuzugreifen und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, können Sie kitchen-sink headers wie die folgenden sehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative für den Umgang mit solchen veralteten Implementierungen zu verwenden, und es ist kein Problem, wenn `no-cache` von Anfang an gegeben wird, da der Server immer die Anforderung erhält.

Wenn es der geteilte Cache ist, über den Sie sich Sorgen machen, können Sie sicherstellen, dass unerwünschtes Caching durch Hinzufügen von `private` verhindert wird:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Sie könnten denken, `no-store` hinzuzufügen wäre der richtige Weg, um das Caching zu deaktivieren.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu gewähren, da Sie viele Vorteile verlieren, die HTTP und Browser bieten, einschließlich dem Back/Forward-Cache des Browsers.

Daher ist es, um die Vorteile des gesamten Funktionssatzes der Webplattform zu erhalten, vorzuziehen, `no-cache` in Kombination mit `private` zu verwenden.

## Neu laden und erzwungenes Neuladen

Validierung kann für Anfragen sowie Antworten durchgeführt werden.

Die **Neu laden** und **erzwungenes Neuladen** Aktionen sind häufige Beispiele für die Validierung vom Server aus.

### Neu laden

Um von eine Fensterbeschädigung zu erholen oder zur neuesten Version der Ressource zu aktualisieren, bieten Browser eine Neu laden-Funktion für Benutzer an.

Eine vereinfachte Ansicht der HTTP-Anfrage, die während eines Browser-Neuladen gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0` Direktive in der Anfrage spezifiziert "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" — also, im Effekt, werden zwischengespeicherte Antworten nicht wiederverwendet.

Als Ergebnis wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch) Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus auf `no-cache` aufgerufen wird (beachten Sie, dass `reload` nicht der richtige Modus für diesen Fall ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neuladen

Browser verwenden `max-age=0` während des Neuladen aus Gründen der Abwärtskompatibilität — weil viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden. `no-cache` ist jedoch in diesem Anwendungsfall in Ordnung, und **erzwungenes Neuladen** ist eine zusätzliche Möglichkeit, um zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser-**erzwungenen Neuladen** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus; die Anfragen von Safari sehen etwas anders aus.)

Da das keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie vom Ursprungsserver ein `200 OK` erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch) Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus auf `reload` aufgerufen wird (beachten Sie, es ist nicht `force-reload`):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung von Revalidierung

Inhalte, die sich nie ändern, sollten durch Cache-Busting eine lange `max-age` erhalten — das heißt, indem eine Versionsnummer, ein Hash-Wert usw. in die Anfrage-URL aufgenommen wird.

Wenn der Benutzer jedoch neu lädt, wird eine Revalidierungsanfrage gesendet, auch wenn der Server weiß, dass der Inhalt unveränderlich ist.

Um das zu verhindern, kann die Direktive `immutable` verwendet werden, um ausdrücklich anzuzeigen, dass keine Revalidierung erforderlich ist, weil der Inhalt nie geändert wird.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Revalidierungen während des Neuladen.

Beachten Sie, dass, anstelle diese Direktive umzusetzen, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass keine Revalidierung während des Neuladen für Subressourcen durchgeführt wird.

## Löschen von gespeicherten Antworten

Es gibt keinen Weg, Antworten auf einem zwischengeschalteten Server zu löschen, die mit einer langen `max-age` gespeichert wurden.

Stellen Sie sich vor, dass die folgende Antwort von `https://example.com/` gespeichert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Sie möchten möglicherweise diese Antwort überschreiben, sobald sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert ist — da keine weiteren Anfragen den Server aufgrund der Zwischenspeicherung erreichen.

Eine der in der Spezifikation erwähnten Methoden ist das Senden einer Anfrage für die gleiche URL mit einer unsicheren Methode wie `POST`, aber für viele Clients ist das schwer zu tun.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) Header und der Direktivenwert können verwendet werden, um Browser-Caches zu leeren — aber haben keine Wirkung auf zwischengeschaltete Caches. Andernfalls verbleiben Antworten im Browser-Cache, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell eine Neuladen-, erzwungenes-Neuladen- oder Verlauf-löschen-Aktion durch.

Das Caching verringert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server nicht die Kontrolle über eine URL verlieren möchte — zum Beispiel, für den Fall, dass eine Ressource häufig aktualisiert wird — sollten Sie `no-cache` hinzufügen, sodass der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Anfragenzusammenführung

Der geteilte Cache befindet sich in der Regel vor dem Ursprungsserver und ist dazu gedacht, den Datenverkehr zum Ursprungsserver zu reduzieren.

Daher, wenn mehrere identische Anfragen gleichzeitig an einem geteilten Cache eintreffen, wird der zwischengeschaltete Cache im Namen von sich selbst eine einzige Anfrage an den Ursprung weiterleiten, der dann das Ergebnis für alle Clients wiederverwenden kann. Dies wird als _**Anfragenzusammenführung**_ bezeichnet.

Die Anfragenzusammenführung tritt auf, wenn Anfragen zur gleichen Zeit eintreffen, sodass auch wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, sie wiederverwendet wird.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie in der Zusammenführung geteilt wird, sollten Sie die `private` Direktive hinzufügen:

![Anfragenzusammenführung zeigt, wie mehrere Clients GET-Anfragen senden und ein Cache diese zu einer einzigen GET an den Ursprung zusammenfasst. Der Ursprungsserver antwortet mit einem 200 OK, den der Cache an alle Clients zurückgibt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Häufige Caching-Muster

Es gibt viele Direktiven in der `Cache-Control` Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites können durch eine Kombination aus einer Handvoll Mustern abgedeckt werden.

Dieser Abschnitt beschreibt die gängigen Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten für das Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht zwischenspeichern", sondern implizites Caching gemäß sogenanntem "heuristischem Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten ausdrücklich einen Standard-`Cache-Control` Header zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es gängige Praxis, den Standard-`Cache-Control` Wert so zu setzen, dass er `no-cache` enthält:

```http
Cache-Control: no-cache
```

Zusätzlich, wenn der Service Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss auch `private` angegeben werden, um die Freigabe mit anderen Benutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache-Busting

Die Ressourcen, die am besten mit Zwischenspeicherung funktionieren, sind statische, unveränderliche Dateien, deren Inhalt sich nie ändert. Und für Ressourcen, die sich _doch_ ändern, ist es eine übliche bewährte Praxis, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, damit die URL-Einheit länger zwischengespeichert werden kann.

Betrachten Sie als Beispiel das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung voranschreitet. Außerdem, wenn die Versionen der JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind, wird die Anzeige brechen.

Das obige HTML macht es daher schwer, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie das JavaScript und CSS mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hash-Wert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten gezeigt.

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

Da der Cache Ressourcen anhand ihrer URLs voneinander unterscheidet, wird der Cache nicht erneut verwendet, wenn sich die URL ändert, wenn eine Ressource aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für lange Zeit zwischengespeichert werden. Wie lange sollte `max-age` eingestellt werden? Die QPACK-Spezifikation gibt darauf eine Antwort.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Header-Feldern mit Tabellen von häufig verwendeten Feldwerten definiert.

Einige häufig verwendete Cache-Header-Werte werden unten gezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie Werte beim Transfer über HTTP3 in 1 Byte komprimieren.

Die Zahlen `37`, `38` und `41` sind für Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch existiert, nicht so hoch — selbst wenn `max-age` auf 1 Woche eingestellt ist. Daher macht es in der Praxis nicht viel Unterschied, welche Sie wählen.

Beachten Sie, dass die Zahl `41` die längste `max-age` (1 Jahr) hat, jedoch mit `public`.

Der `public` Wert hat die Wirkung, dass die Antwort auch dann gespeichert werden kann, wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Direktive sollte nur verwendet werden, wenn es erforderlich ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Ansonsten ist sie nicht erforderlich, da eine Antwort im geteilten Cache gespeichert wird, solange `max-age` angegeben wird.

Wenn die Antwort jedoch mit einfacher Authentifizierung personalisiert ist, kann die Präsenz von `public` Probleme verursachen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified` und `ETag` Header zu setzen, sodass Sie eine Ressource beim Neuladen nicht erneut übertragen müssen. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag` Wert hier kann ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

Zusätzlich kann `immutable` hinzugefügt werden, um die Validierung beim Neuladen zu verhindern.

Das kombinierte Ergebnis wird unten gezeigt.

```http
# bundle.v123.js
HTTP/1.1 200 OK
Content-Type: text/javascript
Content-Length: 1024
Cache-Control: public, max-age=31536000, immutable
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

**Cache-Busting** ist eine Technik, um eine Antwort über einen langen Zeitraum zwischenspeicherbar zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Diese Technik kann auf alle Unterressourcen, wie Bilder, angewendet werden.

> [!NOTE]
> Bei der Bewertung der Verwendung von `immutable` und QPACK:
> Wenn Sie sich Sorgen machen, dass `immutable` den vordefinierten Wert ändert, der von QPACK bereitgestellt wird, sollten Sie bedenken, dass
> in diesem Fall der `immutable` Teil separat codiert werden kann, indem der `Cache-Control` Wert in zwei Zeilen aufgeteilt wird — obwohl dies vom Codierungsalgorithmus abhängt, den eine bestimmte QPACK Implementierung verwendet.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Unterressourcen können Hauptressourcen nicht mit Cache-Busting versehen werden, da ihre URLs nicht im gleichen Maße wie Unterressourcen-URLs dekoriert werden können.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Für diesen Fall würde `no-cache` angemessen sein — statt `no-store` —, da wir HTML nicht speichern möchten, sondern es immer auf dem neuesten Stand sein soll.

Zusätzlich führen das Hinzufügen von `Last-Modified` und `ETag` dazu, dass Clients bedingte Anfragen senden können, und eine `304 Not Modified` zurückgegeben werden kann, wenn keine Updates für das HTML vorgenommen wurden:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Diese Einstellung ist angemessen für nicht personalisierte HTML, aber für eine Antwort, die mit Cookies personalisiert wird – beispielsweise nach einem Login – vergessen Sie nicht auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Das gleiche kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte, deren URLs nicht mit Cache-Busting geändert werden können, verwendet werden.

Der größte Teil der Webinhalte kann mit einer Kombination der beiden oben beschriebenen Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der in den vorherigen Abschnitten beschriebenen Methode können Unterressourcen durch Cache-Busting für eine lange Zeit zwischengespeichert werden, aber Hauptressourcen (in der Regel HTML-Dokumente) nicht.

Das Caching von Hauptressourcen ist schwierig, da es mit den Standard-Direktiven der HTTP-Caching-Spezifikation keinen Weg gibt, Cache-Inhalte aktiv zu löschen, wenn Inhalte auf dem Server aktualisiert werden.

Es ist jedoch möglich, indem Sie einen verwalteten Cache wie ein CDN oder einen Service Worker bereitstellen.

Zum Beispiel würde ein CDN, das Cache-Purging über eine API oder Dashboard-Operation erlaubt, eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der relevante Cache nur explizit bereinigt wird, wenn ein Update auf dem Server erfolgt.

Ein Service Worker könnte dasselbe tun, wenn er die Inhalte in der Cache-API löschen könnte, wenn auf dem Server ein Update erfolgt.

Für weitere Informationen lesen Sie die Dokumentation Ihres CDN und konsultieren Sie die [Service Worker Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [`Cache-Control` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)
- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://mnot.net/cache_docs/)
