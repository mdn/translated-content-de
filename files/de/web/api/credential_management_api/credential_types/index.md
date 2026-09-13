---
title: Anmeldedatentypen
slug: Web/API/Credential_Management_API/Credential_types
l10n:
  sourceCommit: 8d9000d223edd31bd4b28dad956d8890b31b1ce3
---

{{DefaultAPISidebar("Credential Management API")}}

Die Credential Management API ermöglicht es einer Website, die {{Glossary("credential", "Anmeldedaten")}} zu erstellen, zu speichern und abzurufen, mit denen sich ein Benutzer sicher anmelden kann. Sie unterstützt vier verschiedene Arten von Anmeldedaten:

| Typ                  | Schnittstelle                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Passwort             | [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)                                                                           |
| Föderierte Identität | [`IdentityCredential`](/de/docs/Web/API/IdentityCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) (veraltet) |
| Einmalpasswort (OTP) | [`OTPCredential`](/de/docs/Web/API/OTPCredential)                                                                                     |
| Web Authentication   | [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)                                                                         |

Die Anmeldedatentypen werden alle als Unterklassen der Schnittstelle [`Credential`](/de/docs/Web/API/Credential) dargestellt:

![Klassendiagramm, das die fünf verschiedenen Unterklassen von Anmeldedaten zeigt.](credential-types.svg)

In diesem Leitfaden stellen wir die verschiedenen Anmeldedatentypen vor und erläutern allgemein, wie sie verwendet werden.

