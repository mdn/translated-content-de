---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die verwendet wird, um URL-Muster-Matcher zu erstellen.
Diese Muster können mit URLs oder einzelnen URL-Komponenten abgeglichen werden.

## Konzepte und Verwendung

Muster werden mit dem [`URLPattern`](/de/docs/Web/API/URLPattern)-Interface angegeben.
Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) Bibliothek.
Muster können beinhalten:

- Wortwörtliche Zeichenfolgen, die genau übereinstimmen.
- Wildcards (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht erfassende Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrmals übereinstimmen lassen.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die beliebig komplexe Regex-Übereinstimmungen zulassen.
  _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalt als Regex definieren._
  Einige APIs verbieten die Verwendung von regulären Ausdrucksgruppen in `URLPattern`-Objekten.
  Die Eigenschaft [`hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) zeigt an, ob reguläre Ausdrucksgruppen verwendet werden oder nicht.

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) weiter unten.

## Schnittstellen

- [`URLPattern`](/de/docs/Web/API/URLPattern)
  - : Repräsentiert ein Muster, das URLs oder Teile von URLs abgleichen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript-Bibliothek.
Diese Syntax ähnelt der in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/).

### Fester Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten.
Der feste Text ist eine Zeichenfolge, die genau abgeglichen wird.
Gruppen stimmen eine beliebige Zeichenfolge anhand von Übereinstimmungsregeln ab.
Jeder URL-Teil hat seine eigenen Standardregeln, die weiter unten erklärt werden, aber sie können überschrieben werden.

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

### Segment-Wildcard

Standardmäßig stimmt eine Gruppe, die dem `pathname`-Teil der URL entspricht, auf alle Zeichen bis auf den Schrägstrich (`/`) ab. Im `hostname`-Teil stimmt die Gruppe auf alle Zeichen bis auf den Punkt (`.`) ab.
In allen anderen Teilen stimmt die Gruppe auf alle Zeichen ab.
Das Segment-Wildcard ist nicht gierig, was bedeutet, dass es die kürzestmögliche Zeichenfolge abgleicht.

### Regex-Matcher

Anstatt die Standard-Übereinstimmungsregeln für eine Gruppe zu verwenden, können Sie ein Regex für jede Gruppe spezifizieren, indem Sie es in Klammern angeben.
Dieses Regex definiert die Übereinstimmungsregeln für die Gruppe.
Unten ist ein Beispiel für einen Regex-Matcher in einer benannten Gruppe, die die Gruppe darauf beschränkt, nur übereinzustimmen, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern1 = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern1.test("https://example.com/books/123")); // true
console.log(pattern1.test("https://example.com/books/abc")); // false
console.log(pattern1.test("https://example.com/books/")); // false
```

Sie können auch Regex verwenden, wenn Sie ein `URLPattern` mit der Objekt-Syntax konstruieren.

```js
const pattern2 = new URLPattern({ pathname: "/books/:id(\\d+)" });
console.log(pattern2.test("https://example.com/books/123")); // true
console.log(pattern2.test("https://example.com/books/abc")); // false
console.log(pattern2.test("https://example.com/books/")); // false
```

#### Pfadnamen-Abgleich

Der `pathname`-URL-Teil beginnt immer mit `/`.
Wenn Sie das `/` in Ihrem regulären Ausdruck weglassen, wird die Übereinstimmung fehlschlagen.
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

Der Startanker einer Zeile (`^`) und der Endanker einer Zeile (`$`) werden verwendet, um Muster an den Start und das Ende der Testzeichenfolge zu verankern.
Während diese für den Start und das Ende eines URL-Teils spezifiziert werden können, sind sie redundant.
Dies liegt daran, dass allen URL-Teilen implizit der `^` Anker vorangestellt und der `$` Anker nachgestellt wird.

Der folgende Code zeigt, dass es unerheblich ist, ob `^` angegeben wird oder nicht.
Das Beispiel verwendet ein Muster im `protocol`-URL-Teil, aber die anderen Teile der URL verhalten sich gleich.

```js
// with `^` in protocol
const pattern1 = new URLPattern({ protocol: "(^https?)" });
console.log(pattern1.test("https://example.com/index.html")); // true

// without `^` in protocol
const pattern2 = new URLPattern({ protocol: "(https?)" });
console.log(pattern2.test("https://example.com/index.html")); // true
```

Der folgende Code zeigt, dass es keine Rolle spielt, ob `$` angegeben wird oder nicht.

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

[Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertions ermöglichen es Ihnen, anzugeben, dass der Text vor oder hinter der aktuellen Parsingposition einem bestimmten Muster entspricht, ohne dass diese Übereinstimmung erfasst oder die Zeichen verbraucht werden.

Es gibt vier Arten von Assertions:

- `(?=...)`: Eine positive Lookahead-Assertion spezifiziert ein Muster, das die folgenden Zeichen übereinstimmen müssen.
- `(?!...)`: Eine negative Lookahead-Assertion spezifiziert ein Muster, das die folgenden Zeichen nicht übereinstimmen dürfen.
- `(?<=...)`: Eine positive Lookbehind-Assertion spezifiziert ein Muster, das die vorherigen Zeichen übereinstimmen müssen.
- `(?<!...)`: Eine negative Lookbehind-Assertion spezifiziert ein Muster, das die vorherigen Zeichen nicht übereinstimmen dürfen.

Seien Sie vorsichtig bei der Verwendung von Lookahead- und Lookbehind-Assertions mit `URLPattern`, da es zu Verhaltensweisen kommen kann, die Sie als unintuitiv empfinden könnten.
Zum Beispiel würden Sie erwarten, dass die folgende Lookahead-Assertion mit einem `pathname` von `/ab` übereinstimmt, aber das ist nicht der Fall.

```js example-bad
const pattern = new URLPattern({ pathname: "(/a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
```

Die `URLPattern`-Engine stimmt die Testzeichenfolge gegen das `pathname`-Muster ab, findet zuerst die Übereinstimmung für `/a` und stellt dann fest, dass das nächste Zeichen in der Test-URL `b` ist – ohne es zu konsumieren.
Die Engine fährt fort, die Test-URL beim ungenutzten Zeichen `b` abzugleichen, aber es bleibt nichts mehr im Muster, um es dagegen abzugleichen, wodurch das Matching fehlschlägt.

Damit das Matching funktioniert, muss das Muster alle Zeichen in der Testzeichenfolge konsumieren.
Um das `b`-Zeichen zu konsumieren, könnten Sie `b` am Ende des Ausdrucks hinzufügen, einen `.` als Platzhalter für jedes Zeichen verwenden oder `.*`, um alle Zeichen nach der Lookahead-Assertion abzugleichen:

```js example-good
// positive-lookahead
const pattern1 = new URLPattern({ pathname: "(/a(?=b).*)" });
console.log(pattern1.test("https://example.com/ab")); // true
console.log(pattern1.test("https://example.com/ax")); // false
```

Das nächste Beispiel zeigt einen negativen Lookahead-Abgleich für `/a`, das nicht von `b` gefolgt wird.
Beachten Sie, dass die Assertion von `.*` gefolgt wird, um das Zeichen zu konsumieren, das von der Assertion erfasst wird.

```js
// negative-lookahead - matches /a<not b><anything>
const pattern2 = new URLPattern({ pathname: "(/a(?!b).*)" });
console.log(pattern2.test("https://example.com/ab")); // false
console.log(pattern2.test("https://example.com/ax")); // true
```

Das folgende Beispiel zeigt einen positiven Lookbehind-Abgleich, der mit einem Pfadnamen wie `/ba` übereinstimmt.
Das Muster stimmt auf `/`, dann `.` um das nächste Zeichen zu konsumieren, gefolgt von der Assertion, dass das vorherige Zeichen ein `b` war, und dann ein `a`.

```js
// positive-lookbehind
const pattern = new URLPattern({ pathname: "(/.(?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // true
console.log(pattern.test("https://example.com/xa")); // false
```

Dieses Beispiel zeigt einen negativen Lookbehind-Abgleich, der mit einem Pfadnamen wie `/<nicht b>a` übereinstimmt.
Das Muster stimmt auf `/`, dann `.` um das nächste Zeichen (`x`) zu konsumieren, gefolgt von der Assertion, dass das vorherige Zeichen nicht `b` war, und dann ein `a`.

```js
// negative-lookbehind
const pattern4 = new URLPattern({ pathname: "(/.*(?<!b)a)" });
console.log(pattern4.test("https://example.com/ba")); // false
console.log(pattern4.test("https://example.com/xa")); // true
```

#### Andere Einschränkungen bei Regex-Matchern

Einige andere Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern maskiert werden, obwohl dies bei RegExp nicht der Fall ist.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden durch Voranstellen des Gruppennamens mit einem Doppelpunkt (`:`) angegeben.
Regex-Gruppen, die nicht mit einem Doppelpunkt und einem Namen versehen sind, sind unbenannt. Unbenannte Gruppen werden basierend auf ihrer Reihenfolge im Muster numerisch im Abgleichsergebnis indiziert.

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
Diese werden nach dem Gruppennamen (oder nach dem Regex, wenn eines vorhanden ist) spezifiziert.
Es gibt drei Modifikatoren: `?`, um die Gruppe optional zu machen, `+`, um die Gruppe ein- oder mehrmals zu wiederholen, und `*`, um die Gruppe null- oder mehrmals zu wiederholen.

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

Muster können auch Gruppentrennzeichen enthalten. Diese sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind.
Diese Gruppentrennzeichen werden im Abgleichsergebnis nicht wie erfassende Gruppen erfasst, aber es können dennoch Modifikatoren darauf angewendet werden, genau wie bei Gruppen.
Wenn Gruppentrennzeichen nicht durch einen Modifikator geändert werden, werden sie so behandelt, als wären die in ihnen enthaltenen Elemente einfach Teil des übergeordneten Musters.
Gruppentrennzeichen dürfen keine anderen Gruppentrennzeichen enthalten, können jedoch andere Musterelemente (erfassende Gruppen, Regex, Wildcards oder festen Text) enthalten.

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

### Automatisches Gruppenvorzeichen bei Pfadnamen

In Mustern, die gegen den `pathname`-Teil einer URL abgeglichen werden, wird Gruppen automatisch ein Schrägstrich (`/`)-Präfix hinzugefügt, wenn die Gruppendefinition von einem Schrägstrich (`/`) gefolgt wird.
Dies ist nützlich für Gruppen mit Modifikatoren, da es ermöglicht, dass wiederholte Gruppen wie erwartet funktionieren.

Wenn Sie kein automatisches Vorzeichen wünschen, können Sie es deaktivieren, indem Sie die Gruppe mit Gruppentrennzeichen (`{}`) umgeben.
Gruppentrennzeichen haben kein automatisches Vorzeichenverhalten.

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

Das Wildcard-Token (`*`) ist eine Abkürzung für eine unbenannte erfassende Gruppe, die alle Zeichen null- oder mehrmals abgleicht.
Sie können es überall im Muster platzieren.
Das Wildcard ist gierig, was bedeutet, dass es die längstmögliche Zeichenfolge abgleicht.

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

### Nachgestellte Schrägstriche im Pfadnamen werden standardmäßig nicht abgeglichen

Nachgestellte Schrägstriche in einem Pfadnamen werden nicht automatisch abgeglichen.
Das folgende Beispiel zeigt, dass ein `URLPattern`-Abgleich für einen Pfadnamen von `/books` die `https://example.com/books` URL abgeglichen wird, aber nicht `https://example.com/books/` (und umgekehrt):

```js
const patternSlash = new URLPattern({ pathname: "/books/" });
console.log(patternSlash.test("https://example.com/books")); // false
console.log(patternSlash.test("https://example.com/books/")); // true

const patternNoSlash = new URLPattern({ pathname: "/books" });
console.log(patternNoSlash.test("https://example.com/books")); // false
console.log(patternNoSlash.test("https://example.com/books/")); // true
```

Wenn Sie beide abgleichen möchten, müssen Sie ein Abgleichsmuster verwenden, das beides zulässt.
Der einfachste Ansatz ist die Verwendung eines [Gruppentrennzeichens](#gruppentrennzeichen), das einen Schrägstrich enthält, gefolgt vom optionalen Modifikator.
Dies wird das Muster mit oder ohne nachfolgenden Schrägstrich abgleichen.

```js
const patternOptionalSlash = new URLPattern({ pathname: "/books{/}?" });
console.log(patternOptionalSlash.test("https://example.com/books")); // true
console.log(patternOptionalSlash.test("https://example.com/books/")); // true
```

### Musternormalisierung

Wenn ein Muster analysiert wird, wird es automatisch in eine kanonische Form normalisiert.
Zum Beispiel werden Unicode-Zeichen {{Glossary("Percent-encoding", "prozentkodiert")}} in der `pathname`-Eigenschaft, Punycode-Kodierung wird im `hostname` verwendet, Standardportnummern werden ausgelassen, Pfade wie `/foo/./bar/` werden zu `/foo/bar/` zusammengefasst usw.
Darüber hinaus gibt es einige Musterdarstellungen, die zur gleichen Grundbedeutung analysiert werden, wie `foo` und `{foo}`.
Solche Fälle werden in die einfachste Form normalisiert.
In diesem Fall wird `{foo}` zum Beispiel in `foo` normalisiert.

## Vererbung von einer Basis-URL

Sowohl die in [`URLPattern`](/de/docs/Web/API/URLPattern) definierten Übereinstimmungsmuster als auch die Test-URLs, die in [`URLPattern.test()`](/de/docs/Web/API/URLPattern/test) und [`URLPattern.exec()`](/de/docs/Web/API/URLPattern/exec) verwendet werden, erlauben es, die Eingaben mit einer optionalen Basis-URL anzugeben (diese Basis-URL ist ein separates Parameter, wenn die URL als Zeichenfolge angegeben wird, und eine separate Eigenschaft, wenn die URL als Objekt angegeben wird).

Wenn eine Basis-URL definiert ist, können URL-Teile von der Basis-URL geerbt werden und verwendet werden, um Teile des Musters oder der Test-URL zu setzen.
Die URL-Auflösung entspricht weitgehend den Erwartungen, wenn eine [`URL`](/de/docs/Web/API/URL), die mit einer Basis-URL angegeben wurde, aufgelöst wird.

Der `username` und `password` werden niemals von der Basis-URL geerbt.

Nur URL-Teile, die "spezifischer" sind als der spezifischste Teil, der in der Eingabe definiert ist, werden von der Basis-URL geerbt.
Die folgende Liste zeigt die Reihenfolge der Spezifität:

- `protocol` (am spezifischsten), `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

Das bedeutet, dass, wenn das `protocol` in der Eingabe-URL angegeben ist, nichts spezifischer ist, sodass nichts von der Basis-URL geerbt wird.
Wenn jedoch der `pathname`-Teil in der Eingabe angegeben wird, können das `protocol`, `hostname` und `port` von der Basis-URL geerbt werden, aber `search` und `hash` werden nicht.

Beachten Sie, dass URL-Komponenten, die nicht in der Zeichenfolge/dem Eingabeobjekt angegeben oder von der Basis-URL geerbt wurden, für ein `URLPattern` auf den Wildcard-Wert (`"*"`) und für eine Test-URL auf die leere Zeichenfolge (`""`) standardmäßig eingestellt werden.

## Groß- und Kleinschreibung

Die URL Pattern API behandelt viele Teile der URL standardmäßig als groß- und kleinschreibungssensitiv beim Abgleich.
Im Gegensatz dazu verwenden viele klientseitige JavaScript-Frameworks groß- und kleinschreibungsunabhängiges URL-Matching.
Eine `ignoreCase`-Option ist im [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)-Konstruktor verfügbar, um bei Bedarf groß-und kleinschreibungsunabhängiges Matching zu aktivieren.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Wenn im Konstruktor die `ignoreCase`-Option auf `true` gesetzt wird, werden alle Abgleichsoperationen für das gegebene Muster groß- und kleinschreibungsunabhängig.

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

Das folgende Beispiel zeigt, wie ein `URLPattern` eine spezifische URL-Komponente filtert.
Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmuster aufgerufen wird, werden alle fehlenden Komponenten standardmäßig mit dem Wert `*` versehen.

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

### Erstellen eines URLPattern aus einer vollständigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie man ein `URLPattern` aus einer vollständigen URL-Zeichenfolge mit eingebetteten Mustern erstellt.
Zum Beispiel kann ein `:` sowohl das URL-Protokollsuffix, wie `https:`, als auch der Beginn einer benannten Mustersgruppe, wie `:foo`, sein.
Es funktioniert so lange automatisch, wie es keine Zweideutigkeit darüber gibt, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

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

### Erstellen eines URLPattern mit einer mehrdeutigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einer mehrdeutigen Zeichenfolge erstellt wurde, dazu neigt, Zeichen als Teil der Mustersyntax zu behandeln.
In diesem Fall könnte das `:` Zeichen sowohl das Protokollkomponentensuffix als auch das Präfix für eine benannte Gruppe im Muster sein.
Der Konstruktor entscheidet sich, dies als Teil des Musters zu behandeln, und bestimmt daher, dass dies ein relativer Pfadnamensmuster ist.
Da es keine Basis-URL gibt, kann der relative Pfadname nicht aufgelöst werden, und es wird ein Fehler ausgelöst.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Escaping von Zeichen zur Entschärfung der URLPattern-Konstruktorzeichenfolgen

Das folgende Beispiel zeigt, wie ein mehrdeutiger Zeichen des Konstruktor-Strings maskiert werden kann, damit er als URL-Trennzeichen und nicht als Musterzeichen behandelt wird.
Hier wird `:` als `\\:` maskiert.

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

### Verwendung von Basis-URLs bei test() und exec()

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

Das folgende Beispiel zeigt, wie Basis-URLs auch verwendet werden können, um das `URLPattern` zu erstellen.
Die Basis-URL wird streng als URL behandelt und darf keine Mustersyntax selbst enthalten.

Das Muster [erbt nur URL-Teile von der Basis-URL](#vererbung_von_einer_basis-url), die weniger spezifisch sind als die in den anderen Eigenschaften.

In diesem Fall ist der `pathname` angegeben, sodass das Protokoll und der Host geerbt werden können, aber nicht `search`, `hash`, `username` oder `password`.
Eigenschaften, die nicht geerbt werden, standardmäßig auf die Wildcard-Zeichenfolge (`*`) gesetzt.
Die Ausnahme ist der Port, der auf die leere Zeichenfolge gesetzt wird, da der _hostname_ von der Basis-URL geerbt wird ([die einen implizierten "Standardport"-Wert hat](/de/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port)).

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

Das folgende Beispiel zeigt, wie Eingabewerte, die Mustern entsprechen, später aus dem [`exec()`](/de/docs/Web/API/URLPattern/exec)-Ergebnisobjekt abgerufen werden können.

Die `input`-Eigenschaft ist die Zeichenfolge, die mit dem Muster übereinstimmt: in diesem Fall ist es `cdn.example.com`.
Die `groups`-Eigenschaft enthält erfasste Gruppen, die nach Nummer für unbenannte Gruppen und nach Name für benannte Gruppen indexiert sind.
In diesem Fall gibt es nur eine unbenannte Gruppe für die Wildcard-Eigenschaft mit dem Wert `cdn`.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname); // {"groups": {"0": "cdn"}, "input": "cdn.example.com"}
```

### Zugriff auf erfasste benannte Gruppenwerte

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen erhalten können, die verwendet werden können, um den übereinstimmenden Wert im Ergebnisobjekt abzurufen.

Die Übereinstimmungsmuster im Muster sind durch das Symbol `:` gefolgt von einem Namen angegeben.
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
Die Gruppe ist unbenannt, sodass sie im Ergebnis durch eine Indexnummer referenziert wird.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });
console.log(result.pathname.groups[0]); // 'foo'
```

### Regulärer Ausdruck mit einer benannten Gruppe

Das folgende Beispiel zeigt, wie man einen benutzerdefinierten regulären Ausdruck mit einer benannten Gruppe verwendet.

Die Gruppe wird `type` genannt und stimmt auf einen Pfad, der entweder `/foo` oder `/bar` ist, ab.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Optional machen von übereinstimmenden Gruppen

Das folgende Beispiel zeigt, wie man eine übereinstimmende Gruppe durch das Platzieren eines `?` Modifikators nach ihr optional machen kann.

Für die `pathname`-Komponente bewirkt dies auch, dass ein davor stehendes `/`-Zeichen als optionales Präfix für die Gruppe behandelt wird.

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true
```

Wildcards können ebenfalls optional gemacht werden.
Dies scheint auf den ersten Blick nicht sinnvoll zu sein, da sie bereits die leere Zeichenfolge abgleichen, aber es macht auch das Präfix `/` in einem `pathname`-Muster optional.

```js
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### Wiederholbares machen von übereinstimmenden Gruppen

Das folgende Beispiel zeigt, wie eine übereinstimmende Gruppe durch Platzieren eines `+` Modifikators nach ihr wiederholbar gemacht werden kann.
In der `pathname`-Komponente wird das `/`-Präfix ebenfalls als speziell behandelt, sodass es effektiv der Start der wiederholbaren Gruppe ist.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass `/product` nicht abgeglichen wird, da es nicht von `/` und mindestens einem Zeichen gefolgт ist.

```js
console.log(pattern.test({ pathname: "/product" })); // false
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Optional und wiederholbar machen von übereinstimmenden Gruppen

Das folgende Beispiel zeigt, wie man eine übereinstimmende Gruppe erstellt, die sowohl optional als auch wiederholbar ist.
Tun Sie dies, indem Sie einen `*` Modifikator nach der Gruppe setzen.
Die `pathname`-Komponente behandelt das `/`-Präfix wieder als speziell.

Es wird sowohl optional als auch wiederholt mit der Gruppe.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass im Gegensatz zum vorherigen Beispiel `/product` übereinstimmt, da die sich wiederholenden Segmente einschließlich `/` optional sind.
Es muss jedoch mindestens ein Zeichen nach einem Schrägstrich erfasst werden, um mit der wiederholten Gruppe übereinzustimmen.

```js
console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Verwenden eines benutzerdefinierten Präfixes oder Suffixes für einen optionalen oder wiederholten Modifikator

Das folgende Beispiel zeigt, wie geschweifte Klammern (ein [Gruppentrennzeichen](#gruppentrennzeichen)) mit einer benannten Gruppe verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix zu bezeichnen, das von einem anschließenden `?`, `*` oder `+` Modifikator operationiert werden soll.

Zum Beispiel stimmt `{:subdomain.}*` gegen jede Subdomäne von `example.com` und die Domain selbst.
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

### Optional oder wiederholbar machen von Text ohne eine übereinstimmende Gruppe

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um fixe Textwerte als optional oder wiederholbar zu kennzeichnen, ohne eine geeignete Gruppe zu verwenden.

Das untenstehende Muster stimmt entweder mit `/product` oder `/products/` überein, aber da [Gruppentrennzeichen](#gruppentrennzeichen) standardmäßig nicht erfassend sind, wird das Ergebnis nicht in einer entsprechenden Übereinstimmungsgruppe gefunden.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });
console.log(result.pathname.groups); // {}
```

### Mehrere Komponenten und Funktionen auf einmal verwenden

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
- Die Mustersyntax, die von `URLPattern` verwendet wird, ähnelt der Syntax, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird
