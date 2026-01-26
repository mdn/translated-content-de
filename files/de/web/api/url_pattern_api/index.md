---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: b9ce9fc3c6dacbb7aa4ba85c9713941eceaac795
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die verwendet wird, um URL-Muster-Matcher zu erstellen.
Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden.

## Konzepte und Verwendung

Muster werden über das Interface [`URLPattern`](/de/docs/Web/API/URLPattern) angegeben.
Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) Bibliothek.
Muster können Folgendes enthalten:

- Literale Zeichenfolgen, die exakt abgeglichen werden.
- Platzhalter (`/posts/*`), die beliebige Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfassende Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach übereinstimmen lassen.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die beliebig komplexe reguläre Ausdrücke abgleichen.
  _Beachten Sie, dass die Klammern nicht Teil des regulären Ausdrucks sind, sondern deren Inhalt als regulären Ausdruck definieren._
  Einige APIs verbieten die Verwendung von regulären Ausdrucksgruppen in `URLPattern`-Objekten.
  Die Eigenschaft [`hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) gibt an, ob reguläre Ausdrucksgruppen verwendet werden oder nicht.

Details zur Syntax finden Sie im Abschnitt [pattern syntax](#mustersyntax) unten.

## Schnittstellen

- [`URLPattern`](/de/docs/Web/API/URLPattern)
  - : Repräsentiert ein Muster, das URLs oder Teile von URLs abgleichen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript-Bibliothek.
Diese Syntax ist ähnlich der in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendeten.

### Fester Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten.
Der feste Text ist eine Zeichenfolge, die exakt abgeglichen wird.
Gruppen entsprechen einer beliebigen Zeichenfolge basierend auf Abgleichsregeln.
Jeder URL-Teil hat seine eigenen Standardregeln, die unten erläutert werden, aber sie können überschrieben werden.

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

Standardmäßig wird eine Gruppe, die den `pathname`-Teil der URL abgleicht, alle Zeichen außer dem Schrägstrich (`/`) abgleichen. Im `hostname`-Teil wird die Gruppe alle Zeichen außer dem Punkt (`.`) abgleichen.
In allen anderen Teilen wird die Gruppe alle Zeichen abgleichen.
Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge abgleicht.

### Regex-Matcher

Anstelle der Standardabgleichsregeln für eine Gruppe können Sie ein Regex für jede Gruppe angeben, indem Sie es in Klammern angeben.
Dieses Regex definiert die Abgleichsregeln für die Gruppe.
Unten ist ein Beispiel für einen Regex-Matcher in einer benannten Gruppe, die die Gruppe nur abgleicht, wenn sie eine oder mehrere Ziffern enthält:

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

#### Pfadnamenabgleich

Der `pathname`-URL-Teil beginnt immer mit `/`.
Wenn Sie das `/` in Ihrem regulären Ausdruck weglassen, wird der Abgleich fehlschlagen.
Das folgende Beispiel

```js example-bad
// Doesn't match, because omits the `/`
const pattern1 = new URLPattern({ pathname: "(b.*)" });
console.log(pattern1.test("https://example.com/b")); // false
console.log(pattern1.test("https://example.com/ba")); // false
```

Die folgenden Beispiele beinhalten das `/`:

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

#### Start- und Endanker

Der Startanker (`^`) und der Endanker (`$`) werden verwendet, um Muster an den Anfang und das Ende der Testzeichenfolge zu verankern.
Obwohl diese für den Beginn und das Ende eines URL-Teils angegeben werden können, sind sie redundant.
Dies liegt daran, dass alle URL-Teile implizit von dem `^`-Anker vorangegangen und von dem `$`-Anker gefolgt werden.

Der folgende Code demonstriert, dass es egal ist, ob `^` angegeben ist oder nicht.
Das Beispiel verwendet ein Muster im `protocol`-URL-Teil, aber die anderen Teile der URL verhalten sich gleich.

```js
// with `^` in protocol
const pattern1 = new URLPattern({ protocol: "(^https?)" });
console.log(pattern1.test("https://example.com/index.html")); // true

// without `^` in protocol
const pattern2 = new URLPattern({ protocol: "(https?)" });
console.log(pattern2.test("https://example.com/index.html")); // true
```

Der folgende Code demonstriert, dass es egal ist, ob `$` angegeben ist oder nicht.

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

#### Lookahead- und Lookbehind-Aussagen

[Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Aussagen erlauben es Ihnen zu spezifizieren, dass der Text vor oder hinter der aktuellen Parseposition einem bestimmten Muster entspricht, ohne dass diese Übereinstimmung erfasst oder die Zeichen konsumiert werden.

Es gibt vier Arten von Aussagen:

- `(?=...)`: Eine positive Lookahead-Aussage gibt ein Muster an, das die folgenden Zeichen abgleichen müssen.
- `(?!...)`: Eine negative Lookahead-Aussage gibt ein Muster an, das die folgenden Zeichen nicht abgleichen dürfen.
- `(?<=...)`: Eine positive Lookbehind-Aussage gibt ein Muster an, dem die vorangegangenen Zeichen entsprechen müssen.
- `(?<!...)`: Eine negative Lookbehind-Aussage gibt ein Muster an, dem die vorangegangenen Zeichen nicht entsprechen dürfen.

Seien Sie vorsichtig bei der Verwendung von Lookahead- und Lookbehind-Aussagen mit `URLPattern`, da es einige Verhaltensweisen gibt, die Sie möglicherweise unintuitiv finden.
Zum Beispiel würden Sie erwarten, dass die folgende Lookahead-Aussage einen `pathname` von `/ab` abgleicht, aber das ist nicht der Fall.

```js example-bad
const pattern = new URLPattern({ pathname: "(/a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
```

Der `URLPattern`-Motor gleicht die Testzeichenfolge mit dem `pathname`-Muster ab und findet zuerst die Übereinstimmung für `/a` und stellt dann sicher, dass das nächste Zeichen in der Test-URL `b` ist — jedoch ohne es zu konsumieren.
Der Motor setzt das Abgleichen der Test-URL am unbenutzten Zeichen `b` fort, aber es gibt nichts mehr im Muster, mit dem es abgeglichen werden könnte, was dazu führt, dass der Abgleich fehlschlägt.

Damit der Abgleich funktioniert, muss das Muster alle Zeichen in der Testzeichenfolge konsumieren.
Um das `b`-Zeichen zu konsumieren, könnten Sie am Ende des Ausdrucks ein `b` hinzufügen, ein `.` um beliebige Zeichen abzugleichen oder `.*` um alle Zeichen nach der Lookahead-Aussage abzugleichen:

```js example-good
// positive-lookahead
const pattern1 = new URLPattern({ pathname: "(/a(?=b).*)" });
console.log(pattern1.test("https://example.com/ab")); // true
console.log(pattern1.test("https://example.com/ax")); // false
```

Das nächste Beispiel zeigt einen negativen Lookahead-Abgleich für `/a`, gefolgt von `b`.
Beachten Sie, dass die Aussage von `.*` gefolgt wird, um das von der Aussage übereinstimmende Zeichen zu konsumieren.

```js
// negative-lookahead - matches /a<not b><anything>
const pattern2 = new URLPattern({ pathname: "(/a(?!b).*)" });
console.log(pattern2.test("https://example.com/ab")); // false
console.log(pattern2.test("https://example.com/ax")); // true
```

Das folgende Beispiel zeigt einen positiven Lookbehind-Abgleich, der auf einem Pfadnamen wie `/ba` abgleicht.
Das Muster entspricht `/`, dann `.` um das nächste Zeichen zu konsumieren, gefolgt von der Aussage, dass das vorherige Zeichen ein `b` war, und dann ein `a`.

```js
// positive-lookbehind
const pattern = new URLPattern({ pathname: "(/.(?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // true
console.log(pattern.test("https://example.com/xa")); // false
```

Dieses Beispiel zeigt einen negativen Lookbehind-Abgleich, der auf einem Pfadnamen wie `/<not b>a` abgleicht.
Das Muster entspricht `/`, dann `.` um das nächste Zeichen (`x`) zu konsumieren, gefolgt von der Aussage, dass das vorherige Zeichen nicht `b` war, und dann ein `a`.

```js
// negative-lookbehind
const pattern4 = new URLPattern({ pathname: "(/.*(?<!b)a)" });
console.log(pattern4.test("https://example.com/ba")); // false
console.log(pattern4.test("https://example.com/xa")); // true
```

#### Andere Einschränkungen von Regex-Matchern

Einige andere Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern-Objekten maskiert werden, obwohl dies bei RegExp nicht der Fall ist.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden angegeben, indem der Gruppenname mit einem Doppelpunkt (`:`) vorangestellt wird.
Regex-Gruppen, die nicht durch einen Doppelpunkt und einen Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen werden im Abgleichsergebnis basierend auf ihrer Reihenfolge im Muster numerisch indiziert.

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

Gruppen können auch Modifikatoren haben.
Diese werden nach dem Gruppennamen (oder nach dem regulären Ausdruck, falls vorhanden) angegeben.
Es gibt drei Modifikatoren: `?` um die Gruppe optional zu machen, `+` um die Gruppe ein- oder mehrmals zu wiederholen, und `*` um die Gruppe null- oder mehrmals zu wiederholen.

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

### Gruppengrenzen

Muster können auch Gruppengrenzen enthalten. Diese sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind.
Diese Gruppengrenzen werden im Abgleichsergebnis nicht wie Erfassen von Gruppen erfasst, können aber trotzdem, wie Gruppen, Modifikatoren haben.
Wenn Gruppengrenzen durch keinen Modifikator modifiziert sind, werden sie so behandelt, als ob die Elemente in ihnen einfach Teil des übergeordneten Musters wären.
Gruppengrenzen dürfen keine anderen Gruppengrenzen enthalten, können jedoch alle anderen Musterelemente (erfassende Gruppen, Regex, Platzhalter oder festen Text) enthalten.

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

### Automatische Gruppenpräfixe in Pfadnamen

In Mustern, die mit dem `pathname`-Teil einer URL abgeglichen werden, wird Gruppen, die von einem Schrägstrich (`/`) vorangestellt sind, automatisch ein Schrägstrichpräfix (`/`) hinzugefügt.
Dies ist nützlich für Gruppen mit Modifikatoren, da es ermöglicht, dass wiederholte Gruppen wie erwartet funktionieren.

Wenn Sie kein automatisches Präfix wünschen, können Sie es deaktivieren, indem Sie die Gruppe mit Gruppengrenzen (`{}`) umgeben.
Gruppengrenzen haben kein automatisches Präfixverhalten.

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

Das Platzhalter-Token (`*`) ist eine Abkürzung für eine unbenannte erfassende Gruppe, die alle Zeichen null- oder mehrmals abgleicht.
Sie können dies überall im Muster platzieren.
Der Platzhalter ist gierig, was bedeutet, dass er die längstmögliche Zeichenfolge abgleichen wird.

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

### Endschrägstriche im Pfadnamen werden standardmäßig nicht abgeglichen

Endschrägstriche in einem Pfadnamen werden nicht automatisch abgeglichen.
Das folgende Beispiel zeigt, dass ein `URLPattern`-Abgleich für einen Pfadnamen von `/books` `https://example.com/books`, aber nicht `https://example.com/books/` abgleichen wird (und umgekehrt):

```js
const patternSlash = new URLPattern({ pathname: "/books/" });
console.log(patternSlash.test("https://example.com/books")); // false
console.log(patternSlash.test("https://example.com/books/")); // true

const patternNoSlash = new URLPattern({ pathname: "/books" });
console.log(patternNoSlash.test("https://example.com/books")); // true
console.log(patternNoSlash.test("https://example.com/books/")); // false
```

Wenn Sie beide abgleichen möchten, müssen Sie ein Abgleichsmuster verwenden, das beides zulässt.
Der einfachste Ansatz ist die Verwendung einer [Gruppengrenze](#gruppengrenzen), die einen Schrägstrich enthält, gefolgt von dem optionalen Modifikator.
Dies wird das Muster mit oder ohne einen abschließenden Schrägstrich abgleichen.

```js
const patternOptionalSlash = new URLPattern({ pathname: "/books{/}?" });
console.log(patternOptionalSlash.test("https://example.com/books")); // true
console.log(patternOptionalSlash.test("https://example.com/books/")); // true
```

### Musternormalisierung

Wenn ein Muster analysiert wird, wird es automatisch in eine kanonische Form normalisiert.
Zum Beispiel werden Unicode-Zeichen in der `pathname`-Eigenschaft {{Glossary("Percent-encoding", "prozentkodiert")}}, Punycode-Kodierung wird im Hostnamen verwendet, Standardportnummern werden ausgelassen, Pfade wie `/foo/./bar/` werden zu `/foo/bar` zusammengefasst usw.
Darüber hinaus gibt es einige Musterdarstellungen, die auf die gleiche zugrunde liegende Bedeutung analysiert werden, wie `foo` und `{foo}`.
Solche Fälle werden in die einfachste Form normalisiert.
In diesem Fall wird `{foo}` zum Beispiel in `foo` normalisiert.

## Vererbung von einer Basis-URL

Sowohl die in [`URLPattern`](/de/docs/Web/API/URLPattern) definierten Abgleichsmuster als auch die in [`URLPattern.test()`](/de/docs/Web/API/URLPattern/test) und [`URLPattern.exec()`](/de/docs/Web/API/URLPattern/exec) verwendeten Test-URLs erlauben es, die Eingaben mit einer optionalen Basis-URL anzugeben (diese Basis-URL ist ein separates Parameter, wenn die URL als Zeichenfolge angegeben wird, und eine separate Eigenschaft, wenn die URL als Objekt angegeben wird).

Wenn eine Basis-URL definiert ist, können URL-Teile von der Basis-URL vererbt und verwendet werden, um Teile des Musters oder der Test-URL festzulegen.
Die URL-Auflösung erfolgt ähnlich, wie Sie es erwarten würden, wenn Sie ein [`URL`](/de/docs/Web/API/URL) auflösen, das mit einer Basis-URL angegeben ist.

Der `username` und das `password` werden niemals von der Basis-URL vererbt.

Nur URL-Teile, die "spezifischer" sind als der spezifischste in der Eingabe definierte Teil, werden von der Basis-URL vererbt.
Die folgenden Listen zeigen die Spezifitätsreihenfolge:

- `protocol` (am spezifischsten), `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

Das bedeutet zum Beispiel, dass, wenn das `protocol` in der Eingabe-URL angegeben ist, nichts spezifischer ist, so dass nichts von der Basis-URL vererbt wird.
Wenn jedoch der `pathname`-Teil in der Eingabe angegeben ist, können das `protocol`, `hostname` und `port` von der Basis-URL vererbt werden, aber das `search` und `hash` nicht.

Beachten Sie, dass URL-Komponenten, die nicht in der Zeichenfolge/dem Eingabeobjekt angegeben oder von der Basis-URL vererbt wurden, standardmäßig den Platzhalterwert (`"*"`) für ein `URLPattern` und die leere Zeichenfolge (`""`) für eine Test-URL haben.

## Groß-/Kleinschreibung

Die URL Pattern API behandelt viele Teile der URL standardmäßig als Groß-/Kleinschreibung beachten, wenn sie abgeglichen werden.
Im Gegensatz dazu verwenden viele client-seitige JavaScript-Frameworks einen Groß-/Kleinschreibung ignorierenden URL-Abgleich.
Eine `ignoreCase`-Option ist im Konstruktor [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern) verfügbar, um bei Bedarf einen Groß-/Kleinschreibung ignorierenden Abgleich zu aktivieren.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Abgleichsoperationen auf Groß-/Kleinschreibung ignorieren für das gegebene Muster um:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Beispiele

### Filterung auf eine spezifische URL-Komponente

Das folgende Beispiel zeigt, wie ein `URLPattern` eine spezifische URL-Komponente filtert.
Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, dann haben alle fehlenden Komponenten standardmäßig den `*` Platzhalterwert.

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

### Konstruktion eines URLPattern aus einer vollständigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie man ein `URLPattern` aus einer vollständigen URL-Zeichenfolge mit eingebetteten Mustern konstruiert.
Zum Beispiel kann ein `:` sowohl das Suffix des URL-Protokolls wie `https:` als auch der Anfang einer benannten Musterguppe wie `:foo` sein.
Es funktioniert "einfach", wenn keine Mehrdeutigkeit darüber besteht, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

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

### Konstruktion eines URLPattern mit einer mehrdeutigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einem mehrdeutigen Zeichenfolge konstruiert wurde, dazu neigt, Zeichen als Teil der Mustersyntax zu behandeln.
In diesem Fall könnte das `:`-Zeichen das Protokollkomponenten-Suffix sein oder es könnte das Präfix für eine benannte Gruppe im Muster sein.
Der Konstruktor entscheidet, dies als Teil des Musters zu behandeln und stellt daher fest, dass dies ein relatives Pfadnamenmuster ist.
Da keine Basis-URL vorhanden ist, kann das relative Pfadnamenmuster nicht aufgelöst werden und es wird ein Fehler geworfen.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Escaping von Zeichen zur Entwirrung von URLPattern-Konstruktorzeichenfolgen

Das folgende Beispiel zeigt, wie ein mehrdeutiger Konstruktorzeichenfolgenzeichen entwirrt werden kann, um als URL-Trenner anstelle eines Musterzeichens behandelt zu werden.
Hier wird `:` als `\\:` escaped.

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

### Verwendung von Basis-URLs für test() und exec()

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

### Verwendung von Basis-URLs im URLPattern-Konstruktor

Das folgende Beispiel zeigt, wie Basis-URLs auch zur Konstruktion des `URLPattern` verwendet werden können.
Die Basis-URL wird strikt als URL behandelt und kann selbst keine Mustersyntax enthalten.

Das Muster [erbt URL-Teile von der Basis-URL](#vererbung_von_einer_basis-url), die weniger spezifisch sind als die in den anderen Eigenschaften.

In diesem Fall wird der `pathname` spezifiziert, sodass das Protokoll und der Host geerbt werden können, nicht jedoch `search`, `hash`, `username` oder `password`.
Die nicht geerbten Eigenschaften haben standardmäßig die Platzhalterzeichenfolge (`"*"`).
Die Ausnahme ist der Port, der auf die leere Zeichenfolge gesetzt wird, weil der _hostname_ von der Basis-URL geerbt wird ([die einen implizierten "Standardport"-Wert hat](/de/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port)).

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

### Zugriff auf erfasste Gruppenwerte

Das folgende Beispiel zeigt, wie Eingabewerte, die mit Musterguppen übereinstimmen, später aus dem Erfassungsergebnisobjekt von [`exec()`](/de/docs/Web/API/URLPattern/exec) abgerufen werden können.

Die `input`-Eigenschaft ist die Zeichenfolge, die mit dem Muster übereinstimmt: in diesem Fall ist es `cdn.example.com`.
Die `groups`-Eigenschaft enthält erfasste Gruppen, die je nach Reihenfolge im Muster nummerisch indiziert werden.
In diesem Fall gibt es nur eine unbenannte Gruppe für die Platzhaltereigenschaft, mit dem Wert `cdn`.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname); // {"groups": {"0": "cdn"}, "input": "cdn.example.com"}
```

### Zugriff auf erfasste benannte Gruppenwerte

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen gegeben werden können, die zum Zugriff auf den übereinstimmenden Wert im Ergebnisobjekt verwendet werden können.

Die Muster im Muster werden durch das `:`-Symbol gefolgt von einem Namen angegeben.
Die gleichen Namen erscheinen dann als Schlüssel in der `groups`-Eigenschaft, wobei die passenden Werte der übereinstimmende Teil der Test-URL sind.
Die `input`-Eigenschaft enthält den gesamten Teil der URL, der mit dem `pathname`-Muster übereinstimmt.

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

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe einen regulären Ausdruck verwenden kann, um entweder `/foo` oder `/bar` in einer Test-URL abzugleichen.
Die Gruppe ist unbenannt, daher wird sie durch eine Indexnummer im Ergebnis referenziert.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });
console.log(result.pathname.groups[0]); // 'foo'
```

### Regulärer Ausdruck mit einer benannten Gruppe

Das folgende Beispiel zeigt, wie ein benutzerdefinierter regulärer Ausdruck mit einer benannten Gruppe verwendet wird.

Die Gruppe heißt `type` und passt auf einen Pfad, der entweder `/foo` oder `/bar` ist.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Übereinstimmende Gruppen optional machen

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe optional gemacht werden kann, indem ein `?`-Modifikator nach ihr platziert wird.

Für den `pathname`-Teil führt dies auch dazu, dass jedes vorangehende `/`-Zeichen als optionales Präfix zur Gruppe behandelt wird.

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true
```

Platzhalter können ebenfalls optional gemacht werden.
Dies mag keinen Sinn ergeben, da sie bereits die leere Zeichenfolge abgleichen, aber es macht auch das Präfix `/` in einem Pfadnamenmuster optional.

```js
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### Übereinstimmende Gruppen wiederholt machen

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe wiederholt werden kann, indem ein `+`-Modifikator nach ihr platziert wird.
Im `pathname`-Teil wird damit auch das Präfix `/` als besonders behandelt, sodass es effektiv der Beginn der wiederholten Gruppe ist.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass `/product` nicht übereinstimmt, da es nicht von `/` gefolgt ist und mindestens ein Zeichen nicht vorhanden ist.

```js
console.log(pattern.test({ pathname: "/product" })); // false
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Übereinstimmende Gruppen optional und wiederholt machen

Das folgende Beispiel zeigt, wie man eine übereinstimmende Gruppe optional und wiederholt macht.
Dies erreichen Sie, indem Sie ein `*`-Modifikator nach der Gruppe platzieren.
Wiederum behandelt der Pfadnamen-Teil das Präfix `/` als besonders.

Es wird sowohl optional als auch wiederholt mit der Gruppe.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass im Gegensatz zum vorherigen Beispiel `/product` übereinstimmt, da die wiederholten Segmente, einschließlich `/`, optional sind.
Es muss jedoch mindestens ein Zeichen vorhanden sein, das nach einem Schrägstrich erfasst wird, um die wiederholte Gruppe abzugleichen.

```js
console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Verwendung eines benutzerdefinierten Präfixes oder Suffixes für einen optionalen oder wiederholten Modifikator

Das folgende Beispiel zeigt, wie geschweifte Klammern (ein [group delimiter](#gruppengrenzen)) mit einer benannten Gruppe verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix anzugeben, auf das der nachfolgende `?`, `*`, oder `+`-Modifikator angewendet werden kann.

Zum Beispiel, `{subdomain.}*` passt auf jeden Subdomain von `example.com` und die Domain selbst.
Der Abgleich wird der benannten Gruppe "subdomain" zugewiesen.

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });
const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

console.log(result.hostname);
// { "groups": { "subdomain": "foo.bar" }, "input": "foo.bar.example.com" }
```

### Text optional oder wiederholt machen, ohne eine übereinstimmende Gruppe zu verwenden

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um feste Textwerte als optional oder wiederholt ohne Verwendung einer übereinstimmenden Gruppe zu kennzeichnen.

Das untenstehende Muster gleicht entweder `/product` oder `/product/` ab, aber weil [Gruppengrenzen](#gruppengrenzen) standardmäßig nicht aufnahmefähig sind, wird das Ergebnis nicht in einer entsprechenden Übereinstimmungsgruppe gefunden.

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

- Ein Polyfill von `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar
- Die von URLPattern verwendete Mustersyntax ist ähnlich der von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendeten Syntax
