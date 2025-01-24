---
title: HTTP-Caching
slug: Web/HTTP/Caching
l10n:
  sourceCommit: f3e64113171f7392a38b69d974ea92fd92a78541
---

{{HTTPSidebar}}

## Übersicht

Der HTTP-Cache speichert eine Antwort, die einer Anfrage zugeordnet ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Da die Anfrage nicht an den Ursprungsserver gesendet werden muss, gilt: Je näher der Client und der Cache beieinander liegen, desto schneller wird die Antwort bereitgestellt. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Außerdem muss der Ursprungsserver, wenn eine Antwort wiederverwendbar ist, die Anfrage nicht verarbeiten — er muss die Anfrage also nicht analysieren und weiterleiten, die Sitzung basierend auf dem Cookie wiederherstellen, die DB nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Last auf dem Server.

Ein ordnungsgemäßer Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP-Caching](https://httpwg.org/specs/rfc9111.html)-Spezifikation gibt es zwei Hauptarten von Caches: **private Caches** und **gemeinsame Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen bestimmten Client gebunden ist — typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Auf der anderen Seite, wenn personalisierte Inhalte in einem anderen als einem privaten Cache gespeichert werden, können andere Benutzer diese Inhalte möglicherweise abrufen — was ungewollte Informationslecks verursachen kann.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber das Vorhandensein eines Cookies zeigt nicht immer an, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Gemeinsamer Cache

Der gemeinsame Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die zwischen Benutzern geteilt werden können. Gemeinsame Caches können weiter unterteilt werden in **Proxy-Caches** und **verwaltete Caches**.

#### Proxy-Caches

Zusätzlich zur Funktion der Zugangskontrolle implementieren einige Proxys Caching, um den Traffic aus dem Netzwerk zu reduzieren. Dies wird normalerweise nicht vom Dienstentwickler verwaltet, daher muss es durch geeignete HTTP-Header und so weiter gesteuert werden. In der Vergangenheit haben jedoch veraltete Proxy-Cache-Implementierungen — wie solche, die den HTTP-Caching-Standard nicht ordnungsgemäß verstehen — oft Probleme für Entwickler verursacht.

**Alles-inklusive-Header** wie der folgende werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikationen nicht verstehen, wie zum Beispiel `no-store`.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, da HTTPS immer häufiger und die Kommunikation zwischen Client und Server verschlüsselt wurde, können Proxy-Caches auf dem Weg in vielen Fällen nur eine Antwort tunneln und nicht als Cache fungieren. In einem solchen Szenario besteht keine Notwendigkeit, sich über veraltete Proxy-Cache-Implementierungen Gedanken zu machen, die die Antwort nicht einmal sehen können.

Andererseits ist es möglich, wenn ein {{Glossary("TLS", "TLS")}}-Bridge-Proxy alle Kommunikationen auf eine Mann-in-der-Mitte-Weise entschlüsselt, indem er ein Zertifikat von einer {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} der Organisation auf dem PC installiert und Zugangskontrolle durchführt, den Inhalt der Antwort zu sehen und zu cachen. Da jedoch [CT (Zertifikatstransparenz)](/de/docs/Web/Security/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate mit einem SCT (unterzeichnetes Zertifikats-Timestamp) zulassen, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung besteht keine Notwendigkeit, sich über den Proxy-Cache Gedanken zu machen, der "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden ausdrücklich von Dienstentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient zu liefern. Beispiele sind Reverse Proxies, CDNs und Service Worker in Kombination mit der Cache-API.

Die Eigenschaften von verwalteten Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches über den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Beispielsweise definiert die HTTP-Caching-Spezifikation im Wesentlichen keinen Weg, um einen Cache ausdrücklich zu löschen — aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Dies ermöglicht eine proaktivere Caching-Strategie.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten expliziter Manipulation zu ignorieren. Zum Beispiel kann das Folgende angegeben werden, um aus einem privaten Cache oder Proxy-Cache auszusteigen, während Sie Ihre eigene Strategie verwenden, um nur in einem verwalteten Cache zu cachen.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache die VCL (Varnish Configuration Language, eine Art {{Glossary("DSL/Domain_specific_language", "DSL")}})-Logik, um die Cache-Speicherung zu handhaben, während Service Worker in Kombination mit der Cache-API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, wenn ein verwalteter Cache absichtlich eine `no-store`-Direktive ignoriert, besteht keine Notwendigkeit, ihn als "nicht konform" mit dem Standard zu betrachten. Was Sie tun sollten, ist, die Alles-inklusive-Header zu vermeiden, aber sorgfältig die Dokumentation des von Ihnen verwendeten verwalteten Cache-Mechanismus zu lesen und sicherzustellen, dass Sie den Cache ordnungsgemäß auf die von dem Mechanismus bereitgestellte Weise steuern.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN effektiv sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines gemeinsamen (Proxy-)Caches, eines Reverse-Proxy-Caches und eines gemeinsamen (verwalteten) Caches in einem CDN, die zum Cache des Ursprungsservers führen](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist darauf ausgelegt, so viel wie möglich zu cachen. Selbst wenn keine `Cache-Control`-Direktive angegeben ist, werden Antworten gespeichert und wiederverwendet, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

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

Es wird heuristisch davon ausgegangen, dass Inhalte, die ein ganzes Jahr lang nicht aktualisiert wurden, noch einige Zeit nach dieser Zeit nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des Fehlens eines `max-age`) und verwendet sie eine Weile lang erneut. Wie lange die Wiederverwendung erfolgt, hängt von der Implementierung ab, aber die Spezifikation empfiehlt etwa 10% (in diesem Fall 0,1 Jahr) der Zeit nach der Speicherung.

Heuristisches Caching ist ein Workaround, der eingeführt wurde, bevor die Unterstützung für `Cache-Control` weit verbreitet war, und im Grunde sollten alle Antworten explizit einen `Cache-Control`-Header angeben.

## Frisch und abgestanden basierend auf Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **abgestanden**. Der _frische_ Zustand zeigt üblicherweise an, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _abgestandene_ Zustand bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgestanden ist, ist **Alter**. Im HTTP wird das Alter als die Zeit angesehen, die seit der Erzeugung der Antwort vergangen ist. Dies ähnelt der {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

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

Der Cache, in dem die Beispielantwort gespeichert ist, berechnet die Zeit, die seit der Erzeugung der Antwort vergangen ist, und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _abgestanden_.

Solange die gespeicherte Antwort frisch bleibt, wird sie zur Erfüllung clientseitiger Anfragen verwendet.

Wenn eine Antwort in einem gemeinsamen Cache gespeichert wurde, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Wenn der gemeinsame Cache die Antwort für einen Tag gespeichert hat, würde der gemeinsame Cache folgende Antwort an nachfolgende Clientanfragen senden.

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

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518.400 Sekunden frisch ist, der Unterschied zwischen dem `max-age` der Antwort und dem `Age`.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header spezifiziert.

Der `Expires`-Header gibt die Lebensdauer des Caches mit einer expliziten Zeit an, anstatt eine verstrichene Zeit anzugeben.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Das Zeitformat ist jedoch schwer zu parsen, es wurden viele Implementierungsfehler gefunden, und es ist möglich, Probleme zu verursachen, indem man absichtlich die Systemuhr verstellt; daher wurde `max-age` — zur Angabe einer verstrichenen Zeit — für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, wird `max-age` vorrangig behandelt. Es ist daher nicht notwendig, `Expires` zu verwenden, da HTTP/1.1 weit verbreitet ist.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortkörper            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber der Inhalt der Antworten ist nicht immer derselbe, selbst wenn sie dieselbe URL haben. Besonders wenn eine Inhaltsverhandlung durchgeführt wird, kann der Server Antworten basierend auf den Werten der `Accept`, `Accept-Language` und `Accept-Encoding`-Header senden.

Beispielsweise ist es unerwünscht, dass englische Inhalte, die mit einem `Accept-Language: en`-Header zurückgegeben und zwischengespeichert wurden, dann für Anfragen mit einem `Accept-Language: ja`-Header wiederverwendet werden. In diesem Fall können Sie die Antworten basierend auf der Sprache separat zwischenspeichern, indem Sie `Accept-Language` dem Wert des `Vary`-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das führt dazu, dass sich der Cache auf eine Kombination der Antwort-URL und des `Accept-Language`-Request-Headers stützt — anstatt nur auf die Antwort-URL basierend zu sein.

| URL                              | `Accept-Language` | Antwortkörper            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Auch wenn Sie eine Inhaltsoptimierung (zum Beispiel für responsives Design) basierend auf dem Benutzeragenten bereitstellen, könnten Sie versucht sein, `User-Agent` in den Wert des `Vary`-Headers einzubeziehen. Allerdings hat der `User-Agent`-Request-Header im Allgemeinen eine sehr große Anzahl von Variationen, was die Wahrscheinlichkeit stark reduziert, dass der Cache wiederverwendet wird. Wenn möglich, sollten Sie stattdessen eine Möglichkeit in Betracht ziehen, das Verhalten basierend auf der Feature-Erkennung zu variieren, anstatt auf dem `User-Agent`-Request-Header basierend.

Für Anwendungen, die Cookies verwenden, um zu verhindern, dass andere zwischengespeicherte personalisierte Inhalte wiederverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` zu spezifizieren.

## Validierung

Abgestandene Antworten werden nicht sofort verworfen. HTTP verfügt über einen Mechanismus, um eine abgestandene Antwort durch Befragen des Ursprungsservers in eine frische zu verwandeln. Dies wird als **Validierung** oder manchmal als **Revalidierung** bezeichnet.

Die Validierung erfolgt durch Verwendung einer **Bedingten Anfrage**, die einen `If-Modified-Since`- oder `If-None-Match`-Request-Header enthält.

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

Um 23:22:22 wird die Antwort abgestanden und der Cache kann nicht wiederverwendet werden. Im folgenden Beispiel zeigt ein Client, der eine Anfrage mit einem `If-Modified-Since`-Request-Header sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server wird mit `304 Not Modified` antworten, wenn der Inhalt seit der angegebenen Zeit nicht geändert wurde.

Da diese Antwort nur anzeigt, dass "keine Änderung" vorliegt, gibt es keinen Antwortkörper — es gibt nur einen Statuscode — so dass die Übertragungsgröße extrem gering ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Nach Erhalt dieser Antwort setzt der Client die gespeicherte abgestandene Antwort wieder in den frischen Zustand zurück und kann sie während der verbleibenden 1 Stunde erneut verwenden.

Der Server kann die Änderungszeit vom Betriebssystem-Dateisystem abrufen, was relativ einfach ist, wenn statische Dateien bereitgestellt werden. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Dateizeitpunkte zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Response-Header als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Response-Headers ist ein beliebiger vom Server generierter Wert. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, sodass Server den Wert nach eigenem Ermessen basierend auf beliebigen Mitteln festlegen können — zum Beispiel ein Hash des Inhalts des Körpers oder eine Versionsnummer.

Als Beispiel, wenn ein Hashwert für den `ETag`-Header verwendet wird und der Hashwert der `index.html`-Ressource `33a64df5` ist, sieht die Antwort wie folgt aus:

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

Wenn diese Antwort abgestanden ist, nimmt der Client den Wert des `ETag`-Response-Headers für die zwischengespeicherte Antwort und setzt ihn in den `If-None-Match`-Request-Header, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der Wert des von ihm bestimmten `ETag`-Headers für die angeforderte Ressource derselbe ist wie der `If-None-Match`-Wert in der Anfrage.

Wenn der Server jedoch bestimmt, dass die angeforderte Ressource jetzt einen anderen `ETag`-Wert haben sollte, antwortet der Server stattdessen mit einem `200 OK` und der neuesten Version der Ressource.

> [!NOTE]
> RFC 9110 bevorzugt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, hat `If-None-Match` Vorrang als Validator.
> Wenn Sie nur das Caching in Betracht ziehen, denken Sie vielleicht, dass `Last-Modified` unnötig ist.
> `Last-Modified` ist jedoch nicht nur für das Caching nützlich; es ist ein standardmäßiger HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Suchmaschinen, um die Frequenz der Crawls anzupassen, und für andere verschiedene Zwecke.
> Unter Berücksichtigung des gesamten HTTP-Ökosystems ist es besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwungene Revalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern stattdessen immer den neuesten Inhalt vom Server abrufen möchten, können Sie die `no-cache`-Direktive verwenden, um die Validierung zu erzwingen.

Durch Hinzufügen von `Cache-Control: no-cache` zur Antwort zusammen mit `Last-Modified` und `ETag` — wie unten gezeigt — wird der Client eine `200 OK` Antwort erhalten, wenn die angeforderte Ressource aktualisiert wurde, oder ansonsten eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

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

Oft wird gesagt, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort abgestanden ist, und `must-revalidate` bedeutet, dass sie nach dem Abstaufen nicht ohne Revalidierung wiederverwendet werden darf — also scheinen die Semantiken in Kombination die gleichen wie bei `no-cache` zu sein.

Diese Verwendung von `max-age=0` ist jedoch ein Relikt der Tatsache, dass viele Implementierungen vor HTTP/1.1 die `no-cache`-Direktive nicht verarbeiten konnten — und so wurde zur Umgehung dieser Einschränkung `max-age=0` verwendet.

Aber jetzt, da HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund mehr, diese Kombination von `max-age=0` und `must-revalidate` zu verwenden — Sie sollten stattdessen einfach `no-cache` verwenden.

## Nicht Cachen

Die `no-cache`-Direktive verhindert nicht das Speichern von Antworten, verhindert jedoch deren Wiederverwendung ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in irgendeinem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen bedeutet eine Anforderung "Nicht zwischenspeichern" in der Praxis die folgenden Umstände:

- Die Antwort sollte von niemandem außer dem spezifischen Client aus Datenschutzgründen gespeichert werden.
- Immer aktuelle Informationen bereitstellen wollen.
- Keine Ahnung, was bei veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist die `no-store`-Direktive nicht immer die am besten geeignete Direktive.

Die folgenden Abschnitte analysieren die Umstände genauer.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar wäre.

In einem solchen Fall wird durch die Verwendung der `private`-Direktive sichergestellt, dass die personalisierte Antwort nur beim spezifischen Client gespeichert wird und nicht mit anderen Benutzern des Caches durchgesickert wird.

```http
Cache-Control: private
```

In einem solchen Fall muss auch dann `private` angegeben werden, wenn `no-store` gegeben ist.

### Jedes Mal aktuelle Inhalte bereitstellen

Die `no-store`-Direktive verhindert, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für dieselbe URL.

Mit anderen Worten, wenn es eine alte Antwort gibt, die bereits für eine bestimmte URL gespeichert wurde, verhindert `no-store` nicht, dass die alte Antwort wiederverwendet wird.

Eine `no-cache`-Direktive hingegen erzwingt es, dass der Client eine Validierungsanfrage sendet, bevor eine gespeicherte Antwort wiederverwendet wird.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client zwingen, bei jedem Zugriff auf den Server immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Umgangssprachenmäßige Header, wie die folgenden, werden häufig verwendet, um alte Implementierungen zu umgehen, die `no-store` ignorieren.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative zum Umgang mit veralteten Implementierungen zu verwenden, und es ist kein Problem, wenn `no-cache` von Anfang an angegeben wird, da der Server immer die Anfrage erhält.

Wenn es der gemeinsame Cache ist, der Ihnen Sorgen bereitet, können Sie sicherstellen, dass eine unbeabsichtigte Zwischenspeicherung durch Hinzufügung von `private` verhindert wird:

```http
Cache-Control: no-cache, private
```

### Was verloren geht durch `no-store`

Sie könnten denken, dass die Verwendung von `no-store` der richtige Weg ist, um sich vom Caching abzumelden.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu verwenden, da Sie viele Vorteile verlieren, die HTTP und Browser bieten, einschließlich des Back-/Forward-Caches des Browsers.

Daher verwenden Sie zur Nutzung der vollen Funktionalität der Webplattform bevorzugt `no-cache` in Kombination mit `private`.

## Neuladen und erzwungenes Neuladen

Eine Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Die **Neuladung** und **Erzwungene Neuladung** sind gängige Beispiele für Validierung, die von der Browserseite aus durchgeführt wird.

### Neuladung

Zum Wiederherstellen von Fensterkorruptionen oder Aktualisieren auf die neueste Version der Ressource bieten Browser Nutzern eine Neuladefunktion.

Eine vereinfachte Ansicht der HTTP-Anfrage, die während einer Browser-Neuladung gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox ähneln sehr dem oben Genannten; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0`-Direktive in der Anfrage gibt an, dass "wiederkehrende Antworten mit einem Alter von 0 oder weniger wiederverwendet werden" — wodurch zwischengespeicherte Antworten im Wesentlichen nicht wiederverwendet werden.

Infolgedessen wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `no-cache` aufgerufen wird (beachten Sie, dass `reload` in diesem Fall nicht der richtige Modus ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungene Neuladung

Browser verwenden `max-age=0` während der Neuladung aus Gründen der Abwärtskompatibilität — weil viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden. Aber `no-cache` ist in diesem Anwendungsfall jetzt in Ordnung, und **erzwungene Neuladung** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während einer Browser-**erzwungenen Neuladung** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox ähneln sehr dem oben Genannten; die Anfragen von Safari sehen etwas anders aus.)

Da dies keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie ein `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `reload` aufgerufen wird (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung der Revalidierung

Inhalte, die sich nie ändern, sollten durch Caching mit einer langen `max-age` versehen werden, indem Cache-Busting verwendet wird — d.h., indem eine Versionsnummer, ein Hashwert usw. in die Anfragen-URL aufgenommen werden.

Wenn der Benutzer jedoch neu lädt, wird eine Revalidierungsanfrage gesendet, obwohl der Server weiß, dass der Inhalt unveränderlich ist.

Um das zu verhindern, kann die `immutable`-Direktive verwendet werden, um explizit anzugeben, dass keine Revalidierung erforderlich ist, weil sich der Inhalt nie ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Revalidierungen während der Neuladevorgänge.

Beachten Sie, dass Chrome anstelle der Implementierung dieser Direktive seine Implementierung [geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass Subressourcen bei Neuladevorgängen nicht revalidiert werden.

## Löschen von gespeicherten Antworten

Es gibt im Grunde keine Möglichkeit, Antworten zu löschen, die bereits mit einer langen `max-age` gespeichert wurden.

Stellen Sie sich vor, die folgende Antwort von `https://example.com/` wurde gespeichert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Möglicherweise möchten Sie diese Antwort überschreiben, sobald sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert ist — da aufgrund des Cachings keine Anfragen mehr den Server erreichen.

Eine der in der Spezifikation genannten Methoden ist es, eine Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST` zu senden, aber das ist normalerweise schwierig, absichtlich für viele Clients zu tun.

Es gibt auch eine Spezifikation für einen `Clear-Site-Data: cache`-Header und -Wert, aber [nicht alle Browser unterstützen ihn](https://groups.google.com/a/mozilla.org/g/dev-platform/c/I939w1yrTp4) — und selbst wenn er verwendet wird, betrifft er nur Browser-Caches und hat keine Auswirkungen auf Zwischencaches.

Daher sollte davon ausgegangen werden, dass jede gespeicherte Antwort für ihre `max-age`-Periode bestehen bleibt, es sei denn, der Benutzer führt manuell einen Neuladevorgang, eine erzwungene Neuladung oder eine Verlaufslöschung durch.

Das Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server die Kontrolle über eine URL nicht verlieren möchte — beispielsweise, wenn eine Ressource häufig aktualisiert wird — sollten Sie `no-cache` hinzufügen, damit der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Request Collapse

Der gemeinsame Cache befindet sich hauptsächlich vor dem Ursprungsserver und soll den Datenverkehr zum Ursprungsserver reduzieren.

Wenn also mehrere identische Anfragen gleichzeitig an einem gemeinsamen Cache eingehen, wird der Zwischencache eine einzelne Anfrage im Namen von sich selbst an den Ursprung weiterleiten, die dann für alle Kunden wiederverwendet werden kann. Dies wird als _**Anfrageneinbruch**_ bezeichnet.

Anfrageneinbruch tritt auf, wenn Anfragen gleichzeitig eingehen, sodass, selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, diese wiederverwendet wird.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie im Einbruch geteilt wird, sollten Sie die `private`-Direktive hinzufügen:

![Request Collapse so gezeigt, dass mehrere Clients GET-Anfragen senden und ein Cache sie zu einem einzigen GET zum Ursprung konsolidiert. Der Ursprungsserver antwortet mit einem 200 OK, den der Cache an alle Clients weitergibt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Häufige Caching-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites können durch eine Kombination von nur wenigen Mustern abgedeckt werden.

In diesem Abschnitt werden die gängigen Muster beim Entwerfen von Caches beschrieben.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten für das Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht zwischenspeichern", sondern implizites Caching gemäß dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten explizit einen Standard-`Cache-Control`-Header zu geben.

Um sicherzustellen, dass im Standardfall immer die neuesten Versionen von Ressourcen übertragen werden, ist es gängige Praxis, den Standardwert von `Cache-Control` auf `no-cache` zu setzen:

```http
Cache-Control: no-cache
```

Zusätzlich, wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss auch `private` gegeben werden, um die Freigabe mit anderen Benutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache Busting

Die Ressourcen, die am besten mit Caching funktionieren, sind statische unveränderliche Dateien, deren Inhalte sich nie ändern. Und für Ressourcen, die sich _doch_ ändern, ist es eine gängige Best Practice, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, damit die URL-Einheit für einen längeren Zeitraum zwischengespeichert werden kann.

Betrachten Sie als Beispiel das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung fortschreitet. Außerdem, wenn die Versionen der von einem Client verwendeten JavaScript- und CSS-Ressourcen nicht synchron sind, wird die Anzeige fehlerhaft sein.

Das obige HTML macht es daher schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie JavaScript und CSS mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hashwert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten gezeigt.

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

Da der Cache Ressourcen basierend auf ihren URLs voneinander unterscheidet, wird der Cache nicht wiederverwendet, wenn sich die URL ändert, wenn eine Ressource aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für eine lange Zeit zwischengespeichert werden. Wie lange sollte `max-age` gesetzt werden? Die QPACK-Spezifikation liefert eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard für die Komprimierung von HTTP-Headerfeldern mit Tabellen häufig verwendeter Feldwerte.

Einige häufig verwendete Cache-Header-Werte sind unten gezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie Werte in 1 Byte komprimieren, wenn Sie sie über HTTP3 übertragen.

Nummer `37`, `38` und `41` sind für Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch vorhanden ist, nicht sehr hoch — auch wenn `max-age` auf 1 Woche gesetzt ist. Daher macht es in der Praxis nicht viel Unterschied, welche Sie wählen.

Beachten Sie, dass Nummer `41` die längste `max-age` (1 Jahr) hat, aber mit `public`.

Der `public`-Wert hat die Wirkung, dass die Antwort speicherbar ist, auch wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Direktive sollte nur verwendet werden, wenn es erforderlich ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Ansonsten ist sie nicht erforderlich, da eine Antwort im gemeinsamen Cache gespeichert wird, solange `max-age` gegeben ist.

Wenn die Antwort also mit einfacher Authentifizierung personalisiert ist, kann das Vorhandensein von `public` Probleme verursachen. Wenn Sie sich darüber Gedanken machen, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified`- und `ETag`-Header zu setzen, damit Sie eine Ressource bei einem Neuladevorgang nicht erneut übertragen müssen. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag`-Wert hier kann ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

Zusätzlich kann `immutable` hinzugefügt werden, um die Validierung bei Neuladevorgängen zu verhindern.

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

**Cache Busting** ist eine Technik, um eine Antwort über einen langen Zeitraum cachefähig zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Die Technik kann auf alle Subressourcen angewendet werden, wie zum Beispiel Bilder.

> [!NOTE]
> Bei der Bewertung der Verwendung von `immutable` und QPACK:
> Wenn Sie besorgt sind, dass `immutable` den vordefinierten Wert von QPACK verändert, bedenken Sie, dass
> in diesem Fall der `immutable`-Teil separat codiert werden kann, indem der `Cache-Control`-Wert in zwei Zeilen aufgeteilt wird — obwohl dies vom Kodierungsalgorithmus einer bestimmten QPACK-Implementierung abhängt.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Subressourcen können Hauptressourcen nicht durch Cache-Busting aufgebrochen werden, da ihre URLs nicht auf die gleiche Weise verändert werden können wie Subressourcen-URLs.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

In diesem Fall wäre `no-cache` angemessen — statt `no-store` — da wir HTML nicht speichern möchten, sondern es einfach immer auf dem neuesten Stand halten möchten.

Zusätzlich erlauben `Last-Modified` und `ETag` es den Clients, bedingte Anfragen zu senden, und ein `304 Not Modified` kann zurückgegeben werden, wenn keine Aktualisierungen am HTML vorgenommen wurden:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
```

Diese Einstellung ist geeignet für nicht-personalisiertes HTML, aber für eine Antwort, die über Cookies personalisiert wird — zum Beispiel nach einer Anmeldung — vergessen Sie nicht, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Dasselbe kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht mithilfe von Cache-Busting geändert werden können.

Die meisten Webinhalte können durch eine Kombination der oben beschriebenen Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der Methode, die in den vorherigen Abschnitten beschrieben wurde, können Subressourcen über einen langen Zeitraum mithilfe von Cache-Busting zwischengespeichert werden, aber Hauptressourcen (die üblicherweise HTML-Dokumente sind) können nicht.

Das Caching von Hauptressourcen ist schwierig, weil es mit nur standardmäßigen Direktiven aus der HTTP-Caching-Spezifikation nicht möglich ist, Cache-Inhalte aktiv zu löschen, wenn Inhalt auf dem Server aktualisiert wird.

Es ist jedoch möglich durch die Bereitstellung eines verwalteten Caches wie eines CDN oder Service Workers.

Zum Beispiel würde ein CDN, das Cache-Leerungen über eine API oder ein Dashboard-Betrieb ermöglicht, eine aggressivere Caching-Strategie durch Speichern der Hauptressource ermöglichen, indem der relevante Cache nur ausdrücklich gelöscht wird, wenn ein Update auf dem Server erfolgt.

Ein Service Worker könnte dasselbe tun, wenn er die Inhalte in der Cache-API löschen könnte, wenn ein Update auf dem Server erfolgt.

Für weitere Informationen siehe die Dokumentation Ihres CDN und konsultieren Sie die [Service Worker Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching-Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
