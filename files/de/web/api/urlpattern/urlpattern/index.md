---
title: "URLPattern: URLPattern()-Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

Der **`URLPattern()`**-Konstruktor gibt ein neues [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt zurück, das die URLs repräsentiert, die diesem Muster entsprechen.

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
  - : Ein Objekt mit separaten Eigenschaften zum Definieren der [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax), die zum Abgleichen jedes Teils einer URL verwendet werden.

    Die Objektmitglieder können beliebige (oder keine) der folgenden sein:
    - `protocol` {{Optional_Inline}}
      - : Ein Muster, das einem URL-[Protokoll](/de/docs/Web/API/URL/protocol) entspricht, beispielsweise `http`, `https` oder `"http{s}?"` (um sowohl https als auch http abzugleichen).
    - `username` {{Optional_Inline}}
      - : Ein Muster, das einem URL-[Benutzernamen](/de/docs/Web/API/URL/username) entspricht.
    - `password` {{Optional_Inline}}
      - : Ein Muster, das einem URL-[Passwort](/de/docs/Web/API/URL/password) entspricht.
    - `hostname` {{Optional_Inline}}
      - : Ein Muster, das einem URL-[Hostnamen](/de/docs/Web/API/URL/hostname) entspricht.
    - `port` {{Optional_Inline}}
      - : Ein Muster, das einem URL-[Port](/de/docs/Web/API/URL/port) entspricht.
    - `pathname` {{Optional_Inline}}
      - : Ein Muster, das einem URL-[Pfadnamen](/de/docs/Web/API/URL/pathname) entspricht.
    - `search` {{Optional_Inline}}
      - : Ein Muster, das einer URL-[Suchzeichenfolge](/de/docs/Web/API/URL/search) entspricht.
    - `hash` {{Optional_Inline}}
      - : Ein Muster, das einem URL-[Hash](/de/docs/Web/API/URL/hash) entspricht.
    - `baseURL` {{Optional_Inline}}
      - : Eine Zeichenfolge, die eine absolute URL bereitstellt, von der [undefinierte, weniger spezifische Objekteigenschaften geerbt werden können](#vererbung_von_einer_baseurl).

- `url` {{Optional_Inline}}
  - : Eine Zeichenfolge, die abzugleichende URL-Muster repräsentiert.

    Diese ist als absolute oder relative URL formatiert, kann jedoch Markup zur Angabe von [Abgleichmustern](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) und Escape-Sequenzen enthalten.
    Wenn sie als relative URL formatiert ist, muss auch [`baseURL`](#baseurl_2) angegeben werden.

- `baseURL` {{Optional_Inline}}
  - : Eine Zeichenfolge, die eine absolute URL bereitstellt, von der [undefinierte, weniger spezifische URL-Teile geerbt werden können](#vererbung_von_einer_baseurl).
    Dies muss festgelegt werden, wenn `url` eine relative URL ist, und darf nicht festgelegt werden, wenn `input` verwendet wird (`input.baseURL` kann verwendet werden, um geerbte Werte für ein `input` bereitzustellen, ist aber im Gegensatz zu dieser Eigenschaft niemals erforderlich).

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen für den Abgleich mit dem angegebenen Muster bereitstellt.
    Die zulässigen Objektmitglieder sind:
    - `ignoreCase` {{Optional_Inline}}
      - : Aktiviert die Groß-/Kleinschreibungs-unabhängige Suche, wenn der Wert auf `true` gesetzt ist.
        Wenn die Eigenschaft weggelassen oder auf `false` gesetzt wird, berücksichtigt der Abgleich die Groß-/Kleinschreibung.

> [!NOTE]
> Alle URL-Teile in den `input`-Eigenschaften und in `url` sind optional.
> Wenn sie in diesen Parametern nicht angegeben sind, können einige Werte abhängig davon, welche anderen URL-Teile definiert sind, von `baseURL` [geerbt](#vererbung_von_einer_baseurl) werden.
> Weggelassene Teile werden zu Platzhaltern (`*`) normalisiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Weist auf einen der folgenden Fälle hin:
    - Das angegebene `input`, `url` oder `baseURL` ist nicht gültig oder syntaktisch nicht korrekt.
    - Das angegebene `url` ist relativ, es wird jedoch kein `baseURL` bereitgestellt, um eine vollständige absolute URL zu bilden.
    - Ein `baseURL` wird bereitgestellt und die Eingabe ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beschreibung

Der `URLPattern`-Konstruktor kann entweder ein „input“-Objekt oder eine URL-Zeichenfolge und eine optionale baseURL akzeptieren.
Beide Formen können außerdem ein Optionsobjekt als Argument akzeptieren, das zusätzliche Abgleichoptionen wie etwa die Berücksichtigung der Groß-/Kleinschreibung festlegt.

```js
new URLPattern(input);
new URLPattern(url, baseURL);
```

Das beim ersten Konstruktortyp verwendete Eingabeobjekt beschreibt die URLs, die abgeglichen werden sollen, indem Muster für einzelne URL-Teile angegeben werden: `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` und `baseURL`.
Wenn die Eigenschaft `baseURL` bereitgestellt wird, wird sie als URL geparst und kann verwendet werden, um andere fehlende Eigenschaften aufzufüllen (siehe den folgenden Abschnitt [Vererbung von einer Basis-URL](#vererbung_von_einer_baseurl)).
Eigenschaften, die weggelassen oder nicht durch die Eigenschaft `baseURL` ausgefüllt werden, verwenden standardmäßig die Platzhalterzeichenfolge (`*`), die mit jedem entsprechenden Wert in einer URL übereinstimmt.

Der zweite Konstruktortyp akzeptiert eine URL-Zeichenfolge, die darin eingebettete Muster enthalten kann.
Die Zeichenfolge kann eine absolute oder relative URL angeben — wenn das Muster relativ ist, muss `baseURL` als zweites Argument bereitgestellt werden.
Beachten Sie, dass es erforderlich sein kann, [einige Zeichen mit Escape-Zeichen zu versehen](#escape-zeichen_für_sonderzeichen), wenn in der URL-Zeichenfolge nicht eindeutig ist, ob das Zeichen verschiedene URL-Komponenten trennt oder Teil eines Musters ist.

### Vererbung von einer BaseURL

URL-Teile, die spezifischer sind als der am wenigsten spezifische in `url` definierte Teil, _können_ von `baseURL` geerbt werden (oder von `input.baseURL` für `input`).
Intuitiv bedeutet dies, dass, wenn der Teil `pathname` in der Eingabe angegeben ist, die links davon stehenden Teile einer URL von der Basis-URL geerbt werden können (`protocol`, `hostname` und `port`), während die rechts davon stehenden Teile nicht geerbt werden können (`search` und `hash`).
`username` und `password` werden niemals von der Basis-URL geerbt.

Weitere Informationen finden Sie unter [Vererbung von einer BaseURL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in der API-Übersicht.

### Hostname in `url` oder `baseURL` beeinflusst den Standard-Port

Anders als bei anderen URL-Teilen kann der Port implizit festgelegt werden, wenn Sie eine `url` oder Basis-URL angeben (entweder im Parameter `baseURL` oder im Objekt) und keinen Port explizit angeben.
In diesem Fall wird der Port auf die leere Zeichenfolge (`""`) gesetzt und entspricht dem Standard-Port (`443`).

Beispielsweise setzen diese Muster alle das Port-Muster auf `""`:

```js
new URLPattern("https://example.com");
new URLPattern("https://example.com*");
new URLPattern("https://example.com/foo");
new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});
```

Wenn Sie den Hostnamen nicht in einer `url` oder `baseURL` angeben, verwendet der Port standardmäßig die Platzhalterzeichenfolge (`*`):

```js
new URLPattern({ pathname: "/foo/*" }); // Port omitted, defaults to '*'
```

#### Escape-Zeichen für Sonderzeichen

Die [Mustersyntax](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält eine Reihe von Zeichen, die natürlicherweise in URLs vorkommen können, beispielsweise:

- `?` kennzeichnet sowohl ein optionales Zeichen oder eine optionale Gruppe in einem Muster als auch den Suchteil einer URL.
- `:` kennzeichnet den Beginn einer benannten Gruppe in einem Muster und ein Trennzeichen für Benutzername und Passwort oder für Hostname und Port.

Wenn Sie ein `URLPattern` mit dem Zeichenfolgenparameter [`url`](#url) erstellen, wird angenommen, dass diese Sonderzeichen Teil der Mustersyntax sind, falls eine Mehrdeutigkeit besteht.
Wenn Sie die Zeichen zur Darstellung von Teilen der URL verwenden, müssen Sie ihnen Escape-Zeichen voranstellen, indem Sie den Zeichen `\\` voranstellen (oder das Problem vermeiden, indem Sie `URLPattern` mit der Objektsyntax erstellen).

Beispielsweise versieht das folgende Muster das Zeichen `?` mit einem Escape-Zeichen, wodurch dieses Muster einem URL-Suchteil von „fred“ entspricht:

```js
console.log(new URLPattern("https://example.com/*\\?fred"));
```

Ebenso zeigt das nachfolgende Beispiel [Benutzername und Passwort abgleichen](#benutzername_und_passwort_abgleichen) einen Fall, in dem das Trennzeichen `:` mit einem Escape-Zeichen versehen werden muss.

## Beispiele

### Standardmuster

Dieser Code zeigt, dass URL-Teile, die nicht in einer URL angegeben oder [von einer Basis-URL geerbt](#vererbung_von_einer_baseurl) werden, standardmäßig den Platzhalterwert verwenden.

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

### Einen Pfadnamen abgleichen

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

### Protokoll und Hostname abgleichen

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Benutzername und Passwort abgleichen

Dies legt die URL-Teile für Benutzername und Passwort mithilfe der Musterzeichenfolge fest.
Beachten Sie, dass das Trennzeichen `:` bei Verwendung der Musterzeichenfolge mit einem Escape-Zeichen versehen werden muss.
Ohne dies wäre das Benutzernamenmuster `myusername:mypassword`.

```js
const pattern = new URLPattern(
  "https://myusername\\:mypassword@example.com/some/path",
);

console.log(pattern.username); // "myusername"
console.log(pattern.password); // "mypassword"
```

Aus diesem Grund ist es häufig natürlicher (und sicherer), die Objektsyntax zu verwenden.

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

### Abgleich ohne Berücksichtigung der Groß-/Kleinschreibung

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Wenn die Option `ignoreCase` im Konstruktor auf `true` gesetzt wird, werden alle Abgleichoperationen für das angegebene Muster ohne Berücksichtigung der Groß-/Kleinschreibung durchgeführt:

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
Der `pathname` wird explizit angegeben. Die Werte, die weniger spezifisch als der Pfadname sind, etwa das Protokoll und der Hostname, werden geerbt.
Die spezifischeren Werte werden ignoriert und verwenden ihre Standardwerte (etwa `"*"` für Suche und Hash und `""` für den Port).

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

- Ein Polyfill für `URLPattern` ist
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar
