---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verbunden ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Die Wiederverwendbarkeit bietet mehrere Vorteile. Erstens, da die Anfrage nicht an den Ursprungsserver gesendet werden muss, ist die Antwort umso schneller, je näher der Client und der Cache beieinander liegen. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Außerdem muss der Ursprungsserver, wenn eine Antwort wiederverwendet werden kann, die Anfrage nicht bearbeiten — er muss die Anfrage also nicht parsen und weiterleiten, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Last auf dem Server.

Der ordnungsgemäße Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP-Caching](https://httpwg.org/specs/rfc9111.html)-Spezifikation gibt es zwei Hauptarten von Caches: **Private Caches** und **Shared Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen bestimmten Client gebunden ist — typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen als einem privaten Cache gespeichert werden, können andere Benutzer möglicherweise auf diese Inhalte zugreifen, was zu unbeabsichtigtem Informationsleck führen kann.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber das Vorhandensein eines Cookies zeigt nicht immer an, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Shared Cache

Der Shared Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die unter Benutzern geteilt werden können. Shared Caches können weiter in **Proxy-Caches** und **Managed Caches** unterteilt werden.

#### Proxy Caches

Zusätzlich zur Zugriffssteuerung implementieren einige Proxies Caching, um den Datenverkehr aus dem Netzwerk zu reduzieren. Dies wird in der Regel nicht vom Dienstentwickler verwaltet, daher muss es durch geeignete HTTP-Header und so weiter gesteuert werden. In der Vergangenheit haben jedoch veraltete Proxy-Cache-Implementierungen — wie Implementierungen, die den HTTP-Caching-Standard nicht ordnungsgemäß verstehen — häufig Probleme für Entwickler verursacht.

**Kitchen-sink headers** wie die folgenden werden verwendet, um mit "alten und nicht aktualisierten Proxy-Cache"-Implementierungen zu arbeiten, die aktuelle HTTP-Caching-Spezifikationsrichtlinien wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Da jedoch in den letzten Jahren HTTPS häufiger verwendet wird und die Kommunikation zwischen Computer und Server verschlüsselt ist, können Proxy-Caches auf dem Weg in vielen Fällen nur eine Antwort durchleiten und nicht als Cache fungieren. In diesem Szenario müssen Sie sich also keine Sorgen über veraltete Proxy-Cache-Implementierungen machen, die die Antwort nicht einmal sehen können.

Andererseits, wenn ein {{Glossary("TLS", "TLS")}}-Proxy alle Kommunikationen in einer Man-in-the-Middle-Weise entschlüsselt, indem er ein Zertifikat von einer {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} verwaltet von der Organisation auf dem PC installiert und Zugriffssteuerung, etc. durchführt — ist es möglich, die Inhalte der Antwort zu sehen und sie zu cachen. Da jedoch [CT (Zertifikattransparenz)](/de/docs/Web/Security/Defenses/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate zulassen, die mit einem SCT (signierter Zertifikatstempel) ausgestellt wurden, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung besteht keine Notwendigkeit, sich Gedanken darüber zu machen, dass der Proxy-Cache "veraltet und nicht aktualisiert" ist.

#### Managed Caches

Managed Caches werden ausdrücklich von Dienstentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient zu liefern. Beispiele sind Reverse-Proxies, CDNs und Service Workers in Kombination mit der Cache-API.

Die Eigenschaften von Managed Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches durch den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keine Möglichkeit, einen Cache explizit zu löschen — aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Das ermöglicht eine proaktivere Caching-Strategie.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zu ignorieren und stattdessen eine explizite Manipulation vorzunehmen. Zum Beispiel kann Folgendes angegeben werden, um sich von einem privaten Cache oder Proxy-Cache abzumelden, während Sie Ihre eigene Strategie anwenden, um nur in einem verwalteten Cache zu speichern.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet der Varnish Cache VCL (Varnish Configuration Language, eine Art von {{Glossary("DSL/Domain_specific_language", "DSL")}}) Logik, um die Cache-Speicherung zu verwalten, während Service Workers in Kombination mit der Cache-API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, wenn ein verwalteter Cache eine `no-store`-Direktive absichtlich ignoriert, besteht keine Notwendigkeit, dies als "nicht konform" mit der Standardspezifikation zu betrachten. Was Sie tun sollten, ist, "kitchen-sink headers" zu vermeiden, aber die Dokumentation des verwendeten Managed-Cache-Mechanismus sorgfältig zu lesen und sicherzustellen, dass Sie den Cache auf die vom Mechanismus bereitgestellten möglichen Weisen richtig kontrollieren.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines Shared (Proxy)-Caches, eines Reverse-Proxy-Caches und eines Shared (Managed)-Caches in einem CDN, der zum Cache des Ursprungsservers führt](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist so konzipiert, dass es so viel wie möglich cached, sodass selbst wenn keine `Cache-Control`-Direktive angegeben ist, Antworten gespeichert und wiederverwendet werden, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

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

Es wird heuristisch angenommen, dass Inhalt, der ein volles Jahr nicht aktualisiert wurde, für einige Zeit danach nicht aktualisiert wird. Daher speichert der Client diese Antwort (trotz fehlendem `max-age`) und verwendet sie eine Zeit lang. Wie lange sie wiederverwendet wird, hängt von der Implementierung ab, aber die Spezifikation empfiehlt etwa 10 % (in diesem Fall 0,1 Jahr) der Zeit nach der Speicherung.

Heuristisches Caching ist ein Workaround, der vor der weit verbreiteten Unterstützung von `Cache-Control` angewendet wurde, und im Grunde sollten alle Antworten ausdrücklich einen `Cache-Control`-Header angeben.

## Frisch und abgelaufen basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **abgelaufen**. Der _frische_ Zustand zeigt normalerweise an, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _abgelaufene_ Zustand bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgelaufen ist, ist das **Alter**. Im HTTP entspricht das Alter der Zeit, die seit der Generierung der Antwort vergangen ist. Dies ähnelt dem {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

Nehmen wir die folgende Beispielsantwort (604800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort gespeichert hat, berechnet die Zeit, die seit der Generierung der Antwort vergangen ist, und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _abgelaufen_.

Solange die gespeicherte Antwort frisch bleibt, wird sie verwendet, um die Anfragen des Clients zu erfüllen.

Wenn eine Antwort in einem Shared Cache gespeichert wird, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Im Fortgang des Beispiels, wenn der Shared Cache die Antwort für einen Tag gespeichert hat, würde der Shared Cache die folgende Antwort an nachfolgende Clientanfragen senden.

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

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden frisch bleibt, was dem Unterschied zwischen `max-age` und `Age` der Antwort entspricht.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header angegeben.

Der `Expires`-Header spezifiziert die Lebensdauer des Caches unter Verwendung einer expliziten Zeit anstatt einer verstrichenen Zeit.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Da jedoch das Zeitformat schwer zu parsen ist, viele Implementierungsfehler gefunden wurden und es möglich ist, durch absichtliche Verschiebung der Systemuhr Probleme zu verursachen, wurde `max-age` — zum Angeben einer verstrichenen Zeit — für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, wird `max-age` bevorzugt. Es ist also nicht notwendig, `Expires` bereitzustellen, nun da HTTP/1.1 weit verbreitet ist.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortkörper            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber der Inhalt der Antworten ist nicht immer derselbe, selbst wenn sie dieselbe URL haben. Besonders wenn Inhaltsverhandlungen durchgeführt werden, kann die Antwort vom Server von den Werten der `Accept`, `Accept-Language` und `Accept-Encoding`-Anfrage-Header abhängen.

Zum Beispiel, wenn englische Inhalte mit einem `Accept-Language: en`-Header zurückgegeben und zwischen gespeichert wurden, ist es nicht wünschenswert, diese zwischengespeicherte Antwort dann für Anfragen mit einem `Accept-Language: ja`-Anfrage-Header wiederzuverwenden. In diesem Fall können Sie bewirken, dass die Antworten anhand der Sprache separat zwischengespeichert werden, indem Sie `Accept-Language` dem Wert des `Vary`-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das bewirkt, dass der Cache basierend auf einer Kombination aus der URL der Antwort und des `Accept-Language`-Anfrage-Headers gekennzeichnet ist, anstatt nur auf der URL der Antwort.

| URL                              | `Accept-Language` | Antwortkörper            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Außerdem, wenn Sie Inhaltsoptimierungen (zum Beispiel für responsives Design) auf Basis des Benutzeragenten bereitstellen, könnten Sie versucht sein, den `User-Agent` im Wert des `Vary`-Headers einzuschließen. Allerdings hat der `User-Agent`-Anfrage-Header im Allgemeinen eine sehr große Anzahl von Variationen, wodurch die Wahrscheinlichkeit der Wiederverwendung des Caches drastisch reduziert wird. Wenn möglich, sollten Sie also stattdessen einen Weg finden, das Verhalten basierend auf der Funktionserkennung zu variieren, anstatt auf dem `User-Agent`-Anfrage-Header.

Für Anwendungen, die Cookies verwenden, um zu verhindern, dass andere zwischengespeicherte personalisierte Inhalte erneut verwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` anzugeben.

## Validierung

Abgelaufene Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um eine abgelaufene Antwort in eine frische zu transformieren, indem der Ursprungsserver gefragt wird. Dies wird als **Validierung** oder manchmal als **Revalidierung** bezeichnet.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die einen `If-Modified-Since`- oder `If-None-Match`-Anfrage-Header enthält.

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

Um 23:22:22 wird die Antwort abgelaufen, und der Cache kann nicht erneut verwendet werden. Die folgende Anfrage zeigt einen Client, der eine Anfrage mit einem `If-Modified-Since`-Anfrage-Header sendet, um den Server zu fragen, ob es seit der angegebenen Zeit Änderungen gegeben hat.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn sich der Inhalt seit der angegebenen Zeit nicht geändert hat.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortkörper — es gibt nur einen Statuscode —, sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Nach Empfang dieser Antwort stellt der Client die gespeicherte, abgelaufene Antwort wieder auf frisch um und kann sie während der verbleibenden 1 Stunde erneut verwenden.

Der Server kann die Änderungszeit vom Dateisystem des Betriebssystems abrufen, was relativ einfach für den Fall der Bereitstellung statischer Dateien ist. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Dateizeitpunkte zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Antwort-Header als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Antwort-Headers ist ein beliebiger Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert erzeugen muss, sodass die Server den Wert basierend auf den von ihnen gewählten Mitteln setzen können — zum Beispiel als Hash des Inhalts oder als Versionsnummer.

Als Beispiel, wenn ein Hash-Wert für den `ETag`-Header verwendet wird und der Hash-Wert der `index.html`-Ressource `33a64df5` beträgt, wird die Antwort wie folgt aussehen:

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

Wenn diese Antwort abgelaufen ist, nimmt der Client den Wert des `ETag`-Antwort-Headers für die zwischengespeicherte Antwort und setzt ihn in den `If-None-Match`-Anfrage-Header, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der Wert des `ETag`-Headers, den er für die angeforderte Ressource bestimmt, derselbe wie der `If-None-Match`-Wert in der Anfrage ist.

Wenn der Server jedoch bestimmt, dass die angeforderte Ressource nun einen anderen `ETag`-Wert haben sollte, antwortet der Server stattdessen mit einem `200 OK` und der neuesten Version der Ressource.

> [!NOTE]
> RFC9110 bevorzugt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, hat `If-None-Match` Vorrang für den Validator.
> Wenn Sie nur über Caching nachdenken, könnten Sie denken, dass `Last-Modified` unnötig ist.
> `Last-Modified` ist jedoch nicht nur nützlich für Caching; es ist ein Standard-HTTP-Header, der auch von Inhaltsverwaltungs- (CMS) Systemen verwendet wird, um die zuletzt geänderte Zeit anzuzeigen, von Crawlern, um die Crawl-Frequenz anzupassen, und für andere verschiedene Zwecke.
> Daher ist es im Hinblick auf das gesamte HTTP-Ökosystem besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Revalidierung erzwingen

Wenn Sie nicht möchten, dass eine Antwort erneut verwendet wird, sondern stattdessen immer den neuesten Inhalt vom Server abrufen möchten, können Sie die `no-cache`-Direktive verwenden, um die Validierung zu erzwingen.

Indem Sie `Cache-Control: no-cache` zur Antwort hinzufügen, zusammen mit `Last-Modified` und `ETag` — wie unten gezeigt — erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder andernfalls eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

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

Häufig wird gesagt, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort abgelaufen ist, und `must-revalidate` bedeutet, dass sie ohne Revalidierung nicht wiederverwendet werden darf, sobald sie abgelaufen ist — sodass in Kombination die Semantik scheinbar dieselbe ist wie bei `no-cache`.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 die `no-cache`-Direktive nicht verstehen konnten — und um mit dieser Einschränkung umzugehen, wurde `max-age=0` als Workaround verwendet.

Da jedoch inzwischen HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund mehr, diese Kombination aus `max-age=0` und `must-revalidate` zu verwenden — Sie sollten stattdessen einfach `no-cache` verwenden.

## Nicht zwischenspeichern

Die `no-cache`-Direktive verhindert nicht das Speichern von Antworten, sondern verhindert die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in irgendeinem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen bedeutet eine "nicht cachen"-Anforderung in der Praxis jedoch die folgende Menge von Umständen:

- Möchten Sie nicht, dass die Antwort von jemand anderem als dem speziellen Client gespeichert wird, aus Datenschutzgründen.
- Möchten Sie immer aktuelle Informationen bereitstellen.
- Wissen nicht, was in veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die am besten geeignete Direktive.

Die folgenden Abschnitte betrachten die Umstände im Detail.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar wäre.

In einem solchen Fall wird die `private`-Direktive bewirken, dass die personalisierte Antwort nur beim speziellen Client gespeichert wird und nicht an einen anderen Benutzer des Caches weitergegeben wird.

```http
Cache-Control: private
```

In einem solchen Fall, selbst wenn `no-store` angegeben ist, muss auch `private` angegeben werden.

### Jedes Mal aktuelle Inhalte bereitstellen

Die `no-store`-Direktive verhindert das Speichern einer Antwort, löscht jedoch keine bereits gespeicherte Antwort für dieselbe URL.

Mit anderen Worten, wenn bereits eine alte Antwort für eine bestimmte URL gespeichert ist, verhindert `no-store` nicht, dass die alte Antwort wiederverwendet wird.

Eine `no-cache`-Direktive hingegen erzwingt, dass der Client eine Validierungsanfrage sendet, bevor eine gespeicherte Antwort wiederverwendet wird.

```http
Cache-Control: no-cache
```

Wenn der Server bedingte Anfragen nicht unterstützt, können Sie den Client dazu zwingen, jedes Mal den Server zu kontaktieren und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, können Sie "kitchen-sink headers" wie die folgenden verwenden.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative anzuwenden, um mit solchen veralteten Implementierungen umzugehen, und es ist kein Problem, wenn `no-cache` von Anfang an angegeben wird, da der Server die Anfrage immer erhalten wird.

Wenn es der Shared Cache ist, der Ihnen Sorgen bereitet, können Sie sicherstellen, dass unbeabsichtigtes Caching verhindert wird, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Sie könnten denken, dass das Hinzufügen von `no-store` der richtige Weg wäre, sich vom Caching abzumelden.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu gewähren, da Sie viele Vorteile verlieren, die HTTP und Browser bieten, einschließlich des Browser-Back/Forward-Caches.

Um die Vorteile des vollständigen Funktionsumfangs der Web-Plattform zu nutzen, bevorzugen Sie daher die Verwendung von `no-cache` in Kombination mit `private`.

## Neu laden und erzwungenes Neuladen

Die Validierung kann für Anfragen sowie für Antworten durchgeführt werden.

Die Aktionen **Neu laden** und **erzwungenes Neuladen** sind gängige Beispiele für Validierung, die von der Browserseite ausgeführt wird.

### Neu laden

Um den Verlust der Fensterintegrität wiederherzustellen oder auf die neueste Version der Ressource zu aktualisieren, bieten Browser den Benutzern eine Neuladefunktion an.

Eine vereinfachte Ansicht der HTTP-Anfrage, die während eines Browserneuladens gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen dem obigen sehr ähnlich aus; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0`-Direktive in der Anfrage gibt an "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" — sodass zwischengespeicherte Antworten effektiv nicht wiederverwendet werden.

Daher wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `no-cache` aufgerufen wird (beachten Sie, dass `reload` in diesem Fall nicht der richtige Modus ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neuladen

Browser verwenden `max-age=0` während des Neuladens aus Gründen der Abwärtskompatibilität, weil viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden. Aber `no-cache` ist jetzt in diesem Anwendungsfall in Ordnung, und ein **erzwungenes Neuladen** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser-**erzwungenen Neuladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen dem obigen sehr ähnlich aus; die Anfragen von Safari sehen etwas anders aus.)

Da dies keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie ein `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `reload` aufgerufen wird (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung von Revalidierung

Inhalte, die sich nie ändern, sollten durch Cache Busting eine lange `max-age`-Dauer erhalten — das heißt, durch Einfügen einer Versionsnummer, eines Hash-Werts usw. in die Anfrage-URL.

Wenn der Benutzer jedoch eine Seite neu lädt, wird eine Revalidierungsanfrage gesendet, obwohl der Server weiß, dass der Inhalt unveränderlich ist.

Um dies zu verhindern, kann die `immutable`-Direktive verwendet werden, um ausdrücklich anzuzeigen, dass keine Revalidierung erforderlich ist, da sich der Inhalt nie ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Revalidierung bei Neuladen.

Beachten Sie, dass anstelle der Umsetzung dieser Direktive [Chrome seine Implementierung geändert](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html) hat, sodass bei Neuladen keine Revalidierung für Subressourcen durchgeführt wird.

## Löschen von gespeicherten Antworten

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

Sie könnten diese Antwort überschreiben wollen, sobald sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, einmal die Antwort gespeichert ist — da wegen des Cachings keine weiteren Anfragen den Server erreichen.

Eine der im Standard erwähnten Methoden ist das Senden einer Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST`, aber für viele Clients ist das schwer zu tun.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Header und der Direktivenwert können verwendet werden, um die Browser-Caches zu löschen — aber hat keinen Effekt auf Zwischencaches.
Andernfalls bleiben die Antworten im Browser-Cache, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell ein Neuladen, ein erzwungenes Neuladen oder eine Verlaufslöschung durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server keine Kontrolle über eine URL verlieren möchte — zum Beispiel im Fall, dass eine Ressource häufig aktualisiert wird — sollten Sie `no-cache` hinzufügen, sodass der Server immer Anfragen erhält und die vorgesehenen Antworten sendet.

## Anfrage-Zusammenführung

Der Shared Cache befindet sich in der Regel vor dem Ursprungsserver und soll den Datenverkehr zum Ursprungsserver verringern.

Wenn also mehrere identische Anfragen gleichzeitig bei einem Shared Cache eingehen, sendet der Zwischenspeicher eine einzige Anfrage im Namen des Caches an den Ursprungsserver weiter, der das Ergebnis dann für alle Clients wiederverwenden kann. Dies wird als _**Anfrage-Zusammenführung**_ bezeichnet.

Die Anfrage-Zusammenführung erfolgt, wenn Anfragen gleichzeitig eingehen, sodass selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, sie wiederverwendet wird.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie in der Zusammenführung geteilt wird, sollten Sie die `private`-Direktive hinzufügen:

![Anfrage-Zusammenführung, dargestellt durch mehrere Clients, die GET-Anfragen senden, und einen Cache, der sie in einer GET-Anfrage an den Ursprung zusammenführt. Der Ursprungsserver antwortet mit einem 200 OK, das der Cache an alle Clients zurückgibt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Häufige Caching-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites können durch eine Kombination von einer Handvoll Mustern abgedeckt werden.

Dieser Abschnitt beschreibt die gängigen Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie bereits erwähnt, ist das Standardverhalten für Caching (d.h. für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern implizites Caching nach dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten explizit einen Standard-`Cache-Control`-Header zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es üblich, die `Cache-Control`-Standardwert mit `no-cache` zu versehen:

```http
Cache-Control: no-cache
```

Außerdem, falls der Dienst Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss auch `private` angegeben werden, um das Teilen mit anderen Benutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache-Busting

Die Ressourcen, die am besten für Caching geeignet sind, sind statische, unveränderliche Dateien, deren Inhalt sich nie ändert. Und für Ressourcen, die _sich_ ändern, ist es gängige Best Practice, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, damit die URL-Einheit für einen längeren Zeitraum zwischengespeichert werden kann.

Betrachten Sie zum Beispiel das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, sobald die Entwicklung fortschreitet. Außerdem, wenn die Versionen der JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind, wird die Anzeige brechen.

Daher macht das obige HTML es schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie die JavaScript- und CSS-Ressourcen mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hash-Wert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten gezeigt.

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

Da der Cache Ressourcen anhand ihrer URLs unterscheidet, wird der Cache nicht mehr wiederverwendet, wenn sich die URL bei einer Aktualisierung der Ressource ändert.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen über einen längeren Zeitraum zwischengespeichert werden. Wie lange sollte `max-age` eingestellt werden? Die QPACK-Spezifikation liefert eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Header-Feldern, mit Tabellen der häufig verwendeten Feldwerte.

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

Nummern `37`, `38` und `41` stehen für Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch vorhanden ist, nicht so hoch — selbst wenn `max-age` auf 1 Woche eingestellt ist. Daher macht es in der Praxis keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass die Nummer `41` die längste `max-age` (1 Jahr) hat, jedoch mit `public`.

Der `public`-Wert hat den Effekt, dass die Antwort speicherbar ist, selbst wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Direktive sollte nur verwendet werden, wenn es notwendig ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Ansonsten ist sie nicht erforderlich, da eine Antwort im Shared Cache gespeichert wird, solange `max-age` angegeben ist.

Wenn die Antwort jedoch mit Basisauthentifizierung personalisiert ist, kann das Vorhandensein von `public` Probleme verursachen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert `38` (1 Monat) wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified`- und `ETag`-Header festzulegen, um eine Ressource nicht erneut übermitteln zu müssen, wenn die Seite neu geladen wird. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag`-Wert hier kann ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

Zusätzlich kann `immutable` hinzugefügt werden, um Validierung beim Neuladen zu verhindern.

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

**Cache-Busting** ist eine Technik, um eine Antwort durch die Änderung der URL, wenn sich der Inhalt ändert, über einen langen Zeitraum hinweg cachbar zu machen. Die Technik kann auf alle Subressourcen angewendet werden, wie Bilder.

> [!NOTE]
> Bei der Auswertung der Verwendung von `immutable` und QPACK:
> Wenn Sie befürchten, dass `immutable` den von QPACK bereitgestellten vordefinierten Wert ändert, bedenken Sie, dass in diesem Fall der `immutable`-Teil separat codiert werden kann, indem der Wert des `Cache-Control` in zwei Zeilen gesplittet wird — obwohl dies vom Codierungsalgorithmus einer bestimmten QPACK-Implementierung abhängt.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Subressourcen können Hauptressourcen nicht durch Cache-Busting beschädigt werden, da ihre URLs nicht auf die gleiche Weise dekoriert werden können wie die URLs von Subressourcen.

Wenn das folgende HTML selbst gespeichert wird, kann selbst bei einer Aktualisierung des Inhalts auf der Serverseite die neueste Version nicht angezeigt werden.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

In diesem Fall wäre `no-cache` angemessen — anstatt `no-store` — da wir nicht möchten, dass HTML gespeichert wird, sondern einfach nur, dass es immer auf dem neuesten Stand ist.

Durch das Hinzufügen von `Last-Modified` und `ETag` können Clients bedingte Anfragen senden, und `304 Not Modified` kann zurückgegeben werden, wenn keine Updates an dem HTML erfolgt sind:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Diese Einstellung ist angemessen für nicht personalisiertes HTML, aber für eine Antwort, die nach der Anmeldung mit Cookies personalisiert wird — vergessen Sie nicht, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Das Gleiche kann verwendet werden für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte, deren URLs nicht durch Cache-Busting geändert werden können.

Die meisten Webinhalte können durch eine Kombination der beiden beschriebenen Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der in den vorherigen Abschnitten beschriebenen Methode können Subressourcen durch Cache-Busting über einen langen Zeitraum zwischengespeichert werden, aber Hauptressourcen (die in der Regel HTML-Dokumente sind) können es nicht.

Das Caching von Hauptressourcen ist schwierig, denn anhand der Standarddirektiven der HTTP-Caching-Spezifikation gibt es keine Möglichkeit, den Cache-Inhalt aktiv zu löschen, wenn die Inhalte auf dem Server aktualisiert werden.

Es ist jedoch möglich, indem man einen verwalteten Cache wie ein CDN oder einen Service Worker bereitstellt.

Zum Beispiel würde ein CDN, das das Cache-Bereinigung über eine API oder Dashboard-Operation erlaubt, eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und explizit gelöscht wird, wenn ein Update am Server auftritt.

Ein Service Worker könnte dasselbe tun, wenn er die Inhalte in der Cache-API löschen könnte, wenn ein Update am Server auftritt.

Für weitere Informationen, sehen Sie sich die Dokumentation Ihres CDN an, und konsultieren Sie die [Service Worker Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Leitfaden - Mark Nottingham](https://www.mnot.net/cache_docs/)
