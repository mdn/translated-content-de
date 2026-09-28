---
title: QUERY request method
short-title: QUERY
slug: Web/HTTP/Reference/Methods/QUERY
l10n:
  sourceCommit: 2a973f388561148f5a8001e572dac8143c5a5914
---

Die HTTP-Methode `QUERY` initiiert eine serverseitige Abfrage. Sie fordert die Zielressource auf, den Anfrageinhalt auf sichere und idempotente Weise zu verarbeiten und das Ergebnis in der Antwort zurückzugeben.

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
        In <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a> zulässig
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
  - : Gibt die Zielressource an, die die Abfrage verarbeitet, zusammen mit den Informationen im {{HTTPHeader("Host")}}-Header.
    Bei Anfragen an einen Ursprungsserver ist dies ein absoluter Pfad (z. B. `/path/to/resource`), bei Anfragen an Proxys eine absolute URL (z. B. `https://example.com/path/to/resource`).
- `<query>` {{optional_inline}}
  - : Eine optionale URI-Abfragekomponente, der ein Fragezeichen (`?`) vorangestellt ist.
    Sie hilft dabei, die abgefragte Ressource zu identifizieren; der Anfrageinhalt und sein Medientyp definieren die eigentliche Abfrage.

## Beschreibung

Die Methode `QUERY` fordert die Zielressource auf, innerhalb ihres Zuständigkeitsbereichs eine Abfrage auszuführen und das Ergebnis zurückzugeben. Im Gegensatz dazu fordert {{HTTPMethod("GET")}} eine Repräsentation der Ressource an, die durch den Ziel-URI identifiziert wird.
Der Anfrageinhalt und sein {{HTTPHeader("Content-Type")}} definieren die Abfrage; die Zielressource bestimmt, worauf die Abfrage ausgeführt wird, beispielsweise auf eine Datenbanktabelle, einen Suchindex oder eine über eine API bereitgestellte Sammlung.

Da die Abfrage im Anfrageinhalt statt im URI übertragen wird, unterliegt sie nicht den Längen- und Kodierungsbeschränkungen einer URI-Abfragekomponente.
Sie wird außerdem weniger breit offengelegt als eine Abfrage im URI; Einzelheiten finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

`QUERY` ist nicht in jedem Fall ein Ersatz für `GET`.
Wenn eine Abfrage klein genug für den URI ist, bleibt `GET` eine gute Wahl: Es erzeugt eine URL, die sich ohne zusätzlichen Aufwand als Lesezeichen speichern, verlinken und zwischenspeichern lässt.
`QUERY` ist besonders nützlich, wenn ein URI unpraktikabel wird, etwa bei großen oder strukturierten Abfragen wie einer SQL-Anweisung oder einem JSONPath-Ausdruck oder bei Abfragen, die nicht im URI offengelegt werden sollen.

Weil `QUERY` Inhalt überträgt, ähnelt es {{HTTPMethod("POST")}}. Anders als `POST` ist es jedoch ausdrücklich {{Glossary("Safe/HTTP", "sicher")}} und {{Glossary("Idempotent", "idempotent")}}.
Ein Client fordert weder eine Änderung der Zielressource an noch erwartet er eine solche. Daher können Sie `QUERY`-Anfragen nach einem Verbindungsfehler wiederholen, ohne zusätzliche Auswirkungen befürchten zu müssen.

### Unterstützung ermitteln

Eine Ressource gibt ihre Unterstützung für `QUERY` wie für jede andere Methode über die Methode {{HTTPMethod("OPTIONS")}} und den Antwort-Header {{HTTPHeader("Allow")}} bekannt.

Ein Client könnte die verfügbaren Optionen einer Ressource wie folgt abfragen:

```http
OPTIONS /contacts HTTP/1.1
Host: example.org
```

Die Ressource könnte wie folgt antworten, um anzugeben, dass sie `QUERY`-Anfragen akzeptiert:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
```

Ein Client kann eine `QUERY`-Anfrage senden, ohne zu wissen, ob sie unterstützt wird.
Der Server verarbeitet sie entweder oder antwortet mit {{HTTPStatus("405", "405 Method Not Allowed")}} und einem `Allow`-Header, der die unterstützten Methoden aufführt.

Welche Abfrage_formate_ eine Ressource akzeptiert, wird gesondert über den Antwort-Header {{HTTPHeader("Accept-Query")}} bekannt gegeben.
Der Client kann die akzeptierten Formate aus dem `Accept-Query`-Header auslesen.

Eine Ressource könnte die akzeptierten Formate beispielsweise wie folgt bekannt geben:

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

Alternativ kann der Client die `QUERY`-Anfrage im gewünschten Format senden und die unterstützten Medientypen aus dem {{HTTPHeader("Accept")}}-Header der resultierenden Antwort {{HTTPStatus("415", "415 Unsupported Media Type")}} auslesen.

### Medientypen und Fehlerantworten

Ein Server muss eine `QUERY`-Anfrage zurückweisen, wenn ihr {{HTTPHeader("Content-Type")}} fehlt oder nicht mit dem Anfrageinhalt übereinstimmt.
Server können den Medientyp nicht aus dem Inhalt selbst erraten. Die Antwort hängt davon ab, welcher Fehler in der Anfrage vorliegt:

- {{HTTPStatus("400", "400 Bad Request")}}: Die Anfrage enthält keine Angaben zum Medientyp oder der angegebene Medientyp stimmt nicht mit dem tatsächlichen Inhalt überein.
- {{HTTPStatus("415", "415 Unsupported Media Type")}}: Der Medientyp wird von der Ressource nicht unterstützt. Dazu zählen auch Fälle, in denen der Typ grundsätzlich verstanden wird, als Abfrage an diese Ressource jedoch keine Bedeutung hat.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: Der Medientyp wird verstanden und der Inhalt entspricht ihm, aber die Abfrage selbst kann nicht verarbeitet werden – beispielsweise eine syntaktisch gültige SQL-Abfrage, die eine nicht vorhandene Tabelle nennt.
- {{HTTPStatus("406", "406 Not Acceptable")}}: Der Client hat über {{HTTPHeader("Accept")}} einen Medientyp für die Antwort angefordert, den die Ressource nicht liefern kann.

### Äquivalente Ressourcen

Die _äquivalente Ressource_ einer `QUERY`-Anfrage ist eine Ressource, die auf `GET` antwortet und die `QUERY`-Anfrage einschließlich ihres Ziels und ihres Inhalts repräsentiert.
Sie ermöglicht es einem Client, dieselbe Abfrage später mit einer einfachen `GET`-Anfrage zu wiederholen, ohne den Abfrageinhalt erneut zu senden.
Im Ergebnis handelt es sich um die Ressource, an die `QUERY` gerichtet ist, wobei der Anfrageinhalt Teil ihrer Identität wird.

Die äquivalente Ressource existiert konzeptionell immer, aber Server müssen ihr keinen URI zuweisen.
Wenn ein Server sie unter einem URI bereitstellt, kann eine erfolgreiche Antwort auf eine `QUERY`-Anfrage über zwei verschiedene Header auf sie und auf eine gespeicherte Kopie des Ergebnisses verweisen:

- {{HTTPHeader("Content-Location")}}: Identifiziert eine Ressource, die **das Ergebnis der gerade ausgeführten Abfrage** enthält.
  Ein `GET` an diesen URI ruft dieselben Ergebnisse erneut ab.
- {{HTTPHeader("Location")}}: Identifiziert die äquivalente Ressource, die **dieselbe Abfrage erneut ausführt**.
  Ein `GET` an diesen URI wiederholt den Vorgang anhand der aktuellen Daten, ohne den Abfrageinhalt erneut zu senden. Das Ergebnis kann daher von der ursprünglichen Antwort abweichen.

Für keine der beiden Ressourcen ist garantiert, dass sie dauerhaft verfügbar ist.
Wenn eine spätere Anfrage an eine davon fehlschlägt, kann der Client stattdessen die ursprüngliche `QUERY`-Anfrage mit ihrem ursprünglichen Inhalt wiederholen.

Da diese URIs stellvertretend für eine Abfrage stehen, sollte ein Server bei vertraulichem Anfrageinhalt sie erzeugen, ohne vertrauliche Teile des Inhalts darin einzubetten.
Andernfalls gelangt die Abfrage wieder in einen URI, wodurch der unter [Sicherheitsaspekte](#sicherheitsaspekte) beschriebene Vorteil hinsichtlich der Offenlegung verloren geht.

### Weiterleitung

Ein Server kann auf `QUERY` indirekt antworten, indem er den Client weiterleitet.
Bei {{HTTPStatus("301", "301 Moved Permanently")}}, {{HTTPStatus("308", "308 Permanent Redirect")}}, {{HTTPStatus("302", "302 Found")}} oder {{HTTPStatus("307", "307 Temporary Redirect")}} soll der Client eine entsprechende `QUERY`-Anfrage an den in {{HTTPHeader("Location")}} angegebenen URI senden.
In der Vergangenheit durften Clients, die einer Weiterleitung mit {{HTTPStatus("301")}} oder {{HTTPStatus("302")}} folgen, eine `POST`-Anfrage in eine `GET`-Anfrage umwandeln.
Das gilt **nicht** für `QUERY`: Bei allen vier genannten Statuscodes bleibt die weitergeleitete Anfrage eine `QUERY`-Anfrage mit demselben Inhalt.

Eine Antwort mit {{HTTPStatus("303", "303 See Other")}} bedeutet, dass die Abfrage stattdessen durch ein einfaches `GET` an den URI in `Location` beantwortet werden kann.
Die `303`-Antwort selbst enthält kein Abfrageergebnis. So kann der Server eine äquivalente Ressource angeben, ohne das Ergebnis direkt in dieser Antwort zu berechnen.

### Bedingte Anfragen

Die ausgewählte Repräsentation einer `QUERY`-Anfrage ist dieselbe wie bei einem `GET` an ihre äquivalente Ressource.
Eine bedingte `QUERY`-Anfrage verhält sich daher wie erwartet: Die Abfrageergebnisse werden nur zurückgegeben, wenn die Bedingung in Headern wie {{HTTPHeader("If-None-Match")}} oder {{HTTPHeader("If-Modified-Since")}} erfüllt ist; andernfalls wird {{HTTPStatus("304", "304 Not Modified")}} zurückgegeben.
So kann ein Client eine aufwendige Abfrage erneut ausführen, ohne ein unverändertes Ergebnis erneut übertragen zu müssen.

### Caching

Antworten auf `QUERY` sind {{Glossary("cacheable", "cachefähig")}}. Der Cache-Schlüssel muss jedoch den Anfrageinhalt und die zugehörigen Metadaten berücksichtigen, da der Anfrage-URI allein die Abfrage nicht mehr identifiziert.
Ein Cache muss daher den gesamten Anfrageinhalt lesen, bevor er ihn einer gespeicherten Antwort zuordnen kann. Das macht das Caching von `QUERY`-Anfragen aufwendiger als das von `GET`-Anfragen.
Server, deren Antworten vom Anfrageinhalt abhängen, geben dies mit dem Header {{HTTPHeader("Vary")}} an.
`Vary` teilt Caches mit, dass die Antwort von mehr als dem URI abhängt. Im folgenden Beispiel darf eine gespeicherte Antwort nur für eine Anfrage wiederverwendet werden, deren Werte der aufgeführten Header-Felder übereinstimmen.

```http
Vary: Accept-Query, Content-Encoding, Content-Type
```

Um ihre Trefferquote zu erhöhen, können Caches semantisch unerhebliche Unterschiede im Anfrageinhalt normalisieren, bevor sie den Schlüssel ableiten, etwa indem sie eine Inhaltskodierung entfernen.
Diese Normalisierung ist nur dann sicher, wenn sie der Art entspricht, wie die Ressource selbst den Inhalt interpretiert.
Ein Cache, der falsch oder deutlich anders als die Ressource normalisiert, kann zwei Anfragen fälschlich als gleichwertig behandeln und die falsche Antwort ausliefern.
Ein Client, der eine Normalisierung verhindern muss, kann {{HTTPHeader("Cache-Control")}} mit der Direktive `no-transform` senden; die Direktive hat allerdings nur Empfehlungscharakter.

Wenn eine Antwort einen `Location`-Header mit einer äquivalenten Ressource enthält, können Clients für spätere Anfragen zu `GET` wechseln und stattdessen das gewöhnliche `GET`-Caching nutzen.

### Sicherheitsaspekte

`QUERY` überträgt die Eingabe im Anfrageinhalt statt im URI.
Ein URI wird von Vermittlern eher protokolliert oder anderweitig verarbeitet als der Anfrageinhalt. Eine Abfrage aus dem URI herauszunehmen, verringert daher, wie weit sie offengelegt wird.
Aus diesem Grund sollte für vertrauliche Abfragen `QUERY` anstelle von `GET` in Betracht gezogen werden.

Dieser Vorteil bleibt nur bestehen, wenn der übrige Austausch ihn wahrt. Beachten Sie die oben beschriebenen Einschränkungen für [URIs äquivalenter Ressourcen](#äquivalente_ressourcen) und die [Cache-Normalisierung](#caching).

## Beispiele

### Eine Sammlung abfragen

Die folgende Anfrage fragt eine Kontaktsammlung ab.
Der Anfrageinhalt wählt drei Felder aus, begrenzt die Antwort auf zehn Ergebnisse und filtert Kontakte anhand ihrer E-Mail-Adresse:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Accept: application/json

select=surname,givenName,email&limit=10&email=%2A%40example.%2A
```

Eine erfolgreiche Antwort enthält das Abfrageergebnis im Antwortinhalt:

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenName": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

### Ein Ergebnis wiederverwenden und eine Abfrage wiederholen

Ein Server kann zusammen mit dem Ergebnis sowohl {{HTTPHeader("Content-Location")}} als auch {{HTTPHeader("Location")}} zurückgeben und damit zwei verschiedene über `GET` erreichbare Ressourcen anbieten: eine gespeicherte Kopie dieses Ergebnisses und die [äquivalente Ressource](#äquivalente_ressourcen), die die Abfrage erneut ausführt:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Location: /contacts/stored-results/17
Location: /contacts/stored-queries/42
Last-Modified: Sat, 25 Aug 2012 23:34:45 GMT

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenName": "Sally",
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
Hier wurde seit der ursprünglichen Anfrage ein Kontakt entfernt. Die Antwort enthält außerdem einen {{HTTPHeader("ETag")}} für spätere bedingte Anfragen:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Last-Modified: Sun, 17 Nov 2024 16:12:01 GMT
ETag: "42-1"

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  }
]
```

Eine anschließende bedingte `GET`-Anfrage mit `If-None-Match: "42-1"` erhält {{HTTPStatus("304", "304 Not Modified")}}, wenn das Ergebnis unverändert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Browser-Kompatibilität ist für diese Methode nicht relevant.
Browser bieten keine spezielle Integration für `QUERY`: Die Methode wird nicht bei nutzerinitiierten Aktionen wie dem Absenden von HTML-Formularen verwendet, und Browser senden sie nicht automatisch als Reaktion auf andere Header oder Mechanismen.

Entwickler können eine `QUERY`-Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) senden.
Da `QUERY` nicht zu den CORS-safelisted methods gehört, lösen Cross-Origin-Anfragen wie bei anderen nicht einfachen Methoden eine [CORS](/de/docs/Web/HTTP/Guides/CORS)-Preflight-Anfrage mit {{HTTPMethod("OPTIONS")}} aus.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- {{HTTPHeader("Accept-Query")}}
- {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}} und {{HTTPHeader("Location")}}
- {{HTTPHeader("Allow")}}
- {{HTTPHeader("Vary")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
