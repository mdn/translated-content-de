---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
l10n:
  sourceCommit: 968857ebc65f5b151e00433f0c0d890621be95a7
---

{{HTTPSidebar}}

Der HTTP-Header **`Cache-Control`** enthält _Direktiven_ (Anweisungen) in sowohl Anfragen als auch Antworten, die das [Caching](/de/docs/Web/HTTP/Caching) in Browsern und gemeinsamen Caches (z.B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request header")}},
        {{Glossary("Response_header", "Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Cache-Direktiven folgen diesen Regeln:

- Caching-Direktiven sind nicht case-sensitiv. Allerdings wird Kleinschreibung empfohlen, da manche Implementierungen Großbuchstaben nicht erkennen.
- Mehrere Direktiven sind zulässig und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument bereitgestellt wird, wird es durch ein Gleichheitszeichen (`=`) vom Direktivenamen getrennt. Normalerweise sind Argumente für die Direktiven ganze Zahlen und somit nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die Standard-Direktiven von `Cache-Control` auf:

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

Hinweis: Prüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für deren Unterstützung; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Begriffsverzeichnis

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie in nachfolgenden Anfragen wiederzuverwenden. Es kann sich entweder um einen gemeinsamen Cache oder einen privaten Cache handeln.
- Gemeinsamer Cache
  - : Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie für mehrere Benutzer wieder — daher sollten Entwickler vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Cache, der im Client existiert. Es wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cache-fähig ist. Die zwischengespeicherte Antwort wird jedoch nicht immer wie sie ist wiederverwendet. (Normalerweise bedeutet "Cache" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Normalerweise wird die Revalidierung durch eine bedingte Anfrage durchgeführt.
- Frische Antwort
  - : Zeigt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anfragedirektiven.
- Veraltete Antwort
  - : Zeigt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht wie sie ist wiederverwendet werden kann. Der Cache-Speicher ist nicht verpflichtet, veraltete Antworten sofort zu entfernen, da die Revalidierung die Antwort von veraltet zu wieder [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit seit der Generierung einer Antwort. Sie ist ein Kriterium dafür, ob eine Antwort [frisch oder veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die das Caching beeinflussen — sowohl Antwort-Direktiven als auch Anfrage-Direktiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N`-Antwort-Direktive gibt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt bis _N_ Sekunden nach der Generierung der Antwort.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die seit dem Empfang der Antwort verstrichene Zeit ist; es ist die verstrichene Zeit seit der Generierung der Antwort auf dem Ursprungsserver.
Wenn der andere Cache — auf der vom Antwortpfad genommenen Netzwerkroute — die Antwort für 100 Sekunden speichert (angezeigt durch das `Age`-Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Frische-Lebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches sind ermutigt, den Wert so zu behandeln, als wäre er `0` (dies wird im Abschnitt [Berechnung der Frische-Lebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation erwähnt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage`-Antwort-Direktive gibt an, wie lange die Antwort in einem gemeinsamen Cache [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder durch den `Expires`-Header festgelegten Wert für gemeinsame Caches, wenn sie vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache`-Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort vor jeder Wiederverwendung mit dem Ursprungsserver validiert werden muss, selbst wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches beim Wiederverwenden gespeicherter Inhalte immer nach Inhaltsaktualisierungen suchen, ist `no-cache` die zu verwendende Direktive. Sie tut dies, indem sie Caches verpflichtet, jede Anfrage mit dem Ursprungsserver zu revalidieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` ermöglicht es Caches, eine Antwort zu speichern, erfordert jedoch, dass sie vor der Wiederverwendung revalidiert wird. Wenn der Sinn von "nicht cachen", den Sie möchten, tatsächlich "nicht speichern" ist, dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate`-Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wiederverwendet werden kann. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Weiterverwendung beim Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [veraltete Antworten](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) zu wiederverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungsserver revalidiert oder eine 504 (Gateway Timeout)-Antwort wird erzeugt.

#### `proxy-revalidate`

Die `proxy-revalidate`-Antwort-Direktive ist das Äquivalent zu `must-revalidate`, jedoch speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store`-Antwort-Direktive gibt an, dass keine Caches irgendeiner Art (privat oder gemeinsam) diese Antwort speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private`-Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private`-Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach der Anmeldung empfangen werden und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, dann kann diese Antwort in einem gemeinsamen Cache gespeichert werden und am Ende für mehrere Benutzer wiederverwendet werden, was dazu führen kann, dass persönliche Informationen durchsickern.

#### `public`

Die `public`-Antwort-Direktive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization`-Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; die `public`-Direktive wird jedoch dazu führen, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization`-Header. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangsgesteuert ist und grundsätzlich nicht geteilt werden kann, auch wenn sie `max-age` hat.

Sie können die `public`-Direktive verwenden, um diese Einschränkung zu überwinden.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` auch diese Einschränkung aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat, oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, dann müssen Sie `public` nicht verwenden.

#### `must-understand`

Die `must-understand`-Antwort-Direktive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für das Caching auf Basis des Statuscodes versteht.

`must-understand` sollte mit `no-store` für Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit einem Verständnis der Cache-Anforderungen basierend auf seinem Statuscode.

#### `no-transform`

Einige Zwischenstationen transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass jede Zwischenstation (unabhängig davon, ob sie einen Cache implementiert) die Inhalte der Antwort nicht transformieren sollte.

#### `immutable`

Die `immutable`-Antwort-Direktive gibt an, dass die Antwort nicht aktualisiert wird, während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen besteht darin, Versionen/Hashes in ihre URLs aufzunehmen, während die Ressourcen niemals geändert werden - sondern, wenn nötig, die Ressourcen mit neueren Versionen mit neuen Versionsnummern/Hashes _aktualisiert_ werden, sodass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht notwendig, diese Art von statischen Ressourcen zu revalidieren, selbst wenn ein Benutzer den Browser neu lädt, weil sie nie geändert werden.
`immutable` sagt einem Cache, dass die Antwort unveränderlich ist, während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist und vermeidet diese Arten von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und sie auf einen langen `max-age` anwenden, können Sie auch `immutable` hinzufügen, um eine Revalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate`-Antwort-Direktive gibt an, dass der Cache eine veraltete Antwort wieder verwenden könnte, während er sie an einen Cache revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen wiederverwenden, die am folgenden Tag (86400s) gemacht werden, sofern sie die Antwort im Hintergrund revalidieren.

Die Revalidierung führt dazu, dass der Cache wieder [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wird, sodass es für die Clients so aussieht, als wäre er während dieser Zeit immer [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) gewesen — effektiv wird die Verzögerungsstrafe der Revalidierung von ihnen verborgen.

Wenn innerhalb dieses Zeitraums keine Anfrage erfolgt, wird der Cache [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal revalidiert.

#### `stale-if-error`

Die `stale-if-error`-Antwort-Direktive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler erzeugt oder wenn der Fehler lokal erzeugt wird. Hier wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age). Danach wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), kann aber für einen zusätzlichen Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nachdem die stale-if-error-Periode abgelaufen ist, erhält der Client jeden erzeugten Fehler.

### Anfrage-Direktiven

#### `no-cache`

Die `no-cache`-Anfrage-Direktive fordert Caches auf, die Antwort mit dem Ursprungsserver vor der Wiederverwendung zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt es Clients, die aktuellste Antwort anzufordern, auch wenn der Cache eine [frische Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **erzwingen**, neu zu laden.

#### `no-store`

Die `no-store`-Anfrage-Direktive erlaubt es einem Client, dass Caches sich weigern, die Anfrage und die entsprechende Antwort zu speichern — selbst wenn die Antwort des Ursprungsservers hätte gespeichert werden können.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N`-Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort, die auf dem Ursprungsserver innerhalb von _N_ Sekunden erzeugt wurde, erlaubt — wobei _N_ jede nicht-negative ganze Zahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden (berechnet ab `max-age` und dem `Age`-Header) generiert wurde, konnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive zum **Neu-Laden**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, da viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. In letzter Zeit verwenden Browser immer noch `max-age=0` beim "Neu-Laden" — aus Gründen der Abwärtskompatibilität — und verwenden alternativ `no-cache`, um ein "erzwungenes Neu-Laden" zu bewirken.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches sind ermutigt, den Wert so zu behandeln, als wäre er `0`.

#### `max-stale`

Die `max-stale=N`-Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine veraltete Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Ein Beispiel: Eine Anfrage mit dem obigen Header gibt an, dass der Browser eine veraltete Antwort aus dem Cache akzeptieren wird, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver nicht erreichbar ist oder zu langsam ist und können zwischengespeicherte Antworten von Caches akzeptieren, auch wenn sie ein wenig alt sind.

Beachten Sie, dass die wichtigen Browser Anfragen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die `min-fresh=N`-Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die für mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, konnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, sondern auch nicht für eine gewisse Zeit aktualisiert wird.

Beachten Sie, dass die wichtigen Browser Anfragen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Gleiche Bedeutung wie `no-transform` für eine Antwort, jedoch für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden sollte. Wenn ein Cache eine gespeicherte Antwort hat, wird sogar eine veraltete zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Status/504)-Antwort zurückgegeben.

## Anwendungsfälle

### Speichern verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store`-Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet, "es kann gespeichert werden, aber nicht wiederverwendet werden, bevor es validiert wird" — daher ist es nicht dafür gedacht, eine Antwort daran zu hindern, gespeichert zu werden.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Konflikt stehen, sollte die restriktivste Direktive beachtet werden. Daher ist das Beispiel unten im Grunde bedeutungslos, weil `private`, `no-cache`, `max-age=0` und `must-revalidate` im Konflikt mit `no-store` stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Assets mit "Cache-Busting"

Wenn Sie statische Assets mit Versionierungs-/Hashing-Mechanismen erstellen, ist das Hinzufügen einer Version/eines Hashs zum Dateinamen oder zur Abfragezeichenfolge eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheksversion wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich ebenfalls ändern, wenn Sie das Bild bearbeiten. Daher sind diese schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Bedürfnisse durch die Verwendung einer spezifischen, nummerierten Version der Bibliothek und der Einbeziehung des Hashs des Bildes in seine URL adressieren.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, weil der Inhalt niemals geändert wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache-Busting"-Muster bezeichnet.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine Revalidierung verursachen, und der Client wird eine neue Version der HTML-Antwort und statische Assets korrekt empfangen.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basic Authentication oder Digest Authentication kontrolliert wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/`-Dateien für das Speichern in einem gemeinsamen Cache geeignet sind, benötigen Sie auch eine von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Bei Inhalten, die dynamisch generiert werden, oder die statisch sind, aber oft aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht zum Zwischenspeichern bestimmt ist, könnte dies zu einem unerwarteten Ergebnis führen. Der Cache-Speicher darf sie heuristisch zwischenspeichern — wenn Sie also Anforderungen an das Caching haben, sollten Sie diese immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine Revalidierung beim Server, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können — oder wenn der Client bereits eine neue hat, einfach `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen `no-cache`-Direktiven nicht, daher wurde `max-age=0` historisch als Workaround verwendet. Aber nur `max-age=0` könnte dazu führen, dass eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` adressiert das. Deshalb ist das Beispiel unten äquivalent zu `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches auf _zwischenliegenden_ Servern.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass eine Anfrage zum Server gesendet wird. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Site im Browser-Cache zu löschen, also verwenden Sie dies mit Vorsicht.
Beachten Sie, dass dies nicht durch gemeinsame oder zwischenliegende Caches beeinflusst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
- [Caching Tutorial für Web-Autoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching-Best-Practices & Max-Age-Gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 — HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 — HTTP Cache-Control-Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 — HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
