---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: 13769513728de4c94e7dcc9ab4c86f9b7b40cc88
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Musterabgleichern verwendet wird.
Diese Muster können mit URLs oder einzelnen URL-Komponenten abgeglichen werden.

## Konzepte und Nutzung

Muster werden mit der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle angegeben.
Die Mustersyntax basiert auf der Syntax der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek.
Muster können enthalten:

- Wörtliche Zeichenfolgen, die genau übereinstimmen.
- Platzhalter (`/posts/*`), die jedes Zeichen abgleichen.
- Benannte Gruppen (`/books/:id`), die einen Teil der passenden URL extrahieren.
- Nicht erfassende Gruppen (`/books{/old}?`), die Teile eines Musters optional machen oder mehrfach übereinstimmen lassen.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die beliebig komplexe reguläre Ausdrücke erzeugen.
  _Beachten Sie, dass die Klammern nicht Teil des regulären Ausdrucks sind, sondern deren Inhalt als regulärer Ausdruck definieren._
  Einige APIs verbieten die Verwendung von regulären Ausdrucksgruppen in `URLPattern`-Objekten.
  Die [`hasRegExpGroups`](/de/docs/Web/API/URLPattern/hasRegExpGroups)-Eigenschaft zeigt an, ob reguläre Ausdrucksgruppen verwendet werden oder nicht.

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) weiter unten.

## Schnittstellen

- [`URLPattern`](/de/docs/Web/API/URLPattern)
  - : Repräsentiert ein Muster, das mit URLs oder Teilen von URLs abgeglichen werden kann. Das Muster kann erfassende Gruppen enthalten, die Teile der passenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript-Bibliothek.
Diese Syntax ist ähnlich wie die, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Fester Text und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten.
Der feste Text ist eine Zeichenfolge, die genau übereinstimmt.
Gruppen stimmen mit einer beliebigen Zeichenfolge basierend auf den Abgleichsregeln überein.
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

Standardmäßig wird eine Gruppe, die den `pathname`-Teil der URL abgleicht, alle Zeichen außer dem Schrägstrich (`/`) abgleichen. Im `hostname`-Teil wird die Gruppe alle Zeichen außer dem Punkt (`.`) abgleichen.
In allen anderen Teilen wird die Gruppe alle Zeichen abgleichen.
Der Segment-Platzhalter ist nicht gierig, was bedeutet, dass er die kürzeste mögliche Zeichenfolge abgleicht.

### Regex-Abgleicher

Anstatt die Standardabgleichsregeln für eine Gruppe zu verwenden, können Sie ein Regex für jede Gruppe angeben, indem Sie es in Klammern setzen.
Dieses Regex definiert die Abgleichsregeln für die Gruppe.
Unten ist ein Beispiel für einen Regex-Abgleicher auf einer benannten Gruppe, die die Gruppe nur abgleicht, wenn sie eine oder mehrere Ziffern enthält:

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

#### Pathname-Abgleich

Der `pathname`-URL-Teil beginnt immer mit `/`.
Wenn Sie das `/` in Ihrem regulären Ausdruck weglassen, schlägt der Abgleich fehl.
Das unten stehende Beispiel

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

#### Start- und Endanker von Zeilen

Der Startanker (`^`) und der Endanker (`$`) werden verwendet, um Muster am Anfang bzw. Ende der Prüfzeichenkette zu verankern.
Während diese für den Beginn und das Ende eines URL-Teils angegeben werden können, sind sie redundant.
Dies liegt daran, dass alle URL-Teile implizit von dem Anker `^` am Anfang und von dem Anker `$` am Ende gefolgt werden.

Der folgende Code zeigt, dass es egal ist, ob das `^` angegeben wird oder nicht.
Das Beispiel verwendet ein Muster im `protocol`-URL-Teil, aber die anderen Teile der URL verhalten sich gleich.

