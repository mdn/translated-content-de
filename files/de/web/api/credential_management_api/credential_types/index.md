---
title: Anmeldedatentypen
slug: Web/API/Credential_Management_API/Credential_types
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{DefaultAPISidebar("Credential Management API")}}

Die Credential Management API ermöglicht es einer Website, {{Glossary("credential", "Anmeldedaten")}} zu erstellen, zu speichern und abzurufen, die es einem Benutzer erlauben, sich sicher einzuloggen. Sie unterstützt vier verschiedene Arten von Anmeldedaten:

| Typ                   | Schnittstelle                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Passwort              | [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)                                                                           |
| Verbundene Identität  | [`IdentityCredential`](/de/docs/Web/API/IdentityCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) (veraltet) |
| Einmalpasswort (OTP)  | [`OTPCredential`](/de/docs/Web/API/OTPCredential)                                                                                     |
| Web Authentifizierung | [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)                                                                         |

Die Anmeldedatentypen werden alle als Unterklassen der [`Credential`](/de/docs/Web/API/Credential)-Schnittstelle dargestellt:

![Klassendiagramm, das die fünf verschiedenen Anmeldedatenunterklassen zeigt.](credential-types.svg)

In diesem Leitfaden stellen wir die verschiedenen Anmeldedatentypen vor und erläutern auf hoher Ebene, wie sie verwendet werden.

