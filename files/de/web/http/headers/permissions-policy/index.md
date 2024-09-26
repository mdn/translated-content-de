---
title: Permissions-Policy
slug: Web/HTTP/Headers/Permissions-Policy
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTTPSidebar}}

Der HTTP-Header **`Permissions-Policy`** bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Weitere Informationen finden Sie im Hauptartikel [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions Policy Direktive, auf die die `allowlist` angewendet wird. Siehe [Direktiven](#direktiven) unten für eine Liste der zulässigen Direktivnamen.
- `<allowlist>`

  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthalten, getrennt durch Leerzeichen:

    - `*`: Die Funktion ist in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist): Die Funktion ist in obersten und eingebetteten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`: Die Funktion ist in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) im selben Ursprung nur erlaubt. Die Funktion ist in Ursprüngen von Drittanbietern in eingebetteten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`: Die Funktion ist in diesem `<iframe>` erlaubt, solange das darin geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _Standardwert_ der Allowlist in `<iframe>`s.
    - `"<origin>"`: Die Funktion ist für spezifische Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-`allow`-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur einzeln verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Allewlist, die immer einer von `*`, `self` oder `none` für den `Permissions-Policy`-HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht ausdrücklich in einer Richtlinie aufgeführt werden. Diese sind auf den individuellen [Direktiv-Referenzseiten](#direktiven) angegeben. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie in Permissions Policy Ursprüngen Wildcards einbeziehen. Dies bedeutet, dass Sie, anstatt mehrere verschiedene Subdomains explizit in einer Allowlist anzugeben, sie alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Anstatt

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument über die {{DOMxRef("Accelerometer")}}-Schnittstelle Informationen über die Beschleunigung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument über die {{DOMxRef("AmbientLightSensor")}}-Schnittstelle Informationen über die Lichtmenge in der Umgebung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument Medien automatisch abspielen darf, die über die {{domxref("HTMLMediaElement")}}-Schnittstelle angefordert wurden. Wenn diese Richtlinie deaktiviert ist und es keine Benutzerinteraktionen gab, wird das von {{domxref("HTMLMediaElement.play()")}} zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt. Das autoplay-Attribut bei {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Steuert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, geben die Methoden des von {{DOMxRef("Navigator.bluetooth")}} zurückgegebenen {{DOMxRef("Bluetooth")}}-Objekts entweder `false` zurück oder lehnen das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` {{DOMxRef("DOMException")}} ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, misslingt jeder Versuch, die {{domxref("Document.browsingTopics()")}}-Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/camera', 'camera')}}

  - : Steuert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` {{DOMxRef("DOMException")}} abgelehnt.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}}

  - : Steuert, ob das aktuelle Dokument die {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}-Methode verwenden darf, um Bildschirminhalte aufzunehmen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError` {{DOMxRef("DOMException")}} abgelehnt, wenn keine Berechtigung zur Aufzeichnung der Bildschirminhalte erteilt wird.

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument {{domxref("document.domain")}} setzen darf. Wenn diese Richtlinie deaktiviert ist, schlägt der Versuch, {{domxref("document.domain")}} zu setzen, fehl und führt zu einem `SecurityError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von {{domxref("Navigator.requestMediaKeySystemAccess()")}} zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` {{domxref("DOMException")}} abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}}

  - : Steuert, ob das aktuelle Dokument {{DOMxRef("Element.requestFullscreen()")}} verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, lösen Aufrufe von {{domxref('Navigator.getGamepads()')}} einen `SecurityError` {{domxref('DOMException')}} aus, und die {{domxref("Window.gamepadconnected_event", "gamepadconnected")}}- und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}-Ereignisse werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}}

  - : Steuert, ob das aktuelle Dokument die {{domxref('Geolocation')}}-Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} und {{domxref('Geolocation.watchPosition','watchPosition()')}} dazu, dass die Rückruffunktionen dieser Methoden mit einem {{domxref('GeolocationPositionError')}}-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument über die {{DOMxRef("Gyroscope")}}-Schnittstelle Informationen über die Ausrichtung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die {{domxref("WebHID API", "WebHID API", "", "nocode")}} verwenden darf, um eine Verbindung zu seltenen oder exotischen Eingabegeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) und spezifisch die {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}-Methode mit einer `identity`-Option verwenden darf. Wo diese Richtlinie die Nutzung der API verbietet, wird das von dem `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die {{domxref("Idle Detection API", "Idle Detection API", "", "nocode")}} verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, zum Beispiel um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument über die {{DOMxRef("Window.queryLocalFonts()")}}-Methode (siehe auch die {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}) Daten über die lokal installierten Schriften des Benutzers sammeln darf.

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument über die {{DOMxRef("Magnetometer")}}-Schnittstelle Informationen über die Ausrichtung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}}

  - : Steuert, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von {{domxref("MediaDevices.getUserMedia()")}} zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von {{domxref("Navigator.requestMIDIAccess()")}} zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` {{domxref("DOMException")}} abgelehnt.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, d.h. über {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}}.

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wirft der {{domxref("PaymentRequest","PaymentRequest()")}}-Konstruktor einen `SecurityError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument ein Video im Bild-im-Bild-Modus über die entsprechende API abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d.h. über {{domxref("CredentialsContainer.create", "navigator.credentials.create({publicKey: ..., ...})")}}.

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}

  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte öffentliche Schlüsselanmeldeinformationen abzurufen, d.h. über {{domxref("CredentialsContainer.get", "navigator.credentials.get({publicKey: ..., ...})")}}.

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}}

  - : Steuert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die {{domxref("Web Serial API", "Web Serial API", "", "nocode")}} verwenden darf, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Steuert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in ein {{htmlelement("iframe")}}) die {{domxref("Storage Access API", "Storage Access API", "", "nocode")}} verwenden darf, um Zugriff auf unpartitionierte Cookies zu beantragen.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}}

  - : Steuert, ob das aktuelle Dokument die {{domxref("Navigator.share","Navigator.share()")}} der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Texte, Links, Bilder und andere Inhalte an beliebige Ziele nach Wahl des Benutzers zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet oder für jede Richtlinie ein separater Header gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss der erlaubte Ursprung auch in der Allowlist für die übergeordnete Seite enthalten sein. Auf Grund dieses [Vererbungsverhaltens](/de/docs/Web/HTTP/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, den breitesten akzeptablen Support für eine Funktion im HTTP-Header anzugeben, und dann den Teilbereich des Supports, den Sie in jedem `<iframe>` benötigen.

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu gewähren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Das ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Richtlinie nicht an den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut auflisten, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auch auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem eine durch Semikolon getrennte Liste von Richtliniendirektiven im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, dem `src`-Wert besondere Aufmerksamkeit zu schenken. Wir erwähnten oben, dass die Verwendung dieses Allowlist-Wertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_-Allowlist-Wert für Funktionen, die in `allow` aufgelistet sind, sodass die folgenden äquivalent sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Zugriff auf mächtige Funktionen verweigern

Die SecureCorp Inc. möchte die Mikrofon- (zum Beispiel {{domxref("MediaDevices.getUserMedia()")}}) und {{domxref("Geolocation")}}-APIs in ihrer Anwendung deaktivieren. Dies kann mit dem folgenden Antwort-Header erfolgen:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch die Angabe von `()` für die Ursprungsmengen werden die angegebenen Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) unabhängig von ihrem Ursprung deaktiviert.

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Angenommen, wir möchten die Verwendung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten, die von unserem vertrauenswürdigen Werbenetzwerk stammen, aktivieren. Wir könnten die seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Ad-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com`-Ursprung so festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in `<iframe>` geladen wird, hätte er keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- {{DOMxRef("Document.featurePolicy")}} und {{DOMxRef("FeaturePolicy")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
