---
title: "Permissions-Policy: deferred-fetch-minimal"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **`deferred-fetch-minimal`** {{HTTPHeader("Permissions-Policy")}}-Direktive ist Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Diese Direktive, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}, bestimmt, wie das Gesamtkontingentlimit von 640KiB zwischen dem Top-Level-Ursprung und seinen cross-origin Unterrahmen verteilt wird. Standardmäßig erhält der Top-Level-Ursprung 512KiB, und jeder cross-origin Unterrahmen erhält 8KiB von den verbleibenden 128KiB. Die `deferred-fetch-minimal` Berechtigungspolitik kann auch alle Ursprünge blockieren; dies wird das geteilte Limit von 128KiB dem Top-Level-Kontingent neu zuweisen, wodurch es Zugriff auf das volle Limit von 640KiB erhält.

Weitere Details und Beispiele finden Sie im [`fetchLater()`-Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) Leitfaden.

## Syntax

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen, die die sekundäre 128KiB-Quote verwenden dürfen (mit einem Maximum von 8KiB pro Unterrahmen).

Ein Top-Level-Rahmen mit der Erlaubnis `deferred-fetch-minimal` auf `self` oder `()` erlaubt es den standardmäßigen geteilten 128kb nicht, von cross-origin Unterrahmen genutzt zu werden. Stattdessen wird das 128KiB-Kontingent für Unterrahmen zu seinem normalen Kontingent hinzugefügt.

## Standardrichtlinie

Die Standardzulassungsliste für `deferred-fetch-minimal` ist `*`.

## Beispiele

Weitere Beispiele finden Sie in den [`fetchLater()`-Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

### Nutzung des minimalen Kontingents

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Unterrahmen von `b.com` erhält bei der Erstellung 64KiB vom 512KiB-Limit des Top-Levels.
2. Ein Unterrahmen von `c.com` ist nicht aufgelistet und erhält daher bei der Erstellung 8KiB vom geteilten 128KiB-Limit.
3. 15 weitere Unterrahmen würden bei der Erstellung 8KiB erhalten (ähnlich wie `c.com` und ein weiterer `c.com` Unterrahmen würde ebenfalls ein weiteres 8KiB-Kontingent erhalten).
4. Dem nächsten Unterrahmen würde kein Kontingent gewährt.
5. Wenn einer der Unterrahmen entfernt wird, werden seine verzögerten Abrufe gesendet.
6. Der nächste Unterrahmen würde ein 8KiB-Kontingent erhalten, da wieder Kontingent verfügbar ist.

## Vollständiger Widerruf des minimalen Kontingents mit Ausnahmen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Unterrahmen von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Unterrahmen von `c.com` erhält bei der Erstellung kein Kontingent.
3. Das Top-Level-Dokument und seine gleichartigen Nachkommen können bis zu den vollen 640KiB verwenden, aber diese werden auf 574KiB reduziert, falls ein `b.com` Unterrahmen erstellt wird.

## Vollständiger Widerruf des minimalen Kontingents ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Top-Level-Dokument und seine gleichartigen Nachkommen können die vollen 640KiB verwenden.
2. Unterrahmen wird kein Kontingent zugewiesen und sie können `fetchLater()` nicht verwenden.

## Einschränkung des minimalen Kontingents auf benannte Ursprünge

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. Ein Unterrahmen von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Unterrahmen von `c.com` erhält bei der Erstellung 8KiB.
3. Ein Unterrahmen von `d.com` erhält bei der Erstellung kein Kontingent.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()`-Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
