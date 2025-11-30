---
title: "Content-Security-Policy: block-all-mixed-content Direktive"
short-title: block-all-mixed-content
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{deprecated_header}}

> [!WARNING]
> Diese Direktive ist in der Spezifikation als veraltet markiert.
> Diese Direktive wurde früher verwendet, um zu verhindern, dass "optional blockierbarer" gemischter Inhalt unsicher abgerufen und angezeigt wird.
> Inhalte, die nicht blockiert werden, werden nun immer auf eine sichere Verbindung aktualisiert, so dass diese Direktive nicht mehr benötigt wird.

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`**-Direktive verhindert das Laden von Assets über HTTP, wenn die Seite HTTPS verwendet.

Alle [gemischten Inhalte](/de/docs/Web/Security/Defenses/Mixed_content)-Ressourcenanfragen werden blockiert, einschließlich sowohl blockierbarer als auch upgradefähiger gemischter Inhalte.
Dies gilt auch für {{HTMLElement("iframe")}}-Dokumente, wodurch sichergestellt wird, dass die gesamte Seite frei von gemischten Inhalten ist.

> [!NOTE]
> Die {{CSP("upgrade-insecure-requests")}}-Direktive wird vor `block-all-mixed-content` ausgewertet.
> Ist erstere gesetzt, tut letztere nichts, daher sollte eine Direktive oder die andere gesetzt werden – nicht beide, es sei denn, Sie möchten HTTPS in älteren Browsern erzwingen, die es nicht nach einer Umleitung auf HTTP erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Assets auf einer detaillierteren Ebene zu verbieten, können Sie auch individuelle Direktiven auf `https:` setzen.
Zum Beispiel, um unsichere HTTP-Bilder zu verbieten:

```http
Content-Security-Policy: img-src https:
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.
War früher in der veralteten [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in)-Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content)
