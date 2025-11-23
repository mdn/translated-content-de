---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: db9696f0f6e4a9ed4fd353d03ed104fc02077dfe
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

Die **URL-Muster-API** definiert eine Syntax, die zum Erstellen von URL-Mustermatchern verwendet wird.
Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden.

## Konzepte und Verwendung

Muster werden mit der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle angegeben.
Die Mustersyntax basiert auf der Syntax aus der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek.
Muster können folgende Elemente enthalten:

- Wörtliche Zeichenfolgen, die exakt übereinstimmen.
- Platzhalter (`/posts/*`), die jedes Zeichen matchen.
- Benannte Gruppen (`/books/:id`), die einen Teil der gematchten URL extrahieren.
- Nicht erfasste Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach übereinstimmen lassen.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die beliebig komplexe Regex-Übereinstimmungen ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern deren Inhalt als Regex definieren._ Manche APIs verbieten die Verwendung von regulären Ausdrucksgruppen in `URLPattern`-Objekten. Die Eigenschaft [`hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups) gibt an, ob reguläre Ausdrucksgruppen verwendet werden.

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) weiter unten.

## Schnittstellen

- [`URLPattern`](/de/docs/Web/API/URLPattern)
  - : Repräsentiert ein Muster, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der gematchten URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript-Bibliothek.
Diese Syntax ähnelt derjenigen, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Fester Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten.
Der feste Text ist eine Zeichenfolge, die genau übereinstimmt.
Gruppen matchen eine willkürliche Zeichenfolge basierend auf Übereinstimmungsregeln.
Jeder URL-Teil hat seine eigenen Standardregeln, die unten erklärt werden, sie können jedoch überschrieben werden.

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

Standardmäßig wird eine Gruppe, die den `pathname`-Teil der URL matcht, alle Zeichen außer den Schrägstrich (`/`) matchen. Im `hostname`-Teil wird die Gruppe alle Zeichen außer dem Punkt (`.`) matchen.
In allen anderen Teilen wird die Gruppe alle Zeichen matchen.
Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzest mögliche Zeichenfolge matchen wird.

### Regex-Matcher

Anstelle der Standardübereinstimmungsregeln für eine Gruppe können Sie einen Regex für jede Gruppe angeben, indem Sie ihn in Klammern angeben.
Dieses Regex definiert die Übereinstimmungsregeln für die Gruppe.
Unten steht ein Beispiel für einen Regex-Matcher in einer benannten Gruppe, die die Gruppe nur dann einschränkt, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern1 = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern1.test("https://example.com/books/123")); // true
console.log(pattern1.test("https://example.com/books/abc")); // false
console.log(pattern1.test("https://example.com/books/")); // false
```

Sie können auch Regex verwenden, wenn Sie ein `URLPattern` mit der Objektsyntax erstellen.

```js
const pattern2 = new URLPattern({ pathname: "/books/:id(\\d+)" });
console.log(pattern2.test("https://example.com/books/123")); // true
console.log(pattern2.test("https://example.com/books/abc")); // false
console.log(pattern2.test("https://example.com/books/")); // false
```

#### Pfadname-Übereinstimmung

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

#### Anfangs- und Endzeichenanker

Der Anfangszeichenanker (`^`) und der Endzeichenanker (`$`) werden verwendet, um Muster an den Anfang bzw. das Ende der Testzeichenfolge zu verankern.
Obwohl diese am Anfang und Ende eines URL-Teils angegeben werden können, sind sie redundant.
Dies liegt daran, dass alle URL-Teile implizit von dem `^` Anker vorangestellt und von dem `$` Anker gefolgt werden.

Der folgende Code zeigt, dass es keinen Unterschied macht, ob `^` angegeben wird oder nicht.
Das Beispiel verwendet ein Muster im `protocol`-URL-Teil, aber die anderen Teile der URL verhalten sich genauso.

```js
// with `^` in protocol
const pattern1 = new URLPattern({ protocol: "(^https?)" });
console.log(pattern1.test("https://example.com/index.html")); // true

// without `^` in protocol
const pattern2 = new URLPattern({ protocol: "(https?)" });
console.log(pattern2.test("https://example.com/index.html")); // true
```

Der untenstehende Code zeigt, dass es keinen Unterschied macht, ob `$` angegeben ist oder nicht.

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

[Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)- und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)-Assertions erlauben es Ihnen, anzugeben, dass Text vor oder hinter der aktuellen Parsing-Position einem bestimmten Muster entspricht, ohne dass dieses Match erfasst oder die Zeichen konsumiert werden.

