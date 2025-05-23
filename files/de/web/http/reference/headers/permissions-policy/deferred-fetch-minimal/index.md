---
title: "Permissions-Policy: deferred-fetch-minimal-Direktive"
short-title: deferred-fetch-minimal
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **`deferred-fetch-minimal`**-Direktive im {{HTTPHeader("Permissions-Policy")}} ist Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Diese Direktive, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}, bestimmt, wie das gesamte 640KiB-Quotenlimit zwischen dem obersten Ursprung und seinen Cross-Origin-Unterrahmen verteilt wird. Standardmäßig erhält der oberste Ursprung 512KiB, und jeder Cross-Origin-Unterrahmen erhält 8KiB von den verbleibenden 128KiB. Die `deferred-fetch-minimal` Berechtigungsrichtlinie kann auch alle Ursprünge blockieren; dies weist das gemeinsame 128KiB-Limit der obersten Quote neu zu, sodass es Zugriff auf das gesamte 640KiB-Limit erhält.

Siehe den [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) Leitfaden für weitere Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen, die die sekundäre 128KiB-Quote nutzen dürfen (mit maximal 8KiB pro Unterrahmen).

Ein oberster Rahmen mit der `deferred-fetch-minimal`-Berechtigung, die auf `self` oder `()` gesetzt ist, erlaubt nicht, dass das standardmäßig geteilte 128KiB-Quota von Cross-Origin-Unterrahmen genutzt wird. Stattdessen wird die 128KiB-Quote für Unterrahmen zu seiner normalen Quote hinzugefügt.

## Standardrichtlinie

Die Standard-Zulassungsliste für `deferred-fetch-minimal` ist `*`.

## Beispiele

Weitere Beispiele finden Sie unter [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

### Nutzung der minimalen Quote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Unterrahmen von `b.com` erhält bei Erstellung 64KiB aus dem 512KiB-Limit des obersten Ursprungs.
2. Ein Unterrahmen von `c.com` ist nicht aufgelistet und erhält daher bei Erstellung 8KiB aus dem gemeinsamen 128KiB-Limit.
3. 15 weitere Unterrahmen würden bei Erstellung 8KiB erhalten (ähnlich wie `c.com`, und ein weiterer `c.com` Unterrahmen würde ebenfalls ein weiteres 8KiB-Quote erhalten).
4. Der nächste Unterrahmen würde keine Quote erhalten.
5. Wenn einer der Unterrahmen entfernt wird, werden seine verzögerten Fetches gesendet.
6. Der nächste Unterrahmen würde eine 8KiB-Quote erhalten, da wieder eine Quote verfügbar ist.

## Die minimale Quote vollständig mit Ausnahmen widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Unterrahmen von `b.com` erhält bei Erstellung 64KiB.
2. Ein Unterrahmen von `c.com` erhält bei Erstellung keine Quote.
3. Das oberste Dokument und seine gleichen Ursprungsnachfahren können bis zu die gesamten 640KiB nutzen, dies reduziert sich jedoch auf 574KiB, wenn ein `b.com` Unterrahmen erstellt wird.

## Die minimale Quote vollständig ohne Ausnahmen widerrufen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das oberste Dokument und seine gleichen Ursprungsnachfahren können die gesamten 640KiB nutzen.
2. Unterrahmen wird keine Quote zugewiesen und sie können `fetchLater()` nicht nutzen.

## Die minimale Quote auf benannte Ursprünge beschränken

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. Ein Unterrahmen von `b.com` erhält bei Erstellung 64KiB.
2. Ein Unterrahmen von `c.com` erhält bei Erstellung 8KiB.
3. Ein Unterrahmen von `d.com` erhält bei Erstellung keine Quote.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
