---
title: POST
slug: Web/HTTP/Methods/POST
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`POST`** HTTP-Methode sendet Daten an den Server. Der Typ des Rumpfes der Anfrage wird durch den {{HTTPHeader("Content-Type")}} Header angegeben.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` besteht darin, dass `PUT` [idempotent](/de/docs/Glossary/idempotent) ist: Einmaliges Aufrufen ist nicht anders als mehrmaliges hintereinander Aufrufen (es gibt keine _seitlichen_ Effekte).
Aufeinanderfolgende identische `POST`-Anfragen können zusätzliche Effekte haben, wie das mehrfache Erstellen derselben Bestellung.

[HTML-Formulare](/de/docs/Learn/Forms) senden typischerweise Daten mit `POST`, was normalerweise zu einer Änderung auf dem Server führt.
Für HTML-Formulare wird das Format/die Kodierung des Rumpfinhalts durch das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des {{HTMLElement("form")}} Elements oder das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype) Attribut der {{HTMLElement("input") }} oder {{HTMLElement("button")}} Elemente bestimmt.
Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: Die Schlüssel und Werte werden in Schlüssel-Wert-Tupeln kodiert, die durch ein Kaufmännisches Und (`&`) getrennt sind, mit einem Gleichheitszeichen (`=`) zwischen Schlüssel und Wert (z.B. `firstname=Frida&lastname=Kahlo`).
  Nicht-alphanumerische Zeichen in beiden, Schlüsseln und Werten, werden [prozentkodiert](/de/docs/Glossary/Percent-encoding): Dies ist der Grund, warum dieser Typ nicht für die Verwendung mit Binärdaten geeignet ist, und Sie stattdessen `multipart/form-data` zu diesem Zweck verwenden sollten.
- `multipart/form-data`: Jeder Wert wird als Datenblock („Body Part“) gesendet, mit einem vom User-Agent definierten Trennzeichen (z.B. `boundary="delimiter12345"`), das jedes Teil trennt.
  Die Schlüssel werden im {{HTTPHeader("Content-Disposition")}} Header jedes Teils oder Datenblocks beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage nach einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf gesendet wird oder aus einem anderen Grund als ein HTML-Formular, kann der Rumpf jeden Typ haben.
Wie in der HTTP 1.1-Spezifikation beschrieben, ist `POST` so konzipiert, dass es eine einheitliche Methode bietet, um die folgenden Funktionen abzudecken:

- Annotation bestehender Ressourcen
- Posten einer Nachricht auf einem Bulletin Board, in einer Newsgroup, einer Mailingliste oder einer ähnlichen Artikelsammlung
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellung eines Datenblocks, wie das Ergebnis des Einreichens eines Formulars, an einen datenverarbeitenden Prozess
- Erweiterung einer Datenbank durch eine Hinzufügeoperation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Rumpf</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Rumpf</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Sicher](/de/docs/Glossary/Safe/HTTP)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Idempotent](/de/docs/Glossary/Idempotent)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Cacheable](/de/docs/Glossary/Cacheable)</th>
      <td>Nur wenn Frische-Informationen enthalten sind</td>
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
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Origin-Server und eine absolute URL bei Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, eingeleitet durch ein Fragezeichen `?`.
    Häufig verwendet, um Identifikationsinformationen in Form von `key=value` Paaren zu tragen.

## Beispiele

### URL-kodierte Formularübermittlung

Ein Formular, das die `application/x-www-form-urlencoded` Inhaltskodierung (Standard) verwendet, sendet eine Anfrage, bei der der Rumpf die Formulardaten in `key=value` Paaren enthält, wobei jedes Paar durch ein `&` Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart-Formularübermittlung

Die `multipart/form-data` Kodierung wird verwendet, wenn ein Formular Dateien oder viele Daten enthält.
Dieser Anfrage-Rumpf begrenzt jedes Teil des Formulars mit einem Begrenzungszeichen.
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

Der {{HTTPHeader("Content-Disposition")}} Header gibt an, wie die Formulardaten verarbeitet werden sollen, indem er das Feld `name` und gegebenenfalls `filename` spezifiziert.

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
