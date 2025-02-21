---
title: "Dokumentation: writeln()-Methode"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: a83d7a557d049b3d3e34139e913b9ae9e2ec49f6
---

{{ ApiRef("DOM") }}

Schreibt eine Textzeichenfolge gefolgt von einem Zeilenumbruch in ein Dokument.

## Syntax

```js-nolint
writeln(line)
```

### Parameter

- `line`
  - : Eine Zeichenfolge, die eine Textzeile enthält.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
document.writeln("<p>enter password:</p>");
```

## Anmerkungen

**document.writeln** ist dasselbe wie [`document.write`](/de/docs/Web/API/Document/write), fügt jedoch einen Zeilenumbruch hinzu.

> **Note:** **document.writeln** (wie **document.write**) funktioniert nicht in XHTML-Dokumenten (es wird ein "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`)-Fehler in der Fehlerkonsole angezeigt). Dies ist der Fall, wenn eine lokale Datei mit der Erweiterung .xhtml geöffnet wird oder für jedes Dokument, das mit einem application/xhtml+xml-MIME-Typ geliefert wird. Weitere Informationen finden Sie in den [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