```js
// with `^` in protocol
const pattern1 = new URLPattern({ protocol: "(^https?)" });
console.log(pattern1.test("https://example.com/index.html")); // true

// without `^` in protocol
const pattern2 = new URLPattern({ protocol: "(https?)" });
console.log(pattern2.test("https://example.com/index.html")); // true
```

Der unten stehende Code zeigt, dass es egal ist, ob das `$` angegeben wird oder nicht.

```js
// with `$` in pathname
const pattern1 = new URLPattern({ pathname: "(/path$)" });
console.log(pattern1.test("https://example.com/path")); // true

// without `$` in pathname
const pattern2 = new URLPattern({ pathname: "(/path)" });
console.log(pattern2.test("https://example.com/path")); // true

// with `$` in hash
const pattern3 = new URLPattern({ hash: "(hash$)" });
console.log(pattern3.test("https://example.com/#hash")); // true

// without `$` in hash
const pattern4 = new URLPattern({ hash: "(hash)" });
console.log(pattern4.test("https://example.com/#hash")); // true
```

#### Lookahead- und Lookbehind-Bedingungen

[Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Bedingungen erlauben Ihnen, anzugeben, dass Text vor oder hinter der aktuellen Parseposition einem bestimmten Muster entspricht, ohne dass dieses Match erfasst oder die Zeichen konsumiert werden.

Es gibt vier Arten von Bedingungen:

- `(?=...)`: Eine positive Lookahead-Bedingung gibt ein Muster an, dem die folgenden Zeichen entsprechen müssen.
- `(?!...)`: Eine negative Lookahead-Bedingung gibt ein Muster an, dem die folgenden Zeichen nicht entsprechen dürfen.
- `(?<=...)`: Eine positive Lookbehind-Bedingung gibt ein Muster an, dem die vorhergehenden Zeichen entsprechen müssen.
- `(?<!...)`: Eine negative Lookbehind-Bedingung gibt ein Muster an, dem die vorhergehenden Zeichen nicht entsprechen dürfen.

Seien Sie vorsichtig bei der Verwendung von Lookahead- und Lookbehind-Bedingungen mit `URLPattern`, da es Verhalten gibt, das Sie als unintuitiv empfinden könnten.
Beispielsweise würden Sie erwarten, dass die folgende Lookahead-Bedingung einen `pathname` von `/ab` abgleicht, dies geschieht jedoch nicht.

```js example-bad
const pattern = new URLPattern({ pathname: "(/a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
```

Die `URLPattern`-Engine gleicht die Prüfzeichenkette gegen das `pathname`-Muster ab, findet zuerst das Match für `/a` und stellt dann fest, dass das nächste Zeichen in der Test-URL `b` ist — dieses jedoch nicht konsumiert.
Die Engine setzt den Abgleich der Test-URL am nicht konsumierten Zeichen `b` fort, aber es bleibt nichts im Muster, um es abzugleichen, was dazu führt, dass das Match fehlschlägt.

Damit der Abgleich funktioniert, muss das Muster alle Zeichen in der Testzeichenkette konsumieren.
Um das `b`-Zeichen zu konsumieren, könnten Sie `b` am Ende des Ausdrucks hinzufügen, einen `.` verwenden, um ein beliebiges Zeichen abzugleichen, oder `.*`, um alle Zeichen nach der Lookahead-Bedingung abzugleichen:

```js example-good
// positive-lookahead
const pattern1 = new URLPattern({ pathname: "(/a(?=b).*)" });
console.log(pattern1.test("https://example.com/ab")); // true
console.log(pattern1.test("https://example.com/ax")); // false
```

Das nächste Beispiel zeigt ein negatives Lookahead-Match für `/a`, dem kein `b` folgt.
Beachten Sie, dass die Bedingung von `.*` gefolgt wird, um das von der Bedingung erfasste Zeichen zu konsumieren.

```js
// negative-lookahead - matches /a<not b><anything>
const pattern2 = new URLPattern({ pathname: "(/a(?!b).*)" });
console.log(pattern2.test("https://example.com/ab")); // false
console.log(pattern2.test("https://example.com/ax")); // true
```

Das folgende Beispiel zeigt ein positives Lookbehind-Match, das bei einem Pfadnamen wie `/ba` übereinstimmt.
Das Muster passt auf `/`, dann `.` um das nächste Zeichen zu konsumieren, gefolgt von der Bedingung, dass das vorherige Zeichen ein `b` war, und dann einem `a`.

```js
// positive-lookbehind
const pattern = new URLPattern({ pathname: "(/.(?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // true
console.log(pattern.test("https://example.com/xa")); // false
```

Dieses Beispiel zeigt ein negatives Lookbehind-Match, das bei einem Pfadnamen wie `/<not b>a` übereinstimmt.
Das Muster passt auf `/`, dann `.` um das nächste Zeichen (`x`) zu konsumieren, gefolgt von der Bedingung, dass das vorherige Zeichen kein `b` war, und dann einem `a`.

```js
// negative-lookbehind
const pattern4 = new URLPattern({ pathname: "(/.*(?<!b)a)" });
console.log(pattern4.test("https://example.com/ba")); // false
console.log(pattern4.test("https://example.com/xa")); // true
```

#### Weitere Einschränkungen von Regex-Abgleichern

Einige andere Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern entkommen werden, obwohl sie dies in RegExp nicht tun.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Nicht benannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden spezifiziert, indem der Gruppenname mit einem Doppelpunkt (`:`) vorangestellt wird.
Regex-Gruppen, die nicht von einem Doppelpunkt und einem Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen sind im Abgleichsergebnis numerisch indiziert, basierend auf ihrer Reihenfolge im Muster.

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
Diese werden nach dem Gruppennamen (oder nach dem Regex, wenn es eines gibt) angegeben.
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

Muster können auch Gruppentrennzeichen enthalten. Dies sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind.
Diese Gruppentrennzeichen werden im Abgleichsergebnis nicht wie erfassende Gruppen erfasst, können jedoch wie Gruppen Modifikatoren haben.
Wenn Gruppentrennzeichen nicht durch einen Modifikator geändert werden, werden sie behandelt, als ob die Elemente in ihnen einfach Teil des übergeordneten Musters wären.
Gruppentrennzeichen dürfen keine anderen Gruppentrennzeichen enthalten, können jedoch alle anderen Musteritems enthalten (erfassende Gruppen, Regex, Platzhalter oder fester Text).

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

### Automatisches Präfixing von Gruppen in Pfadnamen

In Mustern, die gegen den `pathname`-Teil einer URL abgeglichen werden, erhalten Gruppen automatisch ein Schrägstrich- (`/`) Präfix, wenn die Gruppendefinition von einem Schrägstrich (`/`) vorangestellt wird.
Dies ist nützlich für Gruppen mit Modifikatoren, da es ermöglicht, dass wiederholte Gruppen wie erwartet funktionieren.

Wenn Sie das automatische Präfixing nicht wünschen, können Sie es deaktivieren, indem Sie die Gruppe mit Gruppentrennzeichen (`{}`) umgeben.
Gruppentrennzeichen haben kein automatisches Präfixing-Verhalten.

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

### Platzhalterzeichen

Das Platzhalterzeichen (`*`) ist eine Abkürzung für eine nicht benannte erfassende Gruppe, die alle Zeichen null- oder mehrmals abgleicht.
Sie können dies überall im Muster platzieren.
Das Platzhalterzeichen ist gierig, was bedeutet, dass es die längste mögliche Zeichenfolge abgleichen wird.

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

Abschließende Schrägstriche in einem Pfadnamen werden nicht automatisch abgeglichen.
Das unten stehende Beispiel zeigt, dass ein `URLPattern`-Abgleich für einen Pfadnamen von `/books` `https://example.com/books` abgleichen wird, aber nicht `https://example.com/books/` (und umgekehrt):

```js
const patternSlash = new URLPattern({ pathname: "/books/" });
console.log(patternSlash.test("https://example.com/books")); // false
console.log(patternSlash.test("https://example.com/books/")); // true

const patternNoSlash = new URLPattern({ pathname: "/books" });
console.log(patternNoSlash.test("https://example.com/books")); // true
console.log(patternNoSlash.test("https://example.com/books/")); // false
```

Wenn Sie beides abgleichen möchten, müssen Sie ein Abgleichsmuster verwenden, das beides zulässt.
Der einfachste Ansatz ist die Verwendung eines [Gruppentrennzeichens](#gruppentrennzeichen), das einen Schrägstrich enthält, gefolgt vom optionalen Modifikator.
Dies wird das Muster mit oder ohne abschließenden Schrägstrich abgleichen.

```js
const patternOptionalSlash = new URLPattern({ pathname: "/books{/}?" });
console.log(patternOptionalSlash.test("https://example.com/books")); // true
console.log(patternOptionalSlash.test("https://example.com/books/")); // true
```

### Musternormalisierung

Wenn ein Muster geparst wird, wird es automatisch in eine kanonische Form normalisiert.
Zum Beispiel werden Unicode-Zeichen im `pathname`-{{Glossary("Percent-encoding", "Prozent-codiert")}}, punycode-codiert im `hostname`, Standardportnummern werden weggelassen, Pfade wie `/foo/./bar/` werden zu `/foo/bar` zusammengefasst, etc.
Darüber hinaus gibt es einige Musterrepräsentationen, die zur selben zugrunde liegenden Bedeutung parsen, wie `foo` und `{foo}`.
Solche Fälle werden auf die einfachste Form normalisiert.
In diesem Fall wird `{foo}` zum Beispiel zu `foo` normalisiert.

## Vererbung von einer Basis-URL

Sowohl die in [`URLPattern`](/de/docs/Web/API/URLPattern) definierten Abgleichsmuster als auch die in [`URLPattern.test()`](/de/docs/Web/API/URLPattern/test) und [`URLPattern.exec()`](/de/docs/Web/API/URLPattern/exec) verwendeten Test-URLs ermöglichen die Eingaben mit einer optionalen Basis-URL zu spezifizieren (diese Basis-URL ist ein separates Parameter bei der Angabe der URL als Zeichenfolge und eine separate Eigenschaft bei der Angabe der URL als Objekt).

Wenn eine Basis-URL definiert ist, _können_ URL-Teile von der Basis-URL erben und zur Festlegung von Teilen des Musters oder der Test-URL verwendet werden.
Die URL-Auflösung ist ähnlich dem, was Sie erwarten würden, wenn Sie eine [`URL`](/de/docs/Web/API/URL) auflösen, die mit einer Basis-URL spezifiziert ist.

Der `username` und das `password` werden niemals von der Basis-URL geerbt.

Nur die "spezifischeren" URL-Teile als der speziellste Teil, der in der Eingabe definiert ist, werden von der Basis-URL geerbt.
Die folgende Liste zeigt die Reihenfolge der Spezifität:

- `protocol` (am spezifischsten), `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

Das bedeutet, wenn beispielsweise das `protocol` in der Eingabe-URL angegeben ist, ist nichts spezifischer, daher wird nichts von der Basis-URL geerbt.
Wenn jedoch der `pathname`-Teil in der Eingabe angegeben ist, können das `protocol`, der `hostname` und der `port` von der Basis-URL geerbt werden, aber `search` und `hash` werden nicht.

Beachten Sie, dass URL-Komponenten, die in der Zeichenfolge/dem Eingabeobjekt nicht angegeben oder von der Basis-URL geerbt werden, standardmäßig den Platzhalterwert (`"*"`) für ein `URLPattern` und die leere Zeichenfolge (`""`) für eine Test-URL annehmen.

## Groß- und Kleinschreibung

Die URL Pattern API behandelt viele Teile der URL standardmäßig als Groß- und Kleinschreibung unterscheidend beim Abgleichen.
Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks eine Groß- und Kleinschreibung ignorierende URL-Abgleichung.
Eine `ignoreCase`-Option ist im [`URLPattern()`](/de/docs/Web/API/URLPattern/URLPattern)-Konstruktor verfügbar, um bei Bedarf eine Groß- und Kleinschreibung ignorierende Abgleichung zu ermöglichen.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Einstellen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Abgleichsoperationen für das angegebene Muster auf Groß- und Kleinschreibung ignorierend um:

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

Das folgende Beispiel zeigt, wie ein `URLPattern` eine spezifische URL-Komponente filtert.
Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmuster aufgerufen wird, nehmen alle fehlenden Komponenten standardmäßig den Platzhalterwert `*` an.

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

### Konstruieren eines URLPattern aus einer vollständigen URL-Zeichenfolge

Das folgende Beispiel zeigt, wie man ein `URLPattern` aus einer vollständigen URL-Zeichenfolge mit eingebetteten Mustern konstruiert.
Zum Beispiel kann ein `:` sowohl das Protokollsuffix einer URL sein, wie `https:`, als auch der Beginn einer benannten Mustersgruppe, wie `:foo`.
Es "funktioniert einfach", wenn keine Mehrdeutigkeit besteht, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

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

Das folgende Beispiel zeigt, wie ein `URLPattern` aus einer mehrdeutigen Zeichenfolge konstruiert wird, wobei Zeichen als Teil der Mustersyntax behandelt werden.
In diesem Fall könnte das `:`-Zeichen das Suffix der Protokollkomponente oder es könnte das Präfix für eine benannte Gruppe im Muster sein.
Der Konstruktor entscheidet, dies als Teil des Musters zu behandeln und bestimmt daher, dass es sich um ein relatives Pfadnamensmuster handelt.
Da keine Basis-URL vorhanden ist, kann der relative Pfadname nicht aufgelöst werden und es wird ein Fehler ausgelöst.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Escape von Zeichen zur Auflösung ambiger URLPattern-Konstruktorzeichenfolgen

Das folgende Beispiel zeigt, wie ein mehrdeutiges Konstruktorzeichenfolgenzeichen entkommen werden kann, um als URL-Trennzeichen anstatt als Musterzeichen behandelt zu werden.
Hier wird `:` als `\\:` entkommen.

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
Die Basis-URL wird strikt als URL behandelt und kann keine Mustersyntax selbst enthalten.

Das Muster [erbt nur URL-Teile von der Basis-URL](#vererbung_von_einer_basis-url), die weniger spezifisch sind als die in den anderen Eigenschaften.

In diesem Fall ist `pathname` angegeben, sodass das Protokoll und der Host geerbt werden können, aber nicht die Suche, das Fragment, der Benutzername oder das Passwort.
Die Eigenschaften, die nicht geerbt werden, nehmen standardmäßig die Platzhalterzeichenfolge (`"*"`).
Die Ausnahme bildet der Port, der auf die leere Zeichenfolge gesetzt wird, da der _hostname_ von der Basis-URL übernommen wird ([der einen "Standardport"-Wert impliziert](/de/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port)).

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
Die `groups`-Eigenschaft enthält erfasste Gruppen, die basierend auf ihrer Reihenfolge nummeriert und entweder nach Nummer bei unbenannten oder nach Name bei benannten Gruppen indiziert sind.
In diesem Fall gibt es nur eine unbenannte Gruppe für die Platzhaltereigenschaft mit dem Wert `cdn`.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname); // {"groups": {"0": "cdn"}, "input": "cdn.example.com"}
```

### Zugriff auf erfasste benannte Gruppenwerte

Das folgende Beispiel zeigt, wie Gruppen benutzerdefinierte Namen erhalten können, die verwendet werden können, um den passenden Wert im Ergebnisobjekt abzurufen.

Die Abgleichsmuster im Muster werden durch das `:`-Symbol gefolgt von einem Namen angegeben.
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

Das folgende Beispiel zeigt, wie eine Abgleichsgruppe einen regulären Ausdruck verwenden kann, um entweder `/foo` oder `/bar` in einer Test-URL abzugleichen.
Die Gruppe ist unbenannt, wird also im Ergebnis über eine Indexnummer referenziert.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });
console.log(result.pathname.groups[0]); // 'foo'
```

### Regulärer Ausdruck mit benannter Gruppe

Das folgende Beispiel zeigt, wie Sie einen benutzerdefinierten regulären Ausdruck mit einer benannten Gruppe verwenden.

Die Gruppe wird `type` genannt und stimmt mit einem Pfad überein, der entweder `/foo` oder `/bar` ist.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Erfasste Gruppen optional machen

Das folgende Beispiel zeigt, wie eine Abgleichsgruppe optional gemacht wird, indem ein `?`-Modifikator danach platziert wird.

Für die `pathname`-Komponente verursacht dies auch, dass ein vorausgehendes `/`-Zeichen als optionales Präfix zur Gruppe behandelt wird.

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true
```

