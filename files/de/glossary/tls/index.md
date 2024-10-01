---
title: Transport Layer Security (TLS)
slug: Glossary/TLS
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

**Transport Layer Security (TLS)**, früher bekannt als {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}, ist ein {{Glossary("protocol", "Protokoll")}}, das von Anwendungen verwendet wird, um sicher über ein Netzwerk zu kommunizieren und Manipulation sowie Abhören von E-Mails, Web-Browsing, Nachrichten und anderen Protokollen zu verhindern. Sowohl TLS als auch SSL sind Client/Server-Protokolle, die die Kommunikationsprivatsphäre gewährleisten, indem sie kryptografische Protokolle verwenden, um Sicherheit über ein Netzwerk bereitzustellen. Wenn ein Server und ein Client TLS verwenden, wird sichergestellt, dass keine Drittpartei Nachrichten abhören oder manipulieren kann.

Alle modernen Browser unterstützen das TLS-Protokoll, wobei der Server ein gültiges {{Glossary("Digital_certificate", "digitales Zertifikat")}} bereitstellen muss, um seine Identität zu bestätigen und eine sichere Verbindung herzustellen. Es ist möglich, dass sich sowohl der Client als auch der Server gegenseitig authentifizieren, wenn beide Parteien ihre eigenen individuellen digitalen Zertifikate bereitstellen.

> [!NOTE]
> Alle großen Browser begannen Anfang 2020, die Unterstützung für TLS 1.0 und 1.1 zu entfernen; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Ab Version 74 wird Firefox einen [Sicherer Verbindungsfehler](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) zurückgeben, wenn er eine Verbindung zu Servern mit den älteren TLS-Versionen herstellt ([Firefox-Fehler 1606734](https://bugzil.la/1606734)).

## Siehe auch

- [Transport Layer Security](https://de.wikipedia.org/wiki/Transport_Layer_Security) (Wikipedia)
- [RFC 8446](https://datatracker.ietf.org/doc/html/rfc8446) (Das Transport Layer Security Protocol, Version 1.3)
- [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (Das Transport Layer Security Protocol, Version 1.2)
- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) (OWASP)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTPS", "HTTPS")}}
  - {{Glossary("SSL", "SSL")}}
