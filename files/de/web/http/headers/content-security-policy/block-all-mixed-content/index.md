---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Diese Direktive ist in der Spezifikation als veraltet gekennzeichnet.
> Diese Direktive wurde früher verwendet, um das unsichere Abrufen und Anzeigen von "optionell blockierbaren" Mixed Content zu verhindern.
> Nicht blockierter Inhalt wird jetzt immer auf eine sichere Verbindung hochgestuft, daher ist diese Direktive nicht mehr notwendig.

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** Direktive verhindert das Laden jeglicher Ressourcen über HTTP, wenn die Seite HTTPS verwendet.

Alle [Mixed Content](/de/docs/Web/Security/Mixed_content) Anfragen für Ressourcen werden blockiert, einschließlich sowohl blockierbarer als auch hochstufbarer Mixed Content.
Dies gilt auch für {{HTMLElement("iframe")}} Dokumente, wodurch sichergestellt wird, dass die gesamte Seite frei von Mixed Content ist.

> [!NOTE]
> Die {{CSP("upgrade-insecure-requests")}} Direktive wird vor `block-all-mixed-content` ausgewertet.
> Wenn die erstere gesetzt ist, macht die letztere nichts, daher sollten Sie eine der beiden Direktiven setzen – nicht beide, es sei denn, Sie möchten HTTPS bei älteren Browsern erzwingen, die es nach einer Umleitung zu HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Ressourcen auf einer granulareren Ebene zu verbieten, können Sie auch einzelne Direktiven auf `https:` setzen.
Zum Beispiel, um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.
Früher definiert in der veralteten [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in) Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Mixed Content](/de/docs/Web/Security/Mixed_content)
