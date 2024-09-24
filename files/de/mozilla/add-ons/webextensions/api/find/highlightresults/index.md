---
title: find.highlightResults()
slug: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Hebt die Ergebnisse eines vorherigen Aufrufs von {{WebExtAPIRef("find.find()")}} hervor.

Wenn eine Erweiterung `find()` aufruft, werden die Übereinstimmungen nicht automatisch hervorgehoben, sondern vom Browser gespeichert. Rufen Sie `highlightResults()` auf, um sie hervorzuheben.

Beachten Sie, dass die gespeicherten Ergebnisse global über alle Erweiterungen hinweg sind. Wenn beispielsweise Erweiterung A `find("apple")` aufruft und anschließend Erweiterung B `find("banana")` aufruft, werden bei einem nachfolgenden Aufruf von `highlightResults()` durch Erweiterung A die Ergebnisse für "banana" hervorgehoben.

## Syntax

```js-nolint
browser.find.highlightResults(
  options // optional object
)
```

### Parameter

- `options` {{optional_inline}}

  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann alle der folgenden, optionalen Eigenschaften enthalten:

    - `tabId`
      - : `integer`. ID des Tabs, der hervorgehoben werden soll. Standardmäßig der aktive Tab.
    - `rangeIndex`
      - : `integer`. Index der zu markierenden Reichweite. Standardmäßig werden alle Bereiche hervorgehoben.
    - `noScroll`
      - : `boolean`. Nicht zu dem markierten Element scrollen. Standardmäßig `true`.

### Rückgabewert

Keiner.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Durchsuchen Sie den aktiven Tab nach "banana", loggen Sie die Anzahl der Übereinstimmungen und heben Sie sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```
