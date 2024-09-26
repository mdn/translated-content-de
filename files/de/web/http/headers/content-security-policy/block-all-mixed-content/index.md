---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Diese Richtlinie ist in der Spezifikation als veraltet markiert.
> Diese Richtlinie wurde früher verwendet, um das unsichere Abrufen und Anzeigen von "optional blockierbaren" Mixed Content zu verhindern.
> Inhalte, die nicht blockiert werden, werden jetzt immer auf eine sichere Verbindung aufgewertet, sodass diese Richtlinie nicht mehr erforderlich ist.

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`**-Direktive verhindert das Laden von Assets über HTTP, wenn die Seite HTTPS verwendet.

Alle [Mixed Content](/de/docs/Web/Security/Mixed_content)-Ressourcenanfragen werden blockiert, einschließlich sowohl blockierbarer als auch aufwertbarer Mixed Content.
Dies gilt auch für {{HTMLElement("iframe")}}-Dokumente, um sicherzustellen, dass die gesamte Seite frei von Mixed Content ist.

> [!NOTE]
> Die {{CSP("upgrade-insecure-requests")}}-Direktive wird vor `block-all-mixed-content` ausgewertet.
> Wenn die erstgenannte eingestellt ist, bewirkt die letztgenannte nichts, daher sollten Sie eine der beiden Richtlinien setzen – nicht beide, es sei denn, Sie möchten HTTPS in älteren Browsern erzwingen, die es nach einer Umleitung zu HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Assets auf einer detaillierteren Ebene zu untersagen, können Sie auch einzelne Direktiven auf `https:` setzen.
Beispielsweise, um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

Teil keiner aktuellen Spezifikation.
Früher in der veralteten [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in)-Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Mixed content](/de/docs/Web/Security/Mixed_content)
