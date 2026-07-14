---
title: HTTP-Caching
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: f4393b25c74ce73882236df6807ba8d97255269e
---

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verknüpft ist, und verwendet diese gespeicherte Antwort für nachfolgende Anfragen erneut.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Erstens, da es nicht notwendig ist, die Anfrage an den Ursprungsserver zu senden, ist die Antwort umso schneller, je näher der Client und der Cache beieinanderliegen. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Außerdem muss der Ursprungsserver die Anfrage nicht verarbeiten, wenn eine Antwort wiederverwendbar ist — er muss die Anfrage nicht parsen und leiten, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Last auf dem Server.

Ein ordnungsgemäßer Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP-Caching](https://httpwg.org/specs/rfc9111.html)-Spezifikation gibt es zwei Hauptarten von Caches: **private Caches** und **geteilte Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der mit einem bestimmten Client verbunden ist — typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen als einem privaten Cache gespeichert werden, könnten andere Benutzer in der Lage sein, diese Inhalte abzurufen — was zu einer unbeabsichtigten Informationsweitergabe führen könnte.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie die `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden in der Regel von Cookies gesteuert, aber die Anwesenheit eines Cookies weist nicht immer darauf hin, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Geteilter Cache

Der geteilte Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die zwischen Benutzern geteilt werden können. Geteilte Caches können weiter unterteilt werden in **Proxy-Caches** und **verwaltete Caches**.

#### Proxy-Caches

Zusätzlich zur Funktion der Zugriffskontrolle implementieren einige Proxys Caching, um den Verkehr aus dem Netzwerk zu reduzieren. Dies wird in der Regel nicht vom Dienstentwickler verwaltet, daher muss es durch geeignete HTTP-Header kontrolliert werden. In der Vergangenheit haben veraltete Proxy-Cache-Implementierungen — wie solche, die den Standard für HTTP-Caching nicht richtig verstehen — häufig Probleme für Entwickler verursacht.

**"Full-Stack"-Header wie der folgende werden verwendet, um die "alten und nicht aktualisierten Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikationsdirektiven wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren ist jedoch HTTPS gebräuchlicher geworden und die Kommunikation zwischen Client und Server wird verschlüsselt. Proxy-Caches im Pfad können nur eine Antwort tunneln und nicht als Cache fungieren. So gibt es in diesem Szenario keinen Grund, sich um veraltete Proxy-Cache-Implementierungen zu sorgen, die nicht einmal die Antwort sehen können.

Andererseits, wenn ein {{Glossary("TLS", "TLS")}} Bridge-Proxy alle Kommunikationen in einer Man-in-the-Middle-Weise entschlüsselt, indem er ein Zertifikat von einer {{Glossary("Certificate_authority", "CA (Zertifizierungsstelle)")}} verwaltet durch die Organisation auf dem PC installiert, und Zugriffskontrolle durchführt, ist es möglich, den Inhalt der Antwort zu sehen und zu cachen. Da jedoch [CT (Zertifikattransparenz)](/de/docs/Web/Security/Defenses/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate zulassen, die mit einem SCT (signierter Zertifikats-Timestamp) ausgestellt wurden, erfordert diese Methode die Anwendung einer Unternehmenspolitik. In einer derartigen kontrollierten Umgebung gibt es keinen Grund zur Sorge, dass der Proxy-Cache "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden ausdrücklich von Dienstentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient zu liefern. Beispiele sind Reverse Proxies, CDNs und Service Worker in Kombination mit der Cache API.

Die Eigenschaften von verwalteten Caches variieren je nach dem bereitgestellten Produkt. In den meisten Fällen können Sie das Verhalten des Caches über den [`Cache-Control`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation grundsätzlich keinen Weg, um einen Cache ausdrücklich zu löschen — aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts und so weiter gelöscht werden. Das erlaubt eine proaktivere Caching-Strategie.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten einer expliziten Manipulation zu ignorieren. Zum Beispiel kann Folgendes spezifiziert werden, um auf einen privaten Cache oder Proxy-Cache zu verzichten, während nur in einem verwalteten Cache nach einer eigenen Strategie zwischengespeichert wird.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache VCL (Varnish Configuration Language, eine Art {{Glossary("DSL/Domain_specific_language", "DSL")}})-Logik, um die Cache-Speicherung zu handhaben, während Service Worker in Kombination mit der Cache API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, wenn ein verwalteter Cache eine [`no-store`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#no-store)-Direktive absichtlich ignoriert, muss es nicht als "nicht konform" mit dem Standard angesehen werden. Was Sie tun sollten, ist, keine "Full-Stack"-Header zu verwenden, sondern die Dokumentation des verwendeten verwalteten Cache-Mechanismus sorgfältig zu lesen und sicherzustellen, dass Sie den Cache auf die vom ausgewählten Mechanismus vorgesehenen Arten ordnungsgemäß steuern.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN gelten (z.B. `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines geteilten (Proxy-)Caches, eines Reverse-Proxy-Caches und eines geteilten (verwalteten) Caches in einem CDN, die zum Cache des Ursprungsservers führen.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist so konzipiert, dass es so viel wie möglich zwischenspeichert, sodass selbst wenn kein `Cache-Control` angegeben ist, Antworten gespeichert und wiederverwendet werden, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

Zum Beispiel nehmen Sie die folgende Antwort. Diese Antwort wurde vor einem Jahr zuletzt aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die seit einem ganzen Jahr nicht aktualisiert wurden, möglicherweise längere Zeit nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des Fehlens von `max-age`) und verwendet sie eine Weile erneut. Wie lange eine Antwort wiederverwendet wird, liegt im Ermessen der Implementierung, aber die Spezifikation empfiehlt etwa 10% (in diesem Fall 0,1 Jahr) der Zeit nach dem Speichern.

Heuristisches Caching ist ein Workaround, der vor der breiten Einführung der `Cache-Control`-Unterstützung entwickelt wurde, und grundsätzlich sollten alle Antworten ausdrücklich einen `Cache-Control`-Header angeben.

## Frisch und abgestanden basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **abgestanden**. Der _frische_ Zustand zeigt in der Regel an, dass die Antwort noch gültig und wiederverwendbar ist, während der _abgestandene_ Zustand bedeutet, dass die zwischengespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgestanden ist, ist das **Alter**. In HTTP ist das Alter die seit der Antworterzeugung verstrichene Zeit. Dies ist ähnlich dem {{Glossary("TTL", "TTL")}} in anderen Cache-Mechanismen.

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

Der Cache, der die Beispielantwort gespeichert hat, berechnet die seit der Erzeugung der Antwort verstrichene Zeit und nutzt das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _abgestanden_.

Solange die gespeicherte Antwort frisch bleibt, wird sie verwendet, um Client-Anfragen zu erfüllen.

Wenn eine Antwort in einem geteilten Cache gespeichert ist, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Im fortgeführten Beispiel würde der geteilte Cache, wenn er die Antwort einen Tag lang gespeichert hatte, die folgende Antwort an nachfolgende Client-Anfragen senden.

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

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden frisch bleibt, was der Unterschied zwischen dem `max-age` der Antwort und dem `Age` ist.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header angegeben.

Der `Expires`-Header gibt die Lebensdauer des Caches mit einer expliziten Zeit anstatt mit einer verstrichenen Zeit an.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Jedoch war das Zeitformat schwer zu parsen, es wurden viele Implementierungsfehler gefunden, und es ist möglich, Probleme durch absichtliches Verschieben der Systemuhr zu verursachen; daher wurde in HTTP/1.1 `max-age` für die Angabe einer verstrichenen Zeit im `Cache-Control`-Header übernommen.

Wenn sowohl [`Expires`](/de/docs/Web/HTTP/Reference/Headers/Expires) als auch [`Cache-Control: max-age`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#max-age) verfügbar sind, wird `max-age` bevorzugt. Daher ist es nicht mehr notwendig, `Expires` anzugeben, da HTTP/1.1 weit verbreitet ist.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortkörper            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber der Inhalt von Antworten ist nicht immer derselbe, selbst wenn sie die gleiche URL haben. Besonders wenn eine Inhaltsverhandlung stattfindet, kann die Antwort des Servers von den Werten der `Accept`, `Accept-Language` und `Accept-Encoding`-Anforderungsheader abhängen.

Zum Beispiel ist es unerwünscht, eine zwischengespeicherte Antwort für Anfragen, die den Anforderungsheader `Accept-Language: ja` haben zu verwenden, nachdem englische Inhalte mit einem [`Accept-Language: en`](/de/docs/Web/HTTP/Reference/Headers/Accept-Language)-Header zurückgegeben und zwischengespeichert wurden. In diesem Fall können Sie die Antworten basierend auf der Sprache getrennt zwischenspeichern lassen, indem Sie `Accept-Language` zum Wert des [`Vary`](/de/docs/Web/HTTP/Reference/Headers/Vary)-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das bewirkt, dass der Cache basierend auf einer Kombination aus der Antwort-URL und dem `Accept-Language`-Anforderungsheader erstellt wird — statt nur basierend auf der Antwort-URL.

| URL                              | `Accept-Language` | Antwortkörper            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Auch wenn Sie eine Inhaltsoptimierung (z.B. für responsives Design) basierend auf dem Benutzeragenten bereitstellen, könnten Sie versucht sein, `User-Agent` in den Wert des `Vary`-Headers einzubeziehen. Der `User-Agent`-Anforderungsheader hat jedoch in der Regel eine sehr große Anzahl von Variationen, was die Wahrscheinlichkeit drastisch reduziert, dass der Cache wiederverwendet wird. Daher sollten Sie, wenn möglich, stattdessen eine Möglichkeit finden, das Verhalten basierend auf der Funktionsdetektion zu variieren anstatt basierend auf dem `User-Agent`-Anforderungsheader.

Für Anwendungen, die Cookies verwenden, um zu verhindern, dass Andere zwischengespeicherte personalisierte Inhalte wiederverwenden, sollten Sie [`Cache-Control: private`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#private) statt eines Cookies für `Vary` angeben.

## Validierung

Abgestandene Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, eine abgestandene Antwort durch Anfrage beim Ursprungsserver in eine frische Antwort zu verwandeln. Dies wird als **Validierung** oder manchmal als **Revalidierung** bezeichnet.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die einen [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since) oder [`If-None-Match`](/de/docs/Web/HTTP/Reference/Headers/If-None-Match)-Anforderungsheader enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 erstellt und hat eine `max-age` von 1 Stunde, sodass Sie wissen, dass sie bis 23:22:22 frisch ist.

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

Um 23:22:22 wird die Antwort abgestanden und der Cache kann nicht mehr verwendet werden. So zeigt die folgende Anfrage, dass ein Client eine Anfrage mit einem `If-Modified-Since`-Anforderungsheader sendet, um den Server zu fragen, ob es seit der angegebenen Zeit Änderungen gab.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server wird mit `304 Not Modified` antworten, wenn sich der Inhalt seit der angegebenen Zeit nicht geändert hat.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortkörper — es gibt nur einen Statuscode — also ist die Übertragungsgröße extrem klein.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Nachdem der Client diese Antwort empfängt, wird die gespeicherte abgestandene Antwort wieder als frisch betrachtet und kann während der verbleibenden 1 Stunde wiederverwendet werden.

Der Server kann die Änderungszeit vom Betriebssystem-Dateisystem beziehen, was relativ einfach ist, wenn statische Dateien bedient werden. Es gibt jedoch einige Probleme, zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Dateizeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der [`ETag`](/de/docs/Web/HTTP/Reference/Headers/ETag)-Antwortheader als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Antwortheaders ist ein willkürlicher Wert, der vom Server generiert wird. Es gibt keine Beschränkungen dafür, wie der Server den Wert generieren muss, sodass Server frei sind, den Wert basierend auf welchen Mitteln auch immer sie wählen — wie z.B. ein Hash des Antwortinhalts oder eine Versionsnummer.

Als Beispiel, wenn ein Hash-Wert für den `ETag`-Header verwendet wird und der Hash-Wert der `index.html`-Ressource `33a64df5` ist, wird die Antwort wie folgt aussehen:

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

Wenn diese Antwort abgestanden ist, nimmt der Client den Wert des `ETag`-Antwortheaders für die zwischengespeicherte Antwort und fügt ihn in den `If-None-Match`-Anforderungsheader ein, um den Server zu fragen, ob die Ressource verändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der von ihm bestimmte `ETag`-Wert der angeforderten Ressource derselbe wie der `If-None-Match`-Wert in der Anfrage ist.

Wenn der Server jedoch bestimmt, dass die angeforderte Ressource jetzt einen anderen `ETag`-Wert haben sollte, wird der Server stattdessen mit einem `200 OK` und der neuesten Version der Ressource antworten.

> [!NOTE]
> RFC9110 bevorzugt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, hat `If-None-Match` Vorrang als Validator.
> Wenn Sie nur das Zwischenspeichern betrachten, könnten Sie denken, dass `Last-Modified` unnötig ist.
> Jedoch ist `Last-Modified` nicht nur hilfreich für das Zwischenspeichern; es ist ein standardmäßiger HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Crawlsystemen, um die Häufigkeit von Crawls anzupassen, und für andere verschiedene Zwecke.
> Daher ist es unter Berücksichtigung des gesamten HTTP-Ökosystems besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwungene Revalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird und stattdessen immer die neuesten Inhalte vom Server abrufen möchten, können Sie die `no-cache`-Direktive verwenden, um eine Validierung zu erzwingen.

Indem Sie der Antwort [`Cache-Control: no-cache`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control#no-cache) zusammen mit [`Last-Modified`](/de/docs/Web/HTTP/Reference/Headers/Last-Modified) und `ETag` hinzufügen — wie unten gezeigt — wird der Client eine `200 OK`-Antwort erhalten, wenn die angeforderte Ressource aktualisiert wurde, oder alternativ eine `304 Not Modified`-Antwort erhalten, wenn die angeforderte Ressource nicht aktualisiert wurde.

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
> Die `no-cache`-Direktive (oder gleichwertige, wie `max-age=0, must-revalidate`) gewährleistet keine Revalidierung für historische Navigationen — wie sie mit der <kbd>Zurück</kbd>-Taste durchgeführt werden.
> Wird der Rückwärts-/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet, stellt der Browser einen Schnappschuss der Seite wieder her, ohne ihn zu revalidieren.
> Selbst wenn bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort ohne Revalidierung bereitstellen.
> Dies ist [laut der Spezifikation zulässig](https://httpwg.org/specs/rfc7234.html#history.lists), weil historische Navigationen in der Regel als Wiederherstellung eines Schnappschusses einer historischen Sitzung und nicht als neue Anfrage für eine zuvor besuchte Seite behandelt werden.

Es wird oft behauptet, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort abgestanden ist, und `must-revalidate` bedeutet, dass sie nicht wiederverwendet werden darf, ohne dass sie nach Ablauf revalidiert wird — daher scheinen die Semantiken in Kombination die gleichen wie bei `no-cache` zu sein.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache`-Direktive zu handhaben — und um mit dieser Einschränkung umzugehen, wurde `max-age=0` als Workaround verwendet.

Da HTTP/1.1-konforme Server jedoch weit verbreitet sind, gibt es keinen Grund mehr, diese Kombination von `max-age=0` und `must-revalidate` zu verwenden — stattdessen sollten Sie einfach `no-cache` verwenden.

## Nicht zwischenspeichern

Die `no-cache`-Direktive verhindert nicht das Speichern von Antworten, sondern verhindert die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in einem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen entspricht jedoch eine "nicht zwischenspeichern"-Anforderung in der Praxis dem folgenden Set von Umständen:

- Möchten nicht, dass die Antwort von jemand anderem als dem spezifischen Client gespeichert wird, aus Datenschutzgründen.
- Möchten immer aktuelle Informationen bereitstellen.
- Wissen nicht, was bei veralteten Implementierungen passieren könnte.

Unter diesem Set von Umständen ist `no-store` nicht immer die am besten geeignete Direktive.

Die folgenden Abschnitte betrachten die Umstände im Detail.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet anderen Benutzern eines Caches sichtbar ist.

In einem solchen Fall wird die Verwendung der `private`-Direktive dazu führen, dass die personalisierte Antwort nur mit dem spezifischen Client gespeichert wird und nicht an andere Benutzer des Caches weitergegeben wird.

```http
Cache-Control: private
```

Selbst wenn `no-store` angegeben ist, muss in einem solchen Fall auch `private` angegeben werden.

### Immer aktuelle Inhalte bereitstellen

Die `no-store`-Direktive verhindert, dass eine Antwort gespeichert wird, löscht jedoch keine bereits für dieselbe URL gespeicherte Antwort.

Mit anderen Worten, wenn eine alte Antwort bereits für eine bestimmte URL gespeichert ist, verhindert `no-store` nicht, dass die alte Antwort wiederverwendet wird.

Eine `no-cache`-Direktive zwingt den Client jedoch, eine Validierungsanfrage zu senden, bevor eine gespeicherte Antwort wiederverwendet wird.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client zwingen, jedes Mal auf den Server zuzugreifen und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, sehen Sie möglicherweise "Full-Stack"-Header, wie die folgenden verwendet.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative für den Umgang mit solchen veralteten Implementierungen zu verwenden, und es ist kein Problem, wenn `no-cache` von Anfang an gegeben wird, da der Server immer die Anfrage erhält.

Wenn Sie sich um den geteilten Cache sorgen, können Sie sicherstellen, dass ein unbeabsichtigtes Zwischenspeichern verhindert wird, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Sie könnten denken, dass die Hinzufügung von `no-store` der richtige Weg wäre, um das Zwischenspeichern abzulehnen.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu gewähren, da Sie viele Vorteile verlieren, die HTTP und Browser bieten, einschließlich des Vorwärts-/Rückwärts-Caches des Browsers.

Daher sollten Sie, um die Vorteile des vollständigen Funktionsumfangs der Webplattform zu nutzen, die Verwendung von `no-cache` in Kombination mit `private` bevorzugen.

## Neu laden und erzwungenes Neu laden

Die Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Die **Neuladen** und **erzwungenes Neuladen** Aktionen sind häufige Beispiele von Validierung, die von der Browserseite durchgeführt werden.

### Neu laden

Um Fensterbeschädigungen zu beheben oder auf die neueste Version der Ressource zu aktualisieren, bieten Browser eine Ladefunktion für Benutzer an.

Eine vereinfachte Ansicht der HTTP-Anfrage, die während eines Browser-Neuladens gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus; die Anfragen von Safari sehen ein wenig anders aus.)

Die `max-age=0`-Direktive in der Anfrage gibt "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" an, sodass zwischengespeicherte Antworten nicht wiederverwendet werden.

Infolgedessen wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript durch Aufrufen von `fetch()` mit dem Cache-Modus `no-cache` reproduziert werden (beachten Sie, dass `reload` nicht der richtige Modus für diesen Fall ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neu laden

Browser verwenden `max-age=0` während des Neuladens aus Gründen der Abwärtskompatibilität, weil viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden haben. `no-cache` ist jedoch jetzt in dieser Anwendungsfall in Ordnung, und **erzwungenes Neu laden** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines **Forced Reload** des Browsers sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus; die Anfragen von Safari sehen ein wenig anders aus.)

Da dies keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie ein `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript durch Aufrufen von `fetch()` mit dem Cache-Modus `reload` reproduziert werden (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung von Revalidierung

Inhalte, die sich niemals ändern, sollten eine lange `max-age` durch Cache Busting erhalten — indem eine Versionsnummer, ein Hashwert usw. in die Anforderungs-URL aufgenommen wird.

Der Benutzer sendet jedoch auch dann eine Revalidierungsanfrage, wenn der Server weiß, dass der Inhalt unveränderlich ist.

Um dies zu verhindern, kann die `immutable`-Direktive verwendet werden, um explizit anzugeben, dass keine Revalidierung erforderlich ist, da sich der Inhalt nie ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Revalidierung während des Neuladens.

Beachten Sie, dass anstatt diese Direktive zu implementieren, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass bei Subressourcen während des Neuladens keine Revalidierung durchgeführt wird.

## Löschen von gespeicherten Antworten

Es gibt keine Möglichkeit, auf einem zwischengeschalteten Server gespeicherte Antworten mit langer `max-age` zu löschen.

Stellen Sie sich vor, dass die folgende Antwort von `https://example.com/` gespeichert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Sie möchten vielleicht jene Antwort überschreiben, sobald sie auf dem Server abgelaufen ist, aber der Server kann nichts mehr tun, sobald die Antwort gespeichert ist — da keine Anfragen mehr den Server aufgrund des Cachings erreichen.

Eine der in der Spezifikation erwähnten Methoden besteht darin, eine Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST` zu senden, was aber für viele Clients schwierig zu tun ist.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Header und der Direktivwert können verwendet werden, um Browser-Caches zu löschen — haben jedoch keinen Effekt auf zwischengeschaltete Caches.
Andernfalls bleiben Antworten im Browser-Cache gespeichert, bis `max-age` abläuft, es sei denn, der Benutzer führt manuell eine Neu-Laden-, Erzwingen-Neuladen-, oder Verlauf-löschen-Aktion durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Möchte der Server die Kontrolle über eine URL nicht verlieren — zum Beispiel im Fall, dass eine Ressource häufig aktualisiert wird — sollten Sie `no-cache` hinzufügen, sodass der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Anfrageneinbruch

Der geteilte Cache befindet sich normalerweise vor dem Ursprungsserver und soll den Datenverkehr zum Ursprungsserver reduzieren.

Daher wird der zwischengeschaltete Cache eine einzige Anfrage stellvertretend für sich selbst an den Ursprung weiterleiten, wenn mehrere identische Anfragen gleichzeitig ankommen. Dies wird als _**Anfrageneinbruch**_ bezeichnet.

Anfrageneinbruch tritt auf, wenn Anfragen gleichzeitig eingehen, sodass selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, sie erneut verwendet wird.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie in einem Einbruch geteilt wird, sollten Sie die `private`-Direktive hinzufügen:

![Request collapse wird gezeigt, wie mehrere Clients GET-Anfragen senden und ein Cache sie in eine GET-Anfrage zum Ursprung konsolidiert. Der Ursprungsserver antwortet mit einem 200 OK, den der Cache zurück an alle Clients teilt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Gemeinsame Caching-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Webseiten können durch eine Kombination von wenigen Mustern abgedeckt werden.

Dieser Abschnitt beschreibt die allgemeinen Muster beim Entwerfen von Caches.

### Standard-Einstellungen

Wie oben erwähnt, ist das Standardverhalten für Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht zwischenspeichern", sondern implizites Caching gemäß dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten explizit einen Standard-`Cache-Control`-Header zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es eine gängige Praxis, den Standardwert des `Cache-Control`-Headers mit `no-cache` festzulegen:

```http
Cache-Control: no-cache
```

Zusätzlich, wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss auch `private` angegeben werden, um eine Weitergabe an andere Benutzer zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache Busting

Die Ressourcen, die sich am besten zum Caching eignen, sind statische, unveränderliche Dateien, deren Inhalte sich niemals ändern. Und für Ressourcen, die sich ändern, ist es eine gängige bewährte Methode, die URL bei jeder Content-Änderung zu ändern, sodass die URL-Einheit für längere Zeit zwischengespeichert werden kann.

Betrachten Sie zum Beispiel das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig während der Entwicklung aktualisiert. Auch wenn die vom Client verwendeten Versionen von JavaScript- und CSS-Ressourcen nicht synchron sind, wird die Anzeige unterbrochen.

Daher macht es das obige HTML schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie das JavaScript und CSS mit URLs ausliefern, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hashwert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten gezeigt.

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

Da der Cache Ressourcen voneinander aufgrund ihrer URLs unterscheidet, wird der Cache nicht wiederverwendet, wenn sich die URL bei Aktualisierung einer Ressource ändert.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für längere Zeit zwischengespeichert werden. Daher wie lange sollte `max-age` eingestellt werden? Die QPACK-Spezifikation gibt darauf eine Antwort.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard für die Komprimierung von HTTP-Headerfeldern mit Tabellen von häufig verwendeten Feldwerten.

Einige häufig verwendete Cache-Headerwerte sind unten gezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie die Werte in 1 Byte komprimieren, wenn sie über HTTP3 übertragen werden.

Nummern `37`, `38` und `41` sind für Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch existiert, nicht sehr hoch — selbst wenn `max-age` auf 1 Woche eingestellt ist. Daher macht es praktisch keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass die Nummer `41` die längste `max-age` (1 Jahr) hat, aber mit `public`.

Der `public`-Wert hat die Wirkung, dass die Antwort gespeichert werden kann, auch wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Die `public`-Direktive sollte nur verwendet werden, wenn es erforderlich ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Sie ist nicht erforderlich, da eine Antwort im geteilten Cache gespeichert wird, solange `max-age` gegeben ist.

Wenn die Antwort jedoch mit einer Basis-Authentifizierung personalisiert ist, kann die Anwesenheit von `public` Probleme verursachen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified`- und `ETag`-Header zu setzen, damit Sie eine Ressource nicht bei jedem Neuladen erneut übertragen müssen. Es ist einfach, diese Header für vorbereitete statische Dateien zu generieren.

Der `ETag`-Wert kann hier ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

Zuätzlich kann `immutable` hinzugefügt werden, um die Validierung beim Neuladen zu verhindern.

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

**Cache Busting** ist eine Technik, um eine Antwort über einen langen Zeitraum zwischenspeicherbar zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Die Technik kann auf alle Unterressourcen angewendet werden, wie z.B. Bilder.

> [!NOTE]
> Wenn Sie die Verwendung von `immutable` und QPACK bewerten:
> Wenn Sie besorgt sind, dass `immutable` den durch QPACK bereitgestellten vordefinierten Wert ändert, bedenken Sie, dass
> in diesem Fall der `immutable`-Teil separat durch das Aufteilen des `Cache-Control`-Werts in zwei Zeilen kodiert werden kann — obwohl dies von dem Kodierungsalgorithmus abhängt, den eine bestimmte QPACK-Implementierung verwendet.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Unterressourcen können Hauptressourcen nicht mittels Cache Busting bearbeitet werden, da ihre URLs nicht auf dieselbe Weise dekoriert werden können wie die URLs von Unterressourcen.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

In diesem Fall wäre `no-cache` angebracht — anstatt `no-store` — da wir kein HTML speichern möchten, sondern es immer auf dem neuesten Stand haben möchten.

Das Hinzufügen von `Last-Modified` und `ETag` ermöglicht es den Clients, bedingte Anfragen zu senden, und eine `304 Not Modified`-Antwort kann zurückgegeben werden, wenn es keine Änderungen am HTML gab:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Diese Einstellung ist für nicht-personalisierte HTML geeignet, aber für eine Antwort, die unter Verwendung von Cookies personalisiert wird — zum Beispiel nach einem Login — denken Sie daran, auch `private` zu spezifizieren:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Dasselbe kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht mithilfe von Cache Busting geändert werden können.

Die meisten Webinhalte können durch eine Kombination der beiden oben beschriebenen Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der in den vorhergehenden Abschnitten beschriebenen Methode können Unterressourcen durch Cache Busting für längere Zeit zwischengespeichert werden, aber Hauptressourcen (die in der Regel HTML-Dokumente sind) können es nicht.

Das Cachen von Hauptressourcen ist schwierig, weil es bei Verwendung nur standardmäßiger Direktiven der HTTP-Caching-Spezifikation keinen Weg gibt, zwischengespeicherte Inhalte aktiv zu löschen, wenn der Inhalt auf dem Server aktualisiert wird.

Es ist jedoch möglich, indem ein verwalteter Cache wie ein CDN oder ein Service Worker bereitgestellt wird.

Ein CDN, das das Bereinigen des Caches über eine API oder Dashboard-Operation zulässt, würde eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der relevante Cache nur dann explizit bereinigt wird, wenn eine Aktualisierung auf dem Server durchgeführt wird.

Ein Service Worker könnte dasselbe tun, wenn er die Inhalte in der Cache-API löschen kann, wenn eine Aktualisierung auf dem Server erfolgt.

Für weitere Informationen lesen Sie die Dokumentation Ihres CDN und konsultieren Sie die [Service Worker-Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [`Cache-Control` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)
- [RFC 9111: Hypertext Transport Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://mnot.net/cache_docs/)
