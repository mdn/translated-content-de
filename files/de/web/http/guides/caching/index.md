---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: eff8aa047157f1bd4b1066cae7cc07eab2dcc0dd
---

Der HTTP-Cache speichert eine Antwort, die einer Anfrage zugeordnet ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Wiederverwendbarkeit hat mehrere Vorteile. Erstens, da es nicht notwendig ist, die Anfrage an den ursprünglichen Server zu richten, ist die Antwort umso schneller, je näher der Client und der Cache sind. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Wenn eine Antwort wiederverwendbar ist, muss der ursprüngliche Server die Anfrage nicht verarbeiten – er muss also nicht die Anfrage analysieren und weiterleiten, die Sitzung basierend auf dem Cookie wiederherstellen, die DB nach Ergebnissen abfragen oder die Template-Engine rendern. Dies reduziert die Auslastung des Servers.

Ein ordnungsgemäßer Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP Caching](https://httpwg.org/specs/rfc9111.html)-Spezifikation gibt es zwei Haupttypen von Caches: **Private Caches** und **Shared Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen bestimmten Client gebunden ist – typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits kann es, wenn personalisierte Inhalte in einem anderen als einem privaten Cache gespeichert werden, dazu kommen, dass andere Benutzer auf diese Inhalte zugreifen können – was zu unbeabsichtigten Informationslecks führen kann.

Wenn eine Antwort personalisierte Inhalte enthält und Sie möchten, dass die Antwort nur im privaten Cache gespeichert wird, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber das Vorhandensein eines Cookies bedeutet nicht immer, dass es sich um privat handelt, und daher macht ein Cookie allein die Antwort nicht privat.

### Gemeinsamer Cache

Der gemeinsame Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die unter Benutzern geteilt werden können. Und gemeinsame Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Zugriffssteuerung implementieren einige Proxies das Caching, um den Netzwerkverkehr zu reduzieren. Dies wird normalerweise nicht vom Dienstentwickler verwaltet, daher muss es durch geeignete HTTP-Header usw. gesteuert werden. In der Vergangenheit haben veraltete Proxy-Cache-Implementierungen – wie solche, die den HTTP-Caching-Standard nicht richtig verstehen – häufig Probleme für Entwickler verursacht.

**Kitchen-sink Headers** wie der folgende werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen, die aktuelle HTTP-Caching-Spezifikations-Direktiven wie `no-store` nicht verstehen, zu umgehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, da HTTPS häufiger geworden ist und die Client/Server-Kommunikation verschlüsselt stattfindet, können Proxy-Caches auf dem Weg in vielen Fällen eine Antwort nur tunnelieren und nicht als Cache fungieren. Daher besteht in diesem Szenario kein Grund zur Sorge über veraltete Proxy-Cache-Implementierungen, die die Antwort nicht einmal sehen können.

Wenn jedoch ein {{Glossary("TLS", "TLS")}}-Bridge-Proxy alle Kommunikationen in einer Person-in-the-Middle-Manier durch Installieren eines Zertifikats von einer von der Organisation auf dem PC verwalteten {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} entschlüsselt und Zugriffskontrolle usw. durchführt, ist es möglich, den Inhalt der Antwort zu sehen und zu cachen. Da [CT (Zertifikattransparenz)](/de/docs/Web/Security/Defenses/Certificate_Transparency) jedoch in den letzten Jahren weit verbreitet geworden ist und einige Browser nur Zertifikate akzeptieren, die mit einem SCT (signierter Zertifikat-Zeitstempel) ausgestellt wurden, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einem solchen kontrollierten Umfeld besteht kein Grund zur Sorge, dass der Proxy-Cache "veraltet und nicht aktualisiert" sein könnte.

#### Verwaltete Caches

Verwaltete Caches werden explizit von Dienstentwicklern bereitgestellt, um den Ursprungserver zu entlasten und Inhalte effizient bereitzustellen. Beispiele umfassen Reverse-Proxies, CDNs und Service Worker in Kombination mit der Cache-API.

Die Merkmale verwalteter Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches durch den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keine Möglichkeit, einen Cache explizit zu löschen – aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Dies ermöglicht eine proaktivere Caching-Strategie.

Es ist auch möglich, die Protokolle der standardmäßigen HTTP-Caching-Spezifikation zugunsten expliziter Manipulation zu ignorieren. Zum Beispiel kann das Folgende angegeben werden, um sich von einem privaten Cache oder Proxy-Cache abzumelden, während Sie Ihre eigene Strategie verwenden, um nur in einem verwalteten Cache zu cachen.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache VCL (Varnish Configuration Language, eine Art {{Glossary("DSL/Domain_specific_language", "DSL")}})-Logik zur Handhabung der Cache-Speicherung, während Service Worker in Kombination mit der Cache-API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, dass, wenn ein verwalteter Cache absichtlich eine `no-store`-Direktive ignoriert, dies nicht als "nicht konform" mit dem Standard wahrgenommen werden muss. Was Sie tun sollten, ist auf die Verwendung von Kitchen-sink Headers zu verzichten, aber die Dokumentation des verwendeten verwalteten Cache-Mechanismus sorgfältig zu lesen und sicherzustellen, dass Sie den Cache ordnungsgemäß in den von Ihnen gewählten Mechanismen kontrollieren.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird an der Definition eines [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Headers gearbeitet, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines gemeinsamen (Proxy-)Caches, eines Reverse-Proxy-Caches und eines gemeinsamen (verwalteten) Caches in einem CDN, die zum Cache des Ursprungservers führen](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist darauf ausgelegt, so viel wie möglich zu cachen, sodass selbst wenn kein `Cache-Control` angegeben ist, Antworten gespeichert und wiederverwendet werden, wenn bestimmte Bedingungen erfüllt sind. Dies wird **heuristisches Caching** genannt.

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

Es ist heuristisch bekannt, dass Inhalte, die ein volles Jahr lang nicht aktualisiert wurden, für einige Zeit danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des Fehlens eines `max-age`) und verwendet sie für eine Weile wieder. Wie lange die Wiederverwendung erfolgt, hängt von der Implementierung ab, aber die Spezifikation empfiehlt etwa 10% der Zeit (in diesem Fall 0,1 Jahr) nach dem Speichern.

Heuristisches Caching ist ein Workaround, der vor der allgemeinen Unterstützung von `Cache-Control` entstand, und im Grunde sollten alle Antworten explizit einen `Cache-Control`-Header angeben.

## Frisch und abgestanden basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **abgestanden**. Der _frische_ Zustand zeigt normalerweise an, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _abgestandene_ Zustand bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgestanden ist, ist das **Alter**. In HTTP ist das Alter die seit der Erstellung der Antwort verstrichene Zeit. Dies ist dem {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen ähnlich.

Sehen Sie sich das folgende Beispiel für eine Antwort an (604800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort gespeichert hat, berechnet die seit der Erstellung der Antwort verstrichene Zeit und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort ist die Bedeutung von `max-age` folgende:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _abgestanden_.

Solange die gespeicherte Antwort frisch bleibt, wird sie verwendet, um Anfragen von Clients zu erfüllen.

Wenn eine Antwort in einem gemeinsamen Cache gespeichert wird, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Setzen wir das Beispiel fort: Wenn der gemeinsame Cache die Antwort einen Tag lang gespeichert hat, würde der gemeinsame Cache die folgende Antwort an nachfolgende Clientanfragen senden.

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

Der Client, der diese Antwort erhält, wird sie für die verbleibenden 518400 Sekunden frisch finden, den Unterschied zwischen der `max-age` der Antwort und `Age`.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header angegeben.

Der `Expires`-Header gibt die Lebensdauer des Caches durch eine explizite Zeit an, anstatt durch eine Angabe der verstrichenen Zeit.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Das Zeitformat ist jedoch schwer zu analysieren, es wurden viele Implementierungsfehler gefunden, und es ist möglich, Probleme zu verursachen, indem die Systemuhr absichtlich verstellt wird. Daher wurde `max-age` – zur Angabe einer verstrichenen Zeit – für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, ist definiert, dass `max-age` bevorzugt wird. Daher ist es jetzt, da HTTP/1.1 weit verbreitet ist, nicht notwendig, `Expires` bereitzustellen.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortinhalt            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Die Inhalte von Antworten sind jedoch nicht immer gleich, selbst wenn sie dieselbe URL haben. Besonders, wenn Inhaltsverhandlungen durchgeführt werden, kann die Antwort vom Server von den Werten der Anfrage-Header `Accept`, `Accept-Language` und `Accept-Encoding` abhängen.

Zum Beispiel: Für englische Inhalte, die mit einem `Accept-Language: en`-Header zurückgegeben und zwischengespeichert werden, ist es unerwünscht, dass diese zwischengespeicherte Antwort dann für Anfragen wiederverwendet wird, die einen `Accept-Language: ja`-Anfrage-Header haben. In diesem Fall können Sie die Antworten basierend auf der Sprache separat cachen, indem Sie `Accept-Language` zum Wert des `Vary`-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das führt dazu, dass der Cache basierend auf einer Kombination aus der Antwort-URL und dem Anfrage-Header `Accept-Language` gespeichert wird – anstatt nur auf der Antwort-URL zu basieren.

| URL                              | `Accept-Language` | Antwortinhalt            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Auch wenn Sie Inhaltsoptimierung (zum Beispiel für responsives Design) basierend auf dem Benutzeragenten bereitstellen, könnten Sie versucht sein, `User-Agent` in den Wert des `Vary`-Headers aufzunehmen. Der `User-Agent`-Anfrage-Header hat jedoch in der Regel eine sehr große Anzahl von Varianten, was die Wahrscheinlichkeit drastisch verringert, dass der Cache wiederverwendet wird. Wenn möglich, überlegen Sie sich stattdessen eine Möglichkeit, das Verhalten basierend auf Funktionsüberprüfung zu variieren und nicht basierend auf dem `User-Agent`-Anfrage-Header.

Für Anwendungen, die Cookies verwenden, um zu verhindern, dass andere zwischengespeicherte personalisierte Inhalte wiederverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` anzugeben.

## Validierung

Veraltete Antworten werden nicht sofort verworfen. HTTP verfügt über einen Mechanismus, eine veraltete Antwort in eine frische Antwort zu verwandeln, indem der Ursprungserver gefragt wird. Dies wird **Validierung** oder manchmal auch **Revalidierung** genannt.

Die Validierung erfolgt durch die Verwendung einer **bedingten Anfrage**, die einen `If-Modified-Since`- oder `If-None-Match`-Anfrage-Header enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 erzeugt und hat eine `max-age` von 1 Stunde, sodass Sie wissen, dass sie bis 23:22:22 frisch ist.

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

Um 23:22:22 wird die Antwort abgestanden und der Cache kann nicht wiederverwendet werden. Die folgende Anfrage zeigt daher einen Client, der eine Anfrage mit einem `If-Modified-Since`-Anfrage-Header sendet, um den Server zu fragen, ob es seit der angegebenen Zeit Änderungen gab.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn sich der Inhalt seit der angegebenen Zeit nicht geändert hat.

Da diese Antwort nur "keine Änderung" angibt, gibt es keinen Antwortinhalt – es gibt nur einen Statuscode – sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Nachdem der Client diese Antwort erhalten hat, setzt er die gespeicherte veraltete Antwort wieder auf den frischen Zustand zurück und kann sie für die verbleibende Stunde erneut verwenden.

Der Server kann die Änderungszeit aus dem Betriebssystem-Dateisystem erhalten, was für den Fall der Bereitstellung statischer Dateien relativ einfach ist. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu analysieren, und verteilte Server haben Schwierigkeiten, Dateizeitstempel zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Antwort-Header als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Antwort-Headers ist ein beliebiger Wert, der durch den Server generiert wird. Es gibt keine Vorschriften darüber, wie der Server den Wert generieren muss, sodass Server frei sind, den Wert basierend auf beliebigen Mitteln festzulegen – wie zum Beispiel einem Hash des Antwortinhalts oder einer Versionsnummer.

Beispielsweise, wenn ein Hashwert für den `ETag`-Header verwendet wird und der Hashwert der Ressource `index.html` `33a64df5` beträgt, wird die Antwort wie folgt aussehen:

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

Wenn diese Antwort veraltet ist, nimmt der Client den Wert des `ETag`-Antwort-Headers für die zwischengespeicherte Antwort und fügt ihn in den `If-None-Match`-Anfrage-Header ein, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der Wert des `ETag`-Headers, den er für die angeforderte Ressource bestimmt, identisch mit dem `If-None-Match`-Wert in der Anfrage ist.

Bestimmt der Server jedoch, dass die angeforderte Ressource nun einen anderen `ETag`-Wert haben sollte, antwortet der Server stattdessen mit `200 OK` und der neuesten Version der Ressource.

> [!NOTE]
> RFC9110 zieht es vor, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, hat `If-None-Match` Vorrang für den Validator.
> Wenn Sie nur an Caching denken, könnten Sie denken, dass `Last-Modified` unnötig ist.
> `Last-Modified` ist jedoch nicht nur nützlich für das Caching; es ist ein standardmäßiger HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Crawlern, um die Crawling-Häufigkeit einzustellen, und für andere verschiedene Zwecke.
> Daher ist es im Hinblick auf das gesamte HTTP-Ökosystem besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwungene Revalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern stattdessen immer den neuesten Inhalt vom Server holen möchten, können Sie die `no-cache`-Direktive verwenden, um Validierung zu erzwingen.

Durch das Hinzufügen von `Cache-Control: no-cache` zur Antwort zusammen mit `Last-Modified` und `ETag` – wie unten gezeigt – erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder erhält andernfalls eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

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
> Die `no-cache`-Direktive (oder gleichwertige, wie `max-age=0, must-revalidate`) garantiert keine Revalidierung bei Verlaufssnavigierungen – wie sie beispielsweise mit der <kbd>Zurück</kbd>-Taste gemacht werden.
> Wenn der Zurück-/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Schnappschuss der Seite wieder her, ohne erneut zu validieren.
> Selbst wenn der bfcache nicht verwendet wird, kann der Browser trotzdem die zwischengespeicherte Antwort bedienen, ohne erneut zu validieren.
> Dies ist [durch die Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Verlaufssnavigierungen normalerweise als Wiederherstellung eines Schnappschusses einer historischen Sitzung und nicht als neue Anfrage für eine zuvor besuchte Seite behandelt werden.

Oft wird behauptet, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung hat wie `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort abgestanden ist, und `must-revalidate` bedeutet, dass sie nicht wiederverwendet werden darf, ohne erneut zu validieren, sobald sie abgestanden ist – so erscheint die Semantik in Kombination die gleiche wie `no-cache`.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache`-Direktive zu verarbeiten – und daher wurde `max-age=0` als Workaround verwendet, um diese Einschränkung zu bewältigen.

Da mittlerweile HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund mehr, diese Kombination von `max-age=0` und `must-revalidate` zu verwenden – Sie sollten stattdessen einfach `no-cache` verwenden.

## Nicht cachen

Die `no-cache`-Direktive verhindert nicht das Speichern von Antworten, sondern verhindert stattdessen die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in einem beliebigen Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen entspricht eine Anforderung "nicht zu cachen" jedoch in der Praxis den folgenden Umständen:

- Die Antwort soll von niemand anderem als dem spezifischen Client aus Datenschutzgründen gespeichert werden.
- Immer aktuelles Wissen bereitstellen.
- Keine Ahnung, was bei veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die geeignetste Direktive.

Die folgenden Abschnitte beleuchten die Umstände genauer.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar ist.

In einem solchen Fall bewirkt die Verwendung der `private`-Direktive, dass die personalisierte Antwort nur beim spezifischen Client gespeichert wird und nicht für andere Benutzer des Caches sichtbar ist.

```http
Cache-Control: private
```

Auch wenn `no-store` in einem solchen Fall gegeben wird, muss auch `private` angegeben werden.

### Immer aktuelle Inhalte bereitstellen

Die `no-store`-Direktive verhindert, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für dieselbe URL.

Mit anderen Worten, wenn es bereits eine alte Antwort für eine bestimmte URL gibt, wird `no-store` das weitere Verwenden dieser alten Antwort nicht verhindern.

Eine `no-cache`-Direktive dagegen erzwingt eine Validierungsanfrage des Clients, bevor eine gespeicherte Antwort erneut verwendet wird.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client dazu zwingen, bei jedem Zugriff auf den Server immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, könnten Kitchen-sink Headers wie die folgenden verwendet werden.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative zu verwenden, um mit solchen veralteten Implementierungen umzugehen. Es stellt kein Problem dar, wenn `no-cache` von Anfang an gegeben wird, da der Server immer die Anfrage erhält.

Wenn der geteilte Cache besorgniserregend ist, können Sie sicherstellen, dass ungewolltes Zwischenspeichern verhindert wird, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Möglicherweise denken Sie, dass das Hinzufügen von `no-store` der richtige Weg ist, um das Caching zu beenden.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu gewähren, da Sie viele Vorteile, die HTTP und Browser bieten, verlieren, einschließlich des Zurück-/Vorwärts-Caching des Browsers.

Daher sollten Sie, um die Vorteile der vollständigen Funktionalität der Webplattform zu nutzen, die Verwendung von `no-cache` in Kombination mit `private` bevorzugen.

## Neu laden und erzwungenes Neu-Laden

Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Die **Neu-Laden**- und **Erzwungenes Neu-Laden**-Aktionen sind häufige Beispiele für Validierung durch den Browser.

### Neu laden

Um Fensterkorruption zu beheben oder auf die neueste Version der Ressource zu aktualisieren, stellen Browser eine Neu-Laden-Funktion für die Benutzer bereit.

Eine vereinfachte Ansicht der HTTP-Anfrage während eines Browser-Neu-Ladens sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus wie die obige; die Anfragen von Safari werden etwas anders aussehen.)

Die `max-age=0`-Direktive in der Anfrage spezifiziert "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" – so werden zwischengespeicherte Antworten effektiv nicht wiederverwendet.

Daraus resultiert, dass eine Anfrage mit `If-None-Match` und `If-Modified-Since` validiert wird.

Dieses Verhalten ist auch in der [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Spezifikation definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `no-cache` aufgerufen wird (beachten Sie, dass `reload` in diesem Fall nicht der richtige Modus ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neu-Laden

Browser verwenden `max-age=0` während des Neu-Ladens aus Gründen der Rückwärtskompatibilität – weil viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden haben. Aber `no-cache` ist jetzt in diesem Anwendungsfall in Ordnung, und **erzwungenes Neu-Laden** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser-**Erzwungenen Neu-Ladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus wie die obige; die Anfragen von Safari werden etwas anders aussehen.)

Da es sich nicht um eine bedingte Anfrage mit `no-cache` handelt, können Sie sicher sein, dass Sie ein `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch in der [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Spezifikation definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `reload` aufgerufen wird (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung der Revalidierung

Inhalte, die sich nie ändern, sollten durch Cache-Busting eine lange `max-age` erhalten – das bedeutet, dass in der URL der Anfrage eine Versionsnummer, ein Hashwert usw. enthalten sind.

Wenn der Benutzer jedoch erneut lädt, wird eine Revalidierungsanfrage gesendet, obwohl der Server weiß, dass der Inhalt unveränderlich ist.

Um dies zu verhindern, kann die `immutable`-Direktive verwendet werden, um ausdrücklich anzugeben, dass keine Revalidierung erforderlich ist, weil der Inhalt sich nie ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Revalidierungen bei Neuladungen.

Beachten Sie, dass anstatt diese Direktive zu implementieren, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass keine Revalidierung bei Neuladungen für Unterressourcen durchgeführt wird.

## Löschen von gespeicherten Antworten

Es gibt keine Möglichkeit, Antworten auf einem Zwischenserver zu löschen, die mit einer langen `max-age` gespeichert wurden.

Stellen Sie sich vor, dass die folgende Antwort von `https://example.com/` gespeichert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Sie möchten diese Antwort überschreiben, sobald sie auf dem Server abgelaufen ist, aber es kann nichts unternommen werden, sobald die Antwort gespeichert wurde – da aufgrund des Cachings keine Anfragen mehr den Server erreichen.

Eine der in der Spezifikation erwähnten Methoden ist das Senden einer Anfrage für die gleiche URL mit einer unsicheren Methode wie `POST`, aber für viele Clients ist dies schwierig.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Header und der Direktivwert können verwendet werden, um Browser-Caches zu löschen – haben jedoch keinen Einfluss auf Zwischen-Caches.
Andernfalls bleiben Antworten im Browser-Cache, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell eine Neu-Ladung, ein erzwungenes Neu-Laden oder eine Verlaufslöschung durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server die Kontrolle über eine URL nicht verlieren möchte – zum Beispiel im Fall, dass eine Ressource häufig aktualisiert wird – sollten Sie `no-cache` hinzufügen, sodass der Server immer Anfragen erhält und die beabsichtigten Antworten senden kann.

## Anfragen-Kollaps

Der gemeinsame Cache befindet sich in der Regel vor dem Ursprungsserver und soll den Verkehr zum Ursprungsserver reduzieren.

Daher, wenn mehrere identische Anfragen gleichzeitig an einen gemeinsamen Cache gelangen, leitet der Zwischen-Cache eine einzelne Anfrage stellvertretend für sich selbst an den Ursprung weiter, die dann für alle Clients wiederverwendet werden kann. Dies nennt man _**Anfragen-Kollaps**_.

Anfragen-Kollaps tritt auf, wenn Anfragen gleichzeitig eintreffen, sodass selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, diese wiederverwendet wird.

Wenn die Antwort auf einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie im Kollaps geteilt wird, sollten Sie die `private`-Direktive hinzufügen:

![Anfragen-Kollaps dargestellt als mehrere Clients, die GET-Anfragen senden und ein Cache, der sie in eine GET-Anfrage an den Ursprung zusammenfasst. Der Ursprungsserver antwortet mit einem 200 OK, das der Cache wiederum an alle Clients weiterleitet.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Gemeinsame Caching-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites sind durch eine Kombination von einigen Mustern abgedeckt.

In diesem Abschnitt werden die allgemeinen Muster beim Entwerfen von Caches beschrieben.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten beim Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern implizites Caching gemäß sogenanntem "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten einen Standard-`Cache-Control`-Header explizit zu geben.

Um sicherzustellen, dass immer die neuesten Versionen von Ressourcen übertragen werden, ist es gängige Praxis, den Standardwert von `Cache-Control` mit `no-cache` festzulegen:

```http
Cache-Control: no-cache
```

Darüber hinaus, wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und die Inhalte für jeden Benutzer personalisiert werden, muss auch `private` gegeben werden, um das Teilen mit anderen Benutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache Busting

Die Ressourcen, die am besten mit Caching funktionieren, sind statische unveränderliche Dateien, deren Inhalt sich nie ändert. Und für Ressourcen, die _doch_ geändert werden, ist es eine gängige Best Practice, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, damit die URL-Einheit für einen längeren Zeitraum im Cache bleiben kann.

Als Beispiel betrachten Sie das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, wenn Fortschritte in der Entwicklung gemacht werden. Außerdem, wenn die Versionen von JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind, wird die Darstellung brechen.

Das oben gezeigte HTML macht es daher schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie JavaScript und CSS mit URLs bedienen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hashwert enthalten. Einige Möglichkeiten dazu sind unten gezeigt.

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

Da der Cache Ressourcen voneinander unterscheidet, die auf ihren URLs basieren, wird der Cache nicht erneut verwendet, wenn sich die URL ändert, wenn eine Ressource aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript als auch CSS-Ressourcen für lange Zeit im Cache bleiben. Wie lange sollte `max-age` eingestellt werden? Die QPACK-Spezifikation liefert eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Header-Feldern, mit Tabellen von häufig verwendeten Feldwerten.

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

Die Nummern `37`, `38` und `41` stehen für Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch existiert, nicht sehr hoch – auch wenn `max-age` auf 1 Woche eingestellt ist. Daher macht es in der Praxis keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass die Nummer `41` die längste `max-age` (1 Jahr) hat, aber mit `public`.

Der `public`-Wert hat die Wirkung, dass die Antwort auch dann speicherbar ist, wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Direktive sollte nur verwendet werden, wenn es notwendig ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Sie ist nicht ansonsten erforderlich, da eine Antwort im gemeinsamen Cache gespeichert wird, solange `max-age` gegeben ist.

Wenn die Antwort jedoch mit einfacher Authentifizierung personalisiert ist, kann das Vorhandensein von `public` Probleme verursachen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified`- und `ETag`-Header zu setzen, sodass Sie beim Neuladen eine Ressource nicht erneut übertragen müssen. Es ist einfach, solche Header für vorgefertigte statische Dateien zu generieren.

Der `ETag`-Wert hier kann ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

Darüber hinaus kann `immutable` hinzugefügt werden, um die Validierung beim Neuladen zu verhindern.

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

**Cache Busting** ist eine Technik, eine Antwort über einen langen Zeitraum im Cache zu halten, indem die URL geändert wird, wenn sich der Inhalt ändert. Die Technik kann auf alle Teilressourcen angewendet werden, wie Bilder.

> [!NOTE]
> Wenn die Verwendung von `immutable` und QPACK bewertet wird:
> Wenn Sie sich Sorgen machen, dass `immutable` den von QPACK bereitgestellten vordefinierten Wert ändert, beachten Sie, dass
> in diesem Fall der `immutable`-Teil getrennt codiert werden kann, indem der `Cache-Control`-Wert in zwei Zeilen aufgeteilt wird – obwohl dies davon abhängt, welchen Kodierungsalgorithmus eine bestimmte QPACK-Implementierung verwendet.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Teilressourcen können Hauptressourcen nicht durch Cache Busting geändert werden, da ihre URLs nicht auf die gleiche Weise dekoriert werden können wie die URLs von Teilressourcen.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

In diesem Fall wäre `no-cache` angebracht – anstelle von `no-store` – da wir kein HTML speichern möchten, sondern nur, dass es immer auf dem neuesten Stand ist.

Darüber hinaus ermöglicht das Hinzufügen von `Last-Modified` und `ETag` den Clients, bedingte Anfragen zu senden, und ein `304 Not Modified` kann zurückgegeben werden, wenn keine Updates für das HTML erfolgt sind:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Diese Einstellung ist für nicht-personalisiertes HTML geeignet, aber für eine Antwort, die mithilfe von Cookies – beispielsweise nach einem Login – personalisiert wird, vergessen Sie nicht, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Das gleiche kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht durch Cache Busting geändert werden können.

Die meisten Webinhalte können durch eine Kombination der beiden oben beschriebenen Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der in den vorherigen Abschnitten beschriebenen Methode können Unterressourcen durch den Einsatz von Cache Busting für einen langen Zeitraum zwischengespeichert werden, aber Hauptressourcen (die normalerweise HTML-Dokumente sind) können es nicht.

Das Caching von Hauptressourcen ist schwierig, da es, wenn man nur die standardmäßigen Direktiven der HTTP-Caching-Spezifikation verwendet, keine Möglichkeit gibt, Cache-Inhalte aktiv zu löschen, wenn Inhalte auf dem Server aktualisiert werden.

Es ist jedoch möglich, indem man einen verwalteten Cache wie ein CDN oder einen Service Worker einsetzt.

Ein CDN, dass das Cache-Bereinigung über eine API oder Dashboard-Operation ermöglicht, würde es ermöglichen, eine aggressivere Caching-Strategie zu verfolgen, indem die Hauptressource gespeichert und der relevante Cache nur dann explizit bereinigt wird, wenn ein Update auf dem Server stattfindet.

Ein Service Worker könnte dasselbe tun, wenn es ihm möglich ist, die Inhalte in der Cache API zu löschen, wenn ein Update auf dem Server erfolgt.

Für weitere Informationen, siehe die Dokumentation des CDNs, und konsultieren Sie die [Dokumentation zu Service Workers](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://mnot.net/cache_docs/)
