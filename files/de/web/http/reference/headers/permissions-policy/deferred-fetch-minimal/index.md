---
title: "Permissions-Policy: `deferred-fetch-minimal` Direktive"
short-title: deferred-fetch-minimal
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Die **`deferred-fetch-minimal`** {{HTTPHeader("Permissions-Policy")}} Direktive ist Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Diese Direktive, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}, bestimmt, wie das gesamte 640KiB-Quotenlimit zwischen dem obersten Origin und seinen Cross-Origin-Unterrahmen verteilt wird. Standardmäßig erhält das oberste Origin 512KiB und jeder Cross-Origin-Unterrahmen erhält 8KiB von den verbleibenden 128KiB. Die `deferred-fetch-minimal` Berechtigungsrichtlinie kann auch alle Origins blockieren; dies wird das geteilte 128KiB-Limit der obersten Quote zuweisen, sodass sie auf das komplette 640KiB-Limit zugreifen kann.

Siehe den [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) Leitfaden für mehr Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Origins, die die sekundäre 128KiB-Quote verwenden dürfen (mit einem Maximum von 8KiB pro Unterrahmen).

Ein oberster Rahmen mit der `deferred-fetch-minimal` Berechtigung, die auf `self` oder `()` gesetzt ist, erlaubt die standardmäßige geteilte 128kb-Quote überhaupt nicht von Cross-Origin-Unterrahmen zu nutzen. Stattdessen wird die 128KiB-Quote für Unterrahmen zu ihrer normalen Quote hinzugefügt.

## Standardrichtlinie

Die Standard-Whitelist für `deferred-fetch-minimal` ist `*`.

## Beispiele

Sehen Sie [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Beispiele.

### Nutzung der minimalen Quote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Unterrahmen von `b.com` erhält 64KiB bei der Erstellung, aus dem 512KiB-Limit des obersten Rahmens.
2. Ein Unterrahmen von `c.com` ist nicht aufgelistet und erhält daher 8KiB bei der Erstellung aus dem 128KiB-geteilten Limit.
3. 15 weitere Unterrahmen würden 8KiB bei der Erstellung erhalten (ähnlich wie `c.com`, und ein weiterer `c.com` Unterrahmen würde ebenfalls eine weitere 8KiB-Quote erhalten).
4. Der nächste Unterrahmen würde keine Quote erhalten.
5. Wird einer der Unterrahmen entfernt, werden seine aufgeschobenen Fetches gesendet.
6. Der nächste Unterrahmen würde eine 8KiB-Quote erhalten, da wieder Quote verfügbar ist.

## Vollständiges Zurückziehen der minimalen Quote mit Ausnahmen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Unterrahmen von `b.com` erhält 64KiB bei der Erstellung.
2. Ein Unterrahmen von `c.com` erhält keine Quote bei der Erstellung.
3. Das oberste Dokument und seine gleichartigen Nachkommen können bis zu die vollen 640KiB nutzen, das aber auf 574KiB reduziert wird, wenn ein `b.com` Unterrahmen erstellt wird.

## Vollständiges Zurückziehen der minimalen Quote ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das oberste Dokument und seine gleichartigen Nachkommen können die vollen 640KiB nutzen.
2. Unterrahmen erhalten keine Quote und können `fetchLater()` nicht nutzen.

## Einschränken der minimalen Quote auf benannte Origins

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. Ein Unterrahmen von `b.com` erhält 64KiB bei der Erstellung.
2. Ein Unterrahmen von `c.com` erhält 8KiB bei der Erstellung.
3. Ein Unterrahmen von `d.com` erhält keine Quote bei der Erstellung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
