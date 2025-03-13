---
title: 300 Multiple Choices
slug: Web/HTTP/Reference/Status/300
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`300 Multiple Choices`** [Redirection Response](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass die Anfrage mehr als eine mögliche Antwort hat.
Der User-Agent oder der Benutzer sollte eine davon auswählen.

> [!NOTE]
> Bei der [agent-driven content negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) entscheiden ein Client und ein Server gemeinsam über die beste Variante einer bestimmten Ressource, wenn der Server mehrere Varianten hat.
> Die meisten Clients haben keine Methode, um automatisch aus Antworten auszuwählen, und die zusätzlichen Round-Trips verlangsamen die Interaktion zwischen Client und Server.
> [Server-driven content negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) ist viel üblicher, bei der ein Server die am besten geeignete Ressource für den Client basierend auf den Anfrage-Headern auswählt ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.).

Der Server sollte Inhalte in der Antwort bereitstellen, die eine Liste von Metadaten der Ressourcen und URIs enthalten, aus denen der Benutzer oder der User-Agent auswählen kann.
Das Format des Inhalts ist implementierungsspezifisch, sollte jedoch leicht vom User-Agent geparst werden können (wie HTML oder JSON).

Wenn der Server eine bevorzugte Wahl hat, die der Client anfordern sollte, kann er diese in einem {{HTTPHeader("Location")}}-Header einschließen.

## Status

```http
300 Multiple Choices
```

## Beispiele

### 300-Antwort mit einer Liste von Ressourcen

Das folgende Beispiel zeigt einen Anfrage-Antwort-Austausch bei der Transparenten Inhaltsverhandlung.
Ein Apache-Server bietet mehrere Varianten einer Ressource an, die in einer [Typenkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) definiert ist; `index.html.en` für eine Ressource in Englisch und `index.html.fr` für eine französische Version:

```plain
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

Ein `Negotiate: trans`-Anfrage-Header zeigt an, dass der Client TCN verwenden möchte, um eine Ressource auszuwählen.
Aufgrund der schlechten Browser-Unterstützung für diesen Mechanismus muss stattdessen ein User-Agent wie curl verwendet werden:

```bash
 curl -v -H "Negotiate: trans" http://localhost/index
```

Dies ergibt die folgende Anfrage:

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

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} temporäre Weiterleitung
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache Server Negotiation Algorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Transparent Content Negotiation in HTTP")}}
