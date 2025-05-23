---
title: HEAD request method
short-title: HEAD
slug: Web/HTTP/Reference/Methods/HEAD
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die **`HEAD`** HTTP-Methode fordert die Metadaten einer Ressource in Form von [Headern](/de/docs/Web/HTTP/Reference/Headers) an, die der Server gesendet hätte, wenn die {{HTTPMethod("GET")}}-Methode verwendet worden wäre. Diese Methode kann in Fällen eingesetzt werden, in denen eine URL möglicherweise einen großen Download erzeugen würde; zum Beispiel kann eine `HEAD`-Anfrage den {{HTTPHeader("Content-Length")}}-Header lesen, um die Dateigröße zu überprüfen, bevor die Datei mit einem `GET` heruntergeladen wird.

Wenn die Antwort auf eine `HEAD`-Anfrage zeigt, dass eine zwischengespeicherte URL-Antwort nun veraltet ist, wird die zwischengespeicherte Kopie ungültig gemacht, selbst wenn keine `GET`-Anfrage durchgeführt wurde.

> [!WARNING]
> Wenn eine Antwort auf eine `HEAD`-Anfrage einen Körper hat, muss der Antwortkörper ignoriert werden.
> Alle {{Glossary("Representation_header", "Repräsentations-Header")}}, die den fehlerhaften Körper beschreiben, gelten als Beschreibung des Antwortkörpers, den eine `GET`-Anfrage erhalten hätte.

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
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cacheable")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den Informationen im {{HTTPHeader("Host")}}-Header kombiniert wird.
    Dies ist ein absoluter Pfad (z.B., `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxies (z.B., `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` vorangestellt wird.
    Wird häufig verwendet, um Identifikationsinformationen in Form von `key=value`-Paaren zu transportieren.

## Beispiele

### Erfolgreiches Abrufen von Ressourcen-Metadaten

Der folgende `curl`-Befehl erstellt eine `HEAD`-Anfrage für `example.com`:

```bash
curl --head example.com
```

Dies entspricht einer `GET`-Anfrage, außer dass der Server keinen Nachrichtenkörper in die Antwort aufnehmen sollte.
Es erstellt eine HTTP-Anfrage, die so aussieht:

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet eine {{HTTPStatus("200", "200 OK")}}-Antwort zurück, die nur aus Headern besteht.
Die Antwort ist im Wesentlichen Metadaten, die die Ressource beschreiben, anstatt die Ressource selbst (einige [Caching-](/de/docs/Web/HTTP/Guides/Caching) Header sind in diesem Beispiel der Kürze halber weggelassen):

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPMethod("GET")}} Methode
