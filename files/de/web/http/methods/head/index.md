---
title: HEAD
slug: Web/HTTP/Methods/HEAD
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Die **`HEAD`** HTTP-Methode fordert die Metadaten einer Ressource in Form von [Headern](/de/docs/Web/HTTP/Headers) an, die der Server gesendet hätte, wenn die Methode {{HTTPMethod("GET")}} verwendet worden wäre. Diese Methode kann in Fällen genutzt werden, in denen eine URL einen großen Download erzeugen könnte. Ein `HEAD`-Request kann beispielsweise den {{HTTPHeader("Content-Length")}}-Header lesen, um die Dateigröße zu prüfen, bevor die Datei mit einem `GET` heruntergeladen wird.

Wenn die Antwort auf einen `HEAD`-Request zeigt, dass eine zwischengespeicherte URL-Antwort jetzt veraltet ist, wird die zwischengespeicherte Kopie ungültig, selbst wenn kein `GET`-Request gemacht wurde.

> [!WARNING]
> Wenn eine Antwort auf einen `HEAD`-Request einen Body hat, muss der Antwort-Body ignoriert werden.
> Alle {{Glossary("Representation_header", "Repräsentations-Header")}}, die den fehlerhaften Body beschreiben, werden als Beschreibung des Antwort-Bodys angenommen, den ein `GET`-Request erhalten hätte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Body</th>
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
      <th scope="row">{{Glossary("Cacheable", "Cache-fähig")}}</th>
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
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anfragen an einen Ursprungsserver und eine absolute URL in Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Query-Komponente, der von einem Fragezeichen `?` eingeleitet wird.
    Häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu tragen.

## Beispiele

### Erfolgreiches Abrufen von Ressourcen-Metadaten

Der folgende `curl`-Befehl erstellt einen `HEAD`-Request für `example.com`:

```bash
curl --head example.com
```

Dies entspricht einem `GET`-Request, außer dass der Server im Antwort-Body keine Nachricht einschließen sollte.
Er erstellt eine HTTP-Anfrage, die folgendermaßen aussieht:

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet eine {{HTTPStatus("200", "200 OK")}}-Antwort zurück, die nur aus Headern besteht.
Diese Antwort ist im Wesentlichen Metadaten, die die Ressource beschreiben, anstatt der Ressource selbst (einige [Caching](/de/docs/Web/HTTP/Caching)-Header sind in diesem Beispiel der Übersichtlichkeit halber weggelassen):

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

- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPMethod("GET")}}-Methode
