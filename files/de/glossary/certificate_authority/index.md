---
title: Zertifizierungsstelle
slug: Glossary/Certificate_authority
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine **Zertifizierungsstelle** (CA) ist eine Organisation, die {{Glossary("Signature/Security", "digitale Zertifikate")}} und deren zugehörige {{Glossary("Key", "öffentliche Schlüssel")}} signiert und damit bestätigt, dass die enthaltenen Informationen und Schlüssel korrekt sind.

Bei einem digitalen Zertifikat für eine Website umfasst diese Information mindestens den Namen der Organisation, die das digitale Zertifikat angefordert hat (z. B. Mozilla Corporation), die Website, für die es bestimmt ist (z. B. mozilla.org), und die Zertifizierungsstelle.

Zertifizierungsstellen sind Teil der Internet-[Public Key Infrastruktur](https://en.wikipedia.org/wiki/Public_key_infrastructure), die es Browsern ermöglicht, die Identität von Websites zu überprüfen und sicher über TLS (also HTTPS) zu verbinden.

> [!NOTE]
> Webbrowser sind mit einer Liste von „Root-Zertifikaten“ vorab geladen. Der Browser kann diese verwenden, um zuverlässig zu überprüfen, ob das Website-Zertifikat von einer Zertifizierungsstelle signiert wurde, die auf das Root-Zertifikat „zurückverweist“ (d. h. vom Inhaber des Root-Zertifikats oder einer Zwischen-CA vertraut wurde). Letztlich beruht dieser Prozess darauf, dass jede CA angemessene Identitätsüberprüfungen durchführt, bevor ein Zertifikat signiert wird!

## Siehe auch

- [Zertifizierungsstelle](https://en.wikipedia.org/wiki/Certificate_authority) auf Wikipedia
- [Public Key Infrastruktur](https://en.wikipedia.org/wiki/Public_key_infrastructure) auf Wikipedia
- [Mozilla enthaltene CA-Zertifikatsliste](https://wiki.mozilla.org/CA/Included_Certificates)
