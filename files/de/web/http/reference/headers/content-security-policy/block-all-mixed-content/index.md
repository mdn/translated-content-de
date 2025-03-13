---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Diese Direktive ist in der Spezifikation als obsolet markiert.
> Diese Direktive wurde zuvor verwendet, um zu verhindern, dass "optionally blockable" gemischte Inhalte unsicher abgerufen und angezeigt werden.
> Inhalte, die nicht blockiert werden, werden jetzt immer auf eine sichere Verbindung aufgewertet, daher ist diese Direktive nicht mehr nötig.

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`**-Direktive verhindert das Laden von Assets über HTTP, wenn die Seite HTTPS verwendet.

Alle [gemischten Inhalte](/de/docs/Web/Security/Mixed_content)-Ressourcenanfragen werden blockiert, einschließlich blockbarer und aufwertbarer gemischter Inhalte.
Dies gilt auch für {{HTMLElement("iframe")}}-Dokumente und stellt sicher, dass die gesamte Seite frei von gemischten Inhalten ist.

> [!NOTE]
> Die Direktive {{CSP("upgrade-insecure-requests")}} wird vor `block-all-mixed-content` ausgewertet.
> Wenn die erstere gesetzt ist, macht die letztere nichts, setzen Sie also entweder die eine oder die andere Direktive – nicht beide, es sei denn, Sie möchten HTTPS in älteren Browsern erzwingen, die es nach einer Umleitung auf HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Assets auf einer feineren Ebene zu verbieten, können Sie auch einzelne Direktiven auf `https:` setzen.
Beispielsweise, um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

Kein Teil einer aktuellen Spezifikation.
War zuvor in der veralteten [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in)-Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
