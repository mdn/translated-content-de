---
title: "Permissions-Policy: deferred-fetch-minimal Direktive"
short-title: deferred-fetch-minimal
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{SeeCompatTable}}

Die **`deferred-fetch-minimal`** {{HTTPHeader("Permissions-Policy")}} Direktive ist Teil der [Fetch API](/de/docs/Web/API/Fetch_API).

Diese Direktive, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}, bestimmt, wie das gesamte 640KiB Quota-Limit zwischen dem obersten Ursprung und seinen Cross-Origin-Unterframes verteilt wird. Standardmäßig erhält der oberste Ursprung 512KiB, und jedes Cross-Origin-Unterframe erhält 8KiB von den verbleibenden 128KiB. Die `deferred-fetch-minimal` Berechtigungsrichtlinie kann auch alle Ursprünge blockieren; dies wird das geteilte 128KiB Limit dem obersten Quota neu zuweisen und ihm Zugriff auf das volle 640KiB-Limit gewähren.

Sehen Sie sich die [`fetchLater()` Quoten](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für weitere Details und Beispiele an.

## Syntax

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen, die berechtigt sind, den sekundären 128KiB Quota zu verwenden (mit einem Maximum von 8KiB pro Unterframe).

Ein oberes Frame mit der `deferred-fetch-minimal` Berechtigung, die auf `self` oder `()` gesetzt ist, erlaubt es dem standardmäßigen geteilten 128Kb Quota nicht, von Cross-Origin-Unterframes verwendet zu werden. Stattdessen wird das 128KiB Quota für Unterframes zu seinem normalen Quota hinzugefügt.

## Standardrichtlinie

Die Standardliste der Berechtigungen für `deferred-fetch-minimal` ist `*`.

## Beispiele

Sehen Sie sich die [`fetchLater()` Quoten](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für weitere Beispiele an.

### Aufbrauchen des minimalen Quotas

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Unterframe von `b.com` erhält bei der Erstellung 64KiB vom 512KiB-Limit des obersten Frames.
2. Ein Unterframe von `c.com` ist nicht aufgeführt und erhält daher bei seiner Erstellung 8KiB vom geteilten 128KiB-Limit.
3. 15 weitere Unterframes würden bei der Erstellung 8KiB erhalten (ähnlich wie `c.com`, und ein weiteres `c.com` Unterframe würde ebenfalls ein weiteres 8KiB Quota erhalten).
4. Das nächste Unterframe würde keine Quota erhalten.
5. Wenn eines der Unterframes entfernt wird, werden seine aufgeschobenen Fetches gesendet.
6. Das nächste Unterframe würde ein 8KiB Quota erhalten, da wieder Quota verfügbar ist.

## Völlige Zurücknahme des minimalen Quotas mit Ausnahmen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Unterframe von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Unterframe von `c.com` erhält bei der Erstellung keine Quota.
3. Das oberste Dokument und seine gleichursprünglichen Nachkommen können bis zu 640KiB verwenden, aber das wird auf 574KiB reduziert, wenn ein `b.com` Unterframe erstellt wird.

## Völlige Zurücknahme des minimalen Quotas ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das oberste Dokument und seine gleichursprünglichen Nachkommen können die vollen 640KiB verwenden.
2. Unterframes erhalten keine Quota und können `fetchLater()` nicht verwenden.

## Einschränkung des minimalen Quotas für benannte Ursprünge

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. Ein Unterframe von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Unterframe von `c.com` erhält bei der Erstellung 8KiB.
3. Ein Unterframe von `d.com` erhält bei der Erstellung keine Quota.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
