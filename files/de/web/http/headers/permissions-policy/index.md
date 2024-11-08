---
title: Permissions-Policy
slug: Web/HTTP/Headers/Permissions-Policy
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header **`Permissions-Policy`** bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Weitere Informationen finden Sie im Hauptartikel [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions Policy-Direktive, auf die die `Allowlist` angewendet wird. Siehe unten [Direktiven](#direktiven) für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`

  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte enthält, in Klammern eingeschlossen und durch Leerzeichen getrennt:

    - `*`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist): Die Funktion ist in den obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-Attribute `allow` ist `'none'`.
    - `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) im selben Ursprung nur erlaubt. Die Funktion ist in Cross-Origin-Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` angesehen werden. Das Äquivalent für `<iframe>`-Attribute `allow` ist `self`.
    - `src`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>`-Attribut `allow` verwendet und ist der _Standard_-`Allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`: Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt sein. Beachten Sie, dass Ursprünge in `<iframe>`-Erlaubnis-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Allowlist, die immer eine von `*`, `self` oder `none` für den `Permissions-Policy`-HTTP-Header ist und das Standardverhalten steuert, wenn sie nicht explizit in einer Richtlinie aufgeführt sind. Diese sind auf den individuellen [Richtlinienreferenzseiten](#direktiven) angegeben. Für `<iframe>`-Attribute `allow` ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Permissions Policy-Ursprüngen verwenden. Dies bedeutet, dass Sie anstelle von mehreren verschiedenen Subdomains explizit in einer Allowlist alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Stattdessen von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Informationen über die Lichtmenge in der Umgebung des Geräts über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Medien ungefragt über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle automatisch abspielen darf. Wenn diese Richtlinie deaktiviert ist und keine Benutzerinteraktionen vorhanden waren, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen. Das autoplay-Attribut bei {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Bestimmt, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Bestimmt den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, schlägt jeder Versuch, die [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)-Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument Videoeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Bestimmt den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirminhalte aufzunehmen. Wenn diese Richtlinie deaktiviert ist, wird das Promise, das von `getDisplayMedia()` zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, wenn keine Berechtigung zur Aufzeichnung der Bildschirminhalte erteilt wird.

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument [`document.domain`](/de/docs/Web/API/Document/domain) setzen darf. Wenn diese Richtlinie deaktiviert ist, wird der Versuch, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen, fehlschlagen und eine `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} zurückgewiesen.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zu einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException), und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückruffunktionen dieser Methoden mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu unkonventionellen oder exotischen Mensch-Maschine-Schnittstellengeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf, insbesondere die Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option. Wo diese Richtlinie die Nutzung der API verbietet, wird das {{jsxref("Promise")}}, das vom Aufruf `get()` zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um in Chat-Anwendungen "verfügbar"/"abwesend" zu melden.

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) sammeln darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht, die vom Server der App gesendet wurde, anzufordern, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest)-Konstruktor einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument ein Video im Bild-in-Bild-Modus über die entsprechende API abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldedaten zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte Public-Key-Anmeldedaten abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Bestimmt, ob ein Dokument, das in einem Drittanbieter-Kontext (d.h. eingebettet in ein {{htmlelement("iframe")}}) geladen wurde, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies anzufordern.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige vom Benutzer gewählte Ziele zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Bestimmt, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugriff auf Geolokalisierung zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Kommata getrennten Liste von Richtlinien gesendet wird oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Allowlist für die übergeordnete Seite stehen. Aufgrund dieses [Vererbungsgverhaltens](/de/docs/Web/HTTP/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann den Teil der Unterstützung anzugeben, den Sie in jedem `<iframe>` benötigen.

Um allen Ursprüngen Zugriff auf Geolokalisierung zu erlauben, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung wechselt, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` wechselt. Indem der Ursprung, zu dem das `<iframe>` wechselt, im `allow`-Attribut aufgeführt wird, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig durch das Einschließen einer durch Semikolon getrennten Liste von Richtliniendirektiven im `allow`-Attribut gesteuert werden.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, dem `src`-Wert besondere Aufmerksamkeit zu schenken. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Wertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_-`Allowlist`-Wert für Funktionen, die in `allow` aufgeführt sind, sodass die folgenden äquivalent sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die Mikrofon- (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation)-APIs in seiner Anwendung deaktivieren. Dies kann mit dem folgenden Antwort-Header erreicht werden:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Indem `()` für die Ursprungsliste angegeben wird, werden die angegebenen Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) unabhängig von ihrem Ursprung deaktiviert.

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Zum Beispiel, nehmen wir an, wir möchten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebettetem Inhalt ermöglichen, der von unserem vertrauenswürdigen Werbenetzwerk stammt. Wir könnten die seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in `<iframe>` geladen wird, hätte dieser keinen Zugriff auf Geolokalisierung:

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
