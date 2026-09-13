---
title: "Content-Security-Policy: block-all-mixed-content Richtlinie"
short-title: block-all-mixed-content
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!WARNING]
> Diese Direktive ist in der Spezifikation als veraltet gekennzeichnet.
> Diese Direktive wurde zuvor verwendet, um das unsichere Abrufen und Anzeigen von „optional blockierbarem“ Mixed Content zu verhindern.
> Inhalte, die nicht blockiert werden, werden jetzt immer zu einer sicheren Verbindung aufgewertet, daher ist diese Direktive nicht notwendig.

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** Direktive verhindert das Laden jeglicher Assets über HTTP, wenn die Seite HTTPS verwendet.

Alle [gemischten Inhalte](/de/docs/Web/Security/Defenses/Mixed_content)-Ressourcenanforderungen werden blockiert, einschließlich sowohl blockierbarer als auch aufwertbarer gemischter Inhalte.
Dies gilt auch für {{HTMLElement("iframe")}}-Dokumente, wodurch sichergestellt wird, dass die gesamte Seite frei von gemischten Inhalten ist.

> [!NOTE]
> Die {{CSP("upgrade-insecure-requests")}}-Richtlinie wird vor `block-all-mixed-content` ausgewertet.
> Wenn die erstere gesetzt ist, tut die letztere nichts, daher setzen Sie eine der beiden Direktiven – nicht beide, es sei denn, Sie möchten HTTPS in älteren Browsern erzwingen, die es nach einer Umleitung zu HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Assets auf granularer Ebene zu verbieten, können Sie auch einzelne Direktiven auf `https:` setzen.
Zum Beispiel, um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content)
