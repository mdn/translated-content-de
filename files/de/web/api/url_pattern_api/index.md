---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: f9a203c4bfacf129dffa946b5c9e1345dfd5e628
---

{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die verwendet wird, um URL-Musterabgleicher zu erstellen. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird von der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle verwendet.

## Konzepte und Nutzung

Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenketten, die genau übereinstimmen.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht-erfassende Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrmals übereinstimmen können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die beliebig komplexe Regex-Abgleiche mit einigen [Einschränkungen](#einschränkungen_bei_regex-abgleichern) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern ihren Inhalt als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) weiter unten.

## Schnittstellen

Die URL Pattern API hat nur eine zugehörige Schnittstelle:

- [`URLPattern`](/de/docs/Web/API/URLPattern) {{Experimental_Inline}}
  - : Repräsentiert ein Muster, das URLs oder Teile von URLs abgleichen kann. Das Muster kann erfassende Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-JavaScript-Bibliothek. Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Fester Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten. Der feste Text ist eine Zeichenfolge, die exakt abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die unten erläutert werden, sie können jedoch überschrieben werden.

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

Standardmäßig wird eine Gruppe, die den `pathname`-Teil der URL abgleicht, alle Zeichen außer dem Schrägstrich (`/`) abgleichen. Im `hostname`-Teil wird die Gruppe alle Zeichen außer dem Punkt (`.`) abgleichen. In allen anderen Teilen wird die Gruppe alle Zeichen abgleichen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzeste mögliche Zeichenfolge abgleichen wird.

### Regex-Abgleicher

Anstelle der Standard-Abgleichregeln für eine Gruppe können Sie ein Regex für jede Gruppe verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Abgleicher in einer benannten Gruppe, die die Gruppe einschränkt, nur dann zu passen, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen bei Regex-Abgleichern

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^`, es wird nur abgeglichen, wenn es am Anfang des Protokollteils des URLPattern verwendet wird, und ist redundant, wenn es verwendet wird.

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

- Endet mit `$`, es wird nur abgeglichen, wenn es am Ende des Hash-Teils des URLPattern verwendet wird, und ist redundant, wenn es verwendet wird.

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

- Lookaheads und Lookbehinds werden niemals einen Teil des URLPattern abgleichen.

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

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern entkommen werden, auch wenn sie es bei RegExp nicht müssen.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden durch Präfixieren des Gruppennamens mit einem Doppelpunkt (`:`) angegeben. Reguläre Ausdrucksgruppen, die nicht mit einem Doppelpunkt und einem Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen werden im Übereinstimmungsergebnis basierend auf ihrer Reihenfolge im Muster numerisch indiziert.

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

Gruppen können auch Modifikatoren haben. Diese werden nach dem Gruppennamen (oder nach dem regulären Ausdruck, falls vorhanden) angegeben. Es gibt drei Modifikatoren: `?`, um die Gruppe optional zu machen, `+`, um die Gruppe einmal oder mehrmals zu wiederholen, und `*`, um die Gruppe null- oder mehrmals zu wiederholen.

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

Muster können auch Gruppentrenner enthalten. Dies sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind. Diese Gruppentrenner werden nicht im Übereinstimmungsergebnis wie erfassende Gruppen erfasst, können jedoch genauso wie Gruppen Modifikatoren haben. Wenn Gruppentrenner nicht von einem Modifikator modifiziert werden, werden sie behandelt, als ob die Elemente in ihnen einfach Teil des übergeordneten Musters wären. Gruppentrenner dürfen keine anderen Gruppentrenner enthalten, können jedoch beliebige andere Musterelemente (erfassende Gruppen, Regex, Platzhalter oder festen Text) enthalten.

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

### Automatische Gruppenvorzüge in Pfadnamen

In Mustern, die den `pathname`-Teil einer URL abgleichen, wird den Gruppen automatisch ein Schrägstrich (`/`) Präfix hinzugefügt, wenn die Gruppendefinition von einem Schrägstrich (`/`) vorangestellt ist. Dies ist nützlich für Gruppen mit Modifikatoren, da es ermöglicht, wiederholte Gruppen ordnungsgemäß zu verwenden.

Wenn Sie keine automatische Voranstellung möchten, können Sie diese deaktivieren, indem Sie die Gruppe mit Gruppentrennern (`{}`) umgeben. Gruppentrenner haben kein automatisches Voranstellungsverhalten.

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

### Platzhalter-Token

Das Platzhalter-Token (`*`) ist eine Abkürzung für eine unbenannte erfassende Gruppe, die alle Zeichen null- oder mehrmals abgleicht. Sie können dieses überall im Muster platzieren. Der Platzhalter ist gierig, was bedeutet, dass er die längstmögliche Zeichenfolge abgleicht.

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

### Normalisierung von Mustern

Wenn ein Muster geparst wird, wird es automatisch in eine kanonische Form normalisiert. Beispielsweise werden Unicode-Zeichen in der Pfadname-Eigenschaft Prozent-codiert, Punycode-Codierung wird im Hostnamen verwendet, Standardportnummern werden ausgelassen, Pfade wie `/foo/./bar/` werden auf nur `/foo/bar` reduziert usw. Außerdem gibt es einige Darstellungsmöglichkeiten von Mustern, die zur gleichen zugrunde liegenden Bedeutung geparst werden, wie `foo` und `{foo}`. Solche Fälle werden auf die einfachste Form normalisiert. In diesem Fall wird `{foo}` zu `foo` geändert.

## Groß- und Kleinschreibung

Die URL Pattern API behandelt viele Teile der URL standardmäßig als groß- und kleinschreibungssensitiv beim Abgleichen. Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks groß- und kleinschreibungsunabhängiges URL-Matching. Eine `ignoreCase`-Option ist im [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)-Konstruktor verfügbar, um bei Bedarf eine groß- und kleinschreibungsunabhängige Übereinstimmung zu ermöglichen.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Die Einstellung der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Abgleichoperationen auf groß- und kleinschreibungsunabhängig für das gegebene Muster um:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Beispiele

### Filterung auf eine bestimmte URL-Komponente

Das folgende Beispiel zeigt, wie ein `URLPattern` eine bestimmte URL-Komponente filtert. Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, werden fehlende Komponenten standardmäßig auf den Platzhalterwert `*` gesetzt.

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

### Erstellen eines URLPattern aus einer vollständigen URL-Zeichenkette

Das folgende Beispiel zeigt, wie ein `URLPattern` aus einer vollständigen URL-Zeichenkette mit eingebetteten Mustern erstellt wird. Beispielsweise kann ein `:` sowohl das URL-Protokoll-Suffix sein, wie `https:`, als auch der Beginn einer benannten Mustersammlung, wie `:foo`. Es funktioniert "einfach", wenn keine Mehrdeutigkeit besteht, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

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

### Erstellen eines URLPattern mit einer mehrdeutigen URL-Zeichenkette

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einer mehrdeutigen Zeichenkette erstellt wird, die Zeichen als Teil der Mustersyntax behandelten wird. In diesem Fall könnte das `:`-Zeichen das Protokollkomponenten-Suffix sein oder es könnte das Präfix für eine benannte Gruppe im Muster sein. Der Konstruktor entscheidet sich, dies als Teil des Musters zu behandeln und bestimmt daher, dass dies ein relatives Pfadnamensmuster ist. Da es keine Basis-URL gibt, kann der relative Pfadname nicht aufgelöst werden und es wird ein Fehler ausgelöst.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Escaping von Zeichen zur Entschlüsselung von URLPattern-Konstruktorzeichenfolgen

Das folgende Beispiel zeigt, wie ein mehrdeutiges Konstruktorzeichen so escaped werden kann, dass es als URL-Trenner anstelle eines Musterzeichens behandelt wird. Hier wird `:` als `\\:` escaped.

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

Das folgende Beispiel zeigt, wie Basis-URLs auch verwendet werden können, um das `URLPattern` zu erstellen. Beachten Sie, dass die Basis-URL in diesen Fällen strikt als URL behandelt wird und keine Mustersyntax selbst enthalten kann.

Außerdem bietet die Basis-URL einen Wert für jede Komponente, was bedeutet, dass das resultierende `URLPattern` auch einen Wert für jede Komponente haben wird, selbst wenn es die leere Zeichenfolge ist. Dies bedeutet, dass Sie nicht das "Standard auf Platzhalter"-Verhalten erhalten.

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

### Zugriff auf übereinstimmende Gruppenwerte

Das folgende Beispiel zeigt, wie Eingabewerte, die Mustersammlungen entsprechen, später aus dem `exec()`-Ergebnisobjekt abgerufen werden können. Unbenannte Gruppen werden der Reihe nach indexnummeriert zugewiesen.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname.groups[0]); // 'cdn'

console.log(result.hostname.input); // 'cdn.example.com'

console.log(result.inputs); // [{ hostname: 'cdn.example.com' }]
```

### Zugriff auf übereinstimmende Gruppenwerte mit benutzerdefinierten Namen

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen gegeben werden können, die verwendet werden können, um den übereinstimmenden Wert im Ergebnisobjekt zuzugreifen.

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

Das folgende Beispiel zeigt, wie ein Abgleichsgruppe ein benutzerdefiniertes reguläres Ausdruck verwenden kann.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups[0]); // 'foo'
```

### Benannte Gruppe mit einem benutzerdefinierten regulären Ausdruck

Das folgende Beispiel zeigt, wie ein benutzerdefiniertes reguläres Ausdruck mit einer benannten Gruppe verwendet werden kann.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Optionale Übereinstimmungsgruppen erstellen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe optional erstellt werden kann, indem ein `?`-Modifikator danach platziert wird. Für die `pathname`-Komponente macht dies auch ein vorhergehendes `/`-Zeichen zu einem optionalen Präfix der Gruppe.

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

### Wiederholte Übereinstimmungsgruppen erstellen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe wiederholt erstellt werden kann, indem ein `+`-Modifikator danach platziert wird. In der `pathname`-Komponente wird auch das `/`-Präfix als speziell behandelt. Es wird mit der Gruppe wiederholt.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

result.pathname.groups.action; // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // false
```

### Optionale und wiederholte Übereinstimmungsgruppen erstellen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe erstellt wird, die sowohl optional als auch wiederholt ist. Dies wird getan, indem ein `*`-Modifikator nach der Gruppe platziert wird. Hierbei wird wieder das `pathname`-Komponenten-`/` Präfix sowohl optional als auch mit der Gruppe wiederholt.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname.groups.action); // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // true
```

### Verwendung eines benutzerdefinierten Präfixes oder Suffixes für einen optionalen oder wiederholten Modifikator

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix zu kennzeichnen, das von einem nachfolgenden `?`, `*`, oder `+` Modifikator bearbeitet wird.

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(result.hostname.groups.subdomain); // 'foo.bar'
```

### Text optional oder wiederholt machen, ohne eine Übereinstimmungsgruppe

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um festen Textwerte als optional oder wiederholt zu kennzeichnen, ohne eine Übereinstimmungsgruppe zu verwenden.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });

console.log(result.pathname.groups); // {}
```

### Verwendung mehrerer Komponenten und Funktionen zugleich

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

- Auf [GitHub](https://github.com/kenchris/urlpattern-polyfill) ist ein Polyfill von `URLPattern` verfügbar
- Die durch `URLPattern` verwendete Mustersyntax ist ähnlich der Syntax, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird
