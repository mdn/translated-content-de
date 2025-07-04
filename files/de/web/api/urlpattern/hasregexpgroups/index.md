---
title: "URLPattern: hasRegExpGroups-Eigenschaft"
short-title: hasRegExpGroups
slug: Web/API/URLPattern/hasRegExpGroups
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`hasRegExpGroups`** schreibgeschützte Eigenschaft der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein Boolean, der angibt, ob einer der `URLPattern`-Komponenten [reguläre Ausdrucksgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) enthält oder nicht.

Sie können die `hasRegExpGroups`-Eigenschaft verwenden, um zu überprüfen, ob ein `URLPattern`-Objekt mit bestimmten Webplattform-APIs verwendbar ist, die keine regulären Ausdrucksgruppen erlauben. Zum Beispiel:

- Die `match`-Direktive im {{HTTPHeader("Use-As-Dictionary")}} HTTP-Header verbietet reguläre Ausdrucksgruppen, sowie
- die `urlPattern`-Bedingung beim Hinzufügen statischer Routen mit der Methode [`InstallEvent.addRoutes()`](/de/docs/Web/API/InstallEvent/addRoutes).

## Wert

Ein Boolean.

## Beispiele

### Verwendung von `hasRegExpGroups`

Im folgenden Beispiel wird ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit einem Gruppentrenner verwendet, der benannte Ausdrucksgruppen namens "id" und "title" enthält. Die `hasRegExpGroups`-Eigenschaft gibt in diesem Fall `true` zurück.

```js
const pattern = new URLPattern({ pathname: "/blog/:id(\\d+){-:title}?" });
console.log(pattern.hasRegExpGroups); // true
const result = pattern.exec({ pathname: "/blog/123-some-article" });
console.log(result.pathname.groups); // {id: '123', title: 'some-article'}
```

Es funktioniert auch mit anonymen Ausdrucksgruppen.

```js
const pattern = new URLPattern({ pathname: "/blog/(\\d+)" });
console.log(pattern.hasRegExpGroups); // true
const result = pattern.exec({ pathname: "/blog/123" });
console.log(result.pathname.groups); // {0: '123'}
```

Für andere nicht-kapturierende Gruppen, zum Beispiel bei Verwendung von Platzhaltern (`*`), gibt `hasRegExpGroups` `false` zurück.

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
