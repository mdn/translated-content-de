---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: 5d4a4c3a3589e87f30299c7ee8696fbf81ab2751
---

{{HTTPSidebar}}

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verknüpft ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Der Wiederverwendbarkeit sind mehrere Vorteile zugeschrieben. Erstens, da die Anfrage nicht an den Ursprungsserver geliefert werden muss, gilt: Je näher sich der Client und der Cache befinden, desto schneller erfolgt die Antwort. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browser-Anfragen speichert.

Außerdem muss der Ursprungsserver die Anfrage nicht verarbeiten, wenn eine Antwort wiederverwendbar ist — er muss die Anfrage nicht parsen und weiterleiten, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Last auf den Server.

Der ordnungsgemäße Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP-Caching](https://httpwg.org/specs/rfc9111.html) Spezifikation gibt es zwei Hauptarten von Caches: **private Caches** und **gemeinsame Caches**.

### Private Caches

Ein privater Cache ist an einen bestimmten Client gebunden — in der Regel ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen Cache als einem privaten Cache gespeichert werden, könnten andere Benutzer diese Inhalte abrufen — was zu unbeabsichtigten Informationslecks führen könnte.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden in der Regel durch Cookies gesteuert, aber das Vorhandensein eines Cookies weist nicht immer darauf hin, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Gemeinsamer Cache

Der gemeinsame Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die unter Benutzern gemeinsam genutzt werden können. Gemeinsame Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Funktion der Zugangskontrolle implementieren einige Proxys das Caching, um den Datenverkehr aus dem Netzwerk zu reduzieren. Dies wird in der Regel nicht vom Dienstentwickler verwaltet, daher muss es durch geeignete HTTP-Header gesteuert werden und so weiter. In der Vergangenheit haben jedoch veraltete Proxy-Cache-Implementierungen — wie Implementierungen, die den HTTP-Caching-Standard nicht richtig verstehen — häufig Probleme für Entwickler verursacht.

**"Alleskönner-Header"** wie die folgenden werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikationsdirektiven wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, als HTTPS immer häufiger wurde und die Kommunikation zwischen Client und Server verschlüsselt wurde, können Proxy-Caches im Pfad in vielen Fällen nur noch eine Antwort tunneln und nicht als Cache fungieren. In diesem Szenario muss man sich also keine Sorgen über veraltete Proxy-Cache-Implementierungen machen, die nicht einmal die Antwort sehen können.

Andererseits, wenn ein {{Glossary("TLS", "TLS")}}-Proxy alle Kommunikationen auf bösartige Weise durch das Installieren eines Zertifikats einer von der Organisation verwalteten {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} auf dem PC entschlüsselt und Zugangskontrolle durchführt etc. — dann ist es möglich, die Inhalte der Antwort zu sehen und diese zu cachen. Da jedoch [CT (Zertifikatstransparenz)](/de/docs/Web/Security/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate erlauben, die mit einem SCT (Signiertes Zertifikatszeitstempel) ausgestellt wurden, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung muss man sich keine Sorgen machen, dass der Proxy-Cache "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden explizit von Dienstentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient bereitzustellen. Beispiele sind Reverse Proxies, CDNs und Service Worker in Kombination mit der Cache-API.

Die Eigenschaften von verwalteten Caches variieren je nach eingesetztem Produkt. In den meisten Fällen kann das Verhalten des Caches durch den `Cache-Control`-Header und die eigenen Konfigurationsdateien oder Dashboards gesteuert werden.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keine Möglichkeit, einen Cache explizit zu löschen — aber bei einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts und so weiter gelöscht werden. Das erlaubt eine proaktivere Caching-Strategie.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten einer expliziten Manipulation zu ignorieren. So kann beispielsweise angegeben werden, dass auf einen privaten oder Proxy-Cache verzichtet wird, während eine eigene Strategie verwendet wird, um nur in einem verwalteten Cache zu cachen.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache VCL (Varnish Configuration Language, eine Art {{Glossary("DSL/Domain_specific_language", "DSL")}})-Logik, um die Cache-Speicherung zu verwalten, während Service Worker in Kombination mit der Cache-API es ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, wenn ein verwalteter Cache eine `no-store`-Direktive absichtlich ignoriert, gibt es keinen Grund, ihn als "nicht konform" mit dem Standard zu betrachten. Was Sie tun sollten, ist, Alleskönner-Header zu vermeiden, sondern sorgfältig die Dokumentation des verwalteten Cache-Mechanismus, den Sie verwenden, zu lesen und sicherzustellen, dass Sie den Cache korrekt auf die vom gewählten Mechanismus bereitgestellten Weisen steuern.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines gemeinsamen (Proxy-)Caches, eines Reverse-Proxy-Caches und eines gemeinsamen (verwalteten) Caches in einem CDN, der zum Cache des Ursprungsservers führt](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist darauf ausgelegt, so viel wie möglich zu cachen, sodass selbst wenn kein `Cache-Control` angegeben ist, Antworten gespeichert und wiederverwendet werden, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

Beispielhaft sei die folgende Antwort genannt, die zuletzt vor einem Jahr aktualisiert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die ein volles Jahr lang nicht aktualisiert wurden, für eine Weile danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz fehlendem `max-age`) und verwendet sie für eine Weile wieder. Wie lange die Wiederverwendung dauert, hängt von der Implementierung ab, aber die Spezifikation empfiehlt etwa 10 % (in diesem Fall 0,1 Jahre) der Zeit nach der Speicherung.

Heuristisches Caching ist ein Workaround, der verwendet wurde, bevor die Unterstützung von `Cache-Control` weit verbreitet war, und im Grunde genommen sollten alle Antworten explizit einen `Cache-Control`-Header angeben.

## Frisch und abgestanden basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **abgestanden**. Der _frische_ Zustand weist normalerweise darauf hin, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _abgestandene_ Zustand bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgestanden ist, ist das **Alter**. Im HTTP ist das Alter die Zeit, die seit der Generierung der Antwort vergangen ist. Dies ist vergleichbar mit der {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

Schauen wir uns das folgende Beispiel an (604800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort speichert, berechnet die seit der Generierung der Antwort vergangene Zeit und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort hat `max-age` die folgende Bedeutung:

- Wenn das Alter der Antwort _weniger_ als eine Woche ist, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche ist, ist die Antwort _abgestanden_.

Solange die gespeicherte Antwort frisch bleibt, wird sie verwendet, um Client-Anfragen zu erfüllen.

Wenn eine Antwort in einem gemeinsamen Cache gespeichert wurde, kann dem Client das Alter der Antwort mitgeteilt werden. Wenn der gemeinsame Cache die Antwort einen Tag lang gespeichert hat, würde der gemeinsame Cache die folgende Antwort an nachfolgende Client-Anfragen senden.

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

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden frisch ist, der Unterschied zwischen dem `max-age` und dem `Age` der Antwort.

## Expires oder max-age

In HTTP/1.0 wurde die Frische früher durch den `Expires`-Header angegeben.

Der `Expires`-Header gibt die Lebensdauer des Caches mit einer expliziten Zeit an, anstatt eine verstrichene Zeit anzugeben.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Jedoch ist das Zeitformat schwer zu parsen, viele Implementierungsfehler wurden gefunden, und es ist möglich, Probleme durch absichtliches Verschieben der Systemuhr zu induzieren; daher wurde `max-age` — zur Angabe einer verstrichenen Zeit — für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, wird `max-age` bevorzugt. Daher ist es nicht mehr nötig, `Expires` bereitzustellen, da HTTP/1.1 weit verbreitet ist.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortinhalt            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber die Inhalte von Antworten sind nicht immer gleich, auch wenn sie dieselbe URL haben. Besonders wenn Inhaltsaushandlung durchgeführt wird, kann die Antwort vom Server von den Werten der `Accept`, `Accept-Language` und `Accept-Encoding` Anfrage-Header abhängen.

Zum Beispiel, für englischen Inhalt, der mit einem `Accept-Language: en` Header zurückgegeben und zwischengespeichert wird, ist es unangebracht, diese zwischengespeicherte Antwort für Anfragen mit einem `Accept-Language: ja` Anfrage-Header wiederzuverwenden. In diesem Fall können Sie bewirken, dass die Antworten basierend auf der Sprache separat zwischengespeichert werden, indem Sie `Accept-Language` zum Wert des `Vary` Headers hinzufügen.

```http
Vary: Accept-Language
```

Damit erfolgt die Cache-Schlüsselung basierend auf einer Kombination aus der Antwort-URL und dem `Accept-Language` Anfrage-Header — anstatt nur auf der Antwort-URL.

| URL                              | `Accept-Language` | Antwortinhalt            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Auch wenn Sie eine Inhaltsoptimierung basierend auf dem Benutzeragenten bereitstellen (zum Beispiel für responsives Design), könnten Sie versucht sein, `User-Agent` zum Wert des `Vary` Headers hinzuzufügen. Der `User-Agent` Anfrage-Header hat jedoch in der Regel eine sehr große Anzahl von Variationen, was die Wahrscheinlichkeit drastisch reduziert, dass der Cache wiederverwendet wird. Daher sollten Sie, wenn möglich, stattdessen eine Möglichkeit in Betracht ziehen, das Verhalten basierend auf der Funktionsprüfung anstelle des `User-Agent` Anfrage-Headers zu variieren.

Für Anwendungen, die Cookies verwenden, um andere daran zu hindern, zwischengespeicherte personalisierte Inhalte wiederzuverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` zu spezifizieren.

## Validierung

Abgestanden Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um eine abgestandene Antwort in eine frische zu verwandeln, indem der Ursprungsserver gefragt wird. Dies wird als **Validierung**, oder manchmal als **Revalidierung** bezeichnet.

Die Validierung wird durch das Verwenden einer **bedingten Anfrage** durchgeführt, die einen `If-Modified-Since` oder `If-None-Match` Anfrage-Header enthält.

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

Um 23:22:22 wird die Antwort abgestanden und der Cache kann nicht wiederverwendet werden. Die folgende Anfrage zeigt also, dass ein Client eine Anfrage mit einem `If-Modified-Since` Anfrage-Header sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn sich der Inhalt seit der angegebenen Zeit nicht geändert hat.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortinhalt — nur einen Statuscode — sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Beim Empfangen dieser Antwort macht der Client die gespeicherte abgestandene Antwort wieder frisch und kann sie während der verbleibenden 1 Stunde erneut verwenden.

Der Server kann die Änderungszeit aus dem Betriebssystem-Dateisystem erhalten, was relativ einfach zu tun ist, wenn es um das Bereitstellen von statischen Dateien geht. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, die Zeitpunkte der Dateiaktualisierung zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag` Antwort-Header als Alternativstandardisiert.

### ETag/If-None-Match

Der Wert des `ETag` Antwort-Headers ist ein beliebiger Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, sodass Server frei sind, den Wert basierend auf den von ihnen gewählten Mitteln zu setzen — wie ein Hash des Inhalts oder eine Versionsnummer.

Beispielsweise, wenn ein Hash-Wert für den `ETag` Header verwendet wird und der Hash-Wert der `index.html` Ressource `33a64df5` ist, wird die Antwort folgendermaßen aussehen:

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

Wenn diese Antwort abgestanden ist, nimmt der Client den Wert des `ETag` Antwort-Headers für die zwischengespeicherte Antwort und setzt ihn in den `If-None-Match` Anfrage-Header ein, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server gibt `304 Not Modified` zurück, wenn der für die angeforderte Ressource bestimmte `ETag` Wert derselbe ist wie der `If-None-Match` Wert in der Anfrage.

Aber wenn der Server feststellt, dass die angeforderte Ressource jetzt einen anderen `ETag` Wert haben sollte, antwortet der Server stattdessen mit `200 OK` und der neuesten Version der Ressource.

> [!NOTE]
> RFC9110 bevorzugt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200` Antwort senden, wenn möglich.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, hat `If-None-Match` Vorrang als Validator.
> Wenn Sie nur das Caching betrachten, denken Sie vielleicht, dass `Last-Modified` nicht nötig ist.
> Allerdings ist `Last-Modified` nicht nur für das Caching nützlich; es ist ein standardmäßiger HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Crawlern, um die Crawler-Häufigkeit zu verringern, und für andere verschiedene Zwecke.
> Daher ist es unter Berücksichtigung des gesamten HTTP-Ökosystems besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwungene Revalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern stattdessen immer den neuesten Inhalt vom Server abrufen möchten, können Sie die `no-cache` Direktive verwenden, um die Validierung zu erzwingen.

Durch das Hinzufügen von `Cache-Control: no-cache` zur Antwort zusammen mit `Last-Modified` und `ETag` — wie unten gezeigt — erhält der Client eine `200 OK` Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder andernfalls erhält er eine `304 Not Modified` Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

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

Es wird oft behauptet, dass die Kombination von `max-age=0` und `must-revalidate` dieselbe Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort abgestanden ist, und `must-revalidate` bedeutet, dass sie ohne Revalidierung nicht wiederverwendet werden darf, sobald sie abgestanden ist — sodass sich die Semantik in Kombination wie mit `no-cache` herauszustellen scheint.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel aus der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache` Direktive zu handhaben — und daher wurde `max-age=0` als Workaround verwendet.

Da jetzt Server, die konform zu HTTP/1.1 sind, weit verbreitet sind, gibt es keinen Grund, diese Kombination aus `max-age=0` und `must-revalidate` zu verwenden — stattdessen sollten Sie einfach `no-cache` verwenden.

## Nicht cachen

Die `no-cache` Direktive verhindert nicht das Speichern von Antworten, sondern verhindert die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in einem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

In der Praxis bedeutet eine "nicht cachen"-Anforderung im Allgemeinen jedoch die folgende Menge von Umständen:

- Die Antwort soll von niemand anderem außer dem speziellen Client gespeichert werden, aus Datenschutzgründen.
- Beim Abrufen von Inhalten möchten wir sicherstellen, dass diese stets aktuell sind.
- Uns ist nicht klar, was in veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die geeignetste Direktive.

Die folgenden Abschnitte betrachten die Umstände im Detail.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisiertem Inhalt unerwartet für andere Benutzer eines Caches sichtbar wird.

In einem solchen Fall wird die Verwendung der `private` Direktive dazu führen, dass die personalisierte Antwort nur mit dem speziellen Client gespeichert wird und nicht für andere Benutzer des Caches durchlässig ist.

```http
Cache-Control: private
```

In einem solchen Fall, selbst wenn `no-store` gegeben ist, muss auch `private` gegeben werden.

### Jedes Mal aktuelle Inhalte bereitstellen

Die `no-store` Direktive verhindert zwar, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für dieselbe URL.

Mit anderen Worten, wenn es bereits eine alte Antwort für eine bestimmte URL gibt, wird durch die Rückgabe von `no-store` nicht verhindert, dass die alte Antwort wiederverwendet wird.

Eine `no-cache` Direktive hingegen erzwingt, dass der Client eine Validierungsanfrage sendet, bevor er eine gespeicherte Antwort wiederverwendet.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client dazu zwingen, den Server jedes Mal zu kontaktieren und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, könnten Sie auf "Alleskönner-Header" stoßen, wie sie unten gezeigt werden.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

[Empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching) wird `no-cache` als Alternative zum Umgang mit solchen veralteten Implementierungen zu verwenden, und es ist kein Problem, wenn `no-cache` von Anfang an angegeben wird, da der Server die Anfrage immer erhalten wird.

Wenn es der gemeinsame Cache ist, um den Sie sich Sorgen machen, können Sie sicherstellen, dass keine ungewollte Zwischenspeicherung erfolgt, indem Sie zusätzlich `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Vielleicht denken Sie, dass das Hinzufügen von `no-store` der richtige Weg wäre, um das Caching auszuschließen.

Allerdings wird es nicht empfohlen, `no-store` allzu großzügig zu gewähren, da Sie viele Vorteile verlieren, die HTTP und Browser haben, einschließlich des Backward/Forward-Caches des Browsers.

Daher, um die Vorteile des vollständigen Funktionsumfangs der Webplattform zu nutzen, ist es vorzuziehen, `no-cache` in Kombination mit `private` zu verwenden.

## Neu laden und erzwungenes Neuladen

Die Validierung kann sowohl für Anfragen als auch für Inhalte durchgeführt werden.

Die **neu laden** und **erzwungenes Neuladen** Aktionen sind gängige Beispiele für Validierung, die von der Browser-Seite durchgeführt wird.

### Neu laden

Um Fensterbeschädigungen zu beheben oder auf die neueste Version der Ressource zu aktualisieren, bieten Browser eine Neuladefunktion für Benutzer.

Eine vereinfachte Ansicht der HTTP-Anfrage, die während einer Browser-Neuladung gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen ungefähr so aus; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0` Direktive in der Anfrage spezifiziert "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" — sodass zwischengespeicherte Antworten nicht wiederverwendet werden.

Infolgedessen wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch) Standard definiert und kann in JavaScript durch Aufruf von `fetch()` mit dem Cache-Modus `no-cache` reproduziert werden (beachten Sie, dass `reload` hierfür nicht der richtige Modus ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neuladen

Browser verwenden `max-age=0` während des Neuladens aus Gründen der Rückwärtskompatibilität — weil viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden haben. Aber `no-cache` ist jetzt in diesem Anwendungsfall in Ordnung, und **erzwungenes Neuladen** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser-**erzwungenen Neuladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen ungefähr so aus; die Anfragen von Safari sehen etwas anders aus.)

Da es sich dabei um keine bedingte Anfrage mit `no-cache` handelt, können Sie sicher sein, dass Sie vom Ursprungsserver eine `200 OK` erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch) Standard definiert und kann in JavaScript durch Aufruf von `fetch()` mit dem Cache-Modus `reload` reproduziert werden (beachten Sie, dass es sich nicht um `force-reload` handelt):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung der Revalidierung

