---
title: <meta name="referrer">
short-title: referrer
slug: Web/HTML/Reference/Elements/meta/name/referrer
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Der **`referrer`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta#name)-Attribut des {{htmlelement("meta")}}-Elements steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden. Wenn angegeben, definieren Sie den Referrer mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element als Schlüsselwortwert.

Zum Beispiel sendet das folgende `<meta>`-Element den {{Glossary("origin", "Ursprung")}} des Dokuments als Referrer:

```html
<meta name="referrer" content="origin" />
```

> [!WARNING]
> Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Referrer-Verhalten unvorhersehbar.
> Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewendet.

## Verwendungshinweise

Ein `<meta name="referrer">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Legt den Dokument-Referrer fest. Sie müssen dieses Attribut definieren.
    Akzeptiert einen der folgenden Werte:
    - `no-referrer`
      - : Sendet keinen HTTP-`Referer`-Header.
    - `origin`
      - : Sendet den Ursprung des Dokuments.
    - `no-referrer-when-downgrade`
      - : Sendet die vollständige URL, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), sendet jedoch keinen Referrer, wenn es weniger sicher ist (HTTPS→HTTP). Dies ist das Standardverhalten.
    - `origin-when-cross-origin`
      - : Sendet die vollständige URL (ohne Parameter) für gleichherkunftliche Anfragen, sendet jedoch nur den Ursprung in anderen Fällen.
    - `same-origin`
      - : Sendet die vollständige URL (ohne Parameter) für gleichherkunftliche Anfragen. Anfragen zu fremden Ursprüngen enthalten keinen Referrer-Header.
    - `strict-origin`
      - : Sendet den Ursprung, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS), sendet jedoch keinen Referrer, wenn es weniger sicher ist (HTTPS→HTTP).
    - `strict-origin-when-cross-origin`
      - : Sendet die vollständige URL (ohne Parameter) für gleichherkunftliche Anfragen. Sendet den Ursprung, wenn das Ziel mindestens so sicher ist wie die aktuelle Seite (HTTP(S)→HTTPS). Andernfalls wird kein Referrer gesendet.
    - `unsafe-URL`
      - : Sendet die vollständige URL (ohne Parameter) für gleichherkunftliche oder fremdursprüngliche Anfragen.

## Beispiele

### Entfernen eines Referrers aus Anfragen

Das folgende `<meta>`-Element legt fest, dass das Dokument keinen `Referer`-Header mit HTTP-Anfragen vom Dokument senden soll:

```html
<meta name="referrer" content="no-referrer" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP {{httpheader("Referer")}}-Header
