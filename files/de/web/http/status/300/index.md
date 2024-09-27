---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`300 Multiple Choices`** ([Redirection Response](/de/docs/Web/HTTP/Status#redirection_messages)) zeigt an, dass die Anfrage mehr als eine mögliche Antwort hat. Der User-Agent oder der Benutzer sollte eine davon auswählen.

> [!NOTE]
> Bei der transparenten Inhaltsverhandlung (TCN) entscheiden ein Client und ein Server gemeinsam über die beste Variante einer Ressource, wenn der Server mehrere Varianten hat. Die meisten modernen Browser haben aufgrund der Komplexität der Implementierungen, des Mangels an Standardisierung, wie Clients automatisch aus Antworten wählen, und der zusätzlichen Roundtrips, die die Interaktion zwischen Client und Server verlangsamen, eine schlechte Unterstützung. [Serverseitige Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) ist weitaus häufiger, wobei ein Server die am besten geeignete Ressource für den Client basierend auf den Anfrage-Headern ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}} usw.) auswählt.

Der Server sollte Inhalte in der Antwort einschließen, die eine Liste von Metadaten der Ressourcen und URIs enthalten, aus denen der Benutzer oder der User-Agent auswählen kann. Das Format des Inhalts ist implementierungsspezifisch, sollte jedoch vom User-Agent problemlos analysiert werden können (z. B. HTML oder JSON).

Wenn der Server eine bevorzugte Wahl hat, die der Client anfordern sollte, kann er diese in einem {{HTTPHeader("Location")}}-Header einschließen.

## Status

```http
300 Multiple Choices
```

## Beispiele

### 300 Antwort mit Liste von Ressourcen

Das folgende Beispiel zeigt einen Anfrage-Antwort-Austausch bei der transparenten Inhaltsverhandlung. Ein Apache-Server bietet mehrere Varianten einer Ressource an, die in einer [Typenkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) definiert sind; `index.html.en` für eine Ressource in Englisch und `index.html.fr` für eine französische Version:

```plain
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

Ein `Negotiate: trans` Anfrage-Header zeigt an, dass der Client TCN verwenden möchte, um eine Ressource auszuwählen. Eine schlechte Unterstützung durch Browser für diesen Mechanismus bedeutet, dass stattdessen ein User-Agent wie curl verwendet werden muss:

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

Wir erhalten eine `300` Antwort mit Details zu verschiedenen Darstellungen der angeforderten Ressource:

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
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} temporäre Weiterleitung
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache Server-Verhandlungsalgorithmus](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Transparent Content Negotiation in HTTP")}}
