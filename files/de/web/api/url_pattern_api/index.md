---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: f9a203c4bfacf129dffa946b5c9e1345dfd5e628
---

{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface genutzt.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau abgeglichen werden.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_von_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur ein einziges zugehöriges Interface:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
  - : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der JavaScript-Bibliothek [path-to-regexp](https://github.com/pillarjs/path-to-regexp). Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten. Der feststehende Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, können aber überschrieben werden.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig entspricht eine Gruppe, die den `pathname`-Teil der URL abgleicht, allen Zeichen außer dem Schrägstrich (`/`). Im `hostname`-Teil entspricht die Gruppe allen Zeichen außer dem Punkt (`.`). In allen anderen Teilen entspricht die Gruppe allen Zeichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Statt der Standardabgleichregeln für eine Gruppe zu verwenden, können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe nur dann abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, wird nur übereinstimmen, wenn es am Anfang des Protokollteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$`, wird nur übereinstimmen, wenn es am Ende des Haschteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}
  ```

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface genutzt.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau abgeglichen werden.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_von_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur ein einziges zugehöriges Interface:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
  - : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der JavaScript-Bibliothek [path-to-regexp](https://github.com/pillarjs/path-to-regexp). Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten. Der feststehende Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, können aber überschrieben werden.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig entspricht eine Gruppe, die den `pathname`-Teil der URL abgleicht, allen Zeichen außer dem Schrägstrich (`/`). Im `hostname`-Teil entspricht die Gruppe allen Zeichen außer dem Punkt (`.`). In allen anderen Teilen entspricht die Gruppe allen Zeichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Statt der Standardabgleichregeln für eine Gruppe zu verwenden, können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe nur dann abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, wird nur übereinstimmen, wenn es am Anfang des Protokollteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$`, wird nur übereinstimmen, wenn es am Ende des Haschteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

in pathname
const pattern = new URLPattern({ pathname: "(path$)" });
console.log(pattern.test("https://example.com/path")); // false
console.log(pattern.test("https://example.com/other")); // false

````

```js
// with `{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface genutzt.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau abgeglichen werden.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_von_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur ein einziges zugehöriges Interface:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
- : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der JavaScript-Bibliothek [path-to-regexp](https://github.com/pillarjs/path-to-regexp). Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten. Der feststehende Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, können aber überschrieben werden.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
````

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig entspricht eine Gruppe, die den `pathname`-Teil der URL abgleicht, allen Zeichen außer dem Schrägstrich (`/`). Im `hostname`-Teil entspricht die Gruppe allen Zeichen außer dem Punkt (`.`). In allen anderen Teilen entspricht die Gruppe allen Zeichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Statt der Standardabgleichregeln für eine Gruppe zu verwenden, können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe nur dann abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, wird nur übereinstimmen, wenn es am Anfang des Protokollteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$`, wird nur übereinstimmen, wenn es am Ende des Haschteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}
  ```

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface genutzt.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau abgeglichen werden.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_von_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur ein einziges zugehöriges Interface:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
  - : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der JavaScript-Bibliothek [path-to-regexp](https://github.com/pillarjs/path-to-regexp). Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten. Der feststehende Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, können aber überschrieben werden.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig entspricht eine Gruppe, die den `pathname`-Teil der URL abgleicht, allen Zeichen außer dem Schrägstrich (`/`). Im `hostname`-Teil entspricht die Gruppe allen Zeichen außer dem Punkt (`.`). In allen anderen Teilen entspricht die Gruppe allen Zeichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Statt der Standardabgleichregeln für eine Gruppe zu verwenden, können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe nur dann abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, wird nur übereinstimmen, wenn es am Anfang des Protokollteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$`, wird nur übereinstimmen, wenn es am Ende des Haschteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

in pathname
const pattern = new URLPattern({ pathname: "(path$)" });
console.log(pattern.test("https://example.com/path")); // false
console.log(pattern.test("https://example.com/other")); // false

```

in hash
const pattern = new URLPattern({ hash: "(hash$)" });
console.log(pattern.test("https://example.com/#hash")); // true
console.log(pattern.test("xhttps://example.com/#otherhash")); // false
```

````js
// without `{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface genutzt.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau abgeglichen werden.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_von_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur ein einziges zugehöriges Interface:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
- : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der JavaScript-Bibliothek [path-to-regexp](https://github.com/pillarjs/path-to-regexp). Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten. Der feststehende Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, können aber überschrieben werden.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
````

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig entspricht eine Gruppe, die den `pathname`-Teil der URL abgleicht, allen Zeichen außer dem Schrägstrich (`/`). Im `hostname`-Teil entspricht die Gruppe allen Zeichen außer dem Punkt (`.`). In allen anderen Teilen entspricht die Gruppe allen Zeichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Statt der Standardabgleichregeln für eine Gruppe zu verwenden, können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe nur dann abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, wird nur übereinstimmen, wenn es am Anfang des Protokollteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$`, wird nur übereinstimmen, wenn es am Ende des Haschteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}
  ```

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface genutzt.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau abgeglichen werden.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_von_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur ein einziges zugehöriges Interface:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
  - : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der JavaScript-Bibliothek [path-to-regexp](https://github.com/pillarjs/path-to-regexp). Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten. Der feststehende Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, können aber überschrieben werden.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig entspricht eine Gruppe, die den `pathname`-Teil der URL abgleicht, allen Zeichen außer dem Schrägstrich (`/`). Im `hostname`-Teil entspricht die Gruppe allen Zeichen außer dem Punkt (`.`). In allen anderen Teilen entspricht die Gruppe allen Zeichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Statt der Standardabgleichregeln für eine Gruppe zu verwenden, können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe nur dann abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, wird nur übereinstimmen, wenn es am Anfang des Protokollteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$`, wird nur übereinstimmen, wenn es am Ende des Haschteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

in pathname
const pattern = new URLPattern({ pathname: "(path$)" });
console.log(pattern.test("https://example.com/path")); // false
console.log(pattern.test("https://example.com/other")); // false

````

```js
// with `{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface genutzt.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau abgeglichen werden.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_von_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur ein einziges zugehöriges Interface:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
- : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der JavaScript-Bibliothek [path-to-regexp](https://github.com/pillarjs/path-to-regexp). Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten. Der feststehende Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, können aber überschrieben werden.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
````

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig entspricht eine Gruppe, die den `pathname`-Teil der URL abgleicht, allen Zeichen außer dem Schrägstrich (`/`). Im `hostname`-Teil entspricht die Gruppe allen Zeichen außer dem Punkt (`.`). In allen anderen Teilen entspricht die Gruppe allen Zeichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Statt der Standardabgleichregeln für eine Gruppe zu verwenden, können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe nur dann abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, wird nur übereinstimmen, wenn es am Anfang des Protokollteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$`, wird nur übereinstimmen, wenn es am Ende des Haschteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}
  ```

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface genutzt.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau abgeglichen werden.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_von_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur ein einziges zugehöriges Interface:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
  - : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der JavaScript-Bibliothek [path-to-regexp](https://github.com/pillarjs/path-to-regexp). Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten. Der feststehende Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, können aber überschrieben werden.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig entspricht eine Gruppe, die den `pathname`-Teil der URL abgleicht, allen Zeichen außer dem Schrägstrich (`/`). Im `hostname`-Teil entspricht die Gruppe allen Zeichen außer dem Punkt (`.`). In allen anderen Teilen entspricht die Gruppe allen Zeichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Statt der Standardabgleichregeln für eine Gruppe zu verwenden, können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe nur dann abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, wird nur übereinstimmen, wenn es am Anfang des Protokollteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$`, wird nur übereinstimmen, wenn es am Ende des Haschteils der URLPattern verwendet wird, und ist redundant, wenn verwendet.

in pathname
const pattern = new URLPattern({ pathname: "(path$)" });
console.log(pattern.test("https://example.com/path")); // false
console.log(pattern.test("https://example.com/other")); // false

```

in hash
const pattern = new URLPattern({ hash: "(hash$)" });
console.log(pattern.test("https://example.com/#hash")); // true
console.log(pattern.test("xhttps://example.com/#otherhash")); // false
```

in hash
const pattern = new URLPattern({ hash: "(hash)" });
console.log(pattern.test("https://example.com/#hash")); // true
console.log(pattern.test("xhttps://example.com/#otherhash")); // false

````

- Lookaheads und Lookbehinds werden nie einen Teil der URLPattern abgleichen.

```js
// lookahead
const pattern = new URLPattern({ pathname: "(a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
console.log(pattern.test("https://example.com/ax")); // false
````

```js
// negative-lookahead
const pattern = new URLPattern({ pathname: "(a(?!b))" });
console.log(pattern.test("https://example.com/ab")); // false
console.log(pattern.test("https://example.com/ax")); // false
```

```js
// lookbehind
const pattern = new URLPattern({ pathname: "((?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // false
console.log(pattern.test("https://example.com/xa")); // false
```

```js
// negative-lookbehind
const pattern = new URLPattern({ pathname: "((?<!b)a)" });
console.log(pattern.test("https://example.com/ba")); // false
console.log(pattern.test("https://example.com/xa")); // false
```

- Klammern müssen in Bereichsausdrücken innerhalb der URLPattern maskiert werden, obwohl sie es in RegExp nicht müssen.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden durch Voranstellen des Gruppennamens mit einem Doppelpunkt (`:`) spezifiziert. Regex-Gruppen, die nicht durch einen Doppelpunkt und einen Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen werden im Abgleichergebnis numerisch basierend auf ihrer Reihenfolge im Muster indiziert.

```js
// A named group
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

```js
// An unnamed group
const pattern = new URLPattern("/books/(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { '0': '123' }
```

### Gruppenmodifikatoren

Gruppen können auch Modifikatoren haben. Diese werden nach dem Gruppennamen (oder nach dem Regex, falls vorhanden) angegeben. Es gibt drei Modifikatoren: `?`, um die Gruppe optional zu machen, `+`, um die Gruppe ein- oder mehrmals wiederholen zu lassen, und `*`, um die Gruppe null oder mehrmals wiederholen zu lassen.

```js
// An optional group
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // false
console.log(pattern.test("https://example.com/books/123/456/789")); // false
```

```js
// A repeating group with a minimum of one
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```

```js
// A repeating group with a minimum of zero
const pattern = new URLPattern("/books/:id*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```

### Gruppentrennzeichen

Muster können auch Gruppentrennzeichen enthalten. Diese sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind. Diese Gruppentrennzeichen werden im Abgleichergebnis nicht erfasst wie Erfassungsgruppen, können jedoch wie Gruppen mit Modifikatoren versehen werden. Wenn Gruppentrennzeichen nicht durch einen Modifikator modifiziert werden, werden sie behandelt, als würden die Elemente darin einfach Teil des übergeordneten Musters sein. Gruppentrennzeichen dürfen keine weiteren Gruppentrennzeichen enthalten, können aber alle anderen Musterbestandteile (Erfassungsgruppen, Regex, Platzhalter oder feststehender Text) enthalten.

```js
// A group delimiter with a ? (optional) modifier
const pattern = new URLPattern("/book{s}?", "https://example.com");
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/book")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// A group delimiter without a modifier
const pattern = new URLPattern("/book{s}", "https://example.com");
console.log(pattern.pathname); // /books
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/book")); // false
```

```js
// A group delimiter containing a capturing group
const pattern = new URLPattern({ pathname: "/blog/:id(\\d+){-:title}?" });
console.log(pattern.test("https://example.com/blog/123-my-blog")); // true
console.log(pattern.test("https://example.com/blog/123")); // true
console.log(pattern.test("https://example.com/blog/my-blog")); // false
```

### Automatische Gruppenvoranstellung in Pfadnamen

In Mustern, die gegen den `pathname`-Teil einer URL abgleichen, erhalten Gruppen eine automatische Schrägstrich (`/`)-Voranstellung, wenn die Gruppendefinition von einem Schrägstrich (`/`) vorangestellt wird. Dies ist nützlich für Gruppen mit Modifikatoren, da es Gruppen mit Wiederholungen erlaubt, wie erwartet zu funktionieren.

Wenn Sie keine automatische Voranstellung wünschen, können Sie diese deaktivieren, indem Sie die Gruppe mit Gruppentrennzeichen (`{}`) umgeben. Gruppentrennzeichen haben keine automatische Voranstellungsverhalten.

```js
// A pattern with an optional group, preceded by a slash
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
```

```js
// A pattern with a repeating group, preceded by a slash
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/")); // false
console.log(pattern.test("https://example.com/books/123/456/")); // false
```

```js
// Segment prefixing does not occur outside of pathname patterns
const pattern = new URLPattern({ hash: "/books/:id?" });
console.log(pattern.test("https://example.com#/books/123")); // true
console.log(pattern.test("https://example.com#/books")); // false
console.log(pattern.test("https://example.com#/books/")); // true
```

```js
// Disabling segment prefixing for a group using a group delimiter
const pattern = new URLPattern({ pathname: "/books/{:id}?" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // true
```

### Platzhaltersymbole

Das Platzhaltersymbol (`*`) ist eine Abkürzung für eine unbenannte Erfassungsgruppe, die alle Zeichen null oder mehrmals abgleicht. Sie können dies überall im Muster platzieren. Der Platzhalter ist gierig, was bedeutet, dass er die längste mögliche Zeichenfolge abgleicht.

```js
// A wildcard at the end of a pattern
const pattern = new URLPattern("/books/*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // true
console.log(pattern.test("https://example.com/books/123/456")); // true
```

```js
// A wildcard in the middle of a pattern
const pattern = new URLPattern("/*.png", "https://example.com");
console.log(pattern.test("https://example.com/image.png")); // true
console.log(pattern.test("https://example.com/image.png/123")); // false
console.log(pattern.test("https://example.com/folder/image.png")); // true
console.log(pattern.test("https://example.com/.png")); // true
```

### Musternormalisierung

Wenn ein Muster geparst wird, wird es automatisch in eine kanonische Form normalisiert. Beispielsweise werden Unicode-Zeichen im `pathname`-Eigenschaft Prozent kodiert, Punycode-Codierung wird im `hostname` verwendet, Standardportnummern werden weggelassen, Pfade wie `/foo/./bar/` werden einfach in `/foo/bar` umgewandelt usw. Darüber hinaus gibt es einige Musterdarstellungen, die auf dieselbe zugrunde liegende Bedeutung geparst werden, wie `foo` und `{foo}`. Solche Fälle werden auf die einfachste Form normalisiert. In diesem Fall wird `{foo}` in `foo` geändert.

## Groß- und Kleinschreibung

Die URL Pattern API behandelt viele Teile der URL standardmäßig als Groß- und Kleinschreibungs-sensitiv beim Abgleichen. Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks eine Groß- und Kleinschreibungs-unempfindliche URL-Abgleichung. Eine `ignoreCase`-Option ist im [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)-Konstruktor verfügbar, um bei Bedarf Groß- und Kleinschreibungs-unempfindlichen Abgleich zu aktivieren.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Durch Setzen der `ignoreCase`-Option auf `true` im Konstruktor werden alle Abgleichoperationen für das gegebene Muster auf Groß- und Kleinschreibungs-unempfindlichkeit umgestellt:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Beispiele

### Filter für eine bestimmte URL-Komponente

Das folgende Beispiel zeigt, wie ein `URLPattern` eine bestimmte URL-Komponente filtert. Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, wird bei fehlenden Komponenten der `*` Platzhalterwert verwendet.

```js
// Construct a URLPattern that matches a specific domain and its subdomains.
// All other URL components default to the wildcard `*` pattern.
const pattern = new URLPattern({
  hostname: "{*.}?example.com",
});

console.log(pattern.hostname); // '{*.}?example.com'

console.log(pattern.protocol); // '*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.pathname); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test("https://example.com/foo/bar")); // true

console.log(pattern.test({ hostname: "cdn.example.com" })); // true

console.log(pattern.test("custom-protocol://example.com/other/path?q=1")); // false

// Prints `false` because the hostname component does not match
console.log(pattern.test("https://cdn-example.com/foo/bar"));
```

### Erstellen eines URLPattern aus einer vollständigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie ein `URLPattern` aus einer vollständigen URL-Zeichenfolge mit eingebetteten Mustern erstellt wird. Beispielsweise kann ein `:` sowohl das Suffix des URL-Protokolls, wie `https:`, als auch der Beginn einer benannten Mustervorlage, wie `:foo`, sein. Es "funktioniert einfach", wenn keine Mehrdeutigkeit darüber besteht, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

```js
// Construct a URLPattern that matches URLs to CDN servers loading jpg images.
// URL components not explicitly specified, like search and hash here, result
// in the empty string similar to the URL() constructor.
const pattern = new URLPattern("https://cdn-*.example.com/*.jpg");

console.log(pattern.protocol); // 'https'

console.log(pattern.hostname); // 'cdn-*.example.com'

console.log(pattern.pathname); // '/*.jpg'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

// Prints `true`
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg"),
);

// Prints `false` because the search component does not match
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg?q=1"),
);
```

### Erstellen eines URLPattern mit einer mehrdeutigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einer mehrdeutigen Zeichenfolge erstellt wurde, die Zeichen bevorzugt als Teil der Mustersyntax behandelt. In diesem Fall könnte das Zeichen `:` der Suffix des Protokollkomponenten sein oder der Präfix für eine benannte Gruppe im Muster. Der Konstruktor entscheidet, dies als Teil des Musters zu behandeln, und bestimmt daher, dass dies ein relatives Pfadnamensmuster ist. Da keine Basis-URL vorhanden ist, kann der relative Pfadname nicht aufgelöst werden und es wird ein Fehler ausgelöst.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Maskieren von Zeichen zur Entwirrung von URLPattern-Konstruktorzeichenfolgen

Das folgende Beispiel zeigt, wie ein mehrdeutiges Konstruktorzeichen als URL-Trenner und nicht als Musterzeichen behandelt werden kann, indem es maskiert wird. Hier wird `:` als `\\:` maskiert.

```js
// Constructs a URLPattern treating the `:` as the protocol suffix.
const pattern = new URLPattern("data\\:foo*");

console.log(pattern.protocol); // 'data'

console.log(pattern.pathname); // 'foo*'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.hostname); // ''
console.log(pattern.port); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

console.log(pattern.test("data:foobar")); // true
```

### Verwenden von Basis-URLs für test() und exec()

Das folgende Beispiel zeigt, wie `test()` und `exec()` Basis-URLs verwenden können.

```js
const pattern = new URLPattern({ hostname: "example.com", pathname: "/foo/*" });

// Prints `true` as the hostname based in the dictionary `baseURL` property
// matches.
console.log(
  pattern.test({
    pathname: "/foo/bar",
    baseURL: "https://example.com/baz",
  }),
);

// Prints `true` as the hostname in the second argument base URL matches.
console.log(pattern.test("/foo/bar", "https://example.com/baz"));

// Throws because the second argument cannot be passed with a dictionary input.
try {
  pattern.test({ pathname: "/foo/bar" }, "https://example.com/baz");
} catch (e) {}

// The `exec()` method takes the same arguments as `test()`.
const result = pattern.exec("/foo/bar", "https://example.com/baz");

console.log(result.pathname.input); // '/foo/bar'

console.log(result.pathname.groups[0]); // 'bar'

console.log(result.hostname.input); // 'example.com'
```

### Verwenden von Basis-URLs im URLPattern-Konstruktor

Das folgende Beispiel zeigt, wie Basis-URLs auch zur Erstellung des `URLPattern` verwendet werden können. Beachten Sie, dass die Basis-URL in diesen Fällen strikt als URL behandelt wird und keine Mustersyntax enthalten darf.

Da die Basis-URL einen Wert für jede Komponente bereitstellt, hat das resultierende `URLPattern` auch einen Wert für jede Komponente, auch wenn er die leere Zeichenfolge ist. Das bedeutet, dass Sie nicht das Verhalten "Standard zum Platzhalter" erhalten.

```js
const pattern1 = new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});

console.log(pattern1.protocol); // 'https'
console.log(pattern1.hostname); // 'example.com'
console.log(pattern1.pathname); // '/foo/*'

console.log(pattern1.username); // ''
console.log(pattern1.password); // ''
console.log(pattern1.port); // ''
console.log(pattern1.search); // ''
console.log(pattern1.hash); // ''

// Equivalent to pattern1
const pattern2 = new URLPattern("/foo/*", "https://example.com");

// Throws because a relative constructor string must have a base URL to resolve
// against.
try {
  const pattern3 = new URLPattern("/foo/*");
} catch (e) {}
```

### Zugriff auf erfasste Gruppenvorschläge

Das folgende Beispiel zeigt, wie Eingabewerte, die mit Mustervorlagen übereinstimmen, später aus dem `exec()`-Ergebnisobjekt abgerufen werden können. Unbenannte Gruppen werden sequentiell Indizes zugewiesen.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname.groups[0]); // 'cdn'

console.log(result.hostname.input); // 'cdn.example.com'

console.log(result.inputs); // [{ hostname: 'cdn.example.com' }]
```

### Zugriff auf erfasste Gruppenvorschläge mit benutzerdefinierten Namen

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen zugewiesen werden können, die zum Zugriff auf den erfassten Wert im Ergebnisobjekt verwendet werden können.

```js
// Construct a URLPattern using matching groups with custom names. These
// names can then be later used to access the matched values in the result
// object.
const pattern = new URLPattern({ pathname: "/:product/:user/:action" });
const result = pattern.exec({ pathname: "/store/wanderview/view" });

console.log(result.pathname.groups.product); // 'store'
console.log(result.pathname.groups.user); // 'wanderview'
console.log(result.pathname.groups.action); // 'view'

console.log(result.pathname.input); // '/store/wanderview/view'

console.log(result.inputs); // [{ pathname: '/store/wanderview/view' }]
```

### Benutzerdefinierte reguläre Ausdrucksgruppen

Das folgende Beispiel zeigt, wie eine Abgleichgruppe einen benutzerdefinierten regulären Ausdruck verwenden kann.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups[0]); // 'foo'
```

### Benannte Gruppe mit einem benutzerdefinierten regulären Ausdruck

Das folgende Beispiel zeigt, wie ein benutzerdefinierter regulärer Ausdruck mit einer benannten Gruppe verwendet werden kann.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Übereinstimmende Gruppen optional machen

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe optional gemacht werden kann, indem ein `?`-Modifikator danach platziert wird. Bei der `pathname`-Komponente bewirkt dies außerdem, dass ein vorausgehendes `/`-Zeichen ebenfalls als optionaler Präfix für die Gruppe behandelt wird.

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true

// Wildcards can be made optional as well. This may not seem to make sense
// since they already match the empty string, but it also makes the prefix
// `/` optional in a pathname pattern.
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### Übereinstimmende Gruppen wiederholen

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe wiederholt werden kann, indem ein `+`-Modifikator danach platziert wird. Bei der `pathname`-Komponente wird das `/`-Präfix ebenfalls als speziell behandelt und wird mit der Gruppe wiederholt.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

result.pathname.groups.action; // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // false
```

### Übereinstimmende Gruppen optional und wiederholt machen

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe erstellt werden kann, die sowohl optional als auch wiederholt ist. Dies tun Sie, indem Sie nach der Gruppe einen `*`-Modifikator platzieren. Auch hier wird das Präfix `/` der `pathname`-Komponente als speziell behandelt. Es wird sowohl optional als auch mit der Gruppe wiederholt.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname.groups.action); // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // true
```

### Verwenden eines benutzerdefinierten Präfixes oder Suffixes für einen optionalen oder wiederholten Modifikator

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um einen benutzerdefinierten Präfix und/oder Suffix zu kennzeichnen, die von einem nachfolgenden `?`, `*` oder `+`-Modifikator bearbeitet werden sollen.

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(result.hostname.groups.subdomain); // 'foo.bar'
```

### Feststehende Werte ohne übereinstimmende Gruppe optional oder wiederholt machen

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um feststehende Werte als optional oder wiederholt zu kennzeichnen, ohne eine übereinstimmende Gruppe zu verwenden.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });

console.log(result.pathname.groups); // {}
```

### Verwenden mehrerer Komponenten und Funktionen gleichzeitig

Das folgende Beispiel zeigt, wie viele Funktionen über mehrere URL-Komponenten hinweg kombiniert werden können.

```js
const pattern = new URLPattern({
  protocol: "http{s}?",
  username: ":user?",
  password: ":pass?",
  hostname: "{:subdomain.}*example.com",
  pathname: "/product/:action*",
});

const result = pattern.exec(
  "http://foo:bar@sub.example.com/product/view?q=12345",
);

console.log(result.username.groups.user); // 'foo'
console.log(result.password.groups.pass); // 'bar'
console.log(result.hostname.groups.subdomain); // 'sub'
console.log(result.pathname.groups.action); // 'view'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill für `URLPattern` ist verfügbar [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
- Die von URLPattern verwendete Mustersyntax ähnelt der, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
