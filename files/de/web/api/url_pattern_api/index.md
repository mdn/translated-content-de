---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die zum Erstellen von URL-Musterabgleichern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten abgeglichen werden.

## Konzepte und Verwendung

Muster werden mit dem [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface festgelegt. Die Mustersyntax basiert auf der Syntax der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können Folgendes enthalten:

- Wörtliche Zeichenfolgen, die genau übereinstimmen.
- Platzhalter (`/posts/*`), die beliebige Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfassende Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrmals abgeglichen werden können.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die beliebig komplexe Regex-Übereinstimmungen ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern ihren Inhalt als Regex definieren._ Einige APIs verbieten die Verwendung von regulären Ausdrucksgruppen in `URLPattern`-Objekten. Die Eigenschaft [`hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) gibt an, ob reguläre Ausdrucksgruppen verwendet werden.

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) weiter unten.

## Schnittstellen

- [`URLPattern`](/de/docs/Web/API/URLPattern)
  - : Stellt ein Muster dar, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfassende Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript-Bibliothek. Diese Syntax ähnelt der in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendeten.

### Fester Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten. Der feste Text ist eine Zeichenfolge, die genau abgeglichen wird. Gruppen gleichen eine beliebige Zeichenfolge basierend auf Abgleichsregeln ab. Jeder URL-Teil hat seine eigenen Standardregeln, die unten erklärt werden, aber sie können überschrieben werden.

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

### Regex-Matcher

Anstelle der Standard-Abgleichsregeln für eine Gruppe können Sie für jede Gruppe ein Regex definieren, indem Sie es in Klammern angeben. Dieses Regex definiert die Abgleichsregeln für die Gruppe. Unten ist ein Beispiel eines Regex-Matchers in einer benannten Gruppe, die die Gruppe nur abgleichen lässt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern1 = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern1.test("https://example.com/books/123")); // true
console.log(pattern1.test("https://example.com/books/abc")); // false
console.log(pattern1.test("https://example.com/books/")); // false
```

Sie können auch Regex verwenden, wenn Sie ein `URLPattern` mit der Objektsyntax konstruieren.

```js
const pattern2 = new URLPattern({ pathname: "/books/:id(\\d+)" });
console.log(pattern2.test("https://example.com/books/123")); // true
console.log(pattern2.test("https://example.com/books/abc")); // false
console.log(pattern2.test("https://example.com/books/")); // false
```

#### Pfadnamensabgleich

Der `pathname`-URL-Teil beginnt immer mit `/`. Wenn Sie das `/` in Ihrem regulären Ausdruck weglassen, schlägt der Abgleich fehl. Das folgende Beispiel zeigt dies:

```js example-bad
// Doesn't match, because omits the `/`
const pattern1 = new URLPattern({ pathname: "(b.*)" });
console.log(pattern1.test("https://example.com/b")); // false
console.log(pattern1.test("https://example.com/ba")); // false
```

Die folgenden Beispiele enthalten die `/`:

```js example-good
// Matches URL where path is exactly "/b"
const pattern2 = new URLPattern({ pathname: "(/b)" });
console.log(pattern2.test("https://example.com/b")); // true
console.log(pattern2.test("https://example.com/ba")); // false

// Matches URL where path is /b followed by any number of characters
const pattern3 = new URLPattern({ pathname: "(/b.*)" });
console.log(pattern3.test("https://example.com/b")); // true
console.log(pattern3.test("https://example.com/ba")); // true
```

#### Anfangs- und Endanker

Der Anfangsanker (`^`) und der Endanker (`$`) werden verwendet, um Muster am Anfang bzw. Ende der Testzeichenfolge zu verankern. Während sie für den Anfang und das Ende eines URL-Teils angegeben werden können, sind sie redundant. Dies liegt daran, dass alle URL-Teile implizit mit dem `^`-Anker vorangestellt und mit dem `$`-Anker abgeschlossen sind.

Der folgende Code zeigt, dass es egal ist, ob `^` angegeben ist oder nicht. Das Beispiel verwendet ein Muster im `protocol`-URL-Teil, aber die anderen Teile der URL verhalten sich gleich.

```js
// with `^` in protocol
const pattern1 = new URLPattern({ protocol: "(^https?)" });
console.log(pattern1.test("https://example.com/index.html")); // true

// without `^` in protocol
const pattern2 = new URLPattern({ protocol: "(https?)" });
console.log(pattern2.test("https://example.com/index.html")); // true
```

Der folgende Code zeigt, dass es egal ist, ob `$` angegeben ist oder nicht.

```js
// with `$` in pathname
const pattern1 = new URLPattern({ pathname: "(/path$)" });
console.log(pattern1.test("https://example.com/path")); // true

// without `$` in pathname
const pattern2 = new URLPattern({ pathname: "(/path)" });
console.log(pattern2.test("https://example.com/path")); // true

// with `$` in hash
const pattern3 = new URLPattern({ hash: "(/hash$)" });
console.log(pattern3.test("https://example.com/#hash")); // true

// without `$` in hash
const pattern4 = new URLPattern({ hash: "(/hash)" });
console.log(pattern4.test("https://example.com/#hash")); // true
```

#### Forward- und Backward-Assertions

[Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertions ermöglichen es Ihnen, anzugeben, dass Text vor oder hinter der aktuellen Parsing-Position ein bestimmtes Muster abgleicht, ohne dass dieser Abgleich erfasst wird oder die Zeichen konsumiert werden.

Es gibt vier Arten von Assertions:

- `(?=...)`: Eine positive Lookahead-Assertion gibt ein Muster an, das die folgenden Zeichen abgleichen müssen.
- `(?!...)`: Eine negative Lookahead-Assertion gibt ein Muster an, das die folgenden Zeichen nicht abgleichen dürfen.
- `(?<=...)`: Eine positive Lookbehind-Assertion gibt ein Muster an, das die vorhergehenden Zeichen abgleichen müssen.
- `(?<!...)`: Eine negative Lookbehind-Assertion gibt ein Muster an, das die vorhergehenden Zeichen nicht abgleichen dürfen.

Seien Sie vorsichtig bei der Verwendung von Lookahead- und Lookbehind-Assertions mit `URLPattern`, da das Verhalten eventuell nicht intuitiv ist. Zum Beispiel würden Sie erwarten, dass die folgende Lookahead-Assertion einen `pathname` von `/ab` abgleicht, aber das ist nicht, was passiert.

```js example-bad
const pattern = new URLPattern({ pathname: "(/a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
```

Die `URLPattern`-Engine gleicht die Testzeichenfolge gegen das `pathname`-Muster ab, indem sie zuerst die Übereinstimmung für `/a` findet und anschließend überprüft, dass das nächste Zeichen in der Test-URL `b` ist — ohne es zu konsumieren. Die Engine fährt dann mit dem Abgleich der Test-URL am nicht konsumierten Zeichen `b` fort, aber es gibt nichts mehr im Muster, um es abzugleichen, was dazu führt, dass der Abgleich fehlschlägt.

Damit der Abgleich funktioniert, muss das Muster alle Zeichen in der Testzeichenfolge konsumieren. Um das `b`-Zeichen zu konsumieren, könnten Sie `b` am Ende des Ausdrucks hinzufügen, einen `.` zum Abgleichen eines beliebigen Zeichens oder `.*` zum Abgleichen aller Zeichen nach der Lookahead-Assertion:

```js example-good
// positive-lookahead
const pattern1 = new URLPattern({ pathname: "(/a(?=b).*)" });
console.log(pattern1.test("https://example.com/ab")); // true
console.log(pattern1.test("https://example.com/ax")); // false
```

Das nächste Beispiel zeigt einen negativen Lookahead-Abgleich für `/a`, dem kein `b` folgt. Beachten Sie, dass der Assertion ein `.*` folgt, um das Zeichen zu konsumieren, das von der Assertion abgeglichen wird.

```js
// negative-lookahead - matches /a<not b><anything>
const pattern2 = new URLPattern({ pathname: "(/a(?!b).*)" });
console.log(pattern2.test("https://example.com/ab")); // false
console.log(pattern2.test("https://example.com/ax")); // true
```

Das folgende Beispiel zeigt einen positiven Lookbehind-Abgleich, der auf einem Pfadnamen wie `/ba` übereinstimmt. Das Muster gleicht `/` ab, dann `.` um das nächste Zeichen zu konsumieren, gefolgt von der Assertion, dass das vorherige Zeichen ein `b` war, und dann ein `a`.

```js
// positive-lookbehind
const pattern = new URLPattern({ pathname: "(/.(?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // true
console.log(pattern.test("https://example.com/xa")); // false
```

Dieses Beispiel zeigt einen negativen Lookbehind-Abgleich, der auf einem Pfadnamen wie `/<not b>a` übereinstimmt. Das Muster gleicht `/` ab, dann `.` um das nächste Zeichen (`x`) zu konsumieren, gefolgt von der Assertion, dass das vorherige Zeichen nicht `b` war, und dann ein `a`.

```js
// negative-lookbehind
const pattern4 = new URLPattern({ pathname: "(/.*(?<!b)a)" });
console.log(pattern4.test("https://example.com/ba")); // false
console.log(pattern4.test("https://example.com/xa")); // true
```

#### Andere Einschränkungen von Regex-Matchern

Einige andere Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern escaped werden, obwohl sie dies in RegExp nicht tun müssen.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden angegeben, indem der Gruppenname mit einem Doppelpunkt (`:`) vorangestellt wird. Regex-Gruppen, die nicht mit einem Doppelpunkt und einem Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen werden im Match-Ergebnis basierend auf ihrer Reihenfolge im Muster numerisch indiziert.

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

Muster können auch Gruppentrenner enthalten. Dies sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind. Diese Gruppentrenner werden im Match-Ergebnis nicht erfasst wie erfassende Gruppen, können jedoch ebenso wie Gruppen Modifikatoren auf sie angewendet werden. Wenn Gruppentrenner nicht durch einen Modifikator modifiziert werden, werden sie behandelt, als ob die Elemente in ihnen einfach Teil des übergeordneten Musters wären. Gruppentrenner dürfen keine anderen Gruppentrenner enthalten, aber sie dürfen alle anderen Musterbestandteile (erfassende Gruppen, Regex, Platzhalter oder festen Text) enthalten.

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

### Automatische Gruppenprefixe in Pfadnamen

In Mustern, die gegen den `pathname`-Teil einer URL abgleichen, erhalten Gruppen automatisch ein Schrägstrich (`/`)-Prefix hinzugefügt, wenn die Gruppendefinition von einem Schrägstrich (`/`) vorangestellt ist. Dies ist nützlich für Gruppen mit Modifikatoren, da es ermöglicht, dass wiederholte Gruppen wie erwartet funktionieren.

Wenn Sie kein automatisches Prefixing möchten, können Sie es deaktivieren, indem Sie die Gruppe mit Gruppentrennern (`{}`) umgeben. Gruppentrenner haben kein automatisches Prefixing-Verhalten.

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

### Wildcard-Token

Das Wildcard-Token (`*`) ist eine Abkürzung für eine unbenannte erfassende Gruppe, die alle Zeichen null- oder mehrmals abgleicht. Sie können es an beliebiger Stelle im Muster platzieren. Der Wildcard ist gierig, was bedeutet, dass er die längstmögliche Zeichenfolge abgleichen wird.

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

### Abschließende Schrägstriche im Pfadnamen werden standardmäßig nicht abgeglichen

Abschließende Schrägstriche in einem Pfadnamen werden nicht automatisch abgeglichen. Das folgende Beispiel zeigt, dass ein `URLPattern`-Abgleich für einen Pfadnamen von `/books` `https://example.com/books` abgleichen wird, aber nicht `https://example.com/books/` (und umgekehrt):

```js
const patternSlash = new URLPattern({ pathname: "/books/" });
console.log(patternSlash.test("https://example.com/books")); // false
console.log(patternSlash.test("https://example.com/books/")); // true

const patternNoSlash = new URLPattern({ pathname: "/books" });
console.log(patternNoSlash.test("https://example.com/books")); // false
console.log(patternNoSlash.test("https://example.com/books/")); // true
```

Wenn Sie möchten, dass beides abgeglichen wird, müssen Sie ein Abgleichsmuster verwenden, das beides zulässt. Der einfachste Ansatz ist die Verwendung eines [Gruppentrenners](#gruppentrenner), der einen Schrägstrich enthält, gefolgt vom optionalen Modifikator. Dies wird das Muster mit oder ohne abschließendem Schrägstrich abgleichen.

```js
const patternOptionalSlash = new URLPattern({ pathname: "/books{/}?" });
console.log(patternOptionalSlash.test("https://example.com/books")); // true
console.log(patternOptionalSlash.test("https://example.com/books/")); // true
```

### Musternormalisierung

Wenn ein Muster geparst wird, wird es automatisch in eine kanonische Form normalisiert. Zum Beispiel werden Unicode-Zeichen in der `pathname`-Eigenschaft {{Glossary("Percent-encoding", "prozentkodiert")}}, Punycode-Kodierung wird im Hostnamen verwendet, Standardportnummern werden weggelassen, Pfade wie `/foo/./bar/` werden zu `/foo/bar` zusammengeführt, usw. Zusätzlich gibt es einige Musterrepräsentationen, die auf dieselbe zugrunde liegende Bedeutung geparst werden, wie `foo` und `{foo}`. Solche Fälle werden auf die einfachste Form normalisiert. In diesem Fall wird `{foo}` zum Beispiel zu `foo` normalisiert.

## Vererbung von einer Basis-URL

Sowohl die in [`URLPattern`](/de/docs/Web/API/URLPattern) definierten Abgleichsmuster als auch die in [`URLPattern.test()`](/de/docs/Web/API/URLPattern/test) und [`URLPattern.exec()`](/de/docs/Web/API/URLPattern/exec) verwendeten Test-URLs ermöglichen es, die Eingaben mit einer optionalen Basis-URL zu spezifizieren (diese Basis-URL ist ein separates Parameter, wenn die URL als Zeichenkette angegeben wird, und eine separate Eigenschaft, wenn die URL als Objekt angegeben wird).

Wenn eine Basis-URL definiert ist, dann können URL-Teile von der Basis-URL geerbt werden und verwendet werden, um Teile des Musters oder der Test-URL festzulegen. Die URL-Auflösung ist nahezu so, wie es erwartet wird, wenn eine [`URL`](/de/docs/Web/API/URL) aufgelöst wird, die mit einer Basis-URL angegeben ist.

Der `username` und das `password` werden niemals von der Basis-URL geerbt.

Nur URL-Teile, die "spezifischer" sind als der spezifischste Teil, der in der Eingabe definiert ist, werden von der Basis-URL geerbt. Die folgenden Listen zeigen die Reihenfolge der Spezifität:

- `protocol` (am spezifischsten), `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

Was das bedeutet, ist, dass, wenn `protocol` in der Eingabe-URL angegeben ist, dann ist nichts spezifischer, also wird nichts von der Basis-URL geerbt. Wenn jedoch der `pathname`-Teil in der Eingabe angegeben ist, können `protocol`, `hostname` und `port` von der Basis-URL geerbt werden, aber `search` und `hash` nicht.

Beachten Sie, dass URL-Komponenten, die nicht in der Zeichenfolge/Eingabeobjekt angegeben wurden oder von der Basis-URL geerbt wurden, standardmäßig den Wildcard-Wert (`"*"`) für ein `URLPattern` und die leere Zeichenkette (`""`) für eine Test-URL erhalten.

## Groß- und Kleinschreibung

Die URL Pattern API behandelt viele Teile der URL standardmäßig als groß- und kleinschreibungssensitiv beim Abgleichen. Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks einen nicht groß- und kleinschreibungssensitiven URL-Abgleich. Eine `ignoreCase`-Option ist beim [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)-Konstruktor verfügbar, um bei Bedarf einen nicht groß- und kleinschreibungssensitiven Abgleich zu ermöglichen.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Abgleichsoperationen für das gegebene Muster auf nicht groß- und kleinschreibungssensitiv um:

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

Das folgende Beispiel zeigt, wie ein `URLPattern` eine spezifische URL-Komponente filtert. Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, erhalten alle fehlenden Komponenten standardmäßig den `*`-Wildcard-Wert.

```js
// Construct a URLPattern that matches a specific domain and its subdomains.
// All other URL components default to the wildcard `*` pattern.
const pattern = new URLPattern({
  hostname: "{*.}?example.com",
});

console.log(pattern.hostname); // '{*.}?example.com'

console.log(pattern.protocol); // '*'
console.log(pattern.port); // '*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.pathname); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test("https://example.com/foo/bar")); // true
console.log(pattern.test({ hostname: "cdn.example.com" })); // true
console.log(pattern.test("custom-protocol://example.com/other/path?q=1")); // true

// Prints `false` because the hostname component does not match
console.log(pattern.test("https://cdn-example.com/foo/bar"));
```

### Konstruieren eines URLPattern aus einer vollständigen URL-Zeichenkette

Das folgende Beispiel zeigt, wie ein `URLPattern` aus einer vollständigen URL-Zeichenkette mit eingebetteten Mustern konstruiert wird. Zum Beispiel kann ein `:` sowohl das URL-Protokoll-Suffix, wie `https:`, als auch der Beginn einer benannten Mustergruppe, wie `:foo`, sein. Es "funktioniert einfach", wenn es keine Doppeldeutigkeit zwischen der Bedeutung eines Zeichens als Teil der URL-Syntax oder als Teil der Mustersyntax gibt.

```js
// Construct a URLPattern that matches URLs to CDN servers loading jpg images.
// URL components not explicitly specified result in the wild string ("*")
const pattern = new URLPattern("https://cdn-*.example.com/*.jpg");

console.log(pattern.protocol); // 'https'
console.log(pattern.hostname); // 'cdn-*.example.com'
console.log(pattern.pathname); // '/*.jpg'

console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

// `true`
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg"),
);

// `true` because the search pattern defaults to wildcard
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg?q=1"),
);
```

### Konstruieren eines URLPattern mit einer mehrdeutigen URL-Zeichenkette

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einer mehrdeutigen Zeichenkette konstruiert wird, Zeichen lieber als Teil der Mustersyntax behandelt. In diesem Fall könnte das Zeichen `:` das Protokollkomponentensuffix oder es könnte das Präfix für eine benannte Gruppe im Muster sein. Der Konstruktor entscheidet sich, dies als Teil des Musters zu behandeln und daher festzustellen, dass dies ein relatives Pfadmuster ist. Da keine Basis-URL existiert, kann das relative Pfadmuster nicht aufgelöst werden, und es wird ein Fehler geworfen.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Escapen von Zeichen zur Entwirrung von URLPattern-Konstruktorzeichenfolgen

Das folgende Beispiel zeigt, wie ein mehrdeutiges Konstruktor-Zeichen, das als URL-Trennzeichen anstelle eines Musterzeichens behandelt werden soll, escapet werden kann. Hier wird `:` als `\\:` escapet.

```js
// Constructs a URLPattern treating the `:` as the protocol suffix.
const pattern = new URLPattern("data\\:foo*");

console.log(pattern.protocol); // 'data'
console.log(pattern.pathname); // 'foo*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.hostname); // ''
console.log(pattern.port); // ''
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test("data:foobar")); // true
```

### Verwenden von Basis-URLs für test() und exec()

Das folgende Beispiel zeigt, wie `test()` und `exec()` Basis-URLs verwenden können.

```js
const pattern = new URLPattern({ hostname: "example.com", pathname: "/foo/*" });

console.log(pattern.protocol); // '*'
console.log(pattern.pathname); // '/foo/*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.hostname); // 'example.com'
console.log(pattern.port); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

// `true` as the hostname is inherited from `baseURL` property
// (so is the protocol, but that is matched by the pattern wildcard)
console.log(
  pattern.test({
    pathname: "/foo/bar",
    baseURL: "https://example.com/baz",
  }),
);

// Prints `true` as the hostname in the second argument base URL matches.
console.log(pattern.test("/foo/bar", "https://example.com/baz"));

// Throws because the second argument cannot be passed with the object input.
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

Das folgende Beispiel zeigt, wie Basis-URLs auch verwendet werden können, um das `URLPattern` zu konstruieren. Die Basis-URL wird streng als URL behandelt und kann keine Mustersyntax selbst enthalten.

Das Muster erbt nur [Teile von der Basis-URL, die weniger spezifisch sind](#vererbung_von_einer_basis-url) als die in den anderen Eigenschaften.

In diesem Fall ist der `pathname` angegeben, sodass das Protokoll und der Host geerbt werden können, aber nicht `search`, `hash`, `username` oder `password`. Die nicht geerbten Eigenschaften standardmäßig auf den Wildcard-String (`"*"`). Eine Ausnahme bildet der Port, der auf die leere Zeichenkette gesetzt wird, da der _Hostname_ von der Basis-URL geerbt wird ([was einen implizierten "Standardport"-Wert hat](/de/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port)).

```js
const pattern1 = new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});

console.log(pattern1.protocol); // 'https'
console.log(pattern1.hostname); // 'example.com'
console.log(pattern1.pathname); // '/foo/*'
console.log(pattern1.username); // '*'
console.log(pattern1.password); // '*'
console.log(pattern1.port); // ''
console.log(pattern1.search); // '*'
console.log(pattern1.hash); // '*'

// Equivalent to pattern1
const pattern2 = new URLPattern("/foo/*", "https://example.com");

// Throws because a relative constructor string must have a base URL to resolve
// against.
try {
  const pattern3 = new URLPattern("/foo/*");
} catch (e) {}
```

### Zugriff auf abgeglichene Gruppenwerte

Das folgende Beispiel zeigt, wie Eingabewerte, die Mustern entsprechen, später vom Ergebnisobjekt von [`exec()`](/de/docs/Web/API/URLPattern/exec) abgerufen werden können.

Die `input`-Eigenschaft ist die Zeichenkette, die von dem Muster abgeglichen wird: in diesem Fall ist es `cdn.example.com`. Die `groups`-Eigenschaft enthält erfasste Gruppen, nummerisch indiziert für unbenannte Gruppen und nach Namen für benannte Gruppen. In diesem Fall gibt es nur eine unbenannte Gruppe für die Wildcard-Eigenschaft mit dem Wert `cdn`.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname); // {"groups": {"0": "cdn"}, "input": "cdn.example.com"}
```

### Zugriff auf abgeglichene benannte Gruppenwerte

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen gegeben werden können, die verwendet werden können, um den abgeglichenen Wert im Ergebnisobjekt abzurufen.

Die Match-Muster im Muster werden durch das `:`-Symbol gefolgt von einem Namen angezeigt. Dieselben Namen erscheinen dann als Schlüssel in der `groups`-Eigenschaft, wobei die übereinstimmenden Werte der abgeglichene Teil der Test-URL sind. Die `input`-Eigenschaft enthält den gesamten Teil der URL, der dem `pathname`-Muster entspricht.

```js
// Construct a URLPattern using matching groups with custom names.

const pattern = new URLPattern({ pathname: "/:product/:user/:action" });
const result = pattern.exec({ pathname: "/store/wanderview/view" });

console.log(result.pathname);
/*
{
    "groups": {
        "product": "store",
        "user": "wanderview",
        "action": "view"
    },
    "input": "/store/wanderview/view"
}
*/

// These names can then be later used to access the matched values
// in the result object, such as "user" below.
console.log(result.pathname.groups.user); // 'wanderview'
```

### Regulärer Ausdruck mit unbenannter Gruppe

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe einen regulären Ausdruck verwenden kann, um entweder `/foo` oder `/bar` in einer Test-URL abzugleichen. Die Gruppe ist unbenannt, also wird sie im Ergebnis durch eine Indexnummer referenziert.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });
console.log(result.pathname.groups[0]); // 'foo'
```

### Regulärer Ausdruck mit einer benannten Gruppe

Das folgende Beispiel zeigt, wie ein benutzerdefinierter regulärer Ausdruck mit einer benannten Gruppe verwendet werden kann.

Die Gruppe ist `type` genannt und stimmt mit einem Pfad überein, der entweder `/foo` oder `/bar` ist.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Erfassungsgruppen optional machen

Das folgende Beispiel zeigt, wie man eine erfassende Gruppe optional macht, indem man einen `?`-Modifikator danach setzt.

Für die `pathname`-Komponente führt dies auch dazu, dass ein beliebiges vorangehendes `/`-Zeichen als optionales Präfix für die Gruppe behandelt wird.

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true
```

Auch Wildcards können optional gemacht werden. Dies scheint möglicherweise nicht sinnvoll, da sie bereits die leere Zeichenkette abgleichen, aber es macht auch das Präfix `/` in einem `pathname`-Muster optional.

```js
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### Erfassungsgruppen wiederholt abgleichen

Das folgende Beispiel zeigt, wie eine erfassende Gruppe wiederholt abgeglichen werden kann, indem man einen `+`-Modifikator danach setzt. In der `pathname`-Komponente wird auch das `/`-Prefix als speziell behandelt, sodass es im Wesentlichen den Beginn der wiederholten Gruppe darstellt.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass `/product` nicht übereinstimmt, da es nicht von `/` und mindestens einem Zeichen gefolgt wird.

```js
console.log(pattern.test({ pathname: "/product" })); // false
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Erfassungsgruppen optional und wiederholt machen

Das folgende Beispiel zeigt, wie man eine erfassende Gruppe erstellt, die sowohl optional als auch wiederholt ist. Machen Sie dies, indem Sie einen `*`-Modifikator nach der Gruppe platzieren. Wieder behandelt die `pathname`-Komponente das `/`-Prefix als speziell.

Dieses wird sowohl optional als auch wiederholt mit der Gruppe.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass im Gegensatz zum vorhergehenden Beispiel `/product` übereinstimmt, da die wiederholenden Segmente, einschließlich `/`, optional sind. Es muss jedoch mindestens ein Zeichen zum Erfassen nach einem Schrägstrich vorhanden sein, um mit der wiederholten Gruppe übereinzustimmen.

```js
console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Verwendung eines benutzerdefinierten Prefixes oder Suffixes für einen optionalen oder wiederholten Modifikator

Das folgende Beispiel zeigt, wie geschweifte Klammern (ein [Gruppentrenner](#gruppentrenner)) mit einer benannten Gruppe verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix zu bezeichnen, auf das ein nachfolgender `?`, `*` oder `+`-Modifikator angewendet wird.

Zum Beispiel stimmt `{:subdomain.}*` mit jedem Subdomain von `example.com` und der Domain selbst überein. Der Abgleich wird der benannten Gruppe "subdomain" zugewiesen.

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });
const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

console.log(result.hostname);
// { "groups": { "subdomain": "foo.bar" }, "input": "foo.bar.example.com" }
```

### Text optional oder wiederholt machen ohne eine erfassende Gruppe

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um feste Textwerte optional oder wiederholt zu machen, ohne eine erfassende Gruppe zu verwenden.

Das Muster unten stimmt entweder mit `/product` oder `/products/` überein, aber weil [Gruppentrenner](#gruppentrenner) standardmäßig nicht erfassend sind, wird das Ergebnis nicht in einer entsprechenden Erfassungsgruppe gefunden.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });
console.log(result.pathname.groups); // {}
```

### Mehrere Komponenten und Features auf einmal verwenden

Das folgende Beispiel zeigt, wie viele Features über mehrere URL-Komponenten hinweg kombiniert werden können.

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
- Die Mustersyntax von URLPattern ähnelt der Syntax, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird
