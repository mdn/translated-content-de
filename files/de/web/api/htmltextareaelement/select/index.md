---
title: "HTMLTextAreaElement: select()-Methode"
short-title: select()
slug: Web/API/HTMLTextAreaElement/select
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`select()`**-Methode der Schnittstelle [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) wählt den gesamten Inhalt des {{htmlelement("textarea")}}-Elements aus. Zusätzlich wird das [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignis ausgelöst. Die `select()`-Methode nimmt keine Parameter und gibt keinen Wert zurück.

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
- [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignis
- [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
- CSS-{{cssxref("::selection")}}-Pseudo-Element
