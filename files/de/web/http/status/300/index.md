---
title: 300 Mehrere Auswahlmöglichkeiten
slug: Web/HTTP/Status/300
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`300 Mehrere Auswahlmöglichkeiten`** [Redirection Response](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass die Anfrage mehr als eine mögliche Antwort hat. Der Benutzer-Agent oder der Benutzer sollte eine davon auswählen.

> [!NOTE]
> Bei der transparenten Inhaltsverhandlung (Transparent Content Negotiation, TCN) entscheiden ein Client und ein Server gemeinsam über die beste Variante einer Ressource, wenn der Server mehrere Varianten hat.
> Die meisten modernen Browser bieten aufgrund der Komplexität in der Implementierung, des Mangels an Standardisierung, wie Clients automatisch aus Antworten wählen, und der zusätzlichen Round-Trips, die die Client-Server-Interaktion verlangsamen, eine schlechte Unterstützung hierfür.
> [Servergesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) ist wesentlich häufiger, wobei der Server basierend auf den Anfrage-Headern ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}} usw.) die passendste Ressource für den Client auswählt.

Der Server sollte der Antwort Inhalte hinzufügen, die eine Liste von Metadaten und URIs der Ressourcen enthält, aus denen der Benutzer oder Benutzer-Agent wählen kann. Das Format des Inhalts ist implementierungsspezifisch, sollte aber vom Benutzer-Agenten leicht geparst werden können (z.B. HTML oder JSON).

Wenn der Server eine bevorzugte Wahl hat, die der Client anfordern sollte, kann er sie in einem {{HTTPHeader("Location")}}-Header angeben.

## Status

```http
300 Multiple Choices
```

## Beispiele

### 300 Antwort mit Ressourcenliste

Das folgende Beispiel zeigt einen Anfrage-Antwort-Austausch bei der transparenten Inhaltsverhandlung. Ein Apache-Server bietet mehrere Varianten einer Ressource an, die in einer [Typkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) definiert sind; `index.html.en` für eine Ressource in Englisch und `index.html.fr` für eine französische Version:

```plain
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

Ein `Negotiate: trans` Anfrage-Header zeigt an, dass der Client TCN verwenden möchte, um eine Ressource auszuwählen. Die schlechte Unterstützung durch Browser für diesen Mechanismus bedeutet, dass ein Benutzer-Agent wie curl stattdessen verwendet werden muss:

```bash
 curl -v -H "Negotiate: trans" http://localhost/index
```

Dies führt zu der folgenden Anfrage:

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
<h1>Mehrere Auswahlmöglichkeiten</h1>
Verfügbare Varianten:
<ul>
<li><a href="index.html.en">index.html.en</a> , Typ text/html, Sprache en</li>
<li><a href="index.html.fr">index.html.fr</a> , Typ text/html, Sprache fr</li>
</ul>
</body></html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Statuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} temporäre Weiterleitung
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache Server Negotiation Algorithm](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Transparent Content Negotiation in HTTP")}}
