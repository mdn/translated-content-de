---
title: POST
slug: Web/HTTP/Reference/Methods/POST
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Die **`POST`** HTTP-Methode sendet Daten an den Server. Der Typ des Anfragetextes wird durch den {{HTTPHeader("Content-Type")}}-Header angegeben.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` ist, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: Ein einmaliger Aufruf unterscheidet sich nicht von mehreren aufeinanderfolgenden Aufrufen (es gibt keine _Seiteneffekte_). Aufeinanderfolgende identische `POST`-Anfragen können zusätzliche Effekte haben, wie etwa dass die gleiche Bestellung mehrmals erstellt wird.

[HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) senden typischerweise Daten unter Verwendung von `POST`, was normalerweise zu einer Änderung auf dem Server führt. Für HTML-Formulare wird das Format/die Kodierung des Anfragetextes durch das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements oder des [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype)-Attributs der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente bestimmt. Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: Die Schlüssel und Werte werden in Schlüssel-Wert-Tupeln kodiert, die durch ein kaufmännisches Und-Zeichen (`&`) getrennt sind, mit einem Gleichheitszeichen (`=`) zwischen dem Schlüssel und dem Wert (z. B. `first-name=Frida&last-name=Kahlo`). Nicht-alphanumerische Zeichen in sowohl Schlüsseln als auch Werten werden {{Glossary("Percent-encoding", "prozentkodiert")}}: Dies ist der Grund, warum dieser Typ nicht geeignet ist, um mit Binärdaten verwendet zu werden, und `multipart/form-data` hierfür genutzt werden sollte.
- `multipart/form-data`: Jeder Wert wird als Datenblock („Body-Part“) gesendet, mit einem von der Benutzer-Agent definierten Trennzeichen (zum Beispiel `boundary="delimiter12345"`) zur Trennung jedes Teils. Die Schlüssel werden im {{HTTPHeader("Content-Disposition")}}-Header eines jeden Teils oder Datenblocks beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage nach einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf gesendet wird oder aus einem anderen Grund als einem HTML-Formular, kann der Anfragetext jeglicher Typ sein. Wie in der HTTP 1.1-Spezifikation beschrieben, ist `POST` so konzipiert, dass eine einheitliche Methode für die folgenden Funktionen bereitgestellt wird:

- Annotation bestehender Ressourcen
- Posten einer Nachricht auf einem Schwarzen Brett, Newsgroup, Mailingliste oder ähnlicher Artikelgruppe
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellen eines Datenblocks, wie das Ergebnis einer Formularübermittlung, an einen Datenverarbeitungsprozess
- Erweiterung einer Datenbank durch eine Anhängeoperation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Textkörper</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Textkörper</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cacheable")}}</th>
      <td>Nur wenn Aktualitätsinformationen enthalten sind</td>
    </tr>
    <tr>
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a>
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
POST <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird. Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird. Häufig verwendet, um Identifikationsinformationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### URL-kodierte Formularübermittlung

Ein Formular, das die `application/x-www-form-urlencoded`-Kodierung verwendet (die Standardeinstellung), sendet eine Anfrage, bei der der Textkörper die Formulardaten in `key=value`-Paaren enthält, wobei jedes Paar durch ein `&`-Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart-Formularübermittlung

Die `multipart/form-data`-Kodierung wird verwendet, wenn ein Formular Dateien oder eine große Menge an Daten enthält. Dieser Anfragetext trennt jeden Teil des Formulars durch eine Grenzzeichenfolge. Ein Beispiel für eine Anfrage in diesem Format:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: multipart/form-data;boundary="delimiter12345"

--delimiter12345
Content-Disposition: form-data; name="field1"

value1
--delimiter12345
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--delimiter12345--
```

Der {{HTTPHeader("Content-Disposition")}}-Header gibt an, wie die Formulardaten verarbeitet werden sollen, indem das Feld `name` und gegebenenfalls `filename` spezifiziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Content-Type")}}-Header
- {{HTTPHeader("Content-Disposition")}}-Header
- {{HTTPMethod("GET")}}-Methode
