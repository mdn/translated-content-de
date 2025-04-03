---
title: Zertifizierungsstelle
slug: Glossary/Certificate_authority
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Eine **Zertifizierungsstelle** (CA) ist eine Organisation, die {{Glossary("Digital_certificate", "digitale Zertifikate")}} und deren zugehörige {{Glossary("Key", "öffentliche Schlüssel")}} {{Glossary("Signature/Security", "signiert")}} und damit bestätigt, dass die enthaltenen Informationen und Schlüssel korrekt sind.

Für ein digitales Zertifikat einer Website umfasst diese Information mindestens den Namen der Organisation, die das digitale Zertifikat beantragt hat (z. B. Mozilla Corporation), die Website, für die es bestimmt ist (z. B. mozilla.org), und die Zertifizierungsstelle.

Zertifizierungsstellen sind Teil der Internet-[Public-Key-Infrastruktur](https://en.wikipedia.org/wiki/Public_key_infrastructure), die es Browsern ermöglicht, die Identität von Websites zu überprüfen und sicher über TLS zu verbinden (also über HTTPS).

> [!NOTE]
> Webbrowser kommen mit einer vorinstallierten Liste von "Root-Zertifikaten". Der Browser kann diese verwenden, um zuverlässig zu überprüfen, dass das Website-Zertifikat von einer Zertifizierungsstelle signiert wurde, die bis zum Root-Zertifikat "zurückverfolgt" werden kann (d.h. die vom Eigentümer des Root-Zertifikats oder einer Zwischen-CA vertraut wurde). Letztendlich hängt dieser Prozess davon ab, dass jede CA vor der Signierung eines Zertifikats angemessene Identitätsprüfungen durchführt!

## Siehe auch

- [Zertifizierungsstelle](https://en.wikipedia.org/wiki/Certificate_authority) auf Wikipedia
- [Public-Key-Infrastruktur](https://en.wikipedia.org/wiki/Public_key_infrastructure) auf Wikipedia
- [Liste der von Mozilla eingeschlossenen CA-Zertifikate](https://wiki.mozilla.org/CA/Included_Certificates)
