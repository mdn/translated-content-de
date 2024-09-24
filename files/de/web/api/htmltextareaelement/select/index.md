---
title: "HTMLTextAreaElement: select()-Methode"
short-title: select()
slug: Web/API/HTMLTextAreaElement/select
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`select()`**-Methode der {{domxref("HTMLTextAreaElement")}}-Schnittstelle markiert den gesamten Inhalt des {{htmlelement("textarea")}}-Elements. Zusätzlich wird das {{domxref("HTMLTextAreaElement.select_event", "select")}}-Ereignis ausgelöst. Die `select()`-Methode erfordert keine Parameter und gibt keinen Wert zurück.

## Syntax

```js-nolint
select()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const textarea = document.getElementById("text-box");
textarea.select();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement/select_event", "select")}}-Ereignis
- {{domxref("EventTarget.addEventListener", "addEventListener()")}}
- CSS-{{cssxref("::selection")}} Pseudo-Element
