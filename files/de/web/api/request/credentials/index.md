---
title: "Request: credentials-Eigenschaft"
short-title: credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: 09937df677a7c057656d7a2f5fcab7699b1e4bb9
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`credentials`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle spiegelt den Wert wider, der dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor in der [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option übergeben wurde. Sie bestimmt, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob **`Set-Cookie`**-Antwortheader beachtet werden.

Anmeldeinformationen sind Cookies, [TLS](/de/docs/Glossary/TLS)-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Weitere Details finden Sie unter [Anmeldeinformationen einbeziehen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

## Wert

Ein String mit einem der folgenden Werte:

- `omit`
  - : Anmeldeinformationen werden niemals in der Anfrage gesendet oder in der Antwort aufgenommen.
- `same-origin`
  - : Anmeldeinformationen werden nur für gleich-originierte Anfragen gesendet und aufgenommen.
- `include`
  - : Anmeldeinformationen werden immer aufgenommen, auch für Cross-Origin-Anfragen.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann die Anmeldeinformationen der Anfrage in einer Variablen:

```js
const request = new Request("flowers.jpg");
const request = request.request; // returns "same-origin" by default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
