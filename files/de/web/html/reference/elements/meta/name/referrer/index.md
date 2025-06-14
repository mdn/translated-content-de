---
title: <meta name="referrer">
short-title: referrer
slug: Web/HTML/Reference/Elements/meta/name/referrer
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{HTMLSidebar}}

Der **`referrer`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden.
Falls angegeben, definieren Sie den Referrer mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element als Schlüsselwortwert.

Zum Beispiel sendet das folgende `<meta>`-Element den {{Glossary("origin", "origin")}} des Dokuments als Referrer:

```html
<meta name="referrer" content="origin" />
```

> [!WARNING]
> Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Referrer-Verhalten unvorhersehbar.
> Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

## Nutzungshinweise

Ein `<meta name="referrer">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Legt den Referrer des Dokuments fest. Sie müssen dieses Attribut definieren.
    Akzeptiert einen der folgenden Werte:
    - `no-referrer`
      - : Sendet keinen HTTP-`Referer`-Header.
    - `origin`
      - : Sendet den Ursprung des Dokuments.
    - `no-referrer-when-downgrade`
      - : Sendet die vollständige URL, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), aber sendet keinen Referrer, wenn es weniger sicher ist (HTTPS→HTTP). Dies ist das Standardverhalten.
    - `origin-when-cross-origin`
      - : Sendet die vollständige URL (ohne Parameter) für gleich-originierte Anfragen, sendet aber nur den Ursprung in anderen Fällen.
    - `same-origin`
      - : Sendet die vollständige URL (ohne Parameter) für gleich-originierte Anfragen. Bei Cross-Origin-Anfragen wird kein Referrer-Header enthalten sein.
    - `strict-origin`
      - : Sendet den Ursprung, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), aber sendet keinen Referrer, wenn es weniger sicher ist (HTTPS→HTTP).
    - `strict-origin-when-cross-origin`
      - : Sendet die vollständige URL (ohne Parameter) für gleich-originierte Anfragen. Sendet den Ursprung, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS). Andernfalls wird kein Referrer gesendet.
    - `unsafe-URL`
      - : Sendet die vollständige URL (ohne Parameter) für gleich-originierte oder Cross-Origin-Anfragen.

## Beispiele

### Einen Referrer von Anfragen entfernen

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
