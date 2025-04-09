---
title: "Permissions-Policy: deferred-fetch"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die Richtlinien `deferred-fetch` und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} {{HTTPHeader("Permissions-Policy")}} sind Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Sie bestimmen, wie das gesamte 640KiB-Quotenlimit zwischen dem obersten Ursprung und seinen cross-origin Subframes verteilt wird. Standardmäßig erhält der oberste Ursprung 512KiB, und jedes cross-origin Subframe erhält 8KiB des verbleibenden 128KiB. Die `deferred-fetch` Berechtigungsrichtlinie kann es ermöglichen, dass Subframe-Ursprünge ein größeres 64KiB-Quota aus dem obersten 512KiB-Quota erhalten, anstelle der 8KiB minimalen Quota, die sie ansonsten standardmäßig erhalten würden.

Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <urllist>)
Permissions-policy: deferred-fetch=(<urllist>)
```

- `<urllist>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen (von denen jeder in Anführungszeichen gesetzt ist), die eine höhere Quota von 64KiB aus dem Hauptquota des Elternteils erhalten. Die 64KiB-Quota wird zum Zeitpunkt der Erstellung des Subframes entnommen.

Ein cross-origin Subframe kann `deferred-fetch` einem seiner cross-origin Subframe-Nachkommen gewähren und damit seine gesamte Quota delegieren. Dies funktioniert nur, wenn keiner der Quoten derzeit in Gebrauch ist.

Prüfungen der Berechtigungsrichtlinien sind nicht von Quotenprüfungen zu unterscheiden. Der Aufruf von `fetchLater()` wird sowohl dann einen `QuotaExceededError` auslösen, wenn die Quote tatsächlich überschritten wird, als auch wenn die Quote für diesen Ursprung über eine Berechtigungsrichtlinie eingeschränkt wurde.

## Standardrichtlinie

Die Standard-Whitelist für `deferred-fetch` ist `self`.

## Beispiele

Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Beispiele.

### Verwendung der minimalen Quota

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Subframe von `b.com` erhält 64KiB bei der Erstellung aus dem 512KiB-Limit des obersten Ursprungs.
2. Ein Subframe von `c.com` ist nicht aufgelistet und erhält daher 8KiB bei der Erstellung aus dem gemeinsamen 128KiB-Limit.
3. 15 weitere Subframes verschiedener Ursprünge würden 8KiB bei der Erstellung erhalten (ähnlich wie `c.com`).
4. Das nächste Subframe würde kein Quota erhalten.
5. Wenn eines der Subframes entfernt wird, werden seine aufgeschobenen Abrufe gesendet.
6. Das nächste Subframe würde ein 8KiB-Quota erhalten, da wieder Quota verfügbar ist.

## Die minimale Quota vollständig widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Subframe von `b.com` erhält 64KiB bei der Erstellung.
2. Ein Subframe von `c.com` erhält bei der Erstellung kein Quota.
3. Das oberste Dokument und seine gleich-originierten Nachfahren können bis zu den vollen 640KiB nutzen, aber das wird auf 574KiB reduziert, wenn ein `b.com`-Subframe erstellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
