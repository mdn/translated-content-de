---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Weitere Informationen finden Sie im Hauptartikel zur [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

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
  - : Die Permissions-Policy-Direktive, auf die die `allowlist` angewendet werden soll. Weitere Informationen finden Sie unter [Directives](#direktiven) unten für eine Liste der zugelassenen Direktivnamen.
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthält, getrennt durch Leerzeichen:
    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen geschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und geschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen geschachtelten Browsing-Kontexten (`<iframe>`s) im selben Ursprung erlaubt. Die Funktion ist in fremden Dokumenten in geschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _default_ `allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-Allow-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Allowlist, die immer einer von `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist, und die das Standardverhalten regelt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Richtlinien-Referenzseiten](#direktiven) angegeben. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Permissions-Policy-Ursprüngen einschließen. Das bedeutet, dass Sie anstatt mehrerer verschiedener Subdomains explizit in einer Allowlist anzugeben, alle in einem einzigen Ursprung mit Wildcard angeben können.

Stattdessen:

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie angeben:

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Lichtmenge in der Umgebung des Geräts mithilfe der [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle zu sammeln.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)-Methode zu verwenden, um {{Glossary("screen_reader", "Screenreader")}}-Ankündigungen auszulösen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) erlaubt ist.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Medien abzuspielen, die über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle angefordert werden. Wenn diese Richtlinie deaktiviert ist und keine Nutzerinteraktionen vorliegen, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das Autoplay-Attribut auf {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Nutzung der Topics API ausdrücklich untersagt, schlagen alle Versuche, die [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)-Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung von Videoeingabegeräten erlaubt ist.
    Das {{jsxref("Promise")}}, das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt wurde.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf.
    Das von den Hauptmethoden der API zurückgegebene Versprechen wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt wurde.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin isolated](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für den obersten Ursprung.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des geteilten fremd-originären Unterrahmen- [`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Methode zur Aufnahme von Bildschirm-Inhalten gestattet ist. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Versprechen mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn keine Berechtigung zur Erfassung des Bildschirminhalts erteilt wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) zu verwenden. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [Gamepad API](/de/docs/Web/API/Gamepad_API) zu verwenden.
    Wenn diese Richtlinie deaktiviert ist, werden Anrufe an [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignisse werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle zu verwenden. Wenn diese Richtlinie deaktiviert ist, führen Anrufe an [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückruf-Funktionen dieser Methoden mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Ausrichtung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [WebHID API](/de/docs/Web/API/WebHID_API) zu verwenden, um sich mit ungewöhnlichen oder exotischen Human Interface Devices, wie alternativen Tastaturen oder Gamepads, zu verbinden.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) erlaubt ist.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) zum Erkennen von Benutzerinteraktionen mit ihren Geräten, z. B. um den "verfügbar"/"abwesend"-Status in Chat-Anwendungen zu melden, erlaubt ist.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Daten über die lokal installierten Schriften des Benutzers über die [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)-Methode zu sammeln (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Ausrichtung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Audioeingabegeräte zu verwenden. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) zu verwenden. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [On-Device-Speech-Recognition-Funktionalität](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [WebOTP API](/de/docs/Web/API/WebOTP_API) erlaubt ist, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, z. B. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) erlaubt ist. Wenn diese Richtlinie aktiviert ist, löst der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest)-Konstruktor einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) aus.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, ein Video über die entsprechende API im Bild-in-Bild-Modus abzuspielen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu verwenden, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, z. B. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu verwenden, um bereits gespeicherte öffentliche Schlüsselanmeldeinformationen abzurufen, z. B. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) zu verwenden, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen sollte.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [Web Serial API](/de/docs/Web/API/Web_Serial_API) erlaubt ist, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren, angeschlossen sind.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) zum Auflisten und Auswählen von Lautsprechern erlaubt ist.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob einem Dokument, das in einem Drittanbieter-Kontext geladen wird (d.h. eingebettet in ein {{htmlelement("iframe")}}), die Nutzung der [Storage Access API](/de/docs/Web/API/Storage_Access_API) erlaubt ist, um Zugriff auf nicht partitionierte Cookies zu beantragen.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Nutzung der [WebUSB API](/de/docs/Web/API/WebUSB_API) erlaubt ist.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) zu verwenden, um Text, Links, Bilder und andere Inhalte an beliebige Ziele zu übermitteln, die der Benutzer wählt, z. B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [Window Management API](/de/docs/Web/API/Window_Management_API) zu verwenden, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zu verwenden, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugang zur Geolokalisierung zu gewähren, könnten Sie Folgendes tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugang auf eine Teilmenge von Ursprüngen zu erlauben, könnten Sie Folgendes tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem man den Header mit einer durch Kommas getrennten Liste von Richtlinien sendet oder indem man für jede Richtlinie einen separaten Header sendet.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss sein zugelassener Ursprung auch in der Allowlist für die übergeordnete Seite sein. Aufgrund dieses [Vererbungsverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die größtmögliche Unterstützung für eine Funktion im HTTP-Header zu spezifizieren und dann die Teilmenge der Unterstützung anzugeben, die Sie in jedem `<iframe>` benötigen.

Um allen Ursprüngen Zugang zur Geolokalisierung zu gewähren, könnten Sie Folgendes tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, könnten Sie Folgendes tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert, wenn ein `<iframe>` zu einem anderen Ursprung navigiert. Durch die Auflistung des Ursprungs, zu dem das `<iframe>` navigiert, im `allow`-Attribut, wird die ursprünglich auf das `<iframe>` angewendete Berechtigungsrichtlinie auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolons getrennte Liste von Richtlinien-Direktiven innerhalb des `allow`-Attributs eingeschlossen wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src`-Wert besonders hervorzuheben. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Werts bedeutet, dass die zugeordnete Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom selben Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert ist der _default_ `allowlist`-Wert für im `allow` aufgelistete Funktionen, daher sind die folgenden gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Den Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die Mikrofon- (z. B. [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation)-APIs in ihrer Anwendung deaktivieren. Dies kann mit folgendem Antwort-Header erfolgen:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch das Angeben von `()` für die Ursprungs-Liste werden die angegebenen Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) unabhängig von ihrem Ursprung deaktiviert.

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Nehmen wir an, wir möchten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten unseres vertrauenswürdigen Werbenetzwerks ermöglichen. Wir könnten die seitenweite Berechtigungsrichtlinie wie folgt einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` wie folgt einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung im `<iframe>` geladen wird, hätte er keinen Zugriff auf die Geolokalisierung:

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
