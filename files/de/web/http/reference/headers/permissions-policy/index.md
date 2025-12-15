---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: d424e20ffce8770d7e66ee169203a17980bd88cf
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Response-Header")}} bietet einen Mechanismus, um die Nutzung von Browserfunktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verbieten.

Für weitere Informationen, siehe den Hauptartikel zur [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions Policy-Direktive, auf die die `Allowlist` angewendet wird. Siehe [Direktiven](#direktiven) unten für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthalten kann, durch Leerzeichen getrennt:
    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>` `allow` Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) im selben Ursprung erlaubt. Die Funktion ist nicht in Cross-Origin-Dokumenten in verschachtelten Browsing-Kontexten erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>` `allow` Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus demselben Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>` `allow` Attribut verwendet und ist der _Standard_ `Allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für spezifische Ursprünge erlaubt (beispielsweise `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` Allow-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Whitelist, die immer `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten bestimmt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Direktivreferenzseiten](#direktiven) angegeben. Für `<iframe>` `allow` Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Permissions Policy-Ursprüngen einschließen. Dies bedeutet, dass Sie anstelle mehrerer unterschiedlicher Subdomains in einer Allowlist alle durch einen einzigen Ursprung mit einem Wildcard angeben können.

Anstelle von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Umgebungslichtmenge rund um das Gerät über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) Schnittstelle sammeln darf.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Methode verwenden darf, um {{Glossary("screen_reader", "Screen Reader")}} Ankündigungen auszulösen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Medien, die über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Schnittstelle angefordert werden, automatisch abspielen darf. Wenn diese Richtlinie deaktiviert ist und es keine Benutzeraktionen gab, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen. Das `autoplay`-Attribut bei {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Kontrolliert, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, geben die Methoden des von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegebenen [`Bluetooth`](/de/docs/Web/API/Bluetooth) Objekts entweder `false` zurück oder lehnen das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Kontrolliert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, wird jeder Versuch, die [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}} Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf.
    Das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Berechtigung nicht erlaubt ist.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Kontrolliert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf.
    Das von den Hauptmethoden der API zurückgegebene Versprechen wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht gewährt ist.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument als [Cross-Origin Isolated](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Kontrolliert die Zuteilung der [`fetchLater()`-Quote auf oberster Ursprungebene](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Kontrolliert die Zuteilung der gemeinsamen `fetchLater()`-Quote für Cross-Origin-Subframes](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die Erlaubnis hat, die [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Methode zu verwenden, um Bildschirminhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Versprechen mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn keine Erlaubnis zur Erfassung der Displayinhalte vorliegt.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, lehnt das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} ab.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, schlagen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) fehl, und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation) Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückrufe dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um sich mit unüblichen oder exotischen Human Interface Devices wie alternativen Tastaturen oder Gamepads zu verbinden.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Daten zu den lokal installierten Schriftarten des Benutzers über die [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)-Methode sammeln darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die [On-Device-Speech-Recognition](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)-Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, z. B. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wirft der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest)-Konstruktor einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException).

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Videos im Picture-in-Picture-Modus über die entsprechende API abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, z. B. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte Public-Key-Anmeldeinformationen abzurufen, z. B. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzugeben, dass das Gerät den Bildschirm nicht ausschalten oder dimmen sollte.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, sei es direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Kontrolliert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in ein {{htmlelement("iframe")}}) die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf unpartitionierte Cookies zu beantragen.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele der Wahl des Benutzers zu teilen, z. B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Displays zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy Header

Um allen Ursprüngen Zugang zur Geolokalisierung zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet wird oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss der erlaubte Ursprung auch in der Allowlist für die übergeordnete Seite enthalten sein. Aufgrund dieses [Vererbungverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die größte akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann die Teilmenge der Unterstützung zu spezifizieren, die Sie in jedem `<iframe>` benötigen.

Um allen Ursprüngen Zugang zur Geolokalisierung zu erlauben, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig wird die Richtlinie, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut auflisten, wird die ursprünglich auf das `<iframe>` angewendete Permissions Policy auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem eine durch Semikolon getrennte Liste von Richtliniendirektiven im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, den `src`-Wert besonders zu erwähnen. Wir erwähnten oben, dass die Verwendung dieses Allowlist-Werts bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus demselben Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Default_ `Allowlist`-Wert für die in `allow` aufgeführten Funktionen, daher sind die folgenden äquivalent:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die Mikrophone (z. B. [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) APIs in seiner Anwendung deaktivieren. Es kann dies mit dem folgenden Response-Header tun:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Indem `()` für die Ursprungslisté angegeben wird, werden die angegebenen Funktionen für alle Browsing-Kontexte (dies schließt alle `<iframe>`s ein) deaktiviert, unabhängig von ihrem Ursprung.

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Zum Beispiel, nehmen wir an, dass wir die Verwendung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten, die von unserem vertrauenswürdigen Werbenetzwerk kommen, aktivieren möchten. Wir könnten die seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com`-Ursprung so einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in das `<iframe>` geladen wird, hat es kein Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
