---
title: "Permissions-Policy: deferred-fetch"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **`deferred-fetch`**-Anweisung im {{HTTPHeader("Permissions-Policy")}}-Header ist Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Diese Anweisung, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, bestimmt, wie das Gesamtquotenlimit von 640KiB zwischen dem Top-Level-Ursprung und seinen Cross-Origin-Subframes verteilt wird. Standardmäßig erhält der Top-Level-Ursprung 512KiB, und jedes Cross-Origin-Subframe erhält 8KiB von den verbleibenden 128KiB. Die `deferred-fetch`-Berechtigungsrichtlinie kann Sub-Frame-Ursprüngen eine größere 64KiB-Quote aus der Hauptquote von 512KiB des Top-Levels gewähren, anstelle der 8KiB-Mindestquote, die sie ansonsten standardmäßig erhalten würden.

Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <url-list>)
Permissions-policy: deferred-fetch=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen (von denen jeder in Anführungszeichen steht), denen eine höhere Quote von 64KiB gewährt wird, die aus der Hauptquote des übergeordneten Elements entnommen wird. Die 64KiB-Quote wird zum Zeitpunkt der Erstellung des Subframes entnommen.

Ein Cross-Origin-Subframe kann `deferred-fetch` an einen seiner Cross-Origin-Subframe-Nachfahren gewähren und somit seine gesamte Quote delegieren. Dies funktioniert nur, wenn derzeit keine der Quote verwendet wird.

Berechtigungsrichtlinien-Prüfungen sind von Quotenprüfungen nicht zu unterscheiden. Ein Aufruf von `fetchLater()` wird sowohl dann einen `QuotaExceededError` auslösen, wenn die Quote tatsächlich überschritten wird, als auch wenn die Quote für diesen Ursprung durch eine Berechtigungsrichtlinie eingeschränkt wurde.

## Standardrichtlinie

Die Standard-Zugriffsliste für `deferred-fetch` ist `self`.

## Beispiele

Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Beispiele.

### Ausschöpfung der Mindestquote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB aus dem 512KiB-Limit des Top-Levels.
2. Ein Subframe von `c.com` ist nicht aufgeführt und erhält daher bei der Erstellung 8KiB aus dem gemeinsam genutzten Limit von 128KiB.
3. 15 weitere Subframes von unterschiedlichen Ursprüngen würden bei der Erstellung 8KiB erhalten (ähnlich wie `c.com`).
4. Das nächste Subframe würde keine Quote erhalten.
5. Wenn eines der Subframes entfernt wird, werden seine aufgeschobenen Fetches gesendet.
6. Das nächste Subframe würde eine 8KiB-Quote erhalten, da wieder Quote verfügbar ist.

## Vollständiger Entzug der Mindestquote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Subframe von `c.com` erhält bei der Erstellung keine Quote.
3. Das Top-Level-Dokument und seine gleichartigen Nachfahren können bis zu 640KiB nutzen, aber das reduziert sich auf 574KiB, wenn ein `b.com` Subframe erstellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
