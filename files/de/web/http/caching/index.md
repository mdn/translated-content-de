---
title: HTTP-Caching
slug: Web/HTTP/Caching
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

## Überblick

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verknüpft ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Erstens, da die Anfrage nicht an den Ursprungsserver gesendet werden muss, ist die Antwort umso schneller, je näher der Client und der Cache beieinander liegen. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Auch wenn eine Antwort wiederverwendbar ist, muss der Ursprungsserver die Anfrage nicht verarbeiten – daher muss er die Anfrage nicht analysieren und weiterleiten, die Sitzung basierend auf dem Cookie wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Last auf dem Server.

Der ordnungsgemäße Betrieb des Caches ist entscheidend für die Stabilität des Systems.

## Arten von Caches

In der [HTTP-Caching](https://httpwg.org/specs/rfc9111.html)-Spezifikation gibt es zwei Hauptarten von Caches: **Private Caches** und **Geteilte Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der mit einem bestimmten Client verknüpft ist – typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen Cache als einem privaten Cache gespeichert werden, könnten andere Benutzer diese Inhalte abrufen können – was zu ungewollter Informationsweitergabe führen könnte.

Wenn eine Antwort personalisierte Inhalte enthält und Sie möchten, dass die Antwort nur im privaten Cache gespeichert wird, müssen Sie eine `private`-Direktive angeben.

```http
Cache-Control: private
```

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber die Anwesenheit eines Cookies zeigt nicht immer an, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Geteilter Cache

Der geteilte Cache befindet sich zwischen Client und Server und kann Antworten speichern, die unter Benutzern geteilt werden können. Geteilte Caches können weiter in **Proxy-Caches** und **Verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Funktion der Zugriffskontrolle implementieren einige Proxies das Caching, um den Datenverkehr aus dem Netzwerk zu reduzieren. Dies wird normalerweise nicht vom Diensteentwickler verwaltet, daher muss es durch geeignete HTTP-Header usw. gesteuert werden. In der Vergangenheit haben jedoch veraltete Proxy-Cache-Implementierungen – wie Implementierungen, die den HTTP-Caching-Standard nicht ordnungsgemäß verstehen – oft Probleme für Entwickler verursacht.

**Rundum-Header** wie der folgende werden verwendet, um veraltete Proxy-Cache-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spec-Direktiven wie `no-store` nicht verstehen.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

In den letzten Jahren, da HTTPS häufiger geworden ist und die Kommunikation zwischen Client und Server verschlüsselt ist, können Proxy-Caches im Pfad in vielen Fällen nur eine Antwort tunneln und nicht als Cache fungieren. In diesem Szenario besteht also keine Notwendigkeit, sich um veraltete Proxy-Cache-Implementierungen zu sorgen, die die Antwort nicht einmal sehen können.

Andererseits, wenn ein [TLS](/de/docs/Glossary/TLS)-Bridge-Proxy in einer Man-in-the-Middle-Manier alle Kommunikationen entschlüsselt, indem ein Zertifikat von einer von der Organisation verwalteten [CA (Certificate Authority)](/de/docs/Glossary/Certificate_authority) auf dem PC installiert wird, und Zugriffskontrolle usw. durchführt — es ist möglich, den Inhalt der Antwort zu sehen und zu cachen. Da jedoch in den letzten Jahren [CT (Certificate Transparency)](/de/docs/Web/Security/Certificate_Transparency) weit verbreitet ist und einige Browser nur Zertifikate erlauben, die mit einem SCT (Signed Certificate Timestamp) ausgestellt wurden, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung besteht keine Notwendigkeit, sich darüber Sorgen zu machen, dass der Proxy-Cache "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden ausdrücklich von Dienstentwicklern bereitgestellt, um den Ursprungsserver zu entlasten und Inhalte effizient zu liefern. Beispiele hierfür sind Reverse-Proxies, CDNs und Service-Worker in Kombination mit der Cache-API.

Die Eigenschaften von verwalteten Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches über den `Cache-Control`-Header sowie durch eigene Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keinen Weg, einen Cache explizit zu löschen – aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Das erlaubt eine proaktivere Caching-Strategie.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten einer expliziten Manipulation zu ignorieren. Zum Beispiel kann Folgendes angegeben werden, um sich von einem privaten Cache oder Proxy-Cache abzumelden, während Sie Ihre eigene Strategie verwenden, um nur in einem verwalteten Cache zu cachen.

```http
Cache-Control: no-store
```

Zum Beispiel verwendet Varnish Cache die VCL (Varnish Configuration Language, eine Art [DSL](/de/docs/Glossary/DSL/Domain_specific_language))-Logik, um die Cache-Speicherung zu handhaben, während Service-Worker in Kombination mit der Cache-API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, wenn ein verwalteter Cache absichtlich eine `no-store`-Direktive ignoriert, gibt es keine Notwendigkeit, ihn als "nicht standardkonform" wahrzunehmen. Was Sie tun sollten, ist, den Gebrauch von Rundum-Headern zu vermeiden und die Dokumentation des von Ihnen verwendeten Managed-Cache-Mechanismus sorgfältig zu lesen, um sicherzustellen, dass Sie den Cache ordnungsgemäß in den von Ihnen gewählten Mechanismen kontrollieren.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

![Art des Caches](type-of-cache.png)

## Heuristisches Caching

HTTP ist so konzipiert, dass es so viel wie möglich cached, sodass auch wenn kein `Cache-Control` angegeben ist, Antworten gespeichert und wiederverwendet werden, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

Zum Beispiel betrachten Sie die folgende Antwort. Diese Antwort wurde vor 1 Jahr zuletzt aktualisiert.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Es ist heuristisch bekannt, dass Inhalte, die seit einem ganzen Jahr nicht aktualisiert wurden, für einige Zeit danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des Fehlens von `max-age`) und verwendet sie eine Weile wieder. Wie lange die Wiederverwendung dauert, hängt von der Implementierung ab, aber die Spezifikation empfiehlt ungefähr 10 % (in diesem Fall 0,1 Jahr) der Zeit nach der Speicherung.

Heuristisches Caching ist ein Workaround, der vor der weiten Verbreitung der `Cache-Control`-Unterstützung eingesetzt wurde, und im Grunde sollten alle Antworten explizit einen `Cache-Control`-Header angeben.

## Frisch oder abgestanden basierend auf Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **abgestanden**. Der _frische_ Zustand zeigt normalerweise an, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _abgestandene_ Zustand bedeutet, dass die im Cache gespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie abgestanden ist, ist das **Alter**. In HTTP ist das Alter die Zeit, die seit der Erstellung der Antwort vergangen ist. Dies ist ähnlich wie die [TTL](/de/docs/Glossary/TTL) in anderen Caching-Mechanismen.

Betrachten Sie zum Beispiel die folgende Antwort (604.800 Sekunden sind eine Woche):

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Der Cache, der die Beispielantwort gespeichert hat, berechnet die seit der Erstellung der Antwort verstrichene Zeit und verwendet das Ergebnis als Alter der Antwort.

Für die Beispielantwort bedeutet `max-age` Folgendes:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _abgestanden_.

Solange die gespeicherte Antwort frisch bleibt, wird sie verwendet, um Client-Anfragen zu erfüllen.

Wenn eine Antwort in einem geteilten Cache gespeichert ist, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Wenn der geteilte Cache die Antwort für einen Tag gespeichert hat, würde der geteilte Cache die folgende Antwort auf nachfolgende Client-Anfragen senden.

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

Der empfangende Client findet die Antwort weiterhin für die verbleibenden 518.400 Sekunden frisch, was dem Unterschied zwischen `max-age` der Antwort und `Age` entspricht.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header angegeben.

Der `Expires`-Header spezifiziert die Lebenszeit des Caches anhand einer expliziten Zeit, anstatt eine verstrichene Zeit zu spezifizieren.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Da jedoch das Zeitformat schwierig zu analysieren ist, viele Implementierungsfehler gefunden wurden und es möglich ist, Probleme zu verursachen, indem die Systemuhr absichtlich verschoben wird, wurde `max-age` eingeführt, um eine verstrichene Zeit für `Cache-Control` in HTTP/1.1 zu spezifizieren.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, ist `max-age` definiert, um bevorzugt zu werden. Daher ist es nicht erforderlich, `Expires` bereitzustellen, da HTTP/1.1 weit verbreitet ist.

## Vary

Die Unterscheidung von Antworten voneinander basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortkörper            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber der Inhalt der Antworten ist nicht immer gleich, auch wenn sie dieselbe URL haben. Insbesondere bei der Inhaltsverhandlung kann die Antwort des Servers von den Werten der Anfrage-Header `Accept`, `Accept-Language` und `Accept-Encoding` abhängen.

Zum Beispiel ist es unerwünscht, eine für englische Inhalte mit einem `Accept-Language: en`-Header zwischengespeicherte Antwort für Anfragen mit einem `Accept-Language: ja`-Anfrage-Header wiederzuverwenden. In diesem Fall können Sie die Antworten basierend auf der Sprache getrennt cachen, indem Sie `Accept-Language` zum Wert des `Vary`-Headers hinzufügen.

```http
Vary: Accept-Language
```

Das bewirkt, dass der Cache auf einer Kombination der Antwort-URL und des `Accept-Language`-Anfrage-Headers basiert — statt nur auf der Antwort-URL.

| URL                              | `Accept-Language` | Antwortkörper            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Auch wenn Sie eine Inhaltsoptimierung bereitstellen (zum Beispiel für responsives Design) basierend auf dem Benutzeragenten, könnten Sie versucht sein, `User-Agent` im Wert des `Vary`-Headers einzuschließen. Allerdings hat der `User-Agent`-Anfrage-Header in der Regel eine sehr große Anzahl von Variationen, was die Wahrscheinlichkeit, dass der Cache wiederverwendet wird, drastisch reduziert. Daher sollten Sie wenn möglich erwägen, das Verhalten basierend auf der Feature-Erkennung zu variieren, anstatt auf dem `User-Agent`-Anfrage-Header.

