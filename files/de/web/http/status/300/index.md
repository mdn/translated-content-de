---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{HTTPSidebar}}

Der HTTP **`300 Multiple Choices`** [redirection response](/de/docs/Web/HTTP/Status#redirection_messages) Statuscode zeigt an, dass die Anfrage mehr als eine mögliche Antwort hat.
Der Benutzer-Agent oder der Benutzer sollte eine davon wählen.

> [!NOTE]
> Bei der [agent-engesteuerten Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation) entscheiden ein Client und ein Server gemeinsam die beste Variante einer gegebenen Ressource, wenn der Server mehrere Varianten besitzt.
> Die meisten Clients haben keine Methode, um automatisch zwischen Antworten zu wählen, und die zusätzlichen Round-Trips verlangsamen die Interaktion zwischen Client und Server.
> [Server-gesteuerte Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) ist weitaus häufiger, wobei ein Server die geeignetste Ressource für den Client basierend auf den Anfrage-Headern auswählt ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.).

Der Server sollte Inhalte in die Antwort aufnehmen, die eine Liste von Ressourcendaten und URIs enthalten, aus denen der Benutzer oder Benutzer-Agent wählen kann.
Das Format der Inhalte ist implementationsspezifisch, sollte aber vom Benutzer-Agenten leicht geparst werden können (wie HTML oder JSON).

Wenn der Server eine bevorzugte Wahl hat, die der Client anfordern sollte, kann er diese in einem {{HTTPHeader("Location")}}-Header angeben.

## Status

```http
300 Multiple Choices
```

## Beispiele

### 300-Antwort mit Liste von Ressourcen

Das folgende Beispiel zeigt einen Transparenten Inhaltsaushandlungs-Request-Response-Austausch.
Ein Apache-Server bietet mehrere Varianten einer Ressource an, die in einer [typen Karte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) definiert sind; `index.html.en` für eine Ressource in Englisch und `index.html.fr` für eine französische Version:

```plain
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

Ein `Negotiate: trans` Anfrage-Header zeigt an, dass der Client TCN verwenden möchte, um eine Ressource auszuwählen.
Schlechte Browserunterstützung für diesen Mechanismus bedeutet, dass ein Benutzer-Agent wie curl stattdessen verwendet werden muss:

```bash
 curl -v -H "Negotiate: trans" http://localhost/index
```

Dies erzeugt die folgende Anfrage:

```http
GET /index HTTP/1.1
Host: localhost
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
```

Wir erhalten eine `300`-Antwort mit Details zu verschiedenen Darstellungen der angeforderten Ressource:

```http
HTTP/1.1 300 Multiple Choices
Date: Fri, 30 Aug 2024 09:21:48 GMT
Server: Apache/2.4.59 (Unix)
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"index.html.fr" 1 {type text/html} {language fr} {length 45}}
Vary: negotiate,accept-language
TCN: list
Content-Length: 419
Content-Type: text/html; charset=iso-8859-1

<html><head>
<title>300 Multiple Choices</title>
</head><body>
<h1>Multiple Choices</h1>
Available variants:
<ul>
<li><a href="index.html.en">index.html.en</a> , type text/html, language en</li>
<li><a href="index.html.fr">index.html.fr</a> , type text/html, language fr</li>
</ul>
</body></html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP Antwort-Statuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} vorübergehende Weiterleitung
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache-Server-Verhandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Transparent Content Negotiation in HTTP")}}
