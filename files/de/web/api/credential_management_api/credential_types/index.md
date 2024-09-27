---
title: Credential Typen
slug: Web/API/Credential_Management_API/Credential_types
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{DefaultAPISidebar("Credential Management API")}}

Die Credential Management API ermöglicht es einer Website, die [Anmeldeinformationen](/de/docs/Glossary/credential), die es einem Benutzer ermöglichen, sich sicher anzumelden, zu erstellen, zu speichern und abzurufen. Es unterstützt vier verschiedene Arten von Anmeldeinformationen:

| Typ                   | Schnittstelle                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Passwort              | [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)                                                                           |
| Föderierte Identität  | [`IdentityCredential`](/de/docs/Web/API/IdentityCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) (veraltet) |
| Einmalpasswort (OTP)  | [`OTPCredential`](/de/docs/Web/API/OTPCredential)                                                                                     |
| Web-Authentifizierung | [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)                                                                         |

Die Anmeldedatentypen werden alle als Unterklassen der [`Credential`](/de/docs/Web/API/Credential) Schnittstelle dargestellt:

![Klassendiagramm, das die fünf verschiedenen Anmeldeinformations-Unterklassen zeigt.](credential-types.svg)

In diesem Leitfaden stellen wir die verschiedenen Anmeldedatenarten vor und erklären auf hoher Ebene, wie sie verwendet werden.

