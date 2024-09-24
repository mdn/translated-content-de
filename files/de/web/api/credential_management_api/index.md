---
title: Credential-Management-API
slug: Web/API/Credential_Management_API
l10n:
  sourceCommit: b22d69df86326c4fb5bc0e4c310f4933080ab3da
---

{{DefaultAPISidebar("Credential Management API")}}{{securecontext_header}}

Die Credential-Management-API ermöglicht es einer Website, {{glossary("credential", "Anmeldedaten")}} zu erstellen, zu speichern und abzurufen. Eine Anmeldedaten ist ein Gegenstand, der einem System erlaubt, eine {{glossary("authentication", "Authentifizierungs")}}-Entscheidung zu treffen: beispielsweise zu entscheiden, ob ein Benutzer in ein Konto angemeldet werden soll. Wir können es als ein Beweisstück betrachten, das ein Benutzer einer Website vorlegt, um zu zeigen, dass er wirklich die Person ist, die er vorgibt zu sein.

## Konzepte und Verwendung

Die zentrale Schnittstelle ist der {{domxref("CredentialsContainer")}}, auf den über die {{domxref("navigator.credentials")}}-Eigenschaft zugegriffen wird und der drei Hauptfunktionen bietet:

- {{domxref("CredentialsContainer.create", "create()")}}: Eine neue Anmeldedaten erstellen.
- {{domxref("CredentialsContainer.store", "store()")}}: Eine neue Anmeldedaten lokal speichern.
- {{domxref("CredentialsContainer.get", "get()")}}: Eine Anmeldedaten abrufen, die dann verwendet werden kann, um einen Benutzer anzumelden.

Die API unterstützt vier verschiedene Arten von Anmeldedaten, die alle als Unterklassen von {{domxref("Credential")}} dargestellt werden:

| Typ                     | Schnittstelle                                                                        |
| ----------------------- | ----------------------------------------------------------------------------------- |
| Passwort                | {{domxref("PasswordCredential")}}                                                   |
| Föderierte Identität    | {{domxref("IdentityCredential")}}, {{domxref("FederatedCredential")}} (veraltet)    |
| Einmaliges Passwort (OTP) | {{domxref("OTPCredential")}}                                                      |
| Web-Authentifizierung   | {{domxref("PublicKeyCredential")}}                                                  |

Die Leitfadenseite [Credential-Typen](/de/docs/Web/API/Credential_Management_API/Credential_types) gibt einen Überblick über die verschiedenen Anmeldedaten-Typen und deren Verwendung.

## Schnittstellen

- {{domxref("Credential")}}
  - : Bietet Informationen über eine Entität als Voraussetzung für eine Vertrauensentscheidung.
- {{domxref("CredentialsContainer")}}
  - : Stellt Methoden zur Anforderung von Anmeldedaten zur Verfügung und benachrichtigt den Benutzeragenten, wenn interessante Ereignisse wie erfolgreiches Anmelden oder Abmelden auftreten. Diese Schnittstelle ist über `navigator.credentials` zugänglich.
- {{domxref("FederatedCredential")}}
  - : Bietet Informationen über Anmeldedaten von einem föderierten Identitätsanbieter, einer Entität, der eine Website vertraut, um einen Benutzer korrekt zu authentifizieren und zu diesem Zweck eine API bereitzustellen. [OpenID Connect](https://openid.net/developers/specs/) ist ein Beispiel für ein solches Framework.
- {{domxref("PasswordCredential")}}
  - : Bietet Informationen über ein Benutzername/Passwort-Paar.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.credentials")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("CredentialsContainer")}}-Schnittstelle zurück, die Methoden zur Anforderung von Anmeldedaten und zur Benachrichtigung des Benutzeragenten über interessante Ereignisse wie erfolgreiches Anmelden oder Abmelden bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Web Authentication API", "", "", "nocode")}}
- {{domxref("WebOTP API", "", "", "nocode")}}
- {{domxref("FedCM API", "Föderierte Credential Management (FedCM) API", "", "nocode")}}
