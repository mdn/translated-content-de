---
title: POST request method
short-title: POST
slug: Web/HTTP/Reference/Methods/POST
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die **`POST`**-HTTP-Methode sendet Daten an den Server. Der Typ des Anfragetextes wird durch den {{HTTPHeader("Content-Type")}} Header angegeben.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` ist, dass `PUT` {{Glossary("idempotent", "idempotent")}} ist: Eine einmalige Ausführung ist nicht anders als mehrfache aufeinanderfolgende Ausführungen (es gibt keine Nebeneffekte).
Mehrfache identische `POST`-Anfragen können zusätzliche Effekte haben, z.B. das mehrfache Erstellen derselben Bestellung.

[HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) senden typischerweise Daten mit `POST`, was normalerweise eine Änderung auf dem Server zur Folge hat.
Für HTML-Formulare wird das Format/die Kodierung des Inhalts durch das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) Attribut des {{HTMLElement("form")}} Elements, oder das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype) Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente bestimmt.
Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: Die Schlüssel und Werte werden in Schlüssel-Wert-Tupel codiert, die durch ein Kaufmanns-Und (`&`) getrennt sind, mit einem Gleichheitszeichen (`=`) zwischen dem Schlüssel und dem Wert (z.B. `first-name=Frida&last-name=Kahlo`).
  Nicht-alphanumerische Zeichen in beiden, Schlüssel und Werten, sind {{Glossary("Percent-encoding", "prozentkodiert")}}: Dies ist der Grund, warum dieser Typ nicht für die Verwendung mit Binärdaten geeignet ist, und Sie stattdessen `multipart/form-data` hierfür verwenden sollten.
- `multipart/form-data`: Jeder Wert wird als ein Datenblock ("body part") gesendet, getrennt durch einen vom Benutzeragenten definierten Trenner (z.B. `boundary="delimiter12345"`), der jeden Teil trennt.
  Die Schlüssel werden im {{HTTPHeader("Content-Disposition")}} Header jedes Teils oder Datenblocks beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage durch einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf oder aus einem anderen Grund als einem HTML-Formular gesendet wird, kann der Körper jeden Typ haben.
Wie in der HTTP/1.1-Spezifikation beschrieben, ist `POST` dafür vorgesehen, eine einheitliche Methode zur Verfügung zu stellen, um die folgenden Funktionen abzudecken:

- Anmerkung bestehender Ressourcen
- Senden einer Nachricht an ein Schwarzes Brett, eine Newsgroup, Mailingliste oder ähnliche Gruppe von Artikeln
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellung eines Datenblocks, wie das Ergebnis des Einreichens eines Formulars, für einen Datenverarbeitungsprozess
- Erweiterung einer Datenbank durch einen Anhängevorgang

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
      <th scope="row">{{Glossary("Cacheable", "Zwischenspeicherbar")}}</th>
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
  - : Identifiziert die Zielressource der Anfrage, wenn kombiniert mit den Informationen im {{HTTPHeader("Host")}} Header.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangestellt ist.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übertragen.

## Beispiele

### URL-kodierte Formularübermittlung

Ein Formular mit `application/x-www-form-urlencoded` Inhaltskodierung (Standard) sendet eine Anfrage, bei der der Körper die Formulardaten in `key=value` Paaren enthält, wobei jedes Paar durch ein `&` Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart-Formularübermittlung

Die `multipart/form-data` Kodierung wird verwendet, wenn ein Formular Dateien oder eine große Menge an Daten enthält.
Dieser Anfragekörper gliedert jeden Teil des Formulars mithilfe eines Trennzeichen-Strings.
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

Der {{HTTPHeader("Content-Disposition")}} Header gibt an, wie die Formulardaten verarbeitet werden sollen, indem das Feld `name` und `filename`, falls zutreffend, spezifiziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Content-Type")}} Header
- {{HTTPHeader("Content-Disposition")}} Header
- {{HTTPMethod("GET")}} Methode
