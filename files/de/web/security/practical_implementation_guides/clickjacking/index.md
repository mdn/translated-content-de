---
title: Schutz vor Clickjacking
slug: Web/Security/Practical_implementation_guides/Clickjacking
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) und der [`X-Frame-Options`](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)-Header bieten Kontrolle darüber, wie Ihre Website innerhalb eines {{htmlelement("iframe")}} auf einer anderen Website eingebettet werden darf. Diese Funktionen helfen, Clickjacking zu verhindern.

## Problem

Bei einem Clickjacking-Angriff täuscht ein Angreifer den Benutzer dazu, mit einer vertrauenswürdigen Website auf eine Weise zu interagieren, die nicht beabsichtigt war.

Typischerweise erstellt der Angreifer eine Schein-Website, die die vertrauenswürdige Website des Benutzers innerhalb eines {{htmlelement("iframe")}}-Elements einbettet. Die Angreifer-Website verbirgt das `<iframe>` und richtet einige Schein-Elemente so aus, dass sie an derselben Stelle wie Elemente der vertrauenswürdigen Website erscheinen, die sensible Aktionen ausführen. Wenn der Benutzer versucht, mit den Schein-Elementen zu interagieren, interagiert er unabsichtlich mit der vertrauenswürdigen Website und kann dazu verleitet werden, unerwünschte Aktionen mit der vertrauenswürdigen Website auszuführen.

Weitere Details finden Sie unter [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking).

## Lösung

Die Hauptlösung für Clickjacking besteht darin, zu verhindern, dass die vertrauenswürdige Website in ein `<iframe>` eingebettet wird. Es gibt zwei Header, die hierfür verwendet werden können:

- `Content-Security-Policy: frame-ancestors` wird bevorzugt, da es eine granularere Kontrolle über das Einbetten von Websites bietet. Es wird jedoch in IE11 und früheren Versionen, älteren Edge-Versionen (vor Chromium), Safari 9.1 (Desktop) und Safari 9.2 (iOS) nicht unterstützt.
- `X-Frame-Options` ist weniger granular, aber es wird von den oben genannten älteren Browsern unterstützt.

Es wird empfohlen, beide zu verwenden, es sei denn, Sie wissen, dass Sie die Unterstützung für das ältere Browserset nicht benötigen.

Sie sollten alle Einbettungsversuche Ihrer Website ablehnen, es sei denn, Sie benötigen dies wirklich. Wenn Einbettung erforderlich ist, geben Sie die minimal notwendige Einbettungserlaubnis. Websites, die die Einbettung in ein `<iframe>` benötigen, müssen JavaScript-Verteidigungsmaßnahmen und eine robuste {{HTTPHeader("Content-Security-Policy")}} verwenden, um Clickjacking von bösartigen Ursprüngen zu verhindern. [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kann als Teil Ihrer JavaScript-Verteidigungsmaßnahmen genutzt werden, um den Benutzer über die Aktion zu informieren, die er auszuführen beabsichtigt: Siehe [`window.confirm()` Protection](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#windowconfirm-protection).

Die gleichwertigen Optionen für jede Einstellung sind wie folgt:

| CSP-Wert                              | `X-Frame-Options`-Wert          | Beschreibung                                             |
| ------------------------------------- | ------------------------------- | -------------------------------------------------------- |
| `frame-ancestors 'none'`              | `DENY`                          | Verweigern aller Einbettungsversuche.                    |
| `frame-ancestors 'self'`              | `SAMEORIGIN`                    | Nur gleich-herkömmlichen Einbettungsversuche erlauben.   |
| `frame-ancestors https://example.org` | `ALLOWFROM https://example.org` | Einbettungsversuche von der angegebenen Domain erlauben. |

> [!NOTE]
> Die Syntax `X-Frame-Options: ALLOWFROM https://example.org` ist veraltet, und die meisten Browser ignorieren sie. Sie werden empfohlen, in solchen Fällen `DENY` festzulegen und/oder sich auf das CSP-Äquivalent zu verlassen.

> [!NOTE]
> Das Setzen von Cookies mit der [`SameSite`](/de/docs/Web/Security/Practical_implementation_guides/Cookies#samesite)-Direktive ist ebenfalls nützlich in Clickjacking-Fällen, die darauf basieren, dass der Benutzer authentifiziert ist.

## Beispiele

Blockieren Sie die Einbettung der Website, indem Sie `X-Frame-Options` und CSP verwenden:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Erlauben Sie die Einbettung der Website nur auf gleich-herkömmlichen Seiten:

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

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf `owasp.org`
- [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) auf `auth0.com` (2020)
