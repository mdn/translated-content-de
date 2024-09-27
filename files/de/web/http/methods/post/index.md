---
title: POST
slug: Web/HTTP/Methods/POST
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`POST`** HTTP-Methode sendet Daten an den Server. Der Typ des Rumpfs der Anfrage wird durch den {{HTTPHeader("Content-Type")}}-Header angegeben.

Der Unterschied zwischen {{HTTPMethod("PUT")}} und `POST` besteht darin, dass `PUT` [idempotent](/de/docs/Glossary/idempotent) ist: Ein einzelner Aufruf unterscheidet sich nicht von mehreren aufeinanderfolgenden Aufrufen (es gibt keine _Nebeneffekte_).
Mehrfache identische `POST`-Anfragen können zusätzliche Effekte haben, wie zum Beispiel das mehrfache Erstellen derselben Bestellung.

[HTML-Formulare](/de/docs/Learn/Forms) senden typischerweise Daten mit `POST`, was normalerweise zu einer Änderung auf dem Server führt.
Bei HTML-Formularen wird das Format/die Kodierung des Rumpfinhalts durch das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements oder das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype)-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente bestimmt.
Die Kodierung kann eine der folgenden sein:

- `application/x-www-form-urlencoded`: Die Schlüssel und Werte werden in Schlüssel-Wert-Tupel kodiert, die durch ein Kaufmanns-Und-Zeichen (`&`) getrennt sind, mit einem Gleichheitszeichen (`=`) zwischen dem Schlüssel und dem Wert (z. B. `firstname=Frida&lastname=Kahlo`).
  Nicht alphanumerische Zeichen in sowohl Schlüsseln als auch Werten werden [prozentkodiert](/de/docs/Glossary/Percent-encoding): Dies ist der Grund, warum dieser Typ nicht geeignet ist, um mit Binärdaten verwendet zu werden. Stattdessen sollten Sie `multipart/form-data` für diesen Zweck verwenden.
- `multipart/form-data`: Jeder Wert wird als Datenblock („Körperteil“) gesendet, mit einem vom Benutzeragenten definierten Trennzeichen (zum Beispiel `boundary="delimiter12345"`) zwischen jedem Teil.
  Die Schlüssel werden im {{HTTPHeader("Content-Disposition")}}-Header jedes Teils oder Datenblocks beschrieben.
- `text/plain`

Wenn die `POST`-Anfrage im Rahmen eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs gesendet wird, oder aus einem anderen Grund als einem HTML-Formular, kann der Rumpf jeden Typ haben.
Wie in der HTTP 1.1-Spezifikation beschrieben, ist `POST` so konzipiert, dass eine einheitliche Methode folgende Funktionen abdeckt:

- Annotation bestehender Ressourcen
- Posting einer Nachricht an ein Schwarzes Brett, eine Newsgroup, eine Mailingliste oder eine ähnliche Artikelsammlung
- Hinzufügen eines neuen Benutzers über ein Anmeldeformular
- Bereitstellung eines Datenblocks, wie das Ergebnis des Einreichens eines Formulars, an einen Datenverarbeitungsprozess
- Erweiterung einer Datenbank durch einen Anhängevorgang

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request hat einen Rumpf</th>
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
      <th scope="row">[Cachefähig](/de/docs/Glossary/Cacheable)</th>
      <td>Nur wenn Frischeinformationen enthalten sind</td>
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
  - : Identifiziert die Zielressource der Anfrage, wenn kombiniert mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird.
    Häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### URL-kodierte Formularübermittlung

Ein Formular, das `application/x-www-form-urlencoded`-Inhaltskodierung (die Standardeinstellung) verwendet, sendet eine Anfrage, bei der der Rumpf die Formulardaten in `key=value` Paaren enthält, wobei jedes Paar durch ein `&`-Symbol getrennt ist, wie unten gezeigt:

```http
POST /test HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

### Multipart-Formularübermittlung

Die `multipart/form-data`-Kodierung wird verwendet, wenn ein Formular Dateien oder eine große Menge an Daten enthält.
Dieser Anfrage-Rumpf trennt jeden Teil des Formulars mit einem Grenzzeichenfolgen.
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

Der {{HTTPHeader("Content-Disposition")}}-Header gibt an, wie die Formulardaten verarbeitet werden sollen, indem das Feld `name` und `filename`, falls zutreffend, spezifiziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfrage-Methoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Content-Type")}}-Header
- {{HTTPHeader("Content-Disposition")}}-Header
- {{HTTPMethod("GET")}}-Methode
