---
title: POST
slug: Web/HTTP/Methods/POST
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Die **`POST`** HTTP-Methode sendet Daten an den Server. Der Typ des Anfragetexts wird durch den {{HTTPHeader("Content-Type")}} Header angegeben.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` besteht darin, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: ein Aufruf ist nicht anders als mehrere aufeinanderfolgende Aufrufe (es gibt keine _Nebeneffekte_).
Aufeinanderfolgende identische `POST`-Anfragen können zusätzliche Effekte haben, wie z. B. das mehrfache Erstellen derselben Bestellung.

[HTML-Formulare](/de/docs/Learn/Forms) senden Daten typischerweise mit `POST`, was normalerweise eine Änderung auf dem Server zur Folge hat.
Für HTML-Formulare wird das Format/die Kodierung des Inhalts des Anfragetexts durch das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des {{HTMLElement("form")}} Elements oder das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype) Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente bestimmt.
Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: die Schlüssel und Werte werden in Schlüssel-Wert-Tupeln kodiert, die durch ein kaufmännisches Und-Zeichen (`&`) getrennt sind, mit einem Gleichheitszeichen (`=`) zwischen dem Schlüssel und dem Wert (z. B. `first-name=Frida&last-name=Kahlo`).
  Nicht-alphanumerische Zeichen in sowohl Schlüsseln als auch Werten werden {{Glossary("Percent-encoding", "prozentkodiert")}}: Aus diesem Grund ist dieser Typ nicht geeignet für die Verwendung mit Binärdaten, und Sie sollten stattdessen `multipart/form-data` für diesen Zweck verwenden.
- `multipart/form-data`: jeder Wert wird als Datenblock ("Body-Part") gesendet, wobei ein von der Benutzerumgebung definierter Trenner (zum Beispiel `boundary="delimiter12345"`) jeden Teil trennt.
  Die Schlüssel werden im {{HTTPHeader("Content-Disposition")}} Header jedes Teils oder Blocks von Daten beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage infolge eines [`fetch()`](/de/docs/Web/API/Window/fetch) Aufrufs gesendet wird oder aus einem anderen Grund als einem HTML-Formular, kann der Anfragetext jeden Typ haben.
Wie in der HTTP 1.1-Spezifikation beschrieben, ist `POST` dazu gedacht, eine einheitliche Methode für die folgenden Funktionen bereitzustellen:

- Kommentierung vorhandener Ressourcen
- Posten einer Nachricht auf einem schwarzen Brett, in einer Newsgroup, Mailingliste oder einer ähnlichen Artikelgruppe
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellung eines Datenblocks, wie das Ergebnis eines Formular-Abschlusses, für einen Datenverarbeitungsprozess
- Erweiterung einer Datenbank durch eine Anfügeoperation

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
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cache-fähig")}}</th>
      <td>Nur wenn Informationen zur Frische enthalten sind</td>
    </tr>
    <tr>
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn/Forms">HTML-Formularen</a>
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
  - : Identifiziert die Zielressource der Anfrage, wenn kombiniert mit den Informationen im {{HTTPHeader("Host")}} Header.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangeht.
    Häufig verwendet, um Identifizierungsinformationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### URL-kodierte Formularübermittlung

Ein Formular, das `application/x-www-form-urlencoded` Inhaltskodierung verwendet (die Standardeinstellung), sendet eine Anfrage, bei der der Body die Formulardaten in `key=value` Paaren enthält, wobei jedes Paar durch ein `&` Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart-Formularübermittlung

Die `multipart/form-data` Kodierung wird verwendet, wenn ein Formular Dateien oder viele Daten enthält.
Dieser Anfragetext trennt jeden Teil des Formulars mit einer Boundary-Zeichenfolge.
Ein Beispiel einer Anfrage in diesem Format:

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

- [HTTP Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Content-Type")}} Header
- {{HTTPHeader("Content-Disposition")}} Header
- {{HTTPMethod("GET")}} Methode
