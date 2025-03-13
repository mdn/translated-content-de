---
title: Schutz vor Clickjacking
slug: Web/Security/Practical_implementation_guides/Clickjacking
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) und der Header [`X-Frame-Options`](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options) bieten Kontrolle darüber, wie Ihre Website innerhalb eines {{htmlelement("iframe")}} auf einer anderen Seite eingebettet werden darf. Diese Funktionen helfen, Clickjacking zu verhindern.

## Problem

Bei einem Clickjacking-Angriff täuscht ein Angreifer einen Benutzer dazu, mit einer vertrauenswürdigen Website auf eine Weise zu interagieren, die er nicht beabsichtigt hat.

Typischerweise erstellt der Angreifer eine Scheinseite, die die vertrauenswürdige Seite des Benutzers innerhalb eines {{htmlelement("iframe")}}-Elements einbettet. Die Seite des Angreifers verbirgt das `<iframe>` und richtet einige Scheinelemente so aus, dass sie an derselben Stelle erscheinen wie Elemente auf der vertrauenswürdigen Seite, die sensible Aktionen ausführen. Wenn der Benutzer versucht, mit den Scheinelementen zu interagieren, interagiert er unwissentlich mit der vertrauenswürdigen Seite und kann dazu verleitet werden, ungewollte Aktionen auf der vertrauenswürdigen Seite auszuführen.

Siehe [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) für weitere Details.

## Lösung

Die Hauptlösung gegen Clickjacking besteht darin, die Einbettung der vertrauenswürdigen Seite in ein `<iframe>` zu verhindern. Es gibt zwei Header, die dafür verwendet werden können:

- `Content-Security-Policy: frame-ancestors` ist vorzuziehen, da es eine feinere Kontrolle über die Einbettung der Seite bietet. Es wird jedoch nicht in IE11 und früheren Versionen, vor-Chromium-Versionen von Edge, Safari 9.1 (Desktop) und Safari 9.2 (iOS) unterstützt.
- `X-Frame-Options` ist weniger granular, wird jedoch in den älteren oben genannten Browser-Versionen unterstützt.

Es wird empfohlen, beide zu verwenden, es sei denn, Sie wissen, dass Sie die Unterstützung für die älteren Browser-Versionen nicht benötigen.

Sie sollten alle Versuche, Ihre Seite einzubetten, ablehnen, es sei denn, es ist wirklich notwendig. Wenn eine Einbettung erforderlich ist, geben Sie das minimale erforderliche Einbettungsrecht vor. Websites, die die Fähigkeit benötigen, in ein `<iframe>` eingebettet zu werden, müssen JavaScript-Abwehrmechanismen und eine robuste {{HTTPHeader("Content-Security-Policy")}} einsetzen, um Clickjacking von bösartigen Quellen zu verhindern. [`Window.confirm()`](/de/docs/Web/API/Window/confirm) kann als Teil Ihrer JavaScript-Abwehrmechanismen verwendet werden, um den Benutzer über die Aktion zu informieren, die er auszuführen im Begriff ist: Siehe [`window.confirm()` Protection](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#windowconfirm-protection).

Die gleichwertigen Optionen für jede Einstellung sind wie folgt:

| CSP-Wert                              | `X-Frame-Options`-Wert          | Beschreibung                                             |
| ------------------------------------- | ------------------------------- | -------------------------------------------------------- |
| `frame-ancestors 'none'`              | `DENY`                          | Alle Einbettungsversuche ablehnen.                       |
| `frame-ancestors 'self'`              | `SAMEORIGIN`                    | Nur gleiche Ursprungs-Einbettungsversuche zulassen.      |
| `frame-ancestors https://example.org` | `ALLOWFROM https://example.org` | Einbettungsversuche von der angegebenen Domäne zulassen. |

> [!NOTE]
> Die Syntax `X-Frame-Options: ALLOWFROM https://example.org` ist veraltet, und die meisten Browser ignorieren sie. Es wird empfohlen, in solchen Fällen `DENY` festzulegen und/oder sich auf das CSP-Äquivalent zu verlassen.

> [!NOTE]
> Das Setzen von Cookies mit der [`SameSite`](/de/docs/Web/Security/Practical_implementation_guides/Cookies#samesite)-Direktive ist ebenfalls nützlich in Clickjacking-Fällen, die davon abhängen, dass der Benutzer authentifiziert ist.

## Beispiele

Verhindern Sie, dass die Seite eingebettet wird, indem Sie `X-Frame-Options` und CSP verwenden:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Zulassen, dass die Seite nur auf Seiten mit dem gleichen Ursprung eingebettet wird:

```http
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
```

Nur `example.org` darf die Seite einbetten:

```http
Content-Security-Policy: frame-ancestors https://example.org
# Block embedding in browsers that don't support CSP2
X-Frame-Options: DENY
```

## Siehe auch

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf `owasp.org`
- [Clickjacking-Angriffe und wie Sie sie verhindern können](https://auth0.com/blog/preventing-clickjacking-attacks/) auf `auth0.com` (2020)
