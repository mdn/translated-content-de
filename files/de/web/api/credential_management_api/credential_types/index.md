---
title: Typen von Anmeldeinformationen
slug: Web/API/Credential_Management_API/Credential_types
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Credential Management API")}}

Die Credential Management API ermöglicht es einer Website, Anmeldeinformationen zu erstellen, zu speichern und abzurufen, die es einem Benutzer ermöglichen, sich sicher einzuloggen. Sie unterstützt vier verschiedene Arten von Anmeldeinformationen:

| Typ                   | Schnittstelle                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Passwort              | [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)                                                                           |
| Föderierte Identität  | [`IdentityCredential`](/de/docs/Web/API/IdentityCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) (veraltet) |
| Einmalpasswort (OTP)  | [`OTPCredential`](/de/docs/Web/API/OTPCredential)                                                                                     |
| Web-Authentifizierung | [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)                                                                         |

Die Anmeldeinformationstypen sind alle als Unterklassen der [`Credential`](/de/docs/Web/API/Credential) Schnittstelle dargestellt:

![Klassendiagramm, das die fünf verschiedenen Unterklassen von Anmeldeinformationen zeigt.](credential-types.svg)

In diesem Leitfaden werden wir die verschiedenen Arten von Anmeldeinformationen einführen und auf hoher Ebene erklären, wie sie verwendet werden.