Für Anwendungen, die Cookies verwenden, um zu verhindern, dass andere zwischengespeicherte personalisierte Inhalte wiederverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` anzugeben.

## Validierung

Abgestandene Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um eine abgestandene Antwort in eine frische umzuwandeln, indem der Ursprungsserver befragt wird. Dies wird als **Validierung** oder manchmal **Revalidierung** bezeichnet.

Die Validierung erfolgt durch die Verwendung einer **bedingten Anfrage**, die einen `If-Modified-Since` oder `If-None-Match`-Anfrage-Header enthält.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 generiert und hat ein `max-age` von 1 Stunde, sodass sie bis 23:22:22 frisch bleibt.

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

Um 23:22:22 wird die Antwort abgestanden und der Cache kann nicht mehr verwendet werden. Die folgende Anfrage zeigt, dass ein Client eine Anfrage mit einem `If-Modified-Since`-Anfrage-Header sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Der Server antwortet mit `304 Not Modified`, wenn der Inhalt seit der angegebenen Zeit nicht geändert wurde.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortkörper — nur einen Statuscode — sodass die Übertragungsgröße extrem klein ist.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

Beim Empfang dieser Antwort setzt der Client die zwischengespeicherte abgestandene Antwort wieder auf frisch und kann sie während der verbleibenden 1 Stunde erneut verwenden.

Der Server kann die Änderungszeit aus dem Dateisystem des Betriebssystems erhalten, was für den Fall des Dienens statischer Dateien relativ einfach ist. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu analysieren, und verteilte Server haben Schwierigkeiten, Dateiaktualisierungszeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag`-Antwortheader als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag`-Antwort-Headers ist ein beliebiger Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, sodass Server den Wert nach Belieben festlegen können — beispielsweise basierend auf einem Hash des Körperinhalts oder einer Versionsnummer.

Wenn beispielsweise ein Hash-Wert für den `ETag`-Header verwendet wird und der Hash-Wert der Ressource `index.html` `33a64df5` ist, sieht die Antwort wie folgt aus:

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

Wenn diese Antwort abgestanden ist, nimmt der Client den Wert des `ETag`-Antwort-Headers für die zwischengespeicherte Antwort und setzt ihn in den `If-None-Match`-Anfrage-Header, um den Server zu fragen, ob die Ressource geändert wurde:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Wenn der Server feststellt, dass der angeforderte Ressourcen `ETag`-Wert mit dem `If-None-Match`-Wert der Anfrage übereinstimmt, wird `304 Not Modified` zurückgegeben.

Wenn der Server jedoch feststellt, dass die angeforderte Ressource jetzt einen anderen `ETag`-Wert haben sollte, wird der Server stattdessen mit `200 OK` und der neuesten Version der Ressource antworten.

> [!NOTE]
> RFC9110 bevorzugt, dass Server, wenn möglich, sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, hat `If-None-Match` Vorrang für den Validator.
> Wenn Sie nur das Caching in Betracht ziehen, meinen Sie vielleicht, dass `Last-Modified` unnötig ist.
> Jedoch ist `Last-Modified` nicht nur nützlich fürs Caching; es ist ein standardmäßiger HTTP-Header, der auch von Content-Management-Systemen (CMS) genutzt wird, um die letzte Änderungszeit anzuzeigen, von Crawlern, um die Crawlhäufigkeit anzupassen, und für viele andere Zwecke.
> Daher ist es im Hinblick auf das gesamte HTTP-Ökosystem besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Erzwungene Revalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern stattdessen immer den neuesten Inhalt vom Server abrufen möchten, können Sie die `no-cache`-Direktive verwenden, um die Validierung zu erzwingen.

Indem Sie `Cache-Control: no-cache` zur Antwort hinzufügen, zusammen mit `Last-Modified` und `ETag` — wie unten gezeigt — erhält der Client eine `200 OK`-Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder andernfalls eine `304 Not Modified`-Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

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

Oft wird gesagt, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung hat wie `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` bedeutet, dass die Antwort sofort abgestanden ist, und `must-revalidate` bedeutet, dass sie nicht wiederverwendet werden darf, ohne neu validiert zu werden, sobald sie abgestanden ist — daher scheinen in Kombination die Semantiken die gleichen zu sein wie `no-cache`.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 nicht in der Lage waren, die `no-cache`-Direktive zu verarbeiten — und daher wurde zur Bewältigung dieser Einschränkung `max-age=0` als Workaround verwendet.

Aber jetzt, da konforme HTTP/1.1-Server weit verbreitet sind, gibt es keinen Grund mehr, diese `max-age=0`- und `must-revalidate`-Kombination zu verwenden — Sie sollten stattdessen einfach `no-cache` verwenden.

## Nicht-Cache

Die `no-cache`-Direktive verhindert nicht die Speicherung von Antworten, sondern verhindert die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie eine Antwort in keinem Cache speichern möchten, verwenden Sie `no-store`.

```http
Cache-Control: no-store
```

Generell entspricht die Anforderung "nicht cachen" in der Praxis jedoch den folgenden Umständen:

- Wollen nicht, dass die Antwort von jemand anderem als dem spezifischen Client aus Datenschutzgründen gespeichert wird.
- Möchten immer aktuelle Informationen bereitstellen.
- Wissen nicht, was in veralteten Implementierungen passieren könnte.

Unter diesen Umständen ist `no-store` nicht immer die geeignetste Direktive.

Die folgenden Abschnitte beleuchten die Umstände detaillierter.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar wäre.

In einem solchen Fall bewirkt die Verwendung der `private`-Direktive, dass die personalisierte Antwort nur beim spezifischen Client gespeichert wird und nicht an andere Benutzer des Caches weitergegeben wird.

```http
Cache-Control: private
```

In einem solchen Fall muss auch `private` angegeben werden, selbst wenn `no-store` gegeben ist.

### Immer aktuelle Inhalte bereitstellen

Die `no-store`-Direktive verhindert, dass eine Antwort gespeichert wird, löscht jedoch keine bereits gespeicherte Antwort für dieselbe URL.

Mit anderen Worten, wenn bereits eine alte Antwort für eine bestimmte URL gespeichert ist, verhindert die Rückgabe von `no-store` nicht die Wiederverwendung der alten Antwort.

Ein `no-cache`-Direktiv zwingt den Client jedoch dazu, eine Validierungsanfrage zu senden, bevor eine gespeicherte Antwort wiederverwendet wird.

```http
Cache-Control: no-cache
```

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client dazu zwingen, jedes Mal auf den Server zuzugreifen und immer die neueste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Als Workaround für veraltete Implementierungen, die `no-store` ignorieren, können Rundum-Header wie der folgende verwendet werden.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative zu verwenden, um mit solchen veralteten Implementierungen umzugehen, und es ist kein Problem, wenn `no-cache` von Anfang an gegeben ist, da der Server die Anfrage immer erhalten wird.

Wenn es der geteilte Cache ist, den Sie betreffen könnte, können Sie sicherstellen, dass Sie eine ungewollte Zwischenspeicherung verhindern, indem Sie auch `private` hinzufügen:

```http
Cache-Control: no-cache, private
```

### Was durch `no-store` verloren geht

Sie mögen denken, `no-store` würde der richtige Weg sein, um sich vom Caching abzumelden.

Es wird jedoch nicht empfohlen, großzügig `no-store` anzugeben, denn dadurch verlieren Sie viele Vorteile, die HTTP und Browser bieten, einschließlich des Rück- und Vorwärts-Caches des Browsers.

Um daher die Vorteile des gesamten Funktionsumfangs der Web-Plattform zu erhalten, ziehen Sie es vor, `no-cache` in Kombination mit `private` zu verwenden.

## Neuladen und erzwungenes Neuladen

Die Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Das **Neuladen** und **erzwungenes Neuladen** sind bekannte Beispiele für Validierungen, die von der Browserseite geleistet werden.

### Neuladen

Um sich von Fensterbeschädigungen zu erholen oder die neueste Version der Ressource zu aktualisieren, bieten Browser Benutzern eine Neuladefunktion.

Eine vereinfachte Ansicht der HTTP-Anfrage, die während eines Browser-Neuladens gesendet wird, sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich wie oben aus; die Anfragen von Safari sehen ein bisschen anders aus.)

Die `max-age=0`-Direktive in der Anfrage spezifiziert "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" — daher werden zwischengespeicherte Antworten nicht wiederverwendet.

Diese Anfrage wurde durch `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript durch Aufruf von `fetch()` mit dem Cache-Modus `no-cache` reproduziert werden (beachten Sie, dass `reload` nicht der richtige Modus für diesen Fall ist):

