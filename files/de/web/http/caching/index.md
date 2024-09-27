---
title: HTTP caching
slug: Web/HTTP/Caching
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

## Übersicht

Der HTTP-Cache speichert eine Antwort, die mit einer Anfrage verknüpft ist, und verwendet die gespeicherte Antwort für nachfolgende Anfragen erneut.

Es gibt mehrere Vorteile der Wiederverwendbarkeit. Erstens, da die Anfrage nicht an den Ursprungsserver gesendet werden muss, gilt: Je näher der Client und der Cache beieinander sind, desto schneller ist die Antwort. Das typischste Beispiel ist, wenn der Browser selbst einen Cache für Browseranfragen speichert.

Außerdem muss der Ursprungsserver eine wiederverwendbare Antwort nicht verarbeiten — er muss die Anfrage also nicht parsen und routen, die Sitzung anhand des Cookies wiederherstellen, die Datenbank nach Ergebnissen abfragen oder die Template-Engine rendern. Das reduziert die Last auf dem Server.

Ein ordnungsgemäßer Betrieb des Caches ist entscheidend für die Gesundheit des Systems.

## Arten von Caches

In der [HTTP Caching](https://httpwg.org/specs/rfc9111.html)-Spezifikation gibt es zwei Haupttypen von Caches: **private Caches** und **gemeinsame Caches**.

### Private Caches

Ein privater Cache ist ein Cache, der an einen bestimmten Client gebunden ist — typischerweise ein Browser-Cache. Da die gespeicherte Antwort nicht mit anderen Clients geteilt wird, kann ein privater Cache eine personalisierte Antwort für diesen Benutzer speichern.

Andererseits, wenn personalisierte Inhalte in einem anderen Cache als einem privaten Cache gespeichert werden, könnten andere Benutzer in der Lage sein, diese Inhalte abzurufen, was zu unbeabsichtigten Informationslecks führen könnte.

Wenn eine Antwort personalisierte Inhalte enthält und Sie die Antwort nur im privaten Cache speichern möchten, müssen Sie eine `private`-Direktive angeben.

Personalisierte Inhalte werden normalerweise durch Cookies gesteuert, aber das Vorhandensein eines Cookies zeigt nicht immer an, dass es privat ist, und daher macht ein Cookie allein die Antwort nicht privat.

### Gemeinsamer Cache

Der gemeinsame Cache befindet sich zwischen dem Client und dem Server und kann Antworten speichern, die unter Benutzern geteilt werden können. Und gemeinsame Caches können weiter in **Proxy-Caches** und **verwaltete Caches** unterteilt werden.

#### Proxy-Caches

Zusätzlich zur Funktion der Zugangskontrolle implementieren einige Proxys das Caching, um den Datenverkehr aus dem Netzwerk zu reduzieren. Dies wird üblicherweise nicht vom Dienstentwickler verwaltet, daher muss es durch entsprechende HTTP-Header usw. kontrolliert werden. In der Vergangenheit haben jedoch veraltete Proxy-Cache-Implementierungen — wie Implementierungen, die den HTTP-Caching-Standard nicht ordnungsgemäß verstehen — häufig Probleme für Entwickler verursacht.

**Kitchen-sink**-Header wie der folgende werden verwendet, um "alte und nicht aktualisierte Proxy-Cache"-Implementierungen zu umgehen, die aktuelle HTTP-Caching-Spezifikations-Direktiven wie `no-store` nicht verstehen.

In den letzten Jahren, da HTTPS häufiger geworden ist und die Kommunikation zwischen Client und Server verschlüsselt ist, können Proxy-Caches auf dem Weg in vielen Fällen nur eine Antwort tunneln und nicht als Cache fungieren. In diesem Szenario besteht daher keine Notwendigkeit, sich über veraltete Proxy-Cache-Implementierungen Sorgen zu machen, die die Antwort nicht einmal sehen können.

Andererseits, wenn ein [TLS](/de/docs/Glossary/TLS)-Proxy in einer Man-in-the-Middle-Art alle Kommunikationen entschlüsselt, indem er ein von der Organisation verwaltetes Zertifikat einer [CA (Zertifizierungsstelle)](/de/docs/Glossary/Certificate_authority) auf dem PC installiert, und Zugriffssteuerung usw. durchführt — ist es möglich, den Inhalt der Antwort zu sehen und sie im Cache zu speichern. Da jedoch [CT (Certificate Transparency)](/de/docs/Web/Security/Certificate_Transparency) in letzter Zeit weit verbreitet ist und einige Browser nur Zertifikate mit einem SCT (Signed Certificate Timestamp) zulassen, erfordert diese Methode die Anwendung einer Unternehmensrichtlinie. In einer solchen kontrollierten Umgebung besteht keine Notwendigkeit, sich Sorgen zu machen, dass der Proxy-Cache "veraltet und nicht aktualisiert" ist.

#### Verwaltete Caches

Verwaltete Caches werden ausdrücklich von Dienstentwicklern eingesetzt, um den Ursprungsserver zu entlasten und Inhalte effizient bereitzustellen. Beispiele hierfür sind Reverse-Proxys, CDNs und Service Worker in Kombination mit der Cache-API.

Die Eigenschaften von verwalteten Caches variieren je nach eingesetztem Produkt. In den meisten Fällen können Sie das Verhalten des Caches durch den `Cache-Control`-Header und Ihre eigenen Konfigurationsdateien oder Dashboards steuern.

Zum Beispiel definiert die HTTP-Caching-Spezifikation im Wesentlichen keine Möglichkeit, einen Cache explizit zu löschen — aber mit einem verwalteten Cache kann die gespeicherte Antwort jederzeit durch Dashboard-Operationen, API-Aufrufe, Neustarts usw. gelöscht werden. Das ermöglicht eine proaktivere Caching-Strategie.

Es ist auch möglich, die Standardprotokolle der HTTP-Caching-Spezifikation zugunsten der expliziten Manipulation zu ignorieren. Beispielsweise kann das Folgende angegeben werden, um sich von einem privaten Cache oder Proxy-Cache abzumelden, während Sie Ihre eigene Strategie anwenden, um nur in einem verwalteten Cache zu speichern.

Zum Beispiel verwendet Varnish Cache VCL (Varnish Configuration Language, eine Art [DSL](/de/docs/Glossary/DSL/Domain_specific_language)), um die Cache-Speicherung zu verwalten, während Service Worker in Kombination mit der Cache-API es Ihnen ermöglichen, diese Logik in JavaScript zu erstellen.

Das bedeutet, dass, wenn ein verwalteter Cache die Direktive `no-store` absichtlich ignoriert, er nicht als "nicht konform" mit dem Standard angesehen werden muss. Was Sie tun sollten, ist, die Verwendung von Kitchen-sink-Headern zu vermeiden, die Dokumentation des von Ihnen verwendeten verwalteten Cache-Mechanismus sorgfältig zu lesen und sicherzustellen, dass Sie den Cache in den von Ihnen gewählten Mechanismen ordnungsgemäß steuern.

Beachten Sie, dass einige CDNs ihre eigenen Header bereitstellen, die nur für dieses CDN wirksam sind (zum Beispiel `Surrogate-Control`). Derzeit wird daran gearbeitet, einen [`CDN-Cache-Control`](https://httpwg.org/specs/rfc9213.html)-Header zu definieren, um diese zu standardisieren.

## Heuristisches Caching

HTTP ist darauf ausgelegt, so viel wie möglich zu cachen, sodass selbst wenn kein `Cache-Control` angegeben wird, Antworten gespeichert und wiederverwendet werden, wenn bestimmte Bedingungen erfüllt sind. Dies wird als **heuristisches Caching** bezeichnet.

Zum Beispiel nehmen wir die folgende Antwort. Diese Antwort wurde zuletzt vor einem Jahr aktualisiert.

Es ist heuristisch bekannt, dass Inhalte, die ein volles Jahr lang nicht aktualisiert wurden, auch eine Zeit lang danach nicht aktualisiert werden. Daher speichert der Client diese Antwort (trotz des Fehlens von `max-age`) und verwendet sie eine Weile erneut. Wie lange die Wiederverwendung erfolgt, hängt von der Implementierung ab, aber die Spezifikation empfiehlt etwa 10 % (in diesem Fall 0,1 Jahr) der Zeit nach dem Speichern.

Das heuristische Caching ist ein Workaround, der vor der weit verbreiteten Unterstützung von `Cache-Control` entstand, und im Grunde sollten alle Antworten explizit einen `Cache-Control`-Header angeben.

## Frische und Veralterung basierend auf dem Alter

Gespeicherte HTTP-Antworten haben zwei Zustände: **frisch** und **veraltet**. Der _frische_ Zustand bedeutet normalerweise, dass die Antwort noch gültig ist und wiederverwendet werden kann, während der _veraltete_ Zustand bedeutet, dass die im Cache gespeicherte Antwort bereits abgelaufen ist.

Das Kriterium zur Bestimmung, wann eine Antwort frisch und wann sie veraltet ist, ist das **Alter**. In HTTP ist das Alter die Zeit, die seit der Erstellung der Antwort vergangen ist. Dies ist ähnlich wie die [TTL](/de/docs/Glossary/TTL) in anderen Caching-Mechanismen.

Nehmen Sie das folgende Beispiel einer Antwort (604800 Sekunden sind eine Woche):

Der Cache, der die Beispielantwort speicherte, berechnet die seit der Erstellung der Antwort vergangene Zeit und verwendet das Ergebnis als Alter der Antwort.

Für die Beispielantwort bedeutet `max-age` das Folgende:

- Wenn das Alter der Antwort _weniger_ als eine Woche beträgt, ist die Antwort _frisch_.
- Wenn das Alter der Antwort _mehr_ als eine Woche beträgt, ist die Antwort _veraltet_.

Solange die gespeicherte Antwort frisch bleibt, wird sie zur Erfüllung von Clientanfragen verwendet.

Wenn eine Antwort in einem gemeinsamen Cache gespeichert wird, ist es möglich, dem Client das Alter der Antwort mitzuteilen. Weiter mit dem Beispiel: Wenn der gemeinsame Cache die Antwort für einen Tag gespeichert hat, sendet der gemeinsame Cache die folgende Antwort auf nachfolgende Clientanfragen.

Der Client, der diese Antwort erhält, stellt fest, dass sie für die verbleibenden 518400 Sekunden frisch ist, den Unterschied zwischen `max-age` und `Age` der Antwort.

## Expires oder max-age

In HTTP/1.0 wurde die Frische durch den `Expires`-Header angegeben.

Der `Expires`-Header gibt die Lebensdauer des Caches unter Verwendung eines expliziten Zeitpunkts an, anstatt eine verstrichene Zeit anzugeben.

Das Zeitformat ist jedoch schwer zu parsen, es wurden viele Implementierungsfehler gefunden, und es ist möglich, Probleme zu verursachen, indem absichtlich die Systemuhr verschoben wird; daher wurde `max-age` — zur Angabe einer verstrichenen Zeit — für `Cache-Control` in HTTP/1.1 übernommen.

Wenn sowohl `Expires` als auch `Cache-Control: max-age` verfügbar sind, wird `max-age` bevorzugt. Es ist daher nicht erforderlich, `Expires` bereitzustellen, da HTTP/1.1 jetzt weit verbreitet ist.

## Vary

Die Art und Weise, wie Antworten voneinander unterschieden werden, basiert im Wesentlichen auf ihren URLs:

| URL                              | Antwortinhalt            |
| -------------------------------- | ------------------------ |
| `https://example.com/index.html` | `<!doctype html>...`     |
| `https://example.com/style.css`  | `body { ...`             |
| `https://example.com/script.js`  | `function main () { ...` |

Aber der Inhalt von Antworten ist nicht immer gleich, auch wenn sie die gleiche URL haben. Besonders wenn Inhaltsaushandlung durchgeführt wird, kann die Antwort vom Server von den Werten der `Accept`, `Accept-Language` und `Accept-Encoding` Anforderungsheader abhängen.

Zum Beispiel ist es unerwünscht, dass für englischen Inhalt, der mit einem `Accept-Language: en` Header zurückgegeben und im Cache gespeichert wurde, die zwischengespeicherte Antwort dann für Anfragen mit einem `Accept-Language: ja` Anforderungsheader wiederverwendet wird. In diesem Fall können Sie die Antworten basierend auf der Sprache getrennt cachen, indem Sie `Accept-Language` zum Wert des `Vary` Headers hinzufügen.

Das führt dazu, dass der Cache auf einer Kombination der URL der Antwort und des `Accept-Language` Anforderungsheaders basiert — anstatt nur auf der URL der Antwort.

| URL                              | `Accept-Language` | Antwortinhalt            |
| -------------------------------- | ----------------- | ------------------------ |
| `https://example.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://example.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://example.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://example.com/script.js`  | `ja-JP`           | `function main () { ...` |

Wenn Sie auch eine Inhaltsoptimierung bereitstellen (zum Beispiel für responsives Design) basierend auf dem User-Agent, könnten Sie versucht sein, `User-Agent` im Wert des `Vary` Headers einzuschließen. Der `User-Agent` Anforderungsheader hat jedoch im Allgemeinen eine sehr große Anzahl von Variationen, was die Wahrscheinlichkeit drastisch reduziert, dass der Cache wiederverwendet wird. Wenn möglich, erwägen Sie stattdessen eine Möglichkeit, das Verhalten basierend auf der Feature-Erkennung zu variieren und nicht basierend auf dem `User-Agent` Anforderungsheader.

Für Anwendungen, die Cookies verwenden, um zu verhindern, dass andere zwischengespeicherte personalisierte Inhalte wiederverwenden, sollten Sie `Cache-Control: private` angeben, anstatt ein Cookie für `Vary` festzulegen.

## Validierung

Veraltete Antworten werden nicht sofort verworfen. HTTP hat einen Mechanismus, um eine veraltete Antwort durch eine Anfrage beim Ursprungsserver in eine frische umzuwandeln. Dies wird **Validierung**, oder manchmal **Revalidierung**, genannt.

Die Validierung erfolgt durch eine **bedingte Anfrage**, die einen `If-Modified-Since` oder `If-None-Match` Anforderungsheader beinhaltet.

### If-Modified-Since

Die folgende Antwort wurde um 22:22:22 generiert und hat eine `max-age` von 1 Stunde, sodass Sie wissen, dass sie bis 23:22:22 frisch ist.

Um 23:22:22 wird die Antwort veraltet und der Cache kann nicht wiederverwendet werden. Also zeigt die folgende Anfrage einen Client, der eine Anfrage mit einem `If-Modified-Since` Anforderungsheader sendet, um den Server zu fragen, ob seit der angegebenen Zeit Änderungen vorgenommen wurden.

Der Server antwortet mit `304 Not Modified`, wenn der Inhalt seit der angegebenen Zeit nicht geändert wurde.

Da diese Antwort nur "keine Änderung" anzeigt, gibt es keinen Antwortinhalt — es gibt nur einen Statuscode — daher ist die Übertragungsgröße extrem klein.

Wenn der Client diese Antwort erhält, stellt er die gespeicherte veraltete Antwort zurück auf frisch und kann sie während der verbleibenden 1 Stunde erneut verwenden.

Der Server kann die Änderungszeit vom Betriebssystem-Dateisystem abrufen, was relativ einfach für den Fall ist, dass statische Dateien bereitgestellt werden. Es gibt jedoch einige Probleme; zum Beispiel ist das Zeitformat komplex und schwer zu parsen, und verteilte Server haben Schwierigkeiten, Datei-Update-Zeiten zu synchronisieren.

Um solche Probleme zu lösen, wurde der `ETag` Antwort-Header als Alternative standardisiert.

### ETag/If-None-Match

Der Wert des `ETag` Antwort-Headers ist ein beliebiger Wert, der vom Server generiert wird. Es gibt keine Einschränkungen, wie der Server den Wert generieren muss, sodass die Server frei sind, den Wert basierend auf beliebigen Mitteln festzulegen — wie einem Hash des Antwortinhalts oder einer Versionsnummer.

Zum Beispiel, wenn ein Hash-Wert für den `ETag` Header verwendet wird und der Hash-Wert der `index.html` Ressource `33a64df5` ist, sieht die Antwort wie folgt aus:

Wenn diese Antwort veraltet ist, nimmt der Client den Wert des `ETag` Antwort-Headers der zwischengespeicherten Antwort und gibt ihn in den `If-None-Match` Anforderungsheader ein, um den Server zu fragen, ob die Ressource verändert wurde:

Der Server wird `304 Not Modified` zurückgeben, wenn der von ihm bestimmte Wert des `ETag` Headers der angeforderten Ressource derselbe ist wie der `If-None-Match` Wert in der Anfrage.

Aber wenn der Server bestimmt, dass die angeforderte Ressource jetzt einen anderen `ETag` Wert haben sollte, wird der Server stattdessen mit `200 OK` und der neuesten Version der Ressource antworten.

> [!NOTE]
> RFC9110 bevorzugt, dass Server sowohl `ETag` als auch `Last-Modified` für eine `200`-Antwort senden, wenn möglich.
> Während der Cache-Revalidierung, wenn sowohl `If-Modified-Since` als auch `If-None-Match` vorhanden sind, dann hat `If-None-Match` Vorrang als der Validator.
> Wenn Sie nur das Caching in Betracht ziehen, könnten Sie denken, dass `Last-Modified` unnötig ist.
> Jedoch ist `Last-Modified` nicht nur für das Caching nützlich; es ist ein Standard-HTTP-Header, der auch von Content-Management-Systemen (CMS) verwendet wird, um die letzte Änderungszeit anzuzeigen, von Crawlern, um die Crawl-Frequenz anzupassen, und für andere verschiedene Zwecke.
> Also, unter Berücksichtigung des gesamten HTTP-Ökosystems, ist es besser, sowohl `ETag` als auch `Last-Modified` bereitzustellen.

### Zwangsrevalidierung

Wenn Sie nicht möchten, dass eine Antwort wiederverwendet wird, sondern stattdessen immer die neuesten Inhalte vom Server abrufen möchten, können Sie die `no-cache` Direktive verwenden, um die Validierung zu erzwingen.

Indem Sie `Cache-Control: no-cache` zur Antwort hinzufügen, zusammen mit `Last-Modified` und `ETag` — wie unten gezeigt — erhält der Client eine `200 OK` Antwort, wenn die angeforderte Ressource aktualisiert wurde, oder erhält ansonsten eine `304 Not Modified` Antwort, wenn die angeforderte Ressource nicht aktualisiert wurde.

Es wird oft gesagt, dass die Kombination von `max-age=0` und `must-revalidate` die gleiche Bedeutung wie `no-cache` hat.

`max-age=0` bedeutet, dass die Antwort sofort veraltet ist, und `must-revalidate` bedeutet, dass sie nicht ohne Revalidierung wiederverwendet werden darf, sobald sie veraltet ist — also scheinen die Semantiken in Kombination dieselben wie `no-cache` zu sein.

Diese Verwendung von `max-age=0` ist jedoch ein Überbleibsel der Tatsache, dass viele Implementierungen vor HTTP/1.1 die `no-cache` Direktive nicht handhaben konnten — und um mit dieser Einschränkung umzugehen, wurde `max-age=0` als Workaround verwendet.

Aber jetzt, da HTTP/1.1-konforme Server weit verbreitet sind, gibt es keinen Grund, diese Kombination von `max-age=0` und `must-revalidate` mehr zu verwenden — stattdessen sollten Sie einfach `no-cache` verwenden.

## Nicht cachen

Die `no-cache` Direktive verhindert nicht das Speichern von Antworten, sondern vielmehr die Wiederverwendung von Antworten ohne Revalidierung.

Wenn Sie nicht möchten, dass eine Antwort in irgendeinem Cache gespeichert wird, verwenden Sie `no-store`.

Im Allgemeinen entspricht eine "nicht cachen"-Anforderung in der Praxis dem folgenden Satz von Umständen:

- Die Antwort soll aus Datenschutzgründen von niemandem außer dem spezifischen Client gespeichert werden.
- Immer aktuelle Informationen bereitstellen wollen.
- Weiß nicht, was in veralteten Implementierungen geschehen könnte.

Unter diesen Umständen ist `no-store` nicht immer die passendste Direktive.

Die folgenden Abschnitte betrachten die Umstände im Detail.

### Nicht mit anderen teilen

Es wäre problematisch, wenn eine Antwort mit personalisierten Inhalten unerwartet für andere Benutzer eines Caches sichtbar wäre.

In einem solchen Fall wird durch die Verwendung der `private` Direktive die personalisierte Antwort nur beim spezifischen Client gespeichert und nicht an andere Benutzer des Caches weitergegeben.

In einem solchen Fall muss auch dann, wenn `no-store` angegeben wird, `private` ebenfalls angegeben werden.

### Jedes Mal aktuelle Inhalte bereitstellen

Die `no-store` Direktive verhindert das Speichern einer Antwort, löscht jedoch nicht jede bereits gespeicherte Antwort für die gleiche URL.

Mit anderen Worten, wenn es eine alte Antwort gibt, die bereits für eine bestimmte URL gespeichert ist, wird durch das Zurückgeben von `no-store` nicht verhindert, dass die alte Antwort erneut verwendet wird.

Eine `no-cache` Direktive zwingt jedoch den Client, bevor er eine zwischengespeicherte Antwort wiederverwendet, eine Validierungsanfrage zu senden.

Wenn der Server keine bedingten Anfragen unterstützt, können Sie den Client dazu zwingen, den Server jedes Mal zu kontaktieren und immer die aktuellste Antwort mit `200 OK` zu erhalten.

### Umgang mit veralteten Implementierungen

Um mit veralteten Implementierungen umzugehen, die `no-store` ignorieren, sehen Sie möglicherweise Kitchen-Sink-Header wie die folgenden.

Es wird [empfohlen](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching), `no-cache` als Alternative zu verwenden, um mit solchen veralteten Implementierungen umzugehen, und es ist kein Problem, wenn `no-cache` von Anfang an angegeben wird, da der Server die Anfrage immer erhält.

Wenn es der gemeinsame Cache ist, über den Sie sich Sorgen machen, können Sie sicherstellen, dass ein unbeabsichtigtes Caching verhindert wird, indem Sie auch `private` hinzufügen.

### Was durch `no-store` verloren geht

Möglicherweise denken Sie, dass das Hinzufügen von `no-store` der richtige Weg wäre, um das Caching zu vermeiden.

Es wird jedoch nicht empfohlen, `no-store` großzügig zu gewähren, da Sie viele Vorteile, die HTTP und Browser bieten, wie den Vor-/Zurück-Cache des Browsers, verlieren.

Um also die Vorteile des vollständigen Funktionsumfangs der Webplattform zu nutzen, sollten Sie bevorzugt `no-cache` in Kombination mit `private` verwenden.

## Neu laden und Zwangsneu laden

Validierung kann sowohl für Anfragen als auch für Antworten durchgeführt werden.

Die Aktionen **Neuladen** und **Zwangsneuladen** sind häufige Beispiele für Validierungen, die von der Browserseite durchgeführt werden.

### Neu laden

Um sich von einem Fensterfehler zu erholen oder die neueste Version der Ressource zu aktualisieren, bieten Browser den Benutzern eine Neuladefunktion an.

Eine vereinfachte Darstellung der HTTP-Anfrage, die während eines Browser-Neuladens gesendet wird, sieht wie folgt aus:

Die Direktive `max-age=0` in der Anfrage gibt "Wiederverwendung von Antworten mit einem Alter von 0 oder weniger" an — daher werden zwischengespeicherte Antworten faktisch nicht wiederverwendet.

Dadurch wird eine Anfrage mit `If-None-Match` und `If-Modified-Since` validiert.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript durch Aufrufen von `fetch()` mit der Cache-Modus-Einstellung `no-cache` reproduziert werden (beachten Sie, dass `reload` nicht der richtige Modus für diesen Fall ist):

### Zwangsneu laden

Browser verwenden `max-age=0` während des Nachladens aus Gründen der Rückwärtskompatibilität — da viele veraltete Implementierungen vor HTTP/1.1 `no-cache` nicht verstanden. In diesem Anwendungsfall ist `no-cache` jedoch in Ordnung, und **Zwangsneu laden** ist eine zusätzliche Möglichkeit, zwischengespeicherte Antworten zu umgehen.

Die HTTP-Anfrage während eines Browser **Zwangsneuladens** sieht wie folgt aus:

Da es sich hierbei nicht um eine bedingte Anfrage mit `no-cache` handelt, können Sie sicher sein, dass Sie ein `200 OK` vom Ursprungsserver erhalten.

Dieses Verhalten ist auch im [Fetch](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch)-Standard definiert und kann in JavaScript durch Aufrufen von `fetch()` mit der Cache-Modus-Einstellung `reload` reproduziert werden (beachten Sie, dass es nicht `force-reload` ist):

### Vermeiden von Revalidierungen

Inhalte, die sich niemals ändern, sollten mit einem langen `max-age` versehen werden, indem Cache-Busting verwendet wird — das heißt, indem eine Versionsnummer, ein Hashwert usw. in die Anfrage-URL aufgenommen wird.

Wenn der Benutzer jedoch neu lädt, wird eine Revalidierungsanfrage gesendet, auch wenn der Server weiß, dass der Inhalt unveränderlich ist.

Um das zu verhindern, kann die `immutable` Direktive verwendet werden, um explizit anzugeben, dass keine Revalidierung erforderlich ist, da sich der Inhalt niemals ändert.

Das verhindert unnötige Revalidierungen während des Nachladens.

Beachten Sie, dass anstatt die Direktive zu implementieren, [Chrome seine Implementierung geändert hat](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html), damit während des Nachladens keine Revalidierung für Unterressourcen durchgeführt wird.

## Gespeicherte Antworten löschen

Es gibt im Grunde keinen Weg, um Antworten zu löschen, die bereits mit einem langen `max-age` gespeichert wurden.

Stellen Sie sich vor, die folgende Antwort von `https://example.com/` wurde gespeichert.

Möglicherweise möchten Sie diese Antwort überschreiben, sobald sie auf dem Server abgelaufen ist, aber es gibt nichts, was der Server tun kann, sobald die Antwort gespeichert ist — da aufgrund des Caching keine Anfragen mehr zum Server gelangen.

Eine der in der Spezifikation erwähnten Methoden ist es, eine Anfrage für die gleiche URL mit einer unsicheren Methode wie `POST` zu senden, aber das ist normalerweise schwierig, absichtlich für viele Clients zu tun.

Es gibt auch eine Spezifikation für einen `Clear-Site-Data: cache` Header und Wert, aber [nicht alle Browser unterstützen ihn](https://groups.google.com/a/mozilla.org/g/dev-platform/c/I939w1yrTp4) — und selbst wenn er verwendet wird, betrifft er nur Browser-Caches und hat keine Auswirkungen auf Zwischencaches.

Daher sollte davon ausgegangen werden, dass jede gespeicherte Antwort für ihre `max-age`-Periode bleiben wird, es sei denn, der Benutzer führt manuell eine Neuladen-, Zwangsneuladen- oder Verlaufslöschaktion durch.

Caching reduziert den Zugriff auf den Server, was bedeutet, dass der Server die Kontrolle über diese URL verliert. Wenn der Server die Kontrolle über eine URL nicht verlieren möchte — zum Beispiel im Fall einer häufig aktualisierten Ressource — sollten Sie `no-cache` hinzufügen, damit der Server immer Anfragen erhält und die beabsichtigten Antworten sendet.

## Anfragenzusammenbruch

Der gemeinsam genutzte Cache befindet sich in erster Linie vor dem Ursprungsserver und soll den Datenverkehr zum Ursprungsserver reduzieren.

Wenn also mehrere identische Anfragen gleichzeitig an einem gemeinsamen Cache ankommen, leitet der Zwischen-Cache eine einzige Anfrage in seinem Namen an den Ursprung weiter und kann dann das Ergebnis für alle Clients wiederverwenden. Dies wird als _**Anfragenzusammenbruch**_ bezeichnet.

Ein Anfragenzusammenbruch tritt auf, wenn Anfragen zur gleichen Zeit eintreffen. Selbst wenn `max-age=0` oder `no-cache` in der Antwort angegeben wird, wird sie wiederverwendet.

Wenn die Antwort für einen bestimmten Benutzer personalisiert ist und Sie nicht möchten, dass sie in einem Zusammenbruch geteilt wird, sollten Sie die `private` Direktive hinzufügen:

## Häufige Caching-Muster

Es gibt viele Direktiven in der `Cache-Control`-Spezifikation, und es kann schwierig sein, alle zu verstehen. Die meisten Websites können jedoch durch eine Kombination weniger Muster abgedeckt werden.

Dieser Abschnitt beschreibt die gängigen Muster beim Entwerfen von Caches.

### Standardeinstellungen

Wie oben erwähnt, ist das Standardverhalten für das Caching (das heißt, für eine Antwort ohne `Cache-Control`) nicht einfach "nicht cachen", sondern implizites Caching entsprechend dem sogenannten "heuristischen Caching".

Um dieses heuristische Caching zu vermeiden, ist es vorzuziehen, allen Antworten standardmäßig einen `Cache-Control`-Header anzugeben.

Um sicherzustellen, dass standardmäßig immer die neuesten Versionen der Ressourcen übertragen werden, ist es gängige Praxis, den Standardwert von `Cache-Control` mit `no-cache` zu versehen:

Zusätzlich, wenn der Dienst Cookies oder andere Anmeldemethoden implementiert und der Inhalt für jeden Benutzer personalisiert ist, muss auch `private` angegeben werden, um das Teilen mit anderen Benutzern zu verhindern:

### Cache-Busting

Die am besten mit Caching arbeitenden Ressourcen sind statische, unveränderliche Dateien, deren Inhalte sich nie ändern. Und für sich ändernde Ressourcen ist es eine übliche Best Practice, die URL jedes Mal zu ändern, wenn sich der Inhalt ändert, damit die URL-Einheit für einen längeren Zeitraum gecacht werden kann.

Betrachten Sie als Beispiel das folgende HTML:

Im modernen Web-Development werden JavaScript- und CSS-Ressourcen häufig aktualisiert, während die Entwicklung voranschreitet. Außerdem, wenn die Versionen von JavaScript- und CSS-Ressourcen, die ein Client verwendet, nicht synchron sind, wird die Anzeige unterbrochen.

Das obige HTML macht es daher schwierig, `bundle.js` und `build.css` mit `max-age` zu cachen.

Daher können Sie das JavaScript und CSS mit URLs versehen, die einen sich ändernden Teil basierend auf einer Versionsnummer oder einem Hashwert enthalten. Einige der Möglichkeiten, dies zu tun, sind unten gezeigt.

Da der Cache Ressourcen basierend auf ihren URLs voneinander unterscheidet, wird der Cache nicht erneut verwendet, wenn sich die URL bei einer Aktualisierung einer Ressource ändert.

Mit diesem Design können sowohl JavaScript- als auch CSS-Ressourcen für lange Zeit gecacht werden. Wie lange sollte `max-age` eingestellt werden? Die QPACK-Spezifikation gibt eine Antwort auf diese Frage.

[QPACK](https://datatracker.ietf.org/doc/html/rfc9204) ist ein Standard zur Komprimierung von HTTP-Headerfeldern, mit Tabellen häufig verwendeter Feldwerte definiert.

Einige häufig verwendete Cache-Header-Werte sind unten gezeigt.

Wenn Sie eine dieser nummerierten Optionen auswählen, können Sie Werte in 1 Byte komprimieren, wenn sie über HTTP3 übertragen werden.

Nummer `37`, `38` und `41` sind für Zeiträume von einer Woche, einem Monat und einem Jahr.

Da der Cache alte Einträge entfernt, wenn neue Einträge gespeichert werden, ist die Wahrscheinlichkeit, dass eine gespeicherte Antwort nach einer Woche noch existiert, nicht so hoch — selbst wenn `max-age` auf 1 Woche gesetzt ist. In der Praxis macht es daher keinen großen Unterschied, welche Sie wählen.

Beachten Sie, dass Nummer `41` die längste `max-age` (1 Jahr) hat, jedoch mit `public`.

Der `public` Wert bewirkt, dass die Antwort gespeichert werden kann, auch wenn der `Authorization` Header vorhanden ist.

Wenn die Antwort mit der Basis-Authentifizierung personalisiert ist, könnte das Vorhandensein von `public` Probleme verursachen. Wenn Sie sich darum Sorgen machen, können Sie den zweitlängsten Wert, `38` (1 Monat), wählen.

### Validierung

Vergessen Sie nicht, die `Last-Modified` und `ETag` Header festzulegen, damit eine Ressource beim Neuladen nicht erneut übermittelt werden muss. Es ist einfach, diese Header für vorgefertigte statische Dateien zu generieren.

Der `ETag` Wert hier kann ein Hash der Datei sein.

Zusätzlich kann `immutable` hinzugefügt werden, um eine Validierung beim Neuladen zu verhindern.

Das kombinierte Ergebnis ist unten gezeigt.

**Cache-Busting** ist eine Technik, eine Antwort über einen langen Zeitraum cache-fähig zu machen, indem die URL geändert wird, wenn sich der Inhalt ändert. Die Technik kann auf alle Unterressourcen angewendet werden, wie zum Beispiel Bilder.

Wenn Sie die Verwendung von `immutable` und QPACK bewerten:
Wenn Sie besorgt sind, dass `immutable` den vordefinierten Wert von QPACK ändert, bedenken Sie, dass
in diesem Fall der `immutable` Teil separat kodiert werden kann, indem der `Cache-Control` Wert auf zwei Zeilen aufgeteilt wird — obwohl dies von dem Kodierungsalgorithmus abhängt, den eine bestimmte QPACK-Implementierung verwendet.

### Hauptressourcen

Im Gegensatz zu Unterressourcen können Hauptressourcen nicht Cache-Busting verwenden, da ihre URLs nicht auf dieselbe Weise dekoriert werden können wie die URLs von Unterressourcen.

Wenn das folgende HTML selbst gespeichert wird, kann die neueste Version nicht angezeigt werden, selbst wenn der Inhalt serverseitig aktualisiert wird.

In diesem Fall wäre `no-cache` angebracht — anstelle von `no-store` —, da wir HTML nicht speichern möchten, sondern nur immer auf dem neuesten Stand sein sollen.

Das Hinzufügen von `Last-Modified` und `ETag` ermöglicht es den Clients, bedingte Anfragen zu senden, und es kann eine `304 Not Modified` Antwort zurückgegeben werden, wenn keine Aktualisierungen des HTMLs stattgefunden haben:

Diese Einstellung eignet sich für nicht personalisiertes HTML, aber für eine Antwort, die mit Hilfe von Cookies personalisiert wird — zum Beispiel nach einem Login —, vergessen Sie nicht, auch `private` anzugeben:

Dasselbe kann auch für `favicon.ico`, `manifest.json`, `.well-known` und API-Endpunkte verwendet werden, deren URLs nicht durch Cache-Busting geändert werden können.

Die meisten Webinhalte können durch eine Kombination der beiden oben beschriebenen Muster abgedeckt werden.

### Mehr über verwaltete Caches

Mit der in den vorherigen Abschnitten beschriebenen Methode können Unterressourcen durch Cache-Busting lange Zeit im Cache gehalten werden, aber Hauptressourcen (die in der Regel HTML-Dokumente sind) nicht.

Das Caching von Hauptressourcen ist schwierig, da es mit Standard-Direktiven aus der HTTP-Caching-Spezifikation keinen Weg gibt, aktiv Cache-Inhalte zu löschen, wenn die Inhalte auf dem Server aktualisiert werden.

Es ist jedoch möglich, indem ein verwalteter Cache wie ein CDN oder ein Service Worker bereitgestellt wird.

Ein CDN, das eine Cache-Bereinigung über eine API oder eine Dashboard-Operation ermöglicht, würde es ermöglichen, eine aggressivere Caching-Strategie zu verfolgen, indem die Hauptressource gespeichert und der betreffende Cache nur dann explizit gelöscht wird, wenn ein Update auf dem Server erfolgt.

Ein Service-Worker könnte dasselbe tun, wenn er die Inhalte in der Cache-API löschen könnte, wenn ein Update auf dem Server erfolgt.

Für weitere Informationen lesen Sie die Dokumentation Ihres CDN und konsultieren Sie die [Service Worker-Dokumentation](/de/docs/Web/API/Service_Worker_API).

## Siehe auch

- [RFC 9111: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://datatracker.ietf.org/doc/html/RFC9111)
- [Caching-Tutorial - Mark Nottingham](https://www.mnot.net/cache_docs/)
