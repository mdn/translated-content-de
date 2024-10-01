---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Informell ist eine _Site_ eine Website, also eine Sammlung von Webseiten, die von derselben Domain bereitgestellt und von einer einzigen Organisation gepflegt werden.

Browser müssen manchmal genau zwischen verschiedenen Sites unterscheiden. Zum Beispiel darf der Browser nur [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Cookies an die gleiche Site senden, die sie gesetzt hat.

Für diese genauere Definition wird eine Site durch den _registrierbaren Domain_-Teil des Domainnamens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domainnamens unmittelbar davor. Das bedeutet zum Beispiel, dass `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Gemäß dieser Definition gehören `support.mozilla.org` und `developer.mozilla.org` zur gleichen Site, weil `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema berücksichtigt, wenn Sites unterschieden werden. Dies würde `http://vpl.ca` und `https://vpl.ca` zu unterschiedlichen Sites machen. Die Berücksichtigung des Schemas verhindert, dass eine unsichere (HTTP) Site als die gleiche Site wie eine sichere (HTTPS) Site behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln für die Handhabung von [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Cookies angewendet.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (zum Beispiel, welche Ressourcen ein Skript zugreifen kann) basierend auf dem {{Glossary("Origin", "Ursprung")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Site und umfasst das Schema, die gesamte Domain und den Port. Siehe auch ["Same-origin policy"](/de/docs/Web/Security/Same-origin_policy).

## Beispiele

Dies sind die gleichen Sites, weil die registrierbare Domain `mozilla.org` dieselbe ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Dies sind die gleichen Sites, weil der Port nicht relevant ist:

- `https://example.com:8080`
- `https://example.com`

Dies sind nicht die gleichen Sites, weil sich die registrierbare Domain der beiden URLs unterscheidet:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Dies sind die gleichen Sites oder unterschiedliche Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [Was ist eine URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Ursprung")}}
- ["Same-origin policy"](/de/docs/Web/Security/Same-origin_policy)
