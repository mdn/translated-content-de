---
title: HEAD request method
short-title: HEAD
slug: Web/HTTP/Reference/Methods/HEAD
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die **`HEAD`** HTTP-Methode fordert die Metadaten einer Ressource in Form von [Headers](/de/docs/Web/HTTP/Reference/Headers) an, die der Server gesendet hätte, wenn stattdessen die {{HTTPMethod("GET")}}-Methode verwendet worden wäre. Diese Methode kann in Fällen verwendet werden, in denen eine URL möglicherweise einen großen Download erzeugt. Zum Beispiel kann eine `HEAD`-Anfrage den {{HTTPHeader("Content-Length")}} Header lesen, um die Dateigröße zu prüfen, bevor die Datei mit einer `GET`-Anfrage heruntergeladen wird.

Wenn die Antwort auf eine `HEAD`-Anfrage zeigt, dass eine zwischengespeicherte URL-Antwort veraltet ist, wird die zwischengespeicherte Kopie ungültig, auch wenn keine `GET`-Anfrage gestellt wurde.

> [!WARNING]
> Wenn eine Antwort auf eine `HEAD`-Anfrage einen Body enthält, muss der Antwort-Body ignoriert werden. Alle {{Glossary("Representation_header", "Repräsentations-Header")}}, die den fehlerhaften Body beschreiben, gelten als Beschreibung des Antwort-Bodys, den eine `GET`-Anfrage erhalten hätte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Antwort bei Erfolg hat Body</th>
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
        In <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a> erlaubt
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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den im {{HTTPHeader("Host")}} Header bereitgestellten Informationen. Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprung-Server und eine absolute URL in Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfrage-Komponenten, vorangestellt mit einem Fragezeichen `?`. Häufig verwendet, um Identifikationsinformationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Abrufen von Ressourcen-Metadaten

Der folgende `curl`-Befehl erstellt eine `HEAD`-Anfrage für `example.com`:

```bash
curl --head example.com
```

Dies entspricht einer `GET`-Anfrage, außer dass der Server keinen Nachrichten-Body in der Antwort einschließen sollte. Es erstellt eine HTTP-Anfrage, die so aussieht:

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet eine {{HTTPStatus("200", "200 OK")}} Antwort zurück, die nur aus Headers besteht. Die Antwort ist effektiv Metadaten, die die Ressource beschreiben, anstatt die Ressource selbst (einige [Caching](/de/docs/Web/HTTP/Guides/Caching) Header sind in diesem Beispiel aus Gründen der Kürze weggelassen):

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
- [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPMethod("GET")}} Methode
