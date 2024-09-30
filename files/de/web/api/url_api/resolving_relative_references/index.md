---
title: Auflösen relativer Verweise auf eine URL
slug: Web/API/URL_API/Resolving_relative_references
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("URL API")}}

Der [`URL()` Konstruktor](/de/docs/Web/API/URL/URL) oder die statische Methode [`URL.parse()`](/de/docs/Web/API/URL/parse_static) der [URL API](/de/docs/Web/API/URL_API) können verwendet werden, um einen relativen Verweis und eine Basis-URL zu einer absoluten URL aufzulösen.

Beide Methoden nehmen bis zu zwei Zeichenfolgenargumente und geben ein [`URL()`](/de/docs/Web/API/URL) Objekt zurück, das eine absolute URL darstellt. Das erste Argument stellt entweder eine absolute URL oder einen relativen Verweis auf eine URL dar, während das zweite eine Basis-URL ist, die zum Auflösen des relativen Verweises verwendet wird, falls einer im ersten Argument angegeben ist. Die Methoden lösen den relativen Verweis auf die gleiche Weise auf, außer dass der `URL()` Konstruktor eine Ausnahme auslöst, wenn ungültige URLs übergeben werden, während `parse()` `null` zurückgibt.

Der untenstehende Code zeigt, wie die Methoden mit denselben `url` und `base` URL-Werten verwendet werden.

```js
const url = "articles";
const base = "https://developer.mozilla.org/some/path";
const constructorResult = new URL(url, base);
// => https://developer.mozilla.org/some/articles
const parseResult = URL.parse(url, base);
// => https://developer.mozilla.org/some/articles
```

Sie können aus dem Beispiel sehen, dass das Auflösen der `URL` aus einer angegebenen Basis-URL und einem relativen Verweis nicht einfach eine Verkettung der angegebenen Parameter ist.

In diesem Fall wird ein Pfad relativ zum aktuellen Verzeichnis übergeben (`articles`). Das aktuelle Verzeichnis der `base` URL ist der URL-String bis zum letzten Schrägstrich. Hier hat `https://developer.mozilla.org/some/path` keinen abschließenden Schrägstrich, sodass das aktuelle Verzeichnis `https://developer.mozilla.org/some/` ist und somit zu einer endgültigen URL von `https://developer.mozilla.org/some/articles` aufgelöst wird.

Relative Verweise werden gegen die Basis-URL unter Verwendung eines Pfadverweises aufgelöst, der relativ ist zu: dem aktuellen Verzeichnis (`./`), dem übergeordneten Verzeichnis des aktuellen Verzeichnisses (`../`) oder dem Site-Root (`/`). Die folgenden Abschnitte zeigen, wie die Auflösung für jeden Typ von relativem Pfad funktioniert.

## Aktuelles Verzeichnis relativ

Ein relativer Verweis, der mit `./` oder ohne Präfix, wie `./article`, `article` oder `./article/`, versehen ist, bezieht sich auf das aktuelle Verzeichnis der URL, das durch das `base`-Argument dargestellt wird.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 90px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Das aktuelle Verzeichnis der `base` URL ist der URL-String bis zum letzten Schrägstrich, der für beide `base`-Strings im untenstehenden Codeblock `https://test.example.org/api/` ist. Die aktuelle Verzeichnis relative Referenz `article` wird daran angehängt und wird zu `https://test.example.org/api/article` aufgelöst.

```js
log(new URL("./article", "https://test.example.org/api/").href);
// => https://test.example.org/api/article
log(new URL("article", "https://test.example.org/api/v1").href);
// => https://test.example.org/api/article
```

Ebenso haben beide Basis-URL-Strings unten ein aktuelles Verzeichnis von `https://test.example.org/api/v2/`. Wir hängen `story/` und `story` daran an, um die endgültige URL aufzulösen.

```js
log(new URL("./story/", "https://test.example.org/api/v2/").href);
// => https://test.example.org/api/v2/story/
log(new URL("./story", "https://test.example.org/api/v2/v3").href);
// => https://test.example.org/api/v2/story
```

{{EmbedLiveSample('Aktuelles Verzeichnis relativ', '100%', '140px')}}

## Übergeordnetes Verzeichnis relativ

Ein relativer Verweis, der mit `../` versehen ist, wie `../path`, bezieht sich auf das _übergeordnete_ Verzeichnis des aktuellen Verzeichnisses der URL, das durch das `base`-Argument dargestellt wird. Jede Instanz von `../` entfernt einen Ordner aus dem aktuellen Verzeichnis, und dann wird der nachfolgende Text von `../` an den verbleibenden Basispfad angehängt. Sie können durch Angabe von `../` mehrfach zu den übergeordneten Verzeichnissen navigieren, jedoch nur bis zur Site-Root-Ebene.

Zum Beispiel, bei einer Basis-URL `https://test.example.com/test/api/v1/` und einer pfadabhängigen URL von `../some/path`, ist das aktuelle Verzeichnis `https://test.example.com/test/api/v1/`, das übergeordnete Verzeichnis ist `https://test.example.com/test/api/`, und die aufgelöste absolute URL ist `https://test.example.com/test/api/some/path`.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Die folgenden Beispiele demonstrieren dies genauer. In allen Fällen ist das aktuelle Verzeichnis `https://test.example.org/api/v1/v2/` (im zweiten Fall ist `v3` nach dem letzten Schrägstrich), wobei jeder relative Verweis zu einem anderen übergeordneten Verzeichnis aufgelöst wird.

```js
log(new URL("../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/api/v1/path
log(new URL("../../path", "https://test.example.org/api/v1/v2/v3").href);
// => https://test.example.org/api/path
log(new URL("../../../../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/path
```

{{EmbedLiveSample('Übergeordnetes Verzeichnis relativ', '100%')}}

## Root relativ

Ein relativer Verweis, der mit `/` versehen ist, wie `/path`, bezieht sich auf das Site-Root der URL, die im `base`-Argument angegeben ist. Zum Beispiel wird bei einer Basis-URL von `https://test.example.com/api/v1` die aufgelöste URL für die root-relative URL `/some/path` zu `https://test.example.com/some/path`.

> [!NOTE]
> Der Pfadteil der `base` URL spielt keine Rolle beim Auflösen von root-relativen URLs.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Unten sind einige weitere Beispiele.

```js
log(new URL("/some/path", "https://test.example.org/api/").href);
// => https://test.example.org/some/path
log(new URL("/", "https://test.example.org/api/v1/").href);
// => https://test.example.org/
log(new URL("/article", "https://example.com/api/v1/").href);
// => https://example.com/article
```

{{EmbedLiveSample('Root relativ', '100%')}}

## Siehe auch

- [RFC 3986 - Relative Resolution](https://datatracker.ietf.org/doc/html/rfc3986.html#section-5.2), die Spezifikation für das Auflösen von Basis- und relativen URLs
