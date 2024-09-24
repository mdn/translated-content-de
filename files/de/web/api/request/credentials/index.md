---
title: "Request: credentials-Eigenschaft"
short-title: credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: 09937df677a7c057656d7a2f5fcab7699b1e4bb9
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`credentials`**-Eigenschaft des {{domxref("Request")}}-Interfaces spiegelt den Wert wider, der dem {{domxref("Request.Request()", "Request()")}}-Konstruktor in der [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option übergeben wurde. Sie bestimmt, ob der Browser Anmeldedaten mit der Anfrage sendet, sowie ob neue **`Set-Cookie`**-Antwortheader beachtet werden.

Anmeldedaten sind Cookies, {{glossary("TLS")}}-Clientzertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Siehe [Anmeldedaten einbeziehen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) für weitere Details.

## Wert

Ein String mit einem der folgenden Werte:

- `omit`
  - : Niemals Anmeldedaten in der Anfrage senden oder in der Antwort einbeziehen.
- `same-origin`
  - : Nur Anmeldedaten für Anfragen aus derselben Quelle senden und einbeziehen.
- `include`
  - : Immer Anmeldedaten einbeziehen, auch für Cross-Origin-Anfragen.

## Beispiele

Im folgenden Codebeispiel erstellen wir eine neue Anfrage mittels des {{domxref("Request.Request", "Request()")}}-Konstruktors (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern die Anmeldedaten der Anfrage in einer Variable:

```js
const request = new Request("flowers.jpg");
const request = request.request; // returns "same-origin" by default
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
