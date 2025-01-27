---
title: Verhinderung von Clickjacking
slug: Web/Security/Practical_implementation_guides/Clickjacking
l10n:
  sourceCommit: 9575597580f8e45b9d097d4bb0e3afa40f935338
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die [Content Security Policy](/de/docs/Web/HTTP/CSP)-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) und der [`X-Frame-Options`](/de/docs/Web/HTTP/Headers/X-Frame-Options)-Header bieten Kontrolle darüber, wie Ihre Seite innerhalb eines {{htmlelement("iframe")}} auf einer anderen Seite eingebettet werden darf. Diese Funktionen helfen, Clickjacking zu verhindern.

## Problem

Bei einem Clickjacking-Angriff täuscht ein Angreifer einen Benutzer dazu, mit einer vertrauenswürdigen Seite in einer Art und Weise zu interagieren, die nicht beabsichtigt war.

Typischerweise erstellt der Angreifer eine Lockvogel-Seite, die die vertrauenswürdige Seite des Benutzers in einem {{htmlelement("iframe")}}-Element einbettet. Die Seite des Angreifers verbirgt das `<iframe>` und richtet einige Lockvogel-Elemente so aus, dass sie an derselben Stelle erscheinen wie Elemente auf der vertrauenswürdigen Seite, die sensible Aktionen ausführen. Wenn der Benutzer versucht, mit den Lockvogel-Elementen zu interagieren, interagiert er stattdessen unbeabsichtigt mit der vertrauenswürdigen Seite und könnte dazu gebracht werden, Handlungen auf der vertrauenswürdigen Seite vorzunehmen, die er nicht beabsichtigt hatte.

Weitere Details finden Sie unter [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking).

## Lösung

Die Hauptlösung gegen Clickjacking besteht darin, zu verhindern, dass die vertrauenswürdige Seite in einem `<iframe>` eingebettet wird. Dafür gibt es zwei Header:

- `Content-Security-Policy: frame-ancestors` wird bevorzugt, da es eine feinere Kontrolle über das Einbetten von Seiten bietet. Es wird jedoch nicht in IE11 und früher, pre-Chromium-Versionen von Edge, Safari 9.1 (Desktop) und Safari 9.2 (iOS) unterstützt.
- `X-Frame-Options` ist weniger granular, wird aber in der oben genannten älteren Browsergruppe unterstützt.

Es wird empfohlen, beide zu verwenden, es sei denn, Sie wissen, dass Sie die Unterstützung für die ältere Browsergruppe nicht benötigen.

Sie sollten alle Versuche, Ihre Seite einzubetten, ablehnen, es sei denn, dies ist unbedingt erforderlich. Wenn die Einbettung erforderlich ist, sollten Sie das minimale erforderliche Einbettungskontingent bereitstellen. Websites, die die Fähigkeit benötigen, in einem `<iframe>` eingebettet zu werden, müssen JavaScript-Verteidigungen und eine robuste {{HTTPHeader("Content-Security-Policy")}} verwenden, um Clickjacking von bösartigen Ursprungsorten zu verhindern. [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kann als Teil Ihrer JavaScript-Verteidigungen verwendet werden, um den Benutzer über die Aktion zu informieren, die er ausführen möchte: Siehe [`window.confirm()` Protection](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#windowconfirm-protection).

Die äquivalenten Optionen für jede Einstellung sind wie folgt:

| CSP-Wert                              | `X-Frame-Options`-Wert          | Beschreibung                                              |
| ------------------------------------- | ------------------------------- | --------------------------------------------------------- |
| `frame-ancestors 'none'`              | `DENY`                          | Alle Einbettungsversuche verweigern.                      |
| `frame-ancestors 'self'`              | `SAMEORIGIN`                    | Nur gleichursprungsbasierte Einbettungsversuche zulassen. |
| `frame-ancestors https://example.org` | `ALLOWFROM https://example.org` | Einbettungsversuche von der angegebenen Domain zulassen.  |

> [!NOTE]
> Die Syntax `X-Frame-Options: ALLOWFROM https://example.org` ist veraltet, und die meisten Browser ignorieren sie. Es wird empfohlen, in solchen Fällen `DENY` festzulegen und/oder sich auf das CSP-Äquivalent zu verlassen.

> [!NOTE]
> Das Setzen von Cookies mit der [`SameSite`](/de/docs/Web/Security/Practical_implementation_guides/Cookies#samesite)-Direktive ist auch in Clickjacking-Fällen nützlich, die davon abhängen, dass der Benutzer authentifiziert ist.

## Beispiele

Blockieren Sie das Einbetten der Seite mit `X-Frame-Options` und CSP:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Erlauben Sie das Einbetten der Seite nur auf gleichursprungsbasierten Seiten:

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

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf `owasp.org`
- [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) auf `auth0.com` (2020)
