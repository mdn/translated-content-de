---
title: <meta name="referrer">
short-title: referrer
slug: Web/HTML/Reference/Elements/meta/name/referrer
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Der **`referrer`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden.
Wenn angegeben, definieren Sie den Referrer mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element als Schlüsselwortwert.

Zum Beispiel sendet das folgende `<meta>`-Element den {{Glossary("origin", "origin")}} des Dokuments als Referrer:

```html
<meta name="referrer" content="origin" />
```

> [!WARNING]
> Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Referrer-Verhalten unvorhersehbar.
> Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

## Anwendungshinweise

Ein `<meta name="referrer">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Setzt den Dokument-Referrer. Sie müssen dieses Attribut definieren.
    Akzeptiert einen der folgenden Werte:
    - `no-referrer`
      - : Sendet keinen HTTP-`Referer`-Header.
    - `origin`
      - : Sendet den Ursprung des Dokuments.
    - `no-referrer-when-downgrade`
      - : Sendet die volle URL, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), sendet aber keinen Referrer, wenn es weniger sicher ist (HTTPS→HTTP). Dies ist das Standardverhalten.
    - `origin-when-cross-origin`
      - : Sendet die volle URL (ohne Parameter) für Anfragen gleichen Ursprungs, aber nur den Ursprung für andere Fälle.
    - `same-origin`
      - : Sendet die volle URL (ohne Parameter) für Anfragen gleichen Ursprungs. Anfragen von einem anderen Ursprung enthalten keinen Referrer-Header.
    - `strict-origin`
      - : Sendet den Ursprung, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), sendet aber keinen Referrer, wenn es weniger sicher ist (HTTPS→HTTP).
    - `strict-origin-when-cross-origin`
      - : Sendet die volle URL (ohne Parameter) für Anfragen gleichen Ursprungs. Sendet den Ursprung, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS). Andernfalls sendet es keinen Referrer.
    - `unsafe-URL`
      - : Sendet die volle URL (ohne Parameter) für Anfragen gleichen oder anderen Ursprungs.

## Beispiele

### Entfernen eines Referrers aus Anfragen

Das folgende `<meta>`-Element gibt an, dass das Dokument keinen `Referer`-Header mit HTTP-Anfragen vom Dokument senden soll:

```html
<meta name="referrer" content="no-referrer" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP {{httpheader("Referer")}} Header
