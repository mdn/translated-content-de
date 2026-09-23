---
title: QUERY request method
short-title: QUERY
slug: Web/HTTP/Reference/Methods/QUERY
l10n:
  sourceCommit: 346e46c6e10334bf60df2a0a4ef58ebea4c80a4e
---

Die HTTP-Methode `QUERY` startet eine serverseitige Abfrage. Sie fordert die Zielressource auf, den Anfrageinhalt auf sichere und idempotente Weise zu verarbeiten und das Ergebnis in der Antwort zurückzugeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cachefähig")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        In <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a> erlaubt
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
QUERY <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert zusammen mit den Angaben im {{HTTPHeader("Host")}}-Header die Zielressource, die die Abfrage verarbeitet.
    Bei Anfragen an einen Ursprungsserver ist dies ein absoluter Pfad (z. B. `/path/to/resource`), bei Anfragen an Proxys eine absolute URL (z. B. `https://example.com/path/to/resource`).
- `<query>` {{optional_inline}}
  - : Eine optionale URI-Abfragekomponente, der ein Fragezeichen (`?`) vorangestellt ist.
    Sie hilft dabei, die abgefragte Ressource zu identifizieren; der Anfrageinhalt und sein Medientyp definieren die eigentliche Abfrage.

## Beschreibung

Die Methode `QUERY` fordert die Zielressource auf, eine Abfrage in ihrem eigenen Zuständigkeitsbereich auszuführen und das Ergebnis zurückzugeben. Im Gegensatz dazu fordert {{HTTPMethod("GET")}} eine Repräsentation der Ressource an, die durch den Ziel-URI identifiziert wird.
Der Anfrageinhalt und sein {{HTTPHeader("Content-Type")}} definieren die Abfrage; die Zielressource bestimmt, worauf die Abfrage ausgeführt wird, beispielsweise auf eine Datenbanktabelle, einen Suchindex oder eine über eine API bereitgestellte Sammlung.

Da sich die Abfrage im Anfrageinhalt statt im URI befindet, unterliegt sie nicht den Längen- und Kodierungsbeschränkungen einer URI-Abfragekomponente.
Sie ist außerdem weniger weitgehend offengelegt als eine Abfrage im URI; Einzelheiten finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

`QUERY` ist nicht in jedem Fall ein Ersatz für `GET`.
Wenn eine Abfrage klein genug für den URI ist, bleibt `GET` eine gute Wahl: Die resultierende URL kann ohne zusätzlichen Aufwand als Lesezeichen gespeichert, verlinkt und zwischengespeichert werden.
`QUERY` ist besonders nützlich, wenn die Verwendung eines URI unpraktisch wird, etwa bei großen oder strukturierten Abfragen wie einer SQL-Anweisung oder einem JSONPath-Ausdruck, oder bei Abfragen, die nicht im URI offengelegt werden sollen.

Da `QUERY` Inhalt überträgt, ähnelt es {{HTTPMethod("POST")}}. Anders als `POST` ist es jedoch ausdrücklich {{Glossary("Safe/HTTP", "sicher")}} und {{Glossary("Idempotent", "idempotent")}}.
Ein Client fordert weder eine Änderung der Zielressource an noch erwartet er eine solche. Sie können `QUERY`-Anfragen daher nach einem Verbindungsfehler wiederholen, ohne zusätzliche Auswirkungen befürchten zu müssen.

### Unterstützung ermitteln

Eine Ressource gibt ihre Unterstützung für `QUERY` wie für jede andere Methode über die Methode {{HTTPMethod("OPTIONS")}} und den Antwort-Header {{HTTPHeader("Allow")}} bekannt.

Ein Client könnte die unterstützten Optionen einer Ressource wie folgt abfragen:

```http
OPTIONS /contacts HTTP/1.1
Host: example.org
```

Die Ressource könnte wie folgt antworten, um anzugeben, dass sie `QUERY`-Anfragen akzeptiert:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
```

Ein Client kann die `QUERY`-Anfrage auch senden, ohne zu wissen, ob sie unterstützt wird.
Der Server verarbeitet sie dann entweder oder antwortet mit {{HTTPStatus("405", "405 Method Not Allowed")}} und einem `Allow`-Header, der die unterstützten Methoden auflistet.

Welche Abfrage_formate_ eine Ressource akzeptiert, wird separat über den Antwort-Header {{HTTPHeader("Accept-Query")}} bekannt gegeben.
Der Client kann die akzeptierten Formate aus dem `Accept-Query`-Header auslesen.

Eine Ressource könnte ihre akzeptierten Formate beispielsweise so bekannt geben:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
Accept-Query: application/x-www-form-urlencoded, application/sql
```

Anschließend kann ein Client eine `QUERY`-Anfrage in einem dieser Formate senden:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/sql
Accept: application/json

SELECT surname, email FROM contacts LIMIT 10
```

Alternativ kann der Client die `QUERY`-Anfrage im gewünschten Format senden und die unterstützten Medientypen aus dem {{HTTPHeader("Accept")}}-Header der daraufhin erhaltenen Antwort {{HTTPStatus("415", "415 Unsupported Media Type")}} auslesen.

### Medientypen und Fehlerantworten

Ein Server muss eine `QUERY`-Anfrage zurückweisen, wenn der {{HTTPHeader("Content-Type")}} fehlt oder nicht mit dem Anfrageinhalt übereinstimmt.
Server können den Medientyp nicht aus dem Inhalt selbst ableiten. Die Antwort hängt von der Art des Anfragefehlers ab:

- {{HTTPStatus("400", "400 Bad Request")}}: Die Anfrage enthält keine Angaben zum Medientyp, oder der angegebene Medientyp stimmt nicht mit dem tatsächlichen Inhalt überein.
- {{HTTPStatus("415", "415 Unsupported Media Type")}}: Der Medientyp wird von der Ressource nicht unterstützt. Dazu gehören auch Fälle, in denen der Typ grundsätzlich bekannt ist, für eine Abfrage dieser Ressource aber keine Bedeutung hat.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: Der Medientyp ist bekannt und der Inhalt entspricht ihm, aber die Abfrage selbst kann nicht verarbeitet werden – beispielsweise eine syntaktisch gültige SQL-Abfrage, die eine nicht vorhandene Tabelle benennt.
- {{HTTPStatus("406", "406 Not Acceptable")}}: Der Client hat über {{HTTPHeader("Accept")}} einen Medientyp für die Antwort angefordert, den die Ressource nicht erzeugen kann.

### Äquivalente Ressourcen

Die _äquivalente Ressource_ einer `QUERY`-Anfrage ist eine Ressource, die auf `GET` antwortet und die `QUERY`-Anfrage einschließlich ihres Ziels und ihres Inhalts repräsentiert.
Sie ermöglicht es einem Client, dieselbe Abfrage später mit einer einfachen `GET`-Anfrage zu wiederholen, ohne den Abfrageinhalt erneut zu senden.
Im Grunde ist sie die Ressource, an die sich `QUERY` richtet, wobei der Anfrageinhalt Teil ihrer Identität ist.

Die äquivalente Ressource existiert konzeptionell immer, aber Server müssen ihr keinen URI zuweisen.
Wenn ein Server sie unter einem URI bereitstellt, kann eine erfolgreiche Antwort auf eine `QUERY`-Anfrage über zwei verschiedene Header auf sie und auf eine gespeicherte Kopie des Ergebnisses verweisen:

- {{HTTPHeader("Content-Location")}}: Identifiziert eine Ressource, die **das Ergebnis der gerade ausgeführten Abfrage** enthält.
  Ein `GET` an diesen URI ruft dieselben Ergebnisse erneut ab.
- {{HTTPHeader("Location")}}: Identifiziert die äquivalente Ressource, die **dieselbe Abfrage erneut ausführt**.
  Ein `GET` an diesen URI wiederholt den Vorgang mit den aktuellen Daten, ohne den Abfrageinhalt erneut zu senden. Das Ergebnis kann daher von der ursprünglichen Antwort abweichen.

Es ist nicht garantiert, dass eine der beiden Ressourcen dauerhaft verfügbar ist.
Wenn eine spätere Anfrage an eine dieser Ressourcen fehlschlägt, kann der Client stattdessen die ursprüngliche `QUERY`-Anfrage mit ihrem ursprünglichen Inhalt wiederholen.

Da diese URIs stellvertretend für eine Abfrage stehen, sollte ein Server, der vertrauliche Anfrageinhalte verarbeitet, sie erzeugen, ohne vertrauliche Teile des Inhalts einzubetten.
Andernfalls gelangt die Abfrage wieder in einen URI, wodurch der unter [Sicherheitsaspekte](#sicherheitsaspekte) beschriebene Vorteil der geringeren Offenlegung verloren geht.

### Weiterleitung

Ein Server kann auf `QUERY` indirekt antworten, indem er den Client weiterleitet.
Bei {{HTTPStatus("301", "301 Moved Permanently")}}, {{HTTPStatus("308", "308 Permanent Redirect")}}, {{HTTPStatus("302", "302 Found")}} oder {{HTTPStatus("307", "307 Temporary Redirect")}} wird erwartet, dass der Client eine vergleichbare `QUERY`-Anfrage an den in {{HTTPHeader("Location")}} angegebenen URI sendet.
In der Vergangenheit durften Clients, die einer Weiterleitung mit {{HTTPStatus("301")}} oder {{HTTPStatus("302")}} folgten, eine `POST`-Anfrage in eine `GET`-Anfrage umwandeln.
Dies gilt **nicht** für `QUERY`: Bei allen vier oben genannten Statuscodes bleibt die weitergeleitete Anfrage eine `QUERY`-Anfrage mit demselben Inhalt.

Eine Antwort mit {{HTTPStatus("303", "303 See Other")}} bedeutet, dass die Abfrage stattdessen durch ein einfaches `GET` an den URI in `Location` erfüllt werden kann.
Die `303`-Antwort selbst enthält kein Abfrageergebnis. So kann der Server eine äquivalente Ressource zurückgeben, ohne das Ergebnis unmittelbar zu berechnen.

### Bedingte Anfragen

Die ausgewählte Repräsentation einer `QUERY`-Anfrage ist dieselbe wie bei einem `GET` an ihre äquivalente Ressource.
Eine bedingte `QUERY`-Anfrage verhält sich daher wie erwartet: Die Abfrageergebnisse werden nur zurückgegeben, wenn die Bedingung in Headern wie {{HTTPHeader("If-None-Match")}} oder {{HTTPHeader("If-Modified-Since")}} erfüllt ist. Andernfalls wird {{HTTPStatus("304", "304 Not Modified")}} zurückgegeben.
So kann ein Client eine aufwendige Abfrage erneut ausführen, ohne ein unverändertes Ergebnis nochmals übertragen zu müssen.

### Caching

Antworten auf `QUERY` sind {{Glossary("cacheable", "cachefähig")}}. Der Cache-Schlüssel muss jedoch den Anfrageinhalt und die zugehörigen Metadaten berücksichtigen, da der Anfrage-URI allein die Abfrage nicht mehr identifiziert.
Ein Cache muss daher den gesamten Anfrageinhalt lesen, bevor er eine gespeicherte Antwort zuordnen kann. Das macht das Caching von `QUERY`-Anfragen aufwendiger als das Caching von `GET`-Anfragen.
Server, deren Antworten vom Anfrageinhalt abhängen, geben dies mit dem {{HTTPHeader("Vary")}}-Header an.
`Vary` teilt Caches mit, dass die Antwort von mehr als dem URI abhängt. Im folgenden Beispiel kann eine gespeicherte Antwort nur für eine Anfrage wiederverwendet werden, bei der die Werte der aufgeführten Header-Felder übereinstimmen.

```http
Vary: Accept-Query, Content-Encoding, Content-Type
```

Um ihre Trefferquote zu erhöhen, können Caches semantisch unerhebliche Unterschiede im Anfrageinhalt normalisieren, bevor sie den Schlüssel ableiten, beispielsweise indem sie eine Inhaltskodierung entfernen.
Diese Normalisierung ist nur dann sicher, wenn sie der Art entspricht, wie die Ressource selbst den Inhalt interpretiert.
Ein Cache, der falsch normalisiert oder dessen Normalisierung erheblich von der Interpretation der Ressource abweicht, kann zwei Anfragen fälschlicherweise als gleichwertig behandeln und die falsche Antwort ausliefern.
Ein Client, der eine Normalisierung verhindern muss, kann {{HTTPHeader("Cache-Control")}} mit der Direktive `no-transform` senden. Diese Direktive ist allerdings nur eine Empfehlung.

Wenn eine Antwort einen `Location`-Header enthält, der eine äquivalente Ressource identifiziert, können Clients für spätere Anfragen zu `GET` wechseln und stattdessen das gewöhnliche Caching von `GET`-Anfragen nutzen.

### Sicherheitsaspekte

`QUERY` überträgt seine Eingabe im Anfrageinhalt statt im URI.
Ein URI wird von zwischengeschalteten Systemen eher protokolliert oder anderweitig verarbeitet als der Anfrageinhalt. Wird eine Abfrage aus dem URI verlagert, ist sie daher weniger weitgehend offengelegt.
Aus diesem Grund sollte für vertrauliche Abfragen `QUERY` anstelle von `GET` in Betracht gezogen werden.

Dieser Vorteil bleibt nur erhalten, wenn er auch im übrigen Austausch gewahrt wird. Beachten Sie die oben beschriebenen Einschränkungen für [URIs äquivalenter Ressourcen](#äquivalente_ressourcen) und die [Cache-Normalisierung](#caching).

## Beispiele

### Eine Sammlung abfragen

Die folgende Anfrage fragt eine Kontaktsammlung ab.
Der Anfrageinhalt wählt drei Felder aus, begrenzt die Antwort auf zehn Ergebnisse und filtert Kontakte nach E-Mail-Adresse:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Accept: application/json

select=surname,givenname,email&limit=10&email=%2A%40example.%2A
```

