---
title: "URLPattern: URLPattern() Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

Der **`URLPattern()`** Konstruktor gibt ein neues [`URLPattern`](/de/docs/Web/API/URLPattern) Objekt zurück, das die URLs repräsentiert, die durch dieses Muster abgeglichen werden.

## Syntax

```js-nolint
new URLPattern(input)
new URLPattern(input, options)
new URLPattern(url)
new URLPattern(url, baseURL)
new URLPattern(url, baseURL, options)
```

### Parameter

- `input` {{Optional_Inline}}
  - : Ein Objekt, das separate Eigenschaften zum Definieren der [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) hat, die verwendet werden, um jeden Teil einer URL abzugleichen.

    Die Objektmitglieder können alle (oder keine) sein:
    - `protocol` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Protokoll](/de/docs/Web/API/URL/protocol) abgleicht, wie `http`, `https` oder `"http{s}?"` (um sowohl https als auch http abzugleichen).
    - `username` {{Optional_Inline}}
      - : Ein Muster, das einen URL-[Benutzernamen](/de/docs/Web/API/URL/username) abgleicht.
    - `password` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Passwort](/de/docs/Web/API/URL/password) abgleicht.
    - `hostname` {{Optional_Inline}}
      - : Ein Muster, das einen URL-[Hostnamen](/de/docs/Web/API/URL/hostname) abgleicht.
    - `port` {{Optional_Inline}}
      - : Ein Muster, das eine URL-[Port](/de/docs/Web/API/URL/port) abgleicht.
    - `pathname` {{Optional_Inline}}
      - : Ein Muster, das einen URL-[Pfadnamen](/de/docs/Web/API/URL/pathname) abgleicht.
    - `search` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Search](/de/docs/Web/API/URL/search) abgleicht.
    - `hash` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Hash](/de/docs/Web/API/URL/hash) abgleicht.
    - `baseURL` {{Optional_Inline}}
      - : Ein String, der eine absolute URL liefert, von der [nicht definierte, weniger spezifische Objekteigenschaften vererbt werden können](#vererbung_von_einer_basis-url).

- `url` {{Optional_Inline}}
  - : Ein String, der URL-Muster repräsentiert, die abgeglichen werden sollen.

    Diese wird als absolute oder relative URL formatiert, kann aber Markup enthalten, um [Abgleichsmuster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) und Escape-Sequenzen anzuzeigen.
    Wenn sie als relative URL formatiert ist, muss ebenfalls [`baseURL`](#baseurl_2) angegeben werden.

- `baseURL` {{Optional_Inline}}
  - : Ein String, der eine absolute URL liefert, von der [nicht definierte, weniger spezifische URL-Teile vererbt werden können](#vererbung_von_einer_basis-url).
    Dies muss gesetzt werden, wenn `url` eine relative URL ist, und darf nicht gesetzt werden, wenn `input` verwendet wird (`input.baseURL` kann verwendet werden, um geerbte Werte für ein `input` bereitzustellen, ist jedoch im Gegensatz zu dieser Eigenschaft niemals erforderlich).

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen zum Abgleichen des angegebenen Musters bereitstellt.
    Die erlaubten Objektmitglieder sind:
    - `ignoreCase` {{Optional_Inline}}
      - : Aktiviert eine Groß-/Kleinschreibung ignorierende Übereinstimmung, wenn auf `true` gesetzt.
        Wenn weggelassen oder auf `false` gesetzt, ist der Abgleich case-sensitive.

> [!NOTE]
> Alle URL-Teile in den `input` Eigenschaften und der `url` sind optional.
> Wenn sie in diesen Parametern nicht spezifiziert sind, können einige Werte aus der `baseURL` [vererbt](#vererbung_von_einer_basis-url) werden, abhängig von den anderen definierten URL-Teilen.
> Ausgelassene Teile werden auf Platzhalter (`*`) normalisiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Weist auf eines der folgenden hin:
    - Das angegebene `input`, `url` oder `baseURL` ist nicht gültig oder syntaktisch korrekt.
    - Die angegebene `url` ist relativ, aber keine `baseURL` ist angegeben, um eine komplette absolute URL zu bilden.
    - Eine `baseURL` ist angegeben, und input ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beschreibung

Der `URLPattern`-Konstruktor kann entweder ein "input"-Objekt oder einen URL-String und eine optionale baseURL annehmen.
Beide Formen können auch ein options-Objekt-Argument enthalten, das zusätzliche Abgleichsoptionen festlegt, wie z.B. die Groß-/Kleinschreibung.

```js
new URLPattern(input);
new URLPattern(url, baseURL);
```

Das Eingabeobjekt, das im ersten Typ des Konstruktors verwendet wird, beschreibt die URLs, die abgeglichen werden sollen, indem Muster für einzelne URL-Teile angegeben werden: `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` und `baseURL`.
Wenn die `baseURL`-Eigenschaft angegeben wird, wird sie als URL geparst und kann verwendet werden, um alle anderen nicht ausgefüllten Eigenschaften zu füllen (siehe den folgenden Abschnitt [Vererbung von einer Basis-URL](#vererbung_von_einer_basis-url)).
Eigenschaften, die ausgelassen oder nicht durch die `baseURL`-Eigenschaft gefüllt werden, werden auf die Platzhalter-Zeichenfolge (`*`) gesetzt, die gegen jeden entsprechenden Wert in einer URL übereinstimmt.

Der zweite Typ des Konstruktors nimmt einen URL-String, der Muster enthalten kann, die darin eingebettet sind.
Der String kann eine absolute oder relative URL angeben — ist das Muster relativ, muss `baseURL` als zweites Argument angegeben werden.
Beachten Sie, dass es notwendig sein kann, [einige Zeichen zu maskieren](#spezielle_zeichen_maskieren) im URL-String, wenn unklar ist, ob das Zeichen verschiedene URL-Komponenten trennt oder Teil eines Musters ist.

### Vererbung von einer Basis-URL

URL-Teile, die spezifischer als der am wenigsten spezifische Teil in der `url` definiert sind, _können_ von `baseURL` (oder von `input.baseURL` für `input`) geerbt werden.
Intuitiv bedeutet das, wenn der `pathname`-Teil im Eingang spezifiziert ist, können die Teile zu seiner Linken in einer URL von der Basis-URL (`protocol`, `hostname` und `port`) geerbt werden, während die Teile zu seiner Rechten nicht (`search` und `hash`) geerbt werden können.
Der `username` und das `password` werden niemals von der Basis-URL geerbt.

Für weitere Informationen siehe [Vererbung von einer Basis-URL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in der API-Übersicht.

### Hostname in `url` oder `baseURL` beeinflusst den Standardport

Im Gegensatz zu anderen URL-Teilen kann der Port implizit gesetzt werden, wenn Sie eine `url` oder Basis-URL angeben (entweder im `baseURL`-Parameter oder im Objekt) und keinen Port explizit angeben.
In diesem Fall wird der Port auf die leere Zeichenfolge (`""`) und den Standardport (`443`) gesetzt.

Zum Beispiel setzen diese Muster alle das Port-Muster auf `""`:

```js
new URLPattern("https://example.com");
new URLPattern("https://example.com*");
new URLPattern("https://example.com/foo");
new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});
```

Wenn Sie den Hostnamen in einer `url` oder `baseURL` nicht angeben, wird der Port auf die Platzhalter-Zeichenfolge (`*`) gesetzt:

```js
new URLPattern({ pathname: "/foo/*" }); // Port omitted, defaults to '*'
```

#### Spezielle Zeichen maskieren

Die [Mustersyntax](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält eine Reihe von Zeichen, die natürlich in URLs vorkommen können, wie:

- `?` gibt sowohl ein optionales Zeichen oder eine Gruppe in einem Muster als auch den Suchteil einer URL an.
- `:` gibt den Beginn einer benannten Gruppe in einem Muster an und ist ein Trennzeichen für Benutzername und Passwort oder Hostname und Port.

Wenn Sie ein `URLPattern` mit dem [`url`](#url) String-Parameter konstruieren, wird angenommen, dass diese speziellen Zeichen Teil der Mustersyntax sind (wenn es irgendwelche Mehrdeutigkeiten gibt).
Wenn Sie die Zeichen verwenden, um Teile der URL darzustellen, müssen Sie sie maskieren, indem Sie den Zeichen `\\` voranstellen (oder das Problem vermeiden, indem Sie `URLPattern` unter Verwendung der Objektsyntax konstruieren).

Zum Beispiel maskiert das folgende Muster das `?`-Zeichen, wodurch dieses Muster einen Such-URL-Teil von "fred" abgleicht:

```js
console.log(new URLPattern("https://example.com/*\\?fred"));
```

Ähnlich zeigt das Beispiel [Match the username and password](#den_benutzernamen_und_das_passwort_abgleichen) unten einen Fall, in dem das `:`-Trennzeichen maskiert werden muss.

## Beispiele

### Standardmuster

Dieser Code demonstriert, dass URL-Teile, die in einer URL nicht geliefert oder [von einer Basis-URL geerbt](#vererbung_von_einer_basis-url) werden, auf den Platzhalterwert standardisieren.

```js
console.log(new URLPattern());
console.log(new URLPattern({}));
/*
{
  protocol: "*",
  username: "*",
  password: "*",
  hostname: "*",
  port: "*",
  pathname: "*",
  search: "*",
  hash: "*",
  hasRegExpGroups: false,
};
*/
```

### Pfadnamen abgleichen

```js
let pattern1 = new URLPattern("https://example.com/books/:id");

// same as
let pattern2 = new URLPattern("/books/:id", "https://example.com");

// or
let pattern3 = new URLPattern({
  protocol: "https",
  hostname: "example.com",
  pathname: "/books/:id",
});

// or
let pattern4 = new URLPattern({
  pathname: "/books/:id",
  baseURL: "https://example.com",
});

// or
let pattern5 = new URLPattern({
  pathname: "/books/:id",
  baseURL: "https://example.com/some/path/?search=3#param=1",
  // More-specific URL parts are discarded
});
```

### Das Protokoll und den Hostnamen abgleichen

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Den Benutzernamen und das Passwort abgleichen

Dies setzt die URL-Teile für Benutzername und Passwort mit der Mustersyntax.
Beachten Sie, wie das `:`-Trennzeichen maskiert werden muss, wenn die Mustersyntax verwendet wird.
Ohne dies wäre das Benutzername-Muster `myusername:mypassword`.

```js
const pattern = new URLPattern(
  "https://myusername\\:mypassword@example.com/some/path",
);

console.log(pattern.username); // "myusername"
console.log(pattern.password); // "mypassword"
```

Aus diesem Grund ist es oft natürlicher (und sicherer), die Objektsyntax zu verwenden.

### Alle möglichen strukturierten Teile abgleichen

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  username: ":username",
  password: ":password",
  hostname: ":subdomain.example.com",
  port: ":port(80|443)",
  pathname: "/:path",
  search: "*",
  hash: "*",
});
```

### Groß-/Kleinschreibungs-unabhängiger Abgleich

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Abgleichsoperationen auf Groß-/Kleinschreibungs-unabhängig für das angegebene Muster um:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

### Vererbung von der Basis-URL

Dies bietet ein praxisnahes Beispiel für Vererbung.
Der `pathname` ist explizit angegeben. Die Werte, die weniger spezifisch als der `pathname` sind, wie das Protokoll und der Hostname, werden vererbt.
Die spezifischeren Werte werden ignoriert und standardisieren auf ihre Standardwerte (wie `"*"` für die Suche und das Hash, und `""` für den Port).

```js
const pattern = new URLPattern({
  pathname: "/some/path",
  baseURL: "https://myuser:mypass@example.com/mypath?search=1&p=3#fred",
});

console.log(pattern);
// protocol: https
// username: *
// password: *
// hostname: example.com
// port:
// pathname: /some/path
// search: *
// hash: *
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
