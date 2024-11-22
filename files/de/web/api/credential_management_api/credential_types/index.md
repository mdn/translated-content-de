---
title: Typen von Anmeldeinformationen
slug: Web/API/Credential_Management_API/Credential_types
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Credential Management API")}}

Die Credential Management API ermöglicht es einer Website, die {{Glossary("credential", "Anmeldeinformationen")}} zu erstellen, zu speichern und abzurufen, die es einem Benutzer ermöglichen, sich sicher anzumelden. Es unterstützt vier verschiedene Arten von Anmeldeinformationen:

| Typ                   | Schnittstelle                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Passwort              | [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)                                                                           |
| Föderierte Identität  | [`IdentityCredential`](/de/docs/Web/API/IdentityCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) (veraltet) |
| Einmalpasswort (OTP)  | [`OTPCredential`](/de/docs/Web/API/OTPCredential)                                                                                     |
| Web-Authentifizierung | [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)                                                                         |

Die Anmeldeinformationstypen werden alle als Unterklassen der [`Credential`](/de/docs/Web/API/Credential) Schnittstelle dargestellt:

![Klassendiagramm, das die fünf verschiedenen Unterklassen von Anmeldeinformationen zeigt.](credential-types.svg)

In diesem Leitfaden werden wir die verschiedenen Anmeldeinformationstypen vorstellen und auf hoher Ebene erklären, wie sie verwendet werden.

