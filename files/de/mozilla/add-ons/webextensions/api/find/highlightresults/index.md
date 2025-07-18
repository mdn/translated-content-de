---
title: find.highlightResults()
slug: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Hebt die Ergebnisse eines vorherigen Aufrufs von {{WebExtAPIRef("find.find()")}} hervor.

Wenn eine Erweiterung `find()` aufruft, werden die Übereinstimmungen nicht automatisch hervorgehoben, sondern vom Browser gespeichert. Rufen Sie `highlightResults()` auf, um sie hervorzuheben.

Beachten Sie, dass die gespeicherten Ergebnisse global über alle Erweiterungen hinweg sind. Wenn beispielsweise Erweiterung A `find("apple")` aufruft und dann Erweiterung B `find("banana")` aufruft, werden bei einem Aufruf von `highlightResults()` durch Erweiterung A die Ergebnisse für "banana" hervorgehoben.

## Syntax

```js-nolint
browser.find.highlightResults(
  options // optional object
)
```

### Parameter

- `options` {{optional_inline}}
  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann eine der folgenden Eigenschaften besitzen, die alle optional sind:
    - `tabId`
      - : `integer`. ID des Tabs, der hervorgehoben werden soll. Standardmäßig der aktive Tab.
    - `rangeIndex`
      - : `integer`. Index des Bereichs, der hervorgehoben werden soll. Standardmäßig werden alle Bereiche hervorgehoben.
    - `noScroll`
      - : `boolean`. Nicht zum hervorgehobenen Element scrollen. Standardmäßig `true`.

### Rückgabewert

Keiner.

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

## Browser-Kompatibilität

{{Compat}}
