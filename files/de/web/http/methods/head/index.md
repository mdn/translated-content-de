---
title: HEAD
slug: Web/HTTP/Methods/HEAD
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`HEAD`** HTTP-Methode fordert die Metadaten einer Ressource in Form von [Headern](/de/docs/Web/HTTP/Headers) an, die der Server gesendet hätte, wenn die {{HTTPMethod("GET")}}-Methode statt der `HEAD`-Methode verwendet worden wäre.
Diese Methode kann in Fällen eingesetzt werden, in denen eine URL einen großen Download erzeugen könnte. Zum Beispiel kann eine `HEAD`-Anfrage genutzt werden, um den {{HTTPHeader("Content-Length")}}-Header zu lesen, um die Dateigröße zu überprüfen, bevor die Datei mit einem `GET` heruntergeladen wird.

Wenn die Antwort auf eine `HEAD`-Anfrage zeigt, dass eine zwischengespeicherte URL-Antwort veraltet ist, wird die zwischengespeicherte Kopie ungültig, auch wenn keine `GET`-Anfrage gemacht wurde.

> [!WARNING]
> Wenn eine Antwort auf eine `HEAD`-Anfrage einen Body enthält, muss der Antwort-Body ignoriert werden.
> Jegliche {{Glossary("Representation_header", "Repräsentations-Header")}}, die den fehlerhaften Body beschreiben, werden als Beschreibung des Antwort-Bodys angenommen, den eine `GET`-Anfrage erhalten hätte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cacheable")}}</th>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die einem Fragezeichen `?` vorangestellt ist.
    Wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Abrufen von Ressourcenmetadaten

Der folgende `curl`-Befehl erstellt eine `HEAD`-Anfrage für `example.com`:

```bash
curl --head example.com
```

Dies entspricht einer `GET`-Anfrage, außer dass der Server keinen Nachrichtenkörper in die Antwort einfügen sollte.
Es erzeugt eine HTTP-Anfrage, die folgendermaßen aussieht:

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet eine {{HTTPStatus("200", "200 OK")}}-Antwort zurück, die nur aus Headern besteht.
Die Antwort ist im Wesentlichen Metadaten, die die Ressource beschreiben, anstatt die Ressource selbst (einige [Cache-Header](/de/docs/Web/HTTP/Caching) sind in diesem Beispiel zur Kürze ausgelassen):

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
- {{HTTPMethod("GET")}}-Methode
