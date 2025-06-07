---
title: Fetch-Richtlinie
slug: Glossary/Fetch_directive
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{GlossarySidebar}}

**{{Glossary("CSP", "CSP")}}-Fetch-Richtlinien** werden in einem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet und steuern die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen. Zum Beispiel erlaubt {{CSP("script-src")}} Entwicklern, vertrauenswürdige Quellen für Skripte festzulegen, die auf einer Seite ausgeführt werden dürfen, während {{CSP("font-src")}} die Quellen von Webfonts kontrolliert.

Alle Fetch-Richtlinien greifen auf {{CSP("default-src")}} zurück. Das bedeutet, wenn eine Fetch-Richtlinie im CSP-Header fehlt, sucht der User Agent nach der `default-src`-Richtlinie.

Siehe [Fetch-Richtlinien](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives) für eine vollständige Liste.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CSP", "CSP")}}
  - {{Glossary("Reporting_directive", "Berichtsrichtlinie")}}
  - {{Glossary("Document_directive", "Dokumentrichtlinie")}}
  - {{Glossary("Navigation_directive", "Navigationsrichtlinie")}}
- Referenz
  - [Fetch-Richtlinien](https://w3c.github.io/webappsec-csp/#directives-fetch) Spezifikation
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
