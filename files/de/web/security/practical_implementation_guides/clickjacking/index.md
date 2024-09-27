---
title: Clickjacking-Schutz
slug: Web/Security/Practical_implementation_guides/Clickjacking
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die [Content Security Policy](/de/docs/Web/HTTP/CSP) Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) und der [`X-Frame-Options`](/de/docs/Web/HTTP/Headers/X-Frame-Options) Header bieten Kontrolle darüber, wie Ihre Seite innerhalb eines {{htmlelement("iframe")}} auf einer anderen Seite eingebettet werden kann. Diese Funktionen helfen, Clickjacking zu verhindern.

## Problem

[Clickjacking](/de/docs/Glossary/Clickjacking) ist ein Angriff, bei dem bösartige Seiten Benutzer dazu bringen, Links oder UI-Elemente anzuklicken, indem sie sie wie eine vertrauenswürdige Seite aussehen lassen, mit der der Benutzer vertraut ist. Dies wird normalerweise dadurch erreicht, dass ein Teil oder die gesamte vertrauenswürdige Seite über ein `<iframe>` in die bösartige Seite eingebettet wird. Ein Button, Link oder anderes UI-Element wird dann über diesem Inhalt positioniert, um den Benutzer glauben zu lassen, dass er mit seiner vertrauenswürdigen Seite interagiert, während er in Wirklichkeit mit der bösartigen Seite interagiert.

## Lösung

Verwenden Sie die erforderlichen HTTP-Header:

- `Content-Security-Policy: frame-ancestors` wird bevorzugt, da es eine detailliertere Kontrolle über das Einbetten von Seiten bietet. Es wird jedoch nicht in IE11 und früheren Versionen, den Vor-Chromium-Versionen von Edge, Safari 9.1 (Desktop) und Safari 9.2 (iOS) unterstützt.
- `X-Frame-Options` ist weniger detailliert, wird jedoch in den oben genannten älteren Browsern unterstützt.

Es wird empfohlen, beide zu verwenden, es sei denn, Sie wissen, dass Sie keine Unterstützung für die älteren Browser benötigen.

Sie sollten alle Versuche, Ihre Seite einzubetten, ablehnen, es sei denn, es ist wirklich erforderlich. Wenn das Einbetten erforderlich ist, gewähren Sie die minimale Einbettungserlaubnis, die notwendig ist. Seiten, die die Möglichkeit erfordern, in einem `<iframe>` eingebettet zu werden, müssen JavaScript-Abwehrmaßnahmen und eine robuste {{HTTPHeader("Content-Security-Policy")}} verwenden, um Clickjacking von bösartigen Ursprüngen zu verhindern. [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kann als Teil Ihrer JavaScript-Abwehrmaßnahmen verwendet werden, um den Benutzer über die Aktion zu informieren, die er auszuführen beabsichtigt: siehe [`window.confirm()` Protection](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#windowconfirm-protection).

Die entsprechenden Optionen für jede Einstellung sind wie folgt:

| CSP-Wert                              | `X-Frame-Options` Wert          | Beschreibung                                             |
| ------------------------------------- | ------------------------------- | -------------------------------------------------------- |
| `frame-ancestors 'none'`              | `DENY`                          | Alle Einbettungsversuche ablehnen.                       |
| `frame-ancestors 'self'`              | `SAMEORIGIN`                    | Nur Einbettungsversuche aus derselben Quelle zulassen.   |
| `frame-ancestors https://example.org` | `ALLOWFROM https://example.org` | Einbettungsversuche von der angegebenen Domain zulassen. |

> [!NOTE]
> Die Syntax `X-Frame-Options: ALLOWFROM https://example.org` ist veraltet, und die meisten Browser ignorieren sie. Es wird empfohlen, stattdessen `DENY` einzustellen und/oder sich auf das CSP-Äquivalent zu verlassen.

> [!NOTE]
> Das Setzen von Cookies mit der [`SameSite`](/de/docs/Web/Security/Practical_implementation_guides/Cookies#samesite) Direktive ist auch nützlich in Clickjacking-Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

## Beispiele

Blockieren Sie die Einbettung der Seite mit `X-Frame-Options` und CSP:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Erlauben Sie die Einbettung der Seite nur auf gleichstufigen Seiten:

```http
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
```

Erlauben Sie nur `example.org`, die Seite einzubetten:

```http
Content-Security-Policy: frame-ancestors https://example.org
# Block embedding in browsers that don't support CSP2
X-Frame-Options: DENY
```

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf `owasp.org`
- [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) auf `auth0.com` (2020)
