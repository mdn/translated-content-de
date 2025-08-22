---
title: "URLPattern: exec() Methode"
short-title: exec()
slug: Web/API/URLPattern/exec
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`exec()`**-Methode der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle nimmt eine URL oder ein Objekt mit URL-Teilen und gibt entweder ein Objekt zurück, das die Ergebnisse des Abgleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem Muster übereinstimmt.

## Syntax

```js-nolint
exec(input)
exec(url)
exec(url, baseURL)
```

### Parameter

- `input`
  - : Ein Objekt, das die einzelnen URL-Teile bereitstellt.
    Die Objektmitglieder können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein.
- `url`
  - : Ein String, der eine absolute oder relative URL definiert.
    Wenn eine relative URL angegeben wird, muss auch [`baseURL`](#baseurl) bereitgestellt werden, und zusammen müssen sie zu einer absoluten URL aufgelöst werden.
    Wenn die Eingabe nicht geparst werden kann oder eine relative URL ohne Basis-URL angegeben wird, gibt die Methode `false` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet werden soll, in denen [`url`](#url) eine relative URL ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.
    Wenn angegeben, die Basis-URL jedoch nicht geparst werden kann, gibt die Methode `false` zurück.

URL-Teile, die nicht in der `url`/`input` angegeben sind, können in einigen Fällen [von einer Basis-URL geerbt werden](#vererbung_von_einer_basis-url).
Nicht angegebene Teile werden als leere Zeichenfolgen behandelt.

### Rückgabewert

Ein {{jsxref("object")}}, das die übereinstimmenden Elemente und Gruppen definiert, oder `null`, wenn die übergebenen Eingaben nicht mit dem Muster übereinstimmen.

Das Objekt hat die folgenden Eigenschaften:

- `inputs`
  - : Ein Array, das die an die `exec()`-Funktion übergebenen Eingaben enthält.
    Dies enthält entweder ein übergebenes `input`-Objekt, einen absoluten `url`-String oder eine relative `url` und eine `baseURL`.

- `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search` und `hash`
  - : Benannte Eigenschaften für jeden URL-Teil.
    Jede Eigenschaft enthält ein Objekt mit den folgenden Eigenschaften:
    - `input`
      - : Der Teil der Eingabe, der der aktuellen URL-Teil-Eigenschaft entspricht (welcher mit dem Muster übereinstimmen muss).
        Dies könnte die leere Zeichenfolge (`""`) sein.
    - `groups`
      - : Ein Objekt mit Eigenschaften für jede Übereinstimmungsgruppe im URL-Teil (falls vorhanden) und den entsprechenden übereinstimmenden Werten in den Eingaben.
        Die Gruppeneigenschaften sind von 0 für unbenannte Übereinstimmungsgruppen (wie das Platzhalterzeichen) durchnummeriert.
        Bei benannten Übereinstimmungsgruppen ist der Eigenschaftsname der Gruppenname.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Zeigt an, dass eine `baseURL` bereitgestellt wird, wenn ein [`input`](#input)-Objekt übergeben wird (sie sollte nur mit dem `url`-String übergeben werden).

## Beschreibung

Die Methode wird auf einem [`URLPattern`](/de/docs/Web/API/URLPattern) aufgerufen und spezifiziert eine Eingabe-URL als String mit einer optionalen Basis-URL oder als Objekt mit Eigenschaften für jeden URL-Teil.

Die Methode gibt ein Objekt zurück, das die Ergebnisse des Abgleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem Muster übereinstimmt.
Es gibt auch `null` zurück, wenn eine relative `url` übergeben wird, aber `baseURL` nicht angegeben ist (eine absolute Test-URL kann nicht aufgelöst werden).
Beachten Sie, dass bei der Übergabe eines `input`-Objekts `input.baseURL` immer optional ist.

### Vererbung von einer Basis-URL

URL-Teile, die spezifischer sind als der unspezifischste Teil, der in der `url` definiert ist, können von `baseURL` (oder von `input.baseURL` für `input`) geerbt werden.
Intuitiv bedeutet dies, dass, wenn der `pathname`-Teil in der Eingabe angegeben ist, die Teile links davon in einer URL von der Basis-URL geerbt werden können (`protocol`, `hostname` und `port`), während die Teile rechts davon nicht (`search` und `hash`).
Der `username` und das `password` werden niemals von einer Basis-URL geerbt.

Weitere Informationen finden Sie unter [Inheritance from a BaseURL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) im API-Überblick.

## Beispiele

Die Beispiele zeigen, wie die `exec()`-Methode verwendet wird, um eine URL mit einem Muster abzugleichen.

### Abgleich einer absoluten URL

Zuerst definieren wir das Muster, das zum Abgleichen von URLs verwendet wird.
Dieses Muster entspricht URLs, die entweder das Protokoll `http` oder `https` haben, Subdomänen von `.example.com` sind und einen Pfad haben, der `/books/` ist, gefolgt von einem beliebigen Wert.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Als nächstes testen wir die URL-Zeichenfolge `"https://store.example.com/books/123"` gegen dieses Muster und protokollieren dann separat die Objekte für jede Eigenschaft.
Beachten Sie, dass das `input` die Eingabe in der URL zeigt, die mit dem Muster übereinstimmt.
In vielen Fällen ist dies die leere Zeichenfolge (`""`), da die Eingabe-URL den bestimmten URL-Teil nicht spezifiziert (dies entspricht dem Muster, da es standardmäßig ein Platzhalterzeichen für nicht spezifizierte URL-Teile verwendet).

```js
let match = pattern.exec("https://store.example.com/books/123");

console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {"0": ""} }
console.log(match.password); // { input: "", groups: {"0": ""} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "id": "123" } }
console.log(match.search); // { input: "", groups: {"0": ""} }
console.log(match.hash); // { input: "", groups: {"0": ""} }
```

Beachten Sie auch, wie die `pathname`-Eingabe `"/books/123"` mit dem Muster `/books/:id` übereinstimmt und `groups` eine benannte Eigenschaft `id` enthält, die den übereinstimmenden Wert in der Eingabe enthält.

### Abgleich einer relativen URL

Dieses Beispiel verwendet dasselbe Muster wie zuvor, um es mit einer Anzahl von relativen URLs und ihren entsprechenden Basis-URLs abzugleichen.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Der folgende Code stimmt mit effektiv derselben absoluten URL wie im vorherigen Beispiel überein, jedoch aufgeteilt in eine relative `url`-Zeichenfolge und eine Basis-URL.
Das zurückgegebene Objekt unterscheidet sich nur bei den `inputs`:

```js
match = pattern.exec("/books/123", "http://store.example.com"); // returns object
console.log(match.inputs); // ['/books/123', 'https://store.example.com']
```

Die beiden folgenden Beispiele geben jeweils `null` zurück.
Das erste Beispiel stimmt nicht überein, weil die relative URL und die Basis-URL nicht zu einer gültigen absoluten URL aufgelöst werden.
Das zweite Beispiel stimmt nicht überein, weil keine Basis-URL bereitgestellt wird.

```js
pattern.exec("/books/123", "data:text/plain,hello world!"); // returns null
pattern.exec("/books/123"); // returns null
```

### Abgleich mit einem URL-Objekt

Dieses Beispiel verwendet dasselbe Muster wie zuvor, um es mit einer Anzahl von URLs abzugleichen, die als strukturierte Objekte definiert sind.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Dieser Code testet gegen dieselbe URL, die im vorherigen Beispiel [Abgleich einer absoluten URL](#abgleich_einer_absoluten_url) verwendet wurde.
In diesem Fall wird sie jedoch als strukturiertes Objekt übergeben.
Da es sich um dieselbe URL handelt, ändert sich nur, dass das `inputs`-Eigenschaftsarray das unten übergebene Objekt enthält.

```js
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns object
```

Der folgende Code stimmt auch überein, aber diesmal wird das `protocol` als `http` geerbt von der `baseURL`.
Das zurückgegebene Objekt wäre ähnlich, außer für das `protocol.input`, das `http` wäre, und das `inputs`-Array würde das übergebene Objekt entsprechen.

```js
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // returns object
```

Der folgende Code stimmt nicht überein, weil das Protokoll `file` nicht eine der im Muster angegebenen Optionen (`http` oder `https`) ist.
Dies gibt `null` zurück.

```js
pattern.exec({
  protocol: "file",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