```js
// Note: "reload" is not the right mode for a normal reload; "no-cache" is
fetch("/", { cache: "no-cache" });
```

### Erzwungenes Neuladen

Browser verwenden `max-age=0` während des Neuladens aus Kompatibilitätsgründen — weil viele veraltete Implementierungen vor HTTP/1.1 nicht `no-cache` verstanden haben. Aber `no-cache` ist jetzt in diesem Anwendungsfall in Ordnung, und **erzwungenes Neuladen** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser-**erzwungenen Neuladens** sieht wie folgt aus:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Die Anfragen von Chrome, Edge und Firefox sehen sehr ähnlich aus wie oben; die Anfragen von Safari sehen ein bisschen anders aus.)

Da dies keine bedingte Anfrage mit `no-cache` ist, können Sie sicher sein, dass Sie `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript durch Aufruf von `fetch()` mit dem Cache-Modus `reload` reproduziert werden (beachten Sie, dass es nicht `force-reload` ist):

```js
// Note: "reload" — rather than "no-cache" — is the right mode for a "force reload"
fetch("/", { cache: "reload" });
```

### Vermeidung der Nevalidierung

Inhalte, die sich nie ändern, sollten durch Cache-Busting mit einem langen `max-age` versehen werden — das heißt, indem eine Versionsnummer, ein Hash-Wert usw. in die Anfrage-URL eingefügt wird.

Jedoch sendet der Nutzer, wenn er neu lädt, eine Revalidierungsanfrage, auch wenn der Server weiß, dass die Inhalte unveränderlich sind.

Um das zu verhindern, kann die `immutable`-Direktive verwendet werden, um explizit anzuzeigen, dass keine Revalidierung erforderlich ist, weil die Inhalte sich nie ändern.

```http
Cache-Control: max-age=31536000, immutable
```

Das verhindert unnötige Revalidierungen während der Neustartvorgänge.

Beachten Sie, dass anstatt diese Direktive zu implementieren, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), sodass während der Neustarts für Unterressourcen keine Revalidierung erfolgt.

## Löschen von zwischengespeicherten Antworten

Es gibt im Grunde keinen Weg, Antworten zu löschen, die bereits mit einem langen `max-age` gespeichert wurden.

Stellen Sie sich vor, dass die folgende Antwort von `https://example.com/` gespeichert wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Möglicherweise möchten Sie diese Antwort überschreiben, sobald sie auf dem Server abgelaufen ist, aber sobald die Antwort zwischengespeichert ist, kann der Server nichts mehr tun — da keine weiteren Anfragen aufgrund des Cachings den Server erreichen.