Platzhalter können ebenfalls optional gemacht werden.
Dies mag keinen Sinn ergeben, da sie bereits die leere Zeichenfolge abgleichen, aber es macht auch das Präfix `/` optional in einem Pfadnamenmuster.

```js
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### Erfasste Gruppen wiederholbar machen

Das folgende Beispiel zeigt, wie eine Abgleichsgruppe wiederholbar gemacht wird, indem ein `+`-Modifikator danach platziert wird.
In der `pathname`-Komponente behandelt dies auch das `/`-Präfix als speziell, so dass es effektiv der Anfang der wiederholten Gruppe ist.

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

### Erfasste Gruppen optional und wiederholbar machen

Das folgende Beispiel zeigt, wie eine Abgleichsgruppe sowohl optional als auch wiederholbar gemacht wird.
Tun Sie dies, indem Sie einen `*`-Modifikator nach der Gruppe platzieren.
Auch hier behandelt die `pathname`-Komponente das `/`-Präfix speziell.

Es wird sowohl optional als auch mit der Gruppe wiederholt.

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

### Ein benutzerdefiniertes Präfix oder Suffix für einen optionalen oder wiederholten Modifikator verwenden

Das folgende Beispiel zeigt, wie geschweifte Klammern (ein [Gruppentrennzeichen](#gruppentrennzeichen)) mit einer benannten Gruppe verwendet werden können, um ein benutzerdefiniertes Präfix und/oder Suffix festzulegen, auf das ein nachfolgender `?`, `*` oder `+`-Modifikator angewendet wird.

Zum Beispiel stimmt `{:subdomain.}*` gegen jede Subdomain von `example.com` und die Domäne selbst ab.
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

### Text optional oder wiederholbar machen ohne erfasste Gruppe

Das folgende Beispiel zeigt, wie geschweifte Klammern verwendet werden können, um feste Textwerte optional oder wiederholbar zu machen, ohne eine erfasste Gruppe zu verwenden.

Das untenstehende Muster stimmt entweder mit `/product` oder `/product/` überein, aber da [Gruppentrennzeichen](#gruppentrennzeichen) standardmäßig nicht erfassend sind, wird das Ergebnis nicht in einer entsprechenden Abgleichsgruppe gefunden.

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

- Ein Polyfill von `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar
- Die von URLPattern verwendete Mustersyntax ist ähnlich der Syntax, die von [path-to-regexp](https://github.com/pillarjs/path-to-regexp) verwendet wird
