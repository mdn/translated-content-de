---
title: find.highlightResults()
slug: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Hebt die Ergebnisse eines vorherigen Aufrufs von {{WebExtAPIRef("find.find()")}} hervor.

Wenn eine Erweiterung `find()` aufruft, werden die Übereinstimmungen nicht automatisch hervorgehoben, sondern sie werden vom Browser gespeichert. Rufen Sie `highlightResults()` auf, um sie hervorzuheben.

Beachten Sie, dass die gespeicherten Ergebnisse global über alle Erweiterungen hinweg sind. Zum Beispiel, wenn Erweiterung A `find("apple")` aufruft, und dann Erweiterung B `find("banana")`, dann werden, wenn Erweiterung A `highlightResults()` aufruft, die Ergebnisse für "banana" hervorgehoben.

## Syntax

```js-nolint
browser.find.highlightResults(
  options // optional object
)
```

### Parameter

- `options` {{optional_inline}}
  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann eine der folgenden Eigenschaften enthalten, alle optional:
    - `tabId`
      - : `integer`. ID des Tabs, das hervorgehoben werden soll. Standardmäßig der aktive Tab.
    - `rangeIndex`
      - : `integer`. Index des Bereichs, der hervorgehoben werden soll. Standardmäßig werden alle Bereiche hervorgehoben.
    - `noScroll`
      - : `boolean`. Nicht zum hervorgehobenen Element scrollen. Standardwert ist `true`.

### Rückgabewert

Keiner.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Durchsuchen Sie den aktiven Tab nach "banana", protokollieren Sie die Anzahl der Übereinstimmungen und heben Sie sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```
