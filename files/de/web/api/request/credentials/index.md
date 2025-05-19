---
title: "Anforderung: credentials-Eigenschaft"
short-title: credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: 4c442059c45e50cd19c024edd0ed76693df27191
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`credentials`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle spiegelt den Wert wider, der im [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor in der [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option angegeben wurde. Sie bestimmt, ob der Browser Anmeldedaten zusammen mit der Anfrage sendet, sowie ob jegliche **`Set-Cookie`**-Antwort-Header beachtet werden.

Anmeldedaten sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten.

Weitere Details finden Sie unter [Anmeldedaten einschließen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

## Wert

Ein String mit einem der folgenden Werte:

- `omit`
  - : Niemals Anmeldedaten in der Anfrage senden oder in der Antwort einschließen.
- `same-origin`
  - : Nur Anmeldedaten für Anfragen gleicher Herkunft senden und einschließen.
    Dies ist die Standardeinstellung.
- `include`
  - : Immer Anmeldedaten einschließen, auch bei Anfragen von anderer Herkunft.

## Beispiele

Im folgenden Codeausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann die Anmeldeinformationen der Anfrage in einer Variablen:

```js
const request = new Request("flowers.jpg");
const credentials = request.credentials; // returns "same-origin" by default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
