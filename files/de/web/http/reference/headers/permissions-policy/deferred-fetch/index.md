---
title: "Permissions-Policy: deferred-fetch-Direktive"
short-title: deferred-fetch
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: 94ffd165232b5205418f8aa57127ee0854421db2
---

{{SeeCompatTable}}

Die **`deferred-fetch`** {{HTTPHeader("Permissions-Policy")}}-Direktive ist Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Diese Direktive, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, bestimmt, wie das gesamte Quotenlimit von 640KiB zwischen dem Ursprung der obersten Ebene und seinen Cross-Origin-Subframes aufgeteilt wird. Standardmäßig wird dem Ursprung der obersten Ebene 512KiB zugewiesen, und jedem Cross-Origin-Subframe werden 8KiB aus den verbleibenden 128KiB zugewiesen. Die `deferred-fetch`-Berechtigungsrichtlinie kann es Sub-Frame-Ursprüngen ermöglichen, ein größeres Kontingent von 64KiB aus dem 512KiB-Kontingent des Ursprung der obersten Ebene zu erhalten, anstelle der 8KiB Mindestquote, die sie sonst standardmäßig erhalten würden.

Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <url-list>)
Permissions-policy: deferred-fetch=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen (jeder in Anführungszeichen), denen ein höheres Kontingent von 64KiB gewährt wird, das aus dem Hauptkontingent des Elternteils entnommen wird. Das 64KiB-Kontingent wird zu dem Zeitpunkt entnommen, an dem das Subframe erstellt wird.

Ein Cross-Origin-Subframe kann `deferred-fetch` an einen seiner Cross-Origin-Subframe-Nachkommen gewähren und ihm sein gesamtes Kontingent übertragen. Dies funktioniert nur, wenn derzeit keines der Kontingente genutzt wird.

Berechtigungsmechanismen-Überprüfungen unterscheiden sich nicht von Kontingentüberprüfungen. Der Aufruf von `fetchLater()` löst einen `QuotaExceededError` aus, sowohl wenn das Kontingent tatsächlich überschritten wird, als auch wenn das Kontingent für diesen Ursprung durch eine Berechtigungsrichtlinie eingeschränkt wurde.

## Standardrichtlinie

Die Standard-Whitelist für `deferred-fetch` ist `self`.

## Beispiele

Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Beispiele.

### Nutzung des minimalen Kontingents

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB, aus dem 512KiB-Limit der obersten Ebene.
2. Ein Subframe von `c.com` ist nicht aufgeführt und erhält daher bei der Erstellung 8KiB aus dem 128KiB-Freigabelimit.
3. 15 weitere Subframes von verschiedenen Ursprüngen würden bei der Erstellung 8KiB erhalten (ähnlich wie `c.com`).
4. Das nächste Subframe würde kein Kontingent erhalten.
5. Wenn eines der Subframes entfernt wird, werden seine geplanten Abrufe gesendet.
6. Das nächste Subframe würde ein Kontingent von 8KiB erhalten, da wieder Kontingent verfügbar ist.

## Das minimale Kontingent vollständig widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Subframe von `c.com` erhält bei der Erstellung kein Kontingent.
3. Das Dokument der obersten Ebene und seine differenzierten Ursprungsnachkommen können bis zu 640KiB nutzen, aber das wird auf 574KiB reduziert, wenn ein `b.com`-Subframe erstellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
