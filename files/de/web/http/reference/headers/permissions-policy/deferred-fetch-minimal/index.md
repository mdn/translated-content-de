---
title: "Permissions-Policy: deferred-fetch-minimal"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die Direktiven `deferred-fetch` und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} {{HTTPHeader("Permissions-Policy")}} sind Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Sie bestimmen, wie das gesamte Quotenlimit von 640KiB zwischen dem Ursprungsdokument der obersten Ebene und seinen Subframes mit Cross-Origin aufgeteilt wird. Standardmäßig erhält der Ursprung der obersten Ebene 512KiB und jedes Subframe mit Cross-Origin erhält 8KiB von den verbleibenden 128KiB. Die `deferred-fetch-minimal` Berechtigungspolitik kann auch alle Ursprünge blockieren; dies wird das geteilte Limit von 128KiB dem Quotenlimit der obersten Ebene zuweisen, wodurch es auf das volle Limit von 640KiB zugreifen kann.

Siehe den Leitfaden zu [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<urllist>)
```

- `<urllist>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen, denen es erlaubt ist, die sekundäre 128KiB-Quote zu nutzen (mit einem Maximum von 8KiB pro Subframe).

Ein Frame auf oberster Ebene mit der Berechtigung `deferred-fetch-minimal`, die auf `self` oder `()` gesetzt ist, erlaubt nicht, dass das standardmäßige geteilte Quotenlimit von 128kb von Subframes mit Cross-Origin verwendet wird. Stattdessen wird die 128KiB-Quote für Subframes zu seiner normalen Quote hinzugefügt.

## Standardrichtlinie

Die Standard-Einschlussliste für `deferred-fetch-minimal` ist `*`.

## Beispiele

Siehe die [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Beispiele.

### Nutzung der minimalen Quote

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB aus dem 512KiB-Limit der obersten Ebene.
2. Ein Subframe von `c.com` ist nicht aufgeführt und erhält daher bei der Erstellung 8KiB aus dem geteilten 128KiB-Limit.
3. 15 weitere Subframes würden bei der Erstellung jeweils 8KiB erhalten (ähnlich wie `c.com`, und ein weiteres `c.com` Subframe würde ebenfalls eine weitere 8KiB-Quote erhalten).
4. Das nächste Subframe würde keine Quote erhalten.
5. Wenn eines der Subframes entfernt wird, werden seine aufgeschobenen Abrufe gesendet.
6. Das nächste Subframe würde eine 8KiB-Quote erhalten, da wieder eine Quote verfügbar ist.

## Das minimalen Quotenlimit insgesamt mit Ausnahmen widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Subframe von `c.com` erhält bei der Erstellung keine Quote.
3. Das Dokument der obersten Ebene und seine Nachkommen mit demselben Ursprung können das volle 640KiB nutzen, das jedoch auf 574KiB reduziert wird, wenn ein `b.com` Subframe erstellt wird.

## Das minimalen Quotenlimit insgesamt ohne Ausnahmen widerrufen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Dokument der obersten Ebene und seine Nachkommen mit demselben Ursprung können das volle 640KiB nutzen.
2. Subframes wird keine Quote zugewiesen und sie können `fetchLater()` nicht verwenden.

## Die minimale Quote auf benannte Ursprünge beschränken

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. Ein Subframe von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Subframe von `c.com` erhält bei der Erstellung 8KiB.
3. Ein Subframe von `d.com` erhält bei der Erstellung keine Quote.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
