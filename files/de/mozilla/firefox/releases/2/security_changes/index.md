---
title: Sicherheit in Firefox 2
slug: Mozilla/Firefox/Releases/2/Security_changes
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

Dieser Artikel diskutiert Änderungen, die die Sicherheit in Firefox 2 betreffen.

## Schwache Verschlüsselungen standardmäßig deaktiviert

[Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) deaktiviert standardmäßig SSLv2 und die schwachen "Export"-Verschlüsselungssuites (diejenigen mit Schlüssellängen von weniger als 64 Bit), zugunsten von SSLv3. Dies bietet verbesserte Sicherheit.

Die bevorzugten Verschlüsselungsmethoden sind `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` und `TLS_RSA_WITH_3DES_EDE_CBC_SHA`. Einige Server beziehen sich auf diese als `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` und `SSL_RSA_WITH_3DES_EDE_CBC_SHA`.

Falls SSLv2-Unterstützung aktiviert werden muss, kann dies durch Setzen der entsprechenden `security.ssl2.*` Benutzerpräferenzen auf `true` erfolgen.

## Neue Funktionen

- Firefox 2 unterstützt [Elliptic Curve Cryptography](https://en.wikipedia.org/wiki/Elliptic_curve_cryptography) in TLS. Die Unterstützung ist derzeit auf Kurven von 256, 384 und 521 (ja, 521) Bit beschränkt.
- Firefox 2 unterstützt die TLS Server Name Indication Erweiterung, um sichere Verbindungen zu Servern zu ermöglichen, die mehrere virtuelle Server auf einer einzigen zugrunde liegenden Netzwerkadresse hosten, gemäß [RFC 3546](https://datatracker.ietf.org/doc/html/rfc3546).
- Wenn Firefox 2 eine [OCSP](https://en.wikipedia.org/wiki/Ocsp)-Anfrage stellt, um das Zertifikat eines Webservers zu validieren, verwendet es jetzt den Proxy, der für normalen HTTP-Verkehr konfiguriert wurde.

## Ermittlung, welche Verschlüsselungen verfügbar sind

Wie immer können Sie herausfinden, welche Verschlüsselungen unterstützt werden — und welche aktiviert oder deaktiviert sind — indem Sie zu about:config gehen und nach "ssl" oder "tls" suchen.

## Sicherheit des jar:-Protokolls verbessert

Um ein potenzielles Sicherheitsproblem bei der Verwendung des `jar:`-Protokolls zu beheben, ist es jetzt notwendig, JAR-Dateien mit dem MIME-Typ `application/java-archive` zu liefern. Weitere Details finden Sie unter [Security and the jar protocol](/de/docs/Security_and_the_jar_protocol).
