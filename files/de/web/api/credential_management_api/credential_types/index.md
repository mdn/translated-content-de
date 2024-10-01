---
title: Credenzitypen
slug: Web/API/Credential_Management_API/Credential_types
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{DefaultAPISidebar("Credential Management API")}}

Die Credential Management API ermöglicht es einer Webseite, die {{Glossary("credential", "Anmeldedaten")}}, die einem Benutzer eine sichere Anmeldung ermöglichen, zu erstellen, zu speichern und abzurufen. Sie unterstützt vier verschiedene Arten von Anmeldedaten:

| Typ                   | Schnittstelle                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Passwort              | [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)                                                                           |
| Föderierte Identität  | [`IdentityCredential`](/de/docs/Web/API/IdentityCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) (veraltet) |
| Einmalpasswort (OTP)  | [`OTPCredential`](/de/docs/Web/API/OTPCredential)                                                                                     |
| Web-Authentifizierung | [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)                                                                         |

Die unterschiedlichen Arten von Anmeldedaten sind alle als Unterklassen der [`Credential`](/de/docs/Web/API/Credential) Schnittstelle dargestellt:

![Klassendiagramm, das die fünf verschiedenen Anmeldedaten-Unterklassen zeigt.](credential-types.svg)

In diesem Leitfaden werden wir die verschiedenen Anmeldedatentypen vorstellen und auf hoher Ebene erklären, wie sie verwendet werden.

> [!NOTE]
> Obwohl wir hier alle Anmeldedatentypen gemeinsam beschreiben, sind die verschiedenen Anmeldedatentypen in mehreren unterschiedlichen Spezifikationen definiert, die die Hauptspezifikation der Credential Management API erweitern.
>
> - [Credential Management API](https://w3c.github.io/webappsec-credential-management/) definiert Passwörter und ältere föderierte Anmeldedaten.
> - [Federated Credential Management API](https://w3c-fedid.github.io/FedCM/) definiert die neuen föderierten Anmeldedaten.
> - [WebOTP API](https://wicg.github.io/web-otp/) definiert OTP-Anmeldedaten.
> - [Web Authentication API](https://w3c.github.io/webauthn/) definiert Web-Authentifizierungsbehauptungen.

## Passwörter

> [!NOTE]
> Die meisten Browser unterstützen diesen Anmeldedatentyp nicht und er wird im Web nicht weit verbreitet verwendet. Stattdessen bieten Browser automatisch an, Passwörter in einem Passwortmanager zu speichern und können gespeicherte Passwörter automatisch abrufen, um [Passworteingabeelemente](/de/docs/Web/HTML/Element/input/password) automatisch auszufüllen.

Moderne Browser bieten den Benutzern einen Passwortmanager, der es ihnen ermöglicht, die Passwörter, die sie auf Webseiten eingeben, zu speichern und später abzurufen, wenn sie sich erneut anmelden müssen. Passwortmanager können zur Passwortsicherheit beitragen, indem sie sich Passwörter für Benutzer merken und diese automatisch ausfüllen, was es Benutzern ermöglicht, stärkere Passwörter auszuwählen.

In der Credential Management API wird ein Passwort durch die [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Schnittstelle dargestellt. Wenn sich ein Benutzer erfolgreich auf Ihrer Seite registriert oder anmeldet, können Sie den [`PasswordCredential()`](/de/docs/Web/API/PasswordCredential/PasswordCredential) Konstruktor oder [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) aufrufen, um ein `PasswordCredential`-Objekt aus den vom Benutzer eingegebenen Anmeldedaten zu erstellen. Dieses können Sie dann an [`navigator.credentials.store()`](/de/docs/Web/API/CredentialsContainer/store) übergeben, und der Browser wird den Benutzer fragen, ob er das Passwort im Passwortmanager speichern möchte.

![Sequenzdiagramm zeigt die Erstellung und Speicherung einer Passwortanmeldung.](password-create.svg)

Wenn ein Benutzer Ihre Seite besucht, können Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um ein gespeichertes Passwort für Ihre Seite abzurufen und den Benutzer damit anzumelden. Abhängig von der Situation können Sie den Benutzer stillschweigend anmelden oder das zurückgegebene Passwort verwenden, um ein Formularfeld automatisch auszufüllen.

![Sequenzdiagramm zeigt die Anmeldung mit einer Passwortanmeldung.](password-get.svg)

## Föderierte Identitätsanmeldedaten

In einem {{Glossary("federated_identity", "föderierten Identitätssystem")}} fungiert eine separate Entität als Vermittler zwischen dem Benutzer und der Webseite, bei der er sich anmelden möchte. Diese Entität, ein {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) genannt, verwaltet die Anmeldedaten des Benutzers, kann Benutzer authentifizieren und ist von der Webseite vertraut, um Aussagen über die Identität eines Benutzers zu machen.

Der Benutzer hat ein Konto beim IdP: Wenn er sich auf der Webseite anmelden muss, authentifiziert er sich beim IdP. Der IdP gibt dann ein Token an den Browser des Benutzers zurück, das der Browser an die Webseite liefert. Die Webseite überprüft das Token und meldet den Benutzer bei erfolgreicher Überprüfung an.

Föderierte Identität wird häufig als Service von Unternehmen bereitgestellt: Beispielsweise können Benutzer, die Google-, Microsoft- oder Facebook-Konten haben, diese zur Anmeldung auf unterstützenden Webseiten verwenden.

Die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) definiert einen datenschutzfreundlichen Mechanismus für föderierte Identität im Web. Sie starten, indem Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um eine föderierte Identitätsanmeldung anzufordern, was einen Protokollaustausch zwischen dem Browser und dem IdP auslöst.

Wenn der Benutzer im Verlauf dieses Austauschs mit dem IdP authentifiziert werden kann, gibt der Browser ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück. Der Code des Webseiten-Frontends kann dies zur Überprüfung an den Server senden.

![Sequenzdiagramm zeigt die Anmeldung mit einer föderierten Identitätsanmeldung.](fed-cm-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) bei der Arbeit mit der Federated Credential Management API nicht verwendet werden.

> [!NOTE]
> Die Unterstützung für föderierte Identität in der Credential Management API wurde ursprünglich über die [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Schnittstelle bereitgestellt. Dieser Mechanismus hängt jedoch von Technologien wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) ab, die von Natur aus datenschutzverletzend sind. Diese Technologien wurden [in Browsern veraltet](/en-US/blog/goodbye-third-party-cookies/), daher war ein neuer Ansatz erforderlich.

## Einmalpasswörter

Ein Einmalpasswort (OTP) ist eine Authentifizierungstechnik, bei der die Webseite einen einzigartigen Code über ein Kommunikationssystem wie E-Mail oder SMS an den Benutzer sendet. Der Benutzer muss den Code dann auf der Webseite eingeben, um seine Kontrolle über den Kommunikationsendpunkt zu beweisen. Webseiten verwenden dies manchmal als zweiten Authentifizierungsfaktor zusätzlich zu einem Passwort.

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) definiert die [`OTPCredential`](/de/docs/Web/API/OTPCredential) Schnittstelle, die ein spezifisches Bedienungsproblem in diesem Austausch löst: Wenn ein Benutzer den Code erhält, muss er eine andere Anwendung öffnen, die Nachricht finden und dann den Code in ein Formular auf der Webseite eingeben. Dies ist umständlich, insbesondere auf einem mobilen Gerät, und besonders, wenn dasselbe Gerät die Nachricht empfängt und zur Anmeldung auf der Webseite verwendet wird.

In Browsern, die den `OTPCredential` Typ unterstützen, kann das Frontend einer Webseite [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um eine OTP-Anmeldung anzufordern, dann das Backend bitten, einen Code zu generieren und die Nachricht zu senden, die ihn enthält (nur SMS wird als Transport unterstützt). Das Backend muss eine speziell formatierte SMS-Nachricht senden, die der Browser lesen kann.

Der Browser gibt dann ein `OTPCredential` Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält den Code. Das Frontend der Webseite kann den Code verwenden, um ein Eingabefeld auf der Webseite automatisch auszufüllen oder den Code automatisch an den Server zu senden.

![Sequenzdiagramm zeigt die Anmeldung mit einer OTP-Anmeldung.](otp-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) bei der Arbeit mit OTP-Anmeldedaten nicht verwendet werden.

## Web-Authentifizierungsbehauptungen

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ermöglicht es Benutzern, sich auf Webseiten anzumelden, indem sie einen _Authenticator_ veranlassen, digital signierte Behauptungen über die Identität eines Benutzers zu erzeugen.

Ein Authenticator ist eine Entität, die sich im oder am Gerät des Benutzers befindet und in der Lage ist, die kryptografischen Operationen durchzuführen, die für die Registrierung und Authentifizierung von Benutzern erforderlich sind, und die kryptografischen Schlüssel, die in diesen Operationen verwendet werden, sicher zu speichern. Ein Authenticator kann in das Gerät integriert sein, wie das [Touch ID](https://de.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://de.wikipedia.org/wiki/Windows_10#System_sicherheit) System, oder es kann ein abnehmbares Modul wie ein [Yubikey](https://de.wikipedia.org/wiki/YubiKey) sein.

Anstelle von Passwörtern verwendet WebAuthn die {{Glossary("public-key_cryptography", "Public-Key-Kryptografie")}}, um Benutzer zu authentifizieren.

Um einen Benutzer auf einer Webseite mit WebAuthn zu registrieren, rufen Sie [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und geben Sie alle Informationen an, die zur Erstellung eines Schlüsselpaares benötigt werden. Der Authenticator kann den Benutzer zuerst bitten, sich zu authentifizieren, beispielsweise mit einem biometrischen Leser. Er wird dann ein Schlüsselpaar erstellen und den öffentlichen Schlüssel zurückgeben. Dieses Schlüsselpaar ist spezifisch für den Benutzer und die Webseite. Der Authenticator kann auch eine signierte _Attestation_ generieren und zurückgeben: Dies ist eine Erklärung, dass der Authenticator selbst (zum Beispiel) ein echter Yubikey ist.

Das Frontend der Webseite sendet den öffentlichen Schlüssel und die Attestation an den Server, der die Attestation überprüft und den öffentlichen Schlüssel mit den restlichen Kontoinformationen des neuen Benutzers speichert.

![Sequenzdiagramm zeigt die Registrierung mit Web-Authentifizierung.](webauth-create.svg)

Um einen Benutzer auf der Webseite anzumelden, holt der Frontend-Code zunächst eine Zufallszahl vom Server, die als _Challenge_ bezeichnet wird. Dann wird [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufgerufen und die Challenge sowie einige andere Optionen übergeben. Der Authenticator kann den Benutzer erneut bitten, sich zu authentifizieren, und wird dann die Challenge mit dem privaten Schlüssel signieren.

Der Browser gibt dann ein `PublicKeyCredential` Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält die signierte Challenge, die als _Assertion_ bezeichnet wird. Das Frontend der Webseite sendet dann die Assertion an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel überprüft und entscheidet, ob der Benutzer angemeldet wird.

![Sequenzdiagramm zeigt die Anmeldung mit einer Web-Authentifizierungsbehauptung.](webauth-get.svg)

Beachten Sie, dass [`store()`](/de/docs/Web/API/CredentialsContainer/store) bei der Arbeit mit WebAuthn nicht verwendet wird: Das Schlüsselpaar wird im Authenticator erstellt und der private Schlüssel verlässt ihn niemals.

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
