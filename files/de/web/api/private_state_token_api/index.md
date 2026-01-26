---
title: Private State Token API
slug: Web/API/Private_State_Token_API
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{DefaultAPISidebar("Private State Token API")}}{{SeeCompatTable}}

Die **Private State Token API** bietet einen Mechanismus zur Übermittlung von Vertrauen in die Authentizität eines Benutzers von einem Browsing-Kontext zu einem anderen, ohne die Identität des Benutzers preiszugeben oder dessen Aktivitäten über Websites hinweg zu verfolgen.

## Konzepte und Verwendung

Um Betrug im Internet zu verhindern, müssen Websites und Dienste Vertrauenssignale etablieren und übermitteln, die belegen, dass ein Benutzer derjenige ist, der er vorgibt zu sein, und kein Bot, der vorgibt, ein Mensch zu sein, oder ein böswilliger Dritter, der eine echte Person oder einen Dienst betrügt.

- Vertrauen wird durch Mechanismen wie [CAPTCHAs](https://en.wikipedia.org/wiki/CAPTCHA), die Überprüfung von E-Mail-Adressen oder den Kauf von Produkten hergestellt.
- Vertrauen wird traditionell zwischen verschiedenen Ursprüngen mit Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) übertragen.

Leider sind die aktuellen Cookie-basierten Techniken zur Übermittlung solcher Informationen nicht sicher und können für {{Glossary("fingerprinting", "Fingerprinting")}} und die Verfolgung von Benutzern verwendet werden, was problematisch für den Datenschutz ist.

Private State Tokens lösen dieses Problem, indem sie es ermöglichen, Vertrauenssignale ohne passive Nachverfolgung über den Hintergrund des [Privacy Pass Protocols](https://privacypass.github.io/) zwischen Ursprüngen zu übermitteln.

> [!NOTE]
> Private State Tokens ersetzen weder CAPTCHAs noch andere Mechanismen zur Vertrauensherstellung. Private State Tokens bieten eine Möglichkeit, Vertrauen in einen Benutzer zu _übermitteln_, nicht um Vertrauen in einen Benutzer zu _etablieren_.

### Wie funktionieren Private State Tokens?

1. Wenn eine Website Vertrauen in einen Benutzer etabliert hat (zum Beispiel über ein CAPTCHA), kann sie ein kryptografisches Token ausstellen, das sicher im Browser des Benutzers gespeichert wird. Diese Website wird **Issuer** genannt.
2. Eine andere Website kann dann überprüfen, ob derselbe Benutzer vertrauenswürdig ist, indem sie überprüft, ob der Browser ein Token gespeichert hat, das von einem Issuer ausgestellt wurde, dem die Website vertraut. Falls ja, kann sie dieses Token einlösen, um ein **Redemption Record** zu erhalten. Diese Website wird **Redeemer** genannt.
3. Das Redemption Record wird dann verwendet, um dem Benutzer Zugang zu Diensten zu gewähren, als ob er direkt mit der Website authentifiziert wäre, und kann auch an andere Parteien weitergeleitet werden, um Vertrauen zu übermitteln.

Private State Tokens sind verschlüsselt, sodass es nicht möglich ist, eine Person zu identifizieren oder vertrauenswürdige und nicht vertrauenswürdige Instanzen miteinander zu verbinden, um die Identität eines Benutzers zu entdecken.

Siehe [Verwendung der Private State Token API](/de/docs/Web/API/Private_State_Token_API/Using) für einen Leitfaden zur Verwendung von Private State Tokens.

## Schnittstellen

Die Private State Token API hat keine eigenen speziellen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`Document.hasPrivateToken()`](/de/docs/Web/API/Document/hasPrivateToken)
  - : Gibt ein Versprechen zurück, das mit einem Boolean erfüllt wird, der angibt, ob der Browser ein Private State Token von einem bestimmten Issuer gespeichert hat.
- [`Document.hasRedemptionRecord()`](/de/docs/Web/API/Document/hasRedemptionRecord)
  - : Gibt ein Versprechen zurück, das mit einem Boolean erfüllt wird, der angibt, ob der Browser ein Redemption Record aus einem bestimmten Issuer gespeichert hat.
- [`HTMLIFrameElement.privateToken`](/de/docs/Web/API/HTMLIFrameElement/privateToken)
  - : Spiegelt den Wert des `<iframe>` `privateToken` Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) / [`Request()`](/de/docs/Web/API/Request/Request), die [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken) Option
  - : Ein Objekt, das eine Private State Token-Operation darstellt. Fetch-Aufrufe mit der Option `privateToken` initiieren Operationen wie das Ausstellen oder Einlösen von Tokens.
- [`XMLHttpRequest.setPrivateToken()`](/de/docs/Web/API/XMLHttpRequest/setPrivateToken)
  - : Fügt Private State Token-Informationen zu einem `XMLHttpRequest`-Aufruf hinzu, um Private State Token-Operationen zu initiieren.

## HTML-Elemente

- {{htmlelement("iframe")}}, das [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken) Attribut
  - : Enthält eine Stringdarstellung eines Optionsobjekts, das eine Private State Token-Operation darstellt. IFrames mit diesem Attribut können verwendet werden, um Operationen wie das Ausstellen oder Einlösen von Tokens zu initiieren.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} Direktive
  - : Kontrolliert die Verwendung von `token-request` Operationen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} Direktive
  - : Kontrolliert die Verwendung von `token-redemption` und `send-redemption-record` Operationen.
- {{httpheader("Sec-Redemption-Record")}}
  - : Ein Anfrage-Header, der ein Redemption Record zur Übermittlung von Vertrauen an eine andere Partei weiterleitet, wenn eine `send-redemption-record` Fetch-Anfrage gemacht wird.
- {{httpheader("Sec-Private-State-Token")}}
  - : Existiert sowohl als Anfrage- als auch als Antwort-Header, der während Ausgabe- und Einlösungsanfragen zum Übertragen von Anfragedaten (wie geblendeten Nonces zur Generierung von Tokens) und Antwortdaten (wie Tokens und Redemption Records) verwendet wird.
- {{httpheader("Sec-Private-State-Token-Crypto-Version")}}
  - : Ein Anfrage-Header, der an einen Issuer-Server gesendet wird und angibt, welche kryptografische Protokollversion zum Signieren geblendeter Nonces bei der Token-Generierung verwendet werden soll.
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
  - : Ein Antwort-Header, der vom Redeemer-Server gesendet wird, um dem Browser anzuzeigen, wie lange ein bestimmtes Redemption Record im Cache verbleiben soll.

## Sicherheitsüberlegungen

Private State Token `token-request` Operationen werden von der {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{httpheader("Permissions-Policy")}} Direktive kontrolliert, während `token-redemption` und `send-redemption-record` Operationen von der {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} Direktive kontrolliert werden.

Insbesondere, wenn eine definierte Richtlinie die Verwendung blockiert, schlagen alle Versuche, Private State Token-Operationen über Fetch-Anfragen zu initiieren, fehl.

## Beispiele

Sehen Sie sich den [Private State Token Demo Issuer](https://privatetokens.dev/) für eine Beispielimplementierung an.

## Spezifikationen

{{specifications}}

## Browser-Kompatibilität

{{Compat}}