Inhalt, der sich nie ändert, sollte ein langes `max-age` erhalten, indem das Cache-Busting verwendet wird — das heißt, indem eine Versionsnummer, ein Hashwert usw. in die Anfrage-URL aufgenommen wird.

Wenn der Benutzer jedoch neu lädt, wird eine Revalidierungsanfrage gesendet, obwohl der Server weiß, dass der Inhalt unveränderlich ist.

Um dies zu verhindern, kann die `immutable` Direktive benutzt werden, um explizit anzuzeigen, dass keine Revalidierung erforderlich ist, weil sich der Inhalt nie ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Dadurch wird unnötige Revalidierung während Neu- ladungen vermieden.

Beachten Sie, dass anstatt diese Direktive zu implementieren, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass keine Revalidierung während Neu- ladungen für Subressourcen durchgeführt wird.

## Löschen von zwischengespeicherten Antworten

Es gibt keine Möglichkeit, Antworten auf einem Zwischenschaltungsserver zu löschen, die mit einem langen `max-age` gespeichert wurden.

Stellen Sie sich vor, die folgende Antwort von `https://example.com/` wurde gespeichert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Möglicherweise möchten Sie diese Antwort überschreiben, sobald sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert ist — da keine weiteren Anfragen den Server aufgrund des Cachings erreichen.

