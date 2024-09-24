---
title: Anmeldeinformationscontainer
slug: Web/API/CredentialsContainer
l10n:
  sourceCommit: c91c87d7da181194f3786abfcb2f27d2b885fb91
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

Das **`CredentialsContainer`**-Interface der [Credential Management API](/de/docs/Web/API/Credential_Management_API) bietet Methoden zum Anfordern von Anmeldeinformationen und zur Benachrichtigung des Benutzeragenten über Ereignisse wie erfolgreiche An- oder Abmeldungen. Dieses Interface ist über {{domxref('Navigator.credentials')}} zugänglich.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- {{domxref("CredentialsContainer.create()")}}
  - : Gibt einen {{jsxref("Promise")}} zurück, der mit einer neuen {{domxref("Credential")}}-Instanz basierend auf den bereitgestellten Optionen aufgelöst wird, oder `null`, wenn kein `Credential`-Objekt erstellt werden kann. In Ausnahmefällen kann der {{jsxref("Promise")}} abgelehnt werden.
- {{domxref("CredentialsContainer.get()")}}
  - : Gibt einen {{jsxref("Promise")}} zurück, der mit der {{domxref("Credential")}}-Instanz aufgelöst wird, die den angegebenen Parametern entspricht.
- {{domxref("CredentialsContainer.preventSilentAccess()")}}
  - : Setzt eine Markierung, die bestimmt, ob eine automatische Anmeldung für zukünftige Besuche des aktuellen Ursprungs zulässig ist, und gibt dann einen leeren {{jsxref("Promise")}} zurück. Beispielsweise könnte dies aufgerufen werden, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass er beim nächsten Besuch der Seite nicht automatisch angemeldet wird. Frühere Versionen der Spezifikation nannten diese Methode `requireUserMediation()`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Unterstützungsdetails.
- {{domxref("CredentialsContainer.store()")}}
  - : Speichert einen Satz von Anmeldeinformationen für einen Benutzer in einer bereitgestellten {{domxref("Credential")}}-Instanz und gibt diese Instanz in einem {{jsxref("Promise")}} zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
