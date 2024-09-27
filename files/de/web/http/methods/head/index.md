---
title: HEAD
slug: Web/HTTP/Methods/HEAD
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`HEAD`** HTTP-Methode fordert die Metadaten einer Ressource in Form von [Headers](/de/docs/Web/HTTP/Headers) an, die der Server gesendet hätte, wenn die Methode {{HTTPMethod("GET")}} stattdessen verwendet worden wäre. Diese Methode kann in Fällen verwendet werden, in denen eine URL möglicherweise einen großen Download produzieren könnte. Zum Beispiel kann eine `HEAD`-Anfrage den {{HTTPHeader("Content-Length")}}-Header lesen, um die Dateigröße zu überprüfen, bevor die Datei mit einem `GET` heruntergeladen wird.

Wenn die Antwort auf eine `HEAD`-Anfrage zeigt, dass eine zwischengespeicherte URL-Antwort veraltet ist, wird die zwischengespeicherte Kopie ungültig, selbst wenn keine `GET`-Anfrage gestellt wurde.

> [!WARNING]
> Wenn eine Antwort auf eine `HEAD`-Anfrage einen Körper hat, muss der Antwortkörper ignoriert werden.
> Alle [Repräsentationsheader](/de/docs/Glossary/Representation_header), die den fehlerhaften Körper beschreiben, gelten als Beschreibung des Antwortkörpers, den eine `GET`-Anfrage erhalten hätte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Die Anfrage hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Sicher](/de/docs/Glossary/Safe/HTTP)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Idempotent](/de/docs/Glossary/Idempotent)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Cacheable](/de/docs/Glossary/Cacheable)</th>
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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den Informationen im {{HTTPHeader("Host")}}-Header.
    Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die mit einem Fragezeichen `?` eingeleitet wird.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Abrufen von Ressourcenmetadaten

Der folgende `curl`-Befehl erstellt eine `HEAD`-Anfrage für `example.com`:

```bash
curl --head example.com
```

Dies ist das Äquivalent zu einer `GET`-Anfrage, außer dass der Server keinen Nachrichtenkörper in die Antwort aufnehmen sollte. Es wird eine HTTP-Anfrage erstellt, die folgendermaßen aussieht:

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet eine {{HTTPStatus("200", "200 OK")}}-Antwort zurück, die nur aus Headers besteht. Die Antwort ist im Wesentlichen Metadata, die die Ressource beschreibt, statt die Ressource selbst (einige [Caching](/de/docs/Web/HTTP/Caching)-Header sind in diesem Beispiel der Kürze halber weggelassen):

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
