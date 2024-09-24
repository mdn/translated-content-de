---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`AuthenticatorAssertionResponse`**-Schnittstelle der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) enthält eine [digitale Signatur](/de/docs/Glossary/Signature/Security) aus dem privaten Schlüssel eines bestimmten WebAuthn-Anmeldedatensatzes. Der Server der vertrauenden Partei kann diese Signatur verifizieren, um einen Benutzer zu authentifizieren, zum Beispiel, wenn er sich anmeldet.

Ein `AuthenticatorAssertionResponse`-Objekt ist in der {{domxref("PublicKeyCredential.response", "response")}}-Eigenschaft eines {{domxref("PublicKeyCredential")}}-Objektes verfügbar, das von einem erfolgreichen {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}}-Aufruf zurückgegeben wird.

Diese Schnittstelle erbt von {{domxref("AuthenticatorResponse")}}.

{{InheritanceDiagram}}

> [!NOTE]
> Diese Schnittstelle ist auf Top-Level-Kontexte beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements wird keine Wirkung haben.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil {{domxref("AuthenticatorResponse")}}._

- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der Informationen vom Authentifikator enthält, wie den Relying Party ID Hash (rpIdHash), einen Signaturzähler, Test der Benutzeranwesenheit und Benutzerverifizierungs-Flags und alle vom Authentifikator verarbeiteten Erweiterungen.
- {{domxref("AuthenticatorResponse.clientDataJSON")}} {{ReadOnlyInline}}
  - : Enthält die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authentifikator weitergegeben werden, um sich mit diesen Anmeldedaten zu authentifizieren — d.h., wenn {{domxref("CredentialsContainer.get()")}} mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen aus den Optionen, die in den `get()`-Aufruf übergeben werden, und einige Informationen, die vom Browser kontrolliert werden.
- {{domxref("AuthenticatorAssertionResponse.signature")}} {{ReadOnlyInline}}
  - : Eine Assertion-Signatur über {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} und {{domxref("AuthenticatorResponse.clientDataJSON")}}. Die Assertion-Signatur wird mit dem privaten Schlüssel des Schlüsselpaares erstellt, das während des ursprünglichen {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}-Aufrufs erstellt wurde, und mit dem öffentlichen Schlüssel desselben Schlüsselpaares verifiziert.
- {{domxref("AuthenticatorAssertionResponse.userHandle")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der einen undurchsichtigen Benutzeridentifikator enthält, der als `user.id` in den Optionen spezifiziert ist, die an den ursprünglichen {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}-Aufruf übergeben werden.

## Instanz-Methoden

Keine.

## Beispiele

Siehe [Benutzeranmeldung mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("AuthenticatorAttestationResponse")}}: die Schnittstelle für den Typ der Antwort, der bei der Erstellung eines neuen Anmeldedatensatzes gegeben wird
- {{domxref("AuthenticatorResponse")}}: die übergeordnete Schnittstelle
