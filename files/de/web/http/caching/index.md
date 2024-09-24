---
title: HTTP-Caching
slug: Web/HTTP/Caching
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

## Übersicht

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verknüpft ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen wieder.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Erstens, da die Anfrage nicht an den Ursprungsserver gesendet werden muss, ist die Antwort umso schneller, je näher der Client und der Cache beieinander sind. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Auch wenn eine Antwort wiederverwendbar ist, muss der Ursprungsserver die Anfrage nicht verarbeiten – er muss die Anfrage nicht analysieren und weiterleiten, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine ausführen. Das verringert die Auslastung des Servers.

Der ordnungsgemäße Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP-Caching](https://httpwg.org/specs/rfc9111.html)-Spezifikation gibt es zwei Haupttypen von Caches: **Private Caches** und **Shared Caches**.

### Private Caches

Ein privater Cache ist an einen bestimmten Client gebunden – typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Nutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem Cache gespeichert werden, der kein privater Cache ist, könnten andere Nutzer in der Lage sein, diese Inhalte abzurufen – was eine unbeabsichtigte Informationsweitergabe verursachen könnte.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise über Cookies gesteuert, aber die Anwesenheit eines Cookies deutet nicht immer darauf hin, dass es privat ist, und daher macht allein ein Cookie die Antwort nicht privat.

### Shared Cache

Der Shared Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die zwischen Nutzern geteilt werden können. Zudem lassen sich Shared Caches weiter in **Proxy-Caches** und **verwaltete Caches** unterteilen.

#### Proxy-Caches

Zusätzlich zur Zugriffssteuerung implementieren einige Proxies Caching, um den Netzwerkverkehr zu reduzieren. Dies wird normalerweise nicht vom Dienstentwickler verwaltet, daher muss es durch entsprechende HTTP-Header und ähnliches gesteuert werden. Allerdings haben in der Vergangenheit veraltete Proxy-Cache-Implementierungen – wie Implementierungen, die den HTTP-Caching-Standard nicht ordnungsgemäß verstehen – häufig Probleme für Entwickler verursacht.

**Kitchen-Sink-Header** wie der folgende werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikationsdirektiven wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, da HTTPS häufiger geworden ist und die Client/Server-Kommunikation verschlüsselt wird, können Proxy-Caches in der Regel nur eine Antwort tunneln und können in vielen Fällen nicht als Cache fungieren. In diesem Szenario müssen Sie sich also keine Sorgen über veraltete Proxy-Cache-Implementierungen machen, die die Antwort nicht einmal sehen können.

Andererseits, wenn ein {{Glossary("TLS")}}-Bridge-Proxy alle Kommunikationen in einer Man-in-the-Middle-Manier durch Installation eines von der Organisation verwalteten {{Glossary("Certificate_authority", "CA (certificate authority)")}} Zertifikats auf dem PC entschlüsselt und Zugriffskontrolle usw. durchführt, ist es möglich, den Inhalt der Antwort zu sehen und sie zwischenspeichern. Da jedoch [CT (Certificate Transparency)](/de/docs/Web/Security/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate mit einem SCT (Signed Certificate Timestamp) zulassen, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung müssen Sie sich keine Sorgen über veraltete Proxy-Cache-Implementierungen machen.

#### Verwaltete Caches

Verwaltete Caches werden explizit von Dienstentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient auszuliefern. Beispiele sind Reverse Proxies, CDNs und Service Worker in Kombination mit der Cache-API.

Die Merkmale von verwalteten Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches über den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keine Möglichkeit, einen Cache explizit zu löschen – aber bei einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Das ermöglicht eine proaktivere Caching-Strategie.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten expliziter Manipulationen zu ignorieren. Zum Beispiel kann das Folgende angegeben werden, um sich von einem privaten Cache oder Proxy-Cache abzumelden, während Sie Ihre eigene Strategie verwenden, um nur in einem verwalteten Cache zu cachen.

```http
Cache-Control: no-store
```

So verwendet beispielsweise Varnish Cache VCL (Varnish Configuration Language, eine Art von {{Glossary("DSL/Domain_specific_language", "DSL")}}) Logik zur Handhabung der Cache-Speicherung, während Service Worker in Kombination mit der Cache-API Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, wenn ein verwalteter Cache eine `no-store`-Richtlinie absichtlich ignoriert, muss dies nicht als "nicht konform" mit dem Standard betrachtet werden. Was Sie tun sollten, ist, die Verwendung von Kitchen-Sink-Headern zu vermeiden, sondern die Dokumentation des verwendeten verwalteten Cache-Mechanismus sorgfältig zu lesen und sicherzustellen, dass Sie den Cache auf die von Ihnen gewählte Art und Weise ordnungsgemäß steuern.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html) Header zu definieren, um diese zu standardisieren.

![Art des Caches](type-of-cache.png)

## Heuristisches Caching

HTTP ist so konzipiert, dass so viel wie möglich gecacht wird. Auch wenn kein `Cache-Control`-Header angegeben ist, werden Antworten gespeichert und wiederverwendet, wenn bestimmte Bedingungen erfüllt sind. Dies nennt man **heuristisches Caching**.

Beispielsweise wird die folgende Antwort herangezogen. Diese Antwort wurde zuletzt vor 1 Jahr aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Di, 22 Feb 2022 22:22:22 GMT
Last-Modified: Di, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die ein ganzes Jahr lang nicht aktualisiert wurden, auch danach für einige Zeit nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz fehlendem `max-age`) und verwendet sie eine Weile wieder. Wie lange die Wiederverwendung dauert, bleibt der Implementierung überlassen. Die Spezifikation empfiehlt jedoch etwa 10 % (in diesem Fall 0,1 Jahr) der Zeit nach der Speicherung.

