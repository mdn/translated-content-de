---
title: Permissions-Policy
slug: Web/HTTP/Headers/Permissions-Policy
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Für weitere Informationen, siehe den Hauptartikel zur [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions Policy-Direktive, auf die die `allowlist` angewendet werden soll. Siehe [Direktiven](#direktiven) unten für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`

  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthält, getrennt durch Leerzeichen:

    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>` `allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) mit demselben Ursprung nur erlaubt. Die Funktion ist in dokumentenübergreifenden Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` angesehen werden. Das Äquivalent für `<iframe>` `allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument vom selben Ursprung stammt wie die URL in ihrem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert wird nur im `<iframe>` `allow`-Attribut verwendet und ist der _Standard_ `allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` allow-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Allowlist, die immer eine der `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Direktiven-Referenzseiten](#direktiven) angegeben. Für `<iframe>` `allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Permissions Policy Ursprüngen einfügen. Dies bedeutet, dass Sie statt mehrere verschiedene Subdomains explizit in einer Allowlist anzugeben, sie alle in einem einzigen Ursprung mit einem Wildcard angeben können.

Anstelle von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie

```http
("https://example.com" "https://*.example.com")
```

spezifizieren.

> **Hinweis:** `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über die Schnittstelle [`Accelerometer`](/de/docs/Web/API/Accelerometer) sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Lichtstärke in der Umgebung des Geräts über die Schnittstelle [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) sammeln darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Medien über die Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) automatisch abspielen darf. Wenn diese Richtlinie deaktiviert ist und es keine Benutzerinteraktionen gab, wird das {{jsxref("Promise")}}, das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das Attribut "autoplay" bei {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Kontrolliert, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, werden die Methoden des von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegebenen [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Regelt den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Falls eine Richtlinie die Nutzung der Topics API verbietet, schlagen alle Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Regelt den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument als [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirm-Inhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, falls keine Berechtigung zur Erfassung der Bildschirm-Inhalte erteilt wird.

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument [`document.domain`](/de/docs/Web/API/Document/domain) setzen darf. Wenn diese Richtlinie deaktiviert ist, führt der Versuch, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen, zu einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException).

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation) Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Callbacks dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die Schnittstelle [`Gyroscope`](/de/docs/Web/API/Gyroscope) sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu unüblichen oder exotischen menschlichen Schnittstellengeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Verbundene Anmeldeinformation-Verwaltungs-API (Federated Credential Management API, FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf, insbesondere die Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option. Wo diese Richtlinie die Verwendung der API verbietet, wird das {{jsxref("Promise")}}, das vom `get()`-Aufruf zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, zum Beispiel um einen "verfügbaren"/"abwesenden" Status in Chat-Anwendungen zu melden.

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)) sammeln darf.

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die Schnittstelle [`Magnetometer`](/de/docs/Web/API/Magnetometer) sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein einmaliges Passwort (OTP) aus einer speziell formatierten SMS-Nachricht zu beantragen, die vom Server der App gesendet wird, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wird der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument ein Video über die entsprechende API im Bild-im-Bild-Modus abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte öffentliche Schlüsselanmeldeinformationen abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Port oder über USB- oder Bluetooth-Geräte verbunden sind, die einen seriellen Port emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Audioausgabegeräte-API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Kontrolliert, ob ein Dokument, das in einem Drittkontext (d.h. eingebettet in einem {{htmlelement("iframe")}}) geladen wird, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um den Zugriff auf nicht partitionierte Cookies anzufordern.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) des [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele aus der Auswahl des Benutzers weiterzugeben, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Nutzung

#### Permissions-Policy-Header

Um allen Ursprüngen den Zugriff auf die Geolokalisierung zu erlauben, würden Sie dies so tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies so tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer kommagetrennten Liste von Richtlinien gesendet wird oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel, die folgenden sind gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Allowlist der übergeordneten Seite enthalten sein. Aufgrund dieses [Vererbungverhaltens](/de/docs/Web/HTTP/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, in dem HTTP-Header die weitestgehende akzeptable Unterstützung für eine Funktion festzulegen und dann das benötigte Unterstützungsubset in jedem `<iframe>` zu spezifizieren.

Um allen Ursprüngen den Zugriff auf die Geolokalisierung zu erlauben, würden Sie dies so tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut auflisten, wird die auf das ursprüngliche `<iframe>` angewendete Permissions-Policy auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine Liste von Richtliniendirektiven, die durch Semikolons getrennt sind, im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, dem `src`-Wert besondere Erwähnung zu schenken. Wir erwähnten oben, dass die Verwendung dieses Allowlist-Wertes bedeutet, dass die damit verbundene Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom selben Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert ist der _Standard_ `allowlist`-Wert für Funktionen, die in `allow` aufgeführt sind, daher sind die folgenden gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Zugang zu leistungsfähigen Funktionen verweigern

SecureCorp Inc. möchte die Mikrofon- (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) APIs in seiner Anwendung deaktivieren. Dies kann mit dem folgenden Antwort-Header erreicht werden:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch das Angeben von `()` für die Ursprungs-Liste werden die angegebenen Funktionen für alle Browsing-Kontexte deaktiviert (einschließlich aller `<iframe>`s), unabhängig von ihrem Ursprung.

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Angenommen, wir möchten die Nutzung von Geolokalisierung auf unserem eigenen Ursprung und in eingebettetem Inhalt von unserem vertrauenswürdigen Werbenetzwerk aktivieren. Wir könnten die seitenweite Permissions-Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` wie folgt setzen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in das `<iframe>` geladen würde, hätte er keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
