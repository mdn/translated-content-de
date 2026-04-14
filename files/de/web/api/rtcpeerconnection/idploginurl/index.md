---
title: "RTCPeerConnection: idpLoginUrl-Eigenschaft"
short-title: idpLoginUrl
slug: Web/API/RTCPeerConnection/idpLoginUrl
l10n:
  sourceCommit: efb84732016b60b17f81358960f9d5ebf516c5fe
---

{{APIRef("WebRTC")}}

Die **`idpLoginUrl`** schreibgeschützte Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt einen String zurück, der die URL-Endpunkt enthält, die die Anwendung öffnen kann, um Benutzer bei dem {{Glossary("Identity_provider", "Identity Provider")}} (IdP) anzumelden. Dieser Wert ist `null`, bis der IdP anzeigt, dass eine Anmeldung erforderlich ist.

Wenn ein Aufruf von [`RTCPeerConnection.getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion) fehlschlägt, weil der IdP eine Benutzerauthentifizierung erfordert, wird das resultierende Promise mit einem [`RTCError`](/de/docs/Web/API/RTCError) abgelehnt, dessen [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) `"idp-need-login"` ist. Der Browser setzt dann diese Eigenschaft auf die vom IdP bereitgestellte Anmelde-URL. Die Anwendung kann diese URL öffnen (zum Beispiel in einem Pop-up-Fenster oder `<iframe>`), um dem Benutzer zu ermöglichen, den Anmeldeprozess abzuschließen, bevor der Identitätsnachweis erneut versucht wird.

## Wert

Ein String, der die IdP-Anmelde-URL enthält, oder `null`, wenn keine Anmeldung erforderlich ist.

## Beispiele

### Umgang mit einer IdP-Anmeldeanforderung

In diesem Beispiel versucht die Anwendung, einen Identitätsnachweis zu sammeln. Wenn der IdP den Versuch ablehnt, weil der Benutzer nicht authentifiziert ist, öffnet die Anwendung die in `idpLoginUrl` bereitgestellte Anmelde-URL.

```js
const pc = new RTCPeerConnection();
pc.setIdentityProvider("login.example.com");

pc.getIdentityAssertion().catch((error) => {
  if (pc.idpLoginUrl) {
    console.log(`IdP login required at: ${pc.idpLoginUrl}`);
    // Open the login page in a popup window
    const loginWindow = window.open(
      pc.idpLoginUrl,
      "idp-login",
      "width=500,height=600",
    );
  } else {
    console.error("Identity assertion failed:", error);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity)
- [`RTCPeerConnection.getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
- [`RTCPeerConnection.setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
- [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)