Eine der in der Spezifikation erwähnten Methoden besteht darin, eine Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST` zu senden, aber für viele Clients ist das schwierig zu tun.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) Header und Direktivwert kann verwendet werden, um Browser-Caches zu löschen — hat jedoch keine Auswirkungen auf Zwischen-Caches. Andernfalls bleiben Antworten im Browser-Cache, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell eine Neu- ladung, ein erzwungenes Neuladen oder eine Verlaufslöschaktion aus.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server die Kontrolle über eine URL nicht verlieren möchte — zum Beispiel im Falle einer häufig aktualisierten Ressource — sollten Sie `no-cache` hinzufügen, damit der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Request Collapse

Der gemeinsame Cache befindet sich hauptsächlich vor dem Ursprungsserver und soll den Datenverkehr zum Ursprungsserver reduzieren.

Wenn also mehrere identische Anfragen gleichzeitig bei einem gemeinsamen Cache ankommen, leitet der Zwischen-Cache eine einzige Anfrage in eigenem Namen an den Ursprung weiter, die dann das Ergebnis für alle Clients wiederverwenden kann. Dies wird als **Request Collapse** bezeichnet.

Request Collapse tritt auf, wenn Anfragen zur gleichen Zeit eintreffen, sodass auch wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, sie wiederverwendet wird.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie im Collapse geteilt wird, sollten Sie die `private` Direktive hinzufügen:

![Request Collapse, gezeigt als mehrere Clients, die GET-Anfragen senden, und ein Cache, der sie in eine GET-Anfrage an den Ursprung konsolidiert. Der Ursprungsserver antwortet mit 200 OK, welche der Cache zurück an alle Clients teilt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Allgemeine Caching-Muster

Es gibt viele Direktiven in der `Cache-Control` Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites können durch eine Kombination einer Handvoll Muster abgedeckt werden.

Dieser Abschnitt beschreibt die gängigen Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten für das Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern ein implizites Caching gemäß dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten explizit einen Standard `Cache-Control` Header zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, besteht eine gängige Praxis darin, den `Cache-Control` Wert standardmäßig mit `no-cache` zu versehen:

```http
Cache-Control: no-cache
```

Zusätzlich, wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss auch `private` angegeben werden, um eine gemeinsame Nutzung mit anderen Benutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache-Busting

Diejenigen Ressourcen, die am besten mit Caching funktionieren, sind statische, unveränderliche Dateien, deren Inhalte sich nie ändern. Und für Ressourcen, die sich _tatsächlich_ ändern, ist es gängige Praxis, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, damit die URL-Einheit für einen längeren Zeitraum zwischengespeichert werden kann.

Als Beispiel, siehe das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

Im modernen Web-Entwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung fortschreitet. Wenn die Versionen von JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind, wird die Anzeige zerstört.

Dieses HTML erschwert es somit `bundle.js` und `build.css` bei `max-age` zu zwischenspeichern.

Daher können Sie die JavaScript- und CSS-Dateien mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hashwert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten dargestellt.

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

Da der Cache die Ressourcen anhand ihrer URLs unterscheidet, wird der Cache nicht mehr wiederverwendet, wenn sich die URL beim Aktualisieren einer Ressource ändert.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl die JavaScript- als auch die CSS-Ressourcen für eine lange Zeit zwischengespeichert werden. Wie lange sollte `max-age` eingestellt werden? Die QPACK-Spezifikation bietet eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zum Komprimieren von HTTP-Header-Feldern, mit Tabellen von häufig verwendeten Feldwerten.

Einige häufig verwendete Cache-Header-Werte sind unten dargestellt.

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

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort noch existiert, nachdem eine Woche vergangen ist, nicht sehr hoch — auch wenn `max-age` auf 1 Woche eingestellt ist. Daher macht es in der Praxis keinen großen Unterschied, welche Option sie wählen.

Beachten Sie, dass die Nummer `41` das längste `max-age` hat (1 Jahr), aber mit `public`.

Der `public` Wert bewirkt, dass die Antwort speicherbar ist, auch wenn der `Authorization` Header vorhanden ist.

> [!NOTE]
> Die `public` Direktive sollte nur verwendet werden, wenn es notwendig ist, die Antwort zu speichern, wenn der `Authorization` Header gesetzt ist.
> Sie ist sonst nicht erforderlich, da eine Antwort im gemeinsamen Cache gespeichert wird, solange `max-age` gegeben ist.

Wenn die Antwort jedoch mit Basisauthentifizierung personalisiert ist, können durch das Vorhandensein von `public` Probleme entstehen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert wählen, `38` (1 Monat).

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified` und `ETag` Header zu setzen, damit Sie eine Ressource beim Neuladen nicht neu übertragen müssen. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag` Wert kann hier ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

Darüber hinaus kann `immutable` hinzugefügt werden, um eine Validierung beim Neuladen zu verhindern.

Das kombinierte Ergebnis wird unten gezeigt.

```http
# bundle.v123.js
HTTP/1.1 200 OK
Content-Type: application/javascript
Content-Length: 1024
Cache-Control: public, max-age=31536000, immutable
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

