---
title: Clickjacking-Schutz
slug: Web/Security/Practical_implementation_guides/Clickjacking
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die [Content Security Policy](/de/docs/Web/HTTP/CSP)- Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) und der Header [`X-Frame-Options`](/de/docs/Web/HTTP/Headers/X-Frame-Options) bieten Kontrolle darüber, wie Ihre Website innerhalb eines {{htmlelement("iframe")}} auf einer anderen Website eingebettet werden kann. Diese Funktionen helfen, Clickjacking zu verhindern.

## Problem

[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist ein Angriff, bei dem bösartige Websites Benutzer dazu verleiten, auf Links oder UI-Elemente zu klicken, indem sie so erscheinen, als wären sie von einer vertrauten Website, die der Benutzer kennt. Dies wird normalerweise erreicht, indem ein Teil oder die gesamte vertrauenswürdige Website über ein `<iframe>` in die bösartige Website eingebettet wird. Ein Button, Link oder ein anderes UI-Feature wird dann über diesem Inhalt positioniert, um den Benutzer glauben zu lassen, dass er mit seiner vertrauten Website interagiert, während er tatsächlich mit der bösartigen Website interagiert.

## Lösung

Verwenden Sie die HTTP-Header wie erforderlich:

- `Content-Security-Policy: frame-ancestors` wird bevorzugt, da es eine granulare Kontrolle über die Einbettung von Websites bietet. Es wird jedoch nicht in IE11 und früher, vor der Chromium-Version von Edge, Safari 9.1 (Desktop) und Safari 9.2 (iOS) unterstützt.
- `X-Frame-Options` ist weniger granular, wird aber in dem oben genannten älteren Browser-Set unterstützt.

Die Empfehlung ist, beide zu verwenden, es sei denn, Sie wissen, dass Sie keine Unterstützung für das ältere Browser-Set benötigen.

Sie sollten alle Versuche, Ihre Website einzubetten, ablehnen, es sei denn, es ist wirklich erforderlich. Wenn eine Einbettung erforderlich ist, sollten Sie das minimale Erlaubnisniveau bereitstellen, das notwendig ist. Websites, die die Fähigkeit erfordern, in einem `<iframe>` eingebettet zu werden, müssen JavaScript-Abwehrmechanismen und eine robuste {{HTTPHeader("Content-Security-Policy")}} verwenden, um Clickjacking von bösartigen Ursprüngen zu verhindern. [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kann als Teil Ihrer JavaScript-Abwehrmechanismen verwendet werden, um den Benutzer über die Aktion zu informieren, die er ausführt: Siehe [`window.confirm()` Protection](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#windowconfirm-protection).

Die entsprechenden Optionen für jede Einstellung sind wie folgt:

| CSP-Wert                              | `X-Frame-Options` Wert          | Beschreibung                                             |
| ------------------------------------- | ------------------------------- | -------------------------------------------------------- |
| `frame-ancestors 'none'`              | `DENY`                          | Alle Einbettungsversuche ablehnen.                       |
| `frame-ancestors 'self'`              | `SAMEORIGIN`                    | Nur gleichherige Einbettungsversuche zulassen.           |
| `frame-ancestors https://example.org` | `ALLOWFROM https://example.org` | Einbettungsversuche von der angegebenen Domain zulassen. |

> [!NOTE]
> Die Syntax `X-Frame-Options: ALLOWFROM https://example.org` ist veraltet, und die meisten Browser ignorieren sie. Es wird empfohlen, in solchen Fällen `DENY` zu setzen und/oder sich auf das CSP-Äquivalent zu verlassen.

> [!NOTE]
> Das Setzen von Cookies mit der [`SameSite`](/de/docs/Web/Security/Practical_implementation_guides/Cookies#samesite)-Direktive ist ebenfalls nützlich in Clickjacking-Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

## Beispiele

Blockieren Sie die Einbettung der Website, indem Sie `X-Frame-Options` und CSP verwenden:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Erlauben Sie, dass die Website nur auf gleichherigen Seiten eingebettet wird:

```http
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
```

Nur `example.org` darf die Website einbetten:

```http
Content-Security-Policy: frame-ancestors https://example.org
# Block embedding in browsers that don't support CSP2
X-Frame-Options: DENY
```

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf `owasp.org`
- [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) auf `auth0.com` (2020)
