---
title: HEAD
slug: Web/HTTP/Reference/Methods/HEAD
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die **`HEAD`** HTTP-Methode fordert die Metadaten einer Ressource in Form von [Headers](/de/docs/Web/HTTP/Reference/Headers) an, die der Server gesendet hätte, wenn die Methode {{HTTPMethod("GET")}} verwendet worden wäre. Diese Methode kann in Fällen verwendet werden, in denen eine URL einen großen Download erzeugen könnte. Beispielsweise kann eine `HEAD`-Anfrage den {{HTTPHeader("Content-Length")}} Header lesen, um die Dateigröße zu überprüfen, bevor die Datei mit einem `GET` heruntergeladen wird.

Wenn die Antwort auf eine `HEAD`-Anfrage zeigt, dass eine zwischengespeicherte URL-Antwort jetzt veraltet ist, wird die zwischengespeicherte Kopie ungültig, selbst wenn keine `GET`-Anfrage gestellt wurde.

> [!WARNING]
> Wenn eine Antwort auf eine `HEAD`-Anfrage einen Körper hat, muss dieser ignoriert werden.
> Alle {{Glossary("Representation_header", "Representation Headers")}}, die den fehlerhaften Körper beschreiben, werden angenommen, um den Antwortkörper zu beschreiben, den eine `GET`-Anfrage erhalten würde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Körper</th>
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
      <th scope="row">{{Glossary("Cacheable", "Zwischenspeicherbar")}}</th>
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
  - : Identifiziert die Zielressource der Anfrage in Kombination mit den Informationen, die im {{HTTPHeader("Host")}} Header bereitgestellt werden. Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` vorangestellt ist. Oft verwendet, um Identifizierungsinformationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Erfolgreiches Abrufen von Ressourcen-Metadaten

Der folgende `curl`-Befehl erstellt eine `HEAD`-Anfrage für `example.com`:

```bash
curl --head example.com
```

Dies ist das Äquivalent zu einer `GET`-Anfrage, außer dass der Server keinen Nachrichtenkörper in die Antwort einschließen sollte. Es erstellt eine HTTP-Anfrage, die so aussieht:

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

Der Server sendet eine {{HTTPStatus("200", "200 OK")}} Antwort, die nur aus Headers besteht. Die Antwort ist effektiv Metadaten, die die Ressource beschreiben, anstatt die Ressource selbst (einige [Caching](/de/docs/Web/HTTP/Guides/Caching) Headers werden in diesem Beispiel der Kürze halber weggelassen):

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
