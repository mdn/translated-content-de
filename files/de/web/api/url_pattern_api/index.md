---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Mustervergleichen verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten abgeglichen werden. Die URL Pattern API wird von der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle verwendet.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können Folgendes enthalten:

- Zeichenfolgen, die exakt übereinstimmen.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der Übereinstimmungs-URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional oder mehrfach abgeglichen machen.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die beliebig komplexe Regex-Übereinstimmungen mit einigen [Einschränkungen](#einschränkungen_der_regex-übereinstimmungen) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalt als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) weiter unten.

## Schnittstellen

Die URL Pattern API hat nur eine zugehörige Schnittstelle:

- [`URLPattern`](/de/docs/Web/API/URLPattern)
  - : Repräsentiert ein Muster, das URLs oder Teile von URLs abgleichen kann. Das Muster kann Erfassungsgruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-JavaScript-Bibliothek. Diese Syntax ähnelt der in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendeten.

### Fester Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten. Der feste Text ist eine Zeichenfolge, die genau übereinstimmt. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Übereinstimmungsregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die unten erklärt werden, aber sie können überschrieben werden.

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

Standardmäßig stimmt eine Gruppe, die den `pathname`-Teil der URL abgleicht, mit allen Zeichen außer dem Schrägstrich (`/`) überein. Im `hostname`-Teil stimmt die Gruppe mit allen Zeichen außer dem Punkt (`.`) überein. In allen anderen Teilen stimmt die Gruppe mit allen Zeichen überein. Der Segment-Platzhalter ist nicht-gierig, d.h. er stimmt mit der kürzest möglichen Zeichenfolge überein.

### Regex-Übereinstimmungen

Anstelle der Standardabgleichsregeln für eine Gruppe können Sie für jede Gruppe ein Regex verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichsregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Übereinstimmung in einer benannten Gruppe, die die Gruppe darauf beschränkt, nur übereinzustimmen, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen der Regex-Übereinstimmungen

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Das Zeichen `^` am Anfang stimmt nur überein, wenn es am Anfang des Protokollteils des URLPatterns verwendet wird und ist redundant, wenn es verwendet wird.

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

- Das Zeichen `$` am Ende stimmt nur überein, wenn es am Ende des Hash-Teils des URLPatterns verwendet wird und ist redundant, wenn es verwendet wird.

  ```js
  // with `$` in pathname
  const pattern = new URLPattern({ pathname: "(path$)" });
  console.log(pattern.test("https://example.com/path")); // false
  console.log(pattern.test("https://example.com/other")); // false
  ```

  ```js
  // with `$` in hash
  const pattern = new URLPattern({ hash: "(hash$)" });
  console.log(pattern.test("https://example.com/#hash")); // true
  console.log(pattern.test("xhttps://example.com/#otherhash")); // false
  ```

  ```js
  // without `$` in hash
  const pattern = new URLPattern({ hash: "(hash)" });
  console.log(pattern.test("https://example.com/#hash")); // true
  console.log(pattern.test("xhttps://example.com/#otherhash")); // false
  ```

- Lookaheads und Lookbehinds werden nie mit einem Teil des URLPatterns übereinstimmen.

  ```js
  // lookahead
  const pattern = new URLPattern({ pathname: "(a(?=b))" });
  console.log(pattern.test("https://example.com/ab")); // false
  console.log(pattern.test("https://example.com/ax")); // false
  ```

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

- Klammern müssen in Bereichsausdrücken innerhalb von URLPatterns entkommen werden, obwohl sie in RegExp nicht entkommen werden müssen.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden durch Voranstellen des Gruppennamens mit einem Doppelpunkt (`:`) angegeben. Regexp-Gruppen, die nicht mit einem Doppelpunkt und einem Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen werden basierend auf ihrer Reihenfolge im Muster im Übereinstimmungsergebnis numerisch indiziert.

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

Gruppen können auch Modifikatoren haben. Diese werden nach dem Gruppennamen (oder nach dem Regex, falls vorhanden) angegeben. Es gibt drei Modifikatoren: `?`, um die Gruppe optional zu machen, `+`, um die Gruppe einmal oder mehrmals zu wiederholen, und `*`, um die Gruppe null- oder mehrmals zu wiederholen.

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

### Gruppentrenner

Muster können auch Gruppentrenner enthalten. Dies sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind. Diese Gruppentrenner werden im Übereinstimmungsergebnis nicht erfasst wie erfasste Gruppen, können jedoch trotzdem Modifikatoren wie Gruppen angewendet haben. Wenn die Gruppentrenner nicht durch einen Modifikator modifiziert werden, werden sie behandelt, als wären die Elemente darin einfach Teil des übergeordneten Musters. Gruppentrenner dürfen keine anderen Gruppentrenner enthalten, können jedoch alle anderen Musterelemente (Erfassungsgruppen, Regex, Platzhalter oder festen Text) enthalten.

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

### Automatisches Gruppenvorsehen in Pfadnamen

In Mustern, die mit dem `pathname`-Teil einer URL übereinstimmen, wird automatisch ein Schrägstrich (`/`)-Präfix hinzugefügt, wenn die Gruppendefinition von einem Schrägstrich (`/`) vorangestellt wird. Dies ist nützlich für Gruppen mit Modifikatoren, da sie es ermöglichen, dass wiederholte Gruppen wie erwartet funktionieren.

Wenn Sie kein automatisches Vorsehen wünschen, können Sie es deaktivieren, indem Sie die Gruppe mit Gruppentrennern (`{}`) umgeben. Gruppentrenner haben kein automatisches Vorsehungsverhalten.

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

Das Platzhaltersymbol (`*`) ist eine Abkürzung für eine unbenannte Erfassungsgruppe, die alle Zeichen null- oder mehrmals abgleicht. Sie können dies überall im Muster platzieren. Das Platzhaltersymbol ist gierig, was bedeutet, dass es die längstmögliche Zeichenfolge abgleicht.

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

Wenn ein Muster geparst wird, wird es automatisch in eine kanonische Form normalisiert. Zum Beispiel werden Unicode-Zeichen in der `pathname`-Eigenschaft prozentcodiert, Punycode-Codierung wird im `hostname` verwendet, Standardportnummern werden ausgelassen, Pfade wie `/foo/./bar/` werden auf nur `/foo/bar` reduziert usw. Darüber hinaus gibt es einige Musterdarstellungen, die auf die gleiche zugrunde liegende Bedeutung parsen, wie `foo` und `{foo}`. Solche Fälle werden in die einfachste Form normalisiert. In diesem Fall wird `{foo}` in `foo` geändert.

## Groß-/Kleinschreibungssensitivität

Die URL Pattern API behandelt viele Teile der URL standardmäßig beim Abgleich als groß-/kleinschreibungssensitiv. Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks groß-/kleinschreibungsinsensitiven URL-Abgleich. Eine `ignoreCase`-Option ist im Konstruktor von [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern) verfügbar, um bei Bedarf groß-/kleinschreibungsinsensitiven Abgleich zu ermöglichen.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Wenn die `ignoreCase`-Option im Konstruktor auf `true` gesetzt ist, schalten alle Übereinstimmungsoperationen auf groß-/kleinschreibungsinsensitiv für das gegebene Muster um:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Beispiele

### Filter auf eine spezifische URL-Komponente

Das folgende Beispiel zeigt, wie ein `URLPattern` eine spezifische URL-Komponente filtert. Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, werden fehlende Komponenten standardmäßig auf den `*`-Platzhalterwert gesetzt.

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

### Konstruktion eines URLPatterns aus einem vollständigen URL-String

Das folgende Beispiel zeigt, wie ein `URLPattern` aus einem vollständigen URL-String mit eingebetteten Mustern konstruiert wird. Zum Beispiel kann ein `:` sowohl das URL-Protokoll-Suffix, wie `https:`, als auch der Anfang einer benannten Mustersgruppe, wie `:foo`, sein. Dies "funktioniert einfach", wenn es keine Mehrdeutigkeit darüber gibt, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

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

### Konstruktion eines URLPatterns mit einem mehrdeutigen URL-String

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einem mehrdeutigen String konstruiert wurde, bevorzugt die Zeichen als Teil der Mustersyntax behandelt. In diesem Fall könnte das `:`-Zeichen das Protokollkomponenten-Suffix oder der Präfix für eine benannte Gruppe im Muster sein. Der Konstruktor entscheidet sich, dies als Teil des Musters zu behandeln, und daher wird festgestellt, dass es sich um ein relatives Pfadnahmenmuster handelt. Da keine Basis-URL vorhanden ist, kann der relative Pfadnamen nicht aufgelöst werden, und es wird ein Fehler ausgelöst.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Eskapierung von Zeichen zur Entlastung von mehrdeutigen URLPattern-Konstruktor-Strings

Das folgende Beispiel zeigt, wie ein mehrdeutiger Konstruktorzeichen durch Eskapierung als URL-Trenner anstelle eines Musterzeichens behandelt werden kann. Hier wird `:` als `\\:` eskapiert.

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

### Verwendung von Basis-URLs für test() und exec()

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

### Verwendung von Basis-URLs im URLPattern-Konstruktor

Das folgende Beispiel zeigt, wie Basis-URLs auch verwendet werden können, um das `URLPattern` zu konstruieren. Beachten Sie, dass die Basis-URL in diesen Fällen streng als URL behandelt wird und keine Mustersyntax selbst enthalten kann.

Da die Basis-URL für jede Komponente einen Wert bereitstellt, hat das resultierende `URLPattern` auch für jede Komponente einen Wert, wenn auch nur den leeren String. Das bedeutet, dass Sie nicht das "Standard auf Platzhalter"-Verhalten erhalten.

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

### Zugriff auf Werte von erfassten Gruppen

Das folgende Beispiel zeigt, wie Eingabewerte, die Mustern gruppenmäßig entsprechen, später aus dem `exec()`-Ergebnisobjekt abgerufen werden können. Unbenannte Gruppen werden indexmäßig nummeriert.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname.groups[0]); // 'cdn'

