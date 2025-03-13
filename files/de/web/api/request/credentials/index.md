---
title: "Anfrage: credentials-Eigenschaft"
short-title: credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`credentials`** des [`Request`](/de/docs/Web/API/Request)-Interfaces spiegelt den Wert wider, der dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor in der [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option übergeben wurde. Sie bestimmt, ob der Browser Berechtigungsnachweise mit der Anfrage sendet und ob irgendwelche **`Set-Cookie`**-Antwortheader berücksichtigt werden.

Berechtigungsnachweise sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Weitere Details finden Sie unter [Berechtigungsnachweise einbeziehen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

## Wert

Ein `String` mit einem der folgenden Werte:

- `omit`
  - : Niemals Berechtigungsnachweise in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin`
  - : Berechtigungsnachweise nur für same-origin-Anfragen senden und einbeziehen.
- `include`
  - : Berechtigungsnachweise immer einbeziehen, auch bei Cross-Origin-Anfragen.

## Beispiele

Im folgenden Schnipsel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann die Berechtigungsnachweise der Anfrage in einer Variablen:

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
