---
title: HTTP-Caching
slug: Web/HTTP/Caching
l10n:
  sourceCommit: 968857ebc65f5b151e00433f0c0d890621be95a7
---

{{HTTPSidebar}}

## Überblick

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verbunden ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Erstens, da die Anfrage nicht mehr an den Ursprungsserver gesendet werden muss, wird die Antwort umso schneller sein, je näher der Client und der Cache sind. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Wenn eine Antwort wiederverwendbar ist, muss der Ursprungsserver die Anfrage nicht bearbeiten — er muss die Anfrage also nicht analysieren und leiten, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Last auf dem Server.

Ein ordnungsgemäßer Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der Spezifikation [HTTP Caching](https://httpwg.org/specs/rfc9111.html) gibt es zwei Haupttypen von Caches: **private Caches** und **geteilte Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der einem bestimmten Client zugeordnet ist — typischerweise einem Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Nutzer speichern.

Andererseits können, wenn personalisierte Inhalte in einem anderen Cache als einem privaten Cache gespeichert werden, andere Nutzer möglicherweise diese Inhalte abrufen — was zu unbeabsichtigtem Informationsleck führen kann.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden üblicherweise durch Cookies gesteuert, aber die Anwesenheit eines Cookies zeigt nicht immer an, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Geteilter Cache

Der geteilte Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die unter den Nutzern geteilt werden können. Geteilte Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Funktion der Zugriffskontrolle implementieren einige Proxys Caching, um den Datenverkehr aus dem Netzwerk zu reduzieren. Dies wird normalerweise nicht vom Dienstentwickler verwaltet, daher muss es durch geeignete HTTP-Header usw. gesteuert werden. In der Vergangenheit haben jedoch veraltete Proxy-Cache-Implementierungen — wie Implementierungen, die den HTTP-Caching-Standard nicht richtig verstehen — oft Probleme für Entwickler verursacht.

**Allzweck-Header** wie der folgende werden verwendet, um mit "alten und nicht aktualisierten Proxy-Cache"-Implementierungen umzugehen, die aktuelle HTTP-Caching-Spezifikationsdirektiven wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Allerdings können, in den letzten Jahren, da HTTPS häufiger geworden ist und die Client/Server-Kommunikation verschlüsselt wurde, Proxy-Caches auf dem Weg in vielen Fällen nur eine Antwort tunneln und nicht als Cache fungieren. In diesem Szenario muss man sich also keine Sorgen über veraltete Proxy-Cache-Implementierungen machen, die die Antwort nicht einmal sehen können.

Auf der anderen Seite, wenn ein {{Glossary("TLS", "TLS")}}-Bridge-Proxy in einer Man-in-the-Middle-Manier die gesamte Kommunikation durch die Installation eines von der Organisation verwalteten {{Glossary("Certificate_authority", "Zertifikatautorität (CA)")}}-Zertifikats auf dem PC entschlüsselt und Zugriffskontrolle usw. durchführt — ist es möglich, die Inhalte der Antwort zu sehen und sie zu cachen. Da jedoch [Zertifikattransparenz (CT)](/de/docs/Web/Security/Certificate_Transparency) in den letzten Jahren weit verbreitet ist und einige Browser nur Zertifikate erlauben, die mit einem SCT (signierte Zertifikatszeitstempel) ausgestellt sind, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung muss man sich keine Sorgen machen, dass der Proxy-Cache "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden ausdrücklich von Dienstentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient auszuliefern. Beispiele sind Reverse-Proxies, CDNs und Service Worker in Kombination mit der Cache-API.

Die Eigenschaften verwalteter Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches über den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keine Möglichkeit, einen Cache ausdrücklich zu löschen — aber bei einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Dadurch wird eine proaktivere Caching-Strategie ermöglicht.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikationen zugunsten einer expliziten Manipulation zu ignorieren. Zum Beispiel kann das Folgende angegeben werden, um sich von einem privaten Cache oder Proxy-Cache abzumelden, während Sie Ihre eigene Strategie verwenden, um nur in einem verwalteten Cache zu cachen.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache die VCL (Varnish Configuration Language, eine Art {{Glossary("DSL/Domain_specific_language", "DSL")}}), um die Cache-Speicherung zu steuern, während Service Worker in Kombination mit der Cache-API es Ihnen ermöglicht, diese Logik in JavaScript zu erstellen.

Das bedeutet, wenn ein verwalteter Cache eine `no-store`-Direktive absichtlich ignoriert, gibt es keinen Grund, sie als "nicht konform" mit dem Standard wahrzunehmen. Was Sie tun sollten, ist, Allzweck-Header zu vermeiden, aber die Dokumentation des verwalteten Cache-Mechanismus, den Sie verwenden, sorgfältig zu lesen und sicherzustellen, dass Sie den Cache korrekt in den durch den von Ihnen gewählten Mechanismus bereitgestellten Wegen kontrollieren.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Arten von Caches, einschließlich eines privaten Caches im Browser, eines geteilten (Proxy-) Caches, eines Reverse Proxy Caches und eines geteilten (verwalteten) Caches in einem CDN, das zum Cache des Ursprungsservers führt](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Heuristisches Caching

HTTP ist so gestaltet, dass es so viel wie möglich cached, sodass auch wenn kein `Cache-Control` angegeben ist, Antworten gemäß bestimmten Bedingungen gespeichert und wiederverwendet werden. Dies wird **heuristisches Caching** genannt.

Zum Beispiel nehmen Sie die folgende Antwort. Diese Antwort wurde vor 1 Jahr zuletzt aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalt, der ein ganzes Jahr nicht aktualisiert wurde, einige Zeit danach nicht aktualisiert wird. Daher speichert der Client diese Antwort (trotz fehlendem `max-age`) und verwendet sie eine Weile erneut. Wie lange die Nutzung andauert, hängt von der Umsetzung ab, jedoch empfiehlt die Spezifikation ungefähr 10% (in diesem Fall 0,1 Jahre) der Zeit nach der Speicherung.

Heuristisches Caching ist ein Workaround, der entstand, bevor `Cache-Control`-Unterstützung weit verbreitet übernommen wurde, und im Wesentlichen sollten alle Antworten explict einen `Cache-Control`-Header angeben.

## Frisch und veraltet basierend auf Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **veraltet**. Der _frische_ Zustand zeigt normalerweise an, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _veraltete_ Zustand bedeutet, dass die gecachte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie veraltet ist, ist **Alter**. In HTTP ist Alter die Zeit, die seit der Erzeugung der Antwort verstrichen ist. Dies ist ähnlich der {{Glossary("TTL", "TTL")}} in anderen Caching-Mechanismen.

Betrachten Sie die folgende Beispielantwort (604800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort speichert, berechnet die seit der Erzeugung der Antwort verstrichene Zeit und verwendet das Ergebnis als _Alter_ der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _veraltet_.

Solange die gespeicherte Antwort frisch bleibt, wird sie verwendet, um Client-Anfragen zu erfüllen.

Wenn eine Antwort in einem geteilten Cache gespeichert ist, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Fortgeführt mit dem Beispiel, wenn der geteilte Cache die Antwort für einen Tag gespeichert hat, würde der geteilte Cache die folgende Antwort an nachfolgende Client-Anfragen senden.

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

Der Client, der diese Antwort erhält, wird feststellen, dass sie für die verbleibenden 518400 Sekunden frisch ist, der Unterschied zwischen der `max-age` der Antwort und `Age`.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header angegeben.

Der `Expires`-Header gibt die Lebensdauer des Caches durch eine explizite Zeit anstatt durch die Angabe einer verstrichenen Zeit an.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Jedoch ist das Zeitformat schwer zu parsen, viele Implementierungsfehler wurden gefunden, und es ist möglich, Probleme zu verursachen, indem bewusst die Systemuhr verstellt wird; daher wurde `max-age` — zur Angabe einer verstrichenen Zeit — für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, ist `max-age` als bevorzugt definiert. Es ist also nicht notwendig, jetzt, da HTTP/1.1 weit verbreitet ist, `Expires` anzugeben.

## Vary

Die Art, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortkörper            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber die Inhalte von Antworten sind nicht immer gleich, auch wenn sie dieselbe URL haben. Besonders wenn Inhaltsverhandlungen stattfinden, kann die Antwort des Servers von den Werten der `Accept`-, `Accept-Language`- und `Accept-Encoding`-Anforderungsheader abhängen.

Zum Beispiel, für englische Inhalte, die mit einem `Accept-Language: en`-Header zurückgegeben werden und gecached sind, ist es unerwünscht, diese gecachte Antwort dann für Anfragen zu verwenden, die einen `Accept-Language: ja`-Anforderungsheader haben. In diesem Fall können Sie die Antworten so cachen, dass sie — basierend auf der Sprache — getrennt gecached werden, indem `Accept-Language` zum Wert des `Vary`-Headers hinzugefügt wird.

```http
Vary: Accept-Language
```

Das bewirkt, dass der Cache auf einem Verbund von Antwort-URL und `Accept-Language`-Anforderungsheader basiert — statt nur auf der Antwort-URL.

| URL                              | `Accept-Language` | Antwortkörper            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Wenn Sie außerdem eine Inhaltsoptimierung bereitstellen (zum Beispiel für responsives Design) basierend auf dem User-Agent, könnten Sie versucht sein, `User-Agent` in den Wert des `Vary`-Headers einzuschließen. Der `User-Agent`-Anforderungsheader weist jedoch im Allgemeinen eine sehr große Anzahl von Variationen auf, was die Wahrscheinlichkeit drastisch verringert, dass der Cache wiederverwendet wird. Überlegen Sie daher stattdessen, das Verhalten basierend auf Feature-Erkennung und nicht basierend auf dem `User-Agent`-Anforderungsheader zu variieren.

Für Anwendungen, die Cookies zur Verhinderung der Wiederverwendung gecachter personalisierter Inhalte durch andere verwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` anzugeben.

## Validierung

Veraltete Antworten werden nicht sofort verworfen. HTTP besitzt einen Mechanismus, um eine veraltete Antwort durch Nachfragen beim Ursprungsserver in eine frische zu verwandeln. Dies wird **Validierung** genannt oder manchmal auch **Revalidierung**.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die einen `If-Modified-Since` oder `If-None-Match`-Anforderungsheader enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 erstellt und hat ein `max-age` von 1 Stunde, sodass Sie wissen, dass sie bis 23:22:22 frisch ist.

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

Um 23:22:22 wird die Antwort veraltet und der Cache kann nicht wiederverwendet werden. So zeigt die folgende Anfrage einen Client, der eine Anfrage mit einem `If-Modified-Since`-Anforderungsheader sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server wird mit `304 Not Modified` antworten, wenn der Inhalt sich seit der angegebenen Zeit nicht geändert hat.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortkörper — es gibt nur einen Statuscode — daher ist die Übertragungsgröße extrem klein.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Beim Empfang dieser Antwort setzt der Client die gespeicherte veraltete Antwort wieder auf frisch zurück und kann sie während der verbleibenden 1 Stunde erneut verwenden.

Der Server kann die Änderungszeit aus dem Dateisystem des Betriebssystems abrufen, was für den Fall, dass statische Dateien bereitgestellt werden, relativ einfach ist. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Dateiaktualisierungszeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Antwortheader als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Antwortheaders ist ein beliebiger vom Server generierter Wert. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, sodass Server frei sind, den Wert basierend auf beliebigen Mitteln wie einem Hash des Antwortinhalts oder einer Versionsnummer zu setzen.

Als Beispiel, wenn ein Hashwert für den `ETag`-Header verwendet wird und der Hashwert der `index.html`-Ressource `33a64df5` ist, lautet die Antwort wie folgt:

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

Wenn diese Antwort veraltet ist, nimmt der Client den Wert des `ETag`-Antwortheaders der gecachten Antwort und setzt ihn in den `If-None-Match`-Anforderungsheader, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Der Server wird `304 Not Modified` zurückgeben, wenn der Wert des `ETag`-Headers, den er für die angeforderte Ressource bestimmt, derselbe ist wie der `If-None-Match`-Wert in der Anfrage.

Aber wenn der Server bestimmt, dass die angeforderte Ressource jetzt einen anderen `ETag`-Wert haben sollte, wird der Server stattdessen mit einem `200 OK` und der neuesten Version der Ressource antworten.

> [!NOTE]
> RFC9110 bevorzugt es, dass Server nach Möglichkeit sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, erhält `If-None-Match` Vorrang für den Validator.
> Wenn Sie nur ans Caching denken, könnten Sie meinen, dass `Last-Modified` unnötig ist.
> `Last-Modified` ist jedoch nicht nur nützlich für das Caching; es ist ein standard HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Modifizierungszeit anzuzeigen, von Crawlern, um die Crawlhäufigkeit anzupassen, und für andere verschiedene Zwecke.
> Also unter Berücksichtigung des gesamten HTTP-Ökosystems ist es besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwungene Revalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern immer den neuesten Inhalt vom Server abrufen möchten, können Sie die `no-cache`-Direktive verwenden, um die Validierung zu erzwingen.

Durch Hinzufügen von `Cache-Control: no-cache` zur Antwort zusammen mit `Last-Modified` und `ETag` — wie unten gezeigt — erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder erhält andernfalls eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

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

Es wird oft gesagt, dass die Kombination von `max-age=0` und `must-revalidate` dieselbe Bedeutung wie `no-cache` hat.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort veraltet ist, und `must-revalidate` bedeutet, dass sie nicht wiederverwendet werden darf, ohne revalidiert zu werden, sobald sie veraltet ist — sodass die Semantik in Kombination scheinbar dieselbe wie `no-cache` ist.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel aus der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache`-Direktive zu verarbeiten — und daher wurde, um mit dieser Einschränkung umzugehen, `max-age=0` als Workaround verwendet.

Aber jetzt, da HTTP/1.1-konforme Server weit verbreitet eingesetzt werden, gibt es keinen Grund, diese Kombination von `max-age=0` und `must-revalidate` jemals zu verwenden — Sie sollten stattdessen einfach `no-cache` verwenden.

## Nicht cachen

Die `no-cache`-Direktive verhindert nicht das Speichern von Antworten, sondern verhindert nur die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in irgendeinem Cache gespeichert wird, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Im Allgemeinen bedeutet eine "nicht-cache"-Anforderung in der Praxis jedoch die folgenden Umstände:

- Sie möchten, dass die Antwort nur vom spezifischen Client gespeichert wird, aus Datenschutzgründen.
- Sie möchten immer aktuelle Informationen bereitstellen.
- Sie wissen nicht, was in veralteten Implementierungen passieren könnte.

In diesen Umständen ist `no-store` nicht immer die geeignetste Direktive.

Die folgenden Abschnitte beleuchten die Umstände im Detail.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Nutzer eines Caches sichtbar wäre.

In einem solchen Fall wird durch die Verwendung der `private`-Direktive die personalisierte Antwort nur beim spezifischen Client gespeichert und nicht an einen anderen Nutzer des Caches weitergegeben.

```http
Cache-Control: private
```

In einem solchen Fall muss `private` auch angegeben werden, selbst wenn `no-store` gegeben ist.

### Immer aktuelle Inhalte bereitstellen

Die `no-store`-Direktive verhindert das Speichern einer Antwort, löscht jedoch nicht jede bereits gespeicherte Antwort für dieselbe URL.

Mit anderen Worten, wenn für eine bestimmte URL bereits eine alte Antwort gespeichert ist, wird durch `no-store` nicht verhindert, dass die alte Antwort wiederverwendet wird.

Eine `no-cache`-Direktive wird jedoch den Client zwingen, eine Validierungsanfrage zu senden, bevor eine gespeicherte Antwort wiederverwendet wird.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client zwingen, jedes Mal auf den Server zuzugreifen und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgehen mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, könnten Sie sehen, dass Allzweck-Header wie der folgende verwendet werden.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), als Alternative `no-cache` zu verwenden, um mit solchen veralteten Implementierungen umzugehen, und es ist kein Problem, wenn `no-cache` von Anfang an gegeben wird, da der Server die Anfrage immer erhält.

Wenn es der geteilte Cache ist, um den Sie sich Sorgen machen, können Sie sicherstellen, dass es keine unbeabsichtigte Speicherung gibt, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Sie könnten denken, dass das Hinzufügen von `no-store` der richtige Weg wäre, um das Caching abzulehnen.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu vergeben, da Sie viele Vorteile verlieren, die HTTP und Browser haben, einschließlich des Browser-basierten Rückwärts-/Vorwärts-Caches.

Um daher die Vorteile des vollständigen Funktionsumfangs der Webplattform zu nutzen, bevorzugen Sie die Verwendung von `no-cache` in Kombination mit `private`.

## Neu laden und erzwungenes Neu laden

Die Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Die **Neu laden**- und **Erzwungenes Neu laden**-Aktionen sind häufige Beispiele für Validierungen, die von der Browserseite aus durchgeführt werden.

### Neu laden

Um sich von Fensterbeschädigungen zu erholen oder auf die neueste Version der Ressource zu aktualisieren, stellen Browser eine Neuladefunktion für die Nutzer bereit.

Eine vereinfachte Sicht auf die HTTP-Anfrage, die während einer Browser-Neuladen erfolgt, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus wie das Obige; die Anfragen von Safari sehen etwas anders aus.)

