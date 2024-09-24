---
title: Anmeldedaten-Typen
slug: Web/API/Credential_Management_API/Credential_types
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{DefaultAPISidebar("Credential Management API")}}

Die Credential Management API ermöglicht es einer Website, die {{glossary("credential", "Anmeldedaten")}} zu erstellen, zu speichern und abzurufen, die es einem Benutzer ermöglichen, sich sicher anzumelden. Sie unterstützt vier verschiedene Typen von Anmeldedaten:

| Typ                     | Schnittstelle                                                                     |
| ----------------------- | --------------------------------------------------------------------------------- |
| Passwort                | {{domxref("PasswordCredential")}}                                                 |
| Föderierte Identität    | {{domxref("IdentityCredential")}}, {{domxref("FederatedCredential")}} (veraltet)  |
| Einmalpasswort (OTP)    | {{domxref("OTPCredential")}}                                                      |
| Webauthentifizierung    | {{domxref("PublicKeyCredential")}}                                                |

Die Anmeldedatentypen werden alle als Unterklassen der {{domxref("Credential")}}-Schnittstelle dargestellt:

![Klassendiagramm, das die fünf verschiedenen Anmeldedaten-Unterklassen zeigt.](credential-types.svg)

In dieser Anleitung werden wir die verschiedenen Anmeldedatentypen vorstellen und auf hoher Ebene erklären, wie sie verwendet werden.

