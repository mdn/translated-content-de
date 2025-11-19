---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: a73b189594f4dbed3dd953d263ebd93f28ba16d0
---

Informell ist eine _Site_ eine Website, also eine Sammlung von Webseiten, die von derselben Domain bereitgestellt und von einer einzigen Organisation gepflegt werden, definiert durch {{Glossary("eTLD#etld1", "eTLD+1")}}.

Browser müssen manchmal genau zwischen verschiedenen Sites unterscheiden. Zum Beispiel darf der Browser nur [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookies an die gleiche Site senden, die sie gesetzt hat.

Für diese genauere Definition wird eine Site durch den _registrierbaren Domain_-Teil des Domain-Namens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domain-Namens direkt davor. Dies bedeutet, dass zum Beispiel `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Nach dieser Definition gehören `support.mozilla.org` und `developer.mozilla.org` zur gleichen Site, da `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema berücksichtigt, wenn zwischen Sites unterschieden wird. Dies würde `http://vpl.ca` und `https://vpl.ca` zu unterschiedlichen Sites machen. Das Einschließen des Schemas verhindert, dass eine unsichere (HTTP) Site als dieselbe Site wie eine sichere (HTTPS) Site behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als ein _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln für die Handhabung von [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookies angewandt.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (z. B. welche Ressourcen ein Script zugreifen darf) basierend auf dem {{Glossary("Origin", "Origin")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Site und umfasst das Schema, die gesamte Domain und den Port. Siehe auch [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

## Beispiele

Diese gehören zur gleichen Site, da die registrierbare Domain von `mozilla.org` dieselbe ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Diese werden als dieselbe Site betrachtet, da die Portnummer ignoriert wird, wenn die Site bestimmt wird:

- `https://example.com:8080`
- `https://example.com`

Diese sind nicht die gleiche Site, weil die registrierbare Domain der beiden URLs unterschiedlich ist:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Diese sind die gleiche Site oder unterschiedliche Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [Was ist eine URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Origin")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