Die `max-age=0`-Direktive in der Anfrage gibt an: "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" — so werden in der Tat zwischengespeicherte Antworten nicht wiederverwendet.

Infolgedessen wird eine Anfrage durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `no-cache` aufgerufen wird (beachten Sie, dass `reload` für diesen Fall nicht der richtige Modus ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neu laden

Browser verwenden `max-age=0` während des Neuladens aus Gründen der Abwärtskompatibilität — weil viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden. Aber `no-cache` ist jetzt in diesem Anwendungsfall in Ordnung und **erzwungenes Neu laden** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anforderung während eines Browser **erzwungenen Neu ladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus wie das Obige; die Anfragen von Safari sehen etwas anders aus.)

Da das keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie ein `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript reproduziert werden, indem `fetch()` mit dem Cache-Modus `reload` aufgerufen wird (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Revalidierung vermeiden

Inhalte, die sich nie ändern, sollten durch Cache-Busting eine lange `max-age` erhalten — das heißt, indem eine Versionsnummer, ein Hashwert usw. in die Anforderungs-URL aufgenommen werden.

Trotzdem wird beim Neuladen eine Revalidierungsanfrage gesendet, auch wenn der Server weiß, dass der Inhalt unveränderlich ist.

Um dies zu verhindern, kann die `immutable`-Direktive verwendet werden, um ausdrücklich darauf hinzuweisen, dass eine Revalidierung nicht erforderlich ist, da sich der Inhalt niemals ändert.

```http
Cache-Control: max-age=31536000, immutable
```

Dies verhindert unnötige Revalidierungen während Neuladen.

Beachten Sie, dass, anstatt diese Direktive zu implementieren, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass während des Neuladens von Unterressourcen keine Revalidierung durchgeführt wird.

## Gespeicherte Antworten löschen

Es gibt keine Möglichkeit, Antworten auf einem Zwischenspeicher, die mit einer langen `max-age` gespeichert wurden, zu löschen.

Stellen Sie sich vor, dass die folgende Antwort von `https://example.com/` gespeichert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Sie möchten diese Antwort möglicherweise überschreiben, sobald sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert ist — da aufgrund des Cachings keine weiteren Anfragen den Server erreichen.

