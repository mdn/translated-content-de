---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verbunden ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Erstens muss die Anfrage nicht an den Ursprungsserver gesendet werden, sodass die Antwort umso schneller ist, je näher der Client und der Cache beieinander liegen. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Außerdem muss der Ursprungsserver eine Anfrage nicht verarbeiten, wenn eine Antwort wiederverwendbar ist - er muss also die Anfrage nicht parsen und routen, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das verringert die Last auf dem Server.

Der ordnungsgemäße Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP Caching](https://httpwg.org/specs/rfc9111.html) Spezifikation gibt es zwei Haupttypen von Caches: **private Caches** und **gemeinsame Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen bestimmten Client gebunden ist — typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen Cache als einem privaten Cache gespeichert werden, können andere Benutzer in der Lage sein, diese Inhalte abzurufen — was zu unbeabsichtigtem Informationsverlust führen kann.

Wenn eine Antwort personalisierte Inhalte enthält und Sie diese Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber das Vorhandensein eines Cookies bedeutet nicht immer, dass er privat ist, und ein Cookie allein macht die Antwort somit nicht privat.

### Gemeinsamer Cache

Der gemeinsame Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die unter Benutzern geteilt werden können. Und gemeinsame Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Funktion der Zugangskontrolle implementieren einige Proxys das Caching zur Reduzierung des Netzwerkausgangsverkehrs. Dies wird normalerweise nicht vom Service-Entwickler verwaltet, es muss also durch entsprechende HTTP-Header usw. gesteuert werden. In der Vergangenheit verursachten jedoch veraltete Proxy-Cache-Implementierungen — wie Implementierungen, die die HTTP-Caching-Standards nicht richtig verstehen — häufig Probleme für Entwickler.

**Küchen-Spülen-Header** wie der folgende werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikations-Direktiven wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, da HTTPS immer häufiger wird und die Kommunikation zwischen Client und Server verschlüsselt ist, können Proxy-Caches auf dem Weg nur noch eine Antwort tunneln und nicht als ein Cache arbeiten. In diesem Szenario besteht kein Grund zur Sorge über veraltete Proxy-Cache-Implementierungen, die die Antwort nicht einmal sehen können.

Andererseits ist es möglich, dass ein {{Glossary("TLS", "TLS")}}-Bridge-Proxy alle Kommunikationen in einer Man-in-the-Middle-Weise durch Entschlüsselung mit einem von der Organisation auf dem PC installierten Zertifikat einer {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} sieht und die Antwort cacht. Da jedoch [CT (Certificate Transparency)](/de/docs/Web/Security/Defenses/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate zulassen, die mit einem SCT (signed certificate timestamp) ausgestellt wurden, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einem solchen kontrollierten Umfeld besteht keine Notwendigkeit, sich Gedanken über einen "veralteten und nicht aktualisierten" Proxy-Cache zu machen.

#### Verwaltete Caches

Verwaltete Caches werden explizit von Service-Entwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient zu liefern. Beispiele sind Reverse-Proxys, CDNs und Service-Worker in Kombination mit der Cache API.

Die Merkmale verwalteter Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches über den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keine Möglichkeit, einen Cache explizit zu löschen — aber bei einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Das ermöglicht eine proaktivere Caching-Strategie.

Es ist auch möglich, die standardmäßigen HTTP-Caching-Spezifikationsprotokolle zugunsten expliziter Manipulationen zu ignorieren. Zum Beispiel können Sie festlegen, dass eine private Cache- oder Proxy-Cache-Option beim Verwenden einer eigenen Strategie, die nur in einem verwalteten Cache cachen soll, übersprungen wird.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache die VCL (Varnish Configuration Language, eine Art {{Glossary("DSL/Domain_specific_language", "DSL")}}) Logik zur Handhabung der Cache-Speicherung, während Service-Worker in Kombination mit der Cache API es Ihnen erlauben, diese Logik in JavaScript zu erstellen.

Das bedeutet, dass, wenn ein verwalteter Cache eine `no-store`-Direktive absichtlich ignoriert, es nicht nötig ist, ihn als "nicht konform" mit dem Standard zu betrachten. Was Sie tun sollten, ist, zu vermeiden, Küchen-Spülen-Header zu verwenden, aber die Dokumentation des verwendeten verwalteten Cache-Mechanismus sorgfältig zu lesen und sicherzustellen, dass Sie den Cache auf die von Ihnen gewählte Art und Weise richtig kontrollieren.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN effektiv sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines gemeinsamen (Proxy)-Caches, eines Reverse-Proxy-Caches und eines gemeinsamen (verwalteten) Caches in einem CDN, der zum Cache des Ursprungsservers führt](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist so konzipiert, dass es so viel wie möglich cached, sodass selbst wenn kein `Cache-Control` angegeben ist, Antworten gespeichert und wiederverwendet werden, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

Nehmen Sie zum Beispiel die folgende Antwort. Diese Antwort wurde vor einem Jahr zuletzt aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die ein ganzes Jahr lang nicht aktualisiert wurden, für einige Zeit danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des Fehlens von `max-age`) und verwendet sie für eine Weile. Wie lange wiederverwendet wird, hängt von der Implementierung ab, aber die Spezifikation empfiehlt etwa 10% (in diesem Fall 0,1 Jahr) der Zeit nach dem Speichern.

Heuristisches Caching ist ein Workaround, der entstand, bevor die Unterstützung für `Cache-Control` weit verbreitet war, und im Grunde sollten alle Antworten explizit einen `Cache-Control`-Header angeben.

## Fresh und Stale basierend auf Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **fresh** und **stale**. Der _fresh_ Zustand zeigt normalerweise an, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _stale_ Zustand bedeutet, dass die gespeicherte Antwort bereits abgelaufen ist.

Das Kriterium, um zu bestimmen, wann eine Antwort fresh und wann sie stale ist, ist das **Alter**. In HTTP ist das Alter die seit der Erstellung der Antwort vergangene Zeit. Dies ist vergleichbar mit dem {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

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

Der Cache, der die Beispielantwort gespeichert hat, berechnet die seit der Erstellung der Antwort verstrichene Zeit und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _fresh_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _stale_.

Solange die gespeicherte Antwort _fresh_ bleibt, wird sie verwendet, um Client-Anfragen zu erfüllen.

Wenn eine Antwort in einem gemeinsamen Cache gespeichert ist, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Beim Fortführen des Beispiels, wenn der geteilte Cache die Antwort für einen Tag speichert, würde der gemeinsame Cache die folgende Antwort an nachfolgende Client-Anfragen senden.

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

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden fresh bleibt, der Unterschied zwischen `max-age` und `Age` der Antwort.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header spezifiziert.

Der `Expires`-Header gibt die Lebensdauer des Caches mit einer expliziten Zeit anstatt durch Angabe einer verstrichenen Zeit an.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Jedoch ist das Zeitformat schwer zu parsen, viele Implementierungsfehler wurden gefunden und es ist möglich, Probleme durch absichtliche Änderung der Systemuhr zu verursachen; daher wurde `max-age` — zur Angabe einer verstrichenen Zeit — für die `Cache-Control`-Spezifikation in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, wird `max-age` bevorzugt. Es ist daher nicht mehr notwendig, `Expires` jetzt bereitzustellen, da HTTP/1.1 weit verbreitet ist.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortinhalt            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber die Inhalte von Antworten sind nicht immer gleich, selbst wenn sie die gleiche URL haben. Besonders wenn Inhaltsaushandlung durchgeführt wird, kann die Antwort des Servers von den Werten der `Accept`, `Accept-Language` und `Accept-Encoding` Request-Header abhängen.

Zum Beispiel, wenn englische Inhalte mit einem `Accept-Language: en` Header zurückgesendet und gecacht werden, ist es unerwünscht, diese gecachte Antwort dann für Anfragen zu verwenden, die einen `Accept-Language: ja` Request-Header haben. In diesem Fall können Sie verursachen, dass die Antworten separat — basierend auf der Sprache — gecached werden, indem Sie `Accept-Language` zum Wert des `Vary` Headers hinzufügen.

```http
Vary: Accept-Language
```

Das veranlasst den Cache, basierend auf einer Kombination aus der Antwort-URL und dem `Accept-Language`-Request-Header — anstatt nur der Antwort-URL — gekennzeichnet zu werden.

| URL                              | `Accept-Language` | Antwortinhalt            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Wenn Sie auch Inhalte basierend auf dem Nutzeragenten optimieren (zum Beispiel für ein responsives Design), könnten Sie versucht sein, `User-Agent` im Wert des `Vary`-Headers einzuschließen. Allerdings hat der `User-Agent`-Request-Header in der Regel eine sehr große Anzahl von Variationen, was die Chance drastisch reduziert, dass der Cache wiederverwendet wird. Also, wenn möglich, ziehen Sie stattdessen eine Möglichkeit in Betracht, das Verhalten basierend auf der Funktionserkennung anstatt auf dem `User-Agent`-Request-Header zu variieren.

Für Anwendungen, die Cookies verwenden, um anderen die Wiederverwendung gecachter personalisierter Inhalte zu verhindern, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` zu spezifizieren.

## Validierung

Stale-Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um durch Anfrage des Ursprungsservers aus einer stale-Antwort eine fresh-Antwort zu machen. Dies wird als **Validierung** oder manchmal auch **Revalidierung** bezeichnet.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die einen `If-Modified-Since` oder `If-None-Match` Request-Header enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 erzeugt und hat ein `max-age` von 1 Stunde, sodass Sie wissen, dass sie bis 23:22:22 fresh ist.

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

Um 23:22:22 wird die Antwort stale und der Cache kann nicht wiederverwendet werden. So zeigt die unten stehende Anfrage, dass ein Client eine Anfrage mit einem `If-Modified-Since` Request-Header sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server wird mit `304 Not Modified` antworten, wenn sich der Inhalt seit der angegebenen Zeit nicht geändert hat.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortkörper — nur einen Statuscode — daher ist die Übertragungsgröße extrem klein.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Beim Empfang dieser Antwort erneuert der Client die gespeicherte stale-Antwort in eine fresh-Antwort und kann sie während der verbleibenden 1 Stunde wiederverwenden.

Der Server kann die Änderungszeit vom Betriebssystem-Dateisystem abfragen, was relativ einfach zu tun ist, wenn es darum geht, statische Dateien zu servieren. Allerdings gibt es einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Datei-Update-Zeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Response-Header als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Response-Headers ist ein beliebiger Wert, der vom Server generiert wurde. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, daher sind die Server frei, den Wert basierend auf beliebigen Mitteln zu setzen — wie zum Beispiel einem Hash des Body-Inhalts oder einer Versionsnummer.

Als Beispiel, wenn ein Hash-Wert für den `ETag`-Header verwendet wird und der Hash-Wert der `index.html`-Ressource `33a64df5` ist, wird die Antwort wie folgt lauten:

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

Wenn diese Antwort stale ist, nimmt der Client den Wert des `ETag`-Response-Headers für die gecachte Antwort und setzt ihn in den `If-None-Match` Request-Header, um den Server zu fragen, ob die Ressource modifiziert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der Wert des `ETag`-Headers, den er für die angeforderte Ressource bestimmt, der gleiche ist wie der `If-None-Match`-Wert der Anfrage.

Aber wenn der Server bestimmt, dass die angeforderte Ressource nun einen anderen `ETag`-Wert haben sollte, wird der Server stattdessen mit `200 OK` und der neuesten Version der Ressource antworten.

> [!NOTE]
> RFC9110 empfiehlt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, dann hat `If-None-Match` Vorrang für den Validator.
> Wenn Sie nur über das Caching nachdenken, könnten Sie denken, dass `Last-Modified` unnötig ist.
> `Last-Modified` ist jedoch nicht nur für das Caching nützlich; es ist ein standardmäßiger HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Crawlern, um die Crawl-Frequenz anzupassen, und für andere verschiedene Zwecke.
> Daher ist es besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen, wenn man das gesamte HTTP-Ökosystem betrachtet.

### Zwangsrevalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern immer die neueste Antwort vom Server abrufen möchten, können Sie die `no-cache`-Direktive verwenden, um die Validierung zu erzwingen.

Indem Sie `Cache-Control: no-cache` zur Antwort zusammen mit `Last-Modified` und `ETag` hinzufügen — wie unten gezeigt — erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

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

Oft wird gesagt, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort stale ist, und `must-revalidate` bedeutet, dass sie nicht wiederverwendet werden sollte, ohne dass sie bei stale neuvalidiert wird — also scheinen die Semantiken in Kombination die gleiche Bedeutung wie `no-cache` zu haben.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache`-Direktive zu handhaben — und so wurde `max-age=0` als Workaround verwendet, um dieses Limit zu umgehen.

Aber jetzt, da HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund, diese Kombination von `max-age=0` und `must-revalidate` zu verwenden — stattdessen sollte man einfach `no-cache` verwenden.

## Nicht cachen

Die `no-cache`-Direktive verhindert nicht die Speicherung von Antworten, sondern verhindert stattdessen die Wiederverwendung von Antworten ohne Nevalidierung.

Wenn Sie nicht möchten, dass eine Antwort in einem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen entspricht jedoch eine "Nicht-cachen"-Anforderung in der Praxis den folgenden Umständen:

- Die Antwort soll aus Datenschutzgründen von niemand anderem als dem spezifischen Client gespeichert werden.
- Sie möchten jederzeit aktuelle Informationen bereitstellen.
- Sie wissen nicht, was in veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die geeignetste Direktive.

In den folgenden Abschnitten werden die Umstände genauer betrachtet.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar wäre.

In einem solchen Fall führt die Verwendung der `private`-Direktive dazu, dass die personalisierte Antwort nur mit dem jeweiligen Client gespeichert wird und nicht an andere Benutzer des Caches weitergegeben wird.

```http
Cache-Control: private
```

In einem solchen Fall muss selbst wenn `no-store` gegeben ist, auch `private` gegeben werden.

### Jedes Mal aktuelle Inhalte bereitstellen

Die `no-store`-Direktive verhindert, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für die gleiche URL.

Mit anderen Worten, wenn bereits eine alte Antwort für eine bestimmte URL gespeichert ist, wird durch die Rückgabe von `no-store` nicht verhindert, dass die alte Antwort wiederverwendet wird.

Jedoch wird eine `no-cache`-Direktive den Client zwingen, eine Validierungsanfrage zu senden, bevor eine gespeicherte Antwort wiederverwendet wird.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client zwingen, jedes Mal auf den Server zuzugreifen und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, können Sie Küchen-Spülen-Header wie die folgenden sehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative zu verwenden, um mit solchen veralteten Implementierungen umzugehen, und es ist kein Problem, wenn `no-cache` von Anfang an gegeben ist, da der Server immer die Anfrage erhält.

Wenn es der gemeinsame Cache ist, über den Sie besorgt sind, können Sie sicherstellen, dass ungewolltes Caching verhindert wird, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Sie könnten denken, durch das Hinzufügen von `no-store`, die richtige Methode zu wählen, um sich vom Caching abzumelden.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu vergeben, da Sie viele Vorteile, die HTTP und Browser zu bieten haben, einschließlich des Vor- und Zurück-Caches des Browsers, verlieren.

Daher ist es vorteilhafter, `no-cache` in Kombination mit `private` zu verwenden, um alle Vorteile des vollen Funktionsumfangs der Webplattform zu nutzen.

## Neuladen und Zwangsneuladen

Die Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Das **Neuladen** und **Zwangsneuladen** sind gängige Beispiele für Validierungen, die von der Browserseite aus durchgeführt werden.

### Neuladen

Zum Wiederherstellen nach Fensterbeschädigung oder Aktualisieren auf die neueste Version der Ressource bietet der Browser eine Neuladefunktion für Benutzer.

Eine vereinfachte Darstellung der HTTP-Anfrage, die während eines Browser-Neuladens gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich wie oben aus; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0`-Direktive in der Anfrage spezifiziert die "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" — sodass zwischengespeicherte Antworten nicht wiedergenutzt werden.

Das führt dazu, dass eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert wird.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch) Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus auf `no-cache` gesetzt wird (beachten Sie, dass `reload` nicht der richtige Modus für diesen Fall ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Zwangsneuladen

Browser verwenden `max-age=0` während des Neuladens aufgrund von Abwärtskompatibilitätsgründen — weil viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden haben. Aber `no-cache` ist jetzt für diesen Anwendungsfall in Ordnung, und das **Zwangsneuladen** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser-**Zwangsneuladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich wie oben aus; die Anfragen von Safari sehen etwas anders aus.)

Da dies keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie vom Ursprungsserver ein `200 OK` erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch) Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus auf `reload` gesetzt wird (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung der Nevalidierung

Inhalte, die sich nie ändern, sollten mit einer langen `max-age` versehen werden, indem Cache-Busting verwendet wird — das heißt, indem eine Versionsnummer, ein Hash-Wert usw. in die Anforderungs-URL eingefügt werden.

Wenn der Benutzer jedoch die Seite neu lädt, wird eine Nevalidierungsanfrage gesendet, obwohl der Server weiß, dass der Inhalt unveränderlich ist.

Um dies zu verhindern, kann die `immutable`-Direktive verwendet werden, um explizit anzuzeigen, dass eine Nevalidierung nicht erforderlich ist, da der Inhalt sich nie ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Nevalidierungen während Neuladungen.

Beachten Sie, dass anstelle der Implementierung dieser Direktive, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass Nevalidierungen während Neuladungen für Unterressourcen nicht durchgeführt werden.

## Gespeicherte Antworten löschen

Es gibt keine Möglichkeit, Antworten auf einem zwischengeschalteten Server zu löschen, die mit einer langen `max-age` gespeichert wurden.

Stellen Sie sich vor, die folgende Antwort von `https://example.com/` wurde gespeichert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Möglicherweise möchten Sie diese Antwort überschreiben, wenn sie auf dem Server abläuft, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert wurde — da durch das Caching keine weiteren Anfragen den Server erreichen.

Eine der in der Spezifikation erwähnten Methoden ist, eine Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST` zu senden, aber für viele Clients ist das schwer zu tun.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) Header und der Direktivwert kann verwendet werden, um Browser-Caches zu löschen — aber hat keine Wirkung auf zwischengeschaltete Caches. Andernfalls bleiben Antworten im Browser-Cache, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell eine Neulade-, Zwangsneulade- oder Verlaufslöschen-Aktion aus.

Caching reduziert den Zugriff auf den Server, wodurch der Server die Kontrolle über diese URL verliert. Wenn der Server keine Kontrolle über eine URL verlieren möchte — zum Beispiel im Fall, dass eine Ressource häufig aktualisiert wird — sollten Sie `no-cache` hinzufügen, sodass der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Request Collapse

Der gemeinsam genutzte Cache befindet sich in erster Linie vor dem Ursprungsserver und soll den Verkehr zum Ursprungsserver reduzieren.

Wenn daher mehrere identische Anfragen gleichzeitig an einem gemeinsamen Cache eintreffen, wird der Zwischen-Cache eine einzelne Anfrage im Namen seiner selbst an den Ursprung weiterleiten, die das Ergebnis dann für alle Client wiederverwenden kann. Dies wird als _Request Collapse_ bezeichnet.

Ein Request Collapse tritt auf, wenn Anfragen gleichzeitig eintreffen, sodass selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, sie wiederverwendet wird.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie in einem Collapse geteilt wird, sollten Sie die `private` Direktiv hinzufügen:

![Request Collapse dargestellt als mehrere Clients, die GET-Anfragen senden und ein Cache, das sie zu einem einzigen GET an den Ursprung konsolidiert. Der Ursprungsserver antwortet mit einem 200 OK, das das Cache an alle Clients weitergibt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Häufige Caching-Muster

Es gibt viele Direktiven in der `Cache-Control` Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites können mit einer Kombination aus einigen wenigen Mustern abgedeckt werden.

Dieser Abschnitt beschreibt die häufigen Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie bereits erwähnt, ist das Standardverhalten für das Caching (das heißt für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern implizites Caching nach dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten einen standardmäßigen `Cache-Control` Header explizit zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es eine bewährte Praxis, den Standard `Cache-Control`-Wert `no-cache` als Grundlage zu verwenden:

```http
Cache-Control: no-cache
```

Darüber hinaus, wenn der Service Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss auch `private` angegeben werden, um das Teilen mit anderen Benutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache-Busting

Die Ressourcen, die am besten mit Caching funktionieren, sind statische unveränderliche Dateien, deren Inhalte sich nie ändern. Und für Ressourcen, die sich _tatsächlich_ ändern, ist es eine bewährte Praxis, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, sodass das URL-Element für einen längeren Zeitraum gecached werden kann.

Als Beispiel betrachten Sie das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung voranschreitet. Außerdem, wenn die Versionen der JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchronisiert sind, wird die Anzeige beeinflusst.

Das obige HTML macht es also schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Sie können daher das JavaScript und CSS mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hash-Wert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten aufgeführt.

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

Da der Cache Ressourcen basierend auf ihren URLs voneinander unterscheidet, wird der Cache nicht wiederverwendet, wenn sich die URL ändert, sobald eine Ressource aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für einen langen Zeitraum gecached werden. Wie lange sollte also `max-age` eingestellt werden? Die QPACK-Spezifikation bietet eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Headerfeldern, mit Tabellen von häufig verwendeten Feldwerten.

Einige häufig verwendete Cache-Headerwerte sind unten gezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie Werte in 1 Byte komprimieren, wenn sie über HTTP3 übertragen werden.

Die Nummern `37`, `38` und `41` sind für Zeiträume von einer Woche, einem Monat und einem Jahr.

Weil der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch vorhanden ist, nicht so hoch — selbst wenn `max-age` auf 1 Woche eingestellt ist. Daher macht es in der Praxis keinen großen Unterschied, welche dieser Optionen man wählt.

Beachten Sie, dass Nummer `41` die längste `max-age` (1 Jahr) hat, jedoch mit `public`.

Der `public` Wert hat die Wirkung, die Antwort speicherbar zu machen, selbst wenn der `Authorization` Header gesetzt ist.

> [!NOTE]
> Die `public` Direktive sollte nur verwendet werden, wenn es erforderlich ist, die Antwort zu speichern, wenn der `Authorization` Header gesetzt ist.
> Sie wird ansonsten nicht benötigt, da eine Antwort im gemeinsam genutzten Cache gespeichert wird, solange `max-age` gegeben ist.

Wenn die Antwort mit Basis-Authentifizierung personalisiert ist, kann das Vorhandensein von `public` möglicherweise Probleme verursachen. Wenn Sie darüber besorgt sind, können Sie stattdessen den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified` und `ETag` Header zu setzen, damit Sie eine Ressource beim Neuladen nicht erneut übertragen müssen. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag` Wert hier kann ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

Darüber hinaus kann `immutable` hinzugefügt werden, um Validierungen beim Neuladen zu verhindern.

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

**Cache-Busting** ist eine Technik, um eine Antwort über einen langen Zeitraum cachebar zu machen, indem die URL geändert wird, sobald sich der Inhalt ändert. Die Technik kann auf alle Unterressourcen angewendet werden, wie zum Beispiel Bilder.

> [!NOTE]
> Beim Evaluieren der Verwendung von `immutable` und QPACK:
> Wenn Sie besorgt sind, dass `immutable` den vorgegebenen Wert von QPACK ändert, bedenken Sie, dass
> in diesem Fall der `immutable` Teil separat kodiert werden kann, indem der `Cache-Control` Wert in zwei Zeilen aufgeteilt wird — obwohl dies von dem, von einem bestimmten QPACK-Implementierung verwendeten Kodierungsalgorithmus abhängt.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Unterressourcen können Hauptressourcen nicht cache gebustet werden, da ihre URLs nicht auf die gleiche Weise dekoriert werden können wie die URLs von Unterressourcen.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt serverseitig aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Für diesen Fall wäre `no-cache` angemessen — anstatt `no-store` — da wir das HTML nicht speichern wollen, sondern stattdessen möchten, dass es immer auf dem neuesten Stand ist.

Durch das Hinzufügen von `Last-Modified` und `ETag` können Clients bedingte Anfragen senden, und es kann eine `304 Not Modified` zurückgegeben werden, wenn keine Updates am HTML vorgenommen wurden:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Diese Einstellung ist geeignet für nicht personalisierte HTML-Antworten, aber für eine Antwort, die unter Verwendung von Cookies personalisiert wird — zum Beispiel nach einem Login — vergessen Sie nicht, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Das gleiche kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht mit Cache-Busting geändert werden können.

Die meisten Webinhalte können mit einer Kombination der beiden oben beschriebenen Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der Methode, die in den vorherigen Abschnitten beschrieben wurde, können Unterressourcen durch Cache-Busting über einen langen Zeitraum gecached werden, aber Hauptressourcen (die normalerweise HTML-Dokumente sind) nicht.

Das Cachen von Hauptressourcen ist schwierig, da es unter Verwendung nur der standardmäßigen Direktiven aus der HTTP-Caching-Spezifikation keine Möglichkeit gibt, den Cache-Inhalt aktiv zu löschen, wenn der Inhalt auf dem Server aktualisiert wird.

Es ist jedoch möglich, indem man einen verwalteten Cache wie ein CDN oder einen Service-Worker bereitstellt.

Zum Beispiel würde ein CDN, das das Cache-Löschen über eine API oder Dashboard-Operation erlaubt, eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der betreffende Cache nur dann explizit gelöscht wird, wenn ein Update auf dem Server erfolgt.

Ein Service-Worker könnte dasselbe tun, wenn er die Inhalte in der Cache API löschen könnte, wenn ein Update auf dem Server erfolgt.

Für weitere Informationen, sehen Sie die Dokumentation Ihres CDN und konsultieren Sie die [Service-Worker-Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://mnot.net/cache_docs/)