Es gibt vier Arten von Assertions:

- `(?=...)`: Eine positive Lookahead-Assertion gibt ein Muster an, dem die folgenden Zeichen entsprechen müssen.
- `(?!...)`: Eine negative Lookahead-Assertion gibt ein Muster an, dem die folgenden Zeichen nicht entsprechen dürfen.
- `(?<=...)`: Eine positive Lookbehind-Assertion gibt ein Muster an, dem die vorhergehenden Zeichen entsprechen müssen.
- `(?<!...)`: Eine negative Lookbehind-Assertion gibt ein Muster an, dem die vorhergehenden Zeichen nicht entsprechen dürfen.

Seien Sie vorsichtig, wenn Sie Lookahead- und Lookbehind-Assertions mit `URLPattern` verwenden, da einige Verhaltensweisen möglicherweise nicht intuitiv erscheinen.
Zum Beispiel würden Sie erwarten, dass die folgende Lookahead-Assertion einem `pathname` von `/ab` entspricht, aber das passiert nicht.

```js example-bad
const pattern = new URLPattern({ pathname: "(/a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
```

Die `URLPattern`-Engine vergleicht die Testzeichenfolge mit dem `pathname`-Muster und findet zuerst das Match für `/a` und stellt dann fest, dass das nächste Zeichen in der Test-URL ein `b` ist — verbraucht es jedoch nicht.
Die Engine setzt den Vergleich der Test-URL mit dem ungenutzen Zeichen `b` fort, aber es bleibt nichts mehr im Muster übrig, mit dem es verglichen werden kann, was dazu führt, dass der Match fehlschlägt.

Damit das Match funktioniert, muss das Muster alle Zeichen in der Testzeichenfolge konsumieren.
Um das `b`-Zeichen zu konsumieren, könnten Sie ein `b`, einen `.` um jedes Zeichen zu matchen oder `.*` hinzufügen, um alle Zeichen nach der Lookahead-Assertion zu matchen:

```js example-good
// positive-lookahead
const pattern1 = new URLPattern({ pathname: "(/a(?=b).*)" });
console.log(pattern1.test("https://example.com/ab")); // true
console.log(pattern1.test("https://example.com/ax")); // false
```

Das nächste Beispiel zeigt einen negativen Lookahead-Match für `/a`, das nicht von `b` gefolgt wird.
Beachten Sie, dass der Assertion ein `.*` folgt, um das Zeichen, das durch die Assertion gematcht wird, zu konsumieren.

```js
// negative-lookahead - matches /a<not b><anything>
const pattern2 = new URLPattern({ pathname: "(/a(?!b).*)" });
console.log(pattern2.test("https://example.com/ab")); // false
console.log(pattern2.test("https://example.com/ax")); // true
```

Das folgende Beispiel zeigt einen positiven Lookbehind-Match, der bei einem Pfadnamen wie `/ba` matcht.
Das Muster matcht `/`, dann `.` zum Konsumieren des nächsten Zeichens, gefolgt von der Assertion, dass das vorhergehende Zeichen ein `b` war, und dann ein `a`.

```js
// positive-lookbehind
const pattern = new URLPattern({ pathname: "(/.(?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // true
console.log(pattern.test("https://example.com/xa")); // false
```

Dieses Beispiel zeigt einen negativen Lookbehind-Match, der bei einem Pfadnamen wie `/<not b>a` matcht.
Das Muster matcht `/`, dann `.` zum Konsumieren des nächsten Zeichens (`x`), gefolgt von der Assertion, dass das vorhergehende Zeichen kein `b` war, und dann ein `a`.

```js
// negative-lookbehind
const pattern4 = new URLPattern({ pathname: "(/.*(?<!b)a)" });
console.log(pattern4.test("https://example.com/ba")); // false
console.log(pattern4.test("https://example.com/xa")); // true
```

#### Andere Einschränkungen bei Regex-Matchern

Einige andere Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern escaped werden, obwohl sie es in RegExp nicht müssen.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unbenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden durch Hinzufügen eines Doppelpunkts (`:`) vor dem Gruppennamen angegeben.
Regex-Gruppen, die nicht durch einen Doppelpunkt und einen Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen werden basierend auf ihrer Reihenfolge im Muster nummerisch im Übereinstimmungsergebnis indiziert.

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
Diese werden nach dem Gruppennamen (oder nach dem Regex, falls vorhanden) angegeben.
Es gibt drei Modifikatoren: `?` um die Gruppe optional zu machen, `+` um die Gruppe einmal oder mehrmals zu wiederholen, und `*` um die Gruppe null- oder mehrmals zu wiederholen.

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
Diese Gruppentrennzeichen werden im Übereinstimmungsergebnis nicht wie erfassende Gruppen erfasst, aber sie können wie Gruppen auch mit Modifikatoren versehen werden.
Wenn Gruppentrennzeichen nicht durch einen Modifikator modifiziert werden, werden sie behandelt, als ob die Elemente in ihnen nur Teil des übergeordneten Musters wären.
Gruppentrennzeichen dürfen keine anderen Gruppentrennzeichen enthalten, können jedoch alle anderen Musterelemente (erfassende Gruppen, Regex, Platzhalter oder fester Text) enthalten.

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

### Automatisches Gruppenvorzeichen in Pfadnamen

In Mustern, die gegen den `pathname`-Teil einer URL verglichen werden, erhalten Gruppen automatisch ein Schrägstrich (`/`) als Vorzeichen hinzugefügt, wenn der Gruppendefinition ein Schrägstrich (`/`) vorangestellt ist.
Dies ist nützlich für Gruppen mit Modifikatoren, da es sich ermöglicht, dass sich wiederholende Gruppen erwartungsgemäß verhalten.

Wenn Sie keine automatische Vorzeichenvergabe möchten, können Sie sie deaktivieren, indem Sie die Gruppe mit Gruppentrennzeichen (`{}`) umgeben.
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

### Platzhalter für Zeichen

Der Platzhalter für Zeichen (`*`) ist eine Kurzform für eine unbenannte erfasste Gruppe, die alle Zeichen null- oder mehrmals matcht.
Sie können diesen Platzhalter überall im Muster platzieren.
Der Platzhalter ist gierig, was bedeutet, dass er die längste mögliche Zeichenfolge matchen wird.

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

### Nachlaufende Schrägstriche im Pfadnamen werden standardmäßig nicht gematcht

Nachlaufende Schrägstriche in einem Pfadnamen werden nicht automatisch gematcht.
Das folgende Beispiel zeigt, dass ein `URLPattern`-Match für einen Pfadnamen von `/books` `https://example.com/books` aber nicht `https://example.com/books/` (und umgekehrt) matchen wird:

```js
const patternSlash = new URLPattern({ pathname: "/books/" });
console.log(patternSlash.test("https://example.com/books")); // false
console.log(patternSlash.test("https://example.com/books/")); // true

const patternNoSlash = new URLPattern({ pathname: "/books" });
console.log(patternNoSlash.test("https://example.com/books")); // true
console.log(patternNoSlash.test("https://example.com/books/")); // false
```

