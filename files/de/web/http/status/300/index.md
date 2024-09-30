---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`300 Multiple Choices`** [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die Anfrage mehr als eine mögliche Antwort hat. Der User-Agent oder der Benutzer sollte eine der Antworten auswählen.

> [!NOTE]
> Bei der Transparenten Inhaltsverhandlung (TCN) entscheiden der Client und der Server gemeinsam über die beste Variante einer Ressource, wenn der Server mehrere Varianten hat.
> Die meisten modernen Browser unterstützen dies kaum aufgrund der Komplexität in der Implementierung, mangelnder Standardisierung, wie Clients automatisch aus Antworten wählen, und den zusätzlichen Round-Trips, die die Interaktion zwischen Client und Server verlangsamen.
> [Server-gesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) ist weitaus gebräuchlicher, bei der der Server die passendste Ressource für den Client basierend auf den Anfrage-Headern ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.) auswählt.

Der Server sollte Inhalte in die Antwort aufnehmen, die eine Liste von Ressourcen-Metadaten und URIs enthalten, aus denen der Benutzer oder der User-Agent wählen kann. Das Format der Inhalte ist implementierungsspezifisch, sollte aber vom User-Agent leicht analysiert werden können (wie HTML oder JSON).

Falls der Server eine bevorzugte Wahl hat, die der Client anfordern soll, kann er diese in einem {{HTTPHeader("Location")}}-Header angeben.

## Status

```http
300 Multiple Choices
```

## Beispiele

### 300 Antwort mit Liste von Ressourcen

Das folgende Beispiel zeigt einen Austausch bei der Transparenten Inhaltsverhandlung. Ein Apache-Server bietet mehrere Varianten einer Ressource an, die in einer [Typenkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) definiert sind: `index.html.en` für eine Ressource in Englisch und `index.html.fr` für eine französische Version:

```plain
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

Ein `Negotiate: trans` Anfrage-Header zeigt an, dass der Client TCN benutzen möchte, um eine Ressource auszuwählen. Aufgrund der geringen Unterstützung durch Browser muss ein User-Agent wie curl verwendet werden:

```bash
 curl -v -H "Negotiate: trans" http://localhost/index
```

Dies führt zur folgenden Anfrage:

```http
GET /index HTTP/1.1
Host: localhost
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
```

Wir erhalten eine `300`-Antwort mit Details zu unterschiedlichen Darstellungen der angeforderten Ressource:

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

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} temporäre Umleitung
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache Server Verhandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Transparent Content Negotiation in HTTP")}}
