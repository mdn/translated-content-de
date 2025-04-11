---
title: "Permissions-Policy: deferred-fetch-minimal"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **`deferred-fetch-minimal`**-Richtlinie im {{HTTPHeader("Permissions-Policy")}} ist Teil der [`fetchLater()`-API](/de/docs/Web/API/fetchLater_API).

Diese Richtlinie bestimmt zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}, wie das gesamte Quotalimit von 640 KiB zwischen dem Top-Level-Ursprung und seinen Cross-Origin-Subframes verteilt wird. Standardmäßig erhält der Top-Level-Ursprung 512 KiB, und jedes Cross-Origin-Subframe erhält 8 KiB von den verbleibenden 128 KiB. Die `deferred-fetch-minimal`-Richtlinie kann auch alle Ursprünge blockieren; dadurch wird das geteilte 128 KiB-Limit dem Top-Level-Quota umverteilt, wodurch es Zugang zum vollständigen 640 KiB-Limit erhält.

Sehen Sie sich den [`fetchLater()`-Quotenleitfaden](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele an.

## Syntax

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<urllist>)
```

- `<urllist>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen, denen erlaubt wird, das sekundäre 128 KiB-Quota zu nutzen (mit maximal 8 KiB pro Subframe).

Ein Top-Level-Frame mit der `deferred-fetch-minimal`-Erlaubnis, die auf `self` oder `()` gesetzt ist, erlaubt nicht, dass das standardmäßige geteilte 128 kb-Quota von Cross-Origin-Subframes genutzt wird. Stattdessen wird das 128 KiB-Quota für Subframes zu seinem normalen Quota hinzugefügt.

## Standardrichtlinie

Die Standard-Whitelist für `deferred-fetch-minimal` ist `*`.

## Beispiele

Sehen Sie sich den [`fetchLater()`-Quotenleitfaden](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Beispiele an.

### Verwendung des minimalen Quotas

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Subframe von `b.com` erhält bei Erstellung 64 KiB vom 512 KiB-Limit des Top-Levels.
2. Ein Subframe von `c.com` ist nicht gelistet und erhält somit bei Erstellung 8 KiB vom 128 KiB-geteilten Limit.
3. 15 weitere Subframes würden bei ihrer Erstellung 8 KiB erhalten (ähnlich wie `c.com`, und ein weiteres `c.com`-Subframe würde ebenfalls ein weiteres 8 KiB-Quota erhalten).
4. Dem nächsten Subframe wird kein Quota gewährt.
5. Wenn eines der Subframes entfernt wird, werden seine verzögerten Abrufe gesendet.
6. Dem nächsten Subframe würde ein 8 KiB-Quota zugewiesen, da wieder Quota verfügbar ist.

## Völliges Zurückziehen des minimalen Quotas mit Ausnahmen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Subframe von `b.com` erhält bei Erstellung 64 KiB.
2. Ein Subframe von `c.com` erhält bei Erstellung kein Quota.
3. Das Top-Level-Dokument und seine gleichartigen Nachkommen können bis zu 640 KiB verwenden, aber das wird auf 574 KiB reduziert, wenn ein `b.com`-Subframe erstellt wird.

## Völliges Zurückziehen des minimalen Quotas ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Top-Level-Dokument und seine gleichartigen Nachkommen können das volle 640 KiB-Quota nutzen.
2. Subframes erhalten kein Quota und können `fetchLater()` nicht verwenden.

## Einschränkung des minimalen Quotas auf benannte Ursprünge

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. Ein Subframe von `b.com` erhält bei Erstellung 64 KiB.
2. Ein Subframe von `c.com` erhält bei Erstellung 8 KiB.
3. Ein Subframe von `d.com` erhält bei Erstellung kein Quota.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()`-API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
