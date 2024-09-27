---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Diese Direktive ist in der Spezifikation als veraltet markiert.
> Diese Direktive wurde früher verwendet, um zu verhindern, dass "optional blockierbarer" gemischter Inhalt unsicher abgerufen und angezeigt wird.
> Inhalte, die nicht blockiert werden, werden jetzt immer auf eine sichere Verbindung aktualisiert, weshalb diese Direktive nicht mehr notwendig ist.

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** verhindert das Laden jeglicher Assets über HTTP, wenn die Seite HTTPS verwendet.

Alle [gemischte Inhalte](/de/docs/Web/Security/Mixed_content)-Ressourcenanfragen werden blockiert, einschließlich blockierbarer und aktualisierbarer gemischter Inhalte.
Dies gilt auch für {{HTMLElement("iframe")}}-Dokumente, um sicherzustellen, dass die gesamte Seite frei von gemischtem Inhalt ist.

> [!NOTE]
> Die Direktive {{CSP("upgrade-insecure-requests")}} wird vor `block-all-mixed-content` ausgewertet.
> Wenn erstere gesetzt ist, tut letztere nichts, daher setzen Sie eine Direktive oder die andere – nicht beide, es sei denn, Sie möchten HTTPS auf älteren Browsern erzwingen, die es nach einer Umleitung auf HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Assets auf einer feineren Ebene zu verhindern, können Sie auch einzelne Direktiven auf `https:` setzen.
Zum Beispiel, um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.
Wurde früher in der veralteten [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in)-Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Gemischter Inhalt](/de/docs/Web/Security/Mixed_content)
