---
title: "URLPattern: hasRegExpGroups-Eigenschaft"
short-title: hasRegExpGroups
slug: Web/API/URLPattern/hasRegExpGroups
l10n:
  sourceCommit: aafad07220c63481570e43cc66a5d9fb7b985ffc
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`hasRegExpGroups`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein boolescher Wert, der angibt, ob eine der `URLPattern`-Komponenten [reguläre Ausdrucks-Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) enthält.

Sie können die `hasRegExpGroups`-Eigenschaft verwenden, um zu prüfen, ob ein `URLPattern`-Objekt mit bestimmten Webplattform-APIs verwendbar ist, die keine regulären Ausdrucks-Erfassungsgruppen zulassen. Zum Beispiel:

- Die `match`-Direktive im {{HTTPHeader("Use-As-Dictionary")}} HTTP-Header verbietet reguläre Ausdrucks-Erfassungsgruppen, ebenso wie
- die `urlPattern`-Bedingung beim Hinzufügen von statischen Routen mit der Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes).

## Wert

Ein boolescher Wert.

## Beispiele

### Verwendung von `hasRegExpGroups`

Im folgenden Beispiel wird ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit einem Gruppentrennzeichen verwendet, das benannte Erfassungsgruppen namens "id" und "title" enthält. Die `hasRegExpGroups`-Eigenschaft gibt in diesem Fall `true` zurück.

```js
const pattern = new URLPattern({ pathname: "/blog/:id(\\d+){-:title}?" });
console.log(pattern.hasRegExpGroups); // true
const result = pattern.exec({ pathname: "/blog/123-some-article" });
console.log(result.pathname.groups); // {id: '123', title: 'some-article'}
```

Es funktioniert auch mit anonymen Erfassungsgruppen.

```js
const pattern = new URLPattern({ pathname: "/blog/(\\d+)" });
console.log(pattern.hasRegExpGroups); // true
const result = pattern.exec({ pathname: "/blog/123" });
console.log(result.pathname.groups); // {0: '123'}
```

Für andere nicht-erfassende Gruppen, zum Beispiel bei der Verwendung von Platzhalterzeichen (`*`), gibt `hasRegExpGroups` `false` zurück.

```js
const pattern = new URLPattern({ pathname: "/blog/*" });
console.log(pattern.hasRegExpGroups); // false
const result = pattern.exec({ pathname: "/blog/123" });
console.log(result.pathname.groups); // {0: '123'}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
