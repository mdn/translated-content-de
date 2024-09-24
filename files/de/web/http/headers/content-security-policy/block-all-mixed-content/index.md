---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Diese Direktive ist in der Spezifikation als veraltet gekennzeichnet.
> Diese Direktive wurde zuvor verwendet, um das unsichere Abrufen und Anzeigen von "optional blockierbarem" Mixed Content zu verhindern.
> Inhalte, die nicht blockiert werden, werden jetzt immer zu einer sicheren Verbindung hochgestuft, daher wird diese Direktive nicht mehr benötigt.

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`**-Direktive verhindert das Laden von Ressourcen über HTTP, wenn die Seite HTTPS verwendet.

Alle [Mixed Content](/de/docs/Web/Security/Mixed_content)-Ressourcenanfragen werden blockiert, einschließlich blockierbarer und hochstufbarer Mixed Content. Dies gilt auch für {{HTMLElement("iframe")}}-Dokumente und stellt sicher, dass die gesamte Seite frei von Mixed Content ist.

> [!NOTE]
> Die {{CSP("upgrade-insecure-requests")}}-Direktive wird vor `block-all-mixed-content` ausgewertet. Wenn erstere gesetzt ist, bewirkt letztere nichts, daher setzen Sie eine der beiden Direktiven – nicht beide, es sei denn, Sie möchten HTTPS bei älteren Browsern erzwingen, die es nach einer Weiterleitung zu HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Ressourcen auf einer granulareren Ebene zu verbieten, können Sie auch individuelle Direktiven auf `https:` setzen. Beispiel: Um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation. Früher definiert in der veralteten [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in)-Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Mixed content](/de/docs/Web/Security/Mixed_content)
