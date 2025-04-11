---
title: "Permissions-Policy: deferred-fetch"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **`deferred-fetch`**-Direktive des {{HTTPHeader("Permissions-Policy")}} ist Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Diese Direktive, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, bestimmt, wie das gesamte Quotenlimit von 640KiB zwischen dem Top-Level-Ursprung und seinen cross-origin Unterrahmen verteilt wird. Standardmäßig erhält der Top-Level-Ursprung 512KiB, und jeder cross-origin Unterrahmen erhält 8KiB von den restlichen 128KiB. Die `deferred-fetch`-Permission-Policy kann es ermöglichen, dass Unterrahmen-Ursprünge eine größere Quote von 64KiB aus der Top-Level-512KiB-Quote gewährt bekommen, anstelle der 8KiB Minimalquote, die sie sonst standardmäßig erhalten würden.

Siehe [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <urllist>)
Permissions-policy: deferred-fetch=(<urllist>)
```

- `<urllist>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen (jeder in Anführungszeichen), denen eine höhere Quote von 64KiB zugewiesen wird, die aus der Hauptquote der Eltern übernommen wird. Die 64KiB-Quote wird zu dem Zeitpunkt zugewiesen, an dem der Unterrahmen erstellt wird.

Ein cross-origin Unterrahmen kann `deferred-fetch` an einen seiner cross-origin Unterrahmen-Nachfolger gewähren und seine gesamte Quote delegieren. Dies funktioniert nur, wenn momentan keine der Quoten verwendet wird.

Permission-Policy-Überprüfungen sind nicht von Quotenüberprüfungen unterscheidbar. Ein Aufruf von `fetchLater()` wird einen `QuotaExceededError` auslösen, sowohl wenn die Quote tatsächlich überschritten ist, als auch wenn die Quote für diesen Ursprung über eine Permission-Policy eingeschränkt wurde.

## Standardrichtlinie

Die Standard-Zulassungsliste für `deferred-fetch` ist `self`.

## Beispiele

Siehe [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Beispiele.

### Verwendung der Minimalquote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Unterrahmen von `b.com` erhält bei Erstellung 64KiB aus dem 512KiB-Limit der Top-Ebene.
2. Ein Unterrahmen von `c.com` wird nicht aufgeführt und erhält daher bei Erstellung 8KiB aus dem 128KiB gemeinsamen Limit.
3. 15 weitere Unterrahmen verschiedener Ursprünge würden bei Erstellung jeweils 8KiB erhalten (ähnlich wie `c.com`).
4. Der nächste Unterrahmen würde keine Quote erhalten.
5. Wenn einer der Unterrahmen entfernt wird, werden dessen zurückgestellte Abrufe gesendet.
6. Der nächste Unterrahmen würde eine 8KiB-Quote erhalten, da wieder eine Quote verfügbar ist.

## Die Minimalquote vollständig widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Unterrahmen von `b.com` erhält bei Erstellung 64KiB.
2. Ein Unterrahmen von `c.com` erhält bei Erstellung keine Quote.
3. Das Dokument der obersten Ebene und seine gleichwertigen Ursprungsnachfolger können bis zu den vollen 640KiB verwenden, dies wird jedoch auf 574KiB reduziert, wenn ein `b.com`-Unterrahmen erstellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
