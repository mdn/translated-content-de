---
title: Transportschichtsicherheit (TLS)
slug: Glossary/TLS
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

**Transportschichtsicherheit (TLS)**, früher bekannt als {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}, ist ein {{Glossary("protocol")}}, das von Anwendungen zur sicheren Kommunikation über ein Netzwerk verwendet wird, um das Abhören oder Verändern von E-Mails, Web-Browsing, Messaging und anderen Protokollen zu verhindern. Sowohl TLS als auch SSL sind Client-/Serverprotokolle, die durch kryptographische Protokolle Sicherheit über ein Netzwerk bieten. Wenn ein Server und ein Client über TLS kommunizieren, wird sichergestellt, dass keine dritte Partei Nachrichten abhören oder manipulieren kann.

Alle modernen Browser unterstützen das TLS-Protokoll und verlangen vom Server, ein gültiges {{Glossary("Digital certificate", "digitales Zertifikat")}} vorzulegen, das seine Identität bestätigt, um eine sichere Verbindung herzustellen. Es ist möglich, dass sich sowohl der Client als auch der Server gegenseitig authentifizieren, wenn beide Parteien ihre eigenen individuellen digitalen Zertifikate bereitstellen.

> [!NOTE]
> Alle großen Browser begannen Anfang 2020 die Unterstützung für TLS 1.0 und 1.1 zu entfernen; stellen Sie sicher, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Ab Version 74 wird Firefox einen [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) Fehler zurückgeben, wenn er sich mit Servern, die die älteren TLS-Versionen verwenden, verbindet ([Firefox Bug 1606734](https://bugzil.la/1606734)).

## Siehe auch

- [Transportschichtsicherheit](https://en.wikipedia.org/wiki/Transport_Layer_Security) (Wikipedia)
- [RFC 8446](https://datatracker.ietf.org/doc/html/rfc8446) (Das Transportschichtsicherheitsprotokoll, Version 1.3)
- [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (Das Transportschichtsicherheitsprotokoll, Version 1.2)
- [Transportschichtsicherheit](/de/docs/Web/Security/Transport_Layer_Security)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) (OWASP)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTPS")}}
  - {{Glossary("SSL")}}
