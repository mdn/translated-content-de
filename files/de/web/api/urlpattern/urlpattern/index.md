---
title: "URLPattern: URLPattern() Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

Der **`URLPattern()`** Konstruktor gibt ein neues [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt zurück, das die URLs repräsentiert, die mit diesem Muster übereinstimmen werden.

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
  - : Ein Objekt, das separate Eigenschaften zum Definieren der [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) hat, die zum Abgleichen jedes Teils einer URL verwendet werden.

    Die Objektmitglieder können beliebig (oder keine) sein:
    - `protocol` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Protokoll](/de/docs/Web/API/URL/protocol) wie `http`, `https` oder `"http{s}?"` (um sowohl https als auch http zu matchen) übereinstimmt.
    - `username` {{Optional_Inline}}
      - : Ein Muster, das mit einem URL-[Benutzernamen](/de/docs/Web/API/URL/username) übereinstimmt.
    - `password` {{Optional_Inline}}
      - : Ein Muster, das mit einem URL-[Passwort](/de/docs/Web/API/URL/password) übereinstimmt.
    - `hostname` {{Optional_Inline}}
      - : Ein Muster, das mit einem URL-[Hostname](/de/docs/Web/API/URL/hostname) übereinstimmt.
    - `port` {{Optional_Inline}}
      - : Ein Muster, das mit einem URL-[Port](/de/docs/Web/API/URL/port) übereinstimmt.
    - `pathname` {{Optional_Inline}}
      - : Ein Muster, das mit einem URL-[Pfadname](/de/docs/Web/API/URL/pathname) übereinstimmt.
    - `search` {{Optional_Inline}}
      - : Ein Muster, das mit einem URL-[Suche](/de/docs/Web/API/URL/search) übereinstimmt.
    - `hash` {{Optional_Inline}}
      - : Ein Muster, das mit einem URL-[Hash](/de/docs/Web/API/URL/hash) übereinstimmt.
    - `baseURL` {{Optional_Inline}}
      - : Eine Zeichenkette, die eine absolute URL bereitstellt, von der [nicht definierte, weniger spezifische Objekteigenschaften vererbt werden können](#vererbung_von_einer_basis-url).

- `url` {{Optional_Inline}}
  - : Eine Zeichenkette, die URL-Muster zum Abgleichen repräsentiert.

    Diese ist als absolute oder relative URL formatiert, kann jedoch Markup enthalten, um [Übereinstimmungsmuster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) und Escape-Sequenzen anzugeben.
    Wenn sie als relative URL formatiert ist, muss [`baseURL`](#baseurl_2) ebenfalls bereitgestellt werden.

- `baseURL` {{Optional_Inline}}
  - : Eine Zeichenkette, die eine absolute URL bereitstellt, von der [nicht definierte, weniger spezifische URL-Teile vererbt werden können](#vererbung_von_einer_basis-url).
    Diese muss festgelegt werden, wenn `url` eine relative URL ist, und darf nicht festgelegt werden, wenn `input` verwendet wird (`input.baseURL` kann verwendet werden, um erbte Werte für ein `input` bereitzustellen, aber im Gegensatz zu dieser Eigenschaft ist sie nie erforderlich).

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen für das Abgleichen des angegebenen Musters bereitstellt.
    Die erlaubten Objektmitglieder sind:
    - `ignoreCase` {{Optional_Inline}}
      - : Ermöglicht fallunempfindliches Abgleichen, wenn auf `true` gesetzt.
        Wenn weggelassen oder auf `false` gesetzt, ist das Abgleichen fallabhängig.

> [!NOTE]
> Alle URL-Teile in den `input`-Eigenschaften und der `url` sind optional.
> Wenn sie in diesen Parametern nicht angegeben sind, können einige Werte von der `baseURL` [geerbt](#vererbung_von_einer_basis-url) werden, je nachdem, welche anderen URL-Teile definiert sind.
> Ausgelassene Teile werden auf Platzhalter (`*`) normalisiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Gibt Folgendes an:
    - Das angegebene `input`, `url` oder `baseURL` ist nicht gültig oder syntaktisch korrekt.
    - Die angegebene `url` ist relativ, aber keine `baseURL` wird bereitgestellt, um eine vollständige absolute URL zu bilden.
    - Eine `baseURL` wird bereitgestellt, und `input` ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beschreibung

Der `URLPattern`-Konstruktor kann entweder ein "input"-Objekt oder eine URL-Zeichenkette und eine optionale baseURL aufnehmen.
Beide Formen können auch ein Optionsobjekt-Argument aufnehmen, das zusätzliche Abgleichsoptionen wie Fallunempfindlichkeit setzt.

```js
new URLPattern(input);
new URLPattern(url, baseURL);
```

Das Eingabeobjekt, das im ersten Konstruktionstyp verwendet wird, beschreibt die URLs, die gematcht werden sollen, indem Muster für einzelne URL-Teile spezifiziert werden: `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` und `baseURL`.
Wenn die `baseURL`-Eigenschaft bereitgestellt wird, wird sie als URL analysiert und kann verwendet werden, um alle anderen fehlenden Eigenschaften zu füllen (siehe den nachfolgenden Abschnitt [Vererbung von einer Basis-URL](#vererbung_von_einer_basis-url)).
Eigenschaften, die ausgelassen oder nicht von der `baseURL`-Eigenschaft gefüllt werden, standardisieren auf die Platzhalterzeichenkette (`*`), die jedem entsprechenden Wert in einer URL entspricht.

Der zweite Konstruktionstyp nimmt eine URL-Zeichenkette, die Muster darin eingebettet haben kann.
Die Zeichenkette kann eine absolute oder relative URL angeben — wenn das Muster relativ ist, muss `baseURL` als zweites Argument bereitgestellt werden.
Beachten Sie, dass es notwendig sein kann, [einige Zeichen zu escapen](#escapingspezifische_zeichen) in der URL-Zeichenkette, falls unklar ist, ob das Zeichen verschiedene URL-Komponenten trennt oder Teil eines Musters ist.

### Vererbung von einer Basis-URL

URL-Teile, die spezifischer sind als der am wenigsten spezifische Teil, der in der `url` definiert ist, _können_ von `baseURL` (oder von `input.baseURL` für `input`) geerbt werden.
Intuitiv bedeutet dies, dass wenn der `pathname`-Teil in der Eingabe spezifiziert ist, die Teile zu seiner linken Seite in einer URL von der Basis-URL geerbt werden können (`protocol`, `hostname` und `port`), während die Teile zu seiner rechten Seite nicht (`search` und `hash`) geerbt werden können.
Der `username` und `password` werden nie von der Basis-URL geerbt.

Für weitere Informationen siehe [Vererbung von einer Basis-URL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) im API-Überblick.

### Hostname in `url` oder `baseURL` beeinflusst Standardport

Im Gegensatz zu anderen URL-Teilen kann der Port implizit gesetzt werden, wenn Sie eine `url` oder Basis-URL angeben (entweder im `baseURL`-Parameter oder im Objekt) und nicht explizit einen Port angeben.
In diesem Fall wird der Port auf die leere Zeichenkette (`""`) gesetzt und entspricht dem Standardport (`443`).

Zum Beispiel setzen diese Muster alle das Portmuster auf `""`:

```js
new URLPattern("https://example.com");
new URLPattern("https://example.com*");
new URLPattern("https://example.com/foo");
new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});
```

Wenn Sie den Hostnamen in einer `url` oder `baseURL` nicht angeben, wird der Port standardmäßig auf die Platzhalterzeichenkette (`*`) gesetzt:

```js
new URLPattern({ pathname: "/foo/*" }); // Port omitted, defaults to '*'
```

#### Escapingspezifische Zeichen

Die [Mustersyntax](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) umfasst eine Reihe von Zeichen, die natürlich in URLs vorkommen können, wie zum Beispiel:

- `?` kennzeichnet sowohl ein optionales Zeichen oder eine Gruppe in einem Muster als auch den Suchteil einer URL.
- `:` kennzeichnet den Beginn einer benannten Gruppe in einem Muster und einen Trennzeichen für Benutzernamen und Passwort oder einen Hostnamen und einen Port.

Wenn Sie ein `URLPattern` mit dem [`url`](#url)-Zeichenkettenparameter konstruieren, werden diese Sonderzeichen als Teil der Mustersyntax angenommen (wenn es eine Mehrdeutigkeit gibt).
Wenn Sie die Zeichen verwenden, um Teile der URL darzustellen, müssen Sie sie escapen, indem Sie die Zeichen mit `\\` voranstellen (oder das Problem vermeiden, indem Sie `URLPattern` mit der Objektsyntax konstruieren).

Zum Beispiel escapt das folgende Muster das `?`-Zeichen, wodurch dieses Muster mit einem Such-URL-Teil von "fred" übereinstimmt:

```js
console.log(new URLPattern("https://example.com/*\\?fred"));
```

Ähnlich zeigt das [Match the username and password](#übereinstimmung_des_benutzernamens_und_passworts) Beispiel unten einen Fall, bei dem der `:`-Trennzeichen escapt werden muss.

## Beispiele

### Standardmuster

Dieser Code zeigt, dass URL-Teile, die nicht in einer URL bereitgestellt oder [von einer Basis-URL geerbt werden](#vererbung_von_einer_basis-url), standardmäßig den Platzhalterwert haben.

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

### Übereinstimmung eines Pfadnamens

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
  //More-specific URL parts are discarded
});
```

### Übereinstimmung des Protokolls und Hostnamens

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Übereinstimmung des Benutzernamens und Passworts

Dies setzt die URL-Teile für Benutzername und Passwort mit der Musterzeichenkette.
Beachten Sie, wie der `:`-Trennzeichen escapt werden muss, wenn die Musterzeichenkette verwendet wird.
Ohne dies wäre das Benutzernamenmuster `myusername:mypassword`.

```js
const pattern = new URLPattern(
  "https://myusername\\:mypassword@example.com/some/path",
);

console.log(pattern.username); // "myusername"
console.log(pattern.password); // "mypassword"
```

Aus diesem Grund ist es oft natürlicher (und sicherer), die Objektsyntax zu verwenden.

### Übereinstimmung aller möglichen strukturierten Teile

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

### Fallunempfindliche Übereinstimmung

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Übereinstimmungsvorgänge auf fallunempfindlich für das angegebene Muster um:

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
Der `pathname` ist explizit angegeben. Die Werte, die weniger spezifisch als der Pfadname sind, wie das Protokoll und der Hostname, werden vererbt.
Die spezifischeren Werte werden ignoriert und haben ihre Standardwerte (wie `"*"` für die Suche und den Hash und `""` für den Port).

```js
const pattern = new URLPattern({
  pathname: "/some/path",
  baseURL: "https://myuser:mypass@example.com/mypath?search=1&p=3#fred",
});

console.log(pattern);
//protocol: https
//username: *
//password: *
//hostname: example.com
//port:
//pathname: /some/path
//search: *
//hash: *
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
