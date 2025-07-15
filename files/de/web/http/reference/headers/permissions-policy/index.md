---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Response-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Features in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Für weitere Informationen lesen Sie den Hauptartikel [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Die Permissions-Policy-Direktive, auf die die `Allowlist` angewendet werden soll. Siehe [Direktiven](#direktiven) unten für eine Liste der erlaubten Direktivennamen.
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Ursprüngen (origins), die einen oder mehrere der folgenden Werte enthält, die in Klammern, durch Leerzeichen getrennt, angegeben werden:
    - `*` (Wildcard)
      - : Das Feature wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Das Feature ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`
      - : Das Feature wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) im gleichen Ursprung erlaubt. Das Feature ist in Cross-Origin-Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`
      - : Das Feature wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus dem gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _Standard_-`Allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Das Feature ist für spezifische Ursprünge erlaubt (beispielsweise `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt sein. Beachten Sie, dass Ursprünge in `<iframe>`-`allow`-Attributen nicht in Anführungszeichen gesetzt sind.

    Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-`Allowlist`, die immer `*`, `self` oder `none` für den `Permissions-Policy`-HTTP-Header ist und das Standardverhalten bestimmt, wenn sie in einer Richtlinie nicht explizit aufgeführt sind.
    > Diese sind auf den einzelnen [Direktivreferenzseiten](#direktiven) angegeben. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Permissions-Policy-Ursprüngen einfügen. Das bedeutet, dass Sie anstelle der expliziten Angabe mehrerer unterschiedlicher Subdomains in einer Allowlist, alle in einem einzigen Ursprung mit einem Wildcard angeben können.

Statt

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie spezifizieren

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle Informationen über die Beschleunigung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle Informationen über die Umgebungsbeleuchtung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Medien über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle automatisch abspielen darf. Wenn diese Richtlinie deaktiviert ist und keine Benutzeraktionen vorhanden sind, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das `autoplay`-Attribut bei {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, werden jegliche Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Videogeräte verwenden darf.
    Das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt ist.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf.
    Das von den Hauptmethoden der API zurückgegebene Promise wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt ist.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin isolated](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) des obersten Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des gemeinsamen Cross-Origin-Subframe- [`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirm-Inhalte aufzuzeichnen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn keine Berechtigung zum Aufzeichnen der Bildschirminhalte erteilt wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen, und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse werden nicht ausgeführt.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückruffunktionen der Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle Informationen über die Orientierung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu außergewöhnlichen oder exotischen Mensch-Maschine-Schnittstellengeräten herzustellen, wie alternative Tastaturen oder Gamepads.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API), und spezifischer die Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option verwenden darf. Wo diese Richtlinie die Nutzung der API verbietet, wird das von dem `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wenn Benutzer mit ihren Geräten interagieren, zum Beispiel um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Sprachenerkennungsfunktionen der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Daten zu den lokal installierten Schriften des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) sammeln darf (siehe auch [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle Informationen über die Orientierung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Audiogeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein einmaliges Passwort (One-Time Password, OTP) von einer speziell formatierten SMS-Nachricht abzurufen, die vom Server der App gesendet wird, z.B. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wird der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument ein Video im Bild-in-Bild-Modus über die entsprechende API abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte öffentliche Schlüsselanmeldeinformationen abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) gestattet, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen sollte.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Anschluss angeschlossen sind oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher zu listen und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein Dokument, das in einem Drittanbieterkontext geladen wird (z.B. in einem {{htmlelement("iframe")}} eingebettet), die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies zu beantragen.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugang zu den Übersetzungsfunktionen der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugang zur [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige vom Benutzer gewählte Ziele, z.B. mobile Apps, zu teilen.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Nutzung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet wird, oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` ein Feature aktiviert hat, muss sein erlaubter Ursprung auch in der Allowlist der übergeordneten Seite vorhanden sein. Aufgrund dieses [Vererbungsvorgangs](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es sinnvoll, die am weitesten akzeptable Unterstützung für ein Feature im HTTP-Header zu spezifizieren und dann den benötigten Unterstützungsteil in jedem `<iframe>` anzugeben.

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu gewähren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie für den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Das ist wichtig: Standardmäßig wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert, wenn ein `<iframe>` zu einem anderen Ursprung navigiert. Durch das Auflisten des Ursprungs, zu dem das `<iframe>` navigiert, im `allow`-Attribut wird die ursprünglich auf das `<iframe>` angewendete Permissions-Policy auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem eine durch Semikolon getrennte Liste von Richtliniendirektiven im `allow`-Attribut eingefügt wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den Wert `src` speziell zu erwähnen. Wir erwähnten oben, dass die Verwendung dieses Allowlist-Werts bedeutet, dass das zugeordnete Feature in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus dem gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_-`Allowlist`-Wert für die in `allow` aufgeführten Features, also sind die folgenden äquivalent:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Zugang zu leistungsfähigen Features verwehren

SecureCorp Inc. möchte das Mikrofon (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und die [`Geolocation`](/de/docs/Web/API/Geolocation) APIs in seiner Anwendung deaktivieren. Es kann dies mit dem folgenden Response-Header tun:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Indem Sie `()` für die Ursprungsliste angeben, werden die angegebenen Features für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) deaktiviert, unabhängig von ihrem Ursprung.

### Kombinieren von HTTP-Header- und `<iframe>`-Richtlinien

Angenommen, wir möchten die Nutzung der Geolocation auf unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Anzeigenetzwerk aktivieren. Wir könnten die seitenweite Permissions-Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Anzeigen-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so einstellen:

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

- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
