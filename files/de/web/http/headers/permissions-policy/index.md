---
title: Berechtigungen-Policy
slug: Web/HTTP/Headers/Permissions-Policy
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTTPSidebar}}

Der HTTP-Header **`Permissions-Policy`** bietet einen Mechanismus, um die Verwendung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Für weitere Informationen siehe den Hauptartikel [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).

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
  - : Die Permissions Policy-Direktive, auf die die `allowlist` angewendet wird. Siehe [Direktiven](#direktiven) unten für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`

  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden in Klammern enthaltenen, durch Leerzeichen getrennte Werte enthalten kann:

    - `*`: Die Funktion wird in diesem Dokument und allen eingebetteten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt sein.
    - `()` (leere Allowlist): Die Funktion ist in den obersten und eingebetteten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>` `allow`-Attribute ist `'none'`.
    - `self`: Die Funktion wird in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) im gleichen Ursprung erlaubt sein. Die Funktion ist in fremd-ursprungs-basierten Dokumenten in eingebetteten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` angesehen werden. Das Äquivalent für `<iframe>` `allow`-Attribute ist `self`.
    - `src`: Die Funktion wird in diesem `<iframe>` erlaubt sein, solange das darin geladene Dokument vom gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut kommt. Dieser Wert wird nur im `<iframe>` `allow`-Attribut verwendet und ist der _standardmäßige_ `allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`: Die Funktion ist für bestimmte Ursprünge erlaubt (z. B. `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` allow-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden dürfen.

    > [!NOTE]
    > Direktiven haben eine Standard-allowlist, die immer `*`, `self` oder `none` im `Permissions-Policy`-HTTP-Header ist und das Standardverhalten steuert, wenn sie nicht ausdrücklich in einer Policy gelistet sind. Diese sind auf den einzelnen [Direktivreferenzseiten](#direktiven) festgelegt. Für `<iframe>` `allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Permissions Policy-Ursprüngen verwenden. Das bedeutet, dass Sie anstelle mehrerer unterschiedlicher Subdomains in einer Allowlist alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Statt

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie verwenden

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über das {{DOMxRef("Accelerometer")}}-Interface erfassen kann.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Lichtmenge in der Umgebung des Geräts über das {{DOMxRef("AmbientLightSensor")}}-Interface erfassen kann.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Medien, die über das {{domxref("HTMLMediaElement")}}-Interface angefordert werden, automatisch abspielen darf. Wenn diese Policy deaktiviert ist und keine Benutzeraktionen vorhanden waren, wird das {{jsxref("Promise")}}, das von {{domxref("HTMLMediaElement.play()")}} zurückgegeben wird, mit einem `NotAllowedError`-{{domxref("DOMException")}} abgelehnt. Das autoplay-Attribut auf {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Kontrolliert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Policy deaktiviert ist, werden die Methoden des {{DOMxRef("Bluetooth")}}-Objekts, das von {{DOMxRef("Navigator.bluetooth")}} zurückgegeben wird, entweder `false` zurückgeben oder das {{JSxRef("Promise")}} mit einem `SecurityError` {{DOMxRef("DOMException")}} ablehnen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Kontrolliert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Policy die Verwendung der Topics API ausdrücklich untersagt, führen Versuche, die {{domxref("Document.browsingTopics()")}}-Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, zu einem `NotAllowedError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/camera', 'camera')}}

  - : Kontrolliert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf. Wenn diese Policy deaktiviert ist, wird das {{jsxref("Promise")}}, das von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} zurückgegeben wird, mit einem `NotAllowedError` {{DOMxRef("DOMException")}} abgelehnt.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Kontrolliert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}}

  - : Kontrolliert, ob das aktuelle Dokument die Methode {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} verwenden darf, um Bildschirminhalt zu erfassen. Wenn diese Policy deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError` {{DOMxRef("DOMException")}} abgelehnt, falls keine Berechtigung zur Erfassung des Bildschirminhalts erteilt wird.

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument {{domxref("document.domain")}} setzen darf. Wenn diese Policy deaktiviert ist, wird der Versuch, {{domxref("document.domain")}} zu setzen, fehlschlagen und einen `SecurityError` {{domxref("DOMException")}} auslösen.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Policy deaktiviert ist, wird das von {{domxref("Navigator.requestMediaKeySystemAccess()")}} zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` {{DOMxRef("DOMException")}} abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}}

  - : Kontrolliert, ob das aktuelle Dokument {{DOMxRef("Element.requestFullscreen()")}} verwenden darf. Wenn diese Policy deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf. Wenn diese Policy deaktiviert ist, werden Aufrufe von {{domxref('Navigator.getGamepads()')}} einen `SecurityError` {{domxref('DOMException')}} auslösen, und die {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}-Ereignisse werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}}

  - : Kontrolliert, ob das aktuelle Dokument das {{domxref('Geolocation')}}-Interface verwenden darf. Wenn diese Policy deaktiviert ist, führen Aufrufe von {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} und {{domxref('Geolocation.watchPosition','watchPosition()')}} dazu, dass die Rückruffunktionen dieser Methoden mit einem {{domxref('GeolocationPositionError')}}-Code `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über das {{DOMxRef("Gyroscope")}}-Interface erfassen kann.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die {{domxref("WebHID API", "WebHID API", "", "nocode")}} verwenden darf, um eine Verbindung zu ungewöhnlichen oder exotischen menschlichen Schnittstellengeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) benutzen darf, insbesondere die Methode {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} mit einer `identity`-Option. Wo diese Policy die Verwendung der API untersagt, wird das von dem `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die {{domxref("Idle Detection API", "Idle Detection API", "", "nocode")}} verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers über die Methode {{DOMxRef("Window.queryLocalFonts()")}} erfassen darf (siehe auch die {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über das {{DOMxRef("Magnetometer")}}-Interface erfassen kann.

- {{httpheader('Permissions-Policy/microphone','microphone')}}

  - : Kontrolliert, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Policy deaktiviert ist, wird das {{jsxref("Promise")}}, das von {{domxref("MediaDevices.getUserMedia()")}} zurückgegeben wird, mit einem `NotAllowedError` {{domxref("DOMException")}} abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Policy deaktiviert ist, wird das von {{domxref("Navigator.requestMIDIAccess()")}} zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` {{domxref("DOMException")}} abgelehnt.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmal-Passwort (OTP) aus einer speziell formatierten SMS-Nachricht, die vom Server der App gesendet wird, zu erhalten, d. h. über {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}}.

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Policy aktiviert ist, wird der {{domxref("PaymentRequest","PaymentRequest()")}}-Konstruktor einen `SecurityError` {{domxref("DOMException")}} auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument ein Video im Bild-in-Bild-Modus über die entsprechende API abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d.h. über {{domxref("CredentialsContainer.create", "navigator.credentials.create({publicKey: ..., ...})")}}.

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte Public-Key-Anmeldeinformationen abzurufen, d.h. über {{domxref("CredentialsContainer.get", "navigator.credentials.get({publicKey: ..., ...})")}}.

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}}

  - : Kontrolliert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die {{domxref("Web Serial API", "Web Serial API", "", "nocode")}} verwenden darf, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Port oder über USB- oder Bluetooth-Geräte, die einen seriellen Port emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Kontrolliert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in einem {{htmlelement("iframe")}}) die {{domxref("Storage Access API", "Storage Access API", "", "nocode")}} verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}}

  - : Kontrolliert, ob das aktuelle Dokument die {{domxref("Navigator.share","Navigator.share()")}} der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte mit beliebigen Zielen nach der Wahl des Benutzers zu teilen, z.B. mit mobilen Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Anzeigen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Session zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugriff auf Geolokalisierung zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen einzuschränken, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Komma getrennten Liste von Policies gesendet wird oder indem ein separater Header für jede Policy gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Allowlist der übergeordneten Seite enthalten sein. Aufgrund dieses [Vererbungverhaltens](/de/docs/Web/HTTP/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die größtmögliche Unterstützung für eine Funktion im HTTP-Header anzugeben und dann den erforderlichen Teil der Unterstützung in jedem `<iframe>` zu spezifizieren.

Um allen Ursprüngen Zugriff auf Geolokalisierung zu gewähren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Policy auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Das ist wichtig: Standardmäßig wird die Policy nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert, wenn ein `<iframe>` zu einem anderen Ursprung navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut auflisten, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolon getrennte Liste von Policy-Direktiven im `allow`-Attribut angegeben wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist wichtig, dem `src`-Wert ein besonderes Augenmerk zu widmen. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Werts bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt ist, solange das darin geladene Dokument vom gleichen Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut kommt. Dieser Wert ist der _standardmäßige_ `allowlist`-Wert für Funktionen, die in `allow` aufgeführt sind, sodass die folgenden äquivalent sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die Mikrofon- (z.B. {{domxref("MediaDevices.getUserMedia()")}}) und {{domxref("Geolocation")}}-APIs in seiner Anwendung deaktivieren. Dies kann mit dem folgenden Antwortheader erfolgen:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch Angabe von `()` für die Ursprungs-Liste werden die angegebenen Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) unabhängig von ihrem Ursprung deaktiviert.

### Kombinierung von HTTP-Header und `<iframe>`-Policies

Nehmen wir an, wir wollten die Nutzung von Geolokalisierung auf unserem eigenen Ursprung und eingebetteten Inhalten unseres vertrauenswürdigen Werbenetzwerks erlauben. Wir könnten die seitenweite Permissions Policy wie folgt einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` wie folgt festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in `<iframe>` geladen wurde, hätte er keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- {{DOMxRef("Document.featurePolicy")}} und {{DOMxRef("FeaturePolicy")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
