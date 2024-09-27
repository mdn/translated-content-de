---
title: Credential Management API
slug: Web/API/Credential_Management_API
l10n:
  sourceCommit: b22d69df86326c4fb5bc0e4c310f4933080ab3da
---

{{DefaultAPISidebar("Credential Management API")}}{{securecontext_header}}

Die Credential Management API ermöglicht es einer Website, [credentials](/de/docs/Glossary/credential) zu erstellen, zu speichern und abzurufen. Ein Credential ist ein Element, das es einem System ermöglicht, eine Entscheidung zur [Authentifizierung](/de/docs/Glossary/authentication) zu treffen: Zum Beispiel, um zu entscheiden, ob ein Benutzer in ein Konto eingeloggt werden soll. Man kann es als ein Beweisstück betrachten, das ein Benutzer einer Website vorlegt, um zu zeigen, dass er wirklich die Person ist, die er vorgibt zu sein.

## Konzepte und Nutzung

Die zentrale Schnittstelle ist der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer), der über die [`navigator.credentials`](/de/docs/Web/API/Navigator/credentials) Eigenschaft zugänglich ist und drei Hauptfunktionen bietet:

- [`create()`](/de/docs/Web/API/CredentialsContainer/create): Erstellen eines neuen Credentials.
- [`store()`](/de/docs/Web/API/CredentialsContainer/store): Lokales Speichern eines neuen Credentials.
- [`get()`](/de/docs/Web/API/CredentialsContainer/get): Abrufen eines Credentials, das dann verwendet werden kann, um einen Benutzer anzumelden.

Die API unterstützt vier verschiedene Arten von Credentials, die alle als Unterklassen von [`Credential`](/de/docs/Web/API/Credential) dargestellt werden:

| Typ                   | Schnittstelle                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Passwort              | [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)                                                                           |
| Föderierte Identität  | [`IdentityCredential`](/de/docs/Web/API/IdentityCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) (veraltet) |
| Einmalpasswort (OTP)  | [`OTPCredential`](/de/docs/Web/API/OTPCredential)                                                                                     |
| Web-Authentifizierung | [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)                                                                         |

Die Leitfaden-Seite [Credential-Typen](/de/docs/Web/API/Credential_Management_API/Credential_types) gibt einen Überblick über die verschiedenen Credential-Typen und deren Verwendung.

## Schnittstellen

- [`Credential`](/de/docs/Web/API/Credential)
  - : Bietet Informationen über eine Entität als Voraussetzung für eine Vertrauensentscheidung.
- [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)
  - : Stellt Methoden bereit, um Credentials anzufordern und den Benutzeragenten zu benachrichtigen, wenn interessante Ereignisse wie erfolgreiches Ein- oder Ausloggen eintreten. Diese Schnittstelle ist über `navigator.credentials` zugänglich.
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
  - : Bietet Informationen über Credentials eines föderierten Identitätsanbieters, einer Entität, der eine Website vertraut, um einen Benutzer korrekt zu authentifizieren, und die eine API zu diesem Zweck bereitstellt. [OpenID Connect](https://openid.net/developers/specs/) ist ein Beispiel für ein solches Framework.
- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
  - : Bietet Informationen über ein Benutzername/Passwort-Paar.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.credentials`](/de/docs/Web/API/Navigator/credentials) {{ReadOnlyInline}}
  - : Gibt die [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle zurück, die Methoden bereitstellt, um Credentials anzufordern und den Benutzeragenten zu benachrichtigen, wenn interessante Ereignisse wie erfolgreiches Ein- oder Ausloggen eintreten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
