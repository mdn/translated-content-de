---
title: "Permissions-Policy: deferred-fetch Direktive"
short-title: deferred-fetch
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **`deferred-fetch`** {{HTTPHeader("Permissions-Policy")}} Direktive ist Teil der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API).

Diese Direktive, zusammen mit {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, bestimmt, wie das gesamte Quotalimit von 640KiB zwischen der obersten Ebene und ihren Cross-Origin-Unterframes verteilt wird. Standardmäßig erhält die oberste Ebene 512KiB, und jedes Cross-Origin-Unterframe erhält 8KiB von den restlichen 128KiB. Die `deferred-fetch` Berechtigungsrichtlinie kann es Unterrahmen-Ursprüngen erlauben, ein größeres 64KiB-Kontingent aus dem 512KiB-Kontingent der obersten Ebene zu erhalten, anstelle des 8KiB-Mindestkontingents, das sie ansonsten standardmäßig erhalten würden.

Siehe [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details und Beispiele.

## Syntax

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <url-list>)
Permissions-policy: deferred-fetch=(<url-list>)
```

- `<url-list>`
  - : Eine durch Leerzeichen getrennte Liste von Ursprüngen (jeder in Anführungszeichen), denen ein höheres Kontingent von 64KiB zugewiesen wird, das aus dem Hauptkontingent des übergeordneten Elements stammt. Das 64KiB-Kontingent wird zu dem Zeitpunkt zugewiesen, zu dem das Unterframe erstellt wird.

Ein Cross-Origin-Unterframe kann `deferred-fetch` an einen seiner Cross-Origin-Unterframe-Nachkommen übertragen und damit sein gesamtes Kontingent delegieren. Dies funktioniert nur, wenn derzeit keines der Kontingente verwendet wird.

Berechtigungsrichtlinienprüfungen sind von Kontingentprüfungen nicht zu unterscheiden. Ein Aufruf von `fetchLater()` wird einen `QuotaExceededError` auslösen, sowohl wenn das Kontingent tatsächlich überschritten wird, als auch wenn das Kontingent für diesen Ursprung durch eine Berechtigungsrichtlinie eingeschränkt wurde.

## Standardrichtlinie

Die Standard-Zulassungsliste für `deferred-fetch` ist `self`.

## Beispiele

Siehe [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Beispiele.

### Nutzung des minimalen Kontingents

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein Unterframe von `b.com` erhält bei der Erstellung 64KiB aus dem 512KiB-Limit der obersten Ebene.
2. Ein Unterframe von `c.com` ist nicht aufgelistet und erhält daher bei der Erstellung 8KiB aus dem gemeinsamen 128KiB-Limit.
3. 15 weitere Unterrahmen von verschiedenen Ursprüngen würden bei der Erstellung 8KiB erhalten (ähnlich wie `c.com`).
4. Das nächste Unterframe würde kein Kontingent erhalten.
5. Wenn eines der Unterframes entfernt wird, werden seine verzögerten Abrufvorgänge gesendet.
6. Das nächste Unterframe würde ein 8KiB-Kontingent erhalten, da wieder ein Kontingent verfügbar ist.

## Das minimale Kontingent vollständig widerrufen

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Ein Unterframe von `b.com` erhält bei der Erstellung 64KiB.
2. Ein Unterframe von `c.com` erhält bei der Erstellung kein Kontingent.
3. Das Dokument der obersten Ebene und seine Ursprungsnachkommen können bis zu 640KiB verwenden, was jedoch auf 574KiB reduziert wird, wenn ein `b.com`-Unterframe erstellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