> [!NOTE]
> Obwohl wir hier alle Anmeldedatentypen gemeinsam beschreiben, sind die verschiedenen Anmeldedatentypen in mehreren unterschiedlichen Spezifikationen definiert, welche die Hauptspezifikation der Credential Management API erweitern.
>
> - Die [Credential Management API](https://w3c.github.io/webappsec-credential-management/) definiert Passwörter und ältere föderierte Anmeldedaten.
> - Die [Federated Credential Management API](https://w3c-fedid.github.io/FedCM/) definiert die neuen föderierten Anmeldedaten.
> - Die [WebOTP API](https://wicg.github.io/web-otp/) definiert OTP-Anmeldedaten.
> - Die [Web Authentication API](https://w3c.github.io/webauthn/) definiert Web-Authentication-Assertions.

## Passwörter

> [!NOTE]
> Die meisten Browser unterstützen diesen Anmeldedatentyp nicht, und er wird im Web nicht häufig verwendet. Stattdessen bieten Browser automatisch an, Passwörter in einem Passwortmanager zu speichern, und können gespeicherte Passwörter automatisch abrufen, um [Passworteingabeelemente](/de/docs/Web/HTML/Reference/Elements/input/password) automatisch auszufüllen.

Moderne Browser stellen Benutzern einen Passwortmanager bereit, mit dem Benutzer die auf Websites eingegebenen Passwörter speichern und später abrufen können, wenn sie sich erneut anmelden müssen. Passwortmanager können die Passwortsicherheit verbessern, indem sie sich Passwörter für Benutzer merken und diese automatisch ausfüllen, sodass Benutzer stärkere Passwörter wählen können.

In der Credential Management API wird ein Passwort durch die Schnittstelle [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) dargestellt. Wenn sich ein Benutzer erfolgreich auf Ihrer Website registriert oder bei ihr anmeldet, können Sie den Konstruktor [`PasswordCredential()`](/de/docs/Web/API/PasswordCredential/PasswordCredential) oder [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) aufrufen, um aus den vom Benutzer eingegebenen Anmeldedaten ein `PasswordCredential`-Objekt zu erstellen. Sie können dieses dann an [`navigator.credentials.store()`](/de/docs/Web/API/CredentialsContainer/store) übergeben; der Browser fragt den Benutzer daraufhin, ob er das Passwort im Passwortmanager speichern möchte.

![Sequenzdiagramm, das die Erstellung und Speicherung von Passwort-Anmeldedaten zeigt.](password-create.svg)

Wenn ein Benutzer Ihre Website besucht, können Sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, um ein für Ihre Website gespeichertes Passwort abzurufen und es zur Anmeldung des Benutzers zu verwenden. Abhängig von der Situation können Sie den Benutzer unbemerkt anmelden oder das zurückgegebene Passwort verwenden, um ein Formularfeld automatisch auszufüllen.

![Sequenzdiagramm, das die Anmeldung mit Passwort-Anmeldedaten zeigt.](password-get.svg)

## Föderierte Identitätsanmeldedaten

In einem System mit {{Glossary("federated_identity", "föderierter Identität")}} agiert eine separate Instanz als Vermittler zwischen dem Benutzer und der Website, bei der er sich anmelden möchte. Diese Instanz, ein sogenannter {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP), verwaltet die Anmeldedaten des Benutzers, kann Benutzer authentifizieren und genießt das Vertrauen der Website, Aussagen über die Identität eines Benutzers zu treffen.

Der Benutzer hat ein Konto beim IdP: Wenn er sich bei der Website anmelden muss, authentifiziert er sich beim IdP. Der IdP gibt dann ein Token an den Browser des Benutzers zurück, das der Browser an die Website übermittelt. Die Website überprüft das Token und meldet den Benutzer an, wenn die Überprüfung erfolgreich ist.

Föderierte Identität wird oft von Unternehmen als Dienst bereitgestellt: Benutzer mit Google-, Microsoft- oder Facebook-Konten können diese beispielsweise verwenden, um sich bei Websites anzumelden, die sie unterstützen.

Die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) definiert einen datenschutzfreundlichen Mechanismus für föderierte Identität im Web. Sie beginnen mit dem Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), um föderierte Identitätsanmeldedaten anzufordern; dadurch wird ein Protokollaustausch zwischen dem Browser und dem IdP ausgelöst.

Kann der Benutzer im Verlauf dieses Austauschs beim IdP authentifiziert werden, gibt der Browser bei der Erfüllung des von `get()` zurückgegebenen `Promise` ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt zurück. Der Front-End-Code der Website kann dieses zur Überprüfung an den Server senden.

![Sequenzdiagramm, das die Anmeldung mit föderierten Identitätsanmeldedaten zeigt.](fed-cm-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) bei der Arbeit mit der Federated Credential Management API nicht verwendet werden.

> [!NOTE]
> Unterstützung für föderierte Identität in der Credential Management API wurde ursprünglich über die Schnittstelle [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) bereitgestellt. Dieser Mechanismus hängt jedoch von Technologien wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) ab, die grundsätzlich in die Privatsphäre eingreifen. Diese Technologien wurden [in Browsern als veraltet eingestuft](/en-US/blog/goodbye-third-party-cookies/), weshalb ein neuer Ansatz erforderlich war.

## Einmalpasswörter

Ein Einmalpasswort (OTP) ist eine Authentifizierungstechnik, bei der die Website dem Benutzer über ein Nachrichtensystem wie E-Mail oder SMS einen eindeutigen Code sendet. Der Benutzer muss den Code dann auf der Website eingeben, um die Kontrolle über den Kommunikationsendpunkt nachzuweisen. Websites verwenden dies manchmal zusätzlich zu einem Passwort als zweiten Authentifizierungsfaktor.

Die [WebOTP API](/de/docs/Web/API/WebOTP_API) definiert die Schnittstelle [`OTPCredential`](/de/docs/Web/API/OTPCredential), die ein spezifisches Bedienbarkeitsproblem bei diesem Austausch löst: Wenn ein Benutzer den Code erhält, muss er eine andere Anwendung öffnen, die Nachricht finden und dann den Code in ein Formular auf der Website kopieren. Dies ist umständlich, insbesondere auf einem Mobilgerät und besonders dann, wenn das Gerät, das die Nachricht empfängt, dasselbe Gerät ist, das zur Anmeldung auf der Website verwendet wird.

In Browsern, die den Typ `OTPCredential` unterstützen, kann das Front End der Website [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen und OTP-Anmeldedaten anfordern. Anschließend kann es das Backend bitten, einen Code zu generieren und die ihn enthaltende Nachricht zu senden (als Übertragungsweg wird nur SMS unterstützt). Das Backend muss eine speziell formatierte SMS-Nachricht senden, die der Browser lesen kann.

Der Browser gibt dann bei der Erfüllung des von `get()` zurückgegebenen `Promise` ein `OTPCredential`-Objekt zurück, das den Code enthält. Das Front End der Website kann den Code verwenden, um ein Eingabeelement auf der Website automatisch auszufüllen, oder den Code automatisch an den Server übermitteln.

![Sequenzdiagramm, das die Anmeldung mit OTP-Anmeldedaten zeigt.](otp-get.svg)

Beachten Sie, dass [`create()`](/de/docs/Web/API/CredentialsContainer/create) und [`store()`](/de/docs/Web/API/CredentialsContainer/store) bei der Arbeit mit OTP-Anmeldedaten nicht verwendet werden.

## Web-Authentication-Assertions

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) (WebAuthn) ermöglicht es Benutzern, sich bei Websites anzumelden, indem sie einen _Authenticator_ auffordert, digital signierte Assertions über die Identität eines Benutzers zu erzeugen.

Ein Authenticator ist eine Instanz, die sich im Gerät des Benutzers befindet oder daran angeschlossen ist und die kryptografischen Operationen ausführen kann, die zum Registrieren und Authentifizieren von Benutzern erforderlich sind. Außerdem kann er die bei diesen Operationen verwendeten kryptografischen Schlüssel sicher speichern. Ein Authenticator kann in das Gerät integriert sein, wie das [Touch-ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows-Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System, oder ein abnehmbares Modul wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey) sein.

Statt Passwörtern verwendet WebAuthn {{Glossary("public-key_cryptography", "Public-Key-Kryptografie")}}, um Benutzer zu authentifizieren.

Um einen Benutzer mithilfe von WebAuthn auf einer Website zu registrieren, rufen Sie [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und geben alle Informationen an, die zum Erstellen eines Schlüsselpaars erforderlich sind. Der Authenticator kann den Benutzer zunächst auffordern, sich zu authentifizieren, beispielsweise mit einem biometrischen Lesegerät. Anschließend erzeugt er ein Schlüsselpaar und gibt den öffentlichen Schlüssel zurück. Dieses Schlüsselpaar ist spezifisch für den Benutzer und die Website. Der Authenticator kann außerdem eine signierte _Attestation_ erzeugen und zurückgeben: Dies ist eine Aussage darüber, dass der Authenticator selbst beispielsweise ein echter YubiKey ist.

Das Front End der Website sendet den öffentlichen Schlüssel und die Attestation an den Server, der die Attestation überprüft und den öffentlichen Schlüssel zusammen mit den übrigen Kontoinformationen des neuen Benutzers speichert.

![Sequenzdiagramm, das die Registrierung mit Web Authentication zeigt.](webauth-create.svg)

Um einen Benutzer bei der Website anzumelden, ruft der Front-End-Code zunächst eine Zufallszahl vom Server ab, die als _Challenge_ bezeichnet wird. Dann ruft er [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) auf und übergibt die Challenge sowie einige weitere Optionen. Der Authenticator kann den Benutzer erneut zunächst auffordern, sich zu authentifizieren, und signiert anschließend die Challenge mit dem privaten Schlüssel.

Der Browser gibt dann bei der Erfüllung des von `get()` zurückgegebenen `Promise` ein `PublicKeyCredential`-Objekt zurück. Dieses Objekt enthält die signierte Challenge, die als _Assertion_ bezeichnet wird. Das Front End der Website sendet die Assertion anschließend an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel überprüft und entscheidet, ob der Benutzer angemeldet wird.

![Sequenzdiagramm, das die Anmeldung mit einer Web-Authentication-Assertion zeigt.](webauth-get.svg)

Beachten Sie, dass [`store()`](/de/docs/Web/API/CredentialsContainer/store) bei der Arbeit mit WebAuthn nicht verwendet wird: Das Schlüsselpaar wird im Authenticator erstellt, und der private Schlüssel verlässt ihn niemals.

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [WebOTP API](/de/docs/Web/API/WebOTP_API)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
