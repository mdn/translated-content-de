---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Informell ist eine _Site_ eine Website, die eine Sammlung von Webseiten umfasst, die von derselben Domain bereitgestellt und von einer einzigen Organisation verwaltet werden, definiert durch {{Glossary("eTLD#etld1", "eTLD+1")}}.

Browsers müssen manchmal genau zwischen verschiedenen Sites unterscheiden. Zum Beispiel darf der Browser [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookies nur an die gleiche Site senden, die sie gesetzt hat.

Für diese genauere Definition wird eine Site durch den _registrierbaren Domain_-Teil des Domainnamens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domainnamens direkt davor. Das bedeutet, dass zum Beispiel `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Nach dieser Definition sind `support.mozilla.org` und `developer.mozilla.org` Teil derselben Site, da `mozilla.org` eine registrierbare Domain ist.

In manchen Kontexten wird auch das Schema betrachtet, wenn Sites unterschieden werden. Dies würde `http://vpl.ca` und `https://vpl.ca` zu verschiedenen Sites machen. Die Einbeziehung des Schemas verhindert, dass eine unsichere (HTTP) Site als die gleiche Site wie eine sichere (HTTPS) Site behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln für die Behandlung von [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookies angewandt.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (zum Beispiel, welche Ressourcen ein Skript zugreifen darf) basierend auf dem {{Glossary("Origin", "Origin")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Site, da es das Schema, die gesamte Domain und den Port umfasst. Siehe auch [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy).

## Beispiele

Dies sind dieselben Sites, weil die registrierbare Domain `mozilla.org` gleich ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Diese werden als dieselbe Site betrachtet, weil die Portnummer ignoriert wird, wenn die Site bestimmt wird:

- `https://example.com:8080`
- `https://example.com`

Dies sind nicht dieselben Sites, weil sich die registrierbare Domain der beiden URLs unterscheidet:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Dies sind dieselben Sites oder unterschiedliche Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [Was ist eine URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Origin")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
