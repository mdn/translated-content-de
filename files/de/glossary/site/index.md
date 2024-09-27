---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Informell ist ein _site_ eine Website, was eine Sammlung von Webseiten bedeutet, die von derselben Domain bedient und von einer einzigen Organisation verwaltet werden.

Browser müssen manchmal genau zwischen verschiedenen Sites unterscheiden. Zum Beispiel darf der Browser nur [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Cookies an dieselbe Site senden, die sie gesetzt hat.

Für diese genauere Definition wird eine Site durch den registrierbaren Domain-Teil des Domainnamens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domainnamens direkt davor. Dies bedeutet, dass beispielsweise `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Dieser Definition zufolge sind `support.mozilla.org` und `developer.mozilla.org` Teil derselben Site, da `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema berücksichtigt, wenn Sites unterschieden werden. Dies würde `http://vpl.ca` und `https://vpl.ca` zu verschiedenen Sites machen. Die Einbeziehung des Schemas verhindert, dass eine unsichere (HTTP) Site als dieselbe Site wie eine sichere (HTTPS) Site behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln für die Handhabung von [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Cookies angewendet.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (zum Beispiel, welche Ressourcen ein Skript zugreifen kann) basierend auf dem [Origin](/de/docs/Glossary/Origin) einer Ressource. Dies ist ein restriktiveres Konzept als die Site, das das Schema, die gesamte Domain und den Port umfasst. Siehe auch [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

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

Dies sind dieselbe Site, oder verschiedene Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [Was ist eine URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - [Origin](/de/docs/Glossary/Origin)
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
