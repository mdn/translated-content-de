---
title: "Content-Security-Policy: block-all-mixed-content Directive"
short-title: block-all-mixed-content
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Diese Direktive ist im Spezifikationsentwurf als veraltet gekennzeichnet.
> Diese Direktive wurde zuvor verwendet, um das unsichere Abrufen und Anzeigen von "optional blockierbaren" gemischten Inhalten zu verhindern.
> Inhalte, die nicht blockiert werden, werden nun immer auf eine sichere Verbindung hochgestuft, daher ist diese Direktive nicht mehr erforderlich.

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** Direktive verhindert das Laden von Ressourcen über HTTP, wenn die Seite HTTPS verwendet.

Alle [gemischten Inhalte](/de/docs/Web/Security/Mixed_content) werden blockiert, einschließlich sowohl blockierbarer als auch hochstufbarer gemischter Inhalte. Dies gilt auch für {{HTMLElement("iframe")}}-Dokumente, um sicherzustellen, dass die gesamte Seite frei von gemischtem Inhalt ist.

> [!NOTE]
> Die {{CSP("upgrade-insecure-requests")}} Direktive wird vor `block-all-mixed-content` ausgewertet.
> Wenn erstere gesetzt ist, bewirkt letztere nichts, daher setzen Sie entweder die eine oder die andere Direktive – nicht beide, es sei denn, Sie möchten HTTPS in älteren Browsern erzwingen, die es nach einer Weiterleitung zu HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Ressourcen auf einer detaillierteren Ebene zu verbieten, können Sie auch individuelle Direktiven auf `https:` setzen.
Zum Beispiel, um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.
War früher in der veralteten [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in) Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
