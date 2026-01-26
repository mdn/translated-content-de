---
title: "Permissions-Policy: deferred-fetch-Direktive"
short-title: deferred-fetch
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{SeeCompatTable}}

Die **`deferred-fetch`**-Direktive des {{HTTPHeader("Permissions-Policy")}} ist Teil der [Fetch-API](/de/docs/Web/API/Fetch_API).

Diese Direktive bestimmt zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, wie das gesamte Quotenlimit von 640KiB zwischen dem obersten Ursprung und seinen fremdherkunftsübergreifenden Subframes aufgeteilt wird. Standardmäßig erhält der oberste Ursprung 512KiB und jedes kreuzherkunftsübergreifende Subframe erhält 8KiB von den verbleibenden 128KiB. Die `deferred-fetch`-Berechtigungsrichtlinie kann es ermöglichen, dass Subframe-Ursprünge ein größeres Quotenlimit von 64KiB aus dem obersten 512KiB-Quotenlimit erhalten, anstelle der 8KiB Minimalquote, die sie sonst standardmäßig erhalten würden.

Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für weitere Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <url-list>)
Permissions-policy: deferred-fetch=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen (jeder in Anführungszeichen), denen eine höhere Quote von 64KiB gewährt wird, die aus der Hauptquote des Elternteils entnommen wird. Die 64KiB-Quote wird zum Zeitpunkt der Erstellung des Subframes entnommen.

Ein fremdherkunftsübergreifendes Subframe kann `deferred-fetch` an einen seiner fremdherkunftsübergreifenden Subframe-Nachkommen gewähren und dabei seine gesamte Quote delegieren. Dies funktioniert nur, wenn derzeit keine der Quoten genutzt wird.

Berechtigungsrichtlinienprüfungen sind von Quotenprüfungen nicht zu unterscheiden. Ein Aufruf von `fetchLater()` wird einen `QuotaExceededError` auslösen, sowohl wenn die Quote tatsächlich überschritten wird, als auch wenn die Quote für diesen Ursprung über eine Berechtigungsrichtlinie eingeschränkt wurde.

## Standardrichtlinie

Die Standard-Berechtigungsliste für `deferred-fetch` ist `self`.

## Beispiele

Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für weitere Beispiele.

### Aufbrauchen der Minimalquote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB, aus dem Limit von 512KiB des obersten Ursprungs.
2. Ein Subframe von `c.com` ist nicht aufgeführt und erhält daher bei der Erstellung 8KiB aus dem gemeinsam genutzten Limit von 128KiB.
3. 15 weitere Subframes verschiedener Ursprünge würden bei der Erstellung 8KiB erhalten (ähnlich wie `c.com`).
4. Das nächste Subframe würde keine Quote erhalten.
5. Wenn eines der Subframes entfernt wird, werden seine verschobenen Abrufe gesendet.
6. Das nächste Subframe würde eine 8KiB-Quote erhalten, da die Quote wieder verfügbar ist.

## Die Minimalquote komplett widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Subframe von `c.com` erhält bei der Erstellung keine Quote.
3. Das oberste Dokument und seine Nachkommen derselben Herkunft können bis zu vollen 640KiB verwenden, aber das wird auf 574KiB reduziert, wenn ein `b.com`-Subframe erstellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch-API](/de/docs/Web/API/Fetch_API)
- [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)
