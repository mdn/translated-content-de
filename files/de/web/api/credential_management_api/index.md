---
title: Credential Management API
slug: Web/API/Credential_Management_API
l10n:
  sourceCommit: b22d69df86326c4fb5bc0e4c310f4933080ab3da
---

{{DefaultAPISidebar("Credential Management API")}}{{securecontext_header}}

Die Credential Management API ermöglicht es einer Website, [Anmeldeinformationen](/de/docs/Glossary/credential) zu erstellen, zu speichern und abzurufen. Eine Anmeldeinformation ist ein Element, das es einem System ermöglicht, eine Entscheidung zur [Authentifizierung](/de/docs/Glossary/authentication) zu treffen: beispielsweise, ob ein Benutzer in ein Konto eingeloggt werden soll. Wir können sie als ein Beweisstück betrachten, das ein Benutzer einer Website vorlegt, um nachzuweisen, dass er tatsächlich die Person ist, für die er sich ausgibt.

## Konzepte und Nutzung

Die zentrale Schnittstelle ist die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer), die über die Eigenschaft [`navigator.credentials`](/de/docs/Web/API/Navigator/credentials) zugänglich ist und drei Hauptfunktionen bietet:

- [`create()`](/de/docs/Web/API/CredentialsContainer/create): erstellt eine neue Anmeldeinformation.
- [`store()`](/de/docs/Web/API/CredentialsContainer/store): speichert eine neue Anmeldeinformation lokal.
- [`get()`](/de/docs/Web/API/CredentialsContainer/get): ruft eine Anmeldeinformation ab, die dann zum Einloggen eines Benutzers verwendet werden kann.

Die API unterstützt vier verschiedene Arten von Anmeldeinformationen, die alle als Unterklassen von [`Credential`](/de/docs/Web/API/Credential) dargestellt werden:

| Typ                     | Schnittstelle                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------ |
| Passwort                | [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)                                                  |
| Föderierte Identität    | [`IdentityCredential`](/de/docs/Web/API/IdentityCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) (veraltet) |
| Einmalkennwort (OTP)    | [`OTPCredential`](/de/docs/Web/API/OTPCredential)                                                       |
| Web-Authentifizierung   | [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)                                                 |

Die Leitfaden-Seite [Anmeldeinformationstypen](/de/docs/Web/API/Credential_Management_API/Credential_types) gibt einen Überblick über die verschiedenen Anmeldeinformationstypen und deren Verwendung.

## Schnittstellen

- [`Credential`](/de/docs/Web/API/Credential)
  - : Stellt Informationen über eine Entität bereit, die als Voraussetzung für eine Vertrauensentscheidung erforderlich sind.
- [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)
  - : Bietet Methoden zum Anfordern von Anmeldeinformationen und zum Benachrichtigen des Benutzeragents, wenn interessante Ereignisse wie erfolgreiches Ein- oder Ausloggen auftreten. Diese Schnittstelle ist über `navigator.credentials` zugänglich.
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
  - : Bietet Informationen über Anmeldeinformationen eines föderierten Identitätsanbieters, einer Entität, der eine Website vertraut, um einen Benutzer korrekt zu authentifizieren und die eine API zu diesem Zweck bereitstellt. [OpenID Connect](https://openid.net/developers/specs/) ist ein Beispiel für ein solches Framework.
- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
  - : Bietet Informationen über ein Benutzername/Passwort-Paar.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle zurück, die Methoden zum Anfordern von Anmeldeinformationen und Benachrichtigen des Benutzeragents bei interessanten Ereignissen wie erfolgreichem Ein- oder Ausloggen bietet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
