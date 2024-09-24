---
title: HEAD
slug: Web/HTTP/Methods/HEAD
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`HEAD`** HTTP-Methode fordert die Metadaten einer Ressource in Form von [Headern](/de/docs/Web/HTTP/Headers) an, die der Server gesendet hätte, wenn die {{HTTPMethod("GET")}}-Methode stattdessen verwendet worden wäre.
Diese Methode kann in Fällen verwendet werden, in denen eine URL möglicherweise einen großen Download erzeugt. Zum Beispiel kann eine `HEAD`-Anfrage den {{HTTPHeader("Content-Length")}}-Header lesen, um die Dateigröße vor dem Herunterladen der Datei mit einem `GET` zu überprüfen.

Wenn die Antwort auf eine `HEAD`-Anfrage zeigt, dass eine zwischengespeicherte URL-Antwort jetzt veraltet ist, wird die zwischengespeicherte Kopie ungültig, selbst wenn keine `GET`-Anfrage gestellt wurde.

> [!WARNING]
> Wenn eine Antwort auf eine `HEAD`-Anfrage einen Körper hat, muss der Antwortkörper ignoriert werden.
> Jegliche {{glossary("Representation header", "Darstellungs-Header")}}, die den fehlerhaften Körper beschreiben, werden angenommen, den Antwortkörper zu beschreiben, den eine `GET`-Anfrage erhalten hätte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn/Forms">HTML-Formularen</a>
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
HEAD <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit der im {{HTTPHeader("Host")}}-Header angegebenen Information kombiniert wird.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Abrufen von Ressourcen-Metadaten

Der folgende `curl`-Befehl erstellt eine `HEAD`-Anfrage für `example.com`:

```bash
curl --head example.com
```

Dies entspricht einer `GET`-Anfrage, außer dass der Server keinen Nachrichtentext in die Antwort einschließen sollte.
Es erzeugt eine HTTP-Anfrage, die folgendermaßen aussieht:

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet eine {{HTTPStatus("200", "200 OK")}}-Antwort zurück, die nur aus Headern besteht.
Die Antwort ist effektiv Metadaten, die die Ressource beschreiben, anstatt die Ressource selbst (einige [Caching](/de/docs/Web/HTTP/Caching)-Header sind in diesem Beispiel der Kürze halber weggelassen):

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Wed, 04 Sep 2024 10:33:11 GMT
Content-Length: 1234567
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPMethod("GET")}} Methode
