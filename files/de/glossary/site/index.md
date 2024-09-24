---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Informell ist eine _Site_ eine Website, eine Sammlung von Webseiten, die von derselben Domain bereitgestellt und von einer einzigen Organisation verwaltet werden.

Browser müssen manchmal genau zwischen verschiedenen Sites unterscheiden. Zum Beispiel darf der Browser [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Cookies nur an dieselbe Site senden, die sie gesetzt hat.

Für diese präzisere Definition wird eine Site durch den _registrierbaren Domain_-Teil des Domainnamens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domainnamens unmittelbar davor. Das bedeutet, dass beispielsweise `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Nach dieser Definition sind `support.mozilla.org` und `developer.mozilla.org` Teil derselben Site, weil `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema berücksichtigt, wenn Sites differenziert werden. Dies würde `http://vpl.ca` und `https://vpl.ca` zu unterschiedlichen Sites machen. Die Aufnahme des Schemas verhindert, dass eine unsichere (HTTP) Site als dieselbe Site behandelt wird wie eine sichere (HTTPS) Site. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln zur Handhabung von [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Cookies angewendet.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (z. B. welche Ressourcen ein Skript zugreifen kann) basierend auf dem {{Glossary("Origin")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Site, da es das Schema, die gesamte Domain und den Port umfasst. Siehe auch [same-origin policy](/de/docs/Web/Security/Same-origin_policy).

## Beispiele

Dies sind dieselbe Site, weil die registrierbare Domain von `mozilla.org` dieselbe ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Dies sind dieselbe Site, weil der Port nicht relevant ist:

- `https://example.com:8080`
- `https://example.com`

Dies sind nicht dieselbe Site, weil die registrierbare Domain der beiden URLs unterschiedlich ist:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Dies sind dieselbe Site oder verschiedene Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [What is a URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- Verwandte Glossary-Begriffe:
  - {{Glossary("Origin")}}
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