> [!NOTE]
> Obwohl wir hier alle Anmeldedatentypen zusammen beschreiben, sind die verschiedenen Anmeldedatentypen in mehreren unterschiedlichen Spezifikationen definiert, die die Hauptspezifikation der Credential Management API erweitern.
>
> - [Credential Management API](https://w3c.github.io/webappsec-credential-management/) definiert Passwörter und veraltete föderierte Anmeldedaten.
> - [Federated Credential Management API](https://w3c-fedid.github.io/FedCM/) definiert die neuen föderierten Anmeldedaten.
> - [WebOTP API](https://wicg.github.io/web-otp/) definiert OTP-Anmeldedaten.
> - [Web Authentication API](https://w3c.github.io/webauthn/) definiert Webauthentifizierungs-Aussagen.

## Passwörter

> [!NOTE]
> Die meisten Browser unterstützen diesen Anmeldedatentyp nicht und er wird im Web nicht weit verbreitet genutzt. Stattdessen bieten Browser automatisch an, Passwörter in einem Passwortmanager zu speichern, und können gespeicherte Passwörter automatisch abrufen, um [Passworteingabefelder](/de/docs/Web/HTML/Element/input/password) automatisch auszufüllen.

Moderne Browser bieten Benutzern einen Passwortmanager, der es ihnen ermöglicht, die Passwörter, die sie auf Websites eingeben, zu speichern und später abzurufen, wenn sie sich erneut anmelden müssen. Passwortmanager können bei der Passwortsicherheit helfen, indem sie Passwörter für Benutzer speichern und automatisch ausfüllen, was es Benutzern ermöglicht, stärkere Passwörter zu wählen.

In der Credential Management API wird ein Passwort durch die {{domxref("PasswordCredential")}}-Schnittstelle dargestellt. Wenn ein Benutzer sich erfolgreich auf Ihrer Website registriert oder anmeldet, können Sie den {{domxref("PasswordCredential.PasswordCredential()", "PasswordCredential()")}}-Konstruktor oder {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} aufrufen, um ein `PasswordCredential`-Objekt aus den vom Benutzer eingegebenen Anmeldedaten zu erstellen. Sie können dieses dann zu {{domxref("CredentialsContainer.store", "navigator.credentials.store()")}} übergeben, und der Browser wird den Benutzer fragen, ob er das Passwort im Passwortmanager speichern möchte.

![Sequenzdiagramm, das die Erstellung und Speicherung eines Passwortanmeldedaten zeigt.](password-create.svg)

Wenn ein Benutzer Ihre Website besucht, können Sie {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} aufrufen, um ein gespeichertes Passwort für Ihre Website abzurufen und es zu verwenden, um den Benutzer anzumelden. Abhängig von der Situation können Sie den Benutzer leise anmelden oder das zurückgegebene Passwort verwenden, um ein Formularfeld automatisch auszufüllen.

![Sequenzdiagramm, das die Anmeldung mit einem Passwortanmeldedaten zeigt.](password-get.svg)

## Föderierte Identitätsanmeldedaten

In einem {{glossary("federated identity", "föderierten Identitätssystem")}} fungiert eine separate Instanz als Vermittler zwischen dem Benutzer und der Website, auf der er sich anzumelden versucht. Diese Instanz, genannt {{glossary("identity provider", "Identitätsanbieter")}} (IdP), verwaltet die Anmeldedaten des Benutzers, kann Benutzer authentifizieren und wird von der Website vertraut, um Aussagen über die Identität eines Benutzers zu machen.

Der Benutzer hat ein Konto beim IdP: Wenn er sich bei der Website anmelden muss, authentifiziert er sich beim IdP. Der IdP gibt dann ein Token an den Browser des Benutzers zurück, das der Browser an die Website liefert. Die Website überprüft das Token und meldet den Benutzer an, wenn die Überprüfung erfolgreich ist.

Föderierte Identität wird oft von Unternehmen als Dienst angeboten: Zum Beispiel können Benutzer, die Google-, Microsoft- oder Facebook-Konten haben, diese verwenden, um sich bei Websites anzumelden, die sie unterstützen.

Die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) definiert einen datenschutzfreundlichen Mechanismus für föderierte Identität im Web. Sie beginnen, indem Sie {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} aufrufen, um ein föderiertes Identitätsanmeldedatum anzufordern, was einen Protokollaustausch zwischen dem Browser und dem IdP auslöst.

Wenn im Zuge dieses Austauschs der Benutzer beim IdP authentifiziert werden kann, gibt der Browser ein {{domxref("IdentityCredential")}}-Objekt in der Erfüllung des von `get()` zurückgegebenen Versprechens zurück. Der Code des Frontends der Website kann dies zur Überprüfung an den Server senden.

![Sequenzdiagramm, das die Anmeldung mit einem föderierten Identitätsanmeldedaten zeigt.](fed-cm-get.svg)

Beachten Sie, dass {{domxref("CredentialsContainer.create", "create()")}} und {{domxref("CredentialsContainer.store", "store()")}} nicht verwendet werden, wenn mit der Federated Credential Management API gearbeitet wird.

> [!NOTE]
> Unterstützung für föderierte Identität in der Credential Management API wurde ursprünglich durch die {{domxref("FederatedCredential")}}-Schnittstelle bereitgestellt. Dieses System hängt jedoch von Technologien ab wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies), die von Natur aus die Privatsphäre verletzen. Diese Technologien wurden [in Browsern veraltet](/en-US/blog/goodbye-third-party-cookies/), daher war ein neuer Ansatz erforderlich.

## Einmalpasswörter

Ein Einmalpasswort (OTP) ist eine Authentifizierungstechnik, bei der die Website einen einmaligen Code an den Benutzer über ein Nachrichtensystem wie E-Mail oder SMS sendet. Der Benutzer muss dann den Code auf der Website eingeben, um seine Kontrolle über den Kommunikationsendpunkt zu beweisen. Websites verwenden dies manchmal als zweiten Authentifizierungsfaktor zusätzlich zu einem Passwort.

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) definiert die {{domxref("OTPCredential")}}-Schnittstelle, die ein spezifisches Bedienbarkeitsproblem in diesem Austausch löst: Wenn ein Benutzer den Code erhält, muss er eine andere Anwendung öffnen, die Nachricht finden und dann den Code in ein Formular auf der Website einfügen. Dies ist umständlich, besonders auf mobilen Geräten, und insbesondere dann, wenn das Gerät, das die Nachricht erhält, das gleiche ist wie das Gerät, mit dem Sie sich auf der Website anmelden.

In Browsern, die den `OTPCredential`-Typ unterstützen, kann das Frontend der Website {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} aufrufen, um ein OTP-Anmeldedatum anzufordern, dann den Backend bitten, einen Code zu generieren und die Nachricht zu senden, die ihn enthält (nur SMS wird als Transport unterstützt). Das Backend muss eine speziell formatierte SMS-Nachricht senden, die der Browser lesen kann.

Der Browser gibt dann ein `OTPCredential`-Objekt in der Erfüllung des von `get()` zurückgegebenen Versprechens zurück, und dieses Objekt enthält den Code. Das Frontend der Website kann den Code verwenden, um ein Eingabelement auf der Website automatisch auszufüllen oder den Code automatisch an den Server zu senden.

![Sequenzdiagramm, das die Anmeldung mit einem OTP-Anmeldedaten zeigt.](otp-get.svg)

Beachten Sie, dass {{domxref("CredentialsContainer.create", "create()")}} und {{domxref("CredentialsContainer.store", "store()")}} nicht verwendet werden, wenn mit OTP-Anmeldedaten gearbeitet wird.

## Webauthentifizierungs-Aussagen

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ermöglicht es Benutzern, sich auf Websites anzumelden, indem sie einen _Authenticator_ um die Erstellung digital signierter Aussagen über die Identität eines Benutzers bitten.

Ein Authenticator ist eine Entität, die sich im oder am Gerät des Benutzers befindet und die kryptografischen Operationen durchführen kann, die zur Registrierung und Authentifizierung von Benutzern erforderlich sind, und die kryptografischen Schlüssel sicher speichert, die bei diesen Operationen verwendet werden. Ein Authenticator könnte in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System, oder es könnte ein entfernbares Modul wie ein [Yubikey](https://en.wikipedia.org/wiki/YubiKey) sein.

Anstelle von Passwörtern verwendet WebAuthn die {{glossary("public-key cryptography", "Public-Key-Kryptografie")}}, um Benutzer zu authentifizieren.

Um einen Benutzer auf einer Website mit WebAuthn zu registrieren, rufen Sie {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} auf und geben Sie alle Informationen an, die zum Erstellen eines Schlüsselpaares erforderlich sind. Der Authenticator kann den Benutzer zunächst bitten, sich selbst zu authentifizieren, beispielsweise mit einem biometrischen Leser. Er wird dann ein Schlüsselpaar generieren und den öffentlichen Schlüssel zurückgeben. Dieses Schlüsselpaar ist spezifisch für den Benutzer und die Website. Der Authenticator kann auch eine signierte _Attestation_ generieren und zurückgeben: Dies ist eine Erklärung, dass der Authenticator selbst (zum Beispiel) ein echter Yubikey ist.

Das Frontend der Website sendet den öffentlichen Schlüssel und die Attestation an den Server, der die Attestation überprüft und den öffentlichen Schlüssel mit den übrigen Kontoinformationen des neuen Benutzers speichert.

![Sequenzdiagramm, das die Registrierung mit Webauthentifizierung zeigt.](webauth-create.svg)

Um einen Benutzer in die Website einzuloggen, ruft der Code des Frontends zunächst eine zufällige Zahl vom Server ab, die _Herausforderung_ genannt wird. Dann ruft es {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} auf, übergibt die Herausforderung und einige andere Optionen. Der Authenticator kann den Benutzer erneut bitten, sich selbst zu authentifizieren und wird dann die Herausforderung mit dem privaten Schlüssel signieren.

Der Browser gibt dann ein `PublicKeyCredential`-Objekt in der Erfüllung des von `get()` zurückgegebenen Versprechens zurück, und dieses Objekt enthält die signierte Herausforderung, die als _Aussage_ bezeichnet wird. Das Frontend der Website sendet die Aussage dann an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel überprüft und entscheidet, ob der Benutzer angemeldet wird.

![Sequenzdiagramm, das die Anmeldung mit einer Webauthentifizierungs-Aussage zeigt.](webauth-get.svg)

Beachten Sie, dass {{domxref("CredentialsContainer.store", "store()")}} nicht verwendet wird, wenn mit WebAuthn gearbeitet wird: Das Schlüsselpaar wird im Authenticator erstellt und der private Schlüssel verlässt ihn niemals.

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
