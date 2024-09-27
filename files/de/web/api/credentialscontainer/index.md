---
title: CredentialsContainer
slug: Web/API/CredentialsContainer
l10n:
  sourceCommit: c91c87d7da181194f3786abfcb2f27d2b885fb91
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

Die **`CredentialsContainer`**-Schnittstelle der [Credential Management API](/de/docs/Web/API/Credential_Management_API) stellt Methoden zur Verfügung, um Anmeldeinformationen anzufordern und den Benutzer-Agenten zu benachrichtigen, wenn Ereignisse wie erfolgreiches An- oder Abmelden eintreten. Diese Schnittstelle ist von [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) aus zugänglich.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer neuen [`Credential`](/de/docs/Web/API/Credential)-Instanz basierend auf den bereitgestellten Optionen aufgelöst wird, oder `null`, wenn kein `Credential`-Objekt erstellt werden kann. In Ausnahmefällen kann das {{jsxref("Promise")}} abgelehnt werden.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der [`Credential`](/de/docs/Web/API/Credential)-Instanz aufgelöst wird, die den bereitgestellten Parametern entspricht.
- [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)
  - : Setzt ein Flag, das angibt, ob ein automatisches Anmelden für zukünftige Besuche des aktuellen Ursprungs zulässig ist, und gibt dann ein leeres {{jsxref("Promise")}} zurück. Beispielsweise könnten Sie dies aufrufen, nachdem sich ein Benutzer von einer Website abgemeldet hat, um sicherzustellen, dass er bei seinem nächsten Besuch der Website nicht automatisch angemeldet wird. Frühere Versionen der Spezifikation nannten diese Methode `requireUserMediation()`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Unterstützung.
- [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
  - : Speichert einen Satz von Anmeldeinformationen für einen Benutzer in einer bereitgestellten [`Credential`](/de/docs/Web/API/Credential)-Instanz und gibt diese Instanz in einem {{jsxref("Promise")}} zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
