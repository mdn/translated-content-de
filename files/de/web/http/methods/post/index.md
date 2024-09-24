---
title: POST
slug: Web/HTTP/Methods/POST
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`POST`** HTTP-Methode sendet Daten an den Server. Der Typ des Anfragetextes wird durch den {{HTTPHeader("Content-Type")}} Header angegeben.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` besteht darin, dass `PUT` {{Glossary("idempotent")}} ist: Es macht keinen Unterschied, ob es einmal oder mehrmals hintereinander aufgerufen wird (es gibt keine _seitlichen_ Effekte).
Mehrfache identische `POST`-Anfragen können zusätzliche Effekte haben, wie zum Beispiel die mehrfache Erstellung derselben Bestellung.

[HTML-Formulare](/de/docs/Learn/Forms) senden typischerweise Daten über `POST`, was normalerweise zu einer Änderung auf dem Server führt.
Für HTML-Formulare wird das Format/die Kodierung des Nachrichteninhalts durch das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements oder das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype)-Attribut der {{HTMLElement("input")}}- oder {{HTMLElement("button")}}-Elemente bestimmt.
Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: Die Schlüssel und Werte werden in Schlüssel-Wert-Tupeln kodiert, die durch ein kaufmännisches Und (`&`) getrennt sind, mit einem Gleichheitszeichen (`=`) zwischen dem Schlüssel und dem Wert (z.B., `firstname=Frida&lastname=Kahlo`).
  Nicht-alphanumerische Zeichen in sowohl Schlüsseln als auch Werten werden {{Glossary("Percent-encoding", "prozentkodiert")}}: das ist der Grund, warum dieser Typ nicht geeignet ist, um mit binären Daten verwendet zu werden und Sie stattdessen `multipart/form-data` für diesen Zweck verwenden sollten.
- `multipart/form-data`: Jeder Wert wird als Datenblock ("Bodypart") gesendet, mit einem von der Benutzeragent definierten Trennzeichen (zum Beispiel `boundary="delimiter12345"`), das jeden Teil trennt.
  Die Schlüssel sind im {{HTTPHeader("Content-Disposition")}} Header eines jeden Teils oder Blocks von Daten beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage im Anschluss an einen {{domxref("Window/fetch", "fetch()")}}-Aufruf oder aus einem anderen Grund als einem HTML-Formular gesendet wird, kann der Nachrichtenkörper jeden beliebigen Typ haben.
Wie in der HTTP 1.1-Spezifikation beschrieben, ist `POST` so konzipiert, dass eine einheitliche Methode folgende Funktionen abdeckt:

- Annotation von bestehenden Ressourcen
- Veröffentlichen einer Nachricht auf einem Bulletin Board, einer Newsgroup, einer Mailingliste oder einer ähnlichen Artikelgruppe
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellung eines Datenblocks, wie das Ergebnis der Übermittlung eines Formulars, an einen Datenverarbeitungsprozess
- Erweiterung einer Datenbank durch einen Anhangsvorgang

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request hat Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Body</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Nur wenn Frischeinformationen enthalten sind</td>
    </tr>
    <tr>
      <th scope="row">
        In <a href="/de/docs/Learn/Forms">HTML-Formularen</a> erlaubt
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den Informationen im {{HTTPHeader("Host")}} Header kombiniert wird.
    Dies ist ein absoluter Pfad (z.B., `/path/to/file.html`) bei Anfragen an einen Ursprung-Server und eine absolute URL bei Anfragen an Proxies (z.B., `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragekomponent, der von einem Fragezeichen `?` eingeleitet wird.
    Wird oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu transportieren.

## Beispiele

### URL-kodierte Formularübermittlung

Ein Formular, das `application/x-www-form-urlencoded`-Inhaltskodierung (die Standardeinstellung) verwendet, sendet eine Anfrage, bei der der Körper die Formulardaten in `key=value` Paaren enthält, wobei jedes Paar durch ein `&` Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart-Formularübermittlung

Die `multipart/form-data` Kodierung wird verwendet, wenn ein Formular Dateien oder viele Daten enthält.
Dieser Anfragekörper gliedert jeden Teil des Formulars mit einem Grenze-String.
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

Der {{HTTPHeader("Content-Disposition")}} Header gibt an, wie die Formulardaten verarbeitet werden sollen, und spezifiziert den Feld `name` und `filename`, falls erforderlich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Content-Type")}} Header
- {{HTTPHeader("Content-Disposition")}} Header
- {{HTTPMethod("GET")}} Methode