console.log(result.hostname.input); // 'cdn.example.com'

console.log(result.inputs); // [{ hostname: 'cdn.example.com' }]
```

### Zugriff auf Werte von erfassten Gruppen mit benutzerdefinierten Namen

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen erhalten können, die verwendet werden können, um den übereinstimmenden Wert im Ergebnisobjekt abzurufen.

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

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe einen benutzerdefinierten regulären Ausdruck verwenden kann.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups[0]); // 'foo'
```

### Benannte Gruppe mit einem benutzerdefinierten regulären Ausdruck

Das folgende Beispiel zeigt, wie ein benutzerdefinierter regulärer Ausdruck mit einer benannten Gruppe verwendet wird.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Optionales Machen von Übereinstimmungsgruppen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe durch Hinzufügen eines `?`-Modifikators optional gemacht werden kann. Für die `pathname`-Komponente bewirkt dies auch, dass ein vorangestelltes `/`-Zeichen als optionales Präfix für die Gruppe behandelt wird.

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

### Wiederholtes Machen von Übereinstimmungsgruppen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe durch Hinzufügen eines `+`-Modifikators wiederholt gemacht werden kann. In der `pathname`-Komponente wird das `/`-Präfix ebenfalls speziell behandelt. Es wird mit der Gruppe wiederholt.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

result.pathname.groups.action; // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // false
```

### Optionales und wiederholtes Machen von Übereinstimmungsgruppen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe sowohl optional als auch wiederholt gemacht werden kann. Dies wird durch Hinzufügen eines `*`-Modifikators nach der Gruppe erreicht. Auch hier wird das `/`-Präfix in der `pathname`-Komponente speziell behandelt. Es wird sowohl optional als auch wiederholt mit der Gruppe.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname.groups.action); // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // true
```

### Verwendung eines benutzerdefinierten Prä- oder Suffixes für einen optionalen oder wiederholten Modifikator

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix anzugeben, das von einem nachfolgenden `?`, `*` oder `+`-Modifikator bearbeitet wird.

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(result.hostname.groups.subdomain); // 'foo.bar'
```

### Optionales oder wiederholtes Machen von Text ohne Übereinstimmungsgruppe

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um feste Textwerte ohne Nutzung einer Übereinstimmungsgruppe optional oder wiederholt zu machen.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });

console.log(result.pathname.groups); // {}
```

### Verwendung mehrerer Komponenten und Funktionen auf einmal

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

- Ein Polyfill von `URLPattern` ist verfügbar [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
- Die von URLPattern verwendete Mustersyntax ähnelt der Syntax, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