Wenn Sie beides matchen möchten, müssen Sie ein Matchmuster verwenden, das beides zulässt.
Der einfachste Ansatz ist die Verwendung eines [Gruppentrenners](#gruppentrennzeichen), der einen Schrägstrich enthält, gefolgt von dem optionalen Modifikator.
Dies wird das Muster mit oder ohne abschließenden Schrägstrich matchen.

```js
const patternOptionalSlash = new URLPattern({ pathname: "/books{/}?" });
console.log(patternOptionalSlash.test("https://example.com/books")); // true
console.log(patternOptionalSlash.test("https://example.com/books/")); // true
```

### Muster-Normalisierung

Wenn ein Muster analysiert wird, wird es automatisch auf eine kanonische Form normalisiert.
Zum Beispiel werden Unicode-Zeichen in der Pfadnamenseigenschaft {{Glossary("Percent-encoding", "prozentcodiert")}} und Punycode-Codierung im Hostnamen verwendet, Standardportnummern werden ausgelassen, Pfade wie `/foo/./bar/` werden auf `/foo/bar` reduziert usw.
Zusätzlich gibt es einige Musterdarstellungen, die sich auf die gleiche zugrunde liegende Bedeutung analysieren, wie `foo` und `{foo}`.
Solche Fälle werden auf die einfachste Form normalisiert.
In diesem Fall wird `{foo}` zum Beispiel zu `foo` normalisiert.

## Vererbung von einer Basis-URL

Sowohl die in [`URLPattern`](/de/docs/Web/API/URLPattern) definierten Matchmuster als auch die in [`URLPattern.test()`](/de/docs/Web/API/URLPattern/test) und [`URLPattern.exec()`](/de/docs/Web/API/URLPattern/exec) verwendeten Test-URLs erlauben die Angabe der Eingaben mit einer optionalen Basis-URL (diese Basis-URL ist ein separater Parameter, wenn die URL als Zeichenfolge angegeben wird, und eine separate Eigenschaft, wenn die URL als Objekt angegeben wird).

Wenn eine Basis-URL definiert ist, können URL-Teile von der Basis-URL geerbt und verwendet werden, um Teile des Musters oder der Test-URL festzulegen.
Die URL-Auflösung funktioniert weitgehend so, wie Sie es erwarten würden, wenn Sie eine [`URL`](/de/docs/Web/API/URL), die mit einer Basis-URL angegeben wurde, auflösen.

Der `username` und das `password` werden nie von der Basis-URL geerbt.

Es werden nur die URL-Teile geerbt, die spezifischer sind als der spezifischste Teil, der in der Eingabe definiert ist.
Die folgenden Listen zeigen die Spezifitätsreihenfolge:

- `protocol` (am spezifischsten), `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

Das bedeutet beispielsweise, dass, wenn das `protocol` in der Eingabe-URL angegeben ist, nichts spezifischer ist und daher nichts von der Basis-URL geerbt wird.
Wenn jedoch der `pathname`-Teil in der Eingabe angegeben ist, können das `protocol`, der `hostname` und der `port` von der Basis-URL geerbt werden, aber das `search` und das `hash` nicht.

Beachten Sie, dass URL-Komponenten, die nicht in der Zeichenfolge/dem Eingabeobjekt angegeben oder von der Basis-URL geerbt werden, auf den Platzhalterwert (`"*"`) für ein `URLPattern` und auf die leere Zeichenfolge (`""`) für eine Test-URL standardmäßig eingestellt werden.

## Groß-/Kleinschreibungsempfindlichkeit

Die URL Pattern API behandelt viele Teile der URL standardmäßig als groß-/kleinschreibungsempfindlich bei der Übereinstimmung.
Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks groß-/kleinschreibungsunempfindliche URL-Übereinstimmungen.
Eine `ignoreCase`-Option ist im [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)-Konstruktor verfügbar, um bei Bedarf eine groß-/kleinschreibungsunempfindliche Übereinstimmung zu ermöglichen.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Übereinstimmungsoperationen für das gegebene Muster auf groß-/kleinschreibungsunempfindlich um:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Beispiele

### Auf eine spezifische URL-Komponente filtern

Das folgende Beispiel zeigt, wie ein `URLPattern` eine spezifische URL-Komponente filtert.
Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, werden alle fehlenden Komponenten standardmäßig auf den `*`-Platzhalterwert gesetzt.

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

### URLPattern aus einer vollständigen URL-Zeichenfolge konstruieren

Das folgende Beispiel zeigt, wie ein `URLPattern` aus einer vollständigen URL-Zeichenfolge mit eingebetteten Mustern konstruiert wird.
Beispielsweise kann ein `:` sowohl das URL-Protokollsuffix sein, wie `https:`, als auch der Beginn einer benannten Mustervariable, wie `:foo`.
Es funktioniert "einfach", wenn es keine Mehrdeutigkeit zwischen einem Zeichen gibt, das Teil der URL-Syntax oder der Mustersyntax ist.

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

### Konstruieren eines URLPattern mit einer mehrdeutigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einer mehrdeutigen Zeichenfolge konstruiert wird, Zeichen als Teil der Mustersyntax bevorzugt behandelt.
In diesem Fall könnte das Zeichen `:` das Suffix der Protokollkomponente oder das Präfix einer benannten Gruppe im Muster sein.
Der Konstruktor entscheidet sich dafür, dies als Teil des Musters zu behandeln, und bestimmt daher, dass dies ein relatives Pfadnamenmuster ist.
Da es keine Basis-URL gibt, kann der relative Pfadname nicht aufgelöst werden und es wird ein Fehler ausgegeben.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Zeichen zum Disambiguieren von URLPattern-Konstruktorzeichenfolgen escapeen

Das folgende Beispiel zeigt, wie ein mehrdeutiges Konstruktorzeichen als URL-Trennzeichen behandelt werden kann, indem es als Musterzeichen geopfert wird.
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

### Basis-URLs für test() und exec() verwenden

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

### Basis-URLs im URLPattern-Konstruktor verwenden

Das folgende Beispiel zeigt, wie Basis-URLs auch zur Konstruktion des `URLPattern` verwendet werden können.
Die Basis-URL wird streng als URL behandelt und kann keine Mustersyntax selbst enthalten.

Das Muster [erbt nur URL-Teile von der Basis-URL](#vererbung_von_einer_basis-url), die weniger spezifisch sind als die anderen Eigenschaften.

In diesem Fall ist der `pathname` angegeben, sodass das Protokoll und der Host geerbt werden können, jedoch nicht die Suche, der Hash, der Benutzername oder das Passwort.
Die Eigenschaften, die nicht geerbt werden, standardmäßig auf die Platzhalter-Zeichenfolge (`"*"`).
Die Ausnahme ist der Port, der auf die leere Zeichenfolge gesetzt wird, da der _Hostname_ von der Basis-URL geerbt wird ([was einen implizierten "Standardport"-Wert hat](/de/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port)).

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

### Zugriff auf gematchte Gruppenwerte

Das folgende Beispiel zeigt, wie Eingabewerte, die Mustervariablen matchen, später aus dem [`exec()`](/de/docs/Web/API/URLPattern/exec)-Ergebnisobjekt abgerufen werden können.

Die `input`-Eigenschaft ist die Zeichenfolge, die durch das Muster gematcht wird: in diesem Fall ist es `cdn.example.com`.
Die `groups`-Eigenschaft enthält erfasste Gruppen, nummerisch für unbenannte Gruppen indiziert, und mit Namen für benannte Gruppen.
In diesem Fall gibt es nur eine unbenannte Gruppe für die Platzhaltereigenschaft, mit dem Wert `cdn`.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname); // {"groups": {"0": "cdn"}, "input": "cdn.example.com"}
```

### Zugriff auf gematchte benannte Gruppenwerte

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen gegeben werden können, die verwendet werden können, um den gematchten Wert im Ergebnisobjekt zu erhalten.

Die Match-Muster im Muster werden durch das `:`-Symbol gefolgt von einem Namen angezeigt.
Die gleichen Namen erscheinen dann als Schlüssel in der `groups`-Eigenschaft, wobei die übereinstimmenden Werte der gematchte Teil der Test-URL sind.
Die `input`-Eigenschaft enthält den gesamten Teil der URL, der dem `pathname`-Muster entspricht.

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

Das folgende Beispiel zeigt, wie eine Matching-Gruppe einen regulären Ausdruck verwenden kann, um entweder `/foo` oder `/bar` in einer Test-URL zu matchen.
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

Die Gruppe ist `type` benannt und matcht einen Pfad, der entweder `/foo` oder `/bar` ist.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Matching-Gruppen optional machen

Das folgende Beispiel zeigt, wie man eine Matching-Gruppe optional macht, indem man einen `?`-Modifikator hinten anhängt.

Für die `pathname`-Komponente bewirkt dies auch, dass jedes vorangehende `/`-Zeichen als optionales Präfix der Gruppe behandelt wird.

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true
```

Platzhalter können ebenfalls optional gemacht werden.
Dies mag zwar keinen Sinn ergeben, da sie bereits die leere Zeichenfolge matchen, aber es macht auch das Präfix `/` in einem Pfadnamensmuster optional.

```js
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### Matching-Gruppen wiederholbar machen

Das folgende Beispiel zeigt, wie eine Matching-Gruppe wiederholbar gemacht werden kann, indem ein `+`-Modifikator hinten angehängt wird.
In der `pathname`-Komponente wird das `/`-Präfix ebenfalls als speziell behandelt, sodass es effektiv der Start der sich wiederholenden Gruppe ist.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachtes, dass `/product` nicht matcht, da es nicht von `/` gefolgt wird und mindestens ein Zeichen.

```js
console.log(pattern.test({ pathname: "/product" })); // false
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Matching-Gruppen optional und wiederholbar machen

Das folgende Beispiel zeigt, wie man eine Matching-Gruppe, die sowohl optional als auch wiederholbar ist, erstellen kann.
Dies geschieht, indem ein `*`-Modifikator hinter die Gruppe platziert wird.
Wiederum wird das `/`-Präfix in der Pfadnamenskomponente als speziell behandelt.

Es wird sowohl optional als auch wiederholt mit der Gruppe.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Beachten Sie, dass im Gegensatz zum vorherigen Beispiel `/product` matches, da sich die wiederholten Segmente, einschließlich `/`, optional sind.
Es muss jedoch mindestens ein Zeichen zum Aufnehmen nach einem Schrägstrich vorhanden sein, um die wiederholte Gruppe zu matchen.

```js
console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Einen benutzerdefinierten Präfix oder Suffix für einen optionalen oder wiederholten Modifikator verwenden

Das folgende Beispiel zeigt, wie geschweifte Klammern (ein [Gruppentrenner](#gruppentrennzeichen)) mit einer benannten Gruppe verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix anzugeben, auf das ein nachfolgender `?`, `*` oder `+`-Modifikator angewendet wird.

Zum Beispiel matcht `{:subdomain.}*` gegen jede Subdomäne von `example.com` und die Domain selbst.
Der Match wird der benannten Gruppe "subdomain" zugeordnet.

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });
const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

console.log(result.hostname);
// { "groups": { "subdomain": "foo.bar" }, "input": "foo.bar.example.com" }
```

### Text optional oder wiederholbar machen, ohne eine Matching-Gruppe

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um feste Textwerte als optional oder wiederholbar zu kennzeichnen, ohne eine Matching-Gruppe zu verwenden.

Das folgende Muster matcht entweder `/product` oder `/products/`, aber da [Gruppentrenner](#gruppentrennzeichen) standardmäßig nicht erfassend sind, wird das Ergebnis nicht in einer entsprechenden Match-Gruppe gefunden.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });
console.log(result.pathname.groups); // {}
```

### Mehrere Komponenten und Funktionen zugleich verwenden

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

- Ein Polyfill von `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar
- Die von URLPattern verwendete Mustersyntax ist ähnlich der Syntax, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird
