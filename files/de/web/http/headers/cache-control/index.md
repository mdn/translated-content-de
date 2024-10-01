---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
l10n:
  sourceCommit: caffa587676396f62fed17ba53b16e55b0e8caf3
---

{{HTTPSidebar}}

Das **`Cache-Control`** HTTP-Header-Feld enthält _Direktiven_ (Anweisungen) — sowohl in Anfragen als auch in Antworten —, die das [Caching](/de/docs/Web/HTTP/Caching) in Browsern und gemeinsam genutzten Caches (z.B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gelisteter Antwort-Header")}}
      </th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Cache-Direktiven folgen diesen Regeln:

- Caching-Direktiven sind nicht case-sensitiv. Allerdings wird Kleinschreibung empfohlen, da einige Implementierungen Großbuchstaben nicht erkennen.
- Mehrere Direktiven sind zulässig und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben ist, wird es durch ein Gleichheitszeichen (`=`) vom Direktiven-Namen getrennt. Typischerweise sind Argumente für die Direktiven ganze Zahlen und daher nicht in Anführungszeichen gesetzt (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die standardmäßigen `Cache-Control`-Direktiven:

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

Hinweis: Prüfen Sie die [Kompatibilitätstabelle](#/index.html) auf deren Unterstützung; Nutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie bei nachfolgenden Anfragen wiederzuverwenden. Es kann sich um einen gemeinsamen Cache oder einen privaten Cache handeln.
- Gemeinsamer Cache
  - : Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Es speichert eine einzelne Antwort und verwendet sie erneut für mehrere Benutzer — daher sollten Entwickler vermeiden, personalisierte Inhalte zur Speicherung im gemeinsamen Cache zu verwenden.
- Privater Cache
  - : Cache, der im Client existiert. Er wird auch _lokaler Cache_ oder _Browser-Cache_ genannt. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachefähig ist. Die gecachte Antwort wird jedoch nicht immer unverändert wiederverwendet. (In der Regel bedeutet "Cache" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Gecachte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Normalerweise erfolgt die erneute Validierung durch eine bedingte Anfrage.
- Frische Antwort
  - : Gibt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anforderungsdirektiven.
- Veraltete Antwort
  - : Gibt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Der Cache-Speicher muss veraltete Antworten nicht sofort entfernen, da durch eine erneute Validierung die Antwort erneut [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) werden könnte.
- Alter
  - : Die Zeit seit der Erstellung einer Antwort. Es ist ein Kriterium dafür, ob eine Antwort [frisch oder veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

In diesem Abschnitt werden Direktiven aufgelistet, die sich auf das Caching auswirken – sowohl Antwort- als auch Anforderungsdirektiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N` Antwort-Direktive gibt an, dass die Antwort bis zu _N_ Sekunden nach der Erstellung der Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit seit dem Empfang der Antwort ist; es ist die verstrichene Zeit seit der Erstellung der Antwort auf dem Ursprungsserver.
Wenn der andere Cache(s) — auf dem Netzwerkweg der Antwort — die Antwort 100 Sekunden lang speichert (angezeigt durch das `Age`-Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Frische-Lebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl ist (zum Beispiel `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Es wird empfohlen, den Wert so zu behandeln, als ob er `0` wäre (dies wird im Abschnitt [Berechnung der Frische-Lebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation angemerkt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwort-Direktive gibt an, wie lange die Antwort in einem gemeinsamen Cache [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage` Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder den `Expires`-Header angegebenen Wert für gemeinsame Caches, falls vorhanden.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden kann, die Antwort jedoch vor jeder Wiederverwendung mit dem Ursprungsserver validiert werden muss, selbst wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches bei der Wiederverwendung gespeicherter Inhalte immer nach Inhaltsaktualisierungen suchen, ist `no-cache` die zu verwendende Direktive. Sie tut dies, indem sie von Caches verlangt, jede Anfrage mit dem Ursprungsserver zu validieren.

Beachten Sie, dass `no-cache` nicht bedeutet "nicht cachen". `no-cache` erlaubt Caches, eine Antwort zu speichern, erfordert aber, dass sie vor der Wiederverwendung validiert wird. Wenn Sie tatsächlich "nicht speichern" meinen, dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und während der [frischen](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Phase wiederverwendet werden kann. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt Caches, [veraltete Antworten](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) zu wiederverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungsserver validiert oder eine 504 (Gateway Timeout) Antwort wird generiert.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwort-Direktive ist das Äquivalent zu `must-revalidate`, jedoch speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store` Antwort-Direktive gibt an, dass keine Caches jeglicher Art (privat oder gemeinsam) diese Antwort speichern sollen.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerpersonalisierte Inhalte hinzufügen, besonders für Antworten, die nach dem Login empfangen werden, und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem gemeinsamen Cache gespeichert und eventuell für mehrere Benutzer wiederverwendet werden, was zum Leck von persönlichen Informationen führen kann.

#### `public`

Die `public` Antwort-Direktive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization` Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; jedoch wird die `public` Direktive dazu führen, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization` Header. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangskontrolliert ist und grundlegend nicht für gemeinsam genutzte Caches geeignet ist, selbst wenn sie `max-age` hat.

Sie können die `public` Direktive verwenden, um diese Einschränkung zu umgehen.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung ebenfalls umgehen.

Wenn eine Anfrage keinen `Authorization` Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, brauchen Sie `public` nicht zu verwenden.

#### `must-understand`

Die `must-understand` Antwort-Direktive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für das Rückfallverhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` auch vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit einem Verständnis für die Cache-Anforderungen basierend auf ihrem Statuscode.

#### `no-transform`

Einige Vermittler wandeln Inhalte aus verschiedenen Gründen um. Zum Beispiel konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass kein Vermittler (unabhängig davon, ob er einen Cache implementiert) die Antwortinhalte umwandeln sollte.

#### `immutable`

Die `immutable` Antwort-Direktive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Versionen/Hashes in ihre URLs einzufügen und die Ressourcen niemals zu ändern — sondern stattdessen, falls nötig, die Ressourcen mit neueren Versionen zu aktualisieren, die neue Versionsnummern/Hashes haben, so dass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht notwendig, diese Arten von statischen Ressourcen erneut zu validieren, selbst wenn ein Benutzer den Browser neu lädt, weil sie nie geändert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist und vermeidet solche unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und sie auf ein langes `max-age` anwenden, können Sie auch `immutable` hinzufügen, um die erneute Validierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwort-Direktive gibt an, dass der Cache eine veraltete Antwort wiederverwenden könnte, während er sie im Hintergrund validiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) für 7 Tage (604800s).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen, die am folgenden Tag gestellt werden (86400s), wiederverwenden, sofern er die Antwort im Hintergrund validiert.

Die erneute Validierung lässt den Cache wieder [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) werden, so dass es für die Clients so aussieht, als sei er während dieses Zeitraums immer [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age); effektiv werden die Latenzkosten für die erneute Validierung für sie versteckt.

Wenn während dieses Zeitraums keine Anfragen gestellt wurden, wird der Cache [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage validiert normal.

#### `stale-if-error`

Die `stale-if-error` Antwort-Direktive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Fehler von einem Upstream-Server generiert wird, oder wenn der Fehler lokal generiert wird. Hierbei wird jeder Antwort mit einem Statuscode von 500, 502, 503 oder 504 als Fehler betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) für 7 Tage (604800s). Danach wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), kann aber für einen weiteren Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nach dem Ablauf der `stale-if-error` Periode erhält der Client jeden generierten Fehler.

### Anforderungs-Direktiven

#### `no-cache`

Die `no-cache` Anforderungs-Direktive bittet Caches, die Antwort mit dem Ursprungsserver vor der Wiederverwendung zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt es Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **erzwingen neu zu laden**.

#### `no-store`

Die `no-store` Anforderungs-Direktive erlaubt einem Client, Caches aufzufordern, die Anfrage und die entsprechende Antwort nicht zu speichern — selbst wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die auf dem Ursprungsserver innerhalb von _N_ Sekunden generiert wurde — wobei _N_ jede nicht-negative Ganzzahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden (berechnet aus `max-age` und dem `Age`-Header) generiert wurde, konnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für **Neugeladene**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — zur Rückwärtskompatibilität — und alternativ verwenden sie `no-cache`, um ein "erzwinge Neuladen" auszulösen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl ist (zum Beispiel `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Es wird empfohlen, den Wert so zu behandeln, als ob er `0` wäre.

#### `max-stale`

Die `max-stale=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine veraltete Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel zeigt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver ausgefallen ist oder zu langsam ist und zwischengespeicherte Antworten akzeptieren, selbst wenn sie etwas älter sind.

Beachten Sie, dass die großen Browser Anfragen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die für mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, konnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, sondern auch erfordert, dass sie für eine bestimmte Zeit nicht aktualisiert wird.

Beachten Sie, dass die großen Browser Anfragen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Bedeutet dasselbe wie `no-transform` für eine Antwort, aber für eine Anfrage stattdessen.

#### `only-if-cached`

Der Client gibt an, dass eine bereits gecachte Antwort zurückgegeben werden sollte. Wenn ein Cache eine gespeicherte Antwort hat, auch eine veraltete, wird sie zurückgegeben. Wenn keine gecachte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Speicherung verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht wiederverwenden, bevor es validiert wird" — also ist es nicht dazu gedacht, eine Antwort daran zu hindern, gespeichert zu werden.

```http example-bad
Cache-Control: no-cache
```

Theoretisch sollte, wenn Direktiven im Konflikt stehen, die restriktivste Direktive respektiert werden. Das untenstehende Beispiel ist im Wesentlichen bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` in Konflikt stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Assets mit "Cache Busting"

Wenn Sie statische Assets mit Versions-/Hash-Mechanismen erstellen, ist es eine gute Praxis, eine Version/Hash zum Dateinamen oder Abfrage-String hinzuzufügen, um das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheksversion wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich auch ändern, wenn Sie das Bild bearbeiten. Daher sind diese schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Bedürfnisse durch die Verwendung einer spezifischen, nummerierten Version der Bibliothek ansprechen und den Hash des Bildes in seine URL aufnehmen.

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

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache Busting" Muster bezeichnet.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht gecacht wird. `no-cache` könnte eine erneute Validierung verursachen, und der Client erhält korrekt eine neue Version der HTML-Antwort und statischen Assets.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basic Authentication oder Digest Authentication kontrolliert wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/` Dateien geeignet sind, im gemeinsamen Cache gespeichert zu werden, benötigen Sie auch eines von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder die statisch sind, aber oft aktualisiert werden, möchten Sie, dass der Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control` Header hinzufügen, weil die Antwort nicht gecacht werden soll, könnte das ein unerwartetes Ergebnis verursachen. Cache-Speicher dürfen es heuristisch cachen — also wenn Sie Anforderungen an das Caching haben, sollten Sie diese immer explizit im `Cache-Control` Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine Validierung beim Server, so dass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort servieren können — oder wenn der Client bereits eine neue hat, einfach mit `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0 Caches unterstützen keine `no-cache` Direktiven, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) verursachen, die wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` adressiert das. Deshalb ist das untenstehende Beispiel äquivalent zu `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber inzwischen können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Leider gibt es keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne Anfragen an den Server. Es gibt nichts, was ein Server zu diesem Pfad machen könnte.

Alternativ kann `Clear-Site-Data` einen Browser-Cache für eine Site löschen. Aber seien Sie vorsichtig: das löscht jede gespeicherte Antwort für eine Site — und nur in Browsern, nicht für einen gemeinsamen Cache.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
- [Caching-Tutorial für Webautoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age Probleme](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
