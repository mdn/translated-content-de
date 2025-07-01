---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

Der HTTP **`Cache-Control`** Header enthält _Direktiven_ (Anweisungen) sowohl in Anfragen als auch in Antworten, die die [Zwischenspeicherung](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsamen Caches (z.B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gelisteter Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cache-Control: <directive>, <directive>, ...
```

Cache-Direktiven folgen diesen Regeln:

- Zwischenspeicherungs-Direktiven sind nicht case-sensitive. Es wird jedoch kleingeschrieben empfohlen, da einige Implementierungen Großbuchstaben-Direktiven nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt sein (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben ist, wird es durch ein Gleichheitszeichen (`=`) vom Namen der Direktive getrennt. Typischerweise sind Argumente für die Direktiven ganze Zahlen und daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die Standard-`Cache-Control`-Direktiven auf:

| Anfrage          | Antwort                  |
| ---------------- | ------------------------ |
| `max-age`        | `max-age`                |
| `max-stale`      | -                        |
| `min-fresh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-store`       | `no-store`               |
| `no-transform`   | `no-transform`           |
| `only-if-cached` | -                        |
| -                | `must-revalidate`        |
| -                | `proxy-revalidate`       |
| -                | `must-understand`        |
| -                | `private`                |
| -                | `public`                 |
| -                | `immutable`              |
| -                | `stale-while-revalidate` |
| `stale-if-error` | `stale-if-error`         |

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für deren Unterstützung; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Wortschatz

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten aufbewahrt, um sie bei nachfolgenden Anfragen wiederzuverwenden. Es kann entweder ein gemeinsamer Cache oder ein privater Cache sein.
- Gemeinsamer Cache
  - : Ein Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie für mehrere Benutzer wieder — daher sollten Entwickler vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Ein Cache, der sich im Client befindet. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort zwischenspeicherbar ist. Die zwischengespeicherte Antwort wird jedoch nicht immer unverändert wiederverwendet. (Gewöhnlich bedeutet "zwischenspeichern" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Normalerweise erfolgt die erneute Validierung durch eine bedingte Anfrage.
- Aktuelle Antwort
  - : Gibt an, dass die Antwort [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von Anforderungs-Direktiven.
- Abgelaufene Antwort
  - : Gibt an, dass die Antwort eine [abgelaufene](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher ist nicht verpflichtet, abgelaufene Antworten sofort zu entfernen, da eine erneute Validierung die Antwort von abgelaufen in wieder [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit, seit eine Antwort erstellt wurde. Es ist ein Kriterium dafür, ob eine Antwort [aktuell oder abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die die Zwischenspeicherung beeinflussen — sowohl Antwort-Direktiven als auch Anforderungs-Direktiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N` Antwort-Direktive gibt an, dass die Antwort bis _N_ Sekunden nach ihrer Erstellung [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit seit dem Empfang der Antwort ist; es ist die verstrichene Zeit seit der Erstellung der Antwort auf dem Ursprungsserver. Wenn also der andere Cache — auf der Netzwerkroute, die die Antwort genommen hat — die Antwort 100 Sekunden speichert (angezeigt durch das `Age`-Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Aktualitätsdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl (zum Beispiel `3599.99`), dann ist das Zwischenspeicherungsverhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als wäre er `0` (dies wird im Abschnitt [Berechnung der Aktualitätsdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation erwähnt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwort-Direktive gibt an, wie lange die Antwort in einem gemeinsamen Cache [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt. Die `s-maxage` Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age` Direktive oder den `Expires` Header angegebenen Wert für gemeinsame Caches, falls vorhanden.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort muss mit dem Ursprungsserver vor jeder Wiederverwendung validiert werden, selbst wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches immer auf Inhaltsaktualisierungen prüfen, während sie gespeicherte Inhalte wiederverwenden, ist `no-cache` die zu verwendende Direktive. Dies geschieht, indem Caches gezwungen werden, jede Anfrage mit dem Ursprungsserver zu validieren.

Beachten Sie, dass `no-cache` nicht "nicht zwischenspeichern" bedeutet. `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert jedoch, dass sie vor der Wiederverwendung validiert wird. Wenn das, was Sie meinen, "nicht speichern" ist, dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und wiederverwendet werden kann, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wird die Antwort [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt Caches, [abgelaufene Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungsserver validiert oder eine 504 (Gateway Timeout) Antwort wird generiert.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwort-Direktive ist das Äquivalent zu `must-revalidate`, allerdings speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store` Antwort-Direktive gibt an, dass keine Caches irgendeiner Art (privat oder gemeinsam) diese Antwort speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach der Anmeldung erhalten werden und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort im gemeinsamen Cache gespeichert und möglicherweise für mehrere Benutzer wiederverwendet werden, was dazu führen kann, dass persönliche Informationen durchsickern.

#### `public`

Die `public` Antwort-Direktive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization` Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; die `public` Direktive wird jedoch solche Antworten im gemeinsamen Cache speichern.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization` Header. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangskontrolliert ist, und sie ist grundlegend nicht für den gemeinsamen Cache geeignet, selbst wenn sie `max-age` hat.

Sie können die `public` Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung ebenfalls aufheben.

Wenn eine Anfrage keinen `Authorization` Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, brauchen Sie `public` nicht zu verwenden.

#### `must-understand`

Die `must-understand` Antwort-Direktive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für die Zwischenspeicherung basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für ein Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort unter Berücksichtigung der Anforderungen der Zwischenspeicherung basierend auf ihrem Statuscode.

#### `no-transform`

Einige Zwischeninstanzen transformieren Inhalte aus verschiedenen Gründen. Zum Beispiel wandeln manche Bilder um, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass keine Zwischeninstanz (unabhängig davon, ob sie einen Cache implementiert) die Antwortinhalte transformieren sollte.

#### `immutable`

Die `immutable` Antwort-Direktive gibt an, dass die Antwort nicht aktualisiert wird, während sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Versionen/Hashes in ihre URLs zu integrieren, während sie die Ressourcen niemals modifizieren — sondern stattdessen die Ressourcen bei Bedarf mit neueren Versionen aktualisieren, die neue Versionsnummern/Hashes haben, so dass ihre URLs unterschiedlich sind. Dies wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber für solche statischen Ressourcen ist es nicht notwendig, erneut zu validieren, auch wenn ein Benutzer den Browser neu lädt, weil sie nie modifiziert werden.
`immutable` zeigt einem Cache an, dass die Antwort unveränderlich ist, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist und vermeidet solche unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und sie auf eine lange `max-age` anwenden, können Sie auch `immutable` hinzufügen, um keine erneute Validierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwort-Direktive gibt an, dass der Cache eine abgelaufene Antwort wiederverwenden könnte, während er sie im Hintergrund neu validiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für Anfragen, die am folgenden Tag (86400s) gemacht werden, wiederverwenden, vorausgesetzt, dass sie die Antwort im Hintergrund neu validieren.

Die erneute Validierung wird dazu führen, dass der Cache wieder [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, so dass es für die Clients so erscheint, als wäre die Antwort während dieses Zeitraums immer [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) gewesen — wodurch die Latenzstrafe für die erneute Validierung vor ihnen verborgen wird.

Wenn während dieses Zeitraums keine Anfrage erfolgt, wird der Cache [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal neu validiert.

#### `stale-if-error`

Die `stale-if-error` Antwort-Direktive gibt an, dass der Cache eine [abgelaufene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler generiert, oder wenn der Fehler lokal erzeugt wird. Hier wird jeder Fehler als eine Antwort mit einem Statuscode von 500, 502, 503 oder 504 angesehen.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann aber bei einem Fehler für einen weiteren Tag (86400s) verwendet werden.

Nach Ablauf des `stale-if-error`-Zeitraums erhält der Client jeden generierten Fehler.

### Anforderungs-Direktiven

#### `no-cache`

Die `no-cache` Anforderungs-Direktive fordert Caches auf, die Antwort mit dem Ursprungsserver vor der Wiederverwendung zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt es Clients, die aktuellste Antwort anzufordern, auch wenn der Cache eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen üblicherweise `no-cache` hinzu, wenn Benutzer eine Seite **erzwingen neuladen**.

#### `no-store`

Die `no-store` Anforderungs-Direktive erlaubt einem Client, von Caches zu verlangen, die Anforderung und die entsprechende Antwort nicht zu speichern — selbst wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die auf dem Ursprungsserver innerhalb von _N_ Sekunden erstellt wurde — wobei _N_ jede nicht-negative ganze Zahl sein kann (einschließlich `0`).

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden erstellt wurde (berechnet aus `max-age` und dem `Age` Header), könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive zum **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Zwischenspeicherimplementierungen `no-cache` nicht unterstützen. Kürzlich benutzen Browser immer noch `max-age=0` beim "Neuladen" — aus Gründen der Rückwärtskompatibilität — und alternativ `no-cache`, um ein "zwangsweises Neuladen" auszulösen.

Wenn der `max-age` Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl (zum Beispiel `3599.99`), dann ist das Zwischenspeicherungsverhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als wäre er `0`.

#### `max-stale`

Die `max-stale=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wenn kein _N_ Wert angegeben ist, akzeptiert der Client eine Antwort, die in jedem Alter abgelaufen ist.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel gibt eine Anforderung mit dem obigen Header an, dass der Browser eine abgelaufene Antwort aus dem Cache akzeptiert, die in der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver ausgefallen oder zu langsam ist und sie zwischengespeicherte Antworten akzeptieren können, selbst wenn sie etwas veraltet sind.

Beachten Sie, dass die großen Browser keine Anfragen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die für mindestens _N_ Sekunden [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` in Caches vor 51 Minuten gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch erfordert, dass sie für einen Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die großen Browser keine Anfragen mit `min-fresh` unterstützen.

#### `no-transform`

Gleiche Bedeutung, die `no-transform` für eine Antwort hat, aber stattdessen für eine Anforderung.

#### `only-if-cached`

Der Client gibt an, dass eine bereits im Cache vorhandene Antwort zurückgegeben werden sollte. Wenn ein Cache eine gespeicherte Antwort hat, selbst eine abgelaufene, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504) Antwort zurückgegeben.

#### `stale-if-error`

Die `stale-if-error` Anforderungs-Direktive gibt an, dass der Browser daran interessiert ist, veraltete Inhalte im Fehlerfall von einem beliebigen Zwischenserver für einen bestimmten Ursprungsserver zu empfangen.
Dies wird von keinem Browser unterstützt (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Anwendungsfälle

### Verhindern der Speicherung

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "sie kann gespeichert werden, aber nicht vor Validierung wiederverwenden" — also ist es nicht dafür gedacht, das Speichern einer Antwort zu verhindern.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Widerspruch stehen, sollte die restriktivste Direktive beachtet werden. Daher ist das folgende Beispiel im Grunde bedeutungslos, weil `private`, `no-cache`, `max-age=0` und `must-revalidate` im Widerspruch zu `no-store` stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Zwischenspeichern von statischen Ressourcen mit "Cache-Busting"

Wenn Sie statische Ressourcen mit Versionierungs-/Hash-Mechanismen aufbauen, ist es eine gute Möglichkeit, eine Version/einen Hash zum Dateinamen oder zur Abfragezeichenfolge hinzuzufügen, um die Zwischenspeicherung zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheksversion wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich auch ändern, wenn Sie das Bild bearbeiten. Daher sind sie schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall können Sie die Anforderungen an die Zwischenspeicherung dadurch erfüllen, dass Sie eine spezifische, nummerierte Version der Bibliothek verwenden und den Hash des Bildes in seine URL aufnehmen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, weil der Inhalt sich niemals ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache-Busting" Muster bezeichnet.

Verwenden Sie `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine erneute Validierung verursachen, und der Client erhält korrekt eine neue Version der HTML-Antwort und statischen Ressourcen.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basic Authentication oder Digest Authentication gesteuert wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/` Dateien geeignet sind, um im gemeinsamen Cache gespeichert zu werden, benötigen Sie auch eine von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder die statisch, aber oft aktualisiert werden, wollen Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie einen `Cache-Control` Header nicht hinzufügen, weil die Antwort nicht zum Zwischenspeichern gedacht ist, könnte das zu einem unerwarteten Ergebnis führen. Cache-Speicher ist erlaubt, dies heuristisch zu zwischenspeichern — daher sollten Sie, wenn Sie irgendwelche Anforderungen an die Zwischenspeicherung haben, diese immer ausdrücklich im `Cache-Control` Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine erneute Validierung beim Server, so dass Sie jedes Mal eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort liefern können — oder wenn der Client bereits eine neue hat, einfach `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0 Caches unterstützen `no-cache` Direktiven nicht, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte dazu führen, dass eine [abgelaufene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` adressiert das. Deshalb ist das folgende Beispiel äquivalent zu `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches auf _Zwischen_-Servern.

Stellen Sie sich vor, dass Clients/Caches eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne Anforderungsflug zum Server. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um alle gespeicherten Antworten für eine Seite im Browser-Cache zu löschen, also verwenden Sie dies mit Vorsicht.
Beachten Sie, dass dies gemeinsame oder zwischengeschaltete Caches nicht beeinflussen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Zwischenspeicherung](/de/docs/Web/HTTP/Guides/Caching)
- [Zwischenspeicherungs-Tutorial für Webautoren und Webmasters](https://www.mnot.net/cache_docs/)
- [Zwischenspeicherungs-Best Practices & Max-Age-Fallstricke](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Zwischenspeicherung](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Erweiterungen für abgelaufene Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
