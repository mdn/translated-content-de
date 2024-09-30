---
title: find.highlightResults()
slug: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Hebt die Ergebnisse eines vorherigen Aufrufs von {{WebExtAPIRef("find.find()")}} hervor.

Wenn eine Erweiterung `find()` aufruft, werden die Treffer nicht automatisch hervorgehoben, aber sie werden vom Browser gespeichert. Rufen Sie `highlightResults()` auf, um sie hervorzuheben.

Beachten Sie, dass die gespeicherten Ergebnisse global über alle Erweiterungen hinweg sind. Wenn beispielsweise Erweiterung A `find("apple")` aufruft und anschließend Erweiterung B `find("banana")`, dann würde ein Aufruf von `highlightResults()` durch Erweiterung A die Ergebnisse für "banana" hervorheben.

## Syntax

```js-nolint
browser.find.highlightResults(
  options // optional object
)
```

### Parameter

- `options` {{optional_inline}}

  - : `object`. Ein Objekt, das zusätzliche Optionen spezifiziert. Es kann die folgenden Eigenschaften enthalten, die alle optional sind:

    - `tabId`
      - : `integer`. ID des Tabs, der hervorgehoben werden soll. Standardmäßig der aktive Tab.
    - `rangeIndex`
      - : `integer`. Index des Bereichs, der hervorgehoben werden soll. Standardmäßig werden alle Bereiche hervorgehoben.
    - `noScroll`
      - : `boolean`. Nicht zum hervorgehobenen Element scrollen. Standardmäßig `true`.

### Rückgabewert

Keiner.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Durchsuchen Sie den aktiven Tab nach "banana", protokollieren Sie die Anzahl der Treffer und heben Sie sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```