> [!NOTE]
> Auch wenn wir hier alle Anmeldedatentypen zusammen beschreiben, sind die verschiedenen Anmeldedatentypen in mehreren verschiedenen Spezifikationen definiert, die die Hauptspezifikation der Credential Management API erweitern.
>
> - Die [Credential Management API](https://w3c.github.io/webappsec-credential-management/) definiert Passwörter und veraltete föderierte Anmeldeinformationen.
> - Die [Federated Credential Management API](https://w3c-fedid.github.io/FedCM/) definiert die neuen föderierten Anmeldeinformationen.
> - Die [WebOTP API](https://wicg.github.io/web-otp/) definiert OTP-Anmeldedaten.
> - Die [Web Authentication API](https://w3c.github.io/webauthn/) definiert Web-Authentifizierungsaussagen.

## Passwörter

> [!NOTE]
> Die meisten Browser unterstützen diesen Anmeldedatentyp nicht und er wird im Web nicht weit verbreitet verwendet. Stattdessen bieten Browser automatisch an, Passwörter in einem Passwort-Manager zu speichern, und können gespeicherte Passwörter automatisch abrufen, um [Passworteingabeelemente](/de/docs/Web/HTML/Element/input/password) automatisch auszufüllen.

Moderne Browser bieten Benutzern einen Passwort-Manager, der es ihnen ermöglicht, die Passwörter zu speichern, die sie auf Websites eingeben, und sie später abzurufen, wenn sie sich erneut anmelden müssen. Passwort-Manager können bei der Passwortsicherheit helfen, indem sie sich Passwörter für Benutzer merken und sie automatisch ausfüllen, was es den Benutzern ermöglicht, stärkere Passwörter zu wählen.

In der Credential Management API wird ein Passwort durch die [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Schnittstelle dargestellt. Wenn sich ein Benutzer erfolgreich auf Ihrer Website registriert oder anmeldet, können Sie den [`PasswordCredential()`](/de/docs/Web/API/PasswordCredential/PasswordCredential) Konstruktor oder [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) aufrufen, um ein `PasswordCredential`-Objekt aus den vom Benutzer eingegebenen Anmeldeinformationen zu erstellen. Sie können dies dann an [`navigator.credentials.store()`](/de/docs/Web/API/CredentialsContainer/store) übergeben, und der Browser wird den Benutzer fragen, ob er das Passwort im Passwort-Manager speichern möchte.

![Sequenzdiagramm, das die Erstellung und Speicherung einer Passwort-Anmeldeinformation zeigt.](password-create.svg)

Wenn ein Benutzer Ihre Website besucht, können Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um ein gespeichertes Passwort für Ihre Website abzurufen und es zur Anmeldung des Benutzers zu verwenden. Je nach Situation können Sie den Benutzer lautlos anmelden oder das zurückgegebene Passwort verwenden, um ein Formularfeld automatisch auszufüllen.

![Sequenzdiagramm, das die Anmeldung mit einem Passwort-Anmeldeinformation zeigt.](password-get.svg)

## Föderierte Identitätsanmeldeinformationen

In einem [föderierten Identitätssystem](/de/docs/Glossary/federated_identity) agiert eine separate Einheit als Vermittler zwischen dem Benutzer und der Website, bei der sie sich anmelden möchten. Diese Einheit, genannt [Identitätsanbieter](/de/docs/Glossary/identity_provider) (IdP), verwaltet die Anmeldeinformationen des Benutzers, kann Benutzer authentifizieren und wird von der Website vertraut, um Aussagen über die Identität des Benutzers zu treffen.

Der Benutzer hat ein Konto beim IdP: Wenn er sich bei der Website anmelden muss, authentifiziert er sich beim IdP. Der IdP gibt dann ein Token an den Browser des Benutzers zurück, welches der Browser an die Website liefert. Die Website überprüft das Token und meldet den Benutzer an, wenn die Überprüfung erfolgreich ist.

Föderierte Identität wird oft von Unternehmen als Dienstleistung bereitgestellt: Zum Beispiel können Benutzer, die über Google-, Microsoft- oder Facebook-Konten verfügen, sich damit bei Websites anmelden, die diese unterstützen.

Die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) definiert einen datenschutzfreundlichen Mechanismus für föderierte Identität im Web. Sie beginnen, indem Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um eine föderierte Identitätsanmeldeinformation anzufordern, was einen Protokollaustausch zwischen dem Browser und dem IdP auslöst.

Wenn im Laufe dieses Austauschs der Benutzer beim IdP authentifiziert werden kann, gibt der Browser ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück. Der Website-Frontend-Code kann dies zur Verifizierung an den Server senden.

![Sequenzdiagramm, das die Anmeldung mit einer föderierten Identitätsanmeldeinformation zeigt.](fed-cm-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet werden, wenn mit der Federated Credential Management API gearbeitet wird.

> [!NOTE]
> Unterstü Unterstützung für föderierte Identität in der Credential Management API wurde ursprünglich über die [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Schnittstelle bereitgestellt. Dieser Mechanismus hängt jedoch von Technologien wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) ab, die von Natur aus datenschutzverletzend sind. Diese Technologien wurden [in Browsern abgekündigt](/en-US/blog/goodbye-third-party-cookies/), daher war ein neuer Ansatz erforderlich.

## Einmalpasswörter

Ein Einmalpasswort (OTP) ist eine Authentifizierungstechnik, bei der die Website einen einzigartigen Code über ein Messaging-System wie E-Mail oder SMS an den Benutzer sendet. Der Benutzer muss dann den Code auf der Website eingeben, um die Kontrolle über den Kommunikationsendpunkt nachzuweisen. Websites verwenden dies manchmal als zweiten Authentifizierungsfaktor zusätzlich zu einem Passwort.

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) definiert die [`OTPCredential`](/de/docs/Web/API/OTPCredential) Schnittstelle, die ein spezifisches Benutzerproblem in diesem Austausch löst: Wenn ein Benutzer den Code erhält, muss er eine andere Anwendung öffnen, die Nachricht finden und den Code in ein Formular auf der Website einfügen. Dies ist umständlich, besonders auf einem mobilen Gerät, und besonders wenn das Gerät, das die Nachricht empfängt, dasselbe ist wie das, auf dem die Anmeldung bei der Website erfolgt.

In Browsern, die den `OTPCredential`-Typ unterstützen, kann das Frontend der Website [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen und nach einer OTP-Anmeldeinformation fragen, dann das Backend auffordern, einen Code zu generieren und die Nachricht zu senden, die diesen enthält (nur SMS wird als Transport unterstützt). Das Backend muss eine speziell formatierte SMS-Nachricht senden, die der Browser lesen kann.

Der Browser gibt dann ein `OTPCredential` Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält den Code. Das Frontend der Website kann den Code verwenden, um ein Eingabefeld auf der Website automatisch auszufüllen oder den Code automatisch zum Server zu senden.

![Sequenzdiagramm, das die Anmeldung mit einer OTP-Anmeldeinformation zeigt.](otp-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet werden, wenn mit OTP-Anmeldeinformationen gearbeitet wird.

## Web-Authentifizierungsaussagen

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ermöglicht es Benutzern, sich auf Webseiten anzumelden, indem ein _Authenticator_ aufgefordert wird, digital signierte Aussagen über die Identität eines Benutzers zu erzeugen.

Ein Authenticator ist eine Entität, die sich im oder am Gerät des Benutzers befindet und die kryptografischen Operationen, die zur Registrierung und Authentifizierung von Benutzern erforderlich sind, durchführen und die bei diesen Operationen verwendeten kryptografischen Schlüssel sicher speichern kann. Ein Authenticator könnte in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID) System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security) System, oder es könnte ein entfernbares Modul wie ein [Yubikey](https://en.wikipedia.org/wiki/YubiKey) sein.

Statt Passwörtern verwendet WebAuthn [Public-Key-Kryptographie](/de/docs/Glossary/public-key_cryptography), um Benutzer zu authentifizieren.

Um einen Benutzer auf einer Website mit WebAuthn zu registrieren, rufen Sie [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und geben alle benötigten Informationen zur Erstellung eines Schlüsselpaares an. Der Authenticator kann den Benutzer zuerst bitten, sich zu authentifizieren, zum Beispiel mit einem biometrischen Leser. Er wird dann ein Schlüsselpaar generieren und den öffentlichen Schlüssel zurückgeben. Dieses Schlüsselpaar ist spezifisch für den Benutzer und die Website. Der Authenticator kann auch eine signierte _Bescheinigung_ generieren und zurückgeben: Dies ist eine Erklärung, dass der Authenticator selbst (zum Beispiel) ein echter Yubikey ist.

Das Frontend der Website sendet den öffentlichen Schlüssel und die Bescheinigung an den Server, der die Bescheinigung überprüft und den öffentlichen Schlüssel mit den restlichen Kontoinformationen des neuen Benutzers speichert.

![Sequenzdiagramm, das die Registrierung mit Web-Authentifizierung zeigt.](webauth-create.svg)

Um einen Benutzer auf der Website anzumelden, holt der Frontend-Code zuerst eine Zufallszahl vom Server ab, die als _Herausforderung_ bezeichnet wird. Dann ruft es [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf, übergibt die Herausforderung und einige andere Optionen. Der Authenticator kann erneut den Benutzer bitten, sich zu authentifizieren, und wird dann die Herausforderung mit dem privaten Schlüssel signieren.

Der Browser gibt dann ein `PublicKeyCredential` Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält die signierte Herausforderung, die als _Aussage_ bezeichnet wird. Das Frontend der Website sendet die Aussage dann an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel überprüft und entscheidet, ob der Benutzer angemeldet werden soll.

![Sequenzdiagramm, das die Anmeldung mit einer Web-Authentifizierungsaussage zeigt.](webauth-get.svg)

Beachten Sie, dass [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet wird, wenn mit WebAuthn gearbeitet wird: Das Schlüsselpaar wird im Authenticator erstellt und der private Schlüssel verlässt diesen nie.

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