> [!NOTE]
> Obwohl wir hier alle Anmeldeinformationstypen gemeinsam beschreiben, sind die verschiedenen Typen in mehreren unterschiedlichen Spezifikationen definiert, die die Hauptspezifikation der Credential Management API erweitern.
>
> - Die [Credential Management API](https://w3c.github.io/webappsec-credential-management/) definiert Passwörter und veraltete föderierte Anmeldeinformationen.
> - Die [Federated Credential Management API](https://w3c-fedid.github.io/FedCM/) definiert die neuen föderierten Anmeldeinformationen.
> - Die [WebOTP API](https://wicg.github.io/web-otp/) definiert OTP-Anmeldeinformationen.
> - Die [Web Authentication API](https://w3c.github.io/webauthn/) definiert Web-Authentifizierungs-Behauptungen.

## Passwörter

> [!NOTE]
> Die meisten Browser unterstützen diesen Anmeldeinformationstyp nicht und er wird im Web nicht weit verbreitet eingesetzt. Stattdessen bieten Browser automatisch an, Passwörter in einem Passwort-Manager zu speichern und können gespeicherte Passwörter automatisch abrufen, um [Passwort-Eingabeelemente](/de/docs/Web/HTML/Element/input/password) auszufüllen.

Moderne Browser bieten den Benutzern einen Passwort-Manager, der es ihnen ermöglicht, die Passwörter, die sie auf Websites eingeben, zu speichern und später abzurufen, wenn sie sich erneut anmelden müssen. Passwort-Manager können bei der Passwortsicherheit helfen, indem sie sich Passwörter für Benutzer merken und diese automatisch ausfüllen, was es den Benutzern erlaubt, stärkere Passwörter zu wählen.

In der Credential Management API wird ein Passwort durch die [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Schnittstelle dargestellt. Wenn sich ein Benutzer erfolgreich auf Ihrer Website registriert oder anmeldet, können Sie den [`PasswordCredential()`](/de/docs/Web/API/PasswordCredential/PasswordCredential) Konstruktor oder [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) aufrufen, um ein `PasswordCredential`-Objekt aus den vom Benutzer eingegebenen Anmeldeinformationen zu erstellen. Dieses können Sie dann in [`navigator.credentials.store()`](/de/docs/Web/API/CredentialsContainer/store) übergeben, und der Browser wird den Benutzer fragen, ob er das Passwort im Passwort-Manager speichern möchte.

![Sequenzdiagramm, das die Erstellung und Speicherung einer Passwort-Anmeldeinformation zeigt.](password-create.svg)

Wenn ein Benutzer Ihre Website besucht, können Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um ein gespeichertes Passwort für Ihre Website abzurufen und den Benutzer damit anzumelden. Je nach Situation können Sie den Benutzer ohne weitere Interaktion anmelden oder das zurückgegebene Passwort verwenden, um ein Formularelement automatisch auszufüllen.

![Sequenzdiagramm, das die Anmeldung mit einer Passwort-Anmeldeinformation zeigt.](password-get.svg)

## Föderierte Identitätsanmeldeinformationen

In einem {{Glossary("federated_identity", "föderierten Identitätssystem")}} fungiert eine separate Entität als Vermittler zwischen dem Benutzer und der Website, bei der er sich anmelden möchte. Diese Entität, genannt {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP), verwaltet die Anmeldeinformationen des Benutzers, kann Benutzer authentifizieren und wird von der Website vertraut, um Aussagen über die Identität eines Benutzers zu machen.

Der Benutzer hat ein Konto beim IdP: Wenn er sich auf der Website anmelden muss, authentifiziert er sich beim IdP. Der IdP gibt dann ein Token an den Browser des Benutzers zurück, das der Browser an die Website übermittelt. Die Website überprüft das Token und, wenn die Überprüfung erfolgreich ist, meldet sie den Benutzer an.

Föderierte Identität wird oft als Dienst von Unternehmen angeboten: Beispielsweise können sich Benutzer, die Konten bei Google, Microsoft oder Facebook haben, mit diesen bei Websites anmelden, die dies unterstützen.

Die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) definiert einen datenschutzfreundlichen Mechanismus für föderierte Identitäten im Web. Sie beginnen, indem Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um eine föderierte Identitätsanmeldeinformation anzufordern, was einen Protokollaustausch zwischen dem Browser und dem IdP auslöst.

Wenn der Benutzer im Laufe dieses Austauschs beim IdP authentifiziert werden kann, gibt der Browser ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück. Der Code der Front-End-Website kann dieses zur Verifizierung an den Server senden.

![Sequenzdiagramm, das die Anmeldung mit einer föderierten Identitätsanmeldeinformation zeigt.](fed-cm-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet werden, wenn mit der Federated Credential Management API gearbeitet wird.

> [!NOTE]
> Unterstützung für föderierte Identitäten in der Credential Management API wurde ursprünglich über die [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Schnittstelle bereitgestellt. Dieses Verfahren hängt jedoch von Technologien wie [Drittpartei-Cookies](/de/docs/Web/Privacy/Third-party_cookies) ab, die intrinsisch datenschutzinvasiv sind. Diese Technologien wurden in Browsern [veraltet](/en-US/blog/goodbye-third-party-cookies/), daher war ein neuer Ansatz erforderlich.

## Einmalpasswörter

Ein Einmalpasswort (OTP) ist eine Authentifizierungstechnik, bei der die Website dem Benutzer über ein Nachrichtensystem wie E-Mail oder SMS einen eindeutigen Code sendet. Der Benutzer muss dann den Code auf der Website eingeben, um seine Kontrolle über das Kommunikationsendgerät zu beweisen. Websites verwenden dies manchmal als zweiten Authentifizierungsfaktor zusätzlich zu einem Passwort.

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) definiert die [`OTPCredential`](/de/docs/Web/API/OTPCredential) Schnittstelle, die ein spezifisches Usability-Problem in diesem Austausch löst: Wenn ein Benutzer den Code erhält, muss er eine andere Anwendung öffnen, die Nachricht finden und den Code in ein Formular auf der Website kopieren. Dies ist umständlich, besonders auf einem mobilen Gerät, und besonders, wenn das Gerät, das die Nachricht empfängt, das gleiche ist wie das Gerät, das zur Anmeldung auf der Website verwendet wird.

In Browsern, die den `OTPCredential`-Typ unterstützen, kann das Front-End der Website [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um eine OTP-Anmeldeinformation anzufordern, und dann den Backend-Server bitten, einen Code zu generieren und die Nachricht damit zu senden (nur SMS wird als Transport unterstützt). Das Backend muss eine speziell formatierte SMS-Nachricht senden, die der Browser lesen kann.

Der Browser gibt dann ein `OTPCredential` Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält den Code. Der Code kann vom Front-End der Website verwendet werden, um ein Eingabeelement auf der Website automatisch auszufüllen oder den Code automatisch an den Server zu übermitteln.

![Sequenzdiagramm, das die Anmeldung mit einer OTP-Anmeldeinformation zeigt.](otp-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet werden, wenn mit OTP-Anmeldeinformationen gearbeitet wird.

## Web-Authentifizierungs-Behauptungen

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ermöglicht es Benutzern, sich auf Websites anzumelden, indem sie einen _Authentifikator_ verwenden, um digital signierte Behauptungen über die Identität eines Benutzers zu erzeugen.

Ein Authentifikator ist eine Entität, die sich in oder an das Gerät des Benutzers befindet und die kryptografischen Operationen durchführen kann, die zur Registrierung und Authentifizierung von Benutzern erforderlich sind, und die kryptografischen Schlüssel, die in diesen Operationen verwendet werden, sicher speichern kann. Ein Authentifikator kann in das Gerät integriert sein, wie das [Touch ID](https://de.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://de.wikipedia.org/wiki/Windows_10#System_security)-System, oder es kann ein abnehmbares Modul wie ein [YubiKey](https://de.wikipedia.org/wiki/YubiKey) sein.

Anstelle von Passwörtern verwendet WebAuthn {{Glossary("public-key_cryptography", "Public-Key-Kryptographie")}}, um Benutzer zu authentifizieren.

Um einen Benutzer auf einer Website mit WebAuthn zu registrieren, rufen Sie [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und geben alle erforderlichen Informationen an, um ein Schlüsselpaar zu erstellen. Der Authentifikator kann den Benutzer zunächst auffordern, sich selbst zu authentifizieren, z. B. mit einem biometrischen Leser. Er wird dann ein Schlüsselpaar generieren und den öffentlichen Schlüssel zurückgeben. Dieses Schlüsselpaar ist spezifisch für den Benutzer und die Website. Der Authentifikator kann auch eine signierte _Attestation_ generieren und zurückgeben: Dies ist eine Aussage, dass der Authentifikator selbst (z. B.) ein echter YubiKey ist.

Das Front-End der Website sendet den öffentlichen Schlüssel und die Attestation an den Server, der die Attestation überprüft und den öffentlichen Schlüssel mit den anderen Informationen des neuen Benutzerkontos speichert.

![Sequenzdiagramm, das die Registrierung mit Web-Authentifizierung zeigt.](webauth-create.svg)

Um einen Benutzer auf der Website anzumelden, fordert der Front-End-Code zunächst eine Zufallszahl vom Server an, die _Challenge_ genannt wird. Dann ruft er [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf und übergibt die Challenge und einige andere Optionen. Der Authentifikator kann den Benutzer erneut auffordern, sich selbst zu authentifizieren, und wird dann die Challenge mit dem privaten Schlüssel signieren.

Der Browser gibt dann ein `PublicKeyCredential` Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält die signierte Challenge, die eine _Behauptung_ genannt wird. Das Front-End der Website sendet die Behauptung dann an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel überprüft und entscheidet, ob der Benutzer angemeldet werden soll.

![Sequenzdiagramm, das die Anmeldung mit einer Web-Authentifizierungs-Behauptung zeigt.](webauth-get.svg)

Beachten Sie, dass [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet wird, wenn mit WebAuthn gearbeitet wird: Das Schlüsselpaar wird im Authentikator erstellt und der private Schlüssel verlässt diesen niemals.

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
