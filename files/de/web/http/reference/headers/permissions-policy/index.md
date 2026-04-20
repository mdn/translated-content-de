---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: a019b326a3ad0c16d78d236582927a38ccaea8b4
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Response-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Verletzungen einer Richtlinie können unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden. Berichte werden automatisch an den Server-Endpunkt namens `"default"` gesendet, wenn dieser in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header definiert ist. Berichte können auch auf der Seite beobachtet werden, für die die Richtlinie durchgesetzt wird, unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver). Das Format des Berichts und weitere Details sind in [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) beschrieben.

Für weitere Informationen, sehen Sie den Hauptartikel zur [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions-Policy-Direktive, auf die die `allowlist` angewandt werden soll. Siehe unten [Direktiven](#direktiven) für eine Liste der zulässigen Direktivnamen.
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthalten und durch Leerzeichen getrennt sind:
    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen geschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und geschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen geschachtelten Browsing-Kontexten (`<iframe>`s) mit demselben Ursprung erlaubt. Die Funktion ist in Fremd-Ursprung-Dokumenten in geschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das hinein geladene Dokument aus demselben Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _Standard_ `allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für spezifische Ursprünge erlaubt (zum Beispiel: `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-`allow`-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden dürfen.

    > [!NOTE]
    > Direktiven haben eine Standard-allowlist, die immer eine von `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Direktivreferenzseiten](#direktiven) spezifiziert. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Permissions-Policy-Ursprüngen verwenden. Dies bedeutet, dass Sie nicht mehrere verschiedene Subdomains explizit in einer Allowlist angeben müssen, sondern alle in einem einzelnen Ursprung mit einem Platzhalter spezifizieren können.

Anstatt also:

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie spezifizieren:

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über das [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Interface sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Lichtmenge in der Umgebung des Geräts über das [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Interface sammeln darf.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)-Methode verwenden darf, um {{Glossary("screen_reader", "Screenreader")}}-Ankündigungen auszulösen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}}
  - : Steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Medien automatisch abspielen darf, welche über das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface angefordert werden. Wenn diese Richtlinie deaktiviert ist und keine Nutzerinteraktionen stattgefunden haben, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen. Das Autoplay-Attribut bei {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückweisen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Richtlinie die Verwendung der Topics API ausdrücklich untersagt, werden alle Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf. Das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, wenn die Berechtigung nicht erlaubt ist.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf. Das von den Hauptmethoden der API zurückgegebene Promise wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, wenn die Berechtigung nicht erlaubt ist.

- {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwenden darf, um hoch-Genauigkeits-Benutzeragenten-Daten abzurufen. Wenn die Berechtigung nicht erlaubt ist, wird die Methode nur die `brands`, `mobile` und `platform` niedrig-Genauigkeit-Daten zurückgeben.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin isolated](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) des obersten Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des gemeinsamen cross-origin-Unterrahmen-[`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirminhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, wenn keine Erlaubnis zur Erfassung der Bildschirm-Inhalte erteilt wurde.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, lehnt das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} ab.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, werden Anrufe an [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen, und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation)-Oberfläche verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Anrufe an [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückruf-Funktionen dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über das [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Interface sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu ungewöhnlichen oder exotischen Eingabegeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, zum Beispiel um "verfügbar"/"abwesend"-Status in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Daten über die lokal auf dem Benutzercomputer installierten Schriftarten über die [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)-Methode sammeln darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über das [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Interface sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Audio-Eingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [on-device speech recognition](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)-Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalpasswort (OTP) von einer speziell formatierten SMS-Nachricht anzufordern, die von dem Server der App gesendet wird, wie zum Beispiel über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest)-Konstruktor einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument ein Video im Picture-in-Picture-Modus über die entsprechende API abspielen darf.

- {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : Steuert die Nutzung von [private state token](/de/docs/Web/API/Private_State_Token_API)-`token-request`-Operationen.

- {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : Steuert die Nutzung von [private state token](/de/docs/Web/API/Private_State_Token_API)-`token-redemption`- und `send-redemption-record`-Operationen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrischen Schlüsselanmeldeinformationen zu erstellen, zum Beispiel über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte Public-Key-Anmeldeinformationen abzurufen, zum Beispiel über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzugeben, dass das Gerät den Bildschirm nicht ausschalten oder abdunkeln soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Anschluss verbunden sind oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher zu listen und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in ein {{htmlelement("iframe")}}) die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugang zu nicht partitionierten Cookies anzufordern.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige Ziele nach Wahl des Benutzers zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Nutzung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Auswahl von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer durch Kommata getrennten Liste von Richtlinien gesendet wird, oder indem für jede Richtlinie ein separater Header gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss auch der erlaubte Ursprung in der Allowlist für die übergeordnete Seite enthalten sein. Aufgrund dieses [Vererbungsverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die weitestgehende akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann die Teilmenge der Unterstützung, die Sie in jedem `<iframe>` benötigen, zu spezifizieren.

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu erlauben, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Das ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut auflisten, wird die Permissions-Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auch auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem eine durch Semikolons getrennte Liste von Richtliniendirektiven im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist wert, dem `src`-Wert besondere Erwähnung zu geben. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Wertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das hineingeladene Dokument aus demselben Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert ist der _Standard_ `allowlist`-Wert für in `allow` aufgeführte Funktionen, daher sind die folgenden gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die APIs für Mikrofon (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) in seiner Anwendung deaktivieren. Es kann dies mit dem folgenden Response-Header tun:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Indem `()` für die Ursprungs-Liste angegeben wird, werden die angegebenen Funktionen für alle Browsing-Kontexte deaktiviert (dies schließt alle `<iframe>`s ein), unabhängig von ihrem Ursprung.

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Lassen Sie uns zum Beispiel sagen, dass wir die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Werbenetzwerk aktivieren möchten. Wir könnten die seitenweite Permissions-Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Ad-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com`-Ursprung so einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in `<iframe>` geladen würde, hätte er keinen Zugriff auf Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

### Verletzungen melden

Dieses Beispiel zeigt, wie die Meldung von Verletzungen der Permissions-Policy an einen Server-Endpunkt konfiguriert wird.

Die untenstehenden Response-Header blockieren die Geolokalisierung und definieren einen [`"default"`-Meldung-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) unter Verwendung des {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Headers. Berichte über Verletzungen der Permissions-Policy werden automatisch an diesen Endpunkt gesendet.

```http
Reporting-Endpoints: default="https://example.com/reports"
Permissions-Policy: geolocation=()
```

Eine Verletzung tritt auf, wenn eine Seite versucht, die blockierte Funktion zu verwenden, zum Beispiel:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Die an den Endpunkt gesendete [Berichtsnutzlast](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte so aussehen:

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "enforce",
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "featureId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

> [!NOTE]
> Chrome's serverseitige Serialisierung von Verletzungsberichten verwendet `policyId` anstelle von [`featureId`](/de/docs/Web/API/PermissionsPolicyViolationReport#featureid) als Funktionsnamen im `body` eines Serverberichts.
> Das von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegebene [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) folgt der Spezifikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [Reporting API](/de/docs/Web/API/Reporting_API)
