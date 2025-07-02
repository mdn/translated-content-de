---
title: Sicherheit in Firefox 2
slug: Mozilla/Firefox/Releases/2/Security_changes
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel behandelt Änderungen, die die Sicherheit in Firefox 2 betreffen.

## Schwache Chiffren standardmäßig deaktiviert

[Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) deaktiviert standardmäßig SSLv2 und die schwachen "Export"-Chiffre-Suiten (solche mit Schlüssellängen von weniger als 64 Bit) zugunsten von SSLv3. Dies bietet verbesserte Sicherheit.

Die bevorzugten Verschlüsselungsmethoden sind `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` und `TLS_RSA_WITH_3DES_EDE_CBC_SHA`. Einige Server beziehen sich auf diese als `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` und `SSL_RSA_WITH_3DES_EDE_CBC_SHA`.

Falls SSLv2-Unterstützung aktiviert werden muss, kann dies durch Setzen der entsprechenden Benutzerpräferenzen `security.ssl2.*` auf `true` erfolgen.

## Neue Funktionen

- Firefox 2 unterstützt [Elliptische Kurven-Kryptographie](https://en.wikipedia.org/wiki/Elliptic_curve_cryptography) in TLS. Die Unterstützung ist derzeit auf Kurven von 256, 384 und 521 (ja, 521) Bit beschränkt.
- Firefox 2 unterstützt die TLS-Erweiterung für Servernamenanzeige, um sichere Verbindungen zu Servern zu erleichtern, die mehrere virtuelle Server auf einer einzigen zugrundeliegenden Netzwerkadresse hosten, gemäß [RFC 3546](https://datatracker.ietf.org/doc/html/rfc3546).
- Wenn Firefox 2 eine [OCSP](https://en.wikipedia.org/wiki/Ocsp)-Anfrage zur Validierung eines Webserverzertifikats stellt, nutzt es nun den Proxy, der für den normalen HTTP-Verkehr konfiguriert ist.

## Ermitteln, welche Chiffren verfügbar sind

Wie immer können Sie herausfinden, welche Chiffren unterstützt werden — und welche aktiviert oder deaktiviert sind — indem Sie about:config aufrufen und nach "ssl" oder "tls" suchen.

## Sicherheit für das `jar:`-Protokoll verbessert

Um ein mögliches Sicherheitsproblem bei der Verwendung des `jar:`-Protokolls zu beheben, ist es jetzt notwendig, JAR-Dateien mit dem MIME-Typ `application/java-archive` bereitzustellen. Weitere Details finden Sie unter [Sicherheit und das jar-Protokoll](/de/docs/Security_and_the_jar_protocol).
