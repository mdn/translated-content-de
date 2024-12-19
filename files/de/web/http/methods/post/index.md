---
title: POST
slug: Web/HTTP/Methods/POST
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Die **`POST`** HTTP-Methode sendet Daten an den Server. Der Typ des Anfragekörpers wird durch den {{HTTPHeader("Content-Type")}} Header angezeigt.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` besteht darin, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: Ein einmaliger Aufruf unterscheidet sich nicht von mehrmaligen aufeinanderfolgenden Aufrufen (es gibt keine _Nebeneffekte_). Aufeinanderfolgende identische `POST`-Anfragen können zusätzliche Effekte haben, wie z. B. das mehrmalige Erstellen derselben Bestellung.

[HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) senden Daten typischerweise mit `POST` und dies führt normalerweise zu einer Änderung auf dem Server. Für HTML-Formulare wird das Format/die Kodierung des Inhalts des Körpers durch das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des {{HTMLElement("form")}} Elements oder das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype) Attribut der {{HTMLElement("input") }} oder {{HTMLElement("button")}} Elemente bestimmt. Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: Die Schlüssel und Werte werden in Schlüssel-Wert-Tupel enkodiert, die durch ein Und-Zeichen (`&`) getrennt sind, mit einem Gleichheitszeichen (`=`) zwischen Schlüssel und Wert (z.B. `first-name=Frida&last-name=Kahlo`). Nicht alphanumerische Zeichen in sowohl Schlüsseln als auch Werten sind {{Glossary("Percent-encoding", "percent-kodiert")}}: dies ist der Grund, warum dieser Typ nicht geeignet ist für die Verwendung mit binären Daten, und Sie stattdessen `multipart/form-data` für diesen Zweck verwenden sollten.
- `multipart/form-data`: Jeder Wert wird als ein Datenblock ("body part") gesendet, mit einem durch den User-Agent definierten Trennzeichen (zum Beispiel `boundary="delimiter12345"`) das jeden Teil trennt. Die Schlüssel werden im {{HTTPHeader("Content-Disposition")}} Header jedes Teils oder Blocks von Daten beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage nach einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf gesendet wird, oder aus einem anderen Grund als einem HTML-Formular, kann der Körper beliebiger Typ sein. Wie im HTTP 1.1 Standard beschrieben, ist `POST` so konzipiert, dass es eine einheitliche Methode bietet, um die folgenden Funktionen abzudecken:

- Annotation vorhandener Ressourcen
- Posten einer Nachricht auf einem Schwarzen Brett, in einer Newsgroup, Mailingliste oder ähnlichen Gruppen von Artikeln
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellung eines Datenblocks, wie das Ergebnis des Sendens eines Formulars, zu einem Datenverarbeitungsprozess
- Erweiterung einer Datenbank durch einen Anhangsvorgang

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Körper</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}} Header bereitgestellten Informationen kombiniert wird. Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird. Oft wird sie verwendet, um identifizierende Informationen in der Form von `key=value` Paaren zu übermitteln.

## Beispiele

### URL-encoded Formulareinreichung

Ein Formular mit `application/x-www-form-urlencoded` Inhaltskodierung (Standard) sendet eine Anfrage, bei der der Körper die Formulardaten in `key=value` Paaren enthält, wobei jedes Paar durch ein `&` Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart Formulareinreichung

Die `multipart/form-data` Kodierung wird verwendet, wenn ein Formular Dateien oder umfangreiche Daten enthält. Diese Anfragekörper trennt jeden Teil des Formulars mit einer Trennzeichenzeichenfolge. Ein Beispiel für eine Anfrage in diesem Format:

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

Der {{HTTPHeader("Content-Disposition")}} Header gibt an, wie die Formulardaten verarbeitet werden sollen, indem das Feld `name` und `filename` spezifiziert wird, falls zutreffend.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Content-Type")}} Header
- {{HTTPHeader("Content-Disposition")}} Header
- {{HTTPMethod("GET")}} Methode
