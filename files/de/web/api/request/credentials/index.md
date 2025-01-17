---
title: "Anfrage: credentials-Eigenschaft"
short-title: credentials
slug: Web/API/Request/credentials
l10n:
  sourceCommit: d6528c3d7881662e6aaa77cd2a1a49e3af349088
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`credentials`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle spiegelt den im [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor angegebenen Wert im [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option wider. Sie bestimmt, ob der Browser Anmeldeinformationen mit der Anfrage sendet sowie ob **`Set-Cookie`**-Antwortheader berücksichtigt werden.

Anmeldeinformationen sind Cookies, {{Glossary("TLS", "TLS")}}-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.

Weitere Details finden Sie unter [Einschließen von Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

## Wert

Ein String mit einem der folgenden Werte:

- `omit`
  - : Niemals Anmeldeinformationen in der Anfrage senden oder in der Antwort einschließen.
- `same-origin`
  - : Anmeldeinformationen nur für gleichherzige Anfragen senden und einschließen.
- `include`
  - : Immer Anmeldeinformationen einschließen, auch für Cross-Origin-Anfragen.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann die Anmeldeinformationen der Anfrage in einer Variable:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
