---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: e4e57ab3ccb5f93319f8fe13848d4895d3e1e771
---

{{HTTPSidebar}}

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verknüpft ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen wieder.

Die Wiederverwendbarkeit bietet mehrere Vorteile. Da die Anfrage nicht an den Ursprungsserver geliefert werden muss, ist die Antwort umso schneller, je näher der Client und der Cache beieinander liegen. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Darüber hinaus muss der Ursprungsserver die Anfrage nicht verarbeiten, wenn eine Antwort wiederverwendbar ist. Er muss die Anfrage also nicht parsen und weiterleiten, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Belastung des Servers.

Die ordnungsgemäße Funktion des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP-Caching-Spezifikation](https://httpwg.org/specs/rfc9111.html) gibt es zwei Haupttypen von Caches: **private Caches** und **geteilte Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen bestimmten Client gebunden ist – typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen Cache als einem privaten Cache gespeichert werden, können andere Benutzer möglicherweise diese Inhalte abrufen – was zu einer unbeabsichtigten Informationsweiterleitung führen kann.

Wenn eine Antwort personalisierte Inhalte enthält und Sie möchten, dass die Antwort nur im privaten Cache gespeichert wird, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber die Anwesenheit eines Cookies bedeutet nicht immer, dass es privat ist, und somit macht ein Cookie allein die Antwort nicht privat.

### Geteilte Caches

Der geteilte Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die unter Benutzern geteilt werden können. Geteilte Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Neben der Zugriffskontrolle implementieren einige Proxies Caching, um den ausgehenden Netzwerkverkehr zu reduzieren. Dies wird normalerweise nicht vom Dienstentwickler verwaltet, sodass es durch entsprechende HTTP-Header usw. gesteuert werden muss. In der Vergangenheit haben veraltete Proxy-Cache-Implementierungen – wie Implementierungen, die den HTTP-Caching-Standard nicht richtig verstehen – jedoch oft Probleme für Entwickler verursacht.

**Kitchen-sink headers** wie die folgenden werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikationen wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, als HTTPS gebräuchlicher wurde und die Kommunikation zwischen Client und Server verschlüsselt ist, können Proxy-Caches auf dem Weg in vielen Fällen nur noch eine Antwort tunneln und nicht mehr als Cache fungieren. In solchen Fällen muss man sich keine Sorgen über veraltete Proxy-Cache-Implementierungen machen, die die Antwort nicht einmal sehen können.

Auf der anderen Seite, wenn ein {{Glossary("TLS", "TLS")}} Bridge Proxy alle Kommunikationen in Art eines Man-in-the-Middle durch das Installieren eines Zertifikats einer von der Organisation verwalteten {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} auf dem PC entschlüsselt und Zugangskontrollen usw. durchführt – ist es möglich, den Inhalt der Antwort zu sehen und ihn zwischenzuspeichern. Aufgrund der Verbreitung von [CT (Zertifikattransparenz)](/de/docs/Web/Security/Certificate_Transparency) in den letzten Jahren und da einige Browser nur von einem SCT (signierte Zertifikatszeitstempel) ausgestellte Zertifikate erlauben, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung muss man sich keine Sorgen um den Proxy-Cache machen, der "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden ausdrücklich von Dienstentwicklern eingerichtet, um den Ursprungsserver zu entlasten und Inhalte effizient zu liefern. Beispiele sind Reverse-Proxy-Caches, CDNs und Service-Worker in Kombination mit der Cache-API.

Die Eigenschaften von verwalteten Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches über den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keinen Weg, um einen Cache explizit zu löschen – aber bei einem verwalteten Cache kann die gespeicherte Antwort jederzeit über Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Dadurch wird eine proaktivere Caching-Strategie möglich.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten expliziter Manipulation zu ignorieren. Beispielsweise kann Folgendes angegeben werden, um auf einen privaten Cache oder Proxy-Cache zu verzichten, während Sie Ihre eigene Strategie verwenden, um nur in einem verwalteten Cache zu speichern.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache VCL (Varnish Configuration Language, eine Art von {{Glossary("DSL/Domain_specific_language", "DSL")}}), um Cache-Speicher zu verwalten, während Service-Worker in Kombination mit der Cache-API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Wenn ein verwalteter Cache absichtlich eine `no-store`-Direktive ignoriert, muss dies nicht als "nicht konform" mit dem Standard wahrgenommen werden. Was Sie tun sollten, ist, keine Kitchen-sink headers zu verwenden, sondern die Dokumentation des verwalteten Cache-Mechanismus, den Sie verwenden, sorgfältig zu lesen und sicherzustellen, dass Sie den Cache auf die vorgesehenen Arten steuern.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (z. B. `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines geteilten (Proxy-)Caches, eines Reverse-Proxy-Caches und eines geteilten (verwalteten) Caches in einem CDN, das zum Cache des Ursprungsservers führt](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist so ausgelegt, dass es möglichst viel cachet, sodass auch wenn kein `Cache-Control` angegeben ist, Antworten gespeichert und wiederverwendet werden, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

Zum Beispiel betrachten wir die folgende Antwort. Diese Antwort wurde zuletzt vor 1 Jahr aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die ein volles Jahr lang nicht aktualisiert wurden, in dieser Zeit danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des fehlenden `max-age`) und verwendet sie eine Weile lang. Wie lange die Wiederverwendung erfolgt, liegt im Ermessen der Implementierung, aber die Spezifikation empfiehlt etwa 10 % (in diesem Fall 0,1 Jahr) der Zeit nach der Speicherung.

Heuristisches Caching ist eine Umgehungslösung, die vor der weit verbreiteten Unterstützung von `Cache-Control` existierte und im Grunde alle Antworten sollten explizit einen `Cache-Control`-Header spezifizieren.

## Frisch und veraltet basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **veraltet**. Der _frische_ Zustand bedeutet normalerweise, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _veraltete_ Zustand bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch ist und wann sie veraltet ist, ist **das Alter**. Im HTTP ist das Alter die Zeit seit der Generierung der Antwort. Das ist ähnlich wie das {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

Betrachten wir das folgende Beispiel einer Antwort (604800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort gespeichert hat, berechnet die Zeit seit der Generierung der Antwort und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche ist, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche ist, ist die Antwort _veraltet_.

Solange die gespeicherte Antwort frisch bleibt, wird sie zur Erfüllung von Client-Anfragen verwendet.

Wenn eine Antwort in einem geteilten Cache gespeichert ist, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Im weiteren Verlauf des Beispiels, wenn der geteilte Cache die Antwort einen Tag lang gespeichert hat, würde der geteilte Cache die folgende Antwort an nachfolgende Client-Anfragen senden.

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

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden frisch ist, die Differenz zwischen dem `max-age` der Antwort und dem `Age`.

## Expires oder max-age

Im HTTP/1.0 wurde die Frische durch den `Expires`-Header spezifiziert.

Der `Expires`-Header gibt die Lebensdauer des Caches durch eine explizite Zeit an, anstatt durch die Angabe einer abgelaufenen Zeit.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Allerdings ist das Zeitformat schwierig zu parsen, viele Implementierungsfehler wurden gefunden und es ist möglich, Probleme durch absichtliches Verschieben der Systemuhr herbeizuführen; daher wurde `max-age` – zur Spezifizierung einer abgelaufenen Zeit – für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, wird `max-age` bevorzugt. Daher ist es jetzt, da HTTP/1.1 weit verbreitet ist, nicht notwendig, `Expires` bereitzustellen.

## Vary

Der Weg, auf dem Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Response body            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber die Inhalte von Antworten sind nicht immer gleich, auch wenn sie dieselbe URL haben. Besonders wenn Inhaltsverhandlungen durchgeführt werden, kann die Antwort vom Server von den Werten der Request-Header `Accept`, `Accept-Language` und `Accept-Encoding` abhängen.

Zum Beispiel, wenn für englische Inhalte eine Antwort mit einem `Accept-Language: en`-Header zurückgegeben und zwischengespeichert wird, ist es unerwünscht, diese zwischengespeicherte Antwort dann für Anfragen zu verwenden, die einen Request-Header `Accept-Language: ja` haben. In diesem Fall können Sie die Antworten basierend auf der Sprache getrennt zwischenzuspeichern, indem Sie `Accept-Language` zum Wert des `Vary`-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das verursacht, dass der Cache basierend auf einer Zusammensetzung der Antwort-URL und des Request-Headers `Accept-Language` vereinfacht wird – anstatt nur auf der Antwort-URL basierend zu sein.

| URL                              | `Accept-Language` | Response body            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Wenn Sie außerdem eine Inhaltsoptimierung (z.B. für responsives Design) basierend auf dem User-Agent bereitstellen, können Sie versucht sein, `User-Agent` in den Wert des `Vary`-Headers einzubeziehen. Der Request-Header `User-Agent` hat jedoch allgemein eine sehr große Anzahl von Varianten, was die Wahrscheinlichkeit, dass der Cache wiederverwendet wird, drastisch reduziert. Wenn möglich, versuchen Sie stattdessen, das Verhalten basierend auf Feature-Erkennung anstatt basierend auf dem Request-Header `User-Agent` zu ändern.

Bei Anwendungen, die Cookies verwenden, um zu verhindern, dass andere zwischengespeicherte personalisierte Inhalte wiederverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` zu spezifizieren.

## Validierung

Veraltete Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um eine veraltete Antwort in eine frische zu verwandeln, indem der Ursprungsserver befragt wird. Dies wird als **Validierung** oder manchmal **Revalidierung** bezeichnet.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die den Request-Header `If-Modified-Since` oder `If-None-Match` beinhaltet.

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

Um 23:22:22 wird die Antwort veraltet und der Cache kann nicht mehr wiederverwendet werden. Die folgende Anfrage zeigt, wie ein Client eine Anfrage mit einem Request-Header `If-Modified-Since` sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn der Inhalt seit der angegebenen Zeit nicht geändert wurde.

Da diese Antwort nur "keine Änderung" bedeutet, gibt es keinen Antwortbody – nur einen Statuscode – sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Beim Empfang dieser Antwort stellt der Client die gespeicherte veraltete Antwort wieder auf frisch und kann sie für die verbleibende Stunde wiederverwenden.

Der Server kann die Änderungszeit aus dem Dateisystem des Betriebssystems erhalten, was relativ einfach zu tun ist, wenn statische Dateien bereitgestellt werden. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Dateizeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Response-Header als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Response-Headers ist ein beliebiger Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, sodass die Server frei sind, den Wert basierend auf beliebigen Mitteln festzulegen - zum Beispiel einem Hash des Inhalts oder einer Versionsnummer.

Wenn zum Beispiel ein Hash-Wert für den `ETag`-Header verwendet wird und der Hash-Wert der Ressource `index.html` `33a64df5` beträgt, wird die Antwort wie folgt aussehen:

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

Wenn diese Antwort veraltet ist, nimmt der Client den Wert des `ETag`-Response-Headers für die zwischengespeicherte Antwort und setzt ihn in den Request-Header `If-None-Match`, um den Server zu fragen, ob die Ressource modifiziert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server gibt `304 Not Modified` zurück, wenn der vom Server bestimmte Wert des `ETag`-Headers der angeforderten Ressource mit dem `If-None-Match`-Wert der Anfrage übereinstimmt.

Wenn der Server jedoch bestimmt, dass die angeforderte Ressource jetzt einen anderen Wert für den `ETag`-Header haben sollte, antwortet der Server stattdessen mit einem `200 OK` und der neuesten Version der Ressource.

> [!NOTE]
> RFC9110 bevorzugt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Während Cache-Revalidierung hat `If-None-Match` Vorrang vor `If-Modified-Since` für den Validator, wenn beide gleichzeitig vorhanden sind.
> Wenn Sie nur an Caching denken, könnten Sie glauben, dass `Last-Modified` unnötig ist.
> `Last-Modified` ist jedoch nicht nur für Caching nützlich, sondern auch ein Standard-HTTP-Header, der von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderung anzuzeigen, von Suchrobotern, um die Häufigkeit der Abfragen anzupassen, und für viele andere Zwecke.
> In Anbetracht des gesamten HTTP-Ökosystems ist es also besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Revalidierung erzwingen

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern immer die neuesten Inhalte vom Server abrufen möchten, können Sie die `no-cache`-Direktive verwenden, um die Validierung zu erzwingen.

Indem `Cache-Control: no-cache` zusammen mit `Last-Modified` und `ETag` zur Antwort hinzugefügt wird – wie unten gezeigt – erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder erhält ansonsten eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

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

Es wird oft gesagt, dass die Kombination von `max-age=0` und `must-revalidate` dasselbe bedeutet wie `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort veraltet ist, und `must-revalidate` bedeutet, dass sie nicht ohne Revalidierung wiederverwendet werden darf, sobald sie veraltet ist – in Kombination scheinen die Bedeutungen also dieselben zu sein wie `no-cache`.

Allerdings ist diese Verwendung von `max-age=0` ein Relikt aus der Zeit, bevor viele Implementierungen, die vor HTTP/1.1 existierten, die `no-cache`-Direktive nicht verstehen konnten – und so wurde zur Bewältigung dieser Einschränkung `max-age=0` als Umgehungslösung verwendet.

Da jetzt HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund mehr, diese Kombination aus `max-age=0` und `must-revalidate` zu verwenden – Sie sollten stattdessen einfach `no-cache` verwenden.

## Nicht cachen

Die `no-cache`-Direktive verhindert nicht das Speichern von Antworten, sondern verhindert lediglich die Wiederverwendung der Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in einem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen bedeutet eine Anforderung "nicht zu cachen" in der Praxis Folgendes:

- Es soll keine Antwort außer durch den spezifischen Client gespeichert werden, aus Datenschutzgründen.
- Es wird erwartet, dass immer aktuelle Informationen bereitgestellt werden.
- Es ist ungewiss, was bei veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die am besten geeignete Direktive.

Die folgenden Abschnitte beleuchten die Umstände im Detail.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisiertem Inhalt unerwartet für andere Benutzer eines Caches sichtbar wäre.

In einem solchen Fall verursacht die Verwendung der `private`-Direktive, dass die personalisierte Antwort nur mit dem spezifischen Client gespeichert wird und nicht auf andere Benutzer des Caches durchschlagen kann.

```http
Cache-Control: private
```

Selbst wenn `no-store` gegeben ist, muss in einem solchen Fall auch `private` angegeben werden.

### Immer aktuelle Inhalte bereitstellen

Die Direktive `no-store` verhindert, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für dieselbe URL.

Anders gesagt: Wenn bereits eine alte Antwort für eine bestimmte URL gespeichert ist, verhindert die Rückgabe von `no-store` nicht, dass die alte Antwort erneut verwendet wird.

Eine Direktive `no-cache` zwingt jedoch den Client, vor der Wiederverwendung einer zwischengespeicherten Antwort eine Validierungsanfrage zu senden.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client zwingen, jedes Mal auf den Server zuzugreifen und durchgehend die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Umgehungslösung für veraltete Implementierungen, die `no-store` ignorieren, sehen Sie möglicherweise "Kitchen-sink headers" wie die folgenden:

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative für den Umgang mit solchen veralteten Implementierungen zu verwenden. Es ist auch kein Problem, wenn `no-cache` von Anfang an gegeben wird, da der Server die Anfrage immer erhält.

Wenn Sie sich Sorgen um den geteilten Cache machen, können Sie durch das Hinzufügen von `private` sicherstellen, dass das unbeabsichtigte Caching verhindert wird:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Sie könnten denken, dass die Nutzung von `no-store` der richtige Weg ist, um sich vom Caching abzumelden.

Es wird jedoch nicht empfohlen, `no-store` freizügig zu vergeben, da Sie viele Vorteile verlieren, die HTTP und Browser bieten, einschließlich des Vor-/Zurück-Caches des Browsers.

Um also die Vorteile des kompletten Funktionsumfangs der Web-Plattform zu nutzen, ziehen Sie die Nutzung von `no-cache` in Kombination mit `private` vor.

## Neu laden und erzwungen neu laden

Die Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Die **Neuladen**- und **erzwungenen Neuladen**-Aktionen sind gängige Beispiele für von der Browserseite durchgeführte Validierungen.

### Neuladen

Um von einer Fensterbeschädigung zu genesen oder auf die neueste Version der Ressource zu aktualisieren, bieten Browser eine Neuladefunktion für Benutzer an.

Ein vereinfachter Überblick über die HTTP-Anfrage, die bei einer Browser-Neuladung gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen dieser sehr ähnlich; die Anfragen von Safari sind etwas anders.)

Die Direktive `max-age=0` in der Anfrage spezifiziert die "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" – sodass effektiv zwischengespeicherte Antworten nicht erneut verwendet werden.

Infolgedessen wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript durch Aufruf von `fetch()` mit auf `no-cache` gesetztem Cache-Modus reproduziert werden (beachten Sie, dass `reload` nicht der richtige Modus für diesen Fall ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neuladen

Browser verwenden `max-age=0` während des Neuladens aus Gründen der Abwärtskompatibilität – weil viele alte Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden. `no-cache` ist jedoch jetzt in diesem Anwendungsfall unproblematisch, und **erzwungenes Neuladen** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage bei einem Browser-**erzwungenen Neuladen** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen dieser sehr ähnlich; die Anfragen von Safari sind etwas anders.)

Da dies keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie ein `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript durch Aufruf von `fetch()` mit auf `reload` gesetztem Cache-Modus reproduziert werden (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung der Revalidierung

Inhalte, die sich nie ändern, sollten durch Cache-Busting eine lange `max-age` erhalten – das bedeutet, durch das Einfügen einer Versionsnummer, eines Hash-Werts usw. in die Anfrage-URL.

Wenn der Benutzer jedoch neulädt, wird eine Revalidierungsanfrage gesendet, obwohl der Server weiß, dass die Inhalte unveränderlich sind.

Um dies zu verhindern, kann die Direktive `immutable` verwendet werden, um explizit anzugeben, dass keine Revalidierung erforderlich ist, weil sich die Inhalte nie ändern.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Revalidierungen während der Neuladevorgänge.

Beachten Sie, dass anstelle der Implementierung dieser Direktive [Chrome seine Implementierung geändert](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html) hat, sodass keine Revalidierung während der Neuladevorgänge für Unterressourcen durchgeführt wird.

## Löschen von gespeicherten Antworten

Es gibt keine Möglichkeit, Antworten auf einem Zwischenserver zu löschen, die mit einer langen `max-age` gespeichert wurden.

Stellen Sie sich vor, die folgende Antwort von `https://example.com/` wurde gespeichert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Möglicherweise möchten Sie diese Antwort überschreiben, sobald sie auf dem Server abläuft, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert ist – da aufgrund des Cachings keine weiteren Anfragen den Server erreichen.

Eine der in der Spezifikation genannten Methoden besteht darin, eine Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST` zu senden, aber für viele Clients ist dies schwierig zu tun.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Header und der Direktivwert können verwendet werden, um Browser-Caches zu löschen – haben jedoch keine Auswirkungen auf Zwischen-Caches. Andernfalls bleiben Antworten im Browser-Cache, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell eine Neuladung, ein erzwungenes Neuladen oder eine Verlaufslöschaktion durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server die Kontrolle über eine URL nicht verlieren möchte – zum Beispiel im Fall, dass eine Ressource häufig aktualisiert wird – sollten Sie `no-cache` hinzufügen, sodass der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Request Collapse

Der geteilte Cache befindet sich in erster Linie vor dem Ursprungsserver und soll den Traffic zum Ursprungsserver reduzieren.

Wenn also mehrere identische Anfragen gleichzeitig an einen geteilten Cache gelangen, wird der Zwischencache im Namen des Ursprungs eine einzelne Anfrage weiterleiten, die das Ergebnis für alle Clients erneut verwenden kann. Das wird als **_Request Collapse_** bezeichnet.

Request Collapse tritt auf, wenn Anfragen gleichzeitig eingehen, sodass sie selbst bei gegebener `max-age=0` oder `no-cache`-Direktive wiederverwendet werden.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie im Collapse geteilt wird, sollten Sie die `private`-Direktive hinzufügen:

![Request Collapse dargestellt durch mehrere Clients, die GET-Anfragen senden und einen Cache, der sie zu einer einzigen GET-Anfrage zum Ursprungsserver konsolidiert. Der Ursprungsserver antwortet mit einem 200 OK, das der Cache an alle Clients zurückgibt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Gängige Caching-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites können durch eine Kombination von wenigen Mustern abgedeckt werden.

Dieser Abschnitt beschreibt die gängigen Muster beim Entwurf von Caches.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten beim Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern ein implizites Caching, gemäß dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten explizit einen Standard-`Cache-Control`-Header zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, wird häufig als Standard-`Cache-Control`-Wert `no-cache` verwendet:

```http
Cache-Control: no-cache
```

Zusätzlich, wenn der Dienst Cookies oder andere Login-Methoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss auch `private` gegeben werden, um das Teilen mit anderen Benutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache Busting

Die Ressourcen, die am besten mit Caching zusammenarbeiten, sind statische unveränderliche Dateien, deren Inhalte sich nie ändern. Für Ressourcen, die _sich_ ändern, ist es eine gängige Best Practice, die URL bei jeder Änderung des Inhalts zu ändern, sodass die URL-Einheit für einen längeren Zeitraum zwischengespeichert werden kann.

Betrachten Sie das folgende HTML als Beispiel:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung voranschreitet. Außerdem: wenn die Versionen der JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind, wird die Anzeige fehlerhaft.

Das obige HTML macht es daher schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Sie können also die JavaScript- und CSS-Ressourcen mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hash-Wert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten dargestellt.

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

Da der Cache Ressourcen basierend auf ihren URLs unterscheidet, wird der Cache nicht mehr wiederverwendet, wenn die URL geändert wird, wenn eine Ressource aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für eine lange Zeit zwischengespeichert werden. Wie lange sollte `max-age` eingestellt werden? Die QPACK-Spezifikation bietet eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Kompression von HTTP-Header-Feldern mit Tabellen von häufig verwendeten Feldwerten.

Einige häufig verwendete Cache-Header-Werte sind unten dargestellt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen wählen, können Sie Werte in einem Byte komprimieren, wenn sie über HTTP3 übertragen werden.

Die Nummern `37`, `38` und `41` stehen für Zeiträume von einer Woche, einem Monat und einem Jahr.

Weil der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch vorhanden ist, nicht so hoch – selbst wenn `max-age` auf eine Woche eingestellt ist. Daher macht es in der Praxis keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass Nummer `41` die längste `max-age` hat (1 Jahr), aber mit `public`.

Der `public`-Wert hat den Effekt, dass die Antwort auch dann gespeichert wird, wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Direktive sollte nur verwendet werden, wenn es notwendig ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Sie ist sonst nicht erforderlich, weil eine Antwort im geteilten Cache gespeichert wird, solange ist `max-age` gegeben.

Wenn die Antwort mit der grundlegenden Authentifizierung personalisiert wird, kann die Anwesenheit von `public` Probleme verursachen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert `38` (1 Monat) wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die Header `Last-Modified` und `ETag` festzulegen, damit Sie eine Ressource beim Neuladen nicht erneut übertragen müssen. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag`-Wert hier kann ein Hash der Datei sein.

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

**Cache Busting** ist eine Technik, um eine Antwort über einen längeren Zeitraum zwischenspeicherbar zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Diese Technik kann für alle Unterressourcen wie Bilder angewendet werden.

> [!NOTE]
> Bei der Evaluierung der Nutzung von `immutable` und QPACK:
> Wenn Sie befürchten, dass `immutable` den vordefinierten Wert von QPACK ändert, bedenken Sie, dass
> in diesem Fall der `immutable`-Teil separat kodiert werden kann, indem der `Cache-Control`-Wert in zwei Zeilen aufgeteilt wird – obwohl dies von dem Kodierungsalgorithmus abhängt, den eine bestimmte QPACK-Implementierung verwendet.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Unterressourcen können Hauptressourcen nicht durch Cache Busting zwischengespeichert werden, da ihre URLs nicht auf die gleiche Weise dekoriert werden können wie die URLs von Unterressourcen.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn sich der Inhalt auf dem Server aktualisiert.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

In diesem Fall wäre `no-cache` angebrachter als `no-store`, da wir HTML nicht speichern wollen, sondern nur wollen, dass es immer auf dem neuesten Stand ist.

Zusätzlich wird das Hinzufügen von `Last-Modified` und `ETag` es den Clients erlauben, bedingte Anfragen zu senden, und ein `304 Not Modified` kann zurückgegeben werden, wenn es keine Aktualisierungen im HTML gab:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Diese Einstellung ist für nicht-personalisierte HTML-Inhalte geeignet, aber für eine Antwort, die durch Cookies personalisiert wird – zum Beispiel nach einem Login – vergessen Sie nicht, auch `private` zu spezifizieren:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Das Gleiche kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht durch Cache Busting geändert werden können.

Die meisten Web-Inhalte können durch eine Kombination der oben beschriebenen zwei Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der in den vorherigen Abschnitten beschriebenen Methode können Unterressourcen durch Cache Busting lange zwischengespeichert werden, aber Hauptressourcen (die normalerweise HTML-Dokumente sind) können das nicht.

Das Cachen von Hauptressourcen ist schwierig, weil es mit den Standardrichtlinien der HTTP-Caching-Spezifikation nicht möglich ist, Cache-Inhalte aktiv zu löschen, wenn Inhalte auf dem Server aktualisiert werden.

Es ist jedoch möglich, indem ein verwalteter Cache wie ein CDN oder ein Service Worker bereitgestellt wird.

Zum Beispiel würde ein CDN, das das Leeren von Caches über eine API oder eine Dashboard-Operation ermöglicht, eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der relevante Cache bei einer Aktualisierung auf dem Server explizit geleert wird.

Ein Service Worker könnte das Gleiche tun, wenn er die Inhalte in der Cache-API löschen könnte, wenn eine Aktualisierung auf dem Server erfolgt.

Für weitere Informationen siehe die Dokumentation Ihres CDN und konsultieren Sie die [Service Worker Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
