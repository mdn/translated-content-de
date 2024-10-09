---
title: "Request: credentials-Eigenschaft"
short-title: credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`credentials`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces spiegelt den Wert wider, der dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor in der [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option gegeben wurde. Sie bestimmt, ob der Browser Anmeldeinformationen mit der Anfrage sendet und ob die **`Set-Cookie`**-Antwortheader berücksichtigt werden.

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Weitere Details finden Sie unter [Einschließen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

## Wert

Ein String mit einem der folgenden Werte:

- `omit`
  - : Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einschließen.
- `same-origin`
  - : Nur Anmeldeinformationen für gleiche Herkunft-Anfragen senden und einschließen.
- `include`
  - : Anmeldeinformationen immer einschließen, auch bei Cross-Origin-Anfragen.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann die Anmeldeinformationen der Anfrage in einer Variablen:

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