Heuristisches Caching ist ein Workaround, der entstanden ist, bevor `Cache-Control`-Unterstützung weit verbreitet war, und im Grunde sollten alle Antworten einen `Cache-Control`-Header explizit angeben.

## Frisch und abgelaufen basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **Frisch** und **Abgelaufen**. Der _Frisch_-Status weist normalerweise darauf hin, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _Abgelaufen_-Status bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgelaufen ist, ist **Alter**. Im HTTP ist das Alter die Zeit, die seit der Erstellung der Antwort vergangen ist. Dies ist ähnlich wie im {{Glossary("TTL")}} in anderen Caching-Mechanismen.

Betrachten wir die folgende Beispielantwort (604800 Sekunden entsprechen einer Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Di, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort gespeichert hat, berechnet die seit der Erstellung der Antwort vergangene Zeit und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _abgelaufen_.

Solange die gespeicherte Antwort frisch bleibt, wird sie weiterhin verwendet, um Client-Anfragen zu erfüllen.

Wenn eine Antwort in einem Shared Cache gespeichert wird, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Fortsetzend mit dem Beispiel, wenn der Shared Cache die Antwort einen Tag lang gespeichert hat, würde der Shared Cache die folgende Antwort an nachfolgende Client-Anfragen senden.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Di, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800
Age: 86400

<!doctype html>
…
```

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden, die Differenz zwischen `max-age` und `Age`, frisch bleibt.

## Verfallsdatum oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header angegeben.

Der `Expires`-Header gibt die Lebensdauer des Caches mit einer expliziten Zeit an, anstatt eine vergangene Zeit anzugeben.

```http
Expires: Di, 28 Feb 2022 22:22:22 GMT
```

Das Zeitformat ist jedoch schwer zu analysieren, viele Implementierungsfehler wurden gefunden, und es ist möglich, Probleme durch absichtliches Verschieben der Systemuhr zu verursachen. Daher wurde `max-age` – zur Angabe einer vergangenen Zeit – für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, wird definiert, dass `max-age` bevorzugt wird. Es ist also nicht notwendig, `Expires` bereitzustellen, jetzt da HTTP/1.1 weit verbreitet ist.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Response body            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber die Inhalte von Antworten sind nicht immer gleich, auch wenn sie die gleiche URL haben. Besonders bei der Inhaltsaushandlung kann die Antwort des Servers von den Werten der `Accept`, `Accept-Language` und `Accept-Encoding` Anfrage-Header abhängen.

Zum Beispiel, wenn englische Inhalte mit einem `Accept-Language: en` Header zurückgegeben und gecacht werden, ist es unerwünscht, diese zwischengespeicherte Antwort für Anfragen mit einem `Accept-Language: ja` Anfrage-Header wiederzuverwenden. In diesem Fall können Sie die Antworten basierend auf der Sprache getrennt cachen, indem Sie "`Accept-Language`" zum Wert des `Vary`-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das verursacht, dass der Cache basierend auf einer Kombination aus der Antwort-URL und dem `Accept-Language`-Anfrage-Header abgefragt wird – anstatt basierend nur auf der Antwort-URL.

| URL                              | `Accept-Language` | Response body            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Auch wenn Sie eine Inhaltsoptimierung (zum Beispiel für Responsive Design) basierend auf dem User-Agent bereitstellen, könnten Sie versucht sein, "`User-Agent`" im Wert des `Vary`-Headers anzugeben. Der `User-Agent`-Anfrage-Header hat jedoch im Allgemeinen eine sehr große Anzahl von Variationen, was die Wahrscheinlichkeit einer Wiederverwendung des Caches drastisch verringert. Wenn möglich, überlegen Sie daher, das Verhalten eher anhand der Funktionsprüfung als anhand des `User-Agent`-Anfrage-Headers zu variieren.

Für Anwendungen, die Cookies verwenden, um andere davon abzuhalten, zwischengespeicherten personalisierten Inhalt wiederzuverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` anzugeben.

## Validierung

Abgelaufene Antworten werden nicht sofort verworfen. HTTP verfügt über einen Mechanismus, eine abgelaufene Antwort in eine frische zu verwandeln, indem der Ursprungsserver gefragt wird. Dies wird als **Validierung** oder manchmal **Revalidierung** bezeichnet.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die einen `If-Modified-Since` oder `If-None-Match` Anfrage-Header enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 generiert und hat ein `max-age` von 1 Stunde, sodass Sie wissen, dass sie bis 23:22:22 frisch bleibt.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Di, 22 Feb 2022 22:22:22 GMT
Last-Modified: Di, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600

<!doctype html>
…
```

Um 23:22:22 wird die Antwort abgelaufen und kann nicht wiederverwendet werden. Daher zeigt die folgende Anfrage, wie ein Client eine Anfrage mit einem `If-Modified-Since` Anfrage-Header sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Di, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn sich der Inhalt seit der angegebenen Zeit nicht geändert hat.

Da diese Antwort nur "keine Änderung" indiziert, gibt es keinen Antwortkörper – es gibt nur einen Statuscode – sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Di, 22 Feb 2022 23:22:22 GMT
Last-Modified: Di, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Der Server kann die Änderungszeit aus dem Betriebssystemdateisystem abrufen, was relativ einfach für den Fall der Bereitstellung statischer Dateien ist. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu analysieren, und verteilte Server haben Schwierigkeiten, Dateiaktualisierungszeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag` Antwort-Header als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag` Antwort-Headers ist ein willkürlicher Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, daher können Server den Wert nach jeder Methode setzen, die sie wählen – wie ein Hash des Inhalts oder eine Versionsnummer.

Beispielsweise, wenn ein Hashwert für den `ETag`-Header verwendet wird und der Hashwert der `index.html` Ressource `33a64df5` ist, wird die Antwort wie folgt sein:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Di, 22 Feb 2022 22:22:22 GMT
ETag: "33a64df5"
Cache-Control: max-age=3600

<!doctype html>
…
```

Wenn diese Antwort abgelaufen ist, nimmt der Client den Wert des `ETag` Antwort-Headers für die gecachte Antwort und fügt ihn in den `If-None-Match` Anfrage-Header ein, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der Wert des `ETag`-Headers, den er für die angeforderte Ressource bestimmt, dem `If-None-Match`-Wert in der Anfrage entspricht.

Wenn der Server jedoch feststellt, dass die angeforderte Ressource jetzt einen anderen `ETag`-Wert haben sollte, wird der Server stattdessen mit einem `200 OK` und der neuesten Version der Ressource antworten.

> [!NOTE]
> RFC9110 bevorzugt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Während der Cache-Revalidierung hat `If-None-Match` Vorrang, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind.
> Wenn Sie nur das Caching betrachten, könnten Sie denken, dass `Last-Modified` unnötig ist.
> `Last-Modified` ist jedoch nicht nur für das Caching nützlich; es ist ein standardmäßiger HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderung anzuzeigen, von Crawlern zur Anpassung der Crawl-Frequenz und für andere Zwecke.
> Daher ist es im Gesamten HTTP-Ökosystem besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwungene Neuprogrammierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern stattdessen immer den neuesten Inhalt vom Server abrufen möchten, können Sie die `no-cache`-Richtlinie verwenden, um die Validierung zu erzwingen.

Indem Sie `Cache-Control: no-cache` zur Antwort zusammen mit `Last-Modified` und `ETag` hinzufügen – wie unten gezeigt – erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder erhält andernfalls eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Di, 22 Feb 2022 22:22:22 GMT
Last-Modified: Di, 22 Feb 2022 22:00:00 GMT
ETag: deadbeef
Cache-Control: no-cache

<!doctype html>
…
```

Es wird oft behauptet, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung hat wie `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort abgelaufen ist, und `must-revalidate` bedeutet, dass sie nach Ablauf nicht wiederverwendet werden darf, ohne dass eine Revalidierung erfolgt – daher scheint die Kombination die gleichen Semantiken wie `no-cache` zu haben.

Diese Nutzung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache`-Richtlinie zu verarbeiten – und `max-age=0` wurde als Workaround verwendet, um mit dieser Einschränkung umzugehen.

Da nun HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund mehr, diese Kombination von `max-age=0` und `must-revalidate` zu verwenden – Sie sollten stattdessen einfach `no-cache` verwenden.

## Kein Caching

Die `no-cache`-Richtlinie verhindert nicht die Speicherung von Antworten, sondern verhindert stattdessen die Wiederverwendung von Antworten ohne Validierung.

Wenn Sie nicht möchten, dass eine Antwort in einem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Generell entspricht eine "Nicht-cachen"-Anforderung in der Praxis den folgenden Gegebenheiten:

- Die Antwort soll aus Datenschutzgründen von niemand anderem als dem spezifischen Client gespeichert werden.
- Möchte immer aktuelle Informationen bereitstellen.
- Weiß nicht, was in veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die angemessenste Richtlinie.

Die folgenden Abschnitte behandeln die Umstände genauer.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar wäre.

In einem solchen Fall führt die Verwendung der `private`-Richtlinie dazu, dass die personalisierte Antwort nur beim spezifischen Client gespeichert wird und nicht an andere Benutzer des Caches weitergegeben wird.

```http
Cache-Control: private
```

Auch wenn `no-store` angegeben ist, muss in einem solchen Fall ebenfalls `private` angegeben werden.

### Jedes Mal aktuelle Inhalte bereitstellen

Die `no-store`-Richtlinie verhindert, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für dieselbe URL.

Mit anderen Worten, wenn bereits eine alte Antwort für eine bestimmte URL gespeichert ist, verhindert die Rückgabe von `no-store` nicht die Wiederverwendung der alten Antwort.

Jedoch wird eine `no-cache`-Richtlinie den Client zwingen, eine Validierungsanfrage zu senden, bevor eine gespeicherte Antwort wiederverwendet wird.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client zwingen, jedes Mal auf den Server zuzugreifen und immer die neueste Antwort mit `200 OK` zu erhalten.

### Mit veralteten Implementierungen umgehen

Um mit veralteten Implementierungen, die `no-store` ignorieren, umzugehen, können Sie "Kitchen-Sink"-Header wie den folgenden sehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative zu verwenden, um mit solchen veralteten Implementierungen umzugehen, und es ist kein Problem, wenn `no-cache` von Anfang an gegeben wird, da der Server die Anfrage immer erhält.

Wenn es sich um den Shared Cache handelt, über den Sie sich Sorgen machen, können Sie sicherstellen, unbeabsichtigtes Caching zu verhindern, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was bei `no-store` verloren geht

Möglicherweise denken Sie, dass das Hinzufügen von `no-store` der richtige Weg wäre, um das Caching zu deaktivieren.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu vergeben, da Ihnen dadurch viele Vorteile von HTTP und Browsern verloren gehen, einschließlich des Back-/Forward-Caches des Browsers.

Daher, um die Vorteile des gesamten Funktionsumfangs der Webplattform zu nutzen, bevorzugen Sie die Verwendung von `no-cache` in Kombination mit `private`.

## Neuladen und erzwungenes Neuladen

Eine Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Die **Neuladen** und **Erzwungenes Neuladen** Aktionen sind gängige Beispiele für Validierungen, die von der Browserseite aus durchgeführt werden.

### Neuladen

Um sich von Fensterbeschädigungen zu erholen oder auf die neueste Version der Ressource zu aktualisieren, bieten Browser eine Neuladefunktion für Benutzer an.

Ein vereinfachter Überblick über die HTTP-Anfrage, die während eines Browser-Neuladens gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Di, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen der obigen sehr ähnlich; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0`-Richtlinie in der Anfrage spezifiziert die "Wiederverwendung nur von Antworten mit einem Alter von 0 Sekunden oder weniger" – sodass zwischengespeicherte Antworten im Effekt nicht wiederverwendet werden.

Dadurch wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `no-cache` aufgerufen wird (beachten Sie, dass `reload` in diesem Fall nicht der richtige Modus ist):

```js
// Hinweis: "reload" ist nicht der richtige Modus für ein normales Neuladen; "no-cache" ist es
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neuladen

Browser verwenden `max-age=0` während des Neuladens aus Gründen der Rückwärtskompatibilität – da viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden haben. Aber `no-cache` ist jetzt in diesem Fall in Ordnung, und **erzwungenes Neuladen** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Der HTTP-Antrag während eines Browser-**erzwungenen Neuladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen der obigen sehr ähnlich; die Anfragen von Safari sehen etwas anders aus.)

Da dies keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `reload` aufgerufen wird (beachten Sie, dass es nicht `force-reload` ist):

```js
// Hinweis: "reload" — anstatt "no-cache" — ist der richtige Modus für ein "erzwungenes Neuladen"
fetch("/", { cache: "reload" });
```

### Vermeidung von Neuprogrammierung

Inhalte, die sich nie ändern, sollten durch Cache-Busting – das heißt durch Hinzufügen einer Versionsnummer, eines Hash-Werts usw. in der Anfrage-URL – eine lange `max-age` erhalten.

Wenn der Benutzer jedoch neu lädt, wird trotz Cache-Busting immer noch eine Neuprogrammierungsanfrage gesendet, obwohl der Server weiß, dass der Inhalt unveränderlich ist.

Um dies zu verhindern, kann die `immutable`-Richtlinie verwendet werden, um explizit anzugeben, dass eine Neuprogrammierung nicht erforderlich ist, da der Inhalt sich nie ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Damit wird eine unnötige Neuprogrammierung während des Neuladens verhindert.

Beachten Sie, dass Chrome anstatt der Implementierung dieser Richtlinie [seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass für Unterressourcen während des Neuladens keine Neuprogrammierung durchgeführt wird.

## Löschen von gespeicherten Antworten

Es gibt im Wesentlichen keine Möglichkeit, Antworten zu löschen, die bereits mit einem langen `max-age` gespeichert wurden.

Stellen Sie sich vor, die folgende Antwort von `https://example.com/` wurde gespeichert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Sie möchten diese Antwort möglicherweise überschreiben, sobald sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, sobald die Antwort zwischengespeichert ist – da aufgrund des Cachings keine Anfragen mehr den Server erreichen.

Eine der in der Spezifikation erwähnten Methoden besteht darin, eine Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST` zu senden. Dies ist jedoch für viele Clients in der Regel schwer absichtlich zu tun.

Es gibt auch eine Spezifikation für einen `Clear-Site-Data: cache` Header und Wert, aber [nicht alle Browser unterstützen ihn](https://groups.google.com/a/mozilla.org/g/dev-platform/c/I939w1yrTp4) – und selbst wenn er verwendet wird, betrifft er nur Browser-Caches und hat keine Auswirkungen auf zwischengeschaltete Caches.

Daher sollte davon ausgegangen werden, dass jede gespeicherte Antwort für ihren `max-age`-Zeitraum verbleibt, es sei denn, der Benutzer führt manuell eine Neuladen-, Erzwungenes-Neuladen- oder Verlaufslöschen-Aktion durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server keine Kontrolle über eine URL verlieren möchte – zum Beispiel, wenn eine Ressource häufig aktualisiert wird – sollten Sie `no-cache` hinzufügen, damit der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Anfragezusammenbruch

Der Shared Cache befindet sich hauptsächlich vor dem Ursprungsserver und ist so konzipiert, den Datenverkehr zum Ursprungsserver zu reduzieren.

Wenn mehrere identische Anfragen gleichzeitig an einen Shared Cache gelangen, wird der Zwischen-Cache stellvertretend für sich selbst eine einzelne Anfrage an den Ursprungsserver weiterleiten und das Ergebnis für alle Clients wiederverwenden. Dies wird als _**Anfragezusammenbruch**_ bezeichnet.

Der Anfragezusammenbruch erfolgt, wenn Anfragen gleichzeitig eintreffen. Selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben werden, wird sie wiederverwendet.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie im Zusammenbruch geteilt wird, sollten Sie die `private`-Richtlinie hinzufügen:

![Anfragezusammenbruch](request-collapse.png)

## Häufige Caching-Muster

Es gibt viele Richtlinien in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Webseiten können durch Kombination einer Handvoll Muster abgedeckt werden.

In diesem Abschnitt werden häufige Muster bei der Gestaltung von Caches beschrieben.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten für Caching (das heißt für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern impliziertes Caching gemäß dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten einen Standard-`Cache-Control`-Header explizit zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es gängige Praxis, den Standardwert von `Cache-Control` mit `no-cache` zu versehen:

```http
Cache-Control: no-cache
```

Darüber hinaus, wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss ebenfalls `private` angegeben werden, um ein Teilen mit anderen Benutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache Busting

Die Ressourcen, die am besten mit Caching funktionieren, sind statische unveränderbare Dateien, deren Inhalt sich nie ändert. Und für Ressourcen, die _sich_ ändern, ist es eine übliche bewährte Praxis, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, sodass die URL-Einheit für einen längeren Zeitraum gecacht werden kann.

Als Beispiel betrachten Sie das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig mit fortschreitender Entwicklung aktualisiert. Auch wenn die JavaScript- und CSS-Versionen eines Clients nicht synchron sind, wird die Anzeige durcheinandergeraten.

Das obige HTML macht es daher schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie JavaScript und CSS mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hashwert enthalten. Einige der Wege, dies zu erreichen, sind unten gezeigt.

```plain
# Version im Dateinamen
bundle.v123.js

# Version im Abfrageparameter
bundle.js?v=123

# Hash im Dateinamen
bundle.YsAIAAAA-QG4G6kCMAMBAAAAAAAoK.js

# Hash im Abfrageparameter
bundle.js?v=YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

Da der Cache Ressourcen basierend auf ihren URLs voneinander unterscheidet, wird der Cache nicht mehr erneut verwendet, wenn sich die URL beim Update einer Ressource ändert.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen über einen langen Zeitraum gecacht werden. Wie lange sollte `max-age` sein? Die QPACK-Spezifikation bietet eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Headerfeldern mit Tabellen üblicherweise verwendeter Feldwerte.

Einige häufig verwendete Cache-Header-Werte sind unten gezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie Werte beim Transfer über HTTP3 in 1 Byte komprimieren.

Nummern `37`, `38` und `41` entsprechen Zeiträumen von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge abgespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort auch nach einer Woche noch existiert, nicht sehr hoch – selbst wenn `max-age` auf eine Woche eingestellt ist. Daher macht es in der Praxis keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass `41` die längste `max-age` (1 Jahr) hat, aber mit `public`.

Das `public`-Element bewirkt, dass die Antwort zwischengespeichert wird, selbst wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Richtlinie sollte nur verwendet werden, wenn es erforderlich ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Sie ist sonst nicht erforderlich, da eine Antwort im Shared Cache gespeichert wird, solange `max-age` angegeben ist.

Wenn die Antwort mit Basic-Authentifizierung personalisiert ist, kann `public` Probleme verursachen. Wenn Sie besorgt darüber sind, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# Antwort für bundle.v123.js

# Falls Sie niemals Antworten über Authorization personalisieren
Cache-Control: public, max-age=31536000

# Falls Sie sich nicht sicher sind
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified` und `ETag` Header zu setzen, damit eine Ressource bei einem Neuladen nicht erneut übertragen werden muss. Es ist einfach, diese Header für vorgebaute statische Dateien zu generieren.

Der `ETag`-Wert hier kann ein Hash der Datei sein.

```http
# Antwort für bundle.v123.js
Last-Modified: Di, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

Zudem kann `immutable` hinzugefügt werden, um die Validierung beim Neuladen zu verhindern.

Das kombinierte Ergebnis ist unten gezeigt.

```http
# bundle.v123.js
HTTP/1.1 200 OK
Content-Type: application/javascript
Content-Length: 1024
Cache-Control: public, max-age=31536000, immutable
Last-Modified: Di, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

**Cache Busting** ist eine Technik, um eine Antwort über einen langen Zeitraum cachefähig zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Die Technik kann auf alle Unterressourcen wie Bilder angewendet werden.

> [!NOTE]
> Bei der Auswertung der Verwendung von `immutable` und QPACK:
> Wenn Sie besorgt sind, dass `immutable` den von QPACK vorgegebenen Wert ändert, können Sie, in diesem Fall, den `immutable`-Teil separat codieren, indem Sie den `Cache-Control`-Wert in zwei Zeilen aufteilen, obwohl dies je nach Codierungsalgorithmus der jeweiligen QPACK-Implementierung abhängig ist.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Unterressourcen können Hauptressourcen nicht durch Cache-Busting zwischengespeichert werden, da ihre URLs nicht auf die gleiche Weise wie die URLs von Unterressourcen dekoriert werden können.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

In diesem Fall wäre `no-cache` angemessen – anstatt `no-store` – da wir nicht möchten, dass das HTML zwischengespeichert wird, sondern es immer aktuell sein soll.

Zusätzlich ermöglichen `Last-Modified` und `ETag` dem Client, bedingte Anfragen zu senden, und ein `304 Not Modified` kann zurückgegeben werden, wenn es keine Updates am HTML gegeben hat:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Di, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
```

Diese Einstellung ist für nicht personalisiertes HTML geeignet, aber bei einer Antwort, die mithilfe von Cookies personalisiert wird – zum Beispiel nach einem Login – vergessen Sie nicht, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Di, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Das gleiche kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht durch Cache-Busting geändert werden können.

Die meisten Webinhalte werden durch eine Kombination der beiden oben beschriebenen Muster abgedeckt.

### Mehr über verwaltete Caches

Mit der in den vorhergehenden Abschnitten beschriebenen Methode können Unterressourcen durch Cache-Busting über einen langen Zeitraum hinweg zwischengespeichert werden, Hauptressourcen (die normalerweise HTML-Dokumente sind) jedoch nicht.

Das Caching von Hauptressourcen ist schwierig, da es mit nur standardmäßigen Direktiven aus der HTTP-Caching-Spezifikation keinen Weg gibt, zwischengespeicherte Inhalte aktiv zu löschen, wenn der Inhalt auf dem Server aktualisiert wird.

Es ist jedoch möglich, indem ein verwalteter Cache wie ein CDN oder ein Service Worker bereitgestellt wird.

Ein CDN zum Beispiel, das das Cache-Löschen über eine API oder Dashboard-Operation ermöglicht, würde eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der entsprechende Cache ausdrücklich nur gelöscht wird, wenn ein Update auf dem Server stattfindet.

Ein Service Worker könnte dasselbe tun, wenn er in der Lage wäre, die Inhalte in der Cache-API zu löschen, wenn ein Update auf dem Server stattfindet.

Für weitere Informationen sehen Sie die Dokumentation Ihres CDN ein und konsultieren Sie die [Service Worker-Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching-Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