> [!NOTE]
> Obwohl wir hier alle Anmeldedatentypen zusammen beschreiben, sind die verschiedenen Anmeldedatentypen in mehreren verschiedenen Spezifikationen definiert, die die Hauptspezifikation der Credential Management API erweitern.
>
> - [Credential Management API](https://w3c.github.io/webappsec-credential-management/) definiert Passwörter und veraltete verbundene Anmeldedaten.
> - [Federated Credential Management API](https://w3c-fedid.github.io/FedCM/) definiert die neuen verbundenen Anmeldedaten.
> - [WebOTP API](https://wicg.github.io/web-otp/) definiert OTP-Anmeldedaten.
> - [Web Authentication API](https://w3c.github.io/webauthn/) definiert Web Authentication Assertions.

## Passwörter

> [!NOTE]
> Die meisten Browser unterstützen diesen Anmeldedatentyp nicht und er wird im Web nicht häufig verwendet. Stattdessen bieten Browser automatisch an, Passwörter in einem Passwortmanager zu speichern und können gespeicherte Passwörter automatisch abrufen, um [Passworteingabeelemente](/de/docs/Web/HTML/Element/input/password) automatisch auszufüllen.

Moderne Browser bieten Benutzern einen Passwortmanager, der es ihnen ermöglicht, die Passwörter, die sie auf Websites eingeben, zu speichern und später abzurufen, wenn sie sich erneut einloggen müssen. Passwortmanager können bei der Passwortsicherheit helfen, indem sie Passwörter für Benutzer merken und sie automatisch ausfüllen, was Benutzern erlaubt, stärkere Passwörter zu wählen.

In der Credential Management API wird ein Passwort durch die [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Schnittstelle dargestellt. Wenn sich ein Benutzer erfolgreich auf Ihrer Website registriert oder einloggt, können Sie den [`PasswordCredential()`](/de/docs/Web/API/PasswordCredential/PasswordCredential)-Konstruktor oder [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) aufrufen, um ein `PasswordCredential`-Objekt aus den Anmeldedaten zu erstellen, die der Benutzer eingegeben hat. Sie können dieses dann in [`navigator.credentials.store()`](/de/docs/Web/API/CredentialsContainer/store) übergeben, und der Browser fragt den Benutzer, ob er das Passwort im Passwortmanager speichern möchte.

![Sequenzdiagramm, das die Erstellung und Speicherung eines Passwortanmeldedatensatzes zeigt.](password-create.svg)

Wenn ein Benutzer Ihre Website besucht, können Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um ein gespeichertes Passwort für Ihre Website abzurufen und es zu verwenden, um den Benutzer einzuloggen. Je nach Situation können Sie den Benutzer lautlos einloggen oder das zurückgegebene Passwort verwenden, um ein Formularelement automatisch auszufüllen.

![Sequenzdiagramm, das das Einloggen mit einem Passwortanmeldedatensatz zeigt.](password-get.svg)

## Verbundene Identitätsanmeldedaten

In einem {{Glossary("federated_identity", "verknüpften Identitätssystem")}} agiert eine separate Instanz als Vermittler zwischen dem Benutzer und der Website, in die er sich einloggen möchte. Diese Instanz, genannt ein {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP), verwaltet die Anmeldedaten des Benutzers, kann Benutzer authentifizieren und wird von der Website vertraut, um Aussagen über die Identität eines Benutzers zu machen.

Der Benutzer hat ein Konto beim IdP: Wenn er sich auf der Website anmelden muss, authentifiziert er sich mit dem IdP. Der IdP gibt dann ein Token an den Browser des Benutzers zurück, das der Browser an die Website liefert. Die Website überprüft das Token und, wenn die Überprüfung erfolgreich ist, meldet sie den Benutzer an.

Verbundene Identität wird oft als Dienstleistung von Unternehmen bereitgestellt: Beispielsweise können Benutzer, die über Google-, Microsoft- oder Facebook-Konten verfügen, diese nutzen, um sich auf unterstützenden Websites anzumelden.

Die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) definiert einen datenschutzfreundlichen Mechanismus für verknüpfte Identität im Web. Sie beginnen, indem Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um eine Anmeldedatenanforderung für verknüpfte Identität anzufordern, was einen Protokollaustausch zwischen dem Browser und dem IdP auslöst.

Wenn im Verlauf dieses Austauschs die Authentifizierung des Benutzers mit dem IdP möglich ist, gibt der Browser ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück. Der Website-Frontend-Code kann dieses zur Überprüfung an den Server senden.

![Sequenzdiagramm, das die Anmeldung mit einem verknüpften Identitätsanmeldedatensatz zeigt.](fed-cm-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet werden, wenn mit der Federated Credential Management API gearbeitet wird.

> [!NOTE]
> Die Unterstützung für verknüpfte Identität in der Credential Management API wurde ursprünglich durch die [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Schnittstelle bereitgestellt. Dieses Verfahren hängt jedoch von Technologien wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) ab, die von Natur aus datenschutzinvasiv sind. Diese Technologien wurden [in Browsern veraltet](/en-US/blog/goodbye-third-party-cookies/), daher war ein neuer Ansatz erforderlich.

## Einmalpasswörter

Ein Einmalpasswort (OTP) ist eine Authentifizierungstechnik, bei der die Website einen eindeutigen Code über ein Nachrichtensystem wie E-Mail oder SMS an den Benutzer sendet. Der Benutzer muss dann den Code auf der Website eingeben, um seine Kontrolle über den Kommunikationsendpunkt nachzuweisen. Websites verwenden dies manchmal als zweiten Authentifizierungsfaktor zusätzlich zu einem Passwort.

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) definiert die [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Schnittstelle, die ein spezifisches Benutzerfreundlichkeitsproblem bei diesem Austausch löst: Wenn ein Benutzer den Code erhält, muss er eine andere Anwendung öffnen, die Nachricht finden und den Code in ein Formular auf der Website kopieren. Dies ist umständlich, insbesondere auf einem mobilen Gerät, und insbesondere, wenn das Gerät, das die Nachricht empfängt, dasselbe ist wie das Gerät, das zum Einloggen auf der Website verwendet wird.

In Browsern, die den `OTPCredential`-Typ unterstützen, kann das Frontend der Website [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um ein OTP-Anmeldedatensatz anzufordern, und dann das Backend bitten, einen Code zu generieren und die Nachricht mit diesem Code zu senden (nur SMS wird als Transport unterstützt). Das Backend muss eine speziell formatierte SMS-Nachricht senden, die der Browser lesen kann.

Der Browser gibt dann ein `OTPCredential`-Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält den Code. Das Frontend der Website kann den Code verwenden, um ein Eingabeelement auf der Website automatisch auszufüllen oder den Code automatisch an den Server zu senden.

![Sequenzdiagramm, das die Anmeldung mit einem OTP-Anmeldedatensatz zeigt.](otp-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) nicht verwendet werden, wenn mit OTP-Anmeldedaten gearbeitet wird.

## Web Authentication Assertions

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ermöglicht es Benutzern, sich bei Websites einzuloggen, indem sie einen _Authenticator_ bitten, digital signierte Aussagen über die Identität eines Benutzers zu erzeugen.

Ein Authenticator ist eine Einheit, die sich innerhalb oder an das Gerät des Benutzers angeschlossen befindet und die kryptografischen Operationen zur Registrierung und Authentifizierung von Benutzern durchführen und die in diesen Operationen verwendeten kryptografischen Schlüssel sicher speichern kann. Ein Authenticator könnte in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System, oder es könnte ein entfernbares Modul wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey) sein.

Anstelle von Passwörtern verwendet WebAuthn {{Glossary("public-key_cryptography", "Public-Key-Kryptographie")}}, um Benutzer zu authentifizieren.

Um einen Benutzer auf einer Website mithilfe von WebAuthn zu registrieren, rufen Sie [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und geben Sie alle Informationen an, die zur Erstellung eines Schlüsselpaares benötigt werden. Der Authenticator kann den Benutzer zuerst bitten, sich zu authentifizieren, beispielsweise mithilfe eines biometrischen Lesegeräts. Er wird dann ein Schlüsselpaar generieren und den öffentlichen Schlüssel zurückgeben. Dieses Schlüsselpaar ist spezifisch für den Benutzer und die Website. Der Authenticator kann auch eine signierte _Attestation_ erzeugen und zurückgeben: Dies ist eine Aussage, dass der Authenticator selbst (zum Beispiel) ein echter YubiKey ist.

Das Frontend der Website sendet den öffentlichen Schlüssel und die Attestation an den Server, der die Attestation überprüft und den öffentlichen Schlüssel zusammen mit dem Rest der Kontoangaben des neuen Benutzers speichert.

![Sequenzdiagramm, das die Registrierung mit Web-Authentifizierung zeigt.](webauth-create.svg)

Um einen Benutzer auf der Website einzuloggen, ruft der Frontend-Code zuerst eine Zufallszahl vom Server ab, die als _Challenge_ bezeichnet wird. Dann ruft es [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf und gibt die Challenge und einige andere Optionen ein. Der Authenticator kann den Benutzer erneut bitten, sich zu authentifizieren und wird dann die Challenge mit dem privaten Schlüssel signieren.

Der Browser gibt dann ein `PublicKeyCredential`-Objekt in der Erfüllung des von `get()` zurückgegebenen `Promise` zurück, und dieses Objekt enthält die signierte Challenge, die als _Assertion_ bezeichnet wird. Das Frontend der Website sendet die Assertion dann an den Server, der die Signatur mithilfe des gespeicherten öffentlichen Schlüssels überprüft und entscheidet, ob der Benutzer eingeloggt werden soll.

![Sequenzdiagramm, das die Anmeldung mit einer Web-Authentifizierungsassertion zeigt.](webauth-get.svg)

Beachten Sie, dass [`store()`](/de/docs/Web/API/CredentialsContainer/store) bei der Arbeit mit WebAuthn nicht verwendet wird: Das Schlüsselpaar wird im Authenticator erstellt und der private Schlüssel verlässt ihn niemals.

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
