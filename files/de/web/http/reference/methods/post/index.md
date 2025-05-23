---
title: POST request method
short-title: POST
slug: Web/HTTP/Reference/Methods/POST
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die **`POST`** HTTP-Methode sendet Daten an den Server. Der Typ des Anforderungskörpers wird durch den {{HTTPHeader("Content-Type")}} Header angegeben.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` besteht darin, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: Einmaliges Aufrufen unterscheidet sich nicht vom mehrmaligen aufeinanderfolgenden Aufrufen (es gibt keine _Nebeneffekte_). Aufeinanderfolgende gleiche `POST`-Anfragen können zusätzliche Effekte haben, wie z.B. das mehrfache Erstellen derselben Bestellung.

[HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) senden typischerweise Daten mit `POST` und führen dadurch in der Regel zu einer Änderung auf dem Server. Bei HTML-Formularen wird das Format/die Kodierung des Körperinhalts durch das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) Attribut des {{HTMLElement("form")}} Elements oder das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype) Attribut der {{HTMLElement("input") }} oder {{HTMLElement("button")}} Elemente bestimmt. Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: die Schlüssel und Werte sind in Schlüssel-Wert-Tupeln kodiert, die durch ein Ampersand (`&`) getrennt sind, mit einem Gleichheitszeichen (`=`) zwischen dem Schlüssel und dem Wert (z.B. `first-name=Frida&last-name=Kahlo`).
  Nicht-alphanumerische Zeichen in sowohl Schlüsseln als auch Werten sind {{Glossary("Percent-encoding", "percent-kodiert")}}: Dies ist der Grund, warum dieser Typ nicht geeignet ist für die Verwendung mit binären Daten und Sie stattdessen `multipart/form-data` für diesen Zweck verwenden sollten.
- `multipart/form-data`: jeder Wert wird als Datenblock ("Body-Teil") gesendet, mit einem vom User-Agent definierten Trennzeichen (zum Beispiel `boundary="delimiter12345"`) zwischen jedem Teil.
  Die Schlüssel werden im {{HTTPHeader("Content-Disposition")}} Header jedes Teils oder Datenblocks beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage nach einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf gesendet wird oder aus einem anderen Grund als einem HTML-Formular, kann der Körper jede Art sein. Wie in der HTTP 1.1-Spezifikation beschrieben, wurde `POST` entwickelt, um eine einheitliche Methode für die folgenden Funktionen bereitzustellen:

- Anmerkung bestehender Ressourcen
- Posten einer Nachricht auf einem Bulletin Board, in einer Newsgroup, Mailingliste oder einer ähnlichen Artikelgruppe
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellung eines Datenblocks, wie das Ergebnis der Übermittlung eines Formulars, an einen datenverarbeitenden Prozess
- Erweiterung einer Datenbank durch eine Anhängeoperation

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
      <td>Nur wenn Aktualitätsinformationen enthalten sind</td>
    </tr>
    <tr>
      <th scope="row">
        In <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a> erlaubt
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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den Informationen, die im {{HTTPHeader("Host")}} Header bereitgestellt werden.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Origin-Server und eine absolute URL bei Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die einem Fragezeichen `?` folgt.
    Wird oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übertragen.

## Beispiele

### URL-kodierte Formularübertragung

Ein Formular, das die `application/x-www-form-urlencoded` Inhaltskodierung (die Standardkodierung) verwendet, sendet eine Anfrage, bei der der Körper die Formulardaten in `key=value` Paaren enthält, wobei jedes Paar durch ein `&` Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart-Formularübertragung

Die `multipart/form-data` Kodierung wird verwendet, wenn ein Formular Dateien oder viele Daten umfasst. Dieser Anforderungskörper trennt jeden Teil des Formulars durch eine Grenzzeichenfolge. Ein Beispiel für eine Anforderung in diesem Format:

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

Der {{HTTPHeader("Content-Disposition")}} Header gibt an, wie die Formulardaten verarbeitet werden sollen, wobei das Feld `name` und `filename`, falls zutreffend, spezifiziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Content-Type")}} Header
- {{HTTPHeader("Content-Disposition")}} Header
- {{HTTPMethod("GET")}} Methode
