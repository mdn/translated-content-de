---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die verwendet wird, um URL-Muster-Matcher zu erstellen. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden.

## Konzepte und Verwendung

Muster werden mit dem [`URLPattern`](/de/docs/Web/API/URLPattern) Interface angegeben. Die Mustersyntax basiert auf der Syntax der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) Bibliothek. Muster können enthalten:

- Wörtliche Zeichenketten, die genau übereinstimmen.
- Platzhalter (`/posts/*`), die jedes Zeichen matchen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht-erfassende Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach matchen können.
- {{jsxref("RegExp")}} Gruppen (`/books/(\\d+)`), die beliebig komplexe Regex-Matches ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalte als Regex definieren._ Einige APIs verbieten die Verwendung von regulären Ausdrucksgruppen in `URLPattern` Objekten. Die [`hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) Eigenschaft gibt an, ob reguläre Ausdrucksgruppen verwendet werden.

Details zur Syntax finden Sie im Abschnitt [pattern syntax](#mustersyntax) unten.

## Schnittstellen

- [`URLPattern`](/de/docs/Web/API/URLPattern)
  - : Repräsentiert ein Muster, das URLs oder Teile von URLs matchen kann. Das Muster kann erfassende Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript-Bibliothek. Diese Syntax ähnelt der, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Fester Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten. Der feste Text ist eine Zeichenfolge, die genau übereinstimmt. Gruppen matchen eine beliebige Zeichenfolge basierend auf Übereinstimmungsregeln. Jeder URL-Teil hat seine eigenen Standardregeln, die unten erklärt werden, aber sie können überschrieben werden.

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

Standardmäßig wird eine Gruppe, die den `pathname` Teil der URL matcht, alle Zeichen außer dem Schrägstrich (`/`) matchen. Im `hostname` Teil wird die Gruppe alle Zeichen mit Ausnahme des Punkts (`.`) matchen. In allen anderen Teilen wird die Gruppe alle Zeichen matchen. Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzestmögliche Zeichenfolge matchen wird.

### Regex-Matcher

Anstelle der Standard-Abgleichsregeln für eine Gruppe können Sie ein Regex für jede Gruppe angeben, indem Sie es in Klammern angeben. Dieses Regex definiert die Abgleichsregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Matcher in einer benannten Gruppe, die die Gruppe nur dann matcht, wenn sie eine oder mehrere Ziffern enthält:

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

#### `Pathname`-Abgleich

Der `pathname` URL-Teil beginnt immer mit `/`. Wenn Sie das `/` in Ihrem regulären Ausdruck weglassen, schlägt der Match fehl. Das Beispiel unten:

```js example-bad
// Doesn't match, because omits the `/`
const pattern1 = new URLPattern({ pathname: "(b.*)" });
console.log(pattern1.test("https://example.com/b")); // false
console.log(pattern1.test("https://example.com/ba")); // false
```

Die folgenden Beispiele enthalten das `/`:

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

#### Anfangs- und Endanker der Zeile

Der Anfangsanker der Zeile (`^`) und der Endanker (`$`) werden verwendet, um Muster an den Beginn bzw. das Ende der Testzeichenfolge zu verankern. Während diese für den Anfang und das Ende eines URL-Teils angegeben werden können, sind sie redundant. Dies liegt daran, dass allen URL-Teilen implizit der `^` Anker vorangestellt und der `$` Anker nachgestellt ist.

Der folgende Code zeigt, dass es keine Rolle spielt, ob `^` angegeben ist oder nicht. Das Beispiel verwendet ein Muster im `protocol` URL-Teil, aber die anderen Teile der URL verhalten sich genauso.

```js
// with `^` in protocol
const pattern1 = new URLPattern({ protocol: "(^https?)" });
console.log(pattern1.test("https://example.com/index.html")); // true

// without `^` in protocol
const pattern2 = new URLPattern({ protocol: "(https?)" });
console.log(pattern2.test("https://example.com/index.html")); // true
```

Der untenstehende Code zeigt, dass es keine Rolle spielt, ob `$` angegeben ist oder nicht.

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

#### Lookahead- und Lookbehind-Assertions

[Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertions erlauben es Ihnen, anzugeben, dass Text vor oder hinter der aktuellen Parsing-Position einem bestimmten Muster entspricht, ohne dass diese Übereinstimmung erfasst oder die Zeichen konsumiert werden.

Es gibt vier Typen von Assertions:

- `(?=...)`: Eine positive Lookahead-Assertion spezifiziert ein Muster, das die folgenden Zeichen matchen müssen.
- `(?!...)`: Eine negative Lookahead-Assertion spezifiziert ein Muster, das die folgenden Zeichen nicht matchen dürfen.
- `(?<=...)`: Eine positive Lookbehind-Assertion spezifiziert ein Muster, das die vorhergehenden Zeichen matchen müssen.
- `(?<!...)`: Eine negative Lookbehind-Assertion spezifiziert ein Muster, das die vorhergehenden Zeichen nicht matchen dürfen.

Seien Sie vorsichtig bei der Verwendung von Lookahead- und Lookbehind-Assertions mit `URLPattern`, da es zu Verhalten kommen kann, das Sie als unintuitiv empfinden könnten. Zum Beispiel würden Sie erwarten, dass die folgende Lookahead-Assertion einen `pathname` von `/ab` matcht, aber das passiert nicht.

```js example-bad
const pattern = new URLPattern({ pathname: "(/a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
```

Die `URLPattern`-Engine vergleicht die Testzeichenfolge mit dem `pathname`-Muster und findet zuerst die Übereinstimmung für `/a` und überprüft dann, dass das nächste Zeichen in der Test-URL `b` ist - ohne es zu konsumieren. Die Engine setzt das Abgleichen der Test-URL am nicht konsumierten Zeichen `b` fort, doch es gibt nichts mehr im Muster, da sie nichts mehr zu matchen findet, was den Abgleich fehl schlagen lässt.

Damit der Abgleich funktioniert, muss das Muster alle Zeichen der Testzeichenfolge konsumieren. Um das Zeichen `b` zu konsumieren, könnte man `b` am Ende des Ausdrucks hinzufügen, einen Punkt `.` benutzen, um ein beliebiges Zeichen zu matchen, oder `.*` um alle Zeichen nach der Lookahead-Assertion zu matchen:

```js example-good
// positive-lookahead
const pattern1 = new URLPattern({ pathname: "(/a(?=b).*)" });
console.log(pattern1.test("https://example.com/ab")); // true
console.log(pattern1.test("https://example.com/ax")); // false
```

Das nächste Beispiel zeigt einen negativen Lookahead-Match für `/a`, das nicht von `b` gefolgt wird. Beachten Sie, dass der Assertion `.*` folgt, um das Zeichen zu konsumieren, das von der Assertion gematched wurde.

```js
// negative-lookahead - matches /a<not b><anything>
const pattern2 = new URLPattern({ pathname: "(/a(?!b).*)" });
console.log(pattern2.test("https://example.com/ab")); // false
console.log(pattern2.test("https://example.com/ax")); // true
```

Das folgende Beispiel zeigt einen positiven Lookbehind-Match, der einen `pathname` wie `/ba` matcht. Das Muster matcht `/`, dann `.` um das nächste Zeichen zu konsumieren, gefolgt von der Assertion, dass das vorherige Zeichen ein `b` war, und dann ein `a`.

```js
// positive-lookbehind
const pattern = new URLPattern({ pathname: "(/.(?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // true
console.log(pattern.test("https://example.com/xa")); // false
```

Dieses Beispiel zeigt einen negativen Lookbehind-Match, der auf einem `pathname` wie `/<not b>a` matcht. Das Muster matcht `/`, dann `.` um das nächste Zeichen (`x`) zu konsumieren, gefolgt von der Assertion, dass das vorherige Zeichen nicht `b` war, und dann ein `a`.

```js
// negative-lookbehind
const pattern4 = new URLPattern({ pathname: "(/.*(?<!b)a)" });
console.log(pattern4.test("https://example.com/ba")); // false
console.log(pattern4.test("https://example.com/xa")); // true
```

#### Weitere Einschränkungen bei Regex-Matchern

Einige andere Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern, im Gegensatz zu RegExp, maskiert werden.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden spezifiziert, indem der Gruppenname mit einem Doppelpunkt (`:`) vorangestellt wird. Regex-Gruppen, die nicht von einem Doppelpunkt und einem Namen gefolgt werden, sind unbenannt. Unbenannte Gruppen werden im Matchergebnis numerisch basierend auf ihrer Reihenfolge im Muster indiziert.

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

Gruppen können auch Modifikatoren besitzen. Diese werden nach dem Gruppennamen (oder nach dem Regex, falls eines vorhanden ist) angegeben. Es gibt drei Modifikatoren: `?` um die Gruppe optional zu machen, `+` um die Gruppe ein- oder mehrmals zu wiederholen, und `*` um die Gruppe null- oder mehrmals zu wiederholen.

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

Muster können auch Gruppentrenner enthalten. Dies sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind. Diese Gruppentrenner werden im Matchergebnis nicht wie erfassende Gruppen erfasst, können jedoch Modifikatoren angewendet haben, genau wie Gruppen. Wenn Gruppentrenner nicht durch einen Modifikator verändert werden, werden sie behandelt, als ob die Elemente in ihnen einfach Teil des übergeordneten Musters wären. Gruppentrenner dürfen keine anderen Gruppentrenner enthalten, aber sie können alle anderen Mustergegenstände (erfassende Gruppen, Regex, Platzhalter oder fester Text) enthalten.

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

### Automatische Gruppenpräfixierung in Pfadnamen

In Mustern, die mit dem `pathname` Teil einer URL übereinstimmen, wird Gruppen ein automatisches Schrägstrich (`/`) Präfix hinzugefügt, wenn der Gruppendefinition ein Schrägstrich (`/`) vorangeht. Dies ist nützlich für Gruppen mit Modifikatoren, da es ermöglicht, dass sich wiederholende Gruppen wie erwartet funktionieren.

Wenn Sie keine automatische Präfixierung wünschen, können Sie sie deaktivieren, indem Sie die Gruppe mit Gruppentrennern (`{}`) umgeben. Gruppentrenner haben kein automatisches Präfixierungsverhalten.

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

Das Platzhalter-Token (`*`) ist eine Abkürzung für eine unbenannte erfassende Gruppe, die alle Zeichen null- oder mehrmals matcht. Sie können dies überall im Muster platzieren. Der Platzhalter ist gierig, was bedeutet, dass er die längst mögliche Zeichenfolge matchen wird.

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

### Nachlaufende Schrägstriche im `pathname` werden standardmäßig nicht gematcht

Nachlaufende Schrägstriche in einem `pathname` werden nicht automatisch gematcht. Das untenstehende Beispiel zeigt, dass ein `URLPattern`-Match für ein `pathname` von `/books` `https://example.com/books` matcht, aber nicht `https://example.com/books/` (und umgekehrt):

```js
const patternSlash = new URLPattern({ pathname: "/books/" });
console.log(patternSlash.test("https://example.com/books")); // false
console.log(patternSlash.test("https://example.com/books/")); // true

const patternNoSlash = new URLPattern({ pathname: "/books" });
console.log(patternNoSlash.test("https://example.com/books")); // false
console.log(patternNoSlash.test("https://example.com/books/")); // true
```

Wenn Sie beide matchen möchten, müssen Sie ein Matchmuster verwenden, das beides erlaubt. Der einfachste Ansatz besteht darin, einen [Gruppentrenner](#gruppentrenner) zu verwenden, der einen Schrägstrich enthält, gefolgt vom optionalen Modifikator. Dies wird das Muster mit oder ohne terminierenden Schrägstrich übereinstimmen.

```js
const patternOptionalSlash = new URLPattern({ pathname: "/books{/}?" });
console.log(patternOptionalSlash.test("https://example.com/books")); // true
console.log(patternOptionalSlash.test("https://example.com/books/")); // true
```

### Musternormalisierung

Wenn ein Muster geparst wird, wird es automatisch in eine kanonische Form normalisiert. Zum Beispiel werden Unicode-Zeichen in der `pathname` Eigenschaft {{Glossary("Percent-encoding", "prozentcodiert")}}, bei `hostname` wird Punycode-Codierung verwendet, Standardportnummern werden entfernt, Pfade wie `/foo/./bar/` werden zu `/foo/bar` zusammengefasst etc. Darüber hinaus gibt es einige Musterrepräsentationen, die zur gleichen zugrunde liegenden Bedeutung führen, wie `foo` und `{foo}`. Solche Fälle werden zur einfachsten Form normalisiert. In diesem Fall wird `{foo}` zu `foo` normalisiert.

## Vererbung von einer Basis-URL

Sowohl die in [`URLPattern`](/de/docs/Web/API/URLPattern) definierten Matchmuster als auch die Test-URLs, die in [`URLPattern.test()`](/de/docs/Web/API/URLPattern/test) und [`URLPattern.exec()`](/de/docs/Web/API/URLPattern/exec) verwendet werden, erlauben es, die Eingaben mit einer optionalen Basis-URL zu spezifizieren (diese Basis-URL ist ein separates Parameter beim Angeben der URL als String und eine separate Eigenschaft beim Angeben der URL als Objekt).

Wenn eine Basis-URL definiert ist, können URL-Teile von der Basis-URL geerbt und verwendet werden, um Teile des Musters oder der Test-URL zu setzen. URL-Auflösung erfolgt ähnlich, wie Sie es erwarten würden, wenn Sie eine [`URL`](/de/docs/Web/API/URL) auflösen, die mit einer Basis-URL spezifiziert ist.

Der `username` und das `password` werden niemals von der Basis-URL geerbt.

Es werden nur die URL-Teile geerbt, die "spezifischer" als der spezifischste Teil sind, der in der Eingabe definiert ist. Die folgenden Listen zeigen die Reihenfolge der Spezifizität:

- `protocol` (am spezifischsten), `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

Das bedeutet zum Beispiel, dass wenn das `protocol` in der Eingabe-URL angegeben ist, dann nichts spezifischer ist, sodass nichts von der Basis-URL geerbt wird. Wenn jedoch der `pathname`-Teil in der Eingabe angegeben ist, können das `protocol`, `hostname` und `port` von der Basis-URL geerbt werden, jedoch nicht `search` und `hash`.

Beachten Sie, dass URL-Komponenten, die nicht in der String-/Eingabeobjekt oder von der Basis-URL geerbt sind, für ein `URLPattern` standardmäßig den Platzhalterwert (`"*"`) und für eine Test-URL den leeren String (`""`) annehmen.

## Groß- und Kleinschreibung

Die URL Pattern API behandelt viele Teile der URL standardmäßig als Groß-/Kleinschreibung-empfindlich beim Abgleichen. Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks case-insensitive URL-Übereinstimmung. Eine `ignoreCase` Option ist im [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern) Konstruktor verfügbar, um, falls gewünscht, eine case-insensitive übereinstimmende Operation zu ermöglichen.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der Option `ignoreCase` auf `true` im Konstruktor schaltet alle Übereinstimmungsoperationen für das gegebene Muster auf case-insensitive um:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Beispiele

### Filter auf einer spezifischen URL-Komponente

Das folgende Beispiel zeigt, wie ein `URLPattern` eine spezifische URL-Komponente filtert. Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, haben alle fehlenden Komponenten standardmäßig den `*`-Platzhalterwert.

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

### Konstruktion eines `URLPattern` von einem vollständigen URL-String

Das folgende Beispiel zeigt, wie man ein `URLPattern` aus einem vollständigen URL-String mit eingebetteten Mustern erstellt. Zum Beispiel kann ein `:` sowohl der Suffix des URL-Protokolls, wie `https:`, als auch der Beginn einer benannten Mustersyn
taxis sein, wie `:foo`. Es "funktioniert einfach", wenn keine Zweideutigkeit vorhanden ist, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

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

### Konstruktion eines `URLPattern` mit einem zweideutigen URL-String

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einem zweideutigen String erstellt wird, Zeichen eher als Teil der Mustersyntax behandelt. In diesem Fall könnte das `:`-Zeichen entweder das Suffix der Protokollkomponente sein oder das Präfix einer benannten Gruppe im Muster darstellen. Der Konstruktor entscheidet, dies als Teil des Musters zu behandeln und bestimmt daher, dass es sich um ein relatives Pfadnamensmuster handelt. Da keine Basis-URL vorhanden ist, kann der relative Pfadname nicht aufgelöst werden und es tritt ein Fehler auf.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Zeichen entkommen, um `URLPattern` Konstruktor-Strings zu entzweideutigen

Das folgende Beispiel zeigt, wie ein mehrdeutiges Konstruktorzeichenzeichen entkommen werden kann, um es als URL-Trennzeichen anstelle eines Musterzeichens zu behandeln. Hier wird `:` als `\\:` entflohen.

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

### Verwendung von Basis-URLs für `test()` und `exec()`

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

### Verwendung von Basis-URLs im `URLPattern` Konstruktor

Das folgende Beispiel zeigt, wie Basis-URLs auch verwendet werden können, um das `URLPattern` zu konstruieren. Die Basis-URL wird streng als URL behandelt und kann keine Mustersyntax selbst enthalten.

Das Muster erbt nur [URL-Teile von der Basis-URL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url), die weniger spezifisch als die in den anderen Eigenschaften angegebenen sind.

In diesem Fall wird der `pathname` angegeben, sodass das Protokoll und der Host geerbt werden können, nicht jedoch die Suche, der Hash, der Benutzername oder das Passwort. Die nicht geerbten Eigenschaften nehmen den Platzhalterstring (`"*"`). Eine Ausnahme bildet der Port, der auf den leeren String gesetzt ist, weil der _hostname_ von der Basis-URL geerbt wird ([was einen "Standard-Port"-Wert impliziert](/de/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port)).

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

### Zugriff auf die Werte der übereinstimmenden Gruppen

Das folgende Beispiel zeigt, wie Eingabewerte, die Mustermaschen übereinstimmen, später aus dem Ergebnisobjekt von [`exec()`](/de/docs/Web/API/URLPattern/exec) abgerufen werden können.

Die `input`-Eigenschaft ist die Zeichenfolge, die mit dem Muster übereinstimmt: In diesem Fall ist es `cdn.example.com`. Die `groups`-Eigenschaft enthält erfasste Gruppen, die nach Nummer für unbenannte Gruppen und Namen für benannte Gruppen indiziert werden. In diesem Fall gibt es nur eine unbenannte Gruppe für die Platzhaltereigenschaft mit dem Wert `cdn`.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname); // {"groups": {"0": "cdn"}, "input": "cdn.example.com"}
```

### Zugriff auf benannte Gruppenwerte

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen gegeben werden können, die verwendet werden können, um den in dem Ergebnisobjekt übereinstimmenden Wert abzurufen.

Die Matchmuster im Muster werden durch das Symbol `:` gefolgt von einem Namen angezeigt. Dieselben Namen erscheinen dann als Schlüssel in der `groups`-Eigenschaft, wobei die übereinstimmenden Werte der übereinstimmende Teil der Test-URL sind. Die `input`-Eigenschaft enthält den gesamten Bestandteil der URL, der dem `pathname`-Muster entsprach.

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

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe einen regulären Ausdruck verwenden kann, um entweder `/foo` oder `/bar` in einer Test-URL zu matchen. Die Gruppe ist unbenannt, sodass sie im Ergebnis durch eine Indexnummer referenziert wird.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });
console.log(result.pathname.groups[0]); // 'foo'
```

### Regulärer Ausdruck mit benannter Gruppe

Das folgende Beispiel zeigt, wie ein benutzerdefinierter regulärer Ausdruck mit einer benannten Gruppe verwendet wird.

Die Gruppe heißt `type` und stimmt mit einem Pfad überein, der entweder `/foo` oder `/bar` ist.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Übereinstimmende Gruppen optional machen

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe optional gemacht werden kann, indem ein `?` Modifikator nach ihr platziert wird.

Für den `pathname`-Bestandteil macht dies auch jedes vorangestellte `/`-Zeichen als optionales Präfix für die Gruppe behandelt.

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true
```

Platzhalter können ebenfalls optional gemacht werden. Dies mag keinen Sinn ergeben, da sie bereits den leeren String matchen, aber es macht auch das Präfix `/` in einem Pfadnamenmuster optional.

```js
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### Übereinstimmende Gruppen wiederholt machen

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe wiederholt werden kann, indem nach ihr `+` Modifikatoren platziert werden. Im `pathname`-Bestandteil wird das `/`-Präfix ebenso speziell behandelt, sodass es effektiv der Start der wiederholten Gruppe ist.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass `/product` nicht matched, da es nicht von `/` und mindestens einem Zeichen gefolgt wird.

```js
console.log(pattern.test({ pathname: "/product" })); // false
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Übereinstimmende Gruppen optional und wiederholt machen

Das folgende Beispiel zeigt, wie man eine übereinstimmende Gruppe sowohl optional als auch wiederholt machen kann. Dies erreichen Sie, indem Sie nach der Gruppe einen `*` Modifikator platzieren. Wieder berücksichtigt der Pfadnamens-Bestandteil das `/`-Präfix als speziell.

Es wird sowohl optional, als auch mit der Gruppe wiederholt.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass im Gegensatz zum vorherigen Beispiel `/product` matched, weil die sich wiederholenden Segmente, einschließlich `/` optional sind. Es muss jedoch mindestens ein Zeichen nach einem Schrägstrich erfasst werden, um die sich wiederholende Gruppe zu matchen.

```js
console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Verwendung eines benutzerdefinierten Präfixes oder Suffixes für einen optionalen oder wiederholten Modifikator

Das folgende Beispiel zeigt, wie geschweifte Klammern (ein [Gruppentrenner](#gruppentrenner)) mit einer benannten Gruppe verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix zu kennzeichnen, auf das von einem nachfolgenden `?`, `*` oder `+` Modifikator zugegriffen wird.

Zum Beispiel, `{:subdomain.}*` stimmt mit jeder Subdomain von `example.com` und der Domäne selbst überein. Die Übereinstimmung wird der benannten Gruppe "subdomain" zugewiesen.

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });
const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

console.log(result.hostname);
// { "groups": { "subdomain": "foo.bar" }, "input": "foo.bar.example.com" }
```

### Text optional oder wiederholt machen ohne eine übereinstimmende Gruppe

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um feste Textwerte als optional oder wiederholt zu kennzeichnen, ohne eine übereinstimmende Gruppe zu verwenden.

Das Muster unten stimmt entweder mit `/product` oder `/products/` überein, aber da [Gruppentrenner](#gruppentrenner) standardmäßig nicht erfassend sind, wird das Ergebnis nicht in einer entsprechenden Übereinstimmungsgruppe gefunden.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });
console.log(result.pathname.groups); // {}
```

### Verwendung mehrerer Komponenten und Funktionen gleichzeitig

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

- Ein Polyfill für `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar
- Die Mustersyntax, die von URLPattern verwendet wird, ist ähnlich zu der Syntax, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird.
