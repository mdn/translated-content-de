---
title: 300 Multiple Choices
slug: Web/HTTP/Reference/Status/300
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`300 Multiple Choices`** [Redirection Response](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass die Anfrage mehr als eine mögliche Antwort hat. Der User-Agent oder der Nutzer sollte eine davon auswählen.

> [!NOTE]
> Bei der [agentengesteuerten Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) entscheiden ein Client und Server gemeinsam über die beste Variante einer Ressource, wenn der Server mehrere Varianten besitzt.
> Die meisten Clients haben keine Methode, um automatisch zwischen Antworten zu wählen, und die zusätzlichen Round-Trips verlangsamen die Interaktion zwischen Client und Server.
> [Servergesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) ist weitaus häufiger, bei der der Server die am besten geeignete Ressource für den Client basierend auf den Anfrage-Headern auswählt ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, usw.).

Der Server sollte Inhalte in die Antwort aufnehmen, die eine Liste von Metadaten und URIs der Ressourcen enthalten, aus denen der Nutzer oder User-Agent wählen kann. Das Format des Inhalts ist implementierungsspezifisch, sollte aber vom User-Agent leicht geparst werden können (wie HTML oder JSON).

Wenn der Server eine bevorzugte Wahl hat, die der Client anfordern sollte, kann er diese in einem {{HTTPHeader("Location")}}-Header einschließen.

## Status

```http
300 Multiple Choices
```

## Beispiele

### 300 Antwort mit Liste von Ressourcen

Das folgende Beispiel demonstriert einen Request-Response-Austausch zur Transparent Content Negotiation. Ein Apache-Server bietet mehrere Varianten einer Ressource an, definiert in einer [Type Map](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps); `index.html.en` für eine Ressource in Englisch und `index.html.fr` für eine französische Version:

```http
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

Ein `Negotiate: trans` Request-Header zeigt an, dass der Client TCN verwenden möchte, um eine Ressource auszuwählen. Aufgrund der schlechten Browserunterstützung für diesen Mechanismus muss stattdessen ein User-Agent wie curl verwendet werden:

```bash
 curl -v -H "Negotiate: trans" http://localhost/index
```

Dies produziert die folgende Anfrage:

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
