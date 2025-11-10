---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verbieten.

Weitere Informationen finden Sie im Hauptartikel zu [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions Policy-Direktive, auf die die `allowlist` angewendet werden soll. Siehe unten [Direktiven](#direktiven) für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthalten, getrennt durch Leerzeichen:
    - `*` (Wildcard)
      - : Die Funktion ist in diesem Dokument und allen geschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und geschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion ist in diesem Dokument und in allen geschachtelten Browsing-Kontexten (`<iframe>`s) im gleichen Ursprung erlaubt. Die Funktion ist in fremden Ursprüngen in geschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://ihr-website.beispiel.com` betrachtet werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion ist in diesem `<iframe>` erlaubt, solange das Dokument, das darin geladen wird, vom gleichen Ursprung stammt wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der Standardwert der `allowlist` in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.beispiel.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-Allow-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-`allowlist`, die immer einer der Werte `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht explizit in einer Policy aufgeführt sind.
    > Diese sind auf den einzelnen [Direktiven-Referenzseiten](#direktiven) angegeben. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Permissions Policy-Ursprüngen einschließen. Dies bedeutet, dass Sie anstelle mehrerer verschiedener Subdomains explizit in einer Allowlist zu spezifizieren, alle in einem einzigen Ursprung mit einem Wildcard angeben können.

Anstatt also

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.beispiel.com"` stimmt nicht mit `"https://beispiel.com"` überein.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Lichtmenge in der Umgebung des Geräts über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle sammeln darf.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument die [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)-Methode verwenden darf, um {{Glossary("screen_reader", "Screenreader")}}-Benachrichtigungen auszulösen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Medien, die über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle angefordert werden, automatisch abspielen darf. Wenn diese Policy deaktiviert ist und es keine Benutzerinteraktionen gab, wird das {{jsxref("Promise")}}, das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das Autoplay-Attribut auf {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Policy deaktiviert ist, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Policy die Nutzung der Topics API ausdrücklich verbietet, werden alle Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf.
    Das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt wird.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
    verwenden darf. Das von den Hauptmethoden der API zurückgegebene Versprechen wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt wird.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin isolated](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()` Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für den obersten Ursprung.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des gemeinsamen fremden Unterrahmen- [`fetchLater()` Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirm-Inhalte aufzunehmen. Wenn diese Policy deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Versprechen mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt wird, die Bildschirm-Inhalte aufzunehmen.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Policy deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Policy deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Policy deaktiviert ist, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) werfen, und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf. Wenn diese Policy deaktiviert ist, werden Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu führen, dass die Rückrufe dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) zum Anschluss an ungewöhnliche oder exotische Human Interface Devices wie alternative Tastaturen oder Gamepads verwenden darf.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, zum Beispiel, um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Spracherkennungsfunktionalität der [Übersetzer und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Daten zu den lokal installierten Schriftarten des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) sammeln darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Policy deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Policy deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Sprachverarbeitungsfunktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API#on-device_speech_recognition).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Anfrage des Servers der App anzufordern, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Policy aktiviert ist, wird der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) werfen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument erlaubt ist, ein Video im Bild-im-Bild-Modus über die entsprechende API abzuspielen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsseldaten zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte Public-Key-Credentials abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein in einem fremden Kontext geladenes Dokument (d.h. eingebettet in ein {{htmlelement("iframe")}}) die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies anzufordern.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungsfunktionalität der [Übersetzer und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument den [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele der Wahl des Benutzers zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Anzeigen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugang zu Geolocation zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugang auf eine Teilmenge von Ursprüngen zu beschränken, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet wird, oder indem für jede Richtlinie ein separater Header gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit in einem `<iframe>` eine Funktion aktiviert ist, muss der erlaubte Ursprung auch in der Allowlist der übergeordneten Seite enthalten sein. Aufgrund dieses [Vererbungssverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header festzulegen und dann das erforderliche Unterstützungsspektrum in jedem `<iframe>` zu spezifizieren.

Um allen Ursprüngen Zugang zu Geolocation zu gewähren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig gilt eine Richtlinie nicht für den Ursprung, den das `<iframe>` durch Navigation erreicht. Durch Auflistung des Ursprungs, zu dem das `<iframe>` navigiert, im `allow`-Attribut, wird die ursprünglich auf das `<iframe>` angewandte Permissions Policy auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolons getrennte Liste von Richtlinien-Direktiven im `allow`-Attribut angegeben wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src`-Wert besonders zu erwähnen. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Wertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom gleichen Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_-`allowlist`-Wert für im `allow` aufgelistete Funktionen, sodass die folgenden gleichwertig sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die Mikrofon- (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation)-APIs in seiner Anwendung deaktivieren. Dies kann mit dem folgenden Antwort-Header erfolgen:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch die Angabe von `()` für die Ursprungs-Liste werden die angegebenen Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) unabhängig von ihrem Ursprung deaktiviert.

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Zum Beispiel, nehmen wir an, dass wir die Nutzung von Geolocation auf unserem eigenen Ursprung und in eingebettetem Inhalt, der von unserem vertrauenswürdigen Werbenetzwerk stammt, aktivieren möchten. Wir könnten die seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugang zum Ursprung `https://trusted-ad-network.com` wie folgt einrichten:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung schließlich in das `<iframe>` geladen würde, hätte er keinen Zugang zu Geolocation:

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
