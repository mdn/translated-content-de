---
title: Clickjacking-Prävention
slug: Web/Security/Practical_implementation_guides/Clickjacking
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die [Content Security Policy](/de/docs/Web/HTTP/CSP) Richtlinie [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) und der [`X-Frame-Options`](/de/docs/Web/HTTP/Headers/X-Frame-Options) Header bieten Kontrolle darüber, wie Ihre Website innerhalb eines {{htmlelement("iframe")}} auf einer anderen Website eingebettet werden kann. Diese Funktionen helfen, Clickjacking zu verhindern.

## Problem

[Clickjacking](/de/docs/Glossary/Clickjacking) ist ein Angriff, bei dem bösartige Websites Benutzer dazu verleiten, auf Links oder UI-Elemente zu klicken, indem sie diese so erscheinen lassen, als würden sie zu einer vertrauenswürdigen Website gehören, die dem Benutzer bekannt ist. Dies geschieht in der Regel, indem ein Teil oder die gesamte vertrauenswürdige Website über ein `<iframe>` in die bösartige Website eingebettet wird. Ein Button, Link oder ein anderes UI-Element wird dann über diesem Inhalt positioniert, sodass der Benutzer denkt, er würde mit der vertrauenswürdigen Website interagieren, während er in Wirklichkeit mit der bösartigen Website interagiert.

## Lösung

Verwenden Sie die HTTP-Header wie erforderlich:

- `Content-Security-Policy: frame-ancestors` wird bevorzugt, da es eine feinere Kontrolle über die Website-Einbettung bietet. Es wird jedoch nicht in IE11 und früheren Versionen, vor-Chromium-Versionen von Edge, Safari 9.1 (Desktop) und Safari 9.2 (iOS) unterstützt.
- `X-Frame-Options` ist weniger granular, aber es wird in der älteren Browsersammlung unterstützt, die oben aufgeführt ist.

Es wird empfohlen, beide zu verwenden, es sei denn, Sie wissen, dass Sie keine Unterstützung für die ältere Browsersammlung benötigen.

Sie sollten alle Versuche, Ihre Website einzubetten, ablehnen, es sei denn, dies ist wirklich notwendig. Wenn eine Einbettung erforderlich ist, geben Sie die minimal notwendige Einbettungserlaubnis. Websites, die die Möglichkeit benötigen, in einem `<iframe>` eingebettet zu werden, müssen JavaScript-Verteidigungen und eine robuste {{HTTPHeader("Content-Security-Policy")}} verwenden, um Clickjacking von bösartigen Ursprüngen zu verhindern. [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kann als Teil Ihrer JavaScript-Verteidigungen verwendet werden, um den Benutzer über die Aktion zu informieren, die er ausführen wird: Siehe [`window.confirm()` Protection](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#windowconfirm-protection).

Die entsprechenden Optionen für jede Einstellung sind wie folgt:

| CSP-Wert                             | `X-Frame-Options` Wert         | Beschreibung                                           |
| ------------------------------------- | ------------------------------- | --------------------------------------------------- |
| `frame-ancestors 'none'`              | `DENY`                          | Lehnen Sie alle Einbettungsversuche ab.                        |
| `frame-ancestors 'self'`              | `SAMEORIGIN`                    | Erlauben Sie nur gleiche Ursprungs-Einbettungsversuche.          |
| `frame-ancestors https://example.org` | `ALLOWFROM https://example.org` | Erlauben Sie Einbettungsversuche von der angegebenen Domain. |

> [!NOTE]
> Die Syntax `X-Frame-Options: ALLOWFROM https://example.org` ist veraltet, und die meisten Browser ignorieren sie. Es wird empfohlen, stattdessen `DENY` zu setzen und/oder sich auf das CSP-Äquivalent zu verlassen.

> [!NOTE]
> Das Setzen von Cookies mit der [`SameSite`](/de/docs/Web/Security/Practical_implementation_guides/Cookies#samesite) Direktive ist auch nützlich in Clickjacking-Fällen, die darauf angewiesen sind, dass der Benutzer authentifiziert ist.

## Beispiele

Verhindern Sie die Einbettung der Website, indem Sie `X-Frame-Options` und CSP verwenden:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Erlauben Sie, dass die Website nur auf Seiten mit demselben Ursprung eingebettet wird:

```http
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
```

Erlauben Sie nur `example.org`, die Website einzubetten:

```http
Content-Security-Policy: frame-ancestors https://example.org
# Block embedding in browsers that don't support CSP2
X-Frame-Options: DENY
```

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf `owasp.org`
- [Clickjacking-Angriffe und wie man sie verhindert](https://auth0.com/blog/preventing-clickjacking-attacks/) auf `auth0.com` (2020)