> [!NOTE]
> Obwohl wir hier alle Anmeldeinformationstypen zusammen beschreiben, sind die verschiedenen Anmeldeinformationstypen in mehreren unterschiedlichen Spezifikationen definiert, die die Hauptspezifikation der Credential Management API erweitern.
>
> - [Credential Management API](https://w3c.github.io/webappsec-credential-management/) definiert Passwörter und veraltete föderierte Anmeldeinformationen.
> - [Federated Credential Management API](https://w3c-fedid.github.io/FedCM/) definiert die neuen föderierten Anmeldeinformationen.
> - [WebOTP API](https://wicg.github.io/web-otp/) definiert OTP-Anmeldeinformationen.
> - [Web Authentication API](https://w3c.github.io/webauthn/) definiert Web-Authentifizierungsnachweise.

## Passwörter

> [!NOTE]
> Die meisten Browser unterstützen diesen Anmeldeinformationstyp nicht und er wird im Web nicht weit verbreitet eingesetzt. Stattdessen bieten Browser automatisch an, Passwörter in einem Passwort-Manager zu speichern und können gespeicherte Passwörter automatisch abrufen, um [Passworteingabeelemente](/de/docs/Web/HTML/Reference/Elements/input/password) automatisch auszufüllen.

Moderne Browser bieten Benutzern einen Passwort-Manager, mit dem Benutzer die Passwörter speichern können, die sie auf Websites eingeben, und sie später abrufen können, wenn sie sich erneut einloggen müssen. Passwort-Manager können helfen, die Passwortsicherheit zu erhöhen, indem sie Passwörter für Benutzer merken und automatisch ausfüllen, was es Benutzern ermöglicht, stärkere Passwörter zu wählen.

In der Credential Management API wird ein Passwort durch die [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Schnittstelle dargestellt. Wenn ein Benutzer sich erfolgreich für Ihre Website registriert oder sich dort anmeldet, können Sie den [`PasswordCredential()`](/de/docs/Web/API/PasswordCredential/PasswordCredential) Konstruktor oder [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) aufrufen, um ein `PasswordCredential` Objekt aus den eingegebenen Anmeldeinformationen des Benutzers zu erstellen. Sie können dieses dann in [`navigator.credentials.store()`](/de/docs/Web/API/CredentialsContainer/store) übergeben, und der Browser wird den Benutzer fragen, ob er das Passwort im Passwort-Manager speichern möchte.

![Sequenzdiagramm zur Erstellung und Speicherung einer Passwort-Anmeldeinformation.](password-create.svg)

Wenn ein Benutzer Ihre Website besucht, können Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um ein gespeichertes Passwort für Ihre Website abzurufen und es zu verwenden, um den Benutzer einzuloggen. Je nach Situation können Sie den Benutzer leise einloggen oder das zurückgegebene Passwort verwenden, um ein Formularfeld automatisch auszufüllen.

![Sequenzdiagramm zur Anmeldung mit einer Passwort-Anmeldeinformation.](password-get.svg)

## Anmeldeinformationen für föderierte Identitäten

In einem {{Glossary("federated_identity", "föderierten Identitätssystem")}} agiert eine separate Einheit als Vermittler zwischen dem Benutzer und der Website, bei der er sich anmelden möchte. Diese Einheit, genannt {{Glossary("identity_provider", "Identity Provider")}} (IdP), verwaltet die Anmeldeinformationen des Benutzers, kann Benutzer authentifizieren und wird von der Website vertraut, um Aussagen über die Identität eines Benutzers zu machen.

Der Benutzer hat ein Konto beim IdP: Wenn er sich bei der Website anmelden muss, authentifiziert er sich beim IdP. Der IdP gibt dann ein Token an den Browser des Benutzers zurück, das der Browser an die Website liefert. Die Website überprüft das Token und meldet, wenn die Überprüfung erfolgreich ist, den Benutzer an.

Föderierte Identität wird oft als Dienst von Unternehmen angeboten: Beispielweise können Benutzer mit Google-, Microsoft- oder Facebook-Konten sich auf Websites anmelden, die diese unterstützen.

Die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) definiert einen datenschutzfreundlichen Mechanismus für föderierte Identität im Web. Sie starten, indem Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um eine föderierte Identitätsanmeldeinformation anzufordern, was einen Protokollaustausch zwischen dem Browser und dem IdP auslöst.

Wenn der Benutzer im Verlauf dieses Austauschs mit dem IdP authentifiziert werden kann, gibt der Browser ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt als Erfüllung des von `get()` zurückgegebenen `Promise` zurück. Der Front-End-Code der Website kann dies zur Überprüfung an den Server senden.

![Sequenzdiagramm zur Anmeldung mit einer Anmeldeinformation für föderierte Identität.](fed-cm-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet werden, wenn mit der Federated Credential Management API gearbeitet wird.

> [!NOTE]
> Der Support für föderierte Identität in der Credential Management API wurde ursprünglich über die [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Schnittstelle bereitgestellt. Diese Methode basiert jedoch auf Technologien wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die von Natur aus datenschutzinvasiv sind. Diese Technologien wurden [in Browsern veraltet](/en-US/blog/goodbye-third-party-cookies/), daher war ein neuer Ansatz erforderlich.

## Einmalpasswörter

Ein Einmalpasswort (OTP) ist eine Authentifizierungstechnik, bei der die Website einen einmaligen Code über ein Nachrichtensystem wie E-Mail oder SMS an den Benutzer sendet. Der Benutzer muss dann den Code auf der Website eingeben, um seine Kontrolle über den Kommunikationsendpunkt zu beweisen. Websites verwenden dies manchmal als zweiten Authentifizierungsfaktor zusätzlich zu einem Passwort.

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) definiert die [`OTPCredential`](/de/docs/Web/API/OTPCredential) Schnittstelle, die ein spezielles Benutzerfreundlichkeitsproblem in diesem Austausch löst: Wenn ein Benutzer den Code erhält, muss er eine andere Anwendung öffnen, die Nachricht finden und dann den Code in ein Formular auf der Website kopieren. Dies ist umständlich, insbesondere auf einem mobilen Gerät und insbesondere, wenn dasselbe Gerät verwendet wird, um sich bei der Website einzuloggen und die Nachricht zu empfangen.

In Browsern, die den `OTPCredential` Typ unterstützen, kann das Front-End der Website [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um eine OTP-Anmeldeinformation anzufordern und den Backend dann bitten, einen Code zu generieren und die Nachricht zu senden (nur SMS wird als Transport unterstützt). Der Backend muss eine speziell formatierte SMS-Nachricht senden, die der Browser lesen kann.

Der Browser gibt dann ein `OTPCredential` Objekt als Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält den Code. Der Front-End der Website kann den Code verwenden, um ein Eingabeelement automatisch auszufüllen oder den Code automatisch an den Server zu senden.

![Sequenzdiagramm zur Anmeldung mit einer OTP-Anmeldeinformation.](otp-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet werden, wenn mit OTP-Anmeldeinformationen gearbeitet wird.

## Web-Authentifizierungsnachweise

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ermöglicht es Benutzern, sich bei Websites anzumelden, indem sie einen _Authenticator_ um die Erstellung digital signierter Bestätigungen über die Identität eines Benutzers bitten.

Ein Authenticator ist eine Entität, die sich im oder am Gerät des Benutzers befindet und die kryptografischen Operationen durchführen kann, die zum Registrieren und Authentifizieren von Benutzern erforderlich sind, und die kryptografischen Schlüssel, die in diesen Operationen verwendet werden, sicher speichern kann. Ein Authenticator könnte in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID) System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security) System, oder es könnte ein abnehmbares Modul wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey) sein.

Anstelle von Passwörtern verwendet WebAuthn die {{Glossary("public-key_cryptography", "Public-Key-Kryptographie")}}, um Benutzer zu authentifizieren.

Um einen Benutzer auf einer Website mit WebAuthn zu registrieren, rufen Sie [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und geben alle Informationen an, die zum Erstellen eines Schlüsselpaares benötigt werden. Der Authenticator kann den Benutzer zunächst bitten, sich zu authentifizieren, zum Beispiel mit einem biometrischen Reader. Er wird dann ein Schlüsselpaar generieren und den öffentlichen Schlüssel zurückgeben. Dieses Schlüsselpaar ist spezifisch für den Benutzer und die Website. Der Authenticator kann auch eine signierte _Attestation_ generieren und zurückgeben: dies ist eine Aussage, dass der Authenticator selbst (zum Beispiel) ein echter YubiKey ist.

Der Front-End der Website sendet den öffentlichen Schlüssel und die Attestation an den Server, der die Attestation überprüft und den öffentlichen Schlüssel mit den restlichen neuen Kontoinformationen des Benutzers speichert.

![Sequenzdiagramm zur Registrierung mit Web-Authentifizierung.](webauth-create.svg)

Um einen Benutzer auf der Website anzumelden, ruft der Front-End-Code zunächst eine Zufallszahl vom Server ab, die als _Challenge_ bezeichnet wird. Dann ruft er [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, übergibt die Challenge sowie einige andere Optionen. Der Authenticator kann den Benutzer nochmals bitten, sich zu authentifizieren, und wird dann die Challenge mit dem privaten Schlüssel signieren.

Der Browser gibt dann ein `PublicKeyCredential` Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält die signierte Challenge, die als _Assertion_ bezeichnet wird. Der Front-End der Website sendet die Assertion dann an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel überprüft und entscheidet, ob der Benutzer eingeloggt wird.

![Sequenzdiagramm zur Anmeldung mit einer Web-Authentifizierungsbestätigung.](webauth-get.svg)

Beachten Sie, dass [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet wird, wenn mit WebAuthn gearbeitet wird: das Schlüsselpaar wird im Authenticator erstellt und der private Schlüssel verlässt ihn nie.

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