Eine der in der Spezifikation erwähnten Methoden besteht darin, eine Anfrage für dieselbe URL mit einer unsicheren Methode wie `POST` zu senden, aber das ist normalerweise schwierig, absichtlich für viele Clients zu tun.

Es gibt auch eine Spezifikation für einen `Clear-Site-Data: cache`-Header und Wert, aber [nicht alle Browser unterstützen ihn](https://groups.google.com/a/mozilla.org/g/dev-platform/c/I939w1yrTp4) — und selbst wenn er verwendet wird, betrifft er nur Browser-Caches und hat keine Auswirkungen auf Zwischen-Caches.

Daher sollte angenommen werden, dass jede gespeicherte Antwort für ihre `max-age`-Periode bestehen bleibt, es sei denn, der Benutzer führt manuell einen Neustart, eine zwangsweise Neuladen oder eine Chronik-Löschen-Aktion aus.

Das Caching verringert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server keine Kontrolle über eine URL verlieren möchte — beispielsweise im Fall einer häufig aktualisierten Ressource — sollten Sie `no-cache` hinzufügen, damit der Server immer Anfragen erhält und die beabsichtigten Antworten senden kann.

## Anfrage-Zusammenbruch

Der geteilte Cache ist in erster Linie vor dem Ursprungsserver positioniert und dazu gedacht, den Datenverkehr zum Ursprungsserver zu reduzieren.

Wenn mehrere identische Anfragen gleichzeitig bei einem geteilten Cache ankommen, leitet der Zwischen-Cache eine einzelne Anfrage im Namen von sich selbst an den Ursprung weiter, der dann das Ergebnis für alle Clients wiederverwenden kann. Dies wird als **Anfrage-Zusammenbruch** bezeichnet.

Der Anfrage-Zusammenbruch tritt auf, wenn Anfragen gleichzeitig eintreffen, sodass selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben ist, sie wiederverwendet wird.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie beim Zusammenbruch geteilt wird, sollten Sie die `private`-Direktive hinzufügen:

![Anfrage-Zusammenbruch](request-collapse.png)

## Häufige Caching-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, sie alle zu verstehen. Die meisten Websites können jedoch durch eine Kombination von nur wenigen Mustern abgedeckt werden.

Dieser Abschnitt beschreibt die gängigen Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie bereits erwähnt ist das Standardverhalten beim Caching (d.h. für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern implizites Caching entsprechend dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten einen Standard-`Cache-Control`-Header explizit zu geben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen von Ressourcen übertragen werden, ist es gängige Praxis, den Standardwert von `Cache-Control` auf `no-cache` zu setzen:

```http
Cache-Control: no-cache
```

Wenn der Dienst zusätzlich Cookies oder andere Anmeldemethoden implementiert und die Inhalte für jeden Benutzer personalisiert sind, muss auch `private` hinzugefügt werden, um eine Weitergabe an andere Benutzer zu verhindern:

```http
Cache-Control: no-cache, private
```

### Cache-Busting

Die Ressourcen, die am besten zum Cachen geeignet sind, sind statische unveränderliche Dateien, deren Inhalte sich nie ändern. Und wenn sich Ressourcen _do_ ändern, ist es eine übliche Best Practice, die URL bei jeder Inhaltsänderung zu ändern, sodass die URL-Einheit für einen längeren Zeitraum zwischengespeichert werden kann.

Betrachten Sie als Beispiel das folgende HTML:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

In der modernen Webentwicklung werden JavaScript- und CSS-Ressourcen häufig aktualisiert, wenn die Entwicklung fortschreitet. Außerdem wird die Anzeige beschädigt, wenn die Versionen von JavaScript und CSS, die ein Client verwendet, nicht synchron sind.

Daher macht das obige HTML es schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Sie können jedoch JavaScript und CSS mit URLs bereitstellen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hash-Wert enthalten. Einige der Möglichkeiten, um dies zu tun, sind unten gezeigt.

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

Da der Cache Ressourcen voneinander anhand ihrer URLs unterscheidet, wird der Cache nicht wiederverwendet, wenn sich die URL bei einer Aktualisierung der Ressource ändert.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für eine längere Zeit zwischengespeichert werden. Wie lange sollte die `max-age` sein? Die QPACK-Spezifikation bietet eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Header-Feldern mit Tabellen häufig verwendeter Feldwerte.

Einige häufig verwendete Cache-Header-Werte sind unten gezeigt.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Wenn Sie eine dieser aufgelisteten Optionen wählen, können Sie Werte beim Übertragen über HTTP3 in 1 Byte komprimieren.

Nummern `37`, `38` und `41` beziehen sich auf Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch vorhanden ist, nicht sehr hoch — selbst wenn `max-age` auf 1 Woche gesetzt ist. Daher macht es in der Praxis nicht viel Unterschied, welche Option Sie wählen.

Beachten Sie, dass Nummer `41` die längste `max-age` (1 Jahr) hat, aber mit `public`.

Der `public`-Wert hat die Wirkung, die Speicherung der Antwort zu ermöglichen, auch wenn der `Authorization`-Header vorhanden ist.

> [!NOTE]
> Der `public`-Direktive sollte nur verwendet werden, wenn es erforderlich ist, die Antwort zu speichern, wenn der `Authorization`-Header gesetzt ist.
> Ansonsten ist es nicht erforderlich, da eine Antwort im geteilten Cache gespeichert wird, solange `max-age` gegeben ist.

Wenn die Antwort jedoch mit einfachem Zugriff personalisiert ist, kann das Vorhandensein von `public` Probleme verursachen. Wenn Sie sich darüber Sorgen machen, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

```http
# response for bundle.v123.js

# If you never personalize responses via Authorization
Cache-Control: public, max-age=31536000

# If you can't be certain
Cache-Control: max-age=2592000
```

### Validierung

Vergessen Sie nicht, die `Last-Modified`- und `ETag`-Header festzulegen, sodass Sie eine Ressource beim Neuladen nicht erneut übertragen müssen. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag`-Wert hier kann ein Hash der Datei sein.

```http
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

Zusätzlich kann `immutable` hinzugefügt werden, um eine Validierung beim Neuladen zu verhindern.

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

**Cache-Busting** ist eine Technik, eine Antwort für eine lange Zeit cachebar zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Diese Technik kann auf alle Unterressourcen angewendet werden, wie z.B. Bilder.

> [!NOTE]
> Bei der Bewertung der Verwendung von `immutable` und QPACK:
> Wenn Sie besorgt sind, dass `immutable` den vordefinierten Wert ändert, den QPACK bietet, bedenken Sie, dass
> in diesem Fall der `immutable`-Teil separat kodiert werden kann, indem der `Cache-Control`-Wert in zwei Zeilen aufgeteilt wird — obwohl dies von dem Kodierungsalgorithmus abhängt, den eine bestimmte QPACK-Implementierung verwendet.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Hauptressourcen

Anders als bei Unterressourcen kann Cache-Busting für Hauptressourcen nicht angewendet werden, da ihre URLs nicht auf die gleiche Weise dekoriert werden können wie die URLs von Unterressourcen.

Wenn das folgende HTML selbst gespeichert ist, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt auf der Serverseite aktualisiert wurde.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

Für diesen Fall wäre `no-cache` angemessen — anstelle von `no-store` —, da wir das HTML nicht speichern wollen, sondern es einfach immer auf dem neuesten Stand haben möchten.

Das Hinzufügen von `Last-Modified` und `ETag` ermöglicht es den Clients, bedingte Anfragen zu senden, und ein `304 Not Modified` kann zurückgegeben werden, wenn es keine Aktualisierungen des HTMLs gab:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
```

Diese Einstellung ist für nicht personalisiertes HTML geeignet, aber in einem personalisierten Antwort nach dem Login mit Cookies — vergessen Sie nicht, auch `private` zu spezifizieren:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Das Gleiche kann verwendet werden für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte, deren URLs nicht durch Cache-Busting geändert werden können.

Die meisten Webinhalte lassen sich durch eine Kombination der beiden oben beschriebenen Muster abdecken.

### Mehr über verwaltete Caches

Mit der in den vorherigen Abschnitten beschriebenen Methode können Unterressourcen für eine lange Zeit durch Cache-Busting gespeichert werden, aber Hauptressourcen (die normalerweise HTML-Dokumente sind) können es nicht.

Das Caching von Hauptressourcen ist schwierig, da es mit nur standardmäßigen Direktiven der HTTP-Caching-Spezifikation keinen Weg gibt, Cache-Inhalte aktiv zu löschen, wenn Inhalte auf dem Server aktualisiert werden.

Es ist jedoch möglich, durch Bereitstellung eines verwalteten Caches wie eines CDN oder Service-Workers.

Ein CDN, das Cache-Löschungen über eine API oder Dashboard-Operationen erlaubt, würde eine aggressivere Caching-Strategie ermöglichen, indem die Hauptressource gespeichert und der betreffende Cache nur dann explizit gelöscht wird, wenn auf dem Server eine Aktualisierung erfolgt.

Ein Service-Worker könnte das Gleiche tun, wenn er den Inhalt in der Cache-API löschen könnte, wenn eine Aktualisierung auf dem Server erfolgt.

Weitere Informationen finden Sie in der Dokumentation Ihres CDN und konsultieren Sie die [Service-Worker-Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching-Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
