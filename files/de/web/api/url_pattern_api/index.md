---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: aafad07220c63481570e43cc66a5d9fb7b985ffc
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die verwendet wird, um URL-Muster-Matcher zu erstellen.
Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden.
Die URL Pattern API wird durch das [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface verwendet.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek.
Muster können Folgendes enthalten:

- Wörtliche Zeichenfolgen, die genau übereinstimmen.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht-erfassende Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrmals übereinstimmen lassen.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die beliebig komplexe Regex-Übereinstimmungen ermöglichen, aber mit einigen [Einschränkungen](#einschränkungen_von_regex-übereinstimmungen).
  _Beachten Sie, dass die Klammern nicht Teil der Regex sind, sondern deren Inhalt als Regex definieren._
  Einige APIs verbieten die Verwendung von regulären Ausdrucksgruppen in `URLPattern`-Objekten.
  Die [`hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups)-Eigenschaft gibt an, ob reguläre Ausdrucksgruppen verwendet werden oder nicht.

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) weiter unten.

## Schnittstellen

Die URL Pattern API hat nur eine zugehörige Schnittstelle:

- [`URLPattern`](/de/docs/Web/API/URLPattern)
  - : Repräsentiert ein Muster, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfassende Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript-Bibliothek.
Diese Syntax ist ähnlich der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feststehender Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus feststehendem Text und Gruppen enthalten.
Der feststehende Text ist eine Folge von Zeichen, die genau übereinstimmen.
Gruppen vergleichen eine beliebige Zeichenfolge basierend auf Übereinstimmungsregeln.
Jeder URL-Teil hat seine eigenen Standardregeln, die unten erklärt werden, aber sie können überschrieben werden.

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

Standardmäßig stimmt eine Gruppe, die den `pathname`-Teil der URL abgleicht, mit allen Zeichen außer dem Schrägstrich (`/`) überein. Im `hostname`-Teil stimmt die Gruppe mit allen Zeichen außer dem Punkt (`.`) überein.
In allen anderen Teilen stimmt die Gruppe mit allen Zeichen überein.
Der Segment-Platzhalter ist nicht gierig, das heißt, er stimmt mit der kürzestmöglichen Zeichenfolge überein.

### Regex-Übereinstimmungen

Anstatt die Standard-Übereinstimmungsregeln für eine Gruppe zu verwenden, können Sie ein Regex für jede Gruppe verwenden, indem Sie ein Regex in Klammern einschließen.
Dieses Regex definiert die Übereinstimmungsregeln für die Gruppe. Unten ist ein Beispiel für eine Regex-Übereinstimmung in einer benannten Gruppe, die die Gruppe darauf beschränkt, nur dann übereinzustimmen, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen von Regex-Übereinstimmungen

Einige Regex-Muster funktionieren nicht wie erwartet:

- Beginnt mit `^` wird nur übereinstimmen, wenn es am Anfang des Protokollteils des URLPattern verwendet wird, und ist redundant, wenn es verwendet wird.

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

- Endet mit `$` wird nur übereinstimmen, wenn es am Ende des Hash-Teils des URLPattern verwendet wird, und ist redundant, wenn es verwendet wird.

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

- Lookaheads und Lookbehinds stimmen niemals mit einem Teil des URLPattern überein.

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

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern maskiert werden, obwohl sie dies in RegExp nicht tun.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden durch ein vorangestelltes Doppelpunkt (`:`) vor dem Gruppennamen angegeben.
Regexp-Gruppen, die nicht durch einen Doppelpunkt und einen Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen werden im Matchergebnis numerisch basierend auf ihrer Reihenfolge im Muster indiziert.

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

Gruppen können auch Modifikatoren haben. Diese werden nach dem Gruppennamen (oder
nach dem Regex, falls vorhanden) angegeben. Es gibt drei Modifikatoren: `?`, um die
Gruppe optional zu machen, `+`, um die Gruppe einmal oder mehrmals zu wiederholen, und `*`, um
die Gruppe null oder mehrmals zu wiederholen.

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

Muster können auch Gruppentrenner enthalten. Dies sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind.
Diese Gruppentrenner werden nicht wie erfassende Gruppen im Matchergebnis erfasst, können aber wie Gruppen Modifikatoren haben.
Wenn Gruppentrenner nicht durch einen Modifikator modifiziert werden, werden sie behandelt, als ob die Elemente in ihnen einfach Teil des übergeordneten Musters wären.
Gruppentrenner dürfen keine anderen Gruppentrenner enthalten, können jedoch jedes andere Musterelement enthalten (erfassende Gruppen, Regex, Platzhalter oder feststehender Text).

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

### Automatisches Präfixieren von Gruppen in Pfadnamen

In Mustern, die gegen den `pathname`-Teil einer URL abgeglichen werden, erhalten Gruppen ein automatisches Schrägstrich (`/`)-Präfix, wenn die Gruppendefinition von einem Schrägstrich (`/`) vorausgeht.
Dies ist nützlich für Gruppen mit Modifikatoren, da es ermöglicht, dass wiederkehrende Gruppen wie erwartet funktionieren.

Wenn Sie kein automatisches Präfix wünschen, können Sie es deaktivieren, indem Sie die Gruppe mit Gruppentrennern (`{}`) umgeben.
Gruppentrenner haben kein automatisches Präfixverhalten.

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

Das Platzhaltersymbol (`*`) ist eine Kurzform für eine unbenannte erfassende Gruppe, die alle Zeichen null oder mehrmals abgleicht.
Sie können dies überall im Muster platzieren.
Der Platzhalter ist gierig, was bedeutet, dass er mit der längstmöglichen Zeichenfolge übereinstimmt.

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

Wenn ein Muster analysiert wird, wird es automatisch in eine kanonische Form normalisiert. Beispielsweise werden Unicode-Zeichen in der `pathname`-Eigenschaft prozentual kodiert, die Punycode-Kodierung wird im `hostname` verwendet, Standard-Portnummern werden ausgelassen, Pfade wie `/foo/./bar/` werden auf einfach `/foo/bar` reduziert, usw. Darüber hinaus gibt es einige Musterdarstellungen, die auf die gleiche grundlegende Bedeutung analysiert werden, wie `foo` und `{foo}`. Solche Fälle werden auf die einfachste Form normalisiert. In diesem Fall wird `{foo}` zu `foo` geändert.

## Groß-/Kleinschreibungsempfindlichkeit

Die URL Pattern API behandelt viele Teile der URL standardmäßig als groß-/kleinschreibungssensitiv beim Abgleichen.
Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks eine groß-/kleinschreibungsunempfindliche URL-Übereinstimmung.
Eine `ignoreCase`-Option ist im [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)-Konstruktor verfügbar, um bei Bedarf eine groß-/kleinschreibungsunempfindliche Übereinstimmung zu ermöglichen.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Übereinstimmungsvorgänge für das gegebene Muster auf groß-/kleinschreibungsunempfindlich um:

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

Das folgende Beispiel zeigt, wie ein `URLPattern` eine spezifische URL-Komponente filtert.
Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, setzen fehlende Komponenten standardmäßig den Platzhalterwert `*`.

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

### Konstruieren eines URLPattern aus einer vollständigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie ein `URLPattern` aus einer vollständigen URL-Zeichenfolge mit eingebetteten Mustern konstruiert wird.
Zum Beispiel kann ein `:` sowohl das URL-Protokoll-Suffix, wie `https:`, als auch der Beginn einer benannten Mustern-Gruppe, wie `:foo`, sein.
Es "funktioniert einfach", wenn es keine Mehrdeutigkeit gibt, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

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

### Konstruktion eines URLPattern mit einer mehrdeutigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einer mehrdeutigen Zeichenfolge konstruiert wurde, dazu neigt, Zeichen als Teil der Mustersyntax zu behandeln.
In diesem Fall könnte das `:`-Zeichen das Protokollkomponenten-Suffix oder das Präfix für eine benannte Gruppe im Muster sein.
Der Konstruktor entscheidet, dies als Teil des Musters zu behandeln, und bestimmt daher, dass dies ein relatives Pfadnamensmuster ist.
Da es keine Basis-URL gibt, kann der relative Pfadname nicht aufgelöst werden und es wird ein Fehler ausgelöst.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Zeichen entkommen, um URLPattern-Konstruktorzeichenfolgen zu entwirren

Das folgende Beispiel zeigt, wie ein mehrdeutiges Zeichen im Konstruktor durch Escape behandelt werden kann, um als URL-Trennzeichen anstelle eines Musterzeichens behandelt zu werden.
Hier wird `:` als `\\:` maskiert.

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

### Verwenden von Basis-URLs für `test()` und `exec()`

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

Das nachstehende Beispiel zeigt, wie Basis-URLs auch zur Konstruktion des `URLPattern` verwendet werden können.
Beachten Sie, dass die Basis-URL in diesen Fällen streng als URL behandelt wird und keine Mustersyntax enthalten kann.

Außerdem, da die Basis-URL für jede Komponente einen Wert bereitstellt, wird das resultierende `URLPattern` auch für jede Komponente einen Wert haben, selbst wenn es sich um die leere Zeichenfolge handelt.
Dies bedeutet, dass Sie nicht das "Standard zu Platzhalter"-Verhalten erhalten.

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

### Zugriff auf erfasste Gruppenwerte

Das folgende Beispiel zeigt, wie Eingabewerte, die mit Mustergruppen übereinstimmen, später aus dem Ergebnisobjekt der `exec()`-Methode abgerufen werden können.
Unbenannte Gruppen werden der Reihenfolge nach nummerisch indiziert.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname.groups[0]); // 'cdn'

console.log(result.hostname.input); // 'cdn.example.com'

console.log(result.inputs); // [{ hostname: 'cdn.example.com' }]
```

### Zugriff auf erfasste Gruppenwerte mit benutzerdefinierten Namen

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen gegeben werden können, die verwendet werden können, um den Wert im Ergebnisobjekt zuzugreifen.

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

### Benutzerdefinierte Regulaerausdrucksgruppen

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

### Übereinstimmungsgruppen optional machen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe optional gemacht wird, indem ein `?`-Modifikator dahinter gesetzt wird.
Für die `pathname`-Komponente bewirkt dies auch, dass jeder vorangehende `/`-Zeichen als optionales Präfix für die Gruppe behandelt wird.

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

### Übereinstimmungsgruppen wiederholen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe durch Platzieren eines `+`-Modifikators dahinter wiederholt werden kann.
In der `pathname`-Komponente wird auch das `/`-Präfix speziell behandelt.
Es wird mit der Gruppe wiederholt.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

result.pathname.groups.action; // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // false
```

### Übereinstimmungsgruppen optional und wiederholt machen

Das folgende Beispiel zeigt, wie eine Übereinstimmungsgruppe sowohl optional als auch wiederholt gemacht wird.
Dies geschieht, indem ein `*`-Modifikator hinter der Gruppe platziert wird.
Auch hier behandelt die `pathname`-Komponente das `/`-Präfix speziell.
Es wird sowohl optional als auch mit der Gruppe wiederholt.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname.groups.action); // 'do/some/thing/cool'

console.log(pattern.test({ pathname: "/product" })); // true
```

### Verwenden eines benutzerdefinierten Präfixes oder Suffixes für einen optionalen oder wiederholten Modifikator

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix zu kennzeichnen, das von einem nachfolgenden `?`, `*` oder `+`-Modifikator bearbeitet wird.

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(result.hostname.groups.subdomain); // 'foo.bar'
```

### Text optional oder wiederholt machen, ohne eine Übereinstimmungsgruppe

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um feste Textwerte ohne Verwendung einer Übereinstimmungsgruppe als optional oder wiederholt zu kennzeichnen.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });

console.log(result.pathname.groups); // {}
```

### Verwenden mehrerer Komponenten und Funktionen auf einmal

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

- Ein Polyfill von `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar.
- Die von URLPattern verwendete Mustersyntax ist der Syntax ähnlich, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
