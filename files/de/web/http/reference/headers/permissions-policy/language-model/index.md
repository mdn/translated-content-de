---
title: "Permissions-Policy: language-model-Direktive"
short-title: language-model
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-model
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `language-model` steuert den Zugriff auf die [Prompt-API](/de/docs/Web/API/Prompt_API).

Insbesondere wenn eine definierte Richtlinie die Nutzung blockiert, wird die statische Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static) `unavailable` zurückgeben, und alle Versuche, andere `LanguageModel`-Methoden aufzurufen, werden mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Syntax

```http
Permissions-Policy: language-model=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wurde. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `language-model` ist `self`. Der oberste Browsing-Kontext und same-origin iframes haben standardmäßig Zugriff auf die Prompt-API.

## Beispiele

### Grundlegende Nutzung

SecureCorp Inc. möchte `language-model` in allen cross-origin iframes außer denen mit dem Ursprung `https://example.com` verbieten. Dies kann durch Auslieferung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: language-model=(self "https://example.com")
```

SecureCorp Inc. muss auch ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut auf jedem `<iframe>`-Element einfügen, wo `language-model` erlaubt werden soll:

```html
<iframe src="https://example.com/blue" allow="language-model"></iframe>
```

> [!NOTE]
> Durch die Angabe des Headers `Permissions-Policy` auf diese Weise wird `language-model` für andere Ursprünge gesperrt, selbst wenn sie durch das `<iframe>` `allow`-Attribut erlaubt sind.

### Verwendung der Standardrichtlinie

Wenn eine Whitelist für `language-model` nicht durch einen `Permissions-Policy`-Antwort-Header definiert ist, wenden Benutzeragenten die Standard-Whitelist `self` an. In diesem Modus ist `language-model` automatisch im obersten Browsing-Kontext und in same-origin iframes erlaubt, jedoch nicht in cross-origin iframes.

Um `language-model` in einem cross-origin iframe zu erlauben, fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut zum `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/blue" allow="language-model"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