Eine erfolgreiche Antwort enthält das Abfrageergebnis im Antwortinhalt:

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "surname": "Smith",
    "givenname": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenname": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

### Ein Ergebnis wiederverwenden und eine Abfrage wiederholen

Ein Server kann zusammen mit dem Ergebnis sowohl {{HTTPHeader("Content-Location")}} als auch {{HTTPHeader("Location")}} zurückgeben und damit zwei verschiedene per `GET` erreichbare Ressourcen anbieten: eine gespeicherte Kopie dieses Ergebnisses und die [äquivalente Ressource](#äquivalente_ressourcen), die die Abfrage erneut ausführt:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Location: /contacts/stored-results/17
Location: /contacts/stored-queries/42
Last-Modified: Sat, 25 Aug 2012 23:34:45 GMT

[
  {
    "surname": "Smith",
    "givenname": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenname": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

Ein `GET` an den URI in `Content-Location` gibt das gespeicherte Ergebnis dieser bestimmten Abfrage unverändert zurück:

```http
GET /contacts/stored-results/17 HTTP/1.1
Host: example.org
Accept: application/json
```

Ein `GET` an den URI in `Location` führt die Abfrage dagegen erneut aus, sodass das Ergebnis die aktuellen Daten widerspiegelt.
Hier wurde seit der ursprünglichen Anfrage ein Kontakt entfernt. Die Antwort enthält außerdem einen {{HTTPHeader("ETag")}} zur Verwendung in späteren bedingten Anfragen:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Last-Modified: Sun, 17 Nov 2024 16:12:01 GMT
ETag: "42-1"

[
  {
    "surname": "Smith",
    "givenname": "John",
    "email": "smith@example.org"
  }
]
```

Eine anschließende bedingte `GET`-Anfrage mit `If-None-Match: "42-1"` erhält {{HTTPStatus("304", "304 Not Modified")}}, wenn das Ergebnis unverändert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Browser-Kompatibilität ist für diese Methode nicht relevant.
Browser bieten keine spezielle integrierte Unterstützung für `QUERY`: Die Methode wird nicht bei nutzerinitiierten Aktionen wie dem Absenden von HTML-Formularen gesendet, und Browser senden sie auch nicht automatisch als Reaktion auf andere Header oder Mechanismen.

Entwickler können eine `QUERY`-Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) senden.
Beachten Sie, dass `QUERY` nicht zu den CORS-safelisted methods gehört. Cross-Origin-Anfragen lösen daher wie bei anderen nicht einfachen Methoden eine [CORS](/de/docs/Web/HTTP/Guides/CORS)-Preflight-Anfrage mit {{HTTPMethod("OPTIONS")}} aus.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- {{HTTPHeader("Accept-Query")}}
- {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}} und {{HTTPHeader("Location")}}
- {{HTTPHeader("Allow")}}
- {{HTTPHeader("Vary")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