**Cache Busting** ist eine Technik, eine Antwort über einen langen Zeitraum zwischenspeicherbar zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Die Technik kann auf alle Subressourcen angewendet werden, wie zum Beispiel Bilder.

> [!NOTE]
> Wenn Sie die Verwendung von `immutable` und QPACK bewerten:
> Wenn Sie befürchten, dass `immutable` den von QPACK bereitgestellten vordefinierten Wert ändert, ziehen Sie in diesem Fall in Betracht, dass
> der `immutable` Teil separat codiert werden kann, indem der `Cache-Control` Wert in zwei Zeilen aufgeteilt wird — obwohl dies von dem Codierungsalgorithmus abhängt, den eine bestimmte QPACK-Implementierung verwendet.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Anders als Subressourcen können Hauptressourcen nicht durch Cache Busting verändert werden, da ihre URLs nicht in derselben Weise geschmückt werden können, wie es bei Subressource-URLs der Fall ist.

Wenn das folgende HTML selbst gespeichert ist, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Für diesen Fall wäre `no-cache` angemessen — anstatt `no-store` — da wir das HTML nicht speichern wollen, sondern es immer aktuell sein soll.

Indem Sie `Last-Modified` und `ETag` hinzufügen, können Clients bedingte Anfragen senden und eine `304 Not Modified` kann zurückgegeben werden, wenn es keine Updates des HTML gibt:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Diese Einstellung ist für nicht-personalisiertes HTML geeignet, aber für eine Antwort, die mit Cookies personalisiert wird — zum Beispiel nach einer Anmeldung — sollten Sie nicht vergessen, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Dasselbe kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs durch Cache Busting nicht verändert werden können.

Die meisten Webinhalte können durch eine Kombination der oben beschriebenen beiden Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der in den vorhergehenden Abschnitten beschriebenen Methode können Subressourcen durch Cache Busting für eine lange Zeit zwischengespeichert werden, aber Hauptressourcen (die in der Regel HTML-Dokumente sind) können es nicht.

Das Caching von Hauptressourcen ist schwierig, da es unter Verwendung nur der standardmäßigen Direktiven der HTTP-Caching-Spezifikation keine Möglichkeit gibt, Cache-Inhalte aktiv zu löschen, wenn der Inhalt auf dem Server aktualisiert wird.

Es ist jedoch durch den Einsatz eines verwalteten Caches wie einem CDN oder Service Worker möglich.

Zum Beispiel ein CDN, das Cache-Löschungen über eine API oder Dashboard-Operationen erlaubt, würde eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der relevante Cache nur gelöst werden würde, wenn ein Update auf dem Server erfolgt.

Ein Service Worker könnte dasselbe tun, wenn er die Inhalte in der Cache-API löschen könnte, wenn ein Update auf dem Server erfolgt.

Für weitere Informationen siehe die Dokumentation Ihres CDN und konsultieren Sie die [Service Worker-Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
