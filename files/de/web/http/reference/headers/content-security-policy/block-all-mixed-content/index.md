---
title: "Content-Security-Policy: block-all-mixed-content Richtlinie"
short-title: block-all-mixed-content
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{deprecated_header}}

> [!WARNING]
> Diese Richtlinie ist in der Spezifikation als veraltet gekennzeichnet.
> Diese Richtlinie wurde zuvor verwendet, um das Abrufen und Anzeigen von "optional blockierbarem" gemischtem Inhalt über unsichere Verbindungen zu verhindern.
> Inhalte, die nicht blockiert werden, werden jetzt immer auf eine sichere Verbindung umgestellt, daher ist diese Richtlinie nicht mehr erforderlich.

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** Richtlinie verhindert das Laden von Ressourcen über HTTP, wenn die Seite HTTPS verwendet.

Alle [gemischten Inhalte](/de/docs/Web/Security/Defenses/Mixed_content) Anfragen werden blockiert, einschließlich sowohl blockierbarer als auch aufrüstbarer gemischter Inhalte.
Dies gilt auch für {{HTMLElement("iframe")}} Dokumente und stellt sicher, dass die gesamte Seite frei von gemischten Inhalten ist.

> [!NOTE]
> Die {{CSP("upgrade-insecure-requests")}} Richtlinie wird vor `block-all-mixed-content` ausgewertet.
> Wenn die erstgenannte Richtlinie gesetzt ist, macht die zweitgenannte nichts, daher setzen Sie entweder die eine oder die andere Richtlinie – nicht beide, es sei denn, Sie möchten HTTPS auf älteren Browsern erzwingen, die es nach einer Umleitung auf HTTP nicht erzwingen.

## Syntax

```http
Content-Security-Policy: block-all-mixed-content;
```

## Beispiele

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

Um HTTP-Ressourcen auf einer granulareren Ebene zu verbieten, können Sie auch einzelne Richtlinien auf `https:` setzen.
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
