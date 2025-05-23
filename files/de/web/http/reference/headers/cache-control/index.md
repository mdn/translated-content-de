---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Cache-Control`**-Header enthält _Direktiven_ (Anweisungen) in sowohl Anfragen als auch Antworten, die [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsamen Caches (z.B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

Cache-Direktiven folgen diesen Regeln:

- Caching-Direktiven sind nicht case-sensitiv. Dennoch wird empfohlen, sie in Kleinbuchstaben zu schreiben, da einige Implementierungen Großbuchstaben-Direktiven nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt sein (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben ist, wird es durch ein Gleichheitszeichen (`=`) vom Direktivennamen getrennt. Üblicherweise sind Argumente für die Direktiven ganze Zahlen und werden daher nicht von Anführungszeichen umschlossen (z.B. `Cache-control: max-age=12`).

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

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität), um deren Unterstützung zu sehen; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP-)Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie in nachfolgenden Anfragen wiederzuverwenden. Es kann sich um einen gemeinsamen Cache oder einen privaten Cache handeln.
- Gemeinsamer Cache
  - : Ein Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie für mehrere Nutzer wieder — daher sollten Entwickler vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Ein Cache, der im Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Nutzer speichern und wiederverwenden.
- Antwort speichern
  - : Speichern einer Antwort in Caches, wenn die Antwort cachefähig ist. Allerdings wird die gecachte Antwort nicht immer unverändert wiederverwendet. (Normalerweise bedeutet "Cache", eine Antwort zu speichern.)
- Antwort wiederverwenden
  - : Wiederverwenden von gecachten Antworten für nachfolgende Anfragen.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Üblicherweise wird die Revalidierung über eine konditionale Anfrage durchgeführt.
- Frische Antwort
  - : Indiziert, dass die Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anfragedirektiven.
- Veraltete Antwort
  - : Indiziert, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher ist nicht verpflichtet, veraltete Antworten sofort zu entfernen, da die Revalidierung die Antwort von veraltet zu wieder [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit, die seit der Erstellung einer Antwort vergangen ist. Es ist ein Kriterium dafür, ob eine Antwort [frisch oder veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die Caching beeinflussen - sowohl Antwort-Direktiven als auch Anfrage-Direktiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N`-Antwortdirektive gibt an, dass die Antwort _N_ Sekunden nach der Generierung [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Zeigt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die Zeit ist, die seit dem Empfang der Antwort verstrichen ist; es ist die Zeit, die seit der Generierung der Antwort auf dem Ursprungsserver verstrichen ist.
Wenn der andere Cache(s) — auf der durch die Antwort genommenen Netzwerkroute — die Antwort für 100 Sekunden speichert (angezeigt mittels des `Age`-Antwort-Header-Feldes), würde der Browser-Cache 100 Sekunden von seiner [Frischezeit](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel, `-1`) oder keine ganze Zahl ist (zum Beispiel, `3599.99`), dann ist das Caching-Verhalten nicht definiert. Caches werden ermutigt, den Wert zu behandeln, als wäre er `0` (dies ist in dem [Berechnen der Frischelebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime)-Abschnitt der HTTP-Spezifikation vermerkt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage`-Antwortdirektive gibt an, wie lange die Antwort in einem gemeinsamen Cache [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder den `Expires`-Header für gemeinsame Caches festgelegten Wert, falls diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache`-Antwortdirektive zeigt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort muss vor jeder Wiederverwendung mit dem Ursprungsserver validiert werden, auch wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches beim Wiederverwenden gespeicherter Inhalte immer auf Inhaltsaktualisierungen überprüfen, ist `no-cache` die zu verwendende Direktive. Dies geschieht, indem Caches angewiesen werden, jede Anfrage mit dem Ursprungsserver zu revalidieren.

Beachten Sie, dass `no-cache` nicht bedeutet "nicht cachen". `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert jedoch eine Revalidierung vor der Wiederverwendung. Wenn der Sinn von "nicht cachen", den Sie möchten, tatsächlich "nicht speichern" ist, dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate`-Antwortdirektive zeigt an, dass die Antwort in Caches gespeichert und während sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist wiederverwendet werden kann. Wird die Antwort [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Normalerweise wird `must-revalidate` zusammen mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [veraltete Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungsserver revalidiert oder eine 504 (Gateway Timeout) Antwort wird generiert.

#### `proxy-revalidate`

Die `proxy-revalidate`-Antwortdirektive ist das Äquivalent zu `must-revalidate`, aber speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store`-Antwortdirektive zeigt an, dass keine Caches jeglicher Art (privat oder gemeinsam) diese Antwort speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private`-Antwortdirektive zeigt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private`-Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach dem Login empfangen werden und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem gemeinsamen Cache gespeichert werden und am Ende für mehrere Benutzer wiederverwendet werden, was dazu führen kann, dass persönliche Informationen auslaufen.

#### `public`

Die `public`-Antwortdirektive zeigt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization`-Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; jedoch bewirkt die `public`-Direktive, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization`-Header. Dies bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangskontrolliert ist und grundsätzlich nicht gemeinsam cachefähig ist, selbst wenn es `max-age` hat.

Sie können die `public`-Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung ebenfalls aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, dann brauchen Sie `public` nicht zu verwenden.

#### `must-understand`

Die `must-understand`-Antwortdirektive besagt, dass ein Cache die Antwort nur speichern soll, wenn er die Anforderungen für das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte für ein Fallback-Verhalten mit `no-store` gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert es die Antwort mit einem Verständnis der Cache-Anforderungen basierend auf seinem Statuscode.

#### `no-transform`

Einige Vermittler transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass jeder Vermittler (unabhängig davon, ob er einen Cache implementiert) die Antwortinhalte nicht transformieren sollte.

#### `immutable`

Die `immutable`-Antwortdirektive zeigt an, dass die Antwort nicht aktualisiert wird, während sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Versionsnummern/Hashes in ihre URLs aufzunehmen und die Ressourcen niemals zu ändern - sondern stattdessen, wenn nötig, die Ressourcen mit neueren Versionen zu aktualisieren, die neue Versionsnummern/Hashes haben, so dass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht notwendig, diese Arten von statischen Ressourcen sogar bei einem Browser-Reload zu revalidieren, weil sie nie modifiziert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, während sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, und vermeidet solche Arten von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und sie auf einen langen `max-age` anwenden, können Sie auch `immutable` hinzufügen, um Revalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate`-Antwortdirektive gibt an, dass der Cache eine veraltete Antwort erneut verwenden könnte, während er sie im Hintergrund revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen, die am folgenden Tag (86400s) gestellt werden, wiederverwenden, vorausgesetzt, dass sie die Antwort im Hintergrund revalidieren.

Die Revalidierung wird den Cache wieder [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) machen, so dass es den Clients erscheint, als ob es während dieses Zeitraums immer [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) gewesen wäre - was die Latenzstrafe der Revalidierung effektiv vor ihnen verbirgt.

Wenn in diesem Zeitraum keine Anfrage erfolgt, wird der Cache [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal revalidiert.

#### `stale-if-error`

Die `stale-if-error`-Antwortdirektive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler generiert oder wenn der Fehler lokal generiert wird. Hier wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann jedoch für einen zusätzlichen Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nach dem Ablauf der `stale-if-error`-Periode wird der Client jeden generierten Fehler erhalten.

### Anfrage-Direktiven

#### `no-cache`

Die `no-cache`-Anfragedirektive fordert Caches auf, die Antwort vor der Wiederverwendung mit dem Ursprungsserver zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` ermöglicht es Clients, die aktuellste Antwort anzufordern, auch wenn der Cache eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **zwingend neu laden**.

#### `no-store`

Die `no-store`-Anfragedirektive erlaubt einem Client, Caches aufzufordern, den Antrag und die entsprechende Antwort nicht zu speichern — selbst wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N`-Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden auf dem Ursprungsserver generiert wurde — wobei _N_ eine nicht-negative ganze Zahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden erstellt wurde (berechnet aus `max-age` und dem `Age`-Header), könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive zum **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — aus Gründen der Abwärtskompatibilität — und verwenden alternativ `no-cache`, um ein "Zwangs-Neuladen" zu verursachen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel, `-1`) oder keine ganze Zahl ist (zum Beispiel, `3599.99`), dann ist das Caching-Verhalten nicht definiert. Caches werden ermutigt, den Wert zu behandeln, als wäre er `0`.

#### `max-stale`

Die `max-stale=N`-Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) innerhalb von _N_ Sekunden sein kann.
Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine veraltete Antwort jeglichen Alters.

```http
Cache-Control: max-stale=3600
```

Beispielsweise zeigt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver nicht erreichbar oder zu langsam ist und akzeptieren können, dass gecachte Antworten aus Caches verwendet werden, selbst wenn sie etwas älter sind.

Beachten Sie, dass die großen Browser Anfragen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die `min-fresh=N`-Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die für mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch dass sie für einen Zeitraum von Zeit nicht aktualisiert wird.

Beachten Sie, dass die großen Browser Anfragen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Gleiche Bedeutung, die `no-transform` für eine Antwort hat, aber stattdessen für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits gecachte Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, auch wenn sie veraltet ist, wird sie zurückgegeben. Wenn keine gecachte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Speicherung verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store`-Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht wiederverwenden, bevor es validiert wurde" — also ist es nicht geeignet, um zu verhindern, dass eine Antwort gespeichert wird.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven in Konflikt stehen, sollte die restriktivste Direktive beachtet werden. Das untenstehende Beispiel ist daher im Grunde bedeutungslos, weil `private`, `no-cache`, `max-age=0` und `must-revalidate` im Konflikt mit `no-store` stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Cachen von statischen Ressourcen mit "Cache Busting"

Wenn Sie statische Ressourcen mit Versionierungs-/Hashingmechanismen erstellen, ist es eine gute Möglichkeit, eine Version/Hash zum Dateinamen oder zum Abfrage-String hinzuzufügen, um das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek ändert sich, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird ebenfalls geändert, wenn Sie das Bild bearbeiten. Daher sind diese schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Anforderungen des Cachings durch die Verwendung einer bestimmten, nummerierten Version der Bibliothek ansprechen und den Hash des Bildes in seine URL einfügen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, da sich der Inhalt nie ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte neuer Inhalt eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache-Busting"-Muster bezeichnet.

Verwenden Sie einen `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht gecacht wird. `no-cache` könnte eine Revalidierung verursachen, und der Client wird korrekt eine neue Version der HTML-Antwort und statischen Ressourcen erhalten.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basic Authentication oder Digest Authentication gesteuert wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/`-Dateien geeignet sind, im gemeinsamen Cache gespeichert zu werden, benötigen Sie auch eine von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder statisch sind, aber oft aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht gecacht werden soll, könnte dies ein unerwartetes Ergebnis verursachen. Der Cache-Speicher darf es heuristisch cachen — also, wenn Sie irgendwelche Anforderungen an das Caching haben, sollten Sie sie immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort führt zur Revalidierung beim Server, so dass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort liefern können – oder wenn der Client bereits eine neue hat, einfach `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen keine `no-cache`-Direktiven, also wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte verursachen, dass eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` adressiert das. Deshalb ist das untenstehende Beispiel äquivalent zu `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber für jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches auf _intermediäre_ Servern.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne einen Anforderungsflug zum Server. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Site im Browser-Cache zu löschen, also verwenden Sie dies mit Vorsicht.
Beachten Sie, dass dies nicht den gemeinsamen oder intermediären Cache beeinflussen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Web-Autoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age-Fallstricke](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilpersonen](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control-Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP-Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
