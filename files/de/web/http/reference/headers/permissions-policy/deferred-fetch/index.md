---
title: "Permissions-Policy: `deferred-fetch` Direktive"
short-title: deferred-fetch
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Die **`deferred-fetch`** {{HTTPHeader("Permissions-Policy")}} Direktive ist Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Diese Direktive, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, bestimmt, wie das Gesamtquotenlimit von 640KiB zwischen dem Top-Level-Ursprung und seinen Cross-Origin-Subframes verteilt wird. Standardmäßig erhält der Top-Level-Ursprung 512KiB und jedes Cross-Origin-Subframe erhält 8KiB von den restlichen 128KiB. Die `deferred-fetch` Berechtigungsrichtlinie kann erlauben, dass Sub-Frame-Ursprünge eine größere 64KiB Quote aus der 512KiB Top-Level-Quote erhalten, anstelle der 8KiB Minimalquote, die sie standardmäßig erhalten würden.

Weitere Details und Beispiele finden Sie unter [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <url-list>)
Permissions-policy: deferred-fetch=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen (jeder davon ist in Anführungszeichen gesetzt), denen eine höhere Quote von 64KiB aus der Hauptquote des Elternteils gewährt wird. Die 64KiB Quote wird zu dem Zeitpunkt gewährt, zu dem das Subframe erstellt wird.

Ein Cross-Origin-Subframe kann `deferred-fetch` einem seiner Cross-Origin-Subframe-Nachkommen gewähren und seine gesamte Quote delegieren. Dies funktioniert nur, wenn derzeit keine der Quoten verwendet wird.

Berechtigungsrichtlinienprüfungen sind von Quotenprüfungen nicht unterscheidbar. Der Aufruf von `fetchLater()` löst sowohl dann einen `QuotaExceededError` aus, wenn die Quote tatsächlich überschritten wurde als auch wenn die Quote für diesen Ursprung über eine Berechtigungsrichtlinie eingeschränkt wurde.

## Standardrichtlinie

Die Standard-Whitelist für `deferred-fetch` ist `self`.

## Beispiele

Weitere Beispiele finden Sie unter [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

### Die minimale Quote ausschöpfen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Subframe von `b.com` erhält bei Erstellung 64KiB von dem 512KiB-Limit des Top-Levels.
2. Ein Subframe von `c.com` ist nicht aufgelistet und erhält daher bei Erstellung 8KiB von dem 128KiB geteilten Limit.
3. 15 weitere Subframes von verschiedenen Ursprüngen würden bei der Erstellung 8KiB erhalten (ähnlich wie `c.com`).
4. Das nächste Subframe würde keine Quote erhalten.
5. Wenn eines der Subframes entfernt wird, werden seine zurückgestellten Abrufe gesendet.
6. Das nächste Subframe würde eine 8KiB Quote erhalten, da wieder Quote verfügbar ist.

## Die minimale Quote vollständig widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Subframe von `b.com` erhält bei Erstellung 64KiB.
2. Ein Subframe von `c.com` erhält bei Erstellung keine Quote.
3. Das Top-Level-Dokument und seine gleichartigen Nachkommen können bis zu 640KiB verwenden, aber das wird auf 574KiB reduziert, wenn ein `b.com` Subframe erstellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)