Eine der in der Spezifikation erwähnten Methoden ist das Senden einer Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST`, aber für viele Clients ist das schwer zu tun.

Der [`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache)-Header und der Direktivwert können verwendet werden, um Browser-Caches zu leeren — sind jedoch ohne Effekt auf Zwischenspeicher.
Andernfalls bleiben Antworten im Browser-Cache bis `max-age` abläuft, es sei denn, der Nutzer führt manuell eine Neuladen-, erzwungene Neuladen- oder Verlaufslöschaktion durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server keine Kontrolle über eine URL verlieren möchte — zum Beispiel im Fall, dass eine Ressource häufig aktualisiert wird — sollten Sie `no-cache` hinzufügen, damit der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Anfragen-Zusammenbruch

Der geteilte Cache befindet sich in erster Linie vor dem Ursprungsserver und soll den Datenverkehr zum Ursprungsserver reduzieren.

Wenn also mehrere identische Anfragen gleichzeitig an einen geteilten Cache gelangen, wird der Zwischen-Cache eine einzelne Anfrage im Namen von sich selbst an den Ursprung weiterleiten, der dann das Ergebnis für alle Clients wiederverwenden kann. Dies wird als _**Anfragen-Zusammenbruch**_ bezeichnet.

Ein Anfragen-Zusammenbruch tritt auf, wenn Anfragen gleichzeitig eintreffen. Selbst wenn `max-age=0` oder `no-cache` in der Antwort gegeben sind, wird sie wiederverwendet.

