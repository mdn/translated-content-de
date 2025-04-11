---
title: 300 Multiple Choices
slug: Web/HTTP/Reference/Status/300
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`300 Multiple Choices`** [Redirektionsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) zeigt an, dass die Anfrage mehr als eine mögliche Antwort hat. Der Benutzeragent oder der Benutzer sollte eine der Antworten auswählen.

> [!NOTE]
> Bei der [agentgesteuerten Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) entscheiden ein Client und ein Server gemeinsam über die beste Variante einer gegebenen Ressource, wenn der Server mehrere Varianten hat.
> Die meisten Clients haben keine Methode zur automatischen Auswahl aus den Antworten, und die zusätzlichen Round-Trips verlangsamen die Client-Server-Interaktion.
> [Servergesteuerte Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) ist viel häufiger, bei der ein Server die geeignetste Ressource für den Client basierend auf den Anfrage-Headern auswählt ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}} usw.).

Der Server sollte Inhalte in der Antwort einschließen, die eine Liste von Metadaten und URIs der Ressourcen enthalten, aus denen der Benutzer oder der Benutzeragent auswählen kann. Das Format des Inhalts ist implementationsspezifisch, sollte jedoch vom Benutzeragenten leicht analysiert werden können (wie HTML oder JSON).

Falls der Server eine bevorzugte Wahl hat, die der Client anfordern sollte, kann er diese in einem {{HTTPHeader("Location")}}-Header einfügen.

## Status

```http
300 Multiple Choices
```

## Beispiele

### 300-Antwort mit Liste von Ressourcen

Das folgende Beispiel zeigt einen Austausch von Anfragen und Antworten bei transparenter Inhaltsaushandlung. Ein Apache-Server bietet mehrere Varianten einer Ressource an, die in einer [Typenkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) definiert sind; `index.html.en` für eine Ressource auf Englisch und `index.html.fr` für eine französische Version:

```http
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

Ein `Negotiate: trans`-Anfrage-Header zeigt an, dass der Client TCN verwenden möchte, um eine Ressource auszuwählen. Die schlechte Unterstützung dieser Mechanik durch Browser bedeutet, dass ein Benutzeragent wie curl stattdessen verwendet werden muss:

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

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} temporäre Umleitung
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache Server Negotiation Algorithm](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Transparent Content Negotiation in HTTP")}}
