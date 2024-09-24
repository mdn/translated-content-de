---
title: Schutz vor Clickjacking
slug: Web/Security/Practical_implementation_guides/Clickjacking
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die [Content Security Policy](/de/docs/Web/HTTP/CSP) Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) und der Header [`X-Frame-Options`](/de/docs/Web/HTTP/Headers/X-Frame-Options) bieten Kontrolle darüber, wie Ihre Website in einem {{htmlelement("iframe")}} auf einer anderen Seite eingebettet werden kann. Diese Funktionen helfen, Clickjacking zu verhindern.

## Problem

[Clickjacking](/de/docs/Glossary/Clickjacking) ist ein Angriff, bei dem bösartige Websites Benutzer dazu bringen, auf Links oder UI-Elemente zu klicken, indem sie diese so erscheinen lassen, als wären sie von einer vertrauenswürdigen Seite, die dem Benutzer bekannt ist. Dies wird in der Regel durch Einbetten von Teilen oder der gesamten vertrauenswürdigen Seite in die bösartige Seite über ein `<iframe>` erreicht. Ein Button, Link oder ein anderes UI-Feature wird dann auf diesem Inhalt positioniert, sodass der Benutzer denkt, er interagiere mit seiner vertrauenswürdigen Seite, während er in Wirklichkeit mit der bösartigen Seite interagiert.

## Lösung

Verwenden Sie die HTTP-Header nach Bedarf:

- `Content-Security-Policy: frame-ancestors` wird bevorzugt, da es eine differenziertere Kontrolle über die Einbettung der Seite bietet. Es wird jedoch nicht in IE11 und früheren Versionen, Pre-Chromium-Versionen von Edge, Safari 9.1 (Desktop) und Safari 9.2 (iOS) unterstützt.
- `X-Frame-Options` ist weniger differenzierter, wird jedoch in den oben genannten älteren Browsern unterstützt.

Die Empfehlung ist, beide zu verwenden, es sei denn, Sie wissen, dass Sie keine Unterstützung für die älteren Browser benötigen.

Sie sollten alle Einbettungsversuche ablehnen, es sei denn, Sie benötigen sie wirklich. Wenn das Einbetten erforderlich ist, gewähren Sie das minimal notwendige Einbettungsrecht. Websites, die die Möglichkeit haben müssen, in einem `<iframe>` eingebettet zu werden, müssen JavaScript-Abwehrmechanismen und eine robuste {{HTTPHeader("Content-Security-Policy")}} verwenden, um Clickjacking aus bösartigen Ursprüngen zu verhindern. {{domxref("Window.confirm()")}} kann als Teil Ihrer JavaScript-Abwehr verwendet werden, um den Benutzer über die Aktion zu informieren, die er ausführen wird: Siehe [`window.confirm()`-Schutz](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#windowconfirm-protection).

Die entsprechenden Optionen für jede Einstellung lauten wie folgt:

| CSP-Wert                               | `X-Frame-Options`-Wert          | Beschreibung                                          |
| -------------------------------------- | ------------------------------- | ----------------------------------------------------- |
| `frame-ancestors 'none'`               | `DENY`                          | Ablehnung aller Einbettungsversuche.                  |
| `frame-ancestors 'self'`               | `SAMEORIGIN`                    | Nur gleichartige Einbettungsversuche erlauben.        |
| `frame-ancestors https://example.org`  | `ALLOWFROM https://example.org` | Einbettungsversuche von der angegebenen Domain erlauben.|

> [!NOTE]
> Die Syntax `X-Frame-Options: ALLOWFROM https://example.org` ist veraltet, und die meisten Browser ignorieren sie. Es wird empfohlen, stattdessen `DENY` festzulegen und/oder sich auf das CSP-Pendant zu verlassen.

> [!NOTE]
> Das Setzen von Cookies mit der [`SameSite`](/de/docs/Web/Security/Practical_implementation_guides/Cookies#samesite) Direktive ist auch in Clickjacking-Fällen nützlich, die davon abhängen, dass der Benutzer authentifiziert ist.

## Beispiele

Blockieren Sie Ihre Seite davor, eingebettet zu werden, indem Sie `X-Frame-Options` und CSP verwenden:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Erlauben Sie, dass die Seite nur auf gleichartigen Seiten eingebettet wird:

```http
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
```

Erlauben Sie nur `example.org`, die Seite einzubetten:

```http
Content-Security-Policy: frame-ancestors https://example.org
# Blockieren Sie das Einbetten in Browsern, die CSP2 nicht unterstützen
X-Frame-Options: DENY
```

## Siehe auch

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) auf `owasp.org`
- [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) auf `auth0.com` (2020)
