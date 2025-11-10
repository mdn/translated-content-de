---
title: Transport Layer Security (TLS)
slug: Glossary/TLS
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Transport Layer Security (TLS)**, früher bekannt als {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}, ist ein {{Glossary("protocol", "Protokoll")}}, das von Anwendungen genutzt wird, um sicher über ein Netzwerk zu kommunizieren und Manipulationen und Lauschen bei E-Mails, Web-Browsing, Messaging und anderen Protokollen zu verhindern. Sowohl TLS als auch SSL sind Client-/Server-Protokolle, die die Kommunikationsprivatsphäre sicherstellen, indem sie kryptografische Protokolle verwenden, um Sicherheit über ein Netzwerk bereitzustellen. Wenn ein Server und ein Client mithilfe von TLS kommunizieren, wird sichergestellt, dass keine Drittpartei Nachrichten abhören oder manipulieren kann.

Alle modernen Browser unterstützen das TLS-Protokoll, wobei der Server ein gültiges {{Glossary("Digital_certificate", "digitales Zertifikat")}} vorlegen muss, das seine Identität bestätigt, um eine sichere Verbindung herzustellen. Es ist möglich, dass sich sowohl der Client als auch der Server gegenseitig authentifizieren, wenn beide Parteien ihre eigenen individuellen digitalen Zertifikate bereitstellen.

> [!NOTE]
> Alle großen Browser begannen Anfang 2020 damit, die Unterstützung für TLS 1.0 und 1.1 zu entfernen; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Ab Version 74 wird Firefox einen [Sichere Verbindung fehlgeschlagen](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect)-Fehler zurückgeben, wenn er sich mit Servern verbindet, die die älteren TLS-Versionen verwenden ([Firefox-Fehler 1606734](https://bugzil.la/1606734)).

## Siehe auch

- [Transport Layer Security](https://de.wikipedia.org/wiki/Transport_Layer_Security) (Wikipedia)
- [RFC 8446](https://datatracker.ietf.org/doc/html/rfc8446) (The Transport Layer Security Protocol, Version 1.3)
- [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (The Transport Layer Security Protocol, Version 1.2)
- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) (OWASP)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTPS", "HTTPS")}}
  - {{Glossary("SSL", "SSL")}}
