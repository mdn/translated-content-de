---
title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Header **`Cache-Control`** enthält _Direktiven_ (Anweisungen) sowohl in Anfragen als auch in Antworten, die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsamen Caches (z.B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwortheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwortheader")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Cache-Direktiven folgen diesen Regeln:

- Cache-Direktiven sind nicht case-sensitiv. Es wird jedoch Kleinschreibung empfohlen, da einige Implementierungen Großschreibungsdirektiven nicht erkennen.
- Mehrere Direktiven sind zulässig und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben wird, wird es durch ein Gleichheitszeichen (`=`) vom Namen der Direktive getrennt. Typischerweise sind Argumente von Direktiven ganze Zahlen und daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die Standard-`Cache-Control`-Direktiven auf:

| Anforderung      | Antwort                  |
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

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) um deren Unterstützung zu sehen; Benutzerschnittstellen, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP-)Cache
  - : Eine Implementierung, die Anfragen und Antworten zum Wiederverwenden bei nachfolgenden Anfragen hält. Es kann entweder ein gemeinsamer Cache oder ein privater Cache sein.
- Gemeinsamer Cache
  - : Ein Cache, der zwischen dem ursprünglichen Server und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie mit mehreren Benutzern wieder, daher sollten Entwickler es vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Ein Cache, der im Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Speichern einer Antwort in Caches, wenn die Antwort cachebar ist. Jedoch wird die zwischengespeicherte Antwort nicht immer unverändert wiederverwendet. (Normalerweise bedeutet "Caching", eine Antwort zu speichern.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den ursprünglichen Server fragen, ob die gespeicherte Antwort noch [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Normalerweise erfolgt die Nevalidierung durch eine bedingte Anfrage.
- Aktuelle Antwort
  - : Zeigt an, dass die Antwort [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet in der Regel, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anforderungsdirektiven.
- Veraltete Antwort
  - : Zeigt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet in der Regel, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher sind nicht verpflichtet, veraltete Antworten sofort zu entfernen, da eine Nevalidierung die Antwort wieder von veraltet zu [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit, die seit der Erstellung einer Antwort vergangen ist. Es ist ein Kriterium dafür, ob eine Antwort [aktuell oder veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die das Caching beeinflussen – sowohl Antwortdirektiven als auch Anforderungsdirektiven.

### Antwortdirektiven

#### `max-age`

Die `max-age=N` Antwortdirektive gibt an, dass die Antwort bis zu _N_ Sekunden nach der Erstellung der Antwort [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Zeigt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die seit dem Empfang der Antwort verstrichene Zeit ist; es ist die seit der Erstellung der Antwort auf dem ursprünglichen Server vergangene Zeit.
Wenn der andere Cache(s) — auf der von der Antwort zurückgelegten Netzstrecke — die Antwort 100 Sekunden lang speichert (angezeigt durch das Feld `Age` im Antwortheader), würde der Browser-Cache 100 Sekunden von seiner [Aktualitätsdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ (z.B. `-1`) ist oder kein Ganzzahlwert (z.B. `3599,99`) ist, ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert zu behandeln, als wäre er `0` (dies wird im Abschnitt [Berechnung der Aktualitätsdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation vermerkt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwortdirektive gibt an, wie lange die Antwort in einem gemeinsamen Cache [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder den `Expires`-Header angegebenen Wert für gemeinsame Caches, wenn diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwortdirektive gibt an, dass die Antwort in Caches gespeichert werden kann, die Antwort jedoch vor jeder Wiederverwendung mit dem ursprünglichen Server validiert werden muss, selbst wenn der Cache vom ursprünglichen Server getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches beim Wiederverwenden gespeicherter Inhalte immer nach Inhaltsaktualisierungen suchen, ist `no-cache` die zu verwendende Direktive. Sie tut dies, indem sie von Caches verlangt, jede Anfrage mit dem ursprünglichen Server zu revalidieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert jedoch eine Revalidierung vor der Wiederverwendung. Wenn im Sinne von "nicht cachen" "nicht speichern" gemeint ist, dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate` Antwortdirektive gibt an, dass die Antwort in Caches gespeichert werden und während sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, wiederverwendet werden kann. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem ursprünglichen Server validiert werden.

Typischerweise wird `must-revalidate` zusammen mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [veraltete Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom ursprünglichen Server getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem ursprünglichen Server revalidiert oder eine 504 (Gateway Timeout) Antwort wird generiert.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwortdirektive ist das Äquivalent zu `must-revalidate`, jedoch speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store` Antwortdirektive gibt an, dass keine Caches jeglicher Art (privat oder gemeinsam) diese Antwort speichern sollen.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwortdirektive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokalen Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach dem Login empfangen werden, und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem gemeinsamen Cache gespeichert und letztendlich für mehrere Benutzer wiederverwendet werden, was dazu führen kann, dass persönliche Informationen durchgesickert werden.

#### `public`

Die `public` Antwortdirektive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization`-Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; jedoch wird die `public`-Direktive solche Antworten in einem gemeinsamen Cache speichern lassen.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization`-Header. Dies bedeutet, dass die Antwort zugangskontrolliert für eingeschränkte Benutzer (die Konten haben) ist und sie grundsätzlich nicht gemeinsam gespeichert werden kann, selbst wenn sie `max-age` hat.

Sie können die `public`-Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` ebenfalls diese Einschränkung aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, dann brauchen Sie `public` nicht zu verwenden.

#### `must-understand`

Die `must-understand` Antwortdirektive gibt an, dass ein Cache die Antwort nur dann speichern soll, wenn er die Anforderungen für das Cachen basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für ein Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert es die Antwort mit dem Verständnis der Cache-Anforderungen basierend auf seinem Statuscode.

#### `no-transform`

Einige Zwischenstellen transformieren Inhalte aus verschiedenen Gründen. Zum Beispiel konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhalteanbieter unerwünscht.

`no-transform` gibt an, dass jeder Vermittler (unabhängig davon, ob er einen Cache implementiert) den Inhalt der Antwort nicht transformieren soll.

#### `immutable`

Die `immutable` Antwortdirektive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Versionen/Hashes in ihre URLs einzuschließen, während die Ressourcen nie modifiziert werden - sondern, sofern notwendig, die Ressourcen mit neueren Versionen zu _aktualisieren_, die neue Versionsnummern/Hashes haben, sodass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den ursprünglichen Server. Aber es ist nicht notwendig, diese Arten von statischen Ressourcen zu revalidieren, selbst wenn ein Benutzer den Browser neu lädt, da sie nie modifiziert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, und vermeidet diese Arten unnötiger bedingter Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und es auf einen langen `max-age` anwenden, können Sie auch `immutable` hinzufügen, um die Nevalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwortdirektive gibt an, dass der Cache eine veraltete Antwort wiederverwenden könnte, während er sie zu einem Cache revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort 7 Tage lang (604800s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen, die am folgenden Tag (86400s) gestellt werden, wiederverwenden, sofern sie die Antwort im Hintergrund validieren.

Die Revalidierung macht den Cache wieder [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), sodass es für Clients so aussieht, als wäre es während dieses Zeitraums immer [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) gewesen — und effektiv die Latenzstrafe für die Revalidierung vor ihnen versteckt.

Wenn während dieses Zeitraums keine Anfrage erfolgt, wurde der Cache [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal revalidiert.

#### `stale-if-error`

Die `stale-if-error` Antwortdirektive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein upstream Server einen Fehler erzeugt oder wenn der Fehler lokal erzeugt wird. Hier wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 angesehen.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort 7 Tage lang (604800s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann jedoch für ein weiteres 1 Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nachdem der `stale-if-error`-Zeitraum verstrichen ist, erhält der Client jeden generierten Fehler.

### Anforderungsdirektiven

#### `no-cache`

Die `no-cache` Anforderungsdirektive bittet Caches, die Antwort vor der Wiederverwendung mit dem ursprünglichen Server zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt es Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **neu laden erzwingen**.

#### `no-store`

Die `no-store` Anforderungsdirektive erlaubt es einem Client, Caches aufzufordern, darauf zu verzichten, die Anfrage und die entsprechende Antwort zu speichern — selbst wenn die Antwort des ursprünglichen Servers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anforderungsdirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb _N_ Sekunden auf dem ursprünglichen Server erzeugt wird — wobei _N_ jede nicht-negative ganze Zahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden (berechnet von `max-age` und dem `Age`-Header) generiert wurde, dürfte der Cache diese Antwort nicht wieder verwenden.

Viele Browser nutzen diese Direktive für **neu laden**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser weiterhin `max-age=0` beim "neu laden" — aus Gründen der Abwärtskompatibilität — und alternativ `no-cache`, um ein "neu Laden erzwingen" zu verursachen.

Wenn der `max-age`-Wert negativ (zum Beispiel `-1`) ist oder kein Ganzzahlwert (zum Beispiel `3599,99`) ist, ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert zu behandeln, als wäre er `0`.

#### `max-stale`

Die `max-stale=N` Anforderungsdirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine veraltete Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel gibt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der ursprüngliche Server ausgefallen oder zu langsam ist und zwischengespeicherte Antworten aus Caches akzeptieren, auch wenn diese etwas älter sind.

Beachten Sie, dass die wichtigsten Browser keine Anfragen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anforderungsdirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die für mindestens _N_ Sekunden [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, dürfte der Cache diese Antwort nicht wieder verwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch, dass sie für einen Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die wichtigsten Browser keine Anfragen mit `min-fresh` unterstützen.

#### `no-transform`

Hat dieselbe Bedeutung wie `no-transform` für eine Antwort, aber für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, selbst eine veraltete, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Verhindern des Speicherns

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet, "sie kann gespeichert werden, aber nicht ohne Validierung wiederverwenden" — es ist also nicht, um zu verhindern, dass eine Antwort gespeichert wird.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Widerspruch stehen, sollte die restriktivste Direktive beachtet werden. Das untenstehende Beispiel ist also grundsätzlich bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` im Widerspruch stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Zwischen-Schema-Cache mit "Cache-Busting"

Wenn Sie statische Ressourcen mit Versionierungs-/Hashes-Mechanismen erstellen, ist das Hinzufügen einer Version/eines Hashs zum Dateinamen oder zur Query-Zeichenfolge eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich auch ändern, wenn Sie das Bild bearbeiten. Daher sind diese schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Anforderungen bearbeiten, indem Sie eine spezifische, nummerierte Version der Bibliothek verwenden und den Hash des Bildes in seiner URL einschließen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, weil sich der Inhalt nie ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben und Caches werden nicht wiederverwendet. Dies wird als "Cache-Busting"-Muster bezeichnet.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht im Cache gespeichert wird. `no-cache` könnte eine Nevalidierung verursachen, und der Client wird korrekt eine neue Version der HTML-Antwort und der statischen Ressourcen erhalten.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Vorschriftsmäßiger Authentifizierung (Basic Authentication) oder Prüfender Authentifizierung (Digest Authentication) steht, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/`-Dateien für die Speicherung in einem gemeinsamen Cache geeignet sind, benötigen Sie auch eines von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuellste Inhalte

Für Inhalte, die dynamisch generiert werden oder statisch, aber oft aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht im Cache gespeichert werden soll, könnte dies zu einem unerwarteten Ergebnis führen. Cache-Speicher dürfen sie heuristisch zwischenspeichern — wenn Sie also Anforderungen an das Caching haben, sollten Sie diese immer explizit im `Cache-Control`-Header angeben.

Durch Hinzufügen von `no-cache` zur Antwort wird eine Nevalidierung beim Server ausgelöst, sodass Sie bei jeder Anfrage eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort servieren können — oder wenn der Client bereits eine neue hat, einfach mit `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen keine `no-cache`-Direktiven, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet werden lassen, wenn Caches vom ursprünglichen Server getrennt sind. `must-revalidate` löst das. Deshalb ist das untenstehende Beispiel gleichwertig zu `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber nun können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven für das Löschen bereits gespeicherter Antworten aus Caches auf _Zwischen_-Servern.

Stellen Sie sich vor, Clients/Caches speichern eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad, ohne eine Anfrage an den Server zu senden. Es gibt nichts, was ein Server zu diesem Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Seite im Browser-Cache zu löschen, daher verwenden Sie dies mit Vorsicht.
Beachten Sie, dass dies keine Auswirkungen auf gemeinsame oder Zwischen-Caches hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Web-Autoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & max-age Gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control-Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderbare Antworten](https://httpwg.org/specs/rfc8246.html)
