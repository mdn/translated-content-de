---
title: Fetch-Direktive
slug: Glossary/Fetch_directive
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

**{{Glossary("CSP", "CSP")}} Fetch-Direktiven** werden in einem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet und steuern, von welchen Orten bestimmte Ressourcentypen geladen werden dürfen. Zum Beispiel ermöglicht {{CSP("script-src")}} Entwicklern, vertrauenswürdige Quellen von Skripten auf einer Seite auszuführen, während {{CSP("font-src")}} die Quellen von Webfonts kontrolliert.

Alle Fetch-Direktiven greifen auf {{CSP("default-src")}} zurück. Das bedeutet, wenn eine Fetch-Direktive im CSP-Header fehlt, wird der User-Agent die `default-src`-Direktive heranziehen.

Siehe [Fetch-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives) für eine vollständige Liste.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CSP", "CSP")}}
  - {{Glossary("Reporting_directive", "Reporting-Direktive")}}
  - {{Glossary("Document_directive", "Document-Direktive")}}
  - {{Glossary("Navigation_directive", "Navigation-Direktive")}}
- Referenzen
  - <https://www.w3.org/TR/CSP/#directives-fetch>
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
