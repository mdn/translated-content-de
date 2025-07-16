---
title: find.highlightResults()
slug: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Hebt die Ergebnisse eines vorherigen Aufrufs von {{WebExtAPIRef("find.find()")}} hervor.

Wenn eine Erweiterung `find()` aufruft, werden die Übereinstimmungen nicht automatisch hervorgehoben, aber sie werden vom Browser gespeichert. Rufen Sie `highlightResults()` auf, um sie hervorzuheben.

Beachten Sie, dass die gespeicherten Ergebnisse global für alle Erweiterungen sind. Wenn also zum Beispiel Erweiterung A `find("apple")` aufruft und dann Erweiterung B `find("banana")` aufruft, werden bei einem anschließenden Aufruf von Erweiterung A mit `highlightResults()` die Ergebnisse für "banana" hervorgehoben.

## Syntax

```js-nolint
browser.find.highlightResults(
  options // optional object
)
```

### Parameter

- `options` {{optional_inline}}
  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann alle folgenden Eigenschaften enthalten, die alle optional sind:
    - `tabId`
      - : `integer`. ID des Tabs, das hervorgehoben werden soll. Standard ist der aktive Tab.
    - `rangeIndex`
      - : `integer`. Index des Bereichs, der hervorgehoben werden soll. Standardmäßig werden alle Bereiche hervorgehoben.
    - `noScroll`
      - : `boolean`. Nicht zum hervorgehobenen Element scrollen. Standard ist `true`.

### Rückgabewert

Keiner.

## Beispiele

Suchen Sie im aktiven Tab nach "banana", protokollieren Sie die Anzahl der Übereinstimmungen und heben Sie diese hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

## Browser-Kompatibilität

{{Compat}}