Wenn die Antwort für einen bestimmten Nutzer personalisiert ist und Sie nicht möchten, dass sie im Zusammenbruch geteilt wird, sollten Sie die `private`-Direktive hinzufügen:

![Anfragen-Zusammenbruch wird als mehrere Clients angezeigt, die GET-Anfragen senden, und ein Cache, der sie zu einem GET an den Ursprung konsolidiert. Der Ursprungsserver antwortet mit einem 200 OK, den der Cache an alle Clients zurückgibt.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Häufige Caching-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Aber die meisten Websites können durch eine Kombination aus einer Handvoll von Mustern abgedeckt werden.

Dieser Abschnitt beschreibt die häufigsten Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie bereits erwähnt, ist das Standardverhalten beim Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern impliziertes Caching gemäß dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten einen Standard-`Cache-Control`-Header explizit zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es gängige Praxis, den Standardwert von `Cache-Control` `no-cache` einzuschließen:

```http
Cache-Control: no-cache
```

Darüber hinaus, wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Nutzer personalisiert wird, muss auch `private` angegeben werden, um das Teilen mit anderen Nutzern zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache-Busting

Die am besten für das Caching geeigneten Ressourcen sind statische, unveränderliche Dateien, deren Inhalte sich nie ändern. Und für Ressourcen, die sich _doch_ ändern, ist es eine gängige Best Practice, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, sodass die URL-Einheit für einen längeren Zeitraum gecached werden kann.

Als Beispiel betrachten Sie das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung voranschreitet. Außerdem bricht die Anzeige, wenn die Versionen von JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind.

Daher macht es das obige HTML schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie das JavaScript und CSS mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hashwert enthalten. Einige der Möglichkeiten dies zu tun sind unten gezeigt.

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

Da der Cache Ressourcen aufgrund ihrer URLs voneinander unterscheidet, wird der Cache nicht mehr erneut verwendet, wenn sich die URL bei einer Aktualisierung einer Ressource ändert.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für eine lange Zeit gecached werden. Wie lange sollte `max-age` eingestellt werden? Die QPACK-Spezifikation gibt eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Headerfeldern, mit Tabellen von häufig verwendeten Feldwerten, die definiert sind.

Einige häufig verwendete Cache-Header-Werte sind unten gezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie Werte in 1 Byte komprimieren, wenn diese über HTTP3 übertragen werden.

Die Zahlen `37`, `38` und `41` sind für Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch existiert, nicht sehr hoch — selbst wenn `max-age` auf 1 Woche gesetzt ist. Daher macht es in der Praxis keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass Nummer `41` die längste `max-age` (1 Jahr) hat, jedoch mit `public`.

Der `public`-Wert hat die Wirkung, die Antwort trotz des Vorhandenseins des `Authorization`-Headers speicherbar zu machen.

> [!NOTE]
> Die `public`-Direktive sollte nur verwendet werden, wenn die Antwort bei gesetztem `Authorization`-Header gespeichert werden muss.
> Sie ist ansonsten nicht erforderlich, da eine Antwort im geteilten Cache gespeichert wird, solange `max-age` angegeben ist.

Also wenn die Antwort mit Basisauthentifizierung personalisiert wird, kann die Anwesenheit von `public` Probleme verursachen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified`- und `ETag`-Header zu setzen, damit Sie eine Ressource beim Neuladen nicht erneut übertragen müssen. Es ist einfach, diese Header für vorgebaute, statische Dateien zu generieren.

Der `ETag`-Wert hier kann ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

Darüber hinaus kann `immutable` hinzugefügt werden, um die Validierung beim Neuladen zu verhindern.

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

**Cache-Busting** ist eine Technik, die es ermöglicht, eine Antwort über einen langen Zeitraum zwischenspeicherbar zu machen, indem die URL geändert wird, sobald sich der Inhalt ändert. Die Technik kann auf alle Unterressourcen wie Bilder angewendet werden.

> [!NOTE]
> Wenn Sie die Verwendung von `immutable` und QPACK bewerten:
> Wenn Sie besorgt sind, dass `immutable` den von QPACK bereitgestellten, vordefinierten Wert ändert, ziehen Sie in Betracht, dass in diesem Fall der `immutable`-Teil separat codiert werden kann, indem der `Cache-Control`-Wert in zwei Zeilen aufgeteilt wird — obwohl dies vom Codierungsalgorithmus einer bestimmten QPACK-Implementierung abhängt.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Im Gegensatz zu Unterressourcen können Hauptressourcen nicht durch Cache-Busting manipuliert werden, da ihre URLs nicht auf die gleiche Weise dekoriert werden können wie Unterressourcen-URLs.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt serverseitig aktualisiert wird.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

In diesem Fall wäre `no-cache` angebracht — anstatt `no-store` — da wir nicht möchten, dass HTML gespeichert wird, es soll aber immer aktuell sein.

Außerdem wird durch Hinzufügen von `Last-Modified` und `ETag` können Clients bedingte Anfragen senden, und eine `304 Not Modified` kann zurückgegeben werden, wenn es keine Aktualisierungen gab:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
```

Diese Einstellung ist für nicht personalisiertes HTML angemessen, aber für eine Antwort, die mithilfe von Cookies personalisiert wird — zum Beispiel nach einem Login — vergessen Sie nicht, auch `private` anzugeben:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Dasselbe kann für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht durch Cache-Busting geändert werden können.

Der überwiegende Teil der Webinhalte kann durch eine Kombination aus den beiden oben beschriebenen Mustern abgedeckt werden.

### Mehr über verwaltete Caches

Mit der in den vorherigen Abschnitten beschriebenen Methode können Unterressourcen durch Cache-Busting lange zwischengespeichert werden, aber Hauptressourcen (die normalerweise HTML-Dokumente sind) können es nicht.

Das Caching von Hauptressourcen ist schwierig, da es mit den Standardrichtlinien der HTTP-Caching-Spezifikation keine Möglichkeit gibt, Cache-Inhalte aktiv zu löschen, wenn Inhalte auf dem Server aktualisiert werden.

Es ist jedoch möglich durch die Bereitstellung eines verwalteten Caches wie eines CDN oder Service Workers.

Zum Beispiel würde ein CDN, das Cache-Löschung über eine API oder Dashboard-Bedienung erlaubt, eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der relevante Cache bei einer Aktualisierung auf dem Server ausdrücklich geleert wird.

Ein Service Worker könnte dasselbe tun, wenn er die Inhalte in der Cache-API löschen könnte, wenn eine Aktualisierung auf dem Server erfolgt.

Für weitere Informationen, sehen Sie die Dokumentation für Ihr CDN und konsultieren Sie die [Service Worker Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
