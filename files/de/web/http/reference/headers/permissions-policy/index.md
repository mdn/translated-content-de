---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browserfunktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Für weitere Informationen siehe den Hauptartikel [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions Policy-Direktive, auf die die `Allowlist` angewendet werden soll. Eine Liste der erlaubten Direktivennamen finden Sie unter [Direktiven](#direktiven) unten.
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern, getrennt durch Leerzeichen, enthalten kann:
    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in Ober- und untergeordneten Browsing-Kontexten deaktiviert. Das Äquivalent zu `<iframe>`-Attributen `allow` ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im gleichen Ursprung erlaubt. Die Funktion ist in cross-origin Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent zu `<iframe>`-Attributen `allow` ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut kommt. Dieser Wert wird nur im `<iframe>`-Attribut `allow` verwendet und ist der _default_ `Allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für spezifische Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-Attributen nicht in Anführungszeichen gesetzt werden.

    Die Werte `*` und `()` dürfen nur einzeln verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden dürfen.

    > [!NOTE]
    > Direktiven haben eine standardmäßige Allowlist, die immer einer der Werte `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten bestimmt, wenn sie in einer Richtlinie nicht explizit aufgeführt sind.
    > Diese sind auf den individuellen [Direktiven-Referenzseiten](#direktiven) spezifiziert. Für `<iframe>`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Permissions Policy-Ursprüngen einfügen. Dies bedeutet, dass Sie anstelle mehrerer explizit angegebener Subdomains in einer Allowlist alle in einem einzigen Ursprung mit einem Wildcard angeben können.

Anstatt also

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` stimmt nicht überein mit `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument durch die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle Informationen über die Beschleunigung des Geräts sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument durch die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle Informationen über die Umgebungshelligkeit des Geräts sammeln darf.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die Methode [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) verwenden darf, um {{Glossary("screen_reader", "Screen Reader")}} Ankündigungen auszulösen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Medien-Inhalte, die über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle angefordert werden, automatisch abspielen darf. Wenn diese Richtlinie deaktiviert ist und keine Benutzerinteraktionen erfolgten, wird der von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückweisen. Das Autoplay-Attribut in {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Kontrolliert, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, geben die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurück oder lehnen den zurückgegebenen {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Kontrolliert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Nutzung der Topics API spezifisch unzulässig macht, schlagen alle Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument Video-Eingabegeräte verwenden darf.
    Der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, wenn die Berechtigung nicht erteilt wird.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Kontrolliert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) nutzen darf.
    Das von den Hauptmethoden der API zurückgegebene Promise wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, wenn die Berechtigung nicht erteilt wird.

- {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{experimental_inline}}
  - : Kontrolliert, ob das Dokument die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwenden darf, um hochentropische User-Agent-Daten abzurufen.
    Wenn die Berechtigung nicht erteilt wird, gibt die Methode nur die niedrig entropischen Daten `brands`, `mobile` und `platform` zurück.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument als [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Kontrolliert die Zuweisung des [`fetchLater()` Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) des obersten Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Kontrolliert die Zuweisung des gemeinsamen, cross-origin Subframe [`fetchLater()` Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirminhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, wenn keine Berechtigung zur Erfassung der Anzeigedaten erhalten wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird der von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} zurückgewiesen.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation) Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, bewirken Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), dass die Rückrufe dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts durch die [`Gyroscope`](/de/docs/Web/API/Gyroscope) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um sich mit ungewöhnlichen oder exotischen Mensch-Maschine-Schnittstellengeräten wie alternativen Tastaturen oder Gamepads zu verbinden.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, zum Beispiel um in Chat-Anwendungen einen "verfügbar"/"abwesend"-Status zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)) sammeln darf.

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts durch die [`Magnetometer`](/de/docs/Web/API/Magnetometer) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument Audio-Eingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird der von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird der von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die [On-Device-Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, z.B. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wird der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument ein Video im Picture-in-Picture-Modus über die entsprechende API abspielen darf.

- {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : Kontrolliert die Nutzung von [Private State Token](/de/docs/Web/API/Private_State_Token_API) `token-request`-Operationen.

- {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : Kontrolliert die Nutzung von [Private State Token](/de/docs/Web/API/Private_State_Token_API) `token-redemption` und `send-redemption-record`-Operationen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte Anmeldeinformationen für öffentliche Schlüssel abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder abdunkeln soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, entweder direkt via einem seriellen Port oder über USB- oder Bluetooth-Geräte, die einen seriellen Port emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Kontrolliert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in einem {{htmlelement("iframe")}}) die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf unpartitionierte Cookies zu beantragen.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele der Wahl des Benutzers zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Nutzung

#### `Permissions-Policy`-Header

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugang auf eine Teilmenge von Ursprüngen zu beschränken, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer kommagetrennten Liste von Richtlinien gesendet wird, oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit eine Funktion in einem `<iframe>` aktiviert ist, muss auch das erlaubte Ursprung in der Allowlist der übergeordneten Seite sein. Aufgrund dieses [Vererbungseffekts](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die weitest akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann das erforderliche Unterstützungsspektrum in jedem `<iframe>` zu spezifizieren.

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

Dies ist wichtig: Standardmäßig wird eine Richtlinie nicht auf den Ursprung angewendet, zu dem ein `<iframe>` navigiert, wenn es zu einem anderen Ursprung navigiert. Indem der Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut aufgeführt ist, wird die auf das ursprüngliche `<iframe>` angewendete Permissions Policy auch auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolon getrennte Liste von Richtliniendirektiven im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Ein besonderer Hinweis gilt dem `src`-Wert. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Wertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladen Dokument aus demselben Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _default_ `Allowlist`-Wert für Funktionen, die in `allow` aufgeführt sind, so dass die folgenden äquivalent sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugang zu leistungsstarken Funktionen verweigern

SecureCorp Inc. möchte die APIs für Mikrofon (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) in ihrer Anwendung deaktivieren. Dies kann mit folgendem Antwort-Header erfolgen:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch Angabe von `()` für die Ursprungsliste werden die angegebenen Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) deaktiviert, unabhängig von ihrem Ursprung.

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Angenommen, wir möchten die Nutzung der Geolokalisierungsfunktion auf unserem eigenen Ursprung und in eingebetteten Inhalten, die von unserem vertrauenswürdigen Werbenetzwerk stammen, aktivieren. Wir könnten die seitweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` wie folgt einrichten:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn in das `<iframe>` ein anderer Ursprung geladen wird, hätte er keinen Zugriff auf die Geolokalisierung:

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
