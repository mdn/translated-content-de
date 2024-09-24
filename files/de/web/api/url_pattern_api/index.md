---
title: URL-Muster-API
slug: Web/API/URL_Pattern_API
l10n:
  sourceCommit: f9a203c4bfacf129dffa946b5c9e1345dfd5e628
---

{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **URL Pattern API** definiert eine Syntax, die zur Erstellung von URL-Muster-Matchern verwendet wird. Diese Muster können mit URLs oder einzelnen URL-Komponenten verglichen werden. Die URL Pattern API wird von der {{domxref("URLPattern")}}-Schnittstelle verwendet.

## Konzepte und Verwendung

Die Mustersyntax basiert auf der Syntax der [path-to-regexp](https://github.com/pillarjs/path-to-regexp)-Bibliothek. Muster können enthalten:

- Wörtliche Zeichenfolgen, die exakt übereinstimmen.
- Platzhalter (`/posts/*`), die mit jedem Zeichen übereinstimmen.
- Benannte Gruppen (`/books/:id`), die einen Teil der übereinstimmenden URL extrahieren.
- Nicht-erfassende Gruppen (`/books{/old}?`), die Teile eines Musters optional oder mehrmals wiederholbar machen.
- {{jsxref("RegExp")}}-Gruppen (`/books/(\\d+)`), die arbiträr komplexe Regex-Übereinstimmungen mit einigen [Einschränkungen](#einschränkungen_der_regex-matcher) ermöglichen. _Beachten Sie, dass die Klammern nicht Teil des Regex sind, sondern stattdessen deren Inhalt als Regex definieren._

Details zur Syntax finden Sie im Abschnitt [Mustersyntax](#mustersyntax) unten.

## Schnittstellen

Die URL Pattern API hat nur eine zugehörige Schnittstelle:

- {{domxref("URLPattern")}} {{Experimental_Inline}}
  - : Repräsentiert ein Muster, das mit URLs oder Teilen von URLs übereinstimmen kann. Das Muster kann erfasste Gruppen enthalten, die Teile der übereinstimmenden URL extrahieren.

## Mustersyntax

Die Syntax für Muster basiert auf der [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript-Bibliothek. Diese Syntax ist ähnlich derjenigen, die in [Ruby on Rails](https://rubyonrails.org/) oder JavaScript-Frameworks wie [Express](https://expressjs.com/) oder [Next.js](https://nextjs.org/) verwendet wird.

### Feste Texte und Erfassungsgruppen

Jedes Muster kann eine Kombination aus festem Text und Gruppen enthalten. Der feste Text ist eine Zeichenfolge, die exakt übereinstimmt. Gruppen stimmen mit einer beliebigen Zeichenfolge basierend auf Übereinstimmungsregeln überein. Jeder URL-Teil hat seine eigenen Standardregeln, die unten erläutert werden, können aber überschrieben werden.

```js
// Ein Muster, das mit einem festen Text übereinstimmt
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// Ein Muster, das mit einer benannten Gruppe übereinstimmt
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment-Platzhalter

Standardmäßig stimmt eine Gruppe, die den `pathname`-Teil der URL abgleicht, mit allen Zeichen außer dem Schrägstrich (`/`) überein. Im `hostname`-Teil stimmt die Gruppe mit allen Zeichen außer dem Punkt (`.`) überein. In allen anderen Teilen stimmt die Gruppe mit allen Zeichen überein. Der Segment-Platzhalter ist nicht gierig, das bedeutet, dass er die kürzestmögliche Zeichenfolge abgleicht.

### Regex-Matcher

Anstatt die Standard-Abgleichsregeln für eine Gruppe zu verwenden, können Sie ein Regex für jede Gruppe verwenden, indem Sie ein Regex in Klammern einschließen. Dieses Regex definiert die Abgleichsregeln für die Gruppe. Unten ist ein Beispiel für einen Regex-Matcher für eine benannte Gruppe, die die Gruppe beschränkt, nur dann übereinzustimmen, wenn sie eine oder mehrere Ziffern enthält:

```js
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

### Einschränkungen der Regex-Matcher

Einige Regex-Muster funktionieren möglicherweise nicht wie erwartet:

- Beginnt mit `^` stimmt nur überein, wenn es am Anfang des Protokollabschnitts des URLPattern verwendet wird, und ist redundant, wenn es verwendet wird.

  ```js
  // mit `^` in pathname
  const pattern = new URLPattern({ pathname: "(^b)" });
  console.log(pattern.test("https://example.com/ba")); // false
  console.log(pattern.test("https://example.com/xa")); // false
  ```

  ```js
  // mit `^` in protocol
  const pattern = new URLPattern({ protocol: "(^https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

  ```js
  // ohne `^` in protocol
  const pattern = new URLPattern({ protocol: "(https?)" });
  console.log(pattern.test("https://example.com/index.html")); // true
  console.log(pattern.test("xhttps://example.com/index.html")); // false
  ```

- Endet mit `$` stimmt nur überein, wenn es am Ende des Hash-Abschnitts des URLPattern verwendet wird, und ist redundant, wenn es verwendet wird.

  ```js
  // mit `$` in pathname
  const pattern = new URLPattern({ pathname: "(path$)" });
  console.log(pattern.test("https://example.com/path")); // false
  console.log(pattern.test("https://example.com/other")); // false
  ```

  ```js
  // mit `$` in hash
  const pattern = new URLPattern({ hash: "(hash$)" });
  console.log(pattern.test("https://example.com/#hash")); // true
  console.log(pattern.test("xhttps://example.com/#otherhash")); // false
  ```

  ```js
  // ohne `$` in hash
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

- Klammern müssen in Bereichsausdrücken innerhalb von URLPattern escaped werden, obwohl dies in RegExp nicht erforderlich ist.

  ```js
  new URLPattern({ pathname: "([()])" }); // wirft Fehler
  new URLPattern({ pathname: "([\\(\\)])" }); // okay

  new RegExp("[()]"); // okay
  new RegExp("[\\(\\)]"); // okay
  ```

### Ungenannte und benannte Gruppen

Gruppen können entweder benannt oder unbenannt sein. Benannte Gruppen werden durch Voranstellen des Gruppennamens mit einem Doppelpunkt (`:`) angegeben. Regexp-Gruppen, die nicht mit einem Doppelpunkt und einem Namen vorangestellt sind, sind unbenannt. Unbenannte Gruppen werden im Abgleichsergebnis numerisch basierend auf ihrer Reihenfolge im Muster indiziert.

```js
// Eine benannte Gruppe
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

```js
// Eine unbenannte Gruppe
const pattern = new URLPattern("/books/(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { '0': '123' }
```

### Gruppenmodifikatoren

Gruppen können auch Modifikatoren haben. Diese werden nach dem Gruppennamen (oder nach dem Regex, falls vorhanden) angegeben. Es gibt drei Modifikatoren: `?`, um die Gruppe optional zu machen, `+`, um die Gruppe einmal oder mehrmals zu wiederholen, und `*`, um die Gruppe null- oder mehrmalig zu wiederholen.

```js
// Eine optionale Gruppe
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // false
console.log(pattern.test("https://example.com/books/123/456/789")); // false
```

```js
// Eine wiederholende Gruppe mit einem Minimum von eins
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```

```js
// Eine wiederholende Gruppe mit einem Minimum von null
const pattern = new URLPattern("/books/:id*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```

### Gruppengrenzen

Muster können auch Gruppengrenzen enthalten. Dies sind Teile eines Musters, die von geschweiften Klammern (`{}`) umgeben sind. Diese Gruppengrenzen werden im Abgleichsergebnis nicht wie erfassende Gruppen erfasst, es können jedoch Modifikatoren darauf angewendet werden, genau wie bei Gruppen. Wenn Gruppengrenzen nicht von einem Modifikator verändert werden, werden sie behandelt, als wären die Elemente in ihnen einfach Teil des übergeordneten Musters. Gruppengrenzen dürfen keine anderen Gruppengrenzen enthalten, können jedoch alle anderen Musterteile (erfassende Gruppen, Regex, Platzhalter oder fester Text) enthalten.

```js
// Eine Gruppengrenze mit einem ? (optional) Modifikator
const pattern = new URLPattern("/book{s}?", "https://example.com");
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/book")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// Eine Gruppengrenze ohne Modifikator
const pattern = new URLPattern("/book{s}", "https://example.com");
console.log(pattern.pathname); // /books
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/book")); // false
```

```js
// Eine Gruppengrenze mit einer erfassenden Gruppe
const pattern = new URLPattern({ pathname: "/blog/:id(\\d+){-:title}?" });
console.log(pattern.test("https://example.com/blog/123-my-blog")); // true
console.log(pattern.test("https://example.com/blog/123")); // true
console.log(pattern.test("https://example.com/blog/my-blog")); // false
```

### Automatische Gruppenpräfixe in Pathnames

In Mustern, die mit dem `pathname`-Teil einer URL übereinstimmen, wird Gruppen automatisch ein Schrägstrich (`/`) Präfix hinzugefügt, wenn die Gruppendefinition von einem Schrägstrich (`/`) vorangestellt wird. Dies ist nützlich für Gruppen mit Modifikatoren, da es ermöglicht, dass wiederholte Gruppen wie erwartet funktionieren.

Wenn Sie kein automatisches Präfix möchten, können Sie es deaktivieren, indem Sie die Gruppe mit Gruppengrenzen (`{}`) umgeben. Gruppengrenzen haben kein automatisches Präfixverhalten.

```js
// Ein Muster mit einer optionalen Gruppe, die von einem Schrägstrich vorangestellt wird
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
```

```js
// Ein Muster mit einer wiederholten Gruppe, die von einem Schrägstrich vorangestellt wird
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/")); // false
console.log(pattern.test("https://example.com/books/123/456/")); // false
```

```js
// Segmentpräfixe treten außerhalb von pathname-Mustern nicht auf
const pattern = new URLPattern({ hash: "/books/:id?" });
console.log(pattern.test("https://example.com#/books/123")); // true
console.log(pattern.test("https://example.com#/books")); // false
console.log(pattern.test("https://example.com#/books/")); // true
```

```js
// Deaktivieren des Segmentpräfixes für eine Gruppe mit einer Gruppengrenze
const pattern = new URLPattern({ pathname: "/books/{:id}?" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // true
```

### Platzhalter-Zeichen

Das Platzhalter-Zeichen (`*`) ist eine Abkürzung für eine unbenannte erfassende Gruppe, die alle Zeichen null- oder mehrmalig übereinstimmt. Sie können dies an jeder Stelle im Muster platzieren. Der Platzhalter ist gierig, das bedeutet, dass er die längstmögliche Zeichenfolge übereinstimmt.

```js
// Ein Platzhalter am Ende eines Musters
const pattern = new URLPattern("/books/*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // true
console.log(pattern.test("https://example.com/books/123/456")); // true
```

```js
// Ein Platzhalter in der Mitte eines Musters
const pattern = new URLPattern("/*.png", "https://example.com");
console.log(pattern.test("https://example.com/image.png")); // true
console.log(pattern.test("https://example.com/image.png/123")); // false
console.log(pattern.test("https://example.com/folder/image.png")); // true
console.log(pattern.test("https://example.com/.png")); // true
```

### Muster-Normalisierung

Wenn ein Muster analysiert wird, wird es automatisch in eine kanonische Form normalisiert. Zum Beispiel werden Unicode-Zeichen in der `pathname`-Eigenschaft prozentcodiert, Punycode-Codierung wird im `hostname` verwendet, Standardportnummern werden weggelassen, Pfade wie `/foo/./bar/` werden auf `/foo/bar` reduziert usw. Darüber hinaus gibt es einige Musterrepräsentationen, die auf die gleiche zugrunde liegende Bedeutung analysieren, wie `foo` und `{foo}`. Solche Fälle werden auf die einfachste Form normalisiert. In diesem Fall wird `{foo}` zu `foo` geändert.

## Groß-/Kleinschreibung

Die URL Pattern API behandelt viele Teile der URL standardmäßig als Groß-/Kleinschreibung, wenn sie abgeglichen werden. Im Gegensatz dazu verwenden viele clientseitige JavaScript-Frameworks einen groß-/kleinbuchstabenunempfindlichen URL-Abgleich. Eine `ignoreCase`-Option ist im {{domxref("URLPattern.URLPattern", "URLPattern()")}}-Konstruktor verfügbar, um bei Bedarf einen Groß-/Kleinschreibungs-unempfindlichen Abgleich zu ermöglichen.

```js
// Standardmäßig groß-/kleinbuchstaben-sensitiver Abgleich
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Wenn die `ignoreCase`-Option im Konstruktor auf `true` gesetzt wird, werden alle Abgleich-Operationen für das gegebene Muster auf Groß-/Kleinschreibungs-unempfindlich umgestellt:

```js
// Groß-/kleinbuchstaben-unempfindlicher Abgleich
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Beispiele

### Auf eine bestimmte URL-Komponente filtern

Das folgende Beispiel zeigt, wie ein `URLPattern` eine bestimmte URL-Komponente filtert. Wenn der `URLPattern()`-Konstruktor mit einem strukturierten Objekt von Komponentenmustern aufgerufen wird, setzt der Standardwert für fehlende Komponenten auf den `*`-Platzhalter.

```js
// Erstellen Sie ein URLPattern, das einen bestimmten Domain und seine Subdomains abgleicht.
// Alle anderen URL-Komponenten verwenden standardmäßig das Platzhalter-`*`-Muster.
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

// Gibt `false` aus, weil die hostname-Komponente nicht übereinstimmt
console.log(pattern.test("https://cdn-example.com/foo/bar"));
```

### Ein URLPattern aus einem vollständigen URL-String konstruieren

Das folgende Beispiel zeigt, wie man ein `URLPattern` aus einem vollständigen URL-String mit eingebetteten Mustern konstruiert. Zum Beispiel kann ein `:` sowohl das URL-Protokoll-Suffix, wie `https:`, als auch der Anfang einer benannten Gruppenstruktur, wie `:foo`, sein. Es "funktioniert einfach", wenn keine Mehrdeutigkeit bezüglich der Frage besteht, ob ein Zeichen Teil der URL-Syntax oder der Mustersyntax ist.

```js
// Erstellen Sie ein URLPattern, das URLs zu CDN-Servern für den Ladevorgang von jpg-Bildern abgleicht.
// URL-Komponenten, die nicht explizit angegeben sind, wie search und hash hier, führen zu einem leeren String ähnlich wie der URL()-Konstruktor.
const pattern = new URLPattern("https://cdn-*.example.com/*.jpg");

console.log(pattern.protocol); // 'https'

console.log(pattern.hostname); // 'cdn-*.example.com'

console.log(pattern.pathname); // '/*.jpg'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

// Gibt `true` aus
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg"),
);

// Gibt `false` aus, weil die search-Komponente nicht übereinstimmt
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg?q=1"),
);
```

### Ein URLPattern aus einem mehrdeutigen URL-String konstruieren

Das folgende Beispiel zeigt, wie ein `URLPattern`, das aus einem mehrdeutigen String konstruiert wird, bevorzugt Zeichen als Teil der Mustersyntax behandelt. In diesem Fall könnte das `:`-Zeichen das Protokollkomponenten-Suffix oder das Präfix für eine benannte Gruppe im Muster sein. Der Konstruktor entscheidet sich, dies als Teil des Musters zu behandeln und nimmt daher an, dass es sich um ein relatives p
