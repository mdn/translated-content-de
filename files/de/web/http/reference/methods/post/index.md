---
title: POST
slug: Web/HTTP/Reference/Methods/POST
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die **`POST`** HTTP-Methode sendet Daten an den Server. Der Typ des Anfragekörpers wird durch den {{HTTPHeader("Content-Type")}}-Header angegeben.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` ist, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: Ein einmaliger Aufruf unterscheidet sich nicht von mehreren aufeinanderfolgenden Aufrufen (es gibt keine _Seiteneffekte_).
Mehrere identische `POST`-Anfragen können zusätzliche Effekte haben, wie zum Beispiel mehrmaliges Erstellen derselben Bestellung.

[HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) senden typischerweise Daten mit `POST` und dies führt normalerweise zu einer Änderung auf dem Server.
Für HTML-Formulare wird das Format/die Kodierung des Inhaltskörpers durch das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements oder das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype)-Attribut der {{HTMLElement("input") }}- oder {{HTMLElement("button")}}-Elemente bestimmt.
Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: Die Schlüssel und Werte werden in Schlüssel-Wert-Tupeln kodiert, die durch ein Kaufmanns-Und (`&`) getrennt und mit einem Gleichheitszeichen (`=`) zwischen Schlüssel und Wert versehen sind (z. B. `first-name=Frida&last-name=Kahlo`).
  Nicht-alphanumerische Zeichen in sowohl Schlüsseln als auch Werten werden {{Glossary("Percent-encoding", "percent-kodiert")}}: Aus diesem Grund ist dieser Typ nicht geeignet für die Verwendung mit Binärdaten, und Sie sollten stattdessen `multipart/form-data` dafür verwenden.
- `multipart/form-data`: Jeder Wert wird als Datenblock ("Bodypart") gesendet, mit einem durch den User-Agent definierten Trennzeichen (zum Beispiel `boundary="delimiter12345"`), das jeden Teil trennt.
  Die Schlüssel werden im {{HTTPHeader("Content-Disposition")}}-Header jedes Teils oder Datenblocks beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage nach einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf gesendet wird oder aus einem anderen Grund als einem HTML-Formular, kann der Körper jeden Typ haben.
Wie in der HTTP 1.1-Spezifikation beschrieben, ist `POST` so konzipiert, dass eine einheitliche Methode die folgenden Funktionen abdeckt:

- Annotation bestehender Ressourcen
- Veröffentlichen einer Nachricht auf einem Bulletin Board, in einer Newsgroup, Mailingliste oder einer ähnlichen Gruppe von Artikeln
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellung eines Datenblocks, wie das Ergebnis des Einsendens eines Formulars, an einen Datenverarbeitungsprozess
- Erweiterung einer Datenbank durch einen Anhängevorgang

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Körper</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Körper</th>
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
      <td>Nur wenn Frischeinformationen enthalten sind</td>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangestellt ist.
    Wird häufig verwendet, um Identifikationsinformationen in Form von `key=value`-Paaren zu übertragen.

## Beispiele

### URL-kodierte Formularübermittlung

Ein Formular, das die `application/x-www-form-urlencoded`-Inhaltskodierung verwendet (die Standardkodierung), sendet eine Anfrage, bei der der Körper die Formulardaten in `key=value`-Paaren enthält, wobei jedes Paar durch ein `&`-Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart-Formularübermittlung

Die `multipart/form-data`-Kodierung wird verwendet, wenn ein Formular Dateien oder viele Daten enthält.
Dieser Anfragenkörper trennt jeden Teil des Formulars mit einer Grenzzeichenfolge.
Ein Beispiel für eine Anfrage in diesem Format:

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

Der {{HTTPHeader("Content-Disposition")}}-Header gibt an, wie die Formulardaten verarbeitet werden sollen und gibt das Feld `name` und `filename` an, falls zutreffend.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Content-Type")}}-Header
- {{HTTPHeader("Content-Disposition")}}-Header
- {{HTTPMethod("GET")}}-Methode
