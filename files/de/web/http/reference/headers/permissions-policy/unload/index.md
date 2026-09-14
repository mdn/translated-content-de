---
title: "Permissions-Policy: unload-Direktive"
short-title: unload
slug: Web/HTTP/Reference/Headers/Permissions-Policy/unload
l10n:
  sourceCommit: 75b6c08573c39a7d6557c911502912f1a3c7da9f
---

{{SeeCompatTable}}{{non-standard_header}}

Die `unload`-Direktive des HTTP-Headers {{HTTPHeader("Permissions-Policy")}} steuert, ob das aktuelle Dokument [`unload`](/de/docs/Web/API/Window/unload_event)-Event-Handler ausführen darf.

Wenn eine definierte Richtlinie die Verwendung dieser Funktion untersagt, werden im Dokument registrierte `unload`-Event-Handler nicht ausgeführt.

`unload`-Handler sind unzuverlässig und verhindern, dass Seiten im [Zurück-/Vorwärts-Cache](https://web.dev/articles/bfcache) (bfcache) gespeichert werden. Das Blockieren dieser Handler ermöglicht es einer Seite, für den bfcache geeignet zu bleiben, selbst wenn Skripte von Drittanbietern auf der Seite `unload`-Handler hinzufügen. Informationen zu Alternativen finden Sie in den [Verwendungshinweisen für das `unload`-Event](/de/docs/Web/API/Window/unload_event#usage_notes).

## Syntax

```http
Permissions-Policy: unload=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, denen die Berechtigung zur Verwendung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

In Chrome lautet die Standard-Allowlist für `unload` `()`. Das bedeutet, dass `unload`-Handler nicht ausgeführt werden, sofern ein Dokument nicht ausdrücklich zustimmt. Chrome verwendete ursprünglich eine Standard-Allowlist von `*` und [änderte dies schrittweise](https://developer.chrome.com/docs/web-platform/deprecating-unload).

## Beispiele

### Blockieren von unload-Handlern

Eine Website möchte sicherstellen, dass in ihren Seiten oder in eingebetteten iframes keine `unload`-Handler ausgeführt werden, damit die Seiten weiterhin für den bfcache geeignet sind. Dies kann sie erreichen, indem sie den folgenden HTTP-Antwort-Header bereitstellt:

```http
Permissions-Policy: unload=()
```

### Zulassen von unload-Handlern

Eine Website, die weiterhin von `unload`-Handlern abhängt, kann deren Ausführung auf ihren Seiten der obersten Ebene zulassen, indem sie den folgenden HTTP-Antwort-Header bereitstellt:

```http
Permissions-Policy: unload=self
```

Um `unload`-Handler auch in einem Cross-Origin-iframe zuzulassen, dessen Ursprung `https://example.com` ist, muss die einbettende Seite diesen Ursprung in ihre Allowlist aufnehmen:

```http
Permissions-Policy: unload=(self "https://example.com")
```

Sie muss außerdem ein {{HTMLElement('iframe','allow','#allow')}}-Attribut auf dem `<iframe>`-Element enthalten:

```html
<iframe src="https://example.com/embed" allow="unload"></iframe>
```

Das im iframe geladene Dokument muss `unload`-Handler ebenfalls zulassen, indem es seinen eigenen Antwort-Header `Permissions-Policy: unload=self` verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`unload`](/de/docs/Web/API/Window/unload_event)-Event
- [Deprecating the unload event](https://developer.chrome.com/docs/web-platform/deprecating-unload) auf developer.chrome.com
