---
title: "Content-Security-Policy: block-all-mixed-content Direktive"
short-title: block-all-mixed-content
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{deprecated_header}}

> [!WARNING]
> Diese Direktive ist in der Spezifikation als obsolet gekennzeichnet.
> Diese Direktive wurde zuvor verwendet, um zu verhindern, dass "optional blockierbare" gemischte Inhalte unsicher abgerufen und angezeigt werden.
> Inhalte, die nicht blockiert werden, werden jetzt immer auf eine sichere Verbindung hochgestuft, daher ist diese Direktive nicht mehr erforderlich.

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`**-Direktive verhindert das Laden jeglicher Ressourcen über HTTP, wenn die Seite HTTPS verwendet.

Alle [gemischten Inhalte](/de/docs/Web/Security/Defenses/Mixed_content) Ressourcenzugriffe werden blockiert, einschließlich sowohl blockierbarer als auch hochstufbarer gemischter Inhalte.
Dies gilt auch für {{HTMLElement("iframe")}}-Dokumente, um sicherzustellen, dass die gesamte Seite frei von gemischten Inhalten ist.

> [!NOTE]
> Die Direktive {{CSP("upgrade-insecure-requests")}} wird vor `block-all-mixed-content` ausgewertet.
> Wenn die erstere gesetzt ist, tut die letztere nichts, daher setzen Sie eine Direktive oder die andere – nicht beide, es sei denn, Sie möchten HTTPS in älteren Browsern erzwingen, die es nach einer Umleitung zu HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Ressourcen auf einer granuleren Ebene zu verbieten, können Sie auch individuelle Direktiven auf `https:` setzen.
Zum Beispiel, um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

Teil keiner aktuellen Spezifikation.
Wurde zuvor in der veralteten [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in) Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content)
