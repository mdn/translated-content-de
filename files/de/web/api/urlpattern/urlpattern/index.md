---
title: "URLPattern: URLPattern() Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

Der **`URLPattern()`** Konstruktor gibt ein neues [`URLPattern`](/de/docs/Web/API/URLPattern) Objekt zurück, das die URLs repräsentiert, die mit diesem Muster übereinstimmen werden.

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
  - : Ein Objekt, das separate Eigenschaften zur Definition der [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) hat, die für jeden Teil einer URL verwendet werden.

    Die Objektglieder können beliebig (oder gar nicht) sein:
    - `protocol` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Protokoll](/de/docs/Web/API/URL/protocol) wie `http`, `https` oder `"http{s}?"` (um sowohl https als auch http zu matchen) erfasst.
    - `username` {{Optional_Inline}}
      - : Ein Muster, das einen URL-[Benutzernamen](/de/docs/Web/API/URL/username) erfasst.
    - `password` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Passwort](/de/docs/Web/API/URL/password) erfasst.
    - `hostname` {{Optional_Inline}}
      - : Ein Muster, das einen URL-[Hostname](/de/docs/Web/API/URL/hostname) erfasst.
    - `port` {{Optional_Inline}}
      - : Ein Muster, das einen URL-[Port](/de/docs/Web/API/URL/port) erfasst.
    - `pathname` {{Optional_Inline}}
      - : Ein Muster, das einen URL-[Pfadnamen](/de/docs/Web/API/URL/pathname) erfasst.
    - `search` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Suche](/de/docs/Web/API/URL/search) erfasst.
    - `hash` {{Optional_Inline}}
      - : Ein Muster, das ein URL-[Hash](/de/docs/Web/API/URL/hash) erfasst.
    - `baseURL` {{Optional_Inline}}
      - : Ein String, der eine absolute URL bereitstellt, von der [ungenauere Objekt-Eigenschaften geerbt werden können](#vererbung_von_einer_basis-url).

- `url` {{Optional_Inline}}
  - : Ein String, der URL-Muster zur Übereinstimmung darstellt.

    Dies ist entweder als absolute oder relative URL formatiert, kann jedoch Markup enthalten, um [Übereinstimmungsmuster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) und Escape-Sequenzen anzugeben.
    Wenn es als relative URL formatiert ist, muss [`baseURL`](#baseurl_2) ebenfalls angegeben werden.

- `baseURL` {{Optional_Inline}}
  - : Ein String, der eine absolute URL bereitstellt, von der [nicht festgelegte, weniger spezifische URL-Teile geerbt werden können](#vererbung_von_einer_basis-url).
    Dies muss festgelegt werden, wenn `url` eine relative URL ist und darf nicht festgelegt werden, wenn `input` verwendet wird (`input.baseURL` kann verwendet werden, um vererbte Werte für ein `input` bereitzustellen, ist aber im Gegensatz zu dieser Eigenschaft nie erforderlich).

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen zur Übereinstimmung des gegebenen Musters bereitstellt.
    Die zulässigen Objektmitglieder sind:
    - `ignoreCase` {{Optional_Inline}}
      - : Ermöglicht die groß-/kleinschreibungsunabhängige Übereinstimmung, wenn auf `true` gesetzt.
        Wenn weggelassen oder auf `false` gesetzt, erfolgt die Übereinstimmung unter Berücksichtigung der Groß-/Kleinschreibung.

> [!NOTE]
> Alle URL-Teile in den `input`-Eigenschaften und die `url` sind optional.
> Wenn sie in diesen Parametern nicht angegeben sind, können einige Werte aus der `baseURL` [geerbt](#vererbung_von_einer_basis-url) werden, abhängig davon, welche anderen URL-Teile definiert sind.
> Ausgelassene Teile werden zu Wildcards (`*`) normalisiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Gibt eines der folgenden an:
    - Das angegebene `input`, `url` oder `baseURL` ist nicht gültig oder syntaktisch korrekt.
    - Die angegebene `url` ist relativ, aber es wird keine `baseURL` bereitgestellt, um eine vollständige absolute URL zu bilden.
    - Eine `baseURL` ist angegeben, und input ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beschreibung

Der `URLPattern` Konstruktor kann entweder ein "input"-Objekt oder einen URL-String und optional eine `baseURL` annehmen.
Beide Formen können auch ein Optionsobjekt als Argument enthalten, das zusätzliche Übereinstimmungsoptionen festlegt, wie etwa die Berücksichtigung der Groß-/Kleinschreibung.

```js
new URLPattern(input);
new URLPattern(url, baseURL);
```

Das im ersten Konstruktionstyp verwendete Eingabeobjekt beschreibt die URLs, die durch die Angabe von Mustern für einzelne URL-Teile übereinstimmen sollen: `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` und `baseURL`.
Wenn die `baseURL`-Eigenschaft angegeben wird, wird sie als URL analysiert und kann verwendet werden, um andere Eigenschaften zu ergänzen, die fehlen (siehe den folgenden Abschnitt [Inheritance from a base URL](#vererbung_von_einer_basis-url)).
Eigenschaften, die ausgelassen oder nicht durch die `baseURL`-Eigenschaft ergänzt werden, standardisieren auf den Platzhalterstring (`*`), der gegen jeden entsprechenden Wert in einer URL übereinstimmt.

Der zweite Konstruktionstyp nimmt einen URL-String, der Muster eingebettet in ihm enthalten kann. Der String kann eine absolute oder relative URL angeben — wenn das Muster relativ ist, muss `baseURL` als zweites Argument angegeben werden. Beachten Sie, dass es erforderlich sein kann, [einige Zeichen zu escapen](#escaping_spezieller_zeichen) im URL-String, wenn unklar ist, ob das Zeichen verschiedene URL-Komponenten trennt oder Teil eines Musters ist.

### Vererbung von einer Basis-URL

URL-Teile, die spezifischer als der am wenigsten spezifische Teil in der `url` definiert sind, _können_ von `baseURL` (oder von `input.baseURL` für `input`) geerbt werden.
Intuitiv bedeutet dies, dass, wenn der `pathname`-Teil im Eingabewert angegeben ist, die Teile zur linken Seite in einer URL von der Basis-URL (`protocol`, `hostname` und `port`) geerbt werden können, während die Teile zur rechten Seite (`search` und `hash`) nicht geerbt werden können.
Der `username` und das `password` werden nie von der Basis-URL geerbt.

Für weitere Informationen siehe [Inheritance from a BaseURL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) im API-Überblick.

### Hostname in `url` oder `baseURL` beeinflusst den Standardport

Im Gegensatz zu anderen URL-Teilen kann der Port implizit gesetzt werden, wenn Sie eine `url` oder Basis-URL (entweder im `baseURL`-Parameter oder im Objekt) angeben und keinen Port explizit angeben.
In diesem Fall wird der Port auf den leeren String (`""`) gesetzt und entspricht dem Standardport (`443`).

Zum Beispiel setzen diese Muster alle den Port auf den leeren String (`""`):

```js
new URLPattern("https://example.com");
new URLPattern("https://example.com*");
new URLPattern("https://example.com/foo");
new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});
```

Wenn Sie keinen Hostnamen in einer `url` oder `baseURL` angeben, wird der Port standardmäßig auf den Platzhalterstring (`*`) gesetzt:

```js
new URLPattern({ pathname: "/foo/*" }); // Port omitted, defaults to '*'
```

#### Escaping spezieller Zeichen

Die [Mustersyntax](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält eine Reihe von Zeichen, die natürlich in URLs vorkommen können, wie z.B.:

- `?` gibt sowohl ein optionales Zeichen oder eine Gruppe in einem Muster an und der Suchteil einer URL.
- `:` kennzeichnet den Beginn einer benannten Gruppe in einem Muster und einen Trenner für Benutzername und Passwort oder einen Hostnamen und einen Port.

Wenn Sie einen `URLPattern` mit dem [`url`](#url) Stringparameter konstruieren, werden diese speziellen Zeichen (bei jeglicher Unklarheit) als Teil der Mustersyntax angenommen.
Wenn Sie die Zeichen verwenden, um Teile der URL darzustellen, müssen Sie sie escapen, indem sie ihnen `\\` voranstellen (oder das Problem vermeiden, indem Sie `URLPattern` mit der Objektsyntax konstruieren).

Zum Beispiel entkommt das folgende Muster dem `?`-Zeichen, was dieses Muster dazu bringt, einen search URL-Teil von "fred" zu erfassen:

```js
console.log(new URLPattern("https://example.com/*\\?fred"));
```

Ebenso zeigt das unten stehende [Match the username and password](#den_benutzernamen_und_das_passwort_abgleichen) Beispiel einen Fall, in dem der `:` Trenner escaped werden muss.

## Beispiele

### Standardmuster

Dieser Code zeigt, dass URL-Teile, die in einer URL oder [von einer Basis-URL geerbt werden](#vererbung_von_einer_basis-url), nicht angegeben sind, standardmäßig den Platzhalterwert verwenden.

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

### Ein pathname abgleichen

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

Dies setzt die Benutzername- und Passwort-URL-Teile mit dem Musterstring.
Beachten Sie, wie der `:` Trenner escaped werden muss, wenn der Musterstring verwendet wird.
Ohne dieses wäre das Benutzernamenmuster `myusername:mypassword`.

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

### Groß-/Kleinschreibung ignorierende Übereinstimmung

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Übereinstimmungsoperationen auf Groß-/Kleinschreibung ignorierend für das gegebene Muster:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

### Vererbung von der Basis-URL

Dies bietet ein reales Beispiel der Vererbung.
Das `pathname` ist explizit angegeben. Die Werte, die weniger spezifisch als das pathname sind, wie das Protokoll und der Hostname, werden geerbt.
Die spezifischeren Werte werden ignoriert und setzen auf ihre Standardwerte (wie `"*"` für die Suche und das Hash, und `""` für den Port).

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
