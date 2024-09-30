---
title: CredentialsContainer
slug: Web/API/CredentialsContainer
l10n:
  sourceCommit: c91c87d7da181194f3786abfcb2f27d2b885fb91
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

Die **`CredentialsContainer`**-Schnittstelle der [Credential Management API](/de/docs/Web/API/Credential_Management_API) stellt Methoden zur Verfügung, um Anmeldeinformationen anzufordern und den Benutzeragenten zu benachrichtigen, wenn Ereignisse wie erfolgreiches Anmelden oder Abmelden auftreten. Diese Schnittstelle ist zugänglich über [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials).

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer neuen [`Credential`](/de/docs/Web/API/Credential)-Instanz basierend auf den bereitgestellten Optionen aufgelöst wird, oder `null`, wenn kein `Credential`-Objekt erstellt werden kann. In Ausnahmefällen kann das {{jsxref("Promise")}} abgelehnt werden.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der [`Credential`](/de/docs/Web/API/Credential)-Instanz aufgelöst wird, die den bereitgestellten Parametern entspricht.
- [`CredentialsContainer.preventSilentAccess()`](/de/docs/Web/API/CredentialsContainer/preventSilentAccess)
  - : Setzt ein Flag, das angibt, ob das automatische Anmelden für zukünftige Besuche der aktuellen Quelle erlaubt ist, und gibt dann ein leeres {{jsxref("Promise")}} zurück. Zum Beispiel könnten Sie dies aufrufen, nachdem ein Benutzer sich von einer Website abmeldet, um sicherzustellen, dass er bei einem späteren Besuch der Seite nicht automatisch angemeldet wird. Frühere Versionen der Spezifikation nannten diese Methode `requireUserMediation()`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details zur Unterstützung.
- [`CredentialsContainer.store()`](/de/docs/Web/API/CredentialsContainer/store)
  - : Speichert eine Reihe von Anmeldeinformationen für einen Benutzer in einer bereitgestellten [`Credential`](/de/docs/Web/API/Credential)-Instanz und gibt diese Instanz in einem {{jsxref("Promise")}} zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
